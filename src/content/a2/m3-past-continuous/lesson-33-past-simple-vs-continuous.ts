import type { Lesson } from '../../types'

export const lesson33PastSimpleVsContinuous: Lesson = {
  id: 'a2-m3-l3',
  moduleId: 'm3-past-continuous',
  order: 2,
  title: 'Past Simple vs Past Continuous',
  objective: 'Narrar acciones interrumpidas: Past Continuous (acción larga de fondo) + Past Simple (interrupción), con when y while.',
  explanation_es: `En esta lección aprenderás a narrar historias combinando dos tiempos: el Past Continuous (acción larga) y el Past Simple (interrupción corta).

### La escena perfecta: una acción larga + una interrupción

Imagina que estabas cocinando (acción larga, en progreso) y de repente sonó el teléfono (acción corta que interrumpe).

- Acción LARGA (de fondo) → Past Continuous: was/were + -ing → "I was cooking..."
- Acción CORTA (la interrupción) → Past Simple → "...the phone rang."

Unidas por "when":

- "I was cooking when the phone rang." = Estaba cocinando cuando sonó el teléfono.

### when vs while

- when + la interrupción (Past Simple): "I was cooking WHEN the phone rang."
- while + la acción larga (Past Continuous): "WHILE she was driving, she saw an accident." = Mientras conducía, vio un accidente.

### Otros ejemplos

- "They were having dinner when I arrived." = Estaban cenando cuando llegué.
- "While we were talking, the teacher came in." = Mientras hablábamos, entró la profesora.

### Resumen

1. ¿Qué estaba pasando (fondo)? → Past Continuous (was/were + -ing).
2. ¿Qué ocurrió (interrupción)? → Past Simple.
3. when + Past Simple; while + Past Continuous.`,
  examples: [
    { english: 'I was cooking when the phone rang.', spanish: 'Estaba cocinando cuando sonó el teléfono.', note: 'Acción larga (was cooking) + interrupción (rang).' },
    { english: 'While she was driving, she saw an accident.', spanish: 'Mientras conducía, vio un accidente.', note: 'while + Past Continuous (was driving).' },
    { english: 'They were having dinner when I arrived.', spanish: 'Estaban cenando cuando llegué.', note: 'were having (fondo) + arrived (interrupción).' },
    { english: 'He was taking a shower when the lights went out.', spanish: 'Estaba duchándose cuando se fueron las luces.', note: 'was taking + went out.' },
    { english: 'While we were talking, the teacher came in.', spanish: 'Mientras hablábamos, entró la profesora.', note: 'while + were talking.' },
    { english: 'I was sleeping when the alarm went off.', spanish: 'Estaba durmiendo cuando sonó la alarma.', note: 'was sleeping + went off.' },
  ],
  rule: `1. Acción LARGA (fondo) → Past Continuous: was/were + -ing.
2. Interrupción CORTA → Past Simple.
3. when + Past Simple (la interrupción): "I was cooking when the phone rang."
4. while + Past Continuous (la acción larga): "While she was driving, she saw an accident."
5. Nunca olvides el -ing en el Past Continuous: ❌ I was cook → ✅ I was cooking.`,
  commonMistakes: [
    { wrong: '❌ I was cook when the phone rang.', correct: '✅ I was cooking when the phone rang.', explanation: 'El Past Continuous SIEMPRE lleva el verbo en -ing: was cooking, no was cook.' },
    { wrong: '❌ When she was driving, she saw an accident.', correct: '✅ While she was driving, she saw an accident.', explanation: '"While" se usa con la acción larga (Past Continuous). "When" va con la interrupción (Past Simple).' },
    { wrong: '❌ The phone was ringing when I was cooking.', correct: '✅ The phone rang while I was cooking.', explanation: 'La interrupción va en Past Simple (rang) y la acción larga en Past Continuous (was cooking).' },
  ],
  vocabulary: [
    { word: 'when', translation_es: 'cuando (con interrupción)', level: 'A1', category: 'linking words', partOfSpeech: 'conjunction', example: 'I was cooking when the phone rang.', exampleTranslation: 'Estaba cocinando cuando sonó el teléfono.' },
    { word: 'while', translation_es: 'mientras (con acción larga)', level: 'A2', category: 'linking words', partOfSpeech: 'conjunction', example: 'While she was driving, she saw an accident.', exampleTranslation: 'Mientras conducía, vio un accidente.' },
    { word: 'ring', translation_es: 'sonar (el teléfono)', level: 'A2', category: 'narrative verbs', partOfSpeech: 'verb', example: 'The phone rang while I was cooking.', exampleTranslation: 'El teléfono sonó mientras cocinaba.' },
    { word: 'arrive', translation_es: 'llegar', level: 'A1', category: 'narrative verbs', partOfSpeech: 'verb', example: 'They were having dinner when I arrived.', exampleTranslation: 'Estaban cenando cuando llegué.' },
    { word: 'accident', translation_es: 'accidente', level: 'A2', category: 'narrative nouns', partOfSpeech: 'noun', example: 'While she was driving, she saw an accident.', exampleTranslation: 'Mientras conducía, vio un accidente.' },
    { word: 'dinner', translation_es: 'cena', level: 'A1', category: 'food', partOfSpeech: 'noun', example: 'They were having dinner when I arrived.', exampleTranslation: 'Estaban cenando cuando llegué.' },
    { word: 'talk', translation_es: 'hablar', level: 'A1', category: 'everyday actions', partOfSpeech: 'verb', example: 'While we were talking, the teacher came in.', exampleTranslation: 'Mientras hablábamos, entró la profesora.' },
    { word: 'take a shower', translation_es: 'ducharse', level: 'A1', category: 'daily routines', partOfSpeech: 'phrase', example: 'He was taking a shower when the lights went out.', exampleTranslation: 'Estaba duchándose cuando se fueron las luces.' },
  ],
  grammarPoints: [
    {
      id: 'gp-a2m3-past-simple-vs-continuous',
      level: 'A2',
      name: 'Past Simple vs Past Continuous (interrupted actions)',
      explanation_es: 'Narrar acciones interrumpidas: Past Continuous = acción larga de fondo, Past Simple = interrupción corta. when + Past Simple, while + Past Continuous.',
      formula: 'was/were + verb-ing (when/while) + Past Simple | while + was/were + verb-ing',
      examples: ['I was cooking when the phone rang.', 'While she was driving, she saw an accident.'],
    },
  ],
  exercises: [
    {
      id: 'a2-m3-l3-ex1',
      type: 'multiple_choice',
      concept: 'verb + -ing in past continuous',
      difficulty: 1,
      prompt: 'Completa: "I was ___ when the phone rang." (cook)',
      promptTranslation: 'Estaba cocinando cuando sonó el teléfono.',
      correctAnswer: 'cooking',
      options: ['cooking', 'cook', 'cooked'],
      explanation: 'El Past Continuous lleva el verbo en -ing: was cooking, no cook ni cooked.',
    },
    {
      id: 'a2-m3-l3-ex2',
      type: 'fill_blank',
      concept: 'past simple interruption',
      difficulty: 2,
      prompt: 'Completa con el pasado: "The phone ___ while I was cooking." (ring)',
      promptTranslation: 'El teléfono sonó mientras cocinaba.',
      correctAnswer: 'rang',
      acceptedAnswers: ['rang', 'Rang'],
      explanation: 'La interrupción va en Past Simple: ring → rang. → The phone rang while I was cooking.',
    },
    {
      id: 'a2-m3-l3-ex3',
      type: 'multiple_choice',
      concept: 'while + past continuous',
      difficulty: 2,
      prompt: 'Completa: "___ she was driving, she saw an accident."',
      promptTranslation: 'Mientras conducía, vio un accidente.',
      correctAnswer: 'While',
      options: ['While', 'When', 'During'],
      explanation: '"While" se usa con la acción larga en Past Continuous (was driving). "When" va con la interrupción.',
    },
    {
      id: 'a2-m3-l3-ex4',
      type: 'reorder',
      concept: 'interrupted action structure',
      difficulty: 3,
      prompt: 'Ordena las palabras para formar una frase: arrived / were / They / dinner / having / when / I',
      promptTranslation: 'Estaban cenando cuando llegué.',
      correctAnswer: 'They were having dinner when I arrived.',
      words: ['They', 'were', 'having', 'dinner', 'when', 'I', 'arrived'],
      explanation: 'Orden: sujeto + was/were + verbo-ing + ... + when + sujeto + Past Simple. → They were having dinner when I arrived.',
    },
    {
      id: 'a2-m3-l3-ex5',
      type: 'error_correction',
      concept: 'verb + -ing',
      difficulty: 3,
      prompt: 'Corrige el error: "I was cook when you called."',
      correctAnswer: 'I was cooking when you called.',
      acceptedAnswers: ['I was cooking when you called', 'I was cooking when you called.', 'i was cooking when you called'],
      acceptApproximate: true,
      explanation: 'El Past Continuous siempre lleva -ing: was cooking, no was cook.',
    },
    {
      id: 'a2-m3-l3-ex6',
      type: 'translate',
      concept: 'interrupted actions',
      difficulty: 3,
      prompt: 'Traduce: "Estaba cocinando cuando sonó el teléfono."',
      correctAnswer: 'I was cooking when the phone rang.',
      acceptedAnswers: ['I was cooking when the phone rang', 'I was cooking when the phone rang.', 'i was cooking when the phone rang'],
      acceptApproximate: true,
      explanation: '"Estaba cocinando" = I was cooking (acción larga), "cuando sonó el teléfono" = when the phone rang (interrupción, ring → rang).',
    },
    {
      id: 'a2-m3-l3-ex7',
      type: 'multiple_choice',
      concept: 'when + past simple',
      difficulty: 4,
      prompt: 'Completa: "I was cooking ___ the phone rang."',
      promptTranslation: 'Estaba cocinando cuando sonó el teléfono.',
      correctAnswer: 'when',
      options: ['when', 'while', 'during'],
      explanation: '"When" va con la interrupción (Past Simple): I was cooking when the phone rang.',
    },
    {
      id: 'a2-m3-l3-ex8',
      type: 'translate',
      concept: 'while + past continuous',
      difficulty: 4,
      prompt: 'Traduce: "Mientras conducía, vio un accidente."',
      correctAnswer: 'While she was driving, she saw an accident.',
      acceptedAnswers: ['While she was driving, she saw an accident', 'While she was driving, she saw an accident.', 'while she was driving, she saw an accident'],
      acceptApproximate: true,
      explanation: '"Mientras conducía" = While she was driving (while + Past Continuous), "vio un accidente" = she saw an accident (see → saw).',
    },
  ],
  miniTest: [
    {
      id: 'a2-m3-l3-mt1',
      type: 'multiple_choice',
      concept: 'past simple interruption',
      difficulty: 1,
      prompt: 'Completa: "I was sleeping when the alarm ___." (go off)',
      promptTranslation: 'Estaba durmiendo cuando sonó la alarma.',
      correctAnswer: 'went off',
      options: ['went off', 'goes off', 'go off'],
      explanation: 'La interrupción va en Past Simple: go off → went off.',
    },
    {
      id: 'a2-m3-l3-mt2',
      type: 'fill_blank',
      concept: 'verb + -ing',
      difficulty: 2,
      prompt: 'Completa con el verbo en -ing: "They were ___ dinner when I arrived." (have)',
      promptTranslation: 'Estaban cenando cuando llegué.',
      correctAnswer: 'having',
      acceptedAnswers: ['having', 'Having'],
      explanation: 'have → having (se quita la -e). → They were having dinner when I arrived.',
    },
    {
      id: 'a2-m3-l3-mt3',
      type: 'multiple_choice',
      concept: 'while + past continuous',
      difficulty: 2,
      prompt: 'Completa: "___ we were talking, the teacher came in."',
      promptTranslation: 'Mientras hablábamos, entró la profesora.',
      correctAnswer: 'While',
      options: ['While', 'When', 'During'],
      explanation: '"While" introduce la acción larga (were talking).',
    },
    {
      id: 'a2-m3-l3-mt4',
      type: 'translate',
      concept: 'interrupted actions',
      difficulty: 3,
      prompt: 'Traduce: "Estaban cenando cuando llegué."',
      correctAnswer: 'They were having dinner when I arrived.',
      acceptedAnswers: ['They were having dinner when I arrived', 'They were having dinner when I arrived.', 'they were having dinner when I arrived'],
      acceptApproximate: true,
      explanation: '"Estaban cenando" = They were having dinner, "cuando llegué" = when I arrived (arrive → arrived).',
    },
    {
      id: 'a2-m3-l3-mt5',
      type: 'error_correction',
      concept: 'when vs while',
      difficulty: 4,
      prompt: 'Corrige el error: "When she was driving, she saw an accident."',
      correctAnswer: 'While she was driving, she saw an accident.',
      acceptedAnswers: ['While she was driving, she saw an accident', 'While she was driving, she saw an accident.', 'while she was driving, she saw an accident'],
      acceptApproximate: true,
      explanation: 'Con la acción larga en Past Continuous (was driving) usamos "while", no "when".',
    },
  ],
  reviewItems: ['a2-m3-l2'],
  prerequisites: ['a2-m3-l2'],
}
