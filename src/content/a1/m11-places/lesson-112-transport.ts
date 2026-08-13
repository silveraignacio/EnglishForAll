import type { Lesson } from '../../types'

export const lesson112Transport: Lesson = {
  id: 'a1-m11-l2',
  moduleId: 'm11-places',
  order: 1,
  title: 'Medios de transporte',
  objective: 'Aprender los medios de transporte y cómo decir cómo vamos de un lugar a otro.',
  explanation_es: `En esta lección aprendemos los medios de transporte y cómo decir que nos desplazamos en uno de ellos.

### Medios de transporte (Transport)

- car = coche
- bus = autobús
- train = tren
- plane = avión (también "airplane" en EE. UU.)
- bike = bici (también "bicycle")
- taxi = taxi
- underground = metro (en Reino Unido; en EE. UU. se dice "subway" o "metro")
- boat = barco
- on foot = a pie

Para decir que vamos a un lugar usando un transporte usamos "by" + transporte:
- by car (en coche), by bus (en autobús), by train (en tren), by plane (en avión).

Con "a pie" no usamos "by", usamos "on foot":
- He goes to school on foot. = Él va a la escuela a pie.

Ejemplos:
- I go to work by bus. = Voy al trabajo en autobús.
- She travels by plane. = Ella viaja en avión.`,
  examples: [
    { english: 'I go to work by bus.', spanish: 'Voy al trabajo en autobús.', note: 'by + bus = en autobús.' },
    { english: 'She travels by plane.', spanish: 'Ella viaja en avión.', note: 'by + plane = en avión.' },
    { english: 'He goes to school on foot.', spanish: 'Él va a la escuela a pie.', note: 'on foot = a pie (no by foot).' },
    { english: 'We travel to Madrid by train.', spanish: 'Viajamos a Madrid en tren.', note: 'by + train = en tren.' },
    { english: 'I go to the city by car.', spanish: 'Voy a la ciudad en coche.', note: 'by + car = en coche.' },
    { english: 'She takes the bus to work.', spanish: 'Ella toma el autobús para ir al trabajo.', note: 'take + the + transport = coger el transporte.' },
  ],
  rule: `**Medios de transporte:** car (coche), bus (autobús), train (tren), plane (avión), bike/bicycle (bici), taxi (taxi), underground/subway/metro (metro), boat (barco), on foot (a pie).

**Para decir "en" + transporte:**
- by + transporte → by car, by bus, by train, by plane, by bike, by taxi.
- on foot → a pie (¡nunca "by foot"!).

**Estructura:** Subject + go/goes/travel/travels + by + transporte
- I go to work by bus. = Voy al trabajo en autobús.
- He goes to school on foot. = Él va a la escuela a pie.

**Forma alternativa:** take + the + transporte (coger el autobús, el tren...)
- I take the bus to work. = Cojo el autobús para ir al trabajo.`,
  commonMistakes: [
    { wrong: '❌ I go by foot.', correct: '✅ I go on foot.', explanation: 'Con "foot" usamos "on": on foot = a pie. La combinación "by foot" no existe.' },
    { wrong: '❌ I go with car.', correct: '✅ I go by car.', explanation: 'Para el transporte usamos "by", no "with": by car, by bus, by train.' },
    { wrong: '❌ I take bus to work.', correct: '✅ I take the bus to work.', explanation: 'Con "take" necesitamos "the": take the bus, take the train. Y con "by" no usamos "the": by bus, by train.' },
  ],
  vocabulary: [
    { word: 'car', translation_es: 'coche', level: 'A1', category: 'transport', partOfSpeech: 'noun', example: 'I go to the city by car.', exampleTranslation: 'Voy a la ciudad en coche.' },
    { word: 'bus', translation_es: 'autobús', level: 'A1', category: 'transport', partOfSpeech: 'noun', example: 'I go to work by bus.', exampleTranslation: 'Voy al trabajo en autobús.' },
    { word: 'train', translation_es: 'tren', level: 'A1', category: 'transport', partOfSpeech: 'noun', example: 'We travel to Madrid by train.', exampleTranslation: 'Viajamos a Madrid en tren.' },
    { word: 'plane', translation_es: 'avión', level: 'A1', category: 'transport', partOfSpeech: 'noun', example: 'She travels by plane.', exampleTranslation: 'Ella viaja en avión.' },
    { word: 'airplane', translation_es: 'avión', level: 'A1', category: 'transport', partOfSpeech: 'noun', example: 'The airplane is at the airport.', exampleTranslation: 'El avión está en el aeropuerto.' },
    { word: 'bike', translation_es: 'bici, bicicleta', level: 'A1', category: 'transport', partOfSpeech: 'noun', example: 'I go to work by bike.', exampleTranslation: 'Voy al trabajo en bici.' },
    { word: 'bicycle', translation_es: 'bicicleta', level: 'A1', category: 'transport', partOfSpeech: 'noun', example: 'His bicycle is in the garage.', exampleTranslation: 'Su bicicleta está en el garaje.' },
    { word: 'taxi', translation_es: 'taxi', level: 'A1', category: 'transport', partOfSpeech: 'noun', example: 'Let\'s go home by taxi.', exampleTranslation: 'Vamos a casa en taxi.' },
    { word: 'underground', translation_es: 'metro (Reino Unido)', level: 'A1', category: 'transport', partOfSpeech: 'noun', example: 'The underground is fast.', exampleTranslation: 'El metro es rápido.' },
    { word: 'subway', translation_es: 'metro (EE. UU.)', level: 'A1', category: 'transport', partOfSpeech: 'noun', example: 'I take the subway to work.', exampleTranslation: 'Cojo el metro para ir al trabajo.' },
    { word: 'boat', translation_es: 'barco', level: 'A1', category: 'transport', partOfSpeech: 'noun', example: 'We travel by boat in summer.', exampleTranslation: 'Viajamos en barco en verano.' },
    { word: 'foot', translation_es: 'pie', level: 'A1', category: 'transport', partOfSpeech: 'noun', example: 'He goes to school on foot.', exampleTranslation: 'Él va a la escuela a pie.' },
  ],
  grammarPoints: [
    {
      id: 'gp-by-transport',
      level: 'A1',
      name: 'by + transport / on foot',
      explanation_es: 'Para decir en qué medio de transporte nos desplazamos usamos "by" + transporte. Con "foot" usamos "on": on foot.',
      formula: 'by + transport (by car, by bus) | on foot',
      examples: ['I go to work by bus.', 'She travels by plane.', 'He goes to school on foot.'],
    },
    {
      id: 'gp-take-the-transport',
      level: 'A1',
      name: 'take + the + transport',
      explanation_es: 'También podemos decir que "cogemos" un transporte con el verbo "take" + "the" + transporte. Es tan correcto como "by + transporte".',
      formula: 'Subject + take/takes + the + transport',
      examples: ['I take the bus to work.', 'She takes the train to Madrid.', 'They take the subway.'],
    },
  ],
  exercises: [
    {
      id: 'a1-m11-l2-ex1',
      type: 'match',
      concept: 'transport vocabulary',
      difficulty: 1,
      prompt: 'Relaciona cada transporte con su traducción:',
      pairs: [
        { left: 'car', right: 'coche' },
        { left: 'bus', right: 'autobús' },
        { left: 'train', right: 'tren' },
        { left: 'plane', right: 'avión' },
        { left: 'bike', right: 'bici' },
        { left: 'taxi', right: 'taxi' },
      ],
      correctAnswer: 'car=coche, bus=autobús, train=tren, plane=avión, bike=bici, taxi=taxi',
      explanation: 'car=coche, bus=autobús, train=tren, plane=avión, bike=bici, taxi=taxi.',
    },
    {
      id: 'a1-m11-l2-ex2',
      type: 'match',
      concept: 'transport synonyms',
      difficulty: 2,
      prompt: 'Relaciona cada palabra con su significado o sinónimo:',
      pairs: [
        { left: 'underground', right: 'metro (Reino Unido)' },
        { left: 'subway', right: 'metro (EE. UU.)' },
        { left: 'airplane', right: 'avión' },
        { left: 'bicycle', right: 'bicicleta' },
        { left: 'on foot', right: 'a pie' },
        { left: 'boat', right: 'barco' },
      ],
      correctAnswer: 'underground=metro (Reino Unido), subway=metro (EE. UU.), airplane=avión, bicycle=bicicleta, on foot=a pie, boat=barco',
      explanation: 'underground y subway significan metro (Reino Unido vs EE. UU.); airplane=avión; bicycle=bicicleta; on foot=a pie; boat=barco.',
    },
    {
      id: 'a1-m11-l2-ex3',
      type: 'fill_blank',
      concept: 'by + transport',
      difficulty: 2,
      prompt: 'Completa: "I go to work ___ bus."',
      promptTranslation: 'Voy al trabajo en autobús.',
      correctAnswer: 'by',
      acceptedAnswers: ['By', 'by'],
      explanation: 'Con el transporte usamos "by": by bus = en autobús. → I go to work by bus.',
    },
    {
      id: 'a1-m11-l2-ex4',
      type: 'fill_blank',
      concept: 'on foot',
      difficulty: 2,
      prompt: 'Completa: "He goes to school ___ foot."',
      promptTranslation: 'Él va a la escuela a pie.',
      correctAnswer: 'on',
      acceptedAnswers: ['On', 'on'],
      explanation: 'Con "foot" usamos "on": on foot = a pie. → He goes to school on foot.',
    },
    {
      id: 'a1-m11-l2-ex5',
      type: 'multiple_choice',
      concept: 'by + transport',
      difficulty: 2,
      prompt: 'Completa: "She travels ___ plane."',
      promptTranslation: 'Ella viaja en avión.',
      correctAnswer: 'by',
      options: ['by', 'on', 'with'],
      explanation: 'Con el transporte usamos "by": by plane = en avión. → She travels by plane.',
    },
    {
      id: 'a1-m11-l2-ex6',
      type: 'multiple_choice',
      concept: 'transport vocabulary',
      difficulty: 2,
      prompt: 'Completa: "We travel to Madrid by ___."',
      promptTranslation: 'Viajamos a Madrid en tren.',
      correctAnswer: 'train',
      options: ['train', 'book', 'foot'],
      explanation: '"Train" es el tren. → We travel to Madrid by train.',
    },
    {
      id: 'a1-m11-l2-ex7',
      type: 'fill_blank',
      concept: 'take + the + transport',
      difficulty: 3,
      prompt: 'Completa: "I ___ the bus to work."',
      promptTranslation: 'Cojo el autobús para ir al trabajo.',
      correctAnswer: 'take',
      acceptedAnswers: ['Take', 'take.'],
      explanation: 'Para decir que cogemos un transporte usamos "take + the + transporte": take the bus.',
    },
    {
      id: 'a1-m11-l2-ex8',
      type: 'translate',
      concept: 'by + transport',
      difficulty: 3,
      prompt: 'Traduce: "Voy al trabajo en autobús."',
      correctAnswer: 'I go to work by bus.',
      acceptedAnswers: ['I go to work by bus', 'I go to work by bus.', 'i go to work by bus.'],
      acceptApproximate: true,
      explanation: '"Voy" = I go, "al trabajo" = to work, "en autobús" = by bus.',
    },
    {
      id: 'a1-m11-l2-ex9',
      type: 'translate',
      concept: 'on foot',
      difficulty: 3,
      prompt: 'Traduce: "Él va a la escuela a pie."',
      correctAnswer: 'He goes to school on foot.',
      acceptedAnswers: ['He goes to school on foot', 'He goes to school on foot.', 'he goes to school on foot.'],
      acceptApproximate: true,
      explanation: '"Él va" = he goes, "a la escuela" = to school, "a pie" = on foot.',
    },
    {
      id: 'a1-m11-l2-ex10',
      type: 'error_correction',
      concept: 'on foot vs by',
      difficulty: 3,
      prompt: 'Corrige el error: "I go to work by foot."',
      correctAnswer: 'I go to work on foot.',
      acceptedAnswers: ['I go to work on foot', 'I go to work on foot.', 'i go to work on foot.'],
      acceptApproximate: true,
      explanation: 'Con "foot" usamos "on", no "by": on foot = a pie. → I go to work on foot.',
    },
  ],
  miniTest: [
    {
      id: 'a1-m11-l2-mt1',
      type: 'multiple_choice',
      concept: 'transport vocabulary',
      difficulty: 1,
      prompt: '¿Cómo se dice "barco" en inglés?',
      promptTranslation: 'How do you say "barco" in English?',
      correctAnswer: 'boat',
      options: ['boat', 'bus', 'bike'],
      explanation: '"Boat" significa barco.',
    },
    {
      id: 'a1-m11-l2-mt2',
      type: 'fill_blank',
      concept: 'by + transport',
      difficulty: 2,
      prompt: 'Completa: "We travel to Madrid ___ train."',
      promptTranslation: 'Viajamos a Madrid en tren.',
      correctAnswer: 'by',
      acceptedAnswers: ['By', 'by'],
      explanation: 'Con el transporte usamos "by": by train = en tren.',
    },
    {
      id: 'a1-m11-l2-mt3',
      type: 'multiple_choice',
      concept: 'on foot',
      difficulty: 2,
      prompt: 'Completa: "He goes to school ___ foot."',
      promptTranslation: 'Él va a la escuela a pie.',
      correctAnswer: 'on',
      options: ['on', 'by', 'with'],
      explanation: 'Con "foot" usamos "on": on foot = a pie.',
    },
    {
      id: 'a1-m11-l2-mt4',
      type: 'multiple_choice',
      concept: 'transport vocabulary',
      difficulty: 2,
      prompt: '¿Cuál de estas palabras significa "metro"?',
      promptTranslation: 'Which of these words means "metro"?',
      correctAnswer: 'underground',
      options: ['underground', 'airplane', 'boat'],
      explanation: '"Underground" (y "subway") significa metro. "Airplane" es avión y "boat" es barco.',
    },
    {
      id: 'a1-m11-l2-mt5',
      type: 'translate',
      concept: 'transport review',
      difficulty: 3,
      prompt: 'Traduce: "Ella viaja en avión."',
      correctAnswer: 'She travels by plane.',
      acceptedAnswers: ['She travels by plane', 'She travels by plane.', 'she travels by plane.'],
      acceptApproximate: true,
      explanation: '"Ella viaja" = she travels, "en avión" = by plane.',
    },
  ],
  reviewItems: ['a1-m11-l1'],
  prerequisites: ['a1-m11-l1'],
}
