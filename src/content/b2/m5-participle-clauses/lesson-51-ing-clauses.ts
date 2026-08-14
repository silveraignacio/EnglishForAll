import type { Lesson } from '../../types'

export const lesson51IngClauses: Lesson = {
  id: 'b2-m5-l1',
  moduleId: 'm5-participle-clauses',
  order: 0,
  title: 'Cláusulas de -ing: razón, circunstancia y acción simultánea',
  objective: 'Usar cláusulas de -ing al inicio para expresar razón o circunstancia (Feeling tired, she left early), y "after having + participio" / "being + participio" para referencia pasada.',
  explanation_es: `Las cláusulas de participio (-ing) son una forma más elegante y compacta que las oraciones subordinadas completas. En lugar de escribir "Because she felt tired, she left early", puedes decir "Feeling tired, she left early" — el significado es el mismo, pero el texto es más natural y sofisticado.

Estructura básica:
- -ing clause (al inicio) + coma + oración principal

Ejemplos:
- Feeling tired, she left early. = Sintiendo cansancio, se fue temprano. (razón)
- Seeing the broken window, he called the police. = Viendo la ventana rota, llamó a la policía. (causa)
- Walking down the street, I met an old friend. = Caminando por la calle, conocí a un viejo amigo. (acción simultánea)

Puntos importantes:

1. La cláusula de -ing y la oración principal tienen EL MISMO SUJETO. "Feeling tired, she left early" tiene sentido porque SHE feels tired Y SHE left early. Si el sujeto es distinto, no puedes usar esta estructura.

2. El sujeto de la -ing clause es IMPLÍCITO (no se menciona porque es el mismo que el de la oración principal).

3. "After having + participio pasado" se usa cuando quieres que la -ing clause exprese una acción COMPLETA en el pasado, antes de la acción principal:
   - "After having finished his homework, he watched TV." = Después de haber terminado la tarea, miró TV.

4. "Being + participio pasado" se usa cuando la cláusula describe una CONDICIÓN O ESTADO pasado:
   - "Being exhausted by the journey, she slept for two days." = Estando agotada por el viaje, durmió dos días.

5. Para negar una -ing clause, usamos "not + -ing":
   - "Not knowing his address, I couldn't visit him." = No sabiendo su dirección, no pude visitarlo.

6. COMPARACIÓN CON EL ESPAÑOL: el español a menudo usa un gerundio (sintiendo, viendo, andando), que es muy similar. Pero en inglés la -ing clause es más moderna y literaria que la traducción palabra por palabra con gerundio, especialmente en B2.`,
  examples: [
    { english: 'Feeling tired, she left early.', spanish: 'Sintiendo cansancio, se fue temprano.' },
    { english: 'Seeing the broken window, he called the police.', spanish: 'Viendo la ventana rota, llamó a la policía.' },
    { english: 'After having finished his homework, he watched TV.', spanish: 'Después de haber terminado la tarea, miró televisión.' },
    { english: 'Being exhausted by the journey, she slept for two days.', spanish: 'Estando agotada por el viaje, durmió dos días.' },
    { english: 'Not knowing his address, I couldn\'t visit him.', spanish: 'No sabiendo su dirección, no pude visitarlo.' },
    { english: 'Having spent all her money, she couldn\'t buy a ticket.', spanish: 'Habiendo gastado todo su dinero, no pudo comprar una entrada.' },
  ],
  rule: `Fórmula:
-ing clause (razón/circunstancia) + coma + oración principal

Afirmativa: Feeling tired, she left early.
Negativa: Not feeling well, he stayed home.
Pasada (after having): After having eaten, we went for a walk.
Pasada (being): Being confused, he asked for help.

Reglas:
1. Sujeto de la -ing clause = sujeto de la oración principal (implícito).
2. -ing clause típicamente al inicio, separada por coma.
3. "After having + participle" para acciones completas en el pasado.
4. "Being + participle" para estados/condiciones pasadas.
5. Negar con "not + -ing".`,
  commonMistakes: [
    { wrong: '❌ Feeling tired, the movie was long.', correct: '✅ Feeling tired, I found the movie long.', explanation: 'El sujeto de la -ing clause debe ser el mismo que el de la oración principal. "Feeling tired" se refiere a una persona, no a una película.' },
    { wrong: '❌ Having finished the homework, we went to play.', correct: '✅ Having finished the homework, we went to play.', explanation: 'Este es correcto en realidad. Pero si traduces literalmente "Habiendo terminado..." es mejor usar "After having finished..."' },
    { wrong: '❌ Not know the answer, she raised her hand.', correct: '✅ Not knowing the answer, she raised her hand.', explanation: 'Siempre usa -ing después de not en una -ing clause: "not knowing", no "not know".' },
    { wrong: '❌ Seeing the accident, he stopped the car.', correct: '✅ Seeing the accident, he stopped the car.', explanation: 'Este es correcto. Pero atento: si escribes "The accident being seen...", se ve extraño — mejor es "He saw the accident and stopped the car."' },
  ],
  vocabulary: [
    { word: 'to exhaust', translation_es: 'agotar', level: 'B2', category: 'participles', partOfSpeech: 'verb', example: 'The long journey exhausted him.', exampleTranslation: 'El viaje largo lo agotó.' },
    { word: 'exhausted', translation_es: 'agotado, extenuado', level: 'B2', category: 'participles', partOfSpeech: 'adjective', example: 'Being exhausted, he fell asleep immediately.', exampleTranslation: 'Estando agotado, se quedó dormido de inmediato.' },
    { word: 'implicit', translation_es: 'implícito, sobreentendido', level: 'B2', category: 'grammar', partOfSpeech: 'adjective', example: 'The subject of the participle clause is implicit.', exampleTranslation: 'El sujeto de la cláusula de participio es implícito.' },
    { word: 'simultaneous', translation_es: 'simultáneo', level: 'B2', category: 'grammar', partOfSpeech: 'adjective', example: 'The two actions were simultaneous.', exampleTranslation: 'Las dos acciones fueron simultáneas.' },
    { word: 'to occur', translation_es: 'ocurrir, suceder', level: 'B2', category: 'participles', partOfSpeech: 'verb', example: 'A strange thing occurred as we were leaving.', exampleTranslation: 'Algo extraño ocurrió cuando nos íbamos.' },
  ],
  grammarPoints: [
    {
      id: 'gp-b2-ing-clauses-reason',
      level: 'B2',
      name: '-ing clauses for reason and circumstance',
      explanation_es: 'Usar -ing clause al inicio para expresar razón, causa o circunstancia de la acción principal de forma más elegante que una oración subordinada.',
      formula: '-ing clause + comma + main clause (same subject)',
      examples: ['Feeling tired, she left early.', 'Seeing the sign, he stopped.', 'Not knowing the answer, she guessed.'],
    },
    {
      id: 'gp-b2-after-having-participle',
      level: 'B2',
      name: 'After having + past participle',
      explanation_es: 'Expresar una acción completada en el pasado antes de otra acción pasada, de forma más elegante.',
      formula: 'After having + past participle + comma + main clause',
      examples: ['After having eaten, we went for a walk.', 'After having finished the project, she took a break.'],
    },
  ],
  exercises: [
    {
      id: 'b2-m5-l1-ex1',
      type: 'multiple_choice',
      concept: '-ing clause structure',
      difficulty: 2,
      prompt: 'Completa: "___ tired, she decided to go home early."',
      promptTranslation: 'Sintiendo cansancio, decidió irse a casa temprano.',
      correctAnswer: 'Feeling',
      options: ['Feel', 'Feeling', 'Felt', 'Having felt'],
      explanation: 'Para una cláusula de -ing que expresa razón/circunstancia presente, usamos el -ing simple: "Feeling".',
    },
    {
      id: 'b2-m5-l1-ex2',
      type: 'fill_blank',
      concept: '-ing clause with not',
      difficulty: 3,
      prompt: 'Completa: "Not ___ his phone number, I couldn\'t call him."',
      promptTranslation: 'No sabiendo su número de teléfono, no pude llamarlo.',
      correctAnswer: 'knowing',
      explanation: 'Para negar una -ing clause, usamos "not + -ing": "not knowing".',
    },
    {
      id: 'b2-m5-l1-ex3',
      type: 'error_correction',
      concept: '-ing clause subject agreement',
      difficulty: 4,
      prompt: 'Encuentra el error: "Feeling tired, the movie seemed long."',
      correctAnswer: 'Feeling tired, I found the movie long.',
      acceptedAnswers: [
        'Feeling tired, I found the movie long',
        'Feeling tired, I found the movie long.',
        'Because I felt tired, the movie seemed long.',
        'I felt tired, so the movie seemed long.',
      ],
      acceptApproximate: true,
      explanation: 'El sujeto de la -ing clause debe ser el mismo que el de la oración principal. "Feeling" se refiere a una persona, no a una película.',
    },
    {
      id: 'b2-m5-l1-ex4',
      type: 'translate',
      concept: '-ing clause translation',
      difficulty: 3,
      prompt: 'Traduce: "Viendo la puerta rota, llamó a la policía."',
      correctAnswer: 'Seeing the broken door, he called the police.',
      acceptedAnswers: [
        'Seeing the broken door, he called the police',
        'Seeing the broken door, he called the police.',
        'When he saw the broken door, he called the police.',
      ],
      acceptApproximate: true,
      explanation: 'Cláusula de -ing para expresar la razón o circunstancia que motivó la acción principal.',
    },
    {
      id: 'b2-m5-l1-ex5',
      type: 'reorder',
      concept: '-ing clause word order',
      difficulty: 3,
      prompt: 'Ordena las palabras:',
      promptTranslation: 'Cansada, ella decidió descansar.',
      words: ['Exhausted,', 'she', 'decided', 'to', 'rest.'],
      correctAnswer: 'Exhausted, she decided to rest.',
      explanation: 'Orden: -ing clause (Exhausted) + coma + oración principal (she decided to rest).',
    },
    {
      id: 'b2-m5-l1-ex6',
      type: 'select_correct',
      concept: '-ing clause vs full subordinate',
      difficulty: 4,
      prompt: '¿Cuál es más elegante y apropiada para nivel B2?',
      correctAnswer: 'Finishing his meal, he left the restaurant.',
      options: ['Finishing his meal, he left the restaurant.', 'He finished his meal and left the restaurant.', 'Because he finished his meal, he left the restaurant.'],
      explanation: 'La -ing clause es más elegante y sofisticada que una oración coordinada o subordinada completa.',
    },
    {
      id: 'b2-m5-l1-ex7',
      type: 'multiple_choice',
      concept: 'After having + participle',
      difficulty: 4,
      prompt: 'Completa: "___ having finished the project, she took a well-deserved break."',
      promptTranslation: 'Después de haber terminado el proyecto, se tomó un merecido descanso.',
      correctAnswer: 'After',
      options: ['After', 'Having', 'Being', 'Since'],
      explanation: 'Usamos "After having + participio" para expresar una acción completada en el pasado antes de otra.',
    },
    {
      id: 'b2-m5-l1-ex8',
      type: 'true_false',
      concept: '-ing clause subject',
      difficulty: 2,
      prompt: 'El sujeto de la -ing clause y el de la oración principal SIEMPRE deben ser iguales.',
      correctAnswer: 'true',
      explanation: 'Correcto. En una -ing clause estándar, ambos sujetos son idénticos (el de la -ing clause es implícito).',
    },
    {
      id: 'b2-m5-l1-ex9',
      type: 'listening',
      concept: '-ing clause listening comprehension',
      difficulty: 3,
      prompt: 'Escuchá el audio y respondé las preguntas.',
      correctAnswer: '',
      explanation: 'Una historia sobre lo que ocurrió cuando alguien llegó tarde a la estación.',
      listening: {
        audioText:
          "Sarah was running late for her train. Seeing the station entrance ahead, she hurried forward. But then, noticing a small child sitting alone on a bench, she stopped. After having made sure the child was safe and finding his mother, she rushed to the platform. Her train was still there, and boarding quickly, she finally made it.",
        questions: [
          {
            id: 'b2-m5-l1-ex9-q1',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'Why did Sarah stop?',
            correctAnswer: 'She saw a small child alone',
            options: ['She saw a small child alone', 'She missed her train', 'She wanted to rest'],
            explanation: '"Noticing a small child sitting alone on a bench, she stopped."',
          },
          {
            id: 'b2-m5-l1-ex9-q2',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'Sarah missed her train.',
            correctAnswer: 'false',
            explanation: '"Her train was still there, and boarding quickly, she finally made it."',
          },
          {
            id: 'b2-m5-l1-ex9-q3',
            type: 'select_correct',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What did Sarah do after finding the child\'s mother?',
            correctAnswer: 'She rushed to the platform',
            options: ['She rushed to the platform', 'She waited with the child', 'She missed her train'],
            explanation: '"After having made sure the child was safe and finding his mother, she rushed to the platform."',
          },
        ],
      },
    },
    {
      id: 'b2-m5-l1-ex10',
      type: 'writing',
      concept: '-ing clause writing',
      difficulty: 4,
      prompt: 'Escribí una breve anécdota (150-200 palabras) sobre algo que ocurrió mientras viajabas o caminabas. Usá al menos 3 cláusulas de -ing para expresar razón, circunstancia o acciones simultáneas. Por ejemplo: "Walking down the street, I noticed...", "Seeing the sign, I..."',
      correctAnswer: '',
      explanation: 'Un buen relato usa -ing clauses de forma natural para conectar acciones y expresar causalidad de forma elegante.',
      taskType: 'story',
      targetReader: 'a friend or classmate',
      register: 'informal',
      contentPoints: ['Al menos 3 -ing clauses distintas', 'Acciones claras conectadas de forma lógica', 'Voz narrativa coherente'],
      requiresOwnIdea: true,
      minWords: 80,
      maxWords: 120,
    },
    {
      id: 'b2-m5-l1-ex11',
      type: 'speaking',
      concept: '-ing clause pronunciation',
      difficulty: 2,
      prompt: 'Escuchá la frase modelo y repetila en voz alta.',
      correctAnswer: 'Feeling tired, she decided to go home.',
      explanation: 'Practicá la entonación natural: la -ing clause cae ligeramente, luego la oración principal sube.',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b2-m5-l1-mt1',
      type: 'multiple_choice',
      concept: '-ing clause',
      difficulty: 3,
      prompt: 'Completa: "___ the letter, she smiled."',
      promptTranslation: 'Leyendo la carta, sonrió.',
      correctAnswer: 'Reading',
      options: ['Read', 'Reading', 'To read', 'Having read'],
      explanation: 'Para una acción simultánea o causa presente, usa -ing simple: "Reading".',
    },
    {
      id: 'b2-m5-l1-mt2',
      type: 'error_correction',
      concept: '-ing clause subject',
      difficulty: 4,
      prompt: 'Corrige: "Walking to school, my dog was excited."',
      correctAnswer: 'Walking to school, I was excited.',
      acceptedAnswers: [
        'Walking to school, I was excited',
        'Walking to school, I was excited.',
        'My dog was excited as I walked to school.',
      ],
      acceptApproximate: true,
      explanation: 'El sujeto de "Walking" (yo) debe ser el mismo que el de la oración principal (yo). No puede ser "mi perro".',
    },
    {
      id: 'b2-m5-l1-mt3',
      type: 'true_false',
      concept: 'After having + participle',
      difficulty: 3,
      prompt: '"After having eaten, we watched a movie" significa que comimos y luego miramos una película (en ese orden).',
      correctAnswer: 'true',
      explanation: 'Correcto. "After having + participio" expresa una acción completada ANTES de la acción principal.',
    },
  ],
  reviewItems: ['b1-m1-l1', 'b1-m2-l2'],
  prerequisites: ['b1-m1-l1'],
}
