import type { Lesson } from '../../types'

export const lesson101ReflexivePronouns: Lesson = {
  id: 'a2-m10-l1',
  moduleId: 'm10-reflexives',
  order: 0,
  title: 'Pronombres reflexivos (myself, yourself, himself...)',
  objective: 'Usar los pronombres reflexivos (myself, yourself, himself, herself, itself, ourselves, themselves) cuando el sujeto y el objeto de la acción son la misma persona.',
  explanation_es: `Los pronombres reflexivos se usan cuando la persona que hace la acción y la persona que la recibe son la misma.

En español muchas veces usamos "se", "me", "te", "nos": "me corté", "se presentó", "nos divertimos". En inglés, para esta idea usamos estas palabras:

- I → myself (yo → me / a mí mismo): I hurt myself. = Me hice daño.
- You → yourself (tú → te / a ti mismo): You should believe in yourself. = Deberías creer en ti mismo.
- He → himself (él → se / a sí mismo): He shaved himself. = Él se afeitó.
- She → herself (ella → se / a sí misma): She introduced herself. = Ella se presentó.
- It → itself (cosa/animal → se): The cat washed itself. = El gato se lavó.
- We → ourselves (nosotros → nos / a nosotros mismos): We enjoyed ourselves. = Nos divertimos.
- They → themselves (ellos → se / a sí mismos): They organized themselves. = Se organizaron.

La clave: si el sujeto y el objeto son la misma persona o cosa, usamos el reflexivo. Por ejemplo, "She introduced herself" = ella presentó a ella misma. No decimos "She introduced her" porque "her" sería otra persona.

¡Ojo con "themselves"! No existe la palabra "themself". Siempre es "themselves".`,
  examples: [
    { english: 'I hurt myself.', spanish: 'Me hice daño.', note: 'yo me lastimé a mí mismo' },
    { english: 'She introduced herself at the meeting.', spanish: 'Ella se presentó en la reunión.' },
    { english: 'We enjoyed ourselves at the party.', spanish: 'Nos divertimos en la fiesta.', note: 'enjoy + reflexivo = divertirse' },
    { english: 'He shaved himself this morning.', spanish: 'Él se afeitó esta mañana.' },
    { english: 'The dog looked at itself in the mirror.', spanish: 'El perro se miró en el espejo.' },
    { english: 'They built the house themselves.', spanish: 'Ellos construyeron la casa ellos mismos.' },
  ],
  rule: `Regla:
- I → myself
- You → yourself
- He → himself
- She → herself
- It → itself
- We → ourselves
- They → themselves

Usamos el reflexivo cuando el sujeto y el objeto son la misma persona o cosa. Nunca digas "themself"; la forma correcta es "themselves".`,
  commonMistakes: [
    { wrong: '❌ I enjoyed me at the party.', correct: '✅ I enjoyed myself at the party.', explanation: 'Con "enjoy" en el sentido de divertirse usamos el reflexivo: "enjoy yourself", "enjoy ourselves". No decimos "enjoy me".' },
    { wrong: '❌ They organized themself.', correct: '✅ They organized themselves.', explanation: 'No existe "themself". Con "they" (plural) la forma es "themselves".' },
    { wrong: '❌ She introduced her at the meeting.', correct: '✅ She introduced herself at the meeting.', explanation: 'Si ella presenta a ella misma, usamos "herself" (reflexivo). "Her" indicaría otra persona.' },
  ],
  vocabulary: [
    { word: 'myself', translation_es: 'me / a mí mismo', level: 'A2', category: 'reflexive pronouns', partOfSpeech: 'pronoun', example: 'I made this cake myself.', exampleTranslation: 'Hice este pastel yo mismo.' },
    { word: 'yourself', translation_es: 'te / a ti mismo', level: 'A2', category: 'reflexive pronouns', partOfSpeech: 'pronoun', example: 'Be careful! Don\'t hurt yourself.', exampleTranslation: '¡Ten cuidado! No te hagas daño.' },
    { word: 'himself', translation_es: 'se / a sí mismo', level: 'A2', category: 'reflexive pronouns', partOfSpeech: 'pronoun', example: 'He fixed the car himself.', exampleTranslation: 'Él arregló el coche él mismo.' },
    { word: 'herself', translation_es: 'se / a sí misma', level: 'A2', category: 'reflexive pronouns', partOfSpeech: 'pronoun', example: 'She introduced herself.', exampleTranslation: 'Ella se presentó.' },
    { word: 'itself', translation_es: 'se (cosa o animal)', level: 'A2', category: 'reflexive pronouns', partOfSpeech: 'pronoun', example: 'The cat washed itself.', exampleTranslation: 'El gato se lavó.' },
    { word: 'ourselves', translation_es: 'nos / a nosotros mismos', level: 'A2', category: 'reflexive pronouns', partOfSpeech: 'pronoun', example: 'We enjoyed ourselves a lot.', exampleTranslation: 'Nos divertimos mucho.' },
    { word: 'themselves', translation_es: 'se / a sí mismos', level: 'A2', category: 'reflexive pronouns', partOfSpeech: 'pronoun', example: 'They decorated the room themselves.', exampleTranslation: 'Ellos decoraron la habitación ellos mismos.' },
  ],
  grammarPoints: [
    {
      id: 'gp-reflexive-pronouns',
      level: 'A2',
      name: 'Reflexive pronouns',
      explanation_es: 'Los pronombres reflexivos se usan cuando el sujeto y el objeto de la acción son la misma persona o cosa.',
      formula: 'I→myself, You→yourself, He→himself, She→herself, It→itself, We→ourselves, They→themselves',
      examples: ['I hurt myself.', 'She introduced herself.', 'We enjoyed ourselves at the party.'],
    },
  ],
  exercises: [
    {
      id: 'a2-m10-l1-ex1',
      type: 'multiple_choice',
      concept: 'reflexive pronouns',
      difficulty: 1,
      prompt: 'Completa: "I hurt ___."',
      promptTranslation: 'Me hice daño.',
      correctAnswer: 'myself',
      options: ['myself', 'me', 'mine'],
      explanation: 'Con "I" usamos el reflexivo "myself". → I hurt myself. = Me hice daño (yo me lastimé a mí mismo).',
    },
    {
      id: 'a2-m10-l1-ex2',
      type: 'multiple_choice',
      concept: 'reflexive pronouns',
      difficulty: 1,
      prompt: 'Completa: "She introduced ___ at the meeting."',
      promptTranslation: 'Ella se presentó en la reunión.',
      correctAnswer: 'herself',
      options: ['her', 'herself', 'hers'],
      explanation: 'Si ella se presenta a sí misma, usamos el reflexivo "herself". → She introduced herself.',
    },
    {
      id: 'a2-m10-l1-ex3',
      type: 'fill_blank',
      concept: 'reflexive pronouns',
      difficulty: 2,
      prompt: 'Completa: "We enjoyed ___ at the party."',
      promptTranslation: 'Nos divertimos en la fiesta.',
      correctAnswer: 'ourselves',
      acceptedAnswers: ['ourselves', 'Our selves'],
      explanation: 'Con "we" el reflexivo es "ourselves". → We enjoyed ourselves. = Nos divertimos.',
    },
    {
      id: 'a2-m10-l1-ex4',
      type: 'fill_blank',
      concept: 'reflexive pronouns',
      difficulty: 2,
      prompt: 'Completa: "The cat washed ___ this morning."',
      promptTranslation: 'El gato se lavó esta mañana.',
      correctAnswer: 'itself',
      acceptedAnswers: ['itself', 'Its self'],
      explanation: 'Para un animal o cosa usamos "itself". → The cat washed itself.',
    },
    {
      id: 'a2-m10-l1-ex5',
      type: 'match',
      concept: 'reflexive pronouns',
      difficulty: 2,
      prompt: 'Relaciona cada sujeto con su pronombre reflexivo.',
      promptTranslation: 'Match each subject with its reflexive pronoun.',
      correctAnswer: 'I=myself, You=yourself, He=himself, She=herself, It=itself, They=themselves',
      pairs: [
        { left: 'I', right: 'myself' },
        { left: 'You', right: 'yourself' },
        { left: 'He', right: 'himself' },
        { left: 'She', right: 'herself' },
        { left: 'It', right: 'itself' },
        { left: 'They', right: 'themselves' },
      ],
      explanation: 'Cada pronombre personal tiene su reflexivo: I→myself, You→yourself, He→himself, She→herself, It→itself, They→themselves.',
    },
    {
      id: 'a2-m10-l1-ex6',
      type: 'translate',
      concept: 'reflexive pronouns',
      difficulty: 3,
      prompt: 'Traduce: "Ella se presentó."',
      promptTranslation: 'She introduced herself.',
      correctAnswer: 'She introduced herself.',
      acceptedAnswers: ['She introduced herself', 'She introduced herself.', 'She introduced her self', 'she introduced herself'],
      acceptApproximate: true,
      explanation: '"Presentarse a sí misma" = introduce herself. → She introduced herself. (No "She introduced her", porque "her" sería otra persona.)',
    },
    {
      id: 'a2-m10-l1-ex7',
      type: 'error_correction',
      concept: 'reflexive pronouns',
      difficulty: 3,
      prompt: 'Corrige el error: "I enjoyed me at the party."',
      promptTranslation: 'Me divertí en la fiesta.',
      correctAnswer: 'I enjoyed myself at the party.',
      acceptedAnswers: ['I enjoyed myself at the party', 'I enjoyed myself', 'i enjoyed myself at the party.'],
      acceptApproximate: true,
      explanation: 'Con "enjoy" en el sentido de divertirse usamos el reflexivo: I enjoyed myself at the party.',
    },
    {
      id: 'a2-m10-l1-ex8',
      type: 'true_false',
      concept: 'reflexive pronouns',
      difficulty: 2,
      prompt: 'La palabra "themself" es una forma correcta en inglés.',
      promptTranslation: '"Themself" is a correct English word.',
      correctAnswer: 'false',
      acceptedAnswers: ['False', 'FALSE', 'f'],
      explanation: 'Falso. "Themself" no existe. La forma correcta con "they" es "themselves".',
    },
    {
      id: 'a2-m10-l1-ex9',
      type: 'multiple_choice',
      concept: 'reflexive pronouns',
      difficulty: 3,
      prompt: 'Completa: "They built the house ___."',
      promptTranslation: 'Ellos construyeron la casa ellos mismos.',
      correctAnswer: 'themselves',
      options: ['themselves', 'themself', 'them'],
      explanation: 'Con "they" usamos "themselves". → They built the house themselves.',
    },
    {
      id: 'a2-m10-l1-ex10',
      type: 'fill_blank',
      concept: 'reflexive pronouns',
      difficulty: 3,
      prompt: 'Completa (hablando con una persona): "Be careful! Don\'t hurt ___!"',
      promptTranslation: '¡Ten cuidado! ¡No te hagas daño!',
      correctAnswer: 'yourself',
      acceptedAnswers: ['yourself', 'Yourself'],
      explanation: 'Dirigiéndonos a "you", usamos "yourself". → Don\'t hurt yourself!',
    },
  ],
  miniTest: [
    {
      id: 'a2-m10-l1-mt1',
      type: 'multiple_choice',
      concept: 'reflexive pronouns',
      difficulty: 2,
      prompt: 'Completa: "He shaved ___ this morning."',
      promptTranslation: 'Él se afeitó esta mañana.',
      correctAnswer: 'himself',
      options: ['him', 'himself', 'his'],
      explanation: 'Con "he" usamos "himself". → He shaved himself.',
    },
    {
      id: 'a2-m10-l1-mt2',
      type: 'fill_blank',
      concept: 'reflexive pronouns',
      difficulty: 2,
      prompt: 'Completa: "My sister and I enjoyed ___ at the party."',
      promptTranslation: 'Mi hermana y yo nos divertimos en la fiesta.',
      correctAnswer: 'ourselves',
      acceptedAnswers: ['ourselves', 'Our selves'],
      explanation: '"My sister and I" = we → ourselves. → We enjoyed ourselves.',
    },
    {
      id: 'a2-m10-l1-mt3',
      type: 'multiple_choice',
      concept: 'reflexive pronouns',
      difficulty: 3,
      prompt: '¿Cuál es la frase correcta?',
      promptTranslation: 'Which sentence is correct?',
      correctAnswer: 'I cut myself with the knife.',
      options: ['I cut me with the knife.', 'I cut myself with the knife.', 'I cut mineself with the knife.'],
      explanation: 'Si el sujeto (I) recibe la acción, usamos el reflexivo "myself". → I cut myself.',
    },
    {
      id: 'a2-m10-l1-mt4',
      type: 'error_correction',
      concept: 'reflexive pronouns',
      difficulty: 3,
      prompt: 'Corrige el error: "They bought a house for themself."',
      promptTranslation: 'Compraron una casa para ellos mismos.',
      correctAnswer: 'They bought a house for themselves.',
      acceptedAnswers: ['They bought a house for themselves', 'They bought a house for themselves.', 'they bought a house for themselves'],
      acceptApproximate: true,
      explanation: '"Themself" no existe. Con "they" usamos "themselves". → They bought a house for themselves.',
    },
    {
      id: 'a2-m10-l1-mt5',
      type: 'translate',
      concept: 'reflexive pronouns',
      difficulty: 3,
      prompt: 'Traduce: "Nos divertimos mucho."',
      promptTranslation: 'We enjoyed ourselves a lot.',
      correctAnswer: 'We enjoyed ourselves a lot.',
      acceptedAnswers: ['We enjoyed ourselves a lot', 'We enjoyed ourselves', 'we enjoyed ourselves a lot.', 'We had a good time'],
      acceptApproximate: true,
      explanation: '"Divertirse" se expresa con "enjoy + reflexivo": We enjoyed ourselves a lot.',
    },
  ],
  reviewItems: ['a2-m9-l4'],
  prerequisites: ['a2-m9-l4'],
}
