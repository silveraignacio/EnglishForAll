import type { Lesson } from '../../types'

export const lesson102PresentContinuousNegQ: Lesson = {
  id: 'a1-m10-l2',
  moduleId: 'm10-present-continuous',
  order: 1,
  title: 'Present Continuous (negativo y preguntas)',
  objective: 'Formar frases negativas y preguntas con el Present Continuous.',
  explanation_es: `Ya sabes formar el afirmativo del Present Continuous (I am working). Ahora veamos cómo negar y cómo preguntar.

### Negativo

Para negar, ponemos **not** después de "to be":

- I am not working. = No estoy trabajando.
- She is not reading. = Ella no está leyendo. → She isn't reading.
- They are not watching TV. → They aren't watching TV.

Contracciones: is not → **isn't**, are not → **aren't**. ("am not" no tiene contracción común.)

### Preguntas (sí/no)

Cambiamos el orden: **to be + sujeto + verbo -ing + ...?**

- Are you working? = ¿Estás trabajando?
- Is he sleeping? = ¿Está durmiendo él?

Respuestas cortas: Yes, I am. / No, I'm not. Yes, she is. / No, she isn't. Yes, they are. / No, they aren't.

### Preguntas con What (WH-)

- What are you doing? = ¿Qué estás haciendo?
- Where is he going? = ¿A dónde va él?

El orden en las preguntas WH es: palabra interrogativa + to be + sujeto + verbo -ing.`,
  examples: [
    { english: 'I am not working today.', spanish: 'No estoy trabajando hoy.' },
    { english: "She isn't reading now.", spanish: 'Ella no está leyendo ahora.', note: "isn't = is not." },
    { english: "We aren't working today.", spanish: 'No estamos trabajando hoy.', note: "aren't = are not." },
    { english: 'Are you watching TV?', spanish: '¿Estás viendo la tele?' },
    { english: 'Is he sleeping?', spanish: '¿Está durmiendo él?' },
    { english: 'What are you doing?', spanish: '¿Qué estás haciendo?' },
  ],
  rule: `Negativo: Sujeto + to be + not + verbo -ing
- I am not working.
- She is not (isn't) reading.
- They are not (aren't) working.

Preguntas sí/no: To be + sujeto + verbo -ing + ...?
- Are you working?
- Is he sleeping?

WH-question: Palabra interrogativa + to be + sujeto + verbo -ing?
- What are you doing?
- Where is he going?`,
  formation: {
    title: 'Cómo se forma el Present Continuous — Negativo y preguntas',
    intro: 'Para negar ponemos "not" después de "to be". Para preguntar, invertimos el orden: to be + sujeto + verbo -ing.',
    patterns: [
      {
        name: 'Negativo',
        formula: 'Sujeto + am/is/are + not + verbo -ing + complemento',
        examples: [
          { english: 'I am not working today.', spanish: 'No estoy trabajando hoy.' },
          { english: 'She isn\'t reading now.', spanish: 'Ella no está leyendo ahora.' },
          { english: 'They aren\'t watching TV.', spanish: 'No están viendo la tele.' },
        ],
        note: 'Contracciones: is not = isn\'t · are not = aren\'t. "Am not" no se contrae: solo "I\'m not".',
      },
      {
        name: 'Pregunta sí/no',
        formula: 'Am / Is / Are + sujeto + verbo -ing + ...?',
        examples: [
          { english: 'Are you working?', spanish: '¿Estás trabajando?' },
          { english: 'Is he sleeping?', spanish: '¿Está durmiendo él?' },
        ],
        note: 'Respuestas cortas: Yes, I am. / No, I\'m not. · Yes, she is. / No, she isn\'t.',
      },
      {
        name: 'Pregunta WH-',
        formula: 'Palabra interrogativa (What/Where...) + am/is/are + sujeto + verbo -ing + ...?',
        examples: [
          { english: 'What are you doing?', spanish: '¿Qué estás haciendo?' },
          { english: 'Where is he going?', spanish: '¿A dónde va él?' },
        ],
        note: 'En las WH-questions, "to be" va antes del sujeto: What are you doing? (no "What you are doing?").',
      },
    ],
    notes: [
      'La base es siempre to be + verbo -ing: nunca "I not working" → "I am not working".',
      'La ortografía del -ing no cambia en negativo ni en preguntas: run → running, make → making.',
    ],
  },
  commonMistakes: [
    { wrong: '❌ I not working.', correct: '✅ I am not working.', explanation: 'Necesitas "to be" + "not": I am not working. (No solo "I not working".)' },
    { wrong: '❌ Is you working?', correct: '✅ Are you working?', explanation: 'Con "you" usamos "are": Are you working?' },
    { wrong: '❌ What you are doing?', correct: '✅ What are you doing?', explanation: 'En preguntas WH, el verbo "to be" va antes del sujeto: What are you doing?' },
  ],
  vocabulary: [],
  grammarPoints: [
    {
      id: 'gp-present-continuous-negative-questions',
      level: 'A1',
      name: 'Present Continuous — negative & questions',
      explanation_es: 'Para negar: sujeto + to be + not + verbo -ing. Para preguntar: to be + sujeto + verbo -ing? En WH-questions, la palabra interrogativa va primero.',
      formula: 'Neg: S + am/is/are + not + V-ing | Q: (WH) + am/is/are + S + V-ing?',
      examples: ['I am not working.', "She isn't reading.", 'Are you watching TV?', 'What are you doing?'],
    },
  ],
  exercises: [
    {
      id: 'a1-m10-l2-ex1',
      type: 'multiple_choice',
      concept: 'present continuous - negative',
      difficulty: 1,
      prompt: 'Completa (negativo): "She ___ reading now."',
      promptTranslation: 'Ella no está leyendo ahora.',
      correctAnswer: "isn't",
      options: ["isn't", "aren't", 'am not'],
      explanation: 'Con "she" usamos "is" → is not = isn\'t. → She isn\'t reading now.',
    },
    {
      id: 'a1-m10-l2-ex2',
      type: 'multiple_choice',
      concept: 'present continuous - questions (verb -ing)',
      difficulty: 1,
      prompt: 'Completa: "Are you ___?" (verbo: work)',
      promptTranslation: '¿Estás trabajando?',
      correctAnswer: 'working',
      options: ['work', 'works', 'working'],
      explanation: 'Después de "are", el verbo lleva -ing: Are you working?',
    },
    {
      id: 'a1-m10-l2-ex3',
      type: 'fill_blank',
      concept: 'present continuous - negative (am not)',
      difficulty: 2,
      prompt: 'Completa (negativo): "I ___ working today."',
      promptTranslation: 'No estoy trabajando hoy.',
      correctAnswer: 'am not',
      acceptedAnswers: ["'m not", 'am not'],
      explanation: 'Con "I": am + not → I am not working. (También: I\'m not working.)',
    },
    {
      id: 'a1-m10-l2-ex4',
      type: 'fill_blank',
      concept: 'present continuous - yes/no questions',
      difficulty: 2,
      prompt: 'Completa la pregunta: "___ he sleeping?"',
      promptTranslation: '¿Está durmiendo él?',
      correctAnswer: 'Is',
      acceptedAnswers: ['is'],
      explanation: 'Con "he" usamos "is". → Is he sleeping?',
    },
    {
      id: 'a1-m10-l2-ex5',
      type: 'reorder',
      concept: 'present continuous - yes/no questions word order',
      difficulty: 3,
      prompt: 'Ordena: Are / you / watching / TV',
      promptTranslation: '¿Estás viendo la tele?',
      correctAnswer: 'Are you watching TV?',
      words: ['Are', 'you', 'watching', 'TV'],
      explanation: 'Pregunta: to be + sujeto + verbo -ing. → Are you watching TV?',
    },
    {
      id: 'a1-m10-l2-ex6',
      type: 'reorder',
      concept: 'present continuous - WH questions word order',
      difficulty: 3,
      prompt: 'Ordena: What / you / are / doing',
      promptTranslation: '¿Qué estás haciendo?',
      correctAnswer: 'What are you doing?',
      words: ['What', 'you', 'are', 'doing'],
      explanation: 'WH + to be + sujeto + verbo -ing. → What are you doing?',
    },
    {
      id: 'a1-m10-l2-ex7',
      type: 'multiple_choice',
      concept: 'present continuous - WH questions word order',
      difficulty: 2,
      prompt: 'Elige la frase correcta:',
      promptTranslation: '¿Qué estás haciendo?',
      correctAnswer: 'What are you doing?',
      options: ['What are you doing?', 'What you are doing?', 'What you doing?'],
      explanation: 'En la pregunta, "are" va después de "what" y antes de "you". → What are you doing?',
    },
    {
      id: 'a1-m10-l2-ex8',
      type: 'translate',
      concept: 'present continuous - negative',
      difficulty: 3,
      prompt: 'Traduce: "No estoy trabajando."',
      correctAnswer: 'I am not working.',
      acceptedAnswers: ["I'm not working", 'I am not working', "I'm not working."],
      acceptApproximate: true,
      explanation: '"No estoy" → I am not (I\'m not) + working. → I am not working.',
    },
    {
      id: 'a1-m10-l2-ex9',
      type: 'translate',
      concept: 'present continuous - WH questions',
      difficulty: 4,
      prompt: 'Traduce: "¿Qué estás haciendo?"',
      correctAnswer: 'What are you doing?',
      acceptedAnswers: ['What are you doing', 'what are you doing?'],
      acceptApproximate: true,
      explanation: 'WH + are + you + doing. → What are you doing?',
    },
  ],
  miniTest: [
    {
      id: 'a1-m10-l2-mt1',
      type: 'multiple_choice',
      concept: 'present continuous - negative',
      difficulty: 1,
      prompt: 'Completa (negativo): "They ___ watching TV now."',
      promptTranslation: 'No están viendo la tele ahora.',
      correctAnswer: "aren't",
      options: ["isn't", "aren't", 'am not'],
      explanation: 'Con "they" usamos "are" → are not = aren\'t. → They aren\'t watching TV now.',
    },
    {
      id: 'a1-m10-l2-mt2',
      type: 'fill_blank',
      concept: 'present continuous - yes/no questions',
      difficulty: 2,
      prompt: 'Completa la pregunta: "___ you working?"',
      promptTranslation: '¿Estás trabajando?',
      correctAnswer: 'Are',
      acceptedAnswers: ['are'],
      explanation: 'Con "you" usamos "are" en preguntas. → Are you working?',
    },
    {
      id: 'a1-m10-l2-mt3',
      type: 'fill_blank',
      concept: 'present continuous - negative',
      difficulty: 2,
      prompt: 'Completa (negativo): "He ___ not sleeping."',
      promptTranslation: 'Él no está durmiendo.',
      correctAnswer: 'is',
      acceptedAnswers: ['Is'],
      explanation: 'Con "he" usamos "is": He is not sleeping. = Él no está durmiendo.',
    },
    {
      id: 'a1-m10-l2-mt4',
      type: 'reorder',
      concept: 'present continuous - yes/no questions word order',
      difficulty: 3,
      prompt: 'Ordena: Is / he / sleeping',
      promptTranslation: '¿Está durmiendo él?',
      correctAnswer: 'Is he sleeping?',
      words: ['Is', 'he', 'sleeping'],
      explanation: 'Pregunta: to be + sujeto + verbo -ing. → Is he sleeping?',
    },
    {
      id: 'a1-m10-l2-mt5',
      type: 'translate',
      concept: 'present continuous - negative',
      difficulty: 3,
      prompt: 'Traduce: "Ella no está leyendo ahora."',
      correctAnswer: "She isn't reading now.",
      acceptedAnswers: ["She isn't reading now", "She's not reading now", 'She is not reading now'],
      acceptApproximate: true,
      explanation: '"Ella no está" → She is not (isn\'t) + reading now. → She isn\'t reading now.',
    },
  ],
  reviewItems: ['a1-m10-l1'],
  prerequisites: ['a1-m10-l1'],
}
