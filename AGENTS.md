# AGENTS.md — English On Course

> Repository operating instructions for agents (Claude Code, Cursor, etc.).

## Project

**English On Course** is an interactive web application for learning English from absolute beginner to CEFR A1, designed for Spanish-speaking adults.

## Tech Stack

- **React 18** + **TypeScript** (strict)
- **Vite** (dev server + build)
- **Tailwind CSS** (utility-first styling, brand color system defined in `tailwind.config.js`)
- **Zustand** (state management + localStorage persistence)
- **React Router v6** (client-side routing)
- **PocketBase** (optional self-hosted backend: auth + progress sync — see `pb/`)

No backend. No authentication. Data persists in `localStorage`.

## Directory Structure

```
english-course/
├── AGENTS.md              ← THIS FILE — read first
├── CURRICULUM.md          ← Full A1 curriculum definition
├── CURRICULUM_AUDIT.md    ← CEFR cross-reference audit
├── A1_COVERAGE_REPORT.md  ← Lesson-by-lesson coverage map
├── ARCHITECTURE.md        ← Data model + architecture doc
├── SOURCES.md             ← References, attributions, licenses
├── README.md              ← Install / dev / build / extend guide
│
├── src/
│   ├── main.tsx           ← React entry point
│   ├── App.tsx            ← Router + layout
│   ├── index.css          ← Tailwind base + globals
│   │
│   ├── types/             ← TypeScript domain models (course.ts, progress.ts)
│   ├── content/           ← Course content as structured TS data (NOT in components)
│   │   ├── types.ts       ← Content authoring types
│   │   ├── a1/            ← A1 level modules → lessons → exercises as TS files
│   │   ├── a2/            ← A2 level modules
│   │   ├── b1/            ← B1 level modules
│   │   └── index.ts       ← Aggregates all levels
│   │
│   ├── store/             ← Zustand stores (progress, auth, settings)
│   ├── lib/               ← Pure utilities (scoring, access, pocketbase, progressSync, etc.)
│   ├── hooks/             ← Custom React hooks
│   │
│   ├── components/        ← Reusable UI components
│   │   ├── layout/        ← App chrome (header, sidebar, footer)
│   │   ├── lesson/        ← Lesson rendering (explanation, examples, rule)
│   │   ├── exercises/     ← Exercise type renderers (one component per type)
│   │   ├── progress/      ← Dashboard, charts, XP bar
│   │   └── ui/            ← Generic primitives (Button, Card, Badge)
│   │
│   └── pages/             ← Route-level views
│       ├── Dashboard.tsx
│       ├── LevelPath.tsx       ← Module list for a level
│       ├── LessonView.tsx
│       ├── ModuleCheckpoint.tsx
│       ├── ReviewPage.tsx
│       ├── Achievements.tsx
│       └── ExamPage.tsx
│
└── scripts/
    └── validate-content.mjs  ← Validates all course content for completeness
```

## Rules

### Content Rules

1. **All educational content lives in `src/content/`**, never hardcoded in React components.
2. **Explanations are in Spanish.** English examples are in English. Never the reverse.
3. **Every lesson has:** objective, explanation_es, examples, rule, common_mistakes, exercises, review, mini_test.
4. **Every exercise has:** a correct answer, an explanation of the correction, a difficulty (1–5), and an associated grammar/vocab concept.
5. **No B1+ grammar in the A1 content.** If in doubt: it's A2+ → exclude.
6. **Pedagogy hierarchy:** Explanation (ES) → Examples (EN + ES translation) → Rule → Common mistakes → Practice → Exercises → Correction with explanation → Review → Mini test.
7. **Vocabulary and grammar must reference CEFR level** (A1/A2/…) in their data.
8. **No Lorem ipsum. No TODO exercises. No placeholders.** (A2+ modules may show "Coming soon.")

### Code Rules

1. **TypeScript strict mode.** No `any` without a comment explaining why.
2. **Tailwind for all styling.** No CSS-in-JS, no Sass, no inline `style={{}}` except for computed/dynamic values.
3. **Functional components only.** No class components.
4. **All interactive elements must be keyboard accessible** (tabIndex, focus states, semantic HTML).
5. **Progress persisted in localStorage** via Zustand `persist` middleware. Data model must be forward-compatible with a future backend.
6. **Exercise components are data-driven.** Each exercise type (multiple_choice, fill_blank, translate, reorder, true_false, match, error_correction, reading, etc.) has ONE component that renders any exercise of that type from its data payload.

### Agent Conventions

1. **Read AGENTS.md and CURRICULUM.md before modifying content.**
2. **Run `npm run typecheck` before declaring work done.**
3. **Run `npm run test:content` after modifying any content files.**
4. **Run `npm run build` to verify production build.**
5. **Adding a lesson:** Create a TS file in `src/content/a1/` matching the lesson content type. Update the module's index.
6. **Adding a module:** Create directory in `src/content/a1/`. Add to `src/content/a1/index.ts`.
7. **Adding A2:** Create `src/content/a2/` following the same structure. Update `src/content/index.ts`.