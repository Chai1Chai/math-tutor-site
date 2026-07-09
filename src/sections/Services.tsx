import React from 'react';

// Импорты ассетов котиков (названия файлов подгони под свои)
import catOge from '../assets/images/cats/cat_oge.png'; // Кот в очках
import catEgeProfile from '../assets/images/cats/cat_ege_profile.png'; // Кот в конфедератке (магистр)
import catEgeBase from '../assets/images/cats/cat_ege_base.png'; // Кот с калькулятором
import catUp from '../assets/images/cats/cat_up.png'; // Кот с поднятой лапой


interface ServiceCardProps {
  title: string;
  groupPrice?: string;
  indivPrice: string;
  catImg: string;
  catAlt: string;
  catClass: string;
  description?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  groupPrice,
  indivPrice,
  catImg,
  catAlt,
  catClass,
  description,
}) => {
  return (
    <div className="relative w-full bg-[#19315B] border-[5px] border-[#D4EC5B] rounded-[28px] p-6 sm:p-8 md:p-10 flex flex-col justify-between overflow-hidden shadow-xl">
      
      {/* Контентная часть */}
      <div className="z-10 max-w-[60%] sm:max-w-[65%]">
        {/* Заголовок направления */}
        <h3 className="font-['Unbounded'] font-black text-2xl lg:text-4xl text-white uppercase tracking-tight mb-4 border-b-2 border-[#D4EC5B] pb-3">
          {title}
        </h3>

        {/* Цены и описание */}
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
              {/* Показываем только цену, так как текст «Индивидуально 5-8 класс» уже передан в description */}
              <p className="font-['Unbounded'] text-[#D4EC5B] text-xl md:text-3xl font-black tracking-tight mt-1">{indivPrice}</p>
            </div>
          )}

          {/* Стандартный блок выводится ТОЛЬКО если description нет */}
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
            onClick={() => {
              const element = document.getElementById('contacts');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="font-['Unbounded'] font-bold text-sm md:text-sm  bg-[#D4EC5B] text-black px-4 md:px-8 py-3 rounded-full uppercase tracking-wider hover:bg-[#B6D139] transition-colors duration-200"
          >
            Записаться
          </button>
      </div>

      {/* Абсолютно позиционированный котик */}
      <div className={`absolute right-0 bottom-0 z-0 pointer-events-none select-none ${catClass}`}>
        <img src={catImg} alt={catAlt} className="w-full h-auto block object- йcontain object-bottom" />
      </div>
    </div>
  );
};

export const Services: React.FC = () => {
  return (
    // Ограничения и структура блока в соответствии с твоим запросом
    <section id="services" className="relative w-full h-full bg-white py-20 lg:py-28 overflow-hidden select-none px-4 sm:px-8 md:px-16 lg:px-24">


      {/* Основной контейнер контента — растянут на всю ширину до max-w-7xl */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
        {/* Лаймовые декоративные полосы, расходящиеся из правого края за экраном */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-0 flex flex-col justify-center items-center pointer-events-none mix-blend-multiply opacity-95">
          {/* Верхняя линия: наклонена вверх влево, точка начала наклона справа */}
          <div className="w-[300%] h-24 sm:h-30 bg-[#D4EC5B] transform origin-right -skew-y-11 scale-x-110" />
          {/* Нижняя линия: наклонена вниз влево, точка начала наклона справа */}
          <div className="w-[350%] h-24 sm:h-30 bg-[#D4EC5B] transform origin-right skew-y-11 scale-x-110 mt-4 sm:mt-6" />
        </div>

        {/* Главный заголовок блока (прижат влево для баланса с макетом) */}
        <div className="w-full text-left mb-12 sm:mb-16">
          <h2 className="font-['Unbounded'] font-black text-4xl md:text-5xl text-black uppercase tracking-tight leading-[1.1]">
            Направления обучения
          </h2>
        </div>

        {/* Сетка карточек — занимает полные 100% ширины max-w-7xl */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full auto-rows-fr">
          
          {/* 1. ОГЭ */}
          <ServiceCard
            title="ОГЭ"
            groupPrice="1500 р/час"
            indivPrice="2500 р/час"
            catImg={catOge}
            catAlt="Кот в очках для ОГЭ"
            catClass="w-[45%] max-w-[190px] md:max-w-[220px] translate-y-[15px] right-2"
          />

          {/* 2. ЕГЭ ПРОФИЛЬ */}
          <ServiceCard
            title="ЕГЭ ПРОФИЛЬ"
            groupPrice="1500 р/час"
            indivPrice="2500 р/час"
            catImg={catEgeProfile}
            catAlt="Кот-выпускник для профильного ЕГЭ"
            catClass="w-[50%] max-w-[210px] md:max-w-[240px] translate-y-[5px] right-1"
          />

          {/* 3. ЕГЭ БАЗА */}
          <ServiceCard
            title="ЕГЭ БАЗА"
            indivPrice="2500 р/час"
            catImg={catEgeBase}
            catAlt="Кот с калькулятором для базового ЕГЭ"
            catClass="w-[40%] max-w-[180px] md:max-w-[210px] translate-y-[10px] right-4"
          />

          {/* 4. Повышение успеваемости */}
          <ServiceCard
            title="Повышение успеваемости"
            description="Индивидуально 5-8 класс:"
            indivPrice="2500 р/час"
            catImg={catUp}
            catAlt="Кот тянет лапу вверх"
            catClass="w-[60%] max-w-[500px] md:max-w-[250px] translate-y-[2px] right-0"
          />

        </div>

      </div>
    </section>
  );
};