import type { Level } from './types'

function comingSoon(id: string, name: string, title: string, description: string): Level {
  return {
    id,
    name,
    title,
    description,
    status: 'coming_soon',
    modules: [],
  }
}

export const b2Placeholder: Level = comingSoon(
  'b2',
  'B2',
  'Vantage',
  'Nivel B2 del MCER (próximamente).'
)

export const c1Placeholder: Level = comingSoon(
  'c1',
  'C1',
  'Effective Operational Proficiency',
  'Nivel C1 del MCER (próximamente).'
)

export const c2Placeholder: Level = comingSoon(
  'c2',
  'C2',
  'Mastery',
  'Nivel C2 del MCER (próximamente).'
)