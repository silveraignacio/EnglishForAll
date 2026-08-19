import type { Lesson } from '../../types'

export const lesson103SimpleVsContinuous: Lesson = {
  id: 'a1-m10-l3',
  moduleId: 'm10-present-continuous',
  order: 2,
  title: 'Present Simple vs Present Continuous',
  objective: 'Saber cuándo usar el Present Simple (rutinas y hechos) y cuándo el Present Continuous (acciones de ahora).',
  explanation_es: `En este módulo ya conoces dos tiempos verbales: el **Present Simple** (Módulo 5) y el **Present Continuous** (ahora). ¿Cuándo usar cada uno?

### Present Simple → hábitos, rutinas y hechos

- I work every day. = Trabajo todos los días. (rutina)
- She works in a bank. = Ella trabaja en un banco. (hecho general)

### Present Continuous → ahora, en este momento

- I am working now. = Estoy trabajando ahora. (ahora)
- She is working from home today. = Ella está trabajando desde casa hoy.

### Señales que te ayudan

- every day, always, usually, often, never, on Sundays → **Present Simple**.
- now, right now, at the moment, today → **Present Continuous**.

Recuerda las estructuras:

- Present Simple: I **work**. / She **works**. (verbo con -s en he/she/it)
- Present Continuous: I **am working**. / She **is working**. (to be + verbo -ing)

No mezcles las dos estructuras: "She is works" es incorrecto.`,
  examples: [
    { english: 'I work every day.', spanish: 'Trabajo todos los días.', note: 'every day → rutina → Present Simple.' },
    { english: 'I am working now.', spanish: 'Estoy trabajando ahora.', note: 'now → momento actual → Present Continuous.' },
    { english: 'She works in a bank.', spanish: 'Ella trabaja en un banco.', note: 'hecho general → Present Simple.' },
    { english: 'She is working from home today.', spanish: 'Ella está trabajando desde casa hoy.', note: 'today → hoy → Present Continuous.' },
    { english: 'They play tennis on Sundays.', spanish: 'Juegan tenis los domingos.', note: 'on Sundays → rutina → Present Simple.' },
    { english: 'They are playing tennis now.', spanish: 'Están jugando tenis ahora.', note: 'now → ahora → Present Continuous.' },
  ],
  rule: `Present Simple = hábitos, rutinas, hechos → I work. / She works.
Present Continuous = acciones que pasan ahora → I am working. / She is working.

Señales:
- every day / always / usually / never / on Sundays → Present Simple
- now / right now / at the moment / today → Present Continuous

No mezcles: ❌ She is works. → ✅ She works. o ✅ She is working.`,
  formation: {
    title: 'Cómo se forman el Present Simple y el Present Continuous',
    intro: 'El Present Simple describe hábitos, rutinas y hechos; el Present Continuous describe acciones que ocurren ahora. Cada uno tiene su propia estructura y sus señales de tiempo.',
    patterns: [
      {
        name: 'Present Simple',
        formula: 'Sujeto + verbo base (+ -s en he/she/it)',
        examples: [
          { english: 'I work every day.', spanish: 'Trabajo todos los días.' },
          { english: 'She works in a bank.', spanish: 'Ella trabaja en un banco.' },
          { english: 'They play tennis on Sundays.', spanish: 'Juegan tenis los domingos.' },
        ],
        note: 'Hábitos, rutinas y hechos. Señales: every day, always, usually, never, on Sundays.',
      },
      {
        name: 'Present Continuous',
        formula: 'Sujeto + am/is/are + verbo -ing',
        examples: [
          { english: 'I am working now.', spanish: 'Estoy trabajando ahora.' },
          { english: 'She is working from home today.', spanish: 'Ella está trabajando desde casa hoy.' },
          { english: 'They are playing tennis now.', spanish: 'Están jugando tenis ahora.' },
        ],
        note: 'Acciones que pasan ahora. Señales: now, right now, at the moment, today.',
      },
    ],
    notes: [
      'No mezcles las estructuras: "She is works" es incorrecto.',
      'Rutina/hecho → Simple; ahora → Continuous.',
    ],
  },
  commonMistakes: [
    { wrong: '❌ I am work every day.', correct: '✅ I work every day.', explanation: 'Con "every day" (rutina) usamos Present Simple: I work. No "am work".' },
    { wrong: '❌ I work now.', correct: '✅ I am working now.', explanation: 'Con "now" (ahora) usamos Present Continuous: I am working.' },
    { wrong: '❌ She is works.', correct: '✅ She works / She is working.', explanation: 'No mezcles las dos estructuras. O "She works" (Simple) o "She is working" (Continuous), nunca ambas.' },
  ],
  vocabulary: [],
  grammarPoints: [
    {
      id: 'gp-simple-vs-continuous',
      level: 'A1',
      name: 'Present Simple vs Present Continuous',
      explanation_es: 'Present Simple = hábitos, rutinas y hechos (I work, She works). Present Continuous = acciones que ocurren ahora (I am working, She is working). "every day / always / on Sundays" van con Simple; "now / at the moment / today" van con Continuous.',
      formula: 'Simple: S + V (+ -s en 3ª persona) | Continuous: S + am/is/are + V-ing',
      examples: ['I work every day.', 'I am working now.', 'She works in a bank.', 'She is working from home today.'],
    },
  ],
  exercises: [
    {
      id: 'a1-m10-l3-ex1',
      type: 'multiple_choice',
      concept: 'simple vs continuous - time markers',
      difficulty: 1,
      prompt: 'Completa: "I ___ every day."',
      promptTranslation: 'Trabajo todos los días.',
      correctAnswer: 'work',
      options: ['work', 'am working', 'working'],
      explanation: '"every day" indica rutina → Present Simple: I work.',
    },
    {
      id: 'a1-m10-l3-ex2',
      type: 'multiple_choice',
      concept: 'simple vs continuous - time markers',
      difficulty: 2,
      prompt: 'Completa: "She ___ now."',
      promptTranslation: 'Ella está trabajando ahora.',
      correctAnswer: 'is working',
      options: ['works', 'is working', 'work'],
      explanation: '"now" indica momento actual → Present Continuous: She is working.',
    },
    {
      id: 'a1-m10-l3-ex3',
      type: 'multiple_choice',
      concept: 'simple vs continuous - time markers',
      difficulty: 2,
      prompt: 'Completa: "They ___ tennis on Sundays."',
      promptTranslation: 'Juegan tenis los domingos.',
      correctAnswer: 'play',
      options: ['play', 'are playing', 'playing'],
      explanation: '"on Sundays" indica rutina → Present Simple: They play.',
    },
    {
      id: 'a1-m10-l3-ex4',
      type: 'fill_blank',
      concept: 'present continuous - to be',
      difficulty: 2,
      prompt: 'Completa: "I ___ working right now." (to be)',
      promptTranslation: 'Estoy trabajando ahora mismo.',
      correctAnswer: 'am',
      acceptedAnswers: ["'m", 'am'],
      explanation: 'Present Continuous con "I": I am working. → am.',
    },
    {
      id: 'a1-m10-l3-ex5',
      type: 'fill_blank',
      concept: 'present simple - 3rd person -s',
      difficulty: 3,
      prompt: 'Completa: "She ___ in a bank." (hecho general)',
      promptTranslation: 'Ella trabaja en un banco.',
      correctAnswer: 'works',
      acceptedAnswers: ['Works'],
      explanation: 'Hecho general → Present Simple. Con "she" añadimos -s: works.',
    },
    {
      id: 'a1-m10-l3-ex6',
      type: 'error_correction',
      concept: 'simple vs continuous - routine',
      difficulty: 3,
      prompt: 'Corrige el error: "I am work every day."',
      correctAnswer: 'I work every day.',
      acceptedAnswers: ['I work every day', 'i work every day.'],
      acceptApproximate: true,
      explanation: '"every day" → Present Simple: I work every day. (No "am work").',
    },
    {
      id: 'a1-m10-l3-ex7',
      type: 'error_correction',
      concept: 'simple vs continuous - don\'t mix',
      difficulty: 4,
      prompt: 'Corrige el error: "She is works."',
      correctAnswer: 'She is working.',
      acceptedAnswers: ['She is working', 'She works', 'She is working.', 'She works.'],
      acceptApproximate: true,
      explanation: 'No mezcles las estructuras. Con "is", el verbo lleva -ing: She is working. (O Present Simple: She works.)',
    },
    {
      id: 'a1-m10-l3-ex8',
      type: 'error_correction',
      concept: 'simple vs continuous - now',
      difficulty: 3,
      prompt: 'Corrige el error: "I work now."',
      correctAnswer: 'I am working now.',
      acceptedAnswers: ["I'm working now", 'I am working now', "I'm working now."],
      acceptApproximate: true,
      explanation: '"now" → Present Continuous: I am working now.',
    },
    {
      id: 'a1-m10-l3-ex9',
      type: 'translate',
      concept: 'present continuous - now',
      difficulty: 3,
      prompt: 'Traduce: "Estoy trabajando ahora."',
      correctAnswer: 'I am working now.',
      acceptedAnswers: ["I'm working now", 'I am working now', "I'm working now."],
      acceptApproximate: true,
      explanation: '"ahora" → now → Present Continuous: I am working now.',
    },
    {
      id: 'a1-m10-l3-ex10',
      type: 'translate',
      concept: 'present simple - routine',
      difficulty: 4,
      prompt: 'Traduce: "Ella trabaja todos los días."',
      correctAnswer: 'She works every day.',
      acceptedAnswers: ['She works every day', 'she works every day.'],
      acceptApproximate: true,
      explanation: '"todos los días" → every day → Present Simple, she + -s: She works every day.',
    },
  ],
  miniTest: [
    {
      id: 'a1-m10-l3-mt1',
      type: 'multiple_choice',
      concept: 'simple vs continuous - time markers',
      difficulty: 2,
      prompt: 'Completa: "They ___ to the gym on Tuesdays."',
      promptTranslation: 'Van al gimnasio los martes.',
      correctAnswer: 'go',
      options: ['go', 'are going', 'going'],
      explanation: '"on Tuesdays" indica rutina → Present Simple: They go.',
    },
    {
      id: 'a1-m10-l3-mt2',
      type: 'multiple_choice',
      concept: 'simple vs continuous - time markers',
      difficulty: 2,
      prompt: 'Completa: "She ___ dinner right now."',
      promptTranslation: 'Ella está cocinando la cena ahora mismo.',
      correctAnswer: 'is cooking',
      options: ['cooks', 'is cooking', 'cook'],
      explanation: '"right now" indica ahora → Present Continuous: She is cooking.',
    },
    {
      id: 'a1-m10-l3-mt3',
      type: 'fill_blank',
      concept: 'present simple - routine',
      difficulty: 3,
      prompt: 'Completa: "We ___ English every day." (present simple)',
      promptTranslation: 'Estudiamos inglés todos los días.',
      correctAnswer: 'study',
      acceptedAnswers: ['Study'],
      explanation: '"every day" → Present Simple. Con "we" no hay -s: study.',
    },
    {
      id: 'a1-m10-l3-mt4',
      type: 'error_correction',
      concept: 'simple vs continuous - routine',
      difficulty: 3,
      prompt: 'Corrige el error: "He is work every day."',
      correctAnswer: 'He works every day.',
      acceptedAnswers: ['He works every day', 'he works every day.'],
      acceptApproximate: true,
      explanation: '"every day" → Present Simple, he + -s: He works every day.',
    },
    {
      id: 'a1-m10-l3-mt5',
      type: 'translate',
      concept: 'present continuous - now',
      difficulty: 3,
      prompt: 'Traduce: "Ellos están jugando tenis ahora."',
      correctAnswer: 'They are playing tennis now.',
      acceptedAnswers: ["They're playing tennis now", 'They are playing tennis now', "They're playing tennis now."],
      acceptApproximate: true,
      explanation: '"ahora" → now → Present Continuous: They are playing tennis now.',
    },
  ],
  reviewItems: ['a1-m10-l2'],
  prerequisites: ['a1-m10-l2'],
}
