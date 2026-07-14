import React, { useState, useEffect, useRef } from 'react';

// Импорты ассетов
import catAboutMe from '../assets/images/cats/catAboutMe.webp';
import kirillPhoto from '../assets/images/photo/PhotoMe.webp';

export const AboutMe: React.FC = () => {
  const [isAnimate, setIsAnimate] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAnimate(true);
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      {
        threshold: 0.15, // Анимация заголовка сработает при появлении верхушки секции
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef} // Привязываем реф для отслеживания скролла
      className="relative w-full bg-white py-20 lg:py-28 overflow-hidden select-none px-4 sm:px-8 md:px-16 lg:px-24"
    >
      
      {/* 1. Декоративные наклонные лаймовые полосы на фоне */}
      <div className="hidden md:flex absolute inset-0 z-0 flex-col justify-center items-center pointer-events-none mix-blend-multiply opacity-90">
        <div className="absolute inset-0 z-0 bg-[#D4EC5B] transform -skew-y-10 origin-center scale-x-110 h-[15%] my-auto top-12 pointer-events-none"/>
        <div className="absolute inset-0 z-0 bg-[#D4EC5B] transform skew-y-20 origin-center scale-x-110 h-[15%] my-auto top-12 pointer-events-none"/>
      </div>
      
      <div className="block md:hidden absolute inset-0 z-0 bg-[#D4EC5B] transform skew-y-10 scale-x-110 h-[10%] my-auto -top-170 pointer-events-none"/>
      <div className="block md:hidden absolute inset-0 z-0 bg-[#D4EC5B] transform skew-y-10 -scale-x-110 h-[10%] my-auto top-150 pointer-events-none"/>
      
      {/* Основной контейнер контента */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Заголовок блока с ленивой плавной анимацией вылета */}
        <h2 className="font-['Unbounded'] font-black text-6xl md:text-8xl lg:text-9xl text-black uppercase tracking-tight mb-10 relative w-full flex justify-start gap-8 md:justify-between max-w-7xl overflow-hidden">
          <span 
            className={`block transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
                       ${isAnimate ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-16 blur-[4px]'}`}
          >
            ОБО
          </span>
          <span 
            className={`block transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-100
                       ${isAnimate ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-16 blur-[4px]'}`}
          >
            МНЕ
          </span>
        </h2>

        {/* --- ВЕРХНИЙ РЯД: Главная карточка приветствия --- */}
        <div className="hidden md:flex relative w-full max-w-7xl bg-[#163060] border-5 border-[#D4EC5B] rounded-[30px] p-8 md:p-12 mb-6 shadow-xl flex-col sm:flex-row justify-between items-center sm:items-start min-h-[180px] text-center sm:text-left">
          
          <div className="z-10 font-['Montserrat'] text-2xl md:text-3xl text-white font-medium leading-snug max-w-[200px] mb-6 sm:mb-0">
            Всем <br /> Привет!
          </div>

          <div className="absolute left-1/2 -bottom-40 transform -translate-x-1/2 w-[75%] max-w-[340px] md:max-w-[750px] z-10 pointer-events-none translate-y-[8px]">
            <img 
              src={catAboutMe} 
              alt="Котенок на пресс-конференции" 
              className="w-full h-auto block object-contain object-bottom"
            />
          </div>

          <div className="z-10 font-['Montserrat'] text-2xl md:text-3xl text-white font-medium leading-snug max-w-[200px] sm:text-right">
            Я — <br /> <span className="font-bold">Кирилл</span>
          </div>

        </div>

        {/* ================= МОБИЛЬНАЯ ВЕРСИЯ (до md) ================= */}
        <div className="relative w-full block md:hidden bg-[#163060] border-5 border-[#D4EC5B] rounded-[30px] shadow-xl overflow-hidden mb-6">
          <div className="relative w-full h-[400px] sm:h-[500px]">
            <img 
              src={kirillPhoto} 
              alt="Репетитор Кирилл" 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[280px] sm:w-[340px] h-auto object-contain object-bottom select-none pointer-events-none z-10"
            />

            {/* Нижняя плашка */}
            <div className="absolute bottom-4 left-4 right-4 bg-[#163060] border-3 border-[#D4EC5B] rounded-[20px] p-4 text-left z-20">
              <p className="font-['Montserrat'] text-white text-base sm:text-lg leading-snug">
                Я — <span className="font-['Unbounded'] font-bold text-[#D4EC5B]">Кирилл</span>, <br />
                репетитор по математике!
              </p>
            </div>
          </div>
        </div>
        

        {/* --- НИЖНИЙ РЯД: Четыре карточки с фактами (ДОБАВЛЕН ХОВЕР-ЭФФЕКТ) --- */}
        {/* К каждой плашке добавлены классы: transition-all duration-300 ease-out hover:scale-[1.03] hover:-translate-y-1 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full max-w-7xl z-20">

          {/* Карточка 1: Стаж */}
          <div className="bg-[#163060] border-5 border-[#D4EC5B] rounded-[30px] p-4 sm:p-6 flex flex-col justify-between min-h-[150px] sm:min-h-[160px]
                          transition-all duration-300 ease-out hover:scale-[1.03] hover:-translate-y-1 will-change-transform cursor-default">
            <div>
              <div className="font-['Unbounded'] font-black text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-white tracking-tight">&gt;5</div>
              <div className="font-['Unbounded'] font-bold text-base sm:text-lg lg:text-xl xl:text-xl text-white uppercase tracking-wide mt-1">лет</div>
            </div>
            <div className="font-['Montserrat'] text-xs sm:text-sm xl:text-base text-white font-light mt-4">опыта преподавания</div>
          </div>

          {/* Карточка 2: Ученики */}
          <div className="bg-[#163060] border-5 border-[#D4EC5B] rounded-[30px] p-4 sm:p-6 flex flex-col justify-between min-h-[150px] sm:min-h-[160px]
                          transition-all duration-300 ease-out hover:scale-[1.03] hover:-translate-y-1 will-change-transform cursor-default">
            <div>
              <div className="font-['Unbounded'] font-black text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-white tracking-tight">&gt;230</div>
              <div className="font-['Unbounded'] font-bold text-base sm:text-lg lg:text-xl xl:text-xl text-white uppercase tracking-wide mt-1">учеников</div>
            </div>
            <div className="font-['Montserrat'] text-xs sm:text-sm xl:text-base text-white font-light mt-4">поступили в вузы мечты</div>
          </div>

          {/* Карточка 3: Баллы */}
          <div className="bg-[#163060] border-5 border-[#D4EC5B] rounded-[30px] p-4 sm:p-6 flex flex-col justify-between min-h-[150px] sm:min-h-[160px]
                          transition-all duration-300 ease-out hover:scale-[1.03] hover:-translate-y-1 will-change-transform cursor-default">
            <div>
              <div className="font-['Unbounded'] font-bold text-xs sm:text-base lg:text-xl xl:text-xl text-white uppercase tracking-wide">На</div>
              <div className="font-['Unbounded'] font-black text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-white tracking-tight -mt-1">80+</div>
              <div className="font-['Unbounded'] font-bold text-base sm:text-lg lg:text-base xl:text-xl text-white uppercase tracking-wide">баллов</div>
            </div>
            <div className="font-['Montserrat'] text-xs sm:text-sm xl:text-base text-white font-light mt-4">Сдают ЕГЭ 75% учеников</div>
          </div>

          {/* Карточка 4: Результат ОГЭ */}
          <div className="bg-[#163060] border-5 border-[#D4EC5B] rounded-[30px] p-4 sm:p-6 flex flex-col justify-center min-h-[150px] sm:min-h-[160px] shadow-lg text-left
                          transition-all duration-300 ease-out hover:scale-[1.03] hover:-translate-y-1 will-change-transform cursor-default">
            <p className="font-['Montserrat'] font-light text-sm sm:text-base lg:text-xl xl:text-xl text-white leading-relaxed">
              Ни одной тройки на <span className="font-light text-[#D4EC5B]">ОГЭ</span> среди моих учеников
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};