import type { Module } from '../../types'
import { lesson71ReportedStatements } from './lesson-71-reported-statements'
import { lesson72ReportedQuestions } from './lesson-72-reported-questions'
import { lesson73ReportedCommands } from './lesson-73-reported-commands'
import { lesson74ReportedTimePlace } from './lesson-74-reported-time-place'
import { lesson75MiniTest } from './lesson-75-mini-test'

export const module7ReportedSpeech: Module = {
  id: 'm7-reported-speech',
  levelId: 'b1',
  order: 6,
  title: 'Reported Speech (full)',
  objective: 'Contar lo que otros dijeron en estilo indirecto: oraciones con backshift de tiempos, preguntas con if/wh- sin inversión, órdenes y peticiones con tell/ask + to, y cambios de tiempo y lugar.',
  vocabularyThemes: ['reporting verbs', 'time and place expressions', 'phone conversations'],
  grammarTopics: [
    'Reported statements with backshift (present→past, past→past perfect, will→would, can→could)',
    'Reported questions: ask if/whether (yes/no) and ask + wh- + subject + verb',
    'Reported commands and requests: tell/ask + person + (not) to + infinitive',
    'Reported time and place changes: here→there, today→that day, tomorrow→the next day, yesterday→the day before',
    'say vs tell',
  ],
  communicationGoals: [
    'Report what someone said, asked or ordered',
    'Pass on information from a phone call or conversation',
    'Report questions without inversion',
    'Report negative commands politely',
    'Adjust time and place references when reporting',
  ],
  lessons: [
    lesson71ReportedStatements,
    lesson72ReportedQuestions,
    lesson73ReportedCommands,
    lesson74ReportedTimePlace,
    lesson75MiniTest,
  ],
  checkpoint: {
    id: 'm7-checkpoint',
    moduleId: 'm7-reported-speech',
    title: 'Checkpoint: Reported Speech',
    passingScore: 80,
    exercises: [
      ...lesson71ReportedStatements.exercises.slice(0, 2),
      ...lesson72ReportedQuestions.exercises.slice(0, 2),
      ...lesson73ReportedCommands.exercises.slice(0, 2),
      ...lesson74ReportedTimePlace.exercises.slice(0, 2),
      lesson75MiniTest.exercises[5],
    ],
  },
}
