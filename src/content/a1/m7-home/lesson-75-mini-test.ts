import type { Lesson } from '../../types'

export const lesson75MiniTest: Lesson = {
  id: 'a1-m7-l5',
  moduleId: 'm7-home',
  order: 4,
  title: 'Mini-test: mi casa',
  objective: 'Repasar todo el módulo 7: habitaciones, muebles, there is/are y preposiciones de lugar.',
  explanation_es: `Este es el repaso final del módulo. Repasemos todo lo que hemos aprendido:

### Habitaciones y muebles

- kitchen (cocina), bedroom (dormitorio), bathroom (baño), living room (sala de estar), dining room (comedor), office (oficina), garage (garaje), garden (jardín).
- table (mesa), chair (silla), bed (cama), sofa (sofá), desk (escritorio), lamp (lámpara), wardrobe (armario), shelf (estantería), mirror (espejo).

### There is / There are

- **There is** (there's) + singular = hay (una cosa): There is a bed in the bedroom.
- **There are** + plural = hay (varias cosas): There are three chairs.
- **There isn't** + singular = no hay: There isn't a book.
- **There aren't** + any + plural = no hay: There aren't any chairs.
- **Is there...?** / **Are there any...?**: Is there a bank? / Are there any restaurants?
- Respuestas cortas: Yes, there is. / No, there isn't. / Yes, there are. / No, there aren't.

### Preposiciones de lugar

in (dentro de), on (sobre, con contacto), under (debajo), next to (al lado de), behind (detrás), in front of (delante), between (entre), above (encima, sin contacto), below (debajo, sin contacto).

Ejemplo completo: There is a sofa in the living room, and the lamp is next to the bed.`,
  examples: [
    { english: 'There is a sofa in the living room.', spanish: 'Hay un sofá en la sala de estar.', note: 'there is + singular.' },
    { english: 'There are two bedrooms and a bathroom.', spanish: 'Hay dos dormitorios y un baño.', note: 'there are + plural.' },
    { english: 'There isn\'t a mirror in the kitchen.', spanish: 'No hay un espejo en la cocina.', note: 'there isn\'t + singular.' },
    { english: 'Are there any chairs in the garden?', spanish: '¿Hay sillas en el jardín?', note: 'Are there any + plural?' },
    { english: 'The lamp is next to the bed.', spanish: 'La lámpara está al lado de la cama.', note: 'next to = al lado de.' },
    { english: 'The cat is under the table.', spanish: 'El gato está debajo de la mesa.', note: 'under = debajo.' },
  ],
  rule: `**Resumen del módulo 7:**

1. Vocabulario: habitaciones (kitchen, bedroom, bathroom...) y muebles (table, chair, bed...).
2. Existencia: There is + singular / There are + plural = "hay".
3. Negativo: There isn't / There aren't any.
4. Preguntas: Is there...? / Are there any...? + respuestas cortas.
5. Preposiciones: in, on, under, next to, behind, in front of, between, above, below.`,
  commonMistakes: [
    { wrong: '❌ There is two chairs.', correct: '✅ There are two chairs.', explanation: '"Two chairs" es plural → there are.' },
    { wrong: '❌ There aren\'t a book.', correct: '✅ There isn\'t a book.', explanation: '"A book" es singular → there isn\'t.' },
    { wrong: '❌ The book is above the table.', correct: '✅ The book is on the table.', explanation: 'El libro toca la mesa → "on". "Above" es sin contacto.' },
  ],
  vocabulary: [],
  grammarPoints: [],
  exercises: [
    {
      id: 'a1-m7-l5-ex1',
      type: 'multiple_choice',
      concept: 'rooms vocabulary',
      difficulty: 1,
      prompt: 'Completa: "We cook in the ___."',
      promptTranslation: 'Cocinamos en la cocina.',
      correctAnswer: 'kitchen',
      options: ['kitchen', 'bedroom', 'garage'],
      explanation: 'Cocinamos en la "kitchen" (cocina).',
    },
    {
      id: 'a1-m7-l5-ex2',
      type: 'fill_blank',
      concept: 'there is/are affirmative',
      difficulty: 2,
      prompt: 'Completa: "There ___ a garden behind the house."',
      promptTranslation: 'Hay un jardín detrás de la casa.',
      correctAnswer: 'is',
      acceptedAnswers: ['is', "'s"],
      explanation: '"A garden" es singular → there is. (También: There\'s a garden.)',
    },
    {
      id: 'a1-m7-l5-ex3',
      type: 'multiple_choice',
      concept: 'there is/are affirmative',
      difficulty: 2,
      prompt: '¿Cuál es la frase correcta?',
      promptTranslation: 'Hay dos lámparas.',
      correctAnswer: 'There are two lamps.',
      options: ['There is two lamps.', 'There are two lamps.', 'There two lamps.'],
      explanation: '"Two lamps" es plural → there are two lamps.',
    },
    {
      id: 'a1-m7-l5-ex4',
      type: 'true_false',
      concept: 'rooms spelling',
      difficulty: 2,
      prompt: '"Bathroom" se escribe en una sola palabra.',
      correctAnswer: 'true',
      acceptedAnswers: ['True', 'TRUE', 'Verdadero', 'true.'],
      explanation: 'Sí, es correcto: "bathroom" se escribe en una sola palabra (b-a-t-h-r-o-o-m).',
    },
    {
      id: 'a1-m7-l5-ex5',
      type: 'translate',
      concept: 'there is/are + rooms',
      difficulty: 3,
      prompt: 'Traduce: "Hay tres sillas en el comedor."',
      correctAnswer: 'There are three chairs in the dining room.',
      acceptedAnswers: ['There are three chairs in the dining room', 'There are three chairs in the dining room.'],
      acceptApproximate: true,
      explanation: '"Hay" = there are (plural), "tres sillas" = three chairs, "en el comedor" = in the dining room.',
    },
    {
      id: 'a1-m7-l5-ex6',
      type: 'reorder',
      concept: 'there is/are negative',
      difficulty: 3,
      prompt: 'Ordena: There / isn\'t / a / mirror / in / the / bathroom',
      promptTranslation: 'No hay un espejo en el baño.',
      correctAnswer: 'There isn\'t a mirror in the bathroom.',
      words: ['There', 'isn\'t', 'a', 'mirror', 'in', 'the', 'bathroom'],
      explanation: 'Negativo singular: There isn\'t + a mirror + in the bathroom.',
    },
    {
      id: 'a1-m7-l5-ex7',
      type: 'reading',
      concept: 'house reading comprehension',
      difficulty: 4,
      prompt: 'Lee el texto sobre la casa y responde:',
      reading: {
        text: 'My house\nI live in a small house. There is a kitchen, a living room and a bathroom. There are two bedrooms and an office. There is a garden behind the house. There is a table in the kitchen and a sofa in the living room. There is a mirror in the bathroom. There is a lamp next to the bed in my bedroom. There is a desk and a chair in the office.',
        translation: 'Mi casa\nVivo en una casa pequeña. Hay una cocina, una sala de estar y un baño. Hay dos dormitorios y una oficina. Hay un jardín detrás de la casa. Hay una mesa en la cocina y un sofá en la sala de estar. Hay un espejo en el baño. Hay una lámpara al lado de la cama en mi dormitorio. Hay un escritorio y una silla en la oficina.',
        questions: [
          {
            id: 'a1-m7-l5-ex7-q1',
            type: 'multiple_choice',
            concept: 'house reading comprehension',
            difficulty: 4,
            prompt: '¿Cuántos dormitorios hay?',
            correctAnswer: 'two',
            options: ['one', 'two', 'three'],
            explanation: 'El texto dice: "There are two bedrooms and an office."',
          },
          {
            id: 'a1-m7-l5-ex7-q2',
            type: 'multiple_choice',
            concept: 'house reading comprehension',
            difficulty: 4,
            prompt: '¿Dónde está el jardín?',
            correctAnswer: 'behind the house',
            options: ['in front of the house', 'behind the house', 'next to the kitchen'],
            explanation: 'El texto dice: "There is a garden behind the house."',
          },
          {
            id: 'a1-m7-l5-ex7-q3',
            type: 'multiple_choice',
            concept: 'house reading comprehension',
            difficulty: 4,
            prompt: '¿Qué hay al lado de la cama?',
            correctAnswer: 'a lamp',
            options: ['a mirror', 'a lamp', 'a chair'],
            explanation: 'El texto dice: "There is a lamp next to the bed in my bedroom."',
          },
          {
            id: 'a1-m7-l5-ex7-q4',
            type: 'multiple_choice',
            concept: 'house reading comprehension',
            difficulty: 4,
            prompt: '¿Qué hay en la oficina?',
            correctAnswer: 'a desk and a chair',
            options: ['a desk and a chair', 'a sofa and a lamp', 'a table and a mirror'],
            explanation: 'El texto dice: "There is a desk and a chair in the office."',
          },
        ],
      },
      correctAnswer: 'reading complete',
      explanation: 'Lee con atención: toda la información sobre las habitaciones y los muebles está en el texto.',
    },
    {
      id: 'a1-m7-l5-ex8',
      type: 'error_correction',
      concept: 'there is/are review',
      difficulty: 3,
      prompt: 'Corrige el error: "There are a book on the table."',
      correctAnswer: 'There is a book on the table.',
      acceptedAnswers: ["There's a book on the table", 'There is a book on the table.', "There's a book on the table."],
      acceptApproximate: true,
      explanation: '"A book" es singular → there is a book on the table.',
    },
    {
      id: 'a1-m7-l5-ex9',
      type: 'fill_blank',
      concept: 'prepositions of place',
      difficulty: 2,
      prompt: 'Completa: "The cat is ___ the sofa." (debajo)',
      promptTranslation: 'El gato está debajo del sofá.',
      correctAnswer: 'under',
      acceptedAnswers: ['under', 'Under'],
      explanation: '"Under" significa debajo. → The cat is under the sofa.',
    },
    {
      id: 'a1-m7-l5-ex10',
      type: 'multiple_choice',
      concept: 'there is/are questions',
      difficulty: 3,
      prompt: 'Responde: "Are there any restaurants around?"',
      promptTranslation: '¿Hay restaurantes por aquí? (no)',
      correctAnswer: 'No, there aren\'t.',
      options: ['No, there isn\'t.', 'No, there aren\'t.', 'No, there are.'],
      explanation: 'A "Are there...?" respondemos con "Yes, there are." o "No, there aren\'t."',
    },
  ],
  miniTest: [
    {
      id: 'a1-m7-l5-mt1',
      type: 'multiple_choice',
      concept: 'furniture vocabulary',
      difficulty: 1,
      prompt: 'Completa: "We sleep in a ___."',
      promptTranslation: 'Dormimos en una cama.',
      correctAnswer: 'bed',
      options: ['bed', 'sofa', 'desk'],
      explanation: 'Dormimos en una "bed" (cama).',
    },
    {
      id: 'a1-m7-l5-mt2',
      type: 'fill_blank',
      concept: 'there is/are affirmative',
      difficulty: 2,
      prompt: 'Completa: "There ___ three chairs in the dining room."',
      promptTranslation: 'Hay tres sillas en el comedor.',
      correctAnswer: 'are',
      acceptedAnswers: ['are', 'Are'],
      explanation: '"Three chairs" es plural → there are.',
    },
    {
      id: 'a1-m7-l5-mt3',
      type: 'multiple_choice',
      concept: 'there is/are negative',
      difficulty: 2,
      prompt: 'Completa: "There ___ a mirror in the kitchen." (negativa)',
      promptTranslation: 'No hay un espejo en la cocina.',
      correctAnswer: 'isn\'t',
      options: ['isn\'t', 'aren\'t', 'is'],
      explanation: '"A mirror" es singular y la frase es negativa → there isn\'t a mirror.',
    },
    {
      id: 'a1-m7-l5-mt4',
      type: 'multiple_choice',
      concept: 'prepositions of place',
      difficulty: 3,
      prompt: 'Completa: "The sofa is ___ the TV." (delante de)',
      promptTranslation: 'El sofá está delante de la tele.',
      correctAnswer: 'in front of',
      options: ['in front of', 'behind', 'between'],
      explanation: '"In front of" significa delante de. → The sofa is in front of the TV.',
    },
    {
      id: 'a1-m7-l5-mt5',
      type: 'translate',
      concept: 'module 7 review',
      difficulty: 4,
      prompt: 'Traduce: "¿Hay un espejo en el baño?"',
      correctAnswer: 'Is there a mirror in the bathroom?',
      acceptedAnswers: ['Is there a mirror in the bathroom', 'is there a mirror in the bathroom?'],
      acceptApproximate: true,
      explanation: '"¿Hay...?" singular = Is there...? → Is there a mirror in the bathroom?',
    },
  ],
  reviewItems: ['a1-m7-l4'],
  prerequisites: ['a1-m7-l4'],
}
