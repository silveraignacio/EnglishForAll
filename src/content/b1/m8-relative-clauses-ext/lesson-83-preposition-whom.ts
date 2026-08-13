import type { Lesson } from '../../types'

export const lesson83PrepositionWhom: Lesson = {
  id: 'b1-m8-l3',
  moduleId: 'm8-relative-clauses-ext',
  order: 2,
  title: 'Preposición + relativo y "whom" (formal)',
  objective: 'Usar whom tras preposiciones en inglés formal (to whom, with whom, for whom) y conocer la alternativa informal (who + preposición al final).',
  explanation_es: `En inglés formal, cuando la preposición va antes de la palabra de relativo, usamos "whom" (que es la forma de objeto de "who").

Estructura formal: preposición + whom
- The woman to whom I spoke was kind. = La mujer con la que hablé fue amable.
- The people with whom we travelled were nice. = La gente con la que viajamos era simpática.
- The colleague whom I admire is leaving. = El compañero al que admiro se va.

En inglés informal (hablado) es más natural poner la preposición al final y usar "who":
- The woman who I spoke to was kind. (informal)
- The people who we travelled with were nice. (informal)

¿Cuándo usar cada una?
- Formal (escrito, negocios): preposición + whom: to whom, with whom, for whom.
- Informal (conversación): who + ... + preposición al final: who I spoke to.

¡CUIDADO!
- ❌ The woman to who I spoke... → ✅ The woman to whom I spoke... (formal) o The woman who I spoke to (informal).
- En español: "la mujer a la que hablé" / "la mujer con la que viajamos".`,
  examples: [
    { english: 'The woman to whom I spoke was kind.', spanish: 'La mujer con la que hablé fue amable.', note: 'formal: to whom' },
    { english: 'The people with whom we travelled were nice.', spanish: 'La gente con la que viajamos era simpática.', note: 'formal: with whom' },
    { english: 'The colleague whom I admire is leaving.', spanish: 'El compañero al que admiro se va.', note: 'whom = objeto directo' },
    { english: 'The woman who I spoke to was kind.', spanish: 'La mujer con la que hablé fue amable.', note: 'informal: who + preposición al final' },
    { english: 'The student for whom I bought the book is my cousin.', spanish: 'El estudiante para el que compré el libro es mi primo.', note: 'for whom' },
  ],
  rule: `Regla:
- Formal: preposición + whom: to whom, with whom, for whom, from whom.
- Informal: who + frase + preposición al final: who I spoke to.
- "whom" es la forma de objeto; con "who" no decimos "to who" en formal.

Estructura formal: Persona/objeto + preposición + whom + sujeto + verbo.`,
  commonMistakes: [
    { wrong: '❌ The woman to who I spoke was kind.', correct: '✅ The woman to whom I spoke was kind.', explanation: 'Tras una preposición, en formal usamos "whom", no "who".' },
    { wrong: '❌ The people who we travelled with them were nice.', correct: '✅ The people with whom we travelled were nice.', explanation: 'No repetimos el pronombre ("them"): la preposición sube al principio con "whom".' },
    { wrong: '❌ The colleague whom I admire him is leaving.', correct: '✅ The colleague whom I admire is leaving.', explanation: '"Whom" ya es el objeto; no añadimos "him" después del verbo.' },
  ],
  vocabulary: [
    { word: 'colleague', translation_es: 'compañero/a de trabajo', level: 'B1', category: 'work', partOfSpeech: 'noun', example: 'The colleague whom I admire is leaving.', exampleTranslation: 'El compañero al que admiro se va.' },
    { word: 'admire', translation_es: 'admirar', level: 'B1', category: 'verbs', partOfSpeech: 'verb', example: 'She is a person whom many people admire.', exampleTranslation: 'Ella es una persona a la que mucha gente admira.' },
    { word: 'lend', translation_es: 'prestar', level: 'B1', category: 'verbs', partOfSpeech: 'verb', example: 'The neighbour to whom I lent my car is grateful.', exampleTranslation: 'El vecino al que presté mi coche está agradecido.' },
    { word: 'polite', translation_es: 'educado/a, cortés', level: 'B1', category: 'adjectives', partOfSpeech: 'adjective', example: 'It is polite to say thank you.', exampleTranslation: 'Es de buena educación dar las gracias.' },
  ],
  grammarPoints: [
    {
      id: 'gp-preposition-whom',
      level: 'B1',
      name: 'Preposition + whom (formal)',
      explanation_es: 'En inglés formal, la preposición puede ir antes del relativo con whom (to whom, with whom, for whom). En informal se usa who con la preposición al final de la frase.',
      formula: 'preposición + whom + sujeto + verbo (formal) | who + frase + preposición (informal)',
      examples: ['The woman to whom I spoke was kind.', 'The people who we travelled with were nice.'],
    },
  ],
  exercises: [
    {
      id: 'b1-m8-l3-ex1',
      type: 'multiple_choice',
      concept: 'preposition whom',
      difficulty: 1,
      prompt: 'Completa (formal): "The woman to ___ I spoke was kind."',
      promptTranslation: 'La mujer con la que hablé fue amable.',
      correctAnswer: 'whom',
      options: ['whom', 'who', 'whose'],
      explanation: 'Tras una preposición, en formal usamos "whom": to whom I spoke.',
    },
    {
      id: 'b1-m8-l3-ex2',
      type: 'fill_blank',
      concept: 'preposition whom',
      difficulty: 2,
      prompt: 'Completa (formal): "The people with ___ we travelled were nice."',
      promptTranslation: 'La gente con la que viajamos era simpática.',
      correctAnswer: 'whom',
      acceptedAnswers: ['whom', 'Whom'],
      explanation: 'Con preposición + whom: with whom we travelled.',
    },
    {
      id: 'b1-m8-l3-ex3',
      type: 'multiple_choice',
      concept: 'relative whom object',
      difficulty: 2,
      prompt: 'Completa: "The colleague ___ I admire is leaving."',
      promptTranslation: 'El compañero al que admiro se va.',
      correctAnswer: 'whom',
      options: ['whom', 'which', 'whose'],
      explanation: '"Whom" es la forma de objeto: whom I admire. (En informal también valdría "who".)',
    },
    {
      id: 'b1-m8-l3-ex4',
      type: 'error_correction',
      concept: 'preposition whom',
      difficulty: 3,
      prompt: 'Corrige el error (formal): "The woman to who I spoke was kind."',
      promptTranslation: 'La mujer con la que hablé fue amable.',
      correctAnswer: 'The woman to whom I spoke was kind.',
      acceptedAnswers: ['The woman to whom I spoke was kind', 'The woman to whom I spoke was kind.', 'the woman to whom i spoke was kind'],
      acceptApproximate: true,
      explanation: 'Tras una preposición en formal usamos "whom", no "who".',
    },
    {
      id: 'b1-m8-l3-ex5',
      type: 'reorder',
      concept: 'preposition whom',
      difficulty: 3,
      prompt: 'Ordena las palabras: The / woman / to / whom / I / spoke / was / kind',
      promptTranslation: 'La mujer con la que hablé fue amable.',
      correctAnswer: 'The woman to whom I spoke was kind.',
      words: ['The', 'woman', 'to', 'whom', 'I', 'spoke', 'was', 'kind'],
      explanation: 'Orden formal: sujeto + preposición + whom + sujeto + verbo. → The woman to whom I spoke was kind.',
    },
    {
      id: 'b1-m8-l3-ex6',
      type: 'translate',
      concept: 'preposition whom',
      difficulty: 3,
      prompt: 'Traduce (formal): "La gente con la que viajamos era simpática."',
      promptTranslation: 'The people with whom we travelled were nice.',
      correctAnswer: 'The people with whom we travelled were nice.',
      acceptedAnswers: ['The people with whom we travelled were nice', 'The people who we travelled with were nice', 'the people with whom we travelled were nice.'],
      acceptApproximate: true,
      explanation: 'Formal: "with whom we travelled". Informal válido: "who we travelled with".',
    },
    {
      id: 'b1-m8-l3-ex7',
      type: 'match',
      concept: 'formal vs informal',
      difficulty: 3,
      prompt: 'Relaciona cada forma formal con su equivalente informal.',
      promptTranslation: 'Match each formal form with its informal equivalent.',
      correctAnswer: 'to whom I spoke=who I spoke to; with whom we travelled=who we travelled with; for whom I bought it=who I bought it for; from whom I received it=who I received it from; whom I admire=who I admire',
      pairs: [
        { left: 'the woman to whom I spoke', right: 'the woman who I spoke to' },
        { left: 'the people with whom we travelled', right: 'the people who we travelled with' },
        { left: 'the book for whom I bought it', right: 'the book who I bought it for' },
        { left: 'the friend from whom I received it', right: 'the friend who I received it from' },
        { left: 'the colleague whom I admire', right: 'the colleague who I admire' },
      ],
      explanation: 'En formal la preposición va antes de "whom"; en informal va al final con "who".',
    },
    {
      id: 'b1-m8-l3-ex8',
      type: 'true_false',
      concept: 'preposition whom',
      difficulty: 3,
      prompt: '"Whom" es la forma que usamos tras una preposición en inglés formal.',
      promptTranslation: '"Whom" is the form we use after a preposition in formal English.',
      correctAnswer: 'true',
      acceptedAnswers: ['True', 'TRUE', 't'],
      explanation: 'Verdadero. En formal: to whom, with whom, for whom.',
    },
    {
      id: 'b1-m8-l3-ex9',
      type: 'fill_blank',
      concept: 'preposition whom',
      difficulty: 3,
      prompt: 'Completa (formal): "The student for ___ I bought the book is my cousin."',
      promptTranslation: 'El estudiante para el que compré el libro es mi primo.',
      correctAnswer: 'whom',
      acceptedAnswers: ['whom', 'Whom'],
      explanation: 'Preposición + whom: for whom I bought the book.',
    },
    {
      id: 'b1-m8-l3-ex10',
      type: 'multiple_choice',
      concept: 'informal equivalent',
      difficulty: 4,
      prompt: '¿Cuál es la versión informal de "The man to whom I gave the keys"?',
      promptTranslation: 'Which is the informal version of "The man to whom I gave the keys"?',
      correctAnswer: 'The man who I gave the keys to.',
      options: ['The man who I gave the keys to.', 'The man whom I gave the keys to him.', 'The man to who I gave the keys.'],
      explanation: 'En informal la preposición va al final: who I gave the keys to.',
    },
  ],
  miniTest: [
    {
      id: 'b1-m8-l3-mt1',
      type: 'multiple_choice',
      concept: 'preposition whom',
      difficulty: 2,
      prompt: 'Completa (formal): "The friend with ___ I share my flat is Sara."',
      promptTranslation: 'La amiga con la que comparto mi piso es Sara.',
      correctAnswer: 'whom',
      options: ['whom', 'who', 'whose'],
      explanation: 'Preposición + whom: with whom I share my flat.',
    },
    {
      id: 'b1-m8-l3-mt2',
      type: 'fill_blank',
      concept: 'preposition whom',
      difficulty: 2,
      prompt: 'Completa (formal): "The neighbour to ___ I lent my car was grateful."',
      promptTranslation: 'El vecino al que presté mi coche estaba agradecido.',
      correctAnswer: 'whom',
      acceptedAnswers: ['whom', 'Whom'],
      explanation: 'Preposición + whom: to whom I lent my car.',
    },
    {
      id: 'b1-m8-l3-mt3',
      type: 'error_correction',
      concept: 'preposition whom',
      difficulty: 3,
      prompt: 'Corrige el error (formal): "The teacher to who I wrote an email replied quickly."',
      promptTranslation: 'El profesor al que escribí un correo respondió rápido.',
      correctAnswer: 'The teacher to whom I wrote an email replied quickly.',
      acceptedAnswers: ['The teacher to whom I wrote an email replied quickly', 'The teacher to whom I wrote an email replied quickly.', 'the teacher to whom i wrote an email replied quickly'],
      acceptApproximate: true,
      explanation: 'Tras "to" en formal usamos "whom", no "who".',
    },
    {
      id: 'b1-m8-l3-mt4',
      type: 'translate',
      concept: 'relative whom',
      difficulty: 3,
      prompt: 'Traduce: "El compañero al que admiro se va."',
      promptTranslation: 'The colleague whom I admire is leaving.',
      correctAnswer: 'The colleague whom I admire is leaving.',
      acceptedAnswers: ['The colleague whom I admire is leaving', 'The colleague who I admire is leaving', 'the colleague whom i admire is leaving.'],
      acceptApproximate: true,
      explanation: '"Al que" (objeto) = whom (formal) o who (informal). → The colleague whom I admire is leaving.',
    },
    {
      id: 'b1-m8-l3-mt5',
      type: 'multiple_choice',
      concept: 'informal equivalent',
      difficulty: 4,
      prompt: '¿Cuál es la versión informal de "The doctor to whom I spoke"?',
      promptTranslation: 'Which is the informal version of "The doctor to whom I spoke"?',
      correctAnswer: 'The doctor who I spoke to.',
      options: ['The doctor who I spoke to.', 'The doctor to who I spoke.', 'The doctor whom I spoke to him.'],
      explanation: 'Informal: preposición al final + who: who I spoke to.',
    },
  ],
  reviewItems: ['b1-m8-l2'],
  prerequisites: ['b1-m8-l2'],
}
