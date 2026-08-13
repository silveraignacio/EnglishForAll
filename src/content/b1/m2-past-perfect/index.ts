import type { Module } from '../../types'
import { lesson21Affirmative } from './lesson-21-affirmative'
import { lesson22NegQuestions } from './lesson-22-neg-questions'
import { lesson23NarrativeTenses } from './lesson-23-narrative-tenses'
import { lesson24MiniTest } from './lesson-24-mini-test'

export const module2PastPerfect: Module = {
  id: 'm2-past-perfect',
  levelId: 'b1',
  order: 1,
  title: 'Past Perfect & Narrative Tenses',
  objective: 'Usar el past perfect (had + past participle) para expresar acciones anteriores a otras en el pasado y narrar historias combinando past simple, past continuous y past perfect.',
  vocabularyThemes: ['narrative', 'time connectors', 'life events', 'household objects'],
  grammarTopics: [
    'Past perfect affirmative: had + past participle',
    'Past perfect negative & questions: hadn\'t / Had...?',
    'Narrative tenses: past simple + past continuous + past perfect',
    'Sequencing connectors: when, before, after, by the time',
  ],
  communicationGoals: [
    'Explain which past event happened before another',
    'Tell a story with background and foreground events',
    'Ask about past experiences before a reference moment',
  ],
  lessons: [
    lesson21Affirmative,
    lesson22NegQuestions,
    lesson23NarrativeTenses,
    lesson24MiniTest,
  ],
  checkpoint: {
    id: 'm2-checkpoint',
    moduleId: 'm2-past-perfect',
    title: 'Checkpoint: Past Perfect & Narrative Tenses',
    passingScore: 80,
    exercises: [
      ...lesson21Affirmative.exercises.slice(0, 2),
      ...lesson22NegQuestions.exercises.slice(0, 2),
      ...lesson23NarrativeTenses.exercises.slice(0, 2),
      ...lesson24MiniTest.exercises.slice(0, 2),
    ],
  },
}
