import type { Lesson } from '../../types'

export const lesson81RelativeSubject: Lesson = {
  id: 'a2-m8-l1',
  moduleId: 'm8-relative-clauses',
  order: 0,
  title: 'Oraciones relativas: who, which y that (sujeto)',
  objective: 'Definir personas y cosas con who, which y that como sujeto.',
  explanation_es: `Las oraciones relativas nos ayudan a dar más información sobre una persona o una cosa, y a identificarla. Las unimos con una palabra relativa:

- **who** (que) → para personas: "The man who lives next door is a doctor." = El hombre que vive al lado es médico.
- **which** (que) → para cosas: "I like films which make me laugh." = Me gustan las películas que me hacen reír.
- **that** (que) → sirve para personas Y cosas: "The book that is on the table is mine." = El libro que está en la mesa es mío.

En estas oraciones, la palabra relativa es el SUJETO del verbo relativo: es quien hace la acción.
- "The man who lives next door..." → who + lives. El hombre es el sujeto de "lives".
- "The book that is on the table..." → that + is. El libro es el sujeto de "is".

IMPORTANTE: cuando la relativa es el sujeto, NO repetimos el pronombre.
- ❌ The man who he lives next door... → ✅ The man who lives next door...
  (En español a veces decimos "el hombre que él vive", pero en inglés no repetimos el sujeto.)

Y para cosas usamos which o that, NUNCA who:
- ❌ The book who is on the table... → ✅ The book that/which is on the table...`,
  examples: [
    { english: 'The man who lives next door is a doctor.', spanish: 'El hombre que vive al lado es médico.', note: 'who para personas, como sujeto.' },
    { english: 'The book that is on the table is mine.', spanish: 'El libro que está en la mesa es mío.', note: 'that para cosas (también which).' },
    { english: 'I like films which make me laugh.', spanish: 'Me gustan las películas que me hacen reír.', note: 'which para cosas.' },
    { english: 'The woman who works with me is very kind.', spanish: 'La mujer que trabaja conmigo es muy amable.', note: 'who + verbo, sin pronombre extra.' },
    { english: 'The cat that sleeps on the sofa is mine.', spanish: 'El gato que duerme en el sofá es mío.', note: 'that para animales y cosas.' },
    { english: 'This is the house which has a big garden.', spanish: 'Esta es la casa que tiene un jardín grande.', note: 'which como sujeto de la relativa.' },
  ],
  rule: `Regla de las relativas de sujeto:

- who → personas.
- which → cosas.
- that → personas y cosas.
- Persona/cosa + who/which/that + verbo (sin pronombre extra).
- Para cosas usamos which o that, nunca who.`,
  formation: {
    title: 'Cómo se forman las relativas de sujeto',
    intro: 'Las oraciones relativas dan más información sobre una persona o una cosa. Cuando la palabra relativa (who/which/that) es el sujeto del verbo, va seguida directamente del verbo, sin pronombre extra.',
    patterns: [
      {
        name: 'Personas (who / that)',
        formula: 'persona + who/that + verbo + ...',
        examples: [
          { english: 'The man who lives next door is a doctor.', spanish: 'El hombre que vive al lado es médico.' },
          { english: 'The woman who works with me is very kind.', spanish: 'La mujer que trabaja conmigo es muy amable.' },
        ],
        note: 'Después de who/that va el verbo directamente. No repitas el pronombre: ❌ who he lives → ✅ who lives.',
      },
      {
        name: 'Cosas (which / that)',
        formula: 'cosa + which/that + verbo + ...',
        examples: [
          { english: 'The book that is on the table is mine.', spanish: 'El libro que está en la mesa es mío.' },
          { english: 'I like films which make me laugh.', spanish: 'Me gustan las películas que me hacen reír.' },
        ],
        note: 'Para cosas usamos which o that. NUNCA "who": ❌ the book who → ✅ the book that/which.',
      },
    ],
    notes: [
      'who → personas. which → cosas. that → personas Y cosas.',
      'La palabra relativa es el sujeto del verbo: who lives, that is, which make.',
      'En español a veces repetimos el sujeto ("el hombre que él vive"); en inglés, no.',
    ],
  },
  commonMistakes: [
    { wrong: '❌ The man who he lives next door is a doctor.', correct: '✅ The man who lives next door is a doctor.', explanation: 'No se repite el pronombre "he" después de "who". "Who" ya es el sujeto.' },
    { wrong: '❌ The book who is on the table is mine.', correct: '✅ The book that is on the table is mine.', explanation: 'Para cosas usamos which o that, no who. "Who" es solo para personas.' },
    { wrong: '❌ The woman which works with me is very kind.', correct: '✅ The woman who works with me is very kind.', explanation: 'Para personas usamos who, no which. "Which" es para cosas.' },
  ],
  vocabulary: [
    { word: 'next door', translation_es: 'en la casa de al lado', level: 'A2', category: 'places', partOfSpeech: 'phrase', example: 'The man who lives next door is a doctor.', exampleTranslation: 'El hombre que vive al lado es médico.' },
    { word: 'neighbour', translation_es: 'vecino/a', level: 'A2', category: 'people', partOfSpeech: 'noun', example: 'My neighbour is very friendly.', exampleTranslation: 'Mi vecino es muy simpático.' },
    { word: 'laugh', translation_es: 'reírse', level: 'A2', category: 'feelings', partOfSpeech: 'verb', example: 'I like films which make me laugh.', exampleTranslation: 'Me gustan las películas que me hacen reír.' },
    { word: 'mine', translation_es: 'mío/a', level: 'A2', category: 'possessives', partOfSpeech: 'pronoun', example: 'The book that is on the table is mine.', exampleTranslation: 'El libro que está en la mesa es mío.' },
    { word: 'kind', translation_es: 'amable', level: 'A2', category: 'description', partOfSpeech: 'adjective', example: 'The woman who works with me is very kind.', exampleTranslation: 'La mujer que trabaja conmigo es muy amable.' },
    { word: 'garden', translation_es: 'jardín', level: 'A2', category: 'home', partOfSpeech: 'noun', example: 'This is the house which has a big garden.', exampleTranslation: 'Esta es la casa que tiene un jardín grande.' },
  ],
  grammarPoints: [
    {
      id: 'gp-relative-subject',
      level: 'A2',
      name: 'Relative clauses: who/which/that (subject)',
      explanation_es: 'Definen personas (who/that) y cosas (which/that). La relativa actúa como sujeto del verbo.',
      formula: 'person + who/that + verb | thing + which/that + verb',
      examples: ['The man who lives next door is a doctor.', 'The book that is on the table is mine.'],
    },
  ],
  exercises: [
    {
      id: 'a2-m8-l1-ex1',
      type: 'multiple_choice',
      concept: 'relative clauses subject',
      difficulty: 1,
      prompt: 'Completa: "The man ___ lives next door is a doctor."',
      promptTranslation: 'El hombre que vive al lado es médico.',
      correctAnswer: 'who',
      options: ['who', 'which', 'where'],
      explanation: 'Para personas usamos "who". → The man who lives next door...',
    },
    {
      id: 'a2-m8-l1-ex2',
      type: 'multiple_choice',
      concept: 'relative clauses subject',
      difficulty: 1,
      prompt: 'Completa: "The book ___ is on the table is mine."',
      promptTranslation: 'El libro que está en la mesa es mío.',
      correctAnswer: 'that',
      options: ['that', 'who', 'where'],
      explanation: 'Para cosas usamos "that" (o "which"). → The book that is on the table...',
    },
    {
      id: 'a2-m8-l1-ex3',
      type: 'fill_blank',
      concept: 'relative clauses subject',
      difficulty: 2,
      prompt: 'Completa: "I like films ___ make me laugh." (que)',
      promptTranslation: 'Me gustan las películas que me hacen reír.',
      correctAnswer: 'which',
      acceptedAnswers: ['which', 'that', 'Which'],
      explanation: 'Para cosas ("films") usamos which o that. → films which make me laugh.',
    },
    {
      id: 'a2-m8-l1-ex4',
      type: 'select_correct',
      concept: 'relative clauses subject',
      difficulty: 2,
      prompt: 'Selecciona la frase correcta.',
      promptTranslation: 'La mujer que trabaja conmigo es muy amable.',
      correctAnswer: 'The woman who works with me is very kind.',
      options: ['The woman which works with me is very kind.', 'The woman who works with me is very kind.', 'The woman who she works with me is very kind.'],
      explanation: 'Para personas usamos who, sin repetir el pronombre: The woman who works with me...',
    },
    {
      id: 'a2-m8-l1-ex5',
      type: 'reorder',
      concept: 'relative clauses subject',
      difficulty: 2,
      prompt: 'Ordena la frase:',
      promptTranslation: 'El hombre que vive al lado es médico.',
      correctAnswer: 'The man who lives next door is a doctor.',
      words: ['The', 'man', 'who', 'lives', 'next', 'door', 'is', 'a', 'doctor.'],
      explanation: 'Sujeto (The man) + who + verbo (lives next door) + resultado (is a doctor).',
    },
    {
      id: 'a2-m8-l1-ex6',
      type: 'error_correction',
      concept: 'relative clauses subject',
      difficulty: 3,
      prompt: 'Corrige el error: "The man who he lives next door is a doctor."',
      correctAnswer: 'The man who lives next door is a doctor.',
      acceptedAnswers: ['The man who lives next door is a doctor', 'The man that lives next door is a doctor.', 'the man who lives next door is a doctor.'],
      acceptApproximate: true,
      explanation: 'No repetimos el pronombre "he" después de "who". → The man who lives next door...',
    },
    {
      id: 'a2-m8-l1-ex7',
      type: 'match',
      concept: 'relative clauses subject',
      difficulty: 3,
      prompt: 'Relaciona cada comienzo con su final.',
      promptTranslation: 'Match each beginning with its ending.',
      correctAnswer: '',
      pairs: [
        { left: 'The man who lives next door', right: 'is a doctor.' },
        { left: 'The book that is on the table', right: 'is mine.' },
        { left: 'I like films which make', right: 'me laugh.' },
        { left: 'The woman who works with me', right: 'is very kind.' },
        { left: 'The cat that sleeps on the sofa', right: 'is mine.' },
      ],
      explanation: 'Cada relativa (who/which/that + verbo) describe al sujeto y se completa con un predicado.',
    },
    {
      id: 'a2-m8-l1-ex8',
      type: 'translate',
      concept: 'relative clauses subject',
      difficulty: 3,
      prompt: 'Traduce: "El hombre que vive al lado es médico."',
      correctAnswer: 'The man who lives next door is a doctor.',
      acceptedAnswers: ['The man who lives next door is a doctor', 'The man that lives next door is a doctor.', 'the man who lives next door is a doctor.'],
      acceptApproximate: true,
      explanation: '"El hombre que vive al lado" = the man who lives next door; "es médico" = is a doctor.',
    },
    {
      id: 'a2-m8-l1-ex9',
      type: 'translate',
      concept: 'relative clauses subject',
      difficulty: 4,
      prompt: 'Traduce: "El libro que está en la mesa es mío."',
      correctAnswer: 'The book that is on the table is mine.',
      acceptedAnswers: ['The book that is on the table is mine', 'The book which is on the table is mine.', 'the book that is on the table is mine.'],
      acceptApproximate: true,
      explanation: '"El libro que está en la mesa" = the book that is on the table; "es mío" = is mine.',
    },
    {
      id: 'a2-m8-l1-ex10',
      type: 'error_correction',
      concept: 'relative clauses subject',
      difficulty: 4,
      prompt: 'Corrige el error: "The book who is on the table is mine."',
      correctAnswer: 'The book that is on the table is mine.',
      acceptedAnswers: ['The book that is on the table is mine', 'The book which is on the table is mine.', 'the book that is on the table is mine.'],
      acceptApproximate: true,
      explanation: '"Who" es solo para personas. Para cosas ("book") usamos which o that.',
    },
  ],
  miniTest: [
    {
      id: 'a2-m8-l1-mt1',
      type: 'multiple_choice',
      concept: 'relative clauses subject',
      difficulty: 1,
      prompt: 'Completa: "The woman ___ works with me is very kind."',
      promptTranslation: 'La mujer que trabaja conmigo es muy amable.',
      correctAnswer: 'who',
      options: ['who', 'which', 'where'],
      explanation: 'Para personas usamos "who". → The woman who works with me...',
    },
    {
      id: 'a2-m8-l1-mt2',
      type: 'fill_blank',
      concept: 'relative clauses subject',
      difficulty: 2,
      prompt: 'Completa: "This is the house ___ has a big garden." (que)',
      promptTranslation: 'Esta es la casa que tiene un jardín grande.',
      correctAnswer: 'which',
      acceptedAnswers: ['which', 'that', 'Which'],
      explanation: 'Para cosas ("house") usamos which o that. → the house which has a big garden.',
    },
    {
      id: 'a2-m8-l1-mt3',
      type: 'true_false',
      concept: 'relative clauses subject',
      difficulty: 2,
      prompt: '"We use "who" for people."',
      promptTranslation: 'Usamos "who" para personas.',
      correctAnswer: 'true',
      acceptedAnswers: ['True', 'TRUE', 'Verdadero', 'true.'],
      explanation: 'Es VERDADERO. "Who" se usa para personas; "which" para cosas; "that" para ambos.',
    },
    {
      id: 'a2-m8-l1-mt4',
      type: 'translate',
      concept: 'relative clauses subject',
      difficulty: 3,
      prompt: 'Traduce: "Me gustan las películas que me hacen reír."',
      correctAnswer: 'I like films which make me laugh.',
      acceptedAnswers: ['I like films which make me laugh', 'I like films that make me laugh.', 'I like films which make me laugh.'],
      acceptApproximate: true,
      explanation: '"Las películas que" = films which/that; "me hacen reír" = make me laugh.',
    },
    {
      id: 'a2-m8-l1-mt5',
      type: 'error_correction',
      concept: 'relative clauses subject',
      difficulty: 4,
      prompt: 'Corrige el error: "The man who he lives next door is a doctor."',
      correctAnswer: 'The man who lives next door is a doctor.',
      acceptedAnswers: ['The man who lives next door is a doctor', 'The man that lives next door is a doctor.', 'the man who lives next door is a doctor.'],
      acceptApproximate: true,
      explanation: 'No repetimos el pronombre "he". "Who" ya es el sujeto del verbo.',
    },
  ],
  reviewItems: ['a2-m7-l4'],
  prerequisites: ['a2-m7-l4'],
}
