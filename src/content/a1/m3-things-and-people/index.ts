import type { Module } from '../../types'
import { lesson31Articles } from './lesson-31-articles'
import { lesson32ArticlesThe } from './lesson-32-articles-the'
import { lesson33Plural } from './lesson-33-plural'
import { lesson34Demonstratives } from './lesson-34-demonstratives'

export const module3ThingsAndPeople: Module = {
  id: 'm3-things-and-people',
  levelId: 'a1',
  order: 2,
  title: 'Things & People Around Me',
  objective: 'Aprender a usar los artículos (a, an, the), los demostrativos básicos (this, that) y formar plurales.',
  vocabularyThemes: ['objects', 'articles', 'singular', 'plural', 'demonstratives'],
  grammarTopics: ['indefinite articles a/an', 'definite article the', 'plurals', 'demonstratives this/that'],
  communicationGoals: ['Refer to objects with a/an/the', 'Form plurals of nouns', 'Point to things (this/that)'],
  lessons: [
    lesson31Articles,
    lesson32ArticlesThe,
    lesson33Plural,
    lesson34Demonstratives,
  ],
  checkpoint: {
    id: 'm3-checkpoint',
    moduleId: 'm3-things-and-people',
    title: 'Checkpoint: Things & People Around Me',
    passingScore: 80,
    exercises: [
      ...lesson31Articles.exercises.slice(0, 2),
      ...lesson33Plural.exercises.slice(0, 2),
      ...lesson34Demonstratives.exercises.slice(0, 2),
    ],
  },
}