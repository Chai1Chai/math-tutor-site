import React from 'react';

import bgImage from '../assets/images/photo/background.webp';
import Aboutme_video from '../assets/video/Antanovskiy_promo_v5.mp4';

export const VideoSection: React.FC = () => {
  return (
    <section 
      className="relative w-full bg-white py-20 lg:py-28 overflow-hidden select-none px-4 sm:px-8 md:px-16 lg:px-24"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Затемняющий оверлей для лучшей читаемости текста (как на картинке) */}
      <div className="absolute inset-0 bg-[#0f172a]/95 z-0"></div>

      {/* Контейнер с контентом */}
      <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* Левая часть: Текст */}
        <div className="flex flex-col text-white">
          <h1 className="font-['Unbounded'] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Я репетитор <br />
            по математике!
          </h1>
          
          <p className="font-['Montserrat'] text-base sm:text-lg lg:text-xl text-gray-200 mb-6 leading-relaxed">
            Выпускник БГТУ «ВОЕНМЕХ», студент Hangzhou Normal University и кандидат в мастера спорта. Сдал ЕГЭ на 98 баллов.
          </p>
          
          <p className="font-['Montserrat'] text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed">
            Моя цель — помочь тебе сдать экзамены на максимум, раскрыть свой потенциал и прийти к результату без стресса и слёз!
          </p>
        </div>

        {/* Правая часть: Видео */}
        <div className="hidden lg:flex w-full justify-center lg:justify-end">
          
          {/* Контейнер видео: 16:9 (горизонтальный), желтая рамка */}
          <div className="relative w-full max-w-[600px] aspect-video rounded-2xl overflow-hidden border-[3px] border-[#d9d97a] shadow-2xl bg-[#1a2332]">
            <video 
              src={Aboutme_video} 
              controls 
              className="w-full h-full object-contain" // object-contain чтобы видео не обрезалось
              // или object-cover, если оно ровно 16:9
            >
              Ваш браузер не поддерживает видео.
            </video>
          </div>

        </div>

      </div>
    </section>
  );
};

