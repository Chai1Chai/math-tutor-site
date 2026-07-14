import React, { useState, useEffect, useRef } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "КАКОЙ РЕЗУЛЬТАТ МОЖНО ОЖИДАТЬ?",
    answer: "За последние годы более 230 учеников поступили в желаемые вузы. Среди моих учеников не было троек на ОГЭ, а около 75% выпускников ЕГЭ набирают 80+ баллов."
  },
  {
    question: "ЕСЛИ ЗНАНИЯ СЕЙЧАС СЛАБЫЕ, ЕСТЬ СМЫСЛ НАЧИНАТЬ?",
    answer: "Конечно. Подготовку можно начать практически с любого уровня. Главное — заниматься системно. Для каждого ученика составляется индивидуальный план."
  },
  {
    question: "ЧЕМ ВЫ ОТЛИЧАЕТЕСЬ ОТ ДРУГИХ РЕПЕТИТОРОВ?",
    answer: "Я не просто объясняю темы, а выстраиваю систему подготовки. Ученики понимают математику, а не заучивают решения. Постоянно отслеживаю изменения экзаменов и сопровождаю до самого поступления."
  },
  {
    question: "КАК ПРОХОДИТ ПЕРВАЯ ВСТРЕЧА?",
    answer: "На консультации познакомимся, определим уровень знаний, обсудим цели, расскажу, как проходит обучение, и составим план подготовки."
  },
  {
    question: "ЧТО ДЕЛАТЬ, ЕСЛИ НЕ ЛЮБИШЬ МАТЕМАТИКУ?",
    answer: "Это частая ситуация. Моя задача — показать, что математика может быть понятной и интересной. Когда появляется понимание, обычно появляется и мотивация."
  }
];

export const Faq: React.FC = () => {
  // Установили значение по умолчанию null — теперь изначально все скрыто
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Стейт и реф для анимации появления заголовка
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
        threshold: 0.1, // Срабатывает, когда 10% секции показывается на экране
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq"
      ref={sectionRef} // Привязываем реф к секции для отслеживания скролла
      className="w-full bg-[#19315B] py-20 px-4 sm:px-8 md:px-16 lg:px-24 select-none"
    >
      <div className="w-full max-w-6xl mx-auto">
        
        {/* Анимированный Главный заголовок блока */}
        <div className="w-full text-start mb-16 overflow-hidden">
          <h2 className="font-['Unbounded'] font-black text-4xl md:text-5xl text-white uppercase tracking-tight leading-[1.15]">
            <span 
              className={`block transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
                         ${isAnimate ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-12 blur-[2px]'}`}
            >
              Если остались вопросы
            </span>
          </h2>
        </div>

        {/* Список аккордеонов — убран max-w-5xl, теперь во всю ширину */}
        <div className="w-full flex flex-col">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index}
                // Фиксированный px-6 sm:px-10 для всех состояний, чтобы стрелка не дергалась
                className={`border-b-2 border-[#D4EC5B] px-6 sm:px-10 py-6 transition-all duration-300 ease-in-out ${
                  isOpen ? 'bg-[#D4EC5B]' : 'bg-transparent'
                }`}
              >
                {/* Кликабельная шапка вопроса */}
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center text-left font-['Montserrat'] font-bold text-sm  lg:text-xl tracking-wide uppercase focus:outline-none group"
                >
                  <span className={`transition-colors duration-300 ${isOpen ? 'text-black' : 'text-white'}`}>
                    {item.question}
                  </span>
                  
                  {/* Иконка стрелочки SVG — flex-shrink-0 не дает ей сжиматься */}
                  <svg 
                    className={`w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 ml-4 transform transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-black' : 'text-white'
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    strokeWidth="3"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Блок ответа с плавной анимацией раскрытия высоты */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className={`font-['Montserrat'] text-xs md:text-base font-medium leading-relaxed max-w-[90%] transition-colors duration-300 ${
                      isOpen ? 'text-black/90' : 'text-white/90'
                    }`}>
                      {item.answer}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};