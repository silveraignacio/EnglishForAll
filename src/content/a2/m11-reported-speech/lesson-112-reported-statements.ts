import type { Lesson } from '../../types'

export const lesson112ReportedStatements: Lesson = {
  id: 'a2-m11-l2',
  moduleId: 'm11-reported-speech',
  order: 1,
  title: 'Estilo indirecto: oraciones afirmativas (cambio de tiempo)',
  objective: 'Convertir oraciones directas en estilo indirecto (reported speech) cambiando el tiempo verbal: am→was, do→did, will→would, have→had.',
  explanation_es: `Cuando contamos lo que alguien dijo, usamos el estilo indirecto (reported speech). Al pasar de estilo directo a indirecto, el tiempo verbal suele "retroceder" (backshift).

Cambios más importantes:
- am / is → was
- do / does → did
- will → would
- have / has → had
- work → worked (presente simple → pasado simple)

Veamos ejemplos:

Directo: "I am tired." → Indirecto: She said that she was tired.
Directo: "I work in Madrid." → Indirecto: He said that he worked in Madrid.
Directo: "I will call you." → Indirecto: She said she would call me.
Directo: "I have a car." → Indirecto: She said that she had a car.

También cambian los pronombres:
- "I" (quien habló) → "she/he" (según quién dijo la frase)
- "you" (a quien le hablan) → "me", "him", "us"... según el contexto

En español hacemos lo mismo: "Estoy cansada" → "Dijo que estaba cansada". El verbo pasa de presente a pasado.`,
  examples: [
    { english: 'Direct: "I am tired." → Reported: She said that she was tired.', spanish: 'Directo: "Estoy cansada." → Indirecto: Ella dijo que estaba cansada.', note: 'am → was' },
    { english: 'Direct: "I work in Madrid." → Reported: He said that he worked in Madrid.', spanish: 'Directo: "Trabajo en Madrid." → Indirecto: Él dijo que trabajaba en Madrid.', note: 'present simple → past simple' },
    { english: 'Direct: "I will call you." → Reported: She said she would call me.', spanish: 'Directo: "Te llamaré." → Indirecto: Ella dijo que me llamaría.', note: 'will → would' },
    { english: 'Direct: "I have a car." → Reported: She said that she had a car.', spanish: 'Directo: "Tengo un coche." → Indirecto: Ella dijo que tenía un coche.', note: 'have → had' },
    { english: 'Direct: "I like coffee." → Reported: He said that he liked coffee.', spanish: 'Directo: "Me gusta el café." → Indirecto: Él dijo que le gustaba el café.', note: 'like → liked' },
  ],
  rule: `Regla del cambio de tiempo (backshift):
- am/is → was
- do/does → did
- will → would
- have/has → had
- presente simple (work) → pasado simple (worked)

Los pronombres también cambian según quién habla: "I" → she/he; "you" → me/him/us...

Frase: Sujeto + said (that) + frase con el tiempo en pasado.`,
  formation: {
    title: 'Cómo se forma el estilo indirecto — oraciones afirmativas',
    intro: 'Al contar lo que alguien dijo, el tiempo verbal "retrocede" un paso (backshift) y los pronombres cambian según quién habla.',
    patterns: [
      {
        name: 'Afirmativo',
        formula: 'Sujeto + said + (that) + frase con el tiempo en pasado',
        examples: [
          { english: 'Direct: "I am tired." → She said that she was tired.', spanish: 'Directo: "Estoy cansada." → Ella dijo que estaba cansada.' },
          { english: 'Direct: "I work in Madrid." → He said that he worked in Madrid.', spanish: 'Directo: "Trabajo en Madrid." → Él dijo que trabajaba en Madrid.' },
          { english: 'Direct: "I will call you." → She said she would call me.', spanish: 'Directo: "Te llamaré." → Ella dijo que me llamaría.' },
          { english: 'Direct: "I have a car." → She said that she had a car.', spanish: 'Directo: "Tengo un coche." → Ella dijo que tenía un coche.' },
        ],
        note: 'that es opcional: She said she was tired = She said that she was tired.',
      },
    ],
    notes: [
      'Cambio de tiempo (backshift): am/is → was · do/does → did · will → would · have/has → had · presente simple → pasado simple (work → worked).',
      'Los pronombres cambian según quién habló: "I" → she/he; "you" → me, him, us... según el contexto.',
      'En español ocurre lo mismo: "Estoy cansada" → "Dijo que estaba cansada".',
    ],
  },
  commonMistakes: [
    { wrong: '❌ She said she is tired.', correct: '✅ She said she was tired.', explanation: 'Si lo dicho fue "I am tired", al pasar a indirecto el presente cambia a pasado: was tired.' },
    { wrong: '❌ He said that I worked in Madrid (cuando él hablaba de sí mismo).', correct: '✅ He said that he worked in Madrid.', explanation: 'Los pronombres cambian: el "I" de quien habló se convierte en "he".' },
    { wrong: '❌ She said she will call me.', correct: '✅ She said she would call me.', explanation: 'Después de "said", "will" cambia a "would".' },
  ],
  vocabulary: [],
  grammarPoints: [
    {
      id: 'gp-reported-statements',
      level: 'A2',
      name: 'Reported speech — statements (backshift)',
      explanation_es: 'Para contar lo que alguien dijo, el tiempo verbal retrocede un paso: am→was, do→did, will→would, have→had, y el presente simple pasa a pasado simple.',
      formula: 'say + (that) + sentence with backshift | "I am tired." → She said (that) she was tired.',
      examples: ['She said that she was tired.', 'He said that he worked in Madrid.', 'She said she would call me.'],
    },
  ],
  exercises: [
    {
      id: 'a2-m11-l2-ex1',
      type: 'multiple_choice',
      concept: 'reported speech backshift',
      difficulty: 1,
      prompt: 'Completa: Directo: "I am tired." → "She said that she ___ tired."',
      promptTranslation: 'Ella dijo que estaba cansada.',
      correctAnswer: 'was',
      options: ['was', 'is', 'will be'],
      explanation: '"Am" cambia a "was" en estilo indirecto. → She said that she was tired.',
    },
    {
      id: 'a2-m11-l2-ex2',
      type: 'fill_blank',
      concept: 'reported speech backshift',
      difficulty: 2,
      prompt: 'Completa: Directo: "I work in Madrid." → "He said that he ___ in Madrid."',
      promptTranslation: 'Él dijo que trabajaba en Madrid.',
      correctAnswer: 'worked',
      acceptedAnswers: ['worked', 'Worked'],
      explanation: 'El presente simple (work) cambia a pasado simple (worked). → He said that he worked in Madrid.',
    },
    {
      id: 'a2-m11-l2-ex3',
      type: 'multiple_choice',
      concept: 'reported speech backshift',
      difficulty: 2,
      prompt: 'Completa: Directo: "I will call you." → "She said she ___ call me."',
      promptTranslation: 'Ella dijo que me llamaría.',
      correctAnswer: 'would',
      options: ['would', 'will', 'can'],
      explanation: '"Will" cambia a "would" en estilo indirecto. → She said she would call me.',
    },
    {
      id: 'a2-m11-l2-ex4',
      type: 'fill_blank',
      concept: 'reported speech backshift',
      difficulty: 2,
      prompt: 'Completa: Directo: "I have a car." → "She said that she ___ a car."',
      promptTranslation: 'Ella dijo que tenía un coche.',
      correctAnswer: 'had',
      acceptedAnswers: ['had', 'Had'],
      explanation: '"Have" cambia a "had" en estilo indirecto. → She said that she had a car.',
    },
    {
      id: 'a2-m11-l2-ex5',
      type: 'reorder',
      concept: 'reported speech backshift',
      difficulty: 3,
      prompt: 'Ordena las palabras: She / that / was / said / tired / she',
      promptTranslation: 'Ella dijo que estaba cansada.',
      correctAnswer: 'She said that she was tired.',
      words: ['She', 'said', 'that', 'she', 'was', 'tired'],
      explanation: 'Orden: sujeto + said (that) + frase en pasado. → She said that she was tired.',
    },
    {
      id: 'a2-m11-l2-ex6',
      type: 'translate',
      concept: 'reported speech backshift',
      difficulty: 3,
      prompt: 'Traduce: "Él dijo que trabajaba en Madrid."',
      promptTranslation: 'He said that he worked in Madrid.',
      correctAnswer: 'He said that he worked in Madrid.',
      acceptedAnswers: ['He said that he worked in Madrid', 'He said he worked in Madrid', 'he said that he worked in Madrid.'],
      acceptApproximate: true,
      explanation: '"Dijo que trabajaba" → presente en el pasado, así que usamos el pasado: He said that he worked in Madrid.',
    },
    {
      id: 'a2-m11-l2-ex7',
      type: 'error_correction',
      concept: 'reported speech backshift',
      difficulty: 3,
      prompt: 'Corrige el error (original: "I am tired."): "She said she is tired."',
      promptTranslation: 'Ella dijo que estaba cansada.',
      correctAnswer: 'She said she was tired.',
      acceptedAnswers: ['She said she was tired', 'She said that she was tired', 'she said she was tired.'],
      acceptApproximate: true,
      explanation: 'En estilo indirecto el presente cambia a pasado: "am tired" → "was tired". → She said she was tired.',
    },
    {
      id: 'a2-m11-l2-ex8',
      type: 'match',
      concept: 'reported speech backshift',
      difficulty: 3,
      prompt: 'Relaciona cada frase directa con su versión en estilo indirecto.',
      promptTranslation: 'Match each direct sentence with its reported form.',
      correctAnswer: '"I am tired."→She was tired; "I work in Madrid."→He worked in Madrid; "I will call you."→She would call me; "I have a car."→She had a car; "I like coffee."→He liked coffee',
      pairs: [
        { left: '"I am tired."', right: 'She said she was tired.' },
        { left: '"I work in Madrid."', right: 'He said he worked in Madrid.' },
        { left: '"I will call you."', right: 'She said she would call me.' },
        { left: '"I have a car."', right: 'She said she had a car.' },
        { left: '"I like coffee."', right: 'He said he liked coffee.' },
      ],
      explanation: 'Cada tiempo retrocede un paso: am→was, work→worked, will→would, have→had, like→liked.',
    },
    {
      id: 'a2-m11-l2-ex9',
      type: 'true_false',
      concept: 'reported speech backshift',
      difficulty: 3,
      prompt: 'Directo: "I am happy." → "She said she is happy" es la forma correcta de estilo indirecto.',
      promptTranslation: 'Direct: "I am happy." → "She said she is happy" is correct reported speech.',
      correctAnswer: 'false',
      acceptedAnswers: ['False', 'FALSE', 'f'],
      explanation: 'Falso. En estilo indirecto el presente cambia a pasado: She said she was happy.',
    },
    {
      id: 'a2-m11-l2-ex10',
      type: 'multiple_choice',
      concept: 'reported speech pronoun shift',
      difficulty: 4,
      prompt: 'Completa (Juan hablaba de sí mismo): "I am happy." → "Juan said that ___ was happy."',
      promptTranslation: 'Juan dijo que estaba feliz.',
      correctAnswer: 'he',
      options: ['he', 'I', 'she'],
      explanation: 'El "I" de quien habló (Juan) se convierte en "he". → Juan said that he was happy.',
    },
  ],
  miniTest: [
    {
      id: 'a2-m11-l2-mt1',
      type: 'multiple_choice',
      concept: 'reported speech backshift',
      difficulty: 2,
      prompt: 'Completa: Directo: "I am hungry." → "He said he ___ hungry."',
      promptTranslation: 'Él dijo que tenía hambre.',
      correctAnswer: 'was',
      options: ['was', 'is', 'has'],
      explanation: '"Am" cambia a "was". → He said he was hungry.',
    },
    {
      id: 'a2-m11-l2-mt2',
      type: 'fill_blank',
      concept: 'reported speech backshift',
      difficulty: 2,
      prompt: 'Completa: Directo: "I will help you." → "She said she ___ help me."',
      promptTranslation: 'Ella dijo que me ayudaría.',
      correctAnswer: 'would',
      acceptedAnswers: ['would', 'Would'],
      explanation: '"Will" cambia a "would". → She said she would help me.',
    },
    {
      id: 'a2-m11-l2-mt3',
      type: 'translate',
      concept: 'reported speech backshift',
      difficulty: 3,
      prompt: 'Traduce: "Ella dijo que tenía un coche."',
      promptTranslation: 'She said that she had a car.',
      correctAnswer: 'She said that she had a car.',
      acceptedAnswers: ['She said that she had a car', 'She said she had a car', 'she said that she had a car.'],
      acceptApproximate: true,
      explanation: '"Tenía" (pasado) → had. → She said that she had a car.',
    },
    {
      id: 'a2-m11-l2-mt4',
      type: 'error_correction',
      concept: 'reported speech backshift',
      difficulty: 4,
      prompt: 'Corrige el error (original: "I will call you."): "She said she will call me."',
      promptTranslation: 'Ella dijo que me llamaría.',
      correctAnswer: 'She said she would call me.',
      acceptedAnswers: ['She said she would call me', 'She said that she would call me', 'she said she would call me.'],
      acceptApproximate: true,
      explanation: 'Después de "said", "will" cambia a "would". → She said she would call me.',
    },
    {
      id: 'a2-m11-l2-mt5',
      type: 'multiple_choice',
      concept: 'reported speech backshift',
      difficulty: 4,
      prompt: '¿Cuál es la forma correcta de estilo indirecto para "I work in Madrid."?',
      promptTranslation: 'Which is the correct reported form of "I work in Madrid."?',
      correctAnswer: 'He said that he worked in Madrid.',
      options: ['He said that he work in Madrid.', 'He said that he works in Madrid.', 'He said that he worked in Madrid.'],
      explanation: 'El presente simple (work) cambia a pasado simple (worked). → He said that he worked in Madrid.',
    },
  ],
  reviewItems: ['a2-m11-l1'],
  prerequisites: ['a2-m11-l1'],
}
