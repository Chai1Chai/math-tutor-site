export interface Question {
  id: number;
  text: string;
  isMathText?: boolean; // Флаг, если весь текст вопроса — это формула
  mathFormula?: string; // Сама формула для рендеринга отдельно
  options: string[];
  isMathOptions?: boolean; // Флаг, если варианты ответов — это формулы
  correctAnswer: number;
}

export interface Quiz {
  title: string;
  pdfUrl: string;
  questions: Question[];
}

export const quizData: Record<'OGE' | 'EGE', Quiz> = {
  OGE: {
    title: 'ОГЭ по математике',
    pdfUrl: '/docs/oge-plan.pdf', // Скачивается из папки public/files/
    questions: [
      { id: 1, text: 'Найдите значение выражения:', mathFormula: '3^3 - \\sqrt {64}', options: ['18', '19', '20', '21'], correctAnswer: 1 },
      { id: 2, text: 'После повышения цены на 15% товар стал стоить 1380 рублей. Какова была первоначальная цена?', options: ['1180 руб.', '1190 руб.', '1200 руб.', '1210 руб.'], correctAnswer: 2 },
      { id: 3, text: 'Решите уравнение:', mathFormula: '4(x - 3) = 2x + 2', options: ['5', '6', '7', '8'], correctAnswer: 3 },
      { id: 4, text: 'Решите неравенство:', mathFormula: '7 - 2x \\le 3', options: ['x \\ge 2', 'x > 2', 'x \\le 2', 'x < 2'], isMathOptions: true, correctAnswer: 0 },
      { id: 5, text: 'Первый член арифметической прогрессии равен 8, разность равна 5. Найдите шестой член.', options: ['28', '30', '31', '33'], correctAnswer: 3 },
      { id: 6, text: 'Один из острых углов прямоугольного треугольника равен 38°. Чему равен второй острый угол?', options: ['50°', '51°', '52°', '53°'], correctAnswer: 2 },
      { id: 7, text: 'Игральную кость бросают один раз. Какова вероятность получить число, кратное 3?', options: ['1/6', '1/3', '1/2', '2/3'], isMathOptions: true, correctAnswer: 1 },
      { id: 8, text: 'Для функции найдите значение x, если y = -10:', mathFormula: 'y = -3x + 8', options: ['5', '6', '7', '8'], correctAnswer: 1 },
      { id: 9, text: 'Решите уравнение:', mathFormula: '2x^2 - 7x + 3 = 0', options: ['x = 3 \\text{ и } x = 1', 'x = 3 \\text{ и } x = 1/2', 'x = 2 \\text{ и } x = 3/2', 'x = 1 \\text{ и } x = 3/2'], isMathOptions: true, correctAnswer: 1 },
      { id: 10, text: 'Из двух городов одновременно навстречу друг другу выехали автомобиль (90 км/ч) и автобус (70 км/ч). Расстояние между ними — 400 км. Через сколько часов они встретятся?', options: ['2 ч', '2,25 ч', '2,5 ч', '2,75 ч'], correctAnswer: 2 },
    ]
  },
  EGE: {
    title: 'ЕГЭ Профиль',
    pdfUrl: '/docs/plan_ege.pdf',
    questions: [
      { id: 1, text: 'Вычислите значение выражения:', mathFormula: '5^2 - 2^4 + \\sqrt{49}', options: ['15', '16', '17', '18'], correctAnswer: 1 },
      { id: 2, text: 'Решите уравнение:', mathFormula: '\\log_3 x = 4', options: ['27', '64', '81', '243'], correctAnswer: 2 },
      { id: 3, text: 'Решите уравнение:', mathFormula: 'sqrt{x+5} = x-1', options: ['1', '2', '3', '4'], correctAnswer: 4 },
      { id: 4, text: 'Вычислите значение выражения:', mathFormula: '\\sin 0 + \\cos \\pi', options: ['-2', '-1', '0', '1'], correctAnswer: 1 },
      { id: 5, text: 'Найдите производную функции:', mathFormula: 'y = x^4 - 6x^2 + 7', options: ['4x^3 - 6x', '4x^3 - 12x', '4x^4 - 12x', '3x^3 - 12x'], isMathOptions: true, correctAnswer: 1 },
      { id: 6, text: 'В равнобедренном треугольнике боковые стороны равны 13 см, основание — 10 см. Найдите высоту, проведённую к основанию.', options: ['10', '11', '12', '13'], correctAnswer: 2 },
      { id: 7, text: 'Решите неравенство:', mathFormula: '\\frac{x - 5}{x + 2} > 0', options: ['(-2; 5)', '(-\\infty; -2) \\cup (5; +\\infty)', '(-\\infty; 5)', '(-2; +\\infty)'], isMathOptions: true, correctAnswer: 1 },
      { id: 8, text: 'В урне лежат 8 белых, 5 чёрных и 7 красных шаров. Какова вероятность достать чёрный шар?', options: ['1/5', '1/4', '1/3', '2/5'], correctAnswer: 1 },
      { id: 9, text: 'Вклад составляет 40 000 рублей. Каждый год сумма увеличивается на 8%. Какой станет сумма через два года?', options: ['46 464 руб.', '46 556 руб.', '46 656 руб.', '46 756 руб.',], correctAnswer: 2 },
      { id: 10, text: 'Решите уравнение:', mathFormula: '\\sqrt{x + 7} = x - 1', options: ['x = 1', 'x = 2', 'x = 3', 'x = 4'], isMathOptions: true, correctAnswer: 2 },
    ]
  }
};