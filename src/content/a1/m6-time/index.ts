import type { Module } from '../../types'
import { lesson61Time } from './lesson-61-time'
import { lesson62Days } from './lesson-62-days'
import { lesson63MonthsDates } from './lesson-63-months-dates'
import { lesson64Frequency } from './lesson-64-frequency'
import { lesson65MiniTest } from './lesson-65-mini-test'

export const module6Time: Module = {
  id: 'm6-time',
  levelId: 'a1',
  order: 5,
  title: 'Time, Days & Dates',
  objective: 'Decir la hora, los días de la semana, los meses, las fechas y expresar la frecuencia en inglés.',
  vocabularyThemes: ['telling the time', 'days of the week', 'months', 'seasons', 'dates', 'frequency adverbs'],
  grammarTopics: [
    'telling the time (o\'clock, half past, quarter past/to)',
    'prepositions of time (at/on/in)',
    'ordinal numbers and dates',
    'adverbs of frequency (always, usually, never...)',
  ],
  communicationGoals: ['Ask and tell the time', 'Talk about days of the week', 'Say your birthday and dates', 'Express frequency (always, never, sometimes)'],
  lessons: [lesson61Time, lesson62Days, lesson63MonthsDates, lesson64Frequency, lesson65MiniTest],
  checkpoint: {
    id: 'm6-checkpoint',
    moduleId: 'm6-time',
    title: 'Checkpoint: Time, Days & Dates',
    passingScore: 80,
    exercises: [
      ...lesson61Time.exercises.slice(0, 2),
      ...lesson62Days.exercises.slice(0, 2),
      ...lesson63MonthsDates.exercises.slice(0, 1),
      ...lesson64Frequency.exercises.slice(0, 1),
    ],
  },
}
