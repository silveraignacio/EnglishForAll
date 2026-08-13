import type { Lesson } from '../../types'

export const lesson25MiniTest: Lesson = {
  id: 'a2-m2-l5',
  moduleId: 'm2-present-perfect',
  order: 4,
  title: 'Mini-test: Present Perfect',
  objective: 'Repasar todo el módulo: present perfect afirmativo, ever/never, just/already/yet, for/since y el contraste con el pasado simple.',
  explanation_es: `Este es el repaso final del módulo de Present Perfect. Resumen de todo lo aprendido:

### 1. Forma afirmativa

have / has + participio pasado (regular -ed o irregular).

- I / You / We / They + have → "I have been to London."
- He / She / It + has → "She has seen that film."

### 2. ever / never

- Pregunta: Have/Has + sujeto + ever + participio? → "Have you ever been to Mexico?"
- Nunca: sujeto + have/has + never + participio → "I have never tried sushi."
- Respuestas cortas: Yes, I have. / No, I haven't.

### 3. just / already / yet

- just (acabo de): have/has + just + participio → "I have just finished."
- already (ya): have/has + already + participio → "She has already eaten."
- yet (todavía): al final, en preguntas y negativas → "Have you finished yet?" / "I haven't done it yet."

### 4. for / since

- for + periodo → "for 10 years".
- since + punto de partida → "since 2020".

### 5. Present Perfect vs Past Simple — ¡clave!

- Present Perfect: experiencia sin tiempo concreto → "I have been to Paris." (alguna vez)
- Past Simple: acción en un momento concreto del pasado → "I went to Paris last year."

Si hay un tiempo concreto (last year, yesterday, in 2020), usa el PAST SIMPLE.`,
  examples: [
    { english: 'I have been to London.', spanish: 'He estado en Londres.', note: 'Experiencia: Present Perfect.' },
    { english: 'I went to London last year.', spanish: 'Fui a Londres el año pasado.', note: 'Con last year: Past Simple (went).' },
    { english: 'She has already eaten.', spanish: 'Ella ya ha comido.', note: 'already = ya.' },
    { english: 'I haven\'t done it yet.', spanish: 'Todavía no lo he hecho.', note: 'yet en negativa.' },
    { english: 'We have lived here since 2019.', spanish: 'Hemos vivido aquí desde 2019.', note: 'since + 2019.' },
    { english: 'Have you ever seen a volcano?', spanish: '¿Has visto alguna vez un volcán?', note: 'ever en preguntas.' },
  ],
  rule: `1. have/has + participio (experiencias, sin tiempo concreto).
2. ever (preguntas), never (nunca), just (acabo de), already (ya), yet (todavía, al final).
3. for + periodo, since + punto de partida.
4. Contraste: Present Perfect = experiencia general; Past Simple = tiempo concreto (last year, yesterday).`,
  commonMistakes: [
    { wrong: '❌ I have visited Paris in 2020.', correct: '✅ I visited Paris in 2020.', explanation: 'Con un tiempo concreto (in 2020) usamos el Past Simple, no el Present Perfect.' },
    { wrong: '❌ She has never saw that film.', correct: '✅ She has never seen that film.', explanation: 'Después de has + never usamos el participio: seen, no saw.' },
    { wrong: '❌ I have lived here since 5 years.', correct: '✅ I have lived here for 5 years.', explanation: '5 years es un periodo → for. since es para puntos de partida.' },
  ],
  vocabulary: [],
  grammarPoints: [
    {
      id: 'gp-a2m2-review',
      level: 'A2',
      name: 'Present Perfect review',
      explanation_es: 'Repaso de have/has + participio para experiencias, ever/never, just/already/yet, for/since, y contraste con el pasado simple.',
      formula: 'have/has + past participle | Have...ever...? | just/already/never + participle | ...yet? | for + period / since + point',
      examples: ['I have been to London.', 'Have you ever...?', 'She has just arrived.'],
    },
  ],
  exercises: [
    {
      id: 'a2-m2-l5-ex1',
      type: 'multiple_choice',
      concept: 'has / have',
      difficulty: 1,
      prompt: 'Completa: "I ___ been to London."',
      promptTranslation: 'He estado en Londres.',
      correctAnswer: 'have',
      options: ['have', 'has', 'am'],
      explanation: 'Con "I" usamos "have". → I have been to London.',
    },
    {
      id: 'a2-m2-l5-ex2',
      type: 'fill_blank',
      concept: 'past participle',
      difficulty: 2,
      prompt: 'Completa con el participio: "She has ___ that film." (see)',
      promptTranslation: 'Ella ha visto esa película.',
      correctAnswer: 'seen',
      acceptedAnswers: ['seen', 'Seen'],
      explanation: 'El participio de "see" es "seen". → She has seen that film.',
    },
    {
      id: 'a2-m2-l5-ex3',
      type: 'multiple_choice',
      concept: 'present perfect vs past simple',
      difficulty: 3,
      prompt: 'Completa: "I ___ to Paris last year."',
      promptTranslation: 'Fui a París el año pasado.',
      correctAnswer: 'went',
      options: ['went', 'have gone', 'has gone'],
      explanation: '"Last year" es un tiempo concreto → Past Simple: went (go → went).',
    },
    {
      id: 'a2-m2-l5-ex4',
      type: 'error_correction',
      concept: 'present perfect vs past simple',
      difficulty: 3,
      prompt: 'Corrige el error: "I have been to Paris last year."',
      correctAnswer: 'I went to Paris last year.',
      acceptedAnswers: ['I went to Paris last year', 'I went to Paris last year.', 'i went to Paris last year'],
      acceptApproximate: true,
      explanation: 'Con "last year" (tiempo concreto) usamos el Past Simple: I went. El Present Perfect no se usa con tiempos concretos.',
    },
    {
      id: 'a2-m2-l5-ex5',
      type: 'translate',
      concept: 'for + period',
      difficulty: 3,
      prompt: 'Traduce: "He vivido aquí durante 10 años."',
      correctAnswer: 'I have lived here for 10 years.',
      acceptedAnswers: ['I have lived here for 10 years', 'I have lived here for 10 years.', 'i have lived here for 10 years'],
      acceptApproximate: true,
      explanation: '"He vivido" = I have lived, "aquí" = here, "durante 10 años" = for 10 years.',
    },
    {
      id: 'a2-m2-l5-ex6',
      type: 'reorder',
      concept: 'ever questions',
      difficulty: 4,
      prompt: 'Ordena las palabras para formar una pregunta: Have / you / ever / been / to / Mexico?',
      promptTranslation: '¿Has estado alguna vez en México?',
      correctAnswer: 'Have you ever been to Mexico?',
      words: ['Have', 'you', 'ever', 'been', 'to', 'Mexico?'],
      explanation: 'Orden: Have + sujeto + ever + participio + to + lugar. → Have you ever been to Mexico?',
    },
    {
      id: 'a2-m2-l5-ex7',
      type: 'reading',
      concept: 'present perfect reading',
      difficulty: 4,
      prompt: 'Lee el texto sobre las experiencias de Laura y responde:',
      reading: {
        text: 'Laura\'s experiences\nLaura has done many interesting things in her life. She has visited ten countries and she has lived in three different cities. She has met famous actors and she has eaten food from all over the world.\nLast year, she went to Japan and she saw Mount Fuji. She has never been to Africa, but she wants to go next year.\nLaura has worked as a teacher for five years. She has known her best friend since she was a child. Her friend has just moved to another city, so Laura is a little sad. But they talk every day.',
        translation: 'Las experiencias de Laura\nLaura ha hecho muchas cosas interesantes en su vida. Ha visitado diez países y ha vivido en tres ciudades diferentes. Ha conocido a actores famosos y ha comido comida de todo el mundo.\nEl año pasado fue a Japón y vio el monte Fuji. Nunca ha estado en África, pero quiere ir el año que viene.\nLaura ha trabajado como profesora durante cinco años. Conoce a su mejor amiga desde que era niña. Su amiga acaba de mudarse a otra ciudad, así que Laura está un poco triste. Pero hablan todos los días.',
        questions: [
          {
            id: 'a2-m2-l5-ex7-q1',
            type: 'multiple_choice',
            concept: 'present perfect reading',
            difficulty: 4,
            prompt: '¿Cuántos países ha visitado Laura?',
            correctAnswer: 'ten',
            options: ['ten', 'three', 'five'],
            explanation: 'El texto dice: "She has visited ten countries".',
          },
          {
            id: 'a2-m2-l5-ex7-q2',
            type: 'multiple_choice',
            concept: 'past simple reading',
            difficulty: 4,
            prompt: '¿A dónde fue Laura el año pasado?',
            correctAnswer: 'Japan',
            options: ['Japan', 'Africa', 'Paris'],
            explanation: 'El texto dice: "Last year, she went to Japan and she saw Mount Fuji." (Past Simple porque hay tiempo concreto.)',
          },
          {
            id: 'a2-m2-l5-ex7-q3',
            type: 'multiple_choice',
            concept: 'never reading',
            difficulty: 4,
            prompt: '¿Ha estado Laura alguna vez en África?',
            correctAnswer: 'No, she hasn\'t',
            options: ['No, she hasn\'t', 'Yes, she has', 'No, she doesn\'t'],
            explanation: 'El texto dice: "She has never been to Africa". Nunca ha estado.',
          },
          {
            id: 'a2-m2-l5-ex7-q4',
            type: 'multiple_choice',
            concept: 'for reading',
            difficulty: 4,
            prompt: '¿Cuánto tiempo ha trabajado Laura como profesora?',
            correctAnswer: 'for five years',
            options: ['for five years', 'since five years', 'for a year'],
            explanation: 'El texto dice: "Laura has worked as a teacher for five years." (for + periodo.)',
          },
          {
            id: 'a2-m2-l5-ex7-q5',
            type: 'multiple_choice',
            concept: 'just reading',
            difficulty: 4,
            prompt: '¿Por qué está Laura un poco triste?',
            correctAnswer: 'porque su amiga acaba de mudarse a otra ciudad',
            options: ['porque su amiga acaba de mudarse a otra ciudad', 'porque perdió su trabajo', 'porque hace frío'],
            explanation: 'El texto dice: "Her friend has just moved to another city, so Laura is a little sad." (has just moved = acaba de mudarse.)',
          },
        ],
      },
      correctAnswer: 'reading complete',
      explanation: 'El texto describe experiencias de vida de Laura (Present Perfect: has visited, has met, has worked), un evento con tiempo concreto (last year → went, saw), never, for y just.',
    },
    {
      id: 'a2-m2-l5-ex8',
      type: 'translate',
      concept: 'present perfect review',
      difficulty: 4,
      prompt: 'Traduce: "Nunca he probado el sushi."',
      correctAnswer: 'I have never tried sushi.',
      acceptedAnswers: ['I have never tried sushi', 'I have never tried sushi.', 'i have never tried sushi'],
      acceptApproximate: true,
      explanation: '"Nunca" = never (entre have y el participio), "he probado" = have tried, "el sushi" = sushi.',
    },
  ],
  miniTest: [
    {
      id: 'a2-m2-l5-mt1',
      type: 'multiple_choice',
      concept: 'present perfect affirmative',
      difficulty: 1,
      prompt: 'Completa: "They ___ visited Paris."',
      promptTranslation: 'Ellos han visitado París.',
      correctAnswer: 'have',
      options: ['have', 'has', 'are'],
      explanation: 'Con "they" usamos "have". → They have visited Paris.',
    },
    {
      id: 'a2-m2-l5-mt2',
      type: 'fill_blank',
      concept: 'ever / never',
      difficulty: 2,
      prompt: 'Completa: "I have ___ been abroad."',
      promptTranslation: 'Nunca he estado en el extranjero.',
      correctAnswer: 'never',
      acceptedAnswers: ['never', 'Never'],
      explanation: '"Never" (nunca) va entre have y el participio.',
    },
    {
      id: 'a2-m2-l5-mt3',
      type: 'multiple_choice',
      concept: 'just / already / yet',
      difficulty: 2,
      prompt: 'Completa: "Have you finished ___?"',
      promptTranslation: '¿Ya has terminado?',
      correctAnswer: 'yet',
      options: ['yet', 'already', 'just'],
      explanation: '"Yet" va al final de las preguntas: Have you finished yet?',
    },
    {
      id: 'a2-m2-l5-mt4',
      type: 'multiple_choice',
      concept: 'for / since',
      difficulty: 2,
      prompt: 'Completa: "I have lived here ___ 2019."',
      promptTranslation: 'He vivido aquí desde 2019.',
      correctAnswer: 'since',
      options: ['since', 'for', 'from'],
      explanation: '"2019" es un punto de partida → usamos "since".',
    },
    {
      id: 'a2-m2-l5-mt5',
      type: 'translate',
      concept: 'present perfect review',
      difficulty: 3,
      prompt: 'Traduce: "Ella ya ha comido."',
      correctAnswer: 'She has already eaten.',
      acceptedAnswers: ['She has already eaten', 'She has already eaten.', 'she has already eaten'],
      acceptApproximate: true,
      explanation: '"Ella ya ha comido" = She has already eaten (already entre has y el participio).',
    },
    {
      id: 'a2-m2-l5-mt6',
      type: 'error_correction',
      concept: 'present perfect vs past simple',
      difficulty: 4,
      prompt: 'Corrige el error: "I have seen that film yesterday."',
      correctAnswer: 'I saw that film yesterday.',
      acceptedAnswers: ['I saw that film yesterday', 'I saw that film yesterday.', 'i saw that film yesterday'],
      acceptApproximate: true,
      explanation: 'Con "yesterday" (tiempo concreto) usamos el Past Simple: saw, no "have seen".',
    },
  ],
  reviewItems: ['a2-m2-l4'],
  prerequisites: ['a2-m2-l4'],
}
