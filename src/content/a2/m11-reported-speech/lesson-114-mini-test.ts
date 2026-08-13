import type { Lesson } from '../../types'

export const lesson114MiniTest: Lesson = {
  id: 'a2-m11-l4',
  moduleId: 'm11-reported-speech',
  order: 3,
  title: 'Mini-test: estilo indirecto',
  objective: 'Evaluar el uso de say/tell, el cambio de tiempo en oraciones y las preguntas indirectas (ask if / wh-), incluida la conversión de un diálogo a estilo indirecto.',
  explanation_es: `Esta es la lección de evaluación final del Módulo 11. Antes del mini-test, repasemos lo esencial:

**say vs tell:**
- say + that... (sin persona): She said that she was tired.
- tell + persona + that...: He told me that he was happy.
- ❌ He said me... → ✅ He told me...

**Cambio de tiempo (backshift) en oraciones:**
- am/is → was: "I am tired." → She said she was tired.
- do/does → did y presente → pasado: "I work in Madrid." → He said he worked in Madrid.
- will → would: "I will call you." → She said she would call me.
- have → had: "I have a car." → She said she had a car.

**Preguntas indirectas:**
- Sí/no → ask + if/whether: "Are you tired?" → She asked me if I was tired.
- Abiertas → ask + wh- + sujeto + verbo (sin inversión): "Where do you live?" → He asked me where I lived.

**Errores típicos a evitar:**
- ❌ She said she is tired → ✅ She said she was tired.
- ❌ She asked me where did I live → ✅ She asked me where I lived.
- ❌ He said me that... → ✅ He told me that...`,
  examples: [
    { english: 'She said that she was tired.', spanish: 'Ella dijo que estaba cansada.' },
    { english: 'He told me that he was happy.', spanish: 'Él me dijo que estaba feliz.' },
    { english: 'She asked me if I was tired.', spanish: 'Ella me preguntó si estaba cansado.' },
    { english: 'He asked me where I lived.', spanish: 'Él me preguntó dónde vivía.' },
    { english: 'She said she would call me.', spanish: 'Ella dijo que me llamaría.' },
  ],
  rule: `**Resumen del módulo:**
- say + that... (sin persona) / tell + persona + that...
- Backshift: am→was, do→did, will→would, have→had.
- Preguntas indirectas: ask + if (sí/no) o ask + wh- (abiertas), sin inversión.
- Los pronombres cambian según quien habla: "I" → he/she.`,
  commonMistakes: [
    { wrong: '❌ She said she is tired.', correct: '✅ She said she was tired.', explanation: 'En estilo indirecto el presente cambia a pasado.' },
    { wrong: '❌ He said me that he was busy.', correct: '✅ He told me that he was busy.', explanation: '"Say" no lleva objeto de persona; usamos "tell me".' },
    { wrong: '❌ She asked me where did I live.', correct: '✅ She asked me where I lived.', explanation: 'Las preguntas indirectas no llevan inversión.' },
  ],
  vocabulary: [],
  grammarPoints: [],
  exercises: [
    {
      id: 'a2-m11-l4-ex1',
      type: 'multiple_choice',
      concept: 'module 11 - say vs tell',
      difficulty: 1,
      prompt: 'Completa: "He ___ that the exam was easy."',
      promptTranslation: 'Él dijo que el examen era fácil.',
      correctAnswer: 'said',
      options: ['said', 'told', 'told me'],
      explanation: 'Sin persona como objeto usamos "said". → He said that the exam was easy.',
    },
    {
      id: 'a2-m11-l4-ex2',
      type: 'fill_blank',
      concept: 'module 11 - backshift',
      difficulty: 2,
      prompt: 'Completa: Directo: "I am busy." → "She said she ___ busy."',
      promptTranslation: 'Ella dijo que estaba ocupada.',
      correctAnswer: 'was',
      acceptedAnswers: ['was', 'Was'],
      explanation: '"Am" cambia a "was". → She said she was busy.',
    },
    {
      id: 'a2-m11-l4-ex3',
      type: 'error_correction',
      concept: 'module 11 - say vs tell',
      difficulty: 3,
      prompt: 'Corrige el error: "She said me that she was at home."',
      promptTranslation: 'Ella me dijo que estaba en casa.',
      correctAnswer: 'She told me that she was at home.',
      acceptedAnswers: ['She told me that she was at home', 'She told me that she was at home.', 'she told me that she was at home'],
      acceptApproximate: true,
      explanation: '"Say" no lleva objeto de persona. Con persona usamos "told me": She told me that she was at home.',
    },
    {
      id: 'a2-m11-l4-ex4',
      type: 'translate',
      concept: 'module 11 - backshift',
      difficulty: 3,
      prompt: 'Traduce: "Dijo que la película era buena."',
      promptTranslation: 'They said that the movie was good.',
      correctAnswer: 'They said that the movie was good.',
      acceptedAnswers: ['They said that the movie was good', 'They said the movie was good', 'He said that the movie was good', 'she said that the movie was good'],
      acceptApproximate: true,
      explanation: '"Decir que" sin persona = said that. Presente "es buena" pasa a pasado en indirecto: was good.',
    },
    {
      id: 'a2-m11-l4-ex5',
      type: 'match',
      concept: 'module 11 - reported speech review',
      difficulty: 3,
      prompt: 'Relaciona cada elemento con su forma correcta.',
      promptTranslation: 'Match each item with its correct form.',
      correctAnswer: 'say=sin persona; tell=con persona; are you tired?=if I was tired; where do you live?=where I lived; will call=would call',
      pairs: [
        { left: 'say', right: 'no lleva persona: said that...' },
        { left: 'tell', right: 'lleva persona: told me that...' },
        { left: '"Are you tired?"', right: 'asked me if I was tired.' },
        { left: '"Where do you live?"', right: 'asked me where I lived.' },
        { left: '"I will call you."', right: 'said she would call me.' },
      ],
      explanation: 'say va sin persona, tell con persona, las preguntas de sí/no usan "if" y las abiertas mantienen la wh- con orden normal; will pasa a would.',
    },
    {
      id: 'a2-m11-l4-ex6',
      type: 'reading',
      concept: 'module 11 - report a dialogue',
      difficulty: 4,
      prompt: 'Lee el diálogo y responde qué diría cada persona en estilo indirecto.',
      reading: {
        text: 'A conversation\nMarta: "I am very busy today. I will call you tomorrow."\nLuis: "Where do you work, Marta?"\nMarta: "I work in a hospital."\nLuis: "Do you like your job?"\nMarta: "Yes, I like it very much. The doctors are very kind."\n\nNow report what Marta and Luis said.',
        translation: 'Una conversación\nMarta: "Estoy muy ocupada hoy. Te llamaré mañana."\nLuis: "¿Dónde trabajas, Marta?"\nMarta: "Trabajo en un hospital."\nLuis: "¿Te gusta tu trabajo?"\nMarta: "Sí, me gusta muchísimo. Los médicos son muy amables."\n\nAhora cuenta en estilo indirecto lo que dijeron Marta y Luis.',
        questions: [
          {
            id: 'a2-m11-l4-ex6-q1',
            type: 'multiple_choice',
            concept: 'module 11 - report a dialogue',
            difficulty: 4,
            prompt: 'Marta dijo: "I am very busy today." → ¿Cómo lo contamos?',
            correctAnswer: 'Marta said that she was very busy that day.',
            options: ['Marta said that she is very busy today.', 'Marta said that she was very busy that day.', 'Marta told that she was very busy.'],
            explanation: 'Con backshift: am→was, today→that day. "She is" no, porque el presente cambia a pasado.',
          },
          {
            id: 'a2-m11-l4-ex6-q2',
            type: 'multiple_choice',
            concept: 'module 11 - report a dialogue',
            difficulty: 4,
            prompt: 'Marta dijo: "I will call you tomorrow." → ¿Cómo lo contamos?',
            correctAnswer: 'Marta said that she would call me the next day.',
            options: ['Marta said that she will call me tomorrow.', 'Marta said that she would call me the next day.', 'Marta told me she will call me.'],
            explanation: '"Will" cambia a "would" y "tomorrow" a "the next day". → she would call me the next day.',
          },
          {
            id: 'a2-m11-l4-ex6-q3',
            type: 'multiple_choice',
            concept: 'module 11 - report a dialogue',
            difficulty: 4,
            prompt: 'Luis preguntó: "Where do you work, Marta?" → ¿Cómo lo contamos?',
            correctAnswer: 'Luis asked Marta where she worked.',
            options: ['Luis asked Marta where she worked.', 'Luis asked Marta where did she work.', 'Luis asked Marta where she works.'],
            explanation: 'Pregunta indirecta sin inversión y con backshift: where she worked.',
          },
          {
            id: 'a2-m11-l4-ex6-q4',
            type: 'multiple_choice',
            concept: 'module 11 - report a dialogue',
            difficulty: 4,
            prompt: 'Marta dijo: "The doctors are very kind." → ¿Cómo lo contamos?',
            correctAnswer: 'Marta said that the doctors were very kind.',
            options: ['Marta said that the doctors were very kind.', 'Marta said that the doctors are very kind.', 'Marta told that the doctors were very kind.'],
            explanation: 'Con backshift: are→were. "Told that" sin persona es incorrecto; usamos "said that".',
          },
        ],
      },
      correctAnswer: 'reading complete',
      explanation: 'En el estilo indirecto cambia el tiempo (am→was, will→would, are→were), cambian los pronombres (I→she) y las preguntas no llevan inversión.',
    },
    {
      id: 'a2-m11-l4-ex7',
      type: 'true_false',
      concept: 'module 11 - reported speech review',
      difficulty: 3,
      prompt: '"I said her that the shop was closed" es una frase correcta.',
      promptTranslation: '"I said her that the shop was closed" is correct.',
      correctAnswer: 'false',
      acceptedAnswers: ['False', 'FALSE', 'f'],
      explanation: 'Falso. "Say" no lleva objeto de persona: la forma correcta es "I told her that the shop was closed".',
    },
    {
      id: 'a2-m11-l4-ex8',
      type: 'reorder',
      concept: 'module 11 - reported question',
      difficulty: 3,
      prompt: 'Ordena las palabras: She / if / asked / tired / me / was / I',
      promptTranslation: 'Ella me preguntó si estaba cansado.',
      correctAnswer: 'She asked me if I was tired.',
      words: ['She', 'asked', 'me', 'if', 'I', 'was', 'tired'],
      explanation: 'Orden: sujeto + asked + persona + if + sujeto + verbo. → She asked me if I was tired.',
    },
    {
      id: 'a2-m11-l4-ex9',
      type: 'fill_blank',
      concept: 'module 11 - backshift will',
      difficulty: 2,
      prompt: 'Completa: Directo: "I will help you." → "She said she ___ help me."',
      promptTranslation: 'Ella dijo que me ayudaría.',
      correctAnswer: 'would',
      acceptedAnswers: ['would', 'Would'],
      explanation: '"Will" cambia a "would". → She said she would help me.',
    },
    {
      id: 'a2-m11-l4-ex10',
      type: 'multiple_choice',
      concept: 'module 11 - say vs tell',
      difficulty: 3,
      prompt: 'Completa: "Please ___ me what happened."',
      promptTranslation: 'Por favor, cuéntame qué pasó.',
      correctAnswer: 'tell',
      options: ['tell', 'say', 'says'],
      explanation: 'Hay persona como objeto ("me"), así que usamos "tell". → Please tell me what happened.',
    },
  ],
  miniTest: [
    {
      id: 'a2-m11-l4-mt1',
      type: 'multiple_choice',
      concept: 'module 11 final - say vs tell',
      difficulty: 2,
      prompt: 'Completa: "She ___ that she was tired."',
      promptTranslation: 'Ella dijo que estaba cansada.',
      correctAnswer: 'said',
      options: ['said', 'told', 'told me'],
      explanation: 'Sin persona como objeto: said. → She said that she was tired.',
    },
    {
      id: 'a2-m11-l4-mt2',
      type: 'fill_blank',
      concept: 'module 11 final - backshift',
      difficulty: 2,
      prompt: 'Completa: Directo: "I work in Madrid." → "He said he ___ in Madrid."',
      promptTranslation: 'Él dijo que trabajaba en Madrid.',
      correctAnswer: 'worked',
      acceptedAnswers: ['worked', 'Worked'],
      explanation: 'Presente simple cambia a pasado simple: worked.',
    },
    {
      id: 'a2-m11-l4-mt3',
      type: 'error_correction',
      concept: 'module 11 final - reported question',
      difficulty: 3,
      prompt: 'Corrige el error: "She asked me what did I want."',
      promptTranslation: 'Ella me preguntó qué quería.',
      correctAnswer: 'She asked me what I wanted.',
      acceptedAnswers: ['She asked me what I wanted', 'She asked me what I wanted.', 'she asked me what i wanted'],
      acceptApproximate: true,
      explanation: 'Las preguntas indirectas no llevan inversión: what I wanted, no "what did I want".',
    },
    {
      id: 'a2-m11-l4-mt4',
      type: 'translate',
      concept: 'module 11 final - reported statement',
      difficulty: 3,
      prompt: 'Traduce: "Ella dijo que me llamaría."',
      promptTranslation: 'She said she would call me.',
      correctAnswer: 'She said she would call me.',
      acceptedAnswers: ['She said she would call me', 'She said that she would call me', 'she said she would call me.'],
      acceptApproximate: true,
      explanation: '"Me llamaría" = would call me. → She said she would call me.',
    },
    {
      id: 'a2-m11-l4-mt5',
      type: 'multiple_choice',
      concept: 'module 11 final - report a dialogue',
      difficulty: 4,
      prompt: 'Ana dijo: "I am very happy." → ¿Cómo lo contamos?',
      promptTranslation: 'Ana said: "I am very happy." How do we report it?',
      correctAnswer: 'Ana said that she was very happy.',
      options: ['Ana said that she was very happy.', 'Ana said that she is very happy.', 'Ana told that she was very happy.'],
      explanation: 'Con backshift (am→was) y cambio de pronombre (I→she): Ana said that she was very happy.',
    },
  ],
  reviewItems: ['a2-m11-l3'],
  prerequisites: ['a2-m11-l3'],
}
