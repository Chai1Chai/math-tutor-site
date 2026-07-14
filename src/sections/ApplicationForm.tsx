import React, { useState } from 'react';

interface ApplicationFormProps {
  isModal?: boolean;
  onSuccess?: () => void;
}

export const ApplicationForm: React.FC<ApplicationFormProps> = ({ isModal = false, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    classLvl: '',
    examType: '',
    agreed: false
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Логика маскирования телефона: +7 (XXX) XXX-XX-XX
  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, '');
    let formatted = digits;
    
    // Если пользователь начинает с 8, превращаем в 7
    if (formatted.startsWith('8')) formatted = '7' + formatted.slice(1);
    
    let result = '+7';
    if (formatted.length > 1) result += ' (' + formatted.substring(1, 4);
    if (formatted.length > 4) result += ') ' + formatted.substring(4, 7);
    if (formatted.length > 7) result += '-' + formatted.substring(7, 9);
    if (formatted.length > 9) result += '-' + formatted.substring(9, 11);
    
    return result;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Валидация: номер должен иметь вид +7 (XXX) XXX-XX-XX (18 символов)
    if (formData.phone.length < 18) {
      alert('Пожалуйста, введите корректный номер телефона');
      return;
    }

    setStatus('loading');
    console.log('Отправка данных:', formData); // Для тестов в консоли

    try {
      const response = await fetch('/send.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', classLvl: '', examType: '', agreed: false });
        if (onSuccess) onSuccess();
      } else {
        throw new Error('Ошибка сервера');
      }
    } catch (error) {
      console.error('Ошибка отправки:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (name === 'phone') {
      setFormData(prev => ({ ...prev, phone: formatPhone(value) }));
    } else if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, agreed: (e.target as HTMLInputElement).checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        name="name"
        type="text"
        placeholder="Ваше имя"
        value={formData.name}
        onChange={handleChange}
        className="w-full bg-white px-6 py-3.5 rounded-full font-['Montserrat'] text-base focus:outline-none placeholder-gray-400 text-black"
        required
      />

      <input
        name="phone"
        type="tel"
        placeholder="+7 (XXX) XXX-XX-XX"
        value={formData.phone}
        onChange={handleChange}
        className="w-full bg-white px-6 py-3.5 rounded-full font-['Montserrat'] text-base focus:outline-none placeholder-gray-400 text-black"
        required
      />

      <select
        name="classLvl"
        value={formData.classLvl}
        onChange={handleChange}
        className="w-full bg-white px-6 py-3.5 rounded-full font-['Montserrat'] text-base focus:outline-none appearance-none cursor-pointer text-gray-700"
        required
      >
        <option value="" disabled hidden>Класс</option>
        {[5, 6, 7, 8, 9, 10, 11].map(lvl => <option key={lvl} value={lvl}>{lvl} класс</option>)}
      </select>

      <select
        name="examType"
        value={formData.examType}
        onChange={handleChange}
        className="w-full bg-white px-6 py-3.5 rounded-full font-['Montserrat'] text-base focus:outline-none appearance-none cursor-pointer text-gray-700"
        required
      >
        <option value="" disabled hidden>Какой экзамен?</option>
        <option value="knowledge">Просто подтянуть знания</option>
        <option value="oge">ОГЭ</option>
        <option value="ege_base">ЕГЭ База</option>
        <option value="ege_profile">ЕГЭ Профиль</option>
      </select>

      <button
        type="submit"
        disabled={status === 'loading'}
        className={`w-full font-['Montserrat'] font-bold py-4 rounded-full transition-all duration-200 shadow-md uppercase tracking-wider text-sm 
          ${isModal ? 'bg-[#D4EC5B] text-black hover:bg-[#b6cc4c]' : 'bg-[#19315B] text-white hover:bg-[#122444]'}`}
      >
        {status === 'loading' ? 'Отправка...' : 'Записаться'}
      </button>

      <label className="flex items-center gap-3 cursor-pointer select-none pt-1">
        <input
          name="agreed"
          type="checkbox"
          checked={formData.agreed}
          onChange={handleChange}
          className={`cursor-pointer w-4 h-4 flex-shrink-0 ${isModal ? 'accent-[#D4EC5B]' : 'accent-[#19315B]'}`}
          required
        />
        <span className={`font-['Montserrat'] text-[10px] sm:text-xs leading-tight ${isModal ? 'text-white/70' : 'text-[#19315B]'}`}>
          Даю согласие на обработку персональных данных
        </span>
      </label>
      
      {status === 'error' && <p className="text-red-500 text-sm">Ошибка при отправке. Попробуйте еще раз.</p>}
    </form>
  );
};