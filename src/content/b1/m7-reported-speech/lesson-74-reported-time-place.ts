import type { Lesson } from '../../types'

export const lesson74ReportedTimePlace: Lesson = {
  id: 'b1-m7-l4',
  moduleId: 'm7-reported-speech',
  order: 3,
  title: 'Estilo indirecto: cambios de tiempo y lugar + say vs tell',
  objective: 'Cambiar las expresiones de tiempo y lugar (here→there, today→that day, tomorrow→the next day, yesterday→the day before, now→then) y consolidar el uso de "say" frente a "tell".',
  explanation_es: `Además del cambio de tiempo (backshift), en el estilo indirecto cambian las palabras que indican cuándo y dónde, porque estamos contando algo desde otro momento y otro lugar.

Cambios principales:
- here → there (aquí → allí)
- now → then (ahora → entonces)
- today → that day (hoy → ese día)
- tomorrow → the next day / the following day (mañana → al día siguiente)
- yesterday → the day before (ayer → el día anterior)
- this → that

Veamos ejemplos:
- Directo: "I will see you tomorrow." → She said she would see me the next day.
- Directo: "I'm here now." → He said he was there then.
- Directo: "I bought this yesterday." → She said she had bought it the day before.

Repasemos también say vs tell:
- say + (that)... — sin persona: He said that he was tired.
- tell + persona + (that)... — con persona: He told me that he was tired.
- ❌ He said me that... → ✅ He told me that...

En español ocurre igual: "Hoy" se convierte en "ese día" cuando lo contamos después: "Dijo que lo vería al día siguiente".`,
  examples: [
    { english: 'Direct: "I will see you tomorrow." → Reported: She said she would see me the next day.', spanish: 'Directo: "Te veré mañana." → Indirecto: Ella dijo que me vería al día siguiente.', note: 'tomorrow → the next day' },
    { english: 'Direct: "I\'m here now." → Reported: He said he was there then.', spanish: 'Directo: "Estoy aquí ahora." → Indirecto: Él dijo que estaba allí entonces.', note: 'here → there, now → then' },
    { english: 'Direct: "I bought this yesterday." → Reported: She said she had bought it the day before.', spanish: 'Directo: "Compré esto ayer." → Indirecto: Ella dijo que lo había comprado el día anterior.', note: 'yesterday → the day before' },
    { english: 'Direct: "The party is today." → Reported: He said the party was that day.', spanish: 'Directo: "La fiesta es hoy." → Indirecto: Él dijo que la fiesta era ese día.', note: 'today → that day' },
    { english: 'He said that the meeting was at nine. / He told me that the meeting was at nine.', spanish: 'Él dijo que la reunión era a las nueve. / Él me dijo que la reunión era a las nueve.', note: 'say sin persona; tell + persona' },
  ],
  rule: `Cambios de tiempo y lugar:
- here → there
- now → then
- today → that day
- tomorrow → the next day
- yesterday → the day before
- this → that

say vs tell:
- say + (that)... (sin persona): He said (that) he was tired.
- tell + persona + (that)...: He told me (that) he was tired.
- "said me" no existe: usamos "told me".`,
  formation: {
    title: 'Cómo cambian el tiempo y el lugar en el estilo indirecto',
    intro: 'Al pasar una frase de estilo directo a indirecto, además del cambio de tiempo verbal (backshift), las palabras de tiempo y lugar se "alejan" del momento actual: here→there, now→then, today→that day, tomorrow→the next day, yesterday→the day before.',
    patterns: [
      {
        name: 'Cambios de lugar',
        formula: 'here → there | this → that',
        examples: [
          { english: 'Direct: "I\'m here now." → Reported: He said he was there then.', spanish: 'Directo: "Estoy aquí ahora." → Indirecto: Él dijo que estaba allí entonces.' },
        ],
        note: 'Al contar algo desde otro lugar, "here" se convierte en "there".',
      },
      {
        name: 'Cambios de tiempo',
        formula: 'now → then | today → that day | tomorrow → the next day | yesterday → the day before',
        examples: [
          { english: 'Direct: "I will see you tomorrow." → Reported: She said she would see me the next day.', spanish: 'Directo: "Te veré mañana." → Indirecto: Ella dijo que me vería al día siguiente.' },
          { english: 'Direct: "I bought this yesterday." → Reported: She said she had bought it the day before.', spanish: 'Directo: "Compré esto ayer." → Indirecto: Ella dijo que lo había comprado el día anterior.' },
        ],
        note: 'Las expresiones de tiempo se desplazan hacia el pasado relativo al momento en que se habla.',
      },
      {
        name: 'say vs tell',
        formula: 'say + (that) + oración | tell + persona + (that) + oración',
        examples: [
          { english: 'He said that he was tired.', spanish: 'Él dijo que estaba cansado.' },
          { english: 'He told me that he was tired.', spanish: 'Él me dijo que estaba cansado.' },
        ],
        note: '"Say" no lleva persona como objeto: "He said me" no existe; se dice "He told me".',
      },
    ],
    notes: [
      '"Tomorrow" cambia a "the next day" o "the following day".',
      '"Yesterday" cambia a "the day before".',
      'Si el momento aún es válido al reportar, a veces se puede conservar la expresión original, pero en B1 practicamos siempre el cambio.',
    ],
  },
  commonMistakes: [
    { wrong: '❌ She said she would see me tomorrow.', correct: '✅ She said she would see me the next day.', explanation: 'Al contar lo dicho después, "tomorrow" cambia a "the next day".' },
    { wrong: '❌ He said me that the shop was closed.', correct: '✅ He told me that the shop was closed.', explanation: '"Say" no lleva persona como objeto; con persona usamos "told me".' },
    { wrong: '❌ He said he was here now.', correct: '✅ He said he was there then.', explanation: 'Al reportar desde otro lugar y momento: here→there y now→then.' },
  ],
  vocabulary: [
    { word: 'the next day', translation_es: 'al día siguiente', level: 'B1', category: 'time expressions', partOfSpeech: 'phrase', example: 'She said she would travel the next day.', exampleTranslation: 'Ella dijo que viajaría al día siguiente.' },
    { word: 'the day before', translation_es: 'el día anterior', level: 'B1', category: 'time expressions', partOfSpeech: 'phrase', example: 'He said he had arrived the day before.', exampleTranslation: 'Él dijo que había llegado el día anterior.' },
    { word: 'then', translation_es: 'entonces, en ese momento', level: 'B1', category: 'time expressions', partOfSpeech: 'adverb', example: 'She said she was busy then.', exampleTranslation: 'Ella dijo que estaba ocupada entonces.' },
    { word: 'there', translation_es: 'allí', level: 'B1', category: 'place expressions', partOfSpeech: 'adverb', example: 'He said the keys were there.', exampleTranslation: 'Él dijo que las llaves estaban allí.' },
  ],
  grammarPoints: [
    {
      id: 'gp-reported-time-place',
      level: 'B1',
      name: 'Reported speech — time & place changes; say vs tell',
      explanation_es: 'En el estilo indirecto cambian las expresiones de tiempo y lugar (here→there, now→then, today→that day, tomorrow→the next day, yesterday→the day before). Además, "say" se usa sin persona y "tell" con persona.',
      formula: 'here→there | now→then | today→that day | tomorrow→the next day | yesterday→the day before',
      examples: ['She said she would see me the next day.', 'He said he was there then.', 'She said she had bought it the day before.'],
    },
  ],
  exercises: [
    {
      id: 'b1-m7-l4-ex1',
      type: 'multiple_choice',
      concept: 'reported speech time shift tomorrow',
      difficulty: 1,
      prompt: 'Completa: Directo: "I will see you tomorrow." → "She said she would see me ___."',
      promptTranslation: 'Ella dijo que me vería al día siguiente.',
      correctAnswer: 'the next day',
      options: ['the next day', 'tomorrow', 'yesterday'],
      explanation: '"Tomorrow" cambia a "the next day" al pasar a estilo indirecto.',
    },
    {
      id: 'b1-m7-l4-ex2',
      type: 'fill_blank',
      concept: 'reported speech place shift here there',
      difficulty: 2,
      prompt: 'Completa: Directo: "I\'m here now." → "He said he was ___ then."',
      promptTranslation: 'Él dijo que estaba allí entonces.',
      correctAnswer: 'there',
      acceptedAnswers: ['there', 'There'],
      explanation: '"Here" cambia a "there" en estilo indirecto. → He said he was there then.',
    },
    {
      id: 'b1-m7-l4-ex3',
      type: 'multiple_choice',
      concept: 'reported speech time shift yesterday',
      difficulty: 2,
      prompt: 'Completa: Directo: "I bought this yesterday." → "She said she had bought it ___."',
      promptTranslation: 'Ella dijo que lo había comprado el día anterior.',
      correctAnswer: 'the day before',
      options: ['the day before', 'yesterday', 'the next day'],
      explanation: '"Yesterday" cambia a "the day before" en estilo indirecto.',
    },
    {
      id: 'b1-m7-l4-ex4',
      type: 'match',
      concept: 'reported speech time place shifts',
      difficulty: 2,
      prompt: 'Relaciona cada palabra de estilo directo con su cambio en estilo indirecto.',
      promptTranslation: 'Match each direct-speech word with its reported-speech change.',
      correctAnswer: 'here→there; today→that day; tomorrow→the next day; yesterday→the day before; now→then',
      pairs: [
        { left: 'here', right: 'there' },
        { left: 'today', right: 'that day' },
        { left: 'tomorrow', right: 'the next day' },
        { left: 'yesterday', right: 'the day before' },
        { left: 'now', right: 'then' },
      ],
      explanation: 'Todas las expresiones de tiempo y lugar se alejan del momento actual: here→there, today→that day, tomorrow→the next day, yesterday→the day before, now→then.',
    },
    {
      id: 'b1-m7-l4-ex5',
      type: 'error_correction',
      concept: 'say vs tell',
      difficulty: 3,
      prompt: 'Corrige el error: "He said me that the shop was closed."',
      promptTranslation: 'Él me dijo que la tienda estaba cerrada.',
      correctAnswer: 'He told me that the shop was closed.',
      acceptedAnswers: ['He told me that the shop was closed', 'He told me that the shop was closed.', 'he told me that the shop was closed'],
      acceptApproximate: true,
      explanation: '"Say" no lleva persona como objeto. Con persona usamos "told me": He told me that the shop was closed.',
    },
    {
      id: 'b1-m7-l4-ex6',
      type: 'translate',
      concept: 'reported speech time place',
      difficulty: 3,
      prompt: 'Traduce: "Ella dijo que estaría allí entonces."',
      promptTranslation: 'She said she would be there then.',
      correctAnswer: 'She said she would be there then.',
      acceptedAnswers: ['She said she would be there then', 'She said that she would be there then', 'she said she would be there then.'],
      acceptApproximate: true,
      explanation: '"Allí entonces" = there then. → She said she would be there then.',
    },
    {
      id: 'b1-m7-l4-ex7',
      type: 'reorder',
      concept: 'reported speech time shift',
      difficulty: 3,
      prompt: 'Ordena las palabras: She / said / would / see / she / me / the next day',
      promptTranslation: 'Ella dijo que me vería al día siguiente.',
      correctAnswer: 'She said she would see me the next day.',
      words: ['She', 'said', 'she', 'would', 'see', 'me', 'the', 'next', 'day'],
      explanation: 'Orden: sujeto + said + sujeto + would + verbo + objeto + tiempo. → She said she would see me the next day.',
    },
    {
      id: 'b1-m7-l4-ex8',
      type: 'true_false',
      concept: 'reported speech time place',
      difficulty: 3,
      prompt: 'La frase "She said she was here now" es la forma correcta de estilo indirecto para "I\'m here now".',
      promptTranslation: '"She said she was here now" is the correct reported form of "I\'m here now".',
      correctAnswer: 'false',
      acceptedAnswers: ['False', 'FALSE', 'f'],
      explanation: 'Falso. Aquí y ahora cambian al reportar: She said she was there then.',
    },
    {
      id: 'b1-m7-l4-ex9',
      type: 'fill_blank',
      concept: 'reported speech time shift today',
      difficulty: 3,
      prompt: 'Completa: Directo: "I am busy today." → "She said she was busy ___."',
      promptTranslation: 'Ella dijo que estaba ocupada ese día.',
      correctAnswer: 'that day',
      acceptedAnswers: ['that day', 'That day'],
      explanation: '"Today" cambia a "that day" en estilo indirecto.',
    },
    {
      id: 'b1-m7-l4-ex10',
      type: 'multiple_choice',
      concept: 'reported speech time shift',
      difficulty: 4,
      prompt: '¿Cuál es la forma correcta de estilo indirecto para "We arrived yesterday."?',
      promptTranslation: 'Which is the correct reported form of "We arrived yesterday."?',
      correctAnswer: 'They said they had arrived the day before.',
      options: ['They said they arrived the day before.', 'They said they had arrived yesterday.', 'They said they had arrived the day before.'],
      explanation: 'Pasado simple retrocede a past perfect ("had arrived") y "yesterday" cambia a "the day before".',
    },
    {
      id: 'b1-m7-l4-ex11',
      type: 'listening',
      concept: 'reported time place changes listening',
      difficulty: 3,
      prompt: 'Escuchá el audio y respondé las preguntas (en inglés, sobre lo que dice).',
      correctAnswer: '',
      explanation: 'Una persona narra un viaje que hizo. Presta atención a los cambios de tiempo y lugar.',
      listening: {
        audioText:
          "I had an amazing trip last week. I was in Thailand and I felt wonderful. On Monday, I arrived in Bangkok and I was very excited. The hotel was there and I was comfortable. I said I would explore the city the next day. On Tuesday, I visited the temples. I said the architecture was beautiful. On Wednesday, I was thinking about going to the beach, but I changed my mind. Today I'm back here at home and I'm already missing Thailand.",
        audioUrl: '/audio/tts/b1-m7-l4-ex11.mp3',
        questions: [
          {
            id: 'b1-m7-l4-ex11-q1',
            type: 'multiple_choice',
            concept: 'listening comprehension time place changes',
            difficulty: 2,
            prompt: 'Where was the person during the trip?',
            correctAnswer: 'In Thailand',
            options: ['In Cambodia', 'In Thailand', 'In Vietnam'],
            explanation: '"I was in Thailand" — pero si lo reportaras, sería "he said he was there".',
          },
          {
            id: 'b1-m7-l4-ex11-q2',
            type: 'true_false',
            concept: 'listening comprehension time place changes',
            difficulty: 2,
            prompt: 'The person arrived in Bangkok on Monday.',
            correctAnswer: 'true',
            explanation: '"On Monday, I arrived in Bangkok."',
          },
          {
            id: 'b1-m7-l4-ex11-q3',
            type: 'multiple_choice',
            concept: 'listening comprehension time place changes',
            difficulty: 3,
            prompt: 'What did the person do on Wednesday?',
            correctAnswer: 'He decided not to go to the beach',
            options: ['He went to the beach', 'He decided not to go to the beach', 'He went to visit temples'],
            explanation: '"On Wednesday, I was thinking about going to the beach, but I changed my mind."',
          },
        ],
      },
    },
    {
      id: 'b1-m7-l4-ex12',
      type: 'writing',
      concept: 'reported time place changes writing',
      difficulty: 3,
      prompt: 'Escribile un email a un amigo contando lo que te dijo tu hermana sobre su día de trabajo (usá say/tell + cambios de tiempo y lugar).',
      promptTranslation: 'Write an email to a friend reporting what your sister told you about her work day.',
      correctAnswer: '',
      explanation: 'Un buen email usa "said" o "told me" correctamente y aplica cambios de tiempo/lugar: here→there, now→then, tomorrow→the next day, etc.',
      taskType: 'email',
      targetReader: 'a friend',
      register: 'informal',
      contentPoints: [
        'Qué dijo tu hermana sobre su día (usando tell/said)',
        'Al menos 1 cambio de tiempo o lugar (here→there, now→then, tomorrow→the next day, etc.)',
      ],
      requiresOwnIdea: true,
      minWords: 60,
      maxWords: 100,
    },
    {
      id: 'b1-m7-l4-ex13',
      type: 'speaking',
      concept: 'reported time place pronunciation',
      difficulty: 2,
      prompt: 'Escuchá la frase modelo y repetila en voz alta.',
      correctAnswer: 'He told me he was working there then and that he would travel the next day.',
      explanation: 'Practicá los cambios de tiempo y lugar: "was working there" (here→there), "then" (now→then), "the next day" (tomorrow→the next day).',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b1-m7-l4-mt1',
      type: 'multiple_choice',
      concept: 'reported speech time shift tomorrow',
      difficulty: 2,
      prompt: 'Completa: Directo: "I will travel tomorrow." → "He said he would travel ___."',
      promptTranslation: 'Él dijo que viajaría al día siguiente.',
      correctAnswer: 'the next day',
      options: ['the next day', 'tomorrow', 'that day'],
      explanation: '"Tomorrow" → "the next day". → He said he would travel the next day.',
    },
    {
      id: 'b1-m7-l4-mt2',
      type: 'fill_blank',
      concept: 'reported speech place shift',
      difficulty: 2,
      prompt: 'Completa: Directo: "I am here." → "She said she was ___."',
      promptTranslation: 'Ella dijo que estaba allí.',
      correctAnswer: 'there',
      acceptedAnswers: ['there', 'There'],
      explanation: '"Here" → "there" al reportar. → She said she was there.',
    },
    {
      id: 'b1-m7-l4-mt3',
      type: 'error_correction',
      concept: 'say vs tell',
      difficulty: 3,
      prompt: 'Corrige el error: "She said me that she was tired."',
      promptTranslation: 'Ella me dijo que estaba cansada.',
      correctAnswer: 'She told me that she was tired.',
      acceptedAnswers: ['She told me that she was tired', 'She told me that she was tired.', 'she told me that she was tired'],
      acceptApproximate: true,
      explanation: 'Con persona como objeto usamos "told me", no "said me".',
    },
    {
      id: 'b1-m7-l4-mt4',
      type: 'translate',
      concept: 'reported speech time shift',
      difficulty: 3,
      prompt: 'Traduce: "Dijo que había llegado el día anterior."',
      promptTranslation: 'He said he had arrived the day before.',
      correctAnswer: 'He said he had arrived the day before.',
      acceptedAnswers: ['He said he had arrived the day before', 'He said that he had arrived the day before', 'he said he had arrived the day before.'],
      acceptApproximate: true,
      explanation: '"El día anterior" = the day before; "había llegado" = had arrived. → He said he had arrived the day before.',
    },
    {
      id: 'b1-m7-l4-mt5',
      type: 'multiple_choice',
      concept: 'reported speech time place',
      difficulty: 4,
      prompt: '¿Cuál es la forma correcta de estilo indirecto para "I\'m at home now."?',
      promptTranslation: 'Which is the correct reported form of "I\'m at home now."?',
      correctAnswer: 'She said she was at home then.',
      options: ['She said she is at home now.', 'She said she was at home then.', 'She said she was at home now.'],
      explanation: 'Am→was (backshift), now→then, y los pronombres cambian: I→she.',
    },
  ],
  reviewItems: ['b1-m7-l3'],
  prerequisites: ['b1-m7-l3'],
  workbookRefs: [
    { levelId: 'b1', page: 7, exercises: [1, 4, 6], note: 'Práctica del estilo indirecto con cambios de tiempo y pronombres' },
  ],
}
