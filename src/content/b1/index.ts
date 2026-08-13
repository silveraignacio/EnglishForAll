import type { Level } from '../types'
import { module1SecondConditional } from './m1-second-conditional'
import { module2PastPerfect } from './m2-past-perfect'
import { module3PresentPerfectContinuous } from './m3-present-perfect-continuous'
import { module4ModalsDeduction } from './m4-modals-deduction'
import { module5FuturePerfectContinuous } from './m5-future-perfect-continuous'
import { module6PassiveExtended } from './m6-passive-extended'
import { module7ReportedSpeech } from './m7-reported-speech'
import { module8RelativeClausesExt } from './m8-relative-clauses-ext'
import { module9ThirdConditionalWishes } from './m9-third-conditional-wishes'
import { module10GerundsInfinitives } from './m10-gerunds-vs-infinitives'
import { module11LinkingWords } from './m11-linking-words'
import { module12UsedToTags } from './m12-used-to-tags'

export const b1Level: Level = {
  id: 'b1',
  name: 'B1',
  title: 'Threshold',
  description: 'Curso de nivel B1 del MCER: estilo indirecto, oraciones de relativo extendidas, tercer condicional, deseos, gerundios e infinitivos, conectores, used to/would y tag questions.',
  status: 'available',
  modules: [
    module1SecondConditional,
    module2PastPerfect,
    module3PresentPerfectContinuous,
    module4ModalsDeduction,
    module5FuturePerfectContinuous,
    module6PassiveExtended,
    module7ReportedSpeech,
    module8RelativeClausesExt,
    module9ThirdConditionalWishes,
    module10GerundsInfinitives,
    module11LinkingWords,
    module12UsedToTags,
  ],
}
