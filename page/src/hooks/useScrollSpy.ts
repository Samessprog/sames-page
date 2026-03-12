import { useEffect, useState } from 'react'

export function useScrollSpy(sectionIds: string[], offset = 80): string {
  const [active, setActive] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + offset

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i])
        if (el && el.offsetTop <= scrollY) {
          setActive(sectionIds[i])
          return
        }
      }
      setActive(sectionIds[0] ?? '')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds, offset])

  return active
}
