import type { Lesson } from '../../types'

export const lesson114PrepositionsReview: Lesson = {
  id: 'a1-m11-l4',
  moduleId: 'm11-places',
  order: 3,
  title: 'Repaso de preposiciones + Is there a...?',
  objective: 'Repasar las preposiciones de lugar y consolidar cómo preguntar por lugares con "Is there a...?" y "Are there any...?".',
  explanation_es: `En esta lección repasamos dos cosas muy importantes: las preposiciones de lugar y cómo preguntar por lugares.

### Preposiciones de lugar

- **in** = en, dentro de → in the park, in the city
- **on** = sobre, encima de → on the table
- **under** = debajo de → under the bed
- **next to** = al lado de → next to the bank
- **behind** = detrás de → behind the museum
- **in front of** = delante de → in front of the shop
- **between** = entre → between the bank and the park

### Preguntar por lugares

Para preguntar si existe un lugar usamos:
- **Is there a...?** (singular) → Is there a bank near here? = ¿Hay un banco cerca de aquí?
- **Are there any...?** (plural) → Are there any restaurants around? = ¿Hay restaurantes por aquí?

Recuerda:
- Con singular usamos "a": Is there a bank near here?
- Con plural usamos "any": Are there any restaurants around?
- "around" = por aquí, cerca.

Ejemplos:
- The park is behind the museum. = El parque está detrás del museo.`,
  examples: [
    { english: 'Is there a bank near here?', spanish: '¿Hay un banco cerca de aquí?', note: 'Is there a + singular.' },
    { english: 'Are there any restaurants around?', spanish: '¿Hay restaurantes por aquí?', note: 'Are there any + plural.' },
    { english: 'The park is behind the museum.', spanish: 'El parque está detrás del museo.', note: 'behind = detrás de.' },
    { english: 'The cat is under the table.', spanish: 'El gato está debajo de la mesa.', note: 'under = debajo de.' },
    { english: 'The shop is in front of the hotel.', spanish: 'La tienda está delante del hotel.', note: 'in front of = delante de.' },
    { english: 'The bank is next to the supermarket.', spanish: 'El banco está al lado del supermercado.', note: 'next to = al lado de.' },
  ],
  rule: `**Preposiciones de lugar:**
- in = en, dentro de | on = sobre | under = debajo de | next to = al lado de | behind = detrás de | in front of = delante de | between = entre.

**Preguntar por lugares:**
- Singular: Is there a + lugar + near here? → Is there a bank near here?
- Plural: Are there any + lugares + around? → Are there any restaurants around?

**Respuestas cortas:**
- Yes, there is. / No, there isn't. (singular)
- Yes, there are. / No, there aren't. (plural)

Estructura para decir dónde está algo:
- The + lugar + is + preposición + the + lugar.
- The park is behind the museum. = El parque está detrás del museo.`,
  commonMistakes: [
    { wrong: '❌ Is there bank near here?', correct: '✅ Is there a bank near here?', explanation: 'Con singular necesitamos "a": Is there a bank near here?' },
    { wrong: '❌ Are there a restaurants around?', correct: '✅ Are there any restaurants around?', explanation: 'Con plural usamos "any": Are there any restaurants around?' },
    { wrong: '❌ The park is behind the museum. (correcto)', correct: '✅ Correcto: "behind" significa detrás de.', explanation: 'Recuerda el orden: The + lugar + is + preposición + the + lugar. "The park is behind the museum" es una frase perfecta.' },
  ],
  vocabulary: [
    { word: 'in', translation_es: 'en, dentro de', level: 'A1', category: 'prepositions', partOfSpeech: 'preposition', example: 'There is a park in the city.', exampleTranslation: 'Hay un parque en la ciudad.' },
    { word: 'on', translation_es: 'sobre, encima de', level: 'A1', category: 'prepositions', partOfSpeech: 'preposition', example: 'The book is on the table.', exampleTranslation: 'El libro está sobre la mesa.' },
    { word: 'under', translation_es: 'debajo de', level: 'A1', category: 'prepositions', partOfSpeech: 'preposition', example: 'The cat is under the table.', exampleTranslation: 'El gato está debajo de la mesa.' },
    { word: 'next to', translation_es: 'al lado de', level: 'A1', category: 'prepositions', partOfSpeech: 'preposition', example: 'The bank is next to the supermarket.', exampleTranslation: 'El banco está al lado del supermercado.' },
    { word: 'behind', translation_es: 'detrás de', level: 'A1', category: 'prepositions', partOfSpeech: 'preposition', example: 'The park is behind the museum.', exampleTranslation: 'El parque está detrás del museo.' },
    { word: 'in front of', translation_es: 'delante de', level: 'A1', category: 'prepositions', partOfSpeech: 'preposition', example: 'The shop is in front of the hotel.', exampleTranslation: 'La tienda está delante del hotel.' },
    { word: 'between', translation_es: 'entre', level: 'A1', category: 'prepositions', partOfSpeech: 'preposition', example: 'The cinema is between the bank and the park.', exampleTranslation: 'El cine está entre el banco y el parque.' },
    { word: 'near here', translation_es: 'cerca de aquí', level: 'A1', category: 'places', partOfSpeech: 'phrase', example: 'Is there a bank near here?', exampleTranslation: '¿Hay un banco cerca de aquí?' },
    { word: 'around', translation_es: 'por aquí, cerca', level: 'A1', category: 'places', partOfSpeech: 'adverb', example: 'Are there any restaurants around?', exampleTranslation: '¿Hay restaurantes por aquí?' },
  ],
  grammarPoints: [
    {
      id: 'gp-is-there-are-there',
      level: 'A1',
      name: 'Is there a...? / Are there any...?',
      explanation_es: 'Para preguntar si existe un lugar usamos "Is there a...?" con singular y "Are there any...?" con plural. "Any" se usa en preguntas con plural.',
      formula: 'Is there a + singular? | Are there any + plural?',
      examples: ['Is there a bank near here?', 'Are there any restaurants around?'],
    },
    {
      id: 'gp-prepositions-of-place',
      level: 'A1',
      name: 'Prepositions of place review',
      explanation_es: 'Las preposiciones de lugar nos dicen dónde está algo: in, on, under, next to, behind, in front of, between.',
      formula: 'The + place + is + preposition + the + place',
      examples: ['The park is behind the museum.', 'The bank is next to the supermarket.'],
    },
  ],
  exercises: [
    {
      id: 'a1-m11-l4-ex1',
      type: 'fill_blank',
      concept: 'Is there a...?',
      difficulty: 2,
      prompt: 'Completa: "Is there ___ bank near here?"',
      promptTranslation: '¿Hay un banco cerca de aquí?',
      correctAnswer: 'a',
      acceptedAnswers: ['A', 'a'],
      explanation: 'Con singular usamos "a": Is there a bank near here?',
    },
    {
      id: 'a1-m11-l4-ex2',
      type: 'fill_blank',
      concept: 'Are there any...?',
      difficulty: 2,
      prompt: 'Completa: "Are there ___ restaurants around?"',
      promptTranslation: '¿Hay restaurantes por aquí?',
      correctAnswer: 'any',
      acceptedAnswers: ['Any', 'any'],
      explanation: 'Con plural en preguntas usamos "any": Are there any restaurants around?',
    },
    {
      id: 'a1-m11-l4-ex3',
      type: 'multiple_choice',
      concept: 'prepositions of place',
      difficulty: 2,
      prompt: 'Completa: "The park is ___ the museum." (detrás de)',
      promptTranslation: 'El parque está detrás del museo.',
      correctAnswer: 'behind',
      options: ['behind', 'in front of', 'under'],
      explanation: '"Behind" significa detrás de. → The park is behind the museum.',
    },
    {
      id: 'a1-m11-l4-ex4',
      type: 'multiple_choice',
      concept: 'prepositions of place',
      difficulty: 2,
      prompt: 'Completa: "The cat is ___ the table." (debajo de)',
      promptTranslation: 'El gato está debajo de la mesa.',
      correctAnswer: 'under',
      options: ['under', 'on', 'next to'],
      explanation: '"Under" significa debajo de. → The cat is under the table.',
    },
    {
      id: 'a1-m11-l4-ex5',
      type: 'multiple_choice',
      concept: 'Is there a...?',
      difficulty: 3,
      prompt: 'Responde: "Is there a bank near here?" (no)',
      promptTranslation: '¿Hay un banco cerca de aquí? (no)',
      correctAnswer: 'No, there isn\'t.',
      options: ['No, there isn\'t.', 'No, there aren\'t.', 'No, there is.'],
      explanation: 'A "Is there a...?" (singular) respondemos con "Yes, there is." o "No, there isn\'t."',
    },
    {
      id: 'a1-m11-l4-ex6',
      type: 'multiple_choice',
      concept: 'Are there any...?',
      difficulty: 3,
      prompt: 'Responde: "Are there any restaurants around?" (sí)',
      promptTranslation: '¿Hay restaurantes por aquí? (sí)',
      correctAnswer: 'Yes, there are.',
      options: ['Yes, there are.', 'Yes, there is.', 'Yes, there aren\'t.'],
      explanation: 'A "Are there any...?" (plural) respondemos con "Yes, there are." o "No, there aren\'t."',
    },
    {
      id: 'a1-m11-l4-ex7',
      type: 'match',
      concept: 'prepositions of place',
      difficulty: 2,
      prompt: 'Relaciona cada preposición con su significado:',
      pairs: [
        { left: 'in', right: 'en, dentro de' },
        { left: 'on', right: 'sobre, encima de' },
        { left: 'under', right: 'debajo de' },
        { left: 'next to', right: 'al lado de' },
        { left: 'behind', right: 'detrás de' },
        { left: 'in front of', right: 'delante de' },
      ],
      correctAnswer: 'in=en, on=sobre, under=debajo de, next to=al lado de, behind=detrás de, in front of=delante de',
      explanation: 'in=en, on=sobre, under=debajo de, next to=al lado de, behind=detrás de, in front of=delante de.',
    },
    {
      id: 'a1-m11-l4-ex8',
      type: 'fill_blank',
      concept: 'prepositions of place',
      difficulty: 2,
      prompt: 'Completa: "The shop is ___ front of the hotel."',
      promptTranslation: 'La tienda está delante del hotel.',
      correctAnswer: 'in',
      acceptedAnswers: ['In', 'in'],
      explanation: '"In front of" significa delante de. → The shop is in front of the hotel.',
    },
    {
      id: 'a1-m11-l4-ex9',
      type: 'translate',
      concept: 'Is there a...?',
      difficulty: 3,
      prompt: 'Traduce: "¿Hay un banco cerca de aquí?"',
      correctAnswer: 'Is there a bank near here?',
      acceptedAnswers: ['Is there a bank near here', 'Is there a bank near here?', 'is there a bank near here?'],
      acceptApproximate: true,
      explanation: '"¿Hay...?" singular = Is there a...? + a bank + near here.',
    },
    {
      id: 'a1-m11-l4-ex10',
      type: 'error_correction',
      concept: 'any + plural',
      difficulty: 3,
      prompt: 'Corrige el error: "Are there a restaurants around?"',
      correctAnswer: 'Are there any restaurants around?',
      acceptedAnswers: ['Are there any restaurants around', 'Are there any restaurants around?', 'are there any restaurants around?'],
      acceptApproximate: true,
      explanation: 'Con plural en preguntas usamos "any", no "a". → Are there any restaurants around?',
    },
  ],
  miniTest: [
    {
      id: 'a1-m11-l4-mt1',
      type: 'fill_blank',
      concept: 'Is there a...?',
      difficulty: 2,
      prompt: 'Completa: "___ there a pharmacy near here?"',
      promptTranslation: '¿Hay una farmacia cerca de aquí?',
      correctAnswer: 'Is',
      acceptedAnswers: ['Is', 'is'],
      explanation: 'Para preguntar en singular: Is there a...? → Is there a pharmacy near here?',
    },
    {
      id: 'a1-m11-l4-mt2',
      type: 'multiple_choice',
      concept: 'Are there any...?',
      difficulty: 2,
      prompt: 'Completa: "Are there ___ parks around?"',
      promptTranslation: '¿Hay parques por aquí?',
      correctAnswer: 'any',
      options: ['any', 'a', 'the'],
      explanation: 'Con plural en preguntas usamos "any": Are there any parks around?',
    },
    {
      id: 'a1-m11-l4-mt3',
      type: 'multiple_choice',
      concept: 'prepositions of place',
      difficulty: 3,
      prompt: 'Completa: "The hotel is ___ the station." (enfrente de)',
      promptTranslation: 'El hotel está enfrente de la estación.',
      correctAnswer: 'opposite',
      options: ['opposite', 'under', 'between'],
      explanation: '"Opposite" significa enfrente de. → The hotel is opposite the station.',
    },
    {
      id: 'a1-m11-l4-mt4',
      type: 'multiple_choice',
      concept: 'prepositions of place',
      difficulty: 3,
      prompt: 'Completa: "The cinema is ___ the bank and the park." (entre)',
      promptTranslation: 'El cine está entre el banco y el parque.',
      correctAnswer: 'between',
      options: ['between', 'behind', 'in front of'],
      explanation: '"Between" significa entre (dos lugares). → The cinema is between the bank and the park.',
    },
    {
      id: 'a1-m11-l4-mt5',
      type: 'translate',
      concept: 'prepositions review',
      difficulty: 4,
      prompt: 'Traduce: "¿Hay restaurantes por aquí?"',
      correctAnswer: 'Are there any restaurants around?',
      acceptedAnswers: ['Are there any restaurants around', 'Are there any restaurants around?', 'are there any restaurants around?'],
      acceptApproximate: true,
      explanation: '"¿Hay...?" plural = Are there any...? + restaurants + around.',
    },
  ],
  reviewItems: ['a1-m11-l3'],
  prerequisites: ['a1-m11-l3'],
}
