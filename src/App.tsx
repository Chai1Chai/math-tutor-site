import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { ProcessCards } from "./sections/ProcessCards";
import { Process } from "./sections/Process";
import { Reviews } from "./sections/Reviews";
import { AboutMe } from "./sections/AboutME";
import { Services } from "./sections/Services";
import { QuizBlock } from "./quiz/QuizBlock";
import { Faq } from "./sections/Faq";
import { ContactForm } from "./sections/ContactForm";
import { Footer } from "./sections/Footer";
import { ContactModal } from './sections/ContactModal'; // путь к файлу
import React, { useState, useEffect } from 'react';


function App() {
  // 1. Создаем стейт для управления видимостью модального окна
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#163060] text-white font-sans antialiased">
      {/* 2. Прокидываем функцию открытия модалки ТОЛЬКО в Header для теста */}
      <Header onOpenModal={() => setIsModalOpen(true)} />      
      <Hero onOpenModal={() => setIsModalOpen(true)}/>
      <AboutMe />
      <Process />
      <ProcessCards />
      <Services onOpenModal={() => setIsModalOpen(true)}/>
      <Reviews />
      <QuizBlock />
      <Faq />
      <ContactForm />
      <Footer />
      
      <ScrollToTop />

      {/* 3. Отрендерим само модальное окно, передав стейт и функцию закрытия */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Следим за скроллом: показываем кнопку, только если проскроллили больше 400px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Плавный скролл наверх
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      // Стили в тон твоей палитре: темно-синий фон, неоново-желтая стрелка
      className={`fixed bottom-6 right-6 z-50 p-3 sm:p-4 rounded-full bg-[#19315B] text-[#D4EC5B] shadow-2xl 
                 border border-[#D4EC5B]/20 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                 hover:bg-[#122444] hover:scale-110 active:scale-95 focus:outline-none
                 ${isVisible ? 'opacity-100 translate-y-0 blur-0 pointer-events-auto' : 'opacity-0 translate-y-4 blur-[2px] pointer-events-none'}`}
      aria-label="Наверх"
    >
      <svg 
        className="w-6 h-6 transform rotate-180" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        strokeWidth="3"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
};

export default App;