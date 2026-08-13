import type { Lesson } from '../../types'

export const lesson13Pronouns: Lesson = {
  id: 'a1-m1-l3',
  moduleId: 'm1-hello-greetings',
  order: 2,
  title: 'Pronombres personales (Subject Pronouns)',
  objective: 'Aprender los pronombres personales sujeto en inglés: I, you, he, she, it, we, they.',
  explanation_es: `Un **pronombre** es una palabra que usamos en lugar de un nombre o persona. En lugar de decir "Juan", decimos "**he**" (él). En lugar de decir "María", decimos "**she**" (ella). Los pronombres nos permiten hablar sin repetir nombres todo el tiempo.

En inglés hay **7 pronombres personales sujeto**. Vamos a verlos uno por uno:

| Pronombre | Español | Persona | Notas |
|-----------|---------|---------|-------|
| **I** | yo | 1ª singular | SIEMPRE va en mayúscula |
| **you** | tú / usted / ustedes / vosotros | 2ª singular Y plural | una sola forma para todo |
| **he** | él | 3ª singular masculino | personas masculinas |
| **she** | ella | 3ª singular femenino | personas femeninas |
| **it** | eso / lo | 3ª singular neutro | cosas, animales, ideas, clima, hora |
| **we** | nosotros / nosotras | 1ª plural | |
| **they** | ellos / ellas | 3ª plural | personas o cosas plurales |

**DETALLES IMPORTANTES para hispanohablantes:**

1. **"You" sirve para TODO.** En español tenemos 4 formas — "tú" (singular informal), "usted" (singular formal), "vosotros" (plural informal) y "ustedes" (plural formal). ¡En inglés solo una: "you"! El contexto nos dice si es formal, informal, singular o plural.

2. **Género en tercera persona.** Al igual que en español (él/ella), el inglés distingue "he" (él) de "she" (ella). PERO en el plural, "they" sirve para masculino Y femenino: en español distinguimos "ellos" de "ellas", en inglés solo "they".

3. **"IT" es fundamental.** El inglés usa "it" para cosas, animales (cuando no les damos nombre propio), ideas, el clima y la hora. En español NO tenemos un pronombre equivalente: decimos "Es un libro" (sin "it"), pero en inglés DEBEMOS decir "**It is a book**". Nunca decimos solo "Is a book".

4. **"I" SIEMPRE en mayúscula.** Incluso en medio de una frase: "John and **I** are friends." No "John and i are friends."

5. **El sujeto es casi siempre obligatorio.** En español solemos OMITIR el pronombre: decimos "Soy María" (no "Yo soy María"). En inglés NO podemos omitirlo: no decimos "Am María", sino "**I am María**". El inglés casi siempre necesita un sujeto explícito.`,
  examples: [
    { english: 'I am a teacher.', spanish: 'Yo soy profesor.', note: '"I" siempre en mayúscula.' },
    { english: 'You are my friend.', spanish: 'Tú eres mi amigo.', note: '"you" sirve para singular y plural, formal e informal.' },
    { english: 'He is John.', spanish: 'Él es John.', note: '"he" para un hombre.' },
    { english: 'She is María.', spanish: 'Ella es María.', note: '"she" para una mujer.' },
    { english: 'It is a cat.', spanish: 'Es un gato.', note: 'En español omitimos "it"; en inglés es obligatorio.' },
    { english: 'We are Spanish.', spanish: 'Nosotros somos españoles.', note: '"we" para "nosotros/nosotras".' },
    { english: 'They are my parents.', spanish: 'Ellos son mis padres.', note: '"they" sirve para "ellos" y "ellas".' },
  ],
  rule: `Regla:

- **I** (yo) — SIEMPRE en mayúscula
- **You** (tú/usted/vosotros/ustedes) — una sola forma para todo
- **He** (él) — persona masculina
- **She** (ella) — persona femenina
- **It** (eso/lo) — cosas, animales, ideas, clima, hora
- **We** (nosotros/nosotras)
- **They** (ellos/ellas) — personas o cosas plurales

En inglés casi siempre DEBES indicar el sujeto. No lo omitas.`,
  commonMistakes: [
    {
      wrong: '❌ am a student',
      correct: '✅ I am a student',
      explanation: 'En inglés no podemos omitir el sujeto. Con "I" siempre decimos "I am".',
    },
    {
      wrong: '❌ i am happy',
      correct: '✅ I am happy',
      explanation: 'La letra "I" (yo) SIEMPRE va en mayúscula, incluso en medio de una frase.',
    },
    {
      wrong: '❌ He is my sister.',
      correct: '✅ She is my sister.',
      explanation: '"he" es masculino (él). Para una mujer (hermana) usamos "she" (ella).',
    },
    {
      wrong: '❌ She is a book.',
      correct: '✅ It is a book.',
      explanation: 'Para cosas usamos "it", no "she". "she" es solo para personas femeninas.',
    },
    {
      wrong: '❌ Is beautiful.',
      correct: '✅ It is beautiful.',
      explanation: 'En inglés siempre necesitamos un sujeto. Para una cosa o idea, usamos "it".',
    },
    {
      wrong: '❌ They is my friends.',
      correct: '✅ They are my friends.',
      explanation: 'Con "they" (plural) usamos "are", no "is". Aunque verás el verbo "to be" en la siguiente lección, recuerda: plurales ("they") van con "are".',
    },
  ],
  vocabulary: [
    {
      word: 'I',
      translation_es: 'yo',
      level: 'A1',
      category: 'pronouns',
      partOfSpeech: 'pronoun',
      example: 'I am a teacher.',
      exampleTranslation: 'Yo soy profesor.',
    },
    {
      word: 'you',
      translation_es: 'tú / usted',
      level: 'A1',
      category: 'pronouns',
      partOfSpeech: 'pronoun',
      example: 'You are my friend.',
      exampleTranslation: 'Tú eres mi amigo.',
    },
    {
      word: 'he',
      translation_es: 'él',
      level: 'A1',
      category: 'pronouns',
      partOfSpeech: 'pronoun',
      example: 'He is my brother.',
      exampleTranslation: 'Él es mi hermano.',
    },
    {
      word: 'she',
      translation_es: 'ella',
      level: 'A1',
      category: 'pronouns',
      partOfSpeech: 'pronoun',
      example: 'She is my sister.',
      exampleTranslation: 'Ella es mi hermana.',
    },
    {
      word: 'it',
      translation_es: 'eso / lo',
      level: 'A1',
      category: 'pronouns',
      partOfSpeech: 'pronoun',
      example: 'It is a book.',
      exampleTranslation: 'Es un libro.',
    },
    {
      word: 'we',
      translation_es: 'nosotros',
      level: 'A1',
      category: 'pronouns',
      partOfSpeech: 'pronoun',
      example: 'We are students.',
      exampleTranslation: 'Nosotros somos estudiantes.',
    },
    {
      word: 'they',
      translation_es: 'ellos',
      level: 'A1',
      category: 'pronouns',
      partOfSpeech: 'pronoun',
      example: 'They are friends.',
      exampleTranslation: 'Ellos son amigos.',
    },
  ],
  grammarPoints: [
    {
      id: 'gp-subject-pronouns',
      level: 'A1',
      name: 'Pronombres personales sujeto (Subject Pronouns)',
      explanation_es:
        'Los pronombres personales sujeto sustituyen al nombre en la oración. En inglés son 7: I, you, he, she, it, we, they. La "I" siempre va en mayúscula, el sujeto casi siempre es obligatorio, y "it" se usa para cosas, animales e ideas.',
      formula: 'I | You | He | She | It | We | They',
      examples: ['I am María.', 'She is a teacher.', 'It is cold today.'],
      commonMistakes: [
        'Omitir el sujeto: "am happy" → "I am happy".',
        'Usar "he" para cosas o mujeres: "She is a book" → "It is a book".',
        'Escribir "i" minúscula: "i am happy" → "I am happy".',
      ],
    },
  ],
  exercises: [
    {
      id: 'a1-m1-l3-ex1',
      type: 'multiple_choice',
      concept: 'subject pronouns — he vs she vs it',
      difficulty: 1,
      prompt: 'Elige el pronombre correcto para un HOMBRE: "___ is my brother."',
      promptTranslation: '___ es mi hermano.',
      correctAnswer: 'He',
      options: ['He', 'She', 'It'],
      explanation: 'Para un hombre (hermano) usamos "he" (él). → He is my brother.',
    },
    {
      id: 'a1-m1-l3-ex2',
      type: 'multiple_choice',
      concept: 'subject pronouns — he vs she vs it',
      difficulty: 1,
      prompt: 'Elige el pronombre correcto para una MUJER: "___ is my sister." (María)',
      promptTranslation: '___ es mi hermana.',
      correctAnswer: 'She',
      options: ['He', 'She', 'It'],
      explanation: 'Para una mujer (hermana) usamos "she" (ella). → She is my sister.',
    },
    {
      id: 'a1-m1-l3-ex3',
      type: 'multiple_choice',
      concept: 'subject pronouns — it for things',
      difficulty: 1,
      prompt: 'Elige el pronombre correcto para una COSA: "___ is a book."',
      promptTranslation: '___ es un libro.',
      correctAnswer: 'It',
      options: ['He', 'She', 'It'],
      explanation: 'Para cosas usamos "it". → It is a book. = Es un libro.',
    },
    {
      id: 'a1-m1-l3-ex4',
      type: 'multiple_choice',
      concept: 'subject pronouns — plural people',
      difficulty: 2,
      prompt: 'Elige el pronombre para varias personas: "___ are my friends."',
      promptTranslation: '___ son mis amigos.',
      correctAnswer: 'They',
      options: ['He', 'She', 'They'],
      explanation: 'Para varias personas (plural) usamos "they". → They are my friends.',
    },
    {
      id: 'a1-m1-l3-ex5',
      type: 'fill_blank',
      concept: 'subject pronouns — he vs she',
      difficulty: 2,
      prompt: 'Completa con el pronombre correcto: "___ is my sister." (María)',
      promptTranslation: '___ es mi hermana.',
      correctAnswer: 'She',
      acceptedAnswers: ['She'],
      explanation: 'María es una mujer → usamos "she" (ella). → She is my sister.',
    },
    {
      id: 'a1-m1-l3-ex6',
      type: 'match',
      concept: 'subject pronouns — meaning',
      difficulty: 2,
      prompt: 'Une cada pronombre con su descripción.',
      promptTranslation: 'Match each pronoun with its description.',
      correctAnswer: '',
      pairs: [
        { left: 'he', right: 'un hombre' },
        { left: 'she', right: 'una mujer' },
        { left: 'it', right: 'una cosa' },
        { left: 'we', right: 'tú y yo (nosotros)' },
        { left: 'they', right: 'varias personas' },
      ],
      explanation:
        '"he" = hombre, "she" = mujer, "it" = cosa, "we" = nosotros (incluye al hablante y otra/s persona/s), "they" = varias personas.',
    },
    {
      id: 'a1-m1-l3-ex7',
      type: 'true_false',
      concept: 'subject pronouns — you singular/plural',
      difficulty: 2,
      prompt: 'Verdadero o falso: "You" solo se puede usar en plural.',
      promptTranslation: 'True or false: "You" can only be used in the plural.',
      correctAnswer: 'false',
      acceptedAnswers: ['false', 'False', 'falso', 'Falso'],
      explanation:
        'FALSO. "You" sirve para singular (tú/usted) Y plural (vosotros/ustedes). En inglés hay una sola forma para todo.',
    },
    {
      id: 'a1-m1-l3-ex8',
      type: 'error_correction',
      concept: 'subject pronouns — verb agreement',
      difficulty: 3,
      prompt: 'Corrige el error: "He are my friend."',
      promptTranslation: 'Corrige: He are my friend. ("Él es mi amigo").',
      correctAnswer: 'He is my friend.',
      acceptedAnswers: ["He is my friend", "He's my friend", "He's my friend."],
      acceptApproximate: true,
      explanation: 'Con "he" usamos "is", no "are". → He is my friend. = Él es mi amigo.',
    },
    {
      id: 'a1-m1-l3-ex9',
      type: 'translate',
      concept: 'subject pronouns — translation',
      difficulty: 3,
      prompt: 'Traduce: "Ella es mi hermana."',
      correctAnswer: 'She is my sister.',
      acceptedAnswers: ["She's my sister", 'She is my sister.', "She's my sister."],
      acceptApproximate: true,
      explanation: 'Para "Ella es" usamos "She is" (o la contracción "She\'s"). → She is my sister.',
    },
    {
      id: 'a1-m1-l3-ex10',
      type: 'select_correct',
      concept: 'subject pronouns — it for things/ideas',
      difficulty: 2,
      prompt: 'Selecciona la frase correcta (sobre el día/clima):',
      promptTranslation: 'Choose the correct sentence (about the day/weather).',
      correctAnswer: 'It is a beautiful day.',
      options: ['She is a beautiful day.', 'He is a beautiful day.', 'It is a beautiful day.'],
      explanation:
        'Un día o el clima usa "it" (neutro), no "he" ni "she". → It is a beautiful day. = Es un día hermoso.',
    },
    {
      id: 'a1-m1-l3-ex11',
      type: 'reorder',
      concept: 'subject pronouns — sentence order',
      difficulty: 2,
      prompt: 'Ordena las palabras para formar una frase correcta.',
      promptTranslation: 'Order the words to make a correct sentence.',
      correctAnswer: 'We are students.',
      words: ['We', 'are', 'students'],
      explanation:
        'Orden SUJETO + VERBO + COMPLEMENTO. "We" (nosotros) + "are" (es/son) + "students". → We are students. = Nosotros somos estudiantes.',
    },
  ],
  miniTest: [
    {
      id: 'a1-m1-l3-mt1',
      type: 'multiple_choice',
      concept: 'subject pronouns — he vs she',
      difficulty: 2,
      prompt: 'Elige: "___ is my mother." (mi madre)',
      promptTranslation: '___ es mi madre.',
      correctAnswer: 'She',
      options: ['He', 'She', 'It'],
      explanation: 'La madre es una mujer → "she" (ella). → She is my mother.',
    },
    {
      id: 'a1-m1-l3-mt2',
      type: 'multiple_choice',
      concept: 'subject pronouns — it for things',
      difficulty: 2,
      prompt: 'Elige: "___ is a cat."',
      promptTranslation: '___ es un gato.',
      correctAnswer: 'It',
      options: ['He', 'She', 'It'],
      explanation: 'Para un animal (sin nombre propio) usamos "it". → It is a cat.',
    },
    {
      id: 'a1-m1-l3-mt3',
      type: 'multiple_choice',
      concept: 'subject pronouns — capitalization of I',
      difficulty: 2,
      prompt: '¿Cuál es correcto?',
      promptTranslation: 'Which is correct?',
      correctAnswer: 'John and I are friends.',
      options: ['John and i are friends.', 'John and I are friends.', 'john and I are friends.'],
      explanation:
        'La "I" (yo) SIEMPRE va en mayúscula, incluso en medio de la frase. → John and I are friends.',
    },
    {
      id: 'a1-m1-l3-mt4',
      type: 'fill_blank',
      concept: 'subject pronouns — we',
      difficulty: 2,
      prompt: 'Completa: "___ are students." (nosotros)',
      promptTranslation: 'Completa: ___ somos estudiantes.',
      correctAnswer: 'We',
      acceptedAnswers: ['We'],
      explanation: '"nosotros" en inglés es "we". → We are students. = Nosotros somos estudiantes.',
    },
    {
      id: 'a1-m1-l3-mt5',
      type: 'error_correction',
      concept: 'subject pronouns — omitting subject',
      difficulty: 3,
      prompt: 'Corrige el error: "am happy."',
      promptTranslation: 'Corrige: am happy. ("(Yo) estoy feliz.")',
      correctAnswer: 'I am happy.',
      acceptedAnswers: ['I am happy', "I'm happy", "I'm happy."],
      acceptApproximate: true,
      explanation:
        'En inglés NO podemos omitir el sujeto. Debemos añadir "I". → I am happy. = (Yo) estoy feliz.',
    },
  ],
  reviewItems: ['a1-m1-l2'],
  prerequisites: ['a1-m1-l2'],
}