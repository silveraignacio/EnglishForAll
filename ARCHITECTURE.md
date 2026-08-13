# ARCHITECTURE.md — Data Model & Architecture

## Overview

English On Course is a React/TypeScript application. All course content lives as structured TypeScript data files in `src/content/`. User progress persists in `localStorage` via Zustand and **synchronizes with a PocketBase backend** when the user is authenticated. The architecture is designed to scale from A1 to C2 without restructuring.

---

## Tech Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | React 18 | Component-based, mature ecosystem |
| Language | TypeScript (strict) | Type safety for content + app code |
| Build | Vite | Fast dev server, simple config |
| Styling | Tailwind CSS | Utility-first, rapid responsive design |
| State | Zustand + persist | Lightweight, localStorage persistence without Redux boilerplate |
| Routing | React Router v6 | Declarative client-side routing |
| Storage | localStorage (offline-first) | Always works; source of truth when logged out |
| Backend | PocketBase (self-hosted) | Auth (email/password + JWT), SQLite DB, REST API, admin UI |

PocketBase is a single self-hosted binary. See `pb/README.md` for setup. When a user logs in, progress syncs to the backend; when logged out, everything still works locally. See `src/lib/progressSync.ts` for the sync layer.

---

## Level Locking

Levels unlock by passing the previous level's final exam (no transitive unlocking):

- `A1` → always available
- `A2` → requires passing the `a1-final` exam (≥60%)
- `B1` → requires passing the `a2-final` exam (≥60%) — passing A1 does NOT unlock B1
- `B2+` → coming soon

Logic lives in `src/lib/access.ts`. The final exam is auto-generated per level from its content at `/exam/{levelId}-final`.

---

## Content Data Model

### Course Hierarchy

```
Level (A1, A2, B1, B2, C1, C2)
  └─ Module (e.g., "Hello! Greetings & Alphabet")
       └─ Lesson (e.g., "Verb to be — affirmative")
            ├─ Explanation (Spanish)
            ├─ Examples (EN + ES translation)
            ├─ Rule
            ├─ Common Mistakes
            ├─ Exercises (multiple types)
            ├─ Vocabulary items
            ├─ Grammar points
            └─ Mini Test
```

### TypeScript Types

All content types are defined in `src/content/types.ts`. Key types:

```typescript
interface Level {
  id: string                  // "a1", "a2"
  name: string                // "A1"
  title: string               // "Breakthrough"
  description: string
  modules: Module[]
  status: 'available' | 'coming_soon'
}

interface Module {
  id: string                  // "m1-hello-greetings"
  levelId: string
  order: number
  title: string
  objective: string           // Module objective in Spanish
  vocabularyThemes: string[]
  grammarTopics: string[]
  communicationGoals: string[]
  lessons: Lesson[]
  checkpoint: Checkpoint
}

interface Lesson {
  id: string                  // "m1l4-to-be-affirmative"
  moduleId: string
  order: number
  title: string
  objective: string           // What the student will learn
  explanation_es: string      // Full Spanish explanation
  examples: Example[]
  rule: string                // Grammar rule summary
  commonMistakes: CommonMistake[]
  exercises: Exercise[]
  vocabulary: VocabItem[]
  grammarPoints: GrammarPoint[]
  reviewItems: string[]       // IDs of prior concepts to review
  miniTest: Exercise[]
  prerequisites: string[]     // Lesson IDs that must be completed first
}

interface Example {
  english: string
  spanish: string
  note?: string               // Optional explanation note
}

interface CommonMistake {
  wrong: string               // "❌ She work in Madrid."
  correct: string             // "✅ She works in Madrid."
  explanation: string         // Why it's wrong, in Spanish
}

interface VocabItem {
  word: string
  translation_es: string
  level: string               // "A1"
  category: string            // "family", "food", etc.
  partOfSpeech: string        // "noun", "verb", etc.
  example: string
  phonetic?: string           // for future audio support
  audioUrl?: string           // for future audio support
}

interface GrammarPoint {
  id: string
  level: string               // "A1"
  name: string
  explanation_es: string
  formula: string             // "I/You/We/They + verb | He/She/It + verb-s"
  examples: string[]
}

// Exercise types — discriminated union
type Exercise = {
  id: string
  type: ExerciseType
  concept: string             // Grammar/vocab concept tested
  difficulty: number           // 1-5
  prompt: string               // Question text
  promptTranslation?: string   // Spanish translation of prompt (early lessons)
  correctAnswer: string        // The correct answer
  acceptedAnswers?: string[]   // Alternative acceptable answers
  explanation: string          // Explanation of the correction (Spanish)
  // Type-specific fields:
  options?: string[]           // For multiple_choice
  pairs?: MatchPair[]          // For match
  sentences?: string[]         // For reorder
  reading?: { text: string; questions: Exercise[] } // For reading comprehension
  acceptApproximate?: boolean  // For translate (accept minor spelling differences)
}

type ExerciseType =
  | 'multiple_choice'
  | 'fill_blank'
  | 'translate'
  | 'reorder'
  | 'true_false'
  | 'match'
  | 'error_correction'
  | 'reading'
  | 'sentence_building'
  | 'select_correct'

interface MatchPair {
  left: string
  right: string
}

interface Checkpoint {
  id: string
  moduleId: string
  title: string
  exercises: Exercise[]
  passingScore: number         // 80 (percentage)
}
```

### Progress Types

```typescript
interface UserProgress {
  levelId: string              // "a1"
  completedLessons: string[]  // Lesson IDs
  completedModules: string[]  // Module IDs
  exerciseHistory: ExerciseRecord[]
  xp: number
  streak: number
  lastStudyDate: string | null
  achievements: string[]      // Achievement IDs
  weakConcepts: string[]      // Concepts with low accuracy
  examResults: ExamResult[]
}

interface ExerciseRecord {
  exerciseId: string
  lessonId: string
  correct: boolean
  attempts: number
  timestamp: number
  concept: string
  difficulty: number
  userAnswer: string
}

interface ExamResult {
  examId: string
  totalScore: number          // Percentage
  breakdown: { area: string; score: number }[]
  recommendations: string[]
  timestamp: number
}
```

---

## Component Architecture

### Pages

| Route | Page | Role |
|-------|------|------|
| `/` | Dashboard | Home: progress, continue learning, stats |
| `/level/:levelId` | LevelPath | Module list for a level |
| `/lesson/:lessonId` | LessonView | Full lesson with exercises |
| `/module/:moduleId/checkpoint` | ModuleCheckpoint | Module checkpoint test |
| `/review` | ReviewPage | Spaced review of weak concepts |
| `/achievements` | Achievements | Badges & achievements |
| `/exam/:examId` | ExamPage | Module or final exam |

### Exercise Components

Each exercise type has ONE data-driven component:

| Component | Exercise Type | Key props |
|-----------|--------------|-----------|
| MultipleChoiceExercise | multiple_choice | options, correctAnswer |
| FillBlankExercise | fill_blank | prompt with ___, correctAnswer |
| TranslateExercise | translate | prompt (Spanish to English), acceptApproximate |
| ReorderExercise | reorder | sentences (word tiles) |
| TrueFalseExercise | true_false | correctAnswer: true/false |
| MatchExercise | match | pairs |
| ErrorCorrectionExercise | error_correction | prompt (wrong sentence), correctAnswer |
| ReadingExercise | reading | reading.text + sub-exercises |
| SentenceBuildingExercise | sentence_building | words to assemble |
| SelectCorrectExercise | select_correct | options (full sentences), correctAnswer |

### State Management

Two Zustand stores:

1. **ProgressStore** (`src/store/progressStore.ts`): completed lessons, exercise history, XP, streak, achievements, weak concepts, exam results. Persisted to localStorage.

2. **SettingsStore** (`src/store/settingsStore.ts`): passing threshold (default 80%), UI preferences. Persisted to localStorage.

---

## Naming Conventions

- Files: `kebab-case.ts` / `PascalCase.tsx`
- Components: `PascalCase` (e.g., `MultipleChoiceExercise`)
- Functions: `camelCase`
- Types/Interfaces: `PascalCase`
- Content files: `m1l4-to-be-affirmative.ts` (module+lesson pattern)

---

## Future Architecture

| Feature | Status | How to add |
|---------|--------|-----------|
| A2 content | ✅ Done | `src/content/a2/` (12 modules) |
| B1 content | ✅ Done | `src/content/b1/` (12 modules) |
| B2 content | Coming soon | Create `src/content/b2/`, add to `src/content/index.ts` |
| User accounts + sync | ✅ Done | PocketBase (see `pb/`, `src/lib/progressSync.ts`) |
| Listening / audio | Architecture ready | `audioUrl` field already in VocabItem & examples; add AudioPlayer component |
| Speaking | Future | Add recording component + pronunciation comparison |
| TTS | Future | Text-to-speech API integration for examples |
| AI Tutor | Future | Add chat interface referencing grammar points + exercise history |
| Spaced repetition | Architecture ready | `weakConcepts` already tracked; add SM-2 algorithm in `lib/` |