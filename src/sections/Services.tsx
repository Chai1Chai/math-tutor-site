import React, { useState, useEffect, useRef } from 'react';

// Импорты ассетов котиков
import catOge from '../assets/images/cats/cat_oge.webp'; 
import catEgeProfile from '../assets/images/cats/cat_ege_profile.webp'; 
import catEgeBase from '../assets/images/cats/cat_ege_base.webp'; 
import catUp from '../assets/images/cats/cat_up.webp'; 

interface ServiceCardProps {
  title: string;
  groupPrice?: string;
  indivPrice: string;
  catImg: string;
  catAlt: string;
  catClass: string;
  description?: string;
  onOpenModal: () => void; // Добавлен пропс для открытия модалки
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  groupPrice,
  indivPrice,
  catImg,
  catAlt,
  catClass,
  description,
  onOpenModal,
}) => {
  return (
    <div className="relative w-full bg-[#19315B] border-[5px] border-[#D4EC5B] rounded-[28px] p-6 sm:p-8 md:p-10 flex flex-col justify-between overflow-hidden shadow-xl
                    group transform transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] 
                    hover:-translate-y-2 hover:scale-[1.01] hover:shadow-2xl hover:shadow-[#D4EC5B]/10 cursor-pointer">
      
      {/* Контентная часть */}
      <div className="z-10 max-w-[60%] sm:max-w-[65%]">
        <h3 className="font-['Unbounded'] font-black text-2xl lg:text-4xl text-white uppercase tracking-tight mb-4 border-b-2 border-[#D4EC5B] pb-3">
          {title}
        </h3>

        <div className="space-y-4">
          {groupPrice && (
            <div>
              <p className="font-['Montserrat'] text-white text-xs sm:text-xl font-light">Мини группы (3-4 человека):</p>
              <p className="font-['Unbounded'] text-[#D4EC5B] text-xl md:text-3xl font-black tracking-tight mt-0.5">{groupPrice}</p>
            </div>
          )}
          
          {description && (
            <div>
              <p className="font-['Montserrat'] text-white text-xs md:text-xl font-light leading-tight">{description}</p>
              <p className="font-['Unbounded'] text-[#D4EC5B] text-xl md:text-3xl font-black tracking-tight mt-1">{indivPrice}</p>
            </div>
          )}

          {!description && (
            <div>
              <p className="font-['Montserrat'] text-white text-xs md:text-xl font-light">Индивидуальные уроки:</p>
              <p className="font-['Unbounded'] text-[#D4EC5B] text-xl md:text-3xl font-black tracking-tight mt-1">{indivPrice}</p>
            </div>
          )}
        </div>
      </div>

      {/* Кнопка действия */}
      <div className="z-10 pt-6 sm:pt-20 mt-auto">
          <button 
            type="button"
            aria-label="Записаться на бесплатную консультацию по математике"
            onClick={(e) => {
              e.stopPropagation(); 
              onOpenModal(); // Вызов модального окна
            }}
            className="font-['Unbounded'] font-bold text-sm md:text-sm bg-[#D4EC5B] text-black px-4 md:px-8 py-3 rounded-full uppercase tracking-wider hover:bg-[#B6D139] transition-transform duration-200 active:scale-95"
          >
            Записаться
          </button>
      </div>

      {/* Котик */}
      <div className={`absolute right-0 bottom-0 z-0 pointer-events-none select-none ${catClass}`}>
        <img 
          src={catImg} 
          alt={catAlt} 
          className="w-full h-auto block object-contain object-bottom origin-bottom
                     transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] 
                     group-hover:scale-105" 
        />
      </div>
    </div>
  );
};

interface ServicesProps {
  onOpenModal: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenModal }) => {
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
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative w-full h-full bg-white py-20 lg:py-28 overflow-hidden select-none px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
        {/* Лаймовые полосы */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-0 flex flex-col justify-center items-center pointer-events-none mix-blend-multiply opacity-95">
          <div className="w-[300%] h-24 sm:h-30 bg-[#D4EC5B] transform origin-right -skew-y-11 scale-x-110" />
          <div className="w-[350%] h-24 sm:h-30 bg-[#D4EC5B] transform origin-right skew-y-11 scale-x-110 mt-4 sm:mt-6" />
        </div>

        <div className="w-full text-left mb-12 sm:mb-16 overflow-hidden">
          <h2 className={`font-['Unbounded'] font-black text-4xl md:text-5xl text-black uppercase tracking-tight leading-[1.1] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isAnimate ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-12 blur-[2px]'}`}>
            Направления обучения
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full auto-rows-fr">
          <ServiceCard title="ОГЭ" groupPrice="1500 р/час" indivPrice="2500 р/час" catImg={catOge} catAlt="Кот в очках для ОГЭ" catClass="w-[45%] max-w-[190px] md:max-w-[220px] translate-y-[15px] right-2" onOpenModal={onOpenModal} />
          <ServiceCard title="ЕГЭ ПРОФИЛЬ" groupPrice="1500 р/час" indivPrice="2500 р/час" catImg={catEgeProfile} catAlt="Кот-выпускник для профильного ЕГЭ" catClass="w-[50%] max-w-[210px] md:max-w-[240px] translate-y-[5px] right-1" onOpenModal={onOpenModal} />
          <ServiceCard title="ЕГЭ БАЗА" indivPrice="2500 р/час" catImg={catEgeBase} catAlt="Кот с калькулятором для базового ЕГЭ" catClass="w-[40%] max-w-[180px] md:max-w-[210px] translate-y-[10px] right-4" onOpenModal={onOpenModal} />
          <ServiceCard title="Повышение успеваемости" description="Индивидуально 5-8 класс:" indivPrice="2500 р/час" catImg={catUp} catAlt="Кот тянет лапу вверх" catClass="w-[60%] max-w-[500px] md:max-w-[250px] translate-y-[2px] right-0" onOpenModal={onOpenModal} />
        </div>
      </div>
    </section>
  );
};