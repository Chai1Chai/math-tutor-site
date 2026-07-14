import React, { useState, useEffect, useRef } from 'react';
// Импортируем наш новый переиспользуемый компонент
import { ApplicationForm } from './ApplicationForm'; 

import tgIcon from '../assets/images/icons/TelegramLogo.svg';
import vkIcon from '../assets/images/icons/VKLogo.svg';
import maxIcon from '../assets/images/icons/MAXLogo.svg';
import phoneIcon from '../assets/images/icons/PhoneLogo.svg';
import catContact from '../assets/images/cats/catContact.webp'; 

export const ContactForm: React.FC = () => {
  const [isAnimate, setIsAnimate] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAnimate(true);
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  return (
    <section 
      id="contacts" 
      ref={sectionRef}
      className="w-full bg-[#E5E9EC] py-20 px-4 sm:px-8 md:px-16 lg:px-24 text-black select-none relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none flex flex-col justify-center items-center">
        <div className="w-[150%] h-36 bg-[#19315B] transform -skew-y-12 rotate-6 scale-x-110" />
        <div className="w-[150%] h-36 bg-[#19315B] transform skew-y-12 -rotate-6 scale-x-110 -mt-20" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col gap-6">
        <div className="w-full text-start mb-6 overflow-hidden">
          <h2 className="font-['Unbounded'] font-black text-4xl md:text-5xl text-black uppercase tracking-tight leading-[1.15]">
            <span className={`block transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
                      ${isAnimate ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-12 blur-[2px]'}`}
            >
              Запишись на занятие
            </span>
          </h2>
        </div>

        {/* ВЕРХНИЙ БЛОК: Форма с котиком */}
        <div className="w-full bg-[#D4EC5B] rounded-[40px] p-6 sm:p-10 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 relative shadow-xl">
          
          <div className="w-full md:w-[55%]">
            {/* Вставляем наш переиспользуемый компонент */}
            <ApplicationForm isModal={false} onSuccess={() => alert('Заявка отправлена!')} />
          </div>

          {/* Картинка котика */}
          <div className="hidden md:flex w-full md:w-[40%] justify-center md:justify-end items-end md:absolute md:right-4 md:-bottom-0.5">
            <img 
              src={catContact} 
              alt="Кот с телефоном" 
              className="w-[70%] md:w-[95%] h-auto block object-contain object-bottom max-h-[360px] md:max-h-[420px]" 
            />
          </div>
        </div>

        {/* НИЖНИЙ БЛОК: Соцсети (остается без изменений) */}
        <div className="w-full bg-[#D4EC5B] rounded-[40px] p-8 sm:p-10 flex flex-col md:flex-row justify-between items-stretch gap-6 md:gap-0 shadow-xl">
           {/* ... код соцсетей такой же, как был ... */}
           <div className="w-full md:w-1/2 flex items-center">
            <h3 className="font-['Unbounded'] font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight leading-tight">
              Или<br /> свяжись<br />напрямую<br />в соцсетях
            </h3>
          </div>
          
          {/* Вертикальная полоса-разделитель */}
          <div className="hidden md:block w-[2px] bg-black my-0 mx-8" />

          {/* Соцсети */}
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
            <a 
              href="https://t.me/antanovsky" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-4 font-['Unbounded'] font-black text-sm sm:text-lg text-black hover:opacity-70 transition-opacity"
            >
              <img src={tgIcon} alt="" className="w-7 h-7" /> Телеграм
            </a>

            <a 
              href="https://m.vk.com/antanovsky_ns" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-4 font-['Unbounded'] font-black text-sm sm:text-lg text-black hover:opacity-70 transition-opacity"
            >
              <img src={vkIcon} alt="" className="w-7 h-7" /> ВКонтакте
            </a>

            <a 
              href="https://max.ru/u/f9LHodD0cOJx0GukcD1TlO--TbhzIN4Z8WwPPwn91X9U3bUq3Z8LY5cRMcw" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-4 font-['Unbounded'] font-black text-sm sm:text-lg text-black hover:opacity-70 transition-opacity"
            >
              <img src={maxIcon} alt="" className="w-7 h-7" /> MAX
            </a>

            <a 
              href="tel:+79121862683" 
              className="flex items-center gap-4 font-['Unbounded'] font-black text-sm sm:text-lg text-black hover:opacity-70 transition-opacity"
            >
              <img src={phoneIcon} alt="" className="w-7 h-7" /> +7 (912) 186-26-83
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};