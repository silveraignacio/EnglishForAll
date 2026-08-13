import type { Lesson } from '../../types'

export const lesson93WishIfOnly: Lesson = {
  id: 'b1-m9-l3',
  moduleId: 'm9-third-conditional-wishes',
  order: 2,
  title: 'wish / if only (deseos y arrepentimientos)',
  objective: 'Expresar deseos y arrepentimientos con wish + pasado simple (deseo presente), wish + past perfect (arrepentimiento pasado) e if only.',
  explanation_es: `Usamos "wish" (ojalá, desear) para hablar de deseos y arrepentimientos.

1) Deseo presente (algo que ahora no es así): wish + pasado simple
- I wish I had more time. = Ojalá tuviera más tiempo. (Ahora no tengo tiempo.)
- She wishes she lived near the beach. = A ella le gustaría vivir cerca de la playa.

2) Arrepentimiento pasado (algo que pasó y ya no puede cambiar): wish + past perfect
- I wish I hadn't said that. = Ojalá no hubiera dicho eso.
- He wishes he had bought the house. = Desearía haber comprado la casa.

3) "If only" = ojalá (más enfático). Puede usar las mismas estructuras:
- If only I could speak English fluently. = Ojalá pudiera hablar inglés con fluidez.
- If only I had studied more. = Ojalá hubiera estudiado más.

Nota sobre el pasado simple con "wish": para "I wish I was/were taller" se usa normalmente "were" en el inglés formal, aunque "was" es aceptado en el habla informal.

¡CUIDADO!
- ❌ I wish I have more time → ✅ I wish I had more time.
- ❌ I wish I didn't said that → ✅ I wish I hadn't said that.`,
  examples: [
    { english: 'I wish I had more time.', spanish: 'Ojalá tuviera más tiempo.', note: 'deseo presente: wish + pasado simple' },
    { english: 'I wish I hadn\'t said that.', spanish: 'Ojalá no hubiera dicho eso.', note: 'arrepentimiento: wish + past perfect' },
    { english: 'If only I could speak English fluently.', spanish: 'Ojalá pudiera hablar inglés con fluidez.', note: 'if only + could' },
    { english: 'She wishes she lived near the beach.', spanish: 'A ella le gustaría vivir cerca de la playa.', note: 'wish + pasado simple' },
    { english: 'I wish you would stop talking.', spanish: 'Me gustaría que dejaras de hablar.', note: 'wish + would (petición/sugerencia)' },
  ],
  rule: `Regla:
- Deseo presente: wish + pasado simple: I wish I had more time.
- Arrepentimiento pasado: wish + past perfect (had + participio): I wish I hadn't said that.
- Enfático: if only + la misma estructura: If only I could speak English fluently.
- wish + would: para deseos sobre el comportamiento de otros: I wish you would stop.

¡El verbo nunca va en presente después de "wish" para deseos irreales!`,
  commonMistakes: [
    { wrong: '❌ I wish I have more time.', correct: '✅ I wish I had more time.', explanation: 'Para un deseo presente (irreal) usamos el pasado simple después de "wish": I had.' },
    { wrong: '❌ I wish I didn\'t said that.', correct: '✅ I wish I hadn\'t said that.', explanation: 'Para un arrepentimiento pasado usamos el past perfect: hadn\'t said.' },
    { wrong: '❌ I wish I am taller.', correct: '✅ I wish I were taller.', explanation: 'Tras "wish" para un deseo presente usamos pasado; "were" es la forma formal para todos los sujetos.' },
  ],
  vocabulary: [
    { word: 'wish', translation_es: 'desear, ojalá', level: 'B1', category: 'verbs', partOfSpeech: 'verb', example: 'I wish I had more time.', exampleTranslation: 'Ojalá tuviera más tiempo.' },
    { word: 'if only', translation_es: 'ojalá (enfático)', level: 'B1', category: 'expressions', partOfSpeech: 'phrase', example: 'If only I could speak English fluently.', exampleTranslation: 'Ojalá pudiera hablar inglés con fluidez.' },
    { word: 'fluently', translation_es: 'con fluidez', level: 'B1', category: 'adverbs', partOfSpeech: 'adverb', example: 'She wishes she could speak French fluently.', exampleTranslation: 'Le gustaría hablar francés con fluidez.' },
    { word: 'regret', translation_es: 'arrepentirse, lamentar', level: 'B1', category: 'verbs', partOfSpeech: 'verb', example: 'I regret that I didn\'t study more.', exampleTranslation: 'Lamento no haber estudiado más.' },
  ],
  grammarPoints: [
    {
      id: 'gp-wish-if-only',
      level: 'B1',
      name: 'wish / if only',
      explanation_es: 'wish + pasado simple expresa un deseo presente irreal; wish + past perfect expresa arrepentimiento por el pasado; if only añade énfasis con la misma estructura.',
      formula: 'wish + pasado simple (presente) | wish + had + participio (pasado) | if only + ...',
      examples: ['I wish I had more time.', 'I wish I hadn\'t said that.', 'If only I could speak English fluently.'],
    },
  ],
  exercises: [
    {
      id: 'b1-m9-l3-ex1',
      type: 'multiple_choice',
      concept: 'wish past simple',
      difficulty: 1,
      prompt: 'Completa: "I wish I ___ more time."',
      promptTranslation: 'Ojalá tuviera más tiempo.',
      correctAnswer: 'had',
      options: ['had', 'have', 'having'],
      explanation: 'Deseo presente irreal: wish + pasado simple (had).',
    },
    {
      id: 'b1-m9-l3-ex2',
      type: 'fill_blank',
      concept: 'wish past perfect',
      difficulty: 2,
      prompt: 'Completa: "I wish I hadn\'t ___ (say) that."',
      promptTranslation: 'Ojalá no hubiera dicho eso.',
      correctAnswer: 'said',
      acceptedAnswers: ['said', 'Said'],
      explanation: 'Arrepentimiento pasado: hadn\'t + participio → said.',
    },
    {
      id: 'b1-m9-l3-ex3',
      type: 'multiple_choice',
      concept: 'if only could',
      difficulty: 2,
      prompt: 'Completa: "If only I ___ speak English fluently."',
      promptTranslation: 'Ojalá pudiera hablar inglés con fluidez.',
      correctAnswer: 'could',
      options: ['could', 'can', 'will'],
      explanation: '"If only" + could para un deseo de capacidad: could speak.',
    },
    {
      id: 'b1-m9-l3-ex4',
      type: 'error_correction',
      concept: 'wish past simple',
      difficulty: 3,
      prompt: 'Corrige el error: "I wish I have more time."',
      promptTranslation: 'Ojalá tuviera más tiempo.',
      correctAnswer: 'I wish I had more time.',
      acceptedAnswers: ['I wish I had more time', 'I wish I had more time.', 'i wish i had more time'],
      acceptApproximate: true,
      explanation: 'Para un deseo presente irreal usamos el pasado simple después de "wish": I had.',
    },
    {
      id: 'b1-m9-l3-ex5',
      type: 'reorder',
      concept: 'wish past simple',
      difficulty: 3,
      prompt: 'Ordena las palabras: She / wishes / lived / she / near / the / beach',
      promptTranslation: 'A ella le gustaría vivir cerca de la playa.',
      correctAnswer: 'She wishes she lived near the beach.',
      words: ['She', 'wishes', 'she', 'lived', 'near', 'the', 'beach'],
      explanation: 'Orden: sujeto + wishes + sujeto + verbo en pasado. → She wishes she lived near the beach.',
    },
    {
      id: 'b1-m9-l3-ex6',
      type: 'translate',
      concept: 'wish past perfect',
      difficulty: 3,
      prompt: 'Traduce: "Ojalá no hubiera dicho eso."',
      promptTranslation: 'I wish I hadn\'t said that.',
      correctAnswer: 'I wish I hadn\'t said that.',
      acceptedAnswers: ["I wish I hadn't said that", "I wish I hadn't said that.", "i wish i hadn't said that"],
      acceptApproximate: true,
      explanation: '"Ojalá no hubiera dicho" = wish + hadn\'t said (past perfect).',
    },
    {
      id: 'b1-m9-l3-ex7',
      type: 'match',
      concept: 'wish if only',
      difficulty: 3,
      prompt: 'Relaciona cada deseo con su significado en español.',
      promptTranslation: 'Match each wish with its Spanish meaning.',
      correctAnswer: 'I wish I had more time.=Deseo tener más tiempo (ahora).; I wish I hadn\'t said that.=Me arrepiento de haberlo dicho.; If only I could swim.=Ojalá pudiera nadar.; She wishes she lived near the beach.=Le gustaría vivir cerca de la playa.; I wish you would stop.=Me gustaría que pararas.',
      pairs: [
        { left: 'I wish I had more time.', right: 'Deseo tener más tiempo (ahora).' },
        { left: 'I wish I hadn\'t said that.', right: 'Me arrepiento de haberlo dicho.' },
        { left: 'If only I could swim.', right: 'Ojalá pudiera nadar.' },
        { left: 'She wishes she lived near the beach.', right: 'Le gustaría vivir cerca de la playa.' },
        { left: 'I wish you would stop.', right: 'Me gustaría que pararas.' },
      ],
      explanation: 'wish + pasado simple = deseo presente; wish + past perfect = arrepentimiento; if only = enfático; wish + would = deseo sobre el comportamiento de otro.',
    },
    {
      id: 'b1-m9-l3-ex8',
      type: 'true_false',
      concept: 'wish past simple',
      difficulty: 3,
      prompt: 'Para un deseo presente, después de "wish" usamos el pasado simple.',
      promptTranslation: 'For a present wish, we use the past simple after "wish".',
      correctAnswer: 'true',
      acceptedAnswers: ['True', 'TRUE', 't'],
      explanation: 'Verdadero: I wish I had more time (had = pasado simple).',
    },
    {
      id: 'b1-m9-l3-ex9',
      type: 'fill_blank',
      concept: 'wish past perfect negative',
      difficulty: 3,
      prompt: 'Completa: "He wishes he ___ bought that car."',
      promptTranslation: 'Desearía no haber comprado ese coche.',
      correctAnswer: 'hadn\'t',
      acceptedAnswers: ["hadn't", 'had not'],
      explanation: 'Arrepentimiento pasado en negativa: hadn\'t + participio → hadn\'t bought.',
    },
    {
      id: 'b1-m9-l3-ex10',
      type: 'multiple_choice',
      concept: 'wish were',
      difficulty: 4,
      prompt: 'Completa (formal): "I wish I ___ taller."',
      promptTranslation: 'Ojalá fuera más alto.',
      correctAnswer: 'were',
      options: ['were', 'am', 'is'],
      explanation: 'Tras "wish", en formal usamos "were" con todos los sujetos: I wish I were taller.',
    },
  ],
  miniTest: [
    {
      id: 'b1-m9-l3-mt1',
      type: 'multiple_choice',
      concept: 'wish past simple',
      difficulty: 2,
      prompt: 'Completa: "I wish I ___ in a bigger city."',
      promptTranslation: 'Ojalá viviera en una ciudad más grande.',
      correctAnswer: 'lived',
      options: ['lived', 'live', 'living'],
      explanation: 'Deseo presente: wish + pasado simple (lived).',
    },
    {
      id: 'b1-m9-l3-mt2',
      type: 'fill_blank',
      concept: 'if only',
      difficulty: 2,
      prompt: 'Completa: "If only I ___ (be) rich."',
      promptTranslation: 'Ojalá fuera rico.',
      correctAnswer: 'were',
      acceptedAnswers: ['were', 'was'],
      explanation: '"If only" + "be" en pasado: "were" (formal) o "was" (informal).',
    },
    {
      id: 'b1-m9-l3-mt3',
      type: 'error_correction',
      concept: 'wish past perfect',
      difficulty: 3,
      prompt: 'Corrige el error: "I wish I didn\'t said that."',
      promptTranslation: 'Ojalá no hubiera dicho eso.',
      correctAnswer: 'I wish I hadn\'t said that.',
      acceptedAnswers: ["I wish I hadn't said that", "I wish I hadn't said that.", "i wish i hadn't said that"],
      acceptApproximate: true,
      explanation: 'Arrepentimiento pasado: hadn\'t + participio (hadn\'t said), no "didn\'t said".',
    },
    {
      id: 'b1-m9-l3-mt4',
      type: 'translate',
      concept: 'if only could',
      difficulty: 3,
      prompt: 'Traduce: "Ojalá pudiera hablar inglés con fluidez."',
      promptTranslation: 'If only I could speak English fluently.',
      correctAnswer: 'If only I could speak English fluently.',
      acceptedAnswers: ['If only I could speak English fluently', 'If only I could speak English fluently.', 'if only i could speak english fluently'],
      acceptApproximate: true,
      explanation: '"Ojalá pudiera" = if only I could. → If only I could speak English fluently.',
    },
    {
      id: 'b1-m9-l3-mt5',
      type: 'multiple_choice',
      concept: 'wish past perfect',
      difficulty: 4,
      prompt: '¿Cuál es la frase correcta para expresar arrepentimiento?',
      promptTranslation: 'Which sentence correctly expresses regret?',
      correctAnswer: 'I wish I hadn\'t failed the exam.',
      options: ["I wish I hadn't failed the exam.", "I wish I didn't failed the exam.", "I wish I don't fail the exam."],
      explanation: 'El arrepentimiento pasado usa wish + hadn\'t + participio: hadn\'t failed.',
    },
  ],
  reviewItems: ['b1-m9-l2'],
  prerequisites: ['b1-m9-l2'],
}
