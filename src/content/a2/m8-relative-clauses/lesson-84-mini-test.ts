import type { Lesson } from '../../types'

export const lesson84MiniTest: Lesson = {
  id: 'a2-m8-l4',
  moduleId: 'm8-relative-clauses',
  order: 3,
  title: 'Mini-test: oraciones relativas',
  objective: 'Repasar who, which, that (sujeto y objeto) y where para describir personas, cosas y lugares.',
  explanation_es: `Este es el repaso final del módulo. Repasemos lo esencial:

### Sujeto (no se omite)
- who → personas. which → cosas. that → personas y cosas.
- "The man who lives next door is a doctor."
- NO se repite el pronombre: ❌ who he lives → ✅ who lives.

### Objeto (opcional)
- La relativa recibe la acción: "The woman (who) I met yesterday is my boss."
- who/which/that se pueden omitir: "The film we watched was great."
- NO se repite el objeto: ❌ who I met her → ✅ (who) I met.

### Lugares (where)
- where = donde: "This is the city where I was born."
- Sin preposición extra: ❌ where I was born in → ✅ where I was born.

### Lectura para practicar
Vas a leer una descripción de un barrio y de sus personas y lugares. Fíjate en cada relativa: who, which, that y where.`,
  examples: [
    { english: 'The man who lives next door is a doctor.', spanish: 'El hombre que vive al lado es médico.', note: 'who como sujeto.' },
    { english: 'The film we watched was great.', spanish: 'La película que vimos fue genial.', note: 'Relativa de objeto, sin "that".' },
    { english: 'This is the city where I was born.', spanish: 'Esta es la ciudad donde nací.', note: 'where para lugares.' },
    { english: 'I like books which make me think.', spanish: 'Me gustan los libros que me hacen pensar.', note: 'which para cosas.' },
  ],
  rule: `**Resumen del módulo 8:**
1. who = personas. which = cosas. that = personas y cosas.
2. Sujeto: no se omite ni se repite el pronombre.
3. Objeto: who/which/that son opcionales y no se repite el objeto.
4. where = lugares; sin preposición extra al final.`,
  commonMistakes: [
    { wrong: '❌ The man who he lives next door is a doctor.', correct: '✅ The man who lives next door is a doctor.', explanation: 'No se repite el pronombre "he" después de "who".' },
    { wrong: '❌ The woman who I met her yesterday is my boss.', correct: '✅ The woman (who) I met yesterday is my boss.', explanation: 'No se repite el objeto "her".' },
    { wrong: '❌ This is the city where I was born in.', correct: '✅ This is the city where I was born.', explanation: '"Where" ya incluye la preposición; no añadimos "in".' },
  ],
  vocabulary: [],
  grammarPoints: [],
  exercises: [
    {
      id: 'a2-m8-l4-ex1',
      type: 'multiple_choice',
      concept: 'relative clauses review',
      difficulty: 1,
      prompt: 'Completa: "I like books ___ make me think."',
      promptTranslation: 'Me gustan los libros que me hacen pensar.',
      correctAnswer: 'which',
      options: ['which', 'who', 'where'],
      explanation: 'Para cosas ("books") usamos which o that. → books which make me think.',
    },
    {
      id: 'a2-m8-l4-ex2',
      type: 'fill_blank',
      concept: 'relative clauses review',
      difficulty: 2,
      prompt: 'Completa (objeto, puede omitirse): "The café ___ we met is in the centre."',
      promptTranslation: 'El café donde/qué nos conocimos está en el centro.',
      correctAnswer: 'where',
      acceptedAnswers: ['where', 'Where'],
      explanation: 'Se trata de un lugar: "donde nos conocimos" = where we met. (También: the café (that) we met at.)',
    },
    {
      id: 'a2-m8-l4-ex3',
      type: 'multiple_choice',
      concept: 'relative clauses review',
      difficulty: 2,
      prompt: 'Completa: "The woman ___ I met yesterday is my boss." (objeto)',
      promptTranslation: 'La mujer que conocí ayer es mi jefa.',
      correctAnswer: 'who',
      options: ['who', 'where', 'which'],
      explanation: 'Para personas usamos who/that. Como objeto también se puede omitir: (who) I met.',
    },
    {
      id: 'a2-m8-l4-ex4',
      type: 'reading',
      concept: 'describing people and places reading',
      difficulty: 4,
      prompt: 'Lee el texto sobre el barrio y responde:',
      reading: {
        text: 'My Neighbourhood\nI live in a small neighbourhood. The man who lives next door is a doctor. The woman who works at the bakery is very friendly; she makes bread that everyone loves. There is a park where I play football with my friends. The restaurant that we visit on Sundays is famous for its pizzas. The house which I grew up in has a big garden. The school where my children study is near the park. The shop where I buy my vegetables is open every morning.',
        translation: 'Mi barrio\nVivo en un barrio pequeño. El hombre que vive al lado es médico. La mujer que trabaja en la panadería es muy amable; hace un pan que todos adoran. Hay un parque donde juego al fútbol con mis amigos. El restaurante que visitamos los domingos es famoso por sus pizzas. La casa en la que crecí tiene un jardín grande. La escuela donde estudian mis hijos está cerca del parque. La tienda donde compro mis verduras abre todas las mañanas.',
        questions: [
          {
            id: 'a2-m8-l4-ex4-q1',
            type: 'multiple_choice',
            concept: 'describing people and places reading',
            difficulty: 4,
            prompt: '¿Qué hace el hombre que vive al lado?',
            correctAnswer: 'he is a doctor',
            options: ['he is a doctor', 'he works at the bakery', 'he plays football'],
            explanation: 'El texto dice: "The man who lives next door is a doctor."',
          },
          {
            id: 'a2-m8-l4-ex4-q2',
            type: 'multiple_choice',
            concept: 'describing people and places reading',
            difficulty: 4,
            prompt: '¿Qué hace la mujer de la panadería?',
            correctAnswer: 'she makes bread that everyone loves',
            options: ['she makes bread that everyone loves', 'she works in a school', 'she makes pizzas'],
            explanation: 'El texto dice: "The woman who works at the bakery is very friendly; she makes bread that everyone loves."',
          },
          {
            id: 'a2-m8-l4-ex4-q3',
            type: 'multiple_choice',
            concept: 'describing people and places reading',
            difficulty: 4,
            prompt: '¿Dónde juega al fútbol con sus amigos?',
            correctAnswer: 'in the park',
            options: ['in the park', 'near the school', 'at the restaurant'],
            explanation: 'El texto dice: "There is a park where I play football with my friends."',
          },
          {
            id: 'a2-m8-l4-ex4-q4',
            type: 'multiple_choice',
            concept: 'describing people and places reading',
            difficulty: 4,
            prompt: '¿Qué hay cerca del parque?',
            correctAnswer: 'the school',
            options: ['the school', 'the bakery', 'the shop'],
            explanation: 'El texto dice: "The school where my children study is near the park."',
          },
        ],
      },
      correctAnswer: 'reading complete',
      explanation: 'Identifica cada relativa: who/that (personas y cosas) y where (lugares).',
    },
    {
      id: 'a2-m8-l4-ex5',
      type: 'select_correct',
      concept: 'relative clauses review',
      difficulty: 3,
      prompt: 'Selecciona la frase correcta.',
      promptTranslation: 'La casa que compraron es preciosa.',
      correctAnswer: 'The house they bought is beautiful.',
      options: ['The house they bought is beautiful.', 'The house which they bought it is beautiful.', 'The house who they bought is beautiful.'],
      explanation: 'Relativa de objeto: omitimos "which" y no repetimos el objeto "it".',
    },
    {
      id: 'a2-m8-l4-ex6',
      type: 'reorder',
      concept: 'relative clauses review',
      difficulty: 3,
      prompt: 'Ordena la frase:',
      promptTranslation: 'Esta es la ciudad donde nací.',
      correctAnswer: 'This is the city where I was born.',
      words: ['This', 'is', 'the', 'city', 'where', 'I', 'was', 'born.'],
      explanation: 'This is the city + where + I was born. (Sin preposición extra.)',
    },
    {
      id: 'a2-m8-l4-ex7',
      type: 'translate',
      concept: 'relative clauses review',
      difficulty: 4,
      prompt: 'Traduce: "El restaurante donde comimos es famoso."',
      correctAnswer: 'The restaurant where we ate is famous.',
      acceptedAnswers: ['The restaurant where we ate is famous', 'The restaurant where we ate is famous.', 'the restaurant where we ate is famous.'],
      acceptApproximate: true,
      explanation: '"El restaurante donde comimos" = the restaurant where we ate; "es famoso" = is famous.',
    },
    {
      id: 'a2-m8-l4-ex8',
      type: 'error_correction',
      concept: 'relative clauses review',
      difficulty: 4,
      prompt: 'Corrige el error: "The film that we watched it was great."',
      correctAnswer: 'The film we watched was great.',
      acceptedAnswers: ['The film we watched was great', 'The film that we watched was great.', 'the film we watched was great.'],
      acceptApproximate: true,
      explanation: 'No repetimos el objeto "it". → The film (that) we watched was great.',
    },
    {
      id: 'a2-m8-l4-ex9',
      type: 'true_false',
      concept: 'relative clauses review',
      difficulty: 3,
      prompt: '"In object relative clauses, we can omit who/which/that."',
      promptTranslation: 'En las oraciones relativas de objeto, podemos omitir who/which/that.',
      correctAnswer: 'true',
      acceptedAnswers: ['True', 'TRUE', 'Verdadero', 'true.'],
      explanation: 'Es VERDADERO. Cuando la relativa es el objeto, la palabra relativa es opcional.',
    },
  ],
  miniTest: [
    {
      id: 'a2-m8-l4-mt1',
      type: 'multiple_choice',
      concept: 'relative clauses review',
      difficulty: 1,
      prompt: 'Completa: "The man ___ lives next door is a doctor."',
      promptTranslation: 'El hombre que vive al lado es médico.',
      correctAnswer: 'who',
      options: ['who', 'which', 'where'],
      explanation: 'Para personas usamos "who". → The man who lives next door...',
    },
    {
      id: 'a2-m8-l4-mt2',
      type: 'multiple_choice',
      concept: 'relative clauses review',
      difficulty: 2,
      prompt: 'Completa: "This is the city ___ I was born."',
      promptTranslation: 'Esta es la ciudad donde nací.',
      correctAnswer: 'where',
      options: ['where', 'who', 'which'],
      explanation: 'Para lugares usamos "where". → the city where I was born.',
    },
    {
      id: 'a2-m8-l4-mt3',
      type: 'fill_blank',
      concept: 'relative clauses review',
      difficulty: 3,
      prompt: 'Completa (objeto, opcional): "The pizza ___ we ate was delicious."',
      promptTranslation: 'La pizza que comimos estaba deliciosa.',
      correctAnswer: 'that',
      acceptedAnswers: ['that', 'which', ''],
      explanation: 'Relativa de objeto: that/which son opcionales. → The pizza (that) we ate was delicious.',
    },
    {
      id: 'a2-m8-l4-mt4',
      type: 'translate',
      concept: 'relative clauses review',
      difficulty: 4,
      prompt: 'Traduce: "La mujer que conocí ayer es mi jefa."',
      correctAnswer: 'The woman I met yesterday is my boss.',
      acceptedAnswers: ['The woman I met yesterday is my boss', 'The woman who I met yesterday is my boss.', 'the woman I met yesterday is my boss.'],
      acceptApproximate: true,
      explanation: 'Relativa de objeto: The woman (who) I met yesterday is my boss.',
    },
    {
      id: 'a2-m8-l4-mt5',
      type: 'error_correction',
      concept: 'relative clauses review',
      difficulty: 4,
      prompt: 'Corrige el error: "This is the city where I was born in."',
      correctAnswer: 'This is the city where I was born.',
      acceptedAnswers: ['This is the city where I was born', 'This is the city where I was born.', 'This is the city in which I was born.'],
      acceptApproximate: true,
      explanation: 'No añadimos "in" al final. "Where" ya significa "en donde".',
    },
  ],
  reviewItems: ['a2-m8-l3'],
  prerequisites: ['a2-m8-l3'],
}
