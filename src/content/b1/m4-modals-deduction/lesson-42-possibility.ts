import type { Lesson } from '../../types'

export const lesson42Possibility: Lesson = {
  id: 'b1-m4-l2',
  moduleId: 'm4-modals-deduction',
  order: 1,
  title: 'Posibilidad: might / may / could',
  objective: 'Expresar posibilidad en presente con "might", "may" y "could", y ordenar los niveles de certeza de cada modal.',
  explanation_es: `En la lección anterior vimos "must be" (seguro positivo) y "can't be" (seguro negativo). Pero a veces no estamos seguros: solo creemos que algo es posible. Para eso usamos "might", "may" y "could".

- MIGHT = quizá / puede que (posibilidad, no muy fuerte)
  - It might rain later. = Puede que llueva más tarde.
  - He might be the new manager. = Quizá sea el nuevo gerente.

- MAY = puede que / es posible (posibilidad)
  - She may be in a meeting. = Puede estar en una reunión.
  - It may snow tonight. = Puede que nieve esta noche.

- COULD = podría / podía ser (posibilidad)
  - He could be the new manager. = Podría ser el nuevo gerente.
  - They could be lost. = Podrían estar perdidos.

Los tres significan "es posible". La diferencia es el GRADO DE CERTEZA (qué tan probable es):

NIVELES DE CERTEZA (de más a menos seguro):
- must be = seguro que sí (certeza casi total, positiva)
- may / could = es posible (probabilidad media)
- might = quizá / no muy probable (probabilidad baja)
- can't be = seguro que no (certeza casi total, negativa)

IMPORTANTE: tras might/may/could el verbo va en infinitivo SIN "to" y SIN conjugar:
- ✅ might be, ✅ may be, ✅ could be
- ❌ might to be, ❌ may is, ❌ could be-ing`,
  examples: [
    { english: 'It might rain later.', spanish: 'Puede que llueva más tarde.', note: 'might = posibilidad baja.' },
    { english: 'She may be in a meeting.', spanish: 'Puede estar en una reunión.', note: 'may = posibilidad media.' },
    { english: 'He could be the new manager.', spanish: 'Podría ser el nuevo gerente.', note: 'could = posibilidad.' },
    { english: 'It may snow tonight.', spanish: 'Puede que nieve esta noche.' },
    { english: 'They could be lost.', spanish: 'Podrían estar perdidos.', note: 'could + be + adjetivo.' },
    { english: 'I might not have time today.', spanish: 'Quizá no tenga tiempo hoy.', note: 'Negativo: might not.' },
  ],
  rule: `Fórmula:
sujeto + might / may / could + verbo (infinitivo sin "to")
- It might rain later.
- She may be in a meeting.
- He could be the new manager.

Niveles de certeza (de más a menos seguro):
- must be → casi seguro que sí
- may / could → posible
- might → quizá, poco probable
- can't be → casi seguro que no

Reglas:
- Tras el modal, el verbo va sin "to": might be, may be, could be.
- El modal no se conjuga: he may, she may.
- Negativo posible: might not / may not (no muy frecuente: "couldn't").`,
  formation: {
    title: 'Cómo se forma la posibilidad — might / may / could',
    intro: 'Cuando algo solo es posible (no seguro), usamos might, may o could + verbo en forma base. La diferencia entre ellos está en el grado de certeza.',
    patterns: [
      {
        name: 'Posibilidad',
        formula: 'Sujeto + might / may / could + verbo en forma base + complemento',
        examples: [
          { english: 'It might rain later.', spanish: 'Puede que llueva más tarde.' },
          { english: 'She may be in a meeting.', spanish: 'Puede estar en una reunión.' },
          { english: 'He could be the new manager.', spanish: 'Podría ser el nuevo gerente.' },
          { english: 'They could be lost.', spanish: 'Podrían estar perdidos.' },
        ],
        note: 'Tras el modal el verbo va sin "to" y sin conjugar: might be, may be, could be.',
      },
      {
        name: 'Negativo',
        formula: 'Sujeto + might not / may not + verbo en forma base + complemento',
        examples: [
          { english: 'I might not have time today.', spanish: 'Quizá no tenga tiempo hoy.' },
        ],
      },
    ],
    notes: [
      'Grado de certeza (de más a menos seguro): must be → may/could → might → can\'t be.',
      'El modal no se conjuga: he may, she may (no "he mays").',
      'Might ya expresa futuro/posibilidad; no necesita "will": It might rain (no "might will rain").',
    ],
  },
  commonMistakes: [
    { wrong: '❌ She might to be in a meeting.', correct: '✅ She might be in a meeting.', explanation: 'Tras "might" el verbo va sin "to": might be, no "might to be".' },
    { wrong: '❌ He may is the new manager.', correct: '✅ He may be the new manager.', explanation: 'Tras "may" el verbo no se conjuga: may be, no "may is".' },
    { wrong: '❌ It might will rain later.', correct: '✅ It might rain later.', explanation: '"Might" ya expresa futuro/posibilidad; no necesita "will".' },
    { wrong: '❌ She may be in a meeting to.', correct: '✅ She may be in a meeting.', explanation: 'No se añade "to" al final. La estructura es sujeto + may + be + complemento.' },
  ],
  vocabulary: [
    { word: 'might', translation_es: 'quizá, puede que (posibilidad baja)', level: 'B1', category: 'modals', partOfSpeech: 'modal verb', example: 'It might rain later.', exampleTranslation: 'Puede que llueva más tarde.' },
    { word: 'may', translation_es: 'puede que, es posible (posibilidad media)', level: 'B1', category: 'modals', partOfSpeech: 'modal verb', example: 'She may be in a meeting.', exampleTranslation: 'Puede estar en una reunión.' },
    { word: 'could', translation_es: 'podría, podía ser (posibilidad)', level: 'B1', category: 'modals', partOfSpeech: 'modal verb', example: 'He could be the new manager.', exampleTranslation: 'Podría ser el nuevo gerente.' },
    { word: 'later', translation_es: 'más tarde', level: 'A2', category: 'time', partOfSpeech: 'adverb', example: 'It might rain later.', exampleTranslation: 'Puede que llueva más tarde.' },
    { word: 'meeting', translation_es: 'reunión', level: 'A2', category: 'work', partOfSpeech: 'noun', example: 'She may be in a meeting.', exampleTranslation: 'Puede estar en una reunión.' },
    { word: 'manager', translation_es: 'gerente, director', level: 'B1', category: 'work', partOfSpeech: 'noun', example: 'He could be the new manager.', exampleTranslation: 'Podría ser el nuevo gerente.' },
  ],
  grammarPoints: [
    {
      id: 'gp-possibility-modals',
      level: 'B1',
      name: 'Possibility: might / may / could',
      explanation_es: 'Usamos might, may y could para expresar posibilidad en presente. Después del modal el verbo va en infinitivo sin "to". El grado de certeza desciende: must > may/could > might > can\'t.',
      formula: 'subject + might / may / could + base verb',
      examples: ['It might rain later.', 'She may be in a meeting.', 'He could be the new manager.'],
    },
  ],
  exercises: [
    {
      id: 'b1-m4-l2-ex1',
      type: 'multiple_choice',
      concept: 'possibility might',
      difficulty: 1,
      prompt: 'Completa (posibilidad): "It ___ rain later."',
      promptTranslation: 'Puede que llueva más tarde.',
      correctAnswer: 'might',
      options: ['might', 'must', "can't"],
      explanation: 'Posibilidad (no certeza) → "might". → It might rain later.',
    },
    {
      id: 'b1-m4-l2-ex2',
      type: 'multiple_choice',
      concept: 'possibility may',
      difficulty: 1,
      prompt: 'Completa (posibilidad): "She ___ be in a meeting."',
      promptTranslation: 'Puede estar en una reunión.',
      correctAnswer: 'may',
      options: ['may', 'must', 'is'],
      explanation: 'Posibilidad → "may". → She may be in a meeting.',
    },
    {
      id: 'b1-m4-l2-ex3',
      type: 'fill_blank',
      concept: 'possibility could',
      difficulty: 2,
      prompt: 'Completa (posibilidad): "He ___ be the new manager."',
      promptTranslation: 'Podría ser el nuevo gerente.',
      correctAnswer: 'could',
      acceptedAnswers: ['could'],
      explanation: 'Posibilidad → "could". → He could be the new manager.',
    },
    {
      id: 'b1-m4-l2-ex4',
      type: 'fill_blank',
      concept: 'possibility may',
      difficulty: 2,
      prompt: 'Completa (posibilidad): "It ___ snow tonight."',
      promptTranslation: 'Puede que nieve esta noche.',
      correctAnswer: 'may',
      acceptedAnswers: ['may', 'might', 'could'],
      explanation: '"May", "might" y "could" expresan posibilidad. → It may snow tonight.',
    },
    {
      id: 'b1-m4-l2-ex5',
      type: 'reorder',
      concept: 'possibility might',
      difficulty: 2,
      prompt: 'Ordena la frase (posibilidad):',
      promptTranslation: 'Podrían estar perdidos.',
      words: ['They', 'could', 'be', 'lost.'],
      correctAnswer: 'They could be lost.',
      explanation: 'Estructura: sujeto + could + be + adjetivo. → They could be lost.',
    },
    {
      id: 'b1-m4-l2-ex6',
      type: 'true_false',
      concept: 'certainty scale',
      difficulty: 2,
      prompt: '"Might" expresa menos certeza que "must".',
      correctAnswer: 'true',
      acceptedAnswers: ['True', 'TRUE', 't'],
      explanation: 'Verdadero. "Must" = casi seguro; "might" = solo posible (poca probabilidad).',
    },
    {
      id: 'b1-m4-l2-ex7',
      type: 'translate',
      concept: 'possibility might',
      difficulty: 3,
      prompt: 'Traduce: "Puede que llueva más tarde."',
      correctAnswer: 'It might rain later.',
      acceptedAnswers: ['It might rain later', 'It might rain later.', 'It may rain later', 'It may rain later.', 'it might rain later'],
      acceptApproximate: true,
      explanation: '"Puede que" = might/may. "llueva" = rain. "más tarde" = later. → It might rain later.',
    },
    {
      id: 'b1-m4-l2-ex8',
      type: 'translate',
      concept: 'possibility may',
      difficulty: 3,
      prompt: 'Traduce: "Ella puede estar en una reunión."',
      correctAnswer: 'She may be in a meeting.',
      acceptedAnswers: [
        'She may be in a meeting',
        'She may be in a meeting.',
        'She might be in a meeting',
        'She might be in a meeting.',
        'she may be in a meeting',
      ],
      acceptApproximate: true,
      explanation: '"Puede estar" (posibilidad) = may/might be. "en una reunión" = in a meeting.',
    },
    {
      id: 'b1-m4-l2-ex9',
      type: 'error_correction',
      concept: 'possibility form',
      difficulty: 3,
      prompt: 'Corrige el error: "She might to be in a meeting."',
      correctAnswer: 'She might be in a meeting.',
      acceptedAnswers: [
        'She might be in a meeting',
        'She might be in a meeting.',
        'she might be in a meeting',
      ],
      acceptApproximate: true,
      explanation: 'Tras "might" el verbo va sin "to": might be, no "might to be".',
    },
    {
      id: 'b1-m4-l2-ex10',
      type: 'select_correct',
      concept: 'possibility form',
      difficulty: 3,
      prompt: 'Selecciona la frase correcta:',
      promptTranslation: 'Podría ser el nuevo gerente.',
      correctAnswer: 'He could be the new manager.',
      options: [
        'He could be the new manager.',
        'He could to be the new manager.',
        'He could is the new manager.',
        'He coulds be the new manager.',
      ],
      explanation: 'Tras "could" va el infinitivo sin "to" y sin conjugar: could be. "Could" no añade "-s".',
    },
    {
      id: 'b1-m4-l2-ex11',
      type: 'match',
      concept: 'certainty scale match',
      difficulty: 3,
      prompt: 'Relaciona cada modal con su nivel de certeza:',
      pairs: [
        { left: 'must be', right: 'Casi seguro que sí' },
        { left: 'may be', right: 'Posible' },
        { left: 'could be', right: 'Posible / podría ser' },
        { left: 'might be', right: 'Quizá, poco probable' },
        { left: "can't be", right: 'Casi seguro que no' },
      ],
      correctAnswer: 'must be=Casi seguro que sí, may be=Posible, could be=Posible / podría ser, might be=Quizá, poco probable, can\'t be=Casi seguro que no',
      explanation: 'Orden de certeza: must (seguro sí) > may/could (posible) > might (poco probable) > can\'t (seguro no).',
    },
    {
      id: 'b1-m4-l2-ex12',
      type: 'listening',
      concept: 'possibility listening',
      difficulty: 3,
      prompt: 'Escuchá el audio y respondé las preguntas (en inglés, sobre lo que dice).',
      correctAnswer: '',
      explanation: 'Tom está especulando sobre los planes de sus amigos para el fin de semana. Piensa que pueden ir al cine, quizás a la playa, y que probablemente irán al restaurante italiano.',
      listening: {
        audioText:
          "I wonder what my friends are doing this weekend. They may go to the cinema — I heard them talking about a new movie. But they might go to the beach instead, especially if it\'s sunny. They could also decide to stay home and play video games. One thing I\'m sure about: they may visit the new Italian restaurant. It\'s supposed to be very good. Maybe they\'ll do all of these things!",
        audioUrl: '/audio/tts/b1-m4-l2-ex12.mp3',
        questions: [
          {
            id: 'b1-m4-l2-ex12-q1',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'What might his friends do if it\'s sunny?',
            correctAnswer: 'Go to the beach',
            options: ['Go to the beach', 'Go to the cinema', 'Play video games'],
            explanation: '"They might go to the beach instead, especially if it\'s sunny."',
          },
          {
            id: 'b1-m4-l2-ex12-q2',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'Tom is sure his friends will visit the Italian restaurant.',
            correctAnswer: 'false',
            explanation: '"One thing I\'m sure about: they may visit the new Italian restaurant." "May" expresa posibilidad, no certeza.',
          },
          {
            id: 'b1-m4-l2-ex12-q3',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'How many possible activities does Tom mention?',
            correctAnswer: 'Four: cinema, beach, video games, and a restaurant',
            options: ['Four: cinema, beach, video games, and a restaurant', 'Two: cinema and beach', 'Only the Italian restaurant'],
            explanation: 'Cinema, beach, video games, y restaurante italiano.',
          },
        ],
      },
    },
    {
      id: 'b1-m4-l2-ex13',
      type: 'writing',
      concept: 'possibility writing',
      difficulty: 3,
      prompt: 'Escribile un email informal a un amigo sobre qué podría pasar en tus próximas vacaciones (usá "might", "may" y "could").',
      promptTranslation: 'Write an informal email to a friend about what might happen on your next vacation.',
      correctAnswer: '',
      explanation: 'Un buen texto usa varias frases con might/may/could para expresar diferentes posibilidades sobre actividades futuras.',
      taskType: 'email',
      targetReader: 'a friend',
      register: 'informal',
      contentPoints: ['Al menos 2 posibilidades diferentes (might/may)', 'Dónde podrías ir y qué podrías hacer', 'Al menos una razón de por qué esa posibilidad'],
      requiresOwnIdea: true,
      minWords: 60,
      maxWords: 100,
    },
    {
      id: 'b1-m4-l2-ex14',
      type: 'speaking',
      concept: 'possibility pronunciation',
      difficulty: 2,
      prompt: 'Escuchá la frase modelo y repetila en voz alta.',
      correctAnswer: 'It might rain later, so we could stay home.',
      explanation: 'Practicá la pronunciación de "might" (/maɪt/) y la entonación de las posibilidades.',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b1-m4-l2-mt1',
      type: 'multiple_choice',
      concept: 'possibility might',
      difficulty: 1,
      prompt: 'Completa (posibilidad): "It ___ rain later."',
      promptTranslation: 'Puede que llueva más tarde.',
      correctAnswer: 'might',
      options: ['might', 'must', "can't"],
      explanation: 'Posibilidad → "might". → It might rain later.',
    },
    {
      id: 'b1-m4-l2-mt2',
      type: 'multiple_choice',
      concept: 'certainty scale',
      difficulty: 2,
      prompt: '¿Qué modal expresa MÁS certeza?',
      promptTranslation: 'Which modal expresses more certainty?',
      correctAnswer: 'must be',
      options: ['must be', 'might be', 'could be'],
      explanation: '"Must be" expresa certeza casi total. "Might" y "could" solo posibilidad.',
    },
    {
      id: 'b1-m4-l2-mt3',
      type: 'error_correction',
      concept: 'possibility form',
      difficulty: 3,
      prompt: 'Corrige el error: "He may is the new manager."',
      correctAnswer: 'He may be the new manager.',
      acceptedAnswers: ['He may be the new manager', 'He may be the new manager.', 'he may be the new manager'],
      acceptApproximate: true,
      explanation: 'Tras "may" el verbo no se conjuga: may be, no "may is".',
    },
    {
      id: 'b1-m4-l2-mt4',
      type: 'translate',
      concept: 'possibility could',
      difficulty: 3,
      prompt: 'Traduce: "Podrían estar perdidos."',
      correctAnswer: 'They could be lost.',
      acceptedAnswers: ['They could be lost', 'They could be lost.', 'They might be lost', 'they could be lost'],
      acceptApproximate: true,
      explanation: '"Podrían" (posibilidad) = could/might. "estar perdidos" = be lost.',
    },
    {
      id: 'b1-m4-l2-mt5',
      type: 'select_correct',
      concept: 'possibility form',
      difficulty: 3,
      prompt: 'Selecciona la frase correcta:',
      promptTranslation: 'Puede estar en una reunión.',
      correctAnswer: 'She may be in a meeting.',
      options: ['She may be in a meeting.', 'She may to be in a meeting.', 'She might is in a meeting.', 'She may be in a meeting to.'],
      explanation: 'Tras "may" el verbo va sin "to" y sin conjugar: may be in a meeting.',
    },
  ],
  reviewItems: ['b1-m4-l1'],
  prerequisites: ['b1-m4-l1'],
}
