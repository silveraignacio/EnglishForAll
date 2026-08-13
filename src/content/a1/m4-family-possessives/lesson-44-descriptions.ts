import type { Lesson } from '../../types'

export const lesson44Descriptions: Lesson = {
  id: 'a1-m4-l4',
  moduleId: 'm4-family-possessives',
  order: 3,
  title: 'Descripciones con "to be"',
  objective: 'Aprender a describir a personas de la familia con el verbo "to be" y adjetivos básicos.',
  explanation_es: `Para describir a una persona, combinamos el verbo "to be" con un adjetivo.

La estructura es muy sencilla:

Subject + to be + adjective

Ejemplos:
- My brother is tall. = Mi hermano es alto.
- My sister is happy. = Mi hermana está feliz.
- My grandfather is old. = Mi abuelo es mayor.

IMPORTANTE: En español, los adjetivos cambian según el género: "alto" / "alta", "feliz" / "felices".
En inglés, los adjetivos NO cambian. La misma palabra sirve para hombres, mujeres, singular y plural:

- He is tall. = Él es alto.
- She is tall. = Ella es alta.
- They are tall. = Ellos son altos.

Observa que en inglés decimos "She is tall", nunca "She is alta" o "She is talla". El adjetivo siempre queda igual.

Con este módulo ya puedes describir a tu familia con el verbo "to be" y los adjetivos de la lista de vocabulario.`,
  examples: [
    { english: 'My grandfather is old.', spanish: 'Mi abuelo es mayor.', note: 'old = mayor (de edad)' },
    { english: 'My sister is young.', spanish: 'Mi hermana es joven.' },
    { english: 'My mother is beautiful.', spanish: 'Mi madre es hermosa.' },
    { english: 'My father is funny.', spanish: 'Mi padre es divertido.' },
    { english: 'My cousin is single.', spanish: 'Mi primo es soltero.' },
    { english: 'We are married.', spanish: 'Estamos casados.' },
    { english: 'She is friendly.', spanish: 'Ella es amable.' },
  ],
  rule: `Estructura: Subject + to be + adjective

- My father is funny.
- They are happy.
- We are married.

Los adjetivos en inglés NO cambian con el género ni con el número:
He is tall. / She is tall. / They are tall.

Adjetivos útiles: tall (alto), short (bajo), old (mayor), young (joven), happy (feliz), sad (triste), nice (simpático), friendly (amable), beautiful (hermosa), handsome (guapo), married (casado), single (soltero), kind (amable/considerado), funny (divertido), smart (inteligente).`,
  commonMistakes: [
    { wrong: '❌ She is alto.', correct: '✅ She is tall.', explanation: 'Los adjetivos en inglés no cambian de género. "Alto" y "alta" son ambos "tall".' },
    { wrong: '❌ They are talla.', correct: '✅ They are tall.', explanation: 'El adjetivo tampoco cambia con el número: siempre "tall".' },
    { wrong: '❌ My sister is beauty.', correct: '✅ My sister is beautiful.', explanation: 'Como adjetivo después de "to be" usamos la forma completa "beautiful", no "beauty" (que es el sustantivo "belleza").' },
    { wrong: '❌ He is happily.', correct: '✅ He is happy.', explanation: 'Después de "to be" usamos el adjetivo "happy", no el adverbio "happily".' },
  ],
  vocabulary: [
    { word: 'tall', translation_es: 'alto/alta', level: 'A1', category: 'descriptions', partOfSpeech: 'adjective', example: 'My brother is tall.', exampleTranslation: 'Mi hermano es alto.' },
    { word: 'short', translation_es: 'bajo/baja', level: 'A1', category: 'descriptions', partOfSpeech: 'adjective', example: 'My sister is short.', exampleTranslation: 'Mi hermana es baja.' },
    { word: 'old', translation_es: 'mayor (de edad)', level: 'A1', category: 'descriptions', partOfSpeech: 'adjective', example: 'My grandfather is old.', exampleTranslation: 'Mi abuelo es mayor.' },
    { word: 'young', translation_es: 'joven', level: 'A1', category: 'descriptions', partOfSpeech: 'adjective', example: 'My cousin is young.', exampleTranslation: 'Mi primo es joven.' },
    { word: 'happy', translation_es: 'feliz', level: 'A1', category: 'descriptions', partOfSpeech: 'adjective', example: 'We are happy.', exampleTranslation: 'Estamos felices.' },
    { word: 'sad', translation_es: 'triste', level: 'A1', category: 'descriptions', partOfSpeech: 'adjective', example: 'He is sad today.', exampleTranslation: 'Él está triste hoy.' },
    { word: 'nice', translation_es: 'simpático/agradable', level: 'A1', category: 'descriptions', partOfSpeech: 'adjective', example: 'She is very nice.', exampleTranslation: 'Ella es muy simpática.' },
    { word: 'friendly', translation_es: 'amable', level: 'A1', category: 'descriptions', partOfSpeech: 'adjective', example: 'My neighbours are friendly.', exampleTranslation: 'Mis vecinos son amables.' },
    { word: 'beautiful', translation_es: 'hermoso/hermosa', level: 'A1', category: 'descriptions', partOfSpeech: 'adjective', example: 'My mother is beautiful.', exampleTranslation: 'Mi madre es hermosa.' },
    { word: 'handsome', translation_es: 'guapo', level: 'A1', category: 'descriptions', partOfSpeech: 'adjective', example: 'My father is handsome.', exampleTranslation: 'Mi padre es guapo.' },
    { word: 'married', translation_es: 'casado/casada', level: 'A1', category: 'descriptions', partOfSpeech: 'adjective', example: 'My parents are married.', exampleTranslation: 'Mis padres están casados.' },
    { word: 'single', translation_es: 'soltero/soltera', level: 'A1', category: 'descriptions', partOfSpeech: 'adjective', example: 'My cousin is single.', exampleTranslation: 'Mi primo es soltero.' },
    { word: 'funny', translation_es: 'divertido/divertida', level: 'A1', category: 'descriptions', partOfSpeech: 'adjective', example: 'My uncle is funny.', exampleTranslation: 'Mi tío es divertido.' },
    { word: 'smart', translation_es: 'inteligente', level: 'A1', category: 'descriptions', partOfSpeech: 'adjective', example: 'My sister is smart.', exampleTranslation: 'Mi hermana es inteligente.' },
  ],
  grammarPoints: [
    {
      id: 'gp-to-be-adjective',
      level: 'A1',
      name: 'Subject + to be + adjective',
      explanation_es: 'Para describir usamos "to be" + adjetivo. El adjetivo no cambia de género ni de número.',
      formula: 'Subject + to be + adjective',
      examples: ['She is tall.', 'We are happy.', 'My father is funny.'],
    },
  ],
  exercises: [
    {
      id: 'a1-m4-l4-ex1',
      type: 'multiple_choice',
      concept: 'descriptions with to be',
      difficulty: 1,
      prompt: 'Completa: "My brother ___ tall."',
      promptTranslation: 'Mi hermano es alto.',
      correctAnswer: 'is',
      options: ['is', 'are', 'am'],
      explanation: 'Con "my brother" (él) usamos "is". → My brother is tall.',
    },
    {
      id: 'a1-m4-l4-ex2',
      type: 'multiple_choice',
      concept: 'descriptions with to be',
      difficulty: 1,
      prompt: 'Completa: "They ___ happy."',
      promptTranslation: 'Ellos están felices.',
      correctAnswer: 'are',
      options: ['is', 'are', 'am'],
      explanation: 'Con "they" (plural) usamos "are". → They are happy.',
    },
    {
      id: 'a1-m4-l4-ex3',
      type: 'multiple_choice',
      concept: 'descriptions with to be',
      difficulty: 2,
      prompt: '¿Cuál es la frase correcta?',
      promptTranslation: 'Ella es alta.',
      correctAnswer: 'She is tall.',
      options: ['She is tall.', 'She is talla.', 'She is alto.'],
      explanation: 'En inglés el adjetivo "tall" no cambia de género: She is tall. (nunca "talla" ni "alto").',
    },
    {
      id: 'a1-m4-l4-ex4',
      type: 'fill_blank',
      concept: 'descriptions with to be',
      difficulty: 2,
      prompt: 'Completa: "My grandfather ___ old."',
      promptTranslation: 'Mi abuelo es mayor.',
      correctAnswer: 'is',
      explanation: 'Con "my grandfather" (él) usamos "is". → My grandfather is old.',
    },
    {
      id: 'a1-m4-l4-ex5',
      type: 'multiple_choice',
      concept: 'descriptions with to be',
      difficulty: 2,
      prompt: '¿Qué adjetivo describe a una persona amable?',
      correctAnswer: 'friendly',
      options: ['friendly', 'funny', 'married'],
      explanation: '"Friendly" significa amable. "Funny" es divertido y "married" es casado.',
    },
    {
      id: 'a1-m4-l4-ex6',
      type: 'translate',
      concept: 'descriptions with to be',
      difficulty: 3,
      prompt: 'Traduce: "Mi madre es hermosa."',
      correctAnswer: 'My mother is beautiful.',
      acceptedAnswers: ['My mother is beautiful', 'My mother is beautiful.', 'My mum is beautiful', 'My mom is beautiful'],
      acceptApproximate: true,
      explanation: '"My mother" = mi madre, "is" = es, "beautiful" = hermosa. → My mother is beautiful.',
    },
    {
      id: 'a1-m4-l4-ex7',
      type: 'translate',
      concept: 'descriptions with to be',
      difficulty: 3,
      prompt: 'Traduce: "Mi padre es divertido."',
      correctAnswer: 'My father is funny.',
      acceptedAnswers: ['My father is funny', 'My father is funny.', 'My dad is funny'],
      acceptApproximate: true,
      explanation: '"My father" = mi padre, "is" = es, "funny" = divertido. → My father is funny.',
    },
    {
      id: 'a1-m4-l4-ex8',
      type: 'match',
      concept: 'descriptions vocabulary',
      difficulty: 2,
      prompt: 'Relaciona cada adjetivo con su significado:',
      pairs: [
        { left: 'tall', right: 'alto' },
        { left: 'happy', right: 'feliz' },
        { left: 'old', right: 'mayor (de edad)' },
        { left: 'young', right: 'joven' },
        { left: 'married', right: 'casado' },
        { left: 'single', right: 'soltero' },
      ],
      correctAnswer: 'tall=alto, happy=feliz, old=mayor, young=joven, married=casado, single=soltero',
      explanation: 'Todas las parejas deben ser correctas. tall=alto, happy=feliz, old=mayor, young=joven, married=casado, single=soltero.',
    },
    {
      id: 'a1-m4-l4-ex9',
      type: 'reading',
      concept: 'family description reading',
      difficulty: 4,
      prompt: 'Lee el texto y responde:',
      reading: {
        text: 'My family\nI have a big family. My father is a doctor. He is 55 years old and he is funny. My mother is a teacher. She is 52 and she is beautiful. My brother is 20 years old. He is tall and smart. My sister is 18. She is young and friendly. My grandfather is 80 years old. He is old but very happy.',
        translation: 'Mi familia\nTengo una familia grande. Mi padre es médico. Tiene 55 años y es divertido. Mi madre es profesora. Tiene 52 años y es hermosa. Mi hermano tiene 20 años. Es alto e inteligente. Mi hermana tiene 18 años. Es joven y amable. Mi abuelo tiene 80 años. Es mayor pero muy feliz.',
        questions: [
          {
            id: 'a1-m4-l4-ex9-q1',
            type: 'multiple_choice',
            concept: 'family description reading',
            difficulty: 4,
            prompt: '¿Qué hace el padre del narrador?',
            correctAnswer: 'He is a doctor.',
            options: ['He is a teacher.', 'He is a doctor.', 'He is a student.'],
            explanation: 'El texto dice: "My father is a doctor."',
          },
          {
            id: 'a1-m4-l4-ex9-q2',
            type: 'multiple_choice',
            concept: 'family description reading',
            difficulty: 4,
            prompt: '¿Cómo es el hermano del narrador?',
            correctAnswer: 'tall and smart',
            options: ['short and funny', 'tall and smart', 'old and sad'],
            explanation: 'El texto dice: "My brother is tall and smart."',
          },
          {
            id: 'a1-m4-l4-ex9-q3',
            type: 'multiple_choice',
            concept: 'family description reading',
            difficulty: 4,
            prompt: '¿Cuántos años tiene la hermana del narrador?',
            correctAnswer: '18',
            options: ['20', '18', '55'],
            explanation: 'El texto dice: "My sister is 18."',
          },
        ],
      },
      correctAnswer: 'reading complete',
      explanation: 'Leer con atención: la información sobre cada familiar está en el texto.',
    },
    {
      id: 'a1-m4-l4-ex10',
      type: 'error_correction',
      concept: 'descriptions with to be',
      difficulty: 3,
      prompt: 'Encuentra el error: "She is happily."',
      correctAnswer: 'She is happy.',
      acceptedAnswers: ['She is happy', 'She is happy.', 'She is happy today', 'She is happy today.'],
      acceptApproximate: true,
      explanation: 'Después de "to be" usamos el adjetivo "happy", no el adverbio "happily". → She is happy.',
    },
  ],
  miniTest: [
    {
      id: 'a1-m4-l4-mt1',
      type: 'multiple_choice',
      concept: 'descriptions with to be',
      difficulty: 2,
      prompt: 'Completa: "My parents ___ married."',
      promptTranslation: 'Mis padres están casados.',
      correctAnswer: 'are',
      options: ['is', 'are', 'am'],
      explanation: 'Con "my parents" (plural) usamos "are". → My parents are married.',
    },
    {
      id: 'a1-m4-l4-mt2',
      type: 'translate',
      concept: 'descriptions with to be',
      difficulty: 3,
      prompt: 'Traduce: "Mi prima es amable."',
      correctAnswer: 'My cousin is friendly.',
      acceptedAnswers: ['My cousin is friendly', 'My cousin is friendly.', 'My cousin is nice', 'My cousin is kind'],
      acceptApproximate: true,
      explanation: '"My cousin" = mi prima, "is" = es, "friendly" = amable. → My cousin is friendly.',
    },
    {
      id: 'a1-m4-l4-mt3',
      type: 'true_false',
      concept: 'descriptions with to be',
      difficulty: 3,
      prompt: '"He is tall" y "She is tall" son correctas en inglés.',
      correctAnswer: 'true',
      explanation: 'Sí. El adjetivo "tall" no cambia con el género: se usa igual para hombres y mujeres.',
    },
    {
      id: 'a1-m4-l4-mt4',
      type: 'multiple_choice',
      concept: 'descriptions with to be',
      difficulty: 3,
      prompt: '¿Cuál es la traducción de "My uncle is single."?',
      correctAnswer: 'Mi tío es soltero.',
      options: ['Mi tío es casado.', 'Mi tío es soltero.', 'Mi tío es joven.'],
      explanation: '"Uncle" = tío, "single" = soltero. → Mi tío es soltero.',
    },
    {
      id: 'a1-m4-l4-mt5',
      type: 'error_correction',
      concept: 'descriptions with to be',
      difficulty: 4,
      prompt: 'Corrige el error: "They is friendly."',
      correctAnswer: 'They are friendly.',
      acceptedAnswers: ['They are friendly', 'They are friendly.', "They're friendly", "They're friendly."],
      acceptApproximate: true,
      explanation: 'Con "they" (plural) usamos "are", no "is". → They are friendly.',
    },
  ],
  reviewItems: ['a1-m4-l3'],
  prerequisites: ['a1-m4-l3'],
}