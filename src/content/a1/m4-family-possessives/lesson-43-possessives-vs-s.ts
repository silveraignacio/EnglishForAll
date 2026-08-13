import type { Lesson } from '../../types'

export const lesson43PossessivesVsS: Lesson = {
  id: 'a1-m4-l3',
  moduleId: 'm4-family-possessives',
  order: 2,
  title: "Posesivos vs. 's + Repaso",
  objective: "Diferenciar entre adjetivos posesivos y el genitivo sajón y hacer un repaso.",
  explanation_es: `Hasta ahora hemos visto dos formas de expresar posesión:

**1. Adjetivos posesivos** (my, your, his, her, our, their):
Van antes del sustantivo y nos dicen que algo nos pertenece, **sin nombrar al dueño**:
- **my book** = mi libro
- **his car** = su coche (de él)
- **her name** = su nombre (de ella)

**2. Genitivo sajón ('s):**
Nos dice **QUIÉN** es el dueño:
- **John's car** = el coche de John
- **María's book** = el libro de María

**Lo importante: NO se mezclan.**
- ❌ my's book
- ❌ his's brother
- ✅ my book (adjetivo posesivo)
- ✅ his brother (adjetivo posesivo)
- ✅ John's book (genitivo sajón)

**¿Se pueden combinar en la misma frase? Sí.** Cuando el dueño es "mi hermano", "su amiga", etc., usamos el adjetivo posesivo + el sustantivo del dueño + 's + la cosa poseída:
- **my brother's car** = el coche de mi hermano
- **her friend's name** = el nombre de su amiga (de ella)
- **our parents' house** = la casa de nuestros padres

Estructura:
> **[adjetivo posesivo] + sustantivo (dueño) + 's + cosa**

Aquí "my brother" o "her friend" funciona como el "dueño", y la 's marca la posesión de algo.

**Resumen comparativo:**
| Forma | Ejemplo | Significado |
|-------|---------|-------------|
| Adjetivo posesivo | my car | mi coche |
| Adjetivo posesivo | his brother | su hermano (de él) |
| Genitivo sajón | John's car | el coche de John |
| Combinado | my brother's car | el coche de mi hermano |`,
  examples: [
    { english: 'This is my car.', spanish: 'Este es mi coche.', note: 'Adjetivo posesivo "my", sin \'s.' },
    { english: "This is John's car.", spanish: 'Este es el coche de John.', note: 'Genitivo sajón: John + \'s.' },
    { english: "This is my brother's car.", spanish: 'Este es el coche de mi hermano.', note: 'Combinado: adjetivo posesivo "my" + sustantivo "brother" + \'s + "car".' },
    { english: 'Her name is María.', spanish: 'Su nombre (de ella) es María.', note: 'Adjetivo posesivo "her"; no hace falta \'s.' },
    { english: "María's husband is a doctor.", spanish: 'El esposo de María es médico.', note: 'Genitivo sajón con nombre propio.' },
    { english: "Their daughter's name is Ana.", spanish: 'El nombre de su hija (de ellos) es Ana.', note: 'Combinado: "their" + "daughter" + \'s + "name".' },
  ],
  rule: `Reglas rápida de comparación:

- **Adjetivos posesivos** (my, your, his, her, our, their) van ANTES del sustantivo, sin \'s:
  - my book, his car, her name, our house, their dog

- **Genitivo sajón ('s):** indica QUIÉN posee:
  - John's car, María's book

- **NO se combinan adjetivo posesivo con 's:**
  - ❌ my's, ❌ his's, ❌ her's
  - ✅ my, ✅ his, ✅ her

- **Combinación válida:** adjetivo posesivo + sustantivo (dueño) + 's + cosa:
  - my brother's car (el coche de mi hermano)
  - their daughter's name (el nombre de su hija)`,
  commonMistakes: [
    { wrong: "❌ I'm John's car ( queriendo decir \"Tengo el coche de John\")", correct: "✅ I have John's car OR My car is John's.", explanation: 'Para decir "tengo el coche de John", usa "have": I have John\'s car. "I am John\'s car" significaría "Yo soy el coche de John" (sin sentido).' },
    { wrong: "❌ His's brother", correct: "✅ His brother", explanation: 'No se usa \'s con un adjetivo posesivo. "his" ya indica posesión. → His brother.' },
    { wrong: "❌ John's her friend (queriendo decir \"John es su amigo\")", correct: "✅ John is her friend.", explanation: 'Para "John es su amigo", necesitamos el verbo "be": John is her friend. "John\'s" indicaría posesión, no "es".' },
    { wrong: "❌ my's", correct: "✅ my", explanation: 'Ningún adjetivo posesivo lleva \'s. La lista es: my, your, his, her, our, their.' },
  ],
  vocabulary: [],
  grammarPoints: [
    {
      id: 'gp-possessives-recap',
      level: 'A1',
      name: "Posesivos vs. 's — comparación",
      explanation_es: "Los posesivos (my, your, his...) van antes del sustantivo, sin indicar quién. 's indica quién posee (John's). NO se combinan: my's ✗, his's ✗.",
      formula: "possessive adj + noun | owner + 's + noun | poss.adj + owner noun + 's + thing",
      examples: ['my book', "John's book", "my brother's book", "their daughter's name"],
    },
  ],
  exercises: [
    {
      id: 'a1-m4-l3-ex1',
      type: 'multiple_choice',
      concept: 'possessives vs s',
      difficulty: 1,
      prompt: 'Which sentence is correct?',
      promptTranslation: '¿Qué frase es correcta?',
      correctAnswer: 'His brother is tall.',
      options: ["His's brother is tall.", 'His brother is tall.', "His's brother's tall."],
      explanation: 'No se usa \'s con un adjetivo posesivo. "his" ya indica posesión. → His brother is tall.',
    },
    {
      id: 'a1-m4-l3-ex2',
      type: 'multiple_choice',
      concept: 'possessives vs s',
      difficulty: 2,
      prompt: 'Choose the correct option: "El nombre de su hermana (de ella) es Ana."',
      promptTranslation: 'Elige la opción correcta: "El nombre de su hermana (de ella) es Ana."',
      correctAnswer: "Her sister's name is Ana.",
      options: ["Her sister's name is Ana.", "Her's sister name is Ana.", "Her sister name's is Ana.", "She sister's name is Ana."],
      explanation: 'Combinado: adjetivo posesivo "her" + sustantivo "sister" + \'s + cosa "name". → Her sister\'s name is Ana.',
    },
    {
      id: 'a1-m4-l3-ex3',
      type: 'error_correction',
      concept: 'possessives vs s',
      difficulty: 2,
      prompt: "Corrige: \"His's brother is a doctor.\"",
      correctAnswer: "His brother is a doctor.",
      acceptedAnswers: ["His brother is a doctor", "his brother is a doctor."],
      acceptApproximate: true,
      explanation: 'No se usa \'s con "his". "his" ya indica posesión. → His brother is a doctor.',
    },
    {
      id: 'a1-m4-l3-ex4',
      type: 'translate',
      concept: 'possessives vs s',
      difficulty: 3,
      prompt: 'Traduce: "Este es el coche de mi hermano."',
      correctAnswer: "This is my brother's car.",
      acceptedAnswers: ["This is my brother's car", "This is my brother's car.", "This is my brother's car."],
      acceptApproximate: true,
      explanation: '"mi hermano" = my brother; "el coche de..." = brother\'s car. → This is my brother\'s car.',
    },
    {
      id: 'a1-m4-l3-ex5',
      type: 'select_correct',
      concept: 'possessives vs s',
      difficulty: 3,
      prompt: 'Selecciona la frase correcta: "El nombre de John es John." (la persona se llama igual que su padre, como ejemplo)',
      promptTranslation: 'Select the correct sentence: "John\'s name is John."',
      correctAnswer: "John's name is John.",
      options: ["John name is John's.", "John's name is John.", "John name's is John.", "John's its name is John."],
      explanation: 'Dueño (John) + \'s + cosa (name). → John\'s name is John. (Aunque suena raro, es gramaticalmente correcto.)',
    },
    {
      id: 'a1-m4-l3-ex6',
      type: 'fill_blank',
      concept: 'possessives vs s',
      difficulty: 3,
      prompt: "Completa: \"That is ___ brother's car.\" (Ese es el coche de mi hermano.)",
      promptTranslation: "Complete: \"That is ___ brother's car.\"",
      correctAnswer: 'my',
      explanation: 'El dueño es "mi hermano", en inglés "my brother". → my + brother\'s car = my brother\'s car.',
    },
    {
      id: 'a1-m4-l3-ex7',
      type: 'error_correction',
      concept: 'possessives vs s',
      difficulty: 4,
      prompt: "Corrige: \"I'm John's car.\" (queriendo decir \"Tengo el coche de John\")",
      correctAnswer: "I have John's car.",
      acceptedAnswers: ["I have John's car", "I have John's car.", "My car is John's"],
      acceptApproximate: true,
      explanation: 'Para "tengo el coche de John", usa "have": I have John\'s car. "I am John\'s car" significaría "Yo soy el coche de John" (sin sentido).',
    },
    {
      id: 'a1-m4-l3-ex8',
      type: 'match',
      concept: 'possessives vs s',
      difficulty: 3,
      prompt: 'Relaciona cada frase con su tipo (adjetivo posesivo, genitivo sajón o combinado).',
      promptTranslation: 'Match each phrase with its type.',
      correctAnswer: '',
      pairs: [
        { left: 'my car', right: 'adjetivo posesivo' },
        { left: "John's car", right: 'genitivo sajón' },
        { left: "my brother's car", right: 'combinado (adj + noun + \'s)' },
        { left: 'his name', right: 'adjetivo posesivo' },
        { left: "María's book", right: 'genitivo sajón' },
      ],
      explanation: "Solo un adjetivo = adjetivo posesivo. Nombre/dueño + 's = genitivo sajón. Adjetivo + sustantivo (dueño) + 's = combinado.",
    },
    {
      id: 'a1-m4-l3-ex9',
      type: 'translate',
      concept: 'possessives vs s',
      difficulty: 4,
      prompt: 'Traduce: "El nombre de su hija (de ellos) es Ana."',
      correctAnswer: "Their daughter's name is Ana.",
      acceptedAnswers: ["Their daughter's name is Ana", "Their daughter's name is Ana.", "their daughter's name is Ana"],
      acceptApproximate: true,
      explanation: '"su hija (de ellos)" = their daughter; "el nombre de..." = daughter\'s name. → Their daughter\'s name is Ana.',
    },
    {
      id: 'a1-m4-l3-ex10',
      type: 'multiple_choice',
      concept: 'possessives vs s',
      difficulty: 4,
      prompt: 'Which sentence is GRAMMATICALLY correct?',
      promptTranslation: '¿Qué frase es gramaticalmente correcta?',
      correctAnswer: 'John is her friend.',
      options: ["John's her friend.", "John's is her friend.", 'John is her friend.', "John her's friend."],
      explanation: 'Para "John es su amigo (de ella)", usamos el verbo "be": John is her friend. "John\'s her friend" sería posesión, no "es".',
    },
  ],
  miniTest: [
    {
      id: 'a1-m4-l3-mt1',
      type: 'multiple_choice',
      concept: 'possessives vs s',
      difficulty: 1,
      prompt: 'Which is correct?',
      promptTranslation: '¿Cuál es correcto?',
      correctAnswer: 'my car',
      options: ['my car', "my's car", "my car's", "mine car"],
      explanation: 'No se usa \'s ni otras formas con un adjetivo posesivo. "my" ya indica posesión. → my car.',
    },
    {
      id: 'a1-m4-l3-mt2',
      type: 'error_correction',
      concept: 'possessives vs s',
      difficulty: 2,
      prompt: "Corrige: \"Her's name is María.\"",
      correctAnswer: "Her name is María.",
      acceptedAnswers: ["Her name is María", "Her name is Maria", "Her name is Maria."],
      acceptApproximate: true,
      explanation: 'No se usa \'s con "her". "her" ya es posesivo. → Her name is María.',
    },
    {
      id: 'a1-m4-l3-mt3',
      type: 'multiple_choice',
      concept: 'possessives vs s',
      difficulty: 3,
      prompt: 'Which means "El coche de mi hermano"?',
      promptTranslation: '¿Cuál significa "El coche de mi hermano"?',
      correctAnswer: "My brother's car",
      options: ["My brother's car", "My brother car", "My brother's his car", "Mine brother's car"],
      explanation: 'Combinado: adjetivo posesivo "my" + sustantivo "brother" + \'s + cosa "car". → My brother\'s car.',
    },
    {
      id: 'a1-m4-l3-mt4',
      type: 'translate',
      concept: 'possessives vs s',
      difficulty: 3,
      prompt: 'Traduce: "Este es el coche de John."',
      correctAnswer: "This is John's car.",
      acceptedAnswers: ["This is John's car", "This is John's car.", "this is John's car"],
      acceptApproximate: true,
      explanation: 'Dueño (John) + \'s + cosa (car). → This is John\'s car.',
    },
    {
      id: 'a1-m4-l3-mt5',
      type: 'select_correct',
      concept: 'possessives vs s',
      difficulty: 4,
      prompt: 'Selecciona la frase gramaticalmente correcta.',
      promptTranslation: 'Select the grammatically correct sentence.',
      correctAnswer: 'John is her friend.',
      options: ["John's her friend.", "John is her friend.", "John's is her friend.", "John her's friend."],
      explanation: 'Para "John es su amigo (de ella)", usamos el verbo "be": John is her friend.',
    },
  ],
  reviewItems: ['a1-m4-l2'],
  prerequisites: ['a1-m4-l2'],
}