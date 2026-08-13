import type { Lesson } from '../../types'

export const lesson115MiniTest: Lesson = {
  id: 'a1-m11-l5',
  moduleId: 'm11-places',
  order: 4,
  title: 'Mini-test: lugares y direcciones',
  objective: 'Repasar todo el módulo 11: lugares, medios de transporte, direcciones y preposiciones de lugar.',
  explanation_es: `Este es el repaso final del módulo 11. Repasemos lo más importante:

### Lugares (Places)

shop (tienda), bank (banco), hospital (hospital), school (escuela), library (biblioteca), museum (museo), park (parque), restaurant (restaurante), hotel (hotel), airport (aeropuerto), station (estación), cinema (cine), theatre (teatro), supermarket (supermercado), pharmacy (farmacia), post office (correos), police station (comisaría).

### Medios de transporte

car (coche), bus (autobús), train (tren), plane (avión), bike/bicycle (bici), taxi (taxi), underground/subway (metro), boat (barco), on foot (a pie).

- by + transporte: by car, by bus, by train, by plane.
- on foot = a pie (¡nunca "by foot"!).

### Direcciones

- Excuse me, where is the station? = Disculpe, ¿dónde está la estación?
- How do I get to the museum? = ¿Cómo llego al museo?
- Turn left. / Turn right. = Gire a la izquierda / a la derecha.
- Go straight on. = Siga recto.
- It's on the left / on the right. = Está a la izquierda / a la derecha.
- next to (al lado de), opposite (enfrente de), between (entre).

### Preguntar por lugares

- Is there a...? (singular) → Is there a bank near here?
- Are there any...? (plural) → Are there any restaurants around?`,
  examples: [
    { english: 'Is there a pharmacy near here?', spanish: '¿Hay una farmacia cerca de aquí?', note: 'Is there a...? + singular.' },
    { english: 'I go to work by bus.', spanish: 'Voy al trabajo en autobús.', note: 'by + transport.' },
    { english: 'Excuse me, how do I get to the museum?', spanish: 'Disculpe, ¿cómo llego al museo?', note: 'how do I get to...?' },
    { english: 'Turn left at the bank and go straight on.', spanish: 'Gire a la izquierda en el banco y siga recto.', note: 'turn left + go straight on.' },
    { english: 'The hotel is on the right, opposite the park.', spanish: 'El hotel está a la derecha, enfrente del parque.', note: 'on the right + opposite.' },
  ],
  rule: `**Resumen del módulo 11:**

1. Lugares: shop, bank, hospital, school, library, museum, park, restaurant, hotel, airport, station, cinema, theatre, supermarket, pharmacy, post office, police station.
2. Transporte: by car / by bus / by train / by plane, on foot, take the bus.
3. Direcciones: Turn left. Turn right. Go straight on. It's on the left/right.
4. Preposiciones: next to, opposite, between, in front of, behind.
5. Preguntas: Is there a...? / Are there any...? + respuestas cortas (Yes, there is. / No, there aren't.).`,
  commonMistakes: [
    { wrong: '❌ I go to work by foot.', correct: '✅ I go to work on foot.', explanation: 'Con "foot" usamos "on": on foot = a pie.' },
    { wrong: '❌ Turn to the right.', correct: '✅ Turn right.', explanation: 'Con "turn" no usamos "to": turn left / turn right.' },
    { wrong: '❌ Are there a supermarket near here?', correct: '✅ Is there a supermarket near here? (o: Are there any supermarkets near here?)', explanation: 'Con singular usamos "Is there a...?". Con plural usamos "Are there any...?". No mezclamos "are" con "a".' },
  ],
  vocabulary: [],
  grammarPoints: [
    {
      id: 'gp-m11-review',
      level: 'A1',
      name: 'Module 11 review',
      explanation_es: 'Repaso de: by + transporte, on foot, imperativos de dirección (turn left, go straight on), preposiciones de lugar y preguntas con Is there a...? / Are there any...?.',
      formula: 'by + transport | on foot | Turn left. | Is there a...? | Are there any...?',
      examples: ['I go to work by bus.', 'Turn left at the bank.', 'Is there a pharmacy near here?'],
    },
  ],
  exercises: [
    {
      id: 'a1-m11-l5-ex1',
      type: 'match',
      concept: 'places vocabulary',
      difficulty: 1,
      prompt: 'Relaciona cada lugar con su traducción:',
      pairs: [
        { left: 'station', right: 'estación' },
        { left: 'cinema', right: 'cine' },
        { left: 'pharmacy', right: 'farmacia' },
        { left: 'post office', right: 'oficina de correos' },
        { left: 'police station', right: 'comisaría' },
        { left: 'supermarket', right: 'supermercado' },
      ],
      correctAnswer: 'station=estación, cinema=cine, pharmacy=farmacia, post office=oficina de correos, police station=comisaría, supermarket=supermercado',
      explanation: 'station=estación, cinema=cine, pharmacy=farmacia, post office=oficina de correos, police station=comisaría, supermarket=supermercado.',
    },
    {
      id: 'a1-m11-l5-ex2',
      type: 'match',
      concept: 'transport vocabulary',
      difficulty: 1,
      prompt: 'Relaciona cada transporte con su traducción:',
      pairs: [
        { left: 'train', right: 'tren' },
        { left: 'plane', right: 'avión' },
        { left: 'boat', right: 'barco' },
        { left: 'taxi', right: 'taxi' },
        { left: 'underground', right: 'metro' },
        { left: 'on foot', right: 'a pie' },
      ],
      correctAnswer: 'train=tren, plane=avión, boat=barco, taxi=taxi, underground=metro, on foot=a pie',
      explanation: 'train=tren, plane=avión, boat=barco, taxi=taxi, underground=metro, on foot=a pie.',
    },
    {
      id: 'a1-m11-l5-ex3',
      type: 'fill_blank',
      concept: 'by + transport',
      difficulty: 2,
      prompt: 'Completa: "I go to work ___ bus."',
      promptTranslation: 'Voy al trabajo en autobús.',
      correctAnswer: 'by',
      acceptedAnswers: ['By', 'by'],
      explanation: 'Con el transporte usamos "by": by bus = en autobús.',
    },
    {
      id: 'a1-m11-l5-ex4',
      type: 'fill_blank',
      concept: 'on foot',
      difficulty: 2,
      prompt: 'Completa: "He goes to school ___ foot."',
      promptTranslation: 'Él va a la escuela a pie.',
      correctAnswer: 'on',
      acceptedAnswers: ['On', 'on'],
      explanation: 'Con "foot" usamos "on": on foot = a pie.',
    },
    {
      id: 'a1-m11-l5-ex5',
      type: 'multiple_choice',
      concept: 'giving directions',
      difficulty: 2,
      prompt: 'Completa: "___ straight on and turn right."',
      promptTranslation: 'Siga recto y gire a la derecha.',
      correctAnswer: 'Go',
      options: ['Go', 'Turn', 'Take'],
      explanation: '"Go straight on" significa seguir recto. → Go straight on and turn right.',
    },
    {
      id: 'a1-m11-l5-ex6',
      type: 'reorder',
      concept: 'asking for directions',
      difficulty: 3,
      prompt: 'Ordena las palabras: How / do / I / get / to / the / museum?',
      promptTranslation: '¿Cómo llego al museo?',
      correctAnswer: 'How do I get to the museum?',
      words: ['How', 'do', 'I', 'get', 'to', 'the', 'museum?'],
      explanation: 'La pregunta para pedir direcciones: How do I get to the + lugar?',
    },
    {
      id: 'a1-m11-l5-ex7',
      type: 'multiple_choice',
      concept: 'prepositions of place',
      difficulty: 3,
      prompt: 'Completa: "The hotel is ___ the left."',
      promptTranslation: 'El hotel está a la izquierda.',
      correctAnswer: 'on',
      options: ['on', 'in', 'at'],
      explanation: 'Para decir a qué lado usamos "on": on the left = a la izquierda.',
    },
    {
      id: 'a1-m11-l5-ex8',
      type: 'reading',
      concept: 'directions reading',
      difficulty: 4,
      prompt: 'Lee el diálogo sobre direcciones y responde:',
      reading: {
        text: 'Asking for directions\nA: Excuse me, how do I get to the museum?\nB: Go straight on. Turn left at the bank.\nA: OK.\nB: The museum is on the right, next to the cinema.\nA: Is it far?\nB: No, it isn\'t. It\'s five minutes on foot.\nA: Great! Thank you very much.\nB: You\'re welcome.',
        translation: 'Pidiendo direcciones\nA: Disculpe, ¿cómo llego al museo?\nB: Siga recto. Gire a la izquierda en el banco.\nA: Vale.\nB: El museo está a la derecha, al lado del cine.\nA: ¿Está lejos?\nB: No, no está lejos. Está a cinco minutos a pie.\nA: ¡Genial! Muchas gracias.\nB: De nada.',
        questions: [
          {
            id: 'a1-m11-l5-ex8-q1',
            type: 'multiple_choice',
            concept: 'directions reading',
            difficulty: 4,
            prompt: '¿Qué hace la persona B al principio?',
            correctAnswer: 'Go straight on',
            options: ['Turn left', 'Go straight on', 'Turn right'],
            explanation: 'El texto dice: "Go straight on. Turn left at the bank." Lo primero es "Go straight on".',
          },
          {
            id: 'a1-m11-l5-ex8-q2',
            type: 'multiple_choice',
            concept: 'directions reading',
            difficulty: 4,
            prompt: '¿Dónde está el museo?',
            correctAnswer: 'on the right, next to the cinema',
            options: ['on the right, next to the cinema', 'on the left, next to the bank', 'in front of the station'],
            explanation: 'El texto dice: "The museum is on the right, next to the cinema."',
          },
          {
            id: 'a1-m11-l5-ex8-q3',
            type: 'multiple_choice',
            concept: 'directions reading',
            difficulty: 4,
            prompt: '¿Está lejos el museo?',
            correctAnswer: 'No, it isn\'t',
            options: ['Yes, it is', 'No, it isn\'t', 'It\'s ten minutes on foot'],
            explanation: 'El texto dice: "Is it far? → No, it isn\'t. It\'s five minutes on foot."',
          },
          {
            id: 'a1-m11-l5-ex8-q4',
            type: 'multiple_choice',
            concept: 'directions reading',
            difficulty: 4,
            prompt: '¿Cuántos minutos a pie hay hasta el museo?',
            correctAnswer: 'five',
            options: ['five', 'ten', 'two'],
            explanation: 'El texto dice: "It\'s five minutes on foot."',
          },
        ],
      },
      correctAnswer: 'reading complete',
      explanation: 'Lee el diálogo con atención: la persona B explica cómo llegar al museo (sigue recto, gira a la izquierda) y dice que el museo está a la derecha, al lado del cine, a cinco minutos a pie.',
    },
    {
      id: 'a1-m11-l5-ex9',
      type: 'error_correction',
      concept: 'transport review',
      difficulty: 3,
      prompt: 'Corrige el error: "I go to the city with car."',
      correctAnswer: 'I go to the city by car.',
      acceptedAnswers: ['I go to the city by car', 'I go to the city by car.', 'i go to the city by car.'],
      acceptApproximate: true,
      explanation: 'Para el transporte usamos "by", no "with": by car = en coche.',
    },
    {
      id: 'a1-m11-l5-ex10',
      type: 'multiple_choice',
      concept: 'Is there a...?',
      difficulty: 3,
      prompt: 'Responde: "Are there any restaurants around?" (no)',
      promptTranslation: '¿Hay restaurantes por aquí? (no)',
      correctAnswer: 'No, there aren\'t.',
      options: ['No, there aren\'t.', 'No, there isn\'t.', 'No, there are.'],
      explanation: 'A "Are there any...?" (plural) respondemos con "Yes, there are." o "No, there aren\'t."',
    },
  ],
  miniTest: [
    {
      id: 'a1-m11-l5-mt1',
      type: 'multiple_choice',
      concept: 'places vocabulary',
      difficulty: 1,
      prompt: 'Completa: "I buy food at the ___."',
      promptTranslation: 'Compro comida en el supermercado.',
      correctAnswer: 'supermarket',
      options: ['supermarket', 'police station', 'library'],
      explanation: '"Supermarket" es el supermercado, donde compramos comida.',
    },
    {
      id: 'a1-m11-l5-mt2',
      type: 'fill_blank',
      concept: 'by + transport',
      difficulty: 2,
      prompt: 'Completa: "She travels ___ plane."',
      promptTranslation: 'Ella viaja en avión.',
      correctAnswer: 'by',
      acceptedAnswers: ['By', 'by'],
      explanation: 'Con el transporte usamos "by": by plane = en avión.',
    },
    {
      id: 'a1-m11-l5-mt3',
      type: 'multiple_choice',
      concept: 'giving directions',
      difficulty: 2,
      prompt: 'Completa: "Turn ___ at the bank." (a la derecha)',
      promptTranslation: 'Gire a la derecha en el banco.',
      correctAnswer: 'right',
      options: ['right', 'straight', 'between'],
      explanation: '"Turn right" significa girar a la derecha. → Turn right at the bank.',
    },
    {
      id: 'a1-m11-l5-mt4',
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
      id: 'a1-m11-l5-mt5',
      type: 'translate',
      concept: 'module 11 review',
      difficulty: 4,
      prompt: 'Traduce: "¿Cómo llego a la estación?"',
      correctAnswer: 'How do I get to the station?',
      acceptedAnswers: ['How do I get to the station', 'How do I get to the station?', 'how do i get to the station?'],
      acceptApproximate: true,
      explanation: '"¿Cómo llego a...?" = How do I get to...? + the station.',
    },
    {
      id: 'a1-m11-l5-mt6',
      type: 'multiple_choice',
      concept: 'prepositions of place',
      difficulty: 3,
      prompt: 'Completa: "The park is ___ the museum." (detrás de)',
      promptTranslation: 'El parque está detrás del museo.',
      correctAnswer: 'behind',
      options: ['behind', 'in front of', 'under'],
      explanation: '"Behind" significa detrás de. → The park is behind the museum.',
    },
  ],
  reviewItems: ['a1-m11-l4'],
  prerequisites: ['a1-m11-l4'],
}
