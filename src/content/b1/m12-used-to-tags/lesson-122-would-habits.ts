import type { Lesson } from '../../types'

export const lesson122WouldHabits: Lesson = {
  id: 'b1-m12-l2',
  moduleId: 'm12-used-to-tags',
  order: 1,
  title: 'would para hábitos del pasado (narración)',
  objective: 'Usar would + verbo para narrar hábitos del pasado con nostalgia, y distinguirlo de used to.',
  explanation_es: `"Would" también sirve para hablar de hábitos del pasado, pero con un matiz especial: suena más literario y nostálgico, y se usa sobre todo en narraciones de recuerdos. Significa algo así como "solía / siempre hacía".

- When I was young, I would go fishing every summer. = Cuando era joven, solía ir a pescar cada verano.
- She would always wake up early. = Ella siempre se despertaba temprano.
- He would tell us stories. = Él nos contaba historias.

FORMA: sujeto + would + verbo en forma base (SIN "to").
- I would go... / She would always wake up... / He would tell...

DIFERENCIAS CLAVE con "used to":

1) used to = hábitos Y ESTADOS. would = SOLO hábitos (acciones repetidas).
- ✅ She used to live in Barcelona. (estado: vivir) → NO se puede usar "would" aquí.
- ❌ She would live in Barcelona. (con el sentido de "solía vivir")
- ✅ When we were kids, we would play every day. (hábito)

2) would se usa en narraciones, con un tono de recuerdo; used to es más neutro y hablado.

3) En negativo y preguntas, "would" usa "wouldn\'t" y "Would...?": He wouldn\'t eat vegetables. / Would you go there often?

¡CUIDADO! "Would" no lleva "to": ❌ I would to go → ✅ I would go.`,
  examples: [
    { english: 'When I was young, I would go fishing every summer.', spanish: 'Cuando era joven, solía ir a pescar cada verano.', note: 'hábito pasado en narración.' },
    { english: 'She would always wake up early.', spanish: 'Ella siempre se despertaba temprano.' },
    { english: 'He would tell us stories at night.', spanish: 'Él nos contaba historias por la noche.' },
    { english: 'They would visit their grandparents every Sunday.', spanish: 'Ellos solían visitar a sus abuelos cada domingo.' },
    { english: 'She used to live in Barcelona.', spanish: 'Ella vivía en Barcelona.', note: 'estado pasado → usamos "used to", no "would".' },
  ],
  rule: `- would + verbo en forma base (sin "to"): I would go fishing.
- would expresa hábitos del pasado en narraciones (tono nostálgico).
- used to expresa hábitos Y estados; would solo hábitos.
- No se usa "would" para estados: ❌ She would live in Barcelona → ✅ She used to live in Barcelona.
- Negativo: wouldn't + verbo. Pregunta: Would + sujeto + verbo?`,
  commonMistakes: [
    { wrong: '❌ I would to go fishing every summer.', correct: '✅ I would go fishing every summer.', explanation: 'Tras "would" va el verbo en forma base SIN "to": would go.' },
    { wrong: '❌ She would live in Barcelona. (con el sentido de "solía vivir")', correct: '✅ She used to live in Barcelona.', explanation: '"would" solo expresa hábitos, no estados. Para estados pasados (vivir, ser, tener) usamos "used to".' },
    { wrong: '❌ I would went fishing.', correct: '✅ I would go fishing.', explanation: 'Después de "would" el verbo va en forma base, no en pasado: would go.' },
    { wrong: '❌ She wouldn\'t to eat vegetables.', correct: '✅ She wouldn\'t eat vegetables.', explanation: 'En negativo, "wouldn\'t" va seguido de la forma base sin "to".' },
  ],
  vocabulary: [
    { word: 'would (past habit)', translation_es: 'solía (hábito pasado)', level: 'B1', category: 'grammar', partOfSpeech: 'modal verb', example: 'We would play chess every Friday.', exampleTranslation: 'Solíamos jugar al ajedrez cada viernes.' },
    { word: 'childhood', translation_es: 'infancia', level: 'B1', category: 'nouns', partOfSpeech: 'noun', example: 'My childhood was full of adventures.', exampleTranslation: 'Mi infancia estaba llena de aventuras.' },
    { word: 'nostalgia', translation_es: 'nostalgia', level: 'B1', category: 'nouns', partOfSpeech: 'noun', example: 'I feel nostalgia for my hometown.', exampleTranslation: 'Siento nostalgia por mi pueblo.' },
  ],
  grammarPoints: [
    {
      id: 'gp-would-habits',
      level: 'B1',
      name: 'would for past habits (narrative)',
      explanation_es: 'would + forma base expresa hábitos pasados en narraciones con tono nostálgico. Solo hábitos (no estados); para estados usamos used to.',
      formula: 'sujeto + would + verbo (forma base)',
      examples: ['When I was young, I would go fishing every summer.', 'She would always wake up early.', 'He would tell us stories.'],
    },
  ],
  exercises: [
    {
      id: 'b1-m12-l2-ex1',
      type: 'multiple_choice',
      concept: 'would + base form',
      difficulty: 1,
      prompt: 'Completa: "When I was young, I ___ go fishing every summer."',
      promptTranslation: 'Cuando era joven, solía ir a pescar cada verano.',
      correctAnswer: 'would',
      options: ['would', 'will', 'am'],
      explanation: '"would" + forma base expresa el hábito pasado: would go fishing.',
    },
    {
      id: 'b1-m12-l2-ex2',
      type: 'multiple_choice',
      concept: 'would vs used to (states)',
      difficulty: 2,
      prompt: '¿Cuál es la forma correcta para un ESTADO pasado?',
      promptTranslation: 'Which is the correct form for a past STATE?',
      correctAnswer: 'She used to live in Barcelona.',
      options: ['She used to live in Barcelona.', 'She would live in Barcelona.', 'She would to live in Barcelona.'],
      explanation: 'Los estados pasados (vivir, ser, tener) usan "used to", no "would". Y "would to" no existe.',
    },
    {
      id: 'b1-m12-l2-ex3',
      type: 'fill_blank',
      concept: 'would + always',
      difficulty: 2,
      prompt: 'Completa: "She would always ___ (wake) up early."',
      promptTranslation: 'Ella siempre se despertaba temprano.',
      correctAnswer: 'wake',
      acceptedAnswers: ['wake', 'Wake'],
      explanation: 'Tras "would" va el verbo en forma base: would always wake up.',
    },
    {
      id: 'b1-m12-l2-ex4',
      type: 'true_false',
      concept: 'would = habits only',
      difficulty: 2,
      prompt: '"Would" se usa para expresar estados del pasado como "vivir en" o "ser".',
      promptTranslation: '"Would" is used to express past states like "living in" or "being".',
      correctAnswer: 'false',
      acceptedAnswers: ['False', 'FALSE', 'f'],
      explanation: 'Falso. "would" solo expresa hábitos (acciones repetidas). Para estados usamos "used to".',
    },
    {
      id: 'b1-m12-l2-ex5',
      type: 'error_correction',
      concept: 'would + no "to"',
      difficulty: 3,
      prompt: 'Corrige el error: "He would to tell us stories."',
      promptTranslation: 'Él nos contaba historias.',
      correctAnswer: 'He would tell us stories.',
      acceptedAnswers: ['He would tell us stories', 'He would tell us stories.', 'he would tell us stories'],
      acceptApproximate: true,
      explanation: 'Tras "would" va la forma base sin "to": would tell.',
    },
    {
      id: 'b1-m12-l2-ex6',
      type: 'translate',
      concept: 'would + habit',
      difficulty: 3,
      prompt: 'Traduce: "Cuando era joven, solía ir a pescar cada verano."',
      promptTranslation: 'When I was young, I would go fishing every summer.',
      correctAnswer: 'When I was young, I would go fishing every summer.',
      acceptedAnswers: ['When I was young, I would go fishing every summer', 'When I was young, I would go fishing every summer.', 'when i was young, i would go fishing every summer'],
      acceptApproximate: true,
      explanation: 'Narración de hábito pasado: would + forma base (go fishing).',
    },
    {
      id: 'b1-m12-l2-ex7',
      type: 'reorder',
      concept: 'would + habit',
      difficulty: 3,
      prompt: 'Ordena las palabras: He / us / would / tell / at / stories / night',
      promptTranslation: 'Él nos contaba historias por la noche.',
      correctAnswer: 'He would tell us stories at night.',
      words: ['He', 'would', 'tell', 'us', 'stories', 'at', 'night'],
      explanation: 'Orden: sujeto + would + verbo + objeto + complemento. → He would tell us stories at night.',
    },
    {
      id: 'b1-m12-l2-ex8',
      type: 'match',
      concept: 'would vs used to',
      difficulty: 3,
      prompt: 'Relaciona cada frase con la regla correcta.',
      promptTranslation: 'Match each sentence with the correct rule.',
      correctAnswer: 'I would play football every day.=Hábito repetido → would correcto.; She used to live in Madrid.=Estado pasado → used to.; He used to have a dog.=Estado pasado → used to.; They would visit us on Sundays.=Hábito repetido → would correcto.',
      pairs: [
        { left: 'I would play football every day.', right: 'Hábito repetido → would correcto.' },
        { left: 'She used to live in Madrid.', right: 'Estado pasado → used to.' },
        { left: 'He used to have a dog.', right: 'Estado pasado → used to.' },
        { left: 'They would visit us on Sundays.', right: 'Hábito repetido → would correcto.' },
      ],
      explanation: 'would = hábitos (acciones repetidas). used to = hábitos Y estados.',
    },
    {
      id: 'b1-m12-l2-ex9',
      type: 'fill_blank',
      concept: 'wouldn\'t + base form',
      difficulty: 3,
      prompt: 'Completa: "She wouldn\'t ___ (eat) vegetables when she was a child."',
      promptTranslation: 'No comía verduras cuando era niña.',
      correctAnswer: 'eat',
      acceptedAnswers: ['eat', 'Eat'],
      explanation: 'Negativo: wouldn\'t + forma base (eat).',
    },
    {
      id: 'b1-m12-l2-ex10',
      type: 'multiple_choice',
      concept: 'would in narrative',
      difficulty: 4,
      prompt: '¿Cuál es la frase correcta con "would"?',
      promptTranslation: 'Which sentence is correct with "would"?',
      correctAnswer: 'My grandfather would always read us the newspaper.',
      options: ['My grandfather would always read us the newspaper.', 'My grandfather would always to read us the newspaper.', 'My grandfather would always reads us the newspaper.'],
      explanation: 'would + always + forma base: would always read.',
    },
  ],
  miniTest: [
    {
      id: 'b1-m12-l2-mt1',
      type: 'multiple_choice',
      concept: 'would + base form',
      difficulty: 1,
      prompt: 'Completa: "He ___ tell us stories."',
      promptTranslation: 'Él nos contaba historias.',
      correctAnswer: 'would',
      options: ['would', 'will', 'to would'],
      explanation: 'Hábito pasado en narración: would tell.',
    },
    {
      id: 'b1-m12-l2-mt2',
      type: 'fill_blank',
      concept: 'would for habits',
      difficulty: 2,
      prompt: 'Completa: "They would ___ (visit) their grandparents every Sunday."',
      promptTranslation: 'Solían visitar a sus abuelos cada domingo.',
      correctAnswer: 'visit',
      acceptedAnswers: ['visit', 'Visit'],
      explanation: 'would + forma base: would visit.',
    },
    {
      id: 'b1-m12-l2-mt3',
      type: 'true_false',
      concept: 'would for states',
      difficulty: 2,
      prompt: 'Podemos decir "She would live in Barcelona" con el sentido de "solía vivir en Barcelona".',
      promptTranslation: 'We can say "She would live in Barcelona" meaning "she used to live in Barcelona".',
      correctAnswer: 'false',
      acceptedAnswers: ['False', 'FALSE', 'f'],
      explanation: 'Falso. "would" no expresa estados; decimos "She used to live in Barcelona".',
    },
    {
      id: 'b1-m12-l2-mt4',
      type: 'error_correction',
      concept: 'would no "to"',
      difficulty: 3,
      prompt: 'Corrige el error: "We would to play chess every Friday."',
      promptTranslation: 'Solíamos jugar al ajedrez cada viernes.',
      correctAnswer: 'We would play chess every Friday.',
      acceptedAnswers: ['We would play chess every Friday', 'We would play chess every Friday.', 'we would play chess every friday'],
      acceptApproximate: true,
      explanation: 'Tras "would" va la forma base sin "to": would play.',
    },
    {
      id: 'b1-m12-l2-mt5',
      type: 'multiple_choice',
      concept: 'which is correct',
      difficulty: 4,
      prompt: '¿Cuál es la frase correcta?',
      promptTranslation: 'Which sentence is correct?',
      correctAnswer: 'He used to be very shy.',
      options: ['He used to be very shy.', 'He would be very shy.', 'He would to be very shy.'],
      explanation: '"ser" es un estado pasado → used to (no would).',
    },
  ],
  reviewItems: ['b1-m12-l1'],
  prerequisites: ['b1-m12-l1'],
}
