import React, { useEffect } from 'react';
// Импортируем универсальную форму
import { ApplicationForm } from './ApplicationForm'; 

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  
  // Логика блокировки скролла и закрытия по Escape остается здесь
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose} 
    >
      <div
        className="relative w-full max-w-lg bg-[#163060] border-4 border-[#D4EC5B] rounded-[32px] p-6 sm:p-10 shadow-2xl text-white transform transition-all duration-300 scale-100 animate-in fade-in zoom-in-95"
        onClick={(e) => e.stopPropagation()} 
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-white/60 hover:text-[#D4EC5B] hover:scale-110 active:scale-95 transition-all focus:outline-none"
          aria-label="Закрыть"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Заголовок */}
        <h3 className="font-['Unbounded'] font-bold text-2xl sm:text-3xl text-white uppercase tracking-tight mb-6 pr-8 leading-tight">
          Записаться <br className="hidden sm:inline" /> на занятие
        </h3>

        {/* Внедряем наш переиспользуемый компонент */}
        <ApplicationForm 
          isModal={true} 
          onSuccess={() => {
            alert('Заявка отправлена!');
            onClose(); // Закрываем модалку после успешной отправки
          }} 
        />
      </div>
    </div>
  );
};