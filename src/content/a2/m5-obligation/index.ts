import type { Module } from '../../types'
import { lesson51Must } from './lesson-51-must'
import { lesson52HaveTo } from './lesson-52-have-to'
import { lesson53Should } from './lesson-53-should'
import { lesson54MiniTest } from './lesson-54-mini-test'

export const module5Obligation: Module = {
  id: 'm5-obligation',
  levelId: 'a2',
  order: 4,
  title: 'Obligation & Advice',
  objective: 'Expresar obligación, prohibición y ausencia de obligación con must, have to y should, y dar y recibir consejos.',
  vocabularyThemes: ['obligation', 'prohibition', 'advice', 'health', 'rules'],
  grammarTopics: ['must / mustn\'t', 'have to / don\'t have to', 'should / shouldn\'t'],
  communicationGoals: ['Express obligation and prohibition', 'Talk about what is not necessary', 'Give and receive advice', 'Ask for advice'],
  lessons: [
    lesson51Must,
    lesson52HaveTo,
    lesson53Should,
    lesson54MiniTest,
  ],
  checkpoint: {
    id: 'm5-checkpoint',
    moduleId: 'm5-obligation',
    title: 'Checkpoint: Obligation & Advice',
    passingScore: 80,
    exercises: [
      ...lesson51Must.exercises.slice(0, 2),
      ...lesson52HaveTo.exercises.slice(0, 2),
      ...lesson53Should.exercises.slice(0, 2),
      ...lesson54MiniTest.exercises.slice(0, 2),
    ],
  },
}
