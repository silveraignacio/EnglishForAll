import type { Lesson } from '../../types'

export const lesson13ModalBeExpressions: Lesson = {
  id: 'b2-m1-l3',
  moduleId: 'm1-modal-perfects',
  order: 2,
  title: 'be supposed to / be bound to / be likely to / be due to',
  objective: 'Expresar expectativas, probabilidades e inevitabilidad con expresiones modales que usan "be": "be supposed to" (qué se espera que haga), "be bound to" (certeza sobre el futuro), "be likely to/unlikely to" (probabilidad), y "be due to/be to" (fechas, instrucciones, obligaciones).',
  explanation_es: `Hasta ahora usamos modales como "must", "may", "could" para deducir sobre el PASADO. Ahora vamos a ver expresiones modales CON "BE" que se usan para hablar del PRESENTE y el FUTURO, expresando expectativas, probabilidades e inevitabilidad.

Estructura:
- be supposed to + infinitivo → qué se ESPERA que alguien haga (expectativa, obligación).
- be bound to + infinitivo → algo que SEGURAMENTE VA A PASAR (certeza, inevitabilidad).
- be likely to / be unlikely to + infinitivo → PROBABILIDAD de que algo ocurra.
- be due to + infinitivo / due + sustantivo → algo PROGRAMADO o previsto (fechas, calendarios).
- be to + infinitivo → INSTRUCCIONES o planes formales, también obligaciones futuras.

Ejemplos:
- You're supposed to arrive at 9 am. = Se espera que llegues a las 9.
- Sarah is bound to get the job, she's perfect. = Seguro que Sara consigue el trabajo, es perfecta.
- It's likely to rain tomorrow. = Es probable que llueva mañana. (It's unlikely to happen. = Es improbable que suceda.)
- The conference is due to start on Monday. = La conferencia está programada para empezar el lunes.
- You are to follow these instructions carefully. = Debés seguir estas instrucciones cuidadosamente.

Puntos importantes:

1. "Be supposed to" expresa una expectativa o lo que se ESPERA que hagas, no una deducción como "must". Ejemplo: You're supposed to study = Se espera que estudies (alguien espera esto de ti). Además, "be supposed to" puede usarse para RUMORES o "hearsay": "She's supposed to be very talented" = Se dice que es muy talentosa (lo que se rumora).

2. "Be bound to" expresa una certeza TOTAL sobre lo que pasará en el futuro. Es más fuerte que "will probably" — indica que algo es prácticamente inevitable. If you work hard, you're bound to succeed. = Si trabajás duro, seguro que vas a tener éxito.

3. "Be likely to" y "be unlikely to" expresan PROBABILIDAD. Pueden ir precedidas de intensificadores como "much", "less", "very": It's very likely to happen. = Es muy probable que ocurra. She's less likely to accept the offer. = Es menos probable que acepte la oferta.

4. "Be due to" se usa para FECHAS y eventos PROGRAMADOS: The exam is due on Friday. = El examen está previsto para el viernes. También se usa "due to" como preposición de causa (Due to the weather, we postponed the event), pero aquí hablamos de "be due to + infinitivo" para planes.

5. "Be to" es más formal y se usa en instrucciones y planes precisos: You are to report at 8 am sharp. = Debés presentarte a las 8 en punto. También en narrativa: He was to discover the truth later. = Había de descubrir la verdad más tarde.

6. Diferencia con "have to" / "must": "You're supposed to arrive at 9" = se espera que llegues (alguien lo espera). "You must arrive at 9" = DEBES llegar (obligación más fuerte).`,
  examples: [
    { english: 'You\'re supposed to call your mother.', spanish: 'Se espera que llames a tu madre.', note: 'Expectativa: alguien espera que lo hagas.' },
    { english: 'Sarah is supposed to be very talented.', spanish: 'Se dice que Sara es muy talentosa.', note: 'Hearsay: rumor sobre alguien, no una obligación.' },
    { english: 'If you keep studying, you\'re bound to pass.', spanish: 'Si seguís estudiando, seguro que aprobás.', note: 'Certeza total sobre lo que pasará.' },
    { english: 'It\'s very likely to rain tomorrow.', spanish: 'Es muy probable que llueva mañana.', note: 'Probabilidad alta.' },
    { english: 'She\'s unlikely to accept the job offer.', spanish: 'Es improbable que acepte la oferta de trabajo.', note: 'Probabilidad baja.' },
    { english: 'The flight is due to depart at 10 am.', spanish: 'El vuelo está previsto para despegar a las 10.', note: 'Evento programado/calendario.' },
    { english: 'You are to complete this form before 5 pm.', spanish: 'Debés completar este formulario antes de las 5.', note: 'Instrucción formal.' },
  ],
  rule: `Fórmula:
be supposed to + infinitivo → expectativa, lo que se espera de ti.
be bound to + infinitivo → certeza total sobre el futuro.
be likely to / unlikely to + infinitivo → probabilidad.
be due to + infinitivo → evento programado.
be to + infinitivo → instrucción formal o plan preciso.

Reglas:
1. "Be supposed to" = expectativa. "Be bound to" = certeza futura.
2. "Likely to" / "unlikely to" son escalables con intensificadores (very, much, less).
3. "Be due to" se usa para calendarios y eventos programados.
4. "Be to" es formal; se usa en instrucciones y narrativa.
5. El verbo después del infinitivo cambia según el sujeto en formas continuas/perfectas, pero el infinitivo base siempre va sin "to" después de "be" + modal pattern.`,
  commonMistakes: [
    { wrong: '❌ She\'s supposed to be here in 5 minutes.', correct: '✅ She\'s supposed to arrive in 5 minutes.', explanation: 'Usa un verbo con "be supposed to" (arrive), no "be" + lugar. Se espera una ACCIÓN.' },
    { wrong: '❌ It\'s bound happens tomorrow.', correct: '✅ It\'s bound to happen tomorrow.', explanation: '"Bound to" + infinitivo. Necesita "to" + verbo base (happen).' },
    { wrong: '❌ You\'re unlikely of accepting this offer.', correct: '✅ You\'re unlikely to accept this offer.', explanation: '"Unlikely to" + verbo, no "unlikely of".' },
    { wrong: '❌ The meeting is due start at 3 pm.', correct: '✅ The meeting is due to start at 3 pm.', explanation: '"Due to" + infinitivo con "to".' },
    { wrong: '❌ You are finish this work today.', correct: '✅ You are to finish this work today.', explanation: '"Are to" + infinitivo (finish). Necesita el "to".' },
  ],
  vocabulary: [
    { word: 'expectation', translation_es: 'expectativa', level: 'B2', category: 'modals', partOfSpeech: 'noun', example: 'There\'s a high expectation that she\'ll win.', exampleTranslation: 'Hay una alta expectativa de que ganará.' },
    { word: 'bound', translation_es: 'destinado, seguro', level: 'B2', category: 'modals', partOfSpeech: 'adjective', example: 'Success is bound to come.', exampleTranslation: 'El éxito seguramente vendrá.' },
    { word: 'likely', translation_es: 'probable', level: 'B2', category: 'modals', partOfSpeech: 'adjective', example: 'It\'s likely to rain today.', exampleTranslation: 'Es probable que llueva hoy.' },
    { word: 'unlikely', translation_es: 'improbable', level: 'B2', category: 'modals', partOfSpeech: 'adjective', example: 'It\'s unlikely he\'ll attend.', exampleTranslation: 'Es improbable que asista.' },
    { word: 'to schedule', translation_es: 'programar', level: 'B2', category: 'modals', partOfSpeech: 'verb', example: 'The event is scheduled for Friday.', exampleTranslation: 'El evento está programado para el viernes.' },
    { word: 'inevitably', translation_es: 'inevitablemente', level: 'B2', category: 'modals', partOfSpeech: 'adverb', example: 'Things will inevitably change.', exampleTranslation: 'Las cosas inevitablemente cambiarán.' },
  ],
  grammarPoints: [
    {
      id: 'gp-b2-be-supposed-to',
      level: 'B2',
      name: 'be supposed to (expectation)',
      explanation_es: 'Expresa qué se espera que alguien haga. También se usa para rumores (hearsay): "She\'s supposed to be talented".',
      formula: 'be supposed to + infinitive',
      examples: ['You\'re supposed to call.', 'She\'s supposed to be very talented.', 'We\'re supposed to arrive at 9.'],
    },
    {
      id: 'gp-b2-be-bound-to',
      level: 'B2',
      name: 'be bound to (certainty)',
      explanation_es: 'Expresa una certeza total sobre lo que sucederá en el futuro; algo inevitable.',
      formula: 'be bound to + infinitive',
      examples: ['You\'re bound to succeed.', 'If you work hard, you\'re bound to win.', 'It\'s bound to rain.'],
    },
    {
      id: 'gp-b2-be-likely-to',
      level: 'B2',
      name: 'be likely to / unlikely to (probability)',
      explanation_es: 'Expresa probabilidad, escalable con intensificadores (very, much, less). "Likely" = probable; "unlikely" = improbable.',
      formula: 'be (very/much) likely to / (un)likely to + infinitive',
      examples: ['It\'s likely to rain.', 'She\'s unlikely to accept.', 'It\'s very likely to happen.'],
    },
    {
      id: 'gp-b2-be-due-to',
      level: 'B2',
      name: 'be due to (scheduled)',
      explanation_es: 'Expresa que algo está programado o previsto para una fecha/hora específica.',
      formula: 'be due to + infinitive / be due + date',
      examples: ['The flight is due to depart at 10.', 'The exam is due on Friday.', 'The report is due next week.'],
    },
  ],
  exercises: [
    {
      id: 'b2-m1-l3-ex1',
      type: 'multiple_choice',
      concept: 'be supposed to expectation',
      difficulty: 3,
      prompt: 'Completa: "You\'re ___ arrive at 9 am for the interview."',
      promptTranslation: 'Se espera que llegues a las 9 para la entrevista.',
      correctAnswer: 'supposed to',
      options: ['supposed to', 'bound to', 'likely to'],
      explanation: '"Be supposed to" expresa expectativa: se espera que llegues. "Bound to" sería certeza total (seguro que llegarás).',
    },
    {
      id: 'b2-m1-l3-ex2',
      type: 'fill_blank',
      concept: 'be bound to certainty',
      difficulty: 3,
      prompt: 'Completa: "If you study hard, you\'re ___ (pass) the exam."',
      promptTranslation: 'Si estudiás mucho, seguro que aprobás el examen.',
      correctAnswer: 'bound to pass',
      acceptedAnswers: ['bound to pass'],
      explanation: '"Bound to" + infinitivo expresa certeza total. → bound to pass.',
    },
    {
      id: 'b2-m1-l3-ex3',
      type: 'select_correct',
      concept: 'likely vs unlikely',
      difficulty: 3,
      prompt: 'El gerente es escéptico y dice que es improbable que usted consiga el puesto. ¿Cuál frase lo expresa?',
      correctAnswer: 'You\'re unlikely to get the position.',
      options: ['You\'re likely to get the position.', 'You\'re unlikely to get the position.', 'You\'re supposed to get the position.'],
      explanation: '"Unlikely to" = improbable. "Likely to" = probable. "Supposed to" = se espera.',
    },
    {
      id: 'b2-m1-l3-ex4',
      type: 'match',
      concept: 'modal be expressions uses',
      difficulty: 4,
      prompt: 'Relaciona cada expresión modal con su significado:',
      pairs: [
        { left: 'be supposed to', right: 'expectativa de lo que se espera que hagas' },
        { left: 'be bound to', right: 'certeza total sobre algo que pasará' },
        { left: 'be likely to', right: 'probabilidad de que algo ocurra' },
        { left: 'be due to', right: 'evento programado para una fecha' },
      ],
      correctAnswer: '',
      explanation: 'be supposed to = expectativa, be bound to = certeza futura, be likely to = probabilidad, be due to = programado.',
    },
    {
      id: 'b2-m1-l3-ex5',
      type: 'translate',
      concept: 'be expressions translation',
      difficulty: 4,
      prompt: 'Traduce: "La reunión está programada para el viernes a las 3."',
      correctAnswer: 'The meeting is due to start on Friday at 3.',
      acceptedAnswers: [
        'The meeting is due to start on Friday at 3',
        'The meeting is due to start on Friday at 3.',
        'The meeting is due at 3 on Friday',
        'The meeting is due at 3 on Friday.',
      ],
      acceptApproximate: true,
      explanation: '"Está programada" = is due to start / is due. "Para el viernes a las 3" = on Friday at 3 o at 3 on Friday.',
    },
    {
      id: 'b2-m1-l3-ex6',
      type: 'error_correction',
      concept: 'be to formal instruction',
      difficulty: 4,
      prompt: 'Encuentra el error: "You are follow these instructions carefully."',
      correctAnswer: 'You are to follow these instructions carefully.',
      acceptedAnswers: [
        'You are to follow these instructions carefully',
        'You are to follow these instructions carefully.',
      ],
      acceptApproximate: true,
      explanation: '"Be to" + infinitivo: are to follow (instrucción formal). Necesita "to".',
    },
    {
      id: 'b2-m1-l3-ex7',
      type: 'reorder',
      concept: 'be likely to word order',
      difficulty: 3,
      prompt: 'Ordena las palabras:',
      promptTranslation: 'Es muy probable que llueva mañana.',
      words: ['It\'s', 'very', 'likely', 'to', 'rain', 'tomorrow.'],
      correctAnswer: 'It\'s very likely to rain tomorrow.',
      explanation: 'Orden: subject (It\'s) + intensifier (very) + likely to + verbo (rain) + tiempo (tomorrow). → It\'s very likely to rain tomorrow.',
    },
    {
      id: 'b2-m1-l3-ex8',
      type: 'true_false',
      concept: 'supposed to hearsay',
      difficulty: 3,
      prompt: '"Sarah is supposed to be a very talented pianist" significa que se espera que Sarah toque el piano, no que se rumora que es talentosa.',
      correctAnswer: 'false',
      explanation: 'Falso. En este contexto, "be supposed to + adjective" es hearsay/rumor: "se dice que es talentosa", no una obligación de tocar.',
    },
    {
      id: 'b2-m1-l3-ex9',
      type: 'listening',
      concept: 'be expressions listening',
      difficulty: 4,
      prompt: 'Escuchá el audio y respondé las preguntas.',
      correctAnswer: '',
      explanation: 'Un gerente habla sobre las expectativas laborales, la probabilidad de ascensos y fechas previstas de proyectos.',
      listening: {
        audioText:
          "Good morning, everyone. First, you are to submit your reports by Friday. They\'re due at 5 pm sharp. Second, if you work well on this project, you\'re bound to get a promotion. There\'s a high chance. Third, it\'s very likely to rain this week, so the outdoor event is due to be postponed. Finally, you\'re all supposed to attend the training next Monday. Questions?",
        questions: [
          {
            id: 'b2-m1-l3-ex9-q1',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What time are reports due?',
            correctAnswer: '5 pm',
            options: ['4 pm', '5 pm', 'Monday'],
            explanation: '"They\'re due at 5 pm sharp."',
          },
          {
            id: 'b2-m1-l3-ex9-q2',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'According to the manager, if you work well, you\'re definitely going to get a promotion.',
            correctAnswer: 'true',
            explanation: '"You\'re bound to get a promotion" = certeza total.',
          },
          {
            id: 'b2-m1-l3-ex9-q3',
            type: 'select_correct',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: '¿Por qué el evento al aire libre probablemente se posponga?',
            correctAnswer: 'Because it\'s very likely to rain',
            options: ['Because it\'s very unlikely to happen', 'Because it\'s very likely to rain', 'Because it\'s not due yet'],
            explanation: '"It\'s very likely to rain this week, so the outdoor event is due to be postponed."',
          },
        ],
      },
    },
    {
      id: 'b2-m1-l3-ex10',
      type: 'writing',
      concept: 'be expressions writing',
      difficulty: 4,
      prompt: 'Escribí un correo formal a un colega explicando las expectativas sobre un proyecto. Usá al menos 3 expresiones con "be": "be supposed to", "be likely to", "be due to" y/o "be bound to".',
      promptTranslation: 'Write a formal email about project expectations using at least 3 modal be expressions.',
      correctAnswer: '',
      explanation: 'Un buen correo usa las expresiones modales de forma clara y profesional: se espera que..., es probable que..., está programado para..., etc. Tono formal.',
      taskType: 'email',
      targetReader: 'a colleague',
      register: 'formal',
      contentPoints: ['Al menos 3 expresiones distintas con be', 'Contexto claro sobre plazos y expectativas del proyecto'],
      requiresOwnIdea: true,
      minWords: 100,
      maxWords: 150,
    },
    {
      id: 'b2-m1-l3-ex11',
      type: 'speaking',
      concept: 'be expressions pronunciation',
      difficulty: 3,
      prompt: 'Escuchá la frase modelo y repetila en voz alta.',
      correctAnswer: 'You\'re supposed to submit your report by Friday.',
      explanation: 'Practicá la pronunciación de "supposed" (/səˈpoʊzd/) y la entonación natural de instrucciones y expectativas.',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b2-m1-l3-mt1',
      type: 'multiple_choice',
      concept: 'be supposed to vs be bound to',
      difficulty: 3,
      prompt: 'Elige la opción correcta: "Si estudias mucho, ___."',
      promptTranslation: 'Si estudiás mucho, seguro que aprobás.',
      correctAnswer: 'you\'re bound to pass',
      options: ['you\'re supposed to pass', 'you\'re bound to pass', 'you\'re likely to pass'],
      explanation: '"Bound to" expresa certeza total. "Supposed to" = expectativa. "Likely to" = probabilidad (menos certeza que "bound to").',
    },
    {
      id: 'b2-m1-l3-mt2',
      type: 'fill_blank',
      concept: 'be due to scheduled',
      difficulty: 3,
      prompt: 'Completa: "The flight is ___ depart at 2 pm."',
      promptTranslation: 'El vuelo está previsto para despegar a las 2.',
      correctAnswer: 'due to',
      acceptedAnswers: ['due to'],
      explanation: '"Due to" + infinitivo para eventos programados. → is due to depart.',
    },
    {
      id: 'b2-m1-l3-mt3',
      type: 'error_correction',
      concept: 'be likely to form',
      difficulty: 4,
      prompt: 'Corrige: "It\'s likely happen tomorrow."',
      correctAnswer: 'It\'s likely to happen tomorrow.',
      acceptedAnswers: [
        'It\'s likely to happen tomorrow',
        'It\'s likely to happen tomorrow.',
      ],
      acceptApproximate: true,
      explanation: '"Likely to" + infinitivo. Necesita "to": likely to happen.',
    },
    {
      id: 'b2-m1-l3-mt4',
      type: 'true_false',
      concept: 'hearsay be supposed to',
      difficulty: 3,
      prompt: '"He\'s supposed to be very intelligent" significa que alguien espera que sea inteligente, no que se rumora.',
      correctAnswer: 'false',
      explanation: 'Falso. "Be supposed to + adjective" es hearsay: se dice/se rumora que es inteligente, no una obligación.',
    },
  ],
  reviewItems: ['b2-m1-l1', 'b2-m1-l2'],
  prerequisites: ['b2-m1-l2'],
}
