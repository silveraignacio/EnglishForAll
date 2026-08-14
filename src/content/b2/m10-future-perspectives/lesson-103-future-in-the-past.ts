import type { Lesson } from '../../types'

export const lesson103FutureInThePast: Lesson = {
  id: 'b2-m10-l3',
  moduleId: 'm10-future-perspectives',
  order: 2,
  title: 'Future in the Past: perspectivas desde el pasado',
  objective: 'Expresar cómo se veía el futuro desde un punto en el pasado, usando "was/were about to", "was/were on the point of" y presente continuo con sentido futuro.',
  explanation_es: `En este tema exploramos una idea que combina PASADO y FUTURO: cómo hablamos del futuro desde el punto de vista de algo que ya ocurrió. Imaginá una conversación en el pasado donde alguien estaba a punto de hacer algo, o tenía planes futuros. Ahora, desde nuestro presente, narramos cómo se veía ese futuro entonces.

Estructura principal:
- was / were + about to + infinitivo → estaba a punto de (acción inminente en el pasado)
- was / were + on the point of + -ing → estaba en el punto de (a punto de)
- was / were + just + about to + infinitivo → estaba justo a punto de (más inmediato aún)
- presente continuo con rango temporal futuro (viewed from past) → She was leaving tomorrow (desde la perspectiva de ayer, mañana era futuro)

Ejemplos:
- I was about to call you when you walked in. = Estaba a punto de llamarte cuando entraste.
- She was on the point of leaving when the phone rang. = Estaba en el punto de irse cuando sonó el teléfono.
- She was just about to say something when we interrupted. = Estaba justo a punto de decir algo cuando interrumpimos.
- He said he was coming home tomorrow. = Dijo que venía a casa mañana. (Desde la perspectiva pasada, "mañana" era futuro.)

Puntos importantes:

1. "Was/were about to" expresa algo que ESTABA POR OCURRIR pero NO ocurrió (fue interrumpido o no sucedió). Es la forma más común.

2. "Was/were on the point of" es similar pero más literario o formal. Se usa con gerundio (-ing).

3. "Just about to" añade urgencia: "estaba justo a punto de" (todavía más inminente).

4. El presente continuo (was/were + -ing) también funciona para futuro desde el pasado SOLO si el contexto indica un acuerdo o plan futuro claro. "She was leaving tomorrow" = Tenía planeado irse mañana (visto desde ayer).

5. No confundir con past continuous simple (que solo habla de algo que estaba ocurriendo): "He was eating" (estaba comiendo ahora). Aquí agregamos la noción de futuro al tiempo pasado.

6. Se usa mucho en narrativa, reportes, y cuando necesitás cambiar de perspectiva temporal en una historia.`,
  examples: [
    { english: 'I was about to leave when you called.', spanish: 'Estaba a punto de irme cuando llamaste.' },
    { english: 'She was on the point of quitting her job.', spanish: 'Estaba en el punto de renunciar a su trabajo.' },
    { english: 'We were just about to start the meeting when he arrived.', spanish: 'Estábamos justo a punto de empezar la reunión cuando llegó.' },
    { english: 'He said he was coming home that evening.', spanish: 'Dijo que venía a casa esa noche.' },
    { english: 'They were about to sign the contract when they discovered an error.', spanish: 'Estaban a punto de firmar el contrato cuando descubrieron un error.' },
    { english: 'She was on the point of crying when we tried to cheer her up.', spanish: 'Estaba en el punto de llorar cuando intentamos animarla.' },
  ],
  rule: `Fórmula del futuro en el pasado:

1. "Was/Were about to + infinitivo"
subject + was/were + about to + verb (infinitive)
I was about to call. = Estaba a punto de llamar.

2. "Was/Were on the point of + -ing"
subject + was/were + on the point of + verb (-ing)
She was on the point of leaving. = Estaba en el punto de irse.

3. "Was/Were just about to + infinitivo"
subject + was/were + just + about to + verb (infinitive)
We were just about to start. = Estábamos justo a punto de empezar.

4. Presente continuo con rango futuro (visto desde el pasado)
subject + was/were + -ing (con contexto temporal que muestra futuro)
He was leaving tomorrow. = Tenía planeado irse mañana. (Dicho/visto ayer.)

Reglas:
- "About to" y "just about to" usan infinitivo (sin "to" adicional después).
- "On the point of" usa gerundio (-ing).
- Solo usá presente continuo para futuro desde el pasado si hay un contexto claro de plan o acuerdo.`,
  commonMistakes: [
    { wrong: '❌ I was about leaving when you called.', correct: '✅ I was about to leave when you called.', explanation: 'Es "about to + infinitivo", no "about + -ing".' },
    { wrong: '❌ She was on the point to leave.', correct: '✅ She was on the point of leaving.', explanation: '"On the point of" siempre va con gerundio (-ing), no "to + infinitivo".' },
    { wrong: '❌ We were just about call him.', correct: '✅ We were just about to call him.', explanation: 'Falta "to": just about TO call.' },
    { wrong: '❌ He was leaving tomorrow (sin contexto claro de plan).', correct: '✅ He was going to leave tomorrow. / He said he was leaving tomorrow.', explanation: 'Presente continuo para futuro desde pasado necesita contexto explícito de plan o acuerdo.' },
  ],
  vocabulary: [
    { word: 'imminent', translation_es: 'inminente', level: 'B2', category: 'time', partOfSpeech: 'adjective', example: 'The arrival was imminent.', exampleTranslation: 'La llegada era inminente.' },
    { word: 'to interrupt', translation_es: 'interrumpir', level: 'B2', category: 'verbs', partOfSpeech: 'verb', example: 'The phone call interrupted our plan.', exampleTranslation: 'La llamada interrumpió nuestro plan.' },
    { word: 'on the verge of', translation_es: 'al borde de', level: 'B2', category: 'phrases', partOfSpeech: 'phrase', example: 'We were on the verge of giving up.', exampleTranslation: 'Estábamos al borde de rendirnos.' },
    { word: 'perspective', translation_es: 'perspectiva', level: 'B2', category: 'nouns', partOfSpeech: 'noun', example: 'From yesterday\'s perspective, today was future.', exampleTranslation: 'Desde la perspectiva de ayer, hoy era futuro.' },
    { word: 'to abandon', translation_es: 'abandonar', level: 'B2', category: 'verbs', partOfSpeech: 'verb', example: 'She was about to abandon the project.', exampleTranslation: 'Estaba a punto de abandonar el proyecto.' },
    { word: 'narrative', translation_es: 'narrativa', level: 'B2', category: 'nouns', partOfSpeech: 'noun', example: 'In the narrative, he was leaving town.', exampleTranslation: 'En la narrativa, se iba del pueblo.' },
  ],
  grammarPoints: [
    {
      id: 'gp-b2-future-in-the-past',
      level: 'B2',
      name: 'Future in the Past',
      explanation_es: 'Expresar el futuro desde la perspectiva de un momento pasado: "was about to", "was on the point of", presente continuo con rango futuro.',
      formula: 'was/were about to / on the point of + verb',
      examples: [
        'I was about to call you.',
        'She was on the point of leaving.',
        'He was leaving tomorrow (from yesterday\'s view).',
      ],
    },
  ],
  exercises: [
    {
      id: 'b2-m10-l3-ex1',
      type: 'multiple_choice',
      concept: 'was about to',
      difficulty: 3,
      prompt: 'Completa: "I ___ leave when you called."',
      promptTranslation: 'Estaba a punto de irme cuando llamaste.',
      correctAnswer: 'was about to',
      options: ['was about to', 'was going to', 'was leaving'],
      explanation: '"Was about to" expresa una acción inminente en el pasado que fue interrumpida.',
    },
    {
      id: 'b2-m10-l3-ex2',
      type: 'fill_blank',
      concept: 'was on the point of',
      difficulty: 3,
      prompt: 'Completa: "She was on the point ___ leaving when the phone rang."',
      promptTranslation: 'Estaba en el punto de irse cuando sonó el teléfono.',
      correctAnswer: 'of',
      explanation: '"On the point of" va seguido de gerundio (-ing), así que la preposición es "of".',
    },
    {
      id: 'b2-m10-l3-ex3',
      type: 'error_correction',
      concept: 'about to structure',
      difficulty: 4,
      prompt: 'Encuentra el error: "I was about leaving the office."',
      correctAnswer: 'I was about to leave the office.',
      acceptedAnswers: [
        'I was about to leave the office',
        'I was about to leave the office.',
      ],
      acceptApproximate: true,
      explanation: 'Es "about to + infinitivo", no "about + -ing". → about TO leave.',
    },
    {
      id: 'b2-m10-l3-ex4',
      type: 'translate',
      concept: 'just about to',
      difficulty: 4,
      prompt: 'Traduce: "Estábamos justo a punto de empezar cuando llegó."',
      correctAnswer: 'We were just about to start when he arrived.',
      acceptedAnswers: [
        'We were just about to start when he arrived',
        'We were just about to start when he arrived.',
      ],
      acceptApproximate: true,
      explanation: '"Justo a punto de" = were just about to (con "to" + infinitivo).',
    },
    {
      id: 'b2-m10-l3-ex5',
      type: 'reorder',
      concept: 'future in the past word order',
      difficulty: 3,
      prompt: 'Ordena las palabras:',
      promptTranslation: 'Estaba a punto de renunciar a su trabajo.',
      words: ['She', 'was', 'about', 'to', 'quit', 'her', 'job.'],
      correctAnswer: 'She was about to quit her job.',
      explanation: 'Orden: sujeto + was + about + to + verbo-infinitivo + resto.',
    },
    {
      id: 'b2-m10-l3-ex6',
      type: 'select_correct',
      concept: 'about to vs on the point of',
      difficulty: 4,
      prompt: 'Elegí la frase que suena más LITERARIA o FORMAL:',
      correctAnswer: 'She was on the point of giving up.',
      options: ['She was about to give up.', 'She was on the point of giving up.'],
      explanation: '"On the point of" es más literario/formal. "About to" es más común en conversación.',
    },
    {
      id: 'b2-m10-l3-ex7',
      type: 'true_false',
      concept: 'future in the past meaning',
      difficulty: 3,
      prompt: '"He was about to leave" generalmente significa que SÍ se fue, pero casi no lo hizo.',
      correctAnswer: 'false',
      explanation: '"About to" implica que estaba a punto de algo pero fue interrumpido o no sucedió finalmente. El contexto dice si terminó pasando o no.',
    },
    {
      id: 'b2-m10-l3-ex8',
      type: 'match',
      concept: 'future in the past structures',
      difficulty: 4,
      prompt: 'Emparejá estructuras con sus significados:',
      correctAnswer: '',
      pairs: [
        { left: 'I was about to call you.', right: 'Estaba a punto de (forma común)' },
        { left: 'She was on the point of crying.', right: 'Estaba en el punto de (forma literaria)' },
        { left: 'We were just about to leave.', right: 'Estábamos justo a punto de (más urgencia)' },
        { left: 'He said he was leaving tomorrow.', right: 'Tenía un plan futuro (visto desde ayer)' },
      ],
      explanation: 'Distintas formas para expresar futuro desde el pasado.',
    },
    {
      id: 'b2-m10-l3-ex9',
      type: 'listening',
      concept: 'future in the past listening',
      difficulty: 4,
      prompt: 'Escuchá el audio y respondé las preguntas (en inglés, sobre lo que dice).',
      correctAnswer: '',
      explanation: 'Un hombre cuenta una anécdota sobre un momento en el que estaba a punto de hacer algo importante pero fue interrumpido.',
      listening: {
        audioText:
          "I was about to accept the job offer when I realized something important. I was on the point of signing the contract when my old boss called. She was about to offer me a better position, but I had just made my decision. I was about to say no, but she explained the benefits. I was glad I waited because everything worked out perfectly.",
        questions: [
          {
            id: 'b2-m10-l3-ex9-q1',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What was he about to do at the beginning?',
            correctAnswer: 'Accept a job offer',
            options: ['Reject a job offer', 'Accept a job offer', 'Leave his job'],
            explanation: '"I was about to accept the job offer..."',
          },
          {
            id: 'b2-m10-l3-ex9-q2',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'His old boss called before he signed the contract.',
            correctAnswer: 'true',
            explanation: '"I was on the point of signing the contract when my old boss called."',
          },
          {
            id: 'b2-m10-l3-ex9-q3',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What did the old boss offer?',
            correctAnswer: 'A better position',
            options: ['A lower salary', 'A better position', 'An immediate decision'],
            explanation: 'She was about to offer him a better position.',
          },
        ],
      },
    },
    {
      id: 'b2-m10-l3-ex10',
      type: 'writing',
      concept: 'future in the past writing',
      difficulty: 4,
      prompt: 'Escribí una breve anécdota (story) de algo que te pasó en el pasado. Usá al menos 3 estructuras de "future in the past" (was about to, was on the point of, o presente continuo con futuro) para describir lo que estabas a punto de hacer o tenías planeado.',
      promptTranslation: 'Write a short story using future in the past structures.',
      correctAnswer: '',
      explanation: 'Una buena anécdota usa múltiples estructuras de future in the past de forma natural y coherente, narrando eventos con perspectiva pasada.',
      taskType: 'story',
      targetReader: 'a friend',
      register: 'informal',
      contentPoints: [
        'Al menos 3 estructuras distintas de future in the past',
        'Una conclusión o reflexión sobre cómo cambió el plan',
      ],
      requiresOwnIdea: true,
      minWords: 100,
      maxWords: 150,
    },
    {
      id: 'b2-m10-l3-ex11',
      type: 'speaking',
      concept: 'future in the past pronunciation',
      difficulty: 3,
      prompt: 'Escuchá la frase modelo y repetila en voz alta.',
      correctAnswer: 'I was about to call you when you walked in.',
      explanation: 'Practicá la entonación de frases con "was about to". Notá cómo "about to" suena casi como "abou-tuh" en habla rápida.',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b2-m10-l3-mt1',
      type: 'multiple_choice',
      concept: 'was about to structure',
      difficulty: 3,
      prompt: 'Completa: "We ___ start the meeting when the power went out."',
      promptTranslation: 'Estábamos a punto de empezar la reunión cuando se fue la luz.',
      correctAnswer: 'were about to',
      options: ['were about to', 'were going to', 'were starting'],
      explanation: '"Were about to" expresa la inminencia de una acción interrumpida.',
    },
    {
      id: 'b2-m10-l3-mt2',
      type: 'error_correction',
      concept: 'on the point of structure',
      difficulty: 4,
      prompt: 'Corrige: "She was on the point to leave."',
      correctAnswer: 'She was on the point of leaving.',
      acceptedAnswers: [
        'She was on the point of leaving',
        'She was on the point of leaving.',
      ],
      acceptApproximate: true,
      explanation: '"On the point of" usa gerundio (-ing), no "to + infinitivo".',
    },
    {
      id: 'b2-m10-l3-mt3',
      type: 'true_false',
      concept: 'future in the past usage',
      difficulty: 3,
      prompt: '"I was leaving tomorrow" siempre significa que realmente me fui al día siguiente.',
      correctAnswer: 'false',
      explanation: 'Depende del contexto. Si se entiende como un plan (I said I was leaving tomorrow), sí se fue. Pero "was leaving" solo no especifica el resultado.',
    },
  ],
  reviewItems: ['b1-m4-l3', 'b2-m10-l1', 'b2-m10-l2'],
  prerequisites: ['b1-m4-l3'],
}
