import React, { useState } from 'react';
import { quizData } from './quizData';
import type { Question } from './quizData'; 

// Импортируем чистый katex и его стили
import katex from 'katex';
import 'katex/dist/katex.min.css';

// Котики для плашек выбора
import catFight from '../assets/images/cats/cat_fight.webp';

type QuizStep = 'START' | 'PLAYING' | 'RESULT';

// Компонент для формул по центру (вместо BlockMath)
const SafeBlockMath: React.FC<{ math: string }> = ({ math }) => {
  const html = katex.renderToString(math, { displayMode: true, throwOnError: false });
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

// Компонент для формул внутри строк/кнопок (вместо InlineMath)
const SafeInlineMath: React.FC<{ math: string }> = ({ math }) => {
  const html = katex.renderToString(math, { displayMode: false, throwOnError: false });
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
};

export const QuizBlock: React.FC = () => {
  const [step, setStep] = useState<QuizStep>('START');
  const [selectedType, setSelectedType] = useState<'OGE' | 'EGE' | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState<number>(0);

  const startQuiz = (type: 'OGE' | 'EGE') => {
    setSelectedType(type);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setStep('PLAYING');
  };

  const currentQuiz = selectedType ? quizData[selectedType] : null;
  const currentQuestion: Question | null = currentQuiz ? currentQuiz.questions[currentQuestionIndex] : null;

  const handleAnswerSelect = (index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    if (currentQuestion && index === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (!currentQuiz) return;
    if (currentQuestionIndex + 1 < currentQuiz.questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      setStep('RESULT');
    }
  };

  const resetQuiz = () => {
    setStep('START');
    setSelectedType(null);
  };

  return (
    <section className="relative w-full bg-white py-20 lg:py-28 overflow-hidden select-none px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="absolute inset-0 z-0 bg-[#D4EC5B] transform skew-y-0 scale-x-110 h-[20%] my-auto -top-150 md:-top-80 pointer-events-none"/>
      
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Заголовок */}
        <div className="w-full text-start mb-12">
          <h2 className="font-['Unbounded'] font-black text-4xl md:text-5xl text-black uppercase tracking-tight">
            Проверь свой уровень знания математики за 5 минут
          </h2>
        </div>

        {/* --- ЭКРАН 1: ВЫБОР --- */}
        {step === 'START' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mt-4">
            <div onClick={() => startQuiz('OGE')} className="group relative bg-[#163060] border-[3px] border-[#D4EC5B]/40 hover:border-[#D4EC5B] rounded-[28px] p-8 flex flex-col justify-between cursor-pointer shadow-xl transition-all duration-300 min-h-[240px] overflow-hidden">
              <div>
                <span className="bg-[#D4EC5B] text-black font-['Montserrat'] font-bold text-xs uppercase px-3 py-1 rounded-full">Мини-тест</span>
                <h3 className="font-['Unbounded'] font-black text-3xl text-white uppercase tracking-tight mt-4">Пройти<br />тест<br />ОГЭ</h3>
              </div>
              <div className="mt-6 text-sm text-white/70 group-hover:text-white flex items-center gap-2">Начать тестирование →</div>
              <img src={catFight} alt="Кот ОГЭ" className="absolute right-0 bottom-0 w-[35%] opacity-40 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
            </div>

            <div onClick={() => startQuiz('EGE')} className="group relative bg-[#D4EC5B] border-[3px] border-transparent hover:border-[#0C1931] rounded-[28px] p-8 flex flex-col justify-between cursor-pointer shadow-xl transition-all duration-300 min-h-[240px] overflow-hidden">
              <div>
                <span className="bg-[#163060] text-white font-['Montserrat'] font-bold text-xs uppercase px-3 py-1 rounded-full">Мини-тест</span>
                <h3 className="font-['Unbounded'] font-black text-3xl text-black uppercase tracking-tight mt-4">Пройти<br />тест<br />ЕГЭ</h3>
              </div>
              <div className="mt-6 text-sm text-[#163060]/70 group-hover:text-[#163060] flex items-center gap-2">Начать тестирование →</div>
              <img src={catFight} alt="Кот ЕГЭ" className="absolute right-0 bottom-0 w-[38%] opacity-40 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
            </div>
          </div>
        )}

        {/* --- ЭКРАН 2: ТЕСТ --- */}
        {step === 'PLAYING' && currentQuiz && currentQuestion && (
          <div className="w-full max-w-3xl bg-[#163060] border-2 border-[#D4EC5B]/30 rounded-[28px] p-6 sm:p-10 shadow-2xl">
            
            <div className="w-full flex items-center justify-between mb-6">
              <span className="font-['Montserrat'] text-xs text-white/50">Вопрос {currentQuestionIndex + 1} из {currentQuiz.questions.length}</span>
              <span className="font-['Montserrat'] font-bold text-xs text-[#D4EC5B] uppercase bg-[#D4EC5B]/10 px-3 py-1 rounded-md">{currentQuiz.title}</span>
            </div>
            
            <div className="w-full h-1.5 bg-white/10 rounded-full mb-8 overflow-hidden">
              <div className="h-full bg-[#D4EC5B] transition-all duration-300" style={{ width: `${((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100}%` }} />
            </div>

            {/* Рендеринг текста вопроса */}
            <div className="font-['Montserrat'] text-lg sm:text-xl text-white mb-6 leading-relaxed">
              <p>{currentQuestion.text}</p>
              
              {/* Исправлено: рендерим через кастомный SafeBlockMath */}
              {currentQuestion.mathFormula && (
                <div className="my-4 py-2 bg-white/5 rounded-xl text-[#D4EC5B] overflow-x-auto text-xl text-center">
                  <SafeBlockMath math={currentQuestion.mathFormula} />
                </div>
              )}
            </div>

            {/* Варианты ответов */}
            <div className="grid grid-cols-1 gap-3.5">
              {currentQuestion.options.map((option, index) => {
                const letter = String.fromCharCode(65 + index);
                
                let optionStyle = "border-white/10 bg-white/5 text-white hover:bg-white/10";
                if (selectedAnswer !== null) {
                  if (index === currentQuestion.correctAnswer) {
                    optionStyle = "border-emerald-500 bg-emerald-500/20 text-emerald-300";
                  } else if (index === selectedAnswer) {
                    optionStyle = "border-rose-500 bg-rose-500/20 text-rose-300";
                  } else {
                    optionStyle = "border-white/5 bg-white/5 opacity-40 text-white/60";
                  }
                }

                return (
                  <button
                    key={index}
                    disabled={selectedAnswer !== null}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full text-left font-['Montserrat'] font-medium text-base p-4 border-2 rounded-xl transition-all duration-200 flex items-center gap-4 ${optionStyle}`}
                  >
                    <span className={`w-7 h-7 flex items-center justify-center rounded-lg text-xs font-bold shrink-0 ${
                      selectedAnswer === index ? 'bg-[#D4EC5B] text-black' : 'bg-white/10 text-white'
                    }`}>
                      {letter}
                    </span>
                    
                    {/* Исправлено: рендерим через кастомный SafeInlineMath */}
                    <div className="overflow-x-auto flex items-center py-1">
                      {currentQuestion.isMathOptions ? (
                        <SafeInlineMath math={option} />
                      ) : (
                        <span>{option}</span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 flex justify-end min-h-[48px]">
              {selectedAnswer !== null && (
                <button onClick={handleNext} className="font-['Montserrat'] font-bold text-sm text-black bg-[#D4EC5B] px-8 py-3 rounded-full hover:bg-white transition-colors duration-200">
                  {currentQuestionIndex + 1 === currentQuiz.questions.length ? 'Посмотреть результат' : 'Дальше →'}
                </button>
              )}
            </div>

          </div>
        )}

        {/* --- ЭКРАН 3: РЕЗУЛЬТАТЫ С ПРЯМЫМ СКАЧИВАНИЕМ PDF --- */}
        {step === 'RESULT' && currentQuiz && (
          <div className="w-full max-w-2xl bg-[#163060] border-[3px] border-[#D4EC5B] rounded-[32px] p-8 sm:p-12 text-center shadow-2xl">
            <h3 className="font-['Unbounded'] font-black text-2xl sm:text-4xl text-white uppercase tracking-tight mb-2">Тест завершен!</h3>
            
            <div className="font-['Montserrat'] text-lg text-white/80 mt-4 mb-8">
              Твой результат: <span className="text-[#D4EC5B] font-black text-3xl mx-1">{score}</span> из {currentQuiz.questions.length} баллов.
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 mb-8 text-left max-w-md mx-auto">
              <p className="font-['Montserrat'] text-sm text-white font-semibold mb-1">Твой бонус за прохождение:</p>
              <p className="font-['Montserrat'] text-xs sm:text-sm text-white/60 leading-relaxed">
                Пошаговый PDF-план для подготовки к {selectedType === 'OGE' ? 'ОГЭ' : 'ЕГЭ'} на максимум баллов.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <a
                href={currentQuiz.pdfUrl}
                download
                className="w-full font-['Montserrat'] font-bold text-sm text-black bg-[#D4EC5B] py-4 rounded-full hover:bg-[#B6D139] transition-all text-center shadow-lg block"
              >
                Скачать план подготовки (PDF)
              </a>
              <button
                onClick={resetQuiz}
                className="w-full font-['Montserrat'] font-medium text-sm text-white/60 hover:text-white py-3 transition-colors text-center"
              >
                Пройти заново
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};