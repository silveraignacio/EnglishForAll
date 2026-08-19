import type { Lesson } from '../../types'

export const lesson42SPossessive: Lesson = {
  id: 'a1-m4-l2',
  moduleId: 'm4-family-possessives',
  order: 1,
  title: "'s Possessive (Genitivo sajón)",
  objective: 'Aprender a indicar posesión con el genitivo sajón (\'s).',
  explanation_es: `En español, para indicar posesión usamos la palabra "de":
- "el coche **de** Juan"
- "el libro **de** María"

En inglés, en cambio, añadimos **'s** al dueño (la persona que posee), y ponemos el objeto después:
- **John's car** = el coche de John
- **María's book** = el libro de María

La estructura es:

> **Dueño + 's + cosa poseída**

Ejemplos:
- **John's wife** = la esposa de John
- **my brother's name** = el nombre de mi hermano
- **Sara's parents** = los padres de Sara

**Plurales que terminan en -s:**
Si el dueño ya termina en "-s" (porque es plural), solo añadimos el apóstrofo **'** (sin la "s"):
- **my parents' house** = la casa de mis padres (parents + ')
- **the students' books** = los libros de los estudiantes

**Plurales que NO terminan en -s:**
Hay plurales irregulares como "children" (niños), "men" (hombres), "women" (mujeres). Como no terminan en "-s", usamos **'s** normalmente:
- **children's toys** = los juguetes de los niños
- **men's clothes** = la ropa de los hombres

**'s vs. adjetivos posesivos:**
- "his car" = su coche (de él) → usamos el adjetivo posesivo **his** sin decir quién.
- "John's car" = el coche de John → con **'s** decimos QUIÉN es el dueño.

No se mezclan:
- ❌ my's car
- ✅ my car (adjetivo posesivo)
- ✅ John's car (genitivo sajón)

Y NO se puede usar **'s** con un adjetivo posesivo. "his" ya indica posesión; no decimos "his's".`,
  examples: [
    { english: "John's wife is a doctor.", spanish: 'La esposa de Juan es médica.', note: 'John + \'s + wife → la esposa de John.' },
    { english: "María's book is on the table.", spanish: 'El libro de María está en la mesa.' },
    { english: "My brother's name is Tom.", spanish: 'El nombre de mi hermano es Tom.', note: '"my brother" = mi hermano; + \'s → de mi hermano.' },
    { english: "Sara's parents are Argentinian.", spanish: 'Los padres de Sara son argentinos.' },
    { english: "The children's toys are in the garden.", spanish: 'Los juguetes de los niños están en el jardín.', note: '"children" no termina en -s, así que usamos \'s (no solo \').' },
    { english: "My parents' house is big.", spanish: 'La casa de mis padres es grande.', note: '"parents" termina en -s, así que solo añadimos \' (sin la s).' },
    { english: "Her sister's name is Ana.", spanish: 'El nombre de su hermana (de ella) es Ana.', note: 'Aquí combinamos adjetivo posesivo "her" + nombre + \'s + cosa.' },
  ],
  rule: `Reglas del genitivo sajón ('s):

1. **Dueño singular:** Dueño + 's + cosa
   - John's car (el coche de John)
   - María's book (el libro de María)

2. **Dueño plural terminado en -s:** Dueño + ' (solo apóstrofo) + cosa
   - my parents' house (la casa de mis padres)
   - the students' books (los libros de los estudiantes)

3. **Dueño plural NO terminado en -s (irregular):** Dueño + 's + cosa
   - children's toys (los juguetes de los niños)
   - men's clothes (la ropa de los hombres)

**Importante:** No combines 's con un adjetivo posesivo (my, your, his...).
- ❌ my's car / ❌ his's brother
- ✅ my car / ✅ his brother / ✅ John's car`,
  formation: {
    title: "Cómo se forma el genitivo sajón ('s)",
    intro: "Para indicar posesión en inglés añadimos 's al dueño y ponemos la cosa poseída después: Dueño + 's + cosa. En español esto equivale a \"de\": John's car = el coche de John.",
    patterns: [
      {
        name: 'Dueño singular',
        formula: "Dueño + 's + cosa poseída",
        examples: [
          { english: "John's wife is a doctor.", spanish: 'La esposa de John es médica.' },
          { english: "María's book is on the table.", spanish: 'El libro de María está en la mesa.' },
        ],
      },
      {
        name: 'Dueño plural terminado en -s',
        formula: "Dueño plural en -s + ' + cosa poseída",
        examples: [
          { english: "My parents' house is big.", spanish: 'La casa de mis padres es grande.' },
          { english: "The students' books are on the desk.", spanish: 'Los libros de los estudiantes están en el escritorio.' },
        ],
        note: "Si el dueño ya termina en -s, solo añadimos el apóstrofo sin la \"s\".",
      },
      {
        name: 'Dueño plural irregular',
        formula: "Dueño plural irregular (sin -s) + 's + cosa poseída",
        examples: [
          { english: "The children's toys are in the garden.", spanish: 'Los juguetes de los niños están en el jardín.' },
          { english: "Men's clothes are in this shop.", spanish: 'La ropa de los hombres está en esta tienda.' },
        ],
        note: "Plurales como \"children\", \"men\", \"women\" no terminan en -s, así que usan 's.",
      },
    ],
    notes: [
      "No se mezcla 's con adjetivos posesivos: my car (no my's car), his brother (no his's brother).",
      "El orden es siempre Dueño + 's + cosa; no se interpone artículo: John's car, no \"John's the car\".",
    ],
  },
  commonMistakes: [
    { wrong: "❌ The car of John.", correct: "✅ John's car.", explanation: 'Aunque "the car of John" es gramaticalmente posible, la forma natural y mucho más común en inglés es el genitivo sajón: "John\'s car".' },
    { wrong: '❌ my\'s car', correct: '✅ my car', explanation: 'No se usa \'s con adjetivos posesivos. "my" ya indica posesión; mi coche = my car.' },
    { wrong: '❌ his\'s brother', correct: '✅ his brother', explanation: 'Igual que "my", "his" ya es posesivo. No se le añade \'s. → his brother.' },
    { wrong: "❌ John's the wife", correct: "✅ John's wife", explanation: 'El orden es Dueño + \'s + cosa. "John\'s wife" = la esposa de John. No se interpone artículo entre \'s y el sustantivo.' },
    { wrong: "❌ childrens' toys", correct: "✅ children's toys", explanation: '"children" es plural pero NO termina en -s, así que usamos \'s (no solo \'). → children\'s toys.' },
    { wrong: "❌ my parent's house (si tienes 2 padres)", correct: "✅ my parents' house", explanation: 'Si tienes dos padres (parents, plural terminado en -s), usamos solo \' sin la "s": parents\' house. "parent\'s" indicaría un solo padre.' },
  ],
  vocabulary: [
    { word: "wife's name", translation_es: "el nombre de la esposa", level: "A1", category: "family", partOfSpeech: "phrase", example: "John's wife's name is Anna.", exampleTranslation: "El nombre de la esposa de John es Anna." },
    { word: "brother's job", translation_es: "el trabajo del hermano", level: "A1", category: "family", partOfSpeech: "phrase", example: "My brother's job is interesting.", exampleTranslation: "El trabajo de mi hermano es interesante." },
    { word: "parents' house", translation_es: "la casa de los padres", level: "A1", category: "family", partOfSpeech: "phrase", example: "My parents' house is big.", exampleTranslation: "La casa de mis padres es grande." },
  ],
  grammarPoints: [
    {
      id: 'gp-s-possessive',
      level: 'A1',
      name: "Saxon genitive ('s)",
      explanation_es: "Añade 's al \"dueño\" para expresar posesión: Tom's car. Con plurales acabados en -s, usa solo ': parents' house. Con plurales irregulares (children, men) usa 's: children's toys.",
      formula: "Owner + 's + thing | Plural-s owner + ' + thing",
      examples: ["John's car", "Maria's book", "my parents' house", "children's toys"],
    },
  ],
  exercises: [
    {
      id: 'a1-m4-l2-ex1',
      type: 'fill_blank',
      concept: "saxon genitive 's",
      difficulty: 1,
      prompt: 'Completa: "John ___ car is red." (El coche de John es rojo.)',
      promptTranslation: 'Complete: "John ___ car is red."',
      correctAnswer: "'s",
      explanation: "Para decir \"de John\" añadimos 's al dueño. → John's car.",
    },
    {
      id: 'a1-m4-l2-ex2',
      type: 'multiple_choice',
      concept: "saxon genitive 's",
      difficulty: 1,
      prompt: 'How do you say "el libro de María" using the Saxon genitive?',
      promptTranslation: '¿Cómo se dice "el libro de María" con el genitivo sajón?',
      correctAnswer: "María's book",
      options: ["the book of María", "María's book", "María book's", "María has book"],
      explanation: "La estructura natural es María + 's + book → María's book.",
    },
    {
      id: 'a1-m4-l2-ex3',
      type: 'translate',
      concept: "saxon genitive 's",
      difficulty: 2,
      prompt: 'Traduce: "El coche de Juan es rojo."',
      correctAnswer: "John's car is red.",
      acceptedAnswers: ["John's car is red", "Juan's car is red.", "Juan's car is red"],
      acceptApproximate: true,
      explanation: "El coche de Juan = John's car. Es rojo = is red. → John's car is red.",
    },
    {
      id: 'a1-m4-l2-ex4',
      type: 'error_correction',
      concept: "saxon genitive 's",
      difficulty: 2,
      prompt: 'Corrige: "The wife of John is a doctor." (usa el genitivo sajón, más natural)',
      correctAnswer: "John's wife is a doctor.",
      acceptedAnswers: ["John's wife is a doctor", "John's wife is a doctor."],
      acceptApproximate: true,
      explanation: 'Aunque "the wife of John" es posible, en inglés el genitivo sajón es más natural y común: John\'s wife is a doctor.',
    },
    {
      id: 'a1-m4-l2-ex5',
      type: 'multiple_choice',
      concept: "saxon genitive 's (plural -s)",
      difficulty: 3,
      prompt: 'Which is correct for "la casa de mis padres" (tienes 2 padres)?',
      promptTranslation: '¿Cuál es correcto para "la casa de mis padres" (tienes 2 padres)?',
      correctAnswer: "my parents' house",
      options: ["my parent's house", "my parents' house", "my parents's house", "my parents house"],
      explanation: '"parents" termina en -s (plural), así que solo añadimos apóstrofo: parents\' house.',
    },
    {
      id: 'a1-m4-l2-ex6',
      type: 'multiple_choice',
      concept: "saxon genitive 's (plural irregular)",
      difficulty: 3,
      prompt: 'Which is correct for "los juguetes de los niños"?',
      promptTranslation: '¿Cuál es correcto para "los juguetes de los niños"?',
      correctAnswer: "the children's toys",
      options: ["the childrens' toys", "the children's toys", "the childrens's toys", "the children toys"],
      explanation: '"children" es plural pero NO termina en -s, así que usamos \'s (no solo \'). → children\'s toys.',
    },
    {
      id: 'a1-m4-l2-ex7',
      type: 'reorder',
      concept: "saxon genitive 's",
      difficulty: 3,
      prompt: 'Ordena las palabras: "John\'s car is fast." (El coche de John es rápido.)',
      promptTranslation: 'Order the words to form: "John\'s car is fast."',
      correctAnswer: "John's car is fast.",
      words: ["John's", "car", "is", "fast"],
      explanation: "John's car is fast. = El coche de John es rápido.",
    },
    {
      id: 'a1-m4-l2-ex8',
      type: 'error_correction',
      concept: "saxon genitive 's vs possessive adj",
      difficulty: 3,
      prompt: 'Corrige: "my\'s car is blue."',
      correctAnswer: 'My car is blue.',
      acceptedAnswers: ['my car is blue', 'My car is blue.'],
      acceptApproximate: true,
      explanation: 'No se usa \'s con adjetivos posesivos. "my" ya indica posesión. → My car is blue.',
    },
    {
      id: 'a1-m4-l2-ex9',
      type: 'match',
      concept: "saxon genitive 's",
      difficulty: 3,
      prompt: 'Relaciona cada frase en inglés con su traducción.',
      promptTranslation: 'Match each English phrase with its translation.',
      correctAnswer: '',
      pairs: [
        { left: "John's wife", right: 'la esposa de John' },
        { left: "María's book", right: 'el libro de María' },
        { left: "my brother's name", right: 'el nombre de mi hermano' },
        { left: "Sara's parents", right: 'los padres de Sara' },
        { left: "the children's toys", right: 'los juguetes de los niños' },
        { left: "my parents' house", right: 'la casa de mis padres' },
      ],
      explanation: 'Cada "Dueño + \'s + cosa" se traduce como "la cosa del/de los dueño(s)".',
    },
    {
      id: 'a1-m4-l2-ex10',
      type: 'translate',
      concept: "saxon genitive 's",
      difficulty: 4,
      prompt: 'Traduce: "El nombre de su hermano (de ella) es Tom."',
      correctAnswer: "Her brother's name is Tom.",
      acceptedAnswers: ["Her brother's name is Tom", "Her brother's name is Tom.", "her brother's name is Tom"],
      acceptApproximate: true,
      explanation: '"su hermano (de ella)" = her brother. "el nombre de..." = brother\'s name. → Her brother\'s name is Tom.',
    },
  ],
  miniTest: [
    {
      id: 'a1-m4-l2-mt1',
      type: 'fill_blank',
      concept: "saxon genitive 's",
      difficulty: 1,
      prompt: "Completa: \"María ___ book is on the table.\" (El libro de María está en la mesa.)",
      promptTranslation: "Complete: \"María ___ book is on the table.\"",
      correctAnswer: "'s",
      explanation: "María + 's + book → María's book = el libro de María.",
    },
    {
      id: 'a1-m4-l2-mt2',
      type: 'multiple_choice',
      concept: "saxon genitive 's",
      difficulty: 2,
      prompt: 'Which is correct: "El nombre de mi hermano es Tom."?',
      promptTranslation: '¿Cuál es correcto: "El nombre de mi hermano es Tom."?',
      correctAnswer: "My brother's name is Tom.",
      options: ["My brother's name is Tom.", "My brother name's is Tom.", "The name of my brother is Tom is correct grammar both ways.", "My brother name is Tom's."],
      explanation: "El genitivo sajón va en el dueño: brother's name = el nombre de mi hermano. → My brother's name is Tom.",
    },
    {
      id: 'a1-m4-l2-mt3',
      type: 'multiple_choice',
      concept: "saxon genitive 's (plural -s)",
      difficulty: 3,
      prompt: 'How do you say "la casa de mis padres" (2 padres)?',
      promptTranslation: '¿Cómo se dice "la casa de mis padres" (2 padres)?',
      correctAnswer: "my parents' house",
      options: ["my parent's house", "my parents' house", "my parents's house", "my parents house's"],
      explanation: '"parents" termina en -s → solo apóstrofo: parents\' house.',
    },
    {
      id: 'a1-m4-l2-mt4',
      type: 'error_correction',
      concept: "saxon genitive 's vs possessive adj",
      difficulty: 3,
      prompt: "Corrige: \"his's brother is tall.\"",
      correctAnswer: "His brother is tall.",
      acceptedAnswers: ["His brother is tall", "his brother is tall."],
      acceptApproximate: true,
      explanation: 'No se usa \'s con "his". "his" ya es posesivo. → His brother is tall.',
    },
    {
      id: 'a1-m4-l2-mt5',
      type: 'translate',
      concept: "saxon genitive 's",
      difficulty: 4,
      prompt: 'Traduce: "Los juguetes de los niños están en el jardín."',
      correctAnswer: "The children's toys are in the garden.",
      acceptedAnswers: ["The children's toys are in the garden", "The children's toys are in the garden.", "the children's toys are in the garden"],
      acceptApproximate: true,
      explanation: '"children" es plural irregular (no termina en -s), así que usamos \'s. → The children\'s toys are in the garden.',
    },
  ],
  reviewItems: ['a1-m4-l1'],
  prerequisites: ['a1-m4-l1'],
}