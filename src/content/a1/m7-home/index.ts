import type { Module } from '../../types'
import { lesson71Rooms } from './lesson-71-rooms'
import { lesson72ThereIs } from './lesson-72-there-is'
import { lesson73ThereIsQuestions } from './lesson-73-there-is-questions'
import { lesson74Prepositions } from './lesson-74-prepositions'
import { lesson75MiniTest } from './lesson-75-mini-test'

export const module7Home: Module = {
  id: 'm7-home',
  levelId: 'a1',
  order: 6,
  title: 'My Home — There is / There are',
  objective: 'Describir una casa, usar "there is/there are" para expresar existencia y las preposiciones de lugar.',
  vocabularyThemes: ['rooms', 'furniture', 'home', 'prepositions of place'],
  grammarTopics: [
    'There is / There are (afirmativo)',
    "There is/are (negativo y preguntas)",
    'short answers (Yes, there is / No, there aren\'t)',
    'prepositions of place',
  ],
  communicationGoals: ['Describe a house and its rooms', 'Talk about what there is in a home', 'Ask and answer about things that exist', 'Say where things are'],
  lessons: [
    lesson71Rooms,
    lesson72ThereIs,
    lesson73ThereIsQuestions,
    lesson74Prepositions,
    lesson75MiniTest,
  ],
  checkpoint: {
    id: 'm7-checkpoint',
    moduleId: 'm7-home',
    title: 'Checkpoint: My Home — There is / There are',
    passingScore: 80,
    exercises: [
      ...lesson71Rooms.exercises.slice(0, 1),
      ...lesson72ThereIs.exercises.slice(0, 1),
      ...lesson73ThereIsQuestions.exercises.slice(0, 1),
      ...lesson74Prepositions.exercises.slice(0, 1),
      ...lesson75MiniTest.exercises.slice(0, 1),
    ],
  },
}
