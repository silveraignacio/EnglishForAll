import type { Lesson } from '../../types'

export const lesson13FirstVsSecond: Lesson = {
  id: 'b1-m1-l3',
  moduleId: 'm1-second-conditional',
  order: 2,
  title: 'Primer vs segundo condicional',
  objective: 'Diferenciar situaciones reales o posibles (primer condicional) de situaciones imaginarias o irreales (segundo condicional).',
  explanation_es: `Ahora que conoces el primer condicional (A2) y el segundo condicional (B1), vamos a diferenciarlos.

El PRIMER condicional habla de situaciones REALES o POSIBLES en el futuro:
- If + present simple , + will + verbo base
- If it rains, I will stay home. = Si llueve, me quedaré en casa. (Es posible que llueva → resultado real.)

El SEGUNDO condicional habla de situaciones IMAGINARIAS o irreales (en presente o futuro):
- If + past simple , + would + verbo base
- If I won the lottery, I would buy a house. = Si ganara la lotería, compraría una casa. (No espero ganar → imaginario.)

¿Cómo decidir cuál usar?

1. Si la condición es posible o probable → primer condicional.
   - If it rains, I will stay home.
   - If you study, you will pass the exam.

2. Si la condición es improbable o imposible ahora → segundo condicional.
   - If I won the lottery, I would buy a house. (improbable)
   - If I were you, I would call her. (imposible: no puedo ser tú)

Presta atención a las pistas:
- Frases realistas (it rains, you study) suelen ir con will.
- Frases fantasiosas (win the lottery, be famous, be the president) suelen ir con would.

IMPORTANTE: NO mezcles los tiempos. No digas "If I win the lottery, I would buy a house" (mezcla if+present con would). Las combinaciones válidas son:
- If I win..., I will... (primero)
- If I won..., I would... (segundo)`,
  examples: [
    { english: 'If it rains, I will stay home.', spanish: 'Si llueve, me quedaré en casa.', note: 'Primer condicional: situación posible (lluvia).' },
    { english: 'If I won the lottery, I would buy a house.', spanish: 'Si ganara la lotería, compraría una casa.', note: 'Segundo condicional: situación imaginaria.' },
    { english: 'If you study, you will pass the exam.', spanish: 'Si estudias, aprobarás el examen.', note: 'Posible → primero.' },
    { english: 'If I were the president, I would change the law.', spanish: 'Si yo fuera presidente, cambiaría la ley.', note: 'Imposible ahora → segundo.' },
    { english: 'If she calls me, I will answer.', spanish: 'Si ella me llama, responderé.', note: 'Real → will.' },
    { english: 'If I had a private jet, I could fly anywhere.', spanish: 'Si tuviera un avión privado, podría volar a cualquier sitio.', note: 'Imaginario → could.' },
  ],
  rule: `Primer condicional (real/posible):
If + present simple , + will + verbo base
- If it rains, I will stay home.
- If you study, you will pass.

Segundo condicional (imaginario/irreal):
If + past simple , + would/could + verbo base
- If I won the lottery, I would buy a house.
- If I were you, I would call her.

Regla clave: NO mezcles los tiempos.
- ✅ If I win..., I will... (primero)
- ✅ If I won..., I would... (segundo)
- ❌ If I win..., I would... (mezcla incorrecta)`,
  commonMistakes: [
    { wrong: '❌ If I win the lottery, I would buy a house.', correct: '✅ If I won the lottery, I would buy a house. (segundo) o If I win the lottery, I will buy a house. (primero)', explanation: 'No mezcles: si la condición va en presente (win), el resultado va con will; si va en pasado (won), el resultado va con would.' },
    { wrong: '❌ If I would have more money, I will travel.', correct: '✅ If I had more money, I would travel.', explanation: 'Después de "if" nunca usamos "would". Solo la parte principal lleva would.' },
    { wrong: '❌ If it will rain, I will stay home.', correct: '✅ If it rains, I will stay home.', explanation: 'En el primer condicional, después de "if" usamos present simple (rains), no "will".' },
    { wrong: '❌ If I am a millionaire, I would stop working.', correct: '✅ If I were a millionaire, I would stop working.', explanation: 'Hablar de ser millonario es imaginario ahora → segundo condicional con "were".' },
  ],
  vocabulary: [
    { word: 'possible', translation_es: 'posible', level: 'B1', category: 'conditionals', partOfSpeech: 'adjective', example: 'This is a possible situation.', exampleTranslation: 'Esta es una situación posible.' },
    { word: 'impossible', translation_es: 'imposible', level: 'B1', category: 'conditionals', partOfSpeech: 'adjective', example: 'Winning is impossible.', exampleTranslation: 'Ganar es imposible.' },
    { word: 'real', translation_es: 'real', level: 'A2', category: 'conditionals', partOfSpeech: 'adjective', example: 'It is a real problem.', exampleTranslation: 'Es un problema real.' },
    { word: 'likely', translation_es: 'probable', level: 'B1', category: 'conditionals', partOfSpeech: 'adjective', example: 'It is likely to rain.', exampleTranslation: 'Es probable que llueva.' },
    { word: 'unlikely', translation_es: 'improbable', level: 'B1', category: 'conditionals', partOfSpeech: 'adjective', example: 'It is unlikely to happen.', exampleTranslation: 'Es improbable que suceda.' },
    { word: 'president', translation_es: 'presidente', level: 'B1', category: 'life events', partOfSpeech: 'noun', example: 'If I were president, I would help people.', exampleTranslation: 'Si yo fuera presidente, ayudaría a la gente.' },
  ],
  grammarPoints: [
    {
      id: 'gp-first-vs-second',
      level: 'B1',
      name: 'First vs second conditional',
      explanation_es: 'El primer condicional expresa situaciones posibles (if + present, will); el segundo, situaciones imaginarias (if + past, would).',
      formula: 'First: If + present, will + verb | Second: If + past, would + verb',
      examples: ['If it rains, I will stay home.', 'If I won the lottery, I would buy a house.', 'If you study, you will pass.'],
    },
  ],
  exercises: [
    {
      id: 'b1-m1-l3-ex1',
      type: 'multiple_choice',
      concept: 'first vs second conditional',
      difficulty: 2,
      prompt: '¿Primer o segundo condicional? "If it rains, I will stay home."',
      promptTranslation: 'Si llueve, me quedaré en casa.',
      correctAnswer: 'primer condicional (posible)',
      options: ['primer condicional (posible)', 'segundo condicional (imaginario)'],
      explanation: 'Llover es posible en el futuro, y la frase usa if + present (rains) + will. Es el primer condicional: real/posible.',
    },
    {
      id: 'b1-m1-l3-ex2',
      type: 'multiple_choice',
      concept: 'first vs second conditional',
      difficulty: 2,
      prompt: '¿Primer o segundo condicional? "If I won the lottery, I would buy a house."',
      promptTranslation: 'Si ganara la lotería, compraría una casa.',
      correctAnswer: 'segundo condicional (imaginario)',
      options: ['primer condicional (posible)', 'segundo condicional (imaginario)'],
      explanation: 'Ganar la lotería es improbable, y la frase usa if + past (won) + would. Es el segundo condicional: imaginario.',
    },
    {
      id: 'b1-m1-l3-ex3',
      type: 'fill_blank',
      concept: 'first vs second conditional',
      difficulty: 3,
      prompt: 'Completa con el tiempo correcto: "If I ___ (win) the lottery, I would buy a house."',
      promptTranslation: 'Si ganara la lotería, compraría una casa.',
      correctAnswer: 'won',
      acceptedAnswers: ['won'],
      explanation: 'Situación imaginaria → segundo condicional → if + past simple: won. If I won the lottery, I would buy a house.',
    },
    {
      id: 'b1-m1-l3-ex4',
      type: 'fill_blank',
      concept: 'first vs second conditional',
      difficulty: 3,
      prompt: 'Completa: "If it rains, I ___ (stay) home."',
      promptTranslation: 'Si llueve, me quedaré en casa.',
      correctAnswer: 'will stay',
      acceptedAnswers: ['will stay', 'will stay.', "'ll stay"],
      explanation: 'Situación posible → primer condicional → if + present + will + verbo base: will stay.',
    },
    {
      id: 'b1-m1-l3-ex5',
      type: 'reorder',
      concept: 'first vs second conditional',
      difficulty: 3,
      prompt: 'Ordena la frase (segundo condicional):',
      promptTranslation: 'Si yo fuera presidente, cambiaría la ley.',
      words: ['If', 'I', 'were', 'president,', 'I', 'would', 'change', 'the', 'law.'],
      correctAnswer: 'If I were president, I would change the law.',
      explanation: 'Imaginario → if + were + coma + would + verbo base (change). → If I were president, I would change the law.',
    },
    {
      id: 'b1-m1-l3-ex6',
      type: 'translate',
      concept: 'first vs second conditional',
      difficulty: 4,
      prompt: 'Traduce: "Si estudias, aprobarás el examen."',
      correctAnswer: 'If you study, you will pass the exam.',
      acceptedAnswers: [
        'If you study, you will pass the exam',
        'If you study, you will pass the exam.',
        'If you study, you\'ll pass the exam',
        'If you study, you\'ll pass the exam.',
        'If you study, you will pass',
        'If you study, you will pass.',
      ],
      acceptApproximate: true,
      explanation: 'Estudiar es una acción posible → primer condicional → If you study (present) + you will pass (will + verbo base).',
    },
    {
      id: 'b1-m1-l3-ex7',
      type: 'error_correction',
      concept: 'first vs second conditional',
      difficulty: 4,
      prompt: 'Corrige la mezcla de condicionales: "If I win the lottery, I would buy a house."',
      correctAnswer: 'If I won the lottery, I would buy a house.',
      acceptedAnswers: [
        'If I won the lottery, I would buy a house',
        'If I won the lottery, I would buy a house.',
        'If I win the lottery, I will buy a house',
        'If I win the lottery, I will buy a house.',
      ],
      acceptApproximate: true,
      explanation: 'Hay dos soluciones correctas: segundo condicional (If I won, I would...) o primer condicional (If I win, I will...). No mezcles presente con would.',
    },
    {
      id: 'b1-m1-l3-ex8',
      type: 'true_false',
      concept: 'first vs second conditional',
      difficulty: 3,
      prompt: '"If you study, you will pass the exam." es un ejemplo de segundo condicional.',
      correctAnswer: 'false',
      explanation: 'Falso. Es el primer condicional: la condición (study) es posible, y usa if + present simple + will.',
    },
    {
      id: 'b1-m1-l3-ex9',
      type: 'reading',
      concept: 'first vs second conditional reading',
      difficulty: 4,
      prompt: 'Lee el texto y responde las preguntas:',
      reading: {
        text: 'Marcos is thinking about his future. If he studies hard this year, he will pass his exams. That is a real possibility. However, if he won the lottery, he would travel around the world. That is just a dream. If I were him, I would focus on my studies. Winning the lottery is unlikely, but studying is something he can do today.',
        translation: 'Marcos está pensando en su futuro. Si estudia duro este año, aprobará sus exámenes. Esa es una posibilidad real. Sin embargo, si ganara la lotería, viajaría por todo el mundo. Eso es solo un sueño. Si yo fuera él, me centraría en mis estudios. Ganar la lotería es improbable, pero estudiar es algo que puede hacer hoy.',
        questions: [
          {
            id: 'b1-m1-l3-ex9-q1',
            type: 'multiple_choice',
            concept: 'first vs second conditional reading',
            difficulty: 4,
            prompt: '¿Qué pasará si Marcos estudia duro?',
            correctAnswer: 'He will pass his exams.',
            options: ['He will travel around the world.', 'He will pass his exams.', 'He will win the lottery.'],
            explanation: 'El texto dice: "If he studies hard this year, he will pass his exams." Es una posibilidad real.',
          },
          {
            id: 'b1-m1-l3-ex9-q2',
            type: 'multiple_choice',
            concept: 'first vs second conditional reading',
            difficulty: 4,
            prompt: 'La idea de ganar la lotería, ¿es real o imaginaria para Marcos?',
            correctAnswer: 'Es imaginaria, un sueño.',
            options: ['Es imaginaria, un sueño.', 'Es real y posible.', 'No lo dice el texto.'],
            explanation: 'El texto dice: "That is just a dream." Ganar la lotería es improbable, por eso usa el segundo condicional.',
          },
          {
            id: 'b1-m1-l3-ex9-q3',
            type: 'multiple_choice',
            concept: 'first vs second conditional reading',
            difficulty: 4,
            prompt: '¿Qué consejo le daría el narrador a Marcos?',
            correctAnswer: 'Focus on his studies.',
            options: ['Buy a lottery ticket.', 'Focus on his studies.', 'Travel the world now.'],
            explanation: 'El texto dice: "If I were him, I would focus on my studies." El narrador aconseja centrarse en estudiar.',
          },
        ],
      },
      correctAnswer: 'reading complete',
      explanation: 'Lee con atención: las frases con "will" son posibilidades reales y las de "would" son sueños imaginarios.',
    },
    {
      id: 'b1-m1-l3-ex10',
      type: 'listening',
      concept: 'first vs second conditional listening',
      difficulty: 3,
      prompt: 'Escuchá el audio y respondé las preguntas (en inglés, sobre lo que dice).',
      correctAnswer: '',
      explanation: 'Laura describe sus planes futuros: si aprueba sus exámenes, trabajará para una empresa; si ganara un millón de dólares, viajaría sin parar. Mezcla situaciones posibles (primer condicional) e imaginarias (segundo condicional).',
      listening: {
        audioText:
          'Hi, I\'m Laura, and I want to tell you about my future. If I pass my exams, I will work for a big company in finance. That\'s realistic. But if I won the lottery, I would quit my job and travel around the world for a year. That\'s just a dream. If I could speak five languages, I could work anywhere. But honestly, if I study hard, I will achieve my real goal: getting a good job in finance.',
        questions: [
          {
            id: 'b1-m1-l3-ex10-q1',
            type: 'multiple_choice',
            concept: 'first vs second conditional listening',
            difficulty: 2,
            prompt: 'What will Laura do if she passes her exams?',
            correctAnswer: 'She will work for a big company in finance',
            options: ['She will travel around the world', 'She will work for a big company in finance', 'She will learn five languages'],
            explanation: '"If I pass my exams, I will work for a big company in finance." This is realistic (first conditional).',
          },
          {
            id: 'b1-m1-l3-ex10-q2',
            type: 'true_false',
            concept: 'first vs second conditional listening',
            difficulty: 2,
            prompt: 'Laura says that winning the lottery is a realistic goal.',
            correctAnswer: 'false',
            explanation: '"If I won the lottery, I would quit my job and travel around the world for a year. That\'s just a dream." It\'s imaginative, not realistic.',
          },
          {
            id: 'b1-m1-l3-ex10-q3',
            type: 'multiple_choice',
            concept: 'first vs second conditional listening',
            difficulty: 3,
            prompt: 'Which sentence shows a real, possible situation?',
            correctAnswer: 'If I study hard, I will achieve my real goal',
            options: ['If I won the lottery, I would quit my job', 'If I study hard, I will achieve my real goal', 'If I could speak five languages, I could work anywhere'],
            explanation: 'Studying hard to achieve a goal is possible and real (first conditional with will). The others are imaginative.',
          },
        ],
      },
    },
    {
      id: 'b1-m1-l3-ex11',
      type: 'writing',
      concept: 'first vs second conditional writing',
      difficulty: 3,
      prompt: 'Escribile un email informal a un amigo/a comparando un plan real y posible que tienes con un sueño imaginario (usá el primer condicional para lo posible y el segundo para lo imaginario).',
      promptTranslation: 'Write an informal email to a friend comparing a real, possible plan with an imaginary dream.',
      correctAnswer: '',
      explanation: 'Un buen texto usa both condicionales correctamente: primer condicional (If I... I will...) para cosas posibles y segundo condicional (If I... I would...) para sueños.',
      taskType: 'email',
      targetReader: 'a friend',
      register: 'informal',
      contentPoints: ['Un plan real que tienes este año', 'Un sueño imaginario que te gustaría realizar'],
      requiresOwnIdea: true,
      minWords: 60,
      maxWords: 100,
    },
    {
      id: 'b1-m1-l3-ex12',
      type: 'speaking',
      concept: 'first vs second conditional pronunciation',
      difficulty: 2,
      prompt: 'Escuchá la frase modelo y repetila en voz alta.',
      correctAnswer: 'If I win the competition, I will be very happy, but if I won a million dollars, I would travel the world.',
      explanation: 'Practicá la pronunciación diferenciando ambos condicionales: "If I win... I will..." (primer condicional, más ágil) vs "If I won... I would..." (segundo condicional, con énfasis en la irrealidad).',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b1-m1-l3-mt1',
      type: 'multiple_choice',
      concept: 'first vs second conditional',
      difficulty: 2,
      prompt: 'Elige la frase correcta:',
      promptTranslation: 'Si me llama, responderé.',
      correctAnswer: 'If she calls me, I will answer.',
      options: ['If she calls me, I will answer.', 'If she called me, I will answer.', 'If she calls me, I would answer.'],
      explanation: 'Situación posible (me llama) → primer condicional → if + present (calls) + will (will answer).',
    },
    {
      id: 'b1-m1-l3-mt2',
      type: 'fill_blank',
      concept: 'first vs second conditional',
      difficulty: 3,
      prompt: 'Completa: "If I ___ (have) a private jet, I could fly anywhere."',
      promptTranslation: 'Si tuviera un avión privado, podría volar a cualquier sitio.',
      correctAnswer: 'had',
      acceptedAnswers: ['had'],
      explanation: 'Situación imaginaria (no tengo avión privado) → segundo condicional → if + past simple: had.',
    },
    {
      id: 'b1-m1-l3-mt3',
      type: 'error_correction',
      concept: 'first vs second conditional',
      difficulty: 4,
      prompt: 'Corrige el error: "If I would have a car, I would drive to work."',
      correctAnswer: 'If I had a car, I would drive to work.',
      acceptedAnswers: [
        'If I had a car, I would drive to work',
        'If I had a car, I would drive to work.',
        'If I had a car, I\'d drive to work',
        'If I had a car, I\'d drive to work.',
      ],
      acceptApproximate: true,
      explanation: 'Después de "if" usamos past simple (had), nunca "would". → If I had a car, I would drive to work.',
    },
    {
      id: 'b1-m1-l3-mt4',
      type: 'true_false',
      concept: 'first vs second conditional',
      difficulty: 3,
      prompt: '"If it rains, I will stay home" y "If I won the lottery, I would buy a house" usan la misma estructura.',
      correctAnswer: 'false',
      explanation: 'Falso. La primera es el primer condicional (if + present + will), la segunda es el segundo condicional (if + past + would).',
    },
    {
      id: 'b1-m1-l3-mt5',
      type: 'match',
      concept: 'first vs second conditional matching',
      difficulty: 3,
      prompt: 'Relaciona cada frase con su tipo de condicional:',
      pairs: [
        { left: 'If it rains, I will stay home.', right: 'Primer condicional (posible)' },
        { left: 'If I won the lottery, I would buy a house.', right: 'Segundo condicional (imaginario)' },
        { left: 'If you study, you will pass.', right: 'Primer condicional (posible)' },
        { left: 'If I were you, I would call her.', right: 'Segundo condicional (imaginario)' },
        { left: 'If she calls me, I will answer.', right: 'Primer condicional (posible)' },
        { left: 'If I had a jet, I would fly anywhere.', right: 'Segundo condicional (imaginario)' },
      ],
      correctAnswer: 'If it rains=I will stay home (primero), If I won the lottery=I would buy a house (segundo), If you study=you will pass (primero), If I were you=I would call her (segundo), If she calls me=I will answer (primero), If I had a jet=I would fly anywhere (segundo).',
      explanation: 'Las frases con if + present + will son el primer condicional (posible). Las de if + past + would/could son el segundo condicional (imaginario).',
    },
  ],
  reviewItems: ['b1-m1-l2'],
  prerequisites: ['b1-m1-l2'],
}
