import type { Lesson } from '../../types'

export const lesson55ReviewSimple: Lesson = {
  id: 'a1-m5-l5',
  moduleId: 'm5-routines',
  order: 4,
  title: 'Repaso de Present Simple',
  objective: 'Consolidar el Present Simple en afirmativo, negativo y preguntas.',
  explanation_es: `Hemos visto las tres formas del Present Simple. Repasemos:

### 1. Afirmativo

- I/You/We/They + **verbo** (sin -s): "I work." / "They drink coffee."
- He/She/It + **verbo + -s** (-s, -es, -ies): "She works." / "He watches TV." / "She studies English."
- Irregular: have → has. "He has a car."

### 2. Negativo

- I/You/We/They + **don\'t** + verbo: "I don\'t work on Sundays."
- He/She/It + **doesn\'t** + verbo (infinitivo): "She doesn\'t work on Sunday."
- Tras doesn\'t, el verbo **no** lleva -s: "He doesn\'t watch TV." / "He doesn\'t have a car."

### 3. Preguntas

- **Do** + I/you/we/they + verbo?: "Do you work?" / "Do they speak English?"
- **Does** + he/she/it + verbo?: "Does she work?" / "Does he study?"
- Tras does, el verbo **no** lleva -s: "Does she work?" / "Does he have a car?"
- WH: "Where do you work?" / "What does he do?" (profesión).
- Respuestas cortas: "Yes, I do." / "No, she doesn\'t."

### La idea clave

La -s de la 3ª persona **aparece una sola vez**:
- En afirmativo: **en el verbo principal** (She work**s**.).
- En negativo y preguntas: **en "does/doesn\'t"**, NO en el verbo principal (She doesn\'t work. / Does she work?).

¡Memoriza esto y evitarás el error más común!`,
  examples: [
    { english: 'I work in Madrid.', spanish: 'Trabajo en Madrid.', note: 'Afirmativo, I: verbo sin -s.' },
    { english: 'She works in a bank.', spanish: 'Ella trabaja en un banco.', note: 'Afirmativo, she: verbo con -s.' },
    { english: 'I don\'t work on Sundays.', spanish: 'No trabajo los domingos.', note: 'Negativo, I: don\'t + verbo.' },
    { english: 'She doesn\'t work on Sunday.', spanish: 'Ella no trabaja los domingos.', note: 'Negativo, she: doesn\'t + verbo (sin -s).' },
    { english: 'Do you like coffee?', spanish: '¿Te gusta el café?', note: 'Pregunta: Do + you + verbo?' },
    { english: 'Does she work in a bank?', spanish: '¿Ella trabaja en un banco?', note: 'Pregunta: Does + she + verbo (sin -s)?' },
    { english: 'Where does she live?', spanish: '¿Dónde vive ella?', note: 'WH + does + sujeto + verbo.' },
    { english: 'What does he do?', spanish: '¿Qué hace él? (profesión)', note: 'Forma estándar para preguntar la profesión.' },
  ],
  rule: `**Present Simple — resumen de las 3 formas:**

| Forma | Estructura | Ejemplo |
|---|---|---|
| Afirmativo | S + V (+-s en 3ª) | She works. |
| Negativo | S + don\'t/doesn\'t + V (base) | She doesn\'t work. |
| Pregunta | Do/Does + S + V (base)? | Does she work? |

**Verbos en 3ª persona (afirmativo):** -s, -es (después de -o, -s, -ch, -sh, -x, -z), -ies (consonante + y). Irregular: have → has.
**Tras don\'t/doesn\'t/Do/Does:** el verbo principal SIEMPRE va en infinitivo (sin -s).`,
  commonMistakes: [
    { wrong: '❌ She doesn\'t works on Sunday.', correct: '✅ She doesn\'t work on Sunday.', explanation: 'Tras "doesn\'t", el verbo NO lleva -s. La -s está en "does".' },
    { wrong: '❌ Does she works?', correct: '✅ Does she work?', explanation: 'Tras "does", el verbo principal vuelve a la base (sin -s).' },
    { wrong: '❌ I likes pizza.', correct: '✅ I like pizza.', explanation: 'Con "I" no añadimos -s al verbo.' },
  ],
  vocabulary: [],
  grammarPoints: [],
  exercises: [
    {
      id: 'a1-m5-l5-ex1',
      type: 'multiple_choice',
      concept: 'present simple review - affirmative',
      difficulty: 1,
      prompt: 'Completa: "She ___ in a bank."',
      promptTranslation: 'Ella trabaja en un banco.',
      correctAnswer: 'works',
      options: ['work', 'works'],
      explanation: 'Afirmativo, she: añade -s → works.',
    },
    {
      id: 'a1-m5-l5-ex2',
      type: 'multiple_choice',
      concept: 'present simple review - negative',
      difficulty: 1,
      prompt: 'Completa: "He ___ like pizza."',
      promptTranslation: 'A él no le gusta la pizza.',
      correctAnswer: 'doesn\'t',
      options: ['don\'t', 'doesn\'t', 'no'],
      explanation: 'Con "he" usamos "doesn\'t". → He doesn\'t like pizza.',
    },
    {
      id: 'a1-m5-l5-ex3',
      type: 'fill_blank',
      concept: 'present simple review - verb after doesn\'t',
      difficulty: 2,
      prompt: 'Completa: "She doesn\'t ___ TV." (verbo: watch)',
      promptTranslation: 'Ella no ve la tele.',
      correctAnswer: 'watch',
      acceptedAnswers: ['Watch'],
      explanation: 'Tras "doesn\'t", el verbo vuelve a la base: watch (sin -es).',
    },
    {
      id: 'a1-m5-l5-ex4',
      type: 'fill_blank',
      concept: 'present simple review - verb after Does',
      difficulty: 2,
      prompt: 'Completa: "Does he ___ English?" (verbo: study)',
      promptTranslation: '¿Él estudia inglés?',
      correctAnswer: 'study',
      acceptedAnswers: ['Study'],
      explanation: 'Tras "does", el verbo vuelve a la base: study (no "studies").',
    },
    {
      id: 'a1-m5-l5-ex5',
      type: 'error_correction',
      concept: 'present simple review - mixed',
      difficulty: 2,
      prompt: 'Corrige el error: "She don\'t work on Sunday."',
      correctAnswer: 'She doesn\'t work on Sunday.',
      acceptedAnswers: ['She doesn\'t work on Sunday', 'She does not work on Sunday.'],
      acceptApproximate: true,
      explanation: 'Con "she" usamos "doesn\'t", no "don\'t".',
    },
    {
      id: 'a1-m5-l5-ex6',
      type: 'translate',
      concept: 'present simple review - affirmative',
      difficulty: 2,
      prompt: 'Traduce: "Ella estudia inglés."',
      correctAnswer: 'She studies English.',
      acceptedAnswers: ['She studies English', 'she studies english.'],
      acceptApproximate: true,
      explanation: 'Afirmativo, she: consonante + y → -ies → studies.',
    },
    {
      id: 'a1-m5-l5-ex7',
      type: 'translate',
      concept: 'present simple review - negative',
      difficulty: 3,
      prompt: 'Traduce: "Él no tiene coche."',
      correctAnswer: 'He doesn\'t have a car.',
      acceptedAnswers: ['He does not have a car.', 'He doesn\'t have a car', 'he doesn\'t have a car.'],
      acceptApproximate: true,
      explanation: 'Con "he": doesn\'t + have (incluso el irregular vuelve a "have"). → He doesn\'t have a car.',
    },
    {
      id: 'a1-m5-l5-ex8',
      type: 'reorder',
      concept: 'present simple review - questions',
      difficulty: 3,
      prompt: 'Ordena: Where / do / you / work',
      promptTranslation: '¿Dónde trabajas?',
      correctAnswer: 'Where do you work?',
      words: ['Where', 'do', 'you', 'work'],
      explanation: 'WH + auxiliar + sujeto + verbo. → Where do you work?',
    },
    {
      id: 'a1-m5-l5-ex9',
      type: 'true_false',
      concept: 'present simple review - rule',
      difficulty: 2,
      prompt: 'Frase correcta: "Does she has a car?"',
      promptTranslation: '¿Tiene ella un coche?',
      correctAnswer: 'false',
      acceptedAnswers: ['False', 'FALSE'],
      explanation: 'Incorrecto. Tras "does", el verbo vuelve a la base: "Does she have a car?" (no "has").',
    },
    {
      id: 'a1-m5-l5-ex10',
      type: 'multiple_choice',
      concept: 'present simple review - WH',
      difficulty: 3,
      prompt: 'Elige la pregunta correcta para la profesión:',
      promptTranslation: 'Choose the correct question for someone\'s profession:',
      correctAnswer: 'What does he do?',
      options: ['What does he?', 'What he does?', 'What does he do?', 'What do he does?'],
      explanation: 'WH + Does + sujeto + verbo base "do". → What does he do? (se usa para la profesión).',
    },
  ],
  miniTest: [
    {
      id: 'a1-m5-l5-mt1',
      type: 'multiple_choice',
      concept: 'present simple review - affirmative 3rd person',
      difficulty: 1,
      prompt: 'Completa: "He ___ in London."',
      promptTranslation: 'Él vive en Londres.',
      correctAnswer: 'lives',
      options: ['live', 'lives', 'livees'],
      explanation: 'Afirmativo, he: añade -s → lives.',
    },
    {
      id: 'a1-m5-l5-mt2',
      type: 'fill_blank',
      concept: 'present simple review - negative',
      difficulty: 2,
      prompt: 'Completa: "We ___ speak Italian." (negativa)',
      promptTranslation: 'No hablamos italiano.',
      correctAnswer: 'don\'t',
      acceptedAnswers: ['do not'],
      explanation: 'Con "we" usamos "don\'t". → We don\'t speak Italian.',
    },
    {
      id: 'a1-m5-l5-mt3',
      type: 'error_correction',
      concept: 'present simple review - verb after doesn\'t',
      difficulty: 2,
      prompt: 'Corrige el error: "She doesn\'t watches TV."',
      correctAnswer: 'She doesn\'t watch TV.',
      acceptedAnswers: ['She doesn\'t watch TV', 'She does not watch TV.'],
      acceptApproximate: true,
      explanation: 'Tras "doesn\'t" el verbo vuelve a la base: watch (no "watches").',
    },
    {
      id: 'a1-m5-l5-mt4',
      type: 'translate',
      concept: 'present simple review - questions',
      difficulty: 3,
      prompt: 'Traduce: "¿Trabaja ella en un banco?"',
      correctAnswer: 'Does she work in a bank?',
      acceptedAnswers: ['Does she work in a bank', 'does she work in a bank?'],
      acceptApproximate: true,
      explanation: 'Does + sujeto + verbo base. → Does she work in a bank?',
    },
    {
      id: 'a1-m5-l5-mt5',
      type: 'reorder',
      concept: 'present simple review - WH',
      difficulty: 3,
      prompt: 'Ordena: What / does / he / do',
      promptTranslation: '¿Qué hace él? (profesión)',
      correctAnswer: 'What does he do?',
      words: ['What', 'does', 'he', 'do'],
      explanation: 'WH + does + sujeto + verbo base "do". → What does he do?',
    },
  ],
  reviewItems: ['a1-m5-l4'],
  prerequisites: ['a1-m5-l4'],
}