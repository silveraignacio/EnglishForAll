import type { Lesson } from '../../types'

export const lesson22EverNever: Lesson = {
  id: 'a2-m2-l2',
  moduleId: 'm2-present-perfect',
  order: 1,
  title: 'Present Perfect con ever / never',
  objective: 'Preguntar y responder sobre experiencias de vida con "Have you ever...?" y "never".',
  explanation_es: `En esta lección aprenderás a preguntar por experiencias de vida y a responder con "nunca".

### 1. ever = alguna vez (en preguntas)

Para preguntar si alguien ha hecho algo ALGUNA VEZ en su vida usamos:

Have / Has + sujeto + ever + participio pasado + ...?

- "Have you ever been to Mexico?" = ¿Has estado alguna vez en México?
- "Has she ever seen a volcano?" = ¿Ha visto ella alguna vez un volcán?

"ever" significa "alguna vez" y va DESPUÉS del sujeto.

### 2. never = nunca (en afirmativas)

Para decir que NUNCA has hecho algo, usamos el Present Perfect afirmativo con "never" (¡no es necesario el "not"!):

- "I have never tried sushi." = Nunca he probado el sushi.
- "She has never been abroad." = Ella nunca ha estado en el extranjero.

### 3. Respuestas cortas

- Yes, I have. = Sí, (he estado).
- No, I haven't. = No, (no he estado).
- Yes, she has. / No, she hasn't.

Recuerda la estructura de la pregunta: Have + sujeto + ever + participio. Nunca digas "Do you ever been...?".`,
  examples: [
    { english: 'Have you ever been to Mexico?', spanish: '¿Has estado alguna vez en México?', note: 'Have + you + ever + been.' },
    { english: 'I have never tried sushi.', spanish: 'Nunca he probado el sushi.', note: 'never va entre have y el participio.' },
    { english: 'Has she ever seen a volcano?', spanish: '¿Ha visto ella alguna vez un volcán?', note: 'Con she usamos Has.' },
    { english: 'No, she hasn\'t.', spanish: 'No, ella no ha visto.', note: 'Respuesta corta negativa.' },
    { english: 'Have you ever ridden a horse?', spanish: '¿Has montado a caballo alguna vez?', note: 'ride → ridden (participio irregular).' },
    { english: 'I have never been abroad.', spanish: 'Nunca he estado en el extranjero.', note: 'never = nunca, no necesita "not".' },
  ],
  rule: `1. Pregunta: Have/Has + sujeto + ever + participio + ...? → "Have you ever been...?"
2. ever = alguna vez. Va después del sujeto.
3. Afirmativo con never = nunca: "I have never tried sushi." (sin "not").
4. Respuestas cortas: Yes, I have. / No, I haven't. (con has: Yes, she has. / No, she hasn't.)
5. Nunca "Do you ever been...?": la estructura es Have + sujeto + participio.`,
  commonMistakes: [
    { wrong: '❌ Do you ever been to London?', correct: '✅ Have you ever been to London?', explanation: 'La pregunta de experiencia se forma con "Have" + sujeto + participio, no con "Do...been".' },
    { wrong: '❌ I have never saw that film.', correct: '✅ I have never seen that film.', explanation: 'Después de have/has usamos el participio: seen, no saw (pasado simple).' },
    { wrong: '❌ Have you ever go to Mexico?', correct: '✅ Have you ever been to Mexico?', explanation: 'Después de "ever" el verbo va en participio: been (de go), no "go".' },
  ],
  vocabulary: [
    { word: 'ever', translation_es: 'alguna vez', level: 'A2', category: 'present perfect time words', partOfSpeech: 'adverb', example: 'Have you ever been to Mexico?', exampleTranslation: '¿Has estado alguna vez en México?' },
    { word: 'never', translation_es: 'nunca', level: 'A1', category: 'present perfect time words', partOfSpeech: 'adverb', example: 'I have never tried sushi.', exampleTranslation: 'Nunca he probado el sushi.' },
    { word: 'try', translation_es: 'probar, intentar', level: 'A2', category: 'experiences', partOfSpeech: 'verb', example: 'I have never tried sushi.', exampleTranslation: 'Nunca he probado el sushi.' },
    { word: 'volcano', translation_es: 'volcán', level: 'A2', category: 'experiences', partOfSpeech: 'noun', example: 'Has she ever seen a volcano?', exampleTranslation: '¿Ha visto ella alguna vez un volcán?' },
    { word: 'abroad', translation_es: 'en el extranjero', level: 'A2', category: 'experiences', partOfSpeech: 'adverb', example: 'I have never been abroad.', exampleTranslation: 'Nunca he estado en el extranjero.' },
    { word: 'ride', translation_es: 'montar (a caballo, bici)', level: 'A2', category: 'experiences', partOfSpeech: 'verb', example: 'Have you ever ridden a horse?', exampleTranslation: '¿Has montado a caballo alguna vez?' },
    { word: 'horse', translation_es: 'caballo', level: 'A1', category: 'experiences', partOfSpeech: 'noun', example: 'Have you ever ridden a horse?', exampleTranslation: '¿Has montado a caballo alguna vez?' },
    { word: 'been abroad', translation_es: 'estado en el extranjero', level: 'A2', category: 'experiences', partOfSpeech: 'phrase', example: 'I have never been abroad.', exampleTranslation: 'Nunca he estado en el extranjero.' },
  ],
  grammarPoints: [
    {
      id: 'gp-a2m2-ever-never',
      level: 'A2',
      name: 'Present Perfect with ever / never',
      explanation_es: 'Preguntas de experiencia con Have/Has + ever, respuestas cortas, y afirmativas con never para decir "nunca".',
      formula: 'Have/Has + subject + ever + past participle + ...? | Yes, I have. / No, I haven\'t. | subject + have/has + never + past participle',
      examples: ['Have you ever been to Mexico?', 'I have never tried sushi.', 'No, she hasn\'t.'],
    },
  ],
  exercises: [
    {
      id: 'a2-m2-l2-ex1',
      type: 'multiple_choice',
      concept: 'ever in questions',
      difficulty: 1,
      prompt: 'Completa: "Have you ___ been to Mexico?"',
      promptTranslation: '¿Has estado alguna vez en México?',
      correctAnswer: 'ever',
      options: ['ever', 'never', 'just'],
      explanation: 'En preguntas de experiencia usamos "ever" (alguna vez). → Have you ever been to Mexico?',
    },
    {
      id: 'a2-m2-l2-ex2',
      type: 'fill_blank',
      concept: 'never + participle',
      difficulty: 2,
      prompt: 'Completa: "I have ___ tried sushi."',
      promptTranslation: 'Nunca he probado el sushi.',
      correctAnswer: 'never',
      acceptedAnswers: ['never', 'Never'],
      explanation: '"Never" (nunca) va entre have y el participio. → I have never tried sushi.',
    },
    {
      id: 'a2-m2-l2-ex3',
      type: 'multiple_choice',
      concept: 'has / have in questions',
      difficulty: 2,
      prompt: 'Completa la pregunta: "___ she ever seen a volcano?"',
      promptTranslation: '¿Ha visto ella alguna vez un volcán?',
      correctAnswer: 'Has',
      options: ['Has', 'Have', 'Does'],
      explanation: 'Con "she" (3ª persona singular) usamos "Has" en la pregunta. → Has she ever seen a volcano?',
    },
    {
      id: 'a2-m2-l2-ex4',
      type: 'match',
      concept: 'questions and short answers',
      difficulty: 2,
      prompt: 'Une cada pregunta con su respuesta corta correcta.',
      correctAnswer: 'Have you ever been to Mexico?→Yes, I have. / Has she ever seen a volcano?→No, she hasn\'t. / Have they ever travelled abroad?→Yes, they have. / Have you ever tried sushi?→No, I haven\'t.',
      pairs: [
        { left: 'Have you ever been to Mexico?', right: 'Yes, I have.' },
        { left: 'Has she ever seen a volcano?', right: 'No, she hasn\'t.' },
        { left: 'Have they ever travelled abroad?', right: 'Yes, they have.' },
        { left: 'Have you ever tried sushi?', right: 'No, I haven\'t.' },
      ],
      explanation: 'Las respuestas cortas repiten el auxiliar (have/has) en afirmativo (Yes, I have) o negativo (No, she hasn\'t).',
    },
    {
      id: 'a2-m2-l2-ex5',
      type: 'error_correction',
      concept: 'have you ever structure',
      difficulty: 3,
      prompt: 'Corrige el error: "Do you ever been to London?"',
      correctAnswer: 'Have you ever been to London?',
      acceptedAnswers: ['Have you ever been to London?', 'Have you ever been to London', 'have you ever been to London?'],
      acceptApproximate: true,
      explanation: 'La pregunta de experiencia se forma con "Have" + sujeto + ever + participio. → Have you ever been to London?',
    },
    {
      id: 'a2-m2-l2-ex6',
      type: 'translate',
      concept: 'never + participle',
      difficulty: 3,
      prompt: 'Traduce: "Nunca he probado el sushi."',
      correctAnswer: 'I have never tried sushi.',
      acceptedAnswers: ['I have never tried sushi', 'I have never tried sushi.', 'i have never tried sushi'],
      acceptApproximate: true,
      explanation: '"Nunca he probado" = I have never tried (never entre have y el participio), "el sushi" = sushi.',
    },
    {
      id: 'a2-m2-l2-ex7',
      type: 'reorder',
      concept: 'question structure',
      difficulty: 4,
      prompt: 'Ordena las palabras para formar una pregunta: Have / you / ever / seen / a volcano?',
      promptTranslation: '¿Has visto alguna vez un volcán?',
      correctAnswer: 'Have you ever seen a volcano?',
      words: ['Have', 'you', 'ever', 'seen', 'a volcano?'],
      explanation: 'Orden: Have + sujeto + ever + participio. → Have you ever seen a volcano?',
    },
    {
      id: 'a2-m2-l2-ex8',
      type: 'multiple_choice',
      concept: 'short answers',
      difficulty: 3,
      prompt: 'Responde: "Have you ever been to Mexico?" (sí)',
      promptTranslation: '¿Has estado alguna vez en México? (sí)',
      correctAnswer: 'Yes, I have.',
      options: ['Yes, I have.', 'Yes, I do.', 'Yes, I am.'],
      explanation: 'La respuesta corta afirma con el auxiliar de la pregunta: "Yes, I have."',
    },
  ],
  miniTest: [
    {
      id: 'a2-m2-l2-mt1',
      type: 'multiple_choice',
      concept: 'ever in questions',
      difficulty: 1,
      prompt: 'Completa: "Have you ___ ridden a horse?"',
      promptTranslation: '¿Has montado a caballo alguna vez?',
      correctAnswer: 'ever',
      options: ['ever', 'never', 'already'],
      explanation: 'En preguntas de experiencia: Have + sujeto + ever + participio. → Have you ever ridden a horse?',
    },
    {
      id: 'a2-m2-l2-mt2',
      type: 'fill_blank',
      concept: 'never + participle',
      difficulty: 2,
      prompt: 'Completa: "She has ___ been abroad."',
      promptTranslation: 'Ella nunca ha estado en el extranjero.',
      correctAnswer: 'never',
      acceptedAnswers: ['never', 'Never'],
      explanation: '"Never" va entre has y el participio. → She has never been abroad.',
    },
    {
      id: 'a2-m2-l2-mt3',
      type: 'multiple_choice',
      concept: 'short answers',
      difficulty: 2,
      prompt: 'Responde: "Has she ever seen a volcano?" (no)',
      promptTranslation: '¿Ha visto ella alguna vez un volcán? (no)',
      correctAnswer: 'No, she hasn\'t.',
      options: ['No, she hasn\'t.', 'No, she doesn\'t.', 'No, she isn\'t.'],
      explanation: 'La respuesta corta negativa repite el auxiliar "has": "No, she hasn\'t."',
    },
    {
      id: 'a2-m2-l2-mt4',
      type: 'translate',
      concept: 'ever questions',
      difficulty: 3,
      prompt: 'Traduce: "¿Has estado alguna vez en México?"',
      correctAnswer: 'Have you ever been to Mexico?',
      acceptedAnswers: ['Have you ever been to Mexico?', 'Have you ever been to Mexico', 'have you ever been to Mexico?'],
      acceptApproximate: true,
      explanation: '"¿Has... alguna vez?" = Have you ever...?, "estado en México" = been to Mexico.',
    },
    {
      id: 'a2-m2-l2-mt5',
      type: 'error_correction',
      concept: 'never + participle',
      difficulty: 4,
      prompt: 'Corrige el error: "I have never saw that film."',
      correctAnswer: 'I have never seen that film.',
      acceptedAnswers: ['I have never seen that film', 'I have never seen that film.', 'i have never seen that film'],
      acceptApproximate: true,
      explanation: 'Después de have/has usamos el participio "seen", no el pasado simple "saw".',
    },
  ],
  reviewItems: ['a2-m2-l1'],
  prerequisites: ['a2-m2-l1'],
}
