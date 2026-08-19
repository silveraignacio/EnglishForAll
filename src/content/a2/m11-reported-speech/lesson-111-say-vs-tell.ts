import type { Lesson } from '../../types'

export const lesson111SayVsTell: Lesson = {
  id: 'a2-m11-l1',
  moduleId: 'm11-reported-speech',
  order: 0,
  title: 'say vs tell (decir / decirle a alguien)',
  objective: 'Diferenciar "say" + that (decir algo) y "tell" + persona (decirle a alguien algo).',
  explanation_es: `En español, "decir" cubre muchos usos. En inglés, hay dos verbos diferentes: "say" y "tell".

- "say" se usa para decir algo, con o sin lo que se dice. Normalmente NO lleva una persona como objeto.
  - She said that she was tired. = Ella dijo que estaba cansada.
  - He said goodbye. = Él dijo adiós.
  - They said that the movie was good. = Dijeron que la película era buena.
  - What did you say? = ¿Qué dijiste?

- "tell" significa "decirle a alguien". SIEMPRE necesita una persona como objeto (tell + persona).
  - He told me that he was happy. = Él me dijo que estaba feliz.
  - Tell me your name. = Dime tu nombre.
  - She told him a secret. = Ella le contó un secreto.

Regla rápida:
- say + that... → sin persona: She said that...
- tell + persona + that... → con persona: She told me that...

¡Ojo! Dos errores muy típicos:
- "He said me that..." ❌ → "He told me that..." ✅ (say no lleva objeto de persona)
- "She told that..." ❌ → "She told me that..." ✅ (tell necesita la persona)`,
  examples: [
    { english: 'She said that she was tired.', spanish: 'Ella dijo que estaba cansada.', note: 'say + that, sin persona' },
    { english: 'He told me that he was happy.', spanish: 'Él me dijo que estaba feliz.', note: 'tell + persona (me)' },
    { english: 'They said that the movie was good.', spanish: 'Dijeron que la película era buena.' },
    { english: 'She told me the truth.', spanish: 'Ella me dijo la verdad.' },
    { english: 'Please tell your sister to wait.', spanish: 'Por favor, dile a tu hermana que espere.' },
  ],
  rule: `Regla:
- say + that... → sin persona: She said that she was tired.
- tell + persona + that... → con persona: He told me that he was happy.

"say" no admite objeto de persona directamente ("said me" es incorrecto). "tell" siempre necesita la persona a quien se le dice algo ("told that..." es incorrecto).`,
  formation: {
    title: 'Cómo se forman "say" y "tell"',
    intro: 'En español todo es "decir", pero en inglés hay dos verbos: "say" para decir algo (sin persona) y "tell" para decirle algo a alguien (siempre con la persona).',
    patterns: [
      {
        name: 'say + that (sin persona)',
        formula: 'sujeto + say/said + that + frase',
        examples: [
          { english: 'She said that she was tired.', spanish: 'Ella dijo que estaba cansada.' },
          { english: 'They said that the movie was good.', spanish: 'Dijeron que la película era buena.' },
        ],
        note: '"Say" no admite una persona como objeto: ❌ she said me → ✅ she said (that).',
      },
      {
        name: 'tell + persona + that',
        formula: 'sujeto + tell/told + persona + that + frase',
        examples: [
          { english: 'He told me that he was happy.', spanish: 'Él me dijo que estaba feliz.' },
          { english: 'She told him a secret.', spanish: 'Ella le contó un secreto.' },
        ],
        note: '"Tell" SIEMPRE necesita la persona a quien se le dice: told me, told him, told us.',
      },
    ],
    notes: [
      'Regla rápida: say + that... (sin persona) | tell + persona + that... (con persona).',
      '❌ He said me that... → ✅ He told me that...',
      '❌ She told that... → ✅ She told me that... (o She said that...).',
    ],
  },
  commonMistakes: [
    { wrong: '❌ He said me that he was tired.', correct: '✅ He told me that he was tired.', explanation: '"Say" no lleva objeto de persona. Para "decirme" usamos "tell me": He told me that...' },
    { wrong: '❌ She told that she was happy.', correct: '✅ She told me that she was happy.', explanation: '"Tell" siempre necesita la persona: told me, told him, told us... Sin persona, usamos "say": She said that...' },
    { wrong: '❌ I said to him that... (redundante)', correct: '✅ I told him that...', explanation: 'Aunque "say to him" existe, con "that" es mucho más natural usar "tell him".' },
  ],
  vocabulary: [
    { word: 'say', translation_es: 'decir', level: 'A1', category: 'verbs', partOfSpeech: 'verb', example: 'She said that she was tired.', exampleTranslation: 'Ella dijo que estaba cansada.' },
    { word: 'tell', translation_es: 'decirle a alguien, contar', level: 'A1', category: 'verbs', partOfSpeech: 'verb', example: 'He told me that he was happy.', exampleTranslation: 'Él me dijo que estaba feliz.' },
    { word: 'the truth', translation_es: 'la verdad', level: 'A2', category: 'common phrases', partOfSpeech: 'noun phrase', example: 'She always tells the truth.', exampleTranslation: 'Ella siempre dice la verdad.' },
    { word: 'goodbye', translation_es: 'adiós', level: 'A1', category: 'greetings', partOfSpeech: 'interjection', example: 'He said goodbye and left.', exampleTranslation: 'Él dijo adiós y se fue.' },
  ],
  grammarPoints: [
    {
      id: 'gp-say-vs-tell',
      level: 'A2',
      name: 'say vs tell',
      explanation_es: '"Say" se usa para decir algo (sin persona como objeto). "Tell" se usa para decirle algo a alguien y siempre lleva la persona.',
      formula: 'say + that + frase | tell + person + that + frase',
      examples: ['She said that she was tired.', 'He told me that he was happy.', 'They said that the movie was good.'],
    },
  ],
  exercises: [
    {
      id: 'a2-m11-l1-ex1',
      type: 'multiple_choice',
      concept: 'say vs tell',
      difficulty: 1,
      prompt: 'Completa: "She ___ that she was tired."',
      promptTranslation: 'Ella dijo que estaba cansada.',
      correctAnswer: 'said',
      options: ['said', 'told', 'told me'],
      explanation: 'Sin persona como objeto usamos "said". → She said that she was tired.',
    },
    {
      id: 'a2-m11-l1-ex2',
      type: 'multiple_choice',
      concept: 'say vs tell',
      difficulty: 1,
      prompt: 'Completa: "He ___ me that he was happy."',
      promptTranslation: 'Él me dijo que estaba feliz.',
      correctAnswer: 'told',
      options: ['said', 'told', 'says'],
      explanation: 'Hay una persona como objeto ("me"), así que usamos "told". → He told me that he was happy.',
    },
    {
      id: 'a2-m11-l1-ex3',
      type: 'fill_blank',
      concept: 'say vs tell',
      difficulty: 2,
      prompt: 'Completa: "They ___ that the movie was good."',
      promptTranslation: 'Dijeron que la película era buena.',
      correctAnswer: 'said',
      acceptedAnswers: ['said', 'Said'],
      explanation: 'No hay persona como objeto, así que usamos "said". → They said that the movie was good.',
    },
    {
      id: 'a2-m11-l1-ex4',
      type: 'fill_blank',
      concept: 'say vs tell',
      difficulty: 2,
      prompt: 'Completa: "Please ___ me your name."',
      promptTranslation: 'Por favor, dime tu nombre.',
      correctAnswer: 'tell',
      acceptedAnswers: ['tell', 'Tell'],
      explanation: 'Hay una persona como objeto ("me"), así que usamos "tell". → Please tell me your name.',
    },
    {
      id: 'a2-m11-l1-ex5',
      type: 'error_correction',
      concept: 'say vs tell',
      difficulty: 3,
      prompt: 'Corrige el error: "He said me that he was tired."',
      promptTranslation: 'Él me dijo que estaba cansado.',
      correctAnswer: 'He told me that he was tired.',
      acceptedAnswers: ['He told me that he was tired', 'He told me that he was tired.', 'he told me that he was tired'],
      acceptApproximate: true,
      explanation: '"Say" no lleva objeto de persona. Para "decirme" usamos "told me": He told me that he was tired.',
    },
    {
      id: 'a2-m11-l1-ex6',
      type: 'error_correction',
      concept: 'say vs tell',
      difficulty: 3,
      prompt: 'Corrige el error: "She told that she was happy."',
      promptTranslation: 'Ella dijo que estaba feliz.',
      correctAnswer: 'She told me that she was happy.',
      acceptedAnswers: ['She told me that she was happy', 'She said that she was happy', 'She told me that she was happy.', 'she told me that she was happy'],
      acceptApproximate: true,
      explanation: '"Tell" necesita la persona: told me... Sin persona, usamos "said": She said that she was happy.',
    },
    {
      id: 'a2-m11-l1-ex7',
      type: 'match',
      concept: 'say vs tell',
      difficulty: 2,
      prompt: 'Relaciona cada frase con su traducción.',
      promptTranslation: 'Match each sentence with its translation.',
      correctAnswer: 'She said that...=Ella dijo que...; He told me that...=Él me dijo que...; Tell me your name.=Dime tu nombre; She said goodbye.=Ella dijo adiós; They said that the movie was good.=Dijeron que la película era buena',
      pairs: [
        { left: 'She said that she was tired.', right: 'Ella dijo que estaba cansada.' },
        { left: 'He told me that he was happy.', right: 'Él me dijo que estaba feliz.' },
        { left: 'Tell me your name.', right: 'Dime tu nombre.' },
        { left: 'She said goodbye.', right: 'Ella dijo adiós.' },
        { left: 'They said that the movie was good.', right: 'Dijeron que la película era buena.' },
      ],
      explanation: '"Say" expresa el contenido de lo dicho (sin persona); "tell" incluye la persona a quien se le dice algo.',
    },
    {
      id: 'a2-m11-l1-ex8',
      type: 'translate',
      concept: 'say vs tell',
      difficulty: 3,
      prompt: 'Traduce: "Ella dijo que estaba cansada."',
      promptTranslation: 'She said that she was tired.',
      correctAnswer: 'She said that she was tired.',
      acceptedAnswers: ['She said that she was tired', 'She said she was tired', 'she said that she was tired.', 'She told me that she was tired'],
      acceptApproximate: true,
      explanation: 'Sin persona como objeto: She said that she was tired. (También vale "She told me that she was tired", pero "She said me" es incorrecto.)',
    },
    {
      id: 'a2-m11-l1-ex9',
      type: 'true_false',
      concept: 'say vs tell',
      difficulty: 2,
      prompt: '"I said her that I was busy" es una frase correcta.',
      promptTranslation: '"I said her that I was busy" is correct.',
      correctAnswer: 'false',
      acceptedAnswers: ['False', 'FALSE', 'f'],
      explanation: 'Falso. "Say" no lleva objeto de persona. La forma correcta es "I told her that I was busy".',
    },
    {
      id: 'a2-m11-l1-ex10',
      type: 'multiple_choice',
      concept: 'say vs tell',
      difficulty: 3,
      prompt: 'Completa: "Please ___ something in English."',
      promptTranslation: 'Por favor, di algo en inglés.',
      correctAnswer: 'say',
      options: ['say', 'tell', 'tell me'],
      explanation: 'No especificamos a quién, solo el contenido: say something. → Please say something in English.',
    },
  ],
  miniTest: [
    {
      id: 'a2-m11-l1-mt1',
      type: 'multiple_choice',
      concept: 'say vs tell',
      difficulty: 2,
      prompt: 'Completa: "Ana ___ me that she was at home."',
      promptTranslation: 'Ana me dijo que estaba en casa.',
      correctAnswer: 'told',
      options: ['told', 'said', 'say'],
      explanation: 'Hay persona como objeto ("me"): told. → Ana told me that she was at home.',
    },
    {
      id: 'a2-m11-l1-mt2',
      type: 'fill_blank',
      concept: 'say vs tell',
      difficulty: 2,
      prompt: 'Completa: "He ___ that the food was delicious."',
      promptTranslation: 'Él dijo que la comida estaba deliciosa.',
      correctAnswer: 'said',
      acceptedAnswers: ['said', 'Said'],
      explanation: 'Sin persona como objeto: said. → He said that the food was delicious.',
    },
    {
      id: 'a2-m11-l1-mt3',
      type: 'error_correction',
      concept: 'say vs tell',
      difficulty: 3,
      prompt: 'Corrige el error: "She said me the truth."',
      promptTranslation: 'Ella me dijo la verdad.',
      correctAnswer: 'She told me the truth.',
      acceptedAnswers: ['She told me the truth', 'She told me the truth.', 'she told me the truth'],
      acceptApproximate: true,
      explanation: '"Decirle a alguien" con persona como objeto = tell. → She told me the truth.',
    },
    {
      id: 'a2-m11-l1-mt4',
      type: 'translate',
      concept: 'say vs tell',
      difficulty: 3,
      prompt: 'Traduce: "Él me dijo que estaba feliz."',
      promptTranslation: 'He told me that he was happy.',
      correctAnswer: 'He told me that he was happy.',
      acceptedAnswers: ['He told me that he was happy', 'He told me that he was happy.', 'he told me that he was happy', 'He told me he was happy'],
      acceptApproximate: true,
      explanation: '"Decirme" = tell me. → He told me that he was happy.',
    },
    {
      id: 'a2-m11-l1-mt5',
      type: 'multiple_choice',
      concept: 'say vs tell',
      difficulty: 4,
      prompt: '¿Cuál es la forma correcta?',
      promptTranslation: 'Which is the correct form?',
      correctAnswer: 'She told us that the train was late.',
      options: ['She said us that the train was late.', 'She told us that the train was late.', 'She told that the train was late.'],
      explanation: 'Con persona ("us") usamos "told us". "Said us" no existe y "told that" necesita la persona.',
    },
  ],
  reviewItems: ['a2-m10-l3'],
  prerequisites: ['a2-m10-l3'],
}
