import type { Module } from '../../types'
import { lesson21Causative } from './lesson-21-causative'
import { lesson22PassiveCompoundTenses } from './lesson-22-passive-compound-tenses'
import { lesson23PassiveModalsDoubleObjects } from './lesson-23-passive-modals-double-objects'
import { lesson24MiniTest } from './lesson-24-mini-test'

export const module2CausativePassive: Module = {
  id: 'm2-causative-passive',
  levelId: 'b2',
  order: 1,
  title: 'Causative & Advanced Passive',
  objective: 'Dominar estructuras causativas (have/get) y formas avanzadas de la pasiva: tiempos compuestos, modales, verbos de dos objetos, e infinitivos pasivos impersonales.',
  vocabularyThemes: ['causative verbs', 'passive processes', 'professional services', 'deduction and reporting'],
  grammarTopics: [
    'Causative: have + object + past participle (have something done)',
    'Causative: get + object + to-infinitive (get someone to do)',
    'Passive compound tenses: present/past continuous passive',
    'Passive compound tenses: present/past perfect passive',
    'Passive with modals: must be done, can be done, should be done',
    'Passive with modal perfect: must have been done',
    'Double object passive: She was given / Was given to her',
    'Impersonal infinitive passive: It is said that / He is thought to be',
  ],
  communicationGoals: [
    'Express that you arrange for something to be done or convince someone to do something',
    'Describe processes and actions in progress or recently completed',
    'Make deductions about past events in passive form',
    'Report what people say or believe without direct assertion',
    'Handle complex passive constructions in professional and academic contexts',
  ],
  lessons: [
    lesson21Causative,
    lesson22PassiveCompoundTenses,
    lesson23PassiveModalsDoubleObjects,
    lesson24MiniTest,
  ],
  checkpoint: {
    id: 'b2-m2-checkpoint',
    moduleId: 'm2-causative-passive',
    title: 'Checkpoint: Causative & Advanced Passive',
    passingScore: 80,
    exercises: [
      ...lesson21Causative.exercises.slice(0, 2),
      ...lesson22PassiveCompoundTenses.exercises.slice(0, 2),
      ...lesson23PassiveModalsDoubleObjects.exercises.slice(0, 2),
      ...lesson24MiniTest.exercises.slice(0, 2),
    ],
  },
}
