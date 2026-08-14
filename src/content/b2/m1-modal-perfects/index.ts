import type { Module } from '../../types'
import { lesson11MustHaveCantHave } from './lesson-11-must-have-cant-have'
import { lesson12MayMightCouldHave } from './lesson-12-may-might-could-have'
import { lesson13ModalBeExpressions } from './lesson-13-modal-be-expressions'
import { lesson14MiniTest } from './lesson-14-mini-test'

export const module1ModalPerfects: Module = {
  id: 'm1-modal-perfects',
  levelId: 'b2',
  order: 0,
  title: 'Modal Perfects',
  objective: 'Dominar deducciones sobre el pasado con modales (must have, can\'t have, may/might/could have) y expresiones modales con "be" para hablar de expectativas, certeza e inevitabilidad.',
  vocabularyThemes: ['modals', 'deductions', 'probability', 'expectations', 'past events'],
  grammarTopics: [
    'Modal perfects: must have / can\'t have / may have + past participle',
    'Possibility vs. certainty in the past',
    'Regret with could have',
    'Be expressions: supposed to, bound to, likely to, due to',
    'Expressing probability and expectations',
  ],
  communicationGoals: [
    'Make logical deductions about past events based on evidence',
    'Express possibility and certainty about what happened',
    'Communicate expectations and scheduled events',
    'Discuss probability and certainty about future outcomes',
    'Distinguish between weak and strong probability',
  ],
  lessons: [
    lesson11MustHaveCantHave,
    lesson12MayMightCouldHave,
    lesson13ModalBeExpressions,
    lesson14MiniTest,
  ],
  checkpoint: {
    id: 'm1-checkpoint',
    moduleId: 'm1-modal-perfects',
    title: 'Checkpoint: Modal Perfects',
    passingScore: 80,
    exercises: [
      ...lesson11MustHaveCantHave.exercises.slice(0, 2),
      ...lesson12MayMightCouldHave.exercises.slice(0, 2),
      ...lesson13ModalBeExpressions.exercises.slice(0, 2),
      ...lesson14MiniTest.exercises.slice(0, 2),
    ],
  },
}
