import React, { useState, useEffect } from 'react';

// Импорт фонов
import bgImage from '../assets/images/photo/background.webp';

// Коты для обложек карточек
import cat01 from '../assets/images/cats/catprocess01.png';
import cat02 from '../assets/images/cats/catprocess02.png';
import cat03 from '../assets/images/cats/catprocess03.png';
import cat04 from '../assets/images/cats/catprocess04.png';

// Изображения для модальных окон
import modalImg01 from '../assets/images/photo/example01.webp';
import modalImg02 from '../assets/images/photo/example02.webp';
import modalImg03 from '../assets/images/photo/example03.webp';
import modalImg04 from '../assets/images/photo/example04.webp';

interface ProcessItem {
  id: number;
  title: string;
  shortDesc: string;
  cardImage: string;
  modalImage: string;
  isLime: boolean;
}

const processData: ProcessItem[] = [
  {
    id: 1,
    title: "Авторские презентации",
    shortDesc: "Понятная теория по каждому заданию. Изучай сложный материал по структурированным презентациям.",
    cardImage: cat01,
    modalImage: modalImg01,
    isLime: true,
  },
  {
    id: 2,
    title: "Домашние задания",
    shortDesc: "Закрепление на практике. Практикуйся после каждого занятия, чтобы разобрать ошибки.",
    cardImage: cat02,
    modalImage: modalImg02,
    isLime: false,
  },
  {
    id: 3,
    title: "Подробный разбор тем",
    shortDesc: "Только нужная информация без лишней «воды». Получай глубокое и понятное объяснение каждой темы.",
    cardImage: cat03,
    modalImage: modalImg03,
    isLime: false,
  },
  {
    id: 4,
    title: "Практика на реальных задачах",
    shortDesc: "Задания только из ФИПИ и проверенных источников. Никакой устаревшей информации.",
    cardImage: cat04,
    modalImage: modalImg04,
    isLime: true,
  }
];

export const ProcessCards: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<ProcessItem | null>(null);

  useEffect(() => {
    if (selectedCard) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedCard]);

  return (
    <section className="relative w-full py-20 bg-[#0C1931] overflow-hidden px-4 sm:px-8 md:px-16 lg:px-24">
      {/* Фоновое изображение */}
      <div 
        className="absolute inset-0 z-0 opacity-5 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* ОДИНАРНЫЙ КОНТЕЙНЕР: С точно такими же отступами и шириной, как в Hero блоке */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        

        {/* Сетка карточек */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {processData.map((item) => (
            <div 
              key={item.id}
              onClick={() => setSelectedCard(item)}
              className="flex flex-col h-full cursor-pointer group transform transition-all duration-300 hover:-translate-y-2"
            >
          {/* Шапка карточки с клеткой через CSS */}
          <div 
            className="relative h-64 flex-shrink-0 bg-white rounded-t-[20px] overflow-hidden"
            style={{ 
              backgroundImage: `
                linear-gradient(to right, rgba(0, 0, 0, 0.08) 2px, transparent 2px),
                linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 2px, transparent 2px)
              `,
              backgroundSize: '20px 20px'
            }}
          >
            {/* Изменено на absolute bottom-0 left-1/2 и -translate-x-1/2 */}
            <img 
              src={item.cardImage} 
              alt={item.title} 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[100%] w-auto object-contain object-bottom transition-transform duration-500 group-hover:scale-110 origin-bottom"
            />
          </div>
              
              {/* Тело карточки */}
              <div 
                className={`flex-1 flex flex-col justify-between p-8 pb-6 rounded-b-[20px] ${
                  item.isLime ? 'bg-[#D4EC5B] text-black' : 'bg-[#163060] text-white'
                }`}
              >
                <div>
                  <h3 className="font-['Unbounded'] font-bold text-xl md:text-2xl mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className={`font-['Montserrat'] font-medium text-sm md:text-base leading-relaxed mb-6 ${
                    item.isLime ? 'opacity-80' : 'opacity-90'
                  }`}>
                    {item.shortDesc}
                  </p>
                </div>
              
                {/* Интерактивная надпись */}
                <span className={`font-['Montserrat'] font-medium text-xs text-end md:text-sm uppercase tracking-wider ${
                  item.isLime ? 'text-[#163060]' : 'text-[#D4EC5B]'
                }`}>
                  тыкни, чтобы посмотреть)
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* МОДАЛЬНОЕ ОКНО С ИЗОБРАЖЕНИЕМ ПРИМЕРА */}
      {selectedCard && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedCard(null)}
          />

          <div className="relative bg-[#0C1931] border-2 border-[#D4EC5B] w-full max-w-4xl rounded-[40px] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setSelectedCard(null)}
              className="absolute top-6 right-6 z-30 bg-black/60 hover:bg-[#D4EC5B] text-white hover:text-black transition-all p-3 rounded-full backdrop-blur-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/>
              </svg>
            </button>

            <div className="flex flex-col p-6 md:p-10">
              <h3 className="font-['Unbounded'] font-bold text-xl md:text-2xl text-[#D4EC5B] mb-6 uppercase tracking-tight pr-12">
                {selectedCard.title}
              </h3>

              <div className="w-full bg-white/5 rounded-2xl overflow-y-auto max-h-[55vh] border border-white/10 custom-scrollbar">
                <img 
                  src={selectedCard.modalImage} 
                  alt={`Пример: ${selectedCard.title}`}
                  className="w-full h-auto block rounded-xl"
                />
              </div>

              <div className="flex justify-end mt-6">
                <button 
                  onClick={() => setSelectedCard(null)}
                  className="font-['Unbounded'] font-bold text-xs md:text-sm bg-[#D4EC5B] text-black px-8 py-3 rounded-full uppercase tracking-wider hover:scale-105 transition-transform"
                >
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};