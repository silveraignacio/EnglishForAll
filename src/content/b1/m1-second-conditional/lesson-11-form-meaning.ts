import type { Lesson } from '../../types'

export const lesson11FormMeaning: Lesson = {
  id: 'b1-m1-l1',
  moduleId: 'm1-second-conditional',
  order: 0,
  title: 'Second Conditional: forma y significado',
  objective: 'Formar hipótesis irreales o imaginarias en presente usando if + past simple + would/could.',
  explanation_es: `El segundo condicional (second conditional) sirve para hablar de situaciones IMAGINARIAS o hipotéticas en el presente o futuro: cosas que no son reales ahora, pero que nos gusta imaginar.

Recuerda: cuando hablamos de una condición imaginaria, ya no usamos el primer condicional (if + present simple + will), porque ese sirve para cosas posibles.

Estructura:
- If + past simple , + would / could + verbo base

Ejemplos:
- If I had more money, I would travel. = Si tuviera más dinero, viajaría.
- If she spoke English, she could get the job. = Si ella hablara inglés, podría conseguir el trabajo.

Puntos importantes:

1. Usamos "past simple" DESPUÉS de if, pero NO estamos hablando del pasado. Estamos hablando de una situación imaginaria ahora. Por eso "If I had money" significa "si (ahora) tuviera dinero", no "si tuve dinero".

2. En la parte con "would", el verbo va en infinitivo (sin to): I would travel, never "I would to travel".

3. Con "he, she, it", usamos "were" en lugar de "was" para I/he/she/it: "If I were you", "If he were rich". Es la forma "subjuntiva" en inglés. En conversación informal, mucha gente dice "was", pero la forma correcta y educada es "were".

4. "Could" es una alternativa a "would": expresa posibilidad o capacidad en la hipótesis. If I spoke English, I could get the job. = Si hablara inglés, podría conseguir el trabajo.

5. Puedes invertir el orden: "I would travel if I had more money." Cuando "if" está al principio, ponemos coma después de la condición.`,
  examples: [
    { english: 'If I had more money, I would travel.', spanish: 'Si tuviera más dinero, viajaría.', note: 'Situación imaginaria en el presente.' },
    { english: 'If she spoke English, she could get the job.', spanish: 'Si ella hablara inglés, podría conseguir el trabajo.', note: 'could = posibilidad/capacidad.' },
    { english: 'If I were you, I would study more.', spanish: 'Si yo fuera tú, estudiaría más.', note: 'were con I, aunque sea coloquial "was".' },
    { english: 'If we lived near the beach, we would swim every day.', spanish: 'Si viviéramos cerca de la playa, nadaríamos todos los días.' },
    { english: 'He would buy a new car if he had the money.', spanish: 'Él compraría un coche nuevo si tuviera el dinero.', note: 'Orden invertido, sin coma.' },
    { english: 'If I knew the answer, I would tell you.', spanish: 'Si supiera la respuesta, te la diría.' },
  ],
  rule: `Fórmula:
If + past simple , + would/could + verbo base
- If I had more time, I would learn guitar.
- If she knew him, she could help him.

Reglas:
1. La parte con "if" usa past simple, pero habla de algo IRREAL en el presente.
2. La parte principal usa would (o could) + verbo en infinitivo.
3. Con I / he / she / it, la forma correcta es "were": If I were, If she were.
4. Orden invertido (sin coma): I would travel if I had money.

Contracción: would se contrae a 'd. If I were you, I'd study more.`,
  commonMistakes: [
    { wrong: '❌ If I would have more money, I would travel.', correct: '✅ If I had more money, I would travel.', explanation: 'Después de "if" usamos past simple, nunca "would". Solo hay un "would", en la parte principal.' },
    { wrong: '❌ If I was you, I would call her.', correct: '✅ If I were you, I would call her.', explanation: 'La forma correcta y formal es "were" con I. En la frase hecha "If I were you" siempre usamos were.' },
    { wrong: '❌ If I had more money, I will travel.', correct: '✅ If I had more money, I would travel.', explanation: 'Si usamos past simple en la condición, la parte principal debe llevar "would", no "will".' },
    { wrong: '❌ If she speaks English, she could get the job.', correct: '✅ If she spoke English, she could get the job.', explanation: 'Para una hipótesis irreal usamos past simple (spoke), no present simple (speaks).' },
  ],
  vocabulary: [
    { word: 'would', translation_es: 'haría / podría (condicional)', level: 'B1', category: 'conditionals', partOfSpeech: 'modal verb', example: 'I would travel more.', exampleTranslation: 'Viajaría más.' },
    { word: 'could', translation_es: 'podría', level: 'B1', category: 'conditionals', partOfSpeech: 'modal verb', example: 'She could get the job.', exampleTranslation: 'Ella podría conseguir el trabajo.' },
    { word: 'imaginary', translation_es: 'imaginario/irreal', level: 'B1', category: 'conditionals', partOfSpeech: 'adjective', example: 'This is an imaginary situation.', exampleTranslation: 'Esta es una situación imaginaria.' },
    { word: 'hypothesis', translation_es: 'hipótesis', level: 'B1', category: 'conditionals', partOfSpeech: 'noun', example: 'A hypothesis is an unreal situation.', exampleTranslation: 'Una hipótesis es una situación irreal.' },
    { word: 'if', translation_es: 'si', level: 'A1', category: 'conditionals', partOfSpeech: 'conjunction', example: 'If I were rich, I would help you.', exampleTranslation: 'Si fuera rico, te ayudaría.' },
    { word: 'lottery', translation_es: 'lotería', level: 'B1', category: 'life events', partOfSpeech: 'noun', example: 'If I won the lottery, I would buy a house.', exampleTranslation: 'Si ganara la lotería, compraría una casa.' },
  ],
  grammarPoints: [
    {
      id: 'gp-second-conditional-form',
      level: 'B1',
      name: 'Second conditional (form)',
      explanation_es: 'El segundo condicional expresa hipótesis irreales en el presente: if + past simple, would/could + verbo base.',
      formula: 'If + past simple, would/could + base verb',
      examples: ['If I had more money, I would travel.', 'If she spoke English, she could get the job.', 'If I were you, I would study more.'],
    },
  ],
  exercises: [
    {
      id: 'b1-m1-l1-ex1',
      type: 'multiple_choice',
      concept: 'second conditional structure',
      difficulty: 1,
      prompt: 'Completa: "If I ___ more money, I would travel."',
      promptTranslation: 'Si tuviera más dinero, viajaría.',
      correctAnswer: 'had',
      options: ['had', 'have', 'will have'],
      explanation: 'En el segundo condicional, después de "if" usamos past simple: had. → If I had more money, I would travel.',
    },
    {
      id: 'b1-m1-l1-ex2',
      type: 'multiple_choice',
      concept: 'second conditional structure',
      difficulty: 1,
      prompt: 'Completa: "If she spoke English, she ___ get the job."',
      promptTranslation: 'Si ella hablara inglés, podría conseguir el trabajo.',
      correctAnswer: 'could',
      options: ['could', 'can', 'will'],
      explanation: 'Con una condición irreal (past simple "spoke"), la parte principal usa "could" o "would". → she could get the job.',
    },
    {
      id: 'b1-m1-l1-ex3',
      type: 'fill_blank',
      concept: 'second conditional structure',
      difficulty: 2,
      prompt: 'Completa con la forma correcta: "If I ___ (be) you, I would study more."',
      promptTranslation: 'Si yo fuera tú, estudiaría más.',
      correctAnswer: 'were',
      acceptedAnswers: ['were', 'was'],
      explanation: 'Con I usamos "were" (forma correcta del subjuntivo). "Was" es aceptado en conversación informal, pero "were" es lo correcto.',
    },
    {
      id: 'b1-m1-l1-ex4',
      type: 'reorder',
      concept: 'second conditional structure',
      difficulty: 3,
      prompt: 'Ordena la frase (segundo condicional):',
      promptTranslation: 'Si viviéramos cerca de la playa, nadaríamos todos los días.',
      words: ['If', 'we', 'lived', 'near', 'the', 'beach,', 'we', 'would', 'swim', 'every', 'day.'],
      correctAnswer: 'If we lived near the beach, we would swim every day.',
      explanation: 'Estructura: If + past simple (lived) + coma + would + verbo base (swim). → If we lived near the beach, we would swim every day.',
    },
    {
      id: 'b1-m1-l1-ex5',
      type: 'translate',
      concept: 'second conditional',
      difficulty: 3,
      prompt: 'Traduce: "Si yo fuera tú, estudiaría más."',
      correctAnswer: 'If I were you, I would study more.',
      acceptedAnswers: [
        'If I were you, I would study more',
        'If I were you, I would study more.',
        'If I was you, I would study more',
        'If I was you, I would study more.',
        'If I were you, I\'d study more',
        'If I were you, I\'d study more.',
      ],
      acceptApproximate: true,
      explanation: '"Si yo fuera tú" = If I were you. "estudiaría más" = I would study more (would + verbo base).',
    },
    {
      id: 'b1-m1-l1-ex6',
      type: 'match',
      concept: 'second conditional matching',
      difficulty: 2,
      prompt: 'Relaciona la condición con su resultado hipotético:',
      pairs: [
        { left: 'If I had more time,', right: 'I would read more books.' },
        { left: 'If I were you,', right: 'I would call her.' },
        { left: 'If she knew the answer,', right: 'she would tell us.' },
        { left: 'If they had a car,', right: 'they could drive to work.' },
        { left: 'If I spoke Japanese,', right: 'I could work in Tokyo.' },
        { left: 'If we won the lottery,', right: 'we would travel the world.' },
      ],
      correctAnswer: 'If I had more time=I would read more books, If I were you=I would call her, If she knew the answer=she would tell us, If they had a car=they could drive to work, If I spoke Japanese=I could work in Tokyo, If we won the lottery=we would travel the world.',
      explanation: 'Cada condición (if + past simple) se une con su resultado (would/could + verbo base). El sujeto se mantiene igual en ambas partes.',
    },
    {
      id: 'b1-m1-l1-ex7',
      type: 'error_correction',
      concept: 'second conditional',
      difficulty: 4,
      prompt: 'Encuentra el error: "If I would have more time, I would learn guitar."',
      correctAnswer: 'If I had more time, I would learn guitar.',
      acceptedAnswers: [
        'If I had more time, I would learn guitar',
        'If I had more time, I would learn guitar.',
        'If I had more time, I\'d learn guitar',
        'If I had more time, I\'d learn guitar.',
      ],
      acceptApproximate: true,
      explanation: 'Después de "if" usamos past simple (had), nunca "would". Solo la parte principal lleva "would".',
    },
    {
      id: 'b1-m1-l1-ex8',
      type: 'multiple_choice',
      concept: 'second conditional meaning',
      difficulty: 3,
      prompt: '¿Qué significa "If I had more money, I would travel."?',
      correctAnswer: 'No tengo mucho dinero ahora, así que no viajo.',
      options: [
        'No tengo mucho dinero ahora, así que no viajo.',
        'Viajé y gasté mucho dinero.',
        'Viajaré si consigo dinero.',
      ],
      explanation: 'El segundo condicional describe una situación IRREAL en el presente: no tengo mucho dinero, por eso no viajo. Es imaginario, no una posibilidad real.',
    },
    {
      id: 'b1-m1-l1-ex9',
      type: 'listening',
      concept: 'second conditional listening',
      difficulty: 3,
      prompt: 'Escuchá el audio y respondé las preguntas (en inglés, sobre lo que dice).',
      correctAnswer: '',
      explanation: 'Mark habla de qué haría si ganara la lotería: dejaría su trabajo, viajaría por el mundo y compraría una casa para su familia, pero seguiría viviendo en la misma ciudad.',
      listening: {
        audioText:
          "People often ask me what I would do if I won the lottery. Well, first, I would quit my job immediately — I don't really enjoy it. Then I would travel around the world for a year, maybe two. I would also buy a house for my family, a big one with a garden. But I wouldn't move to another country. I love my city, and my friends are here.",
        questions: [
          {
            id: 'b1-m1-l1-ex9-q1',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'What would Mark do first if he won the lottery?',
            correctAnswer: 'Quit his job',
            options: ['Quit his job', 'Buy a house', 'Move to another country'],
            explanation: '"I would quit my job immediately."',
          },
          {
            id: 'b1-m1-l1-ex9-q2',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'Mark would move to another country.',
            correctAnswer: 'false',
            explanation: '"But I wouldn\'t move to another country. I love my city."',
          },
          {
            id: 'b1-m1-l1-ex9-q3',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'Why does Mark want to stay in his city?',
            correctAnswer: 'He loves it and his friends are there',
            options: ['He loves it and his friends are there', 'It is cheaper to live there', 'His job is there'],
            explanation: '"I love my city, and my friends are here."',
          },
        ],
      },
    },
    {
      id: 'b1-m1-l1-ex10',
      type: 'writing',
      concept: 'second conditional writing',
      difficulty: 3,
      prompt: 'Escribile un email informal a un amigo/a contándole qué harías si tuvieras un año libre sin trabajar (usá el segundo condicional).',
      promptTranslation: 'Write an informal email to a friend about what you would do if you had a free year without working.',
      correctAnswer: '',
      explanation: 'Un buen texto usa varias frases con if + past simple, would/could + verbo base, y mantiene un registro informal apropiado para un email a un amigo.',
      taskType: 'email',
      targetReader: 'a friend',
      register: 'informal',
      contentPoints: ['Qué harías con ese año libre', 'Al menos una razón de por qué lo harías'],
      requiresOwnIdea: true,
      minWords: 60,
      maxWords: 100,
    },
    {
      id: 'b1-m1-l1-ex11',
      type: 'speaking',
      concept: 'second conditional pronunciation',
      difficulty: 2,
      prompt: 'Escuchá la frase modelo y repetila en voz alta.',
      correctAnswer: 'If I were you, I would call her.',
      explanation: 'Practicá la pronunciación enlazada de "would" (suena como /wʊd/, casi "wood") y la entonación de la condición seguida de una pausa breve en la coma.',
      speakingMode: 'repeat',
    },
    {
      id: 'b1-m1-l1-ex12',
      type: 'listening',
      concept: 'idiom listening real audio',
      difficulty: 4,
      prompt: 'Escuchá el audio (voz real, no sintetizada) y respondé las preguntas.',
      correctAnswer: '',
      explanation: 'El programa "Words and Their Stories" de VOA Learning English explica el modismo "spread yourself too thin": tomar demasiadas responsabilidades a la vez.',
      listening: {
        audioText:
          'This episode discusses the idiom "spread yourself too thin", meaning to take on too many responsibilities at once. It explains related expressions like "having a lot on your plate" and "overextended".',
        audioUrl: '/audio/voa/spread-yourself-too-thin.mp3',
        attribution: 'Audio: VOA Learning English (learningenglish.voanews.com), dominio público',
        questions: [
          {
            id: 'b1-m1-l1-ex12-q1',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 4,
            prompt: 'What does "spread yourself too thin" mean?',
            correctAnswer: 'Taking on too many responsibilities at once',
            options: ['Taking on too many responsibilities at once', 'Losing weight quickly', 'Speaking too quietly'],
            explanation: 'El programa explica que "spread yourself too thin" significa asumir demasiadas responsabilidades a la vez.',
          },
          {
            id: 'b1-m1-l1-ex12-q2',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'The program mentions the expression "having a lot on your plate" as related to this idiom.',
            correctAnswer: 'true',
            explanation: '"It explains related expressions like having a lot on your plate and overextended."',
          },
          {
            id: 'b1-m1-l1-ex12-q3',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'Which word describes feeling pushed to the limit from doing too much?',
            correctAnswer: 'Overextended',
            options: ['Overextended', 'Relaxed', 'Underprepared'],
            explanation: 'El programa usa "overextended" para describir esa sensación de estar al límite.',
          },
        ],
      },
    },
  ],
  miniTest: [
    {
      id: 'b1-m1-l1-mt1',
      type: 'multiple_choice',
      concept: 'second conditional structure',
      difficulty: 2,
      prompt: 'Completa: "If he ___ rich, he would buy a big house."',
      promptTranslation: 'Si él fuera rico, compraría una casa grande.',
      correctAnswer: 'were',
      options: ['were', 'is', 'was being'],
      explanation: 'Con "he" en hipótesis irreal usamos "were": If he were rich. (La forma subjuntiva correcta.)',
    },
    {
      id: 'b1-m1-l1-mt2',
      type: 'fill_blank',
      concept: 'second conditional structure',
      difficulty: 3,
      prompt: 'Completa: "If I spoke English, I ___ (could) get a better job."',
      promptTranslation: 'Si hablara inglés, podría conseguir un trabajo mejor.',
      correctAnswer: 'could',
      acceptedAnswers: ['could', 'would'],
      explanation: 'La parte principal usa "could" (podría) o "would" (haría) + verbo base. → I could get a better job.',
    },
    {
      id: 'b1-m1-l1-mt3',
      type: 'error_correction',
      concept: 'second conditional',
      difficulty: 4,
      prompt: 'Corrige el error: "If I will have more money, I would buy a car."',
      correctAnswer: 'If I had more money, I would buy a car.',
      acceptedAnswers: [
        'If I had more money, I would buy a car',
        'If I had more money, I would buy a car.',
        'If I had more money, I\'d buy a car',
        'If I had more money, I\'d buy a car.',
      ],
      acceptApproximate: true,
      explanation: 'Nunca usamos "will" después de "if" en el segundo condicional. La condición es if + past simple (had).',
    },
    {
      id: 'b1-m1-l1-mt4',
      type: 'true_false',
      concept: 'second conditional meaning',
      difficulty: 2,
      prompt: '"If I were you" es la forma correcta, aunque en conversación informal algunos dicen "If I was you".',
      correctAnswer: 'true',
      explanation: 'Correcto. "Were" es la forma formal y correcta; "was" se escucha en inglés informal pero no se recomienda en escritura.',
    },
  ],
  reviewItems: ['a2-m12-l5'],
  prerequisites: ['a2-m12-l5'],
}
