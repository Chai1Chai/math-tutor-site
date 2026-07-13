import React, { useState, useRef } from 'react';

// Импорты ассетов
import bgImage from '../assets/images/photo/background.webp';
import reviewsBoard from '../assets/images/photo/reviews_board.webp'; // Изображение всей доски
import Darina from '../assets/video/Darina_4.mp4'; 
import Denis from '../assets/video/Denis_4.mp4'; 
import Ksenia from '../assets/video/Ksenia_5.mp4'; 
import Lesha from '../assets/video/Lesha_88.mp3';
import Nikita from '../assets/video/Nikita_86.mp3';
import result1 from '../assets/images/photo/result_maria.webp'; // Текстовые отзывы как изображения
import result2 from '../assets/images/photo/result_aleksey.webp';

// Данные для видеоотзывов
interface VideoReview {
  id: number;
  name: string;
  videoUrl: string;
  aspect: 'vertical' | 'horizontal'; // Добавили тип ориентации
}

const videoReviews: VideoReview[] = [
  { id: 1, name: "Дарина", videoUrl: Darina, aspect: 'horizontal' },
  { id: 2, name: "Денис", videoUrl: Denis, aspect: 'vertical' },
  { id: 3, name: "Ксения ", videoUrl: Ksenia, aspect: 'vertical' },
];

export const Reviews: React.FC = () => {
  // Теперь храним весь объект отзыва, чтобы знать его ориентацию
  const [activeVideo, setActiveVideo] = useState<VideoReview | null>(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isAudioPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsAudioPlaying(!isAudioPlaying);
  };

  const handleAudioEnded = () => {
    setIsAudioPlaying(false);
  };

  return (
    <section id="reviews" className="relative w-full bg-[#0C1931] py-15 lg:py-20 overflow-hidden select-none px-4 sm:px-8 md:px-16 lg:px-24">
      
      {/* Фон блока */}
      <div 
        className="absolute inset-0 z-0 opacity-5 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Основной контейнер контента */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        
        {/* Заголовок */}
        <h2 className="font-['Unbounded'] font-bold text-4xl md:text-5xl text-white uppercase tracking-tight mb-16 leading-[1.1]">
          Отзывы и результаты <br /> учеников
        </h2>

        {/* Часть 1: Большая пробковая доска */}
        <div className="w-full mb-16">
          <img 
            src={reviewsBoard} 
            alt="Доска с результатами ЕГЭ и ОГЭ" 
            className="w-full h-auto object-contain block select-none pointer-events-none"
          />
        </div>

        {/* Часть 2: Видеоотзывы в кружочках */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 items-center justify-center mb-16 px-6">
          {videoReviews.map((review) => (
            <div key={review.id} className="flex flex-col items-center group text-center">
              
              <button
                type="button"
                onClick={() => setActiveVideo(review)}
                className="relative w-40 h-40 sm:w-50 sm:h-50 rounded-full overflow-hidden border-4 border-[#D4EC5B] shadow-md transform transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#D4EC5B]"
              >
                <video
                  src={review.videoUrl}
                  preload="metadata"
                  muted
                  className="w-full h-full object-cover pointer-events-none"
                />
                
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <svg 
                    className="w-10 h-10 text-[#D4EC5B]" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </button>

              <span className="font-['Montserrat'] font-bold text-white text-base md:text-lg mt-3">
                {review.name}
              </span>
              
            </div>
          ))}
        </div>

        {/* Часть 3: Контейнер для аудиоотзывов (В строку на ПК, в колонку на мобилках) */}
        <div className="flex flex-col md:flex-row gap-6 w-full mb-16">
          
          {/* Первый Аудиоотзыв */}
          <div className="w-full md:flex-1 bg-[#13223f] border-2 border-[#D4EC5B]/30 rounded-[24px] p-6 flex flex-col sm:flex-row items-center gap-6 shadow-xl">
            <audio ref={audioRef} src={Lesha} onEnded={handleAudioEnded} />
            
            <button
              type="button"
              onClick={toggleAudio}
              className="flex-shrink-0 w-16 h-16 rounded-full bg-[#D4EC5B] flex items-center justify-center text-black shadow-md transform transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#D4EC5B]/40"
            >
              {isAudioPlaying ? (
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
              ) : (
                <svg className="w-7 h-7 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              )}
            </button>

            <div className="flex flex-col text-center sm:text-left">
              <h4 className="font-['Montserrat'] font-bold text-white text-lg sm:text-xl leading-snug">Сдал ЕГЭ по профилю на 88 баллов</h4>
              <p className="font-['Montserrat'] font-light text-sm text-white/70 mt-1">Леша занимался у Кирилла всего один год. История о том, как готовиться к самому сложному экзамену без лишнего напряга и забрать свои заветные баллы.</p>
            </div>

            <div className="hidden sm:block ml-auto text-[#D4EC5B]/40">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/></svg>
            </div>
          </div>

          {/* Второй Аудиоотзыв */}
          <div className="w-full md:flex-1 bg-[#13223f] border-2 border-[#D4EC5B]/30 rounded-[24px] p-6 flex flex-col sm:flex-row items-center gap-6 shadow-xl">
            <audio ref={audioRef} src={Nikita} onEnded={handleAudioEnded} />
            
            <button
              type="button"
              onClick={toggleAudio}
              className="flex-shrink-0 w-16 h-16 rounded-full bg-[#D4EC5B] flex items-center justify-center text-black shadow-md transform transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#D4EC5B]/40"
            >
              {isAudioPlaying ? (
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
              ) : (
                <svg className="w-7 h-7 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              )}
            </button>

            <div className="flex flex-col text-center sm:text-left">
              <h4 className="font-['Montserrat'] font-bold text-white text-lg sm:text-xl leading-snug">Сдал ЕГЭ по профилю на 86 баллов</h4>
              <p className="font-['Montserrat'] font-light text-sm text-white/70 mt-1">Никита готовился к профильной математике с Кириллом. Легкая атмосфера, мощные пробники, полезные дз и результат, о котором мечтал!</p>
            </div>

            <div className="hidden sm:block ml-auto text-[#D4EC5B]/40">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/></svg>
            </div>
          </div>

        </div>

        {/* Часть 4: Два изображения с результатами */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-6 w-full">
          <div className="w-full">
            <img 
              src={result1} 
              alt="Текстовый отзыв: Мария, ОГЭ" 
              className="w-full h-auto block object-contain select-none shadow-lg"
            />
          </div>
          <div className="w-full">
            <img 
              src={result2} 
              alt="Текстовый отзыв: Алексей, ЕГЭ" 
              className="w-full h-auto block object-contain select-none shadow-lg"
            />
          </div>
        </div>

      </div>

      {/* --- УНИВЕРСАЛЬНОЕ МОДАЛЬНОЕ ОКНО --- */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setActiveVideo(null)}
        >
          {/* Контейнер адаптирует ширину под activeVideo.aspect */}
          <div 
            className={`relative w-full bg-[#0C1931] border-2 border-[#D4EC5B] rounded-[32px] overflow-hidden p-1 shadow-2xl animate-in fade-in zoom-in-95 duration-200 
              ${activeVideo.aspect === 'vertical' ? 'max-w-[360px] sm:max-w-[400px]' : 'max-w-[720px] sm:max-w-[800px]'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-10 bg-black/60 text-white rounded-full p-2.5 hover:bg-[#D4EC5B] hover:text-black transition-colors duration-200 focus:outline-none shadow-md"
              aria-label="Закрыть видео"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Плеер адаптирует соотношение сторон: aspect-[9/16] для вертикального или aspect-video (16:9) для горизонтального */}
            <video
              src={activeVideo.videoUrl}
              controls
              autoPlay
              playsInline
              className={`w-full h-auto max-h-[80vh] rounded-[28px] block object-contain 
                ${activeVideo.aspect === 'vertical' ? 'aspect-[9/16]' : 'aspect-video'}`}
            />
          </div>
        </div>
      )}

    </section>
  );
};