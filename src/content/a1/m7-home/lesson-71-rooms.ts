import type { Lesson } from '../../types'

export const lesson71Rooms: Lesson = {
  id: 'a1-m7-l1',
  moduleId: 'm7-home',
  order: 0,
  title: 'Habitaciones y muebles de la casa',
  objective: 'Aprender el vocabulario de las habitaciones y los muebles de la casa.',
  explanation_es: `Vamos a aprender las partes de la casa y los muebles más comunes.

### Habitaciones (Rooms)

- kitchen = cocina
- bedroom = dormitorio (la habitación donde duermes)
- bathroom = baño (¡una sola palabra! No "bath room")
- living room = sala de estar (donde ves la tele)
- dining room = comedor
- office = oficina (estudio)
- garage = garaje
- garden = jardín

### Muebles (Furniture)

- table = mesa
- chair = silla
- bed = cama
- sofa = sofá
- desk = escritorio
- lamp = lámpara
- wardrobe = armario
- shelf = estantería
- mirror = espejo

Para decir dónde está algo, usamos "in" + habitación:

- The table is in the kitchen. = La mesa está en la cocina.
- There is a bed in the bedroom. = Hay una cama en el dormitorio.

IMPORTANTE para hispanohablantes: cuidado con "the house's big". El apóstrofo "'s" se usa para indicar posesión (de la casa), NO para construir una frase con "to be". Para decir "la casa es grande" decimos "The house is big".`,
  examples: [
    { english: 'The table is in the kitchen.', spanish: 'La mesa está en la cocina.', note: 'in + habitación = en la habitación.' },
    { english: 'There is a bed in the bedroom.', spanish: 'Hay una cama en el dormitorio.', note: 'there is = hay (una cosa).' },
    { english: 'There are two chairs in the dining room.', spanish: 'Hay dos sillas en el comedor.', note: 'there are = hay (varias cosas).' },
    { english: 'The sofa is in the living room.', spanish: 'El sofá está en la sala de estar.' },
    { english: 'There is a mirror in the bathroom.', spanish: 'Hay un espejo en el baño.', note: 'bathroom se escribe en una sola palabra.' },
    { english: 'The car is in the garage.', spanish: 'El coche está en el garaje.' },
    { english: 'The garden is behind the house.', spanish: 'El jardín está detrás de la casa.' },
  ],
  rule: `**Habitaciones:** kitchen, bedroom, bathroom, living room, dining room, office, garage, garden.

**Muebles:** table, chair, bed, sofa, desk, lamp, wardrobe, shelf, mirror.

Para decir dónde está un mueble: Subject + to be + in + room
- The table is in the kitchen. = La mesa está en la cocina.

Para decir que hay algo: There is / There are + objeto + in + room
- There is a bed in the bedroom. = Hay una cama en el dormitorio.

Recordatorio: "bathroom" se escribe en UNA palabra, y las habitaciones usan "in" (in the kitchen, in the bathroom).`,
  commonMistakes: [
    { wrong: '❌ The house\'s big.', correct: '✅ The house is big.', explanation: '"\'s" indica posesión (de la casa). Para decir "es grande" usamos el verbo "is": The house is big.' },
    { wrong: '❌ Bath room.', correct: '✅ Bathroom.', explanation: '"Bathroom" se escribe en una sola palabra: bathroom.' },
    { wrong: '❌ On the kitchen.', correct: '✅ In the kitchen.', explanation: 'Las habitaciones usan "in" (dentro de). Decimos "in the kitchen", "in the bedroom".' },
  ],
  vocabulary: [
    { word: 'kitchen', translation_es: 'cocina', level: 'A1', category: 'rooms', partOfSpeech: 'noun', example: 'The table is in the kitchen.', exampleTranslation: 'La mesa está en la cocina.' },
    { word: 'bedroom', translation_es: 'dormitorio', level: 'A1', category: 'rooms', partOfSpeech: 'noun', example: 'There is a bed in the bedroom.', exampleTranslation: 'Hay una cama en el dormitorio.' },
    { word: 'bathroom', translation_es: 'baño', level: 'A1', category: 'rooms', partOfSpeech: 'noun', example: 'There is a mirror in the bathroom.', exampleTranslation: 'Hay un espejo en el baño.' },
    { word: 'living room', translation_es: 'sala de estar', level: 'A1', category: 'rooms', partOfSpeech: 'noun', example: 'The sofa is in the living room.', exampleTranslation: 'El sofá está en la sala de estar.' },
    { word: 'dining room', translation_es: 'comedor', level: 'A1', category: 'rooms', partOfSpeech: 'noun', example: 'There are two chairs in the dining room.', exampleTranslation: 'Hay dos sillas en el comedor.' },
    { word: 'office', translation_es: 'oficina', level: 'A1', category: 'rooms', partOfSpeech: 'noun', example: 'There is a desk in the office.', exampleTranslation: 'Hay un escritorio en la oficina.' },
    { word: 'garage', translation_es: 'garaje', level: 'A1', category: 'rooms', partOfSpeech: 'noun', example: 'The car is in the garage.', exampleTranslation: 'El coche está en el garaje.' },
    { word: 'garden', translation_es: 'jardín', level: 'A1', category: 'rooms', partOfSpeech: 'noun', example: 'The garden is behind the house.', exampleTranslation: 'El jardín está detrás de la casa.' },
    { word: 'table', translation_es: 'mesa', level: 'A1', category: 'furniture', partOfSpeech: 'noun', example: 'The table is in the kitchen.', exampleTranslation: 'La mesa está en la cocina.' },
    { word: 'chair', translation_es: 'silla', level: 'A1', category: 'furniture', partOfSpeech: 'noun', example: 'There is a chair in the office.', exampleTranslation: 'Hay una silla en la oficina.' },
    { word: 'bed', translation_es: 'cama', level: 'A1', category: 'furniture', partOfSpeech: 'noun', example: 'There is a bed in the bedroom.', exampleTranslation: 'Hay una cama en el dormitorio.' },
    { word: 'sofa', translation_es: 'sofá', level: 'A1', category: 'furniture', partOfSpeech: 'noun', example: 'The sofa is in the living room.', exampleTranslation: 'El sofá está en la sala de estar.' },
    { word: 'desk', translation_es: 'escritorio', level: 'A1', category: 'furniture', partOfSpeech: 'noun', example: 'There is a desk in the office.', exampleTranslation: 'Hay un escritorio en la oficina.' },
    { word: 'lamp', translation_es: 'lámpara', level: 'A1', category: 'furniture', partOfSpeech: 'noun', example: 'There is a lamp next to the bed.', exampleTranslation: 'Hay una lámpara al lado de la cama.' },
    { word: 'wardrobe', translation_es: 'armario', level: 'A1', category: 'furniture', partOfSpeech: 'noun', example: 'The wardrobe is in the bedroom.', exampleTranslation: 'El armario está en el dormitorio.' },
    { word: 'shelf', translation_es: 'estantería', level: 'A1', category: 'furniture', partOfSpeech: 'noun', example: 'There is a shelf in the office.', exampleTranslation: 'Hay una estantería en la oficina.' },
    { word: 'mirror', translation_es: 'espejo', level: 'A1', category: 'furniture', partOfSpeech: 'noun', example: 'There is a mirror in the bathroom.', exampleTranslation: 'Hay un espejo en el baño.' },
  ],
  grammarPoints: [
    {
      id: 'gp-rooms-location',
      level: 'A1',
      name: 'Subject + to be + in + room',
      explanation_es: 'Para decir dónde está un mueble o una persona usamos "to be" + "in" + la habitación.',
      formula: 'Subject + to be + in + room',
      examples: ['The table is in the kitchen.', 'The sofa is in the living room.'],
    },
  ],
  exercises: [
    {
      id: 'a1-m7-l1-ex1',
      type: 'match',
      concept: 'rooms vocabulary',
      difficulty: 1,
      prompt: 'Relaciona cada habitación con su traducción:',
      pairs: [
        { left: 'kitchen', right: 'cocina' },
        { left: 'bedroom', right: 'dormitorio' },
        { left: 'bathroom', right: 'baño' },
        { left: 'living room', right: 'sala de estar' },
        { left: 'dining room', right: 'comedor' },
        { left: 'garden', right: 'jardín' },
      ],
      correctAnswer: 'kitchen=cocina, bedroom=dormitorio, bathroom=baño, living room=sala de estar, dining room=comedor, garden=jardín',
      explanation: 'kitchen=cocina, bedroom=dormitorio, bathroom=baño, living room=sala de estar, dining room=comedor, garden=jardín.',
    },
    {
      id: 'a1-m7-l1-ex2',
      type: 'match',
      concept: 'furniture vocabulary',
      difficulty: 1,
      prompt: 'Relaciona cada mueble con su traducción:',
      pairs: [
        { left: 'table', right: 'mesa' },
        { left: 'chair', right: 'silla' },
        { left: 'bed', right: 'cama' },
        { left: 'sofa', right: 'sofá' },
        { left: 'desk', right: 'escritorio' },
        { left: 'lamp', right: 'lámpara' },
      ],
      correctAnswer: 'table=mesa, chair=silla, bed=cama, sofa=sofá, desk=escritorio, lamp=lámpara',
      explanation: 'table=mesa, chair=silla, bed=cama, sofa=sofá, desk=escritorio, lamp=lámpara.',
    },
    {
      id: 'a1-m7-l1-ex3',
      type: 'multiple_choice',
      concept: 'rooms vocabulary',
      difficulty: 1,
      prompt: 'Completa: "We cook in the ___."',
      promptTranslation: 'Cocinamos en la ___.',
      correctAnswer: 'kitchen',
      options: ['kitchen', 'bedroom', 'bathroom'],
      explanation: '"Kitchen" es la cocina, donde cocinamos. → We cook in the kitchen.',
    },
    {
      id: 'a1-m7-l1-ex4',
      type: 'multiple_choice',
      concept: 'furniture vocabulary',
      difficulty: 1,
      prompt: 'Completa: "We sit on a ___."',
      promptTranslation: 'Nos sentamos en una ___.',
      correctAnswer: 'chair',
      options: ['wardrobe', 'chair', 'mirror'],
      explanation: '"Chair" es la silla. "Wardrobe" es el armario y "mirror" es el espejo.',
    },
    {
      id: 'a1-m7-l1-ex5',
      type: 'multiple_choice',
      concept: 'rooms vocabulary',
      difficulty: 2,
      prompt: 'Completa: "We watch TV in the ___."',
      promptTranslation: 'Vemos la tele en la ___.',
      correctAnswer: 'living room',
      options: ['bathroom', 'garage', 'living room'],
      explanation: 'La "living room" es la sala de estar, donde normalmente se ve la tele.',
    },
    {
      id: 'a1-m7-l1-ex6',
      type: 'fill_blank',
      concept: 'furniture vocabulary',
      difficulty: 2,
      prompt: 'Completa: "There is a ___ in the bedroom." (cama)',
      promptTranslation: 'Hay una cama en el dormitorio.',
      correctAnswer: 'bed',
      acceptedAnswers: ['Bed', 'bed.'],
      explanation: '"Bed" significa cama. → There is a bed in the bedroom.',
    },
    {
      id: 'a1-m7-l1-ex7',
      type: 'fill_blank',
      concept: 'furniture vocabulary',
      difficulty: 2,
      prompt: 'Completa: "There is a ___ in the office." (escritorio)',
      promptTranslation: 'Hay un escritorio en la oficina.',
      correctAnswer: 'desk',
      acceptedAnswers: ['Desk', 'desk.'],
      explanation: '"Desk" es el escritorio. → There is a desk in the office.',
    },
    {
      id: 'a1-m7-l1-ex8',
      type: 'multiple_choice',
      concept: 'rooms spelling',
      difficulty: 2,
      prompt: '¿Cómo se escribe correctamente "baño"?',
      correctAnswer: 'bathroom',
      options: ['bath room', 'bathroom', 'bathroomss'],
      explanation: '"Bathroom" se escribe en una sola palabra: b-a-t-h-r-o-o-m.',
    },
    {
      id: 'a1-m7-l1-ex9',
      type: 'translate',
      concept: 'rooms location',
      difficulty: 3,
      prompt: 'Traduce: "La mesa está en la cocina."',
      correctAnswer: 'The table is in the kitchen.',
      acceptedAnswers: ['The table is in the kitchen', 'The table is in the kitchen.', 'the table is in the kitchen.'],
      acceptApproximate: true,
      explanation: '"The table" = la mesa, "is" = está, "in the kitchen" = en la cocina.',
    },
    {
      id: 'a1-m7-l1-ex10',
      type: 'translate',
      concept: 'there is + furniture',
      difficulty: 3,
      prompt: 'Traduce: "Hay una cama en el dormitorio."',
      correctAnswer: 'There is a bed in the bedroom.',
      acceptedAnswers: ["There's a bed in the bedroom", 'There is a bed in the bedroom.', "There's a bed in the bedroom."],
      acceptApproximate: true,
      explanation: '"There is" = hay (una cosa), "a bed" = una cama, "in the bedroom" = en el dormitorio.',
    },
    {
      id: 'a1-m7-l1-ex11',
      type: 'error_correction',
      concept: "to be vs 's possessive",
      difficulty: 3,
      prompt: 'Encuentra el error: "The house\'s big."',
      correctAnswer: 'The house is big.',
      acceptedAnswers: ['The house is big', 'The house is big.', 'the house is big.'],
      acceptApproximate: true,
      explanation: '"\'s" indica posesión (algo de la casa). Para decir que la casa ES grande usamos el verbo "is": The house is big.',
    },
  ],
  miniTest: [
    {
      id: 'a1-m7-l1-mt1',
      type: 'fill_blank',
      concept: 'rooms vocabulary',
      difficulty: 1,
      prompt: 'Completa: "We sleep in the ___. (dormitorio)"',
      promptTranslation: 'Dormimos en el dormitorio.',
      correctAnswer: 'bedroom',
      acceptedAnswers: ['Bedroom', 'bedroom.'],
      explanation: '"Bedroom" es el dormitorio, donde dormimos.',
    },
    {
      id: 'a1-m7-l1-mt2',
      type: 'multiple_choice',
      concept: 'rooms vocabulary',
      difficulty: 2,
      prompt: '¿Cuál NO es una habitación?',
      promptTranslation: 'Which is NOT a room?',
      correctAnswer: 'sofa',
      options: ['garage', 'sofa', 'office'],
      explanation: '"Sofa" es un mueble, no una habitación. "Garage" y "office" sí son habitaciones.',
    },
    {
      id: 'a1-m7-l1-mt3',
      type: 'fill_blank',
      concept: 'furniture vocabulary',
      difficulty: 2,
      prompt: 'Completa: "There is a ___ in the bathroom. (espejo)"',
      promptTranslation: 'Hay un espejo en el baño.',
      correctAnswer: 'mirror',
      acceptedAnswers: ['Mirror', 'mirror.'],
      explanation: '"Mirror" significa espejo. → There is a mirror in the bathroom.',
    },
    {
      id: 'a1-m7-l1-mt4',
      type: 'multiple_choice',
      concept: 'rooms vocabulary',
      difficulty: 2,
      prompt: '¿Qué habitación usamos para guardar el coche?',
      promptTranslation: 'Which room do we use to keep the car?',
      correctAnswer: 'the garage',
      options: ['the garage', 'the kitchen', 'the bedroom'],
      explanation: 'El "garage" es el garaje, donde se guarda el coche.',
    },
    {
      id: 'a1-m7-l1-mt5',
      type: 'translate',
      concept: 'rooms location',
      difficulty: 3,
      prompt: 'Traduce: "El sofá está en la sala de estar."',
      correctAnswer: 'The sofa is in the living room.',
      acceptedAnswers: ['The sofa is in the living room', 'The sofa is in the living room.', 'the sofa is in the living room.'],
      acceptApproximate: true,
      explanation: '"The sofa" = el sofá, "is in" = está en, "the living room" = la sala de estar.',
    },
  ],
  reviewItems: ['a1-m5-l6'],
  prerequisites: ['a1-m5-l6'],
}
