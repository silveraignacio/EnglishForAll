import type { Lesson } from '../../types'

export const lesson121UsedTo: Lesson = {
  id: 'b1-m12-l1',
  moduleId: 'm12-used-to-tags',
  order: 0,
  title: 'used to (hábitos y estados del pasado)',
  objective: 'Hablar de hábitos y situaciones del pasado que ya no son ciertos con used to, y formar su negativo y sus preguntas.',
  explanation_es: `"Used to" se usa para hablar de hábitos o situaciones del PASADO que ya no existen en el presente.

- I used to play football when I was a kid. = Solía jugar al fútbol cuando era niño. (Ya no juego.)
- She used to live in Barcelona. = Ella vivía en Barcelona. (Ya no vive allí.)

Es como el "solía / acostumbraba a" del español. Solo existe en pasado.

FORMA AFIRMATIVA: sujeto + used to + verbo
- I used to play... / She used to live...

FORMA NEGATIVA: sujeto + didn't + use to + verbo
- We didn't use to have internet. = No solíamos tener internet.
- ¡CUIDADO! En negativo, el verbo vuelve a "use" (sin -d): didn't use to.

FORMA PREGUNTA: Did + sujeto + use to + verbo?
- Did you use to smoke? = ¿Solías fumar?

Tres formas clave:
- Afirmativo: used to + verbo
- Negativo: didn't use to + verbo
- Pregunta: Did + sujeto + use to + verbo?

"Used to" se usa para hábitos (I used to play football) y para estados (I used to have a dog). NO se usa para acciones puntuales de una vez: ❌ I used to call you yesterday → ✅ I called you yesterday.`,
  examples: [
    { english: 'I used to play football when I was a kid.', spanish: 'Solía jugar al fútbol cuando era niño.', note: 'hábito pasado que ya no ocurre.' },
    { english: 'She used to live in Barcelona.', spanish: 'Ella vivía en Barcelona.', note: 'estado pasado que ya no es cierto.' },
    { english: 'We didn\'t use to have internet.', spanish: 'No solíamos tener internet.', note: 'negativo: didn\'t + use to.' },
    { english: 'Did you use to smoke?', spanish: '¿Solías fumar?', note: 'pregunta: Did + use to.' },
    { english: 'He used to be very shy.', spanish: 'Él solía ser muy tímido.' },
  ],
  rule: `- Afirmativo: sujeto + used to + verbo: I used to play football.
- Negativo: sujeto + didn't use to + verbo: We didn't use to have internet.
- Pregunta: Did + sujeto + use to + verbo? : Did you use to smoke?
- "Used to" describe hábitos y estados del pasado que ya no son ciertos. NO se usa para acciones puntuales.`,
  formation: {
    title: 'Cómo se forma used to',
    intro: 'used to expresa hábitos y estados del pasado que ya no son ciertos. En afirmativo es used to + verbo; en negativo y preguntas el verbo vuelve a "use" tras did/didn\'t.',
    patterns: [
      {
        name: 'Afirmativo',
        formula: 'Sujeto + used to + verbo en forma base + complemento',
        examples: [
          { english: 'I used to play football when I was a kid.', spanish: 'Solía jugar al fútbol cuando era niño.' },
          { english: 'She used to live in Barcelona.', spanish: 'Ella vivía en Barcelona.' },
          { english: 'He used to be very shy.', spanish: 'Él solía ser muy tímido.' },
        ],
        note: 'used to sirve para hábitos y para estados.',
      },
      {
        name: 'Negativo',
        formula: 'Sujeto + didn\'t + use to + verbo en forma base + complemento',
        examples: [
          { english: 'We didn\'t use to have internet.', spanish: 'No solíamos tener internet.' },
        ],
        note: 'Tras "didn\'t" la forma es "use to", sin -d.',
      },
      {
        name: 'Pregunta',
        formula: 'Did + sujeto + use to + verbo en forma base + ...?',
        examples: [
          { english: 'Did you use to smoke?', spanish: '¿Solías fumar?' },
        ],
      },
    ],
    notes: [
      'En afirmativo siempre "used to" (con -d): I used to play (no "I use to play").',
      'En negativo y pregunta la -d desaparece: didn\'t use to, Did you use to.',
      'NO se usa para acciones puntuales: I called you yesterday (no "I used to call you yesterday").',
    ],
  },
  commonMistakes: [
    { wrong: '❌ I use to play football.', correct: '✅ I used to play football.', explanation: 'En afirmativo la forma correcta es "used to", con -d: I used to play.' },
    { wrong: '❌ I didn\'t used to smoke.', correct: '✅ I didn\'t use to smoke.', explanation: 'Después de "didn\'t" el verbo vuelve a la forma base "use to": didn\'t use to.' },
    { wrong: '❌ Did you used to play?', correct: '✅ Did you use to play?', explanation: 'En las preguntas con "Did", usamos "use to" (sin -d): Did you use to play?' },
    { wrong: '❌ I used to call you yesterday.', correct: '✅ I called you yesterday.', explanation: '"used to" no se usa para acciones puntuales de una sola vez; para eso usamos el pasado simple.' },
  ],
  vocabulary: [
    { word: 'used to', translation_es: 'solía, acostumbraba a', level: 'B1', category: 'grammar', partOfSpeech: 'phrase', example: 'I used to walk to school.', exampleTranslation: 'Solía ir andando al colegio.' },
    { word: 'habit', translation_es: 'hábito, costumbre', level: 'B1', category: 'nouns', partOfSpeech: 'noun', example: 'Reading is a healthy habit.', exampleTranslation: 'Leer es un hábito saludable.' },
    { word: 'when I was a kid', translation_es: 'cuando era niño', level: 'B1', category: 'expressions', partOfSpeech: 'phrase', example: 'When I was a kid, I used to collect stamps.', exampleTranslation: 'Cuando era niño, solía coleccionar sellos.' },
  ],
  grammarPoints: [
    {
      id: 'gp-used-to',
      level: 'B1',
      name: 'used to (past habits and states)',
      explanation_es: 'used to expresa hábitos y estados del pasado que ya no son ciertos. En negativo y preguntas se convierte en "use to" tras did/didn\'t.',
      formula: 'used to + verbo | didn\'t use to + verbo | Did + sujeto + use to + verbo?',
      examples: ['I used to play football.', 'We didn\'t use to have internet.', 'Did you use to smoke?'],
    },
  ],
  exercises: [
    {
      id: 'b1-m12-l1-ex1',
      type: 'multiple_choice',
      concept: 'used to + verb',
      difficulty: 1,
      prompt: 'Completa: "I ___ to play football when I was a kid."',
      promptTranslation: 'Solía jugar al fútbol cuando era niño.',
      correctAnswer: 'used',
      options: ['used', 'use', 'using'],
      explanation: 'Forma afirmativa: sujeto + used to + verbo. → I used to play.',
    },
    {
      id: 'b1-m12-l1-ex2',
      type: 'multiple_choice',
      concept: 'used to for past states',
      difficulty: 1,
      prompt: 'Completa: "She ___ to live in Barcelona."',
      promptTranslation: 'Ella vivía en Barcelona.',
      correctAnswer: 'used',
      options: ['used', 'uses', 'use'],
      explanation: '"used to" también expresa estados pasados: She used to live in Barcelona.',
    },
    {
      id: 'b1-m12-l1-ex3',
      type: 'fill_blank',
      concept: 'negative didn\'t use to',
      difficulty: 2,
      prompt: 'Completa: "We didn\'t ___ to have internet in 2005."',
      promptTranslation: 'No solíamos tener internet en 2005.',
      correctAnswer: 'use',
      acceptedAnswers: ['use', 'Use'],
      explanation: 'Negativo: didn\'t + use to (el verbo vuelve a la forma base, sin -d).',
    },
    {
      id: 'b1-m12-l1-ex4',
      type: 'true_false',
      concept: 'negative form',
      difficulty: 2,
      prompt: '"I didn\'t used to like coffee" es la forma negativa correcta.',
      promptTranslation: '"I didn\'t used to like coffee" is the correct negative form.',
      correctAnswer: 'false',
      acceptedAnswers: ['False', 'FALSE', 'f'],
      explanation: 'Falso. Tras "didn\'t" usamos "use to" (sin -d): I didn\'t use to like coffee.',
    },
    {
      id: 'b1-m12-l1-ex5',
      type: 'error_correction',
      concept: 'didn\'t use to',
      difficulty: 3,
      prompt: 'Corrige el error: "She didn\'t used to smoke."',
      promptTranslation: 'Ella no solía fumar.',
      correctAnswer: 'She didn\'t use to smoke.',
      acceptedAnswers: ['She didn\'t use to smoke', 'She didn\'t use to smoke.', 'she didn\'t use to smoke'],
      acceptApproximate: true,
      explanation: 'Después de "didn\'t" la forma es "use to" (sin -d): didn\'t use to smoke.',
    },
    {
      id: 'b1-m12-l1-ex6',
      type: 'translate',
      concept: 'used to',
      difficulty: 3,
      prompt: 'Traduce: "Solía jugar al fútbol cuando era niño."',
      promptTranslation: 'I used to play football when I was a kid.',
      correctAnswer: 'I used to play football when I was a kid.',
      acceptedAnswers: ['I used to play football when I was a kid', 'I used to play football when I was a kid.', 'i used to play football when i was a kid'],
      acceptApproximate: true,
      explanation: '"Solía jugar" = I used to play. Forma afirmativa: used to + verbo.',
    },
    {
      id: 'b1-m12-l1-ex7',
      type: 'reorder',
      concept: 'question Did + use to',
      difficulty: 3,
      prompt: 'Ordena las palabras: Did / use / you / to / smoke?',
      promptTranslation: '¿Solías fumar?',
      correctAnswer: 'Did you use to smoke?',
      words: ['Did', 'you', 'use', 'to', 'smoke?'],
      explanation: 'Pregunta: Did + sujeto + use to + verbo. → Did you use to smoke?',
    },
    {
      id: 'b1-m12-l1-ex8',
      type: 'multiple_choice',
      concept: 'question with use to',
      difficulty: 3,
      prompt: 'Completa: "Did she ___ to play tennis?"',
      promptTranslation: '¿Solía ella jugar al tenis?',
      correctAnswer: 'use',
      options: ['use', 'used', 'using'],
      explanation: 'En preguntas con "Did" usamos "use to" (sin -d): Did she use to play?',
    },
    {
      id: 'b1-m12-l1-ex9',
      type: 'match',
      concept: 'used to matching',
      difficulty: 3,
      prompt: 'Relaciona cada frase con su traducción.',
      promptTranslation: 'Match each sentence with its translation.',
      correctAnswer: 'I used to play football.=Solía jugar al fútbol.; She used to live in Barcelona.=Ella vivía en Barcelona.; We didn\'t use to have internet.=No solíamos tener internet.; Did you use to smoke?=¿Solías fumar?; He used to be very shy.=Él solía ser muy tímido.',
      pairs: [
        { left: 'I used to play football.', right: 'Solía jugar al fútbol.' },
        { left: 'She used to live in Barcelona.', right: 'Ella vivía en Barcelona.' },
        { left: 'We didn\'t use to have internet.', right: 'No solíamos tener internet.' },
        { left: 'Did you use to smoke?', right: '¿Solías fumar?' },
        { left: 'He used to be very shy.', right: 'Él solía ser muy tímido.' },
      ],
      explanation: 'Afirmativo: used to + verbo. Negativo: didn\'t use to. Pregunta: Did...use to?',
    },
    {
      id: 'b1-m12-l1-ex10',
      type: 'true_false',
      concept: 'used to for one-time actions',
      difficulty: 4,
      prompt: '"Used to" sirve para acciones puntuales de una sola vez en el pasado.',
      promptTranslation: '"Used to" is used for one-time actions in the past.',
      correctAnswer: 'false',
      acceptedAnswers: ['False', 'FALSE', 'f'],
      explanation: 'Falso. "used to" describe hábitos y estados, no acciones puntuales. Para una acción de una vez usamos el pasado simple.',
    },
    {
      id: 'b1-m12-l1-ex11',
      type: 'listening',
      concept: 'used to listening comprehension',
      difficulty: 3,
      prompt: 'Escuchá el audio y respondé las preguntas (en inglés, sobre lo que dice).',
      correctAnswer: '',
      explanation: 'Sarah habla sobre sus hábitos de la infancia: solía jugar al fútbol, vivía en una pequeña ciudad, y no tenía internet. Ahora vive en la ciudad y tiene una vida muy diferente.',
      listening: {
        audioText:
          "When I was a kid, I used to play football every day with my friends. We used to live in a small town, and everyone knew each other. I didn't use to have a computer or internet back then, so we would spend hours outdoors. My parents used to be very strict about bedtime — I had to go to bed at nine o'clock. Now I live in a big city, and my life is completely different. I work long hours and I barely have time for sports.",
        audioUrl: '/audio/tts/b1-m12-l1-ex11.mp3',
        questions: [
          {
            id: 'b1-m12-l1-ex11-q1',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'What did Sarah use to do every day as a kid?',
            correctAnswer: 'Play football with her friends',
            options: ['Play football with her friends', 'Play computer games', 'Work in a big city'],
            explanation: '"I used to play football every day with my friends."',
          },
          {
            id: 'b1-m12-l1-ex11-q2',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'Sarah used to have internet when she was a child.',
            correctAnswer: 'false',
            explanation: '"I didn\'t use to have a computer or internet back then."',
          },
          {
            id: 'b1-m12-l1-ex11-q3',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What was her bedtime when she was a kid?',
            correctAnswer: 'Nine o\'clock',
            options: ['Eight o\'clock', 'Nine o\'clock', 'Ten o\'clock'],
            explanation: '"My parents used to be very strict about bedtime — I had to go to bed at nine o\'clock."',
          },
        ],
      },
    },
    {
      id: 'b1-m12-l1-ex12',
      type: 'writing',
      concept: 'used to writing',
      difficulty: 3,
      prompt: 'Escribile un email informal a un viejo amigo/a describiendo los hábitos que solías tener cuando eran niños (usá used to).',
      promptTranslation: 'Write an informal email to an old friend describing the habits you used to have as kids.',
      correctAnswer: '',
      explanation: 'Un buen texto usa varias frases con "used to" (afirmativo y negativo) para describir hábitos y estados pasados de la infancia.',
      taskType: 'email',
      targetReader: 'an old friend',
      register: 'informal',
      contentPoints: ['Hábitos específicos que solías tener cuando eras niño/a', 'Al menos una cosa que no solías hacer'],
      requiresOwnIdea: true,
      minWords: 60,
      maxWords: 100,
    },
    {
      id: 'b1-m12-l1-ex13',
      type: 'speaking',
      concept: 'used to pronunciation',
      difficulty: 2,
      prompt: 'Escuchá la frase modelo y repetila en voz alta.',
      correctAnswer: 'When I was a kid, I used to live in a small town.',
      explanation: 'Practicá la pronunciación de "used to" (/juːst tə/) y la entonación de la frase completa.',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b1-m12-l1-mt1',
      type: 'multiple_choice',
      concept: 'used to affirmative',
      difficulty: 1,
      prompt: 'Completa: "We ___ to live in a small flat."',
      promptTranslation: 'Solíamos vivir en un piso pequeño.',
      correctAnswer: 'used',
      options: ['used', 'use', 'using'],
      explanation: 'Afirmativo: used to + verbo. → We used to live.',
    },
    {
      id: 'b1-m12-l1-mt2',
      type: 'fill_blank',
      concept: 'negative use to',
      difficulty: 2,
      prompt: 'Completa: "They didn\'t ___ to eat meat."',
      promptTranslation: 'No solían comer carne.',
      correctAnswer: 'use',
      acceptedAnswers: ['use', 'Use'],
      explanation: 'Negativo: didn\'t + use to (sin -d).',
    },
    {
      id: 'b1-m12-l1-mt3',
      type: 'error_correction',
      concept: 'question use to',
      difficulty: 3,
      prompt: 'Corrige el error: "Did he used to work here?"',
      promptTranslation: '¿Solía trabajar aquí?',
      correctAnswer: 'Did he use to work here?',
      acceptedAnswers: ['Did he use to work here', 'Did he use to work here?', 'did he use to work here'],
      acceptApproximate: true,
      explanation: 'En preguntas con "Did" usamos "use to" (sin -d): Did he use to work here?',
    },
    {
      id: 'b1-m12-l1-mt4',
      type: 'translate',
      concept: 'used to',
      difficulty: 3,
      prompt: 'Traduce: "No solíamos tener internet."',
      promptTranslation: 'We didn\'t use to have internet.',
      correctAnswer: 'We didn\'t use to have internet.',
      acceptedAnswers: ['We didn\'t use to have internet', 'We didn\'t use to have internet.', 'we didn\'t use to have internet'],
      acceptApproximate: true,
      explanation: 'Negativo: didn\'t + use to + verbo. → We didn\'t use to have internet.',
    },
    {
      id: 'b1-m12-l1-mt5',
      type: 'multiple_choice',
      concept: 'which is correct',
      difficulty: 4,
      prompt: '¿Cuál es la frase correcta?',
      promptTranslation: 'Which sentence is correct?',
      correctAnswer: 'I used to get up early when I was young.',
      options: ['I used to get up early when I was young.', 'I use to get up early when I was young.', 'I used to got up early when I was young.'],
      explanation: 'Afirmativo: used to + verbo en forma base (get up).',
    },
  ],
  reviewItems: ['b1-m11-l5'],
  prerequisites: ['b1-m11-l5'],
}
