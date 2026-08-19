import type { Lesson } from '../../types'

export const lesson53PresentSimpleNeg: Lesson = {
  id: 'a1-m5-l3',
  moduleId: 'm5-routines',
  order: 2,
  title: 'Present Simple (negativo: don\'t/doesn\'t)',
  objective: 'Aprender a formar frases negativas con don\'t y doesn\'t.',
  explanation_es: `Para formar una frase **negativa** en Present Simple usamos **don\'t** (do not) o **doesn\'t** (does not) **antes** del verbo.

- **don\'t** → con I, You, We, They.
- **doesn\'t** → con He, She, It.

Estructura:

- I / You / We / They + **don\'t** + verbo
- He / She / It + **doesn\'t** + verbo

Ejemplo: "I don\'t work on Sundays." = No trabajo los domingos.
Ejemplo: "She doesn\'t work on Sunday." = Ella no trabaja los domingos.

### ¡Regla CLAVE! El verbo principal vuelve al INFINITIVO después de doesn\'t

La parte "does" ya lleva la -s, así que el verbo principal **NO** lo hace. NO pongas -s después de doesn\'t.

- ✅ "She doesn\'t work." (verbo: WORK — sin -s)
- 🔴 "She doesn\'t works." (incorrecto: doble -s)
- ✅ "He doesn\'t watch TV." (verbo: WATCH)
- ✅ "She doesn\'t study." (verbo: STUDY, no "studies")
- ✅ "He doesn\'t have a car." (verbo: HAVE, no "has") — incluso el irregular === después de doesn\'t, el verbo vuelve a "have".

Es como si "does" se "comiera" la -s del verbo principal.

### Por qué usamos no "no"

En inglés NO decimos "I no work". Necesitamos el verbo auxiliar "do/does" para negar en Present Simple con verbos normales (que no son "to be").

- 🔴 "I no work" (incorrecto — mezcla español con inglés)
- ✅ "I don\'t work" (correcto)`,
  examples: [
    { english: 'I don\'t drink coffee.', spanish: 'No bebo café.', note: 'Negativa con I: don\'t + drink.' },
    { english: 'She doesn\'t work on Sunday.', spanish: 'Ella no trabaja los domingos.', note: 'Negativa con she: doesn\'t + work (sin -s).' },
    { english: 'We don\'t speak Italian.', spanish: 'No hablamos italiano.', note: 'Con we: don\'t + speak.' },
    { english: 'He doesn\'t like pizza.', spanish: 'A él no le gusta la pizza.', note: 'doesn\'t + like (sin -s).' },
    { english: 'They don\'t live in Spain.', spanish: 'Ellos no viven en España.', note: 'Con they: don\'t + live.' },
    { english: 'My sister doesn\'t drive.', spanish: 'Mi hermana no conduce.', note: 'Sujeto 3ª persona (my sister = she): doesn\'t + drive.' },
    { english: 'I don\'t have a car.', spanish: 'No tengo coche.', note: 'don\'t + have (sin -s).' },
  ],
  rule: `**Negativo — Present Simple:**

**Tabla del verbo *work* en negativo:**

| Pronombre | Negativo | Ejemplo | Traducción |
|-----------|----------|---------|------------|
| I | don't work | I don't work on Sundays. | No trabajo los domingos. |
| You | don't work | You don't work here. | Tú no trabajas aquí. |
| He | doesn't work | He doesn't work today. | Él no trabaja hoy. |
| She | doesn't work | She doesn't work in a bank. | Ella no trabaja en un banco. |
| It | doesn't work | It doesn't work. | No funciona. |
| We | don't work | We don't work at night. | No trabajamos de noche. |
| They | don't work | They don't work in Madrid. | Ellos no trabajan en Madrid. |

**Regla de oro:**
- I / You / We / They + **don't** + verbo (infinitivo) → *I don't work*
- He / She / It + **doesn't** + verbo (infinitivo) → *She doesn't work*

⚠️ **CLAVE:** Después de **don't / doesn't**, el verbo principal NO lleva -s. Vuelve a la forma base (infinitivo).

- ✅ She doesn't work.   🔴 She doesn't works.
- ✅ He doesn't watch TV.  🔴 He doesn't watches TV.
- ✅ He doesn't have a car. 🔴 He doesn't has a car.` +
    ``,
  formation: {
    title: 'Cómo se forma el Present Simple — Negativo',
    intro: 'Para negar usamos el auxiliar don\'t (I/you/we/they) o doesn\'t (he/she/it) + el verbo en forma base. El verbo principal vuelve al infinitivo: la -s ya la lleva "does".',
    patterns: [
      {
        name: 'Negativo',
        formula: 'Sujeto + don\'t / doesn\'t + verbo en forma base + complemento',
        examples: [
          { english: 'I don\'t play football.', spanish: 'No juego al fútbol.' },
          { english: 'He doesn\'t play guitar.', spanish: 'Él no toca la guitarra.' },
          { english: 'She doesn\'t work on Sundays.', spanish: 'Ella no trabaja los domingos.' },
          { english: 'We don\'t speak Italian.', spanish: 'No hablamos italiano.' },
          { english: 'They don\'t live in Spain.', spanish: 'Ellos no viven en España.' },
        ],
        note: '¿Don\'t o doesn\'t? I/You/We/They → don\'t. He/She/It → doesn\'t. Después de ambos, el verbo va SIN -s.',
      },
    ],
    notes: [
      'Nunca se usa "no" delante del verbo: "I no work" es incorrecto → "I don\'t work".',
      'Con doesn\'t, incluso el irregular have vuelve a la forma base: "He doesn\'t have a car" (no "has").',
      'Formas completas: don\'t = do not · doesn\'t = does not.',
    ],
  },
  commonMistakes: [
    { wrong: '❌ She don\'t work.', correct: '✅ She doesn\'t work.', explanation: 'Con "she" usamos "doesn\'t", no "don\'t".' },
    { wrong: '❌ He doesn\'t works.', correct: '✅ He doesn\'t work.', explanation: 'Después de "doesn\'t", el verbo NO lleva -s. La -s ya está en "does".' },
    { wrong: '❌ I no work.', correct: '✅ I don\'t work.', explanation: 'No usamos "no" antes del verbo. Usamos "don\'t".' },
    { wrong: '❌ She no like pizza.', correct: '✅ She doesn\'t like pizza.', explanation: 'Igual: con "she" usamos "doesn\'t" + verbo base.' },
    { wrong: '❌ He don\'t have a car.', correct: '✅ He doesn\'t have a car.', explanation: 'Con "he" usamos "doesn\'t". Y el verbo vuelve a "have" (no "has").' },
  ],
  vocabulary: [],
  grammarPoints: [
    {
      id: 'gp-present-simple-negative',
      level: 'A1',
      name: 'Present Simple — negative',
      explanation_es: 'Sujeto + don\'t/doesn\'t + verbo. Con I/You/We/They: don\'t. Con He/She/It: doesn\'t. El verbo principal vuelve al infinitivo (sin -s).',
      formula: 'I/You/We/They + don\'t + verb | He/She/It + doesn\'t + verb',
      examples: ['I don\'t work on Sundays.', 'She doesn\'t work on Sunday.', 'We don\'t speak Italian.', 'He doesn\'t like pizza.'],
    },
  ],
  exercises: [
    {
      id: 'a1-m5-l3-ex1',
      type: 'multiple_choice',
      concept: 'present simple negative - don\'t vs doesn\'t',
      difficulty: 1,
      prompt: 'Completa: "I ___ drink coffee."',
      promptTranslation: 'No bebo café.',
      correctAnswer: 'don\'t',
      options: ['don\'t', 'doesn\'t', 'no'],
      explanation: 'Con "I" usamos "don\'t". → I don\'t drink coffee.',
    },
    {
      id: 'a1-m5-l3-ex2',
      type: 'multiple_choice',
      concept: 'present simple negative - don\'t vs doesn\'t',
      difficulty: 1,
      prompt: 'Completa: "She ___ work on Sunday."',
      promptTranslation: 'Ella no trabaja los domingos.',
      correctAnswer: 'doesn\'t',
      options: ['don\'t', 'doesn\'t', 'no'],
      explanation: 'Con "she" usamos "doesn\'t". → She doesn\'t work on Sunday.',
    },
    {
      id: 'a1-m5-l3-ex3',
      type: 'fill_blank',
      concept: 'present simple negative - verb after doesn\'t (no -s)',
      difficulty: 2,
      prompt: 'Completa: "He doesn\'t ___ TV." (verbo: watch)',
      promptTranslation: 'Él no ve la tele.',
      correctAnswer: 'watch',
      acceptedAnswers: ['Watch'],
      explanation: 'Después de "doesn\'t", el verbo no lleva -s: watch (no "watches").',
    },
    {
      id: 'a1-m5-l3-ex4',
      type: 'fill_blank',
      concept: 'present simple negative - verb after doesn\'t (irregular have)',
      difficulty: 2,
      prompt: 'Completa: "He doesn\'t ___ a car." (verbo: have)',
      promptTranslation: 'Él no tiene coche.',
      correctAnswer: 'have',
      acceptedAnswers: ['Have'],
      explanation: 'Incluso el irregular "have" vuelve a la base después de doesn\'t: "He doesn\'t have" (NO "has").',
    },
    {
      id: 'a1-m5-l3-ex5',
      type: 'error_correction',
      concept: 'present simple negative - verb after doesn\'t',
      difficulty: 2,
      prompt: 'Corrige el error: "She doesn\'t works on Sunday."',
      correctAnswer: 'She doesn\'t work on Sunday.',
      acceptedAnswers: ['She doesn\'t work on Sunday', 'She does not work on Sunday.'],
      acceptApproximate: true,
      explanation: 'Después de "doesn\'t", el verbo NO lleva -s. La -s está en "does".',
    },
    {
      id: 'a1-m5-l3-ex6',
      type: 'error_correction',
      concept: 'present simple negative - don\'t vs doesn\'t',
      difficulty: 2,
      prompt: 'Corrige el error: "She don\'t work on Sunday."',
      correctAnswer: 'She doesn\'t work on Sunday.',
      acceptedAnswers: ['She doesn\'t work on Sunday', 'She does not work on Sunday.'],
      acceptApproximate: true,
      explanation: 'Con "she" usamos "doesn\'t", no "don\'t".',
    },
    {
      id: 'a1-m5-l3-ex7',
      type: 'translate',
      concept: 'present simple negative',
      difficulty: 2,
      prompt: 'Traduce: "Ella no trabaja los domingos."',
      correctAnswer: 'She doesn\'t work on Sunday.',
      acceptedAnswers: ['She does not work on Sunday.', 'She doesn\'t work on Sunday', 'she doesn\'t work on sunday.'],
      acceptApproximate: true,
      explanation: 'Con "she" → doesn\'t + work (base). → She doesn\'t work on Sunday.',
    },
    {
      id: 'a1-m5-l3-ex8',
      type: 'true_false',
      concept: 'present simple negative - rule',
      difficulty: 2,
      prompt: 'Frase correcta: "He doesn\'t drives."',
      promptTranslation: 'Él no conduce.',
      correctAnswer: 'false',
      acceptedAnswers: ['False', 'FALSE'],
      explanation: 'Incorrecto. Después de "doesn\'t" el verbo NO lleva -s. Correcto: "He doesn\'t drive."',
    },
    {
      id: 'a1-m5-l3-ex9',
      type: 'translate',
      concept: 'present simple negative',
      difficulty: 3,
      prompt: 'Traduce: "No hablamos italiano."',
      correctAnswer: 'We don\'t speak Italian.',
      acceptedAnswers: ['We do not speak Italian.', 'We don\'t speak Italian', 'we don\'t speak italian.'],
      acceptApproximate: true,
      explanation: 'Con "we" → don\'t + speak. → We don\'t speak Italian.',
    },
    {
      id: 'a1-m5-l3-ex10',
      type: 'multiple_choice',
      concept: 'present simple negative - don\'t vs doesn\'t',
      difficulty: 3,
      prompt: 'Elige la frase correcta:',
      promptTranslation: 'Choose the correct sentence:',
      correctAnswer: 'My sister doesn\'t drive.',
      options: ['My sister don\'t drive.', 'My sister doesn\'t drives.', 'My sister doesn\'t drive.', 'My sister no drive.'],
      explanation: '"My sister" → 3ª persona (she) → usamos "doesn\'t" + verbo base (drive, sin -s). → My sister doesn\'t drive.',
    },
  ],
  miniTest: [
    {
      id: 'a1-m5-l3-mt1',
      type: 'multiple_choice',
      concept: 'present simple negative - don\'t vs doesn\'t',
      difficulty: 1,
      prompt: 'Completa: "We ___ speak Italian."',
      promptTranslation: 'No hablamos italiano.',
      correctAnswer: 'don\'t',
      options: ['don\'t', 'doesn\'t', 'no'],
      explanation: 'Con "we" usamos "don\'t". → We don\'t speak Italian.',
    },
    {
      id: 'a1-m5-l3-mt2',
      type: 'fill_blank',
      concept: 'present simple negative - verb after doesn\'t',
      difficulty: 2,
      prompt: 'Completa: "She doesn\'t ___ pizza." (verbo: like)',
      promptTranslation: 'A ella no le gusta la pizza.',
      correctAnswer: 'like',
      acceptedAnswers: ['Like'],
      explanation: 'Después de "doesn\'t", el verbo no lleva -s: like (sin -s).',
    },
    {
      id: 'a1-m5-l3-mt3',
      type: 'error_correction',
      concept: 'present simple negative - verb after doesn\'t',
      difficulty: 2,
      prompt: 'Corrige el error: "He doesn\'t likes pizza."',
      correctAnswer: 'He doesn\'t like pizza.',
      acceptedAnswers: ['He doesn\'t like pizza', 'He does not like pizza.'],
      acceptApproximate: true,
      explanation: 'Después de "doesn\'t" el verbo vuelve a la base: like (no "likes").',
    },
    {
      id: 'a1-m5-l3-mt4',
      type: 'translate',
      concept: 'present simple negative',
      difficulty: 3,
      prompt: 'Traduce: "No bebo café."',
      correctAnswer: 'I don\'t drink coffee.',
      acceptedAnswers: ['I do not drink coffee.', 'I don\'t drink coffee', 'i don\'t drink coffee.'],
      acceptApproximate: true,
      explanation: 'Con "I" → don\'t + drink. → I don\'t drink coffee.',
    },
    {
      id: 'a1-m5-l3-mt5',
      type: 'multiple_choice',
      concept: 'present simple negative - irregular have',
      difficulty: 3,
      prompt: 'Elige la frase correcta:',
      promptTranslation: 'Choose the correct sentence:',
      correctAnswer: 'He doesn\'t have a car.',
      options: ['He don\'t have a car.', 'He doesn\'t has a car.', 'He doesn\'t have a car.', 'He no have a car.'],
      explanation: '"He" → doesn\'t + have (el irregular vuelve a "have" después de doesn\'t). → He doesn\'t have a car.',
    },
  ],
  reviewItems: ['a1-m5-l2'],
  prerequisites: ['a1-m5-l2'],
}