import type { Module } from '../../types'
import { lesson71ZeroConditional } from './lesson-71-zero-conditional'
import { lesson72FirstConditional } from './lesson-72-first-conditional'
import { lesson73UnlessWhenIf } from './lesson-73-unless-when-if'
import { lesson74MiniTest } from './lesson-74-mini-test'

export const module7Conditionals: Module = {
  id: 'm7-conditionals',
  levelId: 'a2',
  order: 6,
  title: 'Conditionals 0 & 1',
  objective: 'Expresar hechos generales y situaciones posibles futuras con los condicionales 0 y 1, y usar unless, when e if.',
  vocabularyThemes: ['weather', 'scientific facts', 'plans and possibilities', 'linking words'],
  grammarTopics: [
    'zero conditional (if + present simple)',
    'first conditional (if + present simple, will + verb)',
    'unless, when vs if',
  ],
  communicationGoals: ['Talk about general facts and scientific truths', 'Talk about possible future situations', 'Express conditions with unless, when and if'],
  lessons: [lesson71ZeroConditional, lesson72FirstConditional, lesson73UnlessWhenIf, lesson74MiniTest],
  checkpoint: {
    id: 'm7-checkpoint',
    moduleId: 'm7-conditionals',
    title: 'Checkpoint: Conditionals 0 & 1',
    passingScore: 80,
    exercises: [
      ...lesson71ZeroConditional.exercises.slice(0, 2),
      ...lesson72FirstConditional.exercises.slice(0, 2),
      ...lesson73UnlessWhenIf.exercises.slice(0, 1),
      ...lesson74MiniTest.exercises.slice(0, 1),
    ],
  },
}
