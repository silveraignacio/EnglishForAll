import type { Module } from '../../types'
import { lesson111Places } from './lesson-111-places'
import { lesson112Transport } from './lesson-112-transport'
import { lesson113Directions } from './lesson-113-directions'
import { lesson114PrepositionsReview } from './lesson-114-prepositions-review'
import { lesson115MiniTest } from './lesson-115-mini-test'

export const module11Places: Module = {
  id: 'm11-places',
  levelId: 'a1',
  order: 10,
  title: 'Places & Directions',
  objective: 'Aprender vocabulario de lugares de la ciudad, medios de transporte, pedir y dar direcciones, y preguntar por lugares.',
  vocabularyThemes: ['city places', 'transport', 'directions', 'prepositions of place'],
  grammarTopics: [
    'Is there a...? / Are there any...?',
    'by + transport / on foot',
    'imperatives for directions',
    'prepositions of place',
  ],
  communicationGoals: [
    'Name common places in a city',
    'Talk about how you travel (by bus, on foot...)',
    'Ask for and give directions',
    'Ask if a place exists nearby',
  ],
  lessons: [
    lesson111Places,
    lesson112Transport,
    lesson113Directions,
    lesson114PrepositionsReview,
    lesson115MiniTest,
  ],
  checkpoint: {
    id: 'm11-checkpoint',
    moduleId: 'm11-places',
    title: 'Checkpoint: Places & Directions',
    passingScore: 80,
    exercises: [
      ...lesson111Places.exercises.slice(0, 2),
      ...lesson112Transport.exercises.slice(0, 1),
      ...lesson113Directions.exercises.slice(0, 1),
      ...lesson114PrepositionsReview.exercises.slice(0, 1),
      ...lesson115MiniTest.exercises.slice(6, 7),
    ],
  },
}
