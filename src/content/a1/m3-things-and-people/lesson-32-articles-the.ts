import type { Lesson } from '../../types'

export const lesson32ArticlesThe: Lesson = {
  id: 'a1-m3-l2',
  moduleId: 'm3-things-and-people',
  order: 1,
  title: 'Artículo definido: the + Where is/are...?',
  objective: 'Aprender a usar "the" para referirse a algo específico, y a preguntar dónde están las cosas.',
  explanation_es: `En español tenemos el, la, los, las (cuatro formas, según género y número). En inglés solo tenemos UN artículo definido: **"the"**. Sirve para masculino, femenino, singular y plural — no cambia.

**"the"** se usa cuando el sustantivo es ESPECÍFICO: tanto el hablante como el oyente saben a qué nos referimos.

Compara:
- "**An** apple is a fruit." — Cualquier manzana, en general.
- "**The** apple on the table is red." — Una manzana específica, la de la mesa.

Otro ejemplo:
- "I have a car." (indefinido: uno entre varios coches)
- "The car is in the garage." (definido: mi coche, ya conocido)

**"the" funciona con cualquier género y número:**
- the book = el libro
- the apple = la manzana
- the books = los libros
- the apples = las manzanas

**Preguntar dónde están las cosas — "Where is / Where are":**

Usamos el verbo **"to be"** con "where":
- Singular → "Where IS the...?"
  - "Where is the book?" → ¿Dónde está el libro?
  - Respuesta: "The book is on the table."
- Plural → "Where ARE the...?"
  - "Where are the books?" → ¿Dónde están los libros?
  - Respuesta: "The books are on the shelf."

Otros ejemplos comunes con lugares de la casa:
- "Where is the cat?" → "The cat is in the kitchen."
- "Where are the keys?" → "The keys are on the table."
- "Where is the car?" → "The car is in the street."

🔑 Regla rápida: con un sustantivo SINGULAR usamos "Where IS"; con un sustantivo PLURAL usamos "Where ARE".`,
  examples: [
    { english: 'The apple is red.', spanish: 'La manzana es roja.', note: 'Hablando de una manzana específica.' },
    { english: 'The doors are open.', spanish: 'Las puertas están abiertas.', note: '"the" sirve para plural.' },
    { english: 'Where is the cat?', spanish: '¿Dónde está el gato?', note: 'Singular → "is".' },
    { english: 'The cat is in the kitchen.', spanish: 'El gato está en la cocina.' },
    { english: 'Where are my keys?', spanish: '¿Dónde están mis llaves?', note: 'Plural → "are".' },
    { english: 'The keys are on the table.', spanish: 'Las llaves están en la mesa.' },
    { english: 'The book is on the table.', spanish: 'El libro está en la mesa.' },
    { english: 'Where are the books?', spanish: '¿Dónde están los libros?' },
  ],
  rule: `Regla:
- **the** + sustantivo ESPECÍFICO (lo conocen tanto el hablante como el oyente).
- "the" es igual para masculino/femenino, singular/plural: the book, the apple, the books, the apples.
- Preguntar dónde:
  - Singular → "Where IS the [noun]?"
  - Plural → "Where ARE the [nouns]?"`,
  formation: {
    title: 'Cómo se forma el artículo definido "the"',
    intro: '"the" es el único artículo definido en inglés: sirve para masculino, femenino, singular y plural. Se usa cuando el hablante y el oyente ya saben de qué hablamos.',
    patterns: [
      {
        name: 'Con sustantivo específico',
        formula: 'the + sustantivo (singular o plural)',
        examples: [
          { english: 'The apple is red.', spanish: 'La manzana es roja.' },
          { english: 'The doors are open.', spanish: 'Las puertas están abiertas.' },
          { english: 'The car is in the garage.', spanish: 'El coche está en el garaje.' },
        ],
        note: '"the" no cambia con género ni número: the book, the books, the apple, the apples.',
      },
      {
        name: 'Preguntar dónde (singular)',
        formula: 'Where is the + sustantivo singular?',
        examples: [
          { english: 'Where is the cat?', spanish: '¿Dónde está el gato?' },
          { english: 'Where is the book?', spanish: '¿Dónde está el libro?' },
        ],
      },
      {
        name: 'Preguntar dónde (plural)',
        formula: 'Where are the + sustantivos en plural?',
        examples: [
          { english: 'Where are the keys?', spanish: '¿Dónde están las llaves?' },
          { english: 'Where are the books?', spanish: '¿Dónde están los libros?' },
        ],
      },
    ],
    notes: [
      'Para presentar algo nuevo usamos "a/an"; "the" solo cuando ya se sabe a qué nos referimos.',
      'Singular → "is"; plural → "are".',
    ],
  },
  commonMistakes: [
    {
      wrong: '❌ I am the teacher. (presentándose)',
      correct: '✅ I am a teacher.',
      explanation: 'Al presentarte normalmente eres "uno de muchos" profesores, indefinido. "I am the teacher" implicaría "YO soy EL profesor (y nadie más)".',
    },
    {
      wrong: '❌ Where is books?',
      correct: '✅ Where are the books?',
      explanation: '"books" es plural → usamos "are" (no "is"), y suele ir con "the": Where are the books?',
    },
    {
      wrong: '❌ Where are the cat?',
      correct: '✅ Where is the cat?',
      explanation: '"cat" es singular → usamos "is", no "are".',
    },
    {
      wrong: '❌ I have the apple. (sin contexto)',
      correct: '✅ I have an apple. (o "I have the apple" si ya se sabe cuál)',
      explanation: 'Sin contexto previo usamos el artículo INDEFINIDO "an". "The" solo cuando ya se sabe de qué manzana hablamos.',
    },
    {
      wrong: '❌ Where is the book? — Book is on the table.',
      correct: '✅ Where is the book? — The book is on the table.',
      explanation: 'En inglés no omitimos el artículo; seguimos usando "The book" en la respuesta, no "Book".',
    },
  ],
  vocabulary: [
    { word: 'table', translation_es: 'mesa', level: 'A1', category: 'objects', partOfSpeech: 'noun', example: 'The book is on the table.', exampleTranslation: 'El libro está en la mesa.' },
    { word: 'door', translation_es: 'puerta', level: 'A1', category: 'objects', partOfSpeech: 'noun', example: 'The door is open.', exampleTranslation: 'La puerta está abierta.' },
    { word: 'window', translation_es: 'ventana', level: 'A1', category: 'objects', partOfSpeech: 'noun', example: 'Open the window please.', exampleTranslation: 'Abre la ventana, por favor.' },
    { word: 'kitchen', translation_es: 'cocina', level: 'A1', category: 'places', partOfSpeech: 'noun', example: 'She is in the kitchen.', exampleTranslation: 'Ella está en la cocina.' },
    { word: 'room', translation_es: 'habitación', level: 'A1', category: 'places', partOfSpeech: 'noun', example: 'My room is big.', exampleTranslation: 'Mi habitación es grande.' },
    { word: 'street', translation_es: 'calle', level: 'A1', category: 'places', partOfSpeech: 'noun', example: 'The street is busy.', exampleTranslation: 'La calle está concurrida.' },
    { word: 'school', translation_es: 'escuela', level: 'A1', category: 'places', partOfSpeech: 'noun', example: 'The school is big.', exampleTranslation: 'La escuela es grande.' },
    { word: 'shop', translation_es: 'tienda', level: 'A1', category: 'places', partOfSpeech: 'noun', example: 'The shop is open.', exampleTranslation: 'La tienda está abierta.' },
    { word: 'park', translation_es: 'parque', level: 'A1', category: 'places', partOfSpeech: 'noun', example: 'I go to the park.', exampleTranslation: 'Voy al parque.' },
    { word: 'key', translation_es: 'llave', level: 'A1', category: 'objects', partOfSpeech: 'noun', example: 'Where are the keys?', exampleTranslation: '¿Dónde están las llaves?' },
  ],
  grammarPoints: [
    {
      id: 'gp-the',
      level: 'A1',
      name: 'Article the (definite)',
      explanation_es: '"the" se usa para cosas específicas que tanto el hablante como el oyente conocen. Es igual para masculino/femenino, singular/plural.',
      formula: 'the + noun',
      examples: ['The book is on the table.', 'The doors are closed.', 'Where is the cat?'],
    },
  ],
  exercises: [
    {
      id: 'a1-m3-l2-ex1',
      type: 'multiple_choice',
      concept: 'definite vs indefinite article',
      difficulty: 2,
      prompt: 'Elige: "I want ___ apple." (cualquier manzana, sin especificar)',
      promptTranslation: 'Elige el artículo correcto: "I want ___ apple." (any apple, not specified)',
      correctAnswer: 'an',
      options: ['a', 'an', 'the'],
      explanation: 'Sin especificar cuál → artículo indefinido. "apple" empieza con vocal → "an". → I want an apple.',
    },
    {
      id: 'a1-m3-l2-ex2',
      type: 'multiple_choice',
      concept: 'definite article — specific',
      difficulty: 2,
      prompt: 'Elige: "Where is ___ cat?" (mi gato, ya conocido)',
      promptTranslation: 'Elige el artículo correcto: "Where is ___ cat?" (my cat, already known)',
      correctAnswer: 'the',
      options: ['a', 'an', 'the'],
      explanation: 'Ya sabemos de qué gato hablamos → artículo definido "the". → Where is the cat?',
    },
    {
      id: 'a1-m3-l2-ex3',
      type: 'fill_blank',
      concept: 'Where is/are — singular vs plural',
      difficulty: 2,
      prompt: 'Completa con is o are: "Where ___ the keys?"',
      promptTranslation: 'Completa con is o are: "Where ___ the keys?"',
      correctAnswer: 'are',
      explanation: '"keys" es plural → "are". → Where are the keys?',
    },
    {
      id: 'a1-m3-l2-ex4',
      type: 'fill_blank',
      concept: 'Where is/are — singular',
      difficulty: 2,
      prompt: 'Completa con is o are: "Where ___ the dog?"',
      promptTranslation: 'Completa con is o are: "Where ___ the dog?"',
      correctAnswer: 'is',
      explanation: '"dog" es singular → "is". → Where is the dog?',
    },
    {
      id: 'a1-m3-l2-ex5',
      type: 'error_correction',
      concept: 'Where is/are — agreement',
      difficulty: 3,
      prompt: 'Corrige: "Where is the books?"',
      promptTranslation: 'Corrige: "Where is the books?"',
      correctAnswer: 'Where are the books?',
      acceptedAnswers: ['Where are the books'],
      acceptApproximate: true,
      explanation: '"books" es plural → "are", no "is". → Where are the books?',
    },
    {
      id: 'a1-m3-l2-ex6',
      type: 'translate',
      concept: 'the + specific noun',
      difficulty: 3,
      prompt: 'Traduce: "La manzana es roja."',
      promptTranslation: 'Traduce: "La manzana es roja."',
      correctAnswer: 'The apple is red.',
      acceptedAnswers: ['The apple is red'],
      acceptApproximate: true,
      explanation: 'Con "la" usamos "the" (única forma para masculino/femenino). → The apple is red.',
    },
    {
      id: 'a1-m3-l2-ex7',
      type: 'match',
      concept: 'singular vs plural — is/are',
      difficulty: 2,
      prompt: 'Une cada sujeto con el verbo correcto (is/are).',
      promptTranslation: 'Match each subject with the correct verb (is/are).',
      correctAnswer: '',
      pairs: [
        { left: 'the book', right: 'is' },
        { left: 'the books', right: 'are' },
        { left: 'the cat', right: 'is' },
        { left: 'the doors', right: 'are' },
      ],
      explanation: 'Singular → "is"; plural → "are". "the" no cambia con el número.',
    },
    {
      id: 'a1-m3-l2-ex8',
      type: 'reading',
      concept: 'the + Where is/are — comprehension',
      difficulty: 3,
      prompt: 'Lee el texto y responde.',
      promptTranslation: 'Read the text and answer.',
      correctAnswer: '',
      explanation: 'Lectura comprensiva: usa "the" para referirte a objetos específicos de la casa y contesta dónde está cada cosa con "is/are".',
      reading: {
        text: 'This is my house. The kitchen is big. The keys are on the table. The cat is in the kitchen. Where is the dog? The dog is in the park.',
        translation: 'Esta es mi casa. La cocina es grande. Las llaves están en la mesa. El gato está en la cocina. ¿Dónde está el perro? El perro está en el parque.',
        questions: [
          {
            id: 'a1-m3-l2-ex8-q1',
            type: 'multiple_choice',
            concept: 'reading comprehension — where',
            difficulty: 2,
            prompt: 'Where are the keys?',
            promptTranslation: '¿Dónde están las llaves?',
            correctAnswer: 'On the table.',
            options: ['In the kitchen.', 'On the table.', 'In the park.'],
            explanation: 'El texto dice: "The keys are on the table." → On the table.',
          },
          {
            id: 'a1-m3-l2-ex8-q2',
            type: 'multiple_choice',
            concept: 'reading comprehension — where',
            difficulty: 2,
            prompt: 'Where is the cat?',
            promptTranslation: '¿Dónde está el gato?',
            correctAnswer: 'In the kitchen.',
            options: ['In the kitchen.', 'On the table.', 'In the park.'],
            explanation: 'El texto dice: "The cat is in the kitchen." → In the kitchen.',
          },
          {
            id: 'a1-m3-l2-ex8-q3',
            type: 'multiple_choice',
            concept: 'reading comprehension — where',
            difficulty: 2,
            prompt: 'Where is the dog?',
            promptTranslation: '¿Dónde está el perro?',
            correctAnswer: 'In the park.',
            options: ['In the kitchen.', 'On the table.', 'In the park.'],
            explanation: 'El texto dice: "The dog is in the park." → In the park.',
          },
        ],
      },
    },
    {
      id: 'a1-m3-l2-ex9',
      type: 'select_correct',
      concept: 'article choice — context',
      difficulty: 3,
      prompt: 'Elige la oración correcta:',
      promptTranslation: 'Elige la oración correcta:',
      correctAnswer: 'The book is on the table.',
      options: ['Book is on the table.', 'The book is on the table.', 'A book is on the table. (refiriéndote a un libro concreto)'],
      explanation: 'En inglés no se omite el artículo. Para un libro específico usamos "the". → The book is on the table.',
    },
    {
      id: 'a1-m3-l2-ex10',
      type: 'error_correction',
      concept: 'definite article — gender',
      difficulty: 3,
      prompt: 'Corrige el error de artículo o concordancia: "La manzana están roja." (en inglés: "The apple are red.")',
      promptTranslation: 'Corrige la oración en inglés: "The apple are red."',
      correctAnswer: 'The apple is red.',
      acceptedAnswers: ['The apple is red'],
      acceptApproximate: true,
      explanation: '"apple" es singular → "is", no "are". "the" es correcto (única forma para masculino/femenino). → The apple is red.',
    },
  ],
  miniTest: [
    {
      id: 'a1-m3-l2-mt1',
      type: 'multiple_choice',
      concept: 'definite article — specific',
      difficulty: 2,
      prompt: 'Elige: "___ keys are on the table." (mis llaves)',
      promptTranslation: 'Elige el artículo correcto: "___ keys are on the table."',
      correctAnswer: 'The',
      options: ['A', 'An', 'The'],
      explanation: 'Llaves específicas (las mías) → "the". En plural, "the" no cambia. → The keys are on the table.',
    },
    {
      id: 'a1-m3-l2-mt2',
      type: 'fill_blank',
      concept: 'is/are — agreement',
      difficulty: 2,
      prompt: 'Completa con is o are: "Where ___ the book?"',
      promptTranslation: 'Completa con is o are: "Where ___ the book?"',
      correctAnswer: 'is',
      explanation: '"book" es singular → "is". → Where is the book?',
    },
    {
      id: 'a1-m3-l2-mt3',
      type: 'translate',
      concept: 'Where is — translation',
      difficulty: 3,
      prompt: 'Traduce: "¿Dónde está el gato?"',
      promptTranslation: 'Traduce: "Where is the cat?"',
      correctAnswer: 'Where is the cat?',
      acceptedAnswers: ['Where is the cat', 'Where\'s the cat?', "Where's the cat"],
      acceptApproximate: true,
      explanation: '"el gato" → "the cat"; singular → "is". → Where is the cat?',
    },
    {
      id: 'a1-m3-l2-mt4',
      type: 'error_correction',
      concept: 'is/are — number agreement',
      difficulty: 3,
      prompt: 'Corrige: "Where are the book?"',
      promptTranslation: 'Corrige: "Where are the book?"',
      correctAnswer: 'Where is the book?',
      acceptedAnswers: ['Where is the book', "Where's the book?", "Where's the book"],
      acceptApproximate: true,
      explanation: '"book" es singular → "is", no "are". → Where is the book?',
    },
    {
      id: 'a1-m3-l2-mt5',
      type: 'select_correct',
      concept: 'a/an/the — context',
      difficulty: 3,
      prompt: 'Elige la oración correcta para introducir un objeto nuevo en conversación:',
      promptTranslation: 'Elige la oración correcta para introducir un objeto nuevo en la conversación.',
      correctAnswer: 'I have a car.',
      options: ['I have the car.', 'I have a car.', 'I have an car.'],
      explanation: 'Presentas algo nuevo (cualquier coche) → indefinido. "car" empieza con consonante → "a". → I have a car.',
    },
  ],
  reviewItems: ['a1-m3-l1'],
  prerequisites: ['a1-m3-l1'],
}