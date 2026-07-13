import React, { useState } from 'react';


import tgIcon from '../assets/images/icons/TelegramLogo.svg';
import vkIcon from '../assets/images/icons/VKLogo.svg';
import maxIcon from '../assets/images/icons/MAXLogo.svg';
import phoneIcon from '../assets/images/icons/PhoneLogo.svg';
import catContact from '../assets/images/cats/catContact.webp'; 

export const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [classLvl, setClassLvl] = useState('');
  const [examType, setExamType] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, phone, classLvl, examType, agreed });
    // Здесь логика отправки данных (fetch/axios)
  };

  return (
    <section id="contacts" className="w-full bg-[#E5E9EC] py-20 px-4 sm:px-8 md:px-16 lg:px-24 text-black select-none relative overflow-hidden">
      
      {/* Большие темно-синие декоративные полосы на фоне */}
      <div className="absolute inset-0 z-0 pointer-events-none flex flex-col justify-center items-center">
        <div className="w-[150%] h-36 bg-[#19315B] transform -skew-y-12 rotate-6 scale-x-110" />
        <div className="w-[150%] h-36 bg-[#19315B] transform skew-y-12 -rotate-6 scale-x-110 -mt-20" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col gap-6">
        
        {/* Главный заголовок блока */}
        <h2 className="font-['Unbounded'] font-black text-4xl md:text-5xl text-black uppercase tracking-tight text-start mb-6">
          Запишись на занятие
        </h2>

        {/* ВЕРХНИЙ БЛОК: Форма с котиком */}
        <div className="w-full bg-[#D4EC5B] rounded-[40px] p-6 sm:p-10 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 relative shadow-xl">
          
          {/* Сама форма */}
          <form onSubmit={handleSubmit} className="w-full md:w-[55%] flex flex-col space-y-4">
            
            {/* Поле: Ваше имя */}
            <input
              type="text"
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white px-6 py-3.5 rounded-full font-['Montserrat'] text-base focus:outline-none placeholder-gray-400"
              required
            />

            {/* Поле: Номер телефона */}
            <input
              type="tel"
              placeholder="Номер телефона"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-white px-6 py-3.5 rounded-full font-['Montserrat'] text-base focus:outline-none placeholder-gray-400"
              required
            />

            {/* Выпадающий список: Класс */}
            <div className="relative">
              <select
                value={classLvl}
                onChange={(e) => setClassLvl(e.target.value)}
                className="w-full bg-white px-6 py-3.5 rounded-full font-['Montserrat'] text-base focus:outline-none appearance-none cursor-pointer text-gray-700"
                required
              >
                <option value="" disabled hidden>Класс</option>
                <option value="5">5 класс</option>
                <option value="6">6 класс</option>
                <option value="7">7 класс</option>
                <option value="8">8 класс</option>
                <option value="9">9 класс</option>
                <option value="10">10 класс</option>
                <option value="11">11 класс</option>
              </select>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Выпадающий список: Выбор цели / экзамена */}
            <div className="relative">
              <select
                value={examType}
                onChange={(e) => setExamType(e.target.value)}
                className="w-full bg-white px-6 py-3.5 rounded-full font-['Montserrat'] text-base focus:outline-none appearance-none cursor-pointer text-gray-700"
                required
              >
                <option value="" disabled hidden>Какой экзамен?</option>
                <option value="knowledge">Просто подтянуть знания / успеваемость</option>
                <option value="oge">ОГЭ</option>
                <option value="ege_base">ЕГЭ База</option>
                <option value="ege_profile">ЕГЭ Профиль</option>
              </select>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Кнопка Записаться */}
            <button
              type="submit"
              className="w-full bg-[#19315B] text-white font-['Montserrat'] font-bold py-4 rounded-full transition-all duration-200 hover:bg-[#122444] shadow-md uppercase tracking-wider text-sm"
            >
              Записаться
            </button>

            {/* Чекбокс согласия */}
            <label className="flex items-start gap-3 cursor-pointer select-none pt-1">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 accent-[#19315B] cursor-pointer w-4 h-4 flex-shrink-0"
                required
              />
              <span className="font-['Montserrat'] text-[10px] sm:text-xs text-[#19315B] leading-tight">
                Даю <a href="#" className="underline font-semibold">Согласие на обработку своих персональных данных</a> в соответствии с <a href="#" className="underline font-semibold">Политикой конфиденциальности</a>
              </span>
            </label>
          </form>

          {/* Картинка котика catContact.png */}
          <div className="hidden md:flex w-full md:w-[40%]  justify-center md:justify-end items-end md:absolute md:right-4 md:bottom-0">
            <img 
              src={catContact} 
              alt="Кот с телефоном" 
              className="w-[70%] md:w-[95%] h-auto block object-contain object-bottom max-h-[360px] md:max-h-[420px]" 
            />
          </div>

        </div>

        {/* НИЖНИЙ БЛОК: Или свяжись напрямую */}
        <div className="w-full bg-[#D4EC5B] rounded-[40px] p-8 sm:p-10 flex flex-col md:flex-row justify-between items-stretch gap-6 md:gap-0 shadow-xl">
          
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