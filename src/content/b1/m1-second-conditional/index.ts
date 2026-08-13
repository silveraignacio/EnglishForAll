import type { Module } from '../../types'
import { lesson11FormMeaning } from './lesson-11-form-meaning'
import { lesson12Advice } from './lesson-12-advice'
import { lesson13FirstVsSecond } from './lesson-13-first-vs-second'
import { lesson14MiniTest } from './lesson-14-mini-test'

export const module1SecondConditional: Module = {
  id: 'm1-second-conditional',
  levelId: 'b1',
  order: 0,
  title: 'Second Conditional',
  objective: 'Formar hipótesis irreales e imaginarias con if + past simple + would/could, dar consejos con "If I were you" y diferenciar el primer del segundo condicional.',
  vocabularyThemes: ['conditionals', 'advice', 'life events', 'dreams and wishes'],
  grammarTopics: [
    'Second conditional: if + past simple, would/could + base verb',
    'Advice: If I were you, I would/wouldn\'t...',
    'First vs second conditional contrast',
  ],
  communicationGoals: [
    'Talk about imaginary and unreal situations',
    'Give hypothetical advice with "If I were you"',
    'Distinguish real possibilities from imaginary dreams',
  ],
  lessons: [
    lesson11FormMeaning,
    lesson12Advice,
    lesson13FirstVsSecond,
    lesson14MiniTest,
  ],
  checkpoint: {
    id: 'm1-checkpoint',
    moduleId: 'm1-second-conditional',
    title: 'Checkpoint: Second Conditional',
    passingScore: 80,
    exercises: [
      ...lesson11FormMeaning.exercises.slice(0, 2),
      ...lesson12Advice.exercises.slice(0, 2),
      ...lesson13FirstVsSecond.exercises.slice(0, 2),
      ...lesson14MiniTest.exercises.slice(0, 2),
    ],
  },
}
