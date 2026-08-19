import type { Lesson } from '../../types'

export const lesson63ModalGetPassive: Lesson = {
  id: 'b1-m6-l3',
  moduleId: 'm6-passive-extended',
  order: 2,
  title: 'Pasiva con modales y pasiva con get',
  objective: 'Formar la pasiva con modales (can/must/should be + participio) y usar la pasiva informal con get + participio.',
  explanation_es: `En esta lección combinamos la voz pasiva con dos estructuras nuevas:

1. PASIVA CON MODALES (can, must, should):
   - modal + be + participio
   - This must be finished today. = Esto debe terminarse hoy.
   - The room can be cleaned later. = La habitación puede limpiarse más tarde.
   - The letters should be sent now. = Las cartas deberían enviarse ahora.

2. PASIVA CON GET (informal):
   - get + participio → resultado de una acción, a menudo inesperada o negativa.
   - I got fired last week. = Me despidieron la semana pasada.
   - She got married in June. = Se casó en junio.
   - He got hurt playing football. = Se hizo daño jugando al fútbol.
   - They got lost in the city. = Se perdieron en la ciudad.

"Get + participio" es una forma INFORMAL de la pasiva, muy común en el habla cotidiana. Equivale a "be + participio" pero con el matiz de "llegar a estar / resultar".

Formas de get en pasado: got (y para otras estructuras, get → got).

En español:
- must be finished = debe terminarse / debe ser terminado
- can be cleaned = puede limpiarse
- get fired = ser despedido
- get married = casarse

¡OJO! Después de modal + be, y después de get, va el PARTICIPIO:
- ✅ must be finished, ✅ can be cleaned
- ✅ got fired, ✅ got married
- ❌ must be finish, ❌ can be clean, ❌ got fire`,
  examples: [
    { english: 'This must be finished today.', spanish: 'Esto debe terminarse hoy.', note: 'must + be + finished.' },
    { english: 'The room can be cleaned later.', spanish: 'La habitación puede limpiarse más tarde.', note: 'can + be + cleaned.' },
    { english: 'The letters should be sent now.', spanish: 'Las cartas deberían enviarse ahora.', note: 'should + be + sent.' },
    { english: 'I got fired last week.', spanish: 'Me despidieron la semana pasada.', note: 'get + fired (informal).' },
    { english: 'She got married in June.', spanish: 'Se casó en junio.', note: 'get + married.' },
    { english: 'He got hurt playing football.', spanish: 'Se hizo daño jugando al fútbol.', note: 'get + hurt.' },
  ],
  rule: `Fórmulas:
Pasiva con modales:
modal + be + participio
- This must be finished today.
- The room can be cleaned later.
- The letters should be sent now.

Pasiva con get (informal):
get + participio
- I got fired last week.
- She got married in June.

Usos de get + participio:
- Resultado de una acción, a menudo inesperado o negativo: get fired, get hurt, get lost.
- Eventos de la vida: get married, get divorced.

OJO:
- Tras modal + be va el PARTICIPIO: must be finished, can be cleaned.
- Tras get va el PARTICIPIO: got fired, got married.`,
  formation: {
    title: 'Cómo se forma la pasiva con modales y la pasiva con get',
    intro: 'La pasiva con modales se forma con modal + be + participio. La pasiva con get (informal) usa get + participio para resultados, a menudo inesperados o negativos.',
    patterns: [
      {
        name: 'Pasiva con modales',
        formula: 'Sujeto + modal (can/must/should) + be + past participle + complemento',
        examples: [
          { english: 'This must be finished today.', spanish: 'Esto debe terminarse hoy.' },
          { english: 'The room can be cleaned later.', spanish: 'La habitación puede limpiarse más tarde.' },
          { english: 'The letters should be sent now.', spanish: 'Las cartas deberían enviarse ahora.' },
        ],
        note: 'El modal no se conjuga: this must be, they must be.',
      },
      {
        name: 'Pasiva con get (informal)',
        formula: 'Sujeto + get (got) + past participle + complemento',
        examples: [
          { english: 'I got fired last week.', spanish: 'Me despidieron la semana pasada.' },
          { english: 'She got married in June.', spanish: 'Se casó en junio.' },
          { english: 'He got hurt playing football.', spanish: 'Se hizo daño jugando al fútbol.' },
          { english: 'They got lost in the city.', spanish: 'Se perdieron en la ciudad.' },
        ],
        note: 'Equivale a "be + participio" con el matiz de "llegar a estar / resultar".',
      },
    ],
    notes: [
      'Tras modal + be y tras get va SIEMPRE el participio pasado: must be finished, got fired (no "must be finish").',
      'get + participio se usa sobre todo en contextos informales y para cambios de vida: get married, get divorced, get lost.',
      'En español: must be finished = debe terminarse; get fired = ser despedido; get married = casarse.',
    ],
  },
  commonMistakes: [
    { wrong: '❌ This must be finish today.', correct: '✅ This must be finished today.', explanation: 'Después de "must be" va el participio: finished, no "finish".' },
    { wrong: '❌ The room can be clean later.', correct: '✅ The room can be cleaned later.', explanation: 'Después de "can be" va el participio: cleaned, no "clean".' },
    { wrong: '❌ The letters should be send now.', correct: '✅ The letters should be sent now.', explanation: 'Después de "should be" va el participio: sent, no "send".' },
    { wrong: '❌ I got fire last week.', correct: '✅ I got fired last week.', explanation: 'Después de "got" va el participio: fired, no "fire".' },
  ],
  vocabulary: [
    { word: 'fired', translation_es: 'despedido (participio de fire)', level: 'B1', category: 'work', partOfSpeech: 'verb (participle)', example: 'I got fired last week.', exampleTranslation: 'Me despidieron la semana pasada.' },
    { word: 'married', translation_es: 'casado (participio de marry)', level: 'B1', category: 'life events', partOfSpeech: 'verb (participle)', example: 'She got married in June.', exampleTranslation: 'Se casó en junio.' },
    { word: 'hurt', translation_es: 'herido, con dolor (participio de hurt)', level: 'B1', category: 'feelings', partOfSpeech: 'verb (participle)', example: 'He got hurt playing football.', exampleTranslation: 'Se hizo daño jugando al fútbol.' },
    { word: 'lost', translation_es: 'perdido (participio de lose)', level: 'A2', category: 'travel', partOfSpeech: 'verb (participle)', example: 'They got lost in the city.', exampleTranslation: 'Se perdieron en la ciudad.' },
    { word: 'sent', translation_es: 'enviado (participio de send)', level: 'A2', category: 'work', partOfSpeech: 'verb (participle)', example: 'The letters should be sent now.', exampleTranslation: 'Las cartas deberían enviarse ahora.' },
    { word: 'cleaned', translation_es: 'limpiado (participio de clean)', level: 'B1', category: 'home', partOfSpeech: 'verb (participle)', example: 'The room can be cleaned later.', exampleTranslation: 'La habitación puede limpiarse más tarde.' },
  ],
  grammarPoints: [
    {
      id: 'gp-modal-get-passive',
      level: 'B1',
      name: 'Modal passive & get passive',
      explanation_es: 'La pasiva con modales se forma con modal + be + participio. La pasiva con get (informal) usa get + participio para resultados, a menudo inesperados: get fired, get married.',
      formula: 'modal + be + past participle | get + past participle',
      examples: ['This must be finished today.', 'The room can be cleaned later.', 'I got fired last week.', 'She got married in June.'],
    },
  ],
  exercises: [
    {
      id: 'b1-m6-l3-ex1',
      type: 'multiple_choice',
      concept: 'modal passive form',
      difficulty: 1,
      prompt: 'Completa: "This must be ___ today."',
      promptTranslation: 'Esto debe terminarse hoy.',
      correctAnswer: 'finished',
      options: ['finished', 'finish', 'finishing'],
      explanation: 'Después de "must be" va el participio: finished. → This must be finished today.',
    },
    {
      id: 'b1-m6-l3-ex2',
      type: 'multiple_choice',
      concept: 'modal passive form',
      difficulty: 1,
      prompt: 'Completa: "The room can be ___ later."',
      promptTranslation: 'La habitación puede limpiarse más tarde.',
      correctAnswer: 'cleaned',
      options: ['cleaned', 'clean', 'cleaning'],
      explanation: 'Después de "can be" va el participio: cleaned. → The room can be cleaned later.',
    },
    {
      id: 'b1-m6-l3-ex3',
      type: 'fill_blank',
      concept: 'modal passive form',
      difficulty: 2,
      prompt: 'Completa: "This work must ___ finished today. (be)',
      promptTranslation: 'Este trabajo debe terminarse hoy.',
      correctAnswer: 'be',
      acceptedAnswers: ['be'],
      explanation: 'Pasiva con modal = modal + be + participio. → This work must be finished today.',
    },
    {
      id: 'b1-m6-l3-ex4',
      type: 'fill_blank',
      concept: 'get passive form',
      difficulty: 2,
      prompt: 'Completa con el participio: "I got ___ (fire) last week."',
      promptTranslation: 'Me despidieron la semana pasada.',
      correctAnswer: 'fired',
      acceptedAnswers: ['fired'],
      explanation: 'Después de "got" va el participio: fired. → I got fired last week.',
    },
    {
      id: 'b1-m6-l3-ex5',
      type: 'fill_blank',
      concept: 'get passive form',
      difficulty: 2,
      prompt: 'Completa con el participio: "She got ___ (marry) in June."',
      promptTranslation: 'Se casó en junio.',
      correctAnswer: 'married',
      acceptedAnswers: ['married'],
      explanation: 'Después de "got" va el participio: married. → She got married in June.',
    },
    {
      id: 'b1-m6-l3-ex6',
      type: 'true_false',
      concept: 'get passive meaning',
      difficulty: 2,
      prompt: 'La pasiva con "get" (get fired, get married) se usa sobre todo en contextos informales.',
      correctAnswer: 'true',
      acceptedAnswers: ['True', 'TRUE', 't'],
      explanation: 'Verdadero. "Get + participio" es una pasiva informal y coloquial, muy común en el habla cotidiana.',
    },
    {
      id: 'b1-m6-l3-ex7',
      type: 'select_correct',
      concept: 'modal passive form',
      difficulty: 3,
      prompt: 'Selecciona la frase correcta:',
      promptTranslation: 'Las cartas deberían enviarse ahora.',
      correctAnswer: 'The letters should be sent now.',
      options: [
        'The letters should be sent now.',
        'The letters should be send now.',
        'The letters should be sending now.',
        'The letters should sends now.',
      ],
      explanation: 'Pasiva con modal = should + be + participio (sent). "Should be send", "sending" y "sends" son incorrectos.',
    },
    {
      id: 'b1-m6-l3-ex8',
      type: 'reorder',
      concept: 'modal passive form',
      difficulty: 3,
      prompt: 'Ordena la frase (pasiva con modal):',
      promptTranslation: 'Esto debe terminarse hoy.',
      words: ['This', 'must', 'be', 'finished', 'today.'],
      correctAnswer: 'This must be finished today.',
      explanation: 'Estructura: sujeto + modal (must) + be + participio (finished) + adverbio. → This must be finished today.',
    },
    {
      id: 'b1-m6-l3-ex9',
      type: 'translate',
      concept: 'modal passive',
      difficulty: 3,
      prompt: 'Traduce: "Esto debe terminarse hoy."',
      correctAnswer: 'This must be finished today.',
      acceptedAnswers: [
        'This must be finished today',
        'This must be finished today.',
        'this must be finished today',
      ],
      acceptApproximate: true,
      explanation: '"Debe terminarse" (pasiva con modal) = must be finished. "hoy" = today.',
    },
    {
      id: 'b1-m6-l3-ex10',
      type: 'translate',
      concept: 'get passive',
      difficulty: 4,
      prompt: 'Traduce: "Me despidieron la semana pasada."',
      correctAnswer: 'I got fired last week.',
      acceptedAnswers: [
        'I got fired last week',
        'I got fired last week.',
        'i got fired last week',
      ],
      acceptApproximate: true,
      explanation: '"Me despidieron" (informal) = I got fired. "la semana pasada" = last week.',
    },
    {
      id: 'b1-m6-l3-ex11',
      type: 'error_correction',
      concept: 'modal passive form',
      difficulty: 3,
      prompt: 'Corrige el error: "This must be finish today."',
      correctAnswer: 'This must be finished today.',
      acceptedAnswers: ['This must be finished today', 'This must be finished today.', 'this must be finished today'],
      acceptApproximate: true,
      explanation: 'Después de "must be" va el participio: finished, no "finish".',
    },
    {
      id: 'b1-m6-l3-ex12',
      type: 'error_correction',
      concept: 'get passive form',
      difficulty: 4,
      prompt: 'Corrige el error: "I got fire last week."',
      correctAnswer: 'I got fired last week.',
      acceptedAnswers: ['I got fired last week', 'I got fired last week.', 'i got fired last week'],
      acceptApproximate: true,
      explanation: 'Después de "got" va el participio: fired, no "fire".',
    },
    {
      id: 'b1-m6-l3-ex13',
      type: 'match',
      concept: 'modal & get passive match',
      difficulty: 3,
      prompt: 'Relaciona cada frase con su traducción:',
      pairs: [
        { left: 'This must be finished today.', right: 'Esto debe terminarse hoy.' },
        { left: 'The room can be cleaned later.', right: 'La habitación puede limpiarse más tarde.' },
        { left: 'The letters should be sent now.', right: 'Las cartas deberían enviarse ahora.' },
        { left: 'I got fired last week.', right: 'Me despidieron la semana pasada.' },
        { left: 'She got married in June.', right: 'Se casó en junio.' },
      ],
      correctAnswer: 'This must be finished today.=Esto debe terminarse hoy., The room can be cleaned later.=La habitación puede limpiarse más tarde., The letters should be sent now.=Las cartas deberían enviarse ahora., I got fired last week.=Me despidieron la semana pasada., She got married in June.=Se casó en junio.',
      explanation: 'Modal + be + participio = pasiva con obligación/posibilidad/consejo. Get + participio = pasiva informal (fired, married).',
    },
    {
      id: 'b1-m6-l3-ex14',
      type: 'listening',
      concept: 'modal & get passive listening',
      difficulty: 3,
      prompt: 'Escuchá el audio y respondé las preguntas (en inglés, sobre lo que dice).',
      correctAnswer: '',
      explanation: 'Tom habla sobre eventos recientes en su vida: perdió su pasaporte viajando, se casó el verano pasado, y ahora debe renovar su documentación de urgencia.',
      listening: {
        audioText:
          "Hi everyone! I\'ve had quite a dramatic week. Last month I got married—it was the happiest day of my life! But then, while traveling in Europe for our honeymoon, I got lost in Paris. We also got our luggage delayed for three days, which was frustrating. Worst of all, my passport got stolen from our hotel room. Now the passport must be replaced urgently, and all the paperwork must be done within two weeks. My wife says our documents should be organized better before we travel again. But don\'t worry, everything can be resolved.",
        audioUrl: '/audio/tts/b1-m6-l3-ex14.mp3',
        questions: [
          {
            id: 'b1-m6-l3-ex14-q1',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'Tom got married last year.',
            correctAnswer: 'false',
            explanation: '"Last month I got married—it was the happiest day of my life!"',
          },
          {
            id: 'b1-m6-l3-ex14-q2',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: '¿Qué suceso negativo ocurrió durante el viaje?',
            correctAnswer: 'Su pasaporte fue robado',
            options: ['Su pasaporte fue robado', 'Se perdió el equipaje', 'Se rompó el hotel'],
            explanation: '"my passport got stolen from our hotel room."',
          },
          {
            id: 'b1-m6-l3-ex14-q3',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What must be done within two weeks?',
            correctAnswer: 'The paperwork must be completed',
            options: ['The paperwork must be completed', 'The honeymoon must continue', 'The wedding must be repeated'],
            explanation: '"all the paperwork must be done within two weeks."',
          },
        ],
      },
    },
    {
      id: 'b1-m6-l3-ex15',
      type: 'writing',
      concept: 'modal & get passive writing',
      difficulty: 3,
      prompt: 'Escribile a un amigo/a contando un evento reciente importante en tu vida (usá "got + participio" para situaciones inesperadas o cambios de vida, y modales pasivos para obligaciones).',
      promptTranslation: 'Write to a friend about an important recent event in your life using get + participle and modal passive.',
      correctAnswer: '',
      explanation: 'Un buen texto mezcla formas informales (got fired, got married, got lost) y modales pasivos (must be done, should be considered), manteniendo un registro narrativo.',
      taskType: 'email',
      targetReader: 'a friend',
      register: 'informal',
      contentPoints: ['Un evento reciente (positivo o negativo) usando "got + participio"', 'Algo que debe hacerse o considerarse después del evento'],
      requiresOwnIdea: true,
      minWords: 60,
      maxWords: 100,
    },
    {
      id: 'b1-m6-l3-ex16',
      type: 'speaking',
      concept: 'modal & get passive pronunciation',
      difficulty: 2,
      prompt: 'Escuchá la frase modelo y repetila en voz alta.',
      correctAnswer: 'I got married in June.',
      explanation: 'Practicá la pronunciación natural de "got married" como una unidad, con entonación declarativa.',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b1-m6-l3-mt1',
      type: 'multiple_choice',
      concept: 'modal passive form',
      difficulty: 1,
      prompt: 'Completa: "This must be ___ today."',
      promptTranslation: 'Esto debe terminarse hoy.',
      correctAnswer: 'finished',
      options: ['finished', 'finish', 'finishing'],
      explanation: 'Después de "must be" va el participio: finished.',
    },
    {
      id: 'b1-m6-l3-mt2',
      type: 'fill_blank',
      concept: 'get passive form',
      difficulty: 2,
      prompt: 'Completa con el participio: "She got ___ (marry) in June."',
      promptTranslation: 'Se casó en junio.',
      correctAnswer: 'married',
      acceptedAnswers: ['married'],
      explanation: 'Después de "got" va el participio: married. → She got married in June.',
    },
    {
      id: 'b1-m6-l3-mt3',
      type: 'error_correction',
      concept: 'modal passive form',
      difficulty: 3,
      prompt: 'Corrige el error: "The room can be clean later."',
      correctAnswer: 'The room can be cleaned later.',
      acceptedAnswers: ['The room can be cleaned later', 'The room can be cleaned later.', 'the room can be cleaned later'],
      acceptApproximate: true,
      explanation: 'Después de "can be" va el participio: cleaned, no "clean".',
    },
    {
      id: 'b1-m6-l3-mt4',
      type: 'translate',
      concept: 'get passive',
      difficulty: 4,
      prompt: 'Traduce: "Se casó en junio."',
      correctAnswer: 'She got married in June.',
      acceptedAnswers: ['She got married in June', 'She got married in June.', 'she got married in june'],
      acceptApproximate: true,
      explanation: '"Se casó" (informal) = She got married. "en junio" = in June.',
    },
    {
      id: 'b1-m6-l3-mt5',
      type: 'select_correct',
      concept: 'modal passive form',
      difficulty: 3,
      prompt: 'Selecciona la frase correcta:',
      promptTranslation: 'Las cartas deberían enviarse ahora.',
      correctAnswer: 'The letters should be sent now.',
      options: [
        'The letters should be sent now.',
        'The letters should be send now.',
        'The letters should sends now.',
        'The letters should be sends now.',
      ],
      explanation: 'Pasiva con modal = should + be + participio (sent).',
    },
  ],
  reviewItems: ['b1-m6-l2'],
  prerequisites: ['b1-m6-l2'],
}
