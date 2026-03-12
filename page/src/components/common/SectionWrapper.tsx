import { type ReactNode } from 'react'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  id: string
  className?: string
  children: ReactNode
}

export function SectionWrapper({ id, className, children }: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.section
      id={id}
      ref={ref}
      className={cn('py-16 md:py-20 px-4 max-w-6xl mx-auto', className)}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  )
}
