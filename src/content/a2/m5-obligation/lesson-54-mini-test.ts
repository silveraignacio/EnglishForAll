import type { Lesson } from '../../types'

export const lesson54MiniTest: Lesson = {
  id: 'a2-m5-l4',
  moduleId: 'm5-obligation',
  order: 3,
  title: 'Mini-test: obligación y consejos',
  objective: 'Repasar "must/mustn\'t", "have to/don\'t have to" y "should/shouldn\'t" con un diálogo de consejos.',
  explanation_es: `En este mini-test repasamos las tres formas de expresar obligación y consejo:

1. MUST / MUSTN'T
   - must = obligación fuerte (hay que...).
   - mustn't = prohibición (está prohibido...).

2. HAVE TO / DON'T HAVE TO
   - have to = obligación, a menudo externa (reglas, trabajo).
   - don't have to = no es obligatorio (puedes hacerlo o no).

3. SHOULD / SHOULDN'T
   - should = consejo (deberías...).
   - shouldn't = consejo negativo (no deberías...).

Recuerda la escala:
- must = lo más fuerte (obligación).
- have to = obligación externa (también fuerte, pero de fuera).
- should = recomendación (más suave).

Y la diferencia clave:
- mustn't = prohibido (no lo hagas).
- don't have to = no es obligatorio (puedes o no).

También practicarás con un diálogo de consejos entre amigos. ¡Buena suerte!`,
  examples: [
    { english: 'You must wear a seatbelt.', spanish: 'Tienes que llevar el cinturón de seguridad.', note: 'obligación fuerte' },
    { english: "You don't have to come if you're tired.", spanish: 'No hace falta que vengas si estás cansado.', note: 'no es obligatorio' },
    { english: 'You should see a doctor.', spanish: 'Deberías ir al médico.', note: 'consejo' },
    { english: "You mustn't smoke here.", spanish: 'Está prohibido fumar aquí.', note: 'prohibición' },
  ],
  rule: `Escala de fuerza:
must (obligación fuerte) > have to (obligación externa) > should (consejo)

- mustn't = prohibido.
- don't have to = no es obligatorio.

Formas:
- must / mustn't + verbo (sin "to").
- have to / has to + verbo (con 3ª persona: has to).
- don't/doesn't have to + verbo.
- should / shouldn't + verbo (sin "to").`,
  commonMistakes: [
    { wrong: '❌ You must to go.', correct: '✅ You must go.', explanation: 'Los modales van seguidos del verbo sin "to".' },
    { wrong: '❌ He have to study.', correct: '✅ He has to study.', explanation: 'Con he/she/it usamos "has to".' },
    { wrong: '❌ "You mustn\'t come" para decir que no hace falta venir.', correct: "✅ You don't have to come.", explanation: '"Mustn\'t" es prohibición; para "no hace falta" usamos "don\'t have to".' },
  ],
  vocabulary: [
    { word: 'tired', translation_es: 'cansado', level: 'A1', category: 'advice', partOfSpeech: 'adjective', example: "You don't have to come if you're tired.", exampleTranslation: 'No hace falta que vengas si estás cansado.' },
    { word: 'uniform', translation_es: 'uniforme', level: 'A2', category: 'obligation', partOfSpeech: 'noun', example: 'We must wear a uniform.', exampleTranslation: 'Debemos llevar uniforme.' },
    { word: 'to worry', translation_es: 'preocuparse', level: 'A2', category: 'advice', partOfSpeech: 'verb', example: "You shouldn't worry.", exampleTranslation: 'No deberías preocuparte.' },
    { word: 'to improve', translation_es: 'mejorar', level: 'A2', category: 'advice', partOfSpeech: 'verb', example: 'You should improve your English.', exampleTranslation: 'Deberías mejorar tu inglés.' },
  ],
  grammarPoints: [
    {
      id: 'gp-modals-of-obligation-review',
      level: 'A2',
      name: 'Obligation & advice modals — review',
      explanation_es: 'must=obligación fuerte, mustn\'t=prohibición, have to=obligación externa, don\'t have to=no obligatorio, should=consejo, shouldn\'t=consejo negativo.',
      formula: 'must/mustn\'t + verbo | have to/has to + verbo | should/shouldn\'t + verbo',
      examples: ['You must wear a seatbelt.', "You don't have to come.", 'You should see a doctor.'],
    },
  ],
  exercises: [
    {
      id: 'a2-m5-l4-ex1',
      type: 'multiple_choice',
      concept: 'obligation modals - review',
      difficulty: 1,
      prompt: 'Completa: "You ___ wear a seatbelt." (obligación fuerte)',
      promptTranslation: 'Tienes que llevar el cinturón de seguridad.',
      correctAnswer: 'must',
      options: ['must', 'mustn\'t', 'should'],
      explanation: 'Una norma de seguridad es una obligación fuerte → must.',
    },
    {
      id: 'a2-m5-l4-ex2',
      type: 'multiple_choice',
      concept: 'obligation modals - review',
      difficulty: 2,
      prompt: 'En el museo no se permite tocar las obras. ¿Qué dice el cartel?',
      correctAnswer: "You mustn't touch the paintings.",
      options: ["You mustn't touch the paintings.", "You don't have to touch the paintings.", 'You should touch the paintings.'],
      explanation: 'Prohibición → mustn\'t: You mustn\'t touch the paintings.',
    },
    {
      id: 'a2-m5-l4-ex3',
      type: 'fill_blank',
      concept: 'obligation modals - review',
      difficulty: 2,
      prompt: 'Completa: "She ___ to study for the test." (obligación, 3ª persona)',
      promptTranslation: 'Ella tiene que estudiar para el examen.',
      correctAnswer: 'has',
      acceptedAnswers: ['has', 'have'],
      explanation: 'Con "she" usamos "has to": She has to study for the test.',
    },
    {
      id: 'a2-m5-l4-ex4',
      type: 'fill_blank',
      concept: 'obligation modals - review',
      difficulty: 2,
      prompt: 'Completa: "You ___ smoke here. It\'s forbidden."',
      promptTranslation: 'Está prohibido fumar aquí.',
      correctAnswer: "mustn't",
      acceptedAnswers: ["mustn't", 'must not', 'cannot'],
      explanation: 'Está prohibido → mustn\'t: You mustn\'t smoke here.',
    },
    {
      id: 'a2-m5-l4-ex5',
      type: 'true_false',
      concept: "mustn't vs don't have to",
      difficulty: 3,
      prompt: '"You don\'t have to come" y "You mustn\'t come" significan lo mismo.',
      correctAnswer: 'false',
      explanation: 'Falso. "Don\'t have to" = no es obligatorio. "Mustn\'t" = prohibido (no vengas).',
    },
    {
      id: 'a2-m5-l4-ex6',
      type: 'reading',
      concept: 'advice dialogue reading',
      difficulty: 4,
      prompt: 'Lee el diálogo entre Ana y Tom sobre salud y responde:',
      reading: {
        text: 'Ana: Tom, you look tired. What\'s wrong?\nTom: I can\'t sleep at night. I drink coffee after 6 p.m. and I work until 11.\nAna: You shouldn\'t drink coffee at night. You should stop at 5 p.m. and you must rest more.\nTom: And what about my back? It hurts a lot.\nAna: You have to see a doctor. Also, you don\'t have to sit all day. You can walk for ten minutes every hour.\nTom: You\'re right. I must change my habits.',
        translation: 'Ana: Tom, te ves cansado. ¿Qué pasa?\nTom: No puedo dormir por la noche. Tomo café después de las 6 de la tarde y trabajo hasta las 11.\nAna: No deberías tomar café por la noche. Deberías parar a las 5 y debes descansar más.\nTom: ¿Y qué hay de mi espalda? Me duele mucho.\nAna: Tienes que ir al médico. Además, no hace falta que te sientes todo el día. Puedes caminar diez minutos cada hora.\nTom: Tienes razón. Debo cambiar mis hábitos.',
        questions: [
          {
            id: 'a2-m5-l4-ex6-q1',
            type: 'multiple_choice',
            concept: 'advice dialogue reading',
            difficulty: 4,
            prompt: '¿Por qué no duerme Tom por la noche?',
            correctAnswer: 'Bebe café después de las 6 y trabaja hasta las 11.',
            options: ['Bebe café después de las 6 y trabaja hasta las 11.', 'Trabaja caminando diez minutos cada hora.', 'No tiene médico.'],
            explanation: 'Tom dice: "I drink coffee after 6 p.m. and I work until 11."',
          },
          {
            id: 'a2-m5-l4-ex6-q2',
            type: 'multiple_choice',
            concept: 'advice dialogue reading',
            difficulty: 4,
            prompt: '¿Qué consejo le da Ana sobre el café?',
            correctAnswer: 'No debería tomar café por la noche.',
            options: ['Debería tomar más café.', 'No debería tomar café por la noche.', 'Debe beber café a las 11.'],
            explanation: 'Ana dice: "You shouldn\'t drink coffee at night."',
          },
          {
            id: 'a2-m5-l4-ex6-q3',
            type: 'multiple_choice',
            concept: 'advice dialogue reading',
            difficulty: 4,
            prompt: '¿Qué debe hacer Tom con su espalda?',
            correctAnswer: 'Tiene que ir al médico.',
            options: ['Tiene que ir al médico.', 'No hace falta que haga nada.', 'Debe tomar más café.'],
            explanation: 'Ana dice: "You have to see a doctor."',
          },
          {
            id: 'a2-m5-l4-ex6-q4',
            type: 'multiple_choice',
            concept: 'advice dialogue reading',
            difficulty: 4,
            prompt: '¿Qué le dice Ana sobre estar sentado todo el día?',
            correctAnswer: 'No hace falta que se siente todo el día; puede caminar diez minutos cada hora.',
            options: ['Debe sentarse todo el día.', 'No hace falta que se siente todo el día; puede caminar diez minutos cada hora.', 'Está prohibido sentarse.'],
            explanation: 'Ana dice: "You don\'t have to sit all day. You can walk for ten minutes every hour."',
          },
        ],
      },
      correctAnswer: 'reading complete',
      explanation: 'Ana le da consejos: no café por la noche, ir al médico y caminar diez minutos cada hora.',
    },
    {
      id: 'a2-m5-l4-ex7',
      type: 'reorder',
      concept: 'obligation modals - review',
      difficulty: 3,
      prompt: 'Ordena las palabras: wear / must / we / a / uniform',
      promptTranslation: 'Debemos llevar uniforme.',
      correctAnswer: 'We must wear a uniform.',
      words: ['We', 'must', 'wear', 'a', 'uniform'],
      explanation: 'Orden: Sujeto + must + verbo + complemento: We must wear a uniform.',
    },
    {
      id: 'a2-m5-l4-ex8',
      type: 'error_correction',
      concept: 'obligation modals - review',
      difficulty: 3,
      prompt: 'Corrige el error: "He have to finish the project."',
      correctAnswer: 'He has to finish the project.',
      acceptedAnswers: ['He has to finish the project', 'He has to finish the project.', 'He must finish the project', 'He must finish the project.'],
      acceptApproximate: true,
      explanation: 'Con "he" usamos "has to", no "have to": He has to finish the project.',
    },
    {
      id: 'a2-m5-l4-ex9',
      type: 'match',
      concept: 'obligation modals - review',
      difficulty: 3,
      prompt: 'Relaciona cada modal con su uso:',
      pairs: [
        { left: 'must', right: 'obligación fuerte' },
        { left: "mustn't", right: 'prohibición' },
        { left: 'have to', right: 'obligación externa' },
        { left: "don't have to", right: 'no es obligatorio' },
        { left: 'should', right: 'consejo' },
        { left: "shouldn't", right: 'consejo negativo' },
      ],
      correctAnswer: 'must=obligación fuerte, mustn\'t=prohibición, have to=obligación externa, don\'t have to=no es obligatorio, should=consejo, shouldn\'t=consejo negativo',
      explanation: 'must=obligación, mustn\'t=prohibición, have to=obligación externa, don\'t have to=no obligatorio, should=consejo, shouldn\'t=consejo negativo.',
    },
  ],
  miniTest: [
    {
      id: 'a2-m5-l4-mt1',
      type: 'multiple_choice',
      concept: 'obligation modals - review',
      difficulty: 1,
      prompt: 'Completa: "You ___ see a doctor." (consejo)',
      promptTranslation: 'Deberías ir al médico.',
      correctAnswer: 'should',
      options: ['should', 'must', "mustn't"],
      explanation: 'Es un consejo → should: You should see a doctor.',
    },
    {
      id: 'a2-m5-l4-mt2',
      type: 'fill_blank',
      concept: 'obligation modals - review',
      difficulty: 2,
      prompt: 'Completa: "We ___ be quiet in the library." (obligación fuerte)',
      promptTranslation: 'Debemos estar en silencio en la biblioteca.',
      correctAnswer: 'must',
      acceptedAnswers: ['must', 'have to', 'should'],
      explanation: 'Norma de una biblioteca → must (o have to): We must be quiet.',
    },
    {
      id: 'a2-m5-l4-mt3',
      type: 'translate',
      concept: 'obligation modals - review',
      difficulty: 3,
      prompt: 'Traduce: "Deberías comer más verduras."',
      correctAnswer: 'You should eat more vegetables.',
      acceptedAnswers: ['You should eat more vegetables', 'You should eat more vegetables.', 'You ought to eat more vegetables', 'You ought to eat more vegetables.'],
      acceptApproximate: true,
      explanation: 'Consejo → should: You should eat more vegetables.',
    },
    {
      id: 'a2-m5-l4-mt4',
      type: 'error_correction',
      concept: 'obligation modals - review',
      difficulty: 3,
      prompt: 'Corrige el error: "You must to wear a uniform."',
      correctAnswer: 'You must wear a uniform.',
      acceptedAnswers: ['You must wear a uniform', 'You must wear a uniform.', 'You have to wear a uniform', 'You have to wear a uniform.'],
      acceptApproximate: true,
      explanation: 'Después de "must" el verbo va sin "to": You must wear a uniform.',
    },
    {
      id: 'a2-m5-l4-mt5',
      type: 'true_false',
      concept: "don't have to - meaning",
      difficulty: 4,
      prompt: '"I don\'t have to work tomorrow" significa que tengo prohibido trabajar.',
      correctAnswer: 'false',
      explanation: 'Falso. Significa que no es obligatorio trabajar (puedo descansar). La prohibición sería "I mustn\'t work".',
    },
  ],
  reviewItems: ['a2-m5-l3'],
  prerequisites: ['a2-m5-l3'],
}
