import type { Lesson } from '../../types'

export const lesson41Will: Lesson = {
  id: 'a2-m4-l1',
  moduleId: 'm4-future-forms',
  order: 0,
  title: 'El futuro con "will" (afirmativo y negativo)',
  objective: 'Usar "will" y "won\'t" + verbo para decisiones espontáneas, predicciones, promesas y ofertas.',
  explanation_es: `Para hablar del futuro en inglés usamos "will". La gran noticia es que "will" no cambia con la persona: I will, you will, he will, we will... siempre igual. No se añade -s con "he" ni "she".

La estructura es muy sencilla:
Sujeto + will + verbo (sin "to")
- I will help you. = Te ayudaré.
- She will call me. = Ella me llamará.

Usamos "will" en cuatro situaciones:

1. Decisiones espontáneas (las tomamos en el momento de hablar):
   The phone is ringing! I'll answer it. = ¡Está sonando el teléfono! Lo contesto.

2. Predicciones generales (lo que creemos que pasará):
   It will rain tomorrow. = Lloverá mañana.

3. Promesas:
   I'll call you later. = Te llamaré más tarde.

4. Ofertas:
   I will carry your bag. = Te llevo la bolsa (yo la cargo).

En el inglés hablado usamos casi siempre las contracciones: I'll, you'll, he'll, she'll, it'll, we'll, they'll.

Para la negativa usamos "won't" (will not):
- She won't come to the party. = Ella no vendrá a la fiesta.

Recuerda: nunca "will to" + verbo, y nunca "will" con -s.`,
  examples: [
    { english: 'I will help you.', spanish: 'Te ayudaré.', note: 'will = oferta o promesa' },
    { english: 'It will rain tomorrow.', spanish: 'Lloverá mañana.', note: 'predicción general' },
    { english: "I'll call you later.", spanish: 'Te llamaré más tarde.', note: "I'll = I will (promesa)" },
    { english: "She won't come to the party.", spanish: 'Ella no vendrá a la fiesta.', note: "won't = will not (negativa)" },
    { english: "The phone is ringing! I'll answer it.", spanish: '¡Está sonando el teléfono! Lo contesto.', note: 'decisión espontánea: la tomamos ahora mismo' },
    { english: "We'll travel to London next year.", spanish: 'Viajaremos a Londres el próximo año.', note: "we'll = we will" },
  ],
  rule: `Sujeto + will + verbo (infinitivo sin "to")
- I will work. / She will work. (nunca "she wills" ni "she will works")

Negativa: Sujeto + won't + verbo
- I won't go. = No iré.

Pregunta: Will + sujeto + verbo?
- Will you help me? = ¿Me ayudarás?

Contracciones: I'll, you'll, he'll, she'll, it'll, we'll, they'll.
won't = will not (nunca "willn't").`,
  formation: {
    title: 'Cómo se forma el futuro con will — Afirmativo y Negativo',
    intro: 'will no cambia con la persona (I will, she will) y va seguido del verbo en forma base, sin "to". En el habla casi siempre usamos contracciones.',
    patterns: [
      {
        name: 'Afirmativo',
        formula: 'Sujeto + will + verbo en forma base (sin "to") + complemento',
        examples: [
          { english: 'I will help you.', spanish: 'Te ayudaré.' },
          { english: 'It will rain tomorrow.', spanish: 'Lloverá mañana.' },
          { english: "We'll travel to London next year.", spanish: 'Viajaremos a Londres el próximo año.' },
          { english: 'She will call me.', spanish: 'Ella me llamará.' },
        ],
        note: 'Nunca "will to" + verbo ni "will" con -s: She will come (no "she wills come").',
      },
      {
        name: 'Negativo',
        formula: 'Sujeto + won\'t + verbo en forma base (sin "to") + complemento',
        examples: [
          { english: "She won't come to the party.", spanish: 'Ella no vendrá a la fiesta.' },
          { english: "I won't eat that.", spanish: 'No me comeré eso.' },
        ],
        note: "won't = will not. Nunca \"no will\" ni \"willn't\".",
      },
    ],
    notes: [
      'Contracciones: I\'ll, you\'ll, he\'ll, she\'ll, it\'ll, we\'ll, they\'ll (I\'ll answer it).',
      'Se usa para decisiones espontáneas, predicciones, promesas y ofertas.',
    ],
  },
  commonMistakes: [
    { wrong: '❌ I will to go.', correct: '✅ I will go.', explanation: 'Después de "will" usamos el verbo sin "to": will + verbo.' },
    { wrong: '❌ She wills come.', correct: '✅ She will come.', explanation: '"will" no añade -s en tercera persona: she will, he will.' },
    { wrong: '❌ I no will come.', correct: "✅ I won't come.", explanation: 'La negativa es "won\'t" (will not), nunca "no will".' },
  ],
  vocabulary: [
    { word: 'will', translation_es: 'auxiliar del futuro', level: 'A2', category: 'future', partOfSpeech: 'modal verb', example: 'I will call you.', exampleTranslation: 'Te llamaré.' },
    { word: "won't", translation_es: 'no (futuro negativo)', level: 'A2', category: 'future', partOfSpeech: 'modal verb', example: "She won't come.", exampleTranslation: 'Ella no vendrá.' },
    { word: 'promise', translation_es: 'promesa / prometer', level: 'A2', category: 'future', partOfSpeech: 'noun/verb', example: "I promise I'll help.", exampleTranslation: 'Prometo que te ayudaré.' },
    { word: 'prediction', translation_es: 'predicción', level: 'A2', category: 'future', partOfSpeech: 'noun', example: 'It is a prediction about the weather.', exampleTranslation: 'Es una predicción sobre el tiempo.' },
    { word: 'tomorrow', translation_es: 'mañana', level: 'A1', category: 'time', partOfSpeech: 'adverb', example: 'It will rain tomorrow.', exampleTranslation: 'Lloverá mañana.' },
    { word: 'later', translation_es: 'más tarde', level: 'A1', category: 'time', partOfSpeech: 'adverb', example: "I'll call you later.", exampleTranslation: 'Te llamaré más tarde.' },
  ],
  grammarPoints: [
    {
      id: 'gp-will-future',
      level: 'A2',
      name: 'Will — future',
      explanation_es: '"will" expresa futuro: decisiones espontáneas, predicciones, promesas y ofertas. No cambia con la persona.',
      formula: 'Sujeto + will/won\'t + verbo (sin "to")',
      examples: ['I will help you.', "She won't come.", "Will you help me?"],
    },
    {
      id: 'gp-will-contractions',
      level: 'A2',
      name: 'Will contractions',
      explanation_es: 'En el habla usamos contracciones: I\'ll, you\'ll, he\'ll, she\'ll, it\'ll, we\'ll, they\'ll. La negativa contraída es "won\'t".',
      formula: "I'll = I will | won't = will not",
      examples: ["I'll answer it.", "We'll travel.", "He won't come."],
    },
  ],
  exercises: [
    {
      id: 'a2-m4-l1-ex1',
      type: 'multiple_choice',
      concept: 'will - affirmative',
      difficulty: 1,
      prompt: 'Completa: "I ___ help you."',
      promptTranslation: 'Te ayudaré.',
      correctAnswer: 'will',
      options: ['will', 'wills', 'will to'],
      explanation: 'Después de "I" usamos "will" + verbo sin "to": I will help you.',
    },
    {
      id: 'a2-m4-l1-ex2',
      type: 'fill_blank',
      concept: 'will - contraction',
      difficulty: 1,
      prompt: 'Completa con la contracción de "I will": "___ call you later."',
      promptTranslation: 'Te llamaré más tarde.',
      correctAnswer: "I'll",
      acceptedAnswers: ["I'll", 'Ill', "I'll."],
      explanation: "La contracción de \"I will\" es \"I'll\". → I'll call you later.",
    },
    {
      id: 'a2-m4-l1-ex3',
      type: 'multiple_choice',
      concept: "won't - negative",
      difficulty: 2,
      prompt: 'Completa: "She ___ come to the party."',
      promptTranslation: 'Ella no vendrá a la fiesta.',
      correctAnswer: "won't",
      options: ['no will', "won't", 'willn\'t'],
      explanation: 'La negativa de "will" es "won\'t". → She won\'t come to the party.',
    },
    {
      id: 'a2-m4-l1-ex4',
      type: 'reorder',
      concept: 'will - sentence order',
      difficulty: 2,
      prompt: 'Ordena las palabras: tomorrow / rain / will / it',
      promptTranslation: 'Lloverá mañana.',
      correctAnswer: 'It will rain tomorrow.',
      words: ['It', 'will', 'rain', 'tomorrow'],
      explanation: 'Orden: Sujeto (It) + will + verbo (rain) + tiempo (tomorrow).',
    },
    {
      id: 'a2-m4-l1-ex5',
      type: 'true_false',
      concept: 'will - spontaneous decisions',
      difficulty: 2,
      prompt: '"The phone is ringing! I\'ll answer it." es una decisión espontánea.',
      correctAnswer: 'true',
      explanation: 'Verdadero. La persona toma la decisión en el momento de hablar, por eso usamos "will".',
    },
    {
      id: 'a2-m4-l1-ex6',
      type: 'match',
      concept: 'will - contractions',
      difficulty: 2,
      prompt: 'Relaciona cada contracción con su forma completa:',
      pairs: [
        { left: "I'll", right: 'I will' },
        { left: "She'll", right: 'she will' },
        { left: "We'll", right: 'we will' },
        { left: "They'll", right: 'they will' },
        { left: "won't", right: 'will not' },
        { left: "He'll", right: 'he will' },
      ],
      correctAnswer: "I'll=I will, She'll=she will, We'll=we will, They'll=they will, won't=will not, He'll=he will",
      explanation: "I'll=I will, She'll=she will, We'll=we will, They'll=they will, won't=will not, He'll=he will.",
    },
    {
      id: 'a2-m4-l1-ex7',
      type: 'translate',
      concept: 'will - translate',
      difficulty: 3,
      prompt: 'Traduce: "Te ayudaré."',
      correctAnswer: 'I will help you.',
      acceptedAnswers: ['I will help you', "I'll help you", "I'll help you.", 'I will help you.'],
      acceptApproximate: true,
      explanation: '"Te ayudaré" → I will help you. (También: I\'ll help you.)',
    },
    {
      id: 'a2-m4-l1-ex8',
      type: 'error_correction',
      concept: 'will - no "to"',
      difficulty: 3,
      prompt: 'Encuentra el error: "I will to go to the cinema."',
      correctAnswer: 'I will go to the cinema.',
      acceptedAnswers: ['I will go to the cinema', "I'll go to the cinema", "I'll go to the cinema.", 'I will go to the cinema.'],
      acceptApproximate: true,
      explanation: 'Después de "will" el verbo va sin "to": I will go to the cinema.',
    },
    {
      id: 'a2-m4-l1-ex9',
      type: 'select_correct',
      concept: 'will - no -s',
      difficulty: 3,
      prompt: '¿Cuál de estas frases es correcta?',
      correctAnswer: 'She will arrive soon.',
      options: ['She will arrive soon.', 'She wills arrive soon.', 'She will arrives soon.'],
      explanation: '"Will" no añade -s ni cambia el verbo: She will arrive soon.',
    },
  ],
  miniTest: [
    {
      id: 'a2-m4-l1-mt1',
      type: 'multiple_choice',
      concept: 'will - affirmative',
      difficulty: 1,
      prompt: 'Completa: "They ___ travel to Paris."',
      promptTranslation: 'Ellos viajarán a París.',
      correctAnswer: 'will',
      options: ['will', 'wills', 'will to'],
      explanation: 'Con cualquier sujeto usamos "will" + verbo sin "to": They will travel to Paris.',
    },
    {
      id: 'a2-m4-l1-mt2',
      type: 'fill_blank',
      concept: "won't - negative",
      difficulty: 2,
      prompt: 'Completa: "I ___ eat that. I don\'t like it." (negativa de "will")',
      promptTranslation: 'No me comeré eso. No me gusta.',
      correctAnswer: "won't",
      acceptedAnswers: ["won't", "will not", 'will not.'],
      explanation: 'La negativa de "will" es "won\'t" (will not). → I won\'t eat that.',
    },
    {
      id: 'a2-m4-l1-mt3',
      type: 'translate',
      concept: 'will - translate negative',
      difficulty: 3,
      prompt: 'Traduce: "Él no vendrá a la fiesta."',
      correctAnswer: "He won't come to the party.",
      acceptedAnswers: ["He won't come to the party", 'He will not come to the party', "He won't come to the party.", 'He will not come to the party.'],
      acceptApproximate: true,
      explanation: '"No vendrá" → won\'t come. → He won\'t come to the party.',
    },
    {
      id: 'a2-m4-l1-mt4',
      type: 'error_correction',
      concept: 'will - no "to"',
      difficulty: 3,
      prompt: 'Corrige el error: "I no will buy the ticket."',
      correctAnswer: "I won't buy the ticket.",
      acceptedAnswers: ["I won't buy the ticket", 'I will not buy the ticket', "I won't buy the ticket.", 'I will not buy the ticket.'],
      acceptApproximate: true,
      explanation: 'La negativa es "won\'t", nunca "no will": I won\'t buy the ticket.',
    },
    {
      id: 'a2-m4-l1-mt5',
      type: 'reorder',
      concept: 'will - question order',
      difficulty: 4,
      prompt: 'Ordena las palabras: you / help / will / me',
      promptTranslation: '¿Me ayudarás?',
      correctAnswer: 'Will you help me?',
      words: ['Will', 'you', 'help', 'me'],
      explanation: 'En la pregunta, "will" va al principio: Will + sujeto + verbo.',
    },
  ],
  reviewItems: ['a2-m3-l4'],
  prerequisites: ['a2-m3-l4'],
}
