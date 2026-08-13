import type { Module } from '../../types'
import { lesson61PassiveNegative } from './lesson-61-passive-negative'
import { lesson62FuturePassive } from './lesson-62-future-passive'
import { lesson63ModalGetPassive } from './lesson-63-modal-get-passive'
import { lesson64MiniTest } from './lesson-64-mini-test'

export const module6PassiveExtended: Module = {
  id: 'm6-passive-extended',
  levelId: 'b1',
  order: 5,
  title: 'Passive Voice (extended)',
  objective: 'Formar la voz pasiva negativa, en futuro y con modales, y usar la pasiva informal con get para resultados y eventos de la vida.',
  vocabularyThemes: ['news', 'announcements', 'work', 'life events'],
  grammarTopics: [
    'Negative passive (present & past): is/are/was/were + not + participle',
    'Future passive: will be + participle',
    'Modal passive: can/must/should + be + participle',
    'Get passive (informal): get + participle',
  ],
  communicationGoals: [
    'Report events without mentioning who did them',
    'Talk about future events in the passive',
    'Express obligation, possibility and advice in the passive',
    'Describe results and life events informally with get',
  ],
  lessons: [
    lesson61PassiveNegative,
    lesson62FuturePassive,
    lesson63ModalGetPassive,
    lesson64MiniTest,
  ],
  checkpoint: {
    id: 'm6-checkpoint',
    moduleId: 'm6-passive-extended',
    title: 'Checkpoint: Passive Voice (extended)',
    passingScore: 80,
    exercises: [
      ...lesson61PassiveNegative.exercises.slice(0, 2),
      ...lesson62FuturePassive.exercises.slice(0, 2),
      ...lesson63ModalGetPassive.exercises.slice(0, 2),
      ...lesson64MiniTest.exercises.slice(0, 2),
    ],
  },
}
