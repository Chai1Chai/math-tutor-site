import React from 'react';

// Импорты иконок платформ (можешь заменить на свои SVG или картинки)
import discordIcon from '../assets/images/icons/DiscordLogo.svg';
import miroIcon from '../assets/images/icons/MiroLogo.svg';
import telemostIcon from '../assets/images/icons/YandexTelemostLogo.svg';
import holstIcon from '../assets/images/icons/HolstLogo.svg';


import coolCat from '../assets/images/cats/ProcessMainCat.png';

export const Process: React.FC = () => {
  return (
    <section id="process" className="relative w-full bg-white py-15 overflow-hidden select-none px-4 sm:px-8 md:px-16 lg:px-24">
      
      {/* 1. Декоративная наклонная лаймовая полоса на фоне */}
      <div 
        className="absolute inset-0 z-0 bg-[#D4EC5B] transform skew-y-20 origin-center scale-x-110 h-[20%] my-auto top-12 pointer-events-none"
      />

      {/* 2. Основной контейнер контента (выровнен с Hero и карточками) */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col justify-center">
        
        {/* Заголовок блока */}
        <h2 className="font-['Unbounded'] font-bold text-4xl md:text-5xl text-black uppercase tracking-tight md:mb-14 mb-8 max-w-3xl leading-[1.1]">
          Как проходит <br /> подготовка
        </h2>

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
            <img src={holstIcon} alt="Holst" className="h-7 w-auto md:h-10 w-auto object-contain" />
          </div>
        </div>

        {/* Список ключевых особенностей */}
        <ul className="flex flex-col gap-0 max-w-3xl font-['Montserrat'] font-medium text-base md:text-xl text-black leading-relaxed">
          <li className="flex items-start gap-2">
            <span className="flex-shrink-0 ">*</span>
            <span>После каждого занятия остается запись урока</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="flex-shrink-0 ">*</span>
            <span>Вся теория и домашние задания собраны в одном месте</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="flex-shrink-0 ">*</span>
            <span>Ежемесячный мониторинг результатов пробников</span>
          </li>
        </ul>
              {/* 3. Кот в очках — прижат к правому нижнему углу всей секции */}
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