import type { Lesson } from '../../types'

export const lesson131GoingToAff: Lesson = {
  id: 'a1-m13-l1',
  moduleId: 'm13-future',
  order: 0,
  title: 'Going to (afirmativo)',
  objective: 'Hablar de planes e intenciones futuras con "going to" en frases afirmativas.',
  explanation_es: `En inglés usamos **going to** para hablar de planes e intenciones para el futuro. En español equivale a "ir a + verbo" ("voy a estudiar").

Para formar el futuro con "going to" necesitamos tres partes:

1. El verbo **to be** (am / is / are) — según el sujeto.
2. La expresión **going to**.
3. Un **verbo en infinitivo** (sin to): study, visit, buy...

Mira la estructura:
- I **am going to** study English. = Voy a estudiar inglés.
- She **is going to** visit London. = Ella va a visitar Londres.
- We **are going to** buy a house. = Vamos a comprar una casa.

Recuerda las contracciones del verbo "to be": I am → I'm, She is → She's, They are → They're.

- I'm going to travel next month. = Voy a viajar el próximo mes.
- He's going to start a new job. = Él va a empezar un trabajo nuevo.

¡IMPORTANTE! El verbo "to be" es obligatorio. No podemos decir "I going to study" — necesitamos "am": "I am going to study".`,
  examples: [
    { english: 'I am going to study English.', spanish: 'Voy a estudiar inglés.', note: "Contracción: I'm going to study English." },
    { english: 'She is going to visit London.', spanish: 'Ella va a visitar Londres.', note: "Contracción: She's going to visit London." },
    { english: 'We are going to buy a house.', spanish: 'Vamos a comprar una casa.', note: "Contracción: We're going to buy a house." },
    { english: "I'm going to travel next month.", spanish: 'Voy a viajar el próximo mes.' },
    { english: "He's going to start a new job.", spanish: 'Él va a empezar un trabajo nuevo.' },
    { english: 'They are going to learn English.', spanish: 'Ellos van a aprender inglés.' },
  ],
  rule: `Sujeto + to be (am/is/are) + going to + verbo en infinitivo

**Tabla con el verbo *study*:**

| Pronombre | to be | going to + verbo | Ejemplo |
|-----------|-------|------------------|---------|
| I | am | going to study | I am going to study English. |
| He | is | going to study | He is going to study tomorrow. |
| She | is | going to study | She is going to study law. |
| It | is | going to work | It is going to work. |
| You | are | going to study | You are going to study. |
| We | are | going to study | We are going to study together. |
| They | are | going to study | They are going to study abroad. |

**Regla de oro:**
- I → **am**
- He / She / It → **is**
- You / We / They → **are**

Contracciones frecuentes: I'm, You're, He's, She's, We're, They're.`,
  formation: {
    title: 'Cómo se forma "Going to" — Afirmativo',
    intro: '"Going to" expresa planes e intenciones futuras (equivalente a "ir a + verbo"). Se forma con el verbo "to be" + going to + verbo en infinitivo.',
    patterns: [
      {
        name: 'Afirmativo',
        formula: 'Sujeto + am/is/are + going to + verbo en infinitivo (sin "to") + complemento',
        examples: [
          { english: 'I am going to study English.', spanish: 'Voy a estudiar inglés.' },
          { english: 'She is going to visit London.', spanish: 'Ella va a visitar Londres.' },
          { english: 'We are going to buy a house.', spanish: 'Vamos a comprar una casa.' },
          { english: 'I\'m going to travel next month.', spanish: 'Voy a viajar el próximo mes.' },
          { english: 'He\'s going to start a new job.', spanish: 'Él va a empezar un trabajo nuevo.' },
        ],
        note: 'I → am · He/She/It → is · You/We/They → are. El verbo "to be" es obligatorio: nunca "I going to study".',
      },
    ],
    notes: [
      'Contracciones: I am → I\'m, She is → She\'s, We are → We\'re, etc.',
      'Después de "going to" usamos el verbo en infinitivo sin "to": going to study (no "going to to study").',
      'En A1 no usamos "will" para planes: I am going to travel (no "I will travel").',
    ],
  },
  commonMistakes: [
    { wrong: '❌ I going to study.', correct: '✅ I am going to study.', explanation: 'Necesitamos el verbo "to be" (am) antes de "going to".' },
    { wrong: '❌ She are going to visit.', correct: '✅ She is going to visit.', explanation: 'Con "she" usamos "is", no "are".' },
    { wrong: '❌ I will travel next month.', correct: '✅ I am going to travel next month.', explanation: 'En el nivel A1, para planes usamos "going to". "Will" se estudia más adelante.' },
  ],
  vocabulary: [],
  grammarPoints: [
    {
      id: 'gp-going-to-affirmative',
      level: 'A1',
      name: 'Going to — affirmative (future plans)',
      explanation_es: '"Going to" se usa para expresar planes e intenciones futuras. Se forma con el verbo "to be" + "going to" + verbo en infinitivo.',
      formula: 'Sujeto + am/is/are + going to + verbo base',
      examples: ['I am going to study English.', 'She is going to visit London.', 'We are going to buy a house.'],
    },
  ],
  exercises: [
    {
      id: 'a1-m13-l1-ex1',
      type: 'multiple_choice',
      concept: 'going to - verb to be',
      difficulty: 1,
      prompt: 'Completa: "I ___ going to study English."',
      promptTranslation: 'Voy a estudiar inglés.',
      correctAnswer: 'am',
      options: ['am', 'is', 'are'],
      explanation: 'Con "I" usamos "am". → I am going to study English.',
    },
    {
      id: 'a1-m13-l1-ex2',
      type: 'fill_blank',
      concept: 'going to - verb base',
      difficulty: 1,
      prompt: 'Completa: "She is going to ___ London." (verbo: visit)',
      promptTranslation: 'Ella va a visitar Londres.',
      correctAnswer: 'visit',
      acceptedAnswers: ['Visit'],
      explanation: 'Después de "going to" usamos el verbo en infinitivo sin "to": visit. → She is going to visit London.',
    },
    {
      id: 'a1-m13-l1-ex3',
      type: 'multiple_choice',
      concept: 'going to - verb to be',
      difficulty: 2,
      prompt: 'Completa: "We ___ going to buy a house."',
      promptTranslation: 'Vamos a comprar una casa.',
      correctAnswer: 'are',
      options: ['is', 'are', 'am'],
      explanation: 'Con "we" usamos "are". → We are going to buy a house.',
    },
    {
      id: 'a1-m13-l1-ex4',
      type: 'fill_blank',
      concept: 'going to - verb to be',
      difficulty: 2,
      prompt: 'Completa: "I \'m ___ to travel next month." (going)',
      promptTranslation: 'Voy a viajar el próximo mes.',
      correctAnswer: 'going',
      acceptedAnswers: ['Going'],
      explanation: 'Después del sujeto + "to be" viene "going to". → I\'m going to travel next month.',
    },
    {
      id: 'a1-m13-l1-ex5',
      type: 'multiple_choice',
      concept: 'going to - affirmative sentence',
      difficulty: 3,
      prompt: 'Elige la frase correcta:',
      promptTranslation: 'Ella va a visitar Londres.',
      correctAnswer: 'She is going to visit London.',
      options: [
        'She is going to visit London.',
        'She going to visit London.',
        'She is going visit London.',
      ],
      explanation: 'Frase afirmativa con "going to": She + is + going to + visit London.',
    },
    {
      id: 'a1-m13-l1-ex6',
      type: 'reorder',
      concept: 'going to - word order',
      difficulty: 3,
      prompt: 'Ordena: I / am / going to / study English',
      promptTranslation: 'Voy a estudiar inglés.',
      correctAnswer: 'I am going to study English.',
      words: ['I', 'am', 'going to', 'study English'],
      explanation: 'Orden: sujeto + to be + going to + verbo. → I am going to study English.',
    },
    {
      id: 'a1-m13-l1-ex7',
      type: 'translate',
      concept: 'going to - affirmative',
      difficulty: 3,
      prompt: 'Traduce: "Voy a estudiar inglés."',
      correctAnswer: 'I am going to study English.',
      acceptedAnswers: ["I'm going to study English", 'I am going to study English', "I'm going to study English."],
      acceptApproximate: true,
      explanation: '"Voy a" → I am (I\'m) going to + study English. → I am going to study English.',
    },
    {
      id: 'a1-m13-l1-ex8',
      type: 'reorder',
      concept: 'going to - word order',
      difficulty: 3,
      prompt: 'Ordena: We / are / going to / buy a house',
      promptTranslation: 'Vamos a comprar una casa.',
      correctAnswer: 'We are going to buy a house.',
      words: ['We', 'are', 'going to', 'buy a house'],
      explanation: 'Orden: We + are + going to + buy a house.',
    },
    {
      id: 'a1-m13-l1-ex9',
      type: 'translate',
      concept: 'going to - affirmative',
      difficulty: 4,
      prompt: 'Traduce: "Ella va a visitar Londres."',
      correctAnswer: 'She is going to visit London.',
      acceptedAnswers: ["She's going to visit London", 'She is going to visit London', "She's going to visit London."],
      acceptApproximate: true,
      explanation: '"Ella va a" → She is (She\'s) going to + visit London.',
    },
  ],
  miniTest: [
    {
      id: 'a1-m13-l1-mt1',
      type: 'multiple_choice',
      concept: 'going to - verb to be',
      difficulty: 1,
      prompt: 'Completa: "They ___ going to learn English."',
      promptTranslation: 'Ellos van a aprender inglés.',
      correctAnswer: 'are',
      options: ['is', 'are', 'am'],
      explanation: 'Con "they" usamos "are". → They are going to learn English.',
    },
    {
      id: 'a1-m13-l1-mt2',
      type: 'fill_blank',
      concept: 'going to - verb base',
      difficulty: 2,
      prompt: 'Completa: "He is going to ___ a new job." (verbo: start)',
      promptTranslation: 'Él va a empezar un trabajo nuevo.',
      correctAnswer: 'start',
      acceptedAnswers: ['Start'],
      explanation: 'Después de "going to" usamos el verbo base sin "to": start. → He is going to start a new job.',
    },
    {
      id: 'a1-m13-l1-mt3',
      type: 'reorder',
      concept: 'going to - word order',
      difficulty: 3,
      prompt: 'Ordena: She / is / going to / visit London',
      promptTranslation: 'Ella va a visitar Londres.',
      correctAnswer: 'She is going to visit London.',
      words: ['She', 'is', 'going to', 'visit London'],
      explanation: 'Orden: sujeto + to be + going to + verbo. → She is going to visit London.',
    },
  ],
  reviewItems: [],
  prerequisites: ['a1-m12-l5'],
}
