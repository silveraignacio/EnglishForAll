import type { Lesson } from '../../types'

export const lesson25Jobs: Lesson = {
  id: 'a1-m2-l5',
  moduleId: 'm2-personal-information',
  order: 4,
  title: 'Profesiones (Jobs)',
  objective: 'Aprender nombres de profesiones en inglés y usar "a/an" con trabajos.',
  explanation_es: `Para hablar de tu profesión en inglés usamos la estructura:

- **"I am a + profesión."** (para la mayoría)
- **"I am an + profesión"** (cuando la profesión empieza por SONIDO VOCÁLICO)

Ejemplos:
- "I am a teacher." = Soy profesor/a.
- "She is an engineer." = Ella es ingeniera.
- "He is a doctor." = Él es médico.

**Cómo preguntar por la profesión:**

- **"What do you do?"** = ¿A qué te dedicas? / ¿En qué trabajas?
  (Pero nota: ¡no es "What is your work?" sino "What do you do?"!)

**Regla de "a / an":**

- **"a"** se usa antes de palabras con **SONIDO CONSONÁNTICO** (no necesariamente consonante escrita):
  - a teacher, a doctor, a lawyer, a manager, a cook, a student, a worker, a driver
- **"an"** se usa antes de palabras con **SONIDO VOCÁLICO** (a, e, i, o, u al inicio):
  - an engineer, an artist, an actor, an architect, an officer

⚠️ IMPORTANTE: La regla es por SONIDO, no por letra escrita.
- Decimos **"an hour"** porque la "h" no se pronuncia (suena "aʊr", empieza por vocal).
- Decimos **"a university"** porque la "u" en este caso suena /juː/, que es consonante (la y).

En A1 nos limitaremos al patrón más fácil: vocal escrita al inicio (a/e/i/o/u) → "an".

**MUY IMPORTANTE — siempre artículos con profesiones:**

- ✅ "I am a teacher." / ❌ "I am teacher." (sin artículo está MAL en inglés).
- En español decimos "Soy profesor" (sin artículo); en inglés SIEMPRE debe haber "a/an": "I am a teacher."

**Vocabulario clave:**
- job = trabajo / empleo
- work = trabajar / trabajo
- profession = profesión`,
  examples: [
    { english: 'I am a teacher.', spanish: 'Soy profesor/a.', note: 'a + consonante' },
    { english: 'She is an engineer.', spanish: 'Ella es ingeniera.', note: 'an + vocal' },
    { english: 'He is a doctor.', spanish: 'Él es médico.' },
    { english: 'What do you do? - I am a student.', spanish: '¿A qué te dedicas? - Soy estudiante.' },
    { english: 'My father is a driver.', spanish: 'Mi padre es conductor.' },
    { english: 'Maria is an artist.', spanish: 'María es artista.', note: 'an + vocal (artist)' },
    { english: 'They are police officers.', spanish: 'Ellos son policías.' },
    { english: 'My sister is a nurse.', spanish: 'Mi hermana es enfermera.' },
  ],
  rule: `**Reglas de a/an con profesiones:**

1. **SIEMPRE** usamos "a" o "an" antes de una profesión en singular:
   - I am a teacher / a doctor / a lawyer.
   - I am an engineer / an artist / an actor.

2. **"a"** antes de SONIDO consonántico (consonante al inicio): a teacher, a doctor, a manager.

3. **"an"** antes de SONIDO vocálico (vocal al inicio - A/E/I/O/U): an engineer, an artist, an officer.

4. **Para preguntar** la profesión: **"What do you do?"** (NO "What is your work?").

5. **En plural** no se usa artículo: "They are teachers." (a/an solo en singular).

6. **Sin artículo** está INCORRECTO: ❌ "I am teacher." → ✅ "I am a teacher."`,
  commonMistakes: [
    { wrong: '❌ I am teacher.', correct: '✅ I am a teacher.', explanation: 'En inglés siempre mezclamos a/an antes de una profesión en singular. ⚠️ Aquí "I am teacher" (sin a) está MAL.' },
    { wrong: '❌ I am an doctor.', correct: '✅ I am a doctor.', explanation: '"doctor" empieza por consonante "d" — usamos "a". "an" va solo antes de SONIDO VOCÁLICO.' },
    { wrong: '❌ I am a engineer.', correct: '✅ I am an engineer.', explanation: '"engineer" empieza por "e" (vocal) → usamos "an".' },
    { wrong: '❌ What is your work?', correct: '✅ What do you do?', explanation: 'La forma natural de preguntar la profesión en inglés es "What do you do?" (¿a qué te dedicas?), no "What is your work?".' },
    { wrong: '❌ What do you do? - I am doctor.', correct: '✅ What do you do? - I am a doctor.', explanation: 'Aunque en español decimos "soy médico" sin artículo, en inglés SIEMPRE va "a/an". → I am a doctor.' },
  ],
  vocabulary: [
    { word: 'teacher', translation_es: 'profesor/a', level: 'A1', category: 'jobs', partOfSpeech: 'noun', example: 'My mother is a teacher.', exampleTranslation: 'Mi madre es profesora.' },
    { word: 'doctor', translation_es: 'médico/a, doctor/a', level: 'A1', category: 'jobs', partOfSpeech: 'noun', example: 'He is a doctor.', exampleTranslation: 'Él es médico.' },
    { word: 'nurse', translation_es: 'enfermero/a', level: 'A1', category: 'jobs', partOfSpeech: 'noun', example: 'She is a nurse.', exampleTranslation: 'Ella es enfermera.' },
    { word: 'engineer', translation_es: 'ingeniero/a', level: 'A1', category: 'jobs', partOfSpeech: 'noun', example: 'I am an engineer.', exampleTranslation: 'Soy ingeniero.' },
    { word: 'student', translation_es: 'estudiante', level: 'A1', category: 'jobs', partOfSpeech: 'noun', example: 'I am a student.', exampleTranslation: 'Soy estudiante.' },
    { word: 'lawyer', translation_es: 'abogado/a', level: 'A1', category: 'jobs', partOfSpeech: 'noun', example: 'His brother is a lawyer.', exampleTranslation: 'Su hermano es abogado.' },
    { word: 'waiter', translation_es: 'camarero', level: 'A1', category: 'jobs', partOfSpeech: 'noun', example: 'He is a waiter.', exampleTranslation: 'Él es camarero.' },
    { word: 'manager', translation_es: 'gerente, director/a', level: 'A1', category: 'jobs', partOfSpeech: 'noun', example: 'She is a manager.', exampleTranslation: 'Ella es gerente.' },
    { word: 'police officer', translation_es: 'agente de policía', level: 'A1', category: 'jobs', partOfSpeech: 'noun', example: 'My uncle is a police officer.', exampleTranslation: 'Mi tío es policía.' },
    { word: 'cook', translation_es: 'cocinero/a', level: 'A1', category: 'jobs', partOfSpeech: 'noun', example: 'He is a cook.', exampleTranslation: 'Él es cocinero.' },
    { word: 'chef', translation_es: 'chef, cocinero principal', level: 'A1', category: 'jobs', partOfSpeech: 'noun', example: 'She is a chef in an Italian restaurant.', exampleTranslation: 'Ella es chef en un restaurante italiano.' },
    { word: 'musician', translation_es: 'músico/a', level: 'A1', category: 'jobs', partOfSpeech: 'noun', example: 'He is a musician.', exampleTranslation: 'Él es músico.' },
    { word: 'artist', translation_es: 'artista', level: 'A1', category: 'jobs', partOfSpeech: 'noun', example: 'Maria is an artist.', exampleTranslation: 'María es artista.' },
    { word: 'worker', translation_es: 'trabajador/a', level: 'A1', category: 'jobs', partOfSpeech: 'noun', example: 'They are factory workers.', exampleTranslation: 'Son trabajadores de fábrica.' },
    { word: 'driver', translation_es: 'conductor', level: 'A1', category: 'jobs', partOfSpeech: 'noun', example: 'My father is a driver.', exampleTranslation: 'Mi padre es conductor.' },
    { word: 'businessman', translation_es: 'hombre de negocios', level: 'A1', category: 'jobs', partOfSpeech: 'noun', example: 'John is a businessman.', exampleTranslation: 'John es hombre de negocios.' },
    { word: 'businesswoman', translation_es: 'mujer de negocios', level: 'A1', category: 'jobs', partOfSpeech: 'noun', example: 'She is a businesswoman.', exampleTranslation: 'Ella es mujer de negocios.' },
    { word: 'job', translation_es: 'trabajo, empleo', level: 'A1', category: 'jobs', partOfSpeech: 'noun', example: 'My job is interesting.', exampleTranslation: 'Mi trabajo es interesante.' },
  ],
  grammarPoints: [
    {
      id: 'gp-a-an-with-professions',
      level: 'A1',
      name: 'a/an con profesiones',
      explanation_es: 'Antes de una profesión (en singular) SIEMPRE usamos el artículo "a" o "an": "a teacher", "an engineer". "a" va antes de SONIDO consonántico; "an" antes de SONIDO vocálico (cuando la palabra empieza por A, E, I, O, U). La forma de preguntar la profesión es "What do you do?". En español solemos omitir el artículo ("soy profesor"), pero en inglés es obligatorio.',
      formula: 'I am a + consonant-sound noun | I am an + vowel-sound noun',
      examples: [
        'I am a teacher.',
        'She is an engineer.',
        'He is a student.',
      ],
      commonMistakes: [
        'Omitir artículo: "I am teacher" → "I am a teacher".',
        'Usar "an" antes de consonante: "I am an doctor" → "I am a doctor".',
        'Preguntar "What is your work?" → "What do you do?" (más natural).',
      ],
    },
  ],
  exercises: [
    {
      id: 'a1-m2-l5-ex1',
      type: 'multiple_choice',
      concept: 'a/an with consonant',
      difficulty: 1,
      prompt: 'Completa: "I am ___ teacher."',
      promptTranslation: 'Complete: I am ___ teacher.',
      correctAnswer: 'a',
      options: ['a', 'an', 'the', '(sin artículo)'],
      explanation: '"teacher" empieza con consonante ("t") → usamos "a". → I am a teacher.',
    },
    {
      id: 'a1-m2-l5-ex2',
      type: 'multiple_choice',
      concept: 'an with vowel',
      difficulty: 1,
      prompt: 'Completa: "She is ___ engineer."',
      promptTranslation: 'Complete: She is ___ engineer.',
      correctAnswer: 'an',
      options: ['a', 'an', 'the', '(sin artículo)'],
      explanation: '"engineer" empieza con vocal ("e", sonido vocálico) → usamos "an". → She is an engineer.',
    },
    {
      id: 'a1-m2-l5-ex3',
      type: 'match',
      concept: 'job ↔ Spanish',
      difficulty: 1,
      prompt: 'Relaciona cada profesión con su traducción.',
      promptTranslation: 'Match each job with its translation.',
      correctAnswer: '',
      pairs: [
        { left: 'teacher', right: 'profesor/a' },
        { left: 'doctor', right: 'médico' },
        { left: 'nurse', right: 'enfermero/a' },
        { left: 'student', right: 'estudiante' },
        { left: 'driver', right: 'conductor' },
        { left: 'lawyer', right: 'abogado/a' },
      ],
      explanation: 'Vocabulario básico de profesiones: teacher, doctor, nurse, student, driver, lawyer.',
    },
    {
      id: 'a1-m2-l5-ex4',
      type: 'fill_blank',
      concept: 'a/an article',
      difficulty: 2,
      prompt: 'Completa con "a" o "an": "Hé is ___ cook."',
      promptTranslation: 'Fill in: a or an.',
      correctAnswer: 'a',
      explanation: '"cook" empieza con consonante "c" → "a". → He is a cook.',
    },
    {
      id: 'a1-m2-l5-ex5',
      type: 'fill_blank',
      concept: 'a/an vowel',
      difficulty: 2,
      prompt: 'Completa con "a" o "an": "Maria is ___ artist."',
      promptTranslation: 'Fill in: a or an.',
      correctAnswer: 'an',
      explanation: '"artist" empieza con "a" (vocal) → "an". → Maria is an artist.',
    },
    {
      id: 'a1-m2-l5-ex6',
      type: 'error_correction',
      concept: 'missing article',
      difficulty: 2,
      prompt: 'Corrige el error: "I am teacher."',
      correctAnswer: 'I am a teacher.',
      acceptedAnswers: ["I'm a teacher.", 'I am a teacher', "I'm a teacher"],
      acceptApproximate: true,
      explanation: 'En inglés SIEMPRE usamos "a/an" antes de profesiones en singular. En español "soy profesor" no lleva artículo, pero en inglés es obligatorio. → I am a teacher.',
    },
    {
      id: 'a1-m2-l5-ex7',
      type: 'error_correction',
      concept: 'an before consonant',
      difficulty: 2,
      prompt: 'Corrige el error: "He is an doctor."',
      correctAnswer: 'He is a doctor.',
      acceptedAnswers: ["He's a doctor.", 'He is a doctor', "He's a doctor"],
      acceptApproximate: true,
      explanation: '"doctor" empieza con consonante "d" → usamos "a", no "an". "an" solo antes de SONIDO VOCÁLICO. → He is a doctor.',
    },
    {
      id: 'a1-m2-l5-ex8',
      type: 'multiple_choice',
      concept: 'ask profession',
      difficulty: 2,
      prompt: '¿Cómo preguntas por la profesión de alguien (más natural)?',
      promptTranslation: 'How do you naturally ask about someone\'s profession?',
      correctAnswer: 'What do you do?',
      options: ['What do you do?', 'What is your work?', 'What is your profession?', 'How is your job?'],
      explanation: 'La forma natural y común es "What do you do?" (¿a qué te dedicas?). "What is your work?" suena raro en inglés.',
    },
    {
      id: 'a1-m2-l5-ex9',
      type: 'translate',
      concept: 'translate job sentence',
      difficulty: 3,
      prompt: 'Traduce: "Soy ingeniero."',
      correctAnswer: 'I am an engineer.',
      acceptedAnswers: ["I'm an engineer.", 'I am an engineer', "I'm an engineer"],
      acceptApproximate: true,
      explanation: '"ingeniero" = engineer. Como suena con vocal, usamos "an". → I am an engineer.',
    },
    {
      id: 'a1-m2-l5-ex10',
      type: 'reorder',
      concept: 'job sentence order',
      difficulty: 3,
      prompt: 'Ordena las palabras: "Es ingeniera." (ella)',
      promptTranslation: 'Reorder: She is an engineer.',
      correctAnswer: 'She is an engineer.',
      words: ['She', 'is', 'an', 'engineer.'],
      explanation: 'Sujeto + verbo + artículo + profesión. → She is an engineer.',
    },
  ],
  miniTest: [
    {
      id: 'a1-m2-l5-mt1',
      type: 'multiple_choice',
      concept: 'a/an article',
      difficulty: 1,
      prompt: 'Completa: "He is ___ lawyer."',
      promptTranslation: 'Fill in: a or an.',
      correctAnswer: 'a',
      options: ['a', 'an', '(nada)', 'the'],
      explanation: '"lawyer" empieza con consonante "l" → "a". → He is a lawyer.',
    },
    {
      id: 'a1-m2-l5-mt2',
      type: 'error_correction',
      concept: 'a/an before vowel',
      difficulty: 2,
      prompt: 'Corrige: "She is a artist."',
      correctAnswer: 'She is an artist.',
      acceptedAnswers: ["She's an artist.", 'She is an artist', "She's an artist"],
      acceptApproximate: true,
      explanation: '"artist" empieza con vocal "a" → usamos "an", no "a". → She is an artist.',
    },
    {
      id: 'a1-m2-l5-mt3',
      type: 'fill_blank',
      concept: 'a/an article',
      difficulty: 2,
      prompt: 'Completa: "I am ___ engineer."',
      promptTranslation: 'Fill in: a or an.',
      correctAnswer: 'an',
      explanation: '"engineer" empieza con vocal "e" → "an". → I am an engineer.',
    },
    {
      id: 'a1-m2-l5-mt4',
      type: 'translate',
      concept: 'translate job',
      difficulty: 3,
      prompt: 'Traduce: "Mi padre es un conductor."',
      correctAnswer: 'My father is a driver.',
      acceptedAnswers: ['My dad is a driver.', 'My father is a driver', 'My dad is a driver'],
      acceptApproximate: true,
      explanation: '"conductor" = driver. "driver" empieza con consonante → "a". → My father is a driver.',
    },
    {
      id: 'a1-m2-l5-mt5',
      type: 'multiple_choice',
      concept: 'always use article',
      difficulty: 2,
      prompt: 'Elige la frase correcta:',
      promptTranslation: 'Choose the correct sentence.',
      correctAnswer: 'I am a student.',
      options: ['I am a student.', 'I am student.', 'I am an student.', 'I am professional student.'],
      explanation: 'En inglés SIEMPRE hay que poner "a/an" antes de profesión: "I am a student." Las demás opciones omiten o usan "an" mal.',
    },
  ],
  reviewItems: ['a1-m2-l4'],
  prerequisites: ['a1-m2-l4'],
}