import type { Lesson } from '../../types'

export const lesson41PresentDeduction: Lesson = {
  id: 'b1-m4-l1',
  moduleId: 'm4-modals-deduction',
  order: 0,
  title: 'Deducción en presente: must be / can\'t be',
  objective: 'Hacer deducciones seguras sobre el presente con "must be" (seguro positivo) y "can\'t be" (seguro negativo).',
  explanation_es: `Cuando vemos evidencias y queremos deducir (adivinar con seguridad) algo del presente, usamos los verbos modales "must" y "can't" seguidos del verbo "be".

- MUST BE = "debe de ser" / "seguro que es o está". Lo usamos cuando las evidencias nos llevan a una conclusión positiva.
  - He must be tired after the long trip. = Debe de estar cansado después del largo viaje.
  - You must be hungry. = Debes de tener hambre.

- CAN'T BE = "no puede ser" / "seguro que no es o está". Lo usamos cuando las evidencias nos llevan a una conclusión negativa.
  - She can't be at home — her car isn't there. = No puede estar en casa — su coche no está allí.
  - It can't be Monday already! = ¡No puede ser ya lunes!

IMPORTANTE: después de un modal (must, can't) el verbo va en infinitivo SIN "to" y SIN conjugar:
- ✅ must be, ✅ can't be
- ❌ must to be, ❌ can't is

Piensa en "must" y "can't" como las dos caras de la misma moneda:
- must = estoy SEGURO de que SÍ (positivo)
- can't = estoy SEGURO de que NO (negativo)

En español lo expresamos con "debe de / tiene que" para must y "no puede ser que / seguro que no" para can't.`,
  examples: [
    { english: 'He must be tired after the long trip.', spanish: 'Debe de estar cansado después del largo viaje.', note: 'Evidencia: el largo viaje.' },
    { english: 'She can\'t be at home — her car isn\'t there.', spanish: 'No puede estar en casa — su coche no está allí.', note: 'Evidencia negativa: el coche no está.' },
    { english: 'You must be hungry.', spanish: 'Debes de tener hambre.', note: 'Deducción positiva segura.' },
    { english: 'They must be rich — they live in a huge house.', spanish: 'Deben de ser ricos — viven en una casa enorme.', note: 'must be + adjetivo.' },
    { english: 'It can\'t be Monday already!', spanish: '¡No puede ser ya lunes!', note: 'Deducción negativa segura.' },
    { english: 'The lights are off, so Tom must be asleep.', spanish: 'Las luces están apagadas, así que Tom debe de estar dormido.', note: 'Evidence → must be asleep.' },
  ],
  rule: `Fórmula:
sujeto + must / can't + be + (complemento)
- He must be tired. (seguro que SÍ)
- She can't be at home. (seguro que NO)

Usos:
- MUST + be → deducción positiva segura ("debe de ser").
- CAN'T + be → deducción negativa segura ("no puede ser").
- Tras must/can't, el verbo va en infinitivo sin "to": must be, can't be.
- El modal no cambia con la persona: he must, she must (nunca "he musts").`,
  commonMistakes: [
    { wrong: '❌ He must to be tired.', correct: '✅ He must be tired.', explanation: 'Después de "must" el verbo va sin "to": must be, no "must to be".' },
    { wrong: '❌ He can\'t is at home.', correct: '✅ He can\'t be at home.', explanation: 'Tras "can\'t" el verbo no se conjuga: can\'t be, no "can\'t is".' },
    { wrong: '❌ They musts be rich.', correct: '✅ They must be rich.', explanation: '"Must" no añade "-s" con he/she/it. El modal es igual para todas las personas.' },
    { wrong: '❌ She can\'t to be at home.', correct: '✅ She can\'t be at home.', explanation: 'Tras "can\'t" tampoco se usa "to": can\'t be.' },
  ],
  vocabulary: [
    { word: 'must', translation_es: 'debe de, tiene que (deducción segura)', level: 'B1', category: 'modals', partOfSpeech: 'modal verb', example: 'He must be tired.', exampleTranslation: 'Debe de estar cansado.' },
    { word: "can't", translation_es: 'no puede ser, seguro que no (deducción negativa)', level: 'B1', category: 'modals', partOfSpeech: 'modal verb', example: "She can't be at home.", exampleTranslation: 'No puede estar en casa.' },
    { word: 'tired', translation_es: 'cansado', level: 'A2', category: 'feelings', partOfSpeech: 'adjective', example: 'He must be tired.', exampleTranslation: 'Debe de estar cansado.' },
    { word: 'hungry', translation_es: 'hambriento, con hambre', level: 'A2', category: 'feelings', partOfSpeech: 'adjective', example: 'You must be hungry.', exampleTranslation: 'Debes de tener hambre.' },
    { word: 'already', translation_es: 'ya', level: 'A2', category: 'time', partOfSpeech: 'adverb', example: "It can't be Monday already!", exampleTranslation: '¡No puede ser ya lunes!' },
    { word: 'huge', translation_es: 'enorme, gigante', level: 'B1', category: 'adjectives', partOfSpeech: 'adjective', example: 'They live in a huge house.', exampleTranslation: 'Viven en una casa enorme.' },
  ],
  grammarPoints: [
    {
      id: 'gp-present-deduction',
      level: 'B1',
      name: 'Present deduction with must / can\'t + be',
      explanation_es: 'Usamos "must + be" para deducciones positivas seguras y "can\'t + be" para deducciones negativas seguras sobre el presente. Después del modal el verbo va en infinitivo sin "to".',
      formula: 'subject + must / can\'t + be + complement',
      examples: ['He must be tired after the long trip.', "She can't be at home — her car isn't there.", 'You must be hungry.'],
    },
  ],
  exercises: [
    {
      id: 'b1-m4-l1-ex1',
      type: 'multiple_choice',
      concept: 'present deduction must',
      difficulty: 1,
      prompt: 'Completa: "He ___ be tired after the long trip."',
      promptTranslation: 'Debe de estar cansado después del largo viaje.',
      correctAnswer: 'must',
      options: ['must', 'can', 'does'],
      explanation: 'Deducción positiva segura → "must". → He must be tired. (Debe de estar cansado.)',
    },
    {
      id: 'b1-m4-l1-ex2',
      type: 'multiple_choice',
      concept: 'present deduction can\'t',
      difficulty: 1,
      prompt: 'Completa: "She ___ be at home — her car isn\'t there."',
      promptTranslation: 'No puede estar en casa — su coche no está allí.',
      correctAnswer: "can't",
      options: ["can't", 'must', 'is'],
      explanation: 'Evidencia negativa (el coche no está) → deducción negativa segura → "can\'t". → She can\'t be at home.',
    },
    {
      id: 'b1-m4-l1-ex3',
      type: 'fill_blank',
      concept: 'present deduction must',
      difficulty: 2,
      prompt: 'Completa (deducción positiva): "You ___ be hungry."',
      promptTranslation: 'Debes de tener hambre.',
      correctAnswer: 'must',
      acceptedAnswers: ['must'],
      explanation: 'Deducción positiva segura → "must". → You must be hungry.',
    },
    {
      id: 'b1-m4-l1-ex4',
      type: 'fill_blank',
      concept: 'present deduction can\'t',
      difficulty: 2,
      prompt: 'Completa (deducción negativa): "It ___ be Monday already!"',
      promptTranslation: '¡No puede ser ya lunes!',
      correctAnswer: "can't",
      acceptedAnswers: ["can't", 'cannot'],
      explanation: 'Deducción negativa segura → "can\'t" (o "cannot"). → It can\'t be Monday already!',
    },
    {
      id: 'b1-m4-l1-ex5',
      type: 'select_correct',
      concept: 'present deduction form',
      difficulty: 2,
      prompt: 'Selecciona la frase correcta:',
      promptTranslation: 'Él debe de estar cansado.',
      correctAnswer: 'He must be tired.',
      options: ['He must be tired.', 'He must to be tired.', 'He must is tired.', 'He musts be tired.'],
      explanation: '"Must" va seguido del infinitivo sin "to" (be) y no se conjuga: He must be tired.',
    },
    {
      id: 'b1-m4-l1-ex6',
      type: 'true_false',
      concept: 'present deduction meaning',
      difficulty: 2,
      prompt: '"Must be" expresa una deducción positiva segura ("debe de ser").',
      correctAnswer: 'true',
      acceptedAnswers: ['True', 'TRUE', 't'],
      explanation: 'Verdadero. "Must be" indica que estamos seguros de que algo es o está: He must be tired.',
    },
    {
      id: 'b1-m4-l1-ex7',
      type: 'reorder',
      concept: 'present deduction can\'t',
      difficulty: 3,
      prompt: 'Ordena la frase (deducción negativa):',
      promptTranslation: 'No puede estar en casa ahora.',
      words: ['She', "can't", 'be', 'at', 'home', 'now.'],
      correctAnswer: "She can't be at home now.",
      explanation: 'Estructura: sujeto + can\'t + be + complemento. → She can\'t be at home now.',
    },
    {
      id: 'b1-m4-l1-ex8',
      type: 'translate',
      concept: 'present deduction must',
      difficulty: 3,
      prompt: 'Traduce: "Debe de estar cansado después del largo viaje."',
      correctAnswer: 'He must be tired after the long trip.',
      acceptedAnswers: [
        'He must be tired after the long trip',
        'He must be tired after the long trip.',
        'He must be tired after the long trip',
        'he must be tired after the long trip',
      ],
      acceptApproximate: true,
      explanation: '"Debe de estar" = must be. "después del largo viaje" = after the long trip.',
    },
    {
      id: 'b1-m4-l1-ex9',
      type: 'translate',
      concept: 'present deduction can\'t',
      difficulty: 3,
      prompt: 'Traduce: "No puede estar en casa — su coche no está allí."',
      correctAnswer: "She can't be at home — her car isn't there.",
      acceptedAnswers: [
        "She can't be at home — her car isn't there",
        "She can't be at home - her car isn't there",
        'She cannot be at home — her car is not there',
        "She can't be at home. Her car isn't there.",
      ],
      acceptApproximate: true,
      explanation: '"No puede estar" (deducción negativa) = can\'t be. "su coche no está allí" = her car isn\'t there.',
    },
    {
      id: 'b1-m4-l1-ex10',
      type: 'error_correction',
      concept: 'present deduction form',
      difficulty: 3,
      prompt: 'Corrige el error: "He must to be tired after the trip."',
      correctAnswer: 'He must be tired after the trip.',
      acceptedAnswers: [
        'He must be tired after the trip',
        'He must be tired after the trip.',
        'he must be tired after the trip',
      ],
      acceptApproximate: true,
      explanation: 'Tras "must" el verbo va sin "to": must be, no "must to be". → He must be tired after the trip.',
    },
    {
      id: 'b1-m4-l1-ex11',
      type: 'match',
      concept: 'present deduction match',
      difficulty: 3,
      prompt: 'Relaciona cada evidencia con su deducción:',
      pairs: [
        { left: 'He worked 12 hours today.', right: 'He must be tired.' },
        { left: "Her car isn't in the garage.", right: "She can't be at home." },
        { left: 'You haven\'t eaten all day.', right: 'You must be hungry.' },
        { left: "It's only 7 a.m.", right: "It can't be noon yet." },
        { left: 'They live in a huge house.', right: 'They must be rich.' },
      ],
      correctAnswer: 'He worked 12 hours today.=He must be tired., Her car isn\'t in the garage.=She can\'t be at home., You haven\'t eaten all day.=You must be hungry., It\'s only 7 a.m.=It can\'t be noon yet., They live in a huge house.=They must be rich.',
      explanation: 'Evidencia que apoya una conclusión positiva → must be. Evidencia que descarta algo → can\'t be.',
    },
  ],
  miniTest: [
    {
      id: 'b1-m4-l1-mt1',
      type: 'multiple_choice',
      concept: 'present deduction must',
      difficulty: 1,
      prompt: 'Completa: "You ___ be hungry."',
      promptTranslation: 'Debes de tener hambre.',
      correctAnswer: 'must',
      options: ['must', "can't", 'is'],
      explanation: 'Deducción positiva segura → "must". → You must be hungry.',
    },
    {
      id: 'b1-m4-l1-mt2',
      type: 'multiple_choice',
      concept: 'present deduction can\'t',
      difficulty: 2,
      prompt: 'Completa: "They ___ be at the party — the house is empty."',
      promptTranslation: 'No pueden estar en la fiesta — la casa está vacía.',
      correctAnswer: "can't",
      options: ["can't", 'must', 'are'],
      explanation: 'La casa vacía descarta la presencia → deducción negativa → "can\'t".',
    },
    {
      id: 'b1-m4-l1-mt3',
      type: 'error_correction',
      concept: 'present deduction form',
      difficulty: 3,
      prompt: 'Corrige el error: "He can\'t is at work today."',
      correctAnswer: "He can't be at work today.",
      acceptedAnswers: ["He can't be at work today", "He can't be at work today.", 'he cant be at work today'],
      acceptApproximate: true,
      explanation: 'Tras "can\'t" el verbo va en infinitivo sin conjugar: can\'t be, no "can\'t is".',
    },
    {
      id: 'b1-m4-l1-mt4',
      type: 'translate',
      concept: 'present deduction must',
      difficulty: 3,
      prompt: 'Traduce: "Debes de tener hambre."',
      correctAnswer: 'You must be hungry.',
      acceptedAnswers: ['You must be hungry', 'You must be hungry.', 'you must be hungry'],
      acceptApproximate: true,
      explanation: '"Debes de tener hambre" = You must be hungry (deducción positiva con must).',
    },
    {
      id: 'b1-m4-l1-mt5',
      type: 'select_correct',
      concept: 'present deduction form',
      difficulty: 3,
      prompt: 'Selecciona la frase correcta:',
      promptTranslation: 'No puede ser ya lunes.',
      correctAnswer: "It can't be Monday already.",
      options: ["It can't be Monday already.", "It can't is Monday already.", "It must be Monday already.", "It can't to be Monday already."],
      explanation: 'Deducción negativa → can\'t + be. → It can\'t be Monday already.',
    },
  ],
  reviewItems: ['b1-m3-l3'],
  prerequisites: ['b1-m3-l3'],
}
