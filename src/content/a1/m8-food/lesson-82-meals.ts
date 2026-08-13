import type { Lesson } from '../../types'

export const lesson82Meals: Lesson = {
  id: 'a1-m8-l2',
  moduleId: 'm8-food',
  order: 1,
  title: 'Las comidas del día',
  objective: 'Aprender los nombres de las comidas del día y usar "have" para hablar de desayunar, almorzar y cenar.',
  explanation_es: `En inglés, las comidas del día tienen nombres propios:

- **breakfast** (desayuno)
- **lunch** (almuerzo o comida de mediodía)
- **dinner** (cena)
- **snack** (tentempié, algo pequeño que se come entre comidas)

Para decir que desayunas, comes o cenas, usamos el verbo **"have"** (tomar):

- **have breakfast** = desayunar
- **have lunch** = almorzar / comer
- **have dinner** = cenar

Es muy importante recordar: en inglés NO existe un verbo único para "desayunar" o "cenar". Siempre usamos "have" + el nombre de la comida. Decimos "I have breakfast", nunca "I breakfast".

La estructura es sencilla: **sujeto + have + la comida**.

Para preguntar qué come alguien en una comida, usamos "What do you have for breakfast?" = ¿Qué desayunas? Fíjate en la palabra "for": *for breakfast*, *for lunch*, *for dinner*.`,
  examples: [
    { english: 'I have breakfast at 7.', spanish: 'Desayuno a las 7.', note: 'have breakfast = desayunar.' },
    { english: 'We have dinner at 8.', spanish: 'Cenamos a las 8.', note: 'have dinner = cenar.' },
    { english: 'What do you have for breakfast?', spanish: '¿Qué desayunas?', note: 'for + la comida: for breakfast.' },
    { english: 'She has lunch at 1.', spanish: 'Ella come (almuerza) a la 1.', note: '3ª persona: have → has.' },
    { english: 'I eat a snack at 5.', spanish: 'Como un tentempié a las 5.', note: 'snack = algo pequeño entre comidas.' },
  ],
  rule: `**Regla general:**
- I / You / We / They + have + breakfast / lunch / dinner
- He / She / It + has + breakfast / lunch / dinner (3ª persona: have → has)
- Para preguntar: What do you have for breakfast?
- "have dinner" = cenar (NUNCA "take dinner").

**Comidas:**
- breakfast (desayuno), lunch (almuerzo), dinner (cena), snack (tentempié).`,
  commonMistakes: [
    { wrong: '❌ I breakfast at 7.', correct: '✅ I have breakfast at 7.', explanation: 'En inglés no existe el verbo "breakfast". Para decir "desayunar" usamos "have breakfast".' },
    { wrong: '❌ I take dinner.', correct: '✅ I have dinner.', explanation: 'Para las comidas usamos siempre "have", nunca "take": have dinner = cenar.' },
    { wrong: '❌ I have the breakfast.', correct: '✅ I have breakfast.', explanation: 'Con las comidas no usamos artículo: have breakfast, have lunch, have dinner.' },
    { wrong: '❌ She have lunch at 1.', correct: '✅ She has lunch at 1.', explanation: 'Con "she" (3ª persona) el verbo "have" cambia a "has".' },
  ],
  vocabulary: [
    { word: 'breakfast', translation_es: 'desayuno', level: 'A1', category: 'meals', partOfSpeech: 'noun', example: 'I have breakfast at 7.', exampleTranslation: 'Desayuno a las 7.' },
    { word: 'lunch', translation_es: 'almuerzo', level: 'A1', category: 'meals', partOfSpeech: 'noun', example: 'We have lunch at 1.', exampleTranslation: 'Comemos a la 1.' },
    { word: 'dinner', translation_es: 'cena', level: 'A1', category: 'meals', partOfSpeech: 'noun', example: 'We have dinner at 8.', exampleTranslation: 'Cenamos a las 8.' },
    { word: 'snack', translation_es: 'tentempié', level: 'A1', category: 'meals', partOfSpeech: 'noun', example: 'I eat a snack at 5.', exampleTranslation: 'Como un tentempié a las 5.' },
  ],
  grammarPoints: [
    {
      id: 'gp-have-meals',
      level: 'A1',
      name: 'have + breakfast / lunch / dinner',
      explanation_es: 'Para decir desayunar, almorzar y cenar usamos el verbo "have" + el nombre de la comida. En inglés no existe un verbo único para estas acciones.',
      formula: 'Subject + have/has + breakfast/lunch/dinner',
      examples: ['I have breakfast at 7.', 'She has lunch at 1.', 'We have dinner at 8.'],
    },
  ],
  exercises: [
    {
      id: 'a1-m8-l2-ex1',
      type: 'fill_blank',
      concept: 'meals - have breakfast',
      difficulty: 1,
      prompt: 'Completa: "I have ___ at 7." (desayuno)',
      promptTranslation: 'Desayuno a las 7.',
      correctAnswer: 'breakfast',
      acceptedAnswers: ['breakfast', 'Breakfast'],
      explanation: 'El desayuno es "breakfast". Para decir "desayuno a las 7" → I have breakfast at 7.',
    },
    {
      id: 'a1-m8-l2-ex2',
      type: 'multiple_choice',
      concept: 'meals - have + meal verb',
      difficulty: 1,
      prompt: 'Completa: "I ___ breakfast at 7."',
      promptTranslation: 'Desayuno a las 7.',
      correctAnswer: 'have',
      options: ['have', 'take', 'make'],
      explanation: 'Para las comidas usamos "have", no "take" ni "make". → I have breakfast at 7.',
    },
    {
      id: 'a1-m8-l2-ex3',
      type: 'multiple_choice',
      concept: 'meals - for breakfast',
      difficulty: 2,
      prompt: 'Completa: "What do you have ___ breakfast?"',
      promptTranslation: '¿Qué desayunas?',
      correctAnswer: 'for',
      options: ['for', 'on', 'in'],
      explanation: 'Con las comidas usamos "for": for breakfast, for lunch, for dinner. → What do you have for breakfast?',
    },
    {
      id: 'a1-m8-l2-ex4',
      type: 'fill_blank',
      concept: 'meals - have dinner',
      difficulty: 2,
      prompt: 'Completa: "We have ___ at 8." (cena)',
      promptTranslation: 'Cenamos a las 8.',
      correctAnswer: 'dinner',
      acceptedAnswers: ['dinner', 'Dinner'],
      explanation: 'La cena es "dinner". "have dinner" = cenar. → We have dinner at 8.',
    },
    {
      id: 'a1-m8-l2-ex5',
      type: 'multiple_choice',
      concept: 'meals - 3rd person has',
      difficulty: 2,
      prompt: 'Completa: "She ___ lunch at 1."',
      promptTranslation: 'Ella come (almuerza) a la 1.',
      correctAnswer: 'has',
      options: ['have', 'haves', 'has'],
      explanation: 'Con "she" (3ª persona) el verbo "have" cambia a "has". → She has lunch at 1.',
    },
    {
      id: 'a1-m8-l2-ex6',
      type: 'translate',
      concept: 'meals - translate',
      difficulty: 3,
      prompt: 'Traduce: "Cenamos a las 8."',
      correctAnswer: 'We have dinner at 8.',
      acceptedAnswers: ['We have dinner at 8', 'we have dinner at 8.', 'we have dinner at 8'],
      acceptApproximate: true,
      explanation: '"Cenamos" → We have dinner (no existe un verbo "cener"). "a las 8" → at 8.',
    },
    {
      id: 'a1-m8-l2-ex7',
      type: 'translate',
      concept: 'meals - translate',
      difficulty: 3,
      prompt: 'Traduce: "¿Qué desayunas?"',
      correctAnswer: 'What do you have for breakfast?',
      acceptedAnswers: ['What do you have for breakfast', 'what do you have for breakfast?', 'what do you have for breakfast'],
      acceptApproximate: true,
      explanation: 'Pregunta con What + do + sujeto + have + for + comida: What do you have for breakfast?',
    },
    {
      id: 'a1-m8-l2-ex8',
      type: 'reorder',
      concept: 'meals - word order',
      difficulty: 3,
      prompt: 'Ordena las palabras: I / have / lunch / at / 1',
      promptTranslation: 'Como (almuerzo) a la 1.',
      correctAnswer: 'I have lunch at 1.',
      words: ['I', 'have', 'lunch', 'at', '1'],
      explanation: 'Orden: sujeto + have + comida + hora. → I have lunch at 1.',
    },
  ],
  miniTest: [
    {
      id: 'a1-m8-l2-mt1',
      type: 'multiple_choice',
      concept: 'meals - have dinner',
      difficulty: 1,
      prompt: 'Completa: "We ___ dinner at 8."',
      promptTranslation: 'Cenamos a las 8.',
      correctAnswer: 'have',
      options: ['have', 'has', 'take'],
      explanation: 'Con "we" usamos "have" (sin -s). Para las comidas siempre "have": have dinner = cenar.',
    },
    {
      id: 'a1-m8-l2-mt2',
      type: 'fill_blank',
      concept: 'meals - lunch',
      difficulty: 2,
      prompt: 'Completa: "I have ___ at 1." (almuerzo)',
      promptTranslation: 'Como (almuerzo) a la 1.',
      correctAnswer: 'lunch',
      acceptedAnswers: ['lunch', 'Lunch'],
      explanation: 'El almuerzo es "lunch". "have lunch" = almorzar. → I have lunch at 1.',
    },
    {
      id: 'a1-m8-l2-mt3',
      type: 'translate',
      concept: 'meals - translate',
      difficulty: 3,
      prompt: 'Traduce: "Desayuno a las 7."',
      correctAnswer: 'I have breakfast at 7.',
      acceptedAnswers: ['I have breakfast at 7', 'i have breakfast at 7.', 'i have breakfast at 7'],
      acceptApproximate: true,
      explanation: '"Desayuno" → I have breakfast (have + comida). "a las 7" → at 7.',
    },
    {
      id: 'a1-m8-l2-mt4',
      type: 'error_correction',
      concept: 'meals - no verb breakfast',
      difficulty: 3,
      prompt: 'Corrige el error: "I dinner at 8."',
      correctAnswer: 'I have dinner at 8.',
      acceptedAnswers: ['I have dinner at 8', 'I have dinner at 8.'],
      acceptApproximate: true,
      explanation: '"dinner" no es un verbo: no se puede decir "I dinner". Usamos "have dinner". → I have dinner at 8.',
    },
  ],
  reviewItems: ['a1-m8-l1'],
  prerequisites: ['a1-m8-l1'],
}
