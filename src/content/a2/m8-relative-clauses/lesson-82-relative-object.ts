import type { Lesson } from '../../types'

export const lesson82RelativeObject: Lesson = {
  id: 'a2-m8-l2',
  moduleId: 'm8-relative-clauses',
  order: 1,
  title: 'Oraciones relativas de objeto (opcional)',
  objective: 'Usar who/which/that como objeto y saber cuándo se pueden omitir.',
  explanation_es: `En la lección anterior, la palabra relativa era el SUJETO del verbo: "The man who lives next door..." (el hombre "vive").

Ahora veremos la relativa como OBJETO: la persona o cosa RECIBE la acción del verbo.

- "The woman (who) I met yesterday is my boss." = La mujer que conocí ayer es mi jefa.
  → En la relativa, "yo" (I) es el sujeto y la mujer es el objeto: "yo la conocí".

- "The film (that) we watched was great." = La película que vimos fue genial.
- "The house (which) they bought is beautiful." = La casa que compraron es preciosa.

LA CLAVE: cuando la relativa es objeto, la palabra relativa es OPCIONAL. Podemos omitirla:
- "The woman I met yesterday is my boss." (correcto, sin "who")
- "The film we watched was great." (correcto, sin "that")
- "The house they bought is beautiful." (correcto, sin "which")

OJO: no añadimos un pronombre objeto extra al final del verbo.
- ❌ The woman who I met her yesterday... → ✅ The woman (who) I met yesterday...
  (En español decimos "la mujer que la conocí" con el pronombre "la", pero en inglés NO repetimos el objeto.)`,
  examples: [
    { english: 'The woman (who) I met yesterday is my boss.', spanish: 'La mujer que conocí ayer es mi jefa.', note: 'who es opcional (objeto).' },
    { english: 'The film (that) we watched was great.', spanish: 'La película que vimos fue genial.', note: 'that es opcional.' },
    { english: 'The house (which) they bought is beautiful.', spanish: 'La casa que compraron es preciosa.', note: 'which es opcional.' },
    { english: 'The song (that) she sings is very popular.', spanish: 'La canción que ella canta es muy popular.', note: 'Sin pronombre objeto extra.' },
    { english: 'The man (who) I saw at the station is my neighbour.', spanish: 'El hombre que vi en la estación es mi vecino.', note: 'who opcional (objeto de "saw").' },
    { english: 'The pizza (that) we ate was delicious.', spanish: 'La pizza que comimos estaba deliciosa.', note: 'that opcional.' },
  ],
  rule: `Regla de las relativas de objeto:

- La relativa es objeto cuando en la frase hay un sujeto que hace la acción: "The woman (who) I met..."
- who/which/that son OPCIONALES: "The woman I met yesterday is my boss."
- NUNCA añadir un pronombre objeto extra: ❌ who I met her → ✅ (who) I met.
- En estas relativas el sujeto va después de la palabra relativa: who + I + met.`,
  formation: {
    title: 'Cómo se forman las relativas de objeto',
    intro: 'Cuando la persona o cosa RECIBE la acción (es el objeto), la relativa se convierte en opcional: podemos omitir who/which/that. Después de la relativa va un nuevo sujeto que hace la acción.',
    patterns: [
      {
        name: 'Personas (who/that opcional)',
        formula: 'persona + (who/that) + sujeto + verbo',
        examples: [
          { english: 'The woman (who) I met yesterday is my boss.', spanish: 'La mujer que conocí ayer es mi jefa.' },
          { english: 'The man (who) I saw at the station is my neighbour.', spanish: 'El hombre que vi en la estación es mi vecino.' },
        ],
        note: '"I" es el sujeto y la persona es el objeto: yo la conocí. Por eso who/that se puede quitar.',
      },
      {
        name: 'Cosas (which/that opcional)',
        formula: 'cosa + (which/that) + sujeto + verbo',
        examples: [
          { english: 'The film (that) we watched was great.', spanish: 'La película que vimos fue genial.' },
          { english: 'The house (which) they bought is beautiful.', spanish: 'La casa que compraron es preciosa.' },
        ],
        note: 'Sin la relativa, la frase sigue siendo correcta: The film we watched was great.',
      },
    ],
    notes: [
      'NUNCA añadas un pronombre objeto extra al final del verbo: ❌ who I met her → ✅ (who) I met.',
      'La relativa de objeto va seguida de sujeto + verbo: who + I + met.',
      'Pista: si en la relativa hay otro sujeto, la relativa es objeto y se puede omitir.',
    ],
  },
  commonMistakes: [
    { wrong: '❌ The woman who I met her yesterday is my boss.', correct: '✅ The woman (who) I met yesterday is my boss.', explanation: 'No repetimos el objeto "her" después del verbo "met". En inglés el objeto ya está en la relativa.' },
    { wrong: '❌ The film that we watched it was great.', correct: '✅ The film (that) we watched was great.', explanation: 'No añadimos "it" después de "watched". El objeto ya está representado por "that".' },
    { wrong: '❌ The house which they bought it is beautiful.', correct: '✅ The house (which) they bought is beautiful.', explanation: 'No repetimos el objeto "it". La relativa de objeto no lleva pronombre extra.' },
  ],
  vocabulary: [
    { word: 'boss', translation_es: 'jefe/a', level: 'A2', category: 'work', partOfSpeech: 'noun', example: 'The woman I met yesterday is my boss.', exampleTranslation: 'La mujer que conocí ayer es mi jefa.' },
    { word: 'watch', translation_es: 'ver (una película)', level: 'A2', category: 'media', partOfSpeech: 'verb', example: 'The film we watched was great.', exampleTranslation: 'La película que vimos fue genial.' },
    { word: 'buy', translation_es: 'comprar', level: 'A2', category: 'shopping', partOfSpeech: 'verb', example: 'The house they bought is beautiful.', exampleTranslation: 'La casa que compraron es preciosa.' },
    { word: 'delicious', translation_es: 'delicioso/a', level: 'A2', category: 'food', partOfSpeech: 'adjective', example: 'The pizza we ate was delicious.', exampleTranslation: 'La pizza que comimos estaba deliciosa.' },
    { word: 'popular', translation_es: 'popular', level: 'A2', category: 'media', partOfSpeech: 'adjective', example: 'The song she sings is very popular.', exampleTranslation: 'La canción que ella canta es muy popular.' },
  ],
  grammarPoints: [
    {
      id: 'gp-relative-object',
      level: 'A2',
      name: 'Relative clauses: object (optional)',
      explanation_es: 'Cuando la relativa es el objeto, who/which/that son opcionales y no se repite el pronombre.',
      formula: 'person/thing + (who/which/that) + subject + verb',
      examples: ['The woman (who) I met yesterday is my boss.', 'The film (that) we watched was great.'],
    },
  ],
  exercises: [
    {
      id: 'a2-m8-l2-ex1',
      type: 'multiple_choice',
      concept: 'relative clauses object',
      difficulty: 1,
      prompt: 'Completa: "The film ___ we watched was great."',
      promptTranslation: 'La película que vimos fue genial.',
      correctAnswer: 'that',
      options: ['that', 'who', 'where'],
      explanation: 'Para cosas usamos that/which. La relativa es el objeto: the film (that) we watched.',
    },
    {
      id: 'a2-m8-l2-ex2',
      type: 'fill_blank',
      concept: 'relative clauses object',
      difficulty: 2,
      prompt: 'Completa: "The woman ___ I met yesterday is my boss." (opcional)',
      promptTranslation: 'La mujer que conocí ayer es mi jefa.',
      correctAnswer: 'who',
      acceptedAnswers: ['who', 'that', ''],
      explanation: 'Para personas: who/that. Como es objeto, también se puede omitir. → The woman (who) I met...',
    },
    {
      id: 'a2-m8-l2-ex3',
      type: 'select_correct',
      concept: 'relative clauses object',
      difficulty: 2,
      prompt: 'Selecciona la frase correcta.',
      promptTranslation: 'La casa que compraron es preciosa.',
      correctAnswer: 'The house they bought is beautiful.',
      options: ['The house which they bought it is beautiful.', 'The house they bought is beautiful.', 'The house which they bought it beautiful.'],
      explanation: 'En la relativa de objeto omitimos "which" y no repetimos el objeto "it".',
    },
    {
      id: 'a2-m8-l2-ex4',
      type: 'reorder',
      concept: 'relative clauses object',
      difficulty: 2,
      prompt: 'Ordena la frase (sin palabra relativa):',
      promptTranslation: 'La mujer que conocí ayer es mi jefa.',
      correctAnswer: 'The woman I met yesterday is my boss.',
      words: ['The', 'woman', 'I', 'met', 'yesterday', 'is', 'my', 'boss.'],
      explanation: 'En la relativa de objeto omitimos "who": The woman I met yesterday is my boss.',
    },
    {
      id: 'a2-m8-l2-ex5',
      type: 'true_false',
      concept: 'relative clauses object',
      difficulty: 3,
      prompt: '"In object relative clauses, we can omit who/which/that."',
      promptTranslation: 'En las oraciones relativas de objeto, podemos omitir who/which/that.',
      correctAnswer: 'true',
      acceptedAnswers: ['True', 'TRUE', 'Verdadero', 'true.'],
      explanation: 'Es VERDADERO. Cuando la relativa es el objeto, who/which/that son opcionales.',
    },
    {
      id: 'a2-m8-l2-ex6',
      type: 'error_correction',
      concept: 'relative clauses object',
      difficulty: 3,
      prompt: 'Corrige el error: "The woman who I met her yesterday is my boss."',
      correctAnswer: 'The woman I met yesterday is my boss.',
      acceptedAnswers: ['The woman I met yesterday is my boss', 'The woman who I met yesterday is my boss.', 'the woman I met yesterday is my boss.'],
      acceptApproximate: true,
      explanation: 'No repetimos el objeto "her". → The woman (who) I met yesterday is my boss.',
    },
    {
      id: 'a2-m8-l2-ex7',
      type: 'match',
      concept: 'relative clauses object',
      difficulty: 3,
      prompt: 'Relaciona cada comienzo con su final.',
      promptTranslation: 'Match each beginning with its ending.',
      correctAnswer: '',
      pairs: [
        { left: 'The woman I met yesterday', right: 'is my boss.' },
        { left: 'The film we watched', right: 'was great.' },
        { left: 'The house they bought', right: 'is beautiful.' },
        { left: 'The song she sings', right: 'is very popular.' },
        { left: 'The pizza we ate', right: 'was delicious.' },
      ],
      explanation: 'Todas son relativas de objeto: sujeto + verbo después del sustantivo, sin palabra relativa ni pronombre extra.',
    },
    {
      id: 'a2-m8-l2-ex8',
      type: 'translate',
      concept: 'relative clauses object',
      difficulty: 3,
      prompt: 'Traduce: "La película que vimos fue genial."',
      correctAnswer: 'The film we watched was great.',
      acceptedAnswers: ['The film we watched was great', 'The film that we watched was great.', 'The film which we watched was great.'],
      acceptApproximate: true,
      explanation: '"La película que vimos" = the film (that/which) we watched; "fue genial" = was great.',
    },
    {
      id: 'a2-m8-l2-ex9',
      type: 'translate',
      concept: 'relative clauses object',
      difficulty: 4,
      prompt: 'Traduce: "El hombre que vi en la estación es mi vecino."',
      correctAnswer: 'The man I saw at the station is my neighbour.',
      acceptedAnswers: ['The man I saw at the station is my neighbour', 'The man who I saw at the station is my neighbour.', 'the man I saw at the station is my neighbour.'],
      acceptApproximate: true,
      explanation: '"El hombre que vi" = the man (who) I saw; "en la estación" = at the station; "es mi vecino" = is my neighbour.',
    },
    {
      id: 'a2-m8-l2-ex10',
      type: 'error_correction',
      concept: 'relative clauses object',
      difficulty: 4,
      prompt: 'Corrige el error: "The film that we watched it was great."',
      correctAnswer: 'The film we watched was great.',
      acceptedAnswers: ['The film we watched was great', 'The film that we watched was great.', 'the film we watched was great.'],
      acceptApproximate: true,
      explanation: 'No añadimos "it" después de "watched". El objeto ya está representado por la relativa.',
    },
  ],
  miniTest: [
    {
      id: 'a2-m8-l2-mt1',
      type: 'multiple_choice',
      concept: 'relative clauses object',
      difficulty: 1,
      prompt: 'Completa: "The house ___ they bought is beautiful."',
      promptTranslation: 'La casa que compraron es preciosa.',
      correctAnswer: 'which',
      options: ['which', 'who', 'where'],
      explanation: 'Para cosas usamos which/that. La relativa es el objeto: (which) they bought.',
    },
    {
      id: 'a2-m8-l2-mt2',
      type: 'fill_blank',
      concept: 'relative clauses object',
      difficulty: 2,
      prompt: 'Completa (puedes omitir la relativa): "The pizza ___ we ate was delicious."',
      promptTranslation: 'La pizza que comimos estaba deliciosa.',
      correctAnswer: 'that',
      acceptedAnswers: ['that', 'which', ''],
      explanation: 'En la relativa de objeto that/which son opcionales: The pizza (that) we ate was delicious.',
    },
    {
      id: 'a2-m8-l2-mt3',
      type: 'select_correct',
      concept: 'relative clauses object',
      difficulty: 3,
      prompt: 'Selecciona la frase correcta.',
      promptTranslation: 'La canción que ella canta es muy popular.',
      correctAnswer: 'The song she sings is very popular.',
      options: ['The song she sings is very popular.', 'The song that she sings it is very popular.', 'The song who she sings is very popular.'],
      explanation: 'Relativa de objeto sin palabra relativa ni pronombre extra: The song she sings is very popular.',
    },
    {
      id: 'a2-m8-l2-mt4',
      type: 'translate',
      concept: 'relative clauses object',
      difficulty: 3,
      prompt: 'Traduce: "La casa que compraron es preciosa."',
      correctAnswer: 'The house they bought is beautiful.',
      acceptedAnswers: ['The house they bought is beautiful', 'The house which they bought is beautiful.', 'The house that they bought is beautiful.'],
      acceptApproximate: true,
      explanation: '"La casa que compraron" = the house (which) they bought; "es preciosa" = is beautiful.',
    },
    {
      id: 'a2-m8-l2-mt5',
      type: 'error_correction',
      concept: 'relative clauses object',
      difficulty: 4,
      prompt: 'Corrige el error: "The woman who I met her yesterday is my boss."',
      correctAnswer: 'The woman I met yesterday is my boss.',
      acceptedAnswers: ['The woman I met yesterday is my boss', 'The woman who I met yesterday is my boss.', 'the woman I met yesterday is my boss.'],
      acceptApproximate: true,
      explanation: 'No repetimos el objeto "her". → The woman (who) I met yesterday is my boss.',
    },
  ],
  reviewItems: ['a2-m8-l1'],
  prerequisites: ['a2-m8-l1'],
}
