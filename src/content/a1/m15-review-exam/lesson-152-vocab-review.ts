import type { Lesson } from '../../types'

export const lesson152VocabReview: Lesson = {
  id: 'a1-m15-l2',
  moduleId: 'm15-review-exam',
  order: 1,
  title: 'Repaso de vocabulario',
  objective: 'Repasar todo el vocabulario A1 del curso: saludos, números, países, familia, rutinas, comida, ropa, lugares, colores y profesiones.',
  explanation_es: `Antes del examen final, vamos a repasar todo el vocabulario que has aprendido durante el curso. Recuerda: el vocabulario es la base para poder formar frases correctas.

Estos son los grandes temas de vocabulario que has visto:

1. SALUDOS: hello, goodbye, good morning, good night, thank you, please, excuse me.
2. NÚMEROS: one, two, three... twenty, thirty, forty... one hundred.
3. PAÍSES Y NACIONALIDADES: Spain/Spanish, Mexico/Mexican, Italy/Italian, Japan/Japanese...
4. FAMILIA: mother, father, brother, sister, son, daughter, husband, wife, uncle, aunt, cousin, grandparents.
5. RUTINAS DIARIAS: get up, have breakfast, go to work, have lunch, go home, have dinner, go to bed.
6. COMIDA Y BEBIDA: apple, bread, cheese, chicken, fish, rice, water, coffee, tea, juice.
7. ROPA: shirt, t-shirt, dress, skirt, shoes, trousers, coat, jacket, hat, socks.
8. LUGARES DE LA CIUDAD: shop, bank, hospital, school, library, park, restaurant, station, cinema.
9. COLORES: red, blue, green, yellow, black, white, orange, purple, pink, brown.
10. PROFESIONES: teacher, doctor, nurse, engineer, student, lawyer, cook, driver, musician.

En los ejercicios de esta lección verás palabras de todos estos temas. No te preocupes si no recuerdas alguna: cada ejercicio te explica la respuesta.`,
  examples: [
    { english: 'My mother and my father are at home.', spanish: 'Mi madre y mi padre están en casa.', note: 'Familia: mother = madre, father = padre.' },
    { english: 'I have breakfast at seven o\'clock.', spanish: 'Desayuno a las siete.', note: 'Rutina: have breakfast = desayunar.' },
    { english: 'She is from Mexico. She is Mexican.', spanish: 'Ella es de México. Es mexicana.', note: 'País y nacionalidad.' },
    { english: 'The supermarket is next to the bank.', spanish: 'El supermercado está al lado del banco.', note: 'Lugares: supermarket = supermercado, bank = banco.' },
    { english: 'I like this blue shirt.', spanish: 'Me gusta esta camisa azul.', note: 'Ropa y colores: shirt = camisa, blue = azul.' },
    { english: 'My brother is a doctor.', spanish: 'Mi hermano es médico.', note: 'Profesión: doctor = médico.' },
  ],
  rule: `Vocabulario clave por tema:

- SALUDOS: hello (hola), goodbye (adiós), thank you (gracias), please (por favor), excuse me (disculpe).
- NÚMEROS: one, two, three, ten, twenty, thirty, one hundred.
- FAMILIA: mother, father, brother, sister, son, daughter, wife, husband, uncle, aunt, cousin.
- RUTINAS: get up (levantarse), have breakfast/lunch/dinner (desayunar/comer/cenar), go to bed (acostarse).
- COMIDA: apple, bread, cheese, chicken, fish, rice, water, coffee, tea.
- ROPA: shirt, dress, shoes, trousers, coat, hat, socks.
- LUGARES: shop, bank, hospital, school, park, restaurant, station, cinema.
- COLORES: red, blue, green, yellow, black, white, orange, purple, pink, brown.
- PROFESIONES: teacher, doctor, nurse, engineer, student, cook, driver.

No hace falta memorizarlo todo perfecto: el objetivo es reconocer y usar las palabras más comunes en contexto.`,
  commonMistakes: [
    { wrong: '❌ I am Spain.', correct: '✅ I am from Spain. / I am Spanish.', explanation: 'No digas tu país con "to be" directamente: usamos "from" (I am from Spain) o la nacionalidad (I am Spanish).' },
    { wrong: '❌ I have 30 years.', correct: '✅ I am 30 years old.', explanation: 'La edad se expresa con "to be", no con "have". → I am 30 years old.' },
    { wrong: '❌ My mother and father are in home.', correct: '✅ My mother and father are at home.', explanation: 'Con "home" usamos "at", no "in". → at home.' },
    { wrong: '❌ I like blue shirt.', correct: '✅ I like the blue shirt. / I like this blue shirt.', explanation: 'Necesitamos un artículo (the/this/my...) delante del sustantivo. → I like this blue shirt.' },
    { wrong: '❌ She is a nurse in the hospital.', correct: '✅ She is a nurse at the hospital.', explanation: 'Con el lugar de trabajo usamos "at": at the hospital, at school, at work.' },
  ],
  vocabulary: [
    { word: 'family', translation_es: 'familia', level: 'A1', category: 'family', partOfSpeech: 'noun', example: 'My family is big.', exampleTranslation: 'Mi familia es grande.' },
    { word: 'breakfast', translation_es: 'desayuno', level: 'A1', category: 'food', partOfSpeech: 'noun', example: 'I have breakfast at 7.', exampleTranslation: 'Desayuno a las 7.' },
    { word: 'supermarket', translation_es: 'supermercado', level: 'A1', category: 'places', partOfSpeech: 'noun', example: 'The supermarket is near my house.', exampleTranslation: 'El supermercado está cerca de mi casa.' },
    { word: 'shirt', translation_es: 'camisa', level: 'A1', category: 'clothes', partOfSpeech: 'noun', example: 'I like this blue shirt.', exampleTranslation: 'Me gusta esta camisa azul.' },
    { word: 'green', translation_es: 'verde', level: 'A1', category: 'colours', partOfSpeech: 'adjective', example: 'The trees are green.', exampleTranslation: 'Los árboles son verdes.' },
    { word: 'engineer', translation_es: 'ingeniero/a', level: 'A1', category: 'jobs', partOfSpeech: 'noun', example: 'My father is an engineer.', exampleTranslation: 'Mi padre es ingeniero.' },
    { word: 'get up', translation_es: 'levantarse', level: 'A1', category: 'routines', partOfSpeech: 'verb', example: 'I get up at six.', exampleTranslation: 'Me levanto a las seis.' },
    { word: 'water', translation_es: 'agua', level: 'A1', category: 'food', partOfSpeech: 'noun', example: 'I drink water every day.', exampleTranslation: 'Bebo agua todos los días.' },
    { word: 'station', translation_es: 'estación', level: 'A1', category: 'places', partOfSpeech: 'noun', example: 'The station is far from here.', exampleTranslation: 'La estación está lejos de aquí.' },
    { word: 'red', translation_es: 'rojo', level: 'A1', category: 'colours', partOfSpeech: 'adjective', example: 'She has a red dress.', exampleTranslation: 'Ella tiene un vestido rojo.' },
  ],
  grammarPoints: [],
  exercises: [
    {
      id: 'a1-m15-l2-ex1',
      type: 'match',
      concept: 'greetings vocabulary',
      difficulty: 1,
      prompt: 'Relaciona cada saludo con su significado:',
      pairs: [
        { left: 'hello', right: 'hola' },
        { left: 'goodbye', right: 'adiós' },
        { left: 'good morning', right: 'buenos días' },
        { left: 'thank you', right: 'gracias' },
        { left: 'please', right: 'por favor' },
        { left: 'excuse me', right: 'disculpe' },
      ],
      correctAnswer: 'hello=hola, goodbye=adiós, good morning=buenos días, thank you=gracias, please=por favor, excuse me=disculpe',
      explanation: 'Estos son los saludos y expresiones de cortesía más usados: hello (hola), goodbye (adiós), good morning (buenos días), thank you (gracias), please (por favor), excuse me (disculpe).',
    },
    {
      id: 'a1-m15-l2-ex2',
      type: 'multiple_choice',
      concept: 'numbers vocabulary',
      difficulty: 2,
      prompt: '¿Qué número es "twenty-five"?',
      correctAnswer: '25',
      options: ['15', '25', '35'],
      explanation: '"twenty" = veinte y "five" = cinco, juntos forman 25 (twenty-five).',
    },
    {
      id: 'a1-m15-l2-ex3',
      type: 'multiple_choice',
      concept: 'countries and nationalities',
      difficulty: 2,
      prompt: 'Ella es de México. Ella es ___.',
      correctAnswer: 'Mexican',
      options: ['Mexican', 'Mexico', 'Spain'],
      explanation: 'La nacionalidad es "Mexican". "Mexico" es el país y no se usa como adjetivo con "to be".',
    },
    {
      id: 'a1-m15-l2-ex4',
      type: 'match',
      concept: 'family vocabulary',
      difficulty: 2,
      prompt: 'Relaciona cada miembro de la familia con su traducción:',
      pairs: [
        { left: 'mother', right: 'madre' },
        { left: 'father', right: 'padre' },
        { left: 'sister', right: 'hermana' },
        { left: 'brother', right: 'hermano' },
        { left: 'uncle', right: 'tío' },
        { left: 'cousin', right: 'primo/a' },
      ],
      correctAnswer: 'mother=madre, father=padre, sister=hermana, brother=hermano, uncle=tío, cousin=primo/a',
      explanation: 'Vocabulario de familia: mother (madre), father (padre), sister (hermana), brother (hermano), uncle (tío), cousin (primo/a).',
    },
    {
      id: 'a1-m15-l2-ex5',
      type: 'fill_blank',
      concept: 'routines vocabulary',
      difficulty: 2,
      prompt: 'Completa la rutina: "I ___ at seven o\'clock." (levantarse)',
      promptTranslation: 'Me levanto a las siete.',
      correctAnswer: 'get up',
      acceptedAnswers: ['get up', 'wake up'],
      explanation: '"Get up" significa levantarse. → I get up at seven o\'clock. = Me levanto a las siete. (También válido: wake up = despertarse.)',
    },
    {
      id: 'a1-m15-l2-ex6',
      type: 'multiple_choice',
      concept: 'food vocabulary',
      difficulty: 2,
      prompt: '¿Cuál de estas palabras es una BEBIDA?',
      correctAnswer: 'water',
      options: ['bread', 'water', 'cheese'],
      explanation: '"Water" (agua) es una bebida. "Bread" (pan) y "cheese" (queso) son comida.',
    },
    {
      id: 'a1-m15-l2-ex7',
      type: 'match',
      concept: 'clothes and colours',
      difficulty: 3,
      prompt: 'Relaciona cada prenda con su significado:',
      pairs: [
        { left: 'dress', right: 'vestido' },
        { left: 'shirt', right: 'camisa' },
        { left: 'shoes', right: 'zapatos' },
        { left: 'coat', right: 'abrigo' },
        { left: 'hat', right: 'sombrero' },
        { left: 'socks', right: 'calcetines' },
      ],
      correctAnswer: 'dress=vestido, shirt=camisa, shoes=zapatos, coat=abrigo, hat=sombrero, socks=calcetines',
      explanation: 'Vocabulario de ropa: dress (vestido), shirt (camisa), shoes (zapatos), coat (abrigo), hat (sombrero), socks (calcetines).',
    },
    {
      id: 'a1-m15-l2-ex8',
      type: 'multiple_choice',
      concept: 'places vocabulary',
      difficulty: 3,
      prompt: 'Vas a comprar comida y medicinas. ¿Dónde estás?',
      correctAnswer: 'supermarket',
      options: ['cinema', 'supermarket', 'station'],
      explanation: 'En el supermercado (supermarket) compras comida y otros productos. "Cinema" es cine y "station" es estación.',
    },
    {
      id: 'a1-m15-l2-ex9',
      type: 'translate',
      concept: 'family and jobs',
      difficulty: 3,
      prompt: 'Traduce: "Mi hermana es enfermera."',
      correctAnswer: 'My sister is a nurse.',
      acceptedAnswers: ['My sister is a nurse', 'My sister is a nurse.', 'My sister is nurse'],
      acceptApproximate: true,
      explanation: '"My sister" = mi hermana, "is" = es, "a nurse" = una enfermera. → My sister is a nurse.',
    },
    {
      id: 'a1-m15-l2-ex10',
      type: 'translate',
      concept: 'places and colours',
      difficulty: 4,
      prompt: 'Traduce: "Me gusta esta camisa azul."',
      correctAnswer: 'I like this blue shirt.',
      acceptedAnswers: ['I like this blue shirt', 'I like this blue shirt.', 'I like the blue shirt', 'I like the blue shirt.'],
      acceptApproximate: true,
      explanation: '"I like" = me gusta, "this" = esta, "blue" = azul, "shirt" = camisa. → I like this blue shirt.',
    },
  ],
  miniTest: [
    {
      id: 'a1-m15-l2-mt1',
      type: 'multiple_choice',
      concept: 'greetings vocabulary',
      difficulty: 1,
      prompt: '¿Qué dices por la MAÑANA para saludar?',
      correctAnswer: 'Good morning.',
      options: ['Good night.', 'Good morning.', 'Goodbye.'],
      explanation: 'Por la mañana saludamos con "Good morning" (buenos días). "Good night" se usa para despedirse por la noche.',
    },
    {
      id: 'a1-m15-l2-mt2',
      type: 'multiple_choice',
      concept: 'numbers vocabulary',
      difficulty: 2,
      prompt: '¿Cuánto es "forty-three"?',
      correctAnswer: '43',
      options: ['34', '43', '53'],
      explanation: '"Forty" = cuarenta y "three" = tres → 43.',
    },
    {
      id: 'a1-m15-l2-mt3',
      type: 'fill_blank',
      concept: 'family vocabulary',
      difficulty: 2,
      prompt: 'Completa: "My mother\'s ___ is my father." (la pareja de mi madre)',
      promptTranslation: 'El esposo de mi madre es mi padre.',
      correctAnswer: 'husband',
      acceptedAnswers: ['husband'],
      explanation: '"Husband" = esposo. → My mother\'s husband is my father.',
    },
    {
      id: 'a1-m15-l2-mt4',
      type: 'multiple_choice',
      concept: 'food vocabulary',
      difficulty: 2,
      prompt: '¿Cuál de estas palabras es una FRUTA?',
      correctAnswer: 'apple',
      options: ['apple', 'bread', 'rice'],
      explanation: '"Apple" (manzana) es una fruta. "Bread" (pan) y "rice" (arroz) no son frutas.',
    },
    {
      id: 'a1-m15-l2-mt5',
      type: 'translate',
      concept: 'jobs vocabulary',
      difficulty: 3,
      prompt: 'Traduce: "Él es profesor."',
      correctAnswer: 'He is a teacher.',
      acceptedAnswers: ['He is a teacher', 'He is a teacher.', "He's a teacher", "He's a teacher."],
      acceptApproximate: true,
      explanation: '"He is" = él es, "a teacher" = un profesor. → He is a teacher.',
    },
    {
      id: 'a1-m15-l2-mt6',
      type: 'multiple_choice',
      concept: 'colours vocabulary',
      difficulty: 2,
      prompt: '¿Qué color es "yellow"?',
      correctAnswer: 'amarillo',
      options: ['verde', 'amarillo', 'negro'],
      explanation: '"Yellow" = amarillo. "Green" = verde y "black" = negro.',
    },
  ],
  reviewItems: ['a1-m15-l1'],
  prerequisites: ['a1-m15-l1'],
}
