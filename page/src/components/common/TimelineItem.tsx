import { motion } from 'motion/react'
import type { ExperienceItem } from '@/data/experience'
import { Badge } from '@/components/ui/badge'

interface TimelineItemProps {
  item: ExperienceItem
  index: number
  isCurrent?: boolean
}

export function TimelineItem({ item, index, isCurrent }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-10 last:pb-0"
    >
      {/* Vertical line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent/60 via-border to-border/30" />

      {/* Dot */}
      <div className="absolute left-[-6px] top-[3px] w-3 h-3 rounded-full bg-accent
                     shadow-[0_0_12px_var(--color-accent-glow),0_0_4px_var(--color-accent)]">
        {isCurrent && (
          <span className="absolute inset-[-5px] rounded-full border-2 border-accent/50 animate-pulse" />
        )}
      </div>

      {/* Period chip — outside the card */}
      <div className="mb-2">
        <span className="text-xs font-mono text-accent bg-accent/10 border border-accent/30 rounded px-2 py-0.5">
          {item.period}
        </span>
      </div>

      {/* Card */}
      <div className="border border-border rounded-xl bg-surface/50 p-6
                      hover:border-accent/50 hover:shadow-[0_0_24px_var(--color-accent-glow)]
                      transition-all duration-300 space-y-3">
        {/* Header */}
        <div>
          <h3 className="text-lg font-semibold text-foreground">{item.role}</h3>
          <p className="text-sm">
            <span className="text-accent font-medium">{item.company}</span>
            <span className="text-muted-foreground"> · {item.location}</span>
          </p>
        </div>

        {/* Bullets */}
        <ul className="space-y-1">
          {item.bullets.map((b, i) => (
            <li key={i} className="flex gap-2 text-sm text-muted-foreground">
              <span className="text-accent mt-0.5 shrink-0">▸</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 pt-1">
          {item.tech.map((t) => (
            <Badge key={t} variant="secondary"
              className="text-xs font-mono bg-surface-2 text-muted-foreground border-border">
              {t}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
