import type { Lesson } from '../../types'

export const lesson132GoingToNegQ: Lesson = {
  id: 'a1-m13-l2',
  moduleId: 'm13-future',
  order: 1,
  title: 'Going to (negativo y preguntas)',
  objective: 'Formar frases negativas y preguntas con "going to" para hablar de planes futuros.',
  explanation_es: `Ya sabes formar el afirmativo con "going to" (I am going to study). Ahora veamos cómo negar y cómo preguntar.

### Negativo

Para negar, ponemos **not** después del verbo "to be":

- I am not going to go out tonight. = No voy a salir esta noche. → I'm not going to go out tonight.
- She is not going to work tomorrow. = Ella no va a trabajar mañana. → She isn't going to work tomorrow.

Contracciones: is not → **isn't**, are not → **aren't**. ("am not" no tiene contracción común, pero "I'm not" sí.)

### Preguntas (sí/no)

Cambiamos el orden: **to be + sujeto + going to + verbo?**

- Are you going to study? = ¿Vas a estudiar?
- Is he going to travel? = ¿Él va a viajar?

### Preguntas con What (WH-)

- What are you going to do? = ¿Qué vas a hacer?

El orden en las preguntas WH es: palabra interrogativa + to be + sujeto + going to + verbo.`,
  examples: [
    { english: "I'm not going to go out tonight.", spanish: 'No voy a salir esta noche.' },
    { english: "She isn't going to work tomorrow.", spanish: 'Ella no va a trabajar mañana.', note: "isn't = is not." },
    { english: 'Are you going to study English?', spanish: '¿Vas a estudiar inglés?' },
    { english: 'Is he going to travel?', spanish: '¿Él va a viajar?' },
    { english: 'What are you going to do tomorrow?', spanish: '¿Qué vas a hacer mañana?' },
  ],
  rule: `Negativo: Sujeto + to be + not + going to + verbo
- I am not going to go out.
- She is not (isn't) going to work.
- They are not (aren't) going to travel.

Preguntas sí/no: To be + sujeto + going to + verbo?
- Are you going to study?
- Is he going to travel?

WH-question: Palabra interrogativa + to be + sujeto + going to + verbo?
- What are you going to do?`,
  formation: {
    title: 'Cómo se forma "Going to" — Negativo y preguntas',
    intro: 'Para negar planes ponemos "not" después de "to be". Para preguntar, invertimos el orden: to be + sujeto + going to + verbo.',
    patterns: [
      {
        name: 'Negativo',
        formula: 'Sujeto + am/is/are + not + going to + verbo en infinitivo + complemento',
        examples: [
          { english: 'I\'m not going to go out tonight.', spanish: 'No voy a salir esta noche.' },
          { english: 'She isn\'t going to work tomorrow.', spanish: 'Ella no va a trabajar mañana.' },
        ],
        note: 'Contracciones: is not = isn\'t · are not = aren\'t. Con "I" usamos "I\'m not".',
      },
      {
        name: 'Pregunta sí/no',
        formula: 'Am / Is / Are + sujeto + going to + verbo en infinitivo + ...?',
        examples: [
          { english: 'Are you going to study English?', spanish: '¿Vas a estudiar inglés?' },
          { english: 'Is he going to travel?', spanish: '¿Él va a viajar?' },
        ],
        note: 'Respuestas cortas: Yes, I am. / No, I\'m not. · Yes, she is. / No, she isn\'t.',
      },
      {
        name: 'Pregunta WH-',
        formula: 'Palabra interrogativa (What/Where...) + am/is/are + sujeto + going to + verbo en infinitivo + ...?',
        examples: [
          { english: 'What are you going to do tomorrow?', spanish: '¿Qué vas a hacer mañana?' },
        ],
        note: 'En las WH-questions, "to be" va antes del sujeto: What are you going to do? (no "What you are going to do?").',
      },
    ],
    notes: [
      'Después de "going to" el verbo siempre va en infinitivo: going to study, going to travel (sin "to" extra).',
      'Nunca omitimos el "to be": "I not going to go out" es incorrecto → "I am not going to go out".',
    ],
  },
  commonMistakes: [
    { wrong: '❌ I not going to go out.', correct: '✅ I\'m not going to go out.', explanation: 'Necesitamos "to be" + "not": I am not going to... (También: I\'m not going to...).' },
    { wrong: '❌ Is you going to study?', correct: '✅ Are you going to study?', explanation: 'Con "you" usamos "are": Are you going to study?' },
    { wrong: '❌ What you are going to do?', correct: '✅ What are you going to do?', explanation: 'En preguntas WH, el verbo "to be" va antes del sujeto: What are you going to do?' },
  ],
  vocabulary: [],
  grammarPoints: [
    {
      id: 'gp-going-to-negative-questions',
      level: 'A1',
      name: 'Going to — negative & questions',
      explanation_es: 'Para negar planes con "going to": sujeto + to be + not + going to + verbo. Para preguntar: (WH) + to be + sujeto + going to + verbo?.',
      formula: 'Neg: S + am/is/are + not + going to + V | Q: (WH) + am/is/are + S + going to + V?',
      examples: ["I'm not going to go out tonight.", "She isn't going to work tomorrow.", 'Are you going to study?', 'What are you going to do?'],
    },
  ],
  exercises: [
    {
      id: 'a1-m13-l2-ex1',
      type: 'multiple_choice',
      concept: 'going to - negative (am not)',
      difficulty: 1,
      prompt: 'Completa (negativo): "I ___ going to go out tonight."',
      promptTranslation: 'No voy a salir esta noche.',
      correctAnswer: "'m not",
      options: ["'m not", "'s not", "'re not"],
      explanation: 'Con "I" usamos "am": I am not → I\'m not going to go out tonight.',
    },
    {
      id: 'a1-m13-l2-ex2',
      type: 'multiple_choice',
      concept: 'going to - negative (isn\'t)',
      difficulty: 1,
      prompt: 'Completa (negativo): "She ___ going to work tomorrow."',
      promptTranslation: 'Ella no va a trabajar mañana.',
      correctAnswer: "isn't",
      options: ["isn't", "aren't", "don't"],
      explanation: 'Con "she" usamos "is" → is not = isn\'t. → She isn\'t going to work tomorrow.',
    },
    {
      id: 'a1-m13-l2-ex3',
      type: 'fill_blank',
      concept: 'going to - yes/no questions',
      difficulty: 2,
      prompt: 'Completa la pregunta: "___ you going to study?"',
      promptTranslation: '¿Vas a estudiar?',
      correctAnswer: 'Are',
      acceptedAnswers: ['are'],
      explanation: 'Con "you" usamos "are" en preguntas. → Are you going to study?',
    },
    {
      id: 'a1-m13-l2-ex4',
      type: 'fill_blank',
      concept: 'going to - verb base in questions',
      difficulty: 2,
      prompt: 'Completa la pregunta: "Is he going to ___?" (verbo: travel)',
      promptTranslation: '¿Él va a viajar?',
      correctAnswer: 'travel',
      acceptedAnswers: ['Travel'],
      explanation: 'Después de "going to" el verbo va en infinitivo: travel. → Is he going to travel?',
    },
    {
      id: 'a1-m13-l2-ex5',
      type: 'reorder',
      concept: 'going to - yes/no questions word order',
      difficulty: 3,
      prompt: 'Ordena: Are / you / going to / study English',
      promptTranslation: '¿Vas a estudiar inglés?',
      correctAnswer: 'Are you going to study English?',
      words: ['Are', 'you', 'going to', 'study English'],
      explanation: 'Pregunta: to be + sujeto + going to + verbo. → Are you going to study English?',
    },
    {
      id: 'a1-m13-l2-ex6',
      type: 'reorder',
      concept: 'going to - WH questions word order',
      difficulty: 3,
      prompt: 'Ordena: What / are / you / going to / do',
      promptTranslation: '¿Qué vas a hacer?',
      correctAnswer: 'What are you going to do?',
      words: ['What', 'are', 'you', 'going to', 'do'],
      explanation: 'WH + to be + sujeto + going to + verbo. → What are you going to do?',
    },
    {
      id: 'a1-m13-l2-ex7',
      type: 'multiple_choice',
      concept: 'going to - WH questions',
      difficulty: 3,
      prompt: 'Elige la frase correcta:',
      promptTranslation: '¿Qué vas a hacer mañana?',
      correctAnswer: 'What are you going to do tomorrow?',
      options: [
        'What are you going to do tomorrow?',
        'What you are going to do tomorrow?',
        'What are going to you do tomorrow?',
      ],
      explanation: 'En la pregunta, "are" va después de "what" y antes de "you". → What are you going to do tomorrow?',
    },
    {
      id: 'a1-m13-l2-ex8',
      type: 'translate',
      concept: 'going to - negative',
      difficulty: 3,
      prompt: 'Traduce: "No voy a salir esta noche."',
      correctAnswer: "I'm not going to go out tonight.",
      acceptedAnswers: ["I'm not going to go out tonight", 'I am not going to go out tonight', "I am not going to go out tonight."],
      acceptApproximate: true,
      explanation: '"No voy a" → I am not (I\'m not) going to + go out tonight.',
    },
    {
      id: 'a1-m13-l2-ex9',
      type: 'translate',
      concept: 'going to - WH questions',
      difficulty: 4,
      prompt: 'Traduce: "¿Qué vas a hacer mañana?"',
      correctAnswer: 'What are you going to do tomorrow?',
      acceptedAnswers: ['What are you going to do tomorrow', 'what are you going to do tomorrow?'],
      acceptApproximate: true,
      explanation: 'WH + are + you + going to + do tomorrow. → What are you going to do tomorrow?',
    },
  ],
  miniTest: [
    {
      id: 'a1-m13-l2-mt1',
      type: 'multiple_choice',
      concept: 'going to - negative (aren\'t)',
      difficulty: 2,
      prompt: 'Completa (negativo): "They ___ going to travel next week."',
      promptTranslation: 'Ellos no van a viajar la próxima semana.',
      correctAnswer: "aren't",
      options: ["isn't", "aren't", 'am not'],
      explanation: 'Con "they" usamos "are" → are not = aren\'t. → They aren\'t going to travel next week.',
    },
    {
      id: 'a1-m13-l2-mt2',
      type: 'fill_blank',
      concept: 'going to - yes/no questions',
      difficulty: 2,
      prompt: 'Completa la pregunta: "___ he going to travel?"',
      promptTranslation: '¿Él va a viajar?',
      correctAnswer: 'Is',
      acceptedAnswers: ['is'],
      explanation: 'Con "he" usamos "is" en preguntas. → Is he going to travel?',
    },
    {
      id: 'a1-m13-l2-mt3',
      type: 'fill_blank',
      concept: 'going to - negative',
      difficulty: 2,
      prompt: 'Completa (negativo): "She is ___ going to work tomorrow." (not)',
      promptTranslation: 'Ella no va a trabajar mañana.',
      correctAnswer: 'not',
      acceptedAnswers: ['Not'],
      explanation: 'Negativo: to be + not + going to. → She is not going to work tomorrow.',
    },
    {
      id: 'a1-m13-l2-mt4',
      type: 'reorder',
      concept: 'going to - yes/no questions word order',
      difficulty: 3,
      prompt: 'Ordena: Is / he / going to / travel',
      promptTranslation: '¿Él va a viajar?',
      correctAnswer: 'Is he going to travel?',
      words: ['Is', 'he', 'going to', 'travel'],
      explanation: 'Pregunta: to be + sujeto + going to + verbo. → Is he going to travel?',
    },
    {
      id: 'a1-m13-l2-mt5',
      type: 'translate',
      concept: 'going to - negative',
      difficulty: 3,
      prompt: 'Traduce: "Ella no va a trabajar mañana."',
      correctAnswer: "She isn't going to work tomorrow.",
      acceptedAnswers: ["She isn't going to work tomorrow", "She's not going to work tomorrow", 'She is not going to work tomorrow'],
      acceptApproximate: true,
      explanation: '"Ella no va a" → She is not (isn\'t) + going to + work tomorrow.',
    },
  ],
  reviewItems: ['a1-m13-l1'],
  prerequisites: ['a1-m13-l1'],
}
