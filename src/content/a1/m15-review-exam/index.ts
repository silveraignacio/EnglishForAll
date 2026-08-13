import type { Module } from '../../types'
import { lesson151GrammarReview } from './lesson-151-grammar-review'
import { lesson152VocabReview } from './lesson-152-vocab-review'
import { lesson153CommunicationReview } from './lesson-153-communication-review'
import { lesson154FinalExam } from './lesson-154-final-exam'

export const module15ReviewExam: Module = {
  id: 'm15-review-exam',
  levelId: 'a1',
  order: 14,
  title: 'Review & Final A1 Exam',
  objective: 'Repaso integral de todo el curso A1: gramática, vocabulario, comunicación y el examen final.',
  vocabularyThemes: [
    'greetings',
    'numbers',
    'countries',
    'family',
    'routines',
    'food',
    'clothes',
    'places',
    'colours',
    'jobs',
  ],
  grammarTopics: [
    'verb to be (present & past)',
    'present simple',
    'present continuous',
    'past simple',
    'going to (future)',
  ],
  communicationGoals: [
    'Review all A1 grammar tenses',
    'Review all A1 vocabulary themes',
    'Practice real-life communication situations',
    'Pass the final A1 exam',
  ],
  lessons: [
    lesson151GrammarReview,
    lesson152VocabReview,
    lesson153CommunicationReview,
    lesson154FinalExam,
  ],
  checkpoint: {
    id: 'm15-checkpoint',
    moduleId: 'm15-review-exam',
    title: 'Examen Final A1',
    passingScore: 60,
    exercises: lesson154FinalExam.exercises,
  },
}
