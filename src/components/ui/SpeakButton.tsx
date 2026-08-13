import { useSpeech } from '@/hooks/useSpeech'
import { cn } from '@/lib/utils'

interface SpeakButtonProps {
  text: string
  label?: string
  className?: string
  size?: 'sm' | 'md'
}

/** Botón 🔊 que reproduce una palabra o frase en inglés (Web Speech API). */
export function SpeakButton({ text, label, className, size = 'md' }: SpeakButtonProps) {
  const { speak, isSupported } = useSpeech()

  if (!isSupported) return null

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation()
        speak(text)
      }}
      aria-label={label ?? `Escuchar "${text}"`}
      title="Escuchar pronunciación"
      className={cn(
        'inline-flex items-center justify-center rounded-full transition active:scale-95',
        'text-brand-600 hover:bg-brand-100 focus-visible:ring-2 focus-visible:ring-brand-500',
        size === 'sm' ? 'p-1 text-sm' : 'p-1.5 text-base',
        className
      )}
    >
      🔊
    </button>
  )
}

export default SpeakButton