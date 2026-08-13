import type { Lesson } from '../../types'

export const lesson113ReportedQuestions: Lesson = {
  id: 'a2-m11-l3',
  moduleId: 'm11-reported-speech',
  order: 2,
  title: 'Estilo indirecto: preguntas (ask if / wh-)',
  objective: 'Convertir preguntas directas en preguntas indirectas con "ask if" (sí/no) y "ask + wh-" (abiertas), sin inversión.',
  explanation_es: `Para contar una pregunta en estilo indirecto usamos "ask" (preguntar) y cambiamos el orden de las palabras.

1) Preguntas de sí/no (yes/no questions) → usamos "ask if" o "ask whether":
- Directo: "Are you tired?" → Indirecto: She asked me if I was tired. = Ella me preguntó si estaba cansado.
- Directo: "Do you like coffee?" → Indirecto: He asked me if I liked coffee.

2) Preguntas abiertas (wh-questions: where, what, when, how...) → mantenemos la palabra interrogativa y ponemos orden de frase normal (sujeto + verbo), SIN inversión:
- Directo: "Where do you live?" → Indirecto: He asked me where I lived.
- Directo: "What time is it?" → Indirecto: She asked him what time it was.

¡MUY IMPORTANTE! En las preguntas indirectas NO hay inversión. El orden es: sujeto + verbo.
- ❌ She asked me where did I live.
- ✅ She asked me where I lived.

En español ocurre igual: "¿Dónde vives?" → "Me preguntó dónde vivía." No decimos "me preguntó dónde vivía yo?" con inversión.

Recuerda también el cambio de tiempo (backshift): are→was, do→did, is→was.`,
  examples: [
    { english: 'Direct: "Are you tired?" → Reported: She asked me if I was tired.', spanish: 'Directo: "¿Estás cansado?" → Indirecto: Ella me preguntó si estaba cansado.', note: 'ask + if (sí/no)' },
    { english: 'Direct: "Where do you live?" → Reported: He asked me where I lived.', spanish: 'Directo: "¿Dónde vives?" → Indirecto: Él me preguntó dónde vivía.', note: 'wh- + sujeto + verbo, sin inversión' },
    { english: 'She asked him what time it was.', spanish: 'Ella le preguntó qué hora era.' },
    { english: 'Direct: "Do you like coffee?" → Reported: He asked me if I liked coffee.', spanish: 'Directo: "¿Te gusta el café?" → Indirecto: Él me preguntó si me gustaba el café.', note: 'do → did, like → liked' },
    { english: 'They asked us where the station was.', spanish: 'Ellos nos preguntaron dónde estaba la estación.' },
  ],
  rule: `Regla:
- Preguntas de sí/no → ask + if/whether + frase (sujeto + verbo): She asked me if I was tired.
- Preguntas abiertas → ask + wh- (where/what/when...) + sujeto + verbo: He asked me where I lived.
- NUNCA hay inversión en la parte indirecta: ❌ "where did I live" → ✅ "where I lived".
- Aplica también el cambio de tiempo: are→was, do→did, will→would.`,
  commonMistakes: [
    { wrong: '❌ She asked me where did I live.', correct: '✅ She asked me where I lived.', explanation: 'En las preguntas indirectas no hay inversión: sujeto + verbo (where I lived), no "where did I live".' },
    { wrong: '❌ He asked if was I tired.', correct: '✅ He asked if I was tired.', explanation: 'Tras "if" usamos orden de frase normal: if I was tired, no "if was I tired".' },
    { wrong: '❌ She asked me if did I like coffee.', correct: '✅ She asked me if I liked coffee.', explanation: 'En la parte indirecta no se usa "do/did" para preguntar: if I liked coffee.' },
  ],
  vocabulary: [
    { word: 'ask', translation_es: 'preguntar', level: 'A1', category: 'verbs', partOfSpeech: 'verb', example: 'She asked me if I was tired.', exampleTranslation: 'Ella me preguntó si estaba cansado.' },
    { word: 'if / whether', translation_es: 'si (en preguntas indirectas)', level: 'A2', category: 'conjunctions', partOfSpeech: 'conjunction', example: 'He asked me if I liked coffee.', exampleTranslation: 'Él me preguntó si me gustaba el café.' },
    { word: 'ask for directions', translation_es: 'preguntar por indicaciones', level: 'A2', category: 'common phrases', partOfSpeech: 'phrase', example: 'They asked us where the station was.', exampleTranslation: 'Nos preguntaron dónde estaba la estación.' },
  ],
  grammarPoints: [
    {
      id: 'gp-reported-questions',
      level: 'A2',
      name: 'Reported questions (ask if / wh-)',
      explanation_es: 'Para preguntas indirectas usamos "ask + if" (sí/no) o "ask + wh-" (abiertas), con orden de frase normal y sin inversión, aplicando el cambio de tiempo.',
      formula: 'ask + if/whether + sujeto + verbo | ask + wh- + sujeto + verbo',
      examples: ['She asked me if I was tired.', 'He asked me where I lived.', 'She asked him what time it was.'],
    },
  ],
  exercises: [
    {
      id: 'a2-m11-l3-ex1',
      type: 'multiple_choice',
      concept: 'reported questions if',
      difficulty: 1,
      prompt: 'Completa: Directo: "Are you tired?" → "She asked me ___ I was tired."',
      promptTranslation: 'Ella me preguntó si estaba cansado.',
      correctAnswer: 'if',
      options: ['if', 'what', 'that'],
      explanation: 'Para preguntas de sí/no usamos "if" (o "whether"). → She asked me if I was tired.',
    },
    {
      id: 'a2-m11-l3-ex2',
      type: 'fill_blank',
      concept: 'reported questions wh-',
      difficulty: 2,
      prompt: 'Completa: Directo: "Where do you live?" → "He asked me where I ___."',
      promptTranslation: 'Él me preguntó dónde vivía.',
      correctAnswer: 'lived',
      acceptedAnswers: ['lived', 'Lived'],
      explanation: 'Cambio de tiempo: do you live → lived. → He asked me where I lived.',
    },
    {
      id: 'a2-m11-l3-ex3',
      type: 'multiple_choice',
      concept: 'reported questions wh-',
      difficulty: 2,
      prompt: 'Completa: "She asked him what time it ___."',
      promptTranslation: 'Ella le preguntó qué hora era.',
      correctAnswer: 'was',
      options: ['was', 'is', 'will be'],
      explanation: 'Directo: "What time is it?" → Indirecto con backshift: what time it was.',
    },
    {
      id: 'a2-m11-l3-ex4',
      type: 'error_correction',
      concept: 'reported questions no inversion',
      difficulty: 3,
      prompt: 'Corrige el error: "She asked me where did I live."',
      promptTranslation: 'Ella me preguntó dónde vivía.',
      correctAnswer: 'She asked me where I lived.',
      acceptedAnswers: ['She asked me where I lived', 'She asked me where I lived.', 'she asked me where i lived'],
      acceptApproximate: true,
      explanation: 'En las preguntas indirectas no hay inversión: where I lived, no "where did I live".',
    },
    {
      id: 'a2-m11-l3-ex5',
      type: 'reorder',
      concept: 'reported questions wh-',
      difficulty: 3,
      prompt: 'Ordena las palabras: He / me / where / asked / lived / I',
      promptTranslation: 'Él me preguntó dónde vivía.',
      correctAnswer: 'He asked me where I lived.',
      words: ['He', 'asked', 'me', 'where', 'I', 'lived'],
      explanation: 'Orden: sujeto + asked + persona + wh- + sujeto + verbo. → He asked me where I lived.',
    },
    {
      id: 'a2-m11-l3-ex6',
      type: 'translate',
      concept: 'reported questions',
      difficulty: 3,
      prompt: 'Traduce: "Me preguntó si estaba cansado."',
      promptTranslation: 'He asked me if I was tired.',
      correctAnswer: 'He asked me if I was tired.',
      acceptedAnswers: ['He asked me if I was tired', 'He asked me whether I was tired', 'he asked me if i was tired.'],
      acceptApproximate: true,
      explanation: '"Me preguntó si" = asked me if (o whether). → He asked me if I was tired.',
    },
    {
      id: 'a2-m11-l3-ex7',
      type: 'match',
      concept: 'reported questions',
      difficulty: 3,
      prompt: 'Relaciona cada pregunta directa con su forma indirecta.',
      promptTranslation: 'Match each direct question with its reported form.',
      correctAnswer: '"Are you tired?"→asked me if I was tired; "Where do you live?"→asked me where I lived; "Do you like coffee?"→asked me if I liked coffee; "What time is it?"→asked what time it was; "Will you come?"→asked if I would come',
      pairs: [
        { left: '"Are you tired?"', right: 'She asked me if I was tired.' },
        { left: '"Where do you live?"', right: 'He asked me where I lived.' },
        { left: '"Do you like coffee?"', right: 'He asked me if I liked coffee.' },
        { left: '"What time is it?"', right: 'She asked what time it was.' },
        { left: '"Will you come?"', right: 'She asked if I would come.' },
      ],
      explanation: 'Las preguntas de sí/no usan "if"; las abiertas mantienen la wh- con orden normal (sujeto + verbo) y aplican backshift.',
    },
    {
      id: 'a2-m11-l3-ex8',
      type: 'true_false',
      concept: 'reported questions no inversion',
      difficulty: 3,
      prompt: 'La frase "She asked me where did I live" es correcta en estilo indirecto.',
      promptTranslation: '"She asked me where did I live" is correct reported speech.',
      correctAnswer: 'false',
      acceptedAnswers: ['False', 'FALSE', 'f'],
      explanation: 'Falso. Las preguntas indirectas no llevan inversión: "She asked me where I lived".',
    },
    {
      id: 'a2-m11-l3-ex9',
      type: 'fill_blank',
      concept: 'reported questions if',
      difficulty: 2,
      prompt: 'Completa: Directo: "Do you like coffee?" → "He asked me ___ I liked coffee."',
      promptTranslation: 'Él me preguntó si me gustaba el café.',
      correctAnswer: 'if',
      acceptedAnswers: ['if', 'whether', 'If'],
      explanation: 'Pregunta de sí/no en indirecto: if o whether. → He asked me if I liked coffee.',
    },
    {
      id: 'a2-m11-l3-ex10',
      type: 'multiple_choice',
      concept: 'reported questions wh-',
      difficulty: 4,
      prompt: 'Completa: Directo: "When do you leave?" → "She asked me when I ___."',
      promptTranslation: 'Ella me preguntó cuándo me iba.',
      correctAnswer: 'left',
      options: ['left', 'leave', 'leaved'],
      explanation: 'Cambio de tiempo y sin inversión: do you leave → I left. "Leave" (verbo irregular) cambia a "left".',
    },
  ],
  miniTest: [
    {
      id: 'a2-m11-l3-mt1',
      type: 'multiple_choice',
      concept: 'reported questions if',
      difficulty: 2,
      prompt: 'Completa: Directo: "Are you hungry?" → "She asked me ___ I was hungry."',
      promptTranslation: 'Ella me preguntó si tenía hambre.',
      correctAnswer: 'if',
      options: ['if', 'where', 'that'],
      explanation: 'Pregunta de sí/no → if. → She asked me if I was hungry.',
    },
    {
      id: 'a2-m11-l3-mt2',
      type: 'fill_blank',
      concept: 'reported questions wh-',
      difficulty: 2,
      prompt: 'Completa: "They asked us where the station ___."',
      promptTranslation: 'Ellos nos preguntaron dónde estaba la estación.',
      correctAnswer: 'was',
      acceptedAnswers: ['was', 'Was'],
      explanation: 'Directo: "Where is the station?" → Indirecto: where the station was.',
    },
    {
      id: 'a2-m11-l3-mt3',
      type: 'error_correction',
      concept: 'reported questions no inversion',
      difficulty: 3,
      prompt: 'Corrige el error: "He asked me if did I like the film."',
      promptTranslation: 'Él me preguntó si me gustó la película.',
      correctAnswer: 'He asked me if I liked the film.',
      acceptedAnswers: ['He asked me if I liked the film', 'He asked me if I liked the film.', 'he asked me if i liked the film'],
      acceptApproximate: true,
      explanation: 'En la parte indirecta no usamos "did" como auxiliar de pregunta: if I liked the film.',
    },
    {
      id: 'a2-m11-l3-mt4',
      type: 'translate',
      concept: 'reported questions wh-',
      difficulty: 3,
      prompt: 'Traduce: "Él me preguntó dónde vivía."',
      promptTranslation: 'He asked me where I lived.',
      correctAnswer: 'He asked me where I lived.',
      acceptedAnswers: ['He asked me where I lived', 'He asked me where I lived.', 'he asked me where i lived'],
      acceptApproximate: true,
      explanation: '"Me preguntó dónde" = asked me where + sujeto + verbo (sin inversión): where I lived.',
    },
    {
      id: 'a2-m11-l3-mt5',
      type: 'multiple_choice',
      concept: 'reported questions wh-',
      difficulty: 4,
      prompt: '¿Cuál es la forma correcta de estilo indirecto para "Where do you work?"?',
      promptTranslation: 'Which is the correct reported form of "Where do you work?"?',
      correctAnswer: 'She asked me where I worked.',
      options: ['She asked me where did I work.', 'She asked me where I worked.', 'She asked me where do I work.'],
      explanation: 'Sin inversión y con cambio de tiempo: where I worked.',
    },
  ],
  reviewItems: ['a2-m11-l2'],
  prerequisites: ['a2-m11-l2'],
}
