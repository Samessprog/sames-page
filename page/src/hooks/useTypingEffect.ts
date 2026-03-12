import { useEffect, useState } from 'react'

export function useTypingEffect(strings: string[], typingSpeed = 80, pauseDuration = 1800, erasingSpeed = 40) {
  const [displayed, setDisplayed] = useState('')
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'erasing'>('typing')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const current = strings[index % strings.length]

    if (phase === 'typing') {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), typingSpeed)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setPhase('pausing'), pauseDuration)
        return () => clearTimeout(t)
      }
    }

    if (phase === 'pausing') {
      const t = setTimeout(() => setPhase('erasing'), 200)
      return () => clearTimeout(t)
    }

    if (phase === 'erasing') {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), erasingSpeed)
        return () => clearTimeout(t)
      } else {
        setIndex((i) => i + 1)
        setPhase('typing')
      }
    }
  }, [displayed, phase, index, strings, typingSpeed, pauseDuration, erasingSpeed])

  return { displayed, isTyping: phase === 'typing' }
}
