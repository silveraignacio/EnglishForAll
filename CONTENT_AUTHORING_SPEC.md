# CONTENT_AUTHORING_SPEC.md — Shared spec for content-writing agents

> Read this file BEFORE writing any content. Also read `/home/isilvera/english-course/CURRICULUM.md` for the module/lesson spec, and look at `/home/isilvera/english-course/src/content/a1/m1-hello-greetings/lesson-14-to-be-affirmative.ts` as a reference implementation.

## TypeScript types (from src/content/types.ts)

```typescript
interface Lesson {
  id: string
  moduleId: string
  order: number
  title: string
  objective: string
  explanation_es: string
  examples: { english: string; spanish: string; note?: string }[]
  rule: string
  commonMistakes: { wrong: string; correct: string; explanation: string }[]
  vocabulary: { word: string; translation_es: string; level: string; category: string; partOfSpeech: string; example: string; exampleTranslation?: string; phonetic?: string; audioUrl?: string }[]
  grammarPoints: { id: string; level: string; name: string; explanation_es: string; formula: string; examples: string[] }[]
  exercises: Exercise[]
  miniTest: Exercise[]
  reviewItems: string[]
  prerequisites: string[]
}

type Exercise = {
  id: string
  type: 'multiple_choice' | 'fill_blank' | 'translate' | 'reorder' | 'true_false' | 'match' | 'error_correction' | 'reading' | 'sentence_building' | 'select_correct'
  concept: string
  difficulty: number // 1-5
  prompt: string
  promptTranslation?: string
  correctAnswer: string
  acceptedAnswers?: string[]
  explanation: string   // IN SPANISH, explains WHY the answer is correct
  options?: string[]      // for multiple_choice, select_correct
  pairs?: { left: string; right: string }[] // for match
  words?: string[]        // for reorder, sentence_building
  reading?: { text: string; translation?: string; questions: Exercise[] } // for reading
  acceptApproximate?: boolean // for translate
}

interface Module {
  id: string
  levelId: string  // always 'a1'
  order: number    // zero-indexed position (M6 = 5, M7 = 6, ... M15 = 14)
  title: string
  objective: string
  vocabularyThemes: string[]
  grammarTopics: string[]
  communicationGoals: string[]
  lessons: Lesson[]
  checkpoint: { id: string; moduleId: string; title: string; exercises: Exercise[]; passingScore: number }
}
```

## Non-negotiable rules

1. **All explanations in Spanish.** All English examples in English with Spanish translation in `examples[].spanish`.
2. **Original content.** Never copy from another source. Write your own examples.
3. **Each exercise MUST have:** id, type, concept, difficulty (1-5), prompt, correctAnswer, explanation (Spanish, explains WHY).
4. **Vary exercise types** within each lesson. Do NOT use all multiple_choice. Use at least 3-4 different types per lesson.
5. **Translate exercises:** always `acceptApproximate: true` + `acceptedAnswers` array with alternate correct forms.
6. **Reorder exercises:** `words: [...]` array + `correctAnswer` = assembled sentence (e.g. "I work in Madrid.").
7. **Match exercises:** `pairs: [{left, right}, ...]` with 4-6 pairs; `correctAnswer` = summary string; `explanation` explains pairing.
8. **Reading exercises:** `reading: { text, translation?, questions: [sub-exercises] }`. Sub-exercises are typically multiple_choice. Outer exercise `correctAnswer` = 'reading complete', `explanation` = guidance.
9. **Error correction exercises:** prompt shows the WRONG sentence; student types the corrected one. `correctAnswer` = corrected sentence. `acceptApproximate: true`.
10. **Difficulties:** start lessons with difficulty 1-2, build to 3-4, harder items near the end. Reading exercises = 4.
11. **Common mistakes** MUST target real Spanish-speaker errors (e.g. "I have 30 years" for age, "She don't work", "I no work").
12. **Explanations in explanation_es must be beginner-friendly Spanish** — no academic jargon, no unexplained grammar terminology. Explain terms like "verb", "subject", "auxiliary" in plain Spanish.
13. **Lesson IDs** follow `a1-m{N}-l{L}` (e.g. lesson 6.2 = 'a1-m6-l2'). Mini-test exercise IDs follow `a1-m{N}-l{L}-mt{K}`. Exercise IDs `a1-m{N}-l{L}-ex{K}`.
14. **reviewItems** = array of previous lesson IDs to review (usually the prior lesson in the module).
15. **prerequisites** = the previous lesson's ID (chain within the module; module's first lesson prerequisites = last lesson of previous module if meaningful, else previous module's last lesson ID).
16. **moduleId** for each lesson = the module's id.
17. **order** field in Lesson = 0-based index within its module.

## Module index file

Each module directory `m{N}-<slug>/` contains a `index.ts` like:

```typescript
import type { Module } from '../../types'
import { lesson61Time } from './lesson-61-time'
// ... imports

export const module6Time: Module = {
  id: 'm6-time',
  levelId: 'a1',
  order: 5,
  title: 'Time, Days & Dates',
  objective: '...',
  vocabularyThemes: [...],
  grammarTopics: [...],
  communicationGoals: [...],
  lessons: [lesson61Time, ...],
  checkpoint: {
    id: 'm6-checkpoint',
    moduleId: 'm6-time',
    title: 'Checkpoint: Time, Days & Dates',
    passingScore: 80,
    exercises: [/* 4-6 exercises sampled from module lessons */],
  },
}
```

## Registering in the level index

Update `/home/isilvera/english-course/src/content/a1/index.ts` to import and add the module in the correct zero-indexed order in the `modules: [...]` array.

## Verification

After writing all files, run:
- `npm run typecheck`
- `npm run test:content`
- `npm run build`

Fix any errors. Return the list of files written and a one-line confirmation. Do NOT echo full file content in your final message.
