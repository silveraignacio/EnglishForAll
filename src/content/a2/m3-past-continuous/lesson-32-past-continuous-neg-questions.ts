import type { Lesson } from '../../types'

export const lesson32PastContinuousNegQuestions: Lesson = {
  id: 'a2-m3-l2',
  moduleId: 'm3-past-continuous',
  order: 1,
  title: 'Past Continuous (negativo y preguntas)',
  objective: 'Formar negativos y preguntas con was/were + not + -ing, y usar respuestas cortas.',
  explanation_es: `En esta lección aprenderás a negar y a preguntar sobre acciones que estaban en progreso en el pasado.

### 1. Negativo: was / were + not + verbo -ing

Para negar, ponemos "not" después de was/were. Contracciones frecuentes:

- was + not = wasn't → "I wasn't sleeping." = No estaba durmiendo.
- were + not = weren't → "They weren't listening." = Ellos no estaban escuchando.

### 2. Preguntas: Was / Were + sujeto + verbo -ing?

Para preguntar, ponemos was/were al principio:

- "Were you working at 6?" = ¿Estabas trabajando a las 6?
- "Was she sleeping?" = ¿Estaba ella durmiendo?

### 3. Respuestas cortas

- Yes, I was. / No, I wasn't.
- Yes, she was. / No, she wasn't.
- Yes, they were. / No, they weren't.

### 4. Preguntas con What / Where...

Cuando preguntamos QUÉ estaba haciendo alguien, la pregunta empieza con "What":

- "What were you doing at 10 last night?" = ¿Qué estabas haciendo a las 10 anoche?
- "Where were you going?" = ¿A dónde ibas?

### ¡Ojo con la concordancia!

- Con you/we/they → Were: "Were you watching?"
- Con I/he/she/it → Was: "Was she cooking?"`,
  examples: [
    { english: 'I wasn\'t sleeping.', spanish: 'No estaba durmiendo.', note: 'wasn\'t = was not.' },
    { english: 'Were you working at 6?', spanish: '¿Estabas trabajando a las 6?', note: 'Con you usamos Were.' },
    { english: 'Yes, I was.', spanish: 'Sí, estaba.', note: 'Respuesta corta afirmativa.' },
    { english: 'No, I wasn\'t.', spanish: 'No, no estaba.', note: 'Respuesta corta negativa.' },
    { english: 'What were you doing at 10 last night?', spanish: '¿Qué estabas haciendo a las 10 anoche?', note: 'Pregunta con What.' },
    { english: 'They weren\'t listening.', spanish: 'Ellos no estaban escuchando.', note: 'weren\'t = were not.' },
  ],
  rule: `1. Negativo: was/were + not + verbo -ing → wasn't / weren't.
2. Pregunta: Was/Were + sujeto + verbo -ing? → "Were you working?"
3. Respuestas cortas: Yes, I was. / No, I wasn't. / Yes, they were. / No, they weren't.
4. WH-questions: What/Where + was/were + sujeto + verbo -ing? → "What were you doing?"
5. Concordancia: you/we/they → were. I/he/she/it → was.`,
  formation: {
    title: 'Cómo se forma el Past Continuous — Negativo y Preguntas',
    intro: 'Para negar ponemos not después de was/were (wasn\'t / weren\'t); para preguntar, invertimos el orden y ponemos was/were al principio.',
    patterns: [
      {
        name: 'Negativo',
        formula: 'Sujeto + wasn\'t / weren\'t + verbo + -ing + complemento',
        examples: [
          { english: 'I wasn\'t sleeping.', spanish: 'No estaba durmiendo.' },
          { english: 'They weren\'t listening.', spanish: 'Ellos no estaban escuchando.' },
        ],
        note: 'wasn\'t = was not. weren\'t = were not. Nunca "not was": I wasn\'t sleeping.',
      },
      {
        name: 'Pregunta sí/no',
        formula: 'Was / Were + sujeto + verbo + -ing + ...?',
        examples: [
          { english: 'Were you working at 6?', spanish: '¿Estabas trabajando a las 6?' },
          { english: 'Was she sleeping?', spanish: '¿Estaba ella durmiendo?' },
        ],
        note: 'Con you/we/they → Were. Con I/he/she/it → Was. En la pregunta, was/were va antes del sujeto.',
      },
      {
        name: 'Pregunta con WH-',
        formula: 'What / Where + was/were + sujeto + verbo + -ing + ...?',
        examples: [
          { english: 'What were you doing at 10 last night?', spanish: '¿Qué estabas haciendo a las 10 anoche?' },
          { english: 'Where were you going?', spanish: '¿A dónde ibas?' },
        ],
        note: 'Para preguntar por información añadimos la palabra interrogativa al principio: What/Where + was/were + sujeto + -ing.',
      },
      {
        name: 'Respuesta corta',
        formula: 'Yes, + sujeto + was/were. / No, + sujeto + wasn\'t/weren\'t.',
        examples: [
          { english: 'Yes, I was. / No, I wasn\'t.', spanish: 'Sí, estaba. / No, no estaba.' },
          { english: 'Yes, they were. / No, they weren\'t.', spanish: 'Sí, estaban. / No, no estaban.' },
        ],
      },
    ],
    notes: [
      'En las respuestas cortas repetimos el auxiliar: Yes, I was (no "Yes, I was working").',
      'La negativa nunca se forma con "not" suelto: I wasn\'t sleeping (no "I not was sleeping").',
    ],
  },
  commonMistakes: [
    { wrong: '❌ Was you watching TV?', correct: '✅ Were you watching TV?', explanation: 'Con "you" usamos "Were", no "Was".' },
    { wrong: '❌ I not was sleeping.', correct: '✅ I wasn\'t sleeping.', explanation: 'La negativa es "wasn\'t" (= was not) después del sujeto: I wasn\'t sleeping. No se dice "not was".' },
    { wrong: '❌ What you were doing at 10?', correct: '✅ What were you doing at 10?', explanation: 'En la pregunta, was/were va antes del sujeto: What were you doing?' },
  ],
  vocabulary: [
    { word: 'wasn\'t', translation_es: 'no estaba (was not)', level: 'A2', category: 'past continuous negative', partOfSpeech: 'verb', example: 'I wasn\'t sleeping.', exampleTranslation: 'No estaba durmiendo.' },
    { word: 'weren\'t', translation_es: 'no estaban (were not)', level: 'A2', category: 'past continuous negative', partOfSpeech: 'verb', example: 'They weren\'t listening.', exampleTranslation: 'Ellos no estaban escuchando.' },
    { word: 'work', translation_es: 'trabajar', level: 'A1', category: 'everyday actions', partOfSpeech: 'verb', example: 'Were you working at 6?', exampleTranslation: '¿Estabas trabajando a las 6?' },
    { word: 'last night', translation_es: 'anoche', level: 'A1', category: 'time expressions', partOfSpeech: 'phrase', example: 'What were you doing at 10 last night?', exampleTranslation: '¿Qué estabas haciendo a las 10 anoche?' },
    { word: 'listen', translation_es: 'escuchar', level: 'A1', category: 'everyday actions', partOfSpeech: 'verb', example: 'They weren\'t listening.', exampleTranslation: 'Ellos no estaban escuchando.' },
    { word: 'study', translation_es: 'estudiar', level: 'A1', category: 'everyday actions', partOfSpeech: 'verb', example: 'Were you studying yesterday?', exampleTranslation: '¿Estabas estudiando ayer?' },
    { word: 'sleep', translation_es: 'dormir', level: 'A1', category: 'everyday actions', partOfSpeech: 'verb', example: 'I wasn\'t sleeping.', exampleTranslation: 'No estaba durmiendo.' },
    { word: 'cook', translation_es: 'cocinar', level: 'A1', category: 'everyday actions', partOfSpeech: 'verb', example: 'Was she cooking dinner?', exampleTranslation: '¿Estaba ella cocinando la cena?' },
  ],
  grammarPoints: [
    {
      id: 'gp-a2m3-past-continuous-neg-questions',
      level: 'A2',
      name: 'Past Continuous — negative and questions',
      explanation_es: 'Negativos (wasn\'t/weren\'t + -ing), preguntas (Was/Were + sujeto + -ing?) y respuestas cortas.',
      formula: 'was/were + not + verb-ing | Was/Were + subject + verb-ing? | Yes, ... was. / No, ... wasn\'t.',
      examples: ['I wasn\'t sleeping.', 'Were you working at 6?', 'What were you doing?'],
    },
  ],
  exercises: [
    {
      id: 'a2-m3-l2-ex1',
      type: 'multiple_choice',
      concept: 'past continuous negative',
      difficulty: 1,
      prompt: 'Completa: "I ___ sleeping at 11."',
      promptTranslation: 'No estaba durmiendo a las 11.',
      correctAnswer: 'wasn\'t',
      options: ['wasn\'t', 'weren\'t', 'not was'],
      explanation: 'Con "I" la negativa es "wasn\'t" (= was not). → I wasn\'t sleeping at 11.',
    },
    {
      id: 'a2-m3-l2-ex2',
      type: 'fill_blank',
      concept: 'were + subject questions',
      difficulty: 2,
      prompt: 'Completa la pregunta: "___ you working at 6?"',
      promptTranslation: '¿Estabas trabajando a las 6?',
      correctAnswer: 'Were',
      acceptedAnswers: ['Were', 'were'],
      explanation: 'Con "you" la pregunta empieza con "Were". → Were you working at 6?',
    },
    {
      id: 'a2-m3-l2-ex3',
      type: 'multiple_choice',
      concept: 'short answers',
      difficulty: 2,
      prompt: 'Responde: "Were you working at 6?" (no)',
      promptTranslation: '¿Estabas trabajando a las 6? (no)',
      correctAnswer: 'No, I wasn\'t.',
      options: ['No, I wasn\'t.', 'No, I weren\'t.', 'No, I didn\'t.'],
      explanation: 'La respuesta corta negativa con "you" → "I" es "No, I wasn\'t."',
    },
    {
      id: 'a2-m3-l2-ex4',
      type: 'reorder',
      concept: 'wh-questions in past continuous',
      difficulty: 3,
      prompt: 'Ordena las palabras para formar una pregunta: What / doing / you / were / at 10 / last night?',
      promptTranslation: '¿Qué estabas haciendo a las 10 anoche?',
      correctAnswer: 'What were you doing at 10 last night?',
      words: ['What', 'were', 'you', 'doing', 'at 10', 'last night?'],
      explanation: 'Orden: What + was/were + sujeto + verbo-ing + ... → What were you doing at 10 last night?',
    },
    {
      id: 'a2-m3-l2-ex5',
      type: 'error_correction',
      concept: 'were you questions',
      difficulty: 3,
      prompt: 'Corrige el error: "Was you watching TV?"',
      correctAnswer: 'Were you watching TV?',
      acceptedAnswers: ['Were you watching TV?', 'Were you watching TV', 'were you watching TV?'],
      acceptApproximate: true,
      explanation: 'Con "you" usamos "Were", no "Was". → Were you watching TV?',
    },
    {
      id: 'a2-m3-l2-ex6',
      type: 'translate',
      concept: 'past continuous negative',
      difficulty: 3,
      prompt: 'Traduce: "No estaba durmiendo."',
      correctAnswer: 'I wasn\'t sleeping.',
      acceptedAnswers: ['I wasn\'t sleeping', 'I wasn\'t sleeping.', 'i wasn\'t sleeping'],
      acceptApproximate: true,
      explanation: '"Yo no estaba durmiendo" = I wasn\'t sleeping (wasn\'t = was not).',
    },
    {
      id: 'a2-m3-l2-ex7',
      type: 'match',
      concept: 'questions and short answers',
      difficulty: 3,
      prompt: 'Une cada pregunta con su respuesta corta correcta.',
      correctAnswer: 'Were you working at 6?→Yes, I was. / Was she sleeping?→No, she wasn\'t. / Were they listening?→Yes, they were. / Was he cooking?→No, he wasn\'t.',
      pairs: [
        { left: 'Were you working at 6?', right: 'Yes, I was.' },
        { left: 'Was she sleeping?', right: 'No, she wasn\'t.' },
        { left: 'Were they listening?', right: 'Yes, they were.' },
        { left: 'Was he cooking?', right: 'No, he wasn\'t.' },
      ],
      explanation: 'Las respuestas cortas repiten el auxiliar: afirmativo (Yes, I was / Yes, they were) o negativo (No, she wasn\'t / No, he wasn\'t).',
    },
    {
      id: 'a2-m3-l2-ex8',
      type: 'translate',
      concept: 'wh-questions',
      difficulty: 4,
      prompt: 'Traduce: "¿Qué estabas haciendo a las 10 anoche?"',
      correctAnswer: 'What were you doing at 10 last night?',
      acceptedAnswers: ['What were you doing at 10 last night?', 'What were you doing at 10 last night', 'what were you doing at 10 last night?'],
      acceptApproximate: true,
      explanation: '"¿Qué estabas haciendo?" = What were you doing?, "a las 10 anoche" = at 10 last night.',
    },
  ],
  miniTest: [
    {
      id: 'a2-m3-l2-mt1',
      type: 'multiple_choice',
      concept: 'past continuous negative',
      difficulty: 1,
      prompt: 'Completa: "They ___ listening."',
      promptTranslation: 'Ellos no estaban escuchando.',
      correctAnswer: 'weren\'t',
      options: ['weren\'t', 'wasn\'t', 'not were'],
      explanation: 'Con "they" la negativa es "weren\'t" (= were not).',
    },
    {
      id: 'a2-m3-l2-mt2',
      type: 'fill_blank',
      concept: 'was + subject questions',
      difficulty: 2,
      prompt: 'Completa la pregunta: "___ she sleeping?"',
      promptTranslation: '¿Estaba ella durmiendo?',
      correctAnswer: 'Was',
      acceptedAnswers: ['Was', 'was'],
      explanation: 'Con "she" la pregunta empieza con "Was". → Was she sleeping?',
    },
    {
      id: 'a2-m3-l2-mt3',
      type: 'multiple_choice',
      concept: 'short answers',
      difficulty: 2,
      prompt: 'Responde: "Were you working at 6?" (sí)',
      promptTranslation: '¿Estabas trabajando a las 6? (sí)',
      correctAnswer: 'Yes, I was.',
      options: ['Yes, I was.', 'Yes, I were.', 'Yes, I did.'],
      explanation: 'La respuesta corta afirmativa es "Yes, I was."',
    },
    {
      id: 'a2-m3-l2-mt4',
      type: 'translate',
      concept: 'past continuous negative',
      difficulty: 3,
      prompt: 'Traduce: "Ellos no estaban escuchando."',
      correctAnswer: 'They weren\'t listening.',
      acceptedAnswers: ['They weren\'t listening', 'They weren\'t listening.', 'they weren\'t listening'],
      acceptApproximate: true,
      explanation: '"Ellos no estaban escuchando" = They weren\'t listening (weren\'t = were not).',
    },
    {
      id: 'a2-m3-l2-mt5',
      type: 'error_correction',
      concept: 'negation order',
      difficulty: 4,
      prompt: 'Corrige el error: "I not was sleeping."',
      correctAnswer: 'I wasn\'t sleeping.',
      acceptedAnswers: ['I wasn\'t sleeping', 'I wasn\'t sleeping.', 'i wasn\'t sleeping'],
      acceptApproximate: true,
      explanation: 'La negativa es "wasn\'t" después del sujeto: I wasn\'t sleeping. No se dice "not was".',
    },
  ],
  reviewItems: ['a2-m3-l1'],
  prerequisites: ['a2-m3-l1'],
}
