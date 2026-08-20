import type { Lesson } from '../../types'

export const lesson24ForSince: Lesson = {
  id: 'a2-m2-l4',
  moduleId: 'm2-present-perfect',
  order: 3,
  title: 'for / since (duración)',
  objective: 'Expresar cuánto tiempo llevas haciendo algo con for + periodo y since + punto de partida.',
  explanation_es: `En esta lección aprenderás a decir cuánto tiempo dura una situación que empezó en el pasado y continúa en el presente.

### ¿Cuándo usamos el Present Perfect con for/since?

Para hablar de algo que empezó en el pasado y sigue siendo verdad ahora: "He vivido aquí durante 10 años." En inglés:

- for + PERIODO de tiempo (durante): for 5 years, for two hours, for a long time.
- since + PUNTO de partida (desde): since 2019, since Monday, since 8 o\'clock.

### 1. for = durante (periodo de tiempo)

- "I have lived here for 10 years." = He vivido aquí durante 10 años.
- "We have known each other for a long time." = Nos conocemos desde hace mucho tiempo.

### 2. since = desde (punto de partida)

- "She has worked here since 2020." = Ella ha trabajado aquí desde 2020.
- "They have been married since 2015." = Llevan casados desde 2015.

### ¿Cómo elegir?

- ¿Puedes medirlo en años, horas, meses, días? → for: for 5 years, for two hours.
- ¿Es una fecha, un día o un momento concreto? → since: since 2019, since Monday.

### ¡Ojo!

- ❌ "since 5 years" → ✅ "for 5 years" (5 years es un periodo).
- ❌ "for 2020" → ✅ "since 2020" (2020 es un punto de partida).`,
  examples: [
    { english: 'I have lived here for 10 years.', spanish: 'He vivido aquí durante 10 años.', note: 'for + periodo: 10 years.' },
    { english: 'She has worked here since 2020.', spanish: 'Ella ha trabajado aquí desde 2020.', note: 'since + punto de partida: 2020.' },
    { english: 'We have known each other for a long time.', spanish: 'Nos conocemos desde hace mucho tiempo.', note: 'for + a long time.' },
    { english: 'They have been married since 2015.', spanish: 'Llevan casados desde 2015.', note: 'since + 2015.' },
    { english: 'I have studied English for two years.', spanish: 'He estudiado inglés durante dos años.', note: 'for + two years.' },
    { english: 'He has been in bed since Monday.', spanish: 'Ha estado en cama desde el lunes.', note: 'since + Monday.' },
  ],
  rule: `1. for + PERIODO de tiempo → for 5 years, for two hours, for a long time.
2. since + PUNTO de partida → since 2019, since Monday, since 8 o'clock.
3. Regla rápida: si puedes medirlo (años, horas) → for. Si es una fecha o momento concreto → since.
4. Fórmula: have/has + participio + for/since + ...`,
  formation: {
    title: 'Cómo se forma la duración con for y since',
    intro: 'Con el Present Perfect (have/has + participio) usamos "for" para decir cuánto dura algo (periodo) y "since" para indicar desde cuándo (punto de partida).',
    patterns: [
      {
        name: 'for + periodo de tiempo',
        formula: 'have/has + participio pasado + for + periodo (5 years, two hours, a long time)',
        examples: [
          { english: 'I have lived here for 10 years.', spanish: 'He vivido aquí durante 10 años.' },
          { english: 'We have known each other for a long time.', spanish: 'Nos conocemos desde hace mucho tiempo.' },
        ],
        note: '"For" responde a la pregunta "¿durante cuánto tiempo?" y va con cantidades medibles.',
      },
      {
        name: 'since + punto de partida',
        formula: 'have/has + participio pasado + since + punto de partida (2020, Monday, 8 o\'clock)',
        examples: [
          { english: 'She has worked here since 2020.', spanish: 'Ella ha trabajado aquí desde 2020.' },
          { english: 'They have been married since 2015.', spanish: 'Llevan casados desde 2015.' },
        ],
        note: '"Since" responde a la pregunta "¿desde cuándo?" y va con fechas, días o momentos concretos.',
      },
    ],
    notes: [
      'Regla rápida: si puedes medirlo (años, horas, meses) → for. Si es una fecha o un momento concreto → since.',
      '❌ since 5 years → ✅ for 5 years. ❌ for 2020 → ✅ since 2020.',
      'No combines "since" con "ago": ❌ since 5 years ago → ✅ for 5 years.',
      'El verbo va en participio pasado con have/has: I have lived, she has worked.',
    ],
  },
  commonMistakes: [
    { wrong: '❌ I have lived here since 5 years.', correct: '✅ I have lived here for 5 years.', explanation: '"5 years" es un periodo de tiempo, así que usamos "for", no "since".' },
    { wrong: '❌ She has worked here for 2020.', correct: '✅ She has worked here since 2020.', explanation: '"2020" es un punto de partida (un año), así que usamos "since".' },
    { wrong: '❌ I have known him since 5 years ago.', correct: '✅ I have known him for 5 years.', explanation: 'No se combina "since" con "ago". Con un periodo usamos "for": for 5 years.' },
  ],
  vocabulary: [
    { word: 'for', translation_es: 'durante (periodo de tiempo)', level: 'A2', category: 'duration', partOfSpeech: 'preposition', example: 'I have lived here for 10 years.', exampleTranslation: 'He vivido aquí durante 10 años.' },
    { word: 'since', translation_es: 'desde (punto de partida)', level: 'A2', category: 'duration', partOfSpeech: 'preposition', example: 'She has worked here since 2020.', exampleTranslation: 'Ella ha trabajado aquí desde 2020.' },
    { word: 'a long time', translation_es: 'mucho tiempo', level: 'A2', category: 'duration', partOfSpeech: 'phrase', example: 'We have known each other for a long time.', exampleTranslation: 'Nos conocemos desde hace mucho tiempo.' },
    { word: 'year', translation_es: 'año', level: 'A1', category: 'time', partOfSpeech: 'noun', example: 'I have studied English for two years.', exampleTranslation: 'He estudiado inglés durante dos años.' },
    { word: 'hour', translation_es: 'hora', level: 'A1', category: 'time', partOfSpeech: 'noun', example: 'We have been here for two hours.', exampleTranslation: 'Llevamos aquí dos horas.' },
    { word: 'week', translation_es: 'semana', level: 'A1', category: 'time', partOfSpeech: 'noun', example: 'I have had this job for a week.', exampleTranslation: 'Tengo este trabajo desde hace una semana.' },
    { word: 'month', translation_es: 'mes', level: 'A1', category: 'time', partOfSpeech: 'noun', example: 'They have lived here for six months.', exampleTranslation: 'Han vivido aquí durante seis meses.' },
    { word: 'know', translation_es: 'conocer', level: 'A1', category: 'everyday actions', partOfSpeech: 'verb', example: 'We have known each other for a long time.', exampleTranslation: 'Nos conocemos desde hace mucho tiempo.' },
  ],
  grammarPoints: [
    {
      id: 'gp-a2m2-for-since',
      level: 'A2',
      name: 'for / since',
      explanation_es: 'Duración de una acción que empezó en el pasado: for + periodo (duración) y since + punto de partida (fecha/momento concreto).',
      formula: 'have/has + past participle + for + period | have/has + past participle + since + point in time',
      examples: ['I have lived here for 10 years.', 'She has worked here since 2020.'],
    },
  ],
  exercises: [
    {
      id: 'a2-m2-l4-ex1',
      type: 'multiple_choice',
      concept: 'for + period',
      difficulty: 1,
      prompt: 'Completa: "I have lived here ___ 10 years."',
      promptTranslation: 'He vivido aquí durante 10 años.',
      correctAnswer: 'for',
      options: ['for', 'since', 'from'],
      explanation: '"10 years" es un periodo de tiempo → usamos "for".',
    },
    {
      id: 'a2-m2-l4-ex2',
      type: 'fill_blank',
      concept: 'since + point in time',
      difficulty: 2,
      prompt: 'Completa: "She has worked here ___ 2020."',
      promptTranslation: 'Ella ha trabajado aquí desde 2020.',
      correctAnswer: 'since',
      acceptedAnswers: ['since', 'Since'],
      explanation: '"2020" es un punto de partida → usamos "since".',
    },
    {
      id: 'a2-m2-l4-ex3',
      type: 'multiple_choice',
      concept: 'for + period',
      difficulty: 2,
      prompt: 'Completa: "We have known each other ___ a long time."',
      promptTranslation: 'Nos conocemos desde hace mucho tiempo.',
      correctAnswer: 'for',
      options: ['for', 'since', 'until'],
      explanation: '"A long time" es un periodo → usamos "for".',
    },
    {
      id: 'a2-m2-l4-ex4',
      type: 'match',
      concept: 'for vs since',
      difficulty: 2,
      prompt: 'Clasifica cada expresión: ¿es un periodo (for) o un punto de partida (since)? Une cada una con su tipo.',
      correctAnswer: 'for 5 years→periodo, since 2019→punto de partida, for two hours→periodo, since Monday→punto de partida, for a long time→periodo, since 2020→punto de partida',
      pairs: [
        { left: 'for 5 years', right: 'periodo de tiempo' },
        { left: 'since 2019', right: 'punto de partida' },
        { left: 'for two hours', right: 'periodo de tiempo' },
        { left: 'since Monday', right: 'punto de partida' },
        { left: 'for a long time', right: 'periodo de tiempo' },
        { left: 'since 2020', right: 'punto de partida' },
      ],
      explanation: 'Los periodos medibles (years, hours, time) van con for. Las fechas y momentos concretos (2019, Monday, 2020) van con since.',
    },
    {
      id: 'a2-m2-l4-ex5',
      type: 'error_correction',
      concept: 'for not since',
      difficulty: 3,
      prompt: 'Corrige el error: "I have lived here since 5 years."',
      correctAnswer: 'I have lived here for 5 years.',
      acceptedAnswers: ['I have lived here for 5 years', 'I have lived here for 5 years.', 'i have lived here for 5 years'],
      acceptApproximate: true,
      explanation: '"5 years" es un periodo de tiempo → usamos "for", no "since".',
    },
    {
      id: 'a2-m2-l4-ex6',
      type: 'translate',
      concept: 'for + period',
      difficulty: 3,
      prompt: 'Traduce: "He vivido aquí durante 10 años."',
      correctAnswer: 'I have lived here for 10 years.',
      acceptedAnswers: ['I have lived here for 10 years', 'I have lived here for 10 years.', 'i have lived here for 10 years'],
      acceptApproximate: true,
      explanation: '"He vivido" = I have lived, "aquí" = here, "durante 10 años" = for 10 years.',
    },
    {
      id: 'a2-m2-l4-ex7',
      type: 'reorder',
      concept: 'since + point in time',
      difficulty: 4,
      prompt: 'Ordena las palabras para formar una frase: since / has / She / here / worked / 2020',
      promptTranslation: 'Ella ha trabajado aquí desde 2020.',
      correctAnswer: 'She has worked here since 2020.',
      words: ['She', 'has', 'worked', 'here', 'since', '2020'],
      explanation: 'Orden: sujeto + have/has + participio + ... + since + punto de partida. → She has worked here since 2020.',
    },
    {
      id: 'a2-m2-l4-ex8',
      type: 'multiple_choice',
      concept: 'for vs since',
      difficulty: 4,
      prompt: 'Elige la frase correcta:',
      promptTranslation: 'Elige la frase correcta.',
      correctAnswer: 'I have been here since Monday.',
      options: [
        'I have been here for Monday.',
        'I have been here since Monday.',
        'I have been here since two days.',
      ],
      explanation: '"Monday" es un punto de partida → since Monday. Las opciones con "for Monday" y "since two days" son incorrectas.',
    },
  ],
  miniTest: [
    {
      id: 'a2-m2-l4-mt1',
      type: 'multiple_choice',
      concept: 'since + point in time',
      difficulty: 1,
      prompt: 'Completa: "She has worked here ___ 2020."',
      promptTranslation: 'Ella ha trabajado aquí desde 2020.',
      correctAnswer: 'since',
      options: ['since', 'for', 'from'],
      explanation: '"2020" es un punto de partida → usamos "since".',
    },
    {
      id: 'a2-m2-l4-mt2',
      type: 'fill_blank',
      concept: 'for + period',
      difficulty: 2,
      prompt: 'Completa: "I have studied English ___ two years."',
      promptTranslation: 'He estudiado inglés durante dos años.',
      correctAnswer: 'for',
      acceptedAnswers: ['for', 'For'],
      explanation: '"Two years" es un periodo de tiempo → usamos "for".',
    },
    {
      id: 'a2-m2-l4-mt3',
      type: 'multiple_choice',
      concept: 'for + period',
      difficulty: 2,
      prompt: 'Completa: "We have known each other ___ a long time."',
      promptTranslation: 'Nos conocemos desde hace mucho tiempo.',
      correctAnswer: 'for',
      options: ['for', 'since', 'during'],
      explanation: '"A long time" es un periodo → usamos "for".',
    },
    {
      id: 'a2-m2-l4-mt4',
      type: 'translate',
      concept: 'since + point in time',
      difficulty: 3,
      prompt: 'Traduce: "Ella ha trabajado aquí desde 2020."',
      correctAnswer: 'She has worked here since 2020.',
      acceptedAnswers: ['She has worked here since 2020', 'She has worked here since 2020.', 'she has worked here since 2020'],
      acceptApproximate: true,
      explanation: '"Ella ha trabajado" = She has worked, "aquí" = here, "desde 2020" = since 2020.',
    },
    {
      id: 'a2-m2-l4-mt5',
      type: 'error_correction',
      concept: 'since not for',
      difficulty: 4,
      prompt: 'Corrige el error: "She has worked here for 2020."',
      correctAnswer: 'She has worked here since 2020.',
      acceptedAnswers: ['She has worked here since 2020', 'She has worked here since 2020.', 'she has worked here since 2020'],
      acceptApproximate: true,
      explanation: '"2020" es un punto de partida (un año), no un periodo → usamos "since".',
    },
  ],
  reviewItems: ['a2-m2-l3'],
  workbookRefs: [
    { levelId: 'a2', page: 2, exercises: [1, 2, 3, 5, 6], note: 'Práctica de present perfect con for/since, ever/never y just/already/yet' },
  ],
  prerequisites: ['a2-m2-l3'],
}
