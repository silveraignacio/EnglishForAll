import type { Level } from '../types'
import { module1Compare } from './m1-compare'
import { module2PresentPerfect } from './m2-present-perfect'
import { module3PastContinuous } from './m3-past-continuous'
import { module4FutureForms } from './m4-future-forms'
import { module5Obligation } from './m5-obligation'
import { module6Possibility } from './m6-possibility'
import { module7Conditionals } from './m7-conditionals'
import { module8RelativeClauses } from './m8-relative-clauses'
import { module9Passive } from './m9-passive'
import { module10Reflexives } from './m10-reflexives'
import { module11ReportedSpeech } from './m11-reported-speech'
import { module12GerundsInfinitives } from './m12-gerunds-infinitives'

export const a2Level: Level = {
  id: 'a2',
  name: 'A2',
  title: 'Waystage',
  description: 'Curso de nivel A2 del MCER: condicionales, oraciones relativas, voz pasiva y más.',
  status: 'available',
  modules: [
    module1Compare,
    module2PresentPerfect,
    module3PastContinuous,
    module4FutureForms,
    module5Obligation,
    module6Possibility,
    module7Conditionals,
    module8RelativeClauses,
    module9Passive,
    module10Reflexives,
    module11ReportedSpeech,
    module12GerundsInfinitives,
  ],
}
