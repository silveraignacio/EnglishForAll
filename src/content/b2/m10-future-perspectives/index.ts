import type { Module } from '../../types'
import { lesson101FuturePerfectContinuous } from './lesson-101-future-perfect-continuous'
import { lesson102FutureContinuousQuestionsAndPoliteness } from './lesson-102-future-continuous-questions-politeness'
import { lesson103FutureInThePast } from './lesson-103-future-in-the-past'
import { lesson104MiniTest } from './lesson-104-mini-test'

export const module10FuturePerspectives: Module = {
  id: 'm10-future-perspectives',
  levelId: 'b2',
  order: 9,
  title: 'Future Perspectives & Future in the Past',
  objective: 'Hablar del futuro desde perspectivas avanzadas: duración acumulada (future perfect continuous), formas de cortesía (future continuous en preguntas), y cómo se veía el futuro desde el pasado (future in the past).',
  vocabularyThemes: ['future', 'duration', 'time perspectives', 'communication', 'politeness'],
  grammarTopics: [
    'Future perfect continuous: will have been + -ing',
    'Future continuous in questions and polite forms',
    'Future in the past: was/were about to, was/were on the point of',
    'Present continuous viewed from the past',
  ],
  communicationGoals: [
    'Express accumulated duration until a future point',
    'Ask politely about future actions',
    'Describe imminent past actions',
    'Switch time perspectives in narratives',
    'Use refined language in formal contexts',
  ],
  lessons: [
    lesson101FuturePerfectContinuous,
    lesson102FutureContinuousQuestionsAndPoliteness,
    lesson103FutureInThePast,
    lesson104MiniTest,
  ],
  checkpoint: {
    id: 'm10-checkpoint',
    moduleId: 'm10-future-perspectives',
    title: 'Checkpoint: Future Perspectives & Future in the Past',
    passingScore: 80,
    exercises: [
      ...lesson101FuturePerfectContinuous.exercises.slice(0, 2),
      ...lesson102FutureContinuousQuestionsAndPoliteness.exercises.slice(0, 2),
      ...lesson103FutureInThePast.exercises.slice(0, 2),
      ...lesson104MiniTest.exercises.slice(0, 2),
    ],
  },
}
