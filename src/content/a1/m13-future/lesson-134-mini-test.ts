import type { Lesson } from '../../types'

export const lesson134MiniTest: Lesson = {
  id: 'a1-m13-l4',
  moduleId: 'm13-future',
  order: 3,
  title: 'Mini-test: planes futuros',
  objective: 'Evaluar el uso de "going to" (afirmativo, negativo, preguntas) y las expresiones de tiempo futuro.',
  explanation_es: `Esta es la lección final del Módulo 13. Repasemos lo más importante:

**Going to (afirmativo):** sujeto + am/is/are + going to + verbo.
- I am going to study English. = Voy a estudiar inglés.
- She is going to visit London. = Ella va a visitar Londres.

**Negativo:** sujeto + am/is/are + not + going to + verbo.
- I'm not going to go out tonight. = No voy a salir esta noche.
- She isn't going to work tomorrow. = Ella no va a trabajar mañana.

**Preguntas:** (WH) + am/is/are + sujeto + going to + verbo?
- Are you going to study? = ¿Vas a estudiar?
- What are you going to do tomorrow? = ¿Qué vas a hacer mañana?

**Expresiones de tiempo futuro:** tomorrow, tonight, next week, next month, next year, soon, on Monday (día), in July (mes), in 2025 (año).

Haz los ejercicios y después el mini-test. ¡Suerte!`,
  examples: [
    { english: 'I am going to buy a new car next year.', spanish: 'Voy a comprar un coche nuevo el próximo año.' },
    { english: "She isn't going to work tomorrow.", spanish: 'Ella no va a trabajar mañana.' },
    { english: 'Are you going to study English?', spanish: '¿Vas a estudiar inglés?' },
    { english: 'What are you going to do tonight?', spanish: '¿Qué vas a hacer esta noche?' },
    { english: "We're going to have a meeting on Monday.", spanish: 'Vamos a tener una reunión el lunes.' },
  ],
  rule: `- Afirmativo: Sujeto + am/is/are + going to + verbo.
- Negativo: Sujeto + am/is/are + not + going to + verbo.
- Preguntas: (WH) + am/is/are + sujeto + going to + verbo?
- Tiempo futuro: tomorrow, next week/month/year, soon, on Monday, in July, in 2025.
- El verbo después de "going to" siempre va en infinitivo.`,
  commonMistakes: [
    { wrong: '❌ I going to buy a car.', correct: '✅ I am going to buy a car.', explanation: 'El verbo "to be" es obligatorio antes de "going to".' },
    { wrong: '❌ She aren\'t going to work.', correct: '✅ She isn\'t going to work.', explanation: 'Con "she" usamos "isn\'t", no "aren\'t".' },
    { wrong: '❌ We are going to have a meeting in Monday.', correct: '✅ We are going to have a meeting on Monday.', explanation: 'Con días usamos "on": on Monday.' },
  ],
  vocabulary: [],
  grammarPoints: [],
  exercises: [
    {
      id: 'a1-m13-l4-ex1',
      type: 'multiple_choice',
      concept: 'module 13 - affirmative',
      difficulty: 1,
      prompt: 'Completa: "I ___ going to buy a new car."',
      promptTranslation: 'Voy a comprar un coche nuevo.',
      correctAnswer: 'am',
      options: ['am', 'is', 'are'],
      explanation: 'Con "I" usamos "am". → I am going to buy a new car.',
    },
    {
      id: 'a1-m13-l4-ex2',
      type: 'multiple_choice',
      concept: 'module 13 - negative',
      difficulty: 2,
      prompt: 'Completa (negativo): "She ___ going to work tomorrow."',
      promptTranslation: 'Ella no va a trabajar mañana.',
      correctAnswer: "isn't",
      options: ["isn't", "aren't", "don't"],
      explanation: 'Con "she": is not → isn\'t. → She isn\'t going to work tomorrow.',
    },
    {
      id: 'a1-m13-l4-ex3',
      type: 'fill_blank',
      concept: 'module 13 - verb base',
      difficulty: 2,
      prompt: 'Completa: "They are going to ___ a new house." (verbo: buy)',
      promptTranslation: 'Van a comprar una casa nueva.',
      correctAnswer: 'buy',
      acceptedAnswers: ['Buy'],
      explanation: 'Después de "going to" el verbo va en infinitivo: buy.',
    },
    {
      id: 'a1-m13-l4-ex4',
      type: 'fill_blank',
      concept: 'module 13 - questions',
      difficulty: 2,
      prompt: 'Completa la pregunta: "___ you going to study tonight?"',
      promptTranslation: '¿Vas a estudiar esta noche?',
      correctAnswer: 'Are',
      acceptedAnswers: ['are'],
      explanation: 'Con "you" usamos "are" en preguntas. → Are you going to study tonight?',
    },
    {
      id: 'a1-m13-l4-ex5',
      type: 'reorder',
      concept: 'module 13 - WH questions',
      difficulty: 3,
      prompt: 'Ordena: What / are / you / going to / do',
      promptTranslation: '¿Qué vas a hacer?',
      correctAnswer: 'What are you going to do?',
      words: ['What', 'are', 'you', 'going to', 'do'],
      explanation: 'WH + are + you + going to + do. → What are you going to do?',
    },
    {
      id: 'a1-m13-l4-ex6',
      type: 'multiple_choice',
      concept: 'module 13 - future time (on)',
      difficulty: 2,
      prompt: 'Completa: "We\'re going to have a meeting ___ Monday."',
      promptTranslation: 'Vamos a tener una reunión el lunes.',
      correctAnswer: 'on',
      options: ['on', 'in', 'at'],
      explanation: 'Con días usamos "on": on Monday.',
    },
    {
      id: 'a1-m13-l4-ex7',
      type: 'error_correction',
      concept: 'module 13 - verb to be',
      difficulty: 3,
      prompt: 'Corrige el error: "I going to study English."',
      correctAnswer: 'I am going to study English.',
      acceptedAnswers: ["I'm going to study English", 'I am going to study English', "I'm going to study English."],
      acceptApproximate: true,
      explanation: 'Necesitamos "to be" antes de "going to": I am going to study English.',
    },
    {
      id: 'a1-m13-l4-ex8',
      type: 'translate',
      concept: 'module 13 - affirmative + future time',
      difficulty: 3,
      prompt: 'Traduce: "Voy a comprar un coche nuevo el próximo año."',
      correctAnswer: 'I am going to buy a new car next year.',
      acceptedAnswers: ["I'm going to buy a new car next year", 'I am going to buy a new car next year', "I'm going to buy a new car next year."],
      acceptApproximate: true,
      explanation: 'I am (I\'m) going to + buy a new car + next year.',
    },
    {
      id: 'a1-m13-l4-ex9',
      type: 'reorder',
      concept: 'module 13 - negative word order',
      difficulty: 3,
      prompt: 'Ordena: I / am not / going to / go out / tonight',
      promptTranslation: 'No voy a salir esta noche.',
      correctAnswer: "I'm not going to go out tonight.",
      words: ["I'm", 'not', 'going to', 'go out', 'tonight'],
      explanation: 'Negativo: I\'m + not + going to + go out + tonight.',
    },
    {
      id: 'a1-m13-l4-ex10',
      type: 'translate',
      concept: 'module 13 - negative',
      difficulty: 4,
      prompt: 'Traduce: "Ella no va a viajar mañana."',
      correctAnswer: "She isn't going to travel tomorrow.",
      acceptedAnswers: ["She isn't going to travel tomorrow", "She's not going to travel tomorrow", 'She is not going to travel tomorrow'],
      acceptApproximate: true,
      explanation: '"Ella no va a" → She is not (isn\'t) going to + travel tomorrow.',
    },
  ],
  miniTest: [
    {
      id: 'a1-m13-l4-mt1',
      type: 'multiple_choice',
      concept: 'module 13 final - affirmative',
      difficulty: 2,
      prompt: 'Completa: "They ___ going to visit London."',
      promptTranslation: 'Ellos van a visitar Londres.',
      correctAnswer: 'are',
      options: ['is', 'are', 'am'],
      explanation: 'Con "they" usamos "are". → They are going to visit London.',
    },
    {
      id: 'a1-m13-l4-mt2',
      type: 'fill_blank',
      concept: 'module 13 final - negative',
      difficulty: 2,
      prompt: 'Completa (negativo): "I \'m ___ going to go out tonight." (not)',
      promptTranslation: 'No voy a salir esta noche.',
      correctAnswer: 'not',
      acceptedAnswers: ['Not'],
      explanation: 'Negativo: to be + not + going to. → I\'m not going to go out tonight.',
    },
    {
      id: 'a1-m13-l4-mt3',
      type: 'multiple_choice',
      concept: 'module 13 final - questions',
      difficulty: 2,
      prompt: 'Completa la pregunta: "___ you going to study English?"',
      promptTranslation: '¿Vas a estudiar inglés?',
      correctAnswer: 'Are',
      options: ['Are', 'Is', 'Am'],
      explanation: 'Con "you" usamos "are" en preguntas. → Are you going to study English?',
    },
    {
      id: 'a1-m13-l4-mt4',
      type: 'reorder',
      concept: 'module 13 final - WH questions',
      difficulty: 3,
      prompt: 'Ordena: What / are / you / going to / do / tomorrow',
      promptTranslation: '¿Qué vas a hacer mañana?',
      correctAnswer: 'What are you going to do tomorrow?',
      words: ['What', 'are', 'you', 'going to', 'do', 'tomorrow'],
      explanation: 'WH + are + you + going to + do + tomorrow. → What are you going to do tomorrow?',
    },
    {
      id: 'a1-m13-l4-mt5',
      type: 'translate',
      concept: 'module 13 final - negative',
      difficulty: 3,
      prompt: 'Traduce: "No voy a estudiar esta noche."',
      correctAnswer: "I'm not going to study tonight.",
      acceptedAnswers: ["I'm not going to study tonight", 'I am not going to study tonight', "I am not going to study tonight."],
      acceptApproximate: true,
      explanation: 'I\'m not + going to + study + tonight. → I\'m not going to study tonight.',
    },
  ],
  reviewItems: ['a1-m13-l3'],
  prerequisites: ['a1-m13-l3'],
}
