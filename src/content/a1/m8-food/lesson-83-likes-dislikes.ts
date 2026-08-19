import type { Lesson } from '../../types'

export const lesson83LikesDislikes: Lesson = {
  id: 'a1-m8-l3',
  moduleId: 'm8-food',
  order: 2,
  title: "Likes y dislikes (I like / I don't like)",
  objective: "Expresar gustos y preferencias con like, love, don't like y hate + sustantivo o verbo en -ing.",
  explanation_es: `Para hablar de lo que te gusta y lo que no te gusta, usamos estos verbos:

- **like** (gustar): I like coffee. = Me gusta el café.
- **love** (encantar): I love pizza. = Me encanta la pizza.
- **hate** (odiar): He hates vegetables. = Él odia las verduras.
- **don't like / doesn't like** (no gustar): I don't like fish. / She doesn't like fish.

**Punto muy importante:** en inglés, "like" es un VERBO, no un adjetivo. Por eso NO usamos "to be" delante. No digas "I am like coffee". Decimos directamente "I like coffee".

**¿Qué va después de like, love y hate?** Dos opciones:
1. Un sustantivo: I like **coffee**.
2. Un verbo en **-ing** (gerundio): I like **reading**. = Me gusta leer.

Fíjate en la 3ª persona: con he, she, it, el verbo lleva -s (like → likes, love → loves, hate → hates), y la negativa usa "doesn't" sin -s en el verbo principal: She doesn't like fish (no "She doesn't likes").`,
  examples: [
    { english: 'I like coffee.', spanish: 'Me gusta el café.', note: 'like + sustantivo.' },
    { english: 'I love pizza.', spanish: 'Me encanta la pizza.', note: 'love = encantar.' },
    { english: "She doesn't like fish.", spanish: 'A ella no le gusta el pescado.', note: '3ª persona negativa: doesn\'t + like.' },
    { english: 'He hates vegetables.', spanish: 'Él odia las verduras.', note: '3ª persona: hate → hates.' },
    { english: 'I like reading.', spanish: 'Me gusta leer.', note: 'like + verbo -ing (gerundio).' },
    { english: 'She likes swimming.', spanish: 'A ella le gusta nadar.', note: '3ª persona: like → likes + -ing.' },
  ],
  rule: `**Gustos y preferencias:**
- I / You / We / They + like / love / hate + sustantivo o verbo -ing
- He / She / It + likes / loves / hates + sustantivo o verbo -ing
- Negativo: I don't like... | She doesn't like...

**Regla clave:**
- "like" es un verbo: NO se usa con "to be" (nunca "I am like").
- Después de like / love / hate: sustantivo (like coffee) o verbo en -ing (like reading).`,
  formation: {
    title: 'Cómo se forman los gustos y preferencias',
    intro: 'Para hablar de gustos usamos like, love y hate seguidos de un sustantivo o de un verbo en -ing. "Like" es un verbo: no se usa con "to be".',
    patterns: [
      {
        name: 'Afirmativo',
        formula: 'Sujeto + like / love / hate + sustantivo o verbo -ing',
        examples: [
          { english: 'I like coffee.', spanish: 'Me gusta el café.' },
          { english: 'I love pizza.', spanish: 'Me encanta la pizza.' },
          { english: 'He hates vegetables.', spanish: 'Él odia las verduras.' },
          { english: 'She likes swimming.', spanish: 'A ella le gusta nadar.' },
          { english: 'I like reading.', spanish: 'Me gusta leer.' },
        ],
        note: 'Con he/she/it el verbo lleva -s: like → likes, love → loves, hate → hates.',
      },
      {
        name: 'Negativo',
        formula: 'Sujeto + don\'t / doesn\'t + like/love/hate + sustantivo o verbo -ing',
        examples: [
          { english: 'I don\'t like fish.', spanish: 'No me gusta el pescado.' },
          { english: 'She doesn\'t like fish.', spanish: 'A ella no le gusta el pescado.' },
        ],
        note: 'I/You/We/They → don\'t · He/She/It → doesn\'t. Después de doesn\'t, el verbo no lleva -s: doesn\'t like (no "doesn\'t likes").',
      },
    ],
    notes: [
      '"Like" es un verbo, no un adjetivo: nunca "I am like coffee" → "I like coffee".',
      'Después de like/love/hate puede ir un sustantivo (like coffee) o un verbo en -ing (like reading).',
    ],
  },
  commonMistakes: [
    { wrong: '❌ I am like coffee.', correct: '✅ I like coffee.', explanation: '"like" es un verbo en inglés, no un adjetivo. No usamos "to be" delante: decimos "I like coffee".' },
    { wrong: "❌ She don't like fish.", correct: "✅ She doesn't like fish.", explanation: 'Con "she" (3ª persona) usamos "doesn\'t", no "don\'t".' },
    { wrong: '❌ I like read.', correct: '✅ I like reading.', explanation: 'Después de "like" usamos el verbo en -ing (reading), no el infinitivo solo. (Decir "I like to read" también es correcto, pero en este nivel nos centramos en la forma -ing.)' },
    { wrong: "❌ She doesn't likes fish.", correct: "✅ She doesn't like fish.", explanation: 'Después de "doesn\'t", el verbo principal no lleva -s: like, no "likes".' },
  ],
  vocabulary: [
    { word: 'like', translation_es: 'gustar', level: 'A1', category: 'likes', partOfSpeech: 'verb', example: 'I like coffee.', exampleTranslation: 'Me gusta el café.' },
    { word: 'love', translation_es: 'encantar', level: 'A1', category: 'likes', partOfSpeech: 'verb', example: 'I love pizza.', exampleTranslation: 'Me encanta la pizza.' },
    { word: 'hate', translation_es: 'odiar', level: 'A1', category: 'likes', partOfSpeech: 'verb', example: 'He hates vegetables.', exampleTranslation: 'Él odia las verduras.' },
    { word: "don't like", translation_es: 'no gustar', level: 'A1', category: 'likes', partOfSpeech: 'verb', example: "I don't like fish.", exampleTranslation: 'No me gusta el pescado.' },
  ],
  grammarPoints: [
    {
      id: 'gp-like-noun-ing',
      level: 'A1',
      name: 'like / love / hate + noun or -ing',
      explanation_es: 'Después de like, love y hate usamos un sustantivo (like coffee) o un verbo en -ing (like reading). En la 3ª persona el verbo lleva -s y la negativa usa doesn\'t.',
      formula: 'Subject + like/love/hate + noun | Subject + like/love/hate + verb-ing',
      examples: ['I like coffee.', 'She likes swimming.', 'He hates vegetables.', "She doesn't like fish."],
    },
  ],
  exercises: [
    {
      id: 'a1-m8-l3-ex1',
      type: 'multiple_choice',
      concept: 'likes - like is a verb',
      difficulty: 1,
      prompt: 'Completa: "I ___ coffee."',
      promptTranslation: 'Me gusta el café.',
      correctAnswer: 'like',
      options: ['like', 'am like', 'likes'],
      explanation: '"like" es un verbo: no usamos "to be". Con "I" → I like coffee.',
    },
    {
      id: 'a1-m8-l3-ex2',
      type: 'multiple_choice',
      concept: 'likes - love',
      difficulty: 1,
      prompt: 'Completa: "I ___ pizza." (encantar)',
      promptTranslation: 'Me encanta la pizza.',
      correctAnswer: 'love',
      options: ['love', 'am love', 'loves'],
      explanation: '"Encantar" es "love". Con "I" → I love pizza.',
    },
    {
      id: 'a1-m8-l3-ex3',
      type: 'multiple_choice',
      concept: 'likes - 3rd person negative',
      difficulty: 2,
      prompt: "Completa: \"She ___ like fish.\"",
      promptTranslation: 'A ella no le gusta el pescado.',
      correctAnswer: "doesn't",
      options: ["don't", "doesn't", 'not'],
      explanation: 'Con "she" (3ª persona) la negativa es "doesn\'t". → She doesn\'t like fish.',
    },
    {
      id: 'a1-m8-l3-ex4',
      type: 'fill_blank',
      concept: 'likes - 3rd person hates',
      difficulty: 2,
      prompt: 'Completa: "He ___ vegetables." (odiar)',
      promptTranslation: 'Él odia las verduras.',
      correctAnswer: 'hates',
      acceptedAnswers: ['hates', 'Hates'],
      explanation: 'Con "he" (3ª persona) el verbo lleva -s: hate → hates. → He hates vegetables.',
    },
    {
      id: 'a1-m8-l3-ex5',
      type: 'fill_blank',
      concept: 'likes - verb -ing',
      difficulty: 2,
      prompt: 'Completa: "I like ___." (leer → read)',
      promptTranslation: 'Me gusta leer.',
      correctAnswer: 'reading',
      acceptedAnswers: ['reading', 'Reading'],
      explanation: 'Después de "like" usamos el verbo en -ing: read → reading. → I like reading.',
    },
    {
      id: 'a1-m8-l3-ex6',
      type: 'translate',
      concept: 'likes - like + -ing',
      difficulty: 3,
      prompt: 'Traduce: "Me gusta leer."',
      correctAnswer: 'I like reading.',
      acceptedAnswers: ['I like reading', 'i like reading.', 'i like reading'],
      acceptApproximate: true,
      explanation: '"Me gusta" → I like. Después usamos el verbo en -ing: read → reading.',
    },
    {
      id: 'a1-m8-l3-ex7',
      type: 'translate',
      concept: 'likes - 3rd person negative',
      difficulty: 3,
      prompt: 'Traduce: "A ella no le gusta el pescado."',
      correctAnswer: "She doesn't like fish.",
      acceptedAnswers: ["She doesn't like fish", "she doesn't like fish.", "she doesn't like fish"],
      acceptApproximate: true,
      explanation: '"A ella no le gusta" → She doesn\'t like. "el pescado" → fish. Después de "doesn\'t", el verbo no lleva -s.',
    },
    {
      id: 'a1-m8-l3-ex8',
      type: 'error_correction',
      concept: 'likes - like is a verb',
      difficulty: 3,
      prompt: 'Corrige el error: "I am like coffee."',
      correctAnswer: 'I like coffee.',
      acceptedAnswers: ['I like coffee', 'I like coffee.'],
      acceptApproximate: true,
      explanation: '"like" es un verbo, no un adjetivo: no usamos "to be". → I like coffee.',
    },
    {
      id: 'a1-m8-l3-ex9',
      type: 'error_correction',
      concept: 'likes - 3rd person negative',
      difficulty: 3,
      prompt: "Corrige el error: \"She don't like fish.\"",
      correctAnswer: "She doesn't like fish.",
      acceptedAnswers: ["She doesn't like fish", "She does not like fish."],
      acceptApproximate: true,
      explanation: 'Con "she" (3ª persona) usamos "doesn\'t", no "don\'t". → She doesn\'t like fish.',
    },
  ],
  miniTest: [
    {
      id: 'a1-m8-l3-mt1',
      type: 'multiple_choice',
      concept: 'likes - hates',
      difficulty: 1,
      prompt: 'Completa: "He ___ vegetables."',
      promptTranslation: 'Él odia las verduras.',
      correctAnswer: 'hates',
      options: ['hates', 'hate', 'is hate'],
      explanation: 'Con "he" (3ª persona) añadimos -s: hate → hates.',
    },
    {
      id: 'a1-m8-l3-mt2',
      type: 'fill_blank',
      concept: 'likes - swimming',
      difficulty: 2,
      prompt: 'Completa: "She likes ___." (nadar → swim)',
      promptTranslation: 'A ella le gusta nadar.',
      correctAnswer: 'swimming',
      acceptedAnswers: ['swimming', 'Swimming'],
      explanation: 'Después de "likes" usamos el verbo en -ing: swim → swimming (doble m).',
    },
    {
      id: 'a1-m8-l3-mt3',
      type: 'translate',
      concept: 'likes - love',
      difficulty: 3,
      prompt: 'Traduce: "Me encanta la pizza."',
      correctAnswer: 'I love pizza.',
      acceptedAnswers: ['I love pizza', 'i love pizza.', 'i love pizza'],
      acceptApproximate: true,
      explanation: '"Me encanta" → I love. → I love pizza.',
    },
    {
      id: 'a1-m8-l3-mt4',
      type: 'error_correction',
      concept: 'likes - no to be',
      difficulty: 3,
      prompt: 'Corrige el error: "I am like tea."',
      correctAnswer: 'I like tea.',
      acceptedAnswers: ['I like tea', 'I like tea.'],
      acceptApproximate: true,
      explanation: '"like" es un verbo: no usamos "to be". → I like tea.',
    },
  ],
  reviewItems: ['a1-m8-l2'],
  prerequisites: ['a1-m8-l2'],
}
