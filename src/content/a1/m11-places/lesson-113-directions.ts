import type { Lesson } from '../../types'

export const lesson113Directions: Lesson = {
  id: 'a1-m11-l3',
  moduleId: 'm11-places',
  order: 2,
  title: 'Pedir y dar direcciones',
  objective: 'Aprender a preguntar dónde está un lugar y a dar y recibir direcciones sencillas.',
  explanation_es: `Cuando estamos en una ciudad nueva necesitamos preguntar dónde están los lugares y entender las indicaciones. Veamos las frases más útiles.

### Para preguntar dónde está un lugar

- **Excuse me, where is the station?** = Disculpe, ¿dónde está la estación?
- **How do I get to the museum?** = ¿Cómo llego al museo?

### Para dar direcciones

- **Turn left.** = Gire a la izquierda.
- **Turn right.** = Gire a la derecha.
- **Go straight on.** = Siga recto.
- **It's on the left.** = Está a la izquierda.
- **It's on the right.** = Está a la derecha.

### Para decir dónde está respecto a otros lugares

- **next to** = al lado de (The bank is next to the shop.)
- **opposite** = enfrente de (The hotel is opposite the station.)
- **between** = entre (The cinema is between the bank and the park.)

Ejemplos:
- Excuse me, where is the station? = Disculpe, ¿dónde está la estación?
- Turn left at the bank. = Gire a la izquierda en el banco.
- Go straight on and turn right. = Siga recto y gire a la derecha.
- The hotel is on the left. = El hotel está a la izquierda.

IMPORTANTE: "Excuse me" es la forma cortés de llamar la atención de alguien en la calle. Siempre lo usamos para empezar la conversación.`,
  examples: [
    { english: 'Excuse me, where is the station?', spanish: 'Disculpe, ¿dónde está la estación?', note: 'Excuse me = disculpe (para llamar la atención).' },
    { english: 'How do I get to the museum?', spanish: '¿Cómo llego al museo?', note: 'How do I get to...? = ¿Cómo llego a...?' },
    { english: 'Turn left at the bank.', spanish: 'Gire a la izquierda en el banco.', note: 'turn left = girar a la izquierda.' },
    { english: 'Go straight on and turn right.', spanish: 'Siga recto y gire a la derecha.', note: 'go straight on = seguir recto.' },
    { english: 'The hotel is on the left.', spanish: 'El hotel está a la izquierda.', note: 'on the left = a la izquierda.' },
    { english: 'The cinema is between the bank and the park.', spanish: 'El cine está entre el banco y el parque.', note: 'between = entre.' },
  ],
  rule: `**Preguntar por un lugar:**
- Excuse me, where is the + lugar? → Excuse me, where is the station?
- How do I get to the + lugar? → How do I get to the museum?

**Dar direcciones (imperativos):**
- Turn left. = Gire a la izquierda.
- Turn right. = Gire a la derecha.
- Go straight on. = Siga recto.
- It's on the left. / It's on the right. = Está a la izquierda / a la derecha.

**Posición respecto a otros lugares:**
- next to = al lado de → The bank is next to the shop.
- opposite = enfrente de → The hotel is opposite the station.
- between = entre → The cinema is between the bank and the park.

Recordatorio: "turn left" y "turn right" van SIN "to". No decimos "turn to the left".`,
  commonMistakes: [
    { wrong: '❌ Turn to the left.', correct: '✅ Turn left.', explanation: 'Con "turn" no usamos "to": decimos "turn left" o "turn right", sin preposición.' },
    { wrong: '❌ I get to how?', correct: '✅ How do I get to...?', explanation: 'Para preguntar cómo llegar usamos "How do I get to...?" al principio: How do I get to the station?' },
    { wrong: '❌ Excuse me, where is station?', correct: '✅ Excuse me, where is the station?', explanation: 'Necesitamos "the" antes del lugar: where is the station, where is the museum.' },
  ],
  vocabulary: [
    { word: 'left', translation_es: 'izquierda', level: 'A1', category: 'directions', partOfSpeech: 'noun', example: 'Turn left at the bank.', exampleTranslation: 'Gire a la izquierda en el banco.' },
    { word: 'right', translation_es: 'derecha', level: 'A1', category: 'directions', partOfSpeech: 'noun', example: 'The hotel is on the right.', exampleTranslation: 'El hotel está a la derecha.' },
    { word: 'straight on', translation_es: 'recto, todo recto', level: 'A1', category: 'directions', partOfSpeech: 'adverb', example: 'Go straight on.', exampleTranslation: 'Siga recto.' },
    { word: 'next to', translation_es: 'al lado de', level: 'A1', category: 'prepositions', partOfSpeech: 'preposition', example: 'The bank is next to the shop.', exampleTranslation: 'El banco está al lado de la tienda.' },
    { word: 'opposite', translation_es: 'enfrente de', level: 'A1', category: 'prepositions', partOfSpeech: 'preposition', example: 'The hotel is opposite the station.', exampleTranslation: 'El hotel está enfrente de la estación.' },
    { word: 'between', translation_es: 'entre', level: 'A1', category: 'prepositions', partOfSpeech: 'preposition', example: 'The cinema is between the bank and the park.', exampleTranslation: 'El cine está entre el banco y el parque.' },
    { word: 'Excuse me', translation_es: 'disculpe, perdone', level: 'A1', category: 'directions', partOfSpeech: 'phrase', example: 'Excuse me, where is the station?', exampleTranslation: 'Disculpe, ¿dónde está la estación?' },
    { word: 'turn', translation_es: 'girar', level: 'A1', category: 'directions', partOfSpeech: 'verb', example: 'Turn left at the bank.', exampleTranslation: 'Gire a la izquierda en el banco.' },
    { word: 'corner', translation_es: 'esquina', level: 'A1', category: 'directions', partOfSpeech: 'noun', example: 'The shop is on the corner.', exampleTranslation: 'La tienda está en la esquina.' },
  ],
  grammarPoints: [
    {
      id: 'gp-directions-imperatives',
      level: 'A1',
      name: 'Imperatives for directions',
      explanation_es: 'Para dar direcciones usamos el imperativo: el verbo sin sujeto. Turn left. Turn right. Go straight on.',
      formula: 'Verb (turn, go) + direction',
      examples: ['Turn left.', 'Turn right.', 'Go straight on.'],
    },
    {
      id: 'gp-how-do-i-get-to',
      level: 'A1',
      name: 'How do I get to...?',
      explanation_es: 'Para preguntar cómo llegar a un lugar usamos "How do I get to the + lugar?" al principio de la pregunta.',
      formula: 'How do I get to the + place?',
      examples: ['How do I get to the museum?', 'How do I get to the station?'],
    },
  ],
  exercises: [
    {
      id: 'a1-m11-l3-ex1',
      type: 'multiple_choice',
      concept: 'asking for directions',
      difficulty: 1,
      prompt: 'Completa: "Excuse me, ___ is the station?"',
      promptTranslation: 'Disculpe, ¿dónde está la estación?',
      correctAnswer: 'where',
      options: ['where', 'what', 'who'],
      explanation: 'Para preguntar dónde está un lugar usamos "where": Where is the station?',
    },
    {
      id: 'a1-m11-l3-ex2',
      type: 'multiple_choice',
      concept: 'giving directions',
      difficulty: 1,
      prompt: 'Completa: "___ straight on."',
      promptTranslation: 'Siga recto.',
      correctAnswer: 'Go',
      options: ['Go', 'Turn', 'Take'],
      explanation: 'Para decir "siga recto" usamos "go": Go straight on.',
    },
    {
      id: 'a1-m11-l3-ex3',
      type: 'multiple_choice',
      concept: 'giving directions',
      difficulty: 2,
      prompt: 'Completa: "Turn ___ at the bank." (a la izquierda)',
      promptTranslation: 'Gire a la izquierda en el banco.',
      correctAnswer: 'left',
      options: ['left', 'on', 'straight'],
      explanation: '"Turn left" significa girar a la izquierda. → Turn left at the bank.',
    },
    {
      id: 'a1-m11-l3-ex4',
      type: 'multiple_choice',
      concept: 'giving directions',
      difficulty: 2,
      prompt: 'Completa: "The hotel is ___ the left."',
      promptTranslation: 'El hotel está a la izquierda.',
      correctAnswer: 'on',
      options: ['on', 'in', 'at'],
      explanation: 'Para decir a qué lado está algo usamos "on": on the left / on the right.',
    },
    {
      id: 'a1-m11-l3-ex5',
      type: 'multiple_choice',
      concept: 'prepositions of place',
      difficulty: 3,
      prompt: 'Completa: "The cinema is ___ the bank and the park." (entre)',
      promptTranslation: 'El cine está entre el banco y el parque.',
      correctAnswer: 'between',
      options: ['between', 'opposite', 'next to'],
      explanation: '"Between" significa entre (dos cosas). → The cinema is between the bank and the park.',
    },
    {
      id: 'a1-m11-l3-ex6',
      type: 'reorder',
      concept: 'asking for directions',
      difficulty: 2,
      prompt: 'Ordena las palabras: Excuse / me, / where / is / the / station?',
      promptTranslation: 'Disculpe, ¿dónde está la estación?',
      correctAnswer: 'Excuse me, where is the station?',
      words: ['Excuse me,', 'where', 'is', 'the', 'station?'],
      explanation: 'Primero "Excuse me" para llamar la atención, luego la pregunta: where is the station?',
    },
    {
      id: 'a1-m11-l3-ex7',
      type: 'reorder',
      concept: 'giving directions',
      difficulty: 3,
      prompt: 'Ordena las palabras: Go / straight / on / and / turn / right.',
      promptTranslation: 'Siga recto y gire a la derecha.',
      correctAnswer: 'Go straight on and turn right.',
      words: ['Go', 'straight', 'on', 'and', 'turn', 'right.'],
      explanation: 'Primero la instrucción "Go straight on", luego "and", luego "turn right".',
    },
    {
      id: 'a1-m11-l3-ex8',
      type: 'match',
      concept: 'questions and responses',
      difficulty: 3,
      prompt: 'Relaciona cada pregunta con la respuesta adecuada.',
      pairs: [
        { left: 'Excuse me, where is the station?', right: 'Go straight on and turn left.' },
        { left: 'How do I get to the museum?', right: 'It\'s opposite the bank.' },
        { left: 'Is the hotel on the left?', right: 'Yes, it is.' },
        { left: 'Turn left at the bank?', right: 'No, turn right.' },
        { left: 'Where is the cinema?', right: 'It\'s between the bank and the park.' },
      ],
      correctAnswer: 'where is the station=Go straight on and turn left; How do I get to the museum=It\'s opposite the bank; Is the hotel on the left?=Yes, it is; Turn left at the bank?=No, turn right; Where is the cinema?=It\'s between the bank and the park',
      explanation: 'A una pregunta de dirección le respondemos con la indicación correspondiente: la estación → sigue recto y gira; el museo → está enfrente del banco; etc.',
    },
    {
      id: 'a1-m11-l3-ex9',
      type: 'translate',
      concept: 'giving directions',
      difficulty: 3,
      prompt: 'Traduce: "Gire a la izquierda."',
      correctAnswer: 'Turn left.',
      acceptedAnswers: ['Turn left', 'Turn left.', 'turn left.'],
      acceptApproximate: true,
      explanation: '"Girar a la izquierda" = turn left (sin "to").',
    },
    {
      id: 'a1-m11-l3-ex10',
      type: 'error_correction',
      concept: 'turn + direction',
      difficulty: 4,
      prompt: 'Corrige el error: "Turn to the left at the bank."',
      correctAnswer: 'Turn left at the bank.',
      acceptedAnswers: ['Turn left at the bank', 'Turn left at the bank.', 'turn left at the bank.'],
      acceptApproximate: true,
      explanation: 'Con "turn" no usamos "to": decimos "turn left" o "turn right". → Turn left at the bank.',
    },
  ],
  miniTest: [
    {
      id: 'a1-m11-l3-mt1',
      type: 'multiple_choice',
      concept: 'asking for directions',
      difficulty: 1,
      prompt: '¿Cómo empezamos una pregunta a un desconocido en la calle?',
      promptTranslation: 'How do we start a question to a stranger on the street?',
      correctAnswer: 'Excuse me',
      options: ['Excuse me', 'Sorry me', 'Hello me'],
      explanation: 'Usamos "Excuse me" (disculpe) para llamar la atención cortésmente.',
    },
    {
      id: 'a1-m11-l3-mt2',
      type: 'multiple_choice',
      concept: 'giving directions',
      difficulty: 2,
      prompt: 'Completa: "It\'s ___ the right."',
      promptTranslation: 'Está a la derecha.',
      correctAnswer: 'on',
      options: ['on', 'in', 'at'],
      explanation: 'Usamos "on": on the right = a la derecha.',
    },
    {
      id: 'a1-m11-l3-mt3',
      type: 'reorder',
      concept: 'asking for directions',
      difficulty: 2,
      prompt: 'Ordena las palabras: How / do / I / get / to / the / museum?',
      promptTranslation: '¿Cómo llego al museo?',
      correctAnswer: 'How do I get to the museum?',
      words: ['How', 'do', 'I', 'get', 'to', 'the', 'museum?'],
      explanation: 'La pregunta para pedir direcciones: How do I get to the + lugar?',
    },
    {
      id: 'a1-m11-l3-mt4',
      type: 'multiple_choice',
      concept: 'prepositions of place',
      difficulty: 3,
      prompt: 'Completa: "The hotel is ___ the station." (enfrente de)',
      promptTranslation: 'El hotel está enfrente de la estación.',
      correctAnswer: 'opposite',
      options: ['opposite', 'between', 'on'],
      explanation: '"Opposite" significa enfrente de. → The hotel is opposite the station.',
    },
    {
      id: 'a1-m11-l3-mt5',
      type: 'translate',
      concept: 'directions review',
      difficulty: 4,
      prompt: 'Traduce: "¿Cómo llego a la estación?"',
      correctAnswer: 'How do I get to the station?',
      acceptedAnswers: ['How do I get to the station', 'How do I get to the station?', 'how do i get to the station?'],
      acceptApproximate: true,
      explanation: '"¿Cómo llego a...?" = How do I get to...? + the station.',
    },
  ],
  reviewItems: ['a1-m11-l2'],
  prerequisites: ['a1-m11-l2'],
}
