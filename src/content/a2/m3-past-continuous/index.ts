import type { Module } from '../../types'
import { lesson31PastContinuousAffirmative } from './lesson-31-past-continuous-affirmative'
import { lesson32PastContinuousNegQuestions } from './lesson-32-past-continuous-neg-questions'
import { lesson33PastSimpleVsContinuous } from './lesson-33-past-simple-vs-continuous'
import { lesson34MiniTest } from './lesson-34-mini-test'

export const module3PastContinuous: Module = {
  id: 'm3-past-continuous',
  levelId: 'a2',
  order: 2,
  title: 'Past Continuous & Narrative',
  objective: 'Describir acciones en progreso en el pasado con was/were + -ing, narrar acciones interrumpidas con Past Simple y contar historias con secuenciadores.',
  vocabularyThemes: ['everyday actions', 'narrative verbs', 'sequence markers'],
  grammarTopics: [
    'Past Continuous affirmative: was/were + verb-ing',
    'Past Continuous negative: wasn\'t / weren\'t',
    'Past Continuous questions and short answers',
    'Past Continuous vs Past Simple (interrupted actions)',
    'when / while',
    'Narrative sequencing: first, then, after that, finally',
  ],
  communicationGoals: [
    'Say what you were doing at a past moment',
    'Describe background actions in a story',
    'Narrate interrupted actions',
    'Ask and answer about past activities',
    'Tell a short story in chronological order',
  ],
  lessons: [
    lesson31PastContinuousAffirmative,
    lesson32PastContinuousNegQuestions,
    lesson33PastSimpleVsContinuous,
    lesson34MiniTest,
  ],
  checkpoint: {
    id: 'm3-checkpoint',
    moduleId: 'm3-past-continuous',
    title: 'Checkpoint: Past Continuous & Narrative',
    passingScore: 80,
    exercises: [
      ...lesson31PastContinuousAffirmative.exercises.slice(0, 2),
      ...lesson32PastContinuousNegQuestions.exercises.slice(0, 2),
      ...lesson33PastSimpleVsContinuous.exercises.slice(0, 2),
      ...lesson34MiniTest.exercises.slice(4, 7),
    ],
  },
}
