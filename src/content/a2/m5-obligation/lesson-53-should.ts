import type { Lesson } from '../../types'

export const lesson53Should: Lesson = {
  id: 'a2-m5-l3',
  moduleId: 'm5-obligation',
  order: 2,
  title: '"Should" y "shouldn\'t": dar consejos',
  objective: 'Dar y recibir consejos con "should" (deberías) y "shouldn\'t" (no deberías).',
  explanation_es: `"Should" es el modal perfecto para dar consejos. Significa "deberías" o "debería(s)". No es una obligación fuerte como "must", sino una recomendación.

Estructura: Sujeto + should + verbo (sin "to")
- You should eat more vegetables. = Deberías comer más verduras.
- You should see a doctor. = Deberías ir al médico.

La NEGATIVA es "shouldn't" (should not) = no deberías:
- He shouldn't drink so much coffee. = Él no debería tomar tanto café.

Para preguntar por un consejo usamos "Should I...?":
- Should I call her? = ¿Debería llamarla?

Características de "should":
1. No cambia con la persona: I should, you should, he should, she should... siempre igual. (nunca "he shoulds")
2. Nunca lleva "to": should go (no "should to go").
3. Es más suave que "must": should = recomendación, must = obligación fuerte.

En español, "should" equivale a "deberías": suave y amable.`,
  examples: [
    { english: 'You should eat more vegetables.', spanish: 'Deberías comer más verduras.', note: 'recomendación de salud' },
    { english: "He shouldn't drink so much coffee.", spanish: 'Él no debería tomar tanto café.', note: "shouldn't = no deberías" },
    { english: 'Should I call her?', spanish: '¿Debería llamarla?', note: 'preguntar por consejo' },
    { english: 'You should see a doctor.', spanish: 'Deberías ir al médico.', note: 'consejo' },
    { english: "You shouldn't worry about it.", spanish: 'No deberías preocuparte por eso.', note: 'consejo en negativo' },
    { english: 'We should go to bed early tonight.', spanish: 'Deberíamos acostarnos temprano esta noche.' },
  ],
  rule: `Sujeto + should + verbo (sin "to")
- You should rest. / She should rest. (nunca "should to" ni "shoulds")

Consejo negativo: Sujeto + shouldn't + verbo
- He shouldn't drink so much coffee.

Pregunta: Should + sujeto + verbo?
- Should I call her? = ¿Debería llamarla?

should = recomendación (deberías) | must = obligación fuerte (tienes que)`,
  commonMistakes: [
    { wrong: '❌ You should to rest.', correct: '✅ You should rest.', explanation: 'Después de "should" el verbo va sin "to": should rest.' },
    { wrong: '❌ He shoulds drink less coffee.', correct: '✅ He should drink less coffee.', explanation: '"Should" no añade -s en tercera persona.' },
    { wrong: '❌ I no should go.', correct: "✅ I shouldn't go.", explanation: 'La negativa de "should" es "shouldn\'t", no "no should".' },
  ],
  vocabulary: [
    { word: 'advice', translation_es: 'consejo', level: 'A2', category: 'advice', partOfSpeech: 'noun', example: 'This is good advice.', exampleTranslation: 'Este es un buen consejo.' },
    { word: 'to recommend', translation_es: 'recomendar', level: 'A2', category: 'advice', partOfSpeech: 'verb', example: 'I recommend this restaurant.', exampleTranslation: 'Recomiendo este restaurante.' },
    { word: 'vegetables', translation_es: 'verduras', level: 'A1', category: 'advice', partOfSpeech: 'noun', example: 'You should eat more vegetables.', exampleTranslation: 'Deberías comer más verduras.' },
    { word: 'doctor', translation_es: 'médico', level: 'A1', category: 'advice', partOfSpeech: 'noun', example: 'You should see a doctor.', exampleTranslation: 'Deberías ir al médico.' },
    { word: 'to worry', translation_es: 'preocuparse', level: 'A2', category: 'advice', partOfSpeech: 'verb', example: "You shouldn't worry.", exampleTranslation: 'No deberías preocuparte.' },
    { word: 'to rest', translation_es: 'descansar', level: 'A2', category: 'advice', partOfSpeech: 'verb', example: 'You should rest.', exampleTranslation: 'Deberías descansar.' },
  ],
  grammarPoints: [
    {
      id: 'gp-should',
      level: 'A2',
      name: 'Should — advice',
      explanation_es: '"Should" expresa consejo o recomendación (deberías). No cambia con la persona y va seguido del verbo sin "to".',
      formula: 'Sujeto + should + verbo (sin "to")',
      examples: ['You should eat more vegetables.', 'You should see a doctor.'],
    },
    {
      id: 'gp-shouldnt',
      level: 'A2',
      name: "Shouldn't — negative advice",
      explanation_es: '"Shouldn\'t" (should not) expresa consejo negativo: no deberías hacer algo.',
      formula: "Sujeto + shouldn't + verbo",
      examples: ["He shouldn't drink so much coffee.", "You shouldn't worry."],
    },
  ],
  exercises: [
    {
      id: 'a2-m5-l3-ex1',
      type: 'multiple_choice',
      concept: 'should - advice',
      difficulty: 1,
      prompt: 'Completa: "You ___ eat more vegetables."',
      promptTranslation: 'Deberías comer más verduras.',
      correctAnswer: 'should',
      options: ['should', 'shoulds', 'should to'],
      explanation: 'Después de "should" el verbo va sin "to": You should eat more vegetables.',
    },
    {
      id: 'a2-m5-l3-ex2',
      type: 'fill_blank',
      concept: "shouldn't - negative",
      difficulty: 1,
      prompt: 'Completa: "He ___ drink so much coffee." (consejo negativo)',
      promptTranslation: 'Él no debería tomar tanto café.',
      correctAnswer: "shouldn't",
      acceptedAnswers: ["shouldn't", 'should not', "shouldn't drink"],
      explanation: "Consejo negativo → \"shouldn't\": He shouldn't drink so much coffee.",
    },
    {
      id: 'a2-m5-l3-ex3',
      type: 'multiple_choice',
      concept: 'should - question',
      difficulty: 2,
      prompt: 'Quieres preguntar si deberías llamarla. ¿Qué dices?',
      correctAnswer: 'Should I call her?',
      options: ['Should I call her?', 'I should call her?', 'Should she call me?'],
      explanation: 'Pregunta por consejo: Should + sujeto + verbo → Should I call her?',
    },
    {
      id: 'a2-m5-l3-ex4',
      type: 'true_false',
      concept: 'should - no -s',
      difficulty: 2,
      prompt: '"She shoulds rest" es correcta.',
      correctAnswer: 'false',
      explanation: 'Falso. "Should" no añade -s: She should rest.',
    },
    {
      id: 'a2-m5-l3-ex5',
      type: 'reorder',
      concept: 'should - sentence order',
      difficulty: 2,
      prompt: 'Ordena las palabras: a / see / you / should / doctor',
      promptTranslation: 'Deberías ir al médico.',
      correctAnswer: 'You should see a doctor.',
      words: ['You', 'should', 'see', 'a', 'doctor'],
      explanation: 'Orden: Sujeto + should + verbo + complemento: You should see a doctor.',
    },
    {
      id: 'a2-m5-l3-ex6',
      type: 'match',
      concept: 'advice vocabulary',
      difficulty: 2,
      prompt: 'Relaciona cada palabra con su significado:',
      pairs: [
        { left: 'should', right: 'deberías' },
        { left: "shouldn't", right: 'no deberías' },
        { left: 'advice', right: 'consejo' },
        { left: 'to rest', right: 'descansar' },
        { left: 'to worry', right: 'preocuparse' },
        { left: 'doctor', right: 'médico' },
      ],
      correctAnswer: 'should=deberías, shouldn\'t=no deberías, advice=consejo, to rest=descansar, to worry=preocuparse, doctor=médico',
      explanation: 'should=deberías, shouldn\'t=no deberías, advice=consejo, to rest=descansar, to worry=preocuparse, doctor=médico.',
    },
    {
      id: 'a2-m5-l3-ex7',
      type: 'translate',
      concept: 'should - translate',
      difficulty: 3,
      prompt: 'Traduce: "Deberías descansar."',
      correctAnswer: 'You should rest.',
      acceptedAnswers: ['You should rest', 'You should rest.', 'You should take a rest', 'You should take a rest.'],
      acceptApproximate: true,
      explanation: '"Deberías" → You should + verbo. → You should rest.',
    },
    {
      id: 'a2-m5-l3-ex8',
      type: 'error_correction',
      concept: 'should - no "to"',
      difficulty: 3,
      prompt: 'Corrige el error: "You should to see a doctor."',
      correctAnswer: 'You should see a doctor.',
      acceptedAnswers: ['You should see a doctor', 'You should see a doctor.', 'You had better see a doctor', 'You had better see a doctor.'],
      acceptApproximate: true,
      explanation: 'Después de "should" el verbo va sin "to": You should see a doctor.',
    },
    {
      id: 'a2-m5-l3-ex9',
      type: 'select_correct',
      concept: 'should vs must',
      difficulty: 3,
      prompt: 'Tu amigo tiene dolor de cabeza. ¿Cuál es el mejor consejo?',
      correctAnswer: 'You should take a rest.',
      options: ['You should take a rest.', 'You shoulds take a rest.', 'You must to take a rest.'],
      explanation: 'Consejo suave → should + verbo sin "to": You should take a rest.',
    },
  ],
  miniTest: [
    {
      id: 'a2-m5-l3-mt1',
      type: 'multiple_choice',
      concept: 'should - advice',
      difficulty: 1,
      prompt: 'Completa: "We ___ go to bed early tonight."',
      promptTranslation: 'Deberíamos acostarnos temprano esta noche.',
      correctAnswer: 'should',
      options: ['should', 'shoulds', 'should to'],
      explanation: 'Con "we" usamos "should" + verbo sin "to": We should go to bed early.',
    },
    {
      id: 'a2-m5-l3-mt2',
      type: 'fill_blank',
      concept: "shouldn't - advice",
      difficulty: 2,
      prompt: 'Completa: "You ___ worry about it." (consejo negativo)',
      promptTranslation: 'No deberías preocuparte por eso.',
      correctAnswer: "shouldn't",
      acceptedAnswers: ["shouldn't", 'should not', "don't"],
      explanation: "Consejo negativo → \"shouldn't\": You shouldn't worry about it.",
    },
    {
      id: 'a2-m5-l3-mt3',
      type: 'translate',
      concept: 'should - translate',
      difficulty: 3,
      prompt: 'Traduce: "Él no debería tomar tanto café."',
      correctAnswer: "He shouldn't drink so much coffee.",
      acceptedAnswers: ["He shouldn't drink so much coffee", 'He should not drink so much coffee', "He shouldn't drink so much coffee.", 'He should not drink so much coffee.'],
      acceptApproximate: true,
      explanation: '"No debería" → shouldn\'t. → He shouldn\'t drink so much coffee.',
    },
    {
      id: 'a2-m5-l3-mt4',
      type: 'error_correction',
      concept: 'should - no -s',
      difficulty: 3,
      prompt: 'Corrige el error: "She shoulds go to bed early."',
      correctAnswer: 'She should go to bed early.',
      acceptedAnswers: ['She should go to bed early', 'She should go to bed early.', "She'd better go to bed early", "She'd better go to bed early."],
      acceptApproximate: true,
      explanation: '"Should" no añade -s: She should go to bed early.',
    },
    {
      id: 'a2-m5-l3-mt5',
      type: 'true_false',
      concept: 'should - softer than must',
      difficulty: 4,
      prompt: '"Should" es más suave que "must".',
      correctAnswer: 'true',
      explanation: 'Verdadero. "Should" es una recomendación (deberías), mientras que "must" es una obligación fuerte.',
    },
  ],
  reviewItems: ['a2-m5-l2'],
  prerequisites: ['a2-m5-l2'],
}
