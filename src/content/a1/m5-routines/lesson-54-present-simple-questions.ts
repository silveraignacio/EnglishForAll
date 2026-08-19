import type { Lesson } from '../../types'

export const lesson54PresentSimpleQuestions: Lesson = {
  id: 'a1-m5-l4',
  moduleId: 'm5-routines',
  order: 3,
  title: 'Present Simple (preguntas: Do/Does)',
  objective: 'Aprender a hacer preguntas con Do/Does en Present Simple.',
  explanation_es: `En inglés, para hacer preguntas con verbos normales (que NO son "to be"), usamos **do** o **does** al principio.

Estructura:

- **Do** + I/you/we/they + verbo (sin -s) + ...?
- **Does** + he/she/it + verbo (sin -s) + ...?

Ejemplos:

- "Do you work?" = ¿Trabajas?
- "Does he work?" = ¿Trabaja él?
- "Do they speak English?" = ¿Hablan inglés?
- "Does she speak English?" = ¿Habla inglés ella?

### ¡Regla clave! Después de "Does", el verbo NO lleva -s

Igual que en el negativo, el verbo principal vuelve a la **forma base** (infinitivo) después de "does":

- ✅ "Does she work?" (no "works")
- ✅ "Does he watch TV?" (no "watches")
- ✅ "Does she study English?" (no "studies")
- ✅ "Does he have a car?" (no "has")

La -s ya está en "does". ¡No la dupliques!

### Respuestas cortas

- Yes, I do. / No, I don\'t.
- Yes, you do. / No, you don\'t.
- Yes, we do. / No, we don\'t.
- Yes, they do. / No, they don\'t.
- Yes, he does. / No, he doesn\'t.
- Yes, she does. / No, she doesn\'t.
- Yes, it does. / No, it doesn\'t.

### Preguntas con WH- (información)

Para preguntar por información, se añade la palabra interrogativa al principio:

- **Where** do you work? = ¿Dónde trabajas?
- **What** does he do? = ¿Qué hace él? (se usa para la **profesión**)
- **What** do you do? = ¿A qué te dedicas? (se usa para la profesión)
- **Where** does she live? = ¿Dónde vive ella?
- **How** do you go to work? = ¿Cómo vas al trabajo?

NOTA: "What do you do?" / "What does he do?" son formas estándar para preguntar por la profesión de alguien.`,
  examples: [
    { english: 'Do you like coffee?', spanish: '¿Te gusta el café?', note: 'Do + you + like (without -s).' },
    { english: 'Does she work in a bank?', spanish: '¿Ella trabaja en un banco?', note: 'Does + she + work (sin -s).' },
    { english: 'Do they live in Spain?', spanish: '¿Viven en España?', note: 'Do + they + live.' },
    { english: 'Where do you work?', spanish: '¿Dónde trabajas?', note: 'WH + do + subject + verb.' },
    { english: 'What does he do?', spanish: '¿Qué hace él? (profesión)', note: 'Se usa para preguntar la profesión.' },
    { english: 'Where does she live?', spanish: '¿Dónde vive ella?', note: 'Does + she + live (sin -s).' },
    { english: 'What do you do?', spanish: '¿A qué te dedicas?', note: 'Forma común para preguntar la profesión.' },
    { english: 'Yes, I do. / No, I don\'t.', spanish: 'Sí. / No.', note: 'Respuestas cortas con do/don\'t.' },
  ],
  rule: `**Preguntas — Present Simple:**

**Tabla de preguntas con el verbo *work*:**

| Pronombre | Auxiliar | Pregunta | Traducción |
|-----------|----------|----------|------------|
| I | do | Do I work here? | ¿Trabajo aquí? |
| You | do | Do you work in Madrid? | ¿Trabajas en Madrid? |
| He | does | Does he work in a bank? | ¿Trabaja él en un banco? |
| She | does | Does she work at home? | ¿Trabaja ella en casa? |
| It | does | Does it work? | ¿Funciona? |
| We | do | Do we work together? | ¿Trabajamos juntos? |
| They | do | Do they work in London? | ¿Trabajan ellos en Londres? |

**Regla de oro:**
- **Do** + I / you / we / they + verbo (infinitivo) + ...? → *Do you work?*
- **Does** + he / she / it + verbo (infinitivo) + ...? → *Does she work?*

**WH-questions:** palabra interrogativa (What/Where/How) + Do/Does + sujeto + verbo + ...?
- Where do you work? → ¿Dónde trabajas?
- What does he do? → ¿Qué hace él?

**Respuestas cortas:**
- Yes, I/you/we/they + do. / No, ... + don't.
- Yes, he/she/it + does. / No, ... + doesn't.

⚠️ Después de **Does**, el verbo NO lleva -s. La -s ya está en "does".`,
  formation: {
    title: 'Cómo se forma el Present Simple — Preguntas',
    intro: 'Para preguntar con verbos normales (que no son "to be") ponemos el auxiliar do o does al principio de la frase. Después del auxiliar, el verbo va en forma base, sin -s.',
    patterns: [
      {
        name: 'Pregunta sí/no',
        formula: 'Do / Does + sujeto + verbo en forma base + ...?',
        examples: [
          { english: 'Do you play football?', spanish: '¿Juegas al fútbol?' },
          { english: 'Does he play guitar?', spanish: '¿Él toca la guitarra?' },
          { english: 'Does she work in a bank?', spanish: '¿Ella trabaja en un banco?' },
          { english: 'Do they live in Spain?', spanish: '¿Viven en España?' },
        ],
        note: 'Do + I/you/we/they · Does + he/she/it. El verbo va sin -s: Does he play (no "plays").',
      },
      {
        name: 'Pregunta con WH- (información)',
        formula: 'Palabra interrogativa (What/Where/How...) + Do/Does + sujeto + verbo en forma base + ...?',
        examples: [
          { english: 'Where do you work?', spanish: '¿Dónde trabajas?' },
          { english: 'Where does she live?', spanish: '¿Dónde vive ella?' },
          { english: 'How do you go to work?', spanish: '¿Cómo vas al trabajo?' },
          { english: 'What does he do?', spanish: '¿A qué se dedica él? (profesión)' },
        ],
        note: '"What do you do?" y "What does he do?" son las formas estándar para preguntar por la profesión.',
      },
      {
        name: 'Respuesta corta',
        formula: 'Yes, + sujeto + do/does. / No, + sujeto + don\'t/doesn\'t.',
        examples: [
          { english: 'Yes, I do. / No, I don\'t.', spanish: 'Sí. / No.' },
          { english: 'Yes, she does. / No, she doesn\'t.', spanish: 'Sí. / No.' },
        ],
      },
    ],
    notes: [
      'Después de Does, el verbo NUNCA lleva -s: Does he have a car? (no "has").',
      'Las preguntas sí/no empiezan con el auxiliar; las de información, con la palabra interrogativa + auxiliar.',
      'En las respuestas cortas NO repetimos el verbo: Yes, I do (no "Yes, I work").',
    ],
  },
  commonMistakes: [
    { wrong: '❌ Do she work?', correct: '✅ Does she work?', explanation: 'Con "she" usamos "does", no "do".' },
    { wrong: '❌ Does she works?', correct: '✅ Does she work?', explanation: 'Después de "does", el verbo NO lleva -s.' },
    { wrong: '❌ You work?', correct: '✅ Do you work?', explanation: 'Para preguntas necesitamos "Do" al principio.' },
    { wrong: '❌ Where you work?', correct: '✅ Where do you work?', explanation: 'Inglés necesita el auxiliar "do": Where + do + you + work?' },
    { wrong: '❌ What she does?', correct: '✅ What does she do?', explanation: 'El orden es WH + does + sujeto + verbo base: What does she DO (no "does").' },
    { wrong: '❌ Does he likes pizza?', correct: '✅ Does he like pizza?', explanation: 'Después de "does", el verbo no lleva -s: like (no "likes").' },
  ],
  vocabulary: [],
  grammarPoints: [
    {
      id: 'gp-present-simple-questions',
      level: 'A1',
      name: 'Present Simple — questions (Do/Does)',
      explanation_es: 'Para preguntar: Do/Does + subject + verb? Con I/You/We/They: Do. Con He/She/It: Does. Las WH-questions añaden la palabra interrogativa al principio. El verbo principal es base (sin -s).',
      formula: 'Do/Does + subject + verb + ...?',
      examples: ['Do you work?', 'Does she work?', 'Where do you live?', 'What does he do?'],
    },
  ],
  exercises: [
    {
      id: 'a1-m5-l4-ex1',
      type: 'multiple_choice',
      concept: 'present simple questions - Do vs Does',
      difficulty: 1,
      prompt: 'Completa: "___ you work?"',
      promptTranslation: '¿Trabajas?',
      correctAnswer: 'Do',
      options: ['Do', 'Does', 'Are'],
      explanation: 'Con "you" usamos "Do". → Do you work?',
    },
    {
      id: 'a1-m5-l4-ex2',
      type: 'multiple_choice',
      concept: 'present simple questions - Do vs Does',
      difficulty: 1,
      prompt: 'Completa: "___ she work?"',
      promptTranslation: '¿Trabaja ella?',
      correctAnswer: 'Does',
      options: ['Do', 'Does', 'Is'],
      explanation: 'Con "she" usamos "Does". → Does she work?',
    },
    {
      id: 'a1-m5-l4-ex3',
      type: 'fill_blank',
      concept: 'present simple questions - verb after Does (no -s)',
      difficulty: 2,
      prompt: 'Completa: "Does she ___ English?" (verbo: speak)',
      promptTranslation: '¿Habla inglés ella?',
      correctAnswer: 'speak',
      acceptedAnswers: ['Speak'],
      explanation: 'Después de "does", el verbo no lleva -s: speak (sin -s).',
    },
    {
      id: 'a1-m5-l4-ex4',
      type: 'error_correction',
      concept: 'present simple questions - Do vs Does',
      difficulty: 2,
      prompt: 'Corrige el error: "Do she work in a bank?"',
      correctAnswer: 'Does she work in a bank?',
      acceptedAnswers: ['Does she work in a bank', 'does she work in a bank?'],
      acceptApproximate: true,
      explanation: 'Con "she" usamos "Does", no "Do".',
    },
    {
      id: 'a1-m5-l4-ex5',
      type: 'error_correction',
      concept: 'present simple questions - verb after Does',
      difficulty: 2,
      prompt: 'Corrige el error: "Does he works?"',
      correctAnswer: 'Does he work?',
      acceptedAnswers: ['Does he work', 'does he work?'],
      acceptApproximate: true,
      explanation: 'Después de "does", el verbo no lleva -s: work (no "works").',
    },
    {
      id: 'a1-m5-l4-ex6',
      type: 'reorder',
      concept: 'present simple questions - WH-question word order',
      difficulty: 3,
      prompt: 'Ordena: Where / do / you / live',
      promptTranslation: '¿Dónde vives?',
      correctAnswer: 'Where do you live?',
      words: ['Where', 'do', 'you', 'live'],
      explanation: 'Orden WH + auxiliar + sujeto + verbo. → Where do you live?',
    },
    {
      id: 'a1-m5-l4-ex7',
      type: 'reorder',
      concept: 'present simple questions - WH + Does',
      difficulty: 3,
      prompt: 'Ordena: What / does / he / do',
      promptTranslation: '¿Qué hace él? (profesión)',
      correctAnswer: 'What does he do?',
      words: ['What', 'does', 'he', 'do'],
      explanation: 'Orden WH + does + sujeto + verbo base (do). → What does he do? (pregunta por la profesión).',
    },
    {
      id: 'a1-m5-l4-ex8',
      type: 'translate',
      concept: 'present simple questions - WH',
      difficulty: 3,
      prompt: 'Traduce: "¿Dónde trabajas?"',
      correctAnswer: 'Where do you work?',
      acceptedAnswers: ['Where do you work', 'where do you work?'],
      acceptApproximate: true,
      explanation: 'WH + do + sujeto + verbo. → Where do you work?',
    },
    {
      id: 'a1-m5-l4-ex9',
      type: 'multiple_choice',
      concept: 'present simple questions - short answers',
      difficulty: 2,
      prompt: 'Responde: "Does she work in a bank?" → "Yes, ___"',
      promptTranslation: '¿Ella trabaja en un banco? — Sí.',
      correctAnswer: 'she does',
      options: ['she do', 'she does', 'she is', 'she doesn\'t'],
      explanation: 'Respuesta corta positiva con "she": "Yes, she does."',
    },
    {
      id: 'a1-m5-l4-ex10',
      type: 'error_correction',
      concept: 'present simple questions - WH word order',
      difficulty: 4,
      prompt: 'Corrige el error: "What she does?"',
      correctAnswer: 'What does she do?',
      acceptedAnswers: ['What does she do', 'what does she do?'],
      acceptApproximate: true,
      explanation: 'WH + does + sujeto + verbo base. NO ponemos "does" al final. → What does she do?',
    },
  ],
  miniTest: [
    {
      id: 'a1-m5-l4-mt1',
      type: 'multiple_choice',
      concept: 'present simple questions - Do vs Does',
      difficulty: 1,
      prompt: 'Completa: "___ he work?"',
      promptTranslation: '¿Trabaja él?',
      correctAnswer: 'Does',
      options: ['Do', 'Does', 'Is'],
      explanation: 'Con "he" usamos "Does". → Does he work?',
    },
    {
      id: 'a1-m5-l4-mt2',
      type: 'fill_blank',
      concept: 'present simple questions - verb after Does',
      difficulty: 2,
      prompt: 'Completa: "Does he ___ TV?" (verbo: watch)',
      promptTranslation: '¿Él ve la tele?',
      correctAnswer: 'watch',
      acceptedAnswers: ['Watch'],
      explanation: 'Después de "does", el verbo no lleva -s: watch (no "watches").',
    },
    {
      id: 'a1-m5-l4-mt3',
      type: 'error_correction',
      concept: 'present simple questions - base verb',
      difficulty: 2,
      prompt: 'Corrige el error: "Does he likes pizza?"',
      correctAnswer: 'Does he like pizza?',
      acceptedAnswers: ['Does he like pizza', 'does he like pizza?'],
      acceptApproximate: true,
      explanation: 'Después de "does", el verbo no lleva -s: like (no "likes").',
    },
    {
      id: 'a1-m5-l4-mt4',
      type: 'reorder',
      concept: 'present simple questions - WH',
      difficulty: 3,
      prompt: 'Ordena: Where / does / she / live',
      promptTranslation: '¿Dónde vive ella?',
      correctAnswer: 'Where does she live?',
      words: ['Where', 'does', 'she', 'live'],
      explanation: 'WH + does + sujeto + verbo base. → Where does she live?',
    },
    {
      id: 'a1-m5-l4-mt5',
      type: 'translate',
      concept: 'present simple questions',
      difficulty: 3,
      prompt: 'Traduce: "¿Trabajas en un banco?"',
      correctAnswer: 'Do you work in a bank?',
      acceptedAnswers: ['Do you work in a bank', 'do you work in a bank?'],
      acceptApproximate: true,
      explanation: 'Do + sujeto + verbo + resto. → Do you work in a bank?',
    },
  ],
  reviewItems: ['a1-m5-l3'],
  prerequisites: ['a1-m5-l3'],
}