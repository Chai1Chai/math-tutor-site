import React, { useState, useEffect, useRef } from 'react';

// Импорты иконок платформ
import discordIcon from '../assets/images/icons/DiscordLogo.svg';
import miroIcon from '../assets/images/icons/MiroLogo.svg';
import telemostIcon from '../assets/images/icons/YandexTelemostLogo.svg';
import holstIcon from '../assets/images/icons/HolstLogo.svg';


export const Process: React.FC = () => {
  // Раздельные стейты для анимации заголовка и списка
  const [animateTitle, setAnimateTitle] = useState(false);
  const [animateList, setAnimateList] = useState(false);

  // Раздельные рефы
  const sectionRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    // 1. Обсервер для заголовка (следит за всей секцией, как раньше)
    const titleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateTitle(true);
          if (sectionRef.current) titleObserver.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.1 }
    );

    // 2. Обсервер для пунктов списка (следит только за самим списком)
    const listObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateList(true);
          if (listRef.current) listObserver.unobserve(listRef.current);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Срабатывает, когда список зашел на экран на 50px
      }
    );

    if (sectionRef.current) titleObserver.observe(sectionRef.current);
    if (listRef.current) listObserver.observe(listRef.current);

    return () => {
      if (sectionRef.current) titleObserver.unobserve(sectionRef.current);
      if (listRef.current) listObserver.unobserve(listRef.current);
    };
  }, []);



  return (
    <section 
      id="process" 
      ref={sectionRef} // Реф секции для триггера заголовка
      className="relative w-full bg-white py-15 overflow-hidden select-none px-4 sm:px-8 md:px-16 lg:px-24"
    >
      
      {/* 1. Декоративная наклонная лаймовая полоса на фоне */}
      <div 
        className="absolute inset-0 z-0 bg-[#D4EC5B] transform skew-y-20 origin-center scale-x-110 h-[20%] my-auto top-12 pointer-events-none"
      />

      {/* 2. Основной контейнер контента */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col justify-center">
        
        {/* Заголовок блока — завязан на animateTitle */}
        <div className="overflow-hidden md:mb-14 mb-8">
          <h2 
            className={`font-['Unbounded'] font-bold text-4xl md:text-5xl text-black uppercase tracking-tight max-w-3xl leading-[1.1]
                       transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
                       ${animateTitle ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-12 blur-[2px]'}`}
          >
            Как проходит <br /> подготовка
          </h2>
        </div>

        {/* Подзаголовок для платформ */}
        <h3 className="font-['Montserrat'] font-medium text-2xl md:text-3xl text-black md:mb-8 mb-4">
          Платформы:
        </h3>

        {/* Линейка платформ с логотипами */}
        <div className="flex flex-wrap items-center gap-8 sm:gap-12 md:gap-16 md:mb-16 mb-10">
          <div className="flex items-center gap-3">
            <img src={discordIcon} alt="Discord" className="h-5 w-auto md:h-7 object-contain" />
          </div>
          
          <div className="flex items-center gap-3">
            <img src={miroIcon} alt="Miro" className="h-8 w-auto md:h-12 object-contain" />
          </div>

          <div className="flex items-center gap-3">
            <img src={telemostIcon} alt="Яндекс Телемост" className="h-6 w-auto md:h-8 object-contain" />
          </div>

          <div className="flex items-center gap-3">
            <img src={holstIcon} alt="Holst" className="h-7 w-auto md:h-10 object-contain" />
          </div>
        </div>

        {/* Список ключевых особенностей — ТЕПЕРЬ СВОЙ РЕФ И СВОЙ СТЕЙТ animateList */}
        <ul 
          ref={listRef} // Обсервер следит за этим списком
          className="grid md:grid-cols-3 gap-6 max-w-6xl font-['Montserrat']"
        >
          {[
            { title: "Запись уроков", desc: "После каждого занятия остается запись урока" },
            { title: "Всё в одном месте", desc: "Вся теория и домашние задания собраны в одном месте" },
            { title: "Мониторинг", desc: "Ежемесячный мониторинг результатов пробников" }
          ].map((item, index) => (
            <li 
              key={index} 
              className={`bg-white border-2 border-[#163060] p-6 rounded-3xl shadow-[8px_8px_0px_0px_rgba(22,48,96,0.5)] 
                          transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                          ${animateList ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              // Каждая карточка получает задержку на 200мс больше предыдущей
              style={{ transitionDelay: `${200 + index * 200}ms` }}
            >
              <div className="w-10 h-10 bg-[#163060] text-white rounded-full flex items-center justify-center mb-4 font-bold text-lg">
                {index + 1}
              </div>
              <h4 className="font-bold text-lg mb-2 text-black">{item.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </li>
          ))}
        </ul>
        

      </div>

    </section>
  );
};