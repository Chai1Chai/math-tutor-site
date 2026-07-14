import React from 'react';

// Шаг 1: Импортируй свои SVG-картинки (замени пути на свои актуальные)
import tgIcon from '../assets/images/icons/TelegramLogo.svg';
import vkIcon from '../assets/images/icons/VKLogo.svg';
import maxIcon from '../assets/images/icons/MAXLogo.svg';
import phoneIcon from '../assets/images/icons/PhoneLogo.svg';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#19315B] text-white py-16 px-4 sm:px-8 md:px-16 lg:px-24 border-t border-white/10 select-none">
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-12 md:gap-6">
        
        {/* ЛЕВАЯ ЧАСТЬ: Контакты и Другое */}
        <div className="flex flex-col space-y-12">
          
          {/* Блок контактов */}
          <div>
            <h3 className="font-['Montserrat'] text-2xl font-light tracking-wide mb-6">
              Контакты для связи
            </h3>
            
            {/* Лаймовые иконки соцсетей */}
            <div className="flex items-center gap-4">
            
              {/* Telegram */}
              <a 
                href="https://t.me/antanovsky" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 bg-[#D4EC5B] rounded-[10px] flex items-center justify-center shadow-md p-2.5 transform hover:bg-[#B6D139]"
              >
                <img src={tgIcon} alt="Telegram" className="w-full h-full object-contain" />
              </a>
            
              {/* ВКонтакте */}
              <a 
                href="https://m.vk.com/antanovsky_ns" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 bg-[#D4EC5B] rounded-[10px] flex items-center justify-center shadow-md p-2 transform hover:bg-[#B6D139]"
              >
                <img src={vkIcon} alt="ВКонтакте" className="w-full h-full object-contain" />
              </a>
            
              {/* Чат / Сообщения */}
              <a 
                href="https://max.ru/u/f9LHodD0cOJx0GukcD1TlO--TbhzIN4Z8WwPPwn91X9U3bUq3Z8LY5cRMcw" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 bg-[#D4EC5B] rounded-[10px] flex items-center justify-center shadow-md p-2.5 transform hover:bg-[#B6D139]"
              >
                <img src={maxIcon} alt="Чат" className="w-full h-full object-contain" />
              </a>
            
              {/* Телефон */}
              <a 
                href="tel:+79121862683" 
                className="w-10 h-10 bg-[#D4EC5B] rounded-[10px] flex items-center justify-center shadow-md p-2.5 transform hover:bg-[#B6D139]"
              >
                <img src={phoneIcon} alt="Телефон" className="w-full h-full object-contain" />
              </a>
            
            </div>
          </div>

          {/* Блок Другое */}
          <div>
            <h4 className="font-['Montserrat'] text-2xl font-light tracking-wide mb-4">
              Другое
            </h4>
            <a href="#" className="font-['Montserrat'] text-sm sm:text-base text-white/50 hover:text-[#D4EC5B] transition-colors duration-200">
              Политика конфиденциальности
            </a>
          </div>

        </div>

        {/* ПРАВАЯ ЧАСТЬ: Навигация */}
        <div className="flex flex-col md:items-end text-left md:text-right">
          <h3 className="font-['Montserrat'] text-2xl font-light tracking-wide mb-6">
            Навигация
          </h3>
          <nav className="flex flex-col space-y-3">
            <a href="#" className="font-['Montserrat'] text-sm text-white/80 hover:text-[#D4EC5B] transition-colors duration-200">
              Главная
            </a>
            <a href="#about" className="font-['Montserrat'] text-sm md:text-base text-white/80 hover:text-[#D4EC5B] transition-colors duration-200">
              Обо мне
            </a>
            <a href="#process" className="font-['Montserrat'] text-sm md:text-base text-white/80 hover:text-[#D4EC5B] transition-colors duration-200">
              Процесс обучения
            </a>
            <a href="#services" className="font-['Montserrat'] text-sm md:text-base text-white/80 hover:text-[#D4EC5B] transition-colors duration-200">
              Услуги
            </a>
            <a href="#reviews" className="font-['Montserrat'] text-sm md:text-base text-white/80 hover:text-[#D4EC5B] transition-colors duration-200">
              Отзывы
            </a>
          </nav>
        </div>

      </div>
    </footer>
  );
};