import type { Lesson } from '../../types'

export const lesson65MiniTest: Lesson = {
  id: 'a1-m6-l5',
  moduleId: 'm6-time',
  order: 4,
  title: 'Mini-test: hora, días, fechas y frecuencia',
  objective: 'Repasar y evaluar todo el módulo 6: decir la hora, los días, los meses, las fechas y los adverbios de frecuencia.',
  explanation_es: `Esta es la lección final del Módulo 6. Antes del mini-test, repasemos lo esencial:

**Decir la hora:**
- Pregunta: What time is it? = ¿Qué hora es?
- En punto: It is three o'clock.
- Y media: It is half past three.
- Y cuarto: It is a quarter past three.
- Menos cuarto: It is a quarter to four.
- am (mañana) / pm (tarde-noche).
- Para decir a qué hora haces algo: at + hora (I get up at seven o'clock).

**Los días de la semana:**
- Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.
- Con días usamos "on": on Monday. NUNCA "in Monday".
- El fin de semana: at the weekend (UK) / on the weekend (US).

**Los meses, las estaciones y las fechas:**
- 12 meses (January... December), 4 estaciones (spring, summer, autumn/fall, winter).
- Ordinales: 1st, 2nd, 3rd, 4th... 21st, 22nd, 23rd...
- Con fechas usamos "on": on the 15th of June. Con mes/año/estación sueltos, "in": in May, in 1990, in winter.

**Los adverbios de frecuencia:**
- always, usually, often, sometimes, rarely, never.
- ANTES del verbo principal: I always get up at 7.
- DESPUÉS de "to be": She is always tired. / I am never late.`,
  examples: [
    { english: 'What time is it? — It is half past ten.', spanish: '¿Qué hora es? — Son las diez y media.', note: 'Repaso de la hora.' },
    { english: 'I work on Monday.', spanish: 'Trabajo el lunes.', note: 'on + día.' },
    { english: 'My birthday is on the 15th of June.', spanish: 'Mi cumpleaños es el 15 de junio.', note: 'on + fecha.' },
    { english: 'It is cold in winter.', spanish: 'Hace frío en invierno.', note: 'in + estación.' },
    { english: 'I always get up at 7.', spanish: 'Siempre me levanto a las 7.', note: 'Adverbio antes del verbo.' },
    { english: 'She is always tired.', spanish: 'Ella siempre está cansada.', note: 'Adverbio después de "to be".' },
  ],
  rule: `**Resumen del módulo:**
- Hora: What time is it? → It is + time. En punto = o'clock; y media = half past; y cuarto = a quarter past; menos cuarto = a quarter to. am/pm.
- "at" + hora para decir a qué hora haces algo.
- Días: Monday...Sunday (con mayúscula). Preposición "on" + día. Weekend: at (UK) / on (US).
- Meses y estaciones: January...December, spring/summer/autumn (fall)/winter. Preposición "in" + mes/año/estación.
- Fechas y ordinales: on the 15th of June; 1st, 2nd, 3rd, 4th... 21st, 22nd, 23rd.
- Adverbios de frecuencia: antes del verbo principal (always get up) y después de "to be" (is always).`,
  commonMistakes: [
    { wrong: '❌ It are three o\'clock.', correct: '✅ It is three o\'clock.', explanation: 'Para la hora siempre usamos "it is", aunque en español digamos "son las...".' },
    { wrong: '❌ I work in Monday.', correct: '✅ I work on Monday.', explanation: 'Con los días usamos "on", nunca "in".' },
    { wrong: '❌ I get up always at 7.', correct: '✅ I always get up at 7.', explanation: 'El adverbio de frecuencia va ANTES del verbo principal.' },
  ],
  vocabulary: [],
  grammarPoints: [],
  exercises: [
    {
      id: 'a1-m6-l5-ex1',
      type: 'multiple_choice',
      concept: 'module 6 review - telling time',
      difficulty: 1,
      prompt: '¿Cómo se dice "Son las seis y cuarto"?',
      promptTranslation: 'How do you say 6:15?',
      correctAnswer: 'It is a quarter past six.',
      options: ['It is a quarter past six.', 'It is a quarter to six.', 'It is six o\'clock.'],
      explanation: 'Las 6:15 se dicen "a quarter past six" (y cuarto).',
    },
    {
      id: 'a1-m6-l5-ex2',
      type: 'multiple_choice',
      concept: 'module 6 review - on + day',
      difficulty: 1,
      prompt: 'Completa: "I have English class ___ Wednesday."',
      promptTranslation: 'Tengo clase de inglés el miércoles.',
      correctAnswer: 'on',
      options: ['on', 'in', 'at'],
      explanation: 'Con los días usamos "on": on Wednesday.',
    },
    {
      id: 'a1-m6-l5-ex3',
      type: 'fill_blank',
      concept: 'module 6 review - months',
      difficulty: 2,
      prompt: 'Completa: "___ is the last month of the year."',
      promptTranslation: 'Diciembre es el último mes del año.',
      correctAnswer: 'December',
      acceptedAnswers: ['december', 'December.'],
      explanation: 'December (diciembre) es el mes 12, el último del año.',
    },
    {
      id: 'a1-m6-l5-ex4',
      type: 'fill_blank',
      concept: 'module 6 review - at + time',
      difficulty: 2,
      prompt: 'Completa: "The train is ___ half past eight."',
      promptTranslation: 'El tren es a las ocho y media.',
      correctAnswer: 'at',
      acceptedAnswers: ['At'],
      explanation: 'Para decir a qué hora pasa algo usamos "at": at half past eight.',
    },
    {
      id: 'a1-m6-l5-ex5',
      type: 'multiple_choice',
      concept: 'module 6 review - adverb after to be',
      difficulty: 2,
      prompt: '¿Cuál es la frase correcta?',
      promptTranslation: 'Which sentence is correct?',
      correctAnswer: 'I am never late.',
      options: ['I am never late.', 'I never am late.', 'I am late never.'],
      explanation: 'Con "to be", el adverbio va después del verbo: I am never late.',
    },
    {
      id: 'a1-m6-l5-ex6',
      type: 'reorder',
      concept: 'module 6 review - adverb + routine',
      difficulty: 3,
      prompt: 'Ordena: I / usually / go to work / at 8',
      promptTranslation: 'Normalmente voy al trabajo a las 8.',
      correctAnswer: 'I usually go to work at 8.',
      words: ['I', 'usually', 'go to work', 'at 8'],
      explanation: 'El adverbio va antes del verbo: I usually go to work at 8.',
    },
    {
      id: 'a1-m6-l5-ex7',
      type: 'error_correction',
      concept: 'module 6 review - adverb position',
      difficulty: 3,
      prompt: 'Corrige el error: "I get up always at 7."',
      correctAnswer: 'I always get up at 7.',
      acceptedAnswers: ['I always get up at 7', 'i always get up at 7.', 'I always get up at seven o\'clock.'],
      acceptApproximate: true,
      explanation: 'El adverbio de frecuencia va ANTES del verbo principal: I always get up at 7.',
    },
    {
      id: 'a1-m6-l5-ex8',
      type: 'translate',
      concept: 'module 6 review - birthday date',
      difficulty: 3,
      prompt: 'Traduce: "Mi cumpleaños es el 15 de junio."',
      correctAnswer: 'My birthday is on the 15th of June.',
      acceptedAnswers: ['My birthday is on the 15th of June', 'My birthday is on June 15.', 'my birthday is on the 15th of june.'],
      acceptApproximate: true,
      explanation: 'Con fecha usamos "on": My birthday is on the 15th of June. (También válido: on June 15.)',
    },
    {
      id: 'a1-m6-l5-ex9',
      type: 'match',
      concept: 'module 6 review - time, days, months',
      difficulty: 3,
      prompt: 'Relaciona cada expresión con su significado.',
      promptTranslation: 'Match each expression with its meaning.',
      correctAnswer: '',
      pairs: [
        { left: 'three o\'clock', right: '3:00' },
        { left: 'half past nine', right: '9:30' },
        { left: 'on Monday', right: 'el lunes' },
        { left: 'in December', right: 'en diciembre' },
        { left: 'in winter', right: 'en invierno' },
        { left: 'at the weekend', right: 'el fin de semana' },
      ],
      explanation: 'three o\'clock = 3:00; half past nine = 9:30; on Monday = el lunes; in December = en diciembre; in winter = en invierno; at the weekend = el fin de semana.',
    },
    {
      id: 'a1-m6-l5-ex10',
      type: 'true_false',
      concept: 'module 6 review - in + day (rule)',
      difficulty: 3,
      prompt: 'Frase correcta: "In English, we say \'in Monday\'."',
      promptTranslation: 'En inglés, decimos "in Monday".',
      correctAnswer: 'false',
      acceptedAnswers: ['False', 'FALSE'],
      explanation: 'Incorrecto. Con los días usamos "on": on Monday. "In" solo con meses, años y estaciones.',
    },
  ],
  miniTest: [
    {
      id: 'a1-m6-l5-mt1',
      type: 'multiple_choice',
      concept: 'module 6 final - telling time',
      difficulty: 1,
      prompt: '¿Cómo se dice "Son las siete y media"?',
      promptTranslation: 'How do you say 7:30?',
      correctAnswer: 'It is half past seven.',
      options: ['It is half past seven.', 'It is a quarter past seven.', 'It is seven o\'clock.'],
      explanation: 'Las 7:30 se dicen "half past seven" (y media).',
    },
    {
      id: 'a1-m6-l5-mt2',
      type: 'fill_blank',
      concept: 'module 6 final - frequency adverb',
      difficulty: 2,
      prompt: 'Completa: "I ___ eat breakfast." (0%)',
      promptTranslation: 'Nunca desayuno.',
      correctAnswer: 'never',
      acceptedAnswers: ['Never'],
      explanation: '"Never" (nunca, 0%) va antes del verbo principal: I never eat breakfast.',
    },
    {
      id: 'a1-m6-l5-mt3',
      type: 'error_correction',
      concept: 'module 6 final - date preposition',
      difficulty: 3,
      prompt: 'Corrige el error: "My birthday is in June 15."',
      correctAnswer: 'My birthday is on June 15.',
      acceptedAnswers: ['My birthday is on June 15', 'My birthday is on the 15th of June.', 'my birthday is on june 15.'],
      acceptApproximate: true,
      explanation: 'Con una fecha concreta (día) usamos "on": on June 15 / on the 15th of June.',
    },
    {
      id: 'a1-m6-l5-mt4',
      type: 'translate',
      concept: 'module 6 final - days',
      difficulty: 3,
      prompt: 'Traduce: "Trabajo los lunes."',
      correctAnswer: 'I work on Monday.',
      acceptedAnswers: ['I work on Monday', 'i work on monday.', 'On Monday I work.'],
      acceptApproximate: true,
      explanation: 'Con días usamos "on": I work on Monday. (También válido: On Monday I work.)',
    },
    {
      id: 'a1-m6-l5-mt5',
      type: 'reorder',
      concept: 'module 6 final - adverb after to be',
      difficulty: 2,
      prompt: 'Ordena: She / is / always / late',
      promptTranslation: 'Ella siempre llega tarde.',
      correctAnswer: 'She is always late.',
      words: ['She', 'is', 'always', 'late'],
      explanation: 'Con "to be", el adverbio va después del verbo: She is always late.',
    },
  ],
  reviewItems: ['a1-m6-l4'],
  prerequisites: ['a1-m6-l4'],
}
