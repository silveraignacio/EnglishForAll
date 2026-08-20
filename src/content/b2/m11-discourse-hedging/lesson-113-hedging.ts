import type { Lesson } from '../../types'

export const lesson113Hedging: Lesson = {
  id: 'b2-m11-l3',
  moduleId: 'm11-discourse-hedging',
  order: 2,
  title: 'Hedging: Softening Statements with "It" + Copula + Adjective',
  objective: 'Matizar afirmaciones directas usando "it" + verbo copulativo + adjetivo + (that) cláusula ("It\'s possible that...", "It seems likely that...") para sonar menos directo y más académico.',
  explanation_es: `Ya sabés hacer afirmaciones: "She forgot the meeting." Pero en escritura académica o formal, a veces querés SUAVIZAR tu afirmación — no ser tan directo, sino más cauteloso. Eso es HEDGING.

El hedging es una estrategia de lenguaje para:
1. Sonar MENOS seguro (cuando no tenés todas las pruebas)
2. Ser ACADÉMICAMENTE apropiado (debes evitar afirmaciones rotundas en ensayos científicos)
3. Sonar MÁS CORTÉS (no imponer tu opinión)

**ESTRUCTURA PRINCIPAL: It + verbo copulativo + adjetivo + (that) + cláusula**

Los verbos copulativos más usados son: is, seems, appears, looks (en el sentido de "parece")

Los adjetivos de hedging más comunes:
- Posibilidad: possible, likely, probable
- Realidad atenuada: apparent, evident, clear
- Necesidad/duda: necessary, questionable, debatable
- Observación: interesting, notable, striking

**Ejemplos de HEDGING:**

DIRECTO: "She forgot the meeting."
HEDGED: "It's possible that she forgot the meeting."
→ Suavizas: no estás 100% seguro.

DIRECTO: "Climate change causes economic damage."
HEDGED: "It seems likely that climate change causes economic damage."
→ Suavizas: no es lo que PROBASTE absolutamente, sino lo que PARECE probable.

DIRECTO: "This approach is wrong."
HEDGED: "It appears that this approach may have some flaws."
→ Suavizas: en lugar de decir "está mal", dices "parece tener algunos problemas".

**Variantes comunes:**

1. "It is + adjective + (that)..." → "It is clear that..." / "It is possible that..."
2. "It seems + adjective + (that)..." → "It seems likely that..." / "It seems evident that..."
3. "It appears + adjective + (that)..." → "It appears that..."

**Diferencias sutiles:**

- "It is possible that..." = Es posible que... (neutralidad total)
- "It is likely that..." = Es probable que... (más hacia la probabilidad)
- "It seems that..." = Parece que... (más subjetivo, "me parece")
- "It appears that..." = Parece que... (ligeramente más objetivo que "seems")

**Hedging con MODALES auxiliares (doble suavización):**

Si quieres MÁXIMA cautela, combinas el hedging con modales:

"It is possible that she might have forgotten..."
→ Suavizas doblemente: "posible" + "might" = máxima incertidumbre.

"It seems likely that the data could suggest..."
→ "Seems likely" + "could" = incertidumbre compuesta.

**Puntos importantes:**

1. En INVESTIGACIÓN CIENTÍFICA y ENSAYOS ACADÉMICOS, el hedging es ESPERADO — mostrar que comprendés que tus conclusiones no son absolutas.

2. En escritura INFORMAL o CONVERSACIÓN CASUAL, demasiado hedging suena poco sincero o débil. "It's possible that you forgot" suena mejor como "You probably forgot."

3. "It is + adjective" puede incluir OTRAS cláusulas además de "that":
   - "It is clear that..." (con "that")
   - "It appears..." (sin "that" obligatorio)
   - "It seems the data shows..." (sin "that", más natural)

4. El CONTEXTO determina si necessitas hedging. En un reporte técnico dirigido a expertos: sí, usá hedging. En una conversación casual entre amigos: mejor directo.

5. Adjetivos de hedging FRECUENTES en académico:
   - Possible, likely, probable (posibilidad)
   - Apparent, evident, clear (observación)
   - Reasonable, arguable, debatable (argumentación)
   - Striking, notable, interesting (énfasis académico)`,
  examples: [
    { english: 'It is possible that the data has been misinterpreted.', spanish: 'Es posible que los datos hayan sido mal interpretados.', note: 'Suavizas una crítica potencial.' },
    { english: 'It seems likely that climate change accelerates natural disasters.', spanish: 'Parece probable que el cambio climático acelere los desastres naturales.', note: 'Hedging sobre conclusión científica.' },
    { english: 'It appears that the government underestimated the costs.', spanish: 'Parece que el gobierno subestimó los costos.', note: 'Observación cautelosa, no acusación.' },
    { english: 'It is arguable that both approaches have merit.', spanish: 'Se puede argumentar que ambos enfoques tienen mérito.', note: 'Hedging que reconoce múltiples perspectivas.' },
    { english: 'It could be argued that the traditional method is outdated.', spanish: 'Se podría argumentar que el método tradicional está anticuado.', note: 'Hedging máximo: posibilidad + pasividad.' },
    { english: 'It is notable that several studies contradict this finding.', spanish: 'Es notable que varios estudios contradigan este hallazgo.', note: 'Hedging que enfatiza ("notable") sin afirmar rotundamente.' },
  ],
  rule: `Fórmula BÁSICA:
It + [copula: is/seems/appears] + [adjetivo hedging] + (that) + [cláusula]

Ejemplos:
- It is possible that she forgot.
- It seems likely that the data suggests a trend.
- It appears that the analysis has flaws.

Variantes:
1. Sin "that": It is clear the situation requires action.
2. Con modal: It is possible that she might have forgotten.
3. Pasiva: It could be argued that the approach is flawed.

Adjetivos comunes de hedging:
- Posibilidad: possible, likely, probable, plausible
- Observación: apparent, evident, clear, obvious
- Debate: arguable, debatable, questionable, reasonable
- Énfasis: notable, striking, interesting, remarkable

REGLA CRÍTICA: El hedging SUAVIZA — no afirma rotundamente. Si lo usas demasiado, pierdes autoridad. Si lo usas poco en académico, suenas muy directo.`,
  formation: {
    title: 'Cómo se forma el hedging',
    intro: 'El hedging suaviza afirmaciones directas usando "It + verbo copulativo + adjetivo + (that) + cláusula". Sirve para sonar menos seguro, más cortés y más académicamente apropiado.',
    patterns: [
      {
        name: 'Estructura básica — It + copula + adjetivo + (that) + cláusula',
        formula: 'It + [is / seems / appears] + [adjetivo de hedging] + (that) + cláusula',
        examples: [
          { english: 'It is possible that the data has been misinterpreted.', spanish: 'Es posible que los datos hayan sido mal interpretados.' },
          { english: 'It seems likely that climate change accelerates natural disasters.', spanish: 'Parece probable que el cambio climático acelere los desastres naturales.' },
        ],
        note: 'Adjetivos típicos: possible, likely, apparent, clear, arguable, notable.',
      },
      {
        name: 'Con modal — doble suavización',
        formula: 'It + [copula] + [adjetivo] + that + sujeto + [might / could / may] + verbo',
        examples: [
          { english: 'It is possible that she might have forgotten the meeting.', spanish: 'Es posible que ella haya olvidado la reunión.' },
          { english: 'It seems likely that the study could suggest a correlation.', spanish: 'Parece probable que el estudio pueda sugerir una correlación.' },
        ],
        note: 'El modal añade máxima incertidumbre, pero no apiles varios modales.',
      },
      {
        name: 'Pasiva — It could be argued that',
        formula: 'It + [could / may] + be + argued/believed + that + cláusula',
        examples: [
          { english: 'It could be argued that the traditional method is outdated.', spanish: 'Se podría argumentar que el método tradicional está anticuado.' },
          { english: 'It may be argued that both approaches have merit.', spanish: 'Se podría argumentar que ambos enfoques tienen mérito.' },
        ],
        note: 'La pasiva refuerza la distancia y la cautela académica.',
      },
    ],
    notes: [
      'En investigación y ensayos académicos, el hedging es esperado para reconocer que las conclusiones no son absolutas.',
      'En conversación casual, demasiado hedging suena insincero o débil.',
      'El adjetivo elige el grado de confianza: "possible" (mínima), "likely" (moderada), "clear" (alta).',
    ],
  },
  commonMistakes: [
    { wrong: '❌ It is possible that she might have could forgot.', correct: '✅ It is possible that she might have forgotten.', explanation: 'No apiles múltiples modales. "Might" es suficiente para suavizar después de "possible". Tampoco "could forgot" — es "could have forgotten".' },
    { wrong: '❌ It is that the data suggests something.', correct: '✅ It is likely that the data suggests something.', explanation: 'Necesitas un adjetivo de hedging entre "is" y "that" — no solo "It is that...".' },
    { wrong: '❌ It seems the data is clearly wrong.', correct: '✅ It appears the data may have inconsistencies.', explanation: 'Si usas "seems/appears", NO uses adjetivos absolutos como "clearly wrong" después. Mantén consistencia en la suavización.' },
    { wrong: '❌ It is possible that this is a possible situation.', correct: '✅ It is possible that this situation might arise.', explanation: 'No repitas el mismo concepto. "Possible" una sola vez, o varía el adjetivo.' },
  ],
  vocabulary: [
    { word: 'hedging', translation_es: 'matizar, suavizar', level: 'B2', category: 'academic writing', partOfSpeech: 'noun/verb', example: 'Hedging makes your writing sound more academically appropriate.', exampleTranslation: 'Matizar hace que tu escritura suene más académicamente apropiada.' },
    { word: 'to soften', translation_es: 'suavizar', level: 'B2', category: 'academic writing', partOfSpeech: 'verb', example: 'Use "it seems" to soften a strong statement.', exampleTranslation: 'Usa "parece" para suavizar una afirmación fuerte.' },
    { word: 'caution', translation_es: 'cautela, prudencia', level: 'B2', category: 'academic', partOfSpeech: 'noun', example: 'Scientific writing requires caution in making claims.', exampleTranslation: 'La escritura científica requiere cautela al hacer afirmaciones.' },
    { word: 'apparent', translation_es: 'aparente, que parece', level: 'B2', category: 'adjectives', partOfSpeech: 'adjective', example: 'It is apparent that the situation needs change.', exampleTranslation: 'Es aparente que la situación necesita cambio.' },
    { word: 'plausible', translation_es: 'plausible, creíble', level: 'B2', category: 'adjectives', partOfSpeech: 'adjective', example: 'It is plausible that this theory explains the data.', exampleTranslation: 'Es plausible que esta teoría explique los datos.' },
    { word: 'arguable', translation_es: 'discutible, cuestionable', level: 'B2', category: 'adjectives', partOfSpeech: 'adjective', example: 'It is arguable whether the old approach was more efficient.', exampleTranslation: 'Es discutible si el enfoque anterior fue más eficiente.' },
  ],
  grammarPoints: [
    {
      id: 'gp-b2-hedging-structure',
      level: 'B2',
      name: 'Hedging: It + copula + adjective + (that) clause',
      explanation_es: 'Estructura de suavización: It + [is/seems/appears] + [adjetivo] + (that) + [cláusula]. Atenúa afirmaciones directas en escritura académica.',
      formula: 'It + [is/seems/appears] + [adjective: possible/likely/apparent/clear/arguable] + (that) + [clause]',
      examples: [
        'It is possible that she forgot.',
        'It seems likely that the data suggests a trend.',
        'It appears that the analysis contains errors.',
        'It is arguable that both approaches have merit.',
      ],
    },
    {
      id: 'gp-b2-hedging-modals',
      level: 'B2',
      name: 'Hedging with modals (double softening)',
      explanation_es: 'Combina hedging con modales (might, could, may) para máxima cautela. "It is possible that she might have forgotten" = suavización doble.',
      formula: 'It + [copula] + [adjective] + (that) + [subject] + [modal] + [verb]',
      examples: [
        'It is possible that she might have forgotten.',
        'It seems likely that the study could suggest a correlation.',
        'It may be arguable that the data might support this conclusion.',
      ],
    },
  ],
  exercises: [
    {
      id: 'b2-m11-l3-ex1',
      type: 'multiple_choice',
      concept: 'hedging basic',
      difficulty: 2,
      prompt: 'Elige la versión más hedged (suavizada) de: "She forgot the meeting."',
      promptTranslation: 'Elige la versión más suavizada.',
      correctAnswer: 'It is possible that she forgot the meeting.',
      options: [
        'She forgot the meeting.',
        'It is possible that she forgot the meeting.',
        'She definitely forgot the meeting.',
      ],
      explanation: '"It is possible that..." suaviza la afirmación — no estás 100% seguro.',
    },
    {
      id: 'b2-m11-l3-ex2',
      type: 'select_correct',
      concept: 'hedging adjective choice',
      difficulty: 3,
      prompt: 'Tienes muchas pruebas de que el cambio climático acelera desastres naturales. Elige la hedging más apropiada:',
      correctAnswer: 'It seems likely that climate change accelerates natural disasters.',
      options: [
        'It is possible that climate change accelerates natural disasters.',
        'It seems likely that climate change accelerates natural disasters.',
        'It is obvious that climate change accelerates natural disasters.',
      ],
      explanation: '"Seems likely" refleja confianza moderada. "Possible" es demasiado cauto si tenés pruebas. "Obvious" no es hedging.',
    },
    {
      id: 'b2-m11-l3-ex3',
      type: 'fill_blank',
      concept: 'hedging copula',
      difficulty: 2,
      prompt: 'Completa: "It ___ clear that the proposal has some limitations."',
      promptTranslation: 'Es claro que la propuesta tiene algunas limitaciones.',
      correctAnswer: 'is',
      acceptedAnswers: ['is', 'appears', 'seems'],
      explanation: 'Necesitas un verbo copulativo (is, appears, seems) entre "It" y el adjetivo.',
    },
    {
      id: 'b2-m11-l3-ex4',
      type: 'error_correction',
      concept: 'hedging modal stack',
      difficulty: 3,
      prompt: 'Encuentra el error: "It is possible that she might have could forgotten the meeting."',
      correctAnswer: 'It is possible that she might have forgotten the meeting.',
      acceptedAnswers: [
        'It is possible that she might have forgotten the meeting.',
        'It is possible that she might have forgotten the meeting',
      ],
      acceptApproximate: true,
      explanation: 'No apiles múltiples modales: "could" + "might" está mal. Además: "could forgot" es incorrecto — es "could have forgotten".',
    },
    {
      id: 'b2-m11-l3-ex5',
      type: 'translate',
      concept: 'hedging in Spanish',
      difficulty: 4,
      prompt: 'Traduce: "Parece probable que los datos sugieran una correlación entre ambas variables."',
      correctAnswer: 'It seems likely that the data suggests a correlation between both variables.',
      acceptedAnswers: [
        'It seems likely that the data suggests a correlation between both variables',
        'It seems probable that the data suggests a correlation between both variables.',
      ],
      acceptApproximate: true,
      explanation: '"Parece probable" = "seems likely" / "seems probable". "Entre ambas variables" = "between both variables".',
    },
    {
      id: 'b2-m11-l3-ex6',
      type: 'reorder',
      concept: 'hedging word order',
      difficulty: 3,
      prompt: 'Ordena las palabras:',
      promptTranslation: 'Parece que la situación requiere una acción inmediata.',
      words: ['It', 'appears', 'that', 'the', 'situation', 'requires', 'immediate', 'action.'],
      correctAnswer: 'It appears that the situation requires immediate action.',
      explanation: 'Orden: It + copula (appears) + that + cláusula completa.',
    },
    {
      id: 'b2-m11-l3-ex7',
      type: 'true_false',
      concept: 'hedging overuse',
      difficulty: 3,
      prompt: 'En escritura académica, es mejor usar MÁS hedging que en conversación casual.',
      correctAnswer: 'true',
      explanation: 'Correcto. En académico, el hedging es ESPERADO — muestra que comprendés los límites de tus conclusiones.',
    },
    {
      id: 'b2-m11-l3-ex8',
      type: 'match',
      concept: 'hedging adjectives appropriateness',
      difficulty: 3,
      prompt: 'Emparejar adjetivo con el nivel de confianza que expresa:',
      correctAnswer: '',
      pairs: [
        { left: 'It is possible that...', right: 'Máxima incertidumbre' },
        { left: 'It seems likely that...', right: 'Confianza moderada' },
        { left: 'It is clear that...', right: 'Alta confianza (hedging mínimo)' },
        { left: 'It is arguable that...', right: 'Reconoce múltiples perspectivas' },
      ],
      explanation: 'El adjetivo que elijas en hedging refleja tu grado de confianza en la afirmación.',
    },
    {
      id: 'b2-m11-l3-ex9',
      type: 'listening',
      concept: 'hedging in academic presentation',
      difficulty: 4,
      prompt: 'Escuchá la presentación académica y respondé las preguntas.',
      correctAnswer: '',
      explanation: 'Un profesor presenta resultados de investigación usando hedging para ser académicamente cauteloso.',
      listening: {
        audioText:
          'Our findings suggest that climate patterns are changing. It is possible that human activities contribute to this change, although we cannot yet claim absolute certainty. It appears that temperature increases in certain regions correlate with industrial activity. However, it seems likely that multiple factors are involved. It is arguable whether current policies are sufficient to address the problem. Our research indicates that further investigation is needed. It could be argued that preventive measures should be implemented immediately, yet it remains to be seen whether these measures will be effective.',
        audioUrl: '/audio/tts/b2-m11-l3-ex9.mp3',
        questions: [
          {
            id: 'b2-m11-l3-ex9-q1',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: '¿Cuál es el grado de certeza del profesor sobre la causa del cambio climático?',
            promptTranslation: 'What is the professor\'s level of certainty about the cause of climate change?',
            correctAnswer: 'Possible but not certain',
            options: ['Completely certain', 'Completely uncertain', 'Possible but not certain'],
            explanation: '"It is possible that... although we cannot yet claim absolute certainty."',
          },
          {
            id: 'b2-m11-l3-ex9-q2',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'El profesor afirma directamente que las políticas actuales son suficientes.',
            promptTranslation: 'The professor directly claims that current policies are sufficient.',
            correctAnswer: 'false',
            explanation: '"It is arguable whether current policies are sufficient" — usa hedging, no afirmación directa.',
          },
          {
            id: 'b2-m11-l3-ex9-q3',
            type: 'select_correct',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'Según el profesor, ¿cuántos factores están involucrados en el cambio climático?',
            promptTranslation: 'According to the professor, how many factors are involved in climate change?',
            correctAnswer: 'Multiple factors',
            options: ['Only human activities', 'Multiple factors', 'Only one factor'],
            explanation: '"It seems likely that multiple factors are involved."',
          },
        ],
      },
    },
    {
      id: 'b2-m11-l3-ex10',
      type: 'writing',
      concept: 'hedging in academic essay',
      difficulty: 4,
      prompt: 'Escribí un breve análisis académico (~150 palabras) sobre un tema controvertido (ej: redes sociales y salud mental, tecnología y empleo, inteligencia artificial y educación). Usá al menos 4 hedging statements con diferentes estructuras: "It is possible that...", "It seems likely that...", "It appears that...", y al menos uno con modal adicional ("might", "could").',
      promptTranslation: 'Write an academic analysis using hedging statements.',
      correctAnswer: '',
      explanation: 'Un buen análisis académico demuestra cautela al hacer conclusiones — usa hedging para sonar más académicamente apropiado.',
      taskType: 'essay',
      targetReader: 'an academic audience',
      register: 'formal',
      contentPoints: [
        'Tema controvertido con múltiples perspectivas',
        'Al menos 4 hedging statements con variedad de estructuras',
        'Reconocimiento de limitaciones en tus conclusiones',
      ],
      requiresOwnIdea: true,
      minWords: 120,
      maxWords: 150,
    },
    {
      id: 'b2-m11-l3-ex11',
      type: 'speaking',
      concept: 'hedging intonation',
      difficulty: 3,
      prompt: 'Escuchá la frase modelo y repetila en voz alta. Nota cómo el hedging reduce la entonación de certeza.',
      correctAnswer: 'It is possible that this interpretation might be one of several valid approaches to understanding the phenomenon.',
      explanation: 'Practicá cómo los hedging statements suenen menos afirmativos — la entonación "cae" ligeramente después del verbo copulativo.',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b2-m11-l3-mt1',
      type: 'multiple_choice',
      concept: 'hedging choice',
      difficulty: 2,
      prompt: 'Tienes pruebas moderadas de que X causa Y. ¿Cuál es el hedging más apropiado?',
      correctAnswer: 'It seems likely that X causes Y.',
      options: [
        'X definitely causes Y.',
        'It is possible that X causes Y.',
        'It seems likely that X causes Y.',
      ],
      explanation: '"Seems likely" refleja confianza moderada. "Possible" = mínima confianza. Sin hedging = afirmación rotunda.',
    },
    {
      id: 'b2-m11-l3-mt2',
      type: 'error_correction',
      concept: 'hedging structure',
      difficulty: 3,
      prompt: 'Corrige: "It is that the situation needs change."',
      correctAnswer: 'It is clear that the situation needs change.',
      acceptedAnswers: [
        'It is clear that the situation needs change.',
        'It is apparent that the situation needs change.',
        'It seems that the situation needs change.',
      ],
      acceptApproximate: true,
      explanation: 'Necesitas un adjetivo de hedging entre "is" y "that" — no solo "It is that...".',
    },
    {
      id: 'b2-m11-l3-mt3',
      type: 'true_false',
      concept: 'hedging frequency',
      difficulty: 2,
      prompt: 'En una conversación casual entre amigos, es mejor usar mucho hedging para sonar inteligente.',
      correctAnswer: 'false',
      explanation: 'Falso. Demasiado hedging en conversación casual suena insincero o débil. El hedging es especialmente útil en ACADÉMICO.',
    },
  ],
  reviewItems: ['b2-m11-l1', 'b2-m11-l2'],
  workbookRefs: [
    { levelId: 'b2', page: 11, exercises: [2, 6], note: 'Práctica de hedging y marcadores del discurso' },
  ],
  prerequisites: ['b2-m11-l1', 'b2-m11-l2'],
}
