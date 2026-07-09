import React from 'react';

// Импортируем медиафайлы из папки assets
import bgImage from '../assets/images/photo/background.webp';
import kirillPhoto from '../assets/images/photo/PhotoMe.png';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-[#0C1931] flex items-center justify-center overflow-hidden px-4 sm:px-8 md:px-16 lg:px-24 py-12 lg:py-0">
      
      <div 
        className="absolute inset-0 z-0 opacity-5 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url(${bgImage})` }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex items-center justify-between">
        
        <div className="relative z-10 w-full lg:max-w-2xl flex flex-col items-start text-left lg:py-20">
          
          {/* Главный заголовок: перенос строки только на lg, на xl — в одну строчку */}
          <h1 className="font-['Unbounded'] font-bold text-4xl md:text-5xl text-white uppercase tracking-tight leading-tight md:mb-8 mb-4 xl:whitespace-nowrap">
            Готовим к ОГЭ 
            <br className="hidden lg:block xl:hidden" />
            <span className="lg:ml-0 xl:ml-3">и ЕГЭ</span>
          </h1>

          <p className="font-['Montserrat'] font-light text-base md:text-2xl text-white opacity-90 max-w-xl md:mb-8 mb-4">
            Занятия, которые действительно готовят к ОГЭ и ЕГЭ по математике. 
            Подготовка без стресса и слёз!
          </p>

          <div className="flex flex-wrap gap-4 md:mb-8 mb-4">
            <button 
              type="button"
              aria-label="Узнать про подготовку к ОГЭ на оценку 5"
              className="font-['Unbounded'] font-bold text-sm md:text-xl bg-[#D4EC5B] text-black px-8 py-4 rounded-full hover:bg-[#c2db4c] transition-colors duration-200"
            >
              ОГЭ НА «5»
            </button>
            <button 
              type="button"
              aria-label="Узнать про подготовку к ЕГЭ на 80 плюс баллов"
              className="font-['Unbounded'] font-bold text-sm md:text-xl bg-[#D4EC5B] text-black px-8 py-4 rounded-full hover:bg-[#c2db4c] transition-colors duration-200"
            >
              ЕГЭ НА 80+
            </button>
          </div>

          {/* Призыв к действию: перенос важной фразы только на lg экранах */}
          <p className="font-['Montserrat'] font-light text-base md:text-2xl text-white opacity-90 md:mb-8 mb-4">
            Запишись прямо сейчас и получи
            <br className="hidden lg:block xl:hidden" />
            {' '}
            <strong className="font-bold text-white opacity-100">
              бесплатную консультацию!
            </strong>
          </p>

          <button 
            type="button"
            aria-label="Записаться на бесплатную консультацию по математике"
            onClick={() => {
              const element = document.getElementById('contacts');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="font-['Unbounded'] font-bold text-sm md:text-xl bg-[#D4EC5B] text-black px-8 sm:px-16 md:px-24 py-4 rounded-full uppercase tracking-wider hover:bg-[#B6D139] transition-colors duration-200"
          >
            Записаться
          </button>
        </div>

      </div>

      <div className="hidden lg:block absolute -bottom-25 right-10 xl:-bottom-50 xl:right-40 z-0 lg:w-[540px] xl:w-[560px] pointer-events-none select-none">
        <img 
          src={kirillPhoto} 
          alt="Репетитор по математике Кирилл — подготовка к ОГЭ и ЕГЭ"
          title="Кирилл — твой проводник в мир успешной сдачи математики"
          loading="eager"
          fetchPriority="high"
          className="h-full w-full object-contain object-bottom"
        />
      </div>

    </section>
  );
};