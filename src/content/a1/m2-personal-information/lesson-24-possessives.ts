import type { Lesson } from '../../types'

export const lesson24Possessives: Lesson = {
  id: 'a1-m2-l4',
  moduleId: 'm2-personal-information',
  order: 3,
  title: 'Posesivos (Possessive Adjectives)',
  objective: 'Aprender los adjetivos posesivos ingleses: my, your, his, her, our, their.',
  explanation_es: `Los **adjetivos posesivos** son palabras que van ANTES de un sustantivo para indicar a quién pertenece algo. En español tenemos "mi", "tu", "su", "nuestro", etc. En inglés son distintos y son **6 palabras** muy importantes:

| Adjetivo posesivo | Español                          | Ejemplo                       |
|-------------------|----------------------------------|-------------------------------|
| **my**            | mi / mis                         | My name is Ignacio.            |
| **your**          | tu / tus / su / sus (de usted)   | Your car is new.              |
| **his**           | su / sus (de él)                 | His name is John.             |
| **her**           | su / sus (de ella)               | Her name is María.            |
| **our**           | nuestro / a / os / as             | Our teacher is great.         |
| **their**         | su / sus (de ellos / ellas)      | Their names are Lisa and Tom. |

(Note: la forma "its" existe para cosas/animales, pero es poco frecuente a nivel A1. La trataremos más adelante.)

**DIFERENCIA CLAVE con el español — el "su" ambiguo:**

En español, la palabra "su" puede significar: de él, de ella, de usted, o de ellos/ellas. Es AMBIGUA. ¡En inglés es PRECISA!

- "su nombre" → puede ser de él, de ella, de usted, de ellos. ¡Ambiguo!
- En inglés: **his name** (de él), **her name** (de ella), **your name** (de usted), **their name** (de ellos).

Esta precisión es una gran ventaja del inglés. ¡Memorízala!

**Estructura:**

**adjetivo posesivo + sustantivo** (siempre van juntos)

- **my name** = mi nombre
- **his brother** = su hermano (de él)
- **her sister** = su hermana (de ella)
- **our teacher** = nuestor/a profesor/a
- **their friends** = sus amigos (de ellos)

**ATENCIÓN — posesivos NO se acentúan con "'s":**
- ✅ ❌ "His's name" nunca. Solo "his name".
- ✅ ❌ "Their's names" nunca. Solo "their names".

**⚠️ Posesivos vs Pronombres personales:**

No confundas el PRONOMBRE (he, she, they) con el ADJETIVO POSESIVO (his, her, their):

- **he** (él) → su posesivo es **his**
- **she** (ella) → su posesivo es **her**
- **they** (ellos) → su posesivo es **their**
- **I** (yo) → su posesivo es **my**

¡Fíjate que "her" y "his" NO coinciden con el pronombre! "She" → "her" (no "she's"). "He" → "his" (no "he's"). Esto confunde a muchos hispanohablantes.`,
  examples: [
    { english: 'My name is Ignacio.', spanish: 'Mi nombre es Ignacio.', note: 'my = mi' },
    { english: 'Your car is new.', spanish: 'Tu coche es nuevo.', note: 'your = tu (o su de usted)' },
    { english: 'His name is John.', spanish: 'Su nombre (de él) es John.', note: 'his = su de él' },
    { english: 'Her name is María.', spanish: 'Su nombre (de ella) es María.', note: 'her = su de ella' },
    { english: 'Our teacher is great.', spanish: 'Nuestro profesor es genial.', note: 'our = nuestro' },
    { english: 'Their names are Lisa and Tom.', spanish: 'Sus nombres (de ellos) son Lisa y Tom.', note: 'their = su de ellos' },
    { english: 'What is your name?', spanish: '¿Cuál es tu nombre?', note: 'your puede ser tu (tú) o su (usted)' },
    { english: 'His brother is a doctor.', spanish: 'Su hermano (de él) es médico.', note: 'his + sustantivo' },
  ],
  rule: `**Regla de los adjetivos posesivos:**

1. **Forma (6 adjetivos):**
   - **my** = mi / mis
   - **your** = tu / tus / su / sus (usted)
   - **his** = su / sus (de él)
   - **her** = su / sus (de ella)
   - **our** = nuestro / a / os / as
   - **their** = su / sus (de ellos / ellas)

2. **Van SIEMPRE antes de un sustantivo** (jamás solos): my book, your friend, his wife, her job, our class, their house.

3. **No se unen con "'s"**: no decimos "his's", "their's", "your's". El adjetivo posesivo no lleva apóstrofo.

4. **PRECISIÓN vs "su" español**: en inglés sabemos SIEMPRE a quién pertenece (his / her / your / their), el español "su" es ambiguo.

5. **Concordancia con el poseedor, no con lo poseído**: en inglés NO cambia el posesivo según género del sustantivo. "His car" (su coche de él) y "Her car" (su coche de ella) — el posesivo depende del POSEEDOR, no del objeto poseído.`,
  commonMistakes: [
    { wrong: '❌ He is name is John.', correct: '✅ His name is John.', explanation: '"His" (su, de él) es el adjetivo posesivo. "He" es el pronombre; "He is name" no tiene sentido. → His name.' },
    { wrong: '❌ She is name is María.', correct: '✅ Her name is María.', explanation: 'Para ella usamos "her" (NO "she is"). "Her" es el posesivo de she.' },
    { wrong: '❌ I name is Ignacio.', correct: '✅ My name is Ignacio.', explanation: 'Antes de "name" necesitamos un posesivo: "my" (mi). → My name is Ignacio.' },
    { wrong: "❌ Their's names are Lisa and Tom.", correct: '✅ Their names are Lisa and Tom.', explanation: 'Los posesivos NO llevan apóstrofo. "Their" ya significa "su (de ellos)". No añadimos \'s.' },
    { wrong: '❌ The Maria\'s name', correct: '✅ Maria\'s name (o Her name)', explanation: 'No combinamos el artículo "the" con un posesivo en este caso. Decimos "Maria\'s name" o, si ya hablamos de María, "her name".' },
    { wrong: '❌ His sister is doctor (sin artículo en otra frase)', correct: '✅ His sister is a doctor.', explanation: 'Falta el artículo "a" antes de profesiones (veremos esto en el próximo módulo, pero ¡ojo!).',
      },
  ],
  vocabulary: [
    { word: 'my', translation_es: 'mi / mis', level: 'A1', category: 'possessives', partOfSpeech: 'adjective', example: 'My name is María.', exampleTranslation: 'Mi nombre es María.' },
    { word: 'your', translation_es: 'tu / sus (usted)', level: 'A1', category: 'possessives', partOfSpeech: 'adjective', example: 'Your book is on the table.', exampleTranslation: 'Tu libro está en la mesa.' },
    { word: 'his', translation_es: 'su / sus (de él)', level: 'A1', category: 'possessives', partOfSpeech: 'adjective', example: 'His name is John.', exampleTranslation: 'Su nombre (de él) es John.' },
    { word: 'her', translation_es: 'su / sus (de ella)', level: 'A1', category: 'possessives', partOfSpeech: 'adjective', example: 'Her name is María.', exampleTranslation: 'Su nombre (de ella) es María.' },
    { word: 'our', translation_es: 'nuestro / a / os / as', level: 'A1', category: 'possessives', partOfSpeech: 'adjective', example: 'Our teacher is great.', exampleTranslation: 'Nuestro profesor es genial.' },
    { word: 'their', translation_es: 'su / sus (de ellos/ellas)', level: 'A1', category: 'possessives', partOfSpeech: 'adjective', example: 'Their names are Lisa and Tom.', exampleTranslation: 'Sus nombres (de ellos) son Lisa y Tom.' },
    { word: 'name', translation_es: 'nombre', level: 'A1', category: 'possessives', partOfSpeech: 'noun', example: 'My name is Ignacio.', exampleTranslation: 'Mi nombre es Ignacio.' },
    { word: 'brother', translation_es: 'hermano', level: 'A1', category: 'possessives', partOfSpeech: 'noun', example: 'His brother is a doctor.', exampleTranslation: 'Su hermano es médico.' },
    { word: 'sister', translation_es: 'hermana', level: 'A1', category: 'possessives', partOfSpeech: 'noun', example: 'Her sister is young.', exampleTranslation: 'Su hermana es joven.' },
  ],
  grammarPoints: [
    {
      id: 'gp-possessive-adjectives',
      level: 'A1',
      name: 'Possessive Adjectives',
      explanation_es: 'Los adjetivos posesivos ingleses son 6: my, your, his, her, our, their. Van ANTES de un sustantivo (mi libro, su hermana). NO llevan apóstrofo. A diferencia del español "su" (ambiguo), los ingleses distinguen claramente his (de él), her (de ella), your (de usted), their (de ellos). El posesivo concuerda con el poseedor, no con el objeto poseído: "her brother" / "his brother" — ambos "brother" es el mismo sustantivo, lo que cambia es de quién es.',
      formula: 'my | your | his | her | our | their + noun',
      examples: [
        'My name is María.',
        'His brother is a doctor.',
        'Their parents are Argentinian.',
      ],
      commonMistakes: [
        'Decir "He is name" en vez de "His name". "He" es pronombre; "his" es posesivo.',
        'Usar apóstrofo: "their\'s", "his\'s" — incorrecto. Los posesivos no llevan \'s.',
        'Confundir "su" en español: en inglés hay que precisar (his, her, your, their).',
      ],
    },
  ],
  exercises: [
    {
      id: 'a1-m2-l4-ex1',
      type: 'multiple_choice',
      concept: 'my possessive',
      difficulty: 1,
      prompt: 'Elige el posesivo correcto: "___ name is Ignacio." (yo)',
      promptTranslation: 'Choose the correct possessive.',
      correctAnswer: 'My',
      options: ['My', 'I', 'Me', 'Mine'],
      explanation: 'Antes de "name" necesitamos el posesivo "my" (mi). → My name is Ignacio.',
    },
    {
      id: 'a1-m2-l4-ex2',
      type: 'multiple_choice',
      concept: 'his possessive',
      difficulty: 1,
      prompt: 'Elige el posesivo correcto: "___ name is John." (de él)',
      promptTranslation: 'Choose the correct possessive (his).',
      correctAnswer: 'His',
      options: ['He', 'His', 'Her', 'Your'],
      explanation: '"His" = su (de él). "He" es el pronombre. → His name is John.',
    },
    {
      id: 'a1-m2-l4-ex3',
      type: 'multiple_choice',
      concept: 'her possessive',
      difficulty: 1,
      prompt: 'Elige el posesivo correcto: "___ name is María." (de ella)',
      promptTranslation: 'Choose the correct possessive (her).',
      correctAnswer: 'Her',
      options: ['She', 'Her', 'His', 'Hers'],
      explanation: '"Her" = su (de ella). No es "She is name" — ese error es muy común. → Her name is María.',
    },
    {
      id: 'a1-m2-l4-ex4',
      type: 'fill_blank',
      concept: 'their possessive',
      difficulty: 2,
      prompt: 'Completa: "___ names are Lisa and Tom." (de ellos)',
      promptTranslation: 'Fill in: their names.',
      correctAnswer: 'Their',
      acceptedAnswers: ['their'],
      explanation: '"Their" = su (de ellos). Concuerda con el poseedor (they), no con "names". → Their names are Lisa and Tom.',
    },
    {
      id: 'a1-m2-l4-ex5',
      type: 'fill_blank',
      concept: 'our possessive',
      difficulty: 2,
      prompt: 'Completa: "___ teacher is great." (nuestro)',
      promptTranslation: 'Fill in: our teacher.',
      correctAnswer: 'Our',
      acceptedAnswers: ['our'],
      explanation: '"Our" = nuestro. Va siempre antes del sustantivo. → Our teacher is great.',
    },
    {
      id: 'a1-m2-l4-ex6',
      type: 'error_correction',
      concept: 'He is vs His',
      difficulty: 2,
      prompt: 'Corrige el error: "He is name is John."',
      correctAnswer: 'His name is John.',
      acceptedAnswers: ['His name is John', "His name's John.", 'His name is John.'],
      acceptApproximate: true,
      explanation: '"He" es pronombre personal. El posesivo de "he" es "his". → His name is John.',
    },
    {
      id: 'a1-m2-l4-ex7',
      type: 'error_correction',
      concept: "apostrophe in possessive adjective",
      difficulty: 3,
      prompt: "Corrige el error: \"Their's names are Lisa and Tom.\"",
      correctAnswer: 'Their names are Lisa and Tom.',
      acceptedAnswers: ['Their names are Lisa and Tom', 'Their names are Lisa and Tom.'],
      acceptApproximate: true,
      explanation: 'Los posesivos NO llevan apóstrofo. "Their" ya significa "su (de ellos)". → Their names are Lisa and Tom.',
    },
    {
      id: 'a1-m2-l4-ex8',
      type: 'translate',
      concept: 'translate possession',
      difficulty: 3,
      prompt: 'Traduce: "Su nombre de ella es María."',
      correctAnswer: 'Her name is María.',
      acceptedAnswers: ['Her name is Maria.', "Her name's María.", 'Her name is Maria', "Her name's Maria."],
      acceptApproximate: true,
      explanation: '"Su de ella" en inglés es "her" (NO "she"). → Her name is María.',
    },
    {
      id: 'a1-m2-l4-ex9',
      type: 'match',
      concept: 'possessive ↔ Spanish',
      difficulty: 2,
      prompt: 'Relaciona cada posesivo con su significado.',
      promptTranslation: 'Match each possessive with its meaning.',
      correctAnswer: '',
      pairs: [
        { left: 'my', right: 'mi / mis' },
        { left: 'his', right: 'su (de él)' },
        { left: 'her', right: 'su (de ella)' },
        { left: 'our', right: 'nuestro' },
        { left: 'their', right: 'su (de ellos)' },
        { left: 'your', right: 'tu / su (usted)' },
      ],
      explanation: 'En inglés los posesivos son precisos: his (de él), her (de ella), your (tu/usted), their (de ellos). El "su" español es ambiguo.',
    },
    {
      id: 'a1-m2-l4-ex10',
      type: 'reorder',
      concept: 'possession sentence order',
      difficulty: 3,
      prompt: 'Ordena las palabras para formar una frase correcta.',
      promptTranslation: 'Order the words.',
      correctAnswer: 'Her brother is a doctor.',
      words: ['Her', 'brother', 'is', 'a', 'doctor.'],
      explanation: 'Orden: posesivo + sustantivo + verbo + artículo + sustantivo. → Her brother is a doctor. = Su hermano (de ella) es médico.',
    },
  ],
  miniTest: [
    {
      id: 'a1-m2-l4-mt1',
      type: 'multiple_choice',
      concept: 'my possessive',
      difficulty: 1,
      prompt: 'Completa: "___ friend is from Spain." (mi)',
      promptTranslation: 'Fill in: my friend.',
      correctAnswer: 'My',
      options: ['My', 'I', 'Me', 'Mine'],
      explanation: '"My" = mi. Va antes del sustantivo (friend). → My friend is from Spain.',
    },
    {
      id: 'a1-m2-l4-mt2',
      type: 'multiple_choice',
      concept: 'his vs her',
      difficulty: 2,
      prompt: 'Elige el posesivo correcto para "Juan\'s sister": "___ sister is María."',
      promptTranslation: 'Choose the correct possessive for Juan\'s sister.',
      correctAnswer: 'His',
      options: ['His', 'Her', 'He', 'She'],
      explanation: 'Hablamos de la hermana DE JUAN (de él) → "his". → His sister is María.',
    },
    {
      id: 'a1-m2-l4-mt3',
      type: 'error_correction',
      concept: 'She is vs Her',
      difficulty: 2,
      prompt: 'Corrige: "She is name is María."',
      correctAnswer: 'Her name is María.',
      acceptedAnswers: ['Her name is Maria.', "Her name's Maria.", 'Her name is Maria.', "Her name's María."],
      acceptApproximate: true,
      explanation: '"She" es pronombre. El posesivo de "she" es "her". → Her name is María.',
    },
    {
      id: 'a1-m2-l4-mt4',
      type: 'translate',
      concept: 'translate possession',
      difficulty: 3,
      prompt: 'Traduce: "Nuestro profesor es genial."',
      correctAnswer: 'Our teacher is great.',
      acceptedAnswers: ['Our teacher is great', 'Our teachers are great', 'Our teacher is great.'],
      acceptApproximate: true,
      explanation: '"Nuestro" = our. → Our teacher is great.',
    },
    {
      id: 'a1-m2-l4-mt5',
      type: 'fill_blank',
      concept: 'their possessive',
      difficulty: 3,
      prompt: 'Completa: "___ parents are Argentinian." (sus padres, de ellos)',
      promptTranslation: 'Fill in: their parents.',
      correctAnswer: 'Their',
      acceptedAnswers: ['their'],
      explanation: '"Their" = su (de ellos). → Their parents are Argentinian.',
    },
  ],
  reviewItems: ['a1-m2-l3'],
  prerequisites: ['a1-m2-l3'],
}