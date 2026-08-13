import type { Module } from '../../types'
import { lesson121UsedTo } from './lesson-121-used-to'
import { lesson122WouldHabits } from './lesson-122-would-habits'
import { lesson123TagQuestions } from './lesson-123-tag-questions'
import { lesson124MiniTest } from './lesson-124-mini-test'

export const module12UsedToTags: Module = {
  id: 'm12-used-to-tags',
  levelId: 'b1',
  order: 11,
  title: 'Used to / Would + Tag Questions',
  objective: 'Hablar de hábitos y estados del pasado con used to, narrar hábitos con would, y confirmar información con tag questions.',
  vocabularyThemes: ['childhood memories', 'old habits', 'family stories', 'confirming information'],
  grammarTopics: [
    'used to for past habits and states (affirmative, negative, questions)',
    'would for past habits in narratives',
    'Tag questions: affirmative + negative tag, negative + affirmative tag',
    'Question tags with to be, present simple, present perfect and modals',
  ],
  communicationGoals: [
    'Talk about past habits and situations that no longer exist',
    'Narrate memories and stories from the past with a nostalgic tone',
    'Confirm information and ask for agreement',
    'Respond naturally to tag questions',
  ],
  lessons: [
    lesson121UsedTo,
    lesson122WouldHabits,
    lesson123TagQuestions,
    lesson124MiniTest,
  ],
  checkpoint: {
    id: 'm12-checkpoint',
    moduleId: 'm12-used-to-tags',
    title: 'Checkpoint: Used to / Would + Tag Questions',
    passingScore: 80,
    exercises: [
      ...lesson121UsedTo.exercises.slice(0, 2),
      ...lesson122WouldHabits.exercises.slice(0, 2),
      ...lesson123TagQuestions.exercises.slice(0, 2),
      lesson124MiniTest.exercises[6],
    ],
  },
}
