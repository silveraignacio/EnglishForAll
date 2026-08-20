import { lazy, Suspense } from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'

// Each page (and the course content it pulls in via getCourse()) is only
// downloaded when its route is actually visited, instead of all bundled
// into the entry chunk a visitor pays for just to see the dashboard.
const Dashboard = lazy(() => import('@/pages/Dashboard').then((m) => ({ default: m.Dashboard })))
const LevelPath = lazy(() => import('@/pages/LevelPath').then((m) => ({ default: m.LevelPath })))
const LessonView = lazy(() => import('@/pages/LessonView').then((m) => ({ default: m.LessonView })))
const ModuleCheckpoint = lazy(() => import('@/pages/ModuleCheckpoint').then((m) => ({ default: m.ModuleCheckpoint })))
const ReviewPage = lazy(() => import('@/pages/ReviewPage').then((m) => ({ default: m.ReviewPage })))
const Achievements = lazy(() => import('@/pages/Achievements').then((m) => ({ default: m.Achievements })))
const ExamPage = lazy(() => import('@/pages/ExamPage').then((m) => ({ default: m.ExamPage })))
const LoginPage = lazy(() => import('@/pages/LoginPage').then((m) => ({ default: m.LoginPage })))
const RegisterPage = lazy(() => import('@/pages/RegisterPage').then((m) => ({ default: m.RegisterPage })))
const PlacementPage = lazy(() => import('@/pages/PlacementPage').then((m) => ({ default: m.PlacementPage })))
const CheatSheet = lazy(() => import('@/pages/CheatSheet').then((m) => ({ default: m.CheatSheet })))
const WorkbookPage = lazy(() => import('@/pages/WorkbookPage').then((m) => ({ default: m.WorkbookPage })))

// Keyed wrappers force a full remount when the URL param changes, so the
// component resets its internal state (phase, score, idx) instead of
// reusing stale state from the previous lesson/exam/checkpoint.
function KeyedLesson() {
  const { lessonId } = useParams<{ lessonId: string }>()
  return <LessonView key={lessonId} />
}

function KeyedCheckpoint() {
  const { moduleId } = useParams<{ moduleId: string }>()
  return <ModuleCheckpoint key={moduleId} />
}

function KeyedExam() {
  const { examId } = useParams<{ examId: string }>()
  return <ExamPage key={examId} />
}

function PageFallback() {
  return (
    <div className="flex justify-center py-20">
      <div className="w-8 h-8 border-4 border-brand-200 border-t-brand-500 rounded-full animate-spin" />
    </div>
  )
}

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/level/:levelId" element={<LevelPath />} />
          <Route path="/lesson/:lessonId" element={<KeyedLesson />} />
          <Route path="/module/:moduleId/checkpoint" element={<KeyedCheckpoint />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/exam/:examId" element={<KeyedExam />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/placement" element={<PlacementPage />} />
          <Route path="/cheatsheet" element={<CheatSheet />} />
          <Route path="/cheatsheet/:levelId" element={<CheatSheet />} />
          <Route path="/workbook/:levelId" element={<WorkbookPage />} />
          <Route path="/workbook/:levelId/page/:page" element={<WorkbookPage />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}
