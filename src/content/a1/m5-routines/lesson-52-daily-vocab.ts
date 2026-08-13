import type { Lesson } from '../../types'

export const lesson52DailyVocab: Lesson = {
  id: 'a1-m5-l2',
  moduleId: 'm5-routines',
  order: 1,
  title: 'Rutinas diarias (vocabulario)',
  objective: 'Aprender vocabulario para describir rutinas diarias.',
  explanation_es: `Para describir una rutina diaria necesitamos verbos que expresan acciones cotidianas. En inglés, muchas de estas acciones se forman con **expresiones de varias palabras** (no con un verbo solo), por ejemplo "get up" o "have breakfast".

Esto es distinto al español: en español decimos "me levanto" (un verbo), pero en inglés decimos "get up" (dos palabras). Y para comidas decimos "have breakfast", "have lunch", "have dinner" — usando el verbo **have**.

### Acciones de una rutina diaria

- **wake up** = despertarse
- **get up** = levantarse (de la cama)
- **have breakfast** = desayunar
- **go to work** = ir al trabajo
- **go to school** = ir al colegio
- **have lunch** = comer, almorzar
- **go home** = volver a casa (¡atención! sin "to")
- **have dinner** = cenar
- **go to bed** = acostarse
- **take a shower** = ducharse
- **brush one's teeth** = lavarse los dientes
- **read** = leer
- **watch TV** = ver la televisión
- **sleep** = dormir

### Notas importantes para hispanohablantes

1. **"Home" no lleva "to"**: decimos "I go home", NO "I go to home". "Home" funciona como un adverbio.
2. **"Have breakfast/lunch/dinner"** (NO solo "breakfast at 7"): el verbo "have" acompaña a las comidas.
3. **No reflejo**: en inglés no decimos "I take a shower myself" ni "I dress myself"; basta con "take a shower". El pronombre reflexivo no es necesario aquí.
4. **Possessivo**: "He brushes HIS teeth" (necesita el posesivo "his" en 3ª persona).

### Ejemplos de rutinas (recuerda la -s en 3ª persona)

- "I get up at 7." → I get up (no -s; subject = I).
- "She go**es** to work at 8." → 3ª persona: go + es = goes.
- "We have dinner at 8 p.m." → we: sin -s.
- "He take**s** a shower in the morning." → 3ª persona: take + s = takes.`,
  examples: [
    { english: 'I get up at 7.', spanish: 'Me levanto a las 7.', note: 'get up = levantarse (de la cama).' },
    { english: 'She goes to work at 8.', spanish: 'Ella va al trabajo a las 8.', note: '3ª persona: go → goes (+-es).' },
    { english: 'We have dinner at 8 p.m.', spanish: 'Cenamos a las 8 de la tarde.', note: 'have dinner = cenar.' },
    { english: 'He takes a shower in the morning.', spanish: 'Él se ducha por la mañana.', note: 'take a shower = ducharse. "takes" lleva -s.' },
    { english: 'I go home at 6.', spanish: 'Vuelvo a casa a las 6.', note: '¡Sin "to"! go home (no "go to home").' },
    { english: 'They have breakfast at 7.', spanish: 'Ellos desayunan a las 7.', note: 'have breakfast = desayunar.' },
    { english: 'She brushes her teeth.', spanish: 'Ella se limpia los dientes.', note: 'brush one\'s teeth (+ posesivo "her" en 3ª persona).' },
    { english: 'I go to bed at 11.', spanish: 'Me acuesto a las 11.', note: 'go to bed = acostarse.' },
  ],
  rule: `**Verbos clave de rutinas:**
wake up, get up, have breakfast, go to work/school, have lunch, go home (sin "to"), have dinner, go to bed, take a shower, brush one's teeth, read, watch TV, sleep.

**Tres errores típicos para hispanohablantes:**
1. "I breakfast" → 🔴 incorrecto. ✅ "I have breakfast."
2. "I go to home" → 🔴 incorrecto. ✅ "I go home."
3. "He brush teeth" → 🔴 incorrecto. ✅ "He brushes his teeth." (verbo con -es Y posesivo "his").

Recuerda aplicar la -s de la 3ª persona: take → take**s**, go → go**es**, brush → brush**es**.`,
  commonMistakes: [
    { wrong: '❌ I breakfast at 7.', correct: '✅ I have breakfast at 7.', explanation: 'Para comidas usamos "have": have breakfast / have lunch / have dinner.' },
    { wrong: '❌ I go to home at 6.', correct: '✅ I go home at 6.', explanation: '"Home" no lleva "to": go home (NO "go to home").' },
    { wrong: '❌ I shower me.', correct: '✅ I take a shower.', explanation: 'En inglés no usamos el pronombre reflexivo aquí. Basta con "I take a shower" o "I shower".' },
    { wrong: '❌ He brush teeth.', correct: '✅ He brushes his teeth.', explanation: 'Falta la -es (brush → brushes) y el posesivo "his".' },
    { wrong: '❌ She go to work at 8.', correct: '✅ She goes to work at 8.', explanation: '3ª persona: go → goes (-es).' },
  ],
  vocabulary: [
    { word: 'wake up', translation_es: 'despertarse', level: 'A1', category: 'routines', partOfSpeech: 'verb', example: 'I wake up at 6.', exampleTranslation: 'Me despierto a las 6.' },
    { word: 'get up', translation_es: 'levantarse (de la cama)', level: 'A1', category: 'routines', partOfSpeech: 'verb', example: 'I get up at 7.', exampleTranslation: 'Me levanto a las 7.' },
    { word: 'have breakfast', translation_es: 'desayunar', level: 'A1', category: 'routines', partOfSpeech: 'verb', example: 'I have breakfast at 7.', exampleTranslation: 'Desayuno a las 7.' },
    { word: 'go to work', translation_es: 'ir al trabajo', level: 'A1', category: 'routines', partOfSpeech: 'verb', example: 'She goes to work at 8.', exampleTranslation: 'Ella va al trabajo a las 8.' },
    { word: 'go to school', translation_es: 'ir al colegio', level: 'A1', category: 'routines', partOfSpeech: 'verb', example: 'He goes to school at 8.', exampleTranslation: 'Él va al colegio a las 8.' },
    { word: 'have lunch', translation_es: 'comer, almorzar', level: 'A1', category: 'routines', partOfSpeech: 'verb', example: 'We have lunch at 1.', exampleTranslation: 'Comemos a la una.' },
    { word: 'go home', translation_es: 'volver a casa', level: 'A1', category: 'routines', partOfSpeech: 'verb', example: 'I go home at 6.', exampleTranslation: 'Vuelvo a casa a las 6.' },
    { word: 'have dinner', translation_es: 'cenar', level: 'A1', category: 'routines', partOfSpeech: 'verb', example: 'We have dinner at 8 p.m.', exampleTranslation: 'Cenamos a las 8 de la tarde.' },
    { word: 'go to bed', translation_es: 'acostarse', level: 'A1', category: 'routines', partOfSpeech: 'verb', example: 'I go to bed at 11.', exampleTranslation: 'Me acuesto a las 11.' },
    { word: 'take a shower', translation_es: 'ducharse', level: 'A1', category: 'routines', partOfSpeech: 'verb', example: 'He takes a shower in the morning.', exampleTranslation: 'Él se ducha por la mañana.' },
    { word: 'brush one\'s teeth', translation_es: 'lavarse los dientes', level: 'A1', category: 'routines', partOfSpeech: 'verb', example: 'She brushes her teeth.', exampleTranslation: 'Ella se limpia los dientes.' },
    { word: 'read', translation_es: 'leer', level: 'A1', category: 'routines', partOfSpeech: 'verb', example: 'I read a book at night.', exampleTranslation: 'Leo un libro por la noche.' },
    { word: 'watch TV', translation_es: 'ver la televisión', level: 'A1', category: 'routines', partOfSpeech: 'verb', example: 'He watches TV after dinner.', exampleTranslation: 'Él ve la tele después de cenar.' },
    { word: 'study', translation_es: 'estudiar', level: 'A1', category: 'routines', partOfSpeech: 'verb', example: 'She studies English.', exampleTranslation: 'Ella estudia inglés.' },
    { word: 'sleep', translation_es: 'dormir', level: 'A1', category: 'routines', partOfSpeech: 'verb', example: 'I sleep 8 hours.', exampleTranslation: 'Duermo 8 horas.' },
    { word: 'morning', translation_es: 'mañana', level: 'A1', category: 'routines', partOfSpeech: 'noun', example: 'He takes a shower in the morning.', exampleTranslation: 'Él se ducha por la mañana.' },
    { word: 'evening', translation_es: 'tarde (noche temprana)', level: 'A1', category: 'routines', partOfSpeech: 'noun', example: 'We have dinner in the evening.', exampleTranslation: 'Cenamos por la tarde.' },
  ],
  grammarPoints: [],
  exercises: [
    {
      id: 'a1-m5-l2-ex1',
      type: 'match',
      concept: 'daily routine vocabulary',
      difficulty: 1,
      prompt: 'Relaciona cada verbo de rutina con su traducción.',
      promptTranslation: 'Match each routine verb with its translation.',
      correctAnswer: '',
      pairs: [
        { left: 'get up', right: 'levantarse' },
        { left: 'have breakfast', right: 'desayunar' },
        { left: 'go to work', right: 'ir al trabajo' },
        { left: 'have dinner', right: 'cenar' },
        { left: 'go to bed', right: 'acostarse' },
        { left: 'take a shower', right: 'ducharse' },
      ],
      explanation: 'Cada expresión corresponda a una acción de la rutina diaria: get up = levantarse, have breakfast = desayunar, go to work = ir al trabajo, have dinner = cenar, go to bed = acostarse, take a shower = ducharse.',
    },
    {
      id: 'a1-m5-l2-ex2',
      type: 'fill_blank',
      concept: 'daily routine - have breakfast',
      difficulty: 1,
      prompt: 'Completa: "I ___ breakfast at 7."',
      promptTranslation: 'Desayuno a las 7.',
      correctAnswer: 'have',
      acceptedAnswers: ['Have'],
      explanation: 'Para comidas usamos "have": have breakfast / have lunch / have dinner.',
    },
    {
      id: 'a1-m5-l2-ex3',
      type: 'multiple_choice',
      concept: 'daily routine - go home (no "to")',
      difficulty: 2,
      prompt: 'Elige la opción correcta: "___ home at 6."',
      promptTranslation: 'Vuelvo a casa a las 6.',
      correctAnswer: 'I go',
      options: ['I go', 'I go to', 'I go at'],
      explanation: 'Con "home" usamos "go" sin "to": I go home. (NO "go to home".)',
    },
    {
      id: 'a1-m5-l2-ex4',
      type: 'multiple_choice',
      concept: 'daily routine - 3rd person -es',
      difficulty: 2,
      prompt: 'Completa: "She ___ to work at 8."',
      promptTranslation: 'Ella va al trabajo a las 8.',
      correctAnswer: 'goes',
      options: ['go', 'goes', 'gos', 'goies'],
      explanation: '3ª persona: go → goes (verbo en -o: añade -es).',
    },
    {
      id: 'a1-m5-l2-ex5',
      type: 'true_false',
      concept: 'daily routine - possessive with teeth',
      difficulty: 2,
      prompt: 'Frase correcta: "He brushes her teeth."',
      promptTranslation: 'Él se limpia los dientes.',
      correctAnswer: 'false',
      acceptedAnswers: ['False', 'FALSE'],
      explanation: 'Si el sujeto es "He", el posesivo correcto es "his", no "her". → "He brushes his teeth."',
    },
    {
      id: 'a1-m5-l2-ex6',
      type: 'error_correction',
      concept: 'daily routine - have breakfast',
      difficulty: 2,
      prompt: 'Corrige el error: "I breakfast at 7."',
      correctAnswer: 'I have breakfast at 7.',
      acceptedAnswers: ['I have breakfast at 7'],
      acceptApproximate: true,
      explanation: '"Breakfast" necesita el verbo "have": I have breakfast at 7.',
    },
    {
      id: 'a1-m5-l2-ex7',
      type: 'reorder',
      concept: 'daily routine - word order',
      difficulty: 3,
      prompt: 'Ordena: She / takes / a shower / in / the morning',
      promptTranslation: 'Ella se ducha por la mañana.',
      correctAnswer: 'She takes a shower in the morning.',
      words: ['She', 'takes', 'a shower', 'in', 'the morning'],
      explanation: 'Orden: She takes a shower in the morning. (Sujeto + verbo con -s + objeto + preposición + momento del día.)',
    },
    {
      id: 'a1-m5-l2-ex8',
      type: 'translate',
      concept: 'daily routine',
      difficulty: 3,
      prompt: 'Traduce: "Cenamos a las 8 de la tarde."',
      correctAnswer: 'We have dinner at 8 p.m.',
      acceptedAnswers: ['We have dinner at 8 p.m', 'We have dinner at 8 PM', 'we have dinner at 8 pm.'],
      acceptApproximate: true,
      explanation: 'have dinner = cenar. → We have dinner at 8 p.m.',
    },
    {
      id: 'a1-m5-l2-ex9',
      type: 'error_correction',
      concept: 'daily routine - go to home',
      difficulty: 3,
      prompt: 'Corrige el error: "I go to home at 6."',
      correctAnswer: 'I go home at 6.',
      acceptedAnswers: ['I go home at 6'],
      acceptApproximate: true,
      explanation: 'Con "home" usamos "go" sin "to": I go home.',
    },
    {
      id: 'a1-m5-l2-ex10',
      type: 'multiple_choice',
      concept: 'daily routine - get up',
      difficulty: 1,
      prompt: 'Completa: "I ___ up at 7."',
      promptTranslation: 'Me levanto a las 7.',
      correctAnswer: 'get',
      options: ['get', 'go', 'have'],
      explanation: 'get up = levantarse. → I get up at 7.',
    },
  ],
  miniTest: [
    {
      id: 'a1-m5-l2-mt1',
      type: 'fill_blank',
      concept: 'daily routine - have breakfast',
      difficulty: 1,
      prompt: 'Completa: "I ___ breakfast at 7."',
      promptTranslation: 'Desayuno a las 7.',
      correctAnswer: 'have',
      acceptedAnswers: ['Have'],
      explanation: 'have breakfast = desayunar.',
    },
    {
      id: 'a1-m5-l2-mt2',
      type: 'multiple_choice',
      concept: 'daily routine - go home (no "to")',
      difficulty: 2,
      prompt: 'Elige la opción correcta: "___ home at 6."',
      promptTranslation: 'Vuelvo a casa a las 6.',
      correctAnswer: 'I go',
      options: ['I go', 'I go to', 'I go at'],
      explanation: 'Sin "to": I go home.',
    },
    {
      id: 'a1-m5-l2-mt3',
      type: 'multiple_choice',
      concept: 'daily routine - 3rd person -es',
      difficulty: 2,
      prompt: 'Completa: "He ___ a shower in the morning."',
      promptTranslation: 'Él se ducha por la mañana.',
      correctAnswer: 'takes',
      options: ['take', 'takes', 'takees'],
      explanation: '3ª persona: take → takes (+ -s).',
    },
    {
      id: 'a1-m5-l2-mt4',
      type: 'error_correction',
      concept: 'daily routine - possessive + -es',
      difficulty: 3,
      prompt: 'Corrige el error: "He brush teeth."',
      correctAnswer: 'He brushes his teeth.',
      acceptedAnswers: ['He brushes his teeth', 'He brushes the teeth'],
      acceptApproximate: true,
      explanation: '3ª persona: brush → brushes (+ -es), y añadimos el posesivo "his". → He brushes his teeth.',
    },
    {
      id: 'a1-m5-l2-mt5',
      type: 'translate',
      concept: 'daily routine',
      difficulty: 3,
      prompt: 'Traduce: "Ella va al trabajo a las 8."',
      correctAnswer: 'She goes to work at 8.',
      acceptedAnswers: ['She goes to work at 8', 'she goes to work at 8.'],
      acceptApproximate: true,
      explanation: '3ª persona: go → goes. → She goes to work at 8.',
    },
  ],
  reviewItems: ['a1-m5-l1'],
  prerequisites: ['a1-m5-l1'],
}