import type { Lesson } from '../../types'

export const lesson51PresentSimpleAff: Lesson = {
  id: 'a1-m5-l1',
  moduleId: 'm5-routines',
  order: 0,
  title: 'Present Simple (afirmativo)',
  objective: 'Aprender a usar el Present Simple afirmativo para hablar de rutinas y hechos.',
  explanation_es: `El **Present Simple** es un tiempo verbal que usamos principalmente para hablar de cosas que hacemos normalmente, hábitos, rutinas y hechos generales.

Empecemos con ejemplos — el español ya conoce la Idea, solo hay que ver cómo se forma en inglés:

- "I work in Madrid." = Yo trabajo en Madrid.
- "I drink coffee every morning." = Bebo café todas las mañanas.

En ambas frases el sujeto es "I" (yo) y el verbo NO cambia: **work**, **drink**. Igual que el infinitivo. Hasta aquí, fácil.

### La regla clave: la 3ª persona (he, she, it)

Aquí está la gran diferencia para hispanohablantes. Con **I, you, we, they**, usamos el verbo normalmente:

- I work, You work, We work, They work.

Pero con **he, she, it**, normalmente **añadimos -s**:

- He work**s**, She work**s**, It work**s**.

¡Atención! Esa -s es la parte que más se olvida. En español el verbo cambia para todas las personas ("yo trabajo", "ella trabaja"), pero en inglés solo cambia en la 3ª persona del singular: añade -s y ya está.

### Reglas de escritura para la -s de la 3ª persona

No siempre es solo "-s"; depende de cómo termina el verbo:

1. **Regla general**: añade -s.
   - work → work**s**
   - live → live**s**
2. **Verbos terminados en -o, -s, -ss, -ch, -sh, -x, -z**: añade -**es**.
   - watch → watch**es**
   - go → go**es**
   - do → do**es**
   - wash → wash**es**
3. **Verbos terminados en consonante + y**: cambia la "y" por "i" y añade -**es** (-ies).
   - study → stud**ies**
   - fly → fl**ies**
4. **Irregular**: have → has.
   - He **has** a car. (NO "He haves")

### Contexto: ¿para qué usamos el Present Simple?

Lo usamos para **hábitos**, **rutinas** y **hechos generales**:

- Habits (hábitos): "I drink coffee every morning."
- Routines (rutinas): "She works in a bank."
- General facts (hechos): "The sun rises in the east." = El sol sale por el este.
- "Water boils at 100 degrees." = El agua hierve a 100 grados.

NOTA: El Present Simple NO se usa para algo que está pasando ahora mismo (eso es el Present Continuous, que veremos más adelante). Describe loque siempre, normalmente o habitualmente ocurre.`,
  examples: [
    { english: 'I work in Madrid.', spanish: 'Trabajo en Madrid.', note: 'Con "I" el verbo no cambia: work.' },
    { english: 'She works in a bank.', spanish: 'Ella trabaja en un banco.', note: 'Con "she" añadimos -s: work + s = works.' },
    { english: 'We drink coffee every morning.', spanish: 'Bebemos café todas las mañanas.', note: 'Con "we" el verbo no cambia: drink.' },
    { english: 'They live in London.', spanish: 'Ellos viven en Londres.', note: 'Con "they" el verbo no cambia: live.' },
    { english: 'He watches TV.', spanish: 'Él ve la tele.', note: 'Verbo terminado en -ch: añade -es → watches.' },
    { english: 'She studies English.', spanish: 'Ella estudia inglés.', note: 'Consonante + y → -ies: study → studies.' },
    { english: 'He has two children.', spanish: 'Él tiene dos hijos.', note: 'Irregular: have → has (en he/she/it).' },
    { english: 'The sun rises in the east.', spanish: 'El sol sale por el este.', note: 'Hecho general. It (the sun) → rise + s = rises.' },
    { english: 'Water boils at 100 degrees.', spanish: 'El agua hierve a 100 grados.', note: 'Hecho general. It (water) → boil + s = boils.' },
  ],
  rule: `**Afirmativo — Present Simple:**
- I / You / We / They + verbo (sin -s)
- He / She / It + verbo + -s

**Reglas de escritura de la -s (3ª persona):**
1. Regla general: añade -s → work → works
2. -o, -s, -ss, -ch, -sh, -x, -z: añade -es → watch → watches, go → goes, do → does
3. Consonante + y → -ies → study → studies
4. Irregular: **have → has**

**Usos:** hábitos, rutinas y hechos generales.`,
  commonMistakes: [
    { wrong: '❌ She work in Madrid.', correct: '✅ She works in Madrid.', explanation: 'Con "she" (3ª persona) añadimos -s al verbo: work → works.' },
    { wrong: '❌ He watch TV.', correct: '✅ He watches TV.', explanation: 'Verbo terminado en -ch: añadimos -es, no solo -s → watch → watches.' },
    { wrong: '❌ She studys English.', correct: '✅ She studies English.', explanation: 'Consonante + y: cambiamos la "y" por "i" y añadimos -es → study → studies (NO "studys").' },
    { wrong: '❌ He have a car.', correct: '✅ He has a car.', explanation: 'Irregular: have → has en he/she/it. (NO "He haves".)' },
    { wrong: '❌ I likes pizza.', correct: '✅ I like pizza.', explanation: 'Con "I" no añadimos -s: I like (no "I likes").' },
  ],
  vocabulary: [
    { word: 'work', translation_es: 'trabajar', level: 'A1', category: 'routines', partOfSpeech: 'verb', example: 'I work in Madrid.', exampleTranslation: 'Trabajo en Madrid.' },
    { word: 'live', translation_es: 'vivir', level: 'A1', category: 'routines', partOfSpeech: 'verb', example: 'They live in London.', exampleTranslation: 'Ellos viven en Londres.' },
    { word: 'drink', translation_es: 'beber', level: 'A1', category: 'routines', partOfSpeech: 'verb', example: 'I drink coffee every morning.', exampleTranslation: 'Bebo café todas las mañanas.' },
    { word: 'eat', translation_es: 'comer', level: 'A1', category: 'routines', partOfSpeech: 'verb', example: 'We eat lunch at 1.', exampleTranslation: 'Comemos a la una.' },
    { word: 'sleep', translation_es: 'dormir', level: 'A1', category: 'routines', partOfSpeech: 'verb', example: 'I sleep 8 hours.', exampleTranslation: 'Duermo 8 horas.' },
    { word: 'study', translation_es: 'estudiar', level: 'A1', category: 'routines', partOfSpeech: 'verb', example: 'She studies English.', exampleTranslation: 'Ella estudia inglés.' },
    { word: 'read', translation_es: 'leer', level: 'A1', category: 'routines', partOfSpeech: 'verb', example: 'He reads a book.', exampleTranslation: 'Él lee un libro.' },
    { word: 'watch', translation_es: 'ver (la tele)', level: 'A1', category: 'routines', partOfSpeech: 'verb', example: 'He watches TV.', exampleTranslation: 'Él ve la tele.' },
    { word: 'play', translation_es: 'jugar', level: 'A1', category: 'routines', partOfSpeech: 'verb', example: 'They play football.', exampleTranslation: 'Ellos juegan al fútbol.' },
    { word: 'go', translation_es: 'ir', level: 'A1', category: 'routines', partOfSpeech: 'verb', example: 'She goes to school.', exampleTranslation: 'Ella va al colegio.' },
    { word: 'have', translation_es: 'tener', level: 'A1', category: 'routines', partOfSpeech: 'verb', example: 'He has two children.', exampleTranslation: 'Él tiene dos hijos.' },
    { word: 'walk', translation_es: 'caminar, andar', level: 'A1', category: 'routines', partOfSpeech: 'verb', example: 'I walk to work.', exampleTranslation: 'Voy a trabajar andando.' },
  ],
  grammarPoints: [
    {
      id: 'gp-present-simple-affirmative',
      level: 'A1',
      name: 'Present Simple — affirmative',
      explanation_es: 'Para rutinas, hábitos y hechos generales. Con I/You/We/They: verbo normal. Con He/She/It: añadir -s (-s, -es, -ies según la terminación). Irregular: have → has.',
      formula: 'I/You/We/They + verb | He/She/It + verb-s (-s, -es, -ies) | have → has',
      examples: ['I work in Madrid.', 'She works in a bank.', 'He has a car.', 'She studies English.'],
    },
  ],
  exercises: [
    {
      id: 'a1-m5-l1-ex1',
      type: 'multiple_choice',
      concept: 'present simple affirmative - 3rd person -s',
      difficulty: 1,
      prompt: 'Completa: "She ___ in a bank."',
      promptTranslation: 'Ella trabaja en un banco.',
      correctAnswer: 'works',
      options: ['work', 'works', 'working'],
      explanation: 'Con "she" añadimos -s al verbo: work → works.',
    },
    {
      id: 'a1-m5-l1-ex2',
      type: 'fill_blank',
      concept: 'present simple affirmative - base form with I',
      difficulty: 1,
      prompt: 'Completa: "I ___ in Madrid."',
      promptTranslation: 'Trabajo en Madrid.',
      correctAnswer: 'work',
      acceptedAnswers: ['Work'],
      explanation: 'Con "I" el verbo NO cambia: work (sin -s).',
    },
    {
      id: 'a1-m5-l1-ex3',
      type: 'multiple_choice',
      concept: 'present simple affirmative - they',
      difficulty: 1,
      prompt: 'Completa: "They ___ coffee every morning."',
      promptTranslation: 'Beben café todas las mañanas.',
      correctAnswer: 'drink',
      options: ['drinks', 'drink', 'drinking'],
      explanation: 'Con "they" el verbo no cambia: drink (sin -s).',
    },
    {
      id: 'a1-m5-l1-ex4',
      type: 'multiple_choice',
      concept: 'present simple affirmative - spelling -es after -ch',
      difficulty: 2,
      prompt: 'Completa: "He ___ TV."',
      promptTranslation: 'Él ve la tele.',
      correctAnswer: 'watches',
      options: ['watch', 'watchs', 'watches', 'watchies'],
      explanation: 'Verbo terminado en -ch: añade -es → watch → watches.',
    },
    {
      id: 'a1-m5-l1-ex5',
      type: 'multiple_choice',
      concept: 'present simple affirmative - spelling -ies',
      difficulty: 2,
      prompt: 'Completa: "She ___ English."',
      promptTranslation: 'Ella estudia inglés.',
      correctAnswer: 'studies',
      options: ['studys', 'studyes', 'studies', 'study'],
      explanation: 'Consonante + y: cambia la "y" por "i" y añade -es → study → studies.',
    },
    {
      id: 'a1-m5-l1-ex6',
      type: 'multiple_choice',
      concept: 'present simple affirmative - irregular have',
      difficulty: 2,
      prompt: 'Completa: "He ___ two children."',
      promptTranslation: 'Él tiene dos hijos.',
      correctAnswer: 'has',
      options: ['have', 'haves', 'has', 'havees'],
      explanation: 'Irregular: have → has en he/she/it. (NO "haves".)',
    },
    {
      id: 'a1-m5-l1-ex7',
      type: 'error_correction',
      concept: 'present simple affirmative - 3rd person -s',
      difficulty: 2,
      prompt: 'Corrige el error: "She work in Madrid."',
      correctAnswer: 'She works in Madrid.',
      acceptedAnswers: ['She works in Madrid'],
      acceptApproximate: true,
      explanation: 'Con "she" (3ª persona) añadimos -s: work → works.',
    },
    {
      id: 'a1-m5-l1-ex8',
      type: 'translate',
      concept: 'present simple affirmative',
      difficulty: 3,
      prompt: 'Traduce: "Ella trabaja en un banco."',
      correctAnswer: 'She works in a bank.',
      acceptedAnswers: ['She works in a bank', 'she works in a bank.'],
      acceptApproximate: true,
      explanation: 'Con "she" añadimos -s: work → works. → She works in a bank.',
    },
    {
      id: 'a1-m5-l1-ex9',
      type: 'reorder',
      concept: 'present simple affirmative - word order',
      difficulty: 3,
      prompt: 'Ordena las palabras para formar una frase: She / works / bank / a / in',
      promptTranslation: 'Ella trabaja en un banco.',
      correctAnswer: 'She works in a bank.',
      words: ['She', 'works', 'bank', 'a', 'in'],
      explanation: 'Orden correcto: She works in a bank. (Sujeto + verbo + preposición + artículo + nombre.)',
    },
    {
      id: 'a1-m5-l1-ex10',
      type: 'match',
      concept: 'present simple affirmative - 3rd person spelling',
      difficulty: 3,
      prompt: 'Relaciona cada pronombre con la forma correcta del verbo.',
      promptTranslation: 'Match each pronoun with the correct verb form.',
      correctAnswer: '',
      pairs: [
        { left: 'I', right: 'work' },
        { left: 'She', right: 'works' },
        { left: 'He', right: 'watches' },
        { left: 'They', right: 'watch' },
        { left: 'It', right: 'goes' },
      ],
      explanation: 'I/They: sin -s (work, watch). She/He: con -s/-es (works, watches). It + go → goes (-es).',
    },
  ],
  miniTest: [
    {
      id: 'a1-m5-l1-mt1',
      type: 'multiple_choice',
      concept: 'present simple affirmative - 3rd person -s',
      difficulty: 1,
      prompt: 'Completa: "He ___ in London."',
      promptTranslation: 'Él vive en Londres.',
      correctAnswer: 'lives',
      options: ['live', 'lives', 'livees'],
      explanation: 'Con "he" añadimos -s: live → lives.',
    },
    {
      id: 'a1-m5-l1-mt2',
      type: 'fill_blank',
      concept: 'present simple affirmative - base form',
      difficulty: 2,
      prompt: 'Completa: "We ___ coffee every morning."',
      promptTranslation: 'Bebemos café todas las mañanas.',
      correctAnswer: 'drink',
      acceptedAnswers: ['Drink'],
      explanation: 'Con "we" el verbo no cambia: drink.',
    },
    {
      id: 'a1-m5-l1-mt3',
      type: 'multiple_choice',
      concept: 'present simple affirmative - spelling -ies',
      difficulty: 2,
      prompt: 'Completa: "She ___ English."',
      promptTranslation: 'Ella estudia inglés.',
      correctAnswer: 'studies',
      options: ['studys', 'studyes', 'studies'],
      explanation: 'Consonante + y → -ies: study → studies.',
    },
    {
      id: 'a1-m5-l1-mt4',
      type: 'error_correction',
      concept: 'present simple affirmative - irregular have',
      difficulty: 3,
      prompt: 'Corrige el error: "He have a car."',
      correctAnswer: 'He has a car.',
      acceptedAnswers: ['He has a car'],
      acceptApproximate: true,
      explanation: 'Irregular: have → has en he/she/it.',
    },
    {
      id: 'a1-m5-l1-mt5',
      type: 'translate',
      concept: 'present simple affirmative',
      difficulty: 3,
      prompt: 'Traduce: "Nosotros bebemos café todas las mañanas."',
      correctAnswer: 'We drink coffee every morning.',
      acceptedAnswers: ['We drink coffee every morning', 'we drink coffee every morning.'],
      acceptApproximate: true,
      explanation: 'Con "we" el verbo no cambia: drink. → We drink coffee every morning.',
    },
  ],
  reviewItems: ['a1-m4-l5'],
  prerequisites: ['a1-m4-l5'],
}