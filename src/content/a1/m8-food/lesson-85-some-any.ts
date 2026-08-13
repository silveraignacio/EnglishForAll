import type { Lesson } from '../../types'

export const lesson85SomeAny: Lesson = {
  id: 'a1-m8-l5',
  moduleId: 'm8-food',
  order: 4,
  title: 'Some / Any y How much / How many',
  objective: 'Usar some y any para hablar de cantidades y preguntar cantidades con how much y how many.',
  explanation_es: `En esta lección aprenderás a hablar de cantidades con **some**, **any**, **how much** y **how many**.

**Some** se usa en frases afirmativas (positivas):
- There are some apples. = Hay algunas manzanas.
- I have some water. = Tengo un poco de agua.

**Any** se usa en preguntas y frases negativas:
- Do you have any milk? = ¿Tienes leche?
- There aren't any eggs. = No hay huevos.

**How much / How many** se usan para preguntar por cantidades:
- **How much** + sustantivo INCONTABLE: How much water do you have? = ¿Cuánta agua tienes?
- **How many** + sustantivo CONTABLE en plural: How many apples do you have? = ¿Cuántas manzanas tienes?

Recuerda la diferencia entre contable e incontable:
- **Contable** (se puede contar): one apple, two apples. → usamos "How many".
- **Incontable** (no se puede contar): water, milk, bread, rice. → usamos "How much".

Recuerda del módulo anterior: "any" también se usa en preguntas y negativos con "there is/are": There aren't any eggs.`,
  examples: [
    { english: 'There are some apples.', spanish: 'Hay algunas manzanas.', note: 'Afirmativo: some.' },
    { english: 'I have some water.', spanish: 'Tengo un poco de agua.', note: 'some + incontable (water).' },
    { english: 'Do you have any milk?', spanish: '¿Tienes leche?', note: 'Pregunta: any.' },
    { english: "There aren't any eggs.", spanish: 'No hay huevos.', note: 'Negativo: any.' },
    { english: 'How much water do you have?', spanish: '¿Cuánta agua tienes?', note: 'How much + incontable (water).' },
    { english: 'How many apples do you have?', spanish: '¿Cuántas manzanas tienes?', note: 'How many + plural contable (apples).' },
  ],
  rule: `**Cantidades:**
- **some** + plural/incontable (afirmativo): There are some apples. / I have some water.
- **any** + plural/incontable (pregunta y negativo): Do you have any milk? / There aren't any eggs.

**Preguntar cantidades:**
- **How much** + incontable: How much water do you have?
- **How many** + plural contable: How many apples do you have?`,
  commonMistakes: [
    { wrong: '❌ Do you have some milk?', correct: '✅ Do you have any milk?', explanation: 'En preguntas usamos "any", no "some". "Some" es solo para frases afirmativas.' },
    { wrong: '❌ There are any apples.', correct: '✅ There are some apples.', explanation: 'En frases afirmativas usamos "some", no "any". "Any" es para preguntas y negativos.' },
    { wrong: '❌ How much apples?', correct: '✅ How many apples?', explanation: '"Apples" es plural y contable: usamos "How many". "How much" es para incontables (water, milk, bread).' },
    { wrong: "❌ I don't have some water.", correct: "✅ I don't have any water.", explanation: 'En frases negativas usamos "any", no "some".' },
  ],
  vocabulary: [],
  grammarPoints: [
    {
      id: 'gp-some-any-much-many',
      level: 'A1',
      name: 'some / any & how much / how many',
      explanation_es: '"Some" se usa en frases afirmativas y "any" en preguntas y negativos, tanto con plurales como con incontables. Para preguntar por cantidades usamos "how much" + incontable y "how many" + contable en plural.',
      formula: 'some + plural/uncountable (✓) | any + plural/uncountable (? / -) | How much + uncountable | How many + plural',
      examples: ['There are some apples.', 'Do you have any milk?', "There aren't any eggs.", 'How many apples do you have?'],
    },
  ],
  exercises: [
    {
      id: 'a1-m8-l5-ex1',
      type: 'fill_blank',
      concept: 'some/any - affirmative some',
      difficulty: 1,
      prompt: 'Completa: "There are ___ apples."',
      promptTranslation: 'Hay algunas manzanas.',
      correctAnswer: 'some',
      acceptedAnswers: ['some', 'Some'],
      explanation: 'Es una frase afirmativa: usamos "some". → There are some apples.',
    },
    {
      id: 'a1-m8-l5-ex2',
      type: 'fill_blank',
      concept: 'some/any - question any',
      difficulty: 2,
      prompt: 'Completa: "Do you have ___ milk?"',
      promptTranslation: '¿Tienes leche?',
      correctAnswer: 'any',
      acceptedAnswers: ['any', 'Any'],
      explanation: 'Es una pregunta: usamos "any". → Do you have any milk?',
    },
    {
      id: 'a1-m8-l5-ex3',
      type: 'fill_blank',
      concept: 'some/any - negative any',
      difficulty: 2,
      prompt: "Completa: \"There aren't ___ eggs.\"",
      promptTranslation: 'No hay huevos.',
      correctAnswer: 'any',
      acceptedAnswers: ['any', 'Any'],
      explanation: 'Es una frase negativa: usamos "any". → There aren\'t any eggs.',
    },
    {
      id: 'a1-m8-l5-ex4',
      type: 'fill_blank',
      concept: 'some/any - uncountable some',
      difficulty: 2,
      prompt: 'Completa: "I have ___ water."',
      promptTranslation: 'Tengo un poco de agua.',
      correctAnswer: 'some',
      acceptedAnswers: ['some', 'Some'],
      explanation: 'Es una frase afirmativa: usamos "some". Con incontables (water) también se usa "some".',
    },
    {
      id: 'a1-m8-l5-ex5',
      type: 'multiple_choice',
      concept: 'how much - uncountable',
      difficulty: 2,
      prompt: 'Completa: "How ___ water do you have?"',
      promptTranslation: '¿Cuánta agua tienes?',
      correctAnswer: 'much',
      options: ['much', 'many', 'many of'],
      explanation: '"Water" es incontable: usamos "how much". → How much water do you have?',
    },
    {
      id: 'a1-m8-l5-ex6',
      type: 'multiple_choice',
      concept: 'how many - countable plural',
      difficulty: 2,
      prompt: 'Completa: "How ___ apples do you have?"',
      promptTranslation: '¿Cuántas manzanas tienes?',
      correctAnswer: 'many',
      options: ['much', 'many', 'much of'],
      explanation: '"Apples" es plural y contable: usamos "how many". → How many apples do you have?',
    },
    {
      id: 'a1-m8-l5-ex7',
      type: 'error_correction',
      concept: 'some/any - affirmative',
      difficulty: 3,
      prompt: 'Corrige el error: "There are any apples."',
      correctAnswer: 'There are some apples.',
      acceptedAnswers: ['There are some apples', 'there are some apples.'],
      acceptApproximate: true,
      explanation: 'En frases afirmativas usamos "some", no "any". → There are some apples.',
    },
    {
      id: 'a1-m8-l5-ex8',
      type: 'error_correction',
      concept: 'how much vs how many',
      difficulty: 3,
      prompt: 'Corrige el error: "How much apples do you have?"',
      correctAnswer: 'How many apples do you have?',
      acceptedAnswers: ['How many apples do you have', 'how many apples do you have?'],
      acceptApproximate: true,
      explanation: '"Apples" es contable y plural: usamos "how many", no "how much".',
    },
  ],
  miniTest: [
    {
      id: 'a1-m8-l5-mt1',
      type: 'fill_blank',
      concept: 'some/any - affirmative',
      difficulty: 1,
      prompt: 'Completa: "There are ___ apples."',
      promptTranslation: 'Hay algunas manzanas.',
      correctAnswer: 'some',
      acceptedAnswers: ['some', 'Some'],
      explanation: 'Frase afirmativa → some. → There are some apples.',
    },
    {
      id: 'a1-m8-l5-mt2',
      type: 'fill_blank',
      concept: 'some/any - question',
      difficulty: 2,
      prompt: 'Completa: "Do you have ___ milk?"',
      promptTranslation: '¿Tienes leche?',
      correctAnswer: 'any',
      acceptedAnswers: ['any', 'Any'],
      explanation: 'Pregunta → any. → Do you have any milk?',
    },
    {
      id: 'a1-m8-l5-mt3',
      type: 'multiple_choice',
      concept: 'how much - uncountable',
      difficulty: 2,
      prompt: 'Completa: "How ___ money do you have?"',
      promptTranslation: '¿Cuánto dinero tienes?',
      correctAnswer: 'much',
      options: ['much', 'many'],
      explanation: '"Money" (dinero) es incontable: usamos "how much".',
    },
    {
      id: 'a1-m8-l5-mt4',
      type: 'error_correction',
      concept: 'some/any - negative',
      difficulty: 3,
      prompt: "Corrige el error: \"I don't have some water.\"",
      correctAnswer: "I don't have any water.",
      acceptedAnswers: ["I don't have any water", "I do not have any water."],
      acceptApproximate: true,
      explanation: 'En frases negativas usamos "any", no "some". → I don\'t have any water.',
    },
  ],
  reviewItems: ['a1-m8-l4'],
  prerequisites: ['a1-m8-l4'],
}
