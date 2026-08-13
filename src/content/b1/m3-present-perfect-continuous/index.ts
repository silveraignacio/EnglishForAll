import type { Module } from '../../types'
import { lesson31FormMeaning } from './lesson-31-form-meaning'
import { lesson32SimpleVsContinuous } from './lesson-32-simple-vs-continuous'
import { lesson33MiniTest } from './lesson-33-mini-test'

export const module3PresentPerfectContinuous: Module = {
  id: 'm3-present-perfect-continuous',
  levelId: 'b1',
  order: 2,
  title: 'Present Perfect Continuous',
  objective: 'Usar have/has been + -ing para acciones que empezaron en el pasado y continúan, expresar duración con for/since, y diferenciar el present perfect simple del continuous.',
  vocabularyThemes: ['time expressions', 'weather', 'emotions', 'verbs of activity'],
  grammarTopics: [
    'Present perfect continuous: have/has + been + verb(-ing)',
    'Duration: for + period, since + starting point',
    'Present perfect simple vs continuous contrast',
  ],
  communicationGoals: [
    'Talk about actions that started in the past and continue now',
    'Explain a visible recent effect (why you look tired, hands dirty...)',
    'Choose between simple (result) and continuous (activity) correctly',
  ],
  lessons: [
    lesson31FormMeaning,
    lesson32SimpleVsContinuous,
    lesson33MiniTest,
  ],
  checkpoint: {
    id: 'm3-checkpoint',
    moduleId: 'm3-present-perfect-continuous',
    title: 'Checkpoint: Present Perfect Continuous',
    passingScore: 80,
    exercises: [
      ...lesson31FormMeaning.exercises.slice(0, 2),
      ...lesson32SimpleVsContinuous.exercises.slice(0, 2),
      ...lesson33MiniTest.exercises.slice(0, 2),
    ],
  },
}
