import type { Lesson } from '../../types'

export const lesson111Places: Lesson = {
  id: 'a1-m11-l1',
  moduleId: 'm11-places',
  order: 0,
  title: 'Lugares de la ciudad',
  objective: 'Aprender los nombres de los lugares más comunes de la ciudad y preguntar por ellos.',
  explanation_es: `En esta lección vamos a aprender los lugares más comunes de una ciudad. Todos son sustantivos y se usan normalmente con "the" cuando hablamos de un lugar concreto.

### Lugares (Places)

- shop = tienda
- bank = banco
- hospital = hospital
- school = escuela
- library = biblioteca
- museum = museo
- park = parque
- restaurant = restaurante
- hotel = hotel
- airport = aeropuerto
- station = estación (de tren o de autobús)
- cinema = cine
- theatre = teatro
- supermarket = supermercado
- pharmacy = farmacia (en EE. UU. se dice "pharmacy"; en Reino Unido también se dice "chemist's")
- post office = oficina de correos
- police station = comisaría

Para preguntar si existe un lugar cerca usamos "Is there a...?" (¿Hay un...?):
- Is there a pharmacy near here? = ¿Hay una farmacia cerca de aquí?

Para decir dónde está algo usamos "next to" (al lado de):
- The bank is next to the supermarket. = El banco está al lado del supermercado.`,
  examples: [
    { english: 'The bank is next to the supermarket.', spanish: 'El banco está al lado del supermercado.', note: 'next to = al lado de.' },
    { english: 'Is there a pharmacy near here?', spanish: '¿Hay una farmacia cerca de aquí?', note: 'Is there a...? = ¿Hay un...?' },
    { english: 'I go to the library on Saturdays.', spanish: 'Voy a la biblioteca los sábados.', note: 'go to + the + place.' },
    { english: 'The museum is near the park.', spanish: 'El museo está cerca del parque.', note: 'near = cerca de.' },
    { english: 'There is a hospital in the city.', spanish: 'Hay un hospital en la ciudad.', note: 'there is = hay.' },
    { english: 'We watch films at the cinema.', spanish: 'Vemos películas en el cine.', note: 'at the cinema = en el cine.' },
  ],
  rule: `**Lugares importantes:**
- shop (tienda), bank (banco), hospital (hospital), school (escuela), library (biblioteca), museum (museo), park (parque), restaurant (restaurante), hotel (hotel), airport (aeropuerto), station (estación), cinema (cine), theatre (teatro), supermarket (supermercado), pharmacy (farmacia), post office (correos), police station (comisaría).

**Para preguntar si existe un lugar:**
- Is there a + lugar + near here? → Is there a bank near here? = ¿Hay un banco cerca de aquí?

**Para decir dónde está:**
- The + lugar + is + preposición + the + lugar.
- The bank is next to the supermarket. = El banco está al lado del supermercado.

Recordatorio: "the" se usa para un lugar concreto (the library, the cinema). La palabra "pharmacy" y "chemist's" significan lo mismo: farmacia.`,
  commonMistakes: [
    { wrong: '❌ I go to the pharmacy / chemist\'s.', correct: '✅ pharmacy (EE. UU.) y chemist\'s (Reino Unido) son ambas correctas.', explanation: 'No es un error. "Pharmacy" se usa en Estados Unidos y "chemist\'s" en Reino Unido. Las dos significan farmacia.' },
    { wrong: '❌ A bank is near here?', correct: '✅ Is there a bank near here?', explanation: 'Para preguntar si existe un lugar usamos "Is there a...?" al principio. No decimos "A bank is near here?" como pregunta.' },
    { wrong: '❌ I go to the library in Saturdays.', correct: '✅ I go to the library on Saturdays.', explanation: 'Con los días de la semana usamos "on": on Saturdays, on Monday.' },
  ],
  vocabulary: [
    { word: 'shop', translation_es: 'tienda', level: 'A1', category: 'places', partOfSpeech: 'noun', example: 'The shop is near my house.', exampleTranslation: 'La tienda está cerca de mi casa.' },
    { word: 'bank', translation_es: 'banco', level: 'A1', category: 'places', partOfSpeech: 'noun', example: 'The bank is next to the supermarket.', exampleTranslation: 'El banco está al lado del supermercado.' },
    { word: 'hospital', translation_es: 'hospital', level: 'A1', category: 'places', partOfSpeech: 'noun', example: 'There is a hospital in the city.', exampleTranslation: 'Hay un hospital en la ciudad.' },
    { word: 'school', translation_es: 'escuela', level: 'A1', category: 'places', partOfSpeech: 'noun', example: 'My son goes to school.', exampleTranslation: 'Mi hijo va a la escuela.' },
    { word: 'library', translation_es: 'biblioteca', level: 'A1', category: 'places', partOfSpeech: 'noun', example: 'I go to the library on Saturdays.', exampleTranslation: 'Voy a la biblioteca los sábados.' },
    { word: 'museum', translation_es: 'museo', level: 'A1', category: 'places', partOfSpeech: 'noun', example: 'The museum is near the park.', exampleTranslation: 'El museo está cerca del parque.' },
    { word: 'park', translation_es: 'parque', level: 'A1', category: 'places', partOfSpeech: 'noun', example: 'The children play in the park.', exampleTranslation: 'Los niños juegan en el parque.' },
    { word: 'restaurant', translation_es: 'restaurante', level: 'A1', category: 'places', partOfSpeech: 'noun', example: 'We eat at a restaurant on Sunday.', exampleTranslation: 'Comemos en un restaurante el domingo.' },
    { word: 'hotel', translation_es: 'hotel', level: 'A1', category: 'places', partOfSpeech: 'noun', example: 'The hotel is on the left.', exampleTranslation: 'El hotel está a la izquierda.' },
    { word: 'airport', translation_es: 'aeropuerto', level: 'A1', category: 'places', partOfSpeech: 'noun', example: 'The plane is at the airport.', exampleTranslation: 'El avión está en el aeropuerto.' },
    { word: 'station', translation_es: 'estación', level: 'A1', category: 'places', partOfSpeech: 'noun', example: 'The train is at the station.', exampleTranslation: 'El tren está en la estación.' },
    { word: 'cinema', translation_es: 'cine', level: 'A1', category: 'places', partOfSpeech: 'noun', example: 'We watch films at the cinema.', exampleTranslation: 'Vemos películas en el cine.' },
    { word: 'theatre', translation_es: 'teatro', level: 'A1', category: 'places', partOfSpeech: 'noun', example: 'The theatre is in the centre.', exampleTranslation: 'El teatro está en el centro.' },
    { word: 'supermarket', translation_es: 'supermercado', level: 'A1', category: 'places', partOfSpeech: 'noun', example: 'I buy food at the supermarket.', exampleTranslation: 'Compro comida en el supermercado.' },
    { word: 'pharmacy', translation_es: 'farmacia', level: 'A1', category: 'places', partOfSpeech: 'noun', example: 'Is there a pharmacy near here?', exampleTranslation: '¿Hay una farmacia cerca de aquí?' },
    { word: 'post office', translation_es: 'oficina de correos', level: 'A1', category: 'places', partOfSpeech: 'noun', example: 'I send letters at the post office.', exampleTranslation: 'Envío cartas en la oficina de correos.' },
    { word: 'police station', translation_es: 'comisaría', level: 'A1', category: 'places', partOfSpeech: 'noun', example: 'The police station is in the centre.', exampleTranslation: 'La comisaría está en el centro.' },
  ],
  grammarPoints: [
    {
      id: 'gp-is-there-a',
      level: 'A1',
      name: 'Is there a...? (questions about places)',
      explanation_es: 'Para preguntar si existe un lugar cerca usamos "Is there a...?" (¿Hay un...?). El verbo "is" va al principio de la pregunta.',
      formula: 'Is there a + place + near here?',
      examples: ['Is there a bank near here?', 'Is there a pharmacy near here?', 'Is there a hospital in the city?'],
    },
    {
      id: 'gp-go-to-the-place',
      level: 'A1',
      name: 'Go to the + place',
      explanation_es: 'Para decir que vamos a un lugar concreto usamos "go to the + lugar".',
      formula: 'Subject + go/goes + to the + place',
      examples: ['I go to the library on Saturdays.', 'She goes to the cinema.', 'They go to the park.'],
    },
  ],
  exercises: [
    {
      id: 'a1-m11-l1-ex1',
      type: 'match',
      concept: 'places vocabulary',
      difficulty: 1,
      prompt: 'Relaciona cada lugar con su traducción:',
      pairs: [
        { left: 'shop', right: 'tienda' },
        { left: 'bank', right: 'banco' },
        { left: 'hospital', right: 'hospital' },
        { left: 'school', right: 'escuela' },
        { left: 'library', right: 'biblioteca' },
        { left: 'park', right: 'parque' },
      ],
      correctAnswer: 'shop=tienda, bank=banco, hospital=hospital, school=escuela, library=biblioteca, park=parque',
      explanation: 'shop=tienda, bank=banco, hospital=hospital, school=escuela, library=biblioteca, park=parque.',
    },
    {
      id: 'a1-m11-l1-ex2',
      type: 'match',
      concept: 'places vocabulary',
      difficulty: 1,
      prompt: 'Relaciona cada lugar con su traducción:',
      pairs: [
        { left: 'museum', right: 'museo' },
        { left: 'restaurant', right: 'restaurante' },
        { left: 'hotel', right: 'hotel' },
        { left: 'cinema', right: 'cine' },
        { left: 'airport', right: 'aeropuerto' },
        { left: 'supermarket', right: 'supermercado' },
      ],
      correctAnswer: 'museum=museo, restaurant=restaurante, hotel=hotel, cinema=cine, airport=aeropuerto, supermarket=supermercado',
      explanation: 'museum=museo, restaurant=restaurante, hotel=hotel, cinema=cine, airport=aeropuerto, supermarket=supermercado.',
    },
    {
      id: 'a1-m11-l1-ex3',
      type: 'multiple_choice',
      concept: 'places vocabulary',
      difficulty: 1,
      prompt: 'Completa: "We watch films at the ___."',
      promptTranslation: 'Vemos películas en el cine.',
      correctAnswer: 'cinema',
      options: ['cinema', 'school', 'hospital'],
      explanation: '"Cinema" es el cine, donde vemos películas. → We watch films at the cinema.',
    },
    {
      id: 'a1-m11-l1-ex4',
      type: 'multiple_choice',
      concept: 'places vocabulary',
      difficulty: 1,
      prompt: 'Completa: "The plane is at the ___."',
      promptTranslation: 'El avión está en el aeropuerto.',
      correctAnswer: 'airport',
      options: ['airport', 'library', 'theatre'],
      explanation: '"Airport" es el aeropuerto, donde están los aviones. → The plane is at the airport.',
    },
    {
      id: 'a1-m11-l1-ex5',
      type: 'multiple_choice',
      concept: 'places vocabulary',
      difficulty: 2,
      prompt: 'Completa: "I buy food at the ___."',
      promptTranslation: 'Compro comida en el supermercado.',
      correctAnswer: 'supermarket',
      options: ['supermarket', 'police station', 'museum'],
      explanation: '"Supermarket" es el supermercado, donde compramos comida. → I buy food at the supermarket.',
    },
    {
      id: 'a1-m11-l1-ex6',
      type: 'fill_blank',
      concept: 'places vocabulary',
      difficulty: 2,
      prompt: 'Completa: "Is there a ___ near here?" (farmacia)',
      promptTranslation: '¿Hay una farmacia cerca de aquí?',
      correctAnswer: 'pharmacy',
      acceptedAnswers: ['Pharmacy', 'pharmacy.', 'chemist\'s'],
      explanation: '"Pharmacy" (o "chemist\'s" en Reino Unido) significa farmacia. → Is there a pharmacy near here?',
    },
    {
      id: 'a1-m11-l1-ex7',
      type: 'fill_blank',
      concept: 'places vocabulary',
      difficulty: 2,
      prompt: 'Completa: "I send letters at the ___." (correos)',
      promptTranslation: 'Envío cartas en la oficina de correos.',
      correctAnswer: 'post office',
      acceptedAnswers: ['Post office', 'post office.', 'the post office'],
      explanation: '"Post office" es la oficina de correos, donde enviamos cartas.',
    },
    {
      id: 'a1-m11-l1-ex8',
      type: 'translate',
      concept: 'places + next to',
      difficulty: 3,
      prompt: 'Traduce: "El banco está al lado del supermercado."',
      correctAnswer: 'The bank is next to the supermarket.',
      acceptedAnswers: ['The bank is next to the supermarket', 'The bank is next to the supermarket.', 'the bank is next to the supermarket.'],
      acceptApproximate: true,
      explanation: '"El banco" = the bank, "está al lado de" = is next to, "el supermercado" = the supermarket.',
    },
    {
      id: 'a1-m11-l1-ex9',
      type: 'translate',
      concept: 'Is there a...?',
      difficulty: 3,
      prompt: 'Traduce: "¿Hay una farmacia cerca de aquí?"',
      correctAnswer: 'Is there a pharmacy near here?',
      acceptedAnswers: ['Is there a pharmacy near here', 'Is there a pharmacy near here?', 'is there a pharmacy near here?'],
      acceptApproximate: true,
      explanation: '"¿Hay un/una...?" en singular = Is there a...? → Is there a pharmacy near here?',
    },
    {
      id: 'a1-m11-l1-ex10',
      type: 'error_correction',
      concept: 'Is there a...? word order',
      difficulty: 3,
      prompt: 'Corrige el error: "A bank is near here?"',
      correctAnswer: 'Is there a bank near here?',
      acceptedAnswers: ['Is there a bank near here', 'Is there a bank near here?', 'is there a bank near here?'],
      acceptApproximate: true,
      explanation: 'Para preguntar si existe algo usamos "Is there a...?" al principio, no "A bank is...?". → Is there a bank near here?',
    },
  ],
  miniTest: [
    {
      id: 'a1-m11-l1-mt1',
      type: 'multiple_choice',
      concept: 'places vocabulary',
      difficulty: 1,
      prompt: 'Completa: "The train is at the ___."',
      promptTranslation: 'El tren está en la estación.',
      correctAnswer: 'station',
      options: ['station', 'shop', 'hotel'],
      explanation: '"Station" es la estación, donde están los trenes. → The train is at the station.',
    },
    {
      id: 'a1-m11-l1-mt2',
      type: 'multiple_choice',
      concept: 'places vocabulary',
      difficulty: 1,
      prompt: '¿Cuál es la traducción de "biblioteca"?',
      promptTranslation: 'Which is the translation of "biblioteca"?',
      correctAnswer: 'library',
      options: ['library', 'theatre', 'museum'],
      explanation: '"Library" significa biblioteca. "Theatre" es teatro y "museum" es museo.',
    },
    {
      id: 'a1-m11-l1-mt3',
      type: 'fill_blank',
      concept: 'places vocabulary',
      difficulty: 2,
      prompt: 'Completa: "We eat at a ___ on Sunday." (restaurante)',
      promptTranslation: 'Comemos en un restaurante el domingo.',
      correctAnswer: 'restaurant',
      acceptedAnswers: ['Restaurant', 'restaurant.'],
      explanation: '"Restaurant" significa restaurante, donde comemos. → We eat at a restaurant on Sunday.',
    },
    {
      id: 'a1-m11-l1-mt4',
      type: 'fill_blank',
      concept: 'Is there a...?',
      difficulty: 2,
      prompt: 'Completa: "___ there a park near here?"',
      promptTranslation: '¿Hay un parque cerca de aquí?',
      correctAnswer: 'Is',
      acceptedAnswers: ['Is', 'is'],
      explanation: 'Para preguntar si existe algo usamos "Is there a...?" → Is there a park near here?',
    },
    {
      id: 'a1-m11-l1-mt5',
      type: 'translate',
      concept: 'places review',
      difficulty: 3,
      prompt: 'Traduce: "Voy a la biblioteca los sábados."',
      correctAnswer: 'I go to the library on Saturdays.',
      acceptedAnswers: ['I go to the library on Saturdays', 'I go to the library on Saturdays.', 'i go to the library on saturdays.'],
      acceptApproximate: true,
      explanation: '"Voy a la biblioteca" = I go to the library, "los sábados" = on Saturdays (con los días usamos "on").',
    },
  ],
  reviewItems: ['a1-m10-l5'],
  prerequisites: ['a1-m10-l5'],
}
