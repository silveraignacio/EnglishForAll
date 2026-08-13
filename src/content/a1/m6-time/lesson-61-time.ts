import type { Lesson } from '../../types'

export const lesson61Time: Lesson = {
  id: 'a1-m6-l1',
  moduleId: 'm6-time',
  order: 0,
  title: 'Decir la hora (Telling the time)',
  objective: 'Aprender a preguntar y decir la hora en inglés (o\'clock, half past, quarter past/to, am/pm).',
  explanation_es: `En inglés hay dos formas de decir la hora: la forma "tradicional" y la forma "digital".

### La pregunta

- What time is it? = ¿Qué hora es?

### La hora en punto

- It is three o'clock. = Son las tres en punto.
  Usamos "o'clock" solo con la hora en punto. Ojo: "o'clock" se escribe con apóstrofo.

### Las medias horas y los cuartos

- It is half past three. = Son las tres y media.
  "half past" significa "y media" (30 minutos pasados).
- It is a quarter past three. = Son las tres y cuarto.
  "a quarter past" significa "y cuarto" (15 minutos pasados).
- It is a quarter to four. = Son las tres menos cuarto.
  "a quarter to" significa "menos cuarto" (faltan 15 minutos para la hora siguiente).

  Aviso: en español decimos "las tres menos cuarto", pero en inglés contamos HACIA la hora siguiente: "a quarter to four" (faltan 15 para las cuatro).

### La forma digital

- It is three fifteen. = Son las tres y quince.
- It is 3:15. = Son las 3:15.
  En la forma digital decimos primero la hora y luego los minutos: three fifteen, three thirty, seven forty-five...

### am y pm

- am = de la madrugada y de la mañana (antes del mediodía).
- pm = de la tarde y de la noche (después del mediodía).
- It is 3 p.m. = Son las 3 de la tarde.
- It is 8 a.m. = Son las 8 de la mañana.

### La hora con "at"

Cuando decimos a QUÉ hora hacemos algo, usamos la preposición "at":
- I get up at seven o'clock. = Me levanto a las siete en punto.
- The meeting is at half past ten. = La reunión es a las diez y media.`,
  examples: [
    { english: 'What time is it?', spanish: '¿Qué hora es?', note: 'La pregunta básica para pedir la hora.' },
    { english: 'It is three o\'clock.', spanish: 'Son las tres en punto.', note: '"o\'clock" solo con la hora en punto.' },
    { english: 'It is half past three.', spanish: 'Son las tres y media.', note: '"half past" = 30 minutos pasados.' },
    { english: 'It is a quarter past three.', spanish: 'Son las tres y cuarto.', note: '"a quarter past" = 15 minutos pasados.' },
    { english: 'It is a quarter to four.', spanish: 'Son las tres menos cuarto.', note: '"a quarter to" = faltan 15 para la hora siguiente.' },
    { english: 'It is three fifteen.', spanish: 'Son las tres y quince.', note: 'Forma digital: hora + minutos.' },
    { english: 'I get up at seven o\'clock.', spanish: 'Me levanto a las siete en punto.', note: 'Para decir a qué hora hacemos algo usamos "at".' },
    { english: 'The meeting is at half past ten.', spanish: 'La reunión es a las diez y media.', note: 'at + half past + hora.' },
  ],
  rule: `**¿Qué hora es?**
- What time is it? → It is + hora.

**Formas de decir la hora:**
- En punto: It is + hora + o'clock. (It is three o'clock.)
- Y media: It is half past + hora. (It is half past three.)
- Y cuarto: It is a quarter past + hora. (It is a quarter past three.)
- Menos cuarto: It is a quarter to + hora siguiente. (It is a quarter to four.)
- Digital: It is + hora + minutos. (It is three fifteen.)

**am / pm:**
- am = mañana. pm = tarde/noche.
- It is 3 p.m. = Son las 3 de la tarde.

**Para decir a qué hora haces algo, usa "at":**
- I get up at seven o'clock. / The class starts at 8 a.m.`,
  commonMistakes: [
    { wrong: '❌ It are three o\'clock.', correct: '✅ It is three o\'clock.', explanation: 'Para la hora siempre usamos "it is", nunca "it are", aunque la hora sea plural ("son las...").' },
    { wrong: '❌ It is 3 o\'clock in the afternoon.', correct: '✅ It is 3 p.m.', explanation: 'En inglés es más natural usar "am/pm" que decir "in the afternoon".' },
    { wrong: '❌ It is three and half.', correct: '✅ It is half past three.', explanation: 'El español dice "tres y media", pero el inglés pone "half past" ANTES de la hora: half past three.' },
    { wrong: '❌ I get up seven o\'clock.', correct: '✅ I get up at seven o\'clock.', explanation: 'Para decir a qué hora hacemos algo necesitamos "at": get up at seven o\'clock.' },
  ],
  vocabulary: [
    { word: 'time', translation_es: 'hora, tiempo', level: 'A1', category: 'time', partOfSpeech: 'noun', example: 'What time is it?', exampleTranslation: '¿Qué hora es?' },
    { word: "o'clock", translation_es: 'en punto', level: 'A1', category: 'time', partOfSpeech: 'adverb', example: 'It is three o\'clock.', exampleTranslation: 'Son las tres en punto.' },
    { word: 'half past', translation_es: 'y media', level: 'A1', category: 'time', partOfSpeech: 'adverb', example: 'It is half past three.', exampleTranslation: 'Son las tres y media.' },
    { word: 'quarter past', translation_es: 'y cuarto', level: 'A1', category: 'time', partOfSpeech: 'adverb', example: 'It is a quarter past three.', exampleTranslation: 'Son las tres y cuarto.' },
    { word: 'quarter to', translation_es: 'menos cuarto', level: 'A1', category: 'time', partOfSpeech: 'adverb', example: 'It is a quarter to four.', exampleTranslation: 'Son las tres menos cuarto.' },
    { word: 'am', translation_es: 'de la mañana', level: 'A1', category: 'time', partOfSpeech: 'adverb', example: 'It is 8 a.m.', exampleTranslation: 'Son las 8 de la mañana.' },
    { word: 'pm', translation_es: 'de la tarde / noche', level: 'A1', category: 'time', partOfSpeech: 'adverb', example: 'It is 3 p.m.', exampleTranslation: 'Son las 3 de la tarde.' },
    { word: 'hour', translation_es: 'hora (unidad)', level: 'A1', category: 'time', partOfSpeech: 'noun', example: 'I sleep eight hours.', exampleTranslation: 'Duermo ocho horas.' },
    { word: 'minute', translation_es: 'minuto', level: 'A1', category: 'time', partOfSpeech: 'noun', example: 'The bus is ten minutes late.', exampleTranslation: 'El autobús llega diez minutos tarde.' },
    { word: 'clock', translation_es: 'reloj (de pared)', level: 'A1', category: 'time', partOfSpeech: 'noun', example: 'The clock is on the wall.', exampleTranslation: 'El reloj está en la pared.' },
  ],
  grammarPoints: [
    {
      id: 'gp-telling-time-at',
      level: 'A1',
      name: 'Telling the time — "at" + time',
      explanation_es: 'Para preguntar la hora usamos "What time is it?" y respondemos "It is + hora". Para decir a qué hora hacemos algo usamos la preposición "at" antes de la hora.',
      formula: 'What time is it? → It is + time | action + at + time',
      examples: ['What time is it? — It is half past ten.', 'I get up at seven o\'clock.', 'The meeting is at 3 p.m.'],
    },
  ],
  exercises: [
    {
      id: 'a1-m6-l1-ex1',
      type: 'match',
      concept: 'telling time - text vs digital',
      difficulty: 2,
      prompt: 'Relaciona cada forma escrita de la hora con su hora digital.',
      promptTranslation: 'Match each written time with its digital time.',
      correctAnswer: '',
      pairs: [
        { left: 'It is three o\'clock.', right: '3:00' },
        { left: 'It is half past three.', right: '3:30' },
        { left: 'It is a quarter past three.', right: '3:15' },
        { left: 'It is a quarter to four.', right: '3:45' },
        { left: 'It is three twenty.', right: '3:20' },
        { left: 'It is five to four.', right: '3:55' },
      ],
      explanation: 'o\'clock = :00. half past = :30. a quarter past = :15. a quarter to = :45 de la hora siguiente. "three twenty" = 3:20 y "five to four" = faltan 5 para las 4 (3:55).',
    },
    {
      id: 'a1-m6-l1-ex2',
      type: 'multiple_choice',
      concept: 'telling time - o\'clock',
      difficulty: 1,
      prompt: '¿Cómo se dice "Son las tres en punto"?',
      promptTranslation: 'How do you say 3:00?',
      correctAnswer: 'It is three o\'clock.',
      options: ['It is three o\'clock.', 'It is three thirty.', 'It is three fifteen.'],
      explanation: 'Con la hora en punto usamos "o\'clock": It is three o\'clock.',
    },
    {
      id: 'a1-m6-l1-ex3',
      type: 'multiple_choice',
      concept: 'telling time - half past',
      difficulty: 1,
      prompt: '¿Cómo se dice "Son las tres y media"?',
      promptTranslation: 'How do you say 3:30?',
      correctAnswer: 'It is half past three.',
      options: ['It is half past three.', 'It is a quarter past three.', 'It is three o\'clock.'],
      explanation: 'Para las 3:30 usamos "half past three" (y media).',
    },
    {
      id: 'a1-m6-l1-ex4',
      type: 'fill_blank',
      concept: 'telling time - at + time',
      difficulty: 2,
      prompt: 'Completa: "I get up ___ seven o\'clock."',
      promptTranslation: 'Me levanto a las siete en punto.',
      correctAnswer: 'at',
      acceptedAnswers: ['At'],
      explanation: 'Para decir a qué hora hacemos algo usamos "at": get up at seven o\'clock.',
    },
    {
      id: 'a1-m6-l1-ex5',
      type: 'fill_blank',
      concept: 'telling time - a quarter past',
      difficulty: 2,
      prompt: 'Completa: "It is a quarter ___ three." (3:15)',
      promptTranslation: 'Son las tres y cuarto.',
      correctAnswer: 'past',
      acceptedAnswers: ['Past'],
      explanation: 'Para "y cuarto" usamos "a quarter past": It is a quarter past three.',
    },
    {
      id: 'a1-m6-l1-ex6',
      type: 'fill_blank',
      concept: 'telling time - a quarter to',
      difficulty: 2,
      prompt: 'Completa: "It is a quarter ___ four." (3:45)',
      promptTranslation: 'Son las tres menos cuarto.',
      correctAnswer: 'to',
      acceptedAnswers: ['To'],
      explanation: 'Para "menos cuarto" usamos "a quarter to" + la hora siguiente: It is a quarter to four.',
    },
    {
      id: 'a1-m6-l1-ex7',
      type: 'multiple_choice',
      concept: 'telling time - am / pm',
      difficulty: 2,
      prompt: 'Son las 3 de la tarde. ¿Qué decimos?',
      promptTranslation: 'It is 3 in the afternoon.',
      correctAnswer: 'It is 3 p.m.',
      options: ['It is 3 p.m.', 'It is 3 a.m.', 'It is 3 o\'clock p.m.'],
      explanation: 'Para la tarde usamos "pm". "o\'clock" no se combina con am/pm.',
    },
    {
      id: 'a1-m6-l1-ex8',
      type: 'reorder',
      concept: 'telling time - question',
      difficulty: 2,
      prompt: 'Ordena la pregunta: What / time / is / it?',
      promptTranslation: '¿Qué hora es?',
      correctAnswer: 'What time is it?',
      words: ['What', 'time', 'is', 'it?'],
      explanation: 'La pregunta es "What time is it?" = ¿Qué hora es?',
    },
    {
      id: 'a1-m6-l1-ex9',
      type: 'translate',
      concept: 'telling time - half past',
      difficulty: 3,
      prompt: 'Traduce: "Son las dos y media."',
      correctAnswer: 'It is half past two.',
      acceptedAnswers: ['It is half past two', 'it is half past two.', 'It is 2:30.'],
      acceptApproximate: true,
      explanation: '"Y media" se dice "half past" + hora: It is half past two. (También válido: It is 2:30.)',
    },
    {
      id: 'a1-m6-l1-ex10',
      type: 'translate',
      concept: 'telling time - a quarter to',
      difficulty: 4,
      prompt: 'Traduce: "Son las siete menos cuarto."',
      correctAnswer: 'It is a quarter to seven.',
      acceptedAnswers: ['It is a quarter to seven', 'it is a quarter to seven.', 'It is 6:45.'],
      acceptApproximate: true,
      explanation: '"Menos cuarto" se dice "a quarter to" + la hora siguiente: It is a quarter to seven. (También válido: It is 6:45.)',
    },
  ],
  miniTest: [
    {
      id: 'a1-m6-l1-mt1',
      type: 'multiple_choice',
      concept: 'telling time - o\'clock',
      difficulty: 1,
      prompt: '¿Cómo se dice "Son las nueve en punto"?',
      promptTranslation: 'How do you say 9:00?',
      correctAnswer: 'It is nine o\'clock.',
      options: ['It is nine o\'clock.', 'It is half past nine.', 'It is a quarter to nine.'],
      explanation: 'La hora en punto se dice con "o\'clock": It is nine o\'clock.',
    },
    {
      id: 'a1-m6-l1-mt2',
      type: 'fill_blank',
      concept: 'telling time - at + time',
      difficulty: 2,
      prompt: 'Completa: "The class starts ___ eight o\'clock."',
      promptTranslation: 'La clase empieza a las ocho en punto.',
      correctAnswer: 'at',
      acceptedAnswers: ['At'],
      explanation: 'Para decir a qué hora pasa algo usamos "at": at eight o\'clock.',
    },
    {
      id: 'a1-m6-l1-mt3',
      type: 'multiple_choice',
      concept: 'telling time - half past',
      difficulty: 2,
      prompt: '¿Cómo se dice "Son las cinco y media"?',
      promptTranslation: 'How do you say 5:30?',
      correctAnswer: 'It is half past five.',
      options: ['It is half past five.', 'It is a quarter past five.', 'It is five o\'clock.'],
      explanation: 'Las 5:30 se dicen "half past five" (y media).',
    },
    {
      id: 'a1-m6-l1-mt4',
      type: 'reorder',
      concept: 'telling time - a quarter to',
      difficulty: 3,
      prompt: 'Ordena: It / is / a / quarter / to / six',
      promptTranslation: 'Son las seis menos cuarto.',
      correctAnswer: 'It is a quarter to six.',
      words: ['It', 'is', 'a', 'quarter', 'to', 'six'],
      explanation: '"Menos cuarto" = a quarter to + hora siguiente: It is a quarter to six.',
    },
    {
      id: 'a1-m6-l1-mt5',
      type: 'translate',
      concept: 'telling time - basic',
      difficulty: 3,
      prompt: 'Traduce: "Son las tres en punto."',
      correctAnswer: 'It is three o\'clock.',
      acceptedAnswers: ['It is three o\'clock', 'it is three o\'clock.', 'It is 3:00.'],
      acceptApproximate: true,
      explanation: 'La hora en punto se dice con "o\'clock": It is three o\'clock. (También válido: It is 3:00.)',
    },
  ],
  reviewItems: ['a1-m5-l6'],
  prerequisites: ['a1-m5-l6'],
}
