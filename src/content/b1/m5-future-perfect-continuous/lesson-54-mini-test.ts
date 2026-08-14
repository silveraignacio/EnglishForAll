import type { Lesson } from '../../types'

export const lesson54MiniTest: Lesson = {
  id: 'b1-m5-l4',
  moduleId: 'm5-future-perfect-continuous',
  order: 3,
  title: 'Mini-test: Future Perfect & Continuous + Degrees of Certainty',
  objective: 'Repasar el future continuous, el future perfect y los grados de certeza, y leer un texto de predicciones sobre el futuro.',
  explanation_es: `Este mini-test repasa el módulo completo sobre el futuro y la certeza.

RECUERDA LAS CLAVES:

1. FUTURE CONTINUOUS (acciones en progreso en un momento futuro):
   - will be + verbo + -ing
   - This time tomorrow, I will be flying to Madrid.
   - She will be working at 9.

2. FUTURE PERFECT (acciones terminadas antes de un momento futuro):
   - will have + participio
   - By 2030, I will have finished my degree.
   - Usamos "by" + momento futuro: by 2030, by 8 p.m., by next year.

3. GRADOS DE CERTEZA (de más a menos seguro):
   - will definitely → casi seguro
   - will probably / be likely to → probable
   - may → posible
   - might → poco probable
   - Posición: will + probably/definitely (nunca "probably will").
   - "likely" siempre con "to": be likely to win.

Errores a evitar:
   - ❌ will be fly → ✅ will be flying
   - ❌ will have finish → ✅ will have finished
   - ❌ probably will → ✅ will probably
   - ❌ likely win → ✅ likely to win`,
  examples: [
    { english: 'This time tomorrow, I will be flying to Madrid.', spanish: 'Mañana a esta hora, estaré volando a Madrid.', note: 'Future continuous.' },
    { english: 'By 2030, I will have finished my degree.', spanish: 'Para 2030, habré terminado mi carrera.', note: 'Future perfect.' },
    { english: 'It will definitely rain.', spanish: 'Seguro que lloverá.', note: 'Casi 100% seguro.' },
    { english: 'They are likely to win.', spanish: 'Es probable que ganen.', note: 'be likely to + verbo.' },
    { english: 'She may arrive late.', spanish: 'Puede que llegue tarde.', note: 'Probabilidad media.' },
  ],
  rule: `Repaso:
- Future continuous: will be + verbo(-ing) → acción en progreso en un momento futuro.
- Future perfect: will have + participio → acción completada antes de un momento futuro (by + momento).
- Grados de certeza: will definitely > will probably / likely to > may > might.
- Posición del adverbio: will probably (nunca "probably will").
- Likely siempre con "to".

Nunca: "will be fly", "will have finish", "probably will", "likely win".`,
  commonMistakes: [
    { wrong: '❌ I will be fly to Madrid tomorrow.', correct: '✅ I will be flying to Madrid tomorrow.', explanation: 'Después de "will be" el verbo lleva -ing: flying.' },
    { wrong: '❌ I will have finish my degree by 2030.', correct: '✅ I will have finished my degree by 2030.', explanation: 'Después de "will have" va el participio: finished.' },
    { wrong: '❌ It probably will rain.', correct: '✅ It will probably rain.', explanation: '"Probably" va después de "will".' },
    { wrong: '❌ They are likely win.', correct: '✅ They are likely to win.', explanation: '"Likely" necesita "to" antes del verbo.' },
  ],
  vocabulary: [
    { word: 'prediction', translation_es: 'predicción', level: 'B1', category: 'nouns', partOfSpeech: 'noun', example: 'This is a prediction about the future.', exampleTranslation: 'Esta es una predicción sobre el futuro.' },
    { word: 'smart city', translation_es: 'ciudad inteligente', level: 'B1', category: 'technology', partOfSpeech: 'noun', example: 'We will have built smart cities.', exampleTranslation: 'Habremos construido ciudades inteligentes.' },
    { word: 'climate change', translation_es: 'cambio climático', level: 'B1', category: 'environment', partOfSpeech: 'noun', example: 'Climate change will probably affect the coast.', exampleTranslation: 'El cambio climático probablemente afectará a la costa.' },
    { word: 'century', translation_es: 'siglo', level: 'B1', category: 'time', partOfSpeech: 'noun', example: 'It will be an exciting century.', exampleTranslation: 'Será un siglo emocionante.' },
    { word: 'technology', translation_es: 'tecnología', level: 'B1', category: 'technology', partOfSpeech: 'noun', example: 'New technologies may solve problems.', exampleTranslation: 'Las nuevas tecnologías pueden resolver problemas.' },
    { word: 'coast', translation_es: 'costa', level: 'B1', category: 'geography', partOfSpeech: 'noun', example: 'It will probably affect the coast.', exampleTranslation: 'Probablemente afectará a la costa.' },
  ],
  grammarPoints: [
    {
      id: 'gp-future-review',
      level: 'B1',
      name: 'Future perfect, continuous & degrees of certainty (review)',
      explanation_es: 'Repaso del future continuous (will be + -ing), el future perfect (will have + participio) y los grados de certeza (will definitely/probably, be likely to, may, might).',
      formula: 'will + be + verb(-ing) | will + have + participle | will + definitely/probably + verb | be + likely + to + verb | may/might + verb',
      examples: ['This time tomorrow, I will be flying.', 'By 2030, I will have finished.', 'It will definitely rain.', 'They are likely to win.'],
    },
  ],
  exercises: [
    {
      id: 'b1-m5-l4-ex1',
      type: 'multiple_choice',
      concept: 'future continuous review',
      difficulty: 1,
      prompt: 'Completa (future continuous): "This time tomorrow, I ___ be flying to Madrid."',
      promptTranslation: 'Mañana a esta hora, estaré volando a Madrid.',
      correctAnswer: 'will',
      options: ['will', 'am', 'was'],
      explanation: 'Future continuous = will be + -ing. → I will be flying to Madrid.',
    },
    {
      id: 'b1-m5-l4-ex2',
      type: 'multiple_choice',
      concept: 'future perfect review',
      difficulty: 2,
      prompt: 'Completa (future perfect): "By 2030, I will have ___ my degree."',
      promptTranslation: 'Para 2030, habré terminado mi carrera.',
      correctAnswer: 'finished',
      options: ['finished', 'finish', 'finishing'],
      explanation: 'Después de "will have" va el participio: finished. → I will have finished my degree.',
    },
    {
      id: 'b1-m5-l4-ex3',
      type: 'fill_blank',
      concept: 'adverb position review',
      difficulty: 2,
      prompt: 'Completa (probable): "She will ___ come."',
      promptTranslation: 'Probablemente vendrá.',
      correctAnswer: 'probably',
      acceptedAnswers: ['probably'],
      explanation: '"Probably" va después de "will": will probably come.',
    },
    {
      id: 'b1-m5-l4-ex4',
      type: 'fill_blank',
      concept: 'future continuous review',
      difficulty: 2,
      prompt: 'Completa con el verbo en -ing: "We will be ___ (have) dinner around 8."',
      promptTranslation: 'Estaremos cenando alrededor de las 8.',
      correctAnswer: 'having',
      acceptedAnswers: ['having'],
      explanation: 'Después de "will be" el verbo lleva -ing: having dinner.',
    },
    {
      id: 'b1-m5-l4-ex5',
      type: 'reorder',
      concept: 'future perfect review',
      difficulty: 3,
      prompt: 'Ordena la frase (future perfect):',
      promptTranslation: 'Habremos construido la casa para el próximo año.',
      words: ['We', 'will', 'have', 'built', 'the', 'house', 'by', 'next', 'year.'],
      correctAnswer: 'We will have built the house by next year.',
      explanation: 'Estructura: will + have + participio (built) + by + momento futuro.',
    },
    {
      id: 'b1-m5-l4-ex6',
      type: 'error_correction',
      concept: 'future continuous review',
      difficulty: 3,
      prompt: 'Corrige el error: "She will be work at 9."',
      correctAnswer: 'She will be working at 9.',
      acceptedAnswers: ['She will be working at 9', 'She will be working at 9.', 'she will be working at 9'],
      acceptApproximate: true,
      explanation: 'Después de "will be" el verbo lleva -ing: working, no "work".',
    },
    {
      id: 'b1-m5-l4-ex7',
      type: 'error_correction',
      concept: 'adverb position review',
      difficulty: 3,
      prompt: 'Corrige el error: "It probably will rain tomorrow."',
      correctAnswer: 'It will probably rain tomorrow.',
      acceptedAnswers: [
        'It will probably rain tomorrow',
        'It will probably rain tomorrow.',
        'it will probably rain tomorrow',
      ],
      acceptApproximate: true,
      explanation: '"Probably" va después de "will": It will probably rain tomorrow.',
    },
    {
      id: 'b1-m5-l4-ex8',
      type: 'translate',
      concept: 'future perfect review',
      difficulty: 4,
      prompt: 'Traduce: "Para 2030, habré terminado mi carrera."',
      correctAnswer: 'By 2030, I will have finished my degree.',
      acceptedAnswers: [
        'By 2030, I will have finished my degree',
        'By 2030, I will have finished my degree.',
        "By 2030, I'll have finished my degree",
        "By 2030, I'll have finished my degree.",
        'by 2030, i will have finished my degree',
      ],
      acceptApproximate: true,
      explanation: '"Para 2030" = By 2030. "habré terminado" = I will have finished (will have + participio).',
    },
    {
      id: 'b1-m5-l4-ex9',
      type: 'match',
      concept: 'future review match',
      difficulty: 3,
      prompt: 'Relaciona cada frase con su estructura:',
      pairs: [
        { left: 'I will be flying to Madrid.', right: 'Future continuous' },
        { left: 'I will have finished my degree.', right: 'Future perfect' },
        { left: 'It will definitely rain.', right: 'Certeza alta (will + definitely)' },
        { left: 'They are likely to win.', right: 'Certeza media (be likely to)' },
        { left: 'He might arrive late.', right: 'Certeza baja (might)' },
      ],
      correctAnswer: 'I will be flying to Madrid.=Future continuous, I will have finished my degree.=Future perfect, It will definitely rain.=Certeza alta (will + definitely), They are likely to win.=Certeza media (be likely to), He might arrive late.=Certeza baja (might)',
      explanation: 'Future continuous = will be + -ing. Future perfect = will have + participio. Grados de certeza: definitely > likely to > might.',
    },
    {
      id: 'b1-m5-l4-ex10',
      type: 'reading',
      concept: 'future predictions reading',
      difficulty: 4,
      prompt: 'Lee el texto de predicciones y responde las preguntas:',
      reading: {
        text: 'What will the future be like? In 2050, the world will probably be very different. By then, we will have built smart cities with electric transport. This time next year, many people will be working from home. Climate change will definitely affect some coastal areas, so engineers will probably build new protections. New technologies may solve many problems, but they might create new ones too. By 2050, scientists will have discovered new ways to produce clean energy. It will definitely be an exciting century.',
        translation: '¿Cómo será el futuro? En 2050, el mundo probablemente será muy diferente. Para entonces, habremos construido ciudades inteligentes con transporte eléctrico. A esta hora el próximo año, mucha gente estará trabajando desde casa. El cambio climático seguramente afectará a algunas zonas costeras, así que los ingenieros probablemente construirán nuevas protecciones. Las nuevas tecnologías pueden resolver muchos problemas, pero quizá creen otros nuevos también. Para 2050, los científicos habrán descubierto nuevas formas de producir energía limpia. Sin duda será un siglo emocionante.',
        questions: [
          {
            id: 'b1-m5-l4-ex10-q1',
            type: 'multiple_choice',
            concept: 'future predictions reading',
            difficulty: 4,
            prompt: '¿Qué habremos construido para 2050?',
            correctAnswer: 'Ciudades inteligentes.',
            options: ['Ciudades inteligentes.', 'Casas de madera.', 'Aeropuertos.'],
            explanation: 'El texto dice: "we will have built smart cities with electric transport." (future perfect.)',
          },
          {
            id: 'b1-m5-l4-ex10-q2',
            type: 'multiple_choice',
            concept: 'future predictions reading',
            difficulty: 4,
            prompt: '¿Qué estará haciendo mucha gente a esta hora el próximo año?',
            correctAnswer: 'Trabajando desde casa.',
            options: ['Trabajando desde casa.', 'Viajando en avión.', 'Construyendo casas.'],
            explanation: 'El texto dice: "many people will be working from home." (future continuous.)',
          },
          {
            id: 'b1-m5-l4-ex10-q3',
            type: 'multiple_choice',
            concept: 'future predictions reading',
            difficulty: 4,
            prompt: '¿Cómo afectará el cambio climático a algunas zonas costeras?',
            correctAnswer: 'Las afectará seguramente (will definitely).',
            options: ['Las afectará seguramente (will definitely).', 'No las afectará.', 'Quizá no las afecte.'],
            explanation: 'El texto dice: "Climate change will definitely affect some coastal areas." (will + definitely, casi seguro.)',
          },
          {
            id: 'b1-m5-l4-ex10-q4',
            type: 'multiple_choice',
            concept: 'future predictions reading',
            difficulty: 4,
            prompt: '¿Qué habrán descubierto los científicos para 2050?',
            correctAnswer: 'Nuevas formas de producir energía limpia.',
            options: ['Nuevas formas de producir energía limpia.', 'Nuevos coches eléctricos.', 'Nuevas ciudades.'],
            explanation: 'El texto dice: "scientists will have discovered new ways to produce clean energy." (future perfect.)',
          },
        ],
      },
      correctAnswer: 'reading complete',
      explanation: 'El texto usa future continuous (will be working), future perfect (will have built, will have discovered) y grados de certeza (will probably, will definitely, may, might).',
    },
    {
      id: 'b1-m5-l4-ex11',
      type: 'sentence_building',
      concept: 'future perfect review',
      difficulty: 4,
      prompt: 'Construye la frase con estas palabras:',
      promptTranslation: 'Estaré volando a Madrid mañana a esta hora.',
      words: ['This', 'time', 'tomorrow,', 'I', 'will', 'be', 'flying', 'to', 'Madrid.'],
      correctAnswer: 'This time tomorrow, I will be flying to Madrid.',
      explanation: 'Estructura: this time tomorrow, + will + be + verbo -ing (flying) + complemento.',
    },
    {
      id: 'b1-m5-l4-ex12',
      type: 'true_false',
      concept: 'future review',
      difficulty: 3,
      prompt: '"Will probably" y "probably will" son ambas correctas.',
      correctAnswer: 'false',
      acceptedAnswers: ['False', 'FALSE', 'f'],
      explanation: 'Falso. La forma correcta es "will probably". "Probably will" no se usa en inglés estándar.',
    },
    {
      id: 'b1-m5-l4-ex13',
      type: 'listening',
      concept: 'future review listening',
      difficulty: 4,
      prompt: 'Escuchá el audio y respondé las preguntas (en inglés, sobre lo que dice).',
      correctAnswer: '',
      explanation: 'Alex habla sobre sus planes combinando future continuous (qué estará haciendo), future perfect (qué habrá conseguido), y grados de certeza (cuán probable es cada cosa).',
      listening: {
        audioText:
          "Hi everyone! Let me tell you about my future plans. This time next year, I will be studying at university — I\'m definitely going there. By the end of my degree, I will have learned advanced programming skills, which will definitely help my career. I\'ll probably be working for a tech company around that time. Next summer, I may be traveling to Europe if I have enough money. It\'s a nice dream, but not certain. I\'m also likely to buy a house by 2030, but that depends on many things. Let\'s see what happens!",
        questions: [
          {
            id: 'b1-m5-l4-ex13-q1',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 4,
            prompt: 'What will Alex be doing this time next year?',
            correctAnswer: 'Studying at university',
            options: ['Studying at university', 'Working for a tech company', 'Traveling to Europe'],
            explanation: '"This time next year, I will be studying at university." (future continuous)',
          },
          {
            id: 'b1-m5-l4-ex13-q2',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 4,
            prompt: 'By the end of his degree, Alex will have learned advanced programming skills.',
            correctAnswer: 'true',
            explanation: '"By the end of my degree, I will have learned advanced programming skills." (future perfect)',
          },
          {
            id: 'b1-m5-l4-ex13-q3',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 4,
            prompt: 'How certain is Alex about buying a house by 2030?',
            correctAnswer: 'Probable (likely), but depends on other factors',
            options: ['Absolutely certain (definitely)', 'Probable (likely), but depends on other factors', 'Not very probable (might)'],
            explanation: '"I\'m also likely to buy a house by 2030, but that depends on many things." (degrees of certainty)',
          },
        ],
      },
    },
    {
      id: 'b1-m5-l4-ex14',
      type: 'writing',
      concept: 'future review writing',
      difficulty: 4,
      prompt: 'Escribe una historia informal sobre qué ocurrirá el próximo año en tu vida, combinando future continuous, future perfect y grados de certeza.',
      promptTranslation: 'Write an informal story about what will happen next year in your life, combining future continuous, future perfect, and degrees of certainty.',
      correctAnswer: '',
      explanation: 'Un buen texto combina las tres estructuras: "will be + -ing" (acciones en progreso), "will have + participio" (acciones completadas), y diferentes grados de certeza (will definitely, will probably, may, might), con un tono narrativo e informal.',
      taskType: 'story',
      targetReader: 'a friend or reader',
      register: 'informal',
      contentPoints: ['Planes que estarás llevando a cabo el próximo año (will be + -ing)', 'Logros que habrás conseguido para cierto momento (will have + participio)'],
      requiresOwnIdea: true,
      minWords: 60,
      maxWords: 100,
    },
    {
      id: 'b1-m5-l4-ex15',
      type: 'speaking',
      concept: 'future review pronunciation',
      difficulty: 3,
      prompt: 'Escuchá la frase modelo y repetila en voz alta.',
      correctAnswer: 'By next summer, I will have traveled to five countries and I\'ll be planning my next adventure.',
      explanation: 'Practicá la transición entre "will have traveled" (future perfect) y "I\'ll be planning" (future continuous), enfatizando ambas acciones.',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b1-m5-l4-mt1',
      type: 'multiple_choice',
      concept: 'future continuous review',
      difficulty: 1,
      prompt: 'Completa: "She ___ be working at 9."',
      promptTranslation: 'Ella estará trabajando a las 9.',
      correctAnswer: 'will',
      options: ['will', 'is', 'does'],
      explanation: 'Future continuous = will be + -ing. → She will be working at 9.',
    },
    {
      id: 'b1-m5-l4-mt2',
      type: 'fill_blank',
      concept: 'future perfect review',
      difficulty: 2,
      prompt: 'Completa con el participio: "We will have ___ (build) the house by next year."',
      promptTranslation: 'Habremos construido la casa para el próximo año.',
      correctAnswer: 'built',
      acceptedAnswers: ['built'],
      explanation: 'El participio de "build" es "built": will have built.',
    },
    {
      id: 'b1-m5-l4-mt3',
      type: 'fill_blank',
      concept: 'degrees of certainty review',
      difficulty: 2,
      prompt: 'Completa (probable): "It will ___ rain tomorrow."',
      promptTranslation: 'Probablemente lloverá mañana.',
      correctAnswer: 'probably',
      acceptedAnswers: ['probably'],
      explanation: '"Probably" va después de "will": will probably rain.',
    },
    {
      id: 'b1-m5-l4-mt4',
      type: 'error_correction',
      concept: 'future perfect review',
      difficulty: 4,
      prompt: 'Corrige el error: "I will have went home by then."',
      correctAnswer: 'I will have gone home by then.',
      acceptedAnswers: ['I will have gone home by then', 'I will have gone home by then.', 'i will have gone home by then'],
      acceptApproximate: true,
      explanation: 'Después de "have" va el participio (gone), no el pasado (went).',
    },
    {
      id: 'b1-m5-l4-mt5',
      type: 'translate',
      concept: 'future review',
      difficulty: 3,
      prompt: 'Traduce: "Es probable que ganen."',
      correctAnswer: 'They are likely to win.',
      acceptedAnswers: ['They are likely to win', 'They are likely to win.', 'they are likely to win'],
      acceptApproximate: true,
      explanation: '"Es probable que" = are likely to + verbo. → They are likely to win.',
    },
  ],
  reviewItems: ['b1-m5-l3'],
  prerequisites: ['b1-m5-l3'],
}
