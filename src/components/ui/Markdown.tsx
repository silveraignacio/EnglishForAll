import type { ReactNode } from 'react'

// Lightweight Markdown renderer for course content.
// Supports: **bold**, *italic*, `code`, headings (# to ###), unordered lists (- ),
// ordered lists (1. ), blockquotes (>) and paragraphs.
// Renders to React nodes (no dangerouslySetInnerHTML) — safe by construction.

function parseInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = []
  // Tokenize: `code`, **bold**, *italic*
  const regex = /(`[^`]+`)|(\*\*[^*]+\*\*)|(\*[^*\s][^*]*\*)/g
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index))
    }
    if (match[1]) {
      nodes.push(
        <code key={key++} className="px-1.5 py-0.5 rounded bg-surface-muted text-brand-700 font-mono text-[0.9em]">
          {match[1].slice(1, -1)}
        </code>
      )
    } else if (match[2]) {
      nodes.push(<strong key={key++} className="font-bold text-ink">{match[2].slice(2, -2)}</strong>)
    } else if (match[3]) {
      nodes.push(<em key={key++}>{match[3].slice(1, -1)}</em>)
    }
    lastIndex = regex.lastIndex
  }
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }
  return nodes
}

function renderBlock(text: string, key: number): ReactNode {
  const trimmed = text.trim()
  if (!trimmed) return null

  // Heading
  const heading = /^(#{1,3})\s+(.*)$/.exec(trimmed)
  if (heading) {
    const level = heading[1].length
    const Tag = (['h1', 'h2', 'h3'] as const)[level - 1]
    const cls = ['text-xl font-bold', 'text-lg font-bold', 'text-base font-semibold'][level - 1]
    return (
      <Tag key={key} className={`${cls} text-ink mt-4 mb-2`}>
        {parseInline(heading[2])}
      </Tag>
    )
  }

  // Blockquote
  if (trimmed.startsWith('>')) {
    return (
      <blockquote key={key} className="border-l-4 border-brand-200 pl-3 my-2 text-ink-soft italic">
        {parseInline(trimmed.replace(/^>\s?/, ''))}
      </blockquote>
    )
  }

  return (
    <p key={key} className="my-1.5 leading-relaxed">
      {parseInline(trimmed)}
    </p>
  )
}

interface MarkdownProps {
  content: string
  className?: string
}

export function Markdown({ content, className }: MarkdownProps) {
  const lines = content.split('\n')
  const blocks: ReactNode[] = []
  let list: ReactNode[] = []
  let listType: 'ul' | 'ol' | null = null
  let key = 0

  const flushList = () => {
    if (list.length === 0 || !listType) return
    const ListTag = listType
    blocks.push(
      <ListTag key={`list-${key++}`} className="my-2 pl-5 space-y-1">
        {list}
      </ListTag>
    )
    list = []
    listType = null
  }

  for (const rawLine of lines) {
    const line = rawLine.trimEnd()
    const ulMatch = /^\s*[-*+]\s+(.*)$/.exec(line)
    const olMatch = /^\s*\d+[.)]\s+(.*)$/.exec(line)

    if (ulMatch) {
      if (listType !== 'ul') {
        flushList()
        listType = 'ul'
      }
      list.push(
        <li key={`li-${key++}`} className="list-disc pl-1">
          {parseInline(ulMatch[1])}
        </li>
      )
    } else if (olMatch) {
      if (listType !== 'ol') {
        flushList()
        listType = 'ol'
      }
      list.push(
        <li key={`li-${key++}`} className="list-decimal pl-1">
          {parseInline(olMatch[1])}
        </li>
      )
    } else {
      flushList()
      blocks.push(renderBlock(line, key++))
    }
  }
  flushList()

  return <div className={className}>{blocks}</div>
}

export default Markdown