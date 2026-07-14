import React, { useState, useEffect, useRef } from 'react';
import kirillPhoto from '../assets/images/photo/PhotoMe.webp';
import bg from '../assets/images/photo/HeroBG.webp';

// Исправленный тип хука: теперь он корректно принимает RefObject, который может быть null
const useOnScreen = (ref: React.RefObject<HTMLElement | null>, threshold = 0.1) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        if (ref.current) observer.unobserve(ref.current);
      }
    }, { threshold });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return isIntersecting;
};

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(sectionRef);

  // Классы для анимации появления
  const anim = `transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] 
                ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-12 blur-[2px]'}`;

  return (
    <section ref={sectionRef} className="relative w-full pt-12 md:pt-20 md:pb-32 lg:pt-20 lg:pb-20 overflow-hidden select-none px-4 sm:px-8 md:px-16 lg:px-24 bg-[#0C1931]">
      <div 
        className="absolute inset-0 z-0 opacity-50 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <div className="absolute -bottom-5 left-0 right-0 h-16 lg:h-24 bg-[#D4EC5B] origin-bottom-left skew-y-2 z-20 pointer-events-none" />

      <div className="relative w-full max-w-6xl mx-auto md:grid md:grid-cols-2 md:items-end min-h-[530px] md:min-h-[350px] lg:min-h-[520px]">
        
        <img 
          src={kirillPhoto} 
          alt="Кирилл — преподаватель математики" 
          className="absolute z-10 h-auto object-contain pointer-events-none select-none bottom-5 right-[-55px] w-[82vw] max-w-[340px] sm:bottom-0 sm:right-[-20px] sm:w-[60vw] sm:max-w-[400px] md:-bottom-30 md:right-0 md:w-[60vw] md:max-w-[400px] lg:-bottom-20 lg:right-0 lg:w-[42vw] lg:max-w-[480px]"
        />

        <div className="w-full lg:max-w-xl flex flex-col text-left text-white z-20">
          
          <h1 className={`${anim} font-[Unbounded] font-bold text-3xl md:text-3xl lg:text-4xl uppercase tracking-tight max-w-[70%] md:max-w-none`}>
            Готовлю к <br />
            <span className="text-[#D4EC5B] text-4xl md:text-5xl lg:text-7xl block mt-2 drop-shadow-sm font-black">
              ОГЭ И ЕГЭ
            </span>
          </h1>

          <p className={`${anim} delay-300 font-[Montserrat] font-light text-sm sm:text-base md:text-xl lg:text-2xl mt-6 lg:mt-8 max-w-[60%] md:max-w-md`}>
            Занятия, которые действительно подготовят к ОГЭ и ЕГЭ по математике.
          </p>


          <div className={`${anim} delay-400 mt-6 lg:mt-8 max-w-[65%] md:max-w-none`}>
            <span className="font-[Montserrat] font-bold text-base md:text-xl lg:text-3xl relative inline-block text-[#DFF464] pb-2">
              Подготовка <br/>без стресса и слез!
              <svg 
                className="absolute left-0 bottom-0 w-full h-[14px] pointer-events-none" 
                viewBox="0 0 500 40" 
                preserveAspectRatio="none"
              >
                <g fill="currentColor" stroke="currentColor">
                  <path d="M 10,22 Q 80,18 180,17 Q 280,16 380,19 Q 440,21 470,24 C 430,23 350,22 250,22 Q 130,23 15,26 Z" />
                  <path d="M 320,18 Q 380,19 440,22 L 465,23 Q 410,21 340,19 Z" />
                  <path d="M 350,21 Q 400,22 455,25 L 485,26 Q 420,23 370,21 Z" />
                  <rect x="380" y="18" width="15" height="1" rx="0.5" /><rect x="400" y="19" width="25" height="1.2" rx="0.6" /><rect x="430" y="20" width="10" height="0.8" rx="0.4" /><rect x="445" y="21" width="18" height="0.7" rx="0.35" /><rect x="468" y="22" width="12" height="0.5" rx="0.25" /><rect x="485" y="23" width="6" height="0.4" rx="0.2" /><rect x="370" y="20" width="30" height="1.5" rx="0.75" /><rect x="405" y="21" width="12" height="1.2" rx="0.6" /><rect x="422" y="22" width="22" height="1" rx="0.5" /><rect x="448" y="23" width="15" height="0.8" rx="0.4" /><rect x="467" y="24" width="25" height="0.6" rx="0.3" /><rect x="495" y="25" width="4" height="0.4" rx="0.2" /><rect x="365" y="23" width="10" height="1" rx="0.5" /><rect x="385" y="24" width="18" height="0.8" rx="0.4" /><rect x="410" y="25" width="8" height="0.7" rx="0.35" /><rect x="425" y="26" width="14" height="0.6" rx="0.3" /><rect x="445" y="27" width="20" height="0.5" rx="0.25" /><rect x="470" y="28" width="10" height="0.4" rx="0.2" />
                </g>
              </svg>
            </span>
          </div>

          <div className="mt-5 flex flex-col gap-4 md:hidden max-w-[40%] z-20">

            {/* ОГЭ */}
            <div className={`${anim} delay-500 flex items-center gap-3 pb-1.5 border-b border-[#D4EC5B]/30`}>
              <div className="text-[#D4EC5B]">
                <svg className="w-5 h-5 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.961 0 1.36 1.252.584 1.828l-3.97 2.883a1 1 0 00-.364 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.971-2.883a1 1 0 00-1.17 0l-3.971 2.883c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.97-2.883c-.776-.575-.375-1.828.584-1.828h4.907a1 1 0 00.95-.69l1.519-4.674z"/>
                </svg>
              </div>
              <div className="flex flex-col text-left font-[Montserrat]">
                <span className="font-bold text-white text-sm s uppercase leading-none">ОГЭ</span>
                <span className="font-extrabold text-[#D4EC5B] text-base  mt-0.5 leading-none">на «5»</span>
              </div>
            </div>

            {/* ЕГЭ */}
            <div className={`${anim} delay-600 flex items-center gap-3 pb-1.5 border-b border-[#D4EC5B]/30`}>
              <div className="text-[#D4EC5B]">
                <svg className="w-5 h-5 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="flex flex-col text-left font-[Montserrat]">
                <span className="font-bold text-white text-sm  uppercase leading-none">ЕГЭ</span>
                <span className="font-extrabold text-[#D4EC5B] text-xs  mt-0.5 leading-none">на 80+</span>
              </div>
            </div>

            {/* ПОДДЕРЖКА 24/7 (НОВЫЙ БЛОК) */}
            <div className={`${anim} delay-700 flex items-center gap-3 pb-1.5 border-b border-[#D4EC5B]/30`}>
              <div className="text-[#D4EC5B]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex flex-col text-left font-[Montserrat]">
                <span className="font-bold text-white text-sm  uppercase leading-none">Поддержка</span>
                <span className="font-extrabold text-[#D4EC5B] text-xs mt-0.5 leading-none">24/7</span>
              </div>
            </div>

          </div>

          {/* КНОПКА КОНСУЛЬТАЦИИ */}
          <div className={`${anim} delay-600 mt-4 w-full flex justify-center md:justify-start z-30 relative`}>
            <button 
              type="button"
              onClick={onOpenModal}
              className="w-full sm:w-auto lg:mb-10 flex items-center justify-center gap-3 bg-[#D4EC5B] hover:bg-[#c2da4e] text-black font-[Montserrat] font-bold text-xs sm:text-sm md:text-sm uppercase tracking-wider px-4 lg:px-8 py-4 rounded-[20px] shadow-lg shadow-[#D4EC5B]/10 transform transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3 12H7v-2h10v2zm0-3H7V9h10v2zm0-3H7V6h10v2z"/>
              </svg>
              Консультация — бесплатно
            </button>
          </div>
        </div>

        {/* КОМПАКТНЫЕ КАРТОЧКИ: ЭФФЕКТ ЛЕСЕНКИ */}
        <div className="hidden md:flex flex-col gap-3 z-30 absolute lg:bottom-5 right-0 items-end">

          {/* Карточка 1: ОГЭ (Самая короткая) */}
          <div className={`${anim} delay-100 flex items-center gap-3 bg-[#0C1931]/80 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-2xl shadow-lg w-[180px] translate-x-4`}>
            <div className="text-[#D4EC5B]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.961 0 1.36 1.252.584 1.828l-3.97 2.883a1 1 0 00-.364 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.971-2.883a1 1 0 00-1.17 0l-3.971 2.883c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.97-2.883c-.776-.575-.375-1.828.584-1.828h4.907a1 1 0 00.95-.69l1.519-4.674z"/></svg>
            </div>
            <span className="font-[Unbounded] font-bold text-white text-base uppercase">ОГЭ на «5»</span>
          </div>

          {/* Карточка 2: ЕГЭ (Средняя) */}
          <div className={`${anim} delay-200 flex items-center gap-3 bg-[#0C1931]/80 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-2xl shadow-lg w-[220px] translate-x-2`}>
            <div className="text-[#D4EC5B]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            </div>
            <span className="font-[Unbounded] font-bold text-white text-base uppercase">ЕГЭ на 80+</span>
          </div>

          {/* Карточка 3: Поддержка (Самая длинная) */}
          <div className={`${anim} delay-300 flex items-center gap-3 bg-[#D4EC5B] px-4 py-2.5 rounded-2xl shadow-lg w-[260px] translate-x-0`}>
            <div className="text-[#0C1931]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="font-[Montserrat] font-bold text-[#0C1931] text-base">Поддержка 24/7</span>
          </div>

        </div>
      </div>
    </section>
  );
};