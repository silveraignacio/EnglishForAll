import type { Lesson } from '../../types'

export const lesson74MiniTest: Lesson = {
  id: 'b2-m7-l4',
  moduleId: 'm7-emphasis-inversion',
  order: 3,
  title: 'Mini-Test: Emphasis, Inversion & Focus',
  objective: 'Practicar y evaluar el dominio de todas las estructuras del módulo: inversión negativa, correlaciones, y focus structures.',
  explanation_es: `Este mini-test integra los tres conceptos principales del módulo:

1. **Inversión negativa** (Lesson 1): "Never before...", "No sooner...than", "Hardly...when"
2. **Correlaciones con énfasis** (Lesson 2): "Not only...but also", "Neither...nor", "Both...and"
3. **Focus structures y negación formal** (Lesson 3): "The [noun] is...", "do not", "will not", sin contracciones

El test incluye:
- Ejercicios de selección múltiple para reconocer estructuras
- Corrección de errores para practicar detalles de forma
- Traducción para demostrar comprensión integral
- Ejercicios de orden de palabras para consolidar patrones
- Un ejercicio de escritura para aplicar varios conceptos simultáneamente

Objetivo: consolidar el aprendizaje antes de pasar al siguiente módulo.`,
  examples: [
    { english: 'Never before have I encountered such creativity.', spanish: 'Nunca antes he encontrado tanta creatividad.', note: 'Inversión negativa.' },
    { english: 'Not only did she win, but she also broke a record.', spanish: 'No solo ganó, sino que también rompió un récord.', note: 'Correlación con énfasis.' },
    { english: 'The problem is that we do not have time.', spanish: 'El problema es que no tenemos tiempo.', note: 'Focus structure con negación formal.' },
    { english: 'Neither the manager nor the employees agree.', spanish: 'Ni el gerente ni los empleados están de acuerdo.', note: 'Correlación con neither...nor.' },
    { english: 'No sooner had we arrived than the meeting started.', spanish: 'Apenas habíamos llegado que empezó la reunión.', note: 'Inversión negativa con no sooner...than.' },
    { english: 'The fact is (that) we will not proceed without consensus.', spanish: 'La realidad es que no procederemos sin consenso.', note: 'Focus structure con negación formal.' },
  ],
  rule: `Repaso de estructuras clave:

1. INVERSIÓN NEGATIVA:
   - Never/Hardly/Scarcely + auxiliar + sujeto + verbo
   - No sooner + auxiliar + sujeto + que + otra acción
   - Uso: registro formal, énfasis dramático

2. CORRELACIONES:
   - Not only + auxiliar + sujeto + verbo, but (also) + orden normal
   - Neither...nor: puede llevar inversión en ambas cláusulas (máximo énfasis)
   - Both...and: orden normal, sin inversión
   - Uso: énfasis en dos ideas relacionadas

3. FOCUS STRUCTURES:
   - The [noun] is (that) + idea importante (noun, fact, thing, point, problem, reason, etc.)
   - Negación formal: do not, will not, have not, is not (sin contraer)
   - Uso: registro formal/académico, introducir puntos clave

Todo funciona en registro FORMAL y escrito. En habla cotidiana se usan formas más simples.`,
  commonMistakes: [
    { wrong: '❌ Never I have seen such a thing.', correct: '✅ Never have I seen such a thing.', explanation: 'Inversión: auxiliar ANTES que sujeto.' },
    { wrong: '❌ Not only she won, but also she broke the record.', correct: '✅ Not only did she win, but she also broke the record.', explanation: 'Primera cláusula con inversión y participio: did + she + win. Segunda sin inversión.' },
    { wrong: '❌ The problem is that we don\'t have time.', correct: '✅ The problem is that we do not have time.', explanation: 'Formal: "do not" sin contracción.' },
    { wrong: '❌ Neither Tom nor Sarah have finished their work.', correct: '✅ Neither Tom nor Sarah has finished their work.', explanation: 'Dos sujetos singulares con "neither...nor" requieren verbo singular.' },
  ],
  vocabulary: [
    { word: 'emphasis', translation_es: 'énfasis', level: 'B2', category: 'general', partOfSpeech: 'noun', example: 'The emphasis is on accuracy.', exampleTranslation: 'El énfasis está en la precisión.' },
    { word: 'inversion', translation_es: 'inversión', level: 'B2', category: 'grammar', partOfSpeech: 'noun', example: 'Subject-verb inversion creates drama.', exampleTranslation: 'La inversión sujeto-verbo crea dramatismo.' },
    { word: 'correlation', translation_es: 'correlación', level: 'B2', category: 'grammar', partOfSpeech: 'noun', example: 'Not only...but also is a correlation.', exampleTranslation: '"Not only...but also" es una correlación.' },
    { word: 'consensus', translation_es: 'consenso', level: 'B2', category: 'general', partOfSpeech: 'noun', example: 'We need consensus before deciding.', exampleTranslation: 'Necesitamos consenso antes de decidir.' },
    { word: 'dramatic', translation_es: 'dramático', level: 'B2', category: 'adjectives', partOfSpeech: 'adjective', example: 'The announcement was dramatic.', exampleTranslation: 'El anuncio fue dramático.' },
    { word: 'to consolidate', translation_es: 'consolidar', level: 'B2', category: 'verbs', partOfSpeech: 'verb', example: 'This exercise consolidates your learning.', exampleTranslation: 'Este ejercicio consolida tu aprendizaje.' },
  ],
  grammarPoints: [
    {
      id: 'gp-b2-module-review',
      level: 'B2',
      name: 'Module Review: Emphasis, Inversion & Focus',
      explanation_es: 'Repaso integrado de inversión negativa, estructuras de correlación, y focus structures con negación formal. Todos los mecanismos trabajan para dar énfasis y formalidad.',
      formula: 'Never/Not only/Neither/The [noun] is + variaciones según estructura',
      examples: [
        'Never have I seen such creativity.',
        'Not only did she win, but she also broke the record.',
        'The problem is that we do not have time.',
      ],
    },
  ],
  exercises: [
    {
      id: 'b2-m7-l4-ex1',
      type: 'multiple_choice',
      concept: 'negative inversion recognition',
      difficulty: 3,
      prompt: 'Completa: "Never ___ the team played so badly before."',
      promptTranslation: 'Nunca el equipo jugó tan mal antes.',
      correctAnswer: 'have',
      options: ['have', 'had', 'has'],
      explanation: 'Con "never" al inicio en presente perfecto, usamos "have" (sujeto "the team" = plural).',
    },
    {
      id: 'b2-m7-l4-ex2',
      type: 'multiple_choice',
      concept: 'not only inversion',
      difficulty: 3,
      prompt: 'Completa: "Not only ___ he work hard, but he also shows initiative."',
      promptTranslation: 'No solo trabaja duro, sino que también muestra iniciativa.',
      correctAnswer: 'does',
      options: ['does', 'he', 'is'],
      explanation: '"Not only" al inicio requiere inversión con "does" (presente simple).',
    },
    {
      id: 'b2-m7-l4-ex3',
      type: 'fill_blank',
      concept: 'focus structure noun',
      difficulty: 2,
      prompt: 'Completa: "The ___ is that we have exhausted all options."',
      promptTranslation: 'La realidad es que hemos agotado todas las opciones.',
      correctAnswer: 'fact',
      acceptedAnswers: ['reality'],
      explanation: '"The fact is" o "The reality is" son formas naturales de afirmar algo de manera formal.',
    },
    {
      id: 'b2-m7-l4-ex4',
      type: 'error_correction',
      concept: 'no sooner pattern',
      difficulty: 4,
      prompt: 'Corrige: "No sooner had we started the meeting when the fire alarm went off."',
      correctAnswer: 'No sooner had we started the meeting than the fire alarm went off.',
      acceptedAnswers: [
        'No sooner had we started the meeting than the fire alarm went off',
        'No sooner had we started the meeting than the fire alarm went off.',
      ],
      acceptApproximate: true,
      explanation: '"No sooner...than" usa "than", no "when". "When" es incorrecto en este contexto.',
    },
    {
      id: 'b2-m7-l4-ex5',
      type: 'error_correction',
      concept: 'formal negation contraction',
      difficulty: 3,
      prompt: 'Corrige para que sea formal: "I don\'t agree with this proposal."',
      correctAnswer: 'I do not agree with this proposal.',
      acceptedAnswers: [
        'I do not agree with this proposal',
        'I do not agree with this proposal.',
      ],
      acceptApproximate: true,
      explanation: 'Formal: "do not" sin contracción.',
    },
    {
      id: 'b2-m7-l4-ex6',
      type: 'reorder',
      concept: 'integrated structure construction',
      difficulty: 4,
      prompt: 'Ordena las palabras (combina inversión + focus):',
      promptTranslation: 'Nunca hemos visto tal cantidad de personas asistir, y eso es lo importante.',
      words: ['Never', 'have', 'we', 'seen', 'so', 'many', 'people', 'attend,', 'and', 'that', 'is', 'the', 'point.'],
      correctAnswer: 'Never have we seen so many people attend, and that is the point.',
      explanation: '"Never have we seen" (inversión) + "that is the point" (énfasis del punto).',
    },
    {
      id: 'b2-m7-l4-ex7',
      type: 'translate',
      concept: 'integrated structures translation',
      difficulty: 4,
      prompt: 'Traduce a inglés (formal): "No solo no está de acuerdo, sino que tampoco cooperará con nosotros."',
      correctAnswer: 'Not only does he not agree, but he will also not cooperate with us.',
      acceptedAnswers: [
        'Not only does he not agree, but he will not cooperate with us.',
        'Not only does he disagree, but he will not cooperate with us.',
      ],
      acceptApproximate: true,
      explanation: '"Not only...but also" con inversión en primera cláusula y negación formal en ambas.',
    },
    {
      id: 'b2-m7-l4-ex8',
      type: 'select_correct',
      concept: 'register and emphasis level',
      difficulty: 4,
      prompt: 'Cuál expresa máxima formalidad y énfasis?',
      correctAnswer: 'The problem is that neither the administration nor the faculty will proceed without proper authorization.',
      options: [
        'The problem is that neither the administration nor the faculty will proceed without proper authorization.',
        'The thing is, they won\'t proceed without permission.',
        'They don\'t wanna proceed without asking first.',
      ],
      explanation: 'Máxima formalidad: focus structure + "neither...nor" + "will" sin contracción + "proper authorization".',
    },
    {
      id: 'b2-m7-l4-ex9',
      type: 'listening',
      concept: 'integrated module concepts',
      difficulty: 4,
      prompt: 'Escuchá el audio y respondé las preguntas.',
      correctAnswer: '',
      explanation: 'Un speaker usa múltiples estructuras de énfasis en un discurso formal sobre una decisión importante.',
      listening: {
        audioText:
          'Good evening, colleagues. I must address the recent challenges our organization faces. The problem is that we have not reached consensus on the budget allocation. Never before have we faced such a critical decision. Not only must we cut costs, but we must also maintain quality. Neither the board nor the management team can proceed without proper consultation. The fact is that we will not move forward until every voice has been heard. The point is that both innovation and fiscal responsibility matter equally.',
        questions: [
          {
            id: 'b2-m7-l4-ex9-q1',
            type: 'select_correct',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What is the main problem mentioned?',
            correctAnswer: 'The organization has not reached consensus on budget allocation.',
            options: [
              'The organization has not reached consensus on budget allocation.',
              'The organization has no money.',
              'The board disagrees with management.',
            ],
            explanation: '"The problem is that we have not reached consensus on the budget allocation."',
          },
          {
            id: 'b2-m7-l4-ex9-q2',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'The speaker says this is the first time the organization faces such a critical decision.',
            correctAnswer: 'true',
            explanation: '"Never before have we faced such a critical decision."',
          },
          {
            id: 'b2-m7-l4-ex9-q3',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What two things must the organization balance?',
            correctAnswer: 'Innovation and fiscal responsibility.',
            options: [
              'Innovation and fiscal responsibility.',
              'Cost cutting and growth.',
              'Board approval and staff approval.',
            ],
            explanation: '"Both innovation and fiscal responsibility matter equally."',
          },
        ],
      },
    },
    {
      id: 'b2-m7-l4-ex10',
      type: 'writing',
      concept: 'integrated application of all module concepts',
      difficulty: 5,
      prompt: 'Escribí un breve argumento o propuesta formal (dirigido a una autoridad o institución) que integre al menos 3 estructuras distintas del módulo: una inversión negativa, una estructura de correlación (not only...but also, neither...nor, o both...and), y un focus structure. Mantén negación formal (do not, will not, etc.) en todo el texto.',
      promptTranslation: 'Write a formal argument integrating at least 3 module structures: negative inversion, correlation, and focus structure with formal negation.',
      correctAnswer: '',
      explanation: 'Un buen argumento formal integra múltiples técnicas de énfasis de manera natural y coherente.',
      taskType: 'essay',
      targetReader: 'a decision maker or authority',
      register: 'formal',
      contentPoints: [
        'Al menos una estructura de inversión negativa (never, no sooner, hardly)',
        'Al menos una estructura de correlación (not only...but also, neither...nor, o both...and)',
        'Al menos un focus structure (The [noun] is that...)',
        'Negación formal sin contracciones (do not, will not, have not)',
        'Un argumento claro y coherente',
      ],
      requiresOwnIdea: true,
      minWords: 120,
      maxWords: 180,
    },
  ],
  miniTest: [
    {
      id: 'b2-m7-l4-mt1',
      type: 'multiple_choice',
      concept: 'module review - inversion',
      difficulty: 3,
      prompt: 'Completa: "Hardly ___ we left the office ___ it started to pour rain."',
      promptTranslation: 'Apenas salimos de la oficina que empezó a llover a cántaros.',
      correctAnswer: 'had / than',
      options: ['had / than', 'have / when', 'did / and'],
      explanation: '"Hardly" requiere inversión con "had" (past perfect) y "than" para conectar (o "when" en algunos contextos modernos, pero "than" es más formal).',
    },
    {
      id: 'b2-m7-l4-mt2',
      type: 'error_correction',
      concept: 'module review - correlation',
      difficulty: 4,
      prompt: 'Corrige: "Not only she is talented, but she also has a great attitude."',
      correctAnswer: 'Not only is she talented, but she also has a great attitude.',
      acceptedAnswers: [
        'Not only is she talented, but she also has a great attitude',
        'Not only is she talented, but she also has a great attitude.',
      ],
      acceptApproximate: true,
      explanation: '"Not only" requiere inversión: "is she" (auxiliar + sujeto), no "she is".',
    },
    {
      id: 'b2-m7-l4-mt3',
      type: 'true_false',
      concept: 'module review - focus structure',
      difficulty: 3,
      prompt: '"The thing is that we cannot continue without proper training" es un buen ejemplo de focus structure con negación formal.',
      correctAnswer: 'true',
      explanation: 'Correcto. Usa "The thing is" (focus structure) y "cannot" (negación formal, sin contracción).',
    },
    {
      id: 'b2-m7-l4-mt4',
      type: 'select_correct',
      concept: 'module review - register',
      difficulty: 4,
      prompt: 'Cuál versión es más FORMAL y ACADÉMICA?',
      correctAnswer: 'The reason is that both the faculty and the administration do not support the proposal.',
      options: [
        'The reason is that both the faculty and the administration do not support the proposal.',
        'The thing is, they don\'t wanna support it.',
        'Neither the faculty nor the admin wants to support it.',
      ],
      explanation: 'Máxima formalidad: "The reason is" + "both...and" + "do not" sin contracción + "support" (formal).',
    },
  ],
  reviewItems: ['b2-m7-l1', 'b2-m7-l2', 'b2-m7-l3'],
  prerequisites: ['b2-m7-l3'],
}
