import type { Lesson } from '../../types'

export const lesson94MiniTest: Lesson = {
  id: 'a2-m9-l4',
  moduleId: 'm9-passive',
  order: 3,
  title: 'Mini-test: la voz pasiva',
  objective: 'Repasar la voz pasiva en presente y pasado simple y el uso de "by".',
  explanation_es: `Este es el repaso final del módulo. Repasemos lo esencial:

### Presente simple pasivo
- Estructura: sujeto + is/are + participio.
- "English is spoken in many countries." = El inglés se habla en muchos países.
- is → singular. are → plural.

### Pasado simple pasivo
- Estructura: sujeto + was/were + participio.
- "This house was built in 1980." = Esta casa fue construida en 1980.
- was → singular. were → plural.

### by + agente
- by = por (quién hace la acción).
- "The cake was made by my grandmother." = El pastel fue hecho por mi abuela.
- No confundir con "for" (para, destinatario).

### Transformar activa → pasiva
Activa: "People speak English." → Pasiva: "English is spoken (by people)."
En la pasiva, el objeto de la activa pasa a ser el sujeto, y usamos is/are/was/were + participio.

### Lectura para practicar
Vas a leer un texto sobre hechos históricos en voz pasiva y responder preguntas.`,
  examples: [
    { english: 'English is spoken in many countries.', spanish: 'El inglés se habla en muchos países.', note: 'Presente pasivo.' },
    { english: 'The Eiffel Tower was built in 1889.', spanish: 'La Torre Eiffel fue construida en 1889.', note: 'Pasado pasivo.' },
    { english: 'The Mona Lisa was painted by Leonardo da Vinci.', spanish: 'La Mona Lisa fue pintada por Leonardo da Vinci.', note: 'Pasado pasivo + by.' },
    { english: 'Millions of visitors are welcomed every year.', spanish: 'Millones de visitantes son recibidos cada año.', note: 'Presente pasivo plural.' },
  ],
  rule: `**Resumen del módulo 9:**
1. Presente pasivo: is/are + participio.
2. Pasado pasivo: was/were + participio.
3. by + agente = quién hace la acción (por).
4. Activa → pasiva: el objeto de la activa pasa a sujeto + is/are/was/were + participio.`,
  commonMistakes: [
    { wrong: '❌ English is spoke in many countries.', correct: '✅ English is spoken in many countries.', explanation: 'En la pasiva usamos el participio, no el pasado simple.' },
    { wrong: '❌ This house was build in 1980.', correct: '✅ This house was built in 1980.', explanation: '"Build" es irregular: participio "built".' },
    { wrong: '❌ The cake was made for my grandmother.', correct: '✅ The cake was made by my grandmother.', explanation: 'El agente (quién lo hace) va con "by" (por), no "for" (para).' },
  ],
  vocabulary: [],
  grammarPoints: [],
  exercises: [
    {
      id: 'a2-m9-l4-ex1',
      type: 'multiple_choice',
      concept: 'passive review',
      difficulty: 1,
      prompt: 'Completa: "English ___ spoken in many countries."',
      promptTranslation: 'El inglés se habla en muchos países.',
      correctAnswer: 'is',
      options: ['is', 'are', 'was'],
      explanation: '"English" es singular y el hecho es general → is. → English is spoken...',
    },
    {
      id: 'a2-m9-l4-ex2',
      type: 'fill_blank',
      concept: 'passive review',
      difficulty: 2,
      prompt: 'Completa: "The Mona Lisa was ___ by Leonardo da Vinci." (pintada)',
      promptTranslation: 'La Mona Lisa fue pintada por Leonardo da Vinci.',
      correctAnswer: 'painted',
      acceptedAnswers: ['painted', 'Painted'],
      explanation: 'Participio de "paint" (regular) = painted. → was painted by...',
    },
    {
      id: 'a2-m9-l4-ex3',
      type: 'multiple_choice',
      concept: 'active to passive',
      difficulty: 3,
      prompt: 'Transforma a pasiva: "People speak English."',
      promptTranslation: 'La gente habla inglés.',
      correctAnswer: 'English is spoken.',
      options: ['English is spoken.', 'English are spoken.', 'English was spoken.'],
      explanation: 'En la pasiva, "English" pasa a ser sujeto y usamos is + participio (spoken).',
    },
    {
      id: 'a2-m9-l4-ex4',
      type: 'reading',
      concept: 'history reading',
      difficulty: 4,
      prompt: 'Lee el texto sobre hechos históricos y responde:',
      reading: {
        text: 'Famous Facts\nThe Eiffel Tower was built in 1889. It was designed by Gustave Eiffel. Millions of visitors are welcomed every year. The Mona Lisa was painted by Leonardo da Vinci. Today, the painting is kept in the Louvre Museum in Paris. English is spoken by millions of people around the world. Many films are made in Hollywood every year. Coffee is grown in many countries, including Colombia and Brazil.',
        translation: 'Hechos famosos\nLa Torre Eiffel fue construida en 1889. Fue diseñada por Gustave Eiffel. Millones de visitantes son recibidos cada año. La Mona Lisa fue pintada por Leonardo da Vinci. Hoy, la pintura se guarda en el Museo del Louvre en París. El inglés es hablado por millones de personas en todo el mundo. Muchas películas se hacen en Hollywood cada año. El café se cultiva en muchos países, incluidos Colombia y Brasil.',
        questions: [
          {
            id: 'a2-m9-l4-ex4-q1',
            type: 'multiple_choice',
            concept: 'history reading',
            difficulty: 4,
            prompt: '¿Quién diseñó la Torre Eiffel?',
            correctAnswer: 'Gustave Eiffel',
            options: ['Gustave Eiffel', 'Leonardo da Vinci', 'the Louvre Museum'],
            explanation: 'El texto dice: "It was designed by Gustave Eiffel."',
          },
          {
            id: 'a2-m9-l4-ex4-q2',
            type: 'multiple_choice',
            concept: 'history reading',
            difficulty: 4,
            prompt: '¿Dónde se guarda la Mona Lisa?',
            correctAnswer: 'in the Louvre Museum in Paris',
            options: ['in the Louvre Museum in Paris', 'in Hollywood', 'in Brazil'],
            explanation: 'El texto dice: "Today, the painting is kept in the Louvre Museum in Paris."',
          },
          {
            id: 'a2-m9-l4-ex4-q3',
            type: 'multiple_choice',
            concept: 'history reading',
            difficulty: 4,
            prompt: '¿Qué se hace en Hollywood cada año?',
            correctAnswer: 'many films are made',
            options: ['many films are made', 'coffee is grown', 'the Mona Lisa is painted'],
            explanation: 'El texto dice: "Many films are made in Hollywood every year."',
          },
          {
            id: 'a2-m9-l4-ex4-q4',
            type: 'multiple_choice',
            concept: 'history reading',
            difficulty: 4,
            prompt: '¿Dónde se cultiva café?',
            correctAnswer: 'in many countries, including Colombia and Brazil',
            options: ['in many countries, including Colombia and Brazil', 'only in the Louvre Museum', 'in Hollywood'],
            explanation: 'El texto dice: "Coffee is grown in many countries, including Colombia and Brazil."',
          },
        ],
      },
      correctAnswer: 'reading complete',
      explanation: 'Identifica en cada frase la pasiva: is/are (presente) o was/were (pasado) + participio, y el agente con "by".',
    },
    {
      id: 'a2-m9-l4-ex5',
      type: 'select_correct',
      concept: 'passive review',
      difficulty: 3,
      prompt: 'Selecciona la frase pasiva correcta.',
      promptTranslation: 'Muchas películas se hacen en Hollywood cada año.',
      correctAnswer: 'Many films are made in Hollywood every year.',
      options: ['Many films are made in Hollywood every year.', 'Many films is made in Hollywood every year.', 'Many films are make in Hollywood every year.'],
      explanation: '"Films" es plural → are + participio (made).',
    },
    {
      id: 'a2-m9-l4-ex6',
      type: 'reorder',
      concept: 'passive review',
      difficulty: 3,
      prompt: 'Ordena la frase:',
      promptTranslation: 'La Torre Eiffel fue construida en 1889.',
      correctAnswer: 'The Eiffel Tower was built in 1889.',
      words: ['The', 'Eiffel', 'Tower', 'was', 'built', 'in', '1889.'],
      explanation: 'Sujeto (The Eiffel Tower) + was + participio (built) + in 1889.',
    },
    {
      id: 'a2-m9-l4-ex7',
      type: 'translate',
      concept: 'passive review',
      difficulty: 4,
      prompt: 'Traduce: "El puente fue diseñado por un arquitecto."',
      correctAnswer: 'The bridge was designed by an architect.',
      acceptedAnswers: ['The bridge was designed by an architect', 'The bridge was designed by an architect.'],
      acceptApproximate: true,
      explanation: '"Fue diseñado" = was designed; "por un arquitecto" = by an architect.',
    },
    {
      id: 'a2-m9-l4-ex8',
      type: 'error_correction',
      concept: 'passive review',
      difficulty: 4,
      prompt: 'Corrige el error: "The window was broke last night."',
      correctAnswer: 'The window was broken last night.',
      acceptedAnswers: ['The window was broken last night', 'The window was broken last night.'],
      acceptApproximate: true,
      explanation: 'El participio de "break" es "broken", no el pasado simple "broke".',
    },
    {
      id: 'a2-m9-l4-ex9',
      type: 'true_false',
      concept: 'passive review',
      difficulty: 3,
      prompt: '"In the passive voice, we use "by" to introduce the person who does the action."',
      promptTranslation: 'En la voz pasiva, usamos "by" para introducir a la persona que hace la acción.',
      correctAnswer: 'true',
      acceptedAnswers: ['True', 'TRUE', 'Verdadero', 'true.'],
      explanation: 'Es VERDADERO. "By" introduce al agente: the person or thing that performs the action.',
    },
  ],
  miniTest: [
    {
      id: 'a2-m9-l4-mt1',
      type: 'multiple_choice',
      concept: 'passive review',
      difficulty: 1,
      prompt: 'Completa: "The Eiffel Tower was ___ in 1889."',
      promptTranslation: 'La Torre Eiffel fue construida en 1889.',
      correctAnswer: 'built',
      options: ['built', 'build', 'builded'],
      explanation: 'Participio de "build" = built (irregular). → was built in 1889.',
    },
    {
      id: 'a2-m9-l4-mt2',
      type: 'multiple_choice',
      concept: 'active to passive',
      difficulty: 2,
      prompt: 'Transforma a pasiva: "People speak Spanish."',
      promptTranslation: 'La gente habla español.',
      correctAnswer: 'Spanish is spoken.',
      options: ['Spanish is spoken.', 'Spanish are spoken.', 'Spanish is spoke.'],
      explanation: '"Spanish" pasa a ser sujeto (singular) → is + participio (spoken).',
    },
    {
      id: 'a2-m9-l4-mt3',
      type: 'fill_blank',
      concept: 'passive review',
      difficulty: 2,
      prompt: 'Completa: "The Mona Lisa was painted ___ Leonardo da Vinci."',
      promptTranslation: 'La Mona Lisa fue pintada por Leonardo da Vinci.',
      correctAnswer: 'by',
      acceptedAnswers: ['by', 'By'],
      explanation: 'El agente (quién pintó) va con "by": painted by Leonardo da Vinci.',
    },
    {
      id: 'a2-m9-l4-mt4',
      type: 'translate',
      concept: 'passive review',
      difficulty: 4,
      prompt: 'Traduce: "La Torre Eiffel fue construida en 1889."',
      correctAnswer: 'The Eiffel Tower was built in 1889.',
      acceptedAnswers: ['The Eiffel Tower was built in 1889', 'The Eiffel Tower was built in 1889.'],
      acceptApproximate: true,
      explanation: '"Fue construida" = was built; "en 1889" = in 1889.',
    },
    {
      id: 'a2-m9-l4-mt5',
      type: 'error_correction',
      concept: 'passive review',
      difficulty: 4,
      prompt: 'Corrige el error: "These photos was taken in 2010."',
      correctAnswer: 'These photos were taken in 2010.',
      acceptedAnswers: ['These photos were taken in 2010', 'These photos were taken in 2010.'],
      acceptApproximate: true,
      explanation: '"Photos" es plural → usamos "were", no "was".',
    },
  ],
  reviewItems: ['a2-m9-l3'],
  prerequisites: ['a2-m9-l3'],
}
