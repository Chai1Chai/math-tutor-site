import logo from '../assets/images/icons/LOGO.svg';
import React, { useState } from 'react';

export const Header: React.FC = () => {
  // Состояние для открытия мобильного меню (бургер-меню)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Универсальная функция плавного скролла к любому блоку по его ID
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault(); // Отменяем стандартный резкий переход по ссылке
    setIsMenuOpen(false); // Закрываем мобильное меню, если клик был из него
    
    // Если "Главная", скроллим в самый верх страницы
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-[100] w-full bg-[#D4EC5B] text-black shadow-lg">
      {/* Сделали блок уже за счет py-1.5 и min-h-[48px] */}
      <nav className="relative flex items-center justify-between py-1.5 px-6 md:px-10 lg:px-16 w-full min-h-[48px]">
        
        {/* ЛОГОТИП (высота адаптирована под узкую шапку) */}
        <a 
          href="#" 
          onClick={(e) => scrollToSection(e, 'top')} 
          className="z-10 flex items-center transition-transform active:scale-95"
        >
          <img src={logo} alt="Логотип" className="h-7 w-auto md:h-8" />
        </a>

        {/* НАВИГАЦИЯ ДЛЯ ДЕСКТОПА */}
        <div className="hidden md:flex items-center md:absolute md:left-1/2 md:-translate-x-1/2 gap-4 lg:gap-8 font-['Montserrat'] font-regular text-sm lg:text-sm whitespace-nowrap">
          <a href="#" onClick={(e) => scrollToSection(e, 'top')} className="hover:text-[#163060] transition hover:drop-shadow-[0_0_10px_rgba(22,48,96,0.6)] duration-200">Главная</a>
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-[#163060] transition hover:drop-shadow-[0_0_10px_rgba(22,48,96,0.6)] duration-200">Обо мне</a>
          <a href="#process" onClick={(e) => scrollToSection(e, 'process')} className="hover:text-[#163060] transition hover:drop-shadow-[0_0_10px_rgba(22,48,96,0.6)] duration-200">Процесс обучения</a>
          <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-[#163060] transition hover:drop-shadow-[0_0_10px_rgba(22,48,96,0.6)] duration-200">Услуги</a>
          <a href="#reviews" onClick={(e) => scrollToSection(e, 'reviews')} className="hover:text-[#163060] transition hover:drop-shadow-[0_0_10px_rgba(22,48,96,0.6)] duration-200">Отзывы</a>
        </div>

        {/* КНОПКА ЗАПИСАТЬСЯ ДЛЯ ДЕСКТОПА (py-2 вместо py-2.5 для компактности) */}
        <button 
          onClick={(e) => scrollToSection(e, 'contacts')}
          className="hidden md:block font-['Montserrat'] font-regular text-sm lg:text-base bg-[#163060] text-white px-8 lg:px-10 py-2 rounded-full hover:bg-[#0e2042] transition-colors duration-200 active:scale-95 z-10 ml-auto"
        >
          Записаться
        </button>

        {/* БУРГЕР-КНОПКА ДЛЯ МОБИЛОК */}
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden active:scale-90 transition p-2 text-black ml-auto"
          aria-label="Открыть мобильное меню"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
          </svg>
        </button>
      </nav>

      {/* МОБИЛЬНОЕ ОВЕРЛЕЙ-МЕНЮ */}
      <div className={`fixed inset-0 z-[110] bg-[#163060] text-white backdrop-blur-md flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <a href="#" onClick={(e) => scrollToSection(e, 'top')} className="font-['Unbounded'] font-light hover:text-[#D4EC5B] transition-colors duration-200">Главная</a>
        <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="font-['Unbounded'] font-light hover:text-[#D4EC5B] transition-colors duration-200">Обо мне</a>
        <a href="#process" onClick={(e) => scrollToSection(e, 'process')} className="font-['Unbounded'] font-light hover:text-[#D4EC5B] transition-colors duration-200">Процесс обучения</a>
        <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="font-['Unbounded'] font-light hover:text-[#D4EC5B] transition-colors duration-200">Услуги</a>
        <a href="#reviews" onClick={(e) => scrollToSection(e, 'reviews')} className="font-['Unbounded'] font-light hover:text-[#D4EC5B] transition-colors duration-200">Отзывы</a>
        
        {/* КНОПКА ЗАПИСАТЬСЯ ВНУТРИ МОБИЛЬНОГО МЕНЮ */}
        <button 
          onClick={(e) => scrollToSection(e, 'contacts')}
          className="font-['Montserrat'] font-light text-sm bg-[#D4EC5B] text-black px-10 py-3 rounded-full hover:bg-[#b6d139] transition-colors duration-200 active:scale-95 mt-4"
        >
          Записаться
        </button>

        {/* Кнопка закрытия */}
        <button 
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-5 right-6 p-2 text-white active:scale-90 transition"
          aria-label="Закрыть мобильное меню"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/>
          </svg>
        </button>
      </div>
    </header>
  );
};