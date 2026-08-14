import type { Level } from '../types'
import { module1ModalPerfects } from './m1-modal-perfects'
import { module2CausativePassive } from './m2-causative-passive'
import { module3AdvancedReportedSpeech } from './m3-advanced-reported-speech'
import { module4RelativesNounPhrases } from './m4-relatives-noun-phrases'
import { module5ParticipleClauses } from './m5-participle-clauses'
import { module6AdvancedConditionals } from './m6-advanced-conditionals'
import { module7EmphasisInversion } from './m7-emphasis-inversion'
import { module8AdvancedComparison } from './m8-advanced-comparison'
import { module9VerbPatternsPhrasal } from './m9-verb-patterns-phrasal'
import { module10FuturePerspectives } from './m10-future-perspectives'
import { module11DiscourseHedging } from './m11-discourse-hedging'

export const b2Level: Level = {
  id: 'b2',
  name: 'B2',
  title: 'Vantage',
  description: 'Curso de nivel B2 del MCER: deducción y modalidad avanzada, voz pasiva y causativa avanzada, estilo indirecto avanzado, relativas y sintagmas complejos, cláusulas de participio, condicionales avanzadas, énfasis e inversión, comparación avanzada, patrones verbales y phrasal verbs, perspectivas de futuro, y marcadores del discurso.',
  status: 'available',
  modules: [
    module1ModalPerfects,
    module2CausativePassive,
    module3AdvancedReportedSpeech,
    module4RelativesNounPhrases,
    module5ParticipleClauses,
    module6AdvancedConditionals,
    module7EmphasisInversion,
    module8AdvancedComparison,
    module9VerbPatternsPhrasal,
    module10FuturePerspectives,
    module11DiscourseHedging,
  ],
}
