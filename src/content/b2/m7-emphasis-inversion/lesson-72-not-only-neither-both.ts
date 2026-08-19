import type { Lesson } from '../../types'

export const lesson72NotOnlyNeitherBoth: Lesson = {
  id: 'b2-m7-l2',
  moduleId: 'm7-emphasis-inversion',
  order: 1,
  title: 'Not only...but also, neither...nor, both...and for emphasis',
  objective: 'Usar estructuras de correlación (not only...but also, neither...nor, both...and) con inversión para expresar énfasis en afirmaciones y negaciones.',
  explanation_es: `Más allá de la inversión con palabras negativas simples, existen ESTRUCTURAS DE CORRELACIÓN que permiten enfatizar y comparar dos ideas simultáneamente. Estas estructuras son formales y dramáticas, muy comunes en escritura académica y narrativa.

1. **"Not only + auxiliar + sujeto + verbo, but (also)..."**
   Esta estructura enfatiza que algo sucedió, Y ADEMÁS otras cosas también.
   - Not only did she win the race, but she also broke the record. = No solo ganó la carrera, sino que también rompió el récord.
   - Forma normal: She not only won the race but also broke the record.
   - Con inversión: Not only did she win, but she also broke it. (Primera cláusula con inversión, segunda normal.)

2. **"Neither...nor..." para dos negaciones enfatizadas**
   Expresa que NINGUNO de dos sujetos hace/hizo algo. Requiere inversión en la primera parte.
   - Neither John nor Mary has finished their project. = Ni John ni Mary han terminado su proyecto.
   - Neither did I agree with him, nor did I understand his point. = Ni estuve de acuerdo con él, ni entendí su punto. (Ambas con inversión para máximo énfasis.)

3. **"Both...and..." para enfatizar dos cosas simultáneamente**
   Expresa que DOS sujetos hacen/hicieron algo. Generalmente sin inversión, pero puede haber.
   - Both he and she are talented musicians. = Tanto él como ella son músicos talentosos.
   - Both did they disagree with the decision and did they express their concerns. (Inversión para énfasis, menos común.)

Puntos importantes:

1. Con "not only...but also", la PRIMERA CLÁUSULA lleva inversión (el auxiliar va antes), pero la SEGUNDA es orden normal:
   ✅ Not only did they lose the match, but they also injured their best player.
   ❌ Not only did they lose the match, but also they injured their best player. (Inversión innecesaria en la segunda.)

2. "Neither...nor" requiere concordancia con el sujeto:
   - Si ambos sujetos son singulares: Neither John nor Mary HAS finished.
   - Si uno es plural: Neither the coach nor the players HAVE complained.
   - Si hay duda, el sujeto más cercano al verbo rige la concordancia (regla de proximidad).

3. "Neither...nor" al inicio DE LA PRIMERA CLÁUSULA puede requerir inversión también:
   - Neither did I agree with him, nor did I understand. (Ambas cláusulas con inversión para máximo dramatismo.)
   - Más común sin inversión: I neither agreed with him nor understood his point.

4. "Both...and" generalmente NO requiere inversión:
   - Both she and I are involved in the project.
   - ❌ Both did she and I involve (inversión no es natural aquí)

5. Comparación con niveles anteriores:
   - B1: Conocés "and", "but", "or" para conectar ideas simples.
   - B2: Ahora usás correlaciones para énfasis: "not only...but also" enfatiza adicionalidad, "neither...nor" enfatiza doble negación, "both...and" enfatiza coincidencia.`,
  examples: [
    { english: 'Not only did she pass the exam, but she also scored the highest mark in the class.', spanish: 'No solo pasó el examen, sino que también sacó la nota más alta de la clase.', note: 'Primera cláusula con inversión, segunda normal.' },
    { english: 'Neither John nor his sister has any experience with teaching.', spanish: 'Ni John ni su hermana tienen experiencia enseñando.', note: 'Dos sujetos singulares, verbo singular.' },
    { english: 'Both the book and the movie are excellent examples of science fiction.', spanish: 'Tanto el libro como la película son excelentes ejemplos de ciencia ficción.', note: 'Énfasis en dos cosas equivalentes.' },
    { english: 'Not only was the food delicious, but the service was also impeccable.', spanish: 'No solo la comida era deliciosa, sino que el servicio también era impecable.', note: 'Énfasis en múltiples aspectos positivos.' },
    { english: 'Neither did I expect the ending, nor was I prepared for the emotional impact.', spanish: 'Ni esperaba el desenlace, ni estaba preparado para el impacto emocional.', note: 'Ambas cláusulas con inversión para máximo dramatismo.' },
    { english: 'Both the players and the coach were frustrated with the decision.', spanish: 'Tanto los jugadores como el entrenador estaban frustrados con la decisión.', note: 'Énfasis en que múltiples grupos compartían el sentimiento.' },
  ],
  rule: `Fórmula de correlación con énfasis:

1. Not only + auxiliar + sujeto + verbo, but (also) + sujeto + verbo...
   → Not only did she win, but she also broke the record.
   → Not only are they talented, but they are also hardworking.

2. Neither + sujeto + verbo...nor + sujeto + verbo... (o Neither...nor sin inversión)
   → Neither John nor Mary has finished.
   → Neither did I agree, nor did I understand.

3. Both + sujeto + verbo + and + sujeto + verbo...
   → Both he and she are talented.
   → Both the book and the movie are excellent.

Reglas de inversión y concordancia:
1. "Not only" al inicio requiere inversión en la primera cláusula: auxiliar + sujeto + verbo.
2. "Neither...nor" con inversión en ambas cláusulas es muy formal: Neither did X...nor did Y...
3. Con "neither...nor", la concordancia depende del sujeto más cercano (en inglés moderno) o del sentido general (ambos singulares = verbo singular).
4. "Both...and" generalmente NO requiere inversión.
5. Es registro FORMAL, propio de escritura académica y narrativa dramática.`,
  formation: {
    title: 'Cómo se forman las estructuras de correlación con énfasis',
    intro: 'Estas estructuras enfatizan dos ideas a la vez. "Not only" al inicio exige inversión; "neither...nor" puede llevar inversión en ambas cláusulas; "both...and" usa orden normal.',
    patterns: [
      {
        name: 'Not only...but also — primera cláusula con inversión',
        formula: 'Not only + auxiliar + sujeto + verbo, but (also) + sujeto + verbo',
        examples: [
          { english: 'Not only did she win the race, but she also broke the record.', spanish: 'No solo ganó la carrera, sino que también rompió el récord.' },
          { english: 'Not only was the food delicious, but the service was also impeccable.', spanish: 'No solo la comida era deliciosa, sino que el servicio también era impecable.' },
        ],
        note: 'La primera cláusula lleva inversión; la segunda va en orden normal.',
      },
      {
        name: 'Neither...nor — dos negaciones enfatizadas',
        formula: 'Neither + sujeto + verbo... nor + sujeto + verbo (o con inversión)',
        examples: [
          { english: 'Neither John nor Mary has finished their project.', spanish: 'Ni John ni Mary han terminado su proyecto.' },
          { english: 'Neither did I agree with him, nor did I understand his point.', spanish: 'Ni estuve de acuerdo con él, ni entendí su punto.' },
        ],
        note: 'La concordancia depende del sujeto más cercano al verbo.',
      },
      {
        name: 'Both...and — dos cosas simultáneas',
        formula: 'Both + sujeto + verbo + and + sujeto + verbo',
        examples: [
          { english: 'Both the book and the movie are excellent examples of science fiction.', spanish: 'Tanto el libro como la película son excelentes ejemplos de ciencia ficción.' },
          { english: 'Both the players and the coach were frustrated with the decision.', spanish: 'Tanto los jugadores como el entrenador estaban frustrados con la decisión.' },
        ],
        note: '"Both...and" generalmente no requiere inversión.',
      },
    ],
    notes: [
      'Estas estructuras son propias del registro formal: escritura académica y narrativa dramática.',
      'Con "neither...nor", dos sujetos singulares llevan verbo singular ("has finished").',
      'En la segunda cláusula de "not only...but also", no se repite la inversión.',
    ],
  },
  commonMistakes: [
    { wrong: '❌ Not only she won the race, but she also broke the record.', correct: '✅ Not only did she win the race, but she also broke the record.', explanation: '"Not only" al inicio requiere inversión: "did" + sujeto + verbo, no sujeto + verbo.' },
    { wrong: '❌ Not only did she win, but also she broke the record.', correct: '✅ Not only did she win, but she also broke the record.', explanation: 'La segunda cláusula NO lleva inversión. Es "but (also) she/she also", no inversión.' },
    { wrong: '❌ Neither John nor Mary have finished.', correct: '✅ Neither John nor Mary has finished.', explanation: 'Con dos sujetos singulares conectados por "neither...nor", el verbo es singular.' },
    { wrong: '❌ Both did he and she are talented.', correct: '✅ Both he and she are talented.', explanation: '"Both...and" NO requiere inversión. Es orden normal: sujeto + verbo.' },
  ],
  vocabulary: [
    { word: 'correlation', translation_es: 'correlación', level: 'B2', category: 'grammar', partOfSpeech: 'noun', example: 'Not only...but also is a correlation structure.', exampleTranslation: '"Not only...but also" es una estructura de correlación.' },
    { word: 'to emphasize', translation_es: 'enfatizar', level: 'B2', category: 'general', partOfSpeech: 'verb', example: 'These structures emphasize importance.', exampleTranslation: 'Estas estructuras enfatizan la importancia.' },
    { word: 'simultaneous', translation_es: 'simultáneo', level: 'B2', category: 'adjectives', partOfSpeech: 'adjective', example: 'Both events happened simultaneously.', exampleTranslation: 'Ambos eventos ocurrieron simultáneamente.' },
    { word: 'impeccable', translation_es: 'impecable', level: 'B2', category: 'adjectives', partOfSpeech: 'adjective', example: 'The service was impeccable.', exampleTranslation: 'El servicio fue impecable.' },
    { word: 'to frustrate', translation_es: 'frustrar', level: 'B2', category: 'verbs', partOfSpeech: 'verb', example: 'The decision frustrated both groups.', exampleTranslation: 'La decisión frustró a ambos grupos.' },
    { word: 'concordance', translation_es: 'concordancia', level: 'B2', category: 'grammar', partOfSpeech: 'noun', example: 'Subject-verb concordance is important.', exampleTranslation: 'La concordancia sujeto-verbo es importante.' },
  ],
  grammarPoints: [
    {
      id: 'gp-b2-not-only-but-also',
      level: 'B2',
      name: 'Not only...but also with inversion',
      explanation_es: 'Estructura de correlación que enfatiza que algo sucedió Y ADEMÁS otras cosas. La primera cláusula lleva inversión (auxiliar + sujeto), la segunda es normal.',
      formula: 'Not only + auxiliar + sujeto + verbo, but (also) + sujeto + verbo...',
      examples: [
        'Not only did she win, but she also broke the record.',
        'Not only are they talented, but they are also hardworking.',
      ],
    },
    {
      id: 'gp-b2-neither-nor',
      level: 'B2',
      name: 'Neither...nor for emphasis',
      explanation_es: 'Estructura de correlación que enfatiza la negación de DOS cosas. Puede llevar inversión en ambas cláusulas para máximo dramatismo, o ser orden normal.',
      formula: 'Neither (+ auxiliar + sujeto) + verbo...nor (+ auxiliar + sujeto) + verbo...',
      examples: [
        'Neither John nor Mary has finished.',
        'Neither did I agree, nor did I understand.',
      ],
    },
    {
      id: 'gp-b2-both-and',
      level: 'B2',
      name: 'Both...and for emphasis',
      explanation_es: 'Estructura de correlación que enfatiza que DOS cosas comparten la misma característica. Generalmente NO requiere inversión.',
      formula: 'Both + sujeto + verbo + and + sujeto + verbo...',
      examples: [
        'Both he and she are talented.',
        'Both the book and the movie are excellent.',
      ],
    },
  ],
  exercises: [
    {
      id: 'b2-m7-l2-ex1',
      type: 'multiple_choice',
      concept: 'not only inversion',
      difficulty: 3,
      prompt: 'Completa: "Not only ___ she pass, but she also scored highest."',
      promptTranslation: 'No solo pasó, sino que también sacó la nota más alta.',
      correctAnswer: 'did',
      options: ['did', 'she', 'was'],
      explanation: '"Not only" al inicio requiere inversión con "did" (pasado simple) + sujeto + verbo.',
    },
    {
      id: 'b2-m7-l2-ex2',
      type: 'multiple_choice',
      concept: 'neither nor concordance',
      difficulty: 3,
      prompt: 'Completa: "Neither Tom nor Alex ___ the meeting tomorrow."',
      promptTranslation: 'Ni Tom ni Alex asistirá a la reunión mañana.',
      correctAnswer: 'is attending',
      options: ['is attending', 'are attending', 'will attend'],
      explanation: 'Con "neither...nor" y dos sujetos singulares, el verbo es singular. "Is attending" (presente continuo singular) o "will attend" (futuro) son válidos.',
    },
    {
      id: 'b2-m7-l2-ex3',
      type: 'fill_blank',
      concept: 'both and structure',
      difficulty: 2,
      prompt: 'Completa: "Both the director ___ the actors were satisfied with the filming."',
      promptTranslation: 'Tanto el director como los actores estaban satisfechos con la filmación.',
      correctAnswer: 'and',
      explanation: '"Both...and" conecta dos sujetos. El verbo plural "were" concuerda con ambos sujetos juntos.',
    },
    {
      id: 'b2-m7-l2-ex4',
      type: 'error_correction',
      concept: 'not only second clause',
      difficulty: 4,
      prompt: 'Corrige: "Not only did he work hard, but also he was very creative."',
      correctAnswer: 'Not only did he work hard, but he was also very creative.',
      acceptedAnswers: [
        'Not only did he work hard, but he was also very creative',
        'Not only did he work hard, but he was also very creative.',
      ],
      acceptApproximate: true,
      explanation: 'La segunda cláusula NO lleva inversión. Es "but (also) he was", no "but also he was" (aunque "also" es opcional).',
    },
    {
      id: 'b2-m7-l2-ex5',
      type: 'reorder',
      concept: 'not only word order',
      difficulty: 3,
      prompt: 'Ordena las palabras:',
      promptTranslation: 'No solo amaba leer, sino que también escribía historias.',
      words: ['Not', 'only', 'did', 'she', 'love', 'reading,', 'but', 'she', 'also', 'wrote', 'stories.'],
      correctAnswer: 'Not only did she love reading, but she also wrote stories.',
      explanation: '"Not only" + inversión (did + she + love), luego "but" + orden normal (she + also + wrote).',
    },
    {
      id: 'b2-m7-l2-ex6',
      type: 'translate',
      concept: 'neither nor translation',
      difficulty: 4,
      prompt: 'Traduce a inglés: "Ni el libro ni la película son perfectos."',
      correctAnswer: 'Neither the book nor the movie is perfect.',
      acceptedAnswers: [
        'Neither the book nor the movie are perfect.',
        'The book and movie are neither perfect.',
      ],
      acceptApproximate: true,
      explanation: '"Neither...nor" = Ni...ni. Con dos sujetos singulares, "is" es más formal, pero "are" también es aceptable.',
    },
    {
      id: 'b2-m7-l2-ex7',
      type: 'select_correct',
      concept: 'correlation emphasis level',
      difficulty: 4,
      prompt: 'Cuál opción tiene MÁS ÉNFASIS en la doble negación?',
      correctAnswer: 'Neither did I agree with him, nor did I understand his point.',
      options: [
        'Neither did I agree with him, nor did I understand his point.',
        'I neither agreed with him nor understood his point.',
        'I disagreed with him and did not understand his point.',
      ],
      explanation: 'La inversión en ambas cláusulas ("did I agree...nor did I") crea máximo énfasis y dramatismo.',
    },
    {
      id: 'b2-m7-l2-ex8',
      type: 'true_false',
      concept: 'both and inversion',
      difficulty: 3,
      prompt: '"Both he and she love traveling" no requiere inversión porque "both...and" no triggerean inversión como "not only".',
      correctAnswer: 'true',
      explanation: 'Correcto. "Both...and" es orden normal, sin inversión.',
    },
    {
      id: 'b2-m7-l2-ex9',
      type: 'listening',
      concept: 'emphasis structures in context',
      difficulty: 4,
      prompt: 'Escuchá el audio y respondé las preguntas.',
      correctAnswer: '',
      explanation: 'Un crítico de cine comenta sobre una película, usando estructuras de énfasis para resaltar tanto los méritos como los problemas.',
      listening: {
        audioText:
          'This film is truly exceptional. Not only is the cinematography stunning, but the dialogue is also incredibly witty. Both the lead actor and the supporting cast deliver outstanding performances. However, the ending disappointed me. Neither the plot twist nor the final scene felt satisfying. Still, both the director and the screenwriter created something memorable.',
        audioUrl: '/audio/tts/b2-m7-l2-ex9.mp3',
        questions: [
          {
            id: 'b2-m7-l2-ex9-q1',
            type: 'select_correct',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What two things does the critic praise about the film?',
            correctAnswer: 'The cinematography and the dialogue.',
            options: [
              'The cinematography and the dialogue.',
              'The actors and the ending.',
              'The plot and the twists.',
            ],
            explanation: '"Not only is the cinematography stunning, but the dialogue is also incredibly witty."',
          },
          {
            id: 'b2-m7-l2-ex9-q2',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'According to the critic, both the lead and supporting actors were excellent.',
            correctAnswer: 'true',
            explanation: '"Both the lead actor and the supporting cast deliver outstanding performances."',
          },
          {
            id: 'b2-m7-l2-ex9-q3',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What did the critic dislike about the ending?',
            correctAnswer: 'The plot twist and the final scene felt unsatisfying.',
            options: [
              'The plot twist and the final scene felt unsatisfying.',
              'The dialogue was too long.',
              'The actors could not perform it well.',
            ],
            explanation: '"Neither the plot twist nor the final scene felt satisfying."',
          },
        ],
      },
    },
    {
      id: 'b2-m7-l2-ex10',
      type: 'writing',
      concept: 'emphasis structures in review',
      difficulty: 4,
      prompt: 'Escribí una breve reseña (review) de un libro, película o experiencia que conocés. Usá al menos 2 estructuras de correlación (not only...but also, neither...nor, o both...and) para enfatizar tus opiniones.',
      promptTranslation: 'Write a short review using at least 2 emphasis structures (not only...but also, neither...nor, both...and).',
      correctAnswer: '',
      explanation: 'Una buena reseña usa las estructuras de correlación de forma natural para resaltar múltiples aspectos.',
      taskType: 'review',
      targetReader: 'readers of a magazine',
      register: 'neutral',
      contentPoints: [
        'Al menos 2 estructuras de correlación (not only, neither/nor, o both/and)',
        'Una opinión clara sobre el objeto de la reseña',
        'Detalle sobre aspectos específicos (actores, trama, escritura, etc.)',
      ],
      requiresOwnIdea: true,
      minWords: 80,
      maxWords: 130,
    },
    {
      id: 'b2-m7-l2-ex11',
      type: 'speaking',
      concept: 'emphasis structures pronunciation',
      difficulty: 3,
      prompt: 'Escuchá la frase modelo y repetila en voz alta.',
      correctAnswer: 'Not only is she a talented writer, but she is also an inspiring teacher.',
      explanation: 'Practicá la entonación: "Not only" recibe énfasis, luego "is she" (inversión) en tono decreciente. En "but also" se retoma el énfasis.',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b2-m7-l2-mt1',
      type: 'multiple_choice',
      concept: 'not only second clause',
      difficulty: 3,
      prompt: 'Completa: "Not only did they win the match, ___ they set a new record."',
      promptTranslation: 'No solo ganaron el partido, sino que también batieron un récord.',
      correctAnswer: 'but',
      options: ['but', 'and', 'so'],
      explanation: '"Not only...but" es la estructura correcta. Ni "and" ni "so" funcionan aquí.',
    },
    {
      id: 'b2-m7-l2-mt2',
      type: 'error_correction',
      concept: 'neither nor verb agreement',
      difficulty: 4,
      prompt: 'Corrige: "Neither the coach nor the players have a solution."',
      correctAnswer: 'Neither the coach nor the players have a solution.',
      acceptedAnswers: [
        'Neither the coach nor the players have a solution',
        'The coach and the players have no solution.',
      ],
      acceptApproximate: true,
      explanation: 'En realidad, esta oración es CORRECTA tal como está. "Players" (plural, más cercano al verbo) rige "have".',
    },
    {
      id: 'b2-m7-l2-mt3',
      type: 'true_false',
      concept: 'both and without inversion',
      difficulty: 2,
      prompt: '"Both the president and the ministers are attending the summit" es un ejemplo correcto sin inversión.',
      correctAnswer: 'true',
      explanation: 'Correcto. "Both...and" no requiere inversión, es orden normal.',
    },
  ],
  reviewItems: ['b2-m7-l1'],
  prerequisites: ['b2-m7-l1'],
}
