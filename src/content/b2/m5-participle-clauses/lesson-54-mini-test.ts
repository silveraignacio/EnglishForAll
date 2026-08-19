import type { Lesson } from '../../types'

export const lesson54MiniTest: Lesson = {
  id: 'b2-m5-l4',
  moduleId: 'm5-participle-clauses',
  order: 3,
  title: 'Mini-Test: Participle Clauses & Non-Finite Structures',
  objective: 'Evaluar la comprensión y uso de cláusulas de participio, cláusulas reducidas, y estructuras no finitas en contextos variados.',
  explanation_es: `Este mini-test repasa todos los conceptos del módulo 5:

1. CLÁUSULAS DE -ING (Lección 1):
   - Razón, circunstancia, acción simultánea
   - "After having + participio" para referencia pasada
   - "Being + participio" para estados pasados

2. CLÁUSULAS RELATIVAS REDUCIDAS (Lección 2):
   - -ing para acciones activas: "the man standing"
   - -ed para acciones pasivas: "the letter written"
   - "Rather than" + no-finita
   - Comparativos + que + no-finita

3. VERBOS DE PERCEPCIÓN + -ING (Lección 3):
   - See, hear, watch, notice + objeto + -ing
   - La acción vista u oída en progreso

Ahora vas a practicar estos conceptos en ejercicios variados. Después, en el miniTest final, tendrás un resumen final de los puntos clave.`,
  examples: [
    { english: 'Feeling tired, she left early.', spanish: 'Sintiendo cansancio, se fue temprano.' },
    { english: 'The man standing there is my uncle.', spanish: 'El hombre que está parado ahí es mi tío.' },
    { english: 'I saw him crossing the street.', spanish: 'Lo vi cruzando la calle.' },
    { english: 'After having finished, we went to dinner.', spanish: 'Después de haber terminado, fuimos a cenar.' },
    { english: 'Rather than complain, she stayed quiet.', spanish: 'En lugar de quejarse, se quedó callada.' },
    { english: 'The injured people were taken to the hospital.', spanish: 'Las personas heridas fueron llevadas al hospital.' },
  ],
  rule: `RESUMEN DE ESTRUCTURAS:

1. -ING CLAUSES (razón/circunstancia):
   Feeling tired, she left. / After having finished, we went.

2. REDUCED RELATIVE CLAUSES:
   -ing: The man standing there...
   -ed: The letter written yesterday...

3. RATHER THAN / COMPARATIVOS:
   Rather than go / Rather than going...
   Better to call than email.

4. PERCEPTION VERBS:
   I saw him crossing the street.
   She heard the door closing.`,
  commonMistakes: [
    { wrong: '❌ Feeling tired, the movie was long.', correct: '✅ Feeling tired, I found the movie long.', explanation: 'Sujeto de -ing clause = sujeto de oración principal.' },
    { wrong: '❌ Rather than to go.', correct: '✅ Rather than go.', explanation: 'NO usamos "to" después de "rather than".' },
    { wrong: '❌ I watched her to dance.', correct: '✅ I watched her dance / dancing.', explanation: 'NO usamos "to" después de percepción + objeto.' },
    { wrong: '❌ The man who likes pizza.', correct: '✅ No se puede reducir; queda igual.', explanation: '"Who likes" no se reduce — solo "who is".' },
  ],
  vocabulary: [
    { word: 'participle', translation_es: 'participio', level: 'B2', category: 'grammar', partOfSpeech: 'noun', example: 'The -ing participle is used in many structures.', exampleTranslation: 'El participio -ing se usa en muchas estructuras.' },
    { word: 'finite', translation_es: 'finito', level: 'B2', category: 'grammar', partOfSpeech: 'adjective', example: 'A finite verb has a tense.', exampleTranslation: 'Un verbo finito tiene un tiempo verbal.' },
    { word: 'non-finite', translation_es: 'no finito', level: 'B2', category: 'grammar', partOfSpeech: 'adjective', example: 'Infinitives and participles are non-finite forms.', exampleTranslation: 'Los infinitivos y participios son formas no finitas.' },
    { word: 'to summarize', translation_es: 'resumir', level: 'B2', category: 'vocabulary', partOfSpeech: 'verb', example: 'Let me summarize the main points.', exampleTranslation: 'Déjame resumir los puntos principales.' },
  ],
  grammarPoints: [
    {
      id: 'gp-b2-module5-summary',
      level: 'B2',
      name: 'Module 5 Summary: Participle Clauses & Non-Finite Structures',
      explanation_es: 'Resumen completo de todas las estructuras de participios y formas no finitas del módulo 5.',
      formula: 'Multiple structures covered in lessons 1-3',
      examples: [
        'Feeling tired, she left.',
        'The man standing there is my uncle.',
        'I saw him crossing the street.',
      ],
    },
  ],
  exercises: [
    {
      id: 'b2-m5-l4-ex1',
      type: 'multiple_choice',
      concept: 'module 5 comprehensive',
      difficulty: 3,
      prompt: 'Completa: "___ the broken window, he knew someone had entered."',
      promptTranslation: 'Viendo la ventana rota, supo que alguien había entrado.',
      correctAnswer: 'Seeing',
      options: ['Seeing', 'See', 'Having seen', 'To see'],
      explanation: '-ing clause para razón/circunstancia: "Seeing the broken window..."',
    },
    {
      id: 'b2-m5-l4-ex2',
      type: 'fill_blank',
      concept: 'reduced relative -ed',
      difficulty: 3,
      prompt: 'Completa: "The documents ___ yesterday are very important."',
      promptTranslation: 'Los documentos preparados ayer son muy importantes.',
      correctAnswer: 'prepared',
      options: ['prepare', 'preparing', 'prepared', 'to prepare'],
      explanation: 'Reduced relative: "prepared" = "which were prepared".',
    },
    {
      id: 'b2-m5-l4-ex3',
      type: 'error_correction',
      concept: 'module 5 comprehensive',
      difficulty: 4,
      prompt: 'Encuentra el error: "I watched her to swim in the pool."',
      correctAnswer: 'I watched her swim in the pool. / I watched her swimming in the pool.',
      acceptedAnswers: [
        'I watched her swim in the pool',
        'I watched her swimming in the pool',
        'I watched her swim in the pool.',
        'I watched her swimming in the pool.',
      ],
      acceptApproximate: true,
      explanation: 'Percepción + objeto: NO usamos "to". Es "watched her swim" o "watched her swimming".',
    },
    {
      id: 'b2-m5-l4-ex4',
      type: 'translate',
      concept: 'module 5 comprehensive',
      difficulty: 4,
      prompt: 'Traduce: "Después de haber terminado la reunión, salieron rápidamente."',
      correctAnswer: 'After having finished the meeting, they left quickly.',
      acceptedAnswers: [
        'After having finished the meeting, they left quickly',
        'After having finished the meeting, they left quickly.',
        'After finishing the meeting, they left quickly.',
      ],
      acceptApproximate: true,
      explanation: '"After having + participio" para acción completada en el pasado.',
    },
    {
      id: 'b2-m5-l4-ex5',
      type: 'reorder',
      concept: 'module 5 comprehensive',
      difficulty: 3,
      prompt: 'Ordena las palabras:',
      promptTranslation: 'Oyó a alguien cantando en el pasillo.',
      words: ['She', 'heard', 'someone', 'singing', 'in', 'the', 'hallway.'],
      correctAnswer: 'She heard someone singing in the hallway.',
      explanation: 'Percepción + objeto + -ing: "heard someone singing".',
    },
    {
      id: 'b2-m5-l4-ex6',
      type: 'select_correct',
      concept: 'module 5 comprehensive',
      difficulty: 4,
      prompt: '¿Cuál expresa mejor una acción que ESTÁ EN PROGRESO?',
      correctAnswer: 'I watched the sun setting over the ocean.',
      options: ['I watched the sun set over the ocean.', 'I watched the sun setting over the ocean.', 'I watched the sun to set over the ocean.'],
      explanation: '-ing enfatiza que la acción estaba en progreso cuando la viste.',
    },
    {
      id: 'b2-m5-l4-ex7',
      type: 'multiple_choice',
      concept: 'rather than structure',
      difficulty: 3,
      prompt: 'Completa: "Rather than ___ the bus, I took a taxi."',
      promptTranslation: 'En lugar de tomar el autobús, tomé un taxi.',
      correctAnswer: 'take',
      options: ['take', 'taking', 'to take', 'took'],
      explanation: '"Rather than" + infinitivo sin "to" o -ing. Ambas formas son correctas.',
    },
    {
      id: 'b2-m5-l4-ex8',
      type: 'true_false',
      concept: 'module 5 comprehensive',
      difficulty: 2,
      prompt: 'Las cláusulas de -ing pueden ir al inicio, en el medio, o al final de la oración.',
      correctAnswer: 'true',
      explanation: 'Verdadero. Aunque es más común al inicio, las -ing clauses pueden aparecer en otros lugares con significados diferentes.',
    },
    {
      id: 'b2-m5-l4-ex9',
      type: 'listening',
      concept: 'module 5 listening',
      difficulty: 4,
      prompt: 'Escuchá el audio y respondé las preguntas.',
      correctAnswer: '',
      explanation: 'Un relato que integra cláusulas de participio, cláusulas reducidas y verbos de percepción.',
      listening: {
        audioText:
          "Walking through the market last Saturday, I observed many interesting things. The vendor selling fresh fruit was very friendly. Feeling hungry, I bought some mangoes. Then, I noticed a woman wearing a beautiful handmade dress standing near the textile stall. Watching her examine the fabrics, I realized she was an artist. Having spent an hour browsing, I decided to leave. Rather than go home directly, I stopped at a café. There, I heard someone playing the guitar nearby. The musician playing in the corner was remarkably talented.",
        audioUrl: '/audio/tts/b2-m5-l4-ex9.mp3',
        questions: [
          {
            id: 'b2-m5-l4-ex9-q1',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'The narrator felt hungry and bought fruit.',
            correctAnswer: 'true',
            explanation: '"Feeling hungry, I bought some mangoes."',
          },
          {
            id: 'b2-m5-l4-ex9-q2',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What was the woman wearing?',
            correctAnswer: 'A beautiful handmade dress',
            options: ['Fresh fruit', 'A beautiful handmade dress', 'A guitar'],
            explanation: '"I noticed a woman wearing a beautiful handmade dress."',
          },
          {
            id: 'b2-m5-l4-ex9-q3',
            type: 'select_correct',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What did the narrator do instead of going home directly?',
            correctAnswer: 'Stopped at a café',
            options: ['Stopped at a café', 'Went to the textile stall', 'Left the market'],
            explanation: '"Rather than go home directly, I stopped at a café."',
          },
        ],
      },
    },
    {
      id: 'b2-m5-l4-ex10',
      type: 'writing',
      concept: 'module 5 writing',
      difficulty: 5,
      prompt: 'Escribí un breve relato (150-200 palabras) de un día memorable. Integrá al menos un ejemplo de CADA tipo de estructura que aprendiste en el módulo: (1) una -ing clause de razón, (2) una cláusula relativa reducida, (3) un verbo de percepción + -ing. Sé creativo y usa un tono narrativo.',
      correctAnswer: '',
      explanation: 'Un relato que integra los tres pilares del módulo de forma natural y coherente.',
      taskType: 'story',
      targetReader: 'a friend or family member',
      register: 'informal',
      contentPoints: [
        'Al menos 1 -ing clause de razón/circunstancia',
        'Al menos 1 cláusula relativa reducida (-ing o -ed)',
        'Al menos 1 verbo de percepción + -ing',
        'Narrativa fluida y coherente',
      ],
      requiresOwnIdea: true,
      minWords: 120,
      maxWords: 180,
    },
  ],
  miniTest: [
    {
      id: 'b2-m5-l4-mt1',
      type: 'multiple_choice',
      concept: 'module 5 integration',
      difficulty: 3,
      prompt: 'Completa: "The children ___ in the playground are from my school."',
      promptTranslation: 'Los niños que juegan en el parque son de mi escuela.',
      correctAnswer: 'playing',
      options: ['play', 'playing', 'played', 'to play'],
      explanation: 'Reduced relative clause: "playing" = "who are playing".',
    },
    {
      id: 'b2-m5-l4-mt2',
      type: 'error_correction',
      concept: 'module 5 integration',
      difficulty: 4,
      prompt: 'Corrige: "I caught the bird flying out of the cage and laughed."',
      correctAnswer: 'I caught the bird flying out of the cage and laughed.',
      acceptedAnswers: [
        'I caught the bird flying out of the cage and laughed',
        'I caught the bird flying out of the cage and laughed.',
        'I caught the bird as it flew out of the cage and laughed.',
      ],
      acceptApproximate: true,
      explanation: 'La oración está correcta. "Caught the bird flying" es perfecto (percepción + objeto + -ing).',
    },
    {
      id: 'b2-m5-l4-mt3',
      type: 'true_false',
      concept: 'module 5 integration',
      difficulty: 3,
      prompt: 'La -ing clause puede expresar razón, circunstancia, tiempo (simultaneidad) y causa.',
      correctAnswer: 'true',
      explanation: 'Verdadero. Las -ing clauses son muy versátiles para conectar ideas en contextos B2.',
    },
    {
      id: 'b2-m5-l4-mt4',
      type: 'select_correct',
      concept: 'module 5 integration',
      difficulty: 4,
      prompt: '¿Cuál es INCORRECTA?',
      correctAnswer: 'I watched him to play the guitar.',
      options: [
        'I watched him play the guitar.',
        'I watched him playing the guitar.',
        'I watched him to play the guitar.',
      ],
      explanation: 'Percepción + objeto: nunca usamos "to". Las otras dos formas son correctas.',
    },
  ],
  reviewItems: ['b2-m5-l1', 'b2-m5-l2', 'b2-m5-l3'],
  prerequisites: ['b2-m5-l3'],
}
