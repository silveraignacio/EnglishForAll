import type { Lesson } from '../../types'

export const lesson93PassiveByAgent: Lesson = {
  id: 'a2-m9-l3',
  moduleId: 'm9-passive',
  order: 2,
  title: 'La voz pasiva con "by" (quién hace la acción)',
  objective: 'Decir quién realiza la acción con "by + agente".',
  explanation_es: `La voz pasiva se usa cuando el foco está en la acción. Pero a veces también queremos decir QUIÉN hace la acción. Para eso usamos "by" (= por).

Estructura:

> sujeto + (is/are | was/were) + participio + by + quién lo hace

- "The cake was made by my grandmother." = El pastel fue hecho por mi abuela.
- "The song was written by a famous artist." = La canción fue escrita por un artista famoso.
- "The bridge was designed by an architect." = El puente fue diseñado por un arquitecto.

"by" indica la persona o cosa que realiza la acción. En español lo traducimos como "por": hecho por, escrito por, diseñado por.

OJO: no confundas "by" (por, quién lo hace) con "for" (para, destinatario):
- ❌ The cake was made for my grandmother. (queriendo decir "por mi abuela")
- ✅ The cake was made by my grandmother. (la abuela lo hizo)
- Con "for" la frase significaría que el pastel ERA PARA mi abuela, no que ella lo hizo.

El resto de la pasiva no cambia: is/are (presente) o was/were (pasado) + participio + by + agente.`,
  examples: [
    { english: 'The cake was made by my grandmother.', spanish: 'El pastel fue hecho por mi abuela.', note: 'by + quién hace la acción.' },
    { english: 'The song was written by a famous artist.', spanish: 'La canción fue escrita por un artista famoso.', note: 'by + a famous artist.' },
    { english: 'The bridge was designed by an architect.', spanish: 'El puente fue diseñado por un arquitecto.', note: 'was + designed + by.' },
    { english: 'The book is read by students all over the world.', spanish: 'El libro es leído por estudiantes de todo el mundo.', note: 'Pasiva en presente + by.' },
    { english: 'The window was broken by the wind.', spanish: 'La ventana fue rota por el viento.', note: 'by + una cosa (el viento).' },
    { english: 'Dinner is cooked by my father every Sunday.', spanish: 'La cena la cocina mi padre todos los domingos.', note: 'is + cooked + by.' },
  ],
  rule: `Regla de "by" en la pasiva:

- by + agente = quién hace la acción.
- sujeto + (is/are | was/were) + participio + by + agente.
- by = por (quién). for = para (destinatario).
- El agente puede ser una persona o una cosa.`,
  commonMistakes: [
    { wrong: '❌ The cake was made for my grandmother.', correct: '✅ The cake was made by my grandmother.', explanation: 'Para decir quién hace la acción usamos "by" (por), no "for" (para).' },
    { wrong: '❌ The song was written from a famous artist.', correct: '✅ The song was written by a famous artist.', explanation: 'Con el agente usamos "by", no "from".' },
    { wrong: '❌ The bridge was designed for an architect.', correct: '✅ The bridge was designed by an architect.', explanation: '"For" indica destinatario (para). El agente (quién diseña) va con "by".' },
  ],
  vocabulary: [
    { word: 'cake', translation_es: 'pastel/tarta', level: 'A2', category: 'food', partOfSpeech: 'noun', example: 'The cake was made by my grandmother.', exampleTranslation: 'El pastel fue hecho por mi abuela.' },
    { word: 'grandmother', translation_es: 'abuela', level: 'A2', category: 'family', partOfSpeech: 'noun', example: 'The cake was made by my grandmother.', exampleTranslation: 'El pastel fue hecho por mi abuela.' },
    { word: 'artist', translation_es: 'artista', level: 'A2', category: 'people', partOfSpeech: 'noun', example: 'The song was written by a famous artist.', exampleTranslation: 'La canción fue escrita por un artista famoso.' },
    { word: 'bridge', translation_es: 'puente', level: 'A2', category: 'places', partOfSpeech: 'noun', example: 'The bridge was designed by an architect.', exampleTranslation: 'El puente fue diseñado por un arquitecto.' },
    { word: 'architect', translation_es: 'arquitecto/a', level: 'A2', category: 'professions', partOfSpeech: 'noun', example: 'The bridge was designed by an architect.', exampleTranslation: 'El puente fue diseñado por un arquitecto.' },
    { word: 'design', translation_es: 'diseñar', level: 'A2', category: 'work', partOfSpeech: 'verb', example: 'The bridge was designed by an architect.', exampleTranslation: 'El puente fue diseñado por un arquitecto.' },
  ],
  grammarPoints: [
    {
      id: 'gp-passive-by',
      level: 'A2',
      name: 'Passive voice with by (agent)',
      explanation_es: 'by + agente indica quién realiza la acción en la voz pasiva.',
      formula: 'subject + is/are/was/were + past participle + by + agent',
      examples: ['The cake was made by my grandmother.', 'The song was written by a famous artist.'],
    },
  ],
  exercises: [
    {
      id: 'a2-m9-l3-ex1',
      type: 'multiple_choice',
      concept: 'passive with by',
      difficulty: 1,
      prompt: 'Completa: "The cake was made ___ my grandmother."',
      promptTranslation: 'El pastel fue hecho por mi abuela.',
      correctAnswer: 'by',
      options: ['by', 'for', 'from'],
      explanation: 'El agente (quién lo hace) va con "by" (por). → made by my grandmother.',
    },
    {
      id: 'a2-m9-l3-ex2',
      type: 'fill_blank',
      concept: 'passive with by',
      difficulty: 1,
      prompt: 'Completa: "The song was written ___ a famous artist."',
      promptTranslation: 'La canción fue escrita por un artista famoso.',
      correctAnswer: 'by',
      acceptedAnswers: ['by', 'By'],
      explanation: '"Por un artista famoso" = by a famous artist. El agente va con "by".',
    },
    {
      id: 'a2-m9-l3-ex3',
      type: 'multiple_choice',
      concept: 'passive with by',
      difficulty: 2,
      prompt: 'Completa: "The bridge was ___ by an architect."',
      promptTranslation: 'El puente fue diseñado por un arquitecto.',
      correctAnswer: 'designed',
      options: ['designed', 'design', 'designing'],
      explanation: 'En la pasiva usamos el participio: designed. → The bridge was designed by an architect.',
    },
    {
      id: 'a2-m9-l3-ex4',
      type: 'reorder',
      concept: 'passive with by',
      difficulty: 2,
      prompt: 'Ordena la frase:',
      promptTranslation: 'El pastel fue hecho por mi abuela.',
      correctAnswer: 'The cake was made by my grandmother.',
      words: ['The', 'cake', 'was', 'made', 'by', 'my', 'grandmother.'],
      explanation: 'Sujeto (The cake) + was + participio (made) + by + agente (my grandmother).',
    },
    {
      id: 'a2-m9-l3-ex5',
      type: 'select_correct',
      concept: 'passive with by',
      difficulty: 3,
      prompt: 'Selecciona la frase correcta.',
      promptTranslation: 'El pastel fue hecho por mi abuela.',
      correctAnswer: 'The cake was made by my grandmother.',
      options: ['The cake was made by my grandmother.', 'The cake was made for my grandmother.', 'The cake was made from my grandmother.'],
      explanation: 'El agente (quién lo hizo) va con "by". "For" sería "para mi abuela".',
    },
    {
      id: 'a2-m9-l3-ex6',
      type: 'error_correction',
      concept: 'passive with by',
      difficulty: 3,
      prompt: 'Corrige el error: "The cake was made for my grandmother." (queriendo decir "por mi abuela")',
      correctAnswer: 'The cake was made by my grandmother.',
      acceptedAnswers: ['The cake was made by my grandmother', 'The cake was made by my grandmother.'],
      acceptApproximate: true,
      explanation: 'Para decir quién hizo el pastel usamos "by" (por), no "for" (para).',
    },
    {
      id: 'a2-m9-l3-ex7',
      type: 'match',
      concept: 'passive with by',
      difficulty: 3,
      prompt: 'Relaciona cada sujeto con su frase pasiva.',
      promptTranslation: 'Match each subject with its passive sentence.',
      correctAnswer: '',
      pairs: [
        { left: 'The cake', right: 'was made by my grandmother.' },
        { left: 'The song', right: 'was written by a famous artist.' },
        { left: 'The bridge', right: 'was designed by an architect.' },
        { left: 'Dinner', right: 'is cooked by my father every Sunday.' },
        { left: 'The window', right: 'was broken by the wind.' },
      ],
      explanation: 'En todas: sujeto + was/is + participio + by + agente (persona o cosa).',
    },
    {
      id: 'a2-m9-l3-ex8',
      type: 'translate',
      concept: 'passive with by',
      difficulty: 3,
      prompt: 'Traduce: "El pastel fue hecho por mi abuela."',
      correctAnswer: 'The cake was made by my grandmother.',
      acceptedAnswers: ['The cake was made by my grandmother', 'The cake was made by my grandmother.'],
      acceptApproximate: true,
      explanation: '"Fue hecho" = was made; "por mi abuela" = by my grandmother.',
    },
    {
      id: 'a2-m9-l3-ex9',
      type: 'translate',
      concept: 'passive with by',
      difficulty: 4,
      prompt: 'Traduce: "El puente fue diseñado por un arquitecto."',
      correctAnswer: 'The bridge was designed by an architect.',
      acceptedAnswers: ['The bridge was designed by an architect', 'The bridge was designed by an architect.'],
      acceptApproximate: true,
      explanation: '"Fue diseñado" = was designed; "por un arquitecto" = by an architect.',
    },
    {
      id: 'a2-m9-l3-ex10',
      type: 'true_false',
      concept: 'passive with by',
      difficulty: 4,
      prompt: '"We use "by" to say who does the action in the passive voice."',
      promptTranslation: 'Usamos "by" para decir quién hace la acción en la voz pasiva.',
      correctAnswer: 'true',
      acceptedAnswers: ['True', 'TRUE', 'Verdadero', 'true.'],
      explanation: 'Es VERDADERO. "By" introduce al agente: who/what performs the action.',
    },
  ],
  miniTest: [
    {
      id: 'a2-m9-l3-mt1',
      type: 'multiple_choice',
      concept: 'passive with by',
      difficulty: 1,
      prompt: 'Completa: "The bridge was designed ___ an architect."',
      promptTranslation: 'El puente fue diseñado por un arquitecto.',
      correctAnswer: 'by',
      options: ['by', 'for', 'of'],
      explanation: 'El agente (quién diseña) va con "by". → designed by an architect.',
    },
    {
      id: 'a2-m9-l3-mt2',
      type: 'fill_blank',
      concept: 'passive with by',
      difficulty: 2,
      prompt: 'Completa: "The cake was made ___ my grandmother."',
      promptTranslation: 'El pastel fue hecho por mi abuela.',
      correctAnswer: 'by',
      acceptedAnswers: ['by', 'By'],
      explanation: '"Por mi abuela" = by my grandmother. El agente va con "by".',
    },
    {
      id: 'a2-m9-l3-mt3',
      type: 'multiple_choice',
      concept: 'passive with by',
      difficulty: 2,
      prompt: '¿Qué significa "by" en "The cake was made by my grandmother"?',
      promptTranslation: 'What does "by" mean in this sentence?',
      correctAnswer: 'por (quién lo hizo)',
      options: ['por (quién lo hizo)', 'para (destinatario)', 'de (posesión)'],
      explanation: '"By" introduce al agente: quién realizó la acción. En español: "por mi abuela".',
    },
    {
      id: 'a2-m9-l3-mt4',
      type: 'translate',
      concept: 'passive with by',
      difficulty: 3,
      prompt: 'Traduce: "La canción fue escrita por un artista famoso."',
      correctAnswer: 'The song was written by a famous artist.',
      acceptedAnswers: ['The song was written by a famous artist', 'The song was written by a famous artist.'],
      acceptApproximate: true,
      explanation: '"Fue escrita" = was written; "por un artista famoso" = by a famous artist.',
    },
    {
      id: 'a2-m9-l3-mt5',
      type: 'error_correction',
      concept: 'passive with by',
      difficulty: 4,
      prompt: 'Corrige el error: "The song was written from a famous artist."',
      correctAnswer: 'The song was written by a famous artist.',
      acceptedAnswers: ['The song was written by a famous artist', 'The song was written by a famous artist.'],
      acceptApproximate: true,
      explanation: 'Con el agente usamos "by" (por), no "from" (de/desde).',
    },
  ],
  reviewItems: ['a2-m9-l2'],
  prerequisites: ['a2-m9-l2'],
}
