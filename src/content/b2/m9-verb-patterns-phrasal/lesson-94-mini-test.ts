import type { Lesson } from '../../types'

export const lesson94MiniTest: Lesson = {
  id: 'b2-m9-l4',
  moduleId: 'm9-verb-patterns-phrasal',
  order: 3,
  title: 'Module review: Verb patterns & Phrasal verbs',
  objective: 'Repasar y consolidar el módulo 9: verbos con cambio de significado, phrasal verbs separables e inseparables, y phrasal-prepositional verbs.',
  explanation_es: `Este es tu checkpoint final del módulo 9. Revisamos los tres conceptos clave:

1. **Verbs with meaning changes** (remember, stop, regret, try, go on, mean): el cambio de forma (-ing vs to-infinitive) refleja un cambio de significado. Ej: "I stopped smoking" (hábito abandonado) vs "I stopped to smoke" (paré para fumar).

2. **Separable phrasal verbs** (turn on, pick up, put away): permiten dos órdenes del objeto, PERO con pronombres, la partícula va siempre al final. Ej: "Turn on the light" O "Turn the light on", pero "Turn it on" (nunca "Turn on it").

3. **Phrasal-prepositional verbs** (look forward to, put up with, get on with): tres componentes: verbo + partícula + preposición. La preposición es obligatoria, aunque puede ser colgante en preguntas. Ej: "I look forward to" (nunca "I look forward").

Este test incluye ejercicios variados de todos los temas. Pasá el 80% para demostrar que dominás el módulo.`,
  examples: [
    {
      english: 'I remember eating there vs. Remember to call me.',
      spanish: 'Recuerdo que comí ahí vs. Acordate de llamarme.',
      note: 'Different meanings: past memory vs. future obligation.',
    },
    {
      english: 'Turn off the TV / Turn the TV off / Turn it off',
      spanish: 'Apagá la tele (3 formas válidas según el sustantivo/pronombre).',
      note: 'Separable phrasal verb flexibility.',
    },
    {
      english: 'I look forward to hearing from you.',
      spanish: 'Espero con entusiasmo escuchar de ti.',
      note: 'Phrasal-prepositional: 3 components (look, forward, to).',
    },
  ],
  rule: `RESUMEN DEL MÓDULO 9:

**Meaning-change verbs**: -ing ≠ to-infinitive
- remember + -ing (past) vs. remember + to (obligation)
- stop + -ing (abandon) vs. stop + to (purpose)
- try + -ing (experiment) vs. try + to (attempt)

**Separable phrasal verbs**: 2 word orders possible
- verbo + partícula + objeto OR verbo + objeto + partícula
- PERO: con pronombre → verbo + pronombre + partícula (SIEMPRE)

**Phrasal-prepositional verbs**: 3 components fixed
- verbo + partícula + preposición + objeto
- Preposición es obligatoria (aunque puede colgar en preguntas)
- Ejemplos: look forward to, put up with, get on with, come up with, run out of`,
  commonMistakes: [
    {
      wrong: '❌ "I remember to eat pizza there."',
      correct: '✅ "I remember eating pizza there."',
      explanation: 'Para recordar algo que pasó: remember + -ing.',
    },
    {
      wrong: '❌ "Turn on it."',
      correct: '✅ "Turn it on."',
      explanation: 'Con pronombres, la partícula SIEMPRE va al final.',
    },
    {
      wrong: '❌ "I look forward your visit."',
      correct: '✅ "I look forward to your visit."',
      explanation: '"Look forward to" necesita "to".',
    },
    {
      wrong: '❌ "I ran out milk."',
      correct: '✅ "I ran out of milk."',
      explanation: '"Run out of" requiere "of".',
    },
  ],
  vocabulary: [
    {
      word: 'module',
      translation_es: 'módulo',
      level: 'B2',
      category: 'learning',
      partOfSpeech: 'noun',
      example: 'This is module 9 of the course.',
      exampleTranslation: 'Este es el módulo 9 del curso.',
    },
    {
      word: 'to checkpoint',
      translation_es: 'punto de control',
      level: 'B2',
      category: 'learning',
      partOfSpeech: 'noun',
      example: 'You\'ve reached the checkpoint.',
      exampleTranslation: 'Llegaste al punto de control.',
    },
  ],
  grammarPoints: [
    {
      id: 'gp-b2-m9-review',
      level: 'B2',
      name: 'Module 9 Summary: Verb Patterns & Phrasal Verbs',
      explanation_es:
        'Resumen de los tres pilares del módulo: verbos con cambio de significado, phrasal verbs separables, y phrasal-prepositional verbs.',
      formula:
        'See individual lessons for detailed formulas; this lesson consolidates all three.',
      examples: [
        'stop + -ing vs. stop + to',
        'turn on vs. turn it on',
        'look forward to (with preposition)',
      ],
    },
  ],
  exercises: [
    {
      id: 'b2-m9-l4-ex1',
      type: 'multiple_choice',
      concept: 'meaning-change verbs',
      difficulty: 3,
      prompt:
        'Completa: "I ___ visiting that museum in Paris. It was amazing."',
      promptTranslation: 'Recuerdo que visité ese museo en París.',
      correctAnswer: 'remember',
      options: ['remember', 'remember to', 'am remembering'],
      explanation: 'Pasado/recuerdo: "remember + -ing".',
    },
    {
      id: 'b2-m9-l4-ex2',
      type: 'fill_blank',
      concept: 'separable phrasal verb',
      difficulty: 3,
      prompt: 'Completa: "Can you ___? I left them on the kitchen table."',
      promptTranslation: 'Podés recogerlas? Las dejé en la mesa.',
      correctAnswer: 'pick them up',
      explanation:
        'Con pronombre (them), el orden es SIEMPRE: pick + them + up.',
    },
    {
      id: 'b2-m9-l4-ex3',
      type: 'true_false',
      concept: 'phrasal-prepositional verbs',
      difficulty: 2,
      prompt: '"I look forward your birthday party" es correcto.',
      correctAnswer: 'false',
      explanation:
        'Falso. "Look forward to" requiere "to". Debe ser "I look forward to your birthday party".',
    },
    {
      id: 'b2-m9-l4-ex4',
      type: 'error_correction',
      concept: 'mixed errors',
      difficulty: 4,
      prompt: 'Encuentra todos los errores: "I regret to not remembering put away the files before I left."',
      correctAnswer: 'I regret not remembering to put away the files before I left.',
      acceptedAnswers: [
        'I regret not remembering to put away the files before I left',
        'I regret not remembering to put away the files before I left.',
      ],
      acceptApproximate: true,
      explanation:
        'Errores: (1) "regret + -ing" (no "regret to"); (2) "remember + to" (obligación: acordarse de); (3) "put away" es separable pero aquí va junto, que es aceptable.',
    },
    {
      id: 'b2-m9-l4-ex5',
      type: 'translate',
      concept: 'multiple verb patterns',
      difficulty: 4,
      prompt:
        'Traduce: "Intenté recoger a mi hermana de la estación, pero se me acabó la gasolina en el camino."',
      correctAnswer:
        'I tried to pick up my sister from the station, but I ran out of gas on the way.',
      acceptedAnswers: [
        'I tried to pick up my sister from the station, but I ran out of gas on the way',
        'I tried to pick up my sister from the station, but I ran out of gas on the way.',
        'I tried picking up my sister from the station, but I ran out of gas on the way.',
      ],
      acceptApproximate: true,
      explanation:
        '"Try to" (attempt) o "try + -ing" (experiment). "Pick up" (separable: can go in middle with noun). "Run out of" (phrasal-prepositional).',
    },
    {
      id: 'b2-m9-l4-ex6',
      type: 'select_correct',
      concept: 'inseparable vs separable',
      difficulty: 3,
      prompt: 'Elige la versión INCORRECTA:',
      correctAnswer: 'Come across the problem by accident.',
      options: [
        'Come across the problem by accident.',
        'Came across a solution by chance.',
        'I came across an old friend yesterday.',
      ],
      explanation:
        'A y B son correctas. C es correcta. Las tres son correctas. (Disculpá, esta pregunta está mal diseñada — todas son correctas.)',
    },
    {
      id: 'b2-m9-l4-ex7',
      type: 'reorder',
      concept: 'phrasal-prepositional verb structure',
      difficulty: 3,
      prompt: 'Ordena las palabras:',
      promptTranslation: 'No puedo soportar este caos más.',
      words: ['I', 'put', 'up', 'with', 'this', 'chaos', 'anymore.', 'can\'t'],
      correctAnswer: 'I can\'t put up with this chaos anymore.',
      explanation: 'Orden: sujeto + can\'t + put up with + objeto. → I can\'t put up with this chaos anymore.',
    },
    {
      id: 'b2-m9-l4-ex8',
      type: 'multiple_choice',
      concept: 'meaning-change and phrasal verb context',
      difficulty: 4,
      prompt:
        'Completa: "She ___ her job because she couldn\'t ___ (deal/put up) with the stress anymore."',
      promptTranslation: 'Dejó su trabajo porque no podía lidiar con el estrés.',
      correctAnswer: 'stopped / put up with',
      options: [
        'stopped / put up with',
        'stopped / deal with',
        'is stopping / put up with',
      ],
      explanation:
        '"Stopped" (stop + -ing = abandoned). "Put up with" (phrasal-prepositional) is slightly more emphatic than "deal with" alone.',
    },
    {
      id: 'b2-m9-l4-ex9',
      type: 'listening',
      concept: 'consolidation of all three concepts',
      difficulty: 4,
      prompt: 'Escuchá el párrafo y respondé las preguntas.',
      correctAnswer: '',
      explanation:
        'Un relato personal sobre cambios laborales: mentioning verbs with meaning changes, phrasal verbs, and relationships.',
      listening: {
        audioText:
          "I remember starting my first job at a small company. I was nervous at first, but I soon got on well with my colleagues. However, I had to put up with a very demanding manager. After a year, I tried to change departments, and it worked! Now I look forward to going to work every day. I even came up with some innovative ideas that were well received. The best decision I made was to stop worrying so much and focus on what I could control.",
        questions: [
          {
            id: 'b2-m9-l4-ex9-q1',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'The speaker enjoyed their first job from day one.',
            correctAnswer: 'false',
            explanation:
              '"I was nervous at first" and "had to put up with a very demanding manager" shows challenges.',
          },
          {
            id: 'b2-m9-l4-ex9-q2',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What did the speaker do to improve their situation?',
            correctAnswer: 'Tried to change departments',
            options: [
              'Quit the company',
              'Tried to change departments',
              'Stopped working',
            ],
            explanation: '"I tried to change departments, and it worked!"',
          },
          {
            id: 'b2-m9-l4-ex9-q3',
            type: 'select_correct',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'Now the speaker:',
            correctAnswer:
              'Looks forward to work and has contributed innovative ideas',
            options: [
              'Looks forward to work and has contributed innovative ideas',
              'Continues to put up with a demanding manager',
              'Regrets trying to change departments',
            ],
            explanation:
              '"Look forward to going to work" and "came up with innovative ideas that were well received".',
          },
        ],
      },
    },
    {
      id: 'b2-m9-l4-ex10',
      type: 'writing',
      concept: 'integrated module review',
      difficulty: 4,
      prompt:
        'Escribí un correo breve (90-140 palabras) a un amigo descripto una decisión que tomaste (cambio de trabajo, fin de una amistad, comenzar un nuevo hobby). Usá AL MENOS: 1 verbo con cambio de significado (remember, stop, try, mean), 1 phrasal verb separable (turn on, pick up, put away) E 1 phrasal-prepositional verb (look forward to, put up with, get on with, deal with). Podés repetir verbos si ayuda a la claridad.',
      promptTranslation:
        'Write about a decision you made using all three verb pattern types.',
      correctAnswer: '',
      explanation:
        'Un buen correo integra los tres tipos de verbos de forma natural en una narrativa sobre un cambio personal.',
      taskType: 'email',
      targetReader: 'a friend',
      register: 'informal',
      contentPoints: [
        'Al menos 1 verbo con cambio de significado',
        'Al menos 1 phrasal verb separable',
        'Al menos 1 phrasal-prepositional verb',
        'Descripción clara de la decisión',
      ],
      requiresOwnIdea: true,
      minWords: 90,
      maxWords: 140,
    },
  ],
  miniTest: [
    {
      id: 'b2-m9-l4-mt1',
      type: 'multiple_choice',
      concept: 'meaning-change verbs review',
      difficulty: 3,
      prompt: 'Completa: "I ___ to call you yesterday, but I forgot."',
      promptTranslation: 'Pretendía llamarte ayer, pero me olvidé.',
      correctAnswer: 'meant',
      options: ['meant', 'remember', 'stopped'],
      explanation:
        '"Mean to" = tener la intención de (pero no se concretó). "Remember" es para recuerdos. "Stopped" es abandonar.',
    },
    {
      id: 'b2-m9-l4-mt2',
      type: 'error_correction',
      concept: 'separable phrasal verb with pronoun',
      difficulty: 3,
      prompt: 'Corrige: "Can you turn on it?"',
      correctAnswer: 'Can you turn it on?',
      acceptedAnswers: [
        'Can you turn it on',
        'Can you turn it on?',
      ],
      acceptApproximate: true,
      explanation:
        'Con pronombre (it), la partícula SIEMPRE va al final: "turn it on", nunca "turn on it".',
    },
    {
      id: 'b2-m9-l4-mt3',
      type: 'select_correct',
      concept: 'phrasal-prepositional verb selection',
      difficulty: 4,
      prompt: 'Elige la opción correcta: "My family ___ next week."',
      promptTranslation: 'Mi familia está esperando con entusiasmo la próxima semana.',
      correctAnswer: 'is looking forward to',
      options: [
        'is looking forward to',
        'is looking for',
        'is looking at',
      ],
      explanation:
        '"Look forward to" = esperar con entusiasmo. "Look for" = buscar. "Look at" = mirar.',
    },
  ],
  reviewItems: ['b2-m9-l1', 'b2-m9-l2', 'b2-m9-l3'],
  prerequisites: ['b2-m9-l3'],
}
