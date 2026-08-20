import type { Lesson } from '../../types'

export const lesson72ThereIs: Lesson = {
  id: 'a1-m7-l2',
  moduleId: 'm7-home',
  order: 1,
  title: 'There is / There are (afirmativo)',
  objective: 'Expresar existencia en inglés con "there is" y "there are" (hay).',
  explanation_es: `Para decir que algo existe o que "hay" algo, usamos **there is** y **there are**.

### There is + singular

Usamos "there is" cuando hablamos de UNA sola cosa.

- There is a book on the table. = Hay un libro en la mesa.
- There is a sofa in the living room. = Hay un sofá en la sala de estar.

La forma corta de "there is" es **there's**, y es muy común en el habla:
- There's a book on the table.

### There are + plural

Usamos "there are" cuando hablamos de MÁS DE UNA cosa.

- There are three chairs in the kitchen. = Hay tres sillas en la cocina.
- There are two beds in the bedroom. = Hay dos camas en el dormitorio.

IMPORTANTE: No existe una forma corta habitual para "there are". Decimos "there are", no "there're" en la escritura normal.

### ¿Por qué "there"?

En español decimos simplemente "hay un libro". En inglés siempre necesitamos "there is" o "there are": no podemos decir "is a book" ni "are three chairs" sin "there".

Recuerda:
- there is → singular (una cosa)
- there are → plural (varias cosas)`,
  examples: [
    { english: 'There is a book on the table.', spanish: 'Hay un libro en la mesa.', note: 'there is + singular.' },
    { english: 'There\'s a sofa in the living room.', spanish: 'Hay un sofá en la sala de estar.', note: 'There\'s = forma corta de there is.' },
    { english: 'There are three chairs in the kitchen.', spanish: 'Hay tres sillas en la cocina.', note: 'there are + plural.' },
    { english: 'There is a garden behind the house.', spanish: 'Hay un jardín detrás de la casa.' },
    { english: 'There are two bedrooms in my house.', spanish: 'Hay dos dormitorios en mi casa.', note: 'two bedrooms = plural → there are.' },
    { english: 'There is a mirror in the bathroom.', spanish: 'Hay un espejo en el baño.' },
  ],
  rule: `**There is + singular** = hay (una cosa)
- There is a book. / There's a book.

**There are + plural** = hay (varias cosas)
- There are three chairs.

¡El verbo depende del sustantivo que le sigue!
- There IS a book (singular).
- There ARE three chairs (plural).

No existe contracción común para "there are".`,
  formation: {
    title: 'Cómo se forma "There is / There are" — Afirmativo',
    intro: 'Para decir que algo existe ("hay") usamos "there is" con un sustantivo singular y "there are" con un plural. El verbo depende del sustantivo que le sigue.',
    patterns: [
      {
        name: 'Afirmativo — singular',
        formula: 'There is + a/an + sustantivo singular + lugar',
        examples: [
          { english: 'There is a book on the table.', spanish: 'Hay un libro en la mesa.' },
          { english: 'There\'s a sofa in the living room.', spanish: 'Hay un sofá en la sala de estar.' },
          { english: 'There is a garden behind the house.', spanish: 'Hay un jardín detrás de la casa.' },
        ],
        note: 'La forma corta de "there is" es "there\'s", muy común en el habla.',
      },
      {
        name: 'Afirmativo — plural',
        formula: 'There are + número/adjetivo + sustantivo plural + lugar',
        examples: [
          { english: 'There are three chairs in the kitchen.', spanish: 'Hay tres sillas en la cocina.' },
          { english: 'There are two bedrooms in my house.', spanish: 'Hay dos dormitorios en mi casa.' },
        ],
        note: 'No existe una contracción habitual para "there are": escribimos "there are", no "there\'re".',
      },
    ],
    notes: [
      'El verbo (is/are) depende del sustantivo: "There IS a book" (singular) · "There ARE three chairs" (plural).',
      'Siempre necesitamos "there": no decimos "Is a book on the table" sin "there".',
    ],
  },
  commonMistakes: [
    { wrong: '❌ There is two chairs.', correct: '✅ There are two chairs.', explanation: '"Two chairs" es plural, así que usamos "there are", no "there is".' },
    { wrong: '❌ There are a book.', correct: '✅ There is a book.', explanation: '"A book" es singular, así que usamos "there is".' },
    { wrong: '❌ Is a book on the table.', correct: '✅ There is a book on the table.', explanation: 'En inglés siempre necesitamos "there" para decir "hay": There is a book on the table.' },
  ],
  vocabulary: [],
  grammarPoints: [
    {
      id: 'gp-there-is-are-affirmative',
      level: 'A1',
      name: 'There is / There are (afirmativo)',
      explanation_es: 'Usamos "there is" para una cosa (singular) y "there are" para varias (plural). Ambos significan "hay".',
      formula: 'There is + singular | There are + plural',
      examples: ['There is a book.', 'There are three chairs.'],
    },
  ],
  exercises: [
    {
      id: 'a1-m7-l2-ex1',
      type: 'fill_blank',
      concept: 'there is/are affirmative',
      difficulty: 1,
      prompt: 'Completa: "There ___ a book on the table."',
      promptTranslation: 'Hay un libro en la mesa.',
      correctAnswer: 'is',
      acceptedAnswers: ['is', 'Is'],
      explanation: '"A book" es singular → there is. (La forma contraída sería There\'s a book on the table.)',
    },
    {
      id: 'a1-m7-l2-ex2',
      type: 'fill_blank',
      concept: 'there is/are affirmative',
      difficulty: 1,
      prompt: 'Completa: "There ___ three chairs in the kitchen."',
      promptTranslation: 'Hay tres sillas en la cocina.',
      correctAnswer: 'are',
      acceptedAnswers: ['are', 'Are'],
      explanation: '"Three chairs" es plural → there are.',
    },
    {
      id: 'a1-m7-l2-ex3',
      type: 'multiple_choice',
      concept: 'there is/are affirmative',
      difficulty: 1,
      prompt: 'Completa: "There ___ a sofa in the living room."',
      promptTranslation: 'Hay un sofá en la sala de estar.',
      correctAnswer: 'is',
      options: ['is', 'are', 'am'],
      explanation: '"A sofa" es singular → there is.',
    },
    {
      id: 'a1-m7-l2-ex4',
      type: 'fill_blank',
      concept: 'there is/are affirmative',
      difficulty: 2,
      prompt: 'Completa: "There ___ two beds in the bedroom."',
      promptTranslation: 'Hay dos camas en el dormitorio.',
      correctAnswer: 'are',
      acceptedAnswers: ['are', 'Are'],
      explanation: '"Two beds" es plural → there are.',
    },
    {
      id: 'a1-m7-l2-ex5',
      type: 'multiple_choice',
      concept: 'there is/are affirmative',
      difficulty: 2,
      prompt: '¿Cuál es la frase correcta?',
      promptTranslation: 'Hay dos sillas.',
      correctAnswer: 'There are two chairs.',
      options: ['There is two chairs.', 'There are two chairs.', 'There two chairs.'],
      explanation: '"Two chairs" es plural, así que usamos "there are".',
    },
    {
      id: 'a1-m7-l2-ex6',
      type: 'fill_blank',
      concept: "there's contraction",
      difficulty: 2,
      prompt: 'Completa con la forma corta: "___ a garden behind the house."',
      promptTranslation: 'Hay un jardín detrás de la casa.',
      correctAnswer: 'There\'s',
      acceptedAnswers: ['there\'s', "There's", "There is"],
      explanation: 'La forma corta de "there is" es "there\'s". → There\'s a garden behind the house.',
    },
    {
      id: 'a1-m7-l2-ex7',
      type: 'multiple_choice',
      concept: 'there is/are affirmative',
      difficulty: 2,
      prompt: 'Elige la palabra correcta: "There ___ a mirror in the bathroom."',
      promptTranslation: 'Hay un espejo en el baño.',
      correctAnswer: 'is',
      options: ['is', 'are'],
      explanation: '"A mirror" es singular → there is a mirror.',
    },
    {
      id: 'a1-m7-l2-ex8',
      type: 'translate',
      concept: 'there is/are affirmative',
      difficulty: 3,
      prompt: 'Traduce: "Hay un libro en la mesa."',
      correctAnswer: 'There is a book on the table.',
      acceptedAnswers: ["There's a book on the table", 'There is a book on the table.', "There's a book on the table."],
      acceptApproximate: true,
      explanation: '"Hay" = there is (singular), "un libro" = a book, "en la mesa" = on the table.',
    },
    {
      id: 'a1-m7-l2-ex9',
      type: 'translate',
      concept: 'there is/are affirmative',
      difficulty: 3,
      prompt: 'Traduce: "Hay tres sillas en la cocina."',
      correctAnswer: 'There are three chairs in the kitchen.',
      acceptedAnswers: ['There are three chairs in the kitchen', 'There are three chairs in the kitchen.'],
      acceptApproximate: true,
      explanation: '"Hay" = there are (plural), "tres sillas" = three chairs, "en la cocina" = in the kitchen.',
    },
    {
      id: 'a1-m7-l2-ex10',
      type: 'reorder',
      concept: 'there is/are affirmative',
      difficulty: 3,
      prompt: 'Ordena: There / are / two / beds / in / the / bedroom',
      promptTranslation: 'Hay dos camas en el dormitorio.',
      correctAnswer: 'There are two beds in the bedroom.',
      words: ['There', 'are', 'two', 'beds', 'in', 'the', 'bedroom'],
      explanation: 'There are + two beds + in the bedroom. → There are two beds in the bedroom.',
    },
    {
      id: 'a1-m7-l2-ex11',
      type: 'error_correction',
      concept: 'there is/are affirmative',
      difficulty: 3,
      prompt: 'Corrige el error: "There is two chairs."',
      correctAnswer: 'There are two chairs.',
      acceptedAnswers: ['There are two chairs', 'There are two chairs.'],
      acceptApproximate: true,
      explanation: '"Two chairs" es plural, así que usamos "there are", no "there is".',
    },
  ],
  miniTest: [
    {
      id: 'a1-m7-l2-mt1',
      type: 'fill_blank',
      concept: 'there is/are affirmative',
      difficulty: 1,
      prompt: 'Completa: "There ___ a garden."',
      promptTranslation: 'Hay un jardín.',
      correctAnswer: 'is',
      acceptedAnswers: ['is', 'Is'],
      explanation: '"A garden" es singular → there is.',
    },
    {
      id: 'a1-m7-l2-mt2',
      type: 'fill_blank',
      concept: 'there is/are affirmative',
      difficulty: 2,
      prompt: 'Completa: "There ___ four bedrooms in my house."',
      promptTranslation: 'Hay cuatro dormitorios en mi casa.',
      correctAnswer: 'are',
      acceptedAnswers: ['are', 'Are'],
      explanation: '"Four bedrooms" es plural → there are.',
    },
    {
      id: 'a1-m7-l2-mt3',
      type: 'multiple_choice',
      concept: 'there is/are affirmative',
      difficulty: 2,
      prompt: '¿Cuál es la frase correcta?',
      promptTranslation: 'Hay un libro.',
      correctAnswer: 'There is a book.',
      options: ['There are a book.', 'There is a book.', 'There is book.'],
      explanation: '"A book" es singular → there is a book. Nunca "there is book" (necesita artículo).',
    },
    {
      id: 'a1-m7-l2-mt4',
      type: 'translate',
      concept: 'there is/are affirmative',
      difficulty: 3,
      prompt: 'Traduce: "Hay un gato en el jardín."',
      correctAnswer: 'There is a cat in the garden.',
      acceptedAnswers: ["There's a cat in the garden", 'There is a cat in the garden.', "There's a cat in the garden."],
      acceptApproximate: true,
      explanation: '"Hay" = there is (singular), "un gato" = a cat, "en el jardín" = in the garden.',
    },
    {
      id: 'a1-m7-l2-mt5',
      type: 'reorder',
      concept: 'there is/are affirmative',
      difficulty: 3,
      prompt: 'Ordena: There / is / a / lamp / next / to / the / bed',
      promptTranslation: 'Hay una lámpara al lado de la cama.',
      correctAnswer: 'There is a lamp next to the bed.',
      words: ['There', 'is', 'a', 'lamp', 'next', 'to', 'the', 'bed'],
      explanation: 'There is + a lamp + next to the bed. → There is a lamp next to the bed.',
    },
  ],
  reviewItems: ['a1-m7-l1'],
  prerequisites: ['a1-m7-l1'],
  workbookRefs: [
    { levelId: 'a1', page: 7, exercises: [1, 2, 4, 6], note: 'Práctica de there is / there are y la casa' },
  ],
}
