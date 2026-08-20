import type { Lesson } from '../../types'

export const lesson11MustHaveCantHave: Lesson = {
  id: 'b2-m1-l1',
  moduleId: 'm1-modal-perfects',
  order: 0,
  title: 'must have / can\'t have: deducciones sobre el pasado',
  objective: 'Hacer deducciones lógicas sobre el pasado con "must have + participio" (seguro que pasó) y "can\'t have + participio" (seguro que no pasó).',
  explanation_es: `Ya conocés "must" y "can't" para deducir sobre el PRESENTE (He must be tired. = Debe de estar cansado.). Ahora vamos a usarlos para deducir sobre el PASADO: cuando estás bastante seguro de algo que ya ocurrió, basándote en pruebas o lógica, no porque lo viste directamente.

Estructura:
- must have + participio pasado → estás seguro de que algo SÍ pasó.
- can't have / couldn't have + participio pasado → estás seguro de que algo NO pasó (es imposible).

Ejemplos:
- The lights are off. They must have gone out. = Deben de haber salido. (Deducción: las luces apagadas son la prueba.)
- She can't have finished already, it's only been five minutes. = No puede haber terminado ya, solo pasaron cinco minutos. (Deducción: el tiempo transcurrido hace imposible que haya terminado.)

Puntos importantes:

1. "Must have" y "can't have" NO hablan de obligación ni de permiso — hablan de certeza sobre algo pasado. Es diferente del "had to" (obligación pasada).

2. El verbo después de have SIEMPRE va en participio pasado (regular: -ed / irregular: 3ª columna). No cambia según el sujeto: he must have gone, they must have gone.

3. La forma negativa de una deducción segura NO es "mustn't have" — usamos "can't have" o "couldn't have". "Mustn't" en pasado no existe para deducción (sí existe "mustn't" para prohibición presente, que es otro uso).

4. Para preguntar sobre una deducción pasada, usamos "Could have...?" o simplemente reformulamos con "Do you think...": Could she have forgotten? = ¿Podría haberse olvidado?

5. Comparación con el presente: He must be at home (ahora) vs. He must have been at home (anoche). El "have" es lo que mueve la deducción al pasado.`,
  examples: [
    { english: 'The ground is wet. It must have rained last night.', spanish: 'El suelo está mojado. Debe de haber llovido anoche.', note: 'Prueba (suelo mojado) → deducción segura sobre el pasado.' },
    { english: 'He can\'t have seen us, he didn\'t say hello.', spanish: 'No puede habernos visto, no saludó.', note: 'Deducción negativa: es imposible que nos haya visto.' },
    { english: 'They must have left early to avoid the traffic.', spanish: 'Deben de haber salido temprano para evitar el tráfico.' },
    { english: 'She can\'t have paid for it, she never has any money.', spanish: 'No puede haberlo pagado, nunca tiene dinero.' },
    { english: 'You must have made a mistake, this total looks wrong.', spanish: 'Debés de haberte equivocado, este total se ve mal.' },
    { english: 'I can\'t have left my keys at work, I remember picking them up.', spanish: 'No puedo haber dejado las llaves en el trabajo, recuerdo haberlas agarrado.' },
  ],
  rule: `Fórmula:
must have / can't have (couldn't have) + participio pasado

Afirmativa segura: must have + participio → He must have forgotten.
Negativa segura: can't have / couldn't have + participio → He can't have forgotten.

Reglas:
1. El verbo principal siempre en participio pasado, sin importar el sujeto.
2. No confundir con obligación pasada: "had to" (obligación) ≠ "must have" (deducción).
3. La negación de una deducción NO es "mustn't have" — es "can't have"/"couldn't have".
4. Se usa cuando tenés pruebas o lógica fuerte, no cuando es solo una posibilidad (para eso: may have / might have / could have).`,
  formation: {
    title: 'Cómo se forma must have / can\'t have — Deducción sobre el pasado',
    intro: 'Para deducir con certeza sobre algo que ya pasó usamos el auxiliar have + participio pasado: must have (estoy seguro de que pasó) y can\'t have / couldn\'t have (estoy seguro de que no pasó).',
    patterns: [
      {
        name: 'Afirmativo — certeza de que pasó',
        formula: 'Sujeto + must + have + participio pasado + complemento',
        examples: [
          { english: 'The ground is wet. It must have rained last night.', spanish: 'El suelo está mojado. Debe de haber llovido anoche.' },
          { english: 'You must have made a mistake, this total looks wrong.', spanish: 'Debés de haberte equivocado, este total se ve mal.' },
          { english: 'They must have left early to avoid the traffic.', spanish: 'Deben de haber salido temprano para evitar el tráfico.' },
        ],
        note: 'El participio pasado no cambia según el sujeto: he must have gone, they must have gone.',
      },
      {
        name: 'Negativo — certeza de que NO pasó',
        formula: 'Sujeto + can\'t have / couldn\'t have + participio pasado + complemento',
        examples: [
          { english: 'He can\'t have seen us, he didn\'t say hello.', spanish: 'No puede habernos visto, no saludó.' },
          { english: 'She can\'t have paid for it, she never has any money.', spanish: 'No puede haberlo pagado, nunca tiene dinero.' },
        ],
        note: 'Para negar una deducción segura NUNCA se usa "mustn\'t have": se usa can\'t have o couldn\'t have.',
      },
      {
        name: 'Pregunta — deducción pasada',
        formula: 'Could + sujeto + have + participio pasado...? (o: Do you think + sujeto + verbo pasado...?)',
        examples: [
          { english: 'Could she have forgotten about the meeting?', spanish: '¿Podría haberse olvidado de la reunión?' },
        ],
        note: 'No hay forma de pregunta directa con must have; se reformula con "Could have...?" o "Do you think...?"',
      },
    ],
    notes: [
      'El have es lo que mueve la deducción al pasado: He must be at home (ahora) vs. He must have been at home (anoche).',
      'No confundir con obligación pasada: had to (obligación) ≠ must have (deducción).',
      'En habla rápida, "must have" y "can\'t have" se reducen (suenan como "musta" / "cant\'ve").',
    ],
  },
  commonMistakes: [
    { wrong: '❌ He mustn\'t have arrived yet.', correct: '✅ He can\'t have arrived yet.', explanation: 'Para negar una deducción segura sobre el pasado usamos "can\'t have", nunca "mustn\'t have".' },
    { wrong: '❌ She must have go to the party.', correct: '✅ She must have gone to the party.', explanation: 'Después de "have" siempre va el participio pasado (gone), nunca el infinitivo (go).' },
    { wrong: '❌ They must had left already.', correct: '✅ They must have left already.', explanation: 'Es "must have" (auxiliar have en infinitivo), no "must had".' },
    { wrong: '❌ He must have to work late.', correct: '✅ He must have worked late.', explanation: '"Must have to" no existe para deducción — es simplemente "must have + participio".' },
  ],
  vocabulary: [
    { word: 'deduction', translation_es: 'deducción', level: 'B2', category: 'modals', partOfSpeech: 'noun', example: 'That\'s a logical deduction.', exampleTranslation: 'Esa es una deducción lógica.' },
    { word: 'evidence', translation_es: 'prueba, evidencia', level: 'B2', category: 'modals', partOfSpeech: 'noun', example: 'There\'s no evidence he was here.', exampleTranslation: 'No hay pruebas de que estuvo acá.' },
    { word: 'to assume', translation_es: 'suponer', level: 'B2', category: 'modals', partOfSpeech: 'verb', example: 'I assumed she had left.', exampleTranslation: 'Supuse que se había ido.' },
    { word: 'impossible', translation_es: 'imposible', level: 'B2', category: 'modals', partOfSpeech: 'adjective', example: 'It\'s impossible he forgot.', exampleTranslation: 'Es imposible que se haya olvidado.' },
    { word: 'certain', translation_es: 'seguro, cierto', level: 'B2', category: 'modals', partOfSpeech: 'adjective', example: 'I\'m certain she called.', exampleTranslation: 'Estoy seguro de que llamó.' },
    { word: 'to figure out', translation_es: 'darse cuenta, resolver', level: 'B2', category: 'phrasal verbs', partOfSpeech: 'phrasal verb', example: 'I finally figured out what happened.', exampleTranslation: 'Finalmente me di cuenta de qué pasó.' },
  ],
  grammarPoints: [
    {
      id: 'gp-b2-must-have-cant-have',
      level: 'B2',
      name: 'must have / can\'t have (deduction about the past)',
      explanation_es: 'Deducciones seguras sobre el pasado: must have + participio (estoy seguro de que pasó), can\'t have/couldn\'t have + participio (estoy seguro de que no pasó).',
      formula: 'must have / can\'t have + past participle',
      examples: ['It must have rained.', 'She can\'t have seen us.', 'They must have left early.'],
    },
  ],
  exercises: [
    {
      id: 'b2-m1-l1-ex1',
      type: 'multiple_choice',
      concept: 'must have deduction',
      difficulty: 3,
      prompt: 'Completa: "The ground is wet. It ___ rained."',
      promptTranslation: 'El suelo está mojado. Debe de haber llovido.',
      correctAnswer: 'must have',
      options: ['must have', 'must', 'had to'],
      explanation: 'Deducción segura sobre algo pasado (el suelo mojado es la prueba): must have + participio.',
    },
    {
      id: 'b2-m1-l1-ex2',
      type: 'multiple_choice',
      concept: 'cant have deduction',
      difficulty: 3,
      prompt: 'Completa: "She ___ finished already, it\'s only been five minutes."',
      promptTranslation: 'No puede haber terminado ya, solo pasaron cinco minutos.',
      correctAnswer: 'can\'t have',
      options: ['can\'t have', 'mustn\'t have', 'doesn\'t have'],
      explanation: 'Deducción negativa segura: can\'t have + participio. "Mustn\'t have" no se usa para esto.',
    },
    {
      id: 'b2-m1-l1-ex3',
      type: 'fill_blank',
      concept: 'must have form',
      difficulty: 3,
      prompt: 'Completa con la forma correcta de "go": "They must have ___ home early."',
      promptTranslation: 'Deben de haberse ido a casa temprano.',
      correctAnswer: 'gone',
      explanation: 'Después de "must have" el verbo va en participio pasado: go → gone.',
    },
    {
      id: 'b2-m1-l1-ex4',
      type: 'error_correction',
      concept: 'must have vs mustn\'t have',
      difficulty: 4,
      prompt: 'Encuentra el error: "He mustn\'t have seen the sign, he didn\'t stop."',
      correctAnswer: 'He can\'t have seen the sign, he didn\'t stop.',
      acceptedAnswers: [
        'He can\'t have seen the sign, he didn\'t stop',
        'He can\'t have seen the sign, he didn\'t stop.',
        'He couldn\'t have seen the sign, he didn\'t stop',
        'He couldn\'t have seen the sign, he didn\'t stop.',
      ],
      acceptApproximate: true,
      explanation: 'Para negar una deducción segura sobre el pasado se usa "can\'t have"/"couldn\'t have", no "mustn\'t have".',
    },
    {
      id: 'b2-m1-l1-ex5',
      type: 'translate',
      concept: 'must have translation',
      difficulty: 4,
      prompt: 'Traduce: "Deben de haber salido temprano para evitar el tráfico."',
      correctAnswer: 'They must have left early to avoid the traffic.',
      acceptedAnswers: [
        'They must have left early to avoid the traffic',
        'They must have left early to avoid the traffic.',
      ],
      acceptApproximate: true,
      explanation: '"Deben de haber salido" = they must have left (deducción). "Para evitar" = to avoid.',
    },
    {
      id: 'b2-m1-l1-ex6',
      type: 'reorder',
      concept: 'must have word order',
      difficulty: 3,
      prompt: 'Ordena las palabras:',
      promptTranslation: 'Debés de haberte equivocado.',
      words: ['You', 'must', 'have', 'made', 'a', 'mistake.'],
      correctAnswer: 'You must have made a mistake.',
      explanation: 'Orden: sujeto + must have + participio (made) + resto. → You must have made a mistake.',
    },
    {
      id: 'b2-m1-l1-ex7',
      type: 'select_correct',
      concept: 'must have vs may have',
      difficulty: 4,
      prompt: 'Tenés pruebas muy fuertes de que Ana llamó (viste la llamada perdida). ¿Cuál expresa más CERTEZA?',
      correctAnswer: 'Ana must have called.',
      options: ['Ana must have called.', 'Ana may have called.', 'Ana might have called.'],
      explanation: '"Must have" expresa certeza casi total, basada en pruebas fuertes. "May/might have" expresan solo posibilidad.',
    },
    {
      id: 'b2-m1-l1-ex8',
      type: 'true_false',
      concept: 'must have meaning',
      difficulty: 2,
      prompt: '"He must have worked late" significa que estamos seguros de que trabajó hasta tarde, basándonos en pruebas.',
      correctAnswer: 'true',
      explanation: 'Correcto. "Must have + participio" expresa una deducción segura sobre el pasado.',
    },
    {
      id: 'b2-m1-l1-ex9',
      type: 'listening',
      concept: 'must have listening',
      difficulty: 4,
      prompt: 'Escuchá el audio y respondé las preguntas (en inglés, sobre lo que dice).',
      correctAnswer: '',
      explanation: 'Sarah llega a su casa y encuentra la puerta abierta y cosas fuera de lugar. Hace varias deducciones sobre lo que debe haber pasado.',
      listening: {
        audioText:
          "When Sarah got home, the front door was open. She must have forgotten to lock it that morning, she thought. But then she saw that some books had fallen off the shelf, and a window was broken. Someone must have broken in. She couldn't have left the window like that herself, she was sure of it. She immediately called the police.",
        audioUrl: '/audio/tts/b2-m1-l1-ex9.mp3',
        questions: [
          {
            id: 'b2-m1-l1-ex9-q1',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What did Sarah first think about the open door?',
            correctAnswer: 'She must have forgotten to lock it',
            options: ['She must have forgotten to lock it', 'Someone gave her a key', 'The door was always open'],
            explanation: '"She must have forgotten to lock it that morning, she thought."',
          },
          {
            id: 'b2-m1-l1-ex9-q2',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'Sarah thinks she broke the window herself.',
            correctAnswer: 'false',
            explanation: '"She couldn\'t have left the window like that herself, she was sure of it."',
          },
          {
            id: 'b2-m1-l1-ex9-q3',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What does Sarah do at the end?',
            correctAnswer: 'She calls the police',
            options: ['She calls the police', 'She fixes the window', 'She calls her family'],
            explanation: '"She immediately called the police."',
          },
        ],
      },
    },
    {
      id: 'b2-m1-l1-ex10',
      type: 'writing',
      concept: 'must have writing',
      difficulty: 4,
      prompt: 'Escribí un breve informe (report) para tu profesor explicando qué debe de haber pasado en esta situación: llegaste a la cocina y encontraste la ventana rota y comida desparramada por el piso. Usá al menos 3 deducciones con must have / can\'t have.',
      promptTranslation: 'Write a short report explaining what must have happened: broken window, food scattered on the floor.',
      correctAnswer: '',
      explanation: 'Un buen informe usa varias deducciones (must have / can\'t have + participio) de forma lógica y coherente, en un registro neutro apropiado para un informe.',
      taskType: 'report',
      targetReader: 'your teacher',
      register: 'neutral',
      contentPoints: ['Al menos 3 deducciones distintas con must have o can\'t have', 'Una conclusión sobre qué creés que pasó'],
      requiresOwnIdea: true,
      minWords: 60,
      maxWords: 100,
    },
    {
      id: 'b2-m1-l1-mt1-speaking',
      type: 'speaking',
      concept: 'must have pronunciation',
      difficulty: 3,
      prompt: 'Escuchá la frase modelo y repetila en voz alta.',
      correctAnswer: 'They must have left early to avoid the traffic.',
      explanation: 'Practicá la reducción natural de "must have" (suena como "musta" /ˈmʌstə/ en habla rápida) y de "have" en "can\'t have" (suena como "cant\'ve").',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b2-m1-l1-mt1',
      type: 'multiple_choice',
      concept: 'must have structure',
      difficulty: 3,
      prompt: 'Completa: "I ___ my keys at the office, I can\'t find them anywhere."',
      promptTranslation: 'Debo de haber dejado mis llaves en la oficina, no las encuentro por ningún lado.',
      correctAnswer: 'must have left',
      options: ['must have left', 'must left', 'must leave'],
      explanation: 'Deducción segura: must have + participio (left). → must have left.',
    },
    {
      id: 'b2-m1-l1-mt2',
      type: 'error_correction',
      concept: 'must have vs mustn\'t have',
      difficulty: 4,
      prompt: 'Corrige: "She mustn\'t have heard you, she didn\'t answer."',
      correctAnswer: 'She can\'t have heard you, she didn\'t answer.',
      acceptedAnswers: [
        'She can\'t have heard you, she didn\'t answer',
        'She can\'t have heard you, she didn\'t answer.',
        'She couldn\'t have heard you, she didn\'t answer',
        'She couldn\'t have heard you, she didn\'t answer.',
      ],
      acceptApproximate: true,
      explanation: 'La negación de una deducción segura es "can\'t have"/"couldn\'t have", no "mustn\'t have".',
    },
    {
      id: 'b2-m1-l1-mt3',
      type: 'true_false',
      concept: 'must have vs had to',
      difficulty: 3,
      prompt: '"He had to work late" y "He must have worked late" significan exactamente lo mismo.',
      correctAnswer: 'false',
      explanation: 'Falso. "Had to" es obligación pasada (estaba obligado a trabajar). "Must have" es una deducción (creo que trabajó, basándome en pruebas).',
    },
  ],
  reviewItems: ['b1-m4-l1', 'b1-m4-l3'],
  workbookRefs: [
    { levelId: 'b2', page: 1, exercises: [1, 3, 4], note: 'Práctica de deducciones con must have / can\'t have' },
  ],
  prerequisites: ['b1-m4-l3'],
}
