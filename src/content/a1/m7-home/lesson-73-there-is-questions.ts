import type { Lesson } from '../../types'

export const lesson73ThereIsQuestions: Lesson = {
  id: 'a1-m7-l3',
  moduleId: 'm7-home',
  order: 2,
  title: 'There is/are (negativo y preguntas)',
  objective: 'Formar oraciones negativas y preguntas con "there is" y "there are", y responder con respuestas cortas.',
  explanation_es: `Ya sabemos decir "hay" en afirmativo. Ahora vamos a aprender la forma negativa y las preguntas.

### Negativo: There isn't / There aren't

- **There isn't** (there is not) + singular: There isn't a book on the table. = No hay un libro en la mesa.
- **There aren't** (there are not) + plural: There aren't any chairs. = No hay sillas.

Con plurales y negativos usamos **any**:
- There aren't any chairs. = No hay sillas.
- There isn't any milk. = No hay leche.

### Preguntas: Is there...? / Are there any...?

- **Is there** + singular?: Is there a bank near here? = ¿Hay un banco cerca de aquí?
- **Are there** + plural + any?: Are there any restaurants around? = ¿Hay restaurantes por aquí?

### Respuestas cortas (short answers)

- Is there a bank near here? → **Yes, there is.** / **No, there isn't.**
- Are there any restaurants? → **Yes, there are.** / **No, there aren't.**

IMPORTANTE: "any" se usa en preguntas y negativos. En frases afirmativas usamos "some" (esto se ampliará en el módulo 8).
- Affirmative: There are some chairs.
- Negative: There aren't any chairs.
- Question: Are there any chairs?`,
  examples: [
    { english: 'There isn\'t a book on the table.', spanish: 'No hay un libro en la mesa.', note: 'There isn\'t + singular.' },
    { english: 'There aren\'t any chairs.', spanish: 'No hay sillas.', note: 'There aren\'t + any + plural.' },
    { english: 'Is there a bank near here?', spanish: '¿Hay un banco cerca de aquí?', note: 'Is there + singular?' },
    { english: 'Are there any restaurants around?', spanish: '¿Hay restaurantes por aquí?', note: 'Are there + any + plural?' },
    { english: 'Yes, there is.', spanish: 'Sí, hay.', note: 'Respuesta corta afirmativa a "Is there...?".' },
    { english: 'No, there aren\'t.', spanish: 'No, no hay.', note: 'Respuesta corta negativa a "Are there...?".' },
    { english: 'There are some chairs.', spanish: 'Hay algunas sillas.', note: 'En afirmativo usamos "some", no "any".' },
  ],
  rule: `**Negativo:**
- There isn't (is not) + singular → There isn't a book.
- There aren't (are not) + plural + any → There aren't any chairs.

**Preguntas:**
- Is there + singular? → Is there a bank near here?
- Are there + any + plural? → Are there any restaurants?

**Respuestas cortas:**
- Yes, there is. / No, there isn't.
- Yes, there are. / No, there aren't.

**some vs any:** some en afirmativo, any en preguntas y negativos.`,
  commonMistakes: [
    { wrong: '❌ There aren\'t a chair.', correct: '✅ There isn\'t a chair.', explanation: '"A chair" es singular → usamos "there isn\'t", no "there aren\'t".' },
    { wrong: '❌ Is there two chairs?', correct: '✅ Are there two chairs?', explanation: '"Two chairs" es plural → usamos "are there", no "is there".' },
    { wrong: '❌ There are any chairs.', correct: '✅ There are some chairs.', explanation: '"Any" se usa en preguntas y negativos. En afirmativo usamos "some": There are some chairs.' },
  ],
  vocabulary: [],
  grammarPoints: [
    {
      id: 'gp-there-is-are-negative-questions',
      level: 'A1',
      name: 'There is/are — negativo y preguntas',
      explanation_es: 'Para negar usamos "there isn\'t" (singular) y "there aren\'t" (plural + any). Para preguntar invertimos: "Is there...?" y "Are there any...?".',
      formula: "There isn't + singular | There aren't + any + plural | Is there + singular? | Are there any + plural?",
      examples: ['There isn\'t a book.', 'There aren\'t any chairs.', 'Is there a bank?', 'Are there any restaurants?'],
    },
  ],
  exercises: [
    {
      id: 'a1-m7-l3-ex1',
      type: 'fill_blank',
      concept: 'there is/are negative',
      difficulty: 1,
      prompt: 'Completa: "There ___ a book on the table." (negativa)',
      promptTranslation: 'No hay un libro en la mesa.',
      correctAnswer: 'isn\'t',
      acceptedAnswers: ["isn't", "is not", "There isn't"],
      explanation: '"A book" es singular y la frase es negativa → there isn\'t.',
    },
    {
      id: 'a1-m7-l3-ex2',
      type: 'fill_blank',
      concept: 'there is/are negative',
      difficulty: 2,
      prompt: 'Completa: "There ___ any chairs in the kitchen." (negativa)',
      promptTranslation: 'No hay sillas en la cocina.',
      correctAnswer: 'aren\'t',
      acceptedAnswers: ["aren't", 'are not', "There aren't"],
      explanation: '"Any chairs" es plural y la frase es negativa → there aren\'t any chairs.',
    },
    {
      id: 'a1-m7-l3-ex3',
      type: 'multiple_choice',
      concept: 'there is/are negative',
      difficulty: 2,
      prompt: '¿Cuál es la frase correcta?',
      promptTranslation: 'No hay una silla.',
      correctAnswer: 'There isn\'t a chair.',
      options: ['There isn\'t a chair.', 'There aren\'t a chair.', 'There isn\'t a chairs.'],
      explanation: '"A chair" es singular → there isn\'t a chair.',
    },
    {
      id: 'a1-m7-l3-ex4',
      type: 'multiple_choice',
      concept: 'short answers',
      difficulty: 2,
      prompt: 'Responde: "Is there a bank near here?"',
      promptTranslation: '¿Hay un banco cerca de aquí? (sí)',
      correctAnswer: 'Yes, there is.',
      options: ['Yes, there is.', 'Yes, there are.', 'Yes, there isn\'t.'],
      explanation: 'A "Is there...?" respondemos con "Yes, there is." o "No, there isn\'t."',
    },
    {
      id: 'a1-m7-l3-ex5',
      type: 'reorder',
      concept: 'there is/are questions',
      difficulty: 2,
      prompt: 'Ordena: Is / there / a / bank / near / here',
      promptTranslation: '¿Hay un banco cerca de aquí?',
      correctAnswer: 'Is there a bank near here?',
      words: ['Is', 'there', 'a', 'bank', 'near', 'here'],
      explanation: 'Pregunta singular: Is there + a bank + near here?',
    },
    {
      id: 'a1-m7-l3-ex6',
      type: 'reorder',
      concept: 'there is/are questions',
      difficulty: 3,
      prompt: 'Ordena: Are / there / any / restaurants / around',
      promptTranslation: '¿Hay restaurantes por aquí?',
      correctAnswer: 'Are there any restaurants around?',
      words: ['Are', 'there', 'any', 'restaurants', 'around'],
      explanation: 'Pregunta plural: Are there + any + restaurants + around?',
    },
    {
      id: 'a1-m7-l3-ex7',
      type: 'fill_blank',
      concept: 'there is/are questions',
      difficulty: 2,
      prompt: 'Completa: "___ there two chairs in the kitchen?"',
      promptTranslation: '¿Hay dos sillas en la cocina?',
      correctAnswer: 'Are',
      acceptedAnswers: ['are'],
      explanation: '"Two chairs" es plural → la pregunta es "Are there two chairs...?"',
    },
    {
      id: 'a1-m7-l3-ex8',
      type: 'multiple_choice',
      concept: 'some vs any',
      difficulty: 3,
      prompt: 'Completa la frase AFIRMATIVA: "There are ___ chairs."',
      promptTranslation: 'Hay algunas sillas.',
      correctAnswer: 'some',
      options: ['some', 'any', 'no'],
      explanation: 'En frases afirmativas usamos "some": There are some chairs. ("Any" solo va en preguntas y negativos.)',
    },
    {
      id: 'a1-m7-l3-ex9',
      type: 'translate',
      concept: 'there is/are negative',
      difficulty: 3,
      prompt: 'Traduce: "No hay un libro en la mesa."',
      correctAnswer: 'There isn\'t a book on the table.',
      acceptedAnswers: ['There is not a book on the table.', 'There isn\'t a book on the table', 'there isn\'t a book on the table.'],
      acceptApproximate: true,
      explanation: '"No hay" + singular = there isn\'t. → There isn\'t a book on the table.',
    },
    {
      id: 'a1-m7-l3-ex10',
      type: 'translate',
      concept: 'there is/are questions',
      difficulty: 4,
      prompt: 'Traduce: "¿Hay un banco cerca de aquí?"',
      correctAnswer: 'Is there a bank near here?',
      acceptedAnswers: ['Is there a bank near here', 'is there a bank near here?'],
      acceptApproximate: true,
      explanation: '"¿Hay...?" singular = Is there...? → Is there a bank near here?',
    },
  ],
  miniTest: [
    {
      id: 'a1-m7-l3-mt1',
      type: 'fill_blank',
      concept: 'there is/are negative',
      difficulty: 2,
      prompt: 'Completa: "There ___ any restaurants around." (negativa)',
      promptTranslation: 'No hay restaurantes por aquí.',
      correctAnswer: 'aren\'t',
      acceptedAnswers: ["aren't", 'are not'],
      explanation: '"Any restaurants" es plural y la frase es negativa → there aren\'t.',
    },
    {
      id: 'a1-m7-l3-mt2',
      type: 'multiple_choice',
      concept: 'short answers',
      difficulty: 2,
      prompt: 'Responde negativamente: "Are there any chairs?"',
      promptTranslation: '¿Hay sillas? (no)',
      correctAnswer: 'No, there aren\'t.',
      options: ['No, there isn\'t.', 'No, there aren\'t.', 'No, there are.'],
      explanation: 'A "Are there...?" respondemos con "Yes, there are." o "No, there aren\'t."',
    },
    {
      id: 'a1-m7-l3-mt3',
      type: 'reorder',
      concept: 'there is/are questions',
      difficulty: 3,
      prompt: 'Ordena: Are / there / any / books / on / the / table',
      promptTranslation: '¿Hay libros en la mesa?',
      correctAnswer: 'Are there any books on the table?',
      words: ['Are', 'there', 'any', 'books', 'on', 'the', 'table'],
      explanation: 'Pregunta plural: Are there any + books + on the table?',
    },
    {
      id: 'a1-m7-l3-mt4',
      type: 'multiple_choice',
      concept: 'there is/are negative',
      difficulty: 3,
      prompt: '¿Cuál es la frase correcta?',
      promptTranslation: 'No hay una silla.',
      correctAnswer: 'There isn\'t a chair.',
      options: ['There isn\'t a chair.', 'There aren\'t a chair.', 'There isn\'t chairs.'],
      explanation: '"A chair" es singular → there isn\'t a chair.',
    },
    {
      id: 'a1-m7-l3-mt5',
      type: 'translate',
      concept: 'there is/are negative',
      difficulty: 4,
      prompt: 'Traduce: "No hay sillas en el jardín."',
      correctAnswer: 'There aren\'t any chairs in the garden.',
      acceptedAnswers: ['There are not any chairs in the garden.', 'There aren\'t any chairs in the garden', 'there aren\'t any chairs in the garden.'],
      acceptApproximate: true,
      explanation: '"No hay" + plural + any = there aren\'t any. → There aren\'t any chairs in the garden.',
    },
  ],
  reviewItems: ['a1-m7-l2'],
  prerequisites: ['a1-m7-l2'],
}
