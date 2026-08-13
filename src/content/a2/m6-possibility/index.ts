import type { Module } from '../../types'
import { lesson61CanCould } from './lesson-61-can-could'
import { lesson62MayMight } from './lesson-62-may-might'
import { lesson63MayIPermission } from './lesson-63-may-i-permission'
import { lesson64MiniTest } from './lesson-64-mini-test'

export const module6Possibility: Module = {
  id: 'm6-possibility',
  levelId: 'a2',
  order: 5,
  title: 'Possibility & Permission',
  objective: 'Expresar habilidad, posibilidad y permiso con can, could, may y might, y usar el lenguaje funcional para ofrecer ayuda y hacer sugerencias.',
  vocabularyThemes: ['possibility', 'permission', 'requests', 'offers', 'suggestions', 'formal language'],
  grammarTopics: ['can / could', 'may / might', 'may I?', 'offers', 'suggestions'],
  communicationGoals: ['Talk about ability', 'Express possibility', 'Ask for and give permission', 'Make polite requests', 'Offer help', 'Make suggestions'],
  lessons: [
    lesson61CanCould,
    lesson62MayMight,
    lesson63MayIPermission,
    lesson64MiniTest,
  ],
  checkpoint: {
    id: 'm6-checkpoint',
    moduleId: 'm6-possibility',
    title: 'Checkpoint: Possibility & Permission',
    passingScore: 80,
    exercises: [
      ...lesson61CanCould.exercises.slice(0, 2),
      ...lesson62MayMight.exercises.slice(0, 2),
      ...lesson63MayIPermission.exercises.slice(0, 2),
      ...lesson64MiniTest.exercises.slice(0, 2),
    ],
  },
}
