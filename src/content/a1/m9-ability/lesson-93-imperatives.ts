import type { Lesson } from '../../types'

export const lesson93Imperatives: Lesson = {
  id: 'a1-m9-l3',
  moduleId: 'm9-ability',
  order: 2,
  title: 'Imperativos (órdenes e instrucciones)',
  objective: 'Dar órdenes e instrucciones con imperativos afirmativos y negativos (don\'t).',
  explanation_es: `Un imperativo es cuando decimos a alguien que haga algo o que no lo haga. En inglés es muy fácil: usamos el verbo sin sujeto.

**Afirmativo:** el verbo solo (sin "you").
- Open the door. = Abre la puerta.
- Sit down. = Siéntate.
- Listen to me. = Escúchame.

**Negativo:** Don't + verbo.
- Don't open the door. = No abras la puerta.
- Don't worry. = No te preocupes.
- Don't touch! = ¡No toques!

**Para ser más educado, añade "please":**
- Open the door, please. = Abre la puerta, por favor.
- Please sit down. = Por favor, siéntate.

En el aula (classroom language), el profesor usa imperativos todo el tiempo: Listen (escucha), Repeat (repite), Read (lee), Write (escribe), Look (mira), Answer (responde), Ask (pregunta).`,
  examples: [
    { english: 'Open the door, please.', spanish: 'Abre la puerta, por favor.', note: 'Imperativo afirmativo + please.' },
    { english: "Don't touch!", spanish: '¡No toques!', note: 'Imperativo negativo: Don\'t + verbo.' },
    { english: 'Please sit down.', spanish: 'Por favor, siéntate.', note: '"Please" también puede ir al principio.' },
    { english: "Don't be late for class.", spanish: 'No llegues tarde a clase.', note: 'Con "be": Don\'t be late.' },
  ],
  rule: `**Imperativos:**
- **Afirmativo:** verbo sin sujeto → Open the door. / Sit down. / Listen.
- **Negativo:** Don't + verbo → Don't open the door. / Don't worry.
- **Educado:** añade "please" → Open the door, please. / Please sit down.

**Importante:** usamos "don't", NUNCA "no": Don't open the door. (NO: No open the door.)`,
  formation: {
    title: 'Cómo se forman los imperativos',
    intro: 'El imperativo se usa para dar órdenes e instrucciones. En afirmativo usamos el verbo sin sujeto; en negativo, "don\'t" + verbo.',
    patterns: [
      {
        name: 'Afirmativo',
        formula: 'Verbo en infinitivo (sin "to" y sin sujeto) + complemento',
        examples: [
          { english: 'Open the door.', spanish: 'Abre la puerta.' },
          { english: 'Sit down.', spanish: 'Siéntate.' },
          { english: 'Listen to me.', spanish: 'Escúchame.' },
        ],
        note: 'No usamos el sujeto "you". Para ser más educado, añadimos "please": Open the door, please.',
      },
      {
        name: 'Negativo',
        formula: 'Don\'t + verbo en infinitivo (sin "to" y sin sujeto) + complemento',
        examples: [
          { english: 'Don\'t open the door.', spanish: 'No abras la puerta.' },
          { english: 'Don\'t worry.', spanish: 'No te preocupes.' },
          { english: 'Don\'t touch!', spanish: '¡No toques!' },
          { english: 'Don\'t be late for class.', spanish: 'No llegues tarde a clase.' },
        ],
        note: 'La negativa se forma siempre con "don\'t", nunca con "no". Con el verbo "be": Don\'t be late.',
      },
    ],
    notes: [
      'El imperativo se usa mucho en clase: Listen, Repeat, Read, Write, Look, Answer, Ask.',
      '"Please" puede ir al final (Open the door, please) o al principio (Please sit down).',
    ],
  },
  commonMistakes: [
    { wrong: "❌ You don't open the door. (como orden)", correct: '✅ Don\'t open the door.', explanation: 'En los imperativos omitimos el sujeto "you". Basta con "Don\'t + verbo".' },
    { wrong: '❌ No open the door.', correct: '✅ Don\'t open the door.', explanation: 'En inglés la negativa del imperativo se forma con "don\'t", nunca con "no".' },
  ],
  vocabulary: [
    { word: 'listen', translation_es: 'escuchar', level: 'A1', category: 'classroom language', partOfSpeech: 'verb', example: 'Listen to me, please.', exampleTranslation: 'Escúchame, por favor.' },
    { word: 'repeat', translation_es: 'repetir', level: 'A1', category: 'classroom language', partOfSpeech: 'verb', example: 'Repeat after me.', exampleTranslation: 'Repite después de mí.' },
    { word: 'read', translation_es: 'leer', level: 'A1', category: 'classroom language', partOfSpeech: 'verb', example: 'Read the text.', exampleTranslation: 'Lee el texto.' },
    { word: 'write', translation_es: 'escribir', level: 'A1', category: 'classroom language', partOfSpeech: 'verb', example: 'Write your name.', exampleTranslation: 'Escribe tu nombre.' },
    { word: 'look', translation_es: 'mirar', level: 'A1', category: 'classroom language', partOfSpeech: 'verb', example: 'Look at the board.', exampleTranslation: 'Mira la pizarra.' },
    { word: 'answer', translation_es: 'responder', level: 'A1', category: 'classroom language', partOfSpeech: 'verb', example: 'Answer the question.', exampleTranslation: 'Responde la pregunta.' },
    { word: 'ask', translation_es: 'preguntar', level: 'A1', category: 'classroom language', partOfSpeech: 'verb', example: 'Ask your partner.', exampleTranslation: 'Pregunta a tu compañero.' },
    { word: 'sit down', translation_es: 'sentarse', level: 'A1', category: 'classroom language', partOfSpeech: 'verb', example: 'Please sit down.', exampleTranslation: 'Por favor, siéntate.' },
    { word: 'worry', translation_es: 'preocuparse', level: 'A1', category: 'classroom language', partOfSpeech: 'verb', example: "Don't worry!", exampleTranslation: '¡No te preocupes!' },
    { word: 'touch', translation_es: 'tocar', level: 'A1', category: 'classroom language', partOfSpeech: 'verb', example: "Don't touch!", exampleTranslation: '¡No toques!' },
  ],
  grammarPoints: [
    {
      id: 'gp-imperatives',
      level: 'A1',
      name: 'Imperatives (affirmative and negative)',
      explanation_es: 'El imperativo se usa para dar órdenes e instrucciones. En afirmativo usamos el verbo sin sujeto y en negativo "don\'t" + verbo. "Please" lo hace más educado.',
      formula: 'Verb + ... (Open the door.) | Don\'t + verb (Don\'t open the door.)',
      examples: ['Open the door, please.', 'Sit down.', "Don't worry.", "Don't be late for class."],
    },
  ],
  exercises: [
    {
      id: 'a1-m9-l3-ex1',
      type: 'multiple_choice',
      concept: 'imperative - affirmative',
      difficulty: 1,
      prompt: 'Completa: "___ the door, please."',
      promptTranslation: 'Abre la puerta, por favor.',
      correctAnswer: 'Open',
      options: ['Open', 'Opening', 'Opens'],
      explanation: 'El imperativo afirmativo usa el verbo sin cambios: Open the door. → Abre la puerta.',
    },
    {
      id: 'a1-m9-l3-ex2',
      type: 'multiple_choice',
      concept: 'imperative - negative don\'t',
      difficulty: 1,
      prompt: 'Completa: "___ worry!"',
      promptTranslation: '¡No te preocupes!',
      correctAnswer: "Don't",
      options: ["Don't", 'No', 'Not'],
      explanation: 'La negativa del imperativo se forma con "don\'t": Don\'t worry! = ¡No te preocupes!',
    },
    {
      id: 'a1-m9-l3-ex3',
      type: 'multiple_choice',
      concept: 'imperative - classroom language',
      difficulty: 2,
      prompt: 'El profesor dice: "___ and repeat."',
      promptTranslation: 'El profesor dice: "___ y repite."',
      correctAnswer: 'Listen',
      options: ['Listen', 'Listening', 'Listens'],
      explanation: 'En clase el profesor usa imperativos: Listen and repeat. = Escucha y repite.',
    },
    {
      id: 'a1-m9-l3-ex4',
      type: 'fill_blank',
      concept: 'imperative - don\'t',
      difficulty: 1,
      prompt: 'Completa: "___ touch!"',
      promptTranslation: '¡No toques!',
      correctAnswer: "Don't",
      acceptedAnswers: ["Don't", "don't", 'Dont'],
      explanation: 'Imperativo negativo: Don\'t + verbo. → Don\'t touch!',
    },
    {
      id: 'a1-m9-l3-ex5',
      type: 'fill_blank',
      concept: 'imperative - don\'t be',
      difficulty: 2,
      prompt: 'Completa: "___ be late for class."',
      promptTranslation: 'No llegues tarde a clase.',
      correctAnswer: "Don't",
      acceptedAnswers: ["Don't", "don't", 'Dont'],
      explanation: 'Con el verbo "be" la negativa también es "don\'t": Don\'t be late. = No llegues tarde.',
    },
    {
      id: 'a1-m9-l3-ex6',
      type: 'translate',
      concept: 'imperative - translate affirmative',
      difficulty: 2,
      prompt: 'Traduce: "Abre la puerta, por favor."',
      correctAnswer: 'Open the door, please.',
      acceptedAnswers: ['Open the door, please', 'open the door, please.', 'Open the door please.'],
      acceptApproximate: true,
      explanation: '"Abre" → Open. "la puerta" → the door. "por favor" → please. → Open the door, please.',
    },
    {
      id: 'a1-m9-l3-ex7',
      type: 'translate',
      concept: 'imperative - translate negative',
      difficulty: 3,
      prompt: 'Traduce: "No llegues tarde."',
      correctAnswer: "Don't be late.",
      acceptedAnswers: ["Don't be late", "don't be late.", 'Do not be late.'],
      acceptApproximate: true,
      explanation: '"No llegues" → Don\'t + verbo. "llegar tarde" → be late. → Don\'t be late.',
    },
    {
      id: 'a1-m9-l3-ex8',
      type: 'error_correction',
      concept: 'imperative - use don\'t not no',
      difficulty: 3,
      prompt: 'Corrige el error: "No open the door."',
      correctAnswer: "Don't open the door.",
      acceptedAnswers: ["Don't open the door", "don't open the door."],
      acceptApproximate: true,
      explanation: 'La negativa del imperativo es "don\'t", no "no": Don\'t open the door.',
    },
    {
      id: 'a1-m9-l3-ex9',
      type: 'error_correction',
      concept: 'imperative - no subject you',
      difficulty: 4,
      prompt: 'Corrige el error (como orden): "You don\'t open the door."',
      correctAnswer: "Don't open the door.",
      acceptedAnswers: ["Don't open the door", "Don't open the door, please."],
      acceptApproximate: true,
      explanation: 'En los imperativos omitimos el sujeto "you": solo "Don\'t + verbo". → Don\'t open the door.',
    },
    {
      id: 'a1-m9-l3-ex10',
      type: 'multiple_choice',
      concept: 'imperative - choose correct',
      difficulty: 3,
      prompt: '¿Cuál es un imperativo negativo correcto?',
      promptTranslation: 'Which is a correct negative imperative?',
      correctAnswer: "Don't touch!",
      options: ["Don't touch!", "You don't touch!", 'No touch!'],
      explanation: 'El imperativo negativo es "Don\'t + verbo": Don\'t touch! Sin sujeto "you" y sin "no".',
    },
  ],
  miniTest: [
    {
      id: 'a1-m9-l3-mt1',
      type: 'fill_blank',
      concept: 'imperative - don\'t',
      difficulty: 1,
      prompt: 'Completa: "___ open the door!"',
      promptTranslation: '¡No abras la puerta!',
      correctAnswer: "Don't",
      acceptedAnswers: ["Don't", "don't", 'Dont'],
      explanation: 'Imperativo negativo: Don\'t + verbo. → Don\'t open the door!',
    },
    {
      id: 'a1-m9-l3-mt2',
      type: 'multiple_choice',
      concept: 'imperative - sit down',
      difficulty: 2,
      prompt: 'Completa: "Please ___ down."',
      promptTranslation: 'Por favor, siéntate.',
      correctAnswer: 'sit',
      options: ['sit', 'sits', 'sitting'],
      explanation: 'El imperativo usa el verbo sin cambios: Please sit down. = Por favor, siéntate.',
    },
    {
      id: 'a1-m9-l3-mt3',
      type: 'translate',
      concept: 'imperative - don\'t worry',
      difficulty: 2,
      prompt: 'Traduce: "No te preocupes."',
      correctAnswer: "Don't worry.",
      acceptedAnswers: ["Don't worry", "don't worry.", 'Do not worry.'],
      acceptApproximate: true,
      explanation: '"No te preocupes" → Don\'t + worry. → Don\'t worry.',
    },
    {
      id: 'a1-m9-l3-mt4',
      type: 'error_correction',
      concept: 'imperative - no vs don\'t',
      difficulty: 4,
      prompt: 'Corrige el error: "No touch!"',
      correctAnswer: "Don't touch!",
      acceptedAnswers: ["Don't touch!", "don't touch!", "Don't touch"],
      acceptApproximate: true,
      explanation: 'La negativa es "don\'t", no "no": Don\'t touch!',
    },
  ],
  reviewItems: ['a1-m9-l2'],
  prerequisites: ['a1-m9-l2'],
}
