import { motion } from 'motion/react'

interface SkillBadgeProps {
  name: string
  icon: string
}

export function SkillBadge({ name, icon }: SkillBadgeProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface border border-border
                 text-sm text-foreground cursor-default select-none
                 hover:border-accent hover:shadow-[0_0_12px_var(--color-accent-glow)]
                 transition-colors duration-200"
    >
      <span className="text-base leading-none">{icon}</span>
      <span className="font-mono text-xs">{name}</span>
    </motion.div>
  )
}
