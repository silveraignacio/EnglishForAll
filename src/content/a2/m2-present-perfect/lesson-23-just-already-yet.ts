import type { Lesson } from '../../types'

export const lesson23JustAlreadyYet: Lesson = {
  id: 'a2-m2-l3',
  moduleId: 'm2-present-perfect',
  order: 2,
  title: 'just / already / yet',
  objective: 'Usar just (acabo de), already (ya) y yet (todavía/todavía no) con el Present Perfect.',
  explanation_es: `En esta lección aprenderás tres palabras muy útiles para hablar de acciones recientes o pendientes.

### 1. just = acabo de

"just" indica que algo pasó hace muy poco tiempo. Va entre have/has y el participio:

- "I have just finished my homework." = Acabo de terminar mis deberes.
- "The bus has just arrived." = El autobús acaba de llegar.

### 2. already = ya

"already" indica que algo ya está hecho. Va entre have/has y el participio (en frases afirmativas):

- "She has already eaten." = Ella ya ha comido.
- "We have already seen that film." = Ya hemos visto esa película.

### 3. yet = todavía / todavía no

"yet" se usa en preguntas y negativas, y va AL FINAL de la frase:

- Pregunta: "Have you finished yet?" = ¿Ya has terminado? (o: ¿Has terminado todavía?)
- Negativa: "I haven\'t done it yet." = Todavía no lo he hecho.

### Resumen de posiciones

- just → entre have/has y el participio (afirmativo): have just finished.
- already → entre have/has y el participio (afirmativo): has already eaten.
- yet → al final (preguntas y negativas): Have you finished yet? / I haven\'t done it yet.

Para decir "todavía no lo he hecho" en A2 usamos el Present Perfect: "I haven\'t done it yet." (evita "I didn\'t do it yet").`,
  examples: [
    { english: 'I have just finished my homework.', spanish: 'Acabo de terminar mis deberes.', note: 'just = acabo de. Va entre have y el participio.' },
    { english: 'She has already eaten.', spanish: 'Ella ya ha comido.', note: 'already = ya. En frases afirmativas.' },
    { english: 'Have you finished yet?', spanish: '¿Ya has terminado?', note: 'yet va al final de la pregunta.' },
    { english: 'I haven\'t done it yet.', spanish: 'Todavía no lo he hecho.', note: 'yet en negativa, al final.' },
    { english: 'The bus has just arrived.', spanish: 'El autobús acaba de llegar.', note: 'has + just + arrived.' },
    { english: 'We have already seen that film.', spanish: 'Ya hemos visto esa película.', note: 'have + already + seen.' },
  ],
  rule: `1. just = acabo de. Posición: have/has + just + participio → "I have just finished."
2. already = ya. Posición: have/has + already + participio (afirmativo) → "She has already eaten."
3. yet = todavía / todavía no. Posición: AL FINAL, en preguntas y negativas → "Have you finished yet?" / "I haven't done it yet."
4. "Todavía no lo he hecho" en A2: I haven't done it yet (Present Perfect).`,
  commonMistakes: [
    { wrong: '❌ I didn\'t do it yet.', correct: '✅ I haven\'t done it yet.', explanation: 'Con "yet" usamos el Present Perfect: haven\'t + participio. En A2 no usamos "didn\'t...yet".' },
    { wrong: '❌ I have done just my homework.', correct: '✅ I have just done my homework.', explanation: '"Just" va entre have/has y el participio: have just done.' },
    { wrong: '❌ I have finished yet.', correct: '✅ I have already finished.', explanation: '"Yet" no se usa en afirmativas sin "not". Para decir "ya he terminado" usamos "already".' },
  ],
  vocabulary: [
    { word: 'just', translation_es: 'acabo de (acción reciente)', level: 'A2', category: 'present perfect time words', partOfSpeech: 'adverb', example: 'I have just finished my homework.', exampleTranslation: 'Acabo de terminar mis deberes.' },
    { word: 'already', translation_es: 'ya (acción hecha)', level: 'A2', category: 'present perfect time words', partOfSpeech: 'adverb', example: 'She has already eaten.', exampleTranslation: 'Ella ya ha comido.' },
    { word: 'yet', translation_es: 'todavía (no) / ya', level: 'A2', category: 'present perfect time words', partOfSpeech: 'adverb', example: 'Have you finished yet?', exampleTranslation: '¿Ya has terminado?' },
    { word: 'finish', translation_es: 'terminar', level: 'A1', category: 'everyday actions', partOfSpeech: 'verb', example: 'I have just finished my homework.', exampleTranslation: 'Acabo de terminar mis deberes.' },
    { word: 'homework', translation_es: 'deberes, tarea', level: 'A1', category: 'school', partOfSpeech: 'noun', example: 'I have just finished my homework.', exampleTranslation: 'Acabo de terminar mis deberes.' },
    { word: 'arrive', translation_es: 'llegar', level: 'A1', category: 'travel', partOfSpeech: 'verb', example: 'The bus has just arrived.', exampleTranslation: 'El autobús acaba de llegar.' },
    { word: 'do', translation_es: 'hacer', level: 'A1', category: 'everyday actions', partOfSpeech: 'verb', example: 'I haven\'t done it yet.', exampleTranslation: 'Todavía no lo he hecho.' },
    { word: 'eat', translation_es: 'comer', level: 'A1', category: 'everyday actions', partOfSpeech: 'verb', example: 'She has already eaten.', exampleTranslation: 'Ella ya ha comido.' },
  ],
  grammarPoints: [
    {
      id: 'gp-a2m2-just-already-yet',
      level: 'A2',
      name: 'just / already / yet',
      explanation_es: 'Acciones recientes (just = acabo de), acciones completadas (already = ya) y pendientes (yet = todavía, en preguntas y negativas).',
      formula: 'have/has + just + participle | have/has + already + participle | ... + yet? / haven\'t + ... + yet',
      examples: ['I have just finished.', 'She has already eaten.', 'Have you finished yet?'],
    },
  ],
  exercises: [
    {
      id: 'a2-m2-l3-ex1',
      type: 'multiple_choice',
      concept: 'just',
      difficulty: 1,
      prompt: 'Completa: "I have ___ finished my homework."',
      promptTranslation: 'Acabo de terminar mis deberes.',
      correctAnswer: 'just',
      options: ['just', 'yet', 'never'],
      explanation: '"Just" = acabo de. Va entre have y el participio: have just finished.',
    },
    {
      id: 'a2-m2-l3-ex2',
      type: 'fill_blank',
      concept: 'already',
      difficulty: 2,
      prompt: 'Completa: "She has ___ eaten."',
      promptTranslation: 'Ella ya ha comido.',
      correctAnswer: 'already',
      acceptedAnswers: ['already', 'Already'],
      explanation: '"Already" = ya, en frases afirmativas: has already eaten.',
    },
    {
      id: 'a2-m2-l3-ex3',
      type: 'multiple_choice',
      concept: 'yet in questions',
      difficulty: 2,
      prompt: 'Completa la pregunta: "Have you finished ___?"',
      promptTranslation: '¿Ya has terminado?',
      correctAnswer: 'yet',
      options: ['yet', 'just', 'already'],
      explanation: '"Yet" va al final de las preguntas: Have you finished yet?',
    },
    {
      id: 'a2-m2-l3-ex4',
      type: 'reorder',
      concept: 'just position',
      difficulty: 3,
      prompt: 'Ordena las palabras para formar una frase: just / I / finished / have / my homework',
      promptTranslation: 'Acabo de terminar mis deberes.',
      correctAnswer: 'I have just finished my homework.',
      words: ['I', 'have', 'just', 'finished', 'my homework'],
      explanation: 'Orden: sujeto + have/has + just + participio + ... → I have just finished my homework.',
    },
    {
      id: 'a2-m2-l3-ex5',
      type: 'error_correction',
      concept: 'present perfect with yet',
      difficulty: 3,
      prompt: 'Corrige el error: "I didn\'t do it yet."',
      correctAnswer: 'I haven\'t done it yet.',
      acceptedAnswers: ['I haven\'t done it yet', 'I haven\'t done it yet.', 'i haven\'t done it yet'],
      acceptApproximate: true,
      explanation: 'Con "yet" en negativa usamos el Present Perfect: haven\'t + participio (done), no "didn\'t do".',
    },
    {
      id: 'a2-m2-l3-ex6',
      type: 'translate',
      concept: 'just',
      difficulty: 3,
      prompt: 'Traduce: "Acabo de terminar mis deberes."',
      correctAnswer: 'I have just finished my homework.',
      acceptedAnswers: ['I have just finished my homework', 'I have just finished my homework.', 'i have just finished my homework'],
      acceptApproximate: true,
      explanation: '"Acabo de" = have just, "terminar" = finished, "mis deberes" = my homework.',
    },
    {
      id: 'a2-m2-l3-ex7',
      type: 'multiple_choice',
      concept: 'position of yet',
      difficulty: 4,
      prompt: 'Elige la frase correcta:',
      promptTranslation: 'Elige la frase correcta.',
      correctAnswer: 'I haven\'t done it yet.',
      options: [
        'I haven\'t done it yet.',
        'I haven\'t done yet it.',
        'I haven\'t yet done it it.',
      ],
      explanation: '"Yet" va al final de la negativa: I haven\'t done it yet. (Opciones con orden extraño son incorrectas.)',
    },
    {
      id: 'a2-m2-l3-ex8',
      type: 'translate',
      concept: 'yet in questions',
      difficulty: 4,
      prompt: 'Traduce: "¿Ya has terminado?"',
      correctAnswer: 'Have you finished yet?',
      acceptedAnswers: ['Have you finished yet?', 'Have you finished yet', 'have you finished yet?'],
      acceptApproximate: true,
      explanation: '"¿Ya has terminado?" = Have you finished yet? ("yet" al final de la pregunta).',
    },
  ],
  miniTest: [
    {
      id: 'a2-m2-l3-mt1',
      type: 'multiple_choice',
      concept: 'already',
      difficulty: 1,
      prompt: 'Completa: "We have ___ seen that film."',
      promptTranslation: 'Ya hemos visto esa película.',
      correctAnswer: 'already',
      options: ['already', 'yet', 'just'],
      explanation: '"Already" = ya, en frases afirmativas: have already seen.',
    },
    {
      id: 'a2-m2-l3-mt2',
      type: 'fill_blank',
      concept: 'just',
      difficulty: 2,
      prompt: 'Completa: "The bus has ___ arrived."',
      promptTranslation: 'El autobús acaba de llegar.',
      correctAnswer: 'just',
      acceptedAnswers: ['just', 'Just'],
      explanation: '"Just" = acabo de. has + just + arrived.',
    },
    {
      id: 'a2-m2-l3-mt3',
      type: 'multiple_choice',
      concept: 'yet in negatives',
      difficulty: 2,
      prompt: 'Completa: "I haven\'t done it ___."',
      promptTranslation: 'Todavía no lo he hecho.',
      correctAnswer: 'yet',
      options: ['yet', 'just', 'already'],
      explanation: '"Yet" va al final de las negativas: haven\'t done it yet.',
    },
    {
      id: 'a2-m2-l3-mt4',
      type: 'translate',
      concept: 'already',
      difficulty: 3,
      prompt: 'Traduce: "Ella ya ha comido."',
      correctAnswer: 'She has already eaten.',
      acceptedAnswers: ['She has already eaten', 'She has already eaten.', 'she has already eaten'],
      acceptApproximate: true,
      explanation: '"Ella ya ha comido" = She has already eaten (already entre has y el participio).',
    },
    {
      id: 'a2-m2-l3-mt5',
      type: 'error_correction',
      concept: 'present perfect with yet',
      difficulty: 4,
      prompt: 'Corrige el error: "I have finished yet."',
      correctAnswer: 'I have already finished.',
      acceptedAnswers: ['I have already finished', 'I have already finished.', 'i have already finished'],
      acceptApproximate: true,
      explanation: 'En afirmativa no se usa "yet". Para decir "ya he terminado" usamos "already": I have already finished.',
    },
  ],
  reviewItems: ['a2-m2-l2'],
  prerequisites: ['a2-m2-l2'],
}
