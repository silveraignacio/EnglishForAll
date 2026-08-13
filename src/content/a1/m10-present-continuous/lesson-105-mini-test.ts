import type { Lesson } from '../../types'

export const lesson105MiniTest: Lesson = {
  id: 'a1-m10-l5',
  moduleId: 'm10-present-continuous',
  order: 4,
  title: 'Mini-test: Present Continuous',
  objective: 'Evaluar el Present Continuous (todas sus formas), su diferencia con el Present Simple y las sugerencias con Let\'s.',
  explanation_es: `Esta es la lección final del Módulo 10. Repasemos lo más importante:

**Present Continuous (afirmativo):** sujeto + am/is/are + verbo -ing.
- I am working. / She is reading. / They are watching TV.

**Ortografía del -ing:**
- work → working, read → reading (solo añadimos -ing).
- make → making (quitamos la -e muda).
- run → running, swim → swimming (doblamos la consonante).

**Negativo:** sujeto + am/is/are + not + verbo -ing.
- I am not working. / She isn't reading.

**Preguntas:** am/is/are + sujeto + verbo -ing?
- Are you working? / What are you doing?

**Present Simple vs Present Continuous:**
- Rutinas y hechos → Present Simple: I work every day.
- Ahora → Present Continuous: I am working now.

**Let's:** sugerencias → Let's go!

Haz los ejercicios y después el mini-test. ¡Suerte!`,
  examples: [
    { english: 'I am studying English now.', spanish: 'Estoy estudiando inglés ahora.' },
    { english: "She isn't working today.", spanish: 'Ella no está trabajando hoy.' },
    { english: 'What are you doing?', spanish: '¿Qué estás haciendo?' },
    { english: 'I work every day, but I am not working today.', spanish: 'Trabajo todos los días, pero hoy no estoy trabajando.' },
    { english: "Let's go to the park!", spanish: '¡Vamos al parque!' },
  ],
  rule: `- Afirmativo: Sujeto + am/is/are + verbo -ing.
- Negativo: Sujeto + am/is/are + not + verbo -ing.
- Preguntas: (WH) + am/is/are + sujeto + verbo -ing?
- -ing: normal → -ing; -e muda → se quita; CVC → doble consonante.
- Present Simple (rutinas/hechos) vs Present Continuous (ahora): every day → Simple; now → Continuous.
- Let's + verbo base = sugerencia.`,
  commonMistakes: [
    { wrong: '❌ I working now.', correct: '✅ I am working now.', explanation: 'El Present Continuous necesita "to be": I am working.' },
    { wrong: '❌ She is runing.', correct: '✅ She is running.', explanation: 'run → running (doble n).' },
    { wrong: '❌ What you are doing?', correct: '✅ What are you doing?', explanation: 'WH + to be + sujeto: What are you doing?' },
  ],
  vocabulary: [],
  grammarPoints: [],
  exercises: [
    {
      id: 'a1-m10-l5-ex1',
      type: 'multiple_choice',
      concept: 'module 10 - present continuous affirmative',
      difficulty: 1,
      prompt: 'Completa: "I ___ working now."',
      promptTranslation: 'Estoy trabajando ahora.',
      correctAnswer: 'am',
      options: ['am', 'is', 'are'],
      explanation: 'Con "I" usamos "am". → I am working now.',
    },
    {
      id: 'a1-m10-l5-ex2',
      type: 'multiple_choice',
      concept: 'module 10 - present continuous questions',
      difficulty: 1,
      prompt: 'Completa: "___ you watching TV?"',
      promptTranslation: '¿Estás viendo la tele?',
      correctAnswer: 'Are',
      options: ['Is', 'Are', 'Am'],
      explanation: 'Con "you" usamos "are" en preguntas. → Are you watching TV?',
    },
    {
      id: 'a1-m10-l5-ex3',
      type: 'fill_blank',
      concept: 'module 10 - verb + -ing',
      difficulty: 2,
      prompt: 'Completa: "She is ___ dinner." (verbo: cook)',
      promptTranslation: 'Ella está cocinando la cena.',
      correctAnswer: 'cooking',
      acceptedAnswers: ['Cooking'],
      explanation: 'cook → cooking (añadimos -ing). → She is cooking dinner.',
    },
    {
      id: 'a1-m10-l5-ex4',
      type: 'fill_blank',
      concept: 'module 10 - spelling (double consonant)',
      difficulty: 2,
      prompt: 'Completa: "He is ___ in the pool." (verbo: swim)',
      promptTranslation: 'Él está nadando en la piscina.',
      correctAnswer: 'swimming',
      acceptedAnswers: ['Swimming'],
      explanation: 'swim → swimming (doblamos la m). → He is swimming in the pool.',
    },
    {
      id: 'a1-m10-l5-ex5',
      type: 'multiple_choice',
      concept: 'module 10 - present continuous negative',
      difficulty: 2,
      prompt: 'Completa (negativo): "She ___ reading now."',
      promptTranslation: 'Ella no está leyendo ahora.',
      correctAnswer: "isn't",
      options: ["isn't", "aren't", "doesn't"],
      explanation: 'Negativo con "she": is not → isn\'t. → She isn\'t reading now.',
    },
    {
      id: 'a1-m10-l5-ex6',
      type: 'error_correction',
      concept: 'module 10 - spelling (silent e)',
      difficulty: 3,
      prompt: 'Corrige el error: "She is makeing a cake."',
      correctAnswer: 'She is making a cake.',
      acceptedAnswers: ['She is making a cake', 'she is making a cake.'],
      acceptApproximate: true,
      explanation: 'make → making (quitamos la -e muda). → She is making a cake.',
    },
    {
      id: 'a1-m10-l5-ex7',
      type: 'multiple_choice',
      concept: 'module 10 - simple vs continuous',
      difficulty: 3,
      prompt: 'Completa: "I ___ every day."',
      promptTranslation: 'Trabajo todos los días.',
      correctAnswer: 'work',
      options: ['work', 'am working', 'working'],
      explanation: '"every day" (rutina) → Present Simple: I work.',
    },
    {
      id: 'a1-m10-l5-ex8',
      type: 'reorder',
      concept: 'module 10 - WH questions',
      difficulty: 3,
      prompt: 'Ordena: What / you / are / doing',
      promptTranslation: '¿Qué estás haciendo?',
      correctAnswer: 'What are you doing?',
      words: ['What', 'you', 'are', 'doing'],
      explanation: 'WH + are + you + doing. → What are you doing?',
    },
    {
      id: 'a1-m10-l5-ex9',
      type: 'translate',
      concept: 'module 10 - present continuous affirmative',
      difficulty: 3,
      prompt: 'Traduce: "Estoy estudiando inglés ahora."',
      correctAnswer: 'I am studying English now.',
      acceptedAnswers: ["I'm studying English now", 'I am studying English now', "I'm studying English now."],
      acceptApproximate: true,
      explanation: 'I am (I\'m) + study → studying. → I am studying English now.',
    },
  ],
  miniTest: [
    {
      id: 'a1-m10-l5-mt1',
      type: 'multiple_choice',
      concept: 'module 10 final - affirmative',
      difficulty: 2,
      prompt: 'Completa: "They ___ watching TV now."',
      promptTranslation: 'Están viendo la tele ahora.',
      correctAnswer: 'are',
      options: ['is', 'are', 'am'],
      explanation: 'Con "they" usamos "are". → They are watching TV now.',
    },
    {
      id: 'a1-m10-l5-mt2',
      type: 'fill_blank',
      concept: 'module 10 final - verb + -ing',
      difficulty: 2,
      prompt: 'Completa: "I am ___ English now." (verbo: study)',
      promptTranslation: 'Estoy estudiando inglés ahora.',
      correctAnswer: 'studying',
      acceptedAnswers: ['Studying'],
      explanation: 'study → studying (añadimos -ing). → I am studying English now.',
    },
    {
      id: 'a1-m10-l5-mt3',
      type: 'multiple_choice',
      concept: 'module 10 final - negative',
      difficulty: 2,
      prompt: 'Completa (negativo): "He ___ working today."',
      promptTranslation: 'Él no está trabajando hoy.',
      correctAnswer: "isn't",
      options: ["isn't", "aren't", 'not'],
      explanation: 'Con "he" usamos "is" → is not = isn\'t. → He isn\'t working today.',
    },
    {
      id: 'a1-m10-l5-mt4',
      type: 'multiple_choice',
      concept: 'module 10 final - simple vs continuous',
      difficulty: 3,
      prompt: 'Completa: "She ___ in a bank." (hecho general)',
      promptTranslation: 'Ella trabaja en un banco.',
      correctAnswer: 'works',
      options: ['works', 'is working', 'work'],
      explanation: 'Hecho general → Present Simple, she + -s: works.',
    },
    {
      id: 'a1-m10-l5-mt5',
      type: 'reorder',
      concept: 'module 10 final - questions',
      difficulty: 3,
      prompt: 'Ordena: Are / you / working / today',
      promptTranslation: '¿Estás trabajando hoy?',
      correctAnswer: 'Are you working today?',
      words: ['Are', 'you', 'working', 'today'],
      explanation: 'Pregunta: Are + you + working + today? → Are you working today?',
    },
    {
      id: 'a1-m10-l5-mt6',
      type: 'translate',
      concept: 'module 10 final - let\'s',
      difficulty: 3,
      prompt: 'Traduce: "¡Vamos al parque!"',
      correctAnswer: "Let's go to the park!",
      acceptedAnswers: ["Let's go to the park", "let's go to the park."],
      acceptApproximate: true,
      explanation: 'Sugerencia con "Let\'s": Let\'s go to the park! = ¡Vamos al parque!',
    },
  ],
  reviewItems: ['a1-m10-l4'],
  prerequisites: ['a1-m10-l4'],
}
