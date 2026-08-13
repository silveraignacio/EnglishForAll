import type { Lesson } from '../../types'

export const lesson64MiniTest: Lesson = {
  id: 'a2-m6-l4',
  moduleId: 'm6-possibility',
  order: 3,
  title: 'Mini-test: posibilidad, permiso, ofertas y sugerencias',
  objective: 'Repasar can/could, may/might y may I, y practicar el lenguaje funcional para ofrecer ayuda y hacer sugerencias.',
  explanation_es: `En este mini-test repasamos todo el módulo y añadimos el lenguaje funcional para ofrecer y sugerir.

REPASO:
1. CAN → habilidad, permiso y peticiones (informal).
2. COULD → peticiones educadas.
3. MAY / MIGHT → posibilidad (may: más probable/formal; might: menos probable).
4. MAY I...? → pedir permiso formal.

OFERTAS (offers) para ofrecer ayuda:
- Can I help you with that? = ¿Puedo ayudarte con eso?
- Shall I...? = ¿Te...? / ¿Quieres que...? (Shall I carry that for you?)
- I'll... = Yo lo hago. (I'll open the door for you.)

SUGERENCIAS (suggestions):
- Why don't we...? = ¿Por qué no...? (Why don't we order a pizza?)
- Let's... = Vamos a... (Let's watch a film.)

Estos son los pilares del inglés práctico: saber ofrecer ayuda, pedir permiso y proponer planes. ¡Buena suerte!`,
  examples: [
    { english: 'Why don\'t we order a pizza?', spanish: '¿Por qué no pedimos una pizza?', note: 'sugerencia' },
    { english: "Let's watch a film.", spanish: 'Veamos una película.', note: 'sugerencia directa' },
    { english: 'Can I help you with that?', spanish: '¿Puedo ayudarte con eso?', note: 'oferta de ayuda' },
    { english: 'Shall I open the window?', spanish: '¿Abro la ventana?', note: 'oferta (shall I)' },
    { english: "I'll carry the bags for you.", spanish: 'Te llevo las bolsas.', note: 'oferta con will' },
    { english: 'It may rain later. Take an umbrella!', spanish: 'Puede que llueva más tarde. ¡Coge un paraguas!', note: 'posibilidad' },
  ],
  rule: `Posibilidad: may/might + verbo.
Permiso: Can I...? (informal) → Could I...? → May I...? (formal).

Ofertas (ofrecer ayuda):
- Can I help you? = ¿Puedo ayudarte?
- Shall I + verbo? = ¿Quieres que...? (solo I/we)
- I'll + verbo = Yo lo hago.

Sugerencias (proponer):
- Why don't we + verbo? = ¿Por qué no...?
- Let's + verbo = Vamos a...`,
  commonMistakes: [
    { wrong: '❌ Let\'s to watch a film.', correct: '✅ Let\'s watch a film.', explanation: 'Después de "Let\'s" el verbo va sin "to".' },
    { wrong: '❌ Why don\'t we to order a pizza?', correct: '✅ Why don\'t we order a pizza?', explanation: 'Después de "Why don\'t we" el verbo va sin "to".' },
    { wrong: '❌ May you help me?', correct: '✅ Can you help me? / Could you help me?', explanation: '"May" no se usa para pedir a otra persona que haga algo. Usa "can" o "could".' },
  ],
  vocabulary: [
    { word: 'offer', translation_es: 'oferta, ofrecimiento', level: 'A2', category: 'functional', partOfSpeech: 'noun/verb', example: 'That is a kind offer.', exampleTranslation: 'Eso es un ofrecimiento amable.' },
    { word: 'suggestion', translation_es: 'sugerencia', level: 'A2', category: 'functional', partOfSpeech: 'noun', example: 'Good suggestion!', exampleTranslation: '¡Buena sugerencia!' },
    { word: "Let's", translation_es: 'vamos a / -emos (sugerencia)', level: 'A2', category: 'functional', partOfSpeech: 'phrase', example: "Let's watch a film.", exampleTranslation: 'Veamos una película.' },
    { word: 'to order', translation_es: 'pedir (comida)', level: 'A2', category: 'functional', partOfSpeech: 'verb', example: "Why don't we order a pizza?", exampleTranslation: '¿Por qué no pedimos una pizza?' },
    { word: 'umbrella', translation_es: 'paraguas', level: 'A2', category: 'functional', partOfSpeech: 'noun', example: 'Take an umbrella!', exampleTranslation: '¡Coge un paraguas!' },
  ],
  grammarPoints: [
    {
      id: 'gp-offers-suggestions',
      level: 'A2',
      name: 'Offers & suggestions',
      explanation_es: 'Para ofrecer ayuda: "Can I help you?", "Shall I...?", "I\'ll...". Para sugerir: "Why don\'t we...?" y "Let\'s...".',
      formula: "Shall I + verbo? | Why don't we + verbo? | Let's + verbo",
      examples: ['Can I help you with that?', 'Shall I open the window?', "Why don't we order a pizza?", "Let's watch a film."],
    },
  ],
  exercises: [
    {
      id: 'a2-m6-l4-ex1',
      type: 'multiple_choice',
      concept: 'offers - functional language',
      difficulty: 1,
      prompt: 'Ves a alguien cargando bolsas pesadas y quieres ofrecer ayuda. ¿Qué dices?',
      correctAnswer: 'Can I help you with that?',
      options: ['Can I help you with that?', 'Why don\'t you carry them?', 'Let\'s you carry them.'],
      explanation: 'Ofrecer ayuda → "Can I help you with that?" (o "Shall I carry that?").',
    },
    {
      id: 'a2-m6-l4-ex2',
      type: 'multiple_choice',
      concept: 'suggestions - let\'s',
      difficulty: 1,
      prompt: 'Quieres proponer ver una película. ¿Qué dices?',
      correctAnswer: "Let's watch a film.",
      options: ["Let's watch a film.", "Let's to watch a film.", 'Lets watch a film.'],
      explanation: '"Let\'s" + verbo sin "to": Let\'s watch a film.',
    },
    {
      id: 'a2-m6-l4-ex3',
      type: 'fill_blank',
      concept: 'suggestions - why don\'t we',
      difficulty: 2,
      prompt: 'Completa: "Why ___ we order a pizza?"',
      promptTranslation: '¿Por qué no pedimos una pizza?',
      correctAnswer: "don't",
      acceptedAnswers: ["don't", 'do not'],
      explanation: 'Sugerencia → "Why don\'t we + verbo": Why don\'t we order a pizza?',
    },
    {
      id: 'a2-m6-l4-ex4',
      type: 'true_false',
      concept: 'offers - review',
      difficulty: 2,
      prompt: '"Shall I carry that for you?" es una forma de ofrecer ayuda.',
      correctAnswer: 'true',
      explanation: 'Verdadero. "Shall I...?" ofrece hacer algo por otra persona.',
    },
    {
      id: 'a2-m6-l4-ex5',
      type: 'reorder',
      concept: 'suggestions - order',
      difficulty: 2,
      prompt: 'Ordena las palabras: pizza / order / we / why / a / don\'t',
      promptTranslation: '¿Por qué no pedimos una pizza?',
      correctAnswer: "Why don't we order a pizza?",
      words: ["Why", "don't", "we", "order", "a", "pizza"],
      explanation: 'Sugerencia → Why don\'t we + verbo + complemento: Why don\'t we order a pizza?',
    },
    {
      id: 'a2-m6-l4-ex6',
      type: 'match',
      concept: 'functional language - review',
      difficulty: 2,
      prompt: 'Relaciona cada expresión con su función:',
      pairs: [
        { left: 'Can I help you?', right: 'ofrecer ayuda' },
        { left: 'Shall I open the window?', right: 'ofrecer hacer algo (yo)' },
        { left: "I'll pay for the coffee.", right: 'oferta con will' },
        { left: "Why don't we go out?", right: 'hacer una sugerencia' },
        { left: "Let's watch a film.", right: 'hacer una sugerencia' },
        { left: 'May I come in?', right: 'pedir permiso (formal)' },
      ],
      correctAnswer: 'Can I help you?=ofrecer ayuda, Shall I open the window?=ofrecer hacer algo, I\'ll pay=oferta con will, Why don\'t we go out?=sugerencia, Let\'s watch a film.=sugerencia, May I come in?=pedir permiso formal',
      explanation: 'Can I help / Shall I / I\'ll = ofertas; Why don\'t we / Let\'s = sugerencias; May I = permiso formal.',
    },
    {
      id: 'a2-m6-l4-ex7',
      type: 'translate',
      concept: 'suggestions - translate',
      difficulty: 3,
      prompt: 'Traduce: "¿Por qué no pedimos una pizza?"',
      correctAnswer: "Why don't we order a pizza?",
      acceptedAnswers: ["Why don't we order a pizza", "Why don't we order a pizza?", "Let's order a pizza"],
      acceptApproximate: true,
      explanation: 'Sugerencia → "Why don\'t we + verbo": Why don\'t we order a pizza?',
    },
    {
      id: 'a2-m6-l4-ex8',
      type: 'error_correction',
      concept: 'suggestions - no "to"',
      difficulty: 3,
      prompt: 'Corrige el error: "Let\'s to watch a film."',
      correctAnswer: "Let's watch a film.",
      acceptedAnswers: ["Let's watch a film", "Let's watch a film.", 'Why don\'t we watch a film?', 'Why don\'t we watch a film?'],
      acceptApproximate: true,
      explanation: 'Después de "Let\'s" el verbo va sin "to": Let\'s watch a film.',
    },
    {
      id: 'a2-m6-l4-ex9',
      type: 'reading',
      concept: 'possibility & permission reading',
      difficulty: 4,
      prompt: 'Lee la conversación en una oficina y responde:',
      reading: {
        text: 'Receptionist: Good morning. May I help you?\nVisitor: Yes, please. May I see Mr. Davis?\nReceptionist: I\'m sorry, he is in a meeting. He might be free at 4 p.m. You may wait in the lounge.\nVisitor: Thank you. May I use your phone?\nReceptionist: Of course. You can use the one on the table.\nVisitor: Thanks. It might rain this afternoon. Could I leave my umbrella here?\nReceptionist: Yes, you may. Let\'s put it next to the door.',
        translation: 'Recepcionista: Buenos días. ¿Puedo ayudarle?\nVisitante: Sí, por favor. ¿Puedo ver al señor Davis?\nRecepcionista: Lo siento, está en una reunión. Puede que esté libre a las 4 de la tarde. Puede esperar en la sala.\nVisitante: Gracias. ¿Puedo usar su teléfono?\nRecepcionista: Por supuesto. Puede usar el de la mesa.\nVisitante: Gracias. Puede que llueva esta tarde. ¿Podría dejar mi paraguas aquí?\nRecepcionista: Sí, puede. Vamos a ponerlo junto a la puerta.',
        questions: [
          {
            id: 'a2-m6-l4-ex9-q1',
            type: 'multiple_choice',
            concept: 'possibility & permission reading',
            difficulty: 4,
            prompt: '¿Cuándo podría estar libre el señor Davis?',
            correctAnswer: 'a las 4 de la tarde',
            options: ['a las 4 de la tarde', 'por la mañana', 'el lunes'],
            explanation: 'La recepcionista dice: "He might be free at 4 p.m."',
          },
          {
            id: 'a2-m6-l4-ex9-q2',
            type: 'multiple_choice',
            concept: 'possibility & permission reading',
            difficulty: 4,
            prompt: '¿Dónde puede el visitante usar un teléfono?',
            correctAnswer: 'el de la mesa',
            options: ['el de la mesa', 'el de la puerta', 'ninguno'],
            explanation: 'La recepcionista dice: "You can use the one on the table."',
          },
          {
            id: 'a2-m6-l4-ex9-q3',
            type: 'multiple_choice',
            concept: 'possibility & permission reading',
            difficulty: 4,
            prompt: '¿Qué puede pasar esta tarde, según el visitante?',
            correctAnswer: 'puede que llueva',
            options: ['puede que llueva', 'puede que nieve', 'puede que haga calor'],
            explanation: 'El visitante dice: "It might rain this afternoon."',
          },
        ],
      },
      correctAnswer: 'reading complete',
      explanation: 'El diálogo usa "may I" para pedir permiso formal, "might" para posibilidad y "let\'s" para sugerir.',
    },
  ],
  miniTest: [
    {
      id: 'a2-m6-l4-mt1',
      type: 'multiple_choice',
      concept: 'offers - functional language',
      difficulty: 1,
      prompt: 'Completa: "___ I help you with that?" (oferta)',
      promptTranslation: '¿Puedo ayudarte con eso?',
      correctAnswer: 'Can',
      options: ['Can', 'Mays', 'May to'],
      explanation: 'Ofrecer ayuda → "Can I help you?"',
    },
    {
      id: 'a2-m6-l4-mt2',
      type: 'fill_blank',
      concept: 'suggestions - let\'s',
      difficulty: 2,
      prompt: 'Completa: "___ watch a film." (sugerencia)',
      promptTranslation: 'Veamos una película.',
      correctAnswer: "Let's",
      acceptedAnswers: ["Let's", "Let's watch"],
      explanation: '"Let\'s" + verbo sin "to": Let\'s watch a film.',
    },
    {
      id: 'a2-m6-l4-mt3',
      type: 'translate',
      concept: 'possibility - translate',
      difficulty: 3,
      prompt: 'Traduce: "Puede que llueva más tarde."',
      correctAnswer: 'It may rain later.',
      acceptedAnswers: ['It may rain later', 'It might rain later', 'It may rain later.', 'It might rain later.'],
      acceptApproximate: true,
      explanation: '"Puede que" → may/might + verbo: It may rain later.',
    },
    {
      id: 'a2-m6-l4-mt4',
      type: 'error_correction',
      concept: 'functional language - no "to"',
      difficulty: 3,
      prompt: 'Corrige el error: "Why don\'t we to go out?"',
      correctAnswer: "Why don't we go out?",
      acceptedAnswers: ["Why don't we go out", "Why don't we go out?", "Let's go out", "Let's go out?"],
      acceptApproximate: true,
      explanation: 'Después de "Why don\'t we" el verbo va sin "to": Why don\'t we go out?',
    },
    {
      id: 'a2-m6-l4-mt5',
      type: 'true_false',
      concept: 'permission - review',
      difficulty: 4,
      prompt: '"May you help me?" es una forma correcta de pedir ayuda.',
      correctAnswer: 'false',
      explanation: 'Falso. Para pedir ayuda a otra persona usamos "Can you...?" o "Could you...?". "May I...?" es para pedir permiso para uno mismo.',
    },
  ],
  reviewItems: ['a2-m6-l3'],
  prerequisites: ['a2-m6-l3'],
}
