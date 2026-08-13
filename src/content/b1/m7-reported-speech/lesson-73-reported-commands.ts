import type { Lesson } from '../../types'

export const lesson73ReportedCommands: Lesson = {
  id: 'b1-m7-l3',
  moduleId: 'm7-reported-speech',
  order: 2,
  title: 'Estilo indirecto: órdenes y peticiones (tell/ask + to)',
  objective: 'Convertir órdenes y peticiones en estilo indirecto con "tell/ask + persona + to + infinitivo", incluidas las formas negativas con "not to".',
  explanation_es: `Cuando contamos una orden o una petición, no usamos el mismo tiempo que en las oraciones; usamos un infinitivo.

Estructura: tell/ask + persona + to + verbo.
- Directo: "Sit down!" → He told me to sit down.
- Directo: "Please help me." → He asked me to help him.

¿"Tell" o "ask"?
- tell → damos una orden (más directo): He told me to sit down.
- ask → hacemos una petición educada (con "please" normalmente): He asked me to help him.

Para las órdenes negativas usamos "not to":
- Directo: "Don't worry." → She told me not to worry.
- Directo: "Don't be late!" → He told us not to be late.

¡CUIDADO con el negativo! El "don't" desaparece y se convierte en "not to + verbo":
- ❌ She told me don't worry.
- ✅ She told me not to worry.

En español hacemos algo parecido: "Siéntate" → "Me dijo que me sentara". Pero en inglés usamos "to + verbo" en lugar de "que + subjuntivo".`,
  examples: [
    { english: 'Direct: "Sit down!" → Reported: He told me to sit down.', spanish: 'Directo: "¡Siéntate!" → Indirecto: Él me dijo que me sentara.', note: 'tell + persona + to + verbo' },
    { english: 'Direct: "Don\'t worry." → Reported: She told me not to worry.', spanish: 'Directo: "No te preocupes." → Indirecto: Ella me dijo que no me preocupara.', note: 'negativa → not to + verbo' },
    { english: 'Direct: "Please help me." → Reported: He asked me to help him.', spanish: 'Directo: "Por favor, ayúdame." → Indirecto: Él me pidió que le ayudara.', note: 'petición educada → ask + to' },
    { english: 'Direct: "Open the window." → Reported: She asked me to open the window.', spanish: 'Directo: "Abre la ventana." → Indirecto: Ella me pidió que abriera la ventana.' },
    { english: 'Direct: "Don\'t be late!" → Reported: He told us not to be late.', spanish: 'Directo: "¡No lleguéis tarde!" → Indirecto: Él nos dijo que no llegáramos tarde.', note: '"don\'t" → "not to"' },
  ],
  rule: `Regla:
- Orden/petición afirmativa: tell/ask + persona + to + verbo: He told me to sit down.
- Orden/petición negativa: tell/ask + persona + not to + verbo: She told me not to worry.
- tell = orden (más directo); ask = petición educada (suele ir con "please").
- En el negativo, el "don't" del estilo directo se convierte en "not to".`,
  commonMistakes: [
    { wrong: '❌ He told me sit down.', correct: '✅ He told me to sit down.', explanation: 'Tras "told me" hace falta "to" + verbo: to sit down.' },
    { wrong: '❌ She told me don\'t worry.', correct: '✅ She told me not to worry.', explanation: 'La negativa en indirecto es "not to + verbo", no "don\'t".' },
    { wrong: '❌ He asked me help him.', correct: '✅ He asked me to help him.', explanation: '"Asked me" necesita "to" + verbo: to help him.' },
  ],
  vocabulary: [
    { word: 'order', translation_es: 'ordenar', level: 'B1', category: 'reporting verbs', partOfSpeech: 'verb', example: 'The boss ordered us to finish the report.', exampleTranslation: 'El jefe nos ordenó terminar el informe.' },
    { word: 'warn', translation_es: 'advertir', level: 'B1', category: 'reporting verbs', partOfSpeech: 'verb', example: 'She warned me not to walk alone at night.', exampleTranslation: 'Ella me advirtió que no caminara sola de noche.' },
    { word: 'remind', translation_es: 'recordar (algo a alguien)', level: 'B1', category: 'reporting verbs', partOfSpeech: 'verb', example: 'He reminded me to buy milk.', exampleTranslation: 'Él me recordó que comprara leche.' },
    { word: 'request', translation_es: 'solicitar, pedir', level: 'B1', category: 'reporting verbs', partOfSpeech: 'verb', example: 'They requested us to arrive early.', exampleTranslation: 'Ellos nos pidieron que llegáramos temprano.' },
  ],
  grammarPoints: [
    {
      id: 'gp-reported-commands',
      level: 'B1',
      name: 'Reported commands & requests',
      explanation_es: 'Las órdenes y peticiones se convierten con "tell/ask + persona + to + infinitivo". En negativa se usa "not to + infinitivo".',
      formula: 'tell/ask + persona + (not) to + verbo | "Sit down!" → He told me to sit down.',
      examples: ['He told me to sit down.', 'She told me not to worry.', 'He asked me to help him.'],
    },
  ],
  exercises: [
    {
      id: 'b1-m7-l3-ex1',
      type: 'multiple_choice',
      concept: 'reported commands to infinitive',
      difficulty: 1,
      prompt: 'Completa: Directo: "Sit down!" → "He told me ___ sit down."',
      promptTranslation: 'Él me dijo que me sentara.',
      correctAnswer: 'to',
      options: ['to', 'for', 'at'],
      explanation: 'Tras "told me" usamos "to" + verbo: He told me to sit down.',
    },
    {
      id: 'b1-m7-l3-ex2',
      type: 'fill_blank',
      concept: 'reported commands negative not to',
      difficulty: 1,
      prompt: 'Completa: Directo: "Don\'t worry." → "She told me ___ worry."',
      promptTranslation: 'Ella me dijo que no me preocupara.',
      correctAnswer: 'not to',
      acceptedAnswers: ['not to', 'Not to'],
      explanation: 'La negativa en indirecto es "not to + verbo": not to worry.',
    },
    {
      id: 'b1-m7-l3-ex3',
      type: 'multiple_choice',
      concept: 'reported commands ask vs tell',
      difficulty: 2,
      prompt: 'Completa: Directo: "Please help me." → "He ___ me to help him."',
      promptTranslation: 'Él me pidió que le ayudara.',
      correctAnswer: 'asked',
      options: ['asked', 'told', 'said'],
      explanation: 'Con "please" es una petición educada, así que usamos "asked". → He asked me to help him.',
    },
    {
      id: 'b1-m7-l3-ex4',
      type: 'error_correction',
      concept: 'reported commands to infinitive',
      difficulty: 3,
      prompt: 'Corrige el error: "He told me sit down."',
      promptTranslation: 'Él me dijo que me sentara.',
      correctAnswer: 'He told me to sit down.',
      acceptedAnswers: ['He told me to sit down', 'He told me to sit down.', 'he told me to sit down'],
      acceptApproximate: true,
      explanation: 'Tras "told me" hace falta "to" + verbo: He told me to sit down.',
    },
    {
      id: 'b1-m7-l3-ex5',
      type: 'reorder',
      concept: 'reported commands negative not to',
      difficulty: 3,
      prompt: 'Ordena las palabras: She / told / not / me / to / worry',
      promptTranslation: 'Ella me dijo que no me preocupara.',
      correctAnswer: 'She told me not to worry.',
      words: ['She', 'told', 'me', 'not', 'to', 'worry'],
      explanation: 'Orden: sujeto + told + persona + not to + verbo. → She told me not to worry.',
    },
    {
      id: 'b1-m7-l3-ex6',
      type: 'translate',
      concept: 'reported commands ask to',
      difficulty: 3,
      prompt: 'Traduce: "Ella me pidió que abriera la ventana."',
      promptTranslation: 'She asked me to open the window.',
      correctAnswer: 'She asked me to open the window.',
      acceptedAnswers: ['She asked me to open the window', 'She asked me to open the window.', 'she asked me to open the window'],
      acceptApproximate: true,
      explanation: '"Me pidió que" = asked me to. → She asked me to open the window.',
    },
    {
      id: 'b1-m7-l3-ex7',
      type: 'match',
      concept: 'reported commands',
      difficulty: 3,
      prompt: 'Relaciona cada orden o petición directa con su forma indirecta.',
      promptTranslation: 'Match each direct command or request with its reported form.',
      correctAnswer: '"Sit down!"→told me to sit down; "Don\'t worry."→told me not to worry; "Please help me."→asked me to help him; "Don\'t be late!"→told us not to be late; "Open the window."→asked me to open the window',
      pairs: [
        { left: '"Sit down!"', right: 'He told me to sit down.' },
        { left: '"Don\'t worry."', right: 'She told me not to worry.' },
        { left: '"Please help me."', right: 'He asked me to help him.' },
        { left: '"Don\'t be late!"', right: 'He told us not to be late.' },
        { left: '"Open the window."', right: 'She asked me to open the window.' },
      ],
      explanation: 'Las afirmativas usan "to + verbo"; las negativas, "not to + verbo". Las peticiones con "please" se convierten con "ask".',
    },
    {
      id: 'b1-m7-l3-ex8',
      type: 'true_false',
      concept: 'reported commands negative',
      difficulty: 3,
      prompt: 'La frase "He told me don\'t worry" es correcta en estilo indirecto.',
      promptTranslation: '"He told me don\'t worry" is correct reported speech.',
      correctAnswer: 'false',
      acceptedAnswers: ['False', 'FALSE', 'f'],
      explanation: 'Falso. La negativa en indirecto es "not to worry", no "don\'t worry".',
    },
    {
      id: 'b1-m7-l3-ex9',
      type: 'fill_blank',
      concept: 'reported commands to infinitive',
      difficulty: 3,
      prompt: 'Completa: Directo: "Open the window." → "She asked me ___ open the window."',
      promptTranslation: 'Ella me pidió que abriera la ventana.',
      correctAnswer: 'to',
      acceptedAnswers: ['to', 'To'],
      explanation: 'Petición con "asked me": asked me to open the window.',
    },
    {
      id: 'b1-m7-l3-ex10',
      type: 'multiple_choice',
      concept: 'reported commands negative',
      difficulty: 4,
      prompt: 'Completa: Directo: "Don\'t be late!" → "He told us ___ late."',
      promptTranslation: 'Él nos dijo que no llegáramos tarde.',
      correctAnswer: 'not to be',
      options: ['not to be', 'to be not', "don't be"],
      explanation: 'La negativa es "not to + verbo": not to be late. "Don\'t be" solo vale en estilo directo.',
    },
  ],
  miniTest: [
    {
      id: 'b1-m7-l3-mt1',
      type: 'multiple_choice',
      concept: 'reported commands to infinitive',
      difficulty: 2,
      prompt: 'Completa: Directo: "Close the door." → "He told me ___ the door."',
      promptTranslation: 'Él me dijo que cerrara la puerta.',
      correctAnswer: 'to close',
      options: ['to close', 'close', 'closing'],
      explanation: 'Tras "told me" usamos "to" + verbo: to close the door.',
    },
    {
      id: 'b1-m7-l3-mt2',
      type: 'fill_blank',
      concept: 'reported commands negative not to',
      difficulty: 2,
      prompt: 'Completa: Directo: "Don\'t touch that!" → "She told me ___ touch that."',
      promptTranslation: 'Ella me dijo que no tocara eso.',
      correctAnswer: 'not to',
      acceptedAnswers: ['not to', 'Not to'],
      explanation: 'Orden negativa en indirecto: not to + verbo. → She told me not to touch that.',
    },
    {
      id: 'b1-m7-l3-mt3',
      type: 'error_correction',
      concept: 'reported commands to infinitive',
      difficulty: 3,
      prompt: 'Corrige el error: "He asked me help him with the bags."',
      promptTranslation: 'Él me pidió que le ayudara con las bolsas.',
      correctAnswer: 'He asked me to help him with the bags.',
      acceptedAnswers: ['He asked me to help him with the bags', 'He asked me to help him with the bags.', 'he asked me to help him with the bags'],
      acceptApproximate: true,
      explanation: '"Asked me" necesita "to" + verbo: asked me to help him.',
    },
    {
      id: 'b1-m7-l3-mt4',
      type: 'translate',
      concept: 'reported commands ask to',
      difficulty: 3,
      prompt: 'Traduce: "Me pidieron que llegara temprano."',
      promptTranslation: 'They asked me to arrive early.',
      correctAnswer: 'They asked me to arrive early.',
      acceptedAnswers: ['They asked me to arrive early', 'They asked me to arrive early.', 'they asked me to arrive early'],
      acceptApproximate: true,
      explanation: '"Me pidieron que" = they asked me to. → They asked me to arrive early.',
    },
    {
      id: 'b1-m7-l3-mt5',
      type: 'multiple_choice',
      concept: 'reported commands negative',
      difficulty: 4,
      prompt: '¿Cuál es la forma correcta de estilo indirecto para "Don\'t forget the keys."?',
      promptTranslation: 'Which is the correct reported form of "Don\'t forget the keys."?',
      correctAnswer: 'She told me not to forget the keys.',
      options: ["She told me don't forget the keys.", 'She told me not to forget the keys.', 'She told me to not forget the keys.'],
      explanation: 'La negativa en indirecto es "not to + verbo": told me not to forget the keys.',
    },
  ],
  reviewItems: ['b1-m7-l2'],
  prerequisites: ['b1-m7-l2'],
}
