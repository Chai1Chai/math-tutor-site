import React, { useState, useEffect, useRef } from 'react';

// Импорты иконок платформ
import discordIcon from '../assets/images/icons/DiscordLogo.svg';
import miroIcon from '../assets/images/icons/MiroLogo.svg';
import telemostIcon from '../assets/images/icons/YandexTelemostLogo.svg';
import holstIcon from '../assets/images/icons/HolstLogo.svg';

import coolCat from '../assets/images/cats/ProcessMainCat.webp';

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

  const listItems = [
    "После каждого занятия остается запись урока",
    "Вся теория и домашние задания собраны в одном месте",
    "Ежемесячный мониторинг результатов пробников"
  ];

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
          ref={listRef}
          className="flex flex-col gap-2 max-w-3xl font-['Montserrat'] font-bold text-base md:text-xl text-black leading-relaxed"
        >
          {listItems.map((text, index) => (
            <li key={index} className="flex items-start gap-2 overflow-hidden py-0.5">
              <span 
                className={`flex-shrink-0 transition-opacity duration-500
                           ${animateList ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: `${200 + index * 400}ms` }}
              >
                *
              </span>
              
              <span 
                className={`block transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                           ${animateList ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}
                style={{ transitionDelay: `${200 + index * 400}ms` }}
              >
                {text}
              </span>
            </li>
          ))}
        </ul>
        
        {/* 3. Кот в очках */}
        <div className="absolute -bottom-16 right-0 lg:right-0 z-20 w-[30%] max-w-[320px] sm:max-w-[400px] md:max-w-[300px] pointer-events-none">
          <img 
            src={coolCat} 
            alt="Кот в очках" 
            className="w-full h-auto block object-contain object-bottom select-none"
          />
        </div>

      </div>

    </section>
  );
};