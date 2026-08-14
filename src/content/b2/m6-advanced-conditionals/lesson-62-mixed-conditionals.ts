import type { Lesson } from '../../types'

export const lesson62MixedConditionals: Lesson = {
  id: 'b2-m6-l2',
  moduleId: 'm6-advanced-conditionals',
  order: 1,
  title: 'Mixed Conditionals: Combining Past & Present',
  objective: 'Utilizar condicionales mixtas para expresar situaciones donde la condición pasada afecta el resultado presente (y viceversa), combinando estructuras del segundo y tercer condicional.',
  explanation_es: `Ya conocés el segundo condicional (situaciones presentes imaginarias: if I had money, I would travel) y el tercer condicional (situaciones pasadas imaginarias: if I had studied, I would have passed).

Pero en la vida real, a veces una CONDICIÓN PASADA tiene un RESULTADO PRESENTE — o viceversa. Eso es lo que llamamos CONDICIONALES MIXTAS.

TIPO 1: CONDICIÓN PASADA + RESULTADO PRESENTE
Estructura: if + past perfect, sujeto + would + infinitivo (PRESENTE)

Ejemplo: "If I had studied medicine, I\'d be a doctor now."
- Condición pasada: I had studied (en el pasado, no lo hice)
- Resultado presente: I\'d be (pero ahora mismo, soy otra cosa)
- Explicación: Si EN EL PASADO hubiera estudiado medicina, AHORA sería médico. Pero no lo estudié, así que no lo soy.

Más ejemplos:
- "If I hadn\'t moved to Australia, I wouldn\'t have this job now." (Cambié de país en el pasado → Tengo este trabajo ahora.)
- "If she had learned English, she would speak it fluently now." (Aprendió hace años, así que habla bien hoy.)
- "If we had invested in that company, we\'d be millionaires by now." (Decisión pasada → Situación actual rica.)

TIPO 2: CONDICIÓN PRESENTE + RESULTADO PASADO
Estructura: if + past simple, sujeto + would have + participio pasado (PASADO)

Ejemplo: "If I weren\'t so busy now, I would have gone to the party yesterday."
- Condición presente: I\'m not busy now (estado actual)
- Resultado pasado: I would have gone (pero ayer no fui)
- Explicación: Si NO FUERA tan ocupado AHORA, HABRÍA IDO al evento ayer. Pero soy ocupado, así que no fui.

Más ejemplos:
- "If she weren\'t afraid of flying, she would have taken the last flight." (Le da miedo volar (ahora) → No tomó el vuelo (ayer).)
- "If I knew her better, I would have invited her to the dinner." (No la conozco bien (ahora) → No la invité (anoche).)
- "If the weather weren\'t so nice today, we would have stayed home yesterday." (Hace buen tiempo (hoy) → Habríamos estado adentro (ayer).)

⚠️ ATENCIÓN: Este tipo es MENOS común y más complicado. Se usa solo cuando hay una relación lógica clara entre la condición presente y lo que HABRÍA pasado en el pasado.

PUNTOS IMPORTANTES:

1. Las condicionales mixtas COMBINAN dos tiempos del condicional. No son ni segundo ni tercer condicional puro.

2. TIPO 1 (pasado → presente) es MÁS común en conversación. TIPO 2 (presente → pasado) es más raro y suena forzado si no hay una lógica clara.

3. En ambos casos, el "if" introduce una situación CONTRAFÁCTICA (que NO es verdadera).

4. La diferencia con el tercer condicional:
   - Tercer condicional: If I had studied, I would have passed. (Ambas cosas en el pasado.)
   - Mixta Tipo 1: If I had studied, I would be a doctor. (Pasado → presente.)
   - Son DIFERENTES porque uno habla de qué hubiera pasado en el pasado, el otro de cómo sería ahora.

5. NO confundas con oraciones causales normales:
   - Causal (real): Because I studied, I passed. (Hechos verdaderos, tiempo real.)
   - Mixta (contrafáctica): If I had studied, I would have passed. (Imaginaria, no pasó así.)

CÓMO FORMAR CONDICIONALES MIXTAS:

TIPO 1: PASADO → PRESENTE
| Parte | Tiempo | Forma |
|------|--------|-------|
| If | Past Perfect | had + participio |
| Resultado | Presente Condicional | would + infinitivo |
| Ejemplo | - | If I had known, I would be here now. |

TIPO 2: PRESENTE → PASADO
| Parte | Tiempo | Forma |
|------|--------|-------|
| If | Pasado Simple | verbo pasado (was, were, etc.) |
| Resultado | Pasado Condicional | would have + participio |
| Ejemplo | - | If I were smarter now, I would have made that investment. |

RESUMEN DE CONDICIONALES:

| Tipo | Condición | Resultado | Ejemplo |
|------|-----------|-----------|---------|
| 2º (presente) | Present simple | would + infinitivo | If I had time, I would help you. |
| 3º (pasado) | Past perfect | would have + participio | If I had known, I would have helped. |
| Mixta Tipo 1 (pasado→presente) | Past perfect | would + infinitivo | If I had studied, I would be a doctor. |
| Mixta Tipo 2 (presente→pasado) | Past simple | would have + participio | If I weren\'t busy, I would have gone. |
`,
  examples: [
    { english: 'If I had studied medicine, I\'d be a doctor now.', spanish: 'Si hubiera estudiado medicina, sería médico ahora.', note: 'Decisión pasada → Carrera presente. Combinan 3º (pasado) + 2º (presente).' },
    { english: 'If I weren\'t so busy now, I would have gone to the party yesterday.', spanish: 'Si no estuviera tan ocupado ahora, habría ido a la fiesta ayer.', note: 'Circunstancia presente → Evento pasado no sucedido.' },
    { english: 'If we had invested in that company, we\'d be rich by now.', spanish: 'Si hubiéramos invertido en esa empresa, seríamos ricos ahora.', note: 'Acción financiera pasada → Riqueza presente.' },
    { english: 'If she weren\'t afraid of flying, she would have taken the last flight.', spanish: 'Si no le diera miedo volar, habría tomado el último vuelo.', note: 'Fobia presente → Decisión pasada afectada.' },
    { english: 'If I had moved to London, I would speak English better now.', spanish: 'Si me hubiera mudado a Londres, hablaría mejor inglés ahora.', note: 'Mudanza pasada no realizada → Nivel de idioma presente imaginario.' },
    { english: 'If the business plan were better now, we wouldn\'t have lost so much money last year.', spanish: 'Si el plan de negocios fuera mejor ahora, no habríamos perdido tanto dinero el año pasado.', note: 'Plan deficiente ahora → Pérdidas pasadas causadas por ello.' },
  ],
  rule: `Fórmula de condicionales mixtas:

TIPO 1: PASADO → PRESENTE (¿Qué sería hoy si hubiera hecho X ayer?)
Estructura: if + past perfect, [sujeto] + would + infinitivo
Ejemplo: If I had known the truth, I would be happy now.
         Si hubiera sabido la verdad, estaría feliz ahora.
Explicación: Condición pasada imaginaria (I didn\'t know) → Resultado presente irreal (I\'m not happy).

TIPO 2: PRESENTE → PASADO (¿Qué habría pasado ayer si X fuera diferente hoy?)
Estructura: if + past simple, [sujeto] + would have + participio
Ejemplo: If I weren\'t afraid of heights now, I would have gone skydiving last week.
         Si no tuviera miedo a las alturas ahora, habría saltado en paracaídas la semana pasada.
Explicación: Condición presente (I\'m still afraid) → Resultado pasado no sucedido (I didn\'t skydive).

REGLAS CLAVE:
1. En TIPO 1: "if" lleva past perfect (had + participio), resultado lleva would + infinitivo (presente).
2. En TIPO 2: "if" lleva past simple (was/were, did, etc.), resultado lleva would have + participio (pasado).
3. TIPO 1 es más común y natural. TIPO 2 suena forzado salvo en contextos muy específicos.
4. Nunca confundas con terceras condicionales: ambas pueden sonar parecidas, pero en Tipo 1 el resultado es PRESENTE, no pasado.
5. Ambas expresan situaciones contrafácticas (que NO son verdaderas en la realidad).
`,
  commonMistakes: [
    { wrong: '❌ If I had studied medicine, I would have been a doctor now.', correct: '✅ If I had studied medicine, I would be a doctor now.', explanation: 'Mixta Tipo 1 usa "would be" (presente), no "would have been" (pasado). El "had studied" es la única parte en past perfect.' },
    { wrong: '❌ If I hadn\'t moved, I don\'t live here now.', correct: '✅ If I hadn\'t moved, I wouldn\'t live here now.', explanation: 'Necesitas "would" en la cláusula principal, no simple present. Es un condicional, no un hecho real.' },
    { wrong: '❌ If I were smarter, I would\'ve made better decisions.', correct: '✅ If I were smarter, I would make better decisions. OR If I had been smarter, I would have made better decisions.', explanation: '"If I were smarter" (presente imaginario) va con "would make" (presente). "Had been" (pasado) va con "would have made" (pasado). No mezcles el tiempo dentro del mismo tipo.' },
    { wrong: '❌ If she had more money now, she would have traveled last year.', correct: '✅ If she had had more money last year, she would have traveled. OR If she had more money now, she would travel.', explanation: 'Si hablas de dinero pasado, toda la situación va en pasado. Si hablas de dinero presente, toda va en presente. No mezcles tiempos del MISMO lado.' },
    { wrong: '❌ If I knew her before, I would have invited her now.', correct: '✅ If I had known her before, I would have invited her. OR If I knew her now, I would invite her.', explanation: 'Mantén consistencia: si "before" (pasado), usa past perfect + would have (pasado). Si "now" (presente), usa present + would (presente).' },
  ],
  vocabulary: [
    { word: 'mixed conditional', translation_es: 'condicional mixta', level: 'B2', category: 'grammar', partOfSpeech: 'noun phrase', example: 'Mixed conditionals combine past and present time frames.', exampleTranslation: 'Las condicionales mixtas combinan marcos temporales pasado y presente.' },
    { word: 'contrafactual', translation_es: 'contrafáctico, contrario a los hechos', level: 'B2', category: 'grammar', partOfSpeech: 'adjective', example: 'A mixed conditional expresses a contrafactual situation.', exampleTranslation: 'Una condicional mixta expresa una situación contrafáctica.' },
    { word: 'to invest', translation_es: 'invertir', level: 'B2', category: 'business', partOfSpeech: 'verb', example: 'If we had invested earlier, we\'d be wealthier now.', exampleTranslation: 'Si hubiéramos invertido antes, seríamos más ricos ahora.' },
    { word: 'to relocate', translation_es: 'mudarse, reubicarse', level: 'B2', category: 'lifestyle', partOfSpeech: 'verb', example: 'If she had relocated, she\'d speak the language fluently.', exampleTranslation: 'Si se hubiera mudado, hablaría el idioma con fluidez.' },
    { word: 'circumstance', translation_es: 'circunstancia', level: 'B2', category: 'grammar', partOfSpeech: 'noun', example: 'Present circumstances affect past possibilities.', exampleTranslation: 'Las circunstancias presentes afectan las posibilidades pasadas.' },
    { word: 'to pursue', translation_es: 'perseguir, seguir una carrera', level: 'B2', category: 'careers', partOfSpeech: 'verb', example: 'If I had pursued medicine, I\'d be a surgeon now.', exampleTranslation: 'Si hubiera perseguido medicina, sería cirujano ahora.' },
  ],
  grammarPoints: [
    {
      id: 'gp-b2-mixed-conditionals-type1',
      level: 'B2',
      name: 'Mixed Conditionals Type 1: Past condition + Present result',
      explanation_es: 'Combina una condición imaginaria pasada con un resultado presente irreal. Mezcla la estructura del 3er condicional (if + past perfect) con resultado en presente (would + infinitivo).',
      formula: 'if + past perfect, [subject] + would + infinitivo',
      examples: [
        'If I had studied harder, I would be at university now.',
        'If we had invested, we\'d be wealthy by now.',
        'If she had learned languages, she would speak three now.',
      ],
    },
    {
      id: 'gp-b2-mixed-conditionals-type2',
      level: 'B2',
      name: 'Mixed Conditionals Type 2: Present condition + Past result',
      explanation_es: 'Combina una condición presente imaginaria con un resultado pasado que no ocurrió. Menos común: if + past simple, would have + participio pasado.',
      formula: 'if + past simple, [subject] + would have + participio pasado',
      examples: [
        'If I weren\'t busy now, I would have attended yesterday.',
        'If he weren\'t afraid, he would have asked her out.',
        'If she had more confidence today, she would have applied last month.',
      ],
    },
  ],
  exercises: [
    {
      id: 'b2-m6-l2-ex1',
      type: 'multiple_choice',
      concept: 'mixed conditional type 1 recognition',
      difficulty: 3,
      prompt: 'Completa: "If I had become a lawyer, I ___ a successful career now."',
      promptTranslation: 'Si me hubiera convertido en abogado, tendría una carrera exitosa ahora.',
      correctAnswer: 'would have',
      options: ['would have', 'would', 'will have', 'had'],
      explanation: 'Tipo 1 (pasado → presente): "had become" (pasado) → "would have" (NO, espera: "would" presente). Respuesta correcta: "would".',
    },
    {
      id: 'b2-m6-l2-ex2',
      type: 'fill_blank',
      concept: 'mixed conditional type 1 form',
      difficulty: 3,
      prompt: 'Completa con la forma correcta: "If he had studied medicine, he ___ a doctor now."',
      promptTranslation: 'Si hubiera estudiado medicina, sería médico ahora.',
      correctAnswer: 'would be',
      acceptedAnswers: ['would be', 'would\'d be', 'd be'],
      explanation: 'Mixta Tipo 1: if + past perfect (had studied) → would + infinitivo (would be).',
    },
    {
      id: 'b2-m6-l2-ex3',
      type: 'error_correction',
      concept: 'mixed conditional type 1 mistake',
      difficulty: 4,
      prompt: 'Encuentra el error: "If we had invested, we would have been millionaires by now."',
      correctAnswer: 'If we had invested, we would be millionaires by now.',
      acceptedAnswers: [
        'If we had invested, we would be millionaires by now',
        'If we had invested, we would be millionaires now.',
        'If we had invested, we\'d be millionaires by now.',
      ],
      acceptApproximate: true,
      explanation: 'Mixta Tipo 1 usa "would be" (presente), no "would have been" (pasado). El resultado es PRESENTE porque hablamos de cómo sería ahora.',
    },
    {
      id: 'b2-m6-l2-ex4',
      type: 'multiple_choice',
      concept: 'mixed conditional type 2',
      difficulty: 4,
      prompt: 'Completa: "If she weren\'t afraid of flying now, she ___ the last flight yesterday."',
      promptTranslation: 'Si no tuviera miedo a volar ahora, habría tomado el último vuelo ayer.',
      correctAnswer: 'would have taken',
      options: ['would have taken', 'would take', 'took', 'had taken'],
      explanation: 'Mixta Tipo 2 (presente → pasado): "weren\'t" (presente) → "would have taken" (habría tomado, pasado).',
    },
    {
      id: 'b2-m6-l2-ex5',
      type: 'translate',
      concept: 'mixed conditional translation',
      difficulty: 4,
      prompt: 'Traduce: "Si hubiera nacido en otra ciudad, viviría en un lugar completamente diferente ahora."',
      correctAnswer: 'If I had been born in another city, I would live in a completely different place now.',
      acceptedAnswers: [
        'If I had been born in another city, I would live in a completely different place now',
        'If I was born in another city, I would live somewhere completely different now.',
      ],
      acceptApproximate: true,
      explanation: 'Mixta Tipo 1: "had been born" (pasado) + "would live" (presente, "ahora").',
    },
    {
      id: 'b2-m6-l2-ex6',
      type: 'reorder',
      concept: 'mixed conditional word order',
      difficulty: 3,
      prompt: 'Ordena las palabras:',
      promptTranslation: 'Si hubiera estudiado más, sería inteligente ahora.',
      words: ['If', 'I', 'had', 'studied', 'more,', 'I', 'would', 'be', 'intelligent', 'now.'],
      correctAnswer: 'If I had studied more, I would be intelligent now.',
      explanation: 'Orden: if + cláusula (past perfect) + coma + sujeto + would + infinitivo.',
    },
    {
      id: 'b2-m6-l2-ex7',
      type: 'select_correct',
      concept: 'third conditional vs mixed conditional',
      difficulty: 4,
      prompt: 'Elige la frase CORRECTA (mixta, no 3er condicional puro):',
      correctAnswer: 'If I had taken the job, I would be living in New York now.',
      options: [
        'If I had taken the job, I would have been living in New York.',
        'If I had taken the job, I would be living in New York now.',
        'If I have taken the job, I will be living in New York.',
      ],
      explanation: 'Mixta Tipo 1: "had taken" (pasado) → "would be living" (presente). "Would have been living" es 3er condicional puro.',
    },
    {
      id: 'b2-m6-l2-ex8',
      type: 'true_false',
      concept: 'mixed conditional logic',
      difficulty: 3,
      prompt: '"If I had studied languages in school, I would speak three languages now" es una condicional mixta válida.',
      correctAnswer: 'true',
      explanation: 'Correcto. Es Mixta Tipo 1: decisión pasada (had studied) → habilidad presente (would speak).',
    },
    {
      id: 'b2-m6-l2-ex9',
      type: 'listening',
      concept: 'mixed conditionals listening',
      difficulty: 4,
      prompt: 'Escuchá el audio y respondé las preguntas sobre las situaciones contrafácticas mencionadas.',
      correctAnswer: '',
      explanation: 'Un hombre reflexiona sobre cómo serían sus circunstancias si hubiera tomado decisiones diferentes en el pasado.',
      listening: {
        audioText:
          "Robert is reflecting on his life. He says: If I had pursued my dream of becoming a musician, I would be performing in concerts now. But I chose engineering instead. Also, if I weren\'t so focused on my career now, I would have spent more time with my family last year. My wife always says: if you had moved to the countryside, we would be much happier now. But here we are in the city, and I think... if I hadn\'t been so stubborn, things might have been different.",
        questions: [
          {
            id: 'b2-m6-l2-ex9-q1',
            type: 'select_correct',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What does Robert say about being a musician?',
            correctAnswer: 'He would be performing in concerts now if he had pursued music',
            options: [
              'He is currently performing in concerts',
              'He would be performing in concerts now if he had pursued music',
              'He will pursue music in the future',
            ],
            explanation: '"If I had pursued my dream of becoming a musician, I would be performing in concerts now."',
          },
          {
            id: 'b2-m6-l2-ex9-q2',
            type: 'true_false',
            concept: 'listening comprehension',
            difficulty: 2,
            prompt: 'Robert spent a lot of time with his family last year.',
            correctAnswer: 'false',
            explanation: '"If I weren\'t so focused on my career now, I would have spent more time with my family last year." — Esto es una condicional mixta negativa.',
          },
          {
            id: 'b2-m6-l2-ex9-q3',
            type: 'multiple_choice',
            concept: 'listening comprehension',
            difficulty: 3,
            prompt: 'What does his wife say would have made them happier?',
            correctAnswer: 'Moving to the countryside',
            options: ['Staying in the city', 'Moving to the countryside', 'Pursuing music together'],
            explanation: '"My wife always says: if you had moved to the countryside, we would be much happier now."',
          },
        ],
      },
    },
    {
      id: 'b2-m6-l2-ex10',
      type: 'writing',
      concept: 'mixed conditionals writing',
      difficulty: 4,
      prompt: 'Escribí un breve ensayo (essay) reflexionando sobre cómo serían diferentes tus circunstancias presentes si hubieras tomado una decisión importante diferente en el pasado. Usa al menos 3 condicionales mixtas (Tipo 1).',
      promptTranslation: 'Write a reflective essay about how your present would be different if you had made a different important decision in the past.',
      correctAnswer: '',
      explanation: 'Un buen ensayo usa 3+ condicionales mixtas de forma natural, manteniendo la coherencia entre la decisión pasada imaginaria y el resultado presente.',
      taskType: 'essay',
      targetReader: 'yourself or a journal',
      register: 'neutral',
      contentPoints: [
        'Al menos 3 condicionales mixtas Tipo 1 (pasado → presente)',
        'Reflexión personal y coherente sobre una decisión del pasado',
        'Explicación clara de cómo la decisión pasada alteraría la situación presente',
      ],
      requiresOwnIdea: true,
      minWords: 100,
      maxWords: 180,
    },
    {
      id: 'b2-m6-l2-ex11',
      type: 'speaking',
      concept: 'mixed conditionals pronunciation',
      difficulty: 3,
      prompt: 'Escuchá la frase modelo y repetila en voz alta.',
      correctAnswer: 'If I had studied art, I would be a painter now.',
      explanation: 'Practicá la entonación natural de frases que mezclan tiempos: énfasis en "If I had" (pasado) y fluidez en "I would be" (presente).',
      speakingMode: 'repeat',
    },
  ],
  miniTest: [
    {
      id: 'b2-m6-l2-mt1',
      type: 'fill_blank',
      concept: 'mixed conditional type 1 structure',
      difficulty: 3,
      prompt: 'Completa: "If they had invested in Bitcoin, they ___ billionaires by now."',
      promptTranslation: 'Si hubieran invertido en Bitcoin, serían multimillonarios ahora.',
      correctAnswer: 'would be',
      explanation: 'Mixta Tipo 1: past perfect (had invested) + would + infinitivo (would be, presente).',
    },
    {
      id: 'b2-m6-l2-mt2',
      type: 'error_correction',
      concept: 'mixed conditional type 1 mistake',
      difficulty: 4,
      prompt: 'Corrige: "If I had moved to Australia, I would have been living there now."',
      correctAnswer: 'If I had moved to Australia, I would be living there now.',
      acceptedAnswers: [
        'If I had moved to Australia, I would be living there now',
        'If I had moved to Australia, I\'d be living there now.',
      ],
      acceptApproximate: true,
      explanation: 'No uses "would have been". Tipo 1 lleva "would be/would be living" (presente), no pasado.',
    },
    {
      id: 'b2-m6-l2-mt3',
      type: 'multiple_choice',
      concept: 'mixed conditional type 2 distinction',
      difficulty: 4,
      prompt: 'Completa (Tipo 2, presente → pasado): "If I weren\'t tired right now, I ___ to that concert last night."',
      promptTranslation: 'Si no estuviera cansado ahora, habría ido a ese concierto anoche.',
      correctAnswer: 'would have gone',
      options: ['would have gone', 'would go', 'had gone', 'will go'],
      explanation: 'Tipo 2: "weren\'t" (presente) → "would have gone" (habría ido, pasado).',
    },
    {
      id: 'b2-m6-l2-mt4',
      type: 'true_false',
      concept: 'mixed vs pure third conditional',
      difficulty: 4,
      prompt: '"If I had passed the exam, I would be in the university now" y "If I had passed the exam, I would have been in the university" significan lo mismo.',
      correctAnswer: 'false',
      explanation: 'Falso. La primera es mixta (pasado → presente: sería ahora). La segunda es 3er condicional (pasado → pasado: habría sido).',
    },
  ],
  reviewItems: ['b1-m9-l1', 'b1-m9-l3', 'b2-m1-l1'],
  prerequisites: ['b2-m6-l1'],
}
