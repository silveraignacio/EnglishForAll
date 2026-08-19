import type { Lesson } from '../../types'

export const lesson115MiniTest: Lesson = {
  id: 'b2-m11-l5',
  moduleId: 'm11-discourse-hedging',
  order: 4,
  title: 'Module Review: Discourse Markers, Hedging & Formal Register',
  objective: 'Repaso integrador del módulo 11: marcadores de discurso, subordinantes complejos, hedging, pronombres genéricos y reflexivos en contextos académicos.',
  explanation_es: `Este es el REPASO INTEGRADOR del módulo 11. Vas a practicar todos los temas en un solo test:

1. **Marcadores de discurso** (To begin with, In conclusion, By contrast, etc.)
2. **Subordinantes complejos** (whereas, once, despite the fact that, due to the fact that, as if, etc.)
3. **Hedging** (It is possible that..., It seems likely that..., etc.)
4. **Pronombres genéricos** (one, we, they singular)
5. **Reflexivos avanzados** (by itself, in itself, one another)

En este mini-test hay 8-10 ejercicios de DIVERSOS TIPOS (multiple choice, error correction, translation, listening) que combinan estos conceptos. Después, puedes continuar a los próximos módulos de B2.`,
  examples: [
    { english: 'To begin with, we must acknowledge the complexity of the issue.', spanish: 'Para empezar, debemos reconocer la complejidad del tema.' },
    { english: 'Despite the fact that evidence is limited, it seems likely that this theory has merit.', spanish: 'A pesar de que la evidencia es limitada, parece probable que esta teoría tiene mérito.' },
    { english: 'By contrast, the previous approach was outdated in itself.', spanish: 'Por el contrario, el enfoque anterior estaba anticuado en sí mismo.' },
    { english: 'One should consider whether the arguments complement one another fairly.', spanish: 'Uno debe considerar si los argumentos se complementan mutuamente de forma justa.' },
  ],
  rule: `RESUMEN DE REGLAS DEL MÓDULO 11:

1. MARCADORES DE DISCURSO:
   - Apertura: To begin with, First of all
   - Cierre: In conclusion, To sum up
   - Resumen: In short, In a nutshell
   - Comparación: Similarly, By contrast, In contrast
   - Siempre con COMA después.

2. SUBORDINANTES COMPLEJOS:
   - Whereas: contraste formal
   - Once: punto temporal exacto
   - Despite the fact that: obstáculo formal
   - Due to the fact that: causa formal
   - As if / as though: contrafáctico con PASADO (were, no was)
   - In order that: propósito + modal (might, could)

3. HEDGING:
   - It + [copula: is/seems/appears] + [adjetivo] + (that) + [cláusula]
   - Adjetivos comunes: possible, likely, apparent, clear, arguable
   - Se usa para atenuar afirmaciones directas en académico.

4. PRONOMBRES GENÉRICOS:
   - One: muy formal, requiere consistencia
   - We: inclusivo, general
   - They (singular): género desconocido, estándar moderno

5. REFLEXIVOS AVANZADOS:
   - By itself: autonomía
   - In itself: cualidad intrínseca
   - One another: reciprocidad formal`,
  commonMistakes: [
    { wrong: '❌ In conclusion we should act. By contrast the old way was better.', correct: '✅ In conclusion, we should act. By contrast, the old way was better.', explanation: 'SIEMPRE coma después del marcador de discurso.' },
    { wrong: '❌ As if she was the owner, she made decisions.', correct: '✅ As if she were the owner, she made decisions.', explanation: 'After "as if" — siempre "were", no "was".' },
    { wrong: '❌ It is that the problem needs solving.', correct: '✅ It is clear that the problem needs solving.', explanation: 'Necesitas adjetivo de hedging entre "is" y "that".' },
    { wrong: '❌ One should study hard if you want to succeed.', correct: '✅ One should study hard if one wants to succeed.', explanation: 'Consistencia con "one" — no cambies a "you".' },
  ],
  vocabulary: [
    { word: 'module review', translation_es: 'repaso de módulo', level: 'B2', category: 'learning', partOfSpeech: 'noun', example: 'This lesson is a comprehensive module review.', exampleTranslation: 'Esta lección es un repaso integrador del módulo.' },
    { word: 'integration', translation_es: 'integración', level: 'B2', category: 'learning', partOfSpeech: 'noun', example: 'The integration of all topics in one test helps consolidate learning.', exampleTranslation: 'La integración de todos los temas en un test ayuda a consolidar el aprendizaje.' },
  ],
  grammarPoints: [
    {
      id: 'gp-b2-m11-review',
      level: 'B2',
      name: 'Module 11 integrated review',
      explanation_es: 'Repaso de los 5 temas principales del módulo: marcadores, subordinantes, hedging, pronombres genéricos, reflexivos.',
      formula: 'Aplicación integrada de todas las estructuras aprendidas.',
      examples: [
        'To begin with, we must acknowledge that diversity, in itself, has value. Despite the fact that some argue otherwise, it seems likely that inclusive societies function better. By contrast, homogeneous societies often struggle. One should consider whether the arguments complement one another fairly.',
      ],
    },
  ],
  exercises: [
    {
      id: 'b2-m11-l5-ex1',
      type: 'multiple_choice',
      concept: 'discourse markers integration',
      difficulty: 2,
      prompt: 'Completa: "___ this theory has been criticized, recent evidence suggests it may be valid."',
      promptTranslation: 'A pesar de que esta teoría ha sido criticada, evidencia reciente sugiere que podría ser válida.',
      correctAnswer: 'Despite the fact that',
      options: ['To begin with', 'Despite the fact that', 'In conclusion'],
      explanation: 'Un marcador que introduce un obstáculo: "Despite the fact that". "To begin with" abre. "In conclusion" cierra.',
    },
    {
      id: 'b2-m11-l5-ex2',
      type: 'error_correction',
      concept: 'as if subjunctive',
      difficulty: 3,
      prompt: 'Corrige: "She acts as if the decision was already made by someone else."',
      correctAnswer: 'She acts as if the decision were already made by someone else.',
      acceptedAnswers: [
        'She acts as if the decision were already made by someone else.',
        'She acts as if the decision were already made by someone else',
      ],
      acceptApproximate: true,
      explanation: 'Después de "as if" — "were" (subjuntivo), no "was".',
    },
    {
      id: 'b2-m11-l5-ex3',
      type: 'select_correct',
      concept: 'hedging and pronouns',
      difficulty: 3,
      prompt: 'Elige la versión más académicamente apropiada (con hedging y pronombre genérico):',
      correctAnswer: 'It is possible that one should reconsider this approach.',
      options: [
        'You should definitely reconsider this approach.',
        'I think you should reconsider this approach.',
        'It is possible that one should reconsider this approach.',
      ],
      explanation: 'Hedging ("It is possible") + pronombre formal ("one") = tono académico apropiado.',
    },
    {
      id: 'b2-m11-l5-ex4',
      type: 'fill_blank',
      concept: 'complex conjunctions',
      difficulty: 3,
      prompt: 'Completa: "The project would not have succeeded ___ the team worked together efficiently."',
      promptTranslation: 'El proyecto no hubiera tenido éxito si el equipo no hubiera trabajado eficientemente juntos.',
      correctAnswer: 'if',
      acceptedAnswers: ['if'],
      explanation: 'Aquí necesitas "if" para condicional pasado (si bien no es un subordinante "complejo" del módulo, esta variante debe completarse). Nota: "due to the fact that" sería: "The project would not have succeeded due to the fact that the team didn\'t work together." — pero aquí el contexto pide "if".',
    },
    {
      id: 'b2-m11-l5-ex5',
      type: 'true_false',
      concept: 'reflexive advanced',
      difficulty: 2,
      prompt: '"By itself" y "in itself" significan exactamente lo mismo.',
      correctAnswer: 'false',
      explanation: 'Falso. "By itself" = autonomía. "In itself" = cualidad intrínseca / énfasis filosófico. Significados distintos.',
    },
    {
      id: 'b2-m11-l5-ex6',
      type: 'translate',
      concept: 'hedging and markers',
      difficulty: 4,
      prompt: 'Traduce: "En conclusión, parece probable que ambos enfoques se complementan mutuamente, a pesar de que existan diferencias fundamentales."',
      correctAnswer: 'In conclusion, it seems likely that both approaches complement one another, despite the fact that fundamental differences exist.',
      acceptedAnswers: [
        'In conclusion, it seems likely that both approaches complement one another, despite the fact that fundamental differences exist.',
        'In conclusion, it seems likely that both approaches complement one another, despite the fact that fundamental differences exist',
      ],
      acceptApproximate: true,
      explanation: 'Integración: "In conclusion" (marcador) + "seems likely" (hedging) + "one another" (reflexivo) + "despite the fact that" (subordinante).',
    },
    {
      id: 'b2-m11-l5-ex7',
      type: 'reorder',
      concept: 'discourse and hedging',
      difficulty: 3,
      prompt: 'Ordena las palabras:',
      promptTranslation: 'Para empezar, parece que la situación requiere atención inmediata.',
      words: ['To', 'begin', 'with,', 'it', 'seems', 'that', 'the', 'situation', 'requires', 'immediate', 'attention.'],
      correctAnswer: 'To begin with, it seems that the situation requires immediate attention.',
      explanation: 'Orden: marcador + coma + hedging (it seems) + cláusula completa.',
    },
    {
      id: 'b2-m11-l5-ex8',
      type: 'match',
      concept: 'module integrated review',
      difficulty: 3,
      prompt: 'Emparejar concepto con descripción:',
      correctAnswer: '',
      pairs: [
        { left: 'Discourse markers', right: 'Estructuran texto (apertura, cierre, contraste)' },
        { left: 'Complex conjunctions', right: 'Relaciones sofisticadas (whereas, once, as if)' },
        { left: 'Hedging', right: 'Suaviza afirmaciones (It is possible that...)' },
        { left: 'Generic pronouns', right: 'Impersonales y genéricos (one, we, they singular)' },
        { left: 'Advanced reflexives', right: 'Autonomía y reciprocidad (by itself, one another)' },
      ],
      explanation: 'Resumen de los 5 temas del módulo.',
    },
    {
      id: 'b2-m11-l5-ex9',
      type: 'listening',
      concept: 'module integrated',
      difficulty: 4,
      prompt: 'Escuchá el audio (análisis académico breve) e identifica los elementos del módulo.',
      correctAnswer: '',
      explanation: 'Un análisis académico breve que integra marcadores, hedging, subordinantes y pronombres genéricos.',
      listening: {
        audioText:
          'Today I want to discuss climate policy. To begin with, we must acknowledge the urgency of action. However, it is possible that some solutions may conflict with economic interests. Despite the fact that funding is limited, research suggests that renewable energy can become viable. In contrast, traditional energy sources, in themselves, perpetuate dependency. One might argue that these approaches complement one another, though the evidence remains contested. By itself, no single policy will suffice. As if solving this were simple, many believe quick fixes exist. In conclusion, we must act thoughtfully, considering that multiple perspectives contribute to better solutions.',
        audioUrl: '/audio/tts/b2-m11-l5-ex9.mp3',
        questions: [
          {
            id: 'b2-m11-l5-ex9-q1',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: '¿Cuál es el primer punto que menciona el hablante?',
            promptTranslation: 'What is the first point the speaker mentions?',
            correctAnswer: 'We must acknowledge the urgency of action',
            options: [
              'Renewable energy is the only solution',
              'We must acknowledge the urgency of action',
              'No single policy will work',
            ],
            explanation: '"To begin with, we must acknowledge the urgency of action."',
          },
          {
            id: 'b2-m11-l5-ex9-q2',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'El hablante dice que una sola política será suficiente.',
            promptTranslation: 'The speaker says one single policy will be sufficient.',
            correctAnswer: 'false',
            explanation: '"By itself, no single policy will suffice."',
          },
          {
            id: 'b2-m11-l5-ex9-q3',
            type: 'select_correct',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: '¿Cuál es la conclusión final del hablante?',
            promptTranslation: 'What is the speaker\'s final conclusion?',
            correctAnswer: 'Multiple perspectives contribute to better solutions',
            options: [
              'Quick fixes are available',
              'Renewable energy is the only solution',
              'Multiple perspectives contribute to better solutions',
            ],
            explanation: '"In conclusion, we must act thoughtfully, considering that multiple perspectives contribute to better solutions."',
          },
        ],
      },
    },
    {
      id: 'b2-m11-l5-ex10',
      type: 'writing',
      concept: 'module integrated writing',
      difficulty: 4,
      prompt: 'Escribí un breve análisis académico (~180 palabras) sobre un tema de interés (educación, tecnología, sostenibilidad, etc.). Integrá al menos 1 elemento de CADA categoría del módulo: 1 marcador de discurso (To begin with, In conclusion...), 1 subordinante complejo (whereas, despite the fact that, as if...), 1 estructura de hedging (It is possible / seems / appears...), 1 pronombre genérico (we, one, they), y 1 reflexivo avanzado (by itself, in itself, one another).',
      promptTranslation: 'Write an academic analysis integrating all 5 module topics.',
      correctAnswer: '',
      explanation: 'Un excelente análisis académico integra naturalmente todos los elementos del módulo para sonar formal, sofisticado y académicamente apropiado.',
      taskType: 'essay',
      targetReader: 'an academic audience',
      register: 'formal',
      contentPoints: [
        'Tema claro e interesante',
        'Al menos 1 marcador de discurso estructurando el texto',
        'Al menos 1 subordinante complejo',
        'Al menos 1 hedging statement',
        'Al menos 1 pronombre genérico',
        'Al menos 1 reflexivo avanzado',
      ],
      requiresOwnIdea: true,
      minWords: 150,
      maxWords: 180,
    },
  ],
  miniTest: [
    {
      id: 'b2-m11-l5-mt1',
      type: 'multiple_choice',
      concept: 'integrated module review',
      difficulty: 3,
      prompt: 'Elige la oración más académicamente apropiada (integra múltiples elementos):',
      correctAnswer: 'It seems likely that we must reconsider the approach, despite the fact that it has been effective in the past.',
      options: [
        'You should definitely change the approach because it doesn\'t work anymore.',
        'It seems likely that we must reconsider the approach, despite the fact that it has been effective in the past.',
        'We don\'t like the approach because it is old-fashioned.',
      ],
      explanation: 'Contiene: hedging ("seems likely") + pronombre genérico ("we") + subordinante complejo ("despite the fact that") = muy académico.',
    },
    {
      id: 'b2-m11-l5-mt2',
      type: 'error_correction',
      concept: 'multiple elements',
      difficulty: 4,
      prompt: 'Corrige: "In conclusion, one should understand that by it self, no approach is perfect if you apply it incorrectly."',
      correctAnswer: 'In conclusion, one should understand that by itself, no approach is perfect if one applies it incorrectly.',
      acceptedAnswers: [
        'In conclusion, one should understand that by itself, no approach is perfect if one applies it incorrectly.',
        'In conclusion, one should understand that by itself, no approach is perfect if one applies it incorrectly',
      ],
      acceptApproximate: true,
      explanation: 'Errores: 1) "by it self" → "by itself", 2) cambio "one"→"you" → debe ser "one" en ambos.',
    },
    {
      id: 'b2-m11-l5-mt3',
      type: 'select_correct',
      concept: 'integrated structures',
      difficulty: 4,
      prompt: 'Elige la versión que integra CORRECTAMENTE marcador + hedging + subordinante:',
      correctAnswer: 'Despite the fact that evidence is limited, it is possible that the theory has some merit.',
      options: [
        'Despite that evidence is limited, definitely the theory has merit.',
        'Despite the fact that evidence is limited, it is possible that the theory has some merit.',
        'The evidence is limited, but the theory is definitely good.',
      ],
      explanation: 'Integración correcta: "Despite the fact that" (subordinante) + "it is possible that" (hedging) = formal y académico.',
    },
  ],
  reviewItems: ['b2-m11-l1', 'b2-m11-l2', 'b2-m11-l3', 'b2-m11-l4'],
  prerequisites: ['b2-m11-l4'],
}
