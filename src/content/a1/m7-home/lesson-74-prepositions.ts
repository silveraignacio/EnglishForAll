import type { Lesson } from '../../types'

export const lesson74Prepositions: Lesson = {
  id: 'a1-m7-l4',
  moduleId: 'm7-home',
  order: 3,
  title: 'Preposiciones de lugar',
  objective: 'Usar las preposiciones de lugar para decir dónde están las cosas (in, on, under, next to, behind, in front of, between, above, below).',
  explanation_es: `Las preposiciones de lugar nos dicen dónde está algo. Son palabras pequeñas pero muy importantes.

### Las más comunes

- **in** = dentro de: The cat is in the box. = El gato está dentro de la caja.
- **on** = sobre (con contacto): The book is on the table. = El libro está sobre la mesa.
- **under** = debajo: The cat is under the table. = El gato está debajo de la mesa.
- **next to** = al lado de: The lamp is next to the bed. = La lámpara está al lado de la cama.
- **behind** = detrás de: The garden is behind the house. = El jardín está detrás de la casa.
- **in front of** = delante de: The sofa is in front of the TV. = El sofá está delante de la tele.
- **between** = entre: The table is between the chairs. = La mesa está entre las sillas.
- **above** = encima de (sin contacto): The lamp is above the table. = La lámpara está encima de la mesa (flotando, sin tocarla).
- **below** = debajo de (sin contacto): The picture is below the window. = El cuadro está debajo de la ventana.

### "On" vs "above" (¡error muy común!)

- **on** = sobre con CONTACTO: The book is on the table. (El libro toca la mesa.)
- **above** = encima SIN contacto: The bird is above the house. (El pájaro vuela sobre la casa, sin tocarla.)

Si una cosa está tocando la superficie, usa "on". "Above" se usa para algo en el aire o más arriba, sin contacto.

### "In the left" vs "on the left"

Decimos **on the left** = a la izquierda (no "in the left"). Lo mismo: on the right = a la derecha.`,
  examples: [
    { english: 'The cat is under the table.', spanish: 'El gato está debajo de la mesa.', note: 'under = debajo.' },
    { english: 'The book is on the chair.', spanish: 'El libro está sobre la silla.', note: 'on = sobre, con contacto.' },
    { english: 'The lamp is next to the bed.', spanish: 'La lámpara está al lado de la cama.', note: 'next to = al lado de.' },
    { english: 'The garden is behind the house.', spanish: 'El jardín está detrás de la casa.', note: 'behind = detrás de.' },
    { english: 'The sofa is in front of the TV.', spanish: 'El sofá está delante de la tele.', note: 'in front of = delante de.' },
    { english: 'The table is between the chairs.', spanish: 'La mesa está entre las sillas.', note: 'between = entre (dos cosas).' },
    { english: 'The bird is above the house.', spanish: 'El pájaro está encima de la casa.', note: 'above = encima, sin contacto.' },
  ],
  rule: `**Preposiciones de lugar:**
- in = dentro de (in the box)
- on = sobre, con contacto (on the table)
- under = debajo (under the chair)
- next to = al lado de (next to the door)
- behind = detrás de (behind the house)
- in front of = delante de (in front of the TV)
- between = entre (between the table and the lamp)
- above = encima de, sin contacto (above the door)
- below = debajo de, sin contacto (below the window)

**Estructura:** Subject + to be + preposition + place
- The cat is under the table.

**Recuerda:** on the left / on the right (NO "in the left").`,
  commonMistakes: [
    { wrong: '❌ The book is above the table.', correct: '✅ The book is on the table.', explanation: '"On" = sobre, con contacto (el libro toca la mesa). "Above" es encima en el aire, sin contacto.' },
    { wrong: '❌ The picture is under the wall.', correct: '✅ The picture is on the wall.', explanation: 'Un cuadro colgado toca la pared, así que usamos "on" (the picture is on the wall).' },
    { wrong: '❌ In the left.', correct: '✅ On the left.', explanation: 'Para decir "a la izquierda" usamos "on": on the left. (Y on the right.)' },
  ],
  vocabulary: [
    { word: 'in', translation_es: 'dentro de', level: 'A1', category: 'prepositions of place', partOfSpeech: 'preposition', example: 'The cat is in the box.', exampleTranslation: 'El gato está dentro de la caja.' },
    { word: 'on', translation_es: 'sobre (con contacto)', level: 'A1', category: 'prepositions of place', partOfSpeech: 'preposition', example: 'The book is on the table.', exampleTranslation: 'El libro está sobre la mesa.' },
    { word: 'under', translation_es: 'debajo de', level: 'A1', category: 'prepositions of place', partOfSpeech: 'preposition', example: 'The cat is under the table.', exampleTranslation: 'El gato está debajo de la mesa.' },
    { word: 'next to', translation_es: 'al lado de', level: 'A1', category: 'prepositions of place', partOfSpeech: 'preposition', example: 'The lamp is next to the bed.', exampleTranslation: 'La lámpara está al lado de la cama.' },
    { word: 'behind', translation_es: 'detrás de', level: 'A1', category: 'prepositions of place', partOfSpeech: 'preposition', example: 'The garden is behind the house.', exampleTranslation: 'El jardín está detrás de la casa.' },
    { word: 'in front of', translation_es: 'delante de', level: 'A1', category: 'prepositions of place', partOfSpeech: 'preposition', example: 'The sofa is in front of the TV.', exampleTranslation: 'El sofá está delante de la tele.' },
    { word: 'between', translation_es: 'entre', level: 'A1', category: 'prepositions of place', partOfSpeech: 'preposition', example: 'The table is between the chairs.', exampleTranslation: 'La mesa está entre las sillas.' },
    { word: 'above', translation_es: 'encima de (sin contacto)', level: 'A1', category: 'prepositions of place', partOfSpeech: 'preposition', example: 'The lamp is above the table.', exampleTranslation: 'La lámpara está encima de la mesa.' },
    { word: 'below', translation_es: 'debajo de (sin contacto)', level: 'A1', category: 'prepositions of place', partOfSpeech: 'preposition', example: 'The picture is below the window.', exampleTranslation: 'El cuadro está debajo de la ventana.' },
  ],
  grammarPoints: [
    {
      id: 'gp-prepositions-place',
      level: 'A1',
      name: 'Preposiciones de lugar',
      explanation_es: 'Las preposiciones de lugar indican dónde está algo. Después de la preposición va el lugar (in the kitchen, under the table).',
      formula: 'Subject + to be + preposition + place',
      examples: ['The cat is under the table.', 'The book is on the chair.', 'The lamp is next to the bed.'],
    },
  ],
  exercises: [
    {
      id: 'a1-m7-l4-ex1',
      type: 'multiple_choice',
      concept: 'prepositions of place',
      difficulty: 1,
      prompt: 'Completa: "The cat is ___ the table." (debajo)',
      promptTranslation: 'El gato está debajo de la mesa.',
      correctAnswer: 'under',
      options: ['under', 'on', 'behind'],
      explanation: '"Under" significa debajo. → The cat is under the table.',
    },
    {
      id: 'a1-m7-l4-ex2',
      type: 'multiple_choice',
      concept: 'prepositions of place',
      difficulty: 1,
      prompt: 'Completa: "The book is ___ the chair." (sobre, con contacto)',
      promptTranslation: 'El libro está sobre la silla.',
      correctAnswer: 'on',
      options: ['above', 'on', 'below'],
      explanation: 'El libro toca la silla, así que usamos "on" (sobre, con contacto).',
    },
    {
      id: 'a1-m7-l4-ex3',
      type: 'multiple_choice',
      concept: 'prepositions of place',
      difficulty: 1,
      prompt: 'Completa: "The lamp is ___ the bed." (al lado de)',
      promptTranslation: 'La lámpara está al lado de la cama.',
      correctAnswer: 'next to',
      options: ['next to', 'under', 'in'],
      explanation: '"Next to" significa al lado de. → The lamp is next to the bed.',
    },
    {
      id: 'a1-m7-l4-ex4',
      type: 'fill_blank',
      concept: 'prepositions of place',
      difficulty: 2,
      prompt: 'Completa: "The picture is ___ the wall."',
      promptTranslation: 'El cuadro está en la pared.',
      correctAnswer: 'on',
      acceptedAnswers: ['on', 'On'],
      explanation: 'Un cuadro cuelga y toca la pared → usamos "on": The picture is on the wall.',
    },
    {
      id: 'a1-m7-l4-ex5',
      type: 'fill_blank',
      concept: 'prepositions of place',
      difficulty: 2,
      prompt: 'Completa: "The garden is ___ the house." (detrás de)',
      promptTranslation: 'El jardín está detrás de la casa.',
      correctAnswer: 'behind',
      acceptedAnswers: ['behind', 'Behind'],
      explanation: '"Behind" significa detrás de. → The garden is behind the house.',
    },
    {
      id: 'a1-m7-l4-ex6',
      type: 'multiple_choice',
      concept: 'prepositions of place',
      difficulty: 2,
      prompt: 'Completa: "The table is ___ the chairs." (entre)',
      promptTranslation: 'La mesa está entre las sillas.',
      correctAnswer: 'between',
      options: ['between', 'behind', 'next to'],
      explanation: '"Between" significa entre (dos cosas). → The table is between the chairs.',
    },
    {
      id: 'a1-m7-l4-ex7',
      type: 'match',
      concept: 'prepositions of place',
      difficulty: 2,
      prompt: 'Relaciona cada preposición con su significado:',
      pairs: [
        { left: 'under', right: 'debajo de' },
        { left: 'next to', right: 'al lado de' },
        { left: 'behind', right: 'detrás de' },
        { left: 'in front of', right: 'delante de' },
        { left: 'between', right: 'entre' },
        { left: 'on', right: 'sobre (con contacto)' },
      ],
      correctAnswer: 'under=debajo de, next to=al lado de, behind=detrás de, in front of=delante de, between=entre, on=sobre (con contacto)',
      explanation: 'under=debajo de, next to=al lado de, behind=detrás de, in front of=delante de, between=entre, on=sobre (con contacto).',
    },
    {
      id: 'a1-m7-l4-ex8',
      type: 'multiple_choice',
      concept: 'on vs above',
      difficulty: 3,
      prompt: 'Elige la preposición correcta: "The bird is ___ the house." (el pájaro vuela encima, sin contacto)',
      promptTranslation: 'El pájaro está encima de la casa.',
      correctAnswer: 'above',
      options: ['on', 'above', 'in'],
      explanation: 'El pájaro vuela en el aire, sin tocar la casa → usamos "above" (encima, sin contacto).',
    },
    {
      id: 'a1-m7-l4-ex9',
      type: 'multiple_choice',
      concept: 'on the left/right',
      difficulty: 3,
      prompt: '¿Cuál es la expresión correcta para "a la izquierda"?',
      correctAnswer: 'on the left',
      options: ['in the left', 'on the left', 'at the left'],
      explanation: 'Decimos "on the left" (a la izquierda) y "on the right" (a la derecha), nunca "in the left".',
    },
    {
      id: 'a1-m7-l4-ex10',
      type: 'translate',
      concept: 'prepositions of place',
      difficulty: 3,
      prompt: 'Traduce: "El gato está debajo de la mesa."',
      correctAnswer: 'The cat is under the table.',
      acceptedAnswers: ['The cat is under the table', 'The cat is under the table.', 'the cat is under the table.'],
      acceptApproximate: true,
      explanation: '"The cat" = el gato, "is under" = está debajo de, "the table" = la mesa.',
    },
    {
      id: 'a1-m7-l4-ex11',
      type: 'translate',
      concept: 'prepositions of place',
      difficulty: 3,
      prompt: 'Traduce: "La lámpara está al lado de la cama."',
      correctAnswer: 'The lamp is next to the bed.',
      acceptedAnswers: ['The lamp is next to the bed', 'The lamp is next to the bed.', 'the lamp is next to the bed.'],
      acceptApproximate: true,
      explanation: '"The lamp" = la lámpara, "is next to" = está al lado de, "the bed" = la cama.',
    },
  ],
  miniTest: [
    {
      id: 'a1-m7-l4-mt1',
      type: 'fill_blank',
      concept: 'prepositions of place',
      difficulty: 1,
      prompt: 'Completa: "The cat is ___ the chair." (debajo)',
      promptTranslation: 'El gato está debajo de la silla.',
      correctAnswer: 'under',
      acceptedAnswers: ['under', 'Under'],
      explanation: '"Under" significa debajo. → The cat is under the chair.',
    },
    {
      id: 'a1-m7-l4-mt2',
      type: 'multiple_choice',
      concept: 'prepositions of place',
      difficulty: 2,
      prompt: 'Completa: "The lamp is ___ the bed."',
      promptTranslation: 'La lámpara está al lado de la cama.',
      correctAnswer: 'next to',
      options: ['next to', 'behind', 'between'],
      explanation: '"Next to" significa al lado de. → The lamp is next to the bed.',
    },
    {
      id: 'a1-m7-l4-mt3',
      type: 'multiple_choice',
      concept: 'on vs above',
      difficulty: 3,
      prompt: 'Elige la preposición correcta: "The plane is ___ the city." (volando, sin contacto)',
      promptTranslation: 'El avión está encima de la ciudad.',
      correctAnswer: 'above',
      options: ['on', 'above', 'in'],
      explanation: 'El avión vuela sin tocar la ciudad → usamos "above" (encima, sin contacto).',
    },
    {
      id: 'a1-m7-l4-mt4',
      type: 'fill_blank',
      concept: 'prepositions of place',
      difficulty: 3,
      prompt: 'Completa: "The bathroom is ___ the kitchen and the bedroom." (entre)',
      promptTranslation: 'El baño está entre la cocina y el dormitorio.',
      correctAnswer: 'between',
      acceptedAnswers: ['between', 'Between'],
      explanation: '"Between" se usa entre dos cosas. → The bathroom is between the kitchen and the bedroom.',
    },
    {
      id: 'a1-m7-l4-mt5',
      type: 'translate',
      concept: 'prepositions of place',
      difficulty: 3,
      prompt: 'Traduce: "El libro está sobre la silla."',
      correctAnswer: 'The book is on the chair.',
      acceptedAnswers: ['The book is on the chair', 'The book is on the chair.', 'the book is on the chair.'],
      acceptApproximate: true,
      explanation: '"The book" = el libro, "is on" = está sobre (con contacto), "the chair" = la silla.',
    },
  ],
  reviewItems: ['a1-m7-l3'],
  prerequisites: ['a1-m7-l3'],
}
