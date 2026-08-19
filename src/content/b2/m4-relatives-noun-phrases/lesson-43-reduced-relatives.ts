import type { Lesson } from '../../types'

export const lesson43ReducedRelatives: Lesson = {
  id: 'b2-m4-l3',
  moduleId: 'm4-relatives-noun-phrases',
  order: 2,
  title: 'Reduced relative clauses',
  objective: 'Usar formas reducidas de relativas (participios, adjetivos, sintagmas preposicionales) para escribir de forma más concisa y elegante; dominar "those" + relativa reducida.',
  explanation_es: `Las relativas pueden "reducirse" (acortarse) eliminando el pronombre relativo y el verbo auxiliar "be", dejando solo un participio, un adjetivo o un sintagma preposicional. Esto hace que el texto sea más conciso y más formal.

FORMAS DE REDUCCIÓN:

1. RELATIVA CON "BEING" → elimina "being" y el pronombre:
   - "The person being interviewed" → "The person interviewed"
   - "The document being reviewed" → "The document reviewed"
   Estructura: noun + past participle

2. RELATIVA ACTIVA CON PARTICIPIO PRESENTE → elimina el pronombre y cambia a -ing:
   - "The students who are studying" → "The students studying"
   - "Anyone who wants to join" → "Anyone wanting to join"
   Estructura: noun + present participle (-ing)

3. RELATIVA PASIVA CON "BE" → elimina el pronombre y "be":
   - "The book which was written by her" → "The book written by her"
   - "The report that was submitted last week" → "The report submitted last week"
   Estructura: noun + past participle

4. RELATIVA CON ADJETIVOS → elimina el pronombre y "be":
   - "The students who are interested" → "The students interested" (o "interested students")
   - "Anyone who is eligible" → "Anyone eligible"
   Estructura: noun + adjective

5. SINTAGMAS ADJETIVALES COMPLEJOS Y PREPOSICIONALES:
   - "A solution to the problem" = A solution (to the problem) — sintagma preposicional postmodificador
   - "The book on the shelf" = sintagma locativo postmodificador
   - "A person with experience" = person + preposicional phrase

USO CON "THOSE":
- "Those interested in the project should apply." = Aquellos interesados en el proyecto deben postularse.
- "Those working on the new system are making progress." = Quienes trabajan en el nuevo sistema están progresando.
- "Those concerned should contact the office." = Los interesados deben contactar la oficina.

"Those" + reduced relative es muy útil para referirse a un grupo de personas que comparten una característica.

Comparación con B1:
- B1: relativas simples completas ("The student who works hard...")
- B2: formas reducidas para concisión y elegancia, especialmente con "those"`,
  examples: [
    { english: 'The book written by the author became a bestseller.', spanish: 'El libro escrito por el autor se convirtió en un bestseller.', note: 'Participio pasado: "written" reduce "which was written".' },
    { english: 'The students interested in science should attend the lecture.', spanish: 'Los estudiantes interesados en ciencia deben asistir a la conferencia.', note: 'Adjetivo reducido: "interested" reduce "who are interested".' },
    { english: 'Anyone wanting to participate should register online.', spanish: 'Cualquiera que quiera participar debe registrarse en línea.', note: 'Participio presente: "wanting" reduce "who want".' },
    { english: 'The person standing at the door is the director.', spanish: 'La persona parada a la puerta es la directora.', note: 'Participio presente: "standing" reduce "who is standing".' },
    { english: 'Those concerned about the changes should speak up.', spanish: 'Quienes estén preocupados por los cambios deberían hablar.', note: '"Those" + adjetivo reducido; forma muy común en inglés formal.' },
    { english: 'The report submitted last week contained important data.', spanish: 'El informe presentado la semana pasada contenía datos importantes.', note: 'Participio pasado: "submitted" reduce "which was submitted".' },
  ],
  rule: `Fórmula:

1. REDUCED RELATIVAS CON PARTICIPIO PASADO (pasivo):
   noun + past participle + (by/other words)

   Ejemplos:
   - "The book written by her" (= the book which was written by her)
   - "The project completed on time" (= the project which was completed on time)

2. REDUCED RELATIVAS CON PARTICIPIO PRESENTE (activo):
   noun + present participle (-ing) + (by/other words)

   Ejemplos:
   - "The students studying hard" (= the students who are studying hard)
   - "Anyone wanting to join" (= anyone who wants to join)

3. REDUCED RELATIVAS CON ADJETIVOS:
   noun + adjective + (preposition/other words)

   Ejemplos:
   - "The person responsible for this" (= the person who is responsible)
   - "Those interested in science" (= those who are interested in science)

4. SINTAGMAS PREPOSICIONALES COMO POSTMODIFICADORES:
   noun + prepositional phrase

   Ejemplos:
   - "The book on the shelf" (= the book which is on the shelf)
   - "The person with the most experience" (= the person who has the most experience)

5. USO CON "THOSE":
   Those + participle/adjective + (prepositional phrase)

   Ejemplos:
   - "Those interested should apply."
   - "Those working on the project are making progress."

Reglas clave:
- La reducción elimina el pronombre relativo y el verbo auxiliar (be, am, is, are).
- Se puede usar con defining y non-defining relatives (con comas si es no-defining).
- Los participios y adjetivos funcionan como postmodificadores del sustantivo.
- "Those" + reduced relative es una forma elegante y común en textos formales.`,
  formation: {
    title: 'Cómo se forman las relativas reducidas',
    intro: 'Reducir una relativa consiste en eliminar el pronombre relativo y el verbo "be", dejando solo un participio, un adjetivo o un sintagma preposicional. Esto hace el texto más conciso y formal.',
    patterns: [
      {
        name: 'Relativa pasiva con participio pasado',
        formula: 'Sustantivo + participio pasado + (complemento)',
        examples: [
          { english: 'The book written by the author became a bestseller.', spanish: 'El libro escrito por el autor se convirtió en un bestseller.' },
          { english: 'The report submitted last week contained important data.', spanish: 'El informe presentado la semana pasada contenía datos importantes.' },
        ],
        note: 'Reduce "which was written" → "written".',
      },
      {
        name: 'Relativa activa con participio presente',
        formula: 'Sustantivo + participio presente (-ing) + (complemento)',
        examples: [
          { english: 'The students studying hard will pass the exam.', spanish: 'Los estudiantes que estudian mucho aprobarán el examen.' },
          { english: 'Anyone wanting to participate should register online.', spanish: 'Cualquiera que quiera participar debe registrarse en línea.' },
        ],
        note: 'Reduce "who are studying" → "studying".',
      },
      {
        name: 'Relativa con adjetivo',
        formula: 'Sustantivo + adjetivo + (preposición + complemento)',
        examples: [
          { english: 'The students interested in science should attend the lecture.', spanish: 'Los estudiantes interesados en ciencia deben asistir a la conferencia.' },
          { english: 'Anyone eligible for the scholarship must apply before May.', spanish: 'Cualquiera elegible para la beca debe postularse antes de mayo.' },
        ],
        note: 'Reduce "who are interested" → "interested".',
      },
      {
        name: 'Sintagma preposicional como postmodificador',
        formula: 'Sustantivo + sintagma preposicional',
        examples: [
          { english: 'The book on the shelf is mine.', spanish: 'El libro sobre el estante es mío.' },
          { english: 'The person with the most experience should lead the team.', spanish: 'La persona con más experiencia debería liderar el equipo.' },
        ],
        note: 'Funciona cuando la relativa expresa ubicación o característica.',
      },
      {
        name: 'Those + relativa reducida',
        formula: 'Those + participio/adjetivo + (sintagma preposicional)',
        examples: [
          { english: 'Those interested in the project should apply.', spanish: 'Aquellos interesados en el proyecto deben postularse.' },
          { english: 'Those concerned about the changes should speak up.', spanish: 'Quienes estén preocupados por los cambios deberían hablar.' },
        ],
        note: 'Forma elegante y común en textos formales para referirse a un grupo.',
      },
    ],
    notes: [
      'La reducción solo es posible cuando la relativa original contiene "who/which + be" (am, is, are, was, were).',
      'Con no definidoras, la relativa reducida conserva las comas.',
      'El participio pasado suele tener sentido pasivo; el participio presente, sentido activo.',
    ],
  },
  commonMistakes: [
    { wrong: '❌ The students studying hard are the success of the class.', correct: '✅ The students studying hard are the success of the class.', explanation: 'En realidad esta frase es CORRECTA. El participio "studying" reduce la relativa "who are studying".' },
    { wrong: '❌ The person interested in the job has called three times.', correct: '✅ The person interested in the job has called three times.', explanation: 'Esta frase también es CORRECTA. El adjetivo "interested" reduce "who is interested".' },
    { wrong: '❌ Anyone wanting to participate in the project should contact us.', correct: '✅ Anyone wanting to participate in the project should contact us.', explanation: 'CORRECTA. "Wanting" reduce "who wants".' },
    { wrong: '❌ The book writing by the author is famous.', correct: '✅ The book written by the author is famous.', explanation: 'Debe ser "written" (participio pasado, pasivo: fue escrito), no "writing" (participio presente, activo).' },
    { wrong: '❌ Those students interested in science, should attend the lecture.', correct: '✅ Those students interested in science should attend the lecture.', explanation: 'NO lleva coma entre "science" y "should" en una cláusula defining. Si fuera non-defining, la coma iría después del sustantivo y después de la relativa reducida.' },
  ],
  vocabulary: [
    { word: 'to reduce', translation_es: 'reducir, acortar', level: 'B2', category: 'verbs', partOfSpeech: 'verb', example: 'We need to reduce the text length.', exampleTranslation: 'Necesitamos reducir la longitud del texto.' },
    { word: 'reduced', translation_es: 'reducido, acortado', level: 'B2', category: 'adjectives', partOfSpeech: 'adjective', example: 'This is a reduced version of the report.', exampleTranslation: 'Esta es una versión reducida del informe.' },
    { word: 'postmodifier', translation_es: 'postmodificador', level: 'B2', category: 'grammar', partOfSpeech: 'noun', example: 'Participles are common postmodifiers in English.', exampleTranslation: 'Los participios son postmodificadores comunes en inglés.' },
    { word: 'elegantly', translation_es: 'elegantemente', level: 'B2', category: 'adverbs', partOfSpeech: 'adverb', example: 'The sentence is written elegantly.', exampleTranslation: 'La oración está escrita elegantemente.' },
    { word: 'concise', translation_es: 'conciso, breve', level: 'B2', category: 'adjectives', partOfSpeech: 'adjective', example: 'A concise explanation is more effective.', exampleTranslation: 'Una explicación concisa es más efectiva.' },
    { word: 'eligible', translation_es: 'elegible, calificado', level: 'B2', category: 'adjectives', partOfSpeech: 'adjective', example: 'Candidates eligible for the scholarship must apply before May.', exampleTranslation: 'Los candidatos elegibles para la beca deben postularse antes de mayo.' },
  ],
  grammarPoints: [
    {
      id: 'gp-b2-reduced-relatives-participles',
      level: 'B2',
      name: 'reduced relative clauses with participles',
      explanation_es: 'Los participios pasados (written, completed) reducen relativas pasivas: "the book written" = "the book which was written". Los participios presentes (writing, studying) reducen relativas activas: "students studying" = "students who are studying".',
      formula: 'noun + past participle (passive) / noun + present participle (active)',
      examples: ['The book written by her', 'The students studying hard', 'Problems solved recently', 'People working in IT'],
    },
    {
      id: 'gp-b2-reduced-relatives-adjectives',
      level: 'B2',
      name: 'reduced relative clauses with adjectives',
      explanation_es: 'Los adjetivos también pueden funcionar como postmodificadores reducidos: "people interested" = "people who are interested"; "anyone eligible" = "anyone who is eligible".',
      formula: 'noun + adjective + (prepositional phrase)',
      examples: ['The person responsible', 'Anyone interested in science', 'Those eligible for the program', 'Children concerned about the environment'],
    },
    {
      id: 'gp-b2-those-reduced-relative',
      level: 'B2',
      name: 'those + reduced relative clauses',
      explanation_es: '"Those" + participio/adjetivo reducido es una forma elegante y concisa para referirse a un grupo: "Those interested should apply" (= The people who are interested).',
      formula: 'Those + participle/adjective + (prepositional phrase)',
      examples: ['Those interested in science', 'Those working on the project', 'Those concerned about changes', 'Those eligible for the position'],
    },
  ],
  exercises: [
    {
      id: 'b2-m4-l3-ex1',
      type: 'multiple_choice',
      concept: 'reduced relative with past participle',
      difficulty: 3,
      prompt: 'Qué forma de relativa reduce "The book which was written by the author"?',
      promptTranslation: 'Which reduced form is correct?',
      correctAnswer: 'The book written by the author',
      options: [
        'The book written by the author',
        'The book writing by the author',
        'The book being written by the author',
      ],
      explanation: 'El participio PASADO (written) reduce relativas pasivas. "Writing" sería para "the book which is writing" (incorrecto).',
    },
    {
      id: 'b2-m4-l3-ex2',
      type: 'fill_blank',
      concept: 'reduced relative with present participle',
      difficulty: 3,
      prompt: 'Completa: "The students ___ for the exam are very focused."',
      promptTranslation: 'The students ___ for the exam are very focused.',
      correctAnswer: 'studying',
      explanation: 'El participio PRESENTE (studying) reduce relativas activas: "students studying" = "students who are studying".',
    },
    {
      id: 'b2-m4-l3-ex3',
      type: 'true_false',
      concept: 'those with reduced relative',
      difficulty: 3,
      prompt: '"Those interested in the project should apply" es una forma correcta de relativa reducida.',
      correctAnswer: 'true',
      explanation: 'Correcto. "Those interested" = "Those who are interested". Es una forma muy común en inglés formal.',
    },
    {
      id: 'b2-m4-l3-ex4',
      type: 'error_correction',
      concept: 'past vs present participle',
      difficulty: 4,
      prompt: 'Encuentra el error: "The project completing by the team was successful."',
      correctAnswer: 'The project completed by the team was successful.',
      acceptedAnswers: [
        'The project completed by the team was successful',
        'The project completed by the team was successful.',
      ],
      acceptApproximate: true,
      explanation: '"Completed" (participio pasado, pasivo: fue completado) es correcto. "Completing" sería para "the project completing the task" (el proyecto completando la tarea), que no tiene sentido aquí.',
    },
    {
      id: 'b2-m4-l3-ex5',
      type: 'translate',
      concept: 'reduced relative translation',
      difficulty: 4,
      prompt: 'Traduce: "Los candidatos interesados en la beca deben postularse antes de junio."',
      correctAnswer: 'The candidates interested in the scholarship should apply before June.',
      acceptedAnswers: [
        'The candidates interested in the scholarship should apply before June',
        'The candidates interested in the scholarship must apply before June',
        'The candidates interested in the scholarship should apply before June.',
      ],
      acceptApproximate: true,
      explanation: '"Interested" (adjetivo reducido) = "who are interested". "Interesados en" = "interested in".',
    },
    {
      id: 'b2-m4-l3-ex6',
      type: 'select_correct',
      concept: 'reduced relative conciseness',
      difficulty: 4,
      prompt: '¿Cuál es la forma MÁS CONCISA y ELEGANTE?',
      correctAnswer: 'The report submitted last week is very important.',
      options: [
        'The report which was submitted last week is very important.',
        'The report submitted last week is very important.',
        'The report that was submitted last week is very important.',
      ],
      explanation: 'La forma reducida ("submitted") es más concisa y elegante que la relativa completa ("which was submitted").',
    },
    {
      id: 'b2-m4-l3-ex7',
      type: 'reorder',
      concept: 'reduced relative word order',
      difficulty: 3,
      prompt: 'Ordena las palabras:',
      promptTranslation: 'Those working on the project are making good progress.',
      words: ['Those', 'working', 'on', 'the', 'project', 'are', 'making', 'good', 'progress.'],
      correctAnswer: 'Those working on the project are making good progress.',
      explanation: 'Orden: Those + present participle (working) + prepositional phrase (on the project) + verbo.',
    },
    {
      id: 'b2-m4-l3-ex8',
      type: 'match',
      concept: 'matching full and reduced relatives',
      difficulty: 4,
      prompt: 'Empareja cada RELATIVA COMPLETA con su forma REDUCIDA.',
      correctAnswer: '',
      pairs: [
        { left: 'The students who are studying hard', right: 'The students studying hard' },
        { left: 'The report which was completed on time', right: 'The report completed on time' },
        { left: 'Anyone who is interested in science', right: 'Anyone interested in science' },
        { left: 'The people who are working on this project', right: 'The people working on this project' },
      ],
      explanation: 'Las formas reducidas usan participios (present/past) o adjetivos en lugar de pronombres relativos y verbos auxiliares.',
    },
    {
      id: 'b2-m4-l3-ex9',
      type: 'listening',
      concept: 'reduced relatives listening',
      difficulty: 4,
      prompt: 'Escuchá el audio y respondé las preguntas (en inglés, sobre lo que dice).',
      correctAnswer: '',
      explanation: 'Un coordinador habla sobre un proyecto, usando muchas relativas reducidas con participios y "those".',
      listening: {
        audioText:
          "The project completed last month was very successful. The team working on it included specialists from different fields. Those selected for the leadership role performed exceptionally. The innovative solutions developed by the team have impressed everyone. Anyone interested in joining future projects should contact the office. The data collected from our research shows excellent results, which proves the effectiveness of our methods. Candidates eligible for promotion will be announced next week.",
        audioUrl: '/audio/tts/b2-m4-l3-ex9.mp3',
        questions: [
          {
            id: 'b2-m4-l3-ex9-q1',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'The project is still being completed.',
            correctAnswer: 'false',
            explanation: '"The project completed last month" — el proyecto ya fue completado.',
          },
          {
            id: 'b2-m4-l3-ex9-q2',
            type: 'multiple_choice',
            concept: 'listening comprehension reduced relatives',
            difficulty: 3,
            prompt: 'What does the audio say about the team?',
            correctAnswer: 'It included specialists from different fields',
            options: [
              'It was too small',
              'It included specialists from different fields',
              'It was replaced recently',
            ],
            explanation: '"The team working on it included specialists from different fields."',
          },
          {
            id: 'b2-m4-l3-ex9-q3',
            type: 'select_correct',
            concept: 'listening comprehension those',
            difficulty: 4,
            prompt: 'According to the audio, what should people do if they are interested?',
            correctAnswer: 'Contact the office',
            options: [
              'Wait for a phone call',
              'Contact the office',
              'Submit a form online',
            ],
            explanation: '"Anyone interested in joining future projects should contact the office."',
          },
        ],
      },
    },
    {
      id: 'b2-m4-l3-ex10',
      type: 'writing',
      concept: 'reduced relatives in formal writing',
      difficulty: 4,
      prompt: 'Escribí un breve informe (100-150 palabras) describiendo un proyecto exitoso en tu escuela/trabajo. Usá al menos 3 relativas reducidas (con participios o adjetivos) y al menos 1 frase con "those".',
      promptTranslation: 'Write about a successful project using reduced relatives and "those".',
      correctAnswer: '',
      explanation: 'Un buen informe usa relativas reducidas para un tono más formal y conciso, incluyendo "those" para referirse a grupos específicos.',
      taskType: 'report',
      targetReader: 'your manager',
      register: 'formal',
      contentPoints: [
        'Al menos 3 relativas reducidas (participios o adjetivos)',
        'Al menos 1 frase con "those" + participio/adjetivo',
        'Descripción clara del proyecto y sus resultados',
      ],
      requiresOwnIdea: true,
      minWords: 100,
      maxWords: 150,
    },
    {
      id: 'b2-m4-l3-ex11',
      type: 'speaking',
      concept: 'reduced relatives pronunciation',
      difficulty: 2,
      prompt: 'Escuchá la frase modelo y repetila en voz alta.',
      correctAnswer: 'Those interested in the program should apply by the end of the month.',
      explanation: 'Practicá la pronunciación natural de "interested" y la entonación de una frase con "those" + reduced relative.',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b2-m4-l3-mt1',
      type: 'multiple_choice',
      concept: 'reducing relative clauses',
      difficulty: 3,
      prompt: 'La forma reducida de "The book which was published last year" es:',
      correctAnswer: 'The book published last year',
      options: [
        'The book published last year',
        'The book publishing last year',
        'The book being published last year',
      ],
      explanation: '"Published" (participio pasado) reduce la relativa pasiva "which was published".',
    },
    {
      id: 'b2-m4-l3-mt2',
      type: 'error_correction',
      concept: 'present participle reduced relative',
      difficulty: 3,
      prompt: 'Corrige: "The athletes training for the Olympics is very dedicated."',
      correctAnswer: 'The athletes training for the Olympics are very dedicated.',
      acceptedAnswers: [
        'The athletes training for the Olympics are very dedicated',
        'The athletes training for the Olympics are very dedicated.',
      ],
      acceptApproximate: true,
      explanation: '"Athletes" (plural) necesita "are" (plural), no "is" (singular). El participio "training" es correcto.',
    },
    {
      id: 'b2-m4-l3-mt3',
      type: 'true_false',
      concept: 'those with reduced relative',
      difficulty: 3,
      prompt: '"Those concerned about the changes should speak to the manager" es una frase gramaticalmente correcta.',
      correctAnswer: 'true',
      explanation: 'Correcto. "Those concerned" = "Those who are concerned". Es una forma común en inglés formal.',
    },
    {
      id: 'b2-m4-l3-mt4',
      type: 'select_correct',
      concept: 'reduced relative elegance',
      difficulty: 4,
      prompt: '¿Cuál es la forma más ELEGANTE?',
      correctAnswer: 'The solution proposed by the team is innovative.',
      options: [
        'The solution which was proposed by the team is innovative.',
        'The solution proposed by the team is innovative.',
        'The solution that is proposed by the team is innovative.',
      ],
      explanation: 'La forma reducida ("proposed") es más elegante y concisa que la relativa completa.',
    },
  ],
  reviewItems: ['b2-m4-l1', 'b2-m4-l2'],
  prerequisites: ['b2-m4-l2'],
}
