import type { Lesson } from '../../types'

export const lesson104Lets: Lesson = {
  id: 'a1-m10-l4',
  moduleId: 'm10-present-continuous',
  order: 3,
  title: "Let's + repaso de acciones",
  objective: 'Hacer sugerencias con "Let\'s" y repasar las acciones del módulo.',
  explanation_es: `**Let's** (let us) se usa para hacer una **sugerencia**: proponer hacer algo juntos.

En español equivale a "Vamos a..." o a la forma "-emos/-amos" del imperativo:

- Let's go! = ¡Vamos!
- Let's eat. = Comamos.
- Let's watch a film. = Veamos una película.

Regla: **Let's + verbo base** (sin "to" y sin -s).

- ✅ Let's go.
- ❌ Let's to go. (no llevamos "to")
- ❌ Let's goes. (sin -s)

Ejemplos:

- Let's go to the park. = Vamos al parque.
- Let's have lunch. = Almorcemos.
- Let's watch a movie tonight. = Veamos una película esta noche.

"Let's" es solo una sugerencia, no una orden. Cuando decimos "We go" (Present Simple) estamos contando que vamos, no proponiendo nada.

Esta lección también repasa las acciones del módulo: work, read, watch, cook, study, run, swim, play.`,
  examples: [
    { english: "Let's go to the park.", spanish: 'Vamos al parque.' },
    { english: "Let's have lunch.", spanish: 'Almorcemos.' },
    { english: "Let's watch a movie tonight.", spanish: 'Veamos una película esta noche.' },
    { english: "Let's go!", spanish: '¡Vamos!' },
    { english: "Let's study together.", spanish: 'Estudiemos juntos.' },
    { english: "Let's eat.", spanish: 'Comamos.' },
  ],
  rule: `Let's + verbo base (sin "to" y sin -s)

- ✅ Let's go.
- ❌ Let's to go.
- ❌ Let's goes.

Uso: sugerir una acción en común (vamos a... / -emos).
No confundas con Present Simple: "We go" = nosotros vamos (hecho), no una sugerencia.`,
  commonMistakes: [
    { wrong: "❌ Let's to go.", correct: "✅ Let's go.", explanation: 'Después de "Let\'s" el verbo va en base, sin "to".' },
    { wrong: "❌ Let's to eat.", correct: "✅ Let's eat.", explanation: 'Sin "to": Let\'s eat. = Comamos.' },
    { wrong: '❌ We go to the cinema tonight?', correct: "✅ Let's go to the cinema tonight.", explanation: 'Para sugerir usamos "Let\'s" (vamos a...). "We go" es Present Simple (nosotros vamos), no una sugerencia.' },
  ],
  vocabulary: [],
  grammarPoints: [
    {
      id: 'gp-lets-suggestions',
      level: 'A1',
      name: "Let's for suggestions",
      explanation_es: 'Let\'s (let us) + verbo base se usa para sugerir una acción en común: Let\'s go! = ¡Vamos!',
      formula: "Let's + verb (base form)",
      examples: ["Let's go!", "Let's have lunch.", "Let's watch a movie tonight."],
    },
  ],
  exercises: [
    {
      id: 'a1-m10-l4-ex1',
      type: 'multiple_choice',
      concept: "let's - suggestions",
      difficulty: 1,
      prompt: 'Completa: "___ go to the park!"',
      promptTranslation: '¡Vamos al parque!',
      correctAnswer: "Let's",
      options: ["Let's", 'We', 'To'],
      explanation: 'Para sugerir usamos "Let\'s" + verbo. → Let\'s go to the park!',
    },
    {
      id: 'a1-m10-l4-ex2',
      type: 'multiple_choice',
      concept: "let's - verb base (no to)",
      difficulty: 1,
      prompt: 'Completa: "Let\'s ___ lunch."',
      promptTranslation: 'Almorcemos.',
      correctAnswer: 'have',
      options: ['have', 'to have', 'having'],
      explanation: 'Después de "Let\'s" el verbo va en base, sin "to" y sin -ing: have. → Let\'s have lunch.',
    },
    {
      id: 'a1-m10-l4-ex3',
      type: 'multiple_choice',
      concept: "let's - verb base (no to)",
      difficulty: 2,
      prompt: 'Elige la frase correcta:',
      promptTranslation: 'Veamos una película esta noche.',
      correctAnswer: "Let's watch a movie tonight.",
      options: ["Let's watch a movie tonight.", "Let's to watch a movie tonight.", "Let's watching a movie tonight."],
      explanation: "Let's + verbo base: watch (no \"to watch\" ni \"watching\").",
    },
    {
      id: 'a1-m10-l4-ex4',
      type: 'reorder',
      concept: "let's - word order",
      difficulty: 2,
      prompt: 'Ordena: Let\'s / go / to the park',
      promptTranslation: 'Vamos al parque.',
      correctAnswer: "Let's go to the park.",
      words: ["Let's", 'go', 'to the park'],
      explanation: "Let's + verbo + resto. → Let's go to the park.",
    },
    {
      id: 'a1-m10-l4-ex5',
      type: 'reorder',
      concept: "let's - word order",
      difficulty: 3,
      prompt: 'Ordena: watch / a movie / Let\'s / tonight',
      promptTranslation: 'Veamos una película esta noche.',
      correctAnswer: "Let's watch a movie tonight.",
      words: ["Let's", 'watch', 'a movie', 'tonight'],
      explanation: "Let's + verbo base + resto. → Let's watch a movie tonight.",
    },
    {
      id: 'a1-m10-l4-ex6',
      type: 'translate',
      concept: "let's - suggestions",
      difficulty: 3,
      prompt: 'Traduce: "¡Vamos al parque!"',
      correctAnswer: "Let's go to the park.",
      acceptedAnswers: ["Let's go to the park", "let's go to the park."],
      acceptApproximate: true,
      explanation: "Sugerencia: Let's + go to the park. → Let's go to the park.",
    },
    {
      id: 'a1-m10-l4-ex7',
      type: 'translate',
      concept: "let's - suggestions",
      difficulty: 3,
      prompt: 'Traduce: "Estudiemos juntos."',
      correctAnswer: "Let's study together.",
      acceptedAnswers: ["Let's study together", "let's study together."],
      acceptApproximate: true,
      explanation: "Let's + study + together. → Let's study together.",
    },
    {
      id: 'a1-m10-l4-ex8',
      type: 'match',
      concept: "let's - review actions",
      difficulty: 3,
      prompt: 'Relaciona cada sugerencia con su traducción.',
      promptTranslation: 'Match each suggestion with its translation.',
      correctAnswer: '',
      pairs: [
        { left: "Let's go!", right: '¡Vamos!' },
        { left: "Let's eat.", right: 'Comamos.' },
        { left: "Let's watch a film.", right: 'Veamos una película.' },
        { left: "Let's study together.", right: 'Estudiemos juntos.' },
        { left: "Let's have lunch.", right: 'Almorcemos.' },
      ],
      explanation: 'Todas las sugerencias con "Let\'s" equivalen a "vamos a..." o a la forma "-emos/-amos" del imperativo en español.',
    },
    {
      id: 'a1-m10-l4-ex9',
      type: 'error_correction',
      concept: "let's - no to",
      difficulty: 3,
      prompt: 'Corrige el error: "Let\'s to go."',
      correctAnswer: "Let's go.",
      acceptedAnswers: ["Let's go", "let's go."],
      acceptApproximate: true,
      explanation: 'Después de "Let\'s" el verbo va sin "to": Let\'s go.',
    },
  ],
  miniTest: [
    {
      id: 'a1-m10-l4-mt1',
      type: 'multiple_choice',
      concept: "let's - verb base",
      difficulty: 1,
      prompt: 'Completa: "Let\'s ___ a film."',
      promptTranslation: 'Veamos una película.',
      correctAnswer: 'watch',
      options: ['watch', 'to watch', 'watching'],
      explanation: "Let's + verbo base: watch (sin \"to\"). → Let's watch a film.",
    },
    {
      id: 'a1-m10-l4-mt2',
      type: 'multiple_choice',
      concept: "let's - verb base",
      difficulty: 2,
      prompt: 'Elige la frase correcta:',
      promptTranslation: 'Comamos.',
      correctAnswer: "Let's eat.",
      options: ["Let's eat.", "Let's to eat.", "Let's eating."],
      explanation: "Let's + verbo base: eat (no \"to eat\" ni \"eating\").",
    },
    {
      id: 'a1-m10-l4-mt3',
      type: 'reorder',
      concept: "let's - word order",
      difficulty: 3,
      prompt: 'Ordena: have / Let\'s / lunch',
      promptTranslation: 'Almorcemos.',
      correctAnswer: "Let's have lunch.",
      words: ["Let's", 'have', 'lunch'],
      explanation: "Let's + verbo + resto. → Let's have lunch.",
    },
    {
      id: 'a1-m10-l4-mt4',
      type: 'translate',
      concept: "let's - suggestions",
      difficulty: 3,
      prompt: 'Traduce: "Comamos."',
      correctAnswer: "Let's eat.",
      acceptedAnswers: ["Let's eat", "let's eat."],
      acceptApproximate: true,
      explanation: "Sugerencia: Let's + eat. → Let's eat. = Comamos.",
    },
    {
      id: 'a1-m10-l4-mt5',
      type: 'translate',
      concept: "let's - suggestions",
      difficulty: 3,
      prompt: 'Traduce: "Veamos una película esta noche."',
      correctAnswer: "Let's watch a movie tonight.",
      acceptedAnswers: ["Let's watch a movie tonight", "let's watch a movie tonight."],
      acceptApproximate: true,
      explanation: "Let's + watch a movie + tonight. → Let's watch a movie tonight.",
    },
  ],
  reviewItems: ['a1-m10-l3'],
  prerequisites: ['a1-m10-l3'],
}
