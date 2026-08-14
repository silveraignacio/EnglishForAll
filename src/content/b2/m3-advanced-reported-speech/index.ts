import type { Module } from '../../types'
import { lesson31ReportingVerbs } from './lesson-31-reporting-verbs'
import { lesson32ReportedNegativeCommands } from './lesson-32-reported-negative-commands'
import { lesson33ReportingClausePosition } from './lesson-33-reporting-clause-position'
import { lesson34MiniTest } from './lesson-34-mini-test'

export const module3AdvancedReportedSpeech: Module = {
  id: 'm3-advanced-reported-speech',
  levelId: 'b2',
  order: 2,
  title: 'Advanced Reported Speech',
  objective: 'Dominar reportes avanzados: verbos de reporte con patrones especializados (+ing, +to-infinitivo, +objeto+to), órdenes negativas con backshift temporal completo, posiciones de cláusula de reporte, y citas académicas.',
  vocabularyThemes: ['reporting verbs', 'negation', 'academic language'],
  grammarTopics: [
    'Reporting verbs: admit/deny/suggest + -ing, promise/refuse/offer/agree + to-infinitivo, warn/persuade/convince + object + to-infinitivo',
    'Negative reported commands: tell/ask + object + not to + infinitivo',
    'Backshift of tense and time/place expressions in reported speech',
    'Reporting clause position: initial, media/final; direct vs. indirect quotation',
    'Academic present simple for universal facts',
    'Adverbial modification of reporting verbs',
  ],
  communicationGoals: [
    'Report speeches using varied and precise reporting verbs',
    'Report negative commands and instructions accurately',
    'Use correct time and place shifts when reporting past speech',
    'Write academic citations with present simple for universal truths',
    'Add nuance to reported speech through adverbial modification',
    'Use reporting clause positioning strategically for emphasis and register',
  ],
  lessons: [
    lesson31ReportingVerbs,
    lesson32ReportedNegativeCommands,
    lesson33ReportingClausePosition,
    lesson34MiniTest,
  ],
  checkpoint: {
    id: 'm3-checkpoint',
    moduleId: 'm3-advanced-reported-speech',
    title: 'Checkpoint: Advanced Reported Speech',
    passingScore: 80,
    exercises: [
      ...lesson31ReportingVerbs.exercises.slice(0, 2),
      ...lesson32ReportedNegativeCommands.exercises.slice(0, 2),
      ...lesson33ReportingClausePosition.exercises.slice(0, 2),
      lesson34MiniTest.exercises[4],
    ],
  },
}
