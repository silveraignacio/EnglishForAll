import type { Lesson } from '../../types'

export const lesson84MiniTest: Lesson = {
  id: 'b2-m8-l4',
  moduleId: 'm8-advanced-comparison',
  order: 3,
  title: 'Mini-test: Comparación avanzada y grado',
  objective: 'Evaluar el dominio de modificadores de comparativos, superlativos avanzados, "the more...the more", "as if", "enough" y "rather a" en contextos variados.',
  explanation_es: `Esta es la evaluación final del Módulo 8. Repasemos lo esencial:

**Modificadores del comparativo (Lección 1):**
- Predicativos: is/are + [much/slightly/far/considerably] + comparativo → "It's much better."
- Atributivos: [much/far/considerably/slightly] + more/less + sustantivo → "much more time"

**Superlativos avanzados (Lección 2):**
- "By far" + superlativo → énfasis extremo: "by far the best"
- Elipsis del sustantivo: "the best" (sin sustantivo si está claro del contexto)
- "The more...the more": estructura proporcional con comparativos (no superlativos)

**Otras construcciones (Lección 3):**
- "The same as": comparación de identidad
- "As if/as though" + verbo: apariencia/hipótesis (típicamente pasado)
- "Enough" + to-infinitivo: tras adjetivo/adverbio
- "Rather a/an" + adjetivo + sustantivo: énfasis formal

**Errores típicos a evitar:**
- ❌ "Enough smart" → ✅ "Smart enough"
- ❌ "Very more interesting" → ✅ "Much more interesting"
- ❌ "The more you practice, the most you improve" → ✅ "The more you practice, the more you improve"
- ❌ "The like what I expected" → ✅ "The same as what I expected"`,
  examples: [
    { english: 'This is by far the most important decision we\'ve made.', spanish: 'Esta es con mucho la decisión más importante que hemos tomado.' },
    { english: 'The more you read, the better your vocabulary becomes.', spanish: 'Cuanto más lees, mejor se vuelve tu vocabulario.' },
    { english: 'She looked as if she hadn\'t understood a word.', spanish: 'Parecía como si no hubiera entendido ni una palabra.' },
    { english: 'He\'s old enough to make his own decisions.', spanish: 'Tiene suficiente edad para tomar sus propias decisiones.' },
    { english: 'Rather a difficult situation, don\'t you think?', spanish: 'Una situación bastante difícil, ¿no te parece?' },
  ],
  rule: `**Resumen del módulo:**
1. Comparativos modificados: predicativos (is + mod + comp) vs. atributivos (mod + more + n)
2. Superlativos: by far para énfasis, elipsis cuando hay contexto claro, "the more...the more" para proporcionalidad
3. Identidad: "the same as" (exacto) vs. "like" (similar)
4. Apariencia: "as if/as though" introduce hipótesis (típicamente pasado)
5. Suficiencia: "adj + enough + to-inf"
6. Énfasis: "rather a + adj + n" (formal)`,
  commonMistakes: [
    { wrong: '❌ This coffee is very more delicious than yesterday\'s.', correct: '✅ This coffee is much more delicious than yesterday\'s.', explanation: 'Con comparativos usas "much", no "very".' },
    { wrong: '❌ The more he talks, the most people get annoyed.', correct: '✅ The more he talks, the more people get annoyed.', explanation: 'Ambas partes de "the more...the more" usan comparativo, no superlativo.' },
    { wrong: '❌ He\'s tall enough for join the team.', correct: '✅ He\'s tall enough to join the team.', explanation: 'Con "enough" va to-infinitivo: enough to, no "enough for".' },
    { wrong: '❌ It was rather a unusual discovery.', correct: '✅ It was rather an unusual discovery.', explanation: 'Usa "an" antes de vocales: rather an unusual.' },
  ],
  vocabulary: [],
  grammarPoints: [],
  exercises: [
    {
      id: 'b2-m8-l4-ex1',
      type: 'multiple_choice',
      concept: 'modifying comparatives',
      difficulty: 2,
      prompt: 'Completa: "The new office is ___ spacious than the old one."',
      promptTranslation: 'La nueva oficina es mucho más espaciosa que la antigua.',
      correctAnswer: 'much',
      options: ['much', 'very', 'far too'],
      explanation: 'Con comparativos se usa "much": much more spacious.',
    },
    {
      id: 'b2-m8-l4-ex2',
      type: 'fill_blank',
      concept: 'by far superlative',
      difficulty: 2,
      prompt: 'Completa: "She is ___ the most talented person I\'ve met."',
      promptTranslation: 'Es con mucho la persona más talentosa que he conocido.',
      correctAnswer: 'by far',
      explanation: '"By far" + superlativo para énfasis extremo.',
    },
    {
      id: 'b2-m8-l4-ex3',
      type: 'multiple_choice',
      concept: 'the more the more structure',
      difficulty: 3,
      prompt: 'Completa: "The older I get, ___ I appreciate life."',
      promptTranslation: 'Cuanto mayor me hago, más aprecio la vida.',
      correctAnswer: 'the more',
      options: ['the more', 'the most', 'more and more'],
      explanation: '"The more...the more" estructura proporcional con comparativos.',
    },
    {
      id: 'b2-m8-l4-ex4',
      type: 'error_correction',
      concept: 'enough position',
      difficulty: 3,
      prompt: 'Encuentra el error: "She is enough smart to pass the exam."',
      correctAnswer: 'She is smart enough to pass the exam.',
      acceptedAnswers: [
        'She is smart enough to pass the exam',
        'She is smart enough to pass the exam.',
      ],
      acceptApproximate: true,
      explanation: '"Enough" va después del adjetivo: smart enough, no "enough smart".',
    },
    {
      id: 'b2-m8-l4-ex5',
      type: 'reorder',
      concept: 'as if structure',
      difficulty: 3,
      prompt: 'Ordena las palabras:',
      promptTranslation: 'Parecía como si no hubiera entendido nada.',
      words: ['She', 'looked', 'as', 'if', 'she', 'had', 'understood', 'nothing'],
      correctAnswer: 'She looked as if she had understood nothing.',
      explanation: 'Estructura: sujeto + verbo + as if + sujeto + verbo (pasado para hipótesis).',
    },
    {
      id: 'b2-m8-l4-ex6',
      type: 'translate',
      concept: 'the same as',
      difficulty: 4,
      prompt: 'Traduce: "Su nuevo proyecto no es lo mismo que el anterior."',
      correctAnswer: 'Her new project is not the same as the previous one.',
      acceptedAnswers: [
        'Her new project is not the same as the previous one',
        'Her new project is not the same as the previous one.',
        'His new project is not the same as the previous one',
        'His new project is not the same as the previous one.',
      ],
      acceptApproximate: true,
      explanation: '"Lo mismo que" = the same as (identidad exacta). El género es flexible dependiendo del contexto.',
    },
    {
      id: 'b2-m8-l4-ex7',
      type: 'match',
      concept: 'module 8 review - all structures',
      difficulty: 3,
      prompt: 'Relaciona cada frase con la estructura correcta que usa.',
      promptTranslation: 'Match each sentence with the correct structure it uses.',
      correctAnswer: '',
      pairs: [
        { left: 'This is by far the best restaurant.', right: 'by far + superlativo (énfasis)' },
        { left: 'The more you practice, the better you get.', right: 'the more...the more (proporcionalidad)' },
        { left: 'She looked as if she had seen a ghost.', right: 'as if + pasado (hipótesis)' },
        { left: 'He\'s old enough to drive.', right: 'adjective + enough + to-infinitivo' },
      ],
      explanation: 'El módulo cubre cuatro áreas principales: superlativos enfatizados, proporcionalidad, hipótesis/apariencia, y suficiencia.',
    },
    {
      id: 'b2-m8-l4-ex8',
      type: 'true_false',
      concept: 'very vs much with comparatives',
      difficulty: 3,
      prompt: 'Se puede usar "very" y "much" indistintamente con comparativos.',
      correctAnswer: 'false',
      explanation: 'Falso. Con comparativos se usa "much" (not "very"). "Very" va con adjetivos positivos.',
    },
    {
      id: 'b2-m8-l4-ex9',
      type: 'listening',
      concept: 'module 8 comprehensive listening',
      difficulty: 4,
      prompt: 'Escuchá el audio y respondé las preguntas (en inglés, sobre lo que dice).',
      correctAnswer: '',
      explanation: 'Dos personas hablan sobre sus nuevas ciudades de residencia, usando comparativos modificados, superlativos y estructuras avanzadas.',
      listening: {
        audioText:
          'A: How do you like your new city? B: It\'s much better than I expected! By far the best decision I\'ve made. The more time I spend here, the more I love it. A: What about the costs? B: The housing is considerably more expensive, unfortunately. But the neighborhoods are the same as I saw in photos — beautiful and safe. A: Would you recommend it? B: Absolutely! It looks as if the city is designed for young professionals. And you\'re young enough to start fresh. Rather a fantastic opportunity, I\'d say.',
        audioUrl: '/audio/tts/b2-m8-l4-ex9.mp3',
        questions: [
          {
            id: 'b2-m8-l4-ex9-q1',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'How does B describe the decision to move to the new city?',
            correctAnswer: 'By far the best decision they\'ve made',
            options: [
              'By far the best decision they\'ve made',
              'A slightly positive decision',
              'A rather difficult choice',
            ],
            explanation: '"By far the best decision I\'ve made."',
          },
          {
            id: 'b2-m8-l4-ex9-q2',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'The housing costs are slightly higher than expected.',
            correctAnswer: 'false',
            explanation: '"The housing is considerably more expensive" — considerably (not slightly).',
          },
          {
            id: 'b2-m8-l4-ex9-q3',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 4,
            prompt: 'What relationship does B describe with "the more time I spend here"?',
            correctAnswer: 'A proportional relationship between time spent and love for the city',
            options: [
              'A proportional relationship between time spent and love for the city',
              'A comparison between two cities',
              'A regret about the decision',
            ],
            explanation: '"The more time I spend here, the more I love it" — proporcionalidad.',
          },
        ],
      },
    },
    {
      id: 'b2-m8-l4-ex10',
      type: 'writing',
      concept: 'module 8 comprehensive writing',
      difficulty: 4,
      prompt: 'Escribí un review (100-150 palabras) sobre un lugar que visitaste. Incluí: modificador de comparativo, "by far" + superlativo, "the more...the more", "as if", y "enough to".',
      promptTranslation: 'Write a review about a place you visited, using: comparative modifier, "by far" + superlative, "the more...the more", "as if", and "enough to".',
      correctAnswer: '',
      explanation: 'Un buen review integra naturalmente todos estos elementos mientras describe una experiencia personal.',
      taskType: 'review',
      targetReader: 'potential travelers',
      register: 'neutral',
      contentPoints: [
        'Descripción del lugar',
        'Al menos un comparativo modificado (much, far, slightly)',
        'Una frase con "by far + superlativo"',
        'Una relación "the more...the more"',
        'Una frase con "as if"',
        'Una frase con "enough to"',
      ],
      requiresOwnIdea: true,
      minWords: 100,
      maxWords: 150,
    },
    {
      id: 'b2-m8-l4-ex11',
      type: 'speaking',
      concept: 'module 8 comprehensive speaking',
      difficulty: 4,
      prompt: 'Escuchá la frase modelo y repetila en voz alta.',
      correctAnswer: 'By far the most impressive part is that the more you explore, the more you appreciate how everything is designed, and you need to be brave enough to enjoy it as if you were a local.',
      explanation: 'Practicá una frase larga y compleja que combina múltiples estructuras del módulo.',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b2-m8-l4-mt1',
      type: 'multiple_choice',
      concept: 'module 8 final - comparatives',
      difficulty: 2,
      prompt: 'Completa: "This job is ___ better than my previous one."',
      promptTranslation: 'Este trabajo es mucho mejor que el anterior.',
      correctAnswer: 'much',
      options: ['much', 'very', 'more'],
      explanation: 'Con comparativos se usa "much": much better.',
    },
    {
      id: 'b2-m8-l4-mt2',
      type: 'fill_blank',
      concept: 'module 8 final - by far',
      difficulty: 2,
      prompt: 'Completa: "She\'s ___ the smartest student in the class."',
      promptTranslation: 'Es con mucho la estudiante más inteligente de la clase.',
      correctAnswer: 'by far',
      explanation: '"By far" + superlativo: by far the smartest.',
    },
    {
      id: 'b2-m8-l4-mt3',
      type: 'true_false',
      concept: 'module 8 final - the more the more',
      difficulty: 3,
      prompt: 'En "The more you study, the more you understand", ambas partes usan comparativos.',
      correctAnswer: 'true',
      explanation: 'Correcto. "The more...the more" usa comparativos en ambas cláusulas, no superlativos.',
    },
    {
      id: 'b2-m8-l4-mt4',
      type: 'error_correction',
      concept: 'module 8 final - enough',
      difficulty: 3,
      prompt: 'Corrige: "He\'s not tall enough for play basketball."',
      correctAnswer: 'He\'s not tall enough to play basketball.',
      acceptedAnswers: [
        'He\'s not tall enough to play basketball',
        'He\'s not tall enough to play basketball.',
        'he\'s not tall enough to play basketball',
      ],
      acceptApproximate: true,
      explanation: 'Con "enough" va to-infinitivo: enough to play, no "enough for play".',
    },
  ],
  reviewItems: ['b2-m8-l1', 'b2-m8-l2', 'b2-m8-l3'],
  prerequisites: ['b2-m8-l3'],
}
