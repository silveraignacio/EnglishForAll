import type { Lesson } from '../../types'

export const lesson83AsIfEnough: Lesson = {
  id: 'b2-m8-l3',
  moduleId: 'm8-advanced-comparison',
  order: 2,
  title: 'Comparación e intensidad: the same as, as if/as though, enough, rather',
  objective: 'Comparar con "the same (noun) as", expresar apariencia con "as if/as though" + cláusula, usar "enough" + infinitivo con adjetivos y adverbios, y "rather a/an" para énfasis formal.',
  explanation_es: `Estos cuatro usos avanzan el dominio de comparación e intensidad en contextos sofisticados:

**1. "The same (+ noun) as" (comparación de identidad):**
- It\'s not the same as it used to be. (No es lo mismo que era antes.)
- Her new job is the same as her previous one. (Su nuevo trabajo es igual al anterior.)
- They have the same interests as we do. (Tienen los mismos intereses que nosotros.)

Estructura: the same (+ sustantivo opcional) + as + cláusula

Nota: "the same" sin sustantivo es menos formal pero muy común en habla. "The same as" introduce la comparación.

**2. "As if" / "as though" (apariencia, hipótesis):**
- She looked as if she had seen a ghost. (Parecía como si hubiera visto un fantasma.)
- He talks as though he knows everything. (Habla como si lo supiera todo.)
- It looks as if it\'s going to rain. (Parece que va a llover.)

Estructura: sujeto + verbo + as if/as though + sujeto + verbo (en pasado para distancia o irrealidad)

Importante: después de "as if/as though", TÍPICAMENTE usas el pasado (had, knew) aunque hables del presente, porque "as if" introduce hipótesis o apariencia, no hechos. "She acted as if she were queen" (subjuntivo en inglés formal).

**3. "Enough" + infinitivo tras adjetivo/adverbio:**
- He\'s old enough to vote. (Tiene suficiente edad para votar.)
- They arrived early enough to get good seats. (Llegaron suficientemente temprano para conseguir buenos asientos.)
- Is she confident enough to speak publicly? (¿Tiene suficiente confianza para hablar en público?)

Estructura: adjetivo/adverbio + enough + to + infinitivo

Importante: "enough" va DESPUÉS del adjetivo/adverbio, no antes. ("old enough", no "enough old".)

**4. "Rather a/an" + adjetivo + sustantivo (énfasis formal):**
- It\'s rather a difficult situation. (Es una situación más bien difícil / bastante difícil.)
- That was rather a surprising announcement. (Fue un anuncio bastante sorpresivo.)
- She had rather a negative attitude. (Tenía una actitud más bien negativa.)

Estructura: rather + a/an + adjetivo + sustantivo

Nota: "rather" también puede ir después del artículo ("a rather difficult situation") — ambas son correctas, pero "rather a difficult" suena más formal británico.

**Puntos importantes:**

1. "The same as" es diferente de "like": "It\'s the same as X" (idéntico), "It\'s like X" (similar pero no idéntico).

2. "As if" siempre va con verbo en la cláusula. Hay tres opciones:
   - Presente real: "He talks as if he knows" (parece que sabe, pero quizá no sabe realmente).
   - Pasado: "She acted as if she had seen" (actuaba como si hubiera visto — pasado hipotetizado).
   - Subjuntivo formal: "as if he were" (más raro en inglés moderno, más común en literatura).

3. "Enough" es crítico en exámenes porque muchos estudiantes lo ponen en el lugar equivocado. Regla: "adjetivo + enough", no "enough + adjetivo".

4. "Rather a" (formal) vs. "rather" (informal). "It\'s rather difficult" (informal). "It\'s rather a difficult task" (más formal, especialmente en inglés británico).`,
  examples: [
    { english: 'This isn\'t the same as what I ordered.', spanish: 'Esto no es lo mismo que lo que pedí.', note: 'Comparación de identidad con "the same as".' },
    { english: 'She looked as if she hadn\'t slept in days.', spanish: 'Parecía como si no hubiera dormido en días.', note: '"As if" + pasado (hipótesis sobre el pasado).' },
    { english: 'He\'s old enough to understand the situation.', spanish: 'Tiene suficiente edad para entender la situación.', note: '"enough" va después del adjetivo, seguido de to + infinitivo.' },
    { english: 'It was rather an embarrassing moment.', spanish: 'Fue un momento bastante vergonzoso.', note: '"rather an" (ante vocal) para énfasis formal con adjetivo + sustantivo.' },
    { english: 'The weather acts as though it doesn\'t follow any rules.', spanish: 'El clima actúa como si no siguiera ninguna regla.', note: '"as though" es intercambiable con "as if".' },
    { english: 'Are you mature enough to handle this responsibility?', spanish: '¿Eres lo suficientemente maduro para manejar esta responsabilidad?', note: 'Adjetivo + enough + to-infinitivo.' },
  ],
  rule: `**1. The same (+ noun) as:**
the same (+ noun) + as + clause / noun phrase
- It\'s the same as before.
- They have the same interests as we do.
- The same color as yesterday.

**2. As if / As though (apariencia e hipótesis):**
subject + verb + as if/as though + subject + verb (typically past)
- She looked as if she had seen a ghost.
- He talks as if he knows everything.
- It sounds as if it\'s important. (present, pero hipotético)

**3. Enough + infinitivo (tras adjetivo/adverbio):**
adjective/adverb + enough + to + infinitive
- old enough to vote
- early enough to sleep
- fast enough to win

**4. Rather a/an + adjetivo + sustantivo:**
rather + a/an + adjective + noun
- rather a difficult task
- rather a surprising discovery
- rather an unusual situation

**Reglas críticas:**
1. "The same as" es identidad, no similitud.
2. "As if/as though" típicamente introduce hipótesis (pasado hipotetizado).
3. "Enough" va DESPUÉS del adjetivo, no antes: "smart enough", no "enough smart".
4. "Rather a" es formal; "rather [adj]" (sin artículo) es más informal.`,
  formation: {
    title: 'Cómo se forman las estructuras de comparación e intensidad',
    intro: 'Cuatro patrones: "the same as" para identidad, "as if/as though" para apariencia o hipótesis, "adjetivo + enough + to" para suficiencia, y "rather a/an" para énfasis formal.',
    patterns: [
      {
        name: 'The same (+ sustantivo) as — identidad',
        formula: 'the same (+ sustantivo) + as + cláusula / sintagma',
        examples: [
          { english: 'This isn\'t the same as what I ordered.', spanish: 'Esto no es lo mismo que lo que pedí.' },
          { english: 'They have the same interests as we do.', spanish: 'Tienen los mismos intereses que nosotros.' },
        ],
        note: 'Expresa identidad exacta, no similitud (eso sería "like").',
      },
      {
        name: 'As if / as though — apariencia e hipótesis',
        formula: 'Sujeto + verbo + as if/as though + sujeto + verbo (típicamente en pasado)',
        examples: [
          { english: 'She looked as if she had seen a ghost.', spanish: 'Parecía como si hubiera visto un fantasma.' },
          { english: 'He talks as though he knows everything.', spanish: 'Habla como si lo supiera todo.' },
        ],
        note: '"As if" introduce una hipótesis; suele ir en pasado para marcar irrealidad.',
      },
      {
        name: 'Enough + to-infinitivo — suficiencia',
        formula: 'Adjetivo/adverbio + enough + to + infinitivo',
        examples: [
          { english: 'He\'s old enough to understand the situation.', spanish: 'Tiene suficiente edad para entender la situación.' },
          { english: 'They arrived early enough to get good seats.', spanish: 'Llegaron lo suficientemente temprano para conseguir buenos asientos.' },
        ],
        note: '"Enough" va DESPUÉS del adjetivo/adverbio, no antes.',
      },
      {
        name: 'Rather a/an + adjetivo + sustantivo — énfasis formal',
        formula: 'rather + a/an + adjetivo + sustantivo',
        examples: [
          { english: 'It was rather an embarrassing moment.', spanish: 'Fue un momento bastante vergonzoso.' },
          { english: 'It\'s rather a difficult situation.', spanish: 'Es una situación más bien difícil.' },
        ],
        note: 'Forma más formal, común en inglés británico; "a rather difficult" también es válido.',
      },
    ],
    notes: [
      '"The same as" es identidad; "like" es similitud.',
      'Con "as if/as though", se usa típicamente el pasado, incluso si la oración principal es presente.',
      '"Enough" va antes de sustantivos (enough time) pero después de adjetivos (old enough).',
    ],
  },
  commonMistakes: [
    { wrong: '❌ He\'s enough old to drive.', correct: '✅ He\'s old enough to drive.', explanation: '"Enough" va DESPUÉS del adjetivo: old enough, not "enough old".' },
    { wrong: '❌ She looked as if she sees a ghost.', correct: '✅ She looked as if she had seen a ghost.', explanation: 'Después de "as if", típicamente usas pasado (had seen) para hipótesis, aunque hables del presente.' },
    { wrong: '❌ It\'s the like what I expected.', correct: '✅ It\'s the same as what I expected.', explanation: '"The same as" (identidad), no "the like" (similitud).' },
    { wrong: '❌ It\'s rather a unusual discovery.', correct: '✅ It\'s rather an unusual discovery.', explanation: 'Use "an" antes de vocales (like "unusual"): rather an unusual.' },
  ],
  vocabulary: [
    { word: 'identical', translation_es: 'idéntico', level: 'B2', category: 'adjectives', partOfSpeech: 'adjective', example: 'These two books are identical.', exampleTranslation: 'Estos dos libros son idénticos.' },
    { word: 'appearance', translation_es: 'apariencia, apariencias', level: 'B2', category: 'nouns', partOfSpeech: 'noun', example: 'Don\'t judge by appearance alone.', exampleTranslation: 'No juzgues solo por la apariencia.' },
    { word: 'sufficient', translation_es: 'suficiente', level: 'B2', category: 'adjectives', partOfSpeech: 'adjective', example: 'Is this amount sufficient for your needs?', exampleTranslation: '¿Es esta cantidad suficiente para tus necesidades?' },
    { word: 'hypothesis', translation_es: 'hipótesis', level: 'B2', category: 'nouns', partOfSpeech: 'noun', example: 'We tested the hypothesis with data.', exampleTranslation: 'Probamos la hipótesis con datos.' },
    { word: 'formal', translation_es: 'formal', level: 'B2', category: 'adjectives', partOfSpeech: 'adjective', example: 'He uses rather formal language.', exampleTranslation: 'Usa un lenguaje más bien formal.' },
    { word: 'to assume', translation_es: 'asumir, suponer', level: 'B2', category: 'verbs', partOfSpeech: 'verb', example: 'I assume she\'ll arrive on time.', exampleTranslation: 'Asumo que llegará a tiempo.' },
  ],
  grammarPoints: [
    {
      id: 'gp-b2-same-as-if-enough-rather',
      level: 'B2',
      name: 'the same as, as if/as though, enough + infinitive, rather a',
      explanation_es: 'Comparaciones de identidad, expresiones de apariencia/hipótesis, suficiencia + infinitivo, y énfasis formal con "rather a".',
      formula: 'the same as; as if/as though + verb (past); adj + enough + to-inf; rather + a/an + adj + noun',
      examples: [
        'It\'s not the same as before.',
        'She looked as if she had forgotten.',
        'He\'s old enough to vote.',
        'Rather a difficult situation.',
      ],
    },
  ],
  exercises: [
    {
      id: 'b2-m8-l3-ex1',
      type: 'multiple_choice',
      concept: 'the same as',
      difficulty: 2,
      prompt: 'Completa: "This isn\'t ___ what I ordered."',
      promptTranslation: 'Esto no es lo mismo que lo que pedí.',
      correctAnswer: 'the same as',
      options: ['the same as', 'the like', 'similar to'],
      explanation: '"The same as" expresa identidad exacta. "Similar to" indica similitud pero no identidad.',
    },
    {
      id: 'b2-m8-l3-ex2',
      type: 'fill_blank',
      concept: 'as if as though',
      difficulty: 2,
      prompt: 'Completa: "She looked ___ she had seen a ghost."',
      promptTranslation: 'Parecía como si hubiera visto un fantasma.',
      correctAnswer: 'as if',
      explanation: '"As if" introduce hipótesis. "As though" también es correcto (intercambiables).',
    },
    {
      id: 'b2-m8-l3-ex3',
      type: 'select_correct',
      concept: 'enough position',
      difficulty: 3,
      prompt: '¿Cuál oración tiene "enough" en la posición CORRECTA?',
      correctAnswer: 'He\'s smart enough to solve this problem.',
      options: [
        'He\'s smart enough to solve this problem.',
        'He\'s enough smart to solve this problem.',
        'He\'s smart to enough solve this problem.',
      ],
      explanation: '"Enough" va DESPUÉS del adjetivo: smart enough, not enough smart.',
    },
    {
      id: 'b2-m8-l3-ex4',
      type: 'error_correction',
      concept: 'enough infinitive',
      difficulty: 3,
      prompt: 'Encuentra el error: "She is mature enough for understand the situation."',
      correctAnswer: 'She is mature enough to understand the situation.',
      acceptedAnswers: [
        'She is mature enough to understand the situation',
        'She is mature enough to understand the situation.',
      ],
      acceptApproximate: true,
      explanation: 'Con "enough" va to-infinitivo, no for + gerundio: enough to understand.',
    },
    {
      id: 'b2-m8-l3-ex5',
      type: 'reorder',
      concept: 'the same as word order',
      difficulty: 3,
      prompt: 'Ordena las palabras:',
      promptTranslation: 'Mi nuevo trabajo no es lo mismo que el anterior.',
      words: ['My', 'new', 'job', 'is', 'not', 'the', 'same', 'as', 'my', 'previous', 'one'],
      correctAnswer: 'My new job is not the same as my previous one.',
      explanation: 'Orden: sujeto + verbo + the same as + complemento (o sustantivo comparado).',
    },
    {
      id: 'b2-m8-l3-ex6',
      type: 'translate',
      concept: 'as if as though',
      difficulty: 4,
      prompt: 'Traduce: "Habla como si lo supiera todo."',
      correctAnswer: 'He talks as if he knew everything.',
      acceptedAnswers: [
        'He talks as if he knew everything',
        'She talks as if she knew everything',
        'He talks as if he knows everything',
        'She talks as if she knows everything',
        'She talks as if she knows everything.',
        'He talks as if he knew everything.',
      ],
      acceptApproximate: true,
      explanation: '"As if" introduce hipótesis: típicamente pasado (knew), aunque "talks" sea presente.',
    },
    {
      id: 'b2-m8-l3-ex7',
      type: 'match',
      concept: 'rather a structures',
      difficulty: 3,
      prompt: 'Relaciona cada frase con su significado.',
      promptTranslation: 'Match each sentence with its meaning.',
      correctAnswer: '',
      pairs: [
        { left: 'It was rather a surprising announcement.', right: 'El anuncio fue bastante sorprendente.' },
        { left: 'She has rather a negative outlook.', right: 'Ella tiene una perspectiva más bien negativa.' },
        { left: 'That\'s rather a difficult problem.', right: 'Ese es un problema bastante difícil.' },
        { left: 'It\'s rather a formal situation.', right: 'Es una situación más bien formal.' },
      ],
      explanation: '"Rather a" + adjetivo + sustantivo expresa énfasis formal, especialmente en inglés británico.',
    },
    {
      id: 'b2-m8-l3-ex8',
      type: 'true_false',
      concept: 'same as vs like',
      difficulty: 3,
      prompt: '"It\'s the same as what I expected" y "It\'s like what I expected" significan exactamente lo mismo.',
      correctAnswer: 'false',
      explanation: 'Falso. "The same as" = identidad exacta. "Like" = similitud, pero no necesariamente idéntico.',
    },
    {
      id: 'b2-m8-l3-ex9',
      type: 'listening',
      concept: 'as if enough same as - listening',
      difficulty: 4,
      prompt: 'Escuchá el audio y respondé las preguntas (en inglés, sobre lo que dice).',
      correctAnswer: '',
      explanation: 'Dos amigos hablan sobre cambios en su ciudad y usan "the same as", "as if", "enough", y "rather a".',
      listening: {
        audioText:
          'A: Our hometown looks different now. B: I know! The old shopping center is not the same as it used to be — it\'s been completely rebuilt. A: And it looks as if they\'re planning more changes. B: Yes, but I\'m not sure it\'s good enough to attract young people. The city council says they have enough money for the project. A: Do you think it\'s rather a positive change? B: It\'s rather a mixed situation, honestly. Some improvements are welcome, but losing the old shops makes me sad.',
        audioUrl: '/audio/tts/b2-m8-l3-ex9.mp3',
        questions: [
          {
            id: 'b2-m8-l3-ex9-q1',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What does B say about the old shopping center?',
            correctAnswer: 'It is not the same as it used to be',
            options: [
              'It is not the same as it used to be',
              'It is the same as before',
              'It has disappeared completely',
            ],
            explanation: '"The old shopping center is not the same as it used to be — it\'s been completely rebuilt."',
          },
          {
            id: 'b2-m8-l3-ex9-q2',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'The city council does not have enough money for the project.',
            correctAnswer: 'false',
            explanation: '"The city council says they have enough money for the project."',
          },
          {
            id: 'b2-m8-l3-ex9-q3',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 4,
            prompt: 'How does B describe the change overall?',
            correctAnswer: 'Rather a mixed situation',
            options: [
              'Rather a positive change',
              'Rather a negative change',
              'Rather a mixed situation',
            ],
            explanation: '"It\'s rather a mixed situation, honestly."',
          },
        ],
      },
    },
    {
      id: 'b2-m8-l3-ex10',
      type: 'writing',
      concept: 'as if enough same as - writing',
      difficulty: 4,
      prompt: 'Escribí una historia breve (story, 100-150 palabras) sobre una situación extraña. Incluí: "the same as", "as if", "enough to", y "rather a".',
      promptTranslation: 'Write a brief story about an unusual situation, using: "the same as", "as if", "enough to", and "rather a".',
      correctAnswer: '',
      explanation: 'Una buena historia integra naturalmente estos cuatro elementos en una narrativa coherente.',
      taskType: 'story',
      targetReader: 'readers of a short-story collection',
      register: 'neutral',
      contentPoints: [
        'Una situación extraña o misteriosa',
        'Uso de "the same as" para comparación',
        'Una frase con "as if/as though"',
        'Una frase con "enough to" + infinitivo',
        'Uso de "rather a" para énfasis',
      ],
      requiresOwnIdea: true,
      minWords: 100,
      maxWords: 150,
    },
    {
      id: 'b2-m8-l3-ex11',
      type: 'speaking',
      concept: 'as if enough same as - speaking',
      difficulty: 3,
      prompt: 'Escuchá la frase modelo y repetila en voz alta.',
      correctAnswer: 'It wasn\'t the same as I expected — it looked as if nobody had been there in years, yet it was rather a beautiful place, and I felt brave enough to explore it.',
      explanation: 'Practicá la entonación de una frase larga que combina cuatro estructuras diferentes.',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b2-m8-l3-mt1',
      type: 'multiple_choice',
      concept: 'the same as',
      difficulty: 2,
      prompt: 'Completa: "This situation is ___ what happened last year."',
      promptTranslation: 'Esta situación es igual a la que ocurrió el año pasado.',
      correctAnswer: 'the same as',
      options: ['the same as', 'like', 'similar'],
      explanation: '"The same as" expresa identidad exacta.',
    },
    {
      id: 'b2-m8-l3-mt2',
      type: 'fill_blank',
      concept: 'enough infinitive',
      difficulty: 2,
      prompt: 'Completa: "Are you confident ___ speak in public?"',
      promptTranslation: '¿Eres lo suficientemente confiado como para hablar en público?',
      correctAnswer: 'enough to',
      explanation: 'Estructura: adjective + enough + to-infinitivo.',
    },
    {
      id: 'b2-m8-l3-mt3',
      type: 'true_false',
      concept: 'enough position',
      difficulty: 3,
      prompt: '"She has enough time to finish the work" es la forma correcta.',
      correctAnswer: 'true',
      explanation: 'Correcto. "Enough" va ANTES de sustantivos (enough time) y DESPUÉS de adjetivos (smart enough).',
    },
  ],
  reviewItems: ['b1-m2-l1', 'b1-m2-l2'],
  prerequisites: ['b2-m8-l2'],
}
