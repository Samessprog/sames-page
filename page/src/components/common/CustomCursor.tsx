import { useEffect, useRef, useState } from 'react'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (dotRef.current) dotRef.current.style.transform = `translate(${e.clientX}px,${e.clientY}px)`
      setIsPointer(window.getComputedStyle(e.target as Element).cursor === 'pointer')
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div ref={dotRef} className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2" style={{ willChange: 'transform', mixBlendMode: 'difference' }}>
      <div className={`rounded-full bg-white transition-all duration-100 ${isPointer ? 'w-2 h-2' : 'w-1.5 h-1.5'}`} />
    </div>
  )
}
