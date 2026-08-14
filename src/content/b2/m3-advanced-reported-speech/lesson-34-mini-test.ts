import type { Lesson } from '../../types'

export const lesson34MiniTest: Lesson = {
  id: 'b2-m3-l4',
  moduleId: 'm3-advanced-reported-speech',
  order: 3,
  title: 'Mini-test: Advanced Reported Speech',
  objective: 'Evaluar el dominio integral de reportes avanzados: verbos de reporte con patrones variados, órdenes negativas con backshift, posición de cláusula de reporte, y citas académicas.',
  explanation_es: `Este mini-test repasa TODO el módulo de Advanced Reported Speech. Vas a practicar:

- Los tres patrones de reporting verbs (Lección 1): +ing, +to-infinitivo, +objeto+to
- Órdenes negativas reportadas con backshift temporal (Lección 2): tell/ask + objeto + not to, cambios de tiempo y lugar
- Posición de cláusula de reporte (Lección 3): inicial, media/final; citas académicas con presente simple; adverbios de modificación

Tareas:
1. Completa ejercicios de opción múltiple que mezclen conceptos
2. Corrige errores que combinan varios aspectos
3. Traduce frases complejas
4. Demuestra comprensión con ejercicios de verdadero/falso

Recuerda:
- Cada verbo de reporte tiene su estructura fija
- El backshift afecta tiempos VERBALES y expresiones de TIEMPO/LUGAR
- La posición de la cláusula cambia el énfasis y el registro
- En citas académicas, usa presente simple para hechos universales`,
  examples: [],
  rule: 'Repaso de fórmulas del módulo completo',
  commonMistakes: [],
  vocabulary: [],
  grammarPoints: [],
  exercises: [
    {
      id: 'b2-m3-l4-ex1',
      type: 'multiple_choice',
      concept: 'reporting verbs patterns review',
      difficulty: 3,
      prompt: 'Completa: "He ___ the money."',
      promptTranslation: 'Admitió haber robado el dinero.',
      correctAnswer: 'admitted stealing',
      options: ['admitted stealing', 'admitted to steal', 'admitted that steal'],
      explanation: '"Admit" con acción pasada usa -ing. → admitted stealing.',
    },
    {
      id: 'b2-m3-l4-ex2',
      type: 'error_correction',
      concept: 'mixed reporting verbs patterns',
      difficulty: 4,
      prompt: 'Encuentra el error: "She refused going to the party."',
      correctAnswer: 'She refused to go to the party.',
      acceptedAnswers: [
        'She refused to go to the party',
        'She refused to go to the party.',
      ],
      acceptApproximate: true,
      explanation: '"Refuse" va con to-infinitivo, nunca con -ing. → refused to go.',
    },
    {
      id: 'b2-m3-l4-ex3',
      type: 'fill_blank',
      concept: 'warn + object + not to',
      difficulty: 3,
      prompt: 'Completa: "He warned ___ not to leave early."',
      promptTranslation: 'Me advirtió que no me fuera temprano.',
      correctAnswer: 'me',
      explanation: '"Warn" requiere objeto entre el verbo y "not to". → warned me not to.',
    },
    {
      id: 'b2-m3-l4-ex4',
      type: 'multiple_choice',
      concept: 'backshift of time and place expressions',
      difficulty: 4,
      prompt: '"Don\'t be late here tomorrow!" Reportando en pasado, ¿cuál es correcto?',
      correctAnswer: 'She told him not to be late there the next day.',
      options: [
        'She told him not to be late here tomorrow.',
        'She told him not to be late there the next day.',
        'She told him to be late there the next day.',
      ],
      explanation: 'Doble backshift: "here"→"there" (lugar), "tomorrow"→"the next day" (tiempo).',
    },
    {
      id: 'b2-m3-l4-ex5',
      type: 'error_correction',
      concept: 'direct quotation punctuation and position',
      difficulty: 3,
      prompt: 'Encuentra el error: "I\'m exhausted" she said.',
      correctAnswer: '"I\'m exhausted," she said.',
      acceptedAnswers: ['"I\'m exhausted," she said', '"I\'m exhausted," she said.'],
      acceptApproximate: true,
      explanation: 'Cita directa en posición media: se REQUIERE coma después de la cita y antes del verbo de reporte.',
    },
    {
      id: 'b2-m3-l4-ex6',
      type: 'translate',
      concept: 'complex reported speech with backshift',
      difficulty: 4,
      prompt: 'Traduce: "Me pidió que no hablara aquí sobre esto hoy."',
      correctAnswer: 'She asked me not to talk there about it that day.',
      acceptedAnswers: [
        'She asked me not to talk there about it that day',
        'She asked me not to talk there about it that day.',
      ],
      acceptApproximate: true,
      explanation: 'Orden negativa + backshift: "aquí"→"there", "hoy"→"that day". Estructura: asked me not to talk.',
    },
    {
      id: 'b2-m3-l4-ex7',
      type: 'fill_blank',
      concept: 'academic present simple',
      difficulty: 3,
      prompt: 'The scientist ___ that the results show promise. (argue)',
      promptTranslation: 'El científico sostiene que los resultados muestran promesa.',
      correctAnswer: 'argues',
      explanation: 'Cita académica de hecho universal: presente simple "argues" sin backshift.',
    },
    {
      id: 'b2-m3-l4-ex8',
      type: 'select_correct',
      concept: 'adverbial modification of reporting verb',
      difficulty: 3,
      prompt: '¿Cuál está correctamente escrito con modificación adverbial?',
      correctAnswer: 'He reluctantly agreed that the plan had merit.',
      options: [
        'He agreed reluctantly that the plan had merit.',
        'He reluctantly agreed that the plan had merit.',
        'He agreed that he reluctantly had the plan had merit.',
      ],
      explanation: 'Adverbio (reluctantly) va ANTES del verbo de reporte. → reluctantly agreed.',
    },
    {
      id: 'b2-m3-l4-ex9',
      type: 'true_false',
      concept: 'reporting verbs patterns consistency',
      difficulty: 3,
      prompt: '"Suggest" puede ir con to-infinitivo en inglés moderno: "They suggested to wait."',
      correctAnswer: 'false',
      explanation: 'Falso. "Suggest" SIEMPRE va con -ing, nunca con to-infinitivo. → suggested waiting.',
    },
    {
      id: 'b2-m3-l4-ex10',
      type: 'error_correction',
      concept: 'multiple errors in reported speech',
      difficulty: 4,
      prompt: 'Corrige los errores (puede haber más de uno): "He told not to go there yesterday."',
      correctAnswer: 'He told me not to go there the day before.',
      acceptedAnswers: [
        'He told me not to go there the day before',
        'He told me not to go there the day before.',
      ],
      acceptApproximate: true,
      explanation: 'Dos errores: 1) Falta el objeto (me) entre "told" y "not to". 2) "Yesterday" debe cambiar a "the day before" (backshift temporal).',
    },
  ],
  miniTest: [
    {
      id: 'b2-m3-l4-mt1',
      type: 'fill_blank',
      concept: 'reporting verbs combined patterns',
      difficulty: 3,
      prompt: 'She promised ___ and he admitted ___. (help, make a mistake)',
      promptTranslation: 'Prometió ayudar y admitió haber cometido un error.',
      correctAnswer: 'to help | making',
      explanation: '"Promise" → to-infinitivo (to help). "Admit" → -ing (making).',
    },
    {
      id: 'b2-m3-l4-mt2',
      type: 'error_correction',
      concept: 'complex backshift and reported commands',
      difficulty: 4,
      prompt: 'Corrige: "She told them to not leave before finishing their work that day."',
      correctAnswer: 'She told them not to leave before finishing their work that day.',
      acceptedAnswers: [
        'She told them not to leave before finishing their work that day',
        'She told them not to leave before finishing their work that day.',
      ],
      acceptApproximate: true,
      explanation: 'Orden: tell + objeto + not to (no "to not"). El resto está bien: "that day" es backshift correcto.',
    },
    {
      id: 'b2-m3-l4-mt3',
      type: 'multiple_choice',
      concept: 'academic vs. personal reporting distinction',
      difficulty: 3,
      prompt: 'En un ensayo académico: ¿cuál reporta correctamente un hecho universal?',
      correctAnswer: 'Einstein proved that E=mc² is a fundamental equation.',
      options: [
        'Einstein proved that E=mc² was a fundamental equation.',
        'Einstein proved that E=mc² is a fundamental equation.',
        'Einstein said that E=mc² would be a fundamental equation.',
      ],
      explanation: 'Hecho universal: presente simple "is" (sin backshift) porque sigue siendo válido hoy.',
    },
    {
      id: 'b2-m3-l4-mt4',
      type: 'true_false',
      concept: 'integrated reporting skills',
      difficulty: 3,
      prompt: 'En la frase "He quietly admitted that he had taken the money that day," el adverbio "quietly" modifica a "admitted".',
      correctAnswer: 'true',
      explanation: 'Correcto. "Quietly" (tranquilamente/silenciosamente) modifica "admitted" para indicar cómo se hizo la admisión.',
    },
  ],
  reviewItems: ['b2-m3-l1', 'b2-m3-l2', 'b2-m3-l3'],
  prerequisites: ['b2-m3-l3'],
}
