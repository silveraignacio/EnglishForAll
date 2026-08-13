import type { Module } from '../../types'
import { lesson141Colours } from './lesson-141-colours'
import { lesson142Clothes } from './lesson-142-clothes'
import { lesson143Shopping } from './lesson-143-shopping'
import { lesson144MuchMany } from './lesson-144-much-many'
import { lesson145MiniTest } from './lesson-145-mini-test'

export const module14Shopping: Module = {
  id: 'm14-shopping',
  levelId: 'a1',
  order: 13,
  title: 'Shopping & Practical English',
  objective: 'Comprar en inglés: colores y descripciones, ropa, frases de tienda (precios y tallas) y cantidades con much, many y a lot of.',
  vocabularyThemes: ['colours', 'adjectives for description', 'clothes', 'sizes', 'shopping phrases'],
  grammarTopics: [
    'Adjective order (size before colour)',
    'Always-plural clothes nouns (trousers, jeans, shoes...)',
    'How much is...? / How much are...?',
    'much / many / a lot of',
  ],
  communicationGoals: [
    'Describe clothes and objects with colours and adjectives',
    'Name common items of clothing',
    'Ask for prices and sizes in a shop',
    'Talk about quantities with much / many / a lot of',
  ],
  lessons: [
    lesson141Colours,
    lesson142Clothes,
    lesson143Shopping,
    lesson144MuchMany,
    lesson145MiniTest,
  ],
  checkpoint: {
    id: 'm14-checkpoint',
    moduleId: 'm14-shopping',
    title: 'Checkpoint: Shopping & Practical English',
    passingScore: 80,
    exercises: [
      ...lesson141Colours.exercises.slice(0, 1),
      ...lesson142Clothes.exercises.slice(0, 1),
      ...lesson143Shopping.exercises.slice(0, 1),
      ...lesson144MuchMany.exercises.slice(0, 1),
      ...lesson145MiniTest.miniTest.slice(0, 1),
    ],
  },
}
