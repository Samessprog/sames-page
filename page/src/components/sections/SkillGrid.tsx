import { motion } from 'motion/react'
import type { SkillCategory } from '@/data/skills'
import { SkillIcon } from './SkillIcon'

interface SkillGridProps {
  categories: SkillCategory[]
}

export function SkillGrid({ categories }: SkillGridProps) {
  // Flatten all skills from all categories into a single array
  const allSkills = categories.flatMap((cat) => cat.skills)

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {allSkills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.02 }}
          className="flex items-center gap-3 rounded-xl border border-border bg-card/40 px-4 py-3
                     shadow-sm
                     hover:border-accent/40
                     transition-colors"
        >
          <SkillIcon skill={skill} />
          <span className="text-sm font-medium md:text-base text-foreground">
            {skill.name}
          </span>
        </motion.div>
      ))}
    </div>
  )
}
