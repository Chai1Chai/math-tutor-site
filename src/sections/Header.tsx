import logo from '../assets/images/icons/LOGO.svg';
import bg from '../assets/images/photo/Frame 8.webp';
import React, { useState } from 'react';

interface HeaderProps {

  onOpenModal: () => void;

}

export const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {

    e.preventDefault();

    setIsMenuOpen(false); 
    if (id === 'top') {

      window.scrollTo({ top: 0, behavior: 'smooth' });

      return;

    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

  };

  const handleOrderClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsMenuOpen(false); 
    onOpenModal(); 

  };


  return (
    <header className="sticky top-0 z-[100] w-full bg-[#D4EC5B] text-black shadow-lg">
      <nav className="relative flex items-center justify-between py-1.5 px-6 md:px-10 lg:px-16 w-full min-h-[48px]">
        <a
          href="#"
          onClick={(e) => scrollToSection(e, 'top')}
          className="z-10 flex items-center transition-transform active:scale-95"
        >
          <img src={logo} alt="Логотип" className="h-7 w-auto md:h-8" />
        </a>


        <div className="hidden md:flex items-center md:absolute md:left-1/2 md:-translate-x-1/2 gap-4 lg:gap-8 font-['Montserrat'] font-regular text-sm lg:text-sm whitespace-nowrap">
          <a href="#" onClick={(e) => scrollToSection(e, 'top')} className="hover:text-[#163060] transition hover:drop-shadow-[0_0_10px_rgba(22,48,96,0.6)] duration-200">Главная</a>
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-[#163060] transition hover:drop-shadow-[0_0_10px_rgba(22,48,96,0.6)] duration-200">Обо мне</a>
          <a href="#process" onClick={(e) => scrollToSection(e, 'process')} className="hover:text-[#163060] transition hover:drop-shadow-[0_0_10px_rgba(22,48,96,0.6)] duration-200">Процесс обучения</a>
          <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-[#163060] transition hover:drop-shadow-[0_0_10px_rgba(22,48,96,0.6)] duration-200">Услуги</a>
          <a href="#reviews" onClick={(e) => scrollToSection(e, 'reviews')} className="hover:text-[#163060] transition hover:drop-shadow-[0_0_10px_rgba(22,48,96,0.6)] duration-200">Отзывы</a>
        </div>
        <button
          onClick={handleOrderClick} // <-- Вместо scrollToSection теперь вызывается это
          className="hidden md:block font-['Montserrat'] font-regular text-sm lg:text-base bg-[#163060] text-white px-8 lg:px-10 py-2 rounded-full hover:bg-[#0e2042] transition-colors duration-200 active:scale-95 z-10 ml-auto"
        >
          Записаться
        </button>

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

      <div className={`fixed inset-0 z-[110] bg-[#0C1830] text-white backdrop-blur-md flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

        <div
          className="absolute inset-0 z-0 opacity-70 bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{ backgroundImage: `url(${bg})` }}
        />
        <a href="#" onClick={(e) => scrollToSection(e, 'top')} className="z-10 font-['Unbounded'] font-light hover:text-[#D4EC5B] transition-colors duration-200">Главная</a>
        <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="z-10 font-['Unbounded'] font-light hover:text-[#D4EC5B] transition-colors duration-200">Обо мне</a>
        <a href="#process" onClick={(e) => scrollToSection(e, 'process')} className="z-10 font-['Unbounded'] font-light hover:text-[#D4EC5B] transition-colors duration-200">Процесс обучения</a>
        <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="z-10 font-['Unbounded'] font-light hover:text-[#D4EC5B] transition-colors duration-200">Услуги</a>
        <a href="#reviews" onClick={(e) => scrollToSection(e, 'reviews')} className="z-10 font-['Unbounded'] font-light hover:text-[#D4EC5B] transition-colors duration-200">Отзывы</a>
        <button
          onClick={handleOrderClick}
          className="z-10 font-['Montserrat'] font-normal text-sm bg-[#D4EC5B] text-black px-10 py-3 rounded-full hover:bg-[#b6d139] transition-colors duration-200 active:scale-95 mt-4"
        >
          Записаться
        </button>
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-5 right-6 p-2 text-white active:scale-90 transition z-10"
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

