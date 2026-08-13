import type { Lesson } from '../../types'

export const lesson33Plural: Lesson = {
  id: 'a1-m3-l3',
  moduleId: 'm3-things-and-people',
  order: 2,
  title: 'Singular → Plural',
  objective: 'Aprender a formar el plural de los sustantivos en inglés.',
  explanation_es: `En inglés, **singular** = uno (one); **plural** = más de uno (two, three, many...). La mayoría de los plurales se forman añadiendo **-s** al sustantivo singular, pero hay reglas y excepciones.

**Reglas de formación del plural:**

1. **+s** (la mayoría de los sustantivos):
   - book → books, car → cars, dog → dogs, pen → pens, apple → apples

2. **+es** (después de sonidos sibilantes: -s, -ss, -sh, -ch, -x, -z):
   - bus → buses, box → boxes, watch → watches, brush → brushes

3. **consonante + y → -ies** (cambiamos la "y" por "ies"):
   - city → cities, family → families, party → parties

4. **vocal + y → +s** (la "y" no cambia, solo añadimos "s"):
   - boy → boys, day → days, key → keys

5. **-f / -fe → -ves**:
   - knife → knives, leaf → leaves, wife → wives
   - ⚠️ Algunas excepciones: roofs, cliffs (no cambian la "f").

6. **Plurales irregulares** (hay que memorizarlos):
   - man → men (hombre → hombres)
   - woman → women (mujer → mujeres; se pronuncia /ˈwɪmɪn/)
   - child → children (niño → niños)
   - person → people (originalmente "persons", pero "people" es lo común cuando hablamos de varias personas)
   - foot → feet (pie → pies)
   - tooth → teeth (diente → dientes)
   - mouse → mice (ratón → ratones)

**Pronunciación:**
- En "buses" la "es" añade una sílaba nueva: /ˈbʌsɪz/ (tres sílabas).
- En español "manzanas" termina con /s/, en inglés "apples" tiene /ps/.
- En "women", la "o" y la "e" se pronuncian /ɪ/: /ˈwɪmɪn/.

**Ojo:** "people" ya es plural. NO decimos "peoples" para varias personas (solo "peoples" cuando hablamos de "pueblos" — no es A1).

Recuerda: con los plurales, usamos "are" (no "is") y "these/those" en plural, pero eso lo veremos en la siguiente lección.`,
  examples: [
    { english: 'I have a book. She has three books.', spanish: 'Yo tengo un libro. Ella tiene tres libros.', note: 'Plural regular +s.' },
    { english: 'There is one box. There are two boxes.', spanish: 'Hay una caja. Hay dos cajas.', note: '-x → +es.' },
    { english: 'I have two children.', spanish: 'Tengo dos hijos.', note: 'children — irregular.' },
    { english: 'There are five people in my family.', spanish: 'Hay cinco personas en mi familia.', note: 'person → people.' },
    { english: 'My teeth are white.', spanish: 'Mis dientes son blancos.', note: 'tooth → teeth.' },
    { english: 'The cities are big.', spanish: 'Las ciudades son grandes.', note: 'city → cities.' },
    { english: 'I have two knives.', spanish: 'Tengo dos cuchillos.', note: 'knife → knives.' },
    { english: 'The children are in the park.', spanish: 'Los niños están en el parque.' },
  ],
  rule: `Reglas del plural en inglés:
- **+s** (regla general): book → books
- **+es** (-s, -ss, -sh, -ch, -x, -z): bus → buses, box → boxes, watch → watches
- **consonante + y → -ies**: city → cities, family → families
- **vocal + y → +s**: boy → boys, day → days
- **-f / -fe → -ves**: knife → knives, leaf → leaves
- **Irregulares**: man → men, woman → women, child → children, person → people, foot → feet, tooth → teeth, mouse → mice`,
  commonMistakes: [
    { wrong: '❌ I have three book.', correct: '✅ I have three books.', explanation: 'En plural necesitamos "-s"; la cantidad (three) no sustituye al plural. → I have three books.' },
    { wrong: '❌ boxs', correct: '✅ boxes', explanation: 'Después de "x" añadimos "-es", no solo "-s". → boxes.' },
    { wrong: '❌ citys', correct: '✅ cities', explanation: 'consonante + y → cambiamos "y" por "ies". → cities.' },
    { wrong: '❌ childs', correct: '✅ children', explanation: '"child" es irregular; el plural es "children". → children.' },
    { wrong: '❌ womans', correct: '✅ women', explanation: '"woman" es irregular; el plural es "women" (se pronuncia /ˈwɪmɪn/).' },
    { wrong: '❌ three persons (en general)', correct: '✅ three people', explanation: 'Para varias personas en general usamos "people", no "persons".' },
    { wrong: '❌ five peoples (para varias personas)', correct: '✅ five people', explanation: '"people" ya es plural; nunca añadimos "-s" para varios individuos (solo "peoples" = "pueblos", no A1).' },
  ],
  vocabulary: [
    { word: 'book', translation_es: 'libro', level: 'A1', category: 'objects', partOfSpeech: 'noun', example: 'I have three books.', exampleTranslation: 'Tengo tres libros.' },
    { word: 'box', translation_es: 'caja', level: 'A1', category: 'objects', partOfSpeech: 'noun', example: 'Two boxes.', exampleTranslation: 'Dos cajas.' },
    { word: 'city', translation_es: 'ciudad', level: 'A1', category: 'places', partOfSpeech: 'noun', example: 'Big cities.', exampleTranslation: 'Ciudades grandes.' },
    { word: 'bus', translation_es: 'autobús', level: 'A1', category: 'transport', partOfSpeech: 'noun', example: 'Many buses.', exampleTranslation: 'Muchos autobuses.' },
    { word: 'car', translation_es: 'coche', level: 'A1', category: 'transport', partOfSpeech: 'noun', example: 'Three cars.', exampleTranslation: 'Tres coches.' },
    { word: 'day', translation_es: 'día', level: 'A1', category: 'time', partOfSpeech: 'noun', example: 'Seven days a week.', exampleTranslation: 'Siete días a la semana.' },
    { word: 'child', translation_es: 'niño', level: 'A1', category: 'people', partOfSpeech: 'noun', example: 'Three children.', exampleTranslation: 'Tres niños.' },
    { word: 'man', translation_es: 'hombre', level: 'A1', category: 'people', partOfSpeech: 'noun', example: 'Two men.', exampleTranslation: 'Dos hombres.' },
    { word: 'woman', translation_es: 'mujer', level: 'A1', category: 'people', partOfSpeech: 'noun', example: 'Five women.', exampleTranslation: 'Cinco mujeres.' },
    { word: 'person', translation_es: 'persona', level: 'A1', category: 'people', partOfSpeech: 'noun', example: 'Many people.', exampleTranslation: 'Muchas personas.' },
    { word: 'foot', translation_es: 'pie', level: 'A1', category: 'body', partOfSpeech: 'noun', example: 'My feet hurt.', exampleTranslation: 'Me duelen los pies.' },
    { word: 'tooth', translation_es: 'diente', level: 'A1', category: 'body', partOfSpeech: 'noun', example: 'Brush your teeth.', exampleTranslation: 'Cepilla tus dientes.' },
    { word: 'mouse', translation_es: 'ratón', level: 'A1', category: 'animals', partOfSpeech: 'noun', example: 'Mice are small.', exampleTranslation: 'Los ratones son pequeños.' },
    { word: 'knife', translation_es: 'cuchillo', level: 'A1', category: 'objects', partOfSpeech: 'noun', example: 'Sharp knives.', exampleTranslation: 'Cuchillos afilados.' },
    { word: 'apple', translation_es: 'manzana', level: 'A1', category: 'objects', partOfSpeech: 'noun', example: 'I eat apples every day.', exampleTranslation: 'Como manzanas cada día.' },
  ],
  grammarPoints: [
    {
      id: 'gp-plurals',
      level: 'A1',
      name: 'Plurals',
      explanation_es: 'La mayoría: +s. Sibilantes (-s, -ss, -sh, -ch, -x, -z): +es. Consonante+y → -ies. Vocales+y → +s. -f/-fe → -ves. Irregulares: man→men, woman→women, child→children, person→people, foot→feet, tooth→teeth, mouse→mice.',
      formula: '+s | +es | -y → -ies | -f → -ves | irregular',
      examples: ['apples', 'boxes', 'cities', 'children', 'women', 'feet'],
    },
  ],
  exercises: [
    {
      id: 'a1-m3-l3-ex1',
      type: 'multiple_choice',
      concept: 'plural +s — regular',
      difficulty: 1,
      prompt: 'Elige el plural correcto: "book"',
      promptTranslation: 'Elige el plural correcto: "book"',
      correctAnswer: 'books',
      options: ['books', 'bookes', 'bookies'],
      explanation: 'Regla general: añadimos "-s". → books.',
    },
    {
      id: 'a1-m3-l3-ex2',
      type: 'multiple_choice',
      concept: 'plural +es — sibilante',
      difficulty: 2,
      prompt: 'Elige el plural correcto: "box"',
      promptTranslation: 'Elige el plural correcto: "box"',
      correctAnswer: 'boxes',
      options: ['boxs', 'boxes', 'boxies'],
      explanation: 'Después de "x" añadimos "-es". → boxes.',
    },
    {
      id: 'a1-m3-l3-ex3',
      type: 'multiple_choice',
      concept: 'plural consonante + y → ies',
      difficulty: 2,
      prompt: 'Elige el plural correcto: "city"',
      promptTranslation: 'Elige el plural correcto: "city"',
      correctAnswer: 'cities',
      options: ['citys', 'cities', 'cityes'],
      explanation: 'consonante + y → cambiamos "y" por "ies". → cities.',
    },
    {
      id: 'a1-m3-l3-ex4',
      type: 'fill_blank',
      concept: 'plural regular',
      difficulty: 1,
      prompt: 'Escribe el plural de "car":',
      promptTranslation: 'Escribe el plural de "car"',
      correctAnswer: 'cars',
      explanation: 'Regla general: +s. → cars.',
    },
    {
      id: 'a1-m3-l3-ex5',
      type: 'fill_blank',
      concept: 'plural irregular — child',
      difficulty: 2,
      prompt: 'Escribe el plural de "child":',
      promptTranslation: 'Escribe el plural de "child"',
      correctAnswer: 'children',
      explanation: '"child" es irregular; el plural es "children". → children.',
    },
    {
      id: 'a1-m3-l3-ex6',
      type: 'match',
      concept: 'singular ↔ plural — regular and irregular',
      difficulty: 2,
      prompt: 'Une cada singular con su plural correcto.',
      promptTranslation: 'Match each singular with its correct plural.',
      correctAnswer: '',
      pairs: [
        { left: 'book', right: 'books' },
        { left: 'box', right: 'boxes' },
        { left: 'city', right: 'cities' },
        { left: 'child', right: 'children' },
        { left: 'man', right: 'men' },
        { left: 'foot', right: 'feet' },
      ],
      explanation: 'Regulares: +s (+es tras sibilante, -ies tras consonante+y). Irregulares: child→children, man→men, foot→feet.',
    },
    {
      id: 'a1-m3-l3-ex7',
      type: 'error_correction',
      concept: 'plural — missing -s',
      difficulty: 2,
      prompt: 'Corrige: "I have three book."',
      promptTranslation: 'Corrige: "I have three book."',
      correctAnswer: 'I have three books.',
      acceptedAnswers: ['I have three books'],
      acceptApproximate: true,
      explanation: 'En plural añadimos "-s" aunque pongamos "three". → I have three books.',
    },
    {
      id: 'a1-m3-l3-ex8',
      type: 'error_correction',
      concept: 'plural irregular — person',
      difficulty: 3,
      prompt: 'Corrige: "There are five persons in my family." (hablando en general)',
      promptTranslation: 'Corrige: "There are five persons in my family."',
      correctAnswer: 'There are five people in my family.',
      acceptedAnswers: ['There are five people in my family'],
      acceptApproximate: true,
      explanation: 'Para varias personas en general usamos "people", no "persons". → There are five people in my family.',
    },
    {
      id: 'a1-m3-l3-ex9',
      type: 'translate',
      concept: 'plural — sentence translation',
      difficulty: 3,
      prompt: 'Traduce: "Tengo dos niños." (children)',
      promptTranslation: 'Traduce: "I have two children."',
      correctAnswer: 'I have two children.',
      acceptedAnswers: ['I have two children'],
      acceptApproximate: true,
      explanation: 'Para "niños" usamos el plural irregular "children". → I have two children.',
    },
    {
      id: 'a1-m3-l3-ex10',
      type: 'true_false',
      concept: 'plural irregular — women pronunciation',
      difficulty: 3,
      prompt: 'El plural de "woman" es "womans".',
      promptTranslation: 'El plural de "woman" es "womans".',
      correctAnswer: 'false',
      acceptedAnswers: ['False', 'F'],
      explanation: 'Falso. El plural de "woman" es "women" (se pronuncia /ˈwɪmɪn/). No es regular.',
    },
  ],
  miniTest: [
    {
      id: 'a1-m3-l3-mt1',
      type: 'multiple_choice',
      concept: 'plural regular',
      difficulty: 1,
      prompt: 'Plural de "apple":',
      promptTranslation: 'Plural de "apple"',
      correctAnswer: 'apples',
      options: ['apples', 'apples', 'applies'],
      explanation: 'Regla general: +s. → apples.',
    },
    {
      id: 'a1-m3-l3-mt2',
      type: 'fill_blank',
      concept: 'plural +es',
      difficulty: 2,
      prompt: 'Escribe el plural de "bus":',
      promptTranslation: 'Escribe el plural de "bus"',
      correctAnswer: 'buses',
      explanation: 'Después de "-s" añadimos "-es". → buses.',
    },
    {
      id: 'a1-m3-l3-mt3',
      type: 'multiple_choice',
      concept: 'plural irregular — tooth',
      difficulty: 2,
      prompt: 'Plural de "tooth":',
      promptTranslation: 'Plural de "tooth"',
      correctAnswer: 'teeth',
      options: ['tooths', 'teeth', 'toothes'],
      explanation: '"tooth" es irregular; el plural es "teeth". → teeth.',
    },
    {
      id: 'a1-m3-l3-mt4',
      type: 'error_correction',
      concept: 'plural — city rule',
      difficulty: 3,
      prompt: 'Corrige: "Three citys."',
      promptTranslation: 'Corrige: "Three citys."',
      correctAnswer: 'Three cities.',
      acceptedAnswers: ['Three cities'],
      acceptApproximate: true,
      explanation: 'consonante + y → "y" cambia a "ies". → Three cities.',
    },
    {
      id: 'a1-m3-l3-mt5',
      type: 'translate',
      concept: 'plural — irregular sentence',
      difficulty: 3,
      prompt: 'Traduce: "Mis dientes son blancos."',
      promptTranslation: 'Traduce: "My teeth are white."',
      correctAnswer: 'My teeth are white.',
      acceptedAnswers: ['My teeth are white'],
      acceptApproximate: true,
      explanation: '"dientes" → plural irregular "teeth"; con plural usamos "are". → My teeth are white.',
    },
  ],
  reviewItems: ['a1-m3-l2'],
  prerequisites: ['a1-m3-l2'],
}