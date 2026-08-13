import type { Module } from '../../types'
import { lesson111SayVsTell } from './lesson-111-say-vs-tell'
import { lesson112ReportedStatements } from './lesson-112-reported-statements'
import { lesson113ReportedQuestions } from './lesson-113-reported-questions'
import { lesson114MiniTest } from './lesson-114-mini-test'

export const module11ReportedSpeech: Module = {
  id: 'm11-reported-speech',
  levelId: 'a2',
  order: 10,
  title: 'Reported Speech Basics',
  objective: 'Contar lo que otras personas dijeron: diferenciar say/tell, convertir oraciones al estilo indirecto con cambio de tiempo, y transformar preguntas (ask if / wh-).',
  vocabularyThemes: ['reporting verbs', 'say vs tell', 'reported questions'],
  grammarTopics: [
    'say vs tell',
    'reported statements (backshift: am→was, will→would)',
    'reported questions (ask if / wh-)',
  ],
  communicationGoals: [
    'Report what someone said',
    'Report questions someone asked',
    'Use say and tell correctly',
  ],
  lessons: [
    lesson111SayVsTell,
    lesson112ReportedStatements,
    lesson113ReportedQuestions,
    lesson114MiniTest,
  ],
  checkpoint: {
    id: 'm11-checkpoint',
    moduleId: 'm11-reported-speech',
    title: 'Checkpoint: Reported Speech Basics',
    passingScore: 80,
    exercises: [
      ...lesson111SayVsTell.exercises.slice(0, 2),
      ...lesson112ReportedStatements.exercises.slice(0, 1),
      ...lesson113ReportedQuestions.exercises.slice(0, 1),
      ...lesson114MiniTest.exercises.slice(5, 6),
    ],
  },
}
