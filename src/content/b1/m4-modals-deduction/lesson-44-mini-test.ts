import type { Lesson } from '../../types'

export const lesson44MiniTest: Lesson = {
  id: 'b1-m4-l4',
  moduleId: 'm4-modals-deduction',
  order: 3,
  title: 'Mini-test: Modals of Deduction',
  objective: 'Repasar todas las deducciones con modales (presente y pasado) y resolver un misterio lógico usando must, can\'t, may, might y could.',
  explanation_es: `Este mini-test repasa el módulo completo de los modales de deducción.

RECUERDA LAS CLAVES:

1. DEDUCCIÓN EN PRESENTE (evidencias actuales):
   - must be = seguro que sí ("debe de ser"): He must be tired.
   - can't be = seguro que no ("no puede ser"): She can't be at home.
   - may / could be = es posible: She may be in a meeting.
   - might be = quizá, poco probable: It might rain later.

2. DEDUCCIÓN EN PASADO (evidencias sobre lo que pasó):
   - must have + participio = seguro que pasó: They must have missed the train.
   - can't have + participio = seguro que no pasó: She can't have forgotten your birthday.
   - might have + participio = quizá pasó: He might have taken the wrong bus.

3. FORMA (¡siempre!):
   - Modal + verbo en infinitivo SIN "to": must be, might be, could be.
   - Modal + have + PARTICIPIO (para pasado): must have gone, can't have forgotten.
   - El modal no se conjuga: he must, she must, they must (nunca "musts", nunca "must has").

Errores a evitar:
   - ❌ must to be → ✅ must be
   - ❌ can't is → ✅ can't be
   - ❌ must has gone → ✅ must have gone
   - ❌ must have went → ✅ must have gone`,
  examples: [
    { english: 'He must be tired after the long trip.', spanish: 'Debe de estar cansado después del largo viaje.', note: 'Presente, positivo.' },
    { english: 'She can\'t be at home — her car isn\'t there.', spanish: 'No puede estar en casa — su coche no está allí.', note: 'Presente, negativo.' },
    { english: 'They must have missed the train.', spanish: 'Deben de haber perdido el tren.', note: 'Pasado, positivo.' },
    { english: 'He might have taken the wrong bus.', spanish: 'Quizá haya cogido el autobús equivocado.', note: 'Pasado, posibilidad.' },
    { english: 'It may snow tonight.', spanish: 'Puede que nieve esta noche.', note: 'Presente/futuro, posibilidad.' },
  ],
  rule: `Repaso:
- Presente: must be (seguro sí) | can't be (seguro no) | may/could be (posible) | might be (poco probable).
- Pasado: must have + participio | can't have + participio | might have + participio.
- Modal + infinitivo sin "to". Modal + have + participio para pasado.
- El modal no cambia con la persona.

Nunca: "must to be", "can't is", "must has", "must have went".`,
  commonMistakes: [
    { wrong: '❌ He must to be tired.', correct: '✅ He must be tired.', explanation: 'Tras "must" el verbo va sin "to".' },
    { wrong: '❌ She can\'t is at home.', correct: '✅ She can\'t be at home.', explanation: 'Tras "can\'t" el verbo no se conjuga: can\'t be.' },
    { wrong: '❌ They must has missed the train.', correct: '✅ They must have missed the train.', explanation: 'Tras "must" siempre "have", nunca "has".' },
    { wrong: '❌ He must have went home.', correct: '✅ He must have gone home.', explanation: 'Después de "have" va el participio (gone), no el pasado (went).' },
  ],
  vocabulary: [
    { word: 'mystery', translation_es: 'misterio', level: 'B1', category: 'nouns', partOfSpeech: 'noun', example: 'We solved the mystery.', exampleTranslation: 'Resolvimos el misterio.' },
    { word: 'evidence', translation_es: 'evidencia, prueba', level: 'B1', category: 'nouns', partOfSpeech: 'noun', example: 'The evidence shows that...', exampleTranslation: 'La evidencia muestra que...' },
    { word: 'detective', translation_es: 'detective', level: 'B1', category: 'nouns', partOfSpeech: 'noun', example: 'The detective examined the room.', exampleTranslation: 'El detective examinó la habitación.' },
    { word: 'in a hurry', translation_es: 'con prisa, de prisa', level: 'B1', category: 'phrases', partOfSpeech: 'phrase', example: 'He must have left in a hurry.', exampleTranslation: 'Debe de haberse ido con prisa.' },
    { word: 'parking lot', translation_es: 'aparcamiento, estacionamiento', level: 'B1', category: 'travel', partOfSpeech: 'noun', example: 'His car is still in the parking lot.', exampleTranslation: 'Su coche sigue en el aparcamiento.' },
    { word: 'cold', translation_es: 'frío', level: 'A1', category: 'adjectives', partOfSpeech: 'adjective', example: 'The coffee is cold.', exampleTranslation: 'El café está frío.' },
  ],
  grammarPoints: [
    {
      id: 'gp-modals-deduction-review',
      level: 'B1',
      name: 'Modals of deduction (review)',
      explanation_es: 'Repaso de las deducciones con modales: presente (must/can\'t/may/might/could + be) y pasado (must/can\'t/might + have + participio).',
      formula: 'present: subject + must / can\'t / may / might / could + be | past: subject + must / can\'t / might + have + participle',
      examples: ['He must be tired.', "She can't be at home.", 'They must have missed the train.', 'He might have taken the wrong bus.'],
    },
  ],
  exercises: [
    {
      id: 'b1-m4-l4-ex1',
      type: 'multiple_choice',
      concept: 'modals of deduction review',
      difficulty: 1,
      prompt: 'Completa (deducción positiva): "He ___ be tired after the trip."',
      promptTranslation: 'Debe de estar cansado después del viaje.',
      correctAnswer: 'must',
      options: ['must', "can't", 'might'],
      explanation: 'Deducción positiva segura → "must". → He must be tired after the trip.',
    },
    {
      id: 'b1-m4-l4-ex2',
      type: 'multiple_choice',
      concept: 'modals of deduction review',
      difficulty: 2,
      prompt: 'Completa (deducción pasada negativa): "She ___ have forgotten your birthday."',
      promptTranslation: 'No puede haber olvidado tu cumpleaños.',
      correctAnswer: "can't",
      options: ["can't", 'must', 'may'],
      explanation: 'Deducción pasada negativa segura → "can\'t have".',
    },
    {
      id: 'b1-m4-l4-ex3',
      type: 'fill_blank',
      concept: 'modals of deduction review',
      difficulty: 2,
      prompt: 'Completa con el participio: "He might have ___ (take) the wrong bus."',
      promptTranslation: 'Quizá haya cogido el autobús equivocado.',
      correctAnswer: 'taken',
      acceptedAnswers: ['taken'],
      explanation: 'Después de "have" va el participio: "take" → "taken".',
    },
    {
      id: 'b1-m4-l4-ex4',
      type: 'select_correct',
      concept: 'modals of deduction review',
      difficulty: 2,
      prompt: 'Selecciona la frase correcta:',
      promptTranslation: 'No puede estar en casa.',
      correctAnswer: "She can't be at home.",
      options: ["She can't be at home.", "She can't is at home.", "She must to be at home.", "She can't to be at home."],
      explanation: 'Tras "can\'t" el verbo va sin "to" y sin conjugar: can\'t be.',
    },
    {
      id: 'b1-m4-l4-ex5',
      type: 'error_correction',
      concept: 'modals of deduction review',
      difficulty: 3,
      prompt: 'Corrige el error: "They must has missed the train."',
      correctAnswer: 'They must have missed the train.',
      acceptedAnswers: [
        'They must have missed the train',
        'They must have missed the train.',
        'they must have missed the train',
      ],
      acceptApproximate: true,
      explanation: 'Tras "must" va "have", nunca "has": must have missed.',
    },
    {
      id: 'b1-m4-l4-ex6',
      type: 'translate',
      concept: 'modals of deduction review',
      difficulty: 3,
      prompt: 'Traduce: "Deben de haber perdido el tren."',
      correctAnswer: 'They must have missed the train.',
      acceptedAnswers: [
        'They must have missed the train',
        'They must have missed the train.',
        'they must have missed the train',
      ],
      acceptApproximate: true,
      explanation: '"Deben de haber" = must have. "perdido el tren" = missed the train.',
    },
    {
      id: 'b1-m4-l4-ex7',
      type: 'match',
      concept: 'modals of deduction review',
      difficulty: 3,
      prompt: 'Relaciona cada frase con su significado:',
      pairs: [
        { left: 'He must be rich.', right: 'Seguro que es rico.' },
        { left: "She can't be at home.", right: 'No puede estar en casa.' },
        { left: 'It might rain later.', right: 'Puede que llueva más tarde.' },
        { left: 'They must have left.', right: 'Seguro que se han ido.' },
        { left: 'He might have taken the wrong bus.', right: 'Quizá haya cogido el autobús equivocado.' },
      ],
      correctAnswer: 'He must be rich.=Seguro que es rico., She can\'t be at home.=No puede estar en casa., It might rain later.=Puede que llueva más tarde., They must have left.=Seguro que se han ido., He might have taken the wrong bus.=Quizá haya cogido el autobús equivocado.',
      explanation: '"Must" = seguro que sí, "can\'t" = seguro que no, "might" = posibilidad. "Must have" = pasado seguro, "might have" = pasado posible.',
    },
    {
      id: 'b1-m4-l4-ex8',
      type: 'true_false',
      concept: 'modals of deduction review',
      difficulty: 3,
      prompt: '"Might have + participio" expresa una deducción segura sobre el pasado.',
      correctAnswer: 'false',
      acceptedAnswers: ['False', 'FALSE', 'f'],
      explanation: 'Falso. "Might have" expresa POSIBILIDAD, no certeza. Para deducciones seguras usamos must have (positivo) o can\'t have (negativo).',
    },
    {
      id: 'b1-m4-l4-ex9',
      type: 'reading',
      concept: 'modals of deduction reading',
      difficulty: 4,
      prompt: 'Lee el misterio y responde las preguntas:',
      reading: {
        text: 'It is Monday morning. Detective Laura arrives at the office of Mr. Brown and finds the room in silence. The lights are off and the door is locked. His coffee is cold, and his phone is still on the desk. "He must have left in a hurry," Laura thinks. His car is still in the parking lot, so he can\'t have gone far by car. He might have taken a taxi to the airport. Outside, it is raining, and an umbrella is still by the door. "He must have forgotten it," she says. Nobody knows where Mr. Brown is, but Laura is sure: he can\'t be in the building.',
        translation: 'Es lunes por la mañana. La detective Laura llega a la oficina del señor Brown y encuentra la habitación en silencio. Las luces están apagadas y la puerta está cerrada con llave. Su café está frío y su teléfono sigue sobre el escritorio. "Debe de haberse ido con prisa", piensa Laura. Su coche sigue en el aparcamiento, así que no puede haber ido lejos en coche. Quizá haya cogido un taxi al aeropuerto. Fuera está lloviendo y un paraguas sigue junto a la puerta. "Debe de haberlo olvidado", dice ella. Nadie sabe dónde está el señor Brown, pero Laura está segura: no puede estar en el edificio.',
        questions: [
          {
            id: 'b1-m4-l4-ex9-q1',
            type: 'multiple_choice',
            concept: 'modals of deduction reading',
            difficulty: 4,
            prompt: '¿Por qué cree Laura que el señor Brown se fue con prisa?',
            correctAnswer: 'Porque su café está frío.',
            options: ['Porque su café está frío.', 'Porque su coche no está.', 'Porque la puerta está abierta.'],
            explanation: 'El texto dice: "His coffee is cold" → "He must have left in a hurry." La evidencia es el café frío.',
          },
          {
            id: 'b1-m4-l4-ex9-q2',
            type: 'multiple_choice',
            concept: 'modals of deduction reading',
            difficulty: 4,
            prompt: '¿Por qué no puede haber ido lejos en coche?',
            correctAnswer: 'Porque su coche sigue en el aparcamiento.',
            options: ['Porque su coche sigue en el aparcamiento.', 'Porque no tiene coche.', 'Porque llueve.'],
            explanation: 'El texto dice: "His car is still in the parking lot, so he can\'t have gone far by car."',
          },
          {
            id: 'b1-m4-l4-ex9-q3',
            type: 'multiple_choice',
            concept: 'modals of deduction reading',
            difficulty: 4,
            prompt: '¿Dónde podría haber ido el señor Brown?',
            correctAnswer: 'Al aeropuerto en taxi.',
            options: ['Al aeropuerto en taxi.', 'Al aparcamiento en coche.', 'A su casa a pie.'],
            explanation: 'El texto dice: "He might have taken a taxi to the airport." (posibilidad con might have.)',
          },
          {
            id: 'b1-m4-l4-ex9-q4',
            type: 'multiple_choice',
            concept: 'modals of deduction reading',
            difficulty: 4,
            prompt: '¿Qué deducción final hace Laura sobre el señor Brown?',
            correctAnswer: 'No puede estar en el edificio.',
            options: ['No puede estar en el edificio.', 'Debe de estar en la oficina.', 'Puede estar en el aparcamiento.'],
            explanation: 'El texto dice: "he can\'t be in the building." (deducción negativa segura con can\'t be.)',
          },
        ],
      },
      correctAnswer: 'reading complete',
      explanation: 'En el texto, Laura usa must have (café frío → se fue con prisa), can\'t have (coche → no fue lejos en coche), might have (taxi al aeropuerto) y can\'t be (no está en el edificio).',
    },
    {
      id: 'b1-m4-l4-ex10',
      type: 'reorder',
      concept: 'modals of deduction review',
      difficulty: 3,
      prompt: 'Ordena la frase (deducción pasada):',
      promptTranslation: 'Deben de haber perdido el tren.',
      words: ['They', 'must', 'have', 'missed', 'the', 'train.'],
      correctAnswer: 'They must have missed the train.',
      explanation: 'Estructura: sujeto + must + have + participio (missed) + complemento.',
    },
    {
      id: 'b1-m4-l4-ex11',
      type: 'fill_blank',
      concept: 'modals of deduction review',
      difficulty: 4,
      prompt: 'Completa con el participio: "She must have ___ (go) to the bank."',
      promptTranslation: 'Debe de haber ido al banco.',
      correctAnswer: 'gone',
      acceptedAnswers: ['gone'],
      explanation: 'El participio de "go" es "gone": must have gone (nunca "went").',
    },
  ],
  miniTest: [
    {
      id: 'b1-m4-l4-mt1',
      type: 'multiple_choice',
      concept: 'modals of deduction review',
      difficulty: 1,
      prompt: 'Completa (deducción positiva): "You ___ be hungry."',
      promptTranslation: 'Debes de tener hambre.',
      correctAnswer: 'must',
      options: ['must', "can't", 'might'],
      explanation: 'Deducción positiva segura → "must". → You must be hungry.',
    },
    {
      id: 'b1-m4-l4-mt2',
      type: 'fill_blank',
      concept: 'modals of deduction review',
      difficulty: 2,
      prompt: 'Completa (posibilidad): "She ___ be in a meeting."',
      promptTranslation: 'Puede estar en una reunión.',
      correctAnswer: 'may',
      acceptedAnswers: ['may', 'might', 'could'],
      explanation: 'Posibilidad → may / might / could. → She may be in a meeting.',
    },
    {
      id: 'b1-m4-l4-mt3',
      type: 'error_correction',
      concept: 'modals of deduction review',
      difficulty: 3,
      prompt: 'Corrige el error: "He must have went home."',
      correctAnswer: 'He must have gone home.',
      acceptedAnswers: ['He must have gone home', 'He must have gone home.', 'he must have gone home'],
      acceptApproximate: true,
      explanation: 'Después de "have" va el participio (gone), no el pasado (went).',
    },
    {
      id: 'b1-m4-l4-mt4',
      type: 'translate',
      concept: 'modals of deduction review',
      difficulty: 3,
      prompt: 'Traduce: "Quizá haya cogido el autobús equivocado."',
      correctAnswer: 'He might have taken the wrong bus.',
      acceptedAnswers: ['He might have taken the wrong bus', 'He might have taken the wrong bus.', 'he might have taken the wrong bus'],
      acceptApproximate: true,
      explanation: '"Quizá haya" = might have. "cogido" = taken (participio).',
    },
    {
      id: 'b1-m4-l4-mt5',
      type: 'select_correct',
      concept: 'modals of deduction review',
      difficulty: 4,
      prompt: 'Selecciona la frase correcta:',
      promptTranslation: 'No puede haber olvidado tu cumpleaños.',
      correctAnswer: "She can't have forgotten your birthday.",
      options: [
        "She can't have forgotten your birthday.",
        "She can't has forgotten your birthday.",
        "She can't have forgot your birthday.",
        "She can't have forget your birthday.",
      ],
      explanation: 'Estructura correcta: can\'t + have + participio (forgotten).',
    },
  ],
  reviewItems: ['b1-m4-l3'],
  prerequisites: ['b1-m4-l3'],
}
