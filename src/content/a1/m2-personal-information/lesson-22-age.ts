import type { Lesson } from '../../types'

export const lesson22Age: Lesson = {
  id: 'a1-m2-l2',
  moduleId: 'm2-personal-information',
  order: 1,
  title: '¿Cuántos años tienes? (Age)',
  objective: 'Aprender a preguntar y decir la edad usando "How old" y el verbo "to be".',
  explanation_es: `Para preguntar la edad en inglés usamos la pregunta "How old are you?" (¿Cuántos años tienes?).

- **How old** = qué tan viejo / cuántos años
- **are** = forma del verbo "to be" con "you"
- La respuesta más completa es: **"I am (X) years old."**
- También puede ser más corta: "I am (X)." o "I\'m (X)."

Ejemplos:
- "How old are you? — I am 25 years old."
- "How old are you? — I\'m 30."
- "How old is your brother? — He is 18."

**⚠️ ATENCIÓN — el error más común de hispanohablantes:**

En español decimos "Tengo 25 años" (con el verbo "tener"). ¡En inglés **NO usamos "have"** para la edad! Usamos el verbo "to be" (ser/estar):

- ✅ INCORRECTO: "I have 25 years." → ❌ Nunca digas esto en inglés.
- ✅ CORRECTO: "I am 25 years old." (También: "I am 25." o "I\'m 25.")

Razón: en inglés la edad se concibe como un ESTADO (estar), no como una posesión (tener).

**Estructura con tercera persona:**

- "How old is he? — He is 40 years old." / "He is 40."
- "How old is she? — She is 28."
- "How old is your sister? — She is 30."
- "How old is the baby? — He is one year old." (singular "year" cuando es 1)

**Vocabulario clave:**
- year = año
- old = viejo / mayor (en la edad)
- age = edad
- young = joven
- baby = bebé
- child = niño/a`,
  examples: [
    { english: 'How old are you?', spanish: '¿Cuántos años tienes?' },
    { english: 'I am 25 years old.', spanish: 'Tengo 25 años.' },
    { english: "I'm 30.", spanish: 'Tengo 30 años.', note: 'Forma corta; "I\'m" = "I am".' },
    { english: 'How old is your sister?', spanish: '¿Cuántos años tiene tu hermana?' },
    { english: 'She is 28 years old.', spanish: 'Ella tiene 28 años.' },
    { english: 'How old is the baby? - He is one year old.', spanish: '¿Cuántos años tiene el bebé? - Tiene un año.', note: 'Con "1" se usa "year" en singular.' },
    { english: 'My grandfather is 80 years old. He is old!', spanish: 'Mi abuelo tiene 80 años. ¡Es viejo!' },
    { english: 'She is young. She is only 15.', spanish: 'Ella es joven. Solo tiene 15.' },
  ],
  rule: `**Regla para la edad en inglés:**

1. **Preguntar:**
   - "How old are you?" (a "you")
   - "How old is he/she?" (a él/ella)
   - "How old are they?" (a ellos/ellas)

2. **Responder:**
   - "I am (X) years old." — forma completa
   - "I am (X)." / "I\'m (X)." — forma corta
   - "He/She is (X) years old."

3. **CON "to be", NO "have"**: en inglés usamos "to be" para la edad. NUNCA "have years". Es el error más típico de los hispanohablantes.

4. **"year" vs "years"**: con cualquier número mayor que 1, "years" va en plural. Con 1, en singular: "one year old".

5. **Sin "years old"**: también es válido decir solo "I am 30" (se sobreentiende "años").`,
  commonMistakes: [
    { wrong: '❌ I have 30 years.', correct: '✅ I am 30 years old.', explanation: 'En inglés NO usamos "have" para la edad. Usamos "to be" (I am / I\'m). Es el error más típico de hispanohablantes.' },
    { wrong: '❌ I am 30 years.', correct: '✅ I am 30 years old.', explanation: 'Si incluyes "years", debes agregar "old". O quitalo: "I am 30." / "I am 30 years old."' },
    { wrong: '❌ How many years you have?', correct: '✅ How old are you?', explanation: 'La pregunta correcta es "How old are you?", NO "How many years you have?".' },
    { wrong: '❌ She have 18 years.', correct: '✅ She is 18 years old.', explanation: 'Con "she" usamos "is" (verbo "to be"), no "have".' },
    { wrong: '❌ I have 1 year.', correct: '✅ I am one year old.', explanation: 'Incluso con 1, usamos "to be": "I am one year old." (year en singular porque es 1).' },
  ],
  vocabulary: [
    { word: 'year', translation_es: 'año', level: 'A1', category: 'age', partOfSpeech: 'noun', example: 'I am 25 years old.', exampleTranslation: 'Tengo 25 años.' },
    { word: 'old', translation_es: 'viejo / mayor (edad)', level: 'A1', category: 'age', partOfSpeech: 'adjective', example: 'How old are you?', exampleTranslation: '¿Cuántos años tienes?' },
    { word: 'young', translation_es: 'joven', level: 'A1', category: 'age', partOfSpeech: 'adjective', example: 'She is young.', exampleTranslation: 'Ella es joven.' },
    { word: 'age', translation_es: 'edad', level: 'A1', category: 'age', partOfSpeech: 'noun', example: 'What is your age?', exampleTranslation: '¿Cuál es tu edad?' },
    { word: 'baby', translation_es: 'bebé', level: 'A1', category: 'age', partOfSpeech: 'noun', example: 'The baby is one year old.', exampleTranslation: 'El bebé tiene un año.' },
    { word: 'child', translation_es: 'niño/a', level: 'A1', category: 'age', partOfSpeech: 'noun', example: 'The child is five years old.', exampleTranslation: 'El niño tiene cinco años.' },
    { word: 'how old', translation_es: 'cuántos años', level: 'A1', category: 'age', partOfSpeech: 'phrase', example: 'How old are you?', exampleTranslation: '¿Cuántos años tienes?' },
  ],
  grammarPoints: [
    {
      id: 'gp-how-old-to-be-age',
      level: 'A1',
      name: 'How old...? + to be para la edad',
      explanation_es: 'Para hablar de la edad, en inglés usamos "How old" como pregunta y el verbo "to be" (jamás "have"). "How old" concuerda con el sujeto: "How old are you / we / they?" y "How old is he / she / it?". La respuesta: "I am (X) years old" o "I am (X)".',
      formula: 'How old + to be + subject? | subject + to be + number + (years old)',
      examples: [
        'How old are you? - I am 25 years old.',
        'How old is your sister? - She is 28.',
        'How old is the baby? - He is one year old.',
      ],
      commonMistakes: [
        'Usar "have" en lugar de "to be": "I have 25 years" → "I am 25 years old".',
        'Olvidar "old": "I am 25 years" → "I am 25 years old" (o solo "I am 25").',
      ],
    },
  ],
  exercises: [
    {
      id: 'a1-m2-l2-ex1',
      type: 'multiple_choice',
      concept: 'How old asking',
      difficulty: 1,
      prompt: '¿Cómo preguntas la edad a "you"?',
      promptTranslation: 'How do you ask someone\'s age?',
      correctAnswer: 'How old are you?',
      options: ['How old are you?', 'How years you have?', 'How old you are?', 'What age you?'],
      explanation: 'La pregunta correcta es "How old are you?" (How old + to be + subject).',
    },
    {
      id: 'a1-m2-l2-ex2',
      type: 'multiple_choice',
      concept: 'to be for age',
      difficulty: 1,
      prompt: 'Elige la frase correcta (edad = 30, primera persona):',
      promptTranslation: 'Choose the correct sentence to say your age (30).',
      correctAnswer: 'I am 30 years old.',
      options: ['I have 30 years.', 'I am 30 years old.', 'I am 30 years.', 'I have 30 years old.'],
      explanation: 'En inglés usamos "to be" (I am) para la edad, NO "have". "I am 30 years old." es la forma completa correcta.',
    },
    {
      id: 'a1-m2-l2-ex3',
      type: 'multiple_choice',
      concept: 'How old third person',
      difficulty: 2,
      prompt: 'Completa: "How old ___ your sister?"',
      promptTranslation: 'Complete: How old ___ your sister?',
      correctAnswer: 'is',
      options: ['is', 'are', 'have', 'has'],
      explanation: 'Con "your sister" (3ª persona singular, ella) usamos "is": How old is your sister?',
    },
    {
      id: 'a1-m2-l2-ex4',
      type: 'error_correction',
      concept: 'to be vs have for age',
      difficulty: 2,
      prompt: 'Corrige el error: "I have 25 years."',
      correctAnswer: 'I am 25 years old.',
      acceptedAnswers: ['I am 25 years old', "I'm 25 years old", 'I am 25', "I'm 25", "I'm 25 years old."],
      acceptApproximate: true,
      explanation: 'Error típico de hispanohablantes. En inglés NO usamos "have" para la edad: usamos "to be". → I am 25 years old. (También válido: "I am 25.")',
    },
    {
      id: 'a1-m2-l2-ex5',
      type: 'fill_blank',
      concept: 'How old response',
      difficulty: 2,
      prompt: 'Completa: "She is 18 ___ old."',
      promptTranslation: 'Complete: She is 18 ___ old.',
      correctAnswer: 'years',
      explanation: 'Con números mayores que 1, "year" va en plural: "years". → She is 18 years old.',
    },
    {
      id: 'a1-m2-l2-ex6',
      type: 'fill_blank',
      concept: 'year singular for 1',
      difficulty: 3,
      prompt: 'Completa: "The baby is one year ___."',
      promptTranslation: 'Complete: The baby is one year ___.',
      correctAnswer: 'old',
      explanation: 'Si decimos "years", falta "old". La edad completa es "(number) years old" (o year con 1). → one year old.',
    },
    {
      id: 'a1-m2-l2-ex7',
      type: 'translate',
      concept: 'translate age phrase',
      difficulty: 3,
      prompt: 'Traduce: "Tengo treinta años."',
      correctAnswer: 'I am 30 years old.',
      acceptedAnswers: ["I'm 30 years old", "I'm 30 years old.", 'I am thirty years old.', 'I am 30', "I'm 30", 'I am thirty'],
      acceptApproximate: true,
      explanation: '"Tengo X años" en inglés es "I am X years old" (con to be, NO con have). → I am 30 years old.',
    },
    {
      id: 'a1-m2-l2-ex8',
      type: 'match',
      concept: 'age ↔ Spanish',
      difficulty: 2,
      prompt: 'Relaciona cada frase en inglés con su traducción.',
      promptTranslation: 'Match each English sentence with its Spanish translation.',
      correctAnswer: '',
      pairs: [
        { left: 'How old are you?', right: '¿Cuántos años tienes?' },
        { left: 'I am 20 years old.', right: 'Tengo 20 años.' },
        { left: 'She is 35.', right: 'Ella tiene 35.' },
        { left: 'He is young.', right: 'Él es joven.' },
        { left: 'How old is the baby?', right: '¿Cuántos años tiene el bebé?' },
      ],
      explanation: '"How old" pregunta la edad. Para responder usamos "to be" + número (+ "years old").',
    },
    {
      id: 'a1-m2-l2-ex9',
      type: 'error_correction',
      concept: 'age correction',
      difficulty: 3,
      prompt: 'Corrige el error: "How many years you have?"',
      correctAnswer: 'How old are you?',
      acceptedAnswers: ['How old are you', 'How old are you?'],
      acceptApproximate: true,
      explanation: 'No se dice "How many years you have?". La pregunta correcta por la edad es "How old are you?".',
    },
    {
      id: 'a1-m2-l2-ex10',
      type: 'reorder',
      concept: 'how old question order',
      difficulty: 3,
      prompt: 'Ordena las palabras para formar la pregunta correcta.',
      promptTranslation: 'Order the words to form the correct question.',
      correctAnswer: 'How old is your brother?',
      words: ['How', 'old', 'is', 'your', 'brother?'],
      explanation: 'Orden: How + old + to be + subject. → How old is your brother? = ¿Cuántos años tiene tu hermano?',
    },
  ],
  miniTest: [
    {
      id: 'a1-m2-l2-mt1',
      type: 'multiple_choice',
      concept: 'How old question',
      difficulty: 1,
      prompt: '¿Cómo preguntas la edad de "he" (él)?',
      promptTranslation: 'How do you ask his age?',
      correctAnswer: 'How old is he?',
      options: ['How old is he?', 'How old he is?', 'How years he has?', 'How old he does?'],
      explanation: 'Orden: "How old + to be + subject". Con "he" → "is". → How old is he?',
    },
    {
      id: 'a1-m2-l2-mt2',
      type: 'error_correction',
      concept: 'have vs to be',
      difficulty: 2,
      prompt: 'Corrige: "She have 18 years."',
      correctAnswer: 'She is 18 years old.',
      acceptedAnswers: ["She's 18 years old", 'She is 18 years old', "She's 18", 'She is 18'],
      acceptApproximate: true,
      explanation: 'En inglés se usa "to be" para la edad, NO "have". → She is 18 years old.',
    },
    {
      id: 'a1-m2-l2-mt3',
      type: 'fill_blank',
      concept: 'how old answer short',
      difficulty: 2,
      prompt: 'Completa: "I\'m 30 ___." (palabra opcional, forma corta)',
      promptTranslation: 'Fill in: short form.',
      correctAnswer: '',
      acceptedAnswers: ['years old', ''],
      explanation: 'Forma corta: "I\'m 30." (sin nada). Forma completa: "I\'m 30 years old." Ambas son correctas.',
    },
    {
      id: 'a1-m2-l2-mt4',
      type: 'translate',
      concept: 'translate age',
      difficulty: 3,
      prompt: 'Traduce: "Él tiene cuarenta años."',
      correctAnswer: 'He is 40 years old.',
      acceptedAnswers: ["He's 40 years old", "He's 40 years old.", 'He is forty years old.', "He's forty", 'He is 40', 'He is forty years old'],
      acceptApproximate: true,
      explanation: 'Usamos "to be": "He is 40 years old". (40 = forty). También: "He is forty."',
    },
    {
      id: 'a1-m2-l2-mt5',
      type: 'true_false',
      concept: 'age grammar',
      difficulty: 2,
      prompt: 'Verdadero o falso: Para decir la edad en inglés, en vez de "Tengo 25 años", decimos "I am 25 years old".',
      promptTranslation: 'True or false: To say your age in English, instead of "I have 25 years" you say "I am 25 years old".',
      correctAnswer: 'true',
      acceptedAnswers: ['True', 'TRUE', 'cierto'],
      explanation: 'VERDADERO. En inglés NO usamos "have", usamos "to be". → I am 25 years old / I\'m 25.',
    },
  ],
  reviewItems: ['a1-m2-l1'],
  prerequisites: ['a1-m2-l1'],
}