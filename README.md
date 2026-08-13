# English On Course

**Plataforma interactiva para aprender inglés desde cero hasta nivel B1 del MCER**, diseñada para hispanohablantes adultos.

No es una demo: es un curso real y completo con **39 módulos, 172 lecciones y más de 2600 ejercicios interactivos** (A1, A2 y B1), explicaciones en español, ejemplos en inglés, correcciones explicadas, gamificación, repaso inteligente, exámenes finales por nivel y sincronización de progreso con cuenta de usuario.

## 🚀 Empezar

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

### Opcional: backend (PocketBase) para cuentas y sincronización

La app funciona 100% sin backend (progreso en `localStorage`). Para crear cuenta, iniciar sesión y sincronizar el progreso entre dispositivos:

1. Descarga PocketBase (un solo binario) — ver `pb/README.md`.
2. `./pb/pocketbase serve` (arranca en `http://127.0.0.1:8090`).
3. Crea el admin en `http://127.0.0.1:8090/_/` la primera vez.
4. `node pb/setup.mjs` (crea las colecciones necesarias).

### Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo Vite |
| `npm run build` | Build de producción |
| `npm run preview` | Previsualizar el build |
| `npm run typecheck` | TypeScript strict check |
| `npm run test:content` | Valida todo el contenido del curso |
| `npm run lint` | ESLint |

## 📚 Estructura del curso

```
A1 (15 módulos) — Desde cero hasta el nivel básico
├── 1. Hello! Greetings & Alphabet       (5 lecciones)
├── 2. Personal Information              (5 lecciones)
├── 3. Things & People Around Me         (4 lecciones)
├── 4. Family & Possessives              (5 lecciones)
├── 5. Daily Routines — Present Simple   (6 lecciones)
├── 6. Time, Days & Dates                (5 lecciones)
├── 7. My Home — There is / There are    (5 lecciones)
├── 8. Food & Drink — Likes & Dislikes   (6 lecciones)
├── 9. Can / Can't — Ability & Requests  (4 lecciones)
├── 10. Actions Now — Present Continuous (5 lecciones)
├── 11. Places & Directions              (5 lecciones)
├── 12. Past Simple — Was/Were & Regular (5 lecciones)
├── 13. Future Plans — Going To          (4 lecciones)
├── 14. Shopping & Practical English     (5 lecciones)
└── 15. Review & Final A1 Exam           (4 lecciones)

A2 (12 módulos) — Pre-intermedio
├── 1. Comparatives & Superlatives       (4 lecciones)
├── 2. Present Perfect — Experiences     (5 lecciones)
├── 3. Past Continuous & Narrative       (4 lecciones)
├── 4. Future Forms                      (5 lecciones)
├── 5. Obligation & Advice               (4 lecciones)
├── 6. Possibility & Permission          (4 lecciones)
├── 7. Conditionals 0 & 1                (4 lecciones)
├── 8. Relative Clauses                  (4 lecciones)
├── 9. Passive Voice (present & past)    (4 lecciones)
├── 10. Reflexives & Each Other          (3 lecciones)
├── 11. Reported Speech Basics           (4 lecciones)
└── 12. Gerunds & Infinitives + Phrasals (5 lecciones)

B1 (12 módulos) — Intermedio
├── 1. Second Conditional                (4 lecciones)
├── 2. Past Perfect & Narrative          (4 lecciones)
├── 3. Present Perfect Continuous        (3 lecciones)
├── 4. Modals of Deduction               (4 lecciones)
├── 5. Future Perfect & Continuous       (4 lecciones)
├── 6. Passive Voice (extended)          (4 lecciones)
├── 7. Reported Speech (full)            (5 lecciones)
├── 8. Relative Clauses (extended)       (4 lecciones)
├── 9. Third Conditional & Wishes        (4 lecciones)
├── 10. Gerunds vs Infinitives           (4 lecciones)
├── 11. Linking Words & Contrast         (5 lecciones)
└── 12. Used to / Would + Tag Questions  (4 lecciones)
```

## 🔓 Niveles y desbloqueo

- **A1** siempre disponible.
- **A2** se desbloquea aprobando el examen final A1 (≥60%).
- **B1** se desbloquea aprobando el examen final A2 — aprobar A1 **no** desbloquea B1 por transitividad.
- **B2, C1, C2** aparecen como "Próximamente".

Cada nivel termina con un examen final automático (`/exam/{nivel}-final`) con desglose por área (Gramática, Vocabulario, Lectura, Inglés práctico, Escritura) y recomendaciones de repaso.

## 🧠 Cómo funciona una lección

Cada lección sigue la pedagogía **Explicación (ES) → Ejemplos (EN+traducción) → Regla → Errores comunes → Práctica → Ejercicios → Corrección explicada → Repaso → Mini-test**:

1. **Objetivo** — qué vas a aprender
2. **Explicación en español** — conceptos claros, sin jerga académica
3. **Ejemplos en inglés** con traducción al español
4. **Regla** — resumen gramatical
5. **Errores comunes de hispanohablantes** (e.g. ❌ *I have 30 years* → ✅ *I am 30 years old*)
6. **Práctica interactiva** — 10 tipos de ejercicios:
   - Opción múltiple · Rellenar hueco · Traducir · Ordenar palabras · Verdadero/Falso · Relacionar · Corregir error · Comprensión de lectura · Construir frase · Elegir frase correcta
7. **Corrección con explicación** — nunca un simple "incorrecto"
8. **Mini-test** — evaluación corta de la lección
9. **Repaso inteligente** — los conceptos fallados vuelven a aparecer

Se completa una lección al alcanzar el **umbral configurable (80% por defecto)**.

## 🎮 Gamificación

- **XP** por respuestas correctas, lecciones y módulos
- **Racha (streak)** de estudio diario
- **12 logros** (primera lección, 100/500/1000 XP, rachas, módulos, examen)
- **Conceptos débiles** detectados automáticamente (precisión <50% en ≥3 intentos)

## 📁 Estructura del proyecto

```
├── CURRICULUM.md           ← Currículo A1 completo
├── CURRICULUM_AUDIT.md     ← Auditoría CEFR/CEFR-J/English Profile
├── A1_COVERAGE_REPORT.md   ← Mapa lección por lección
├── ARCHITECTURE.md         ← Modelo de datos y arquitectura
├── SOURCES.md              ← Fuentes, licencias, atribuciones
├── CONTENT_AUTHORING_SPEC.md ← Especificación para crear contenido
│
├── src/
│   ├── content/            ← TODO el contenido educativo (datos, no UI)
│   │   ├── types.ts        ← Tipos de contenido (Lesson, Module, Exercise...)
│   │   ├── a1/             ← 15 módulos A1
│   │   ├── a2/             ← 12 módulos A2
│   │   ├── b1/             ← 12 módulos B1
│   │   └── index.ts        ← Agrega niveles
│   ├── types/              ← Tipos de progreso/usuario
│   ├── store/              ← Zustand (progreso + auth + ajustes)
│   ├── lib/                ← Utilidades (scoring, access, pocketbase, sync)
│   ├── components/         ← UI reutilizable (ejercicios, layout, ui)
│   └── pages/              ← Vistas (Dashboard, Lección, Checkpoint, Examen, Login...)
│
├── pb/                     ← Backend PocketBase (README + setup script)
└── scripts/validate-content.mjs ← Validador de contenido
```

## 🔧 Cómo añadir contenido

### Añadir una lección

1. Crea `src/content/{nivel}/m<N>-<slug>/lesson-<N><L>-<slug>.ts` siguiendo el tipo `Lesson` de `src/content/types.ts`.
2. Importa y añade la lección al array `lessons` del index del módulo.
3. Ejecuta `npm run test:content` y `npm run typecheck`.

### Añadir un módulo

1. Crea la carpeta `src/content/{nivel}/m<N>-<slug>/` con sus lecciones.
2. Crea `index.ts` exportando un objeto `Module`.
3. Importa el módulo en `src/content/{nivel}/index.ts`.
4. Ejecuta `npm run test:content` y `npm run typecheck`.

### Añadir el nivel B2 (o superior)

1. Crea `src/content/b2/` siguiendo exactamente la misma estructura que `a1/` (nivel → módulos → lecciones).
2. Crea `b2Level` con `status: 'available'` y regístralo en `src/content/index.ts`.
3. El bloqueo por niveles ya funciona: B2 se desbloqueará al aprobar el examen B1.
4. No necesitas tocar componentes ni páginas: son 100% data-driven.

> Consulta `CONTENT_AUTHORING_SPEC.md` para las reglas de autoría de contenido y `CURRICULUM_AUDIT.md` para los límites de nivel.

## 📚 Referencias y atribución

Este curso está basado en el **CEFR** (Common European Framework of Reference), validado contra los datasets de **CEFR-J** y **English Profile**, y con metodología de referencia de **British Council** y **Cambridge English**. Todo el contenido educativo es original. Ver `SOURCES.md` para atribución y licencias.

## 🗺️ Roadmap

- **B2** — siguiente nivel (vocabulario abstracto, condicionales mixtos, inversión)
- **Listening** — audio con transcripción (arquitectura lista)
- **Speaking** — reconocimiento de voz
- **TTS** — texto a voz para vocabulario y frases
- **Cuentas y sincronización en la nube** — el modelo de datos está preparado para backend

## 📄 Licencia

Todo el código y contenido educativo es original de este proyecto. Los datasets de referencia conservan sus propias licencias (ver `SOURCES.md`).