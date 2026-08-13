import type { Module } from '../../types'
import { lesson11Comparatives } from './lesson-11-comparatives'
import { lesson12Superlatives } from './lesson-12-superlatives'
import { lesson13AsAsModifiers } from './lesson-13-as-as-modifiers'
import { lesson14MiniTest } from './lesson-14-mini-test'

export const module1Compare: Module = {
  id: 'm1-compare',
  levelId: 'a2',
  order: 0,
  title: 'Comparatives & Superlatives',
  objective: 'Comparar personas, lugares y cosas: comparativos (-er/more), superlativos (-est/the most), igualdad con as...as y modificadores de intensidad.',
  vocabularyThemes: ['adjectives', 'places in the city', 'comparative modifiers'],
  grammarTopics: [
    'Comparatives: adj + -er / more + adj',
    'Irregular comparatives: better, worse',
    'Superlatives: the + adj + -est / the most + adj',
    'Irregular superlatives: the best, the worst',
    'Equality: as...as / not as...as',
    'Modifiers: much, a lot, a little',
  ],
  communicationGoals: [
    'Compare two things or people',
    'Express the maximum degree of a quality',
    'Say that two things are (not) the same',
    'Emphasize how big or small a difference is',
    'Compare cities, products and people',
  ],
  lessons: [
    lesson11Comparatives,
    lesson12Superlatives,
    lesson13AsAsModifiers,
    lesson14MiniTest,
  ],
  checkpoint: {
    id: 'm1-checkpoint',
    moduleId: 'm1-compare',
    title: 'Checkpoint: Comparatives & Superlatives',
    passingScore: 80,
    exercises: [
      ...lesson11Comparatives.exercises.slice(0, 2),
      ...lesson12Superlatives.exercises.slice(0, 2),
      ...lesson13AsAsModifiers.exercises.slice(0, 2),
      ...lesson14MiniTest.exercises.slice(4, 7),
    ],
  },
}
