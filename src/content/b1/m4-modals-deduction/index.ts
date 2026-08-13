import type { Module } from '../../types'
import { lesson41PresentDeduction } from './lesson-41-present-deduction'
import { lesson42Possibility } from './lesson-42-possibility'
import { lesson43PastDeduction } from './lesson-43-past-deduction'
import { lesson44MiniTest } from './lesson-44-mini-test'

export const module4ModalsDeduction: Module = {
  id: 'm4-modals-deduction',
  levelId: 'b1',
  order: 3,
  title: 'Modals of Deduction',
  objective: 'Hacer deducciones y especular sobre el presente y el pasado con must, can\'t, may, might y could.',
  vocabularyThemes: ['modals', 'evidence and clues', 'travel', 'work'],
  grammarTopics: [
    'Present deduction: must be / can\'t be',
    'Possibility: might / may / could',
    'Past deduction: must have / can\'t have / might have + participle',
  ],
  communicationGoals: [
    'Make logical deductions based on evidence',
    'Express different levels of certainty',
    'Speculate about past events and solve puzzles',
  ],
  lessons: [
    lesson41PresentDeduction,
    lesson42Possibility,
    lesson43PastDeduction,
    lesson44MiniTest,
  ],
  checkpoint: {
    id: 'm4-checkpoint',
    moduleId: 'm4-modals-deduction',
    title: 'Checkpoint: Modals of Deduction',
    passingScore: 80,
    exercises: [
      ...lesson41PresentDeduction.exercises.slice(0, 2),
      ...lesson42Possibility.exercises.slice(0, 2),
      ...lesson43PastDeduction.exercises.slice(0, 2),
      ...lesson44MiniTest.exercises.slice(0, 2),
    ],
  },
}
