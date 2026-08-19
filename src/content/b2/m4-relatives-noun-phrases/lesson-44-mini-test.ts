import type { Lesson } from '../../types'

export const lesson44MiniTest: Lesson = {
  id: 'b2-m4-l4',
  moduleId: 'm4-relatives-noun-phrases',
  order: 3,
  title: 'Mini-test: Advanced Relative Clauses & Noun Phrases',
  objective: 'Consolidar el conocimiento de relativas avanzadas (whose, formal preposiciones, evaluativas, reducidas) y adjetivos compuestos/atributivos con un examen integrador.',
  explanation_es: `Este mini-test repasa todo el módulo m4:

1. WHOSE y preposición + which/whom (lección 1)
2. Relativas evaluativas con ", which" y adjetivos compuestos/atributivos (lección 2)
3. Relativas reducidas y "those" (lección 3)

El examen incluye ejercicios de varios tipos: multiple choice, error correction, true/false, traducci, select correct, listening, y un ejercicio de writing o speaking integrador.

Objetivo: alcanzar 80% para pasar (8 de 10 ejercicios correctos en el test principal).`,
  examples: [],
  rule: `Repaso de fórmulas clave:

1. WHOSE (posesión):
   noun + whose + noun + verb (defining) / noun, whose + noun + verb, (non-defining)

2. FORMAL PREPOSICIÓN + WHICH/WHOM:
   preposition + which (things) / preposition + whom (people) + rest

3. EVALUATIVA CON ", WHICH":
   complete clause + , which + verb (comenta la idea completa)

4. ADJETIVOS COMPUESTOS:
   adjective-adjective + noun (antes) / be + adjective adjective (después, sin guion)

5. ADJETIVOS SOLO ATRIBUTIVOS:
   former, future, present, sole, principal, mere (SOLO antes, NUNCA después de "be")

6. RELATIVAS REDUCIDAS:
   noun + past participle (pasivo) / noun + present participle (activo) / noun + adjective
   Those + reduced relative`,
  commonMistakes: [],
  vocabulary: [
    { word: 'to consolidate', translation_es: 'consolidar, reforzar', level: 'B2', category: 'verbs', partOfSpeech: 'verb', example: 'This test consolidates your learning.', exampleTranslation: 'Este examen consolida tu aprendizaje.' },
    { word: 'to assess', translation_es: 'evaluar, valorar', level: 'B2', category: 'verbs', partOfSpeech: 'verb', example: 'We need to assess your progress.', exampleTranslation: 'Necesitamos evaluar tu progreso.' },
  ],
  grammarPoints: [
    {
      id: 'gp-b2-relatives-summary',
      level: 'B2',
      name: 'Advanced relative clauses (all types)',
      explanation_es: 'Resumen de todas las estructuras de relativas avanzadas del módulo: whose, formal preposiciones, evaluativas, reducidas, y uso con "those".',
      formula: 'Multiple formulas — see lesson summaries',
      examples: [],
    },
  ],
  exercises: [
    {
      id: 'b2-m4-l4-ex1',
      type: 'multiple_choice',
      concept: 'whose in relative clauses',
      difficulty: 3,
      prompt: 'Completa: "The scientist ___ research has won the Nobel Prize is visiting our university."',
      promptTranslation: 'La científica cuya investigación ganó el Nobel visitará nuestra universidad.',
      correctAnswer: 'whose',
      options: ['whose', 'which', 'who'],
      explanation: 'WHOSE expresa posesión en relativas (la investigación pertenece a la científica).',
    },
    {
      id: 'b2-m4-l4-ex2',
      type: 'error_correction',
      concept: 'formal preposition + whom',
      difficulty: 4,
      prompt: 'Encuentra el error: "The mentor with who she worked is very supportive."',
      correctAnswer: 'The mentor with whom she worked is very supportive.',
      acceptedAnswers: [
        'The mentor with whom she worked is very supportive',
        'The mentor with whom she worked is very supportive.',
      ],
      acceptApproximate: true,
      explanation: 'Después de preposición en registro formal usamos WHOM (objeto), nunca WHO (sujeto).',
    },
    {
      id: 'b2-m4-l4-ex3',
      type: 'true_false',
      concept: 'non-defining relative commas',
      difficulty: 3,
      prompt: '"My colleague, whose brother is a doctor studies medicine" necesita correcciones de puntuación.',
      correctAnswer: 'true',
      explanation: 'Correcto. Las relativas NO DEFINIDORAS llevan comas ANTES y DESPUÉS: "My colleague, whose brother is a doctor, studies medicine."',
    },
    {
      id: 'b2-m4-l4-ex4',
      type: 'fill_blank',
      concept: 'evaluative which',
      difficulty: 3,
      prompt: 'Completa: "He got promoted, ___ was unexpected."',
      promptTranslation: 'Le dieron un ascenso, lo cual fue inesperado.',
      correctAnswer: 'which',
      explanation: 'En relativas evaluativas NO DEFINIDORAS usamos "which" con coma: ", which" (comenta toda la idea anterior).',
    },
    {
      id: 'b2-m4-l4-ex5',
      type: 'translate',
      concept: 'compound adjectives',
      difficulty: 4,
      prompt: 'Traduce: "Necesitamos tecnología de última generación para el proyecto."',
      correctAnswer: 'We need state-of-the-art technology for the project.',
      acceptedAnswers: [
        'We need state-of-the-art technology for the project',
        'We need state of the art technology for the project',
        'We need state-of-the-art technology for the project.',
      ],
      acceptApproximate: true,
      explanation: '"State-of-the-art" (con guion) va ANTES del sustantivo. Sin guion después de "be": "The technology is state of the art."',
    },
    {
      id: 'b2-m4-l4-ex6',
      type: 'select_correct',
      concept: 'attribute-only adjectives',
      difficulty: 4,
      prompt: '¿Cuál es GRAMATICALMENTE CORRECTA?',
      correctAnswer: 'The former president attended the event.',
      options: [
        'The president is former and respected.',
        'The former president attended the event.',
        'The president, who is former, attended the event.',
      ],
      explanation: '"Former" es SOLO atributivo; va ANTES del sustantivo ("The former president"), NUNCA después de "be".',
    },
    {
      id: 'b2-m4-l4-ex7',
      type: 'multiple_choice',
      concept: 'reduced relatives with participles',
      difficulty: 3,
      prompt: 'Forma reducida de "The report which was submitted last week":',
      correctAnswer: 'The report submitted last week',
      options: [
        'The report submitted last week',
        'The report submitting last week',
        'The report being submitted last week',
      ],
      explanation: 'Participio PASADO (submitted) reduce relativas pasivas: "which was submitted" → "submitted".',
    },
    {
      id: 'b2-m4-l4-ex8',
      type: 'true_false',
      concept: 'those with reduced relative',
      difficulty: 3,
      prompt: '"Those interested in the scholarship should submit their applications" es gramaticalmente correcta.',
      correctAnswer: 'true',
      explanation: 'Correcto. "Those interested" = "Those who are interested". Forma muy común en inglés formal.',
    },
    {
      id: 'b2-m4-l4-ex9',
      type: 'listening',
      concept: 'comprehensive listening on all topics',
      difficulty: 4,
      prompt: 'Escuchá el audio y respondé las preguntas (en inglés, sobre lo que dice).',
      correctAnswer: '',
      explanation: 'Un director habla sobre cambios en su institución, usando relativas de todos los tipos del módulo.',
      listening: {
        audioText:
          "Our institution, whose mission is to provide excellent education, has made significant changes this year. The new facilities, which are state-of-the-art, have improved our capabilities dramatically. Our former principal, whose dedication was inspiring, led us through a transformation that no one expected, which changed everything. We now have programs designed for those interested in technology and science. The innovative solutions developed by our team are being recognized globally. Candidates eligible for leadership roles should contact the administration. The technologies adopted by us, which represent the future of education, are already showing impressive results.",
        audioUrl: '/audio/tts/b2-m4-l4-ex9.mp3',
        questions: [
          {
            id: 'b2-m4-l4-ex9-q1',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'The institution\'s mission is to provide entertainment.',
            correctAnswer: 'false',
            explanation: '"The institution, whose mission is to provide excellent education" — misión es proporcionar educación excelente.',
          },
          {
            id: 'b2-m4-l4-ex9-q2',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What does the audio say about the new facilities?',
            correctAnswer: 'They are state-of-the-art',
            options: [
              'They are outdated',
              'They are state-of-the-art',
              'They need improvement',
            ],
            explanation: '"The new facilities, which are state-of-the-art, have improved our capabilities."',
          },
          {
            id: 'b2-m4-l4-ex9-q3',
            type: 'select_correct',
            concept: 'listening evaluative clause',
            difficulty: 4,
            prompt: 'According to the audio, what was unexpected?',
            correctAnswer: 'The transformation that changed everything',
            options: [
              'The new staff members',
              'The transformation that changed everything',
              'The resignation of the principal',
            ],
            explanation: '"A transformation that no one expected, which changed everything" — la transformación fue inesperada.',
          },
        ],
      },
    },
    {
      id: 'b2-m4-l4-ex10',
      type: 'writing',
      concept: 'comprehensive writing integrating all topics',
      difficulty: 4,
      prompt: 'Escribí un breve artículo (120-180 palabras) describiendo una institución, organización o empresa importante para vos. Usá al menos: 1 relativa con "whose", 1 relativa evaluativa con ", which", 1 relativa reducida, 1 adjetivo compuesto, y 1 uso de "those".',
      promptTranslation: 'Write an article about an important organization using various relative structures.',
      correctAnswer: '',
      explanation: 'Un buen artículo integra todas las estructuras del módulo de forma natural y elegante.',
      taskType: 'article',
      targetReader: 'your teacher',
      register: 'formal',
      contentPoints: [
        'Al menos 1 relativa con "whose"',
        'Al menos 1 relativa evaluativa con ", which"',
        'Al menos 1 relativa reducida (participio o adjetivo)',
        'Al menos 1 adjetivo compuesto',
        'Al menos 1 frase con "those" + participio/adjetivo',
      ],
      requiresOwnIdea: true,
      minWords: 120,
      maxWords: 180,
    },
  ],
  miniTest: [
    {
      id: 'b2-m4-l4-mt1',
      type: 'multiple_choice',
      concept: 'whose possession',
      difficulty: 3,
      prompt: 'Completa: "The teacher ___ class is very popular is known for her engaging lessons."',
      correctAnswer: 'whose',
      options: ['whose', 'which', 'who'],
      explanation: 'WHOSE expresa posesión; la clase pertenece a la maestra.',
    },
    {
      id: 'b2-m4-l4-mt2',
      type: 'error_correction',
      concept: 'evaluative which and commas',
      difficulty: 4,
      prompt: 'Corrige: "She passed all her exams which was amazing."',
      correctAnswer: 'She passed all her exams, which was amazing.',
      acceptedAnswers: [
        'She passed all her exams, which was amazing',
        'She passed all her exams, which was amazing.',
      ],
      acceptApproximate: true,
      explanation: 'Las relativas evaluativas NO DEFINIDORAS llevan coma ANTES de "which": ", which" (comenta la idea completa).',
    },
    {
      id: 'b2-m4-l4-mt3',
      type: 'true_false',
      concept: 'reduced relatives',
      difficulty: 3,
      prompt: '"The solution proposed by the team" es una forma correcta de relativa reducida.',
      correctAnswer: 'true',
      explanation: 'Correcto. El participio pasado (proposed) reduce "which was proposed".',
    },
    {
      id: 'b2-m4-l4-mt4',
      type: 'select_correct',
      concept: 'compound adjectives and attribute-only',
      difficulty: 4,
      prompt: '¿Cuál es GRAMATICALMENTE CORRECTA?',
      correctAnswer: 'The company has up-to-date equipment and forward-looking plans.',
      options: [
        'The company has up to date equipment and forward looking plans.',
        'The company has up-to-date equipment and forward-looking plans.',
        'The company is up-to-date and its plans are forward-looking.',
      ],
      explanation: 'Los adjetivos compuestos llevan guion ANTES del sustantivo (up-to-date equipment). "Forward-looking" es un adjetivo compuesto correcto.',
    },
  ],
  reviewItems: ['b2-m4-l1', 'b2-m4-l2', 'b2-m4-l3'],
  prerequisites: ['b2-m4-l3'],
}
