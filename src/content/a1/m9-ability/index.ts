import type { Module } from '../../types'
import { lesson91Can } from './lesson-91-can'
import { lesson92Requests } from './lesson-92-requests'
import { lesson93Imperatives } from './lesson-93-imperatives'
import { lesson94MiniTest } from './lesson-94-mini-test'

export const module9Ability: Module = {
  id: 'm9-ability',
  levelId: 'a1',
  order: 8,
  title: 'Can / Can\'t — Ability & Requests',
  objective: 'Expresar habilidad con can/can\'t, pedir permiso y hacer peticiones con can, y dar órdenes e instrucciones con imperativos.',
  vocabularyThemes: ['abilities', 'classroom language', 'permission', 'requests'],
  grammarTopics: [
    "can / can't (ability)",
    'can for permission and requests',
    'imperatives (affirmative and negative)',
  ],
  communicationGoals: [
    'Talk about abilities',
    'Ask for permission',
    'Make requests',
    'Give instructions and orders',
  ],
  lessons: [
    lesson91Can,
    lesson92Requests,
    lesson93Imperatives,
    lesson94MiniTest,
  ],
  checkpoint: {
    id: 'm9-checkpoint',
    moduleId: 'm9-ability',
    title: 'Checkpoint: Can / Can\'t — Ability & Requests',
    passingScore: 80,
    exercises: [
      ...lesson91Can.exercises.slice(0, 2),
      ...lesson92Requests.exercises.slice(0, 1),
      ...lesson93Imperatives.exercises.slice(0, 1),
      ...lesson94MiniTest.exercises.slice(0, 1),
    ],
  },
}
