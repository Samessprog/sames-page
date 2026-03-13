import { useState } from 'react'
import { motion } from 'motion/react'
import { SectionWrapper } from '@/components/common/SectionWrapper'
import { useTranslation } from '@/contexts/LanguageContext'
import { getSkillCategories } from '@/data/skills'
import type { Skill } from '@/data/skills'
import { SkillIcon } from './SkillIcon'
import { CategoryFilterButtons } from './CategoryFilterButtons'
import { SkillGrid } from './SkillGrid'

function MarqueeRow({ skills, direction }: { skills: Skill[]; direction: 'left' | 'right' }) {
  const animClass = direction === 'left' ? 'marquee-left' : 'marquee-right'

  // Duplicate for seamless loop
  const items = [...skills, ...skills]

  return (
    <div className="marquee-track overflow-hidden">
      <div className={`flex w-max gap-4 ${animClass}`}>
        {items.map((skill, i) => (
          <div
            key={`${skill.name}-${i}`}
            className="flex items-center gap-3 rounded-xl border border-border bg-surface/60 backdrop-blur-sm px-4 py-3
                       shadow-[0_2px_8px_oklch(0_0_0/0.2)]
                       hover:border-accent/40 hover:shadow-[0_0_16px_var(--color-accent-glow)]
                       transition-all shrink-0"
          >
            <SkillIcon skill={skill} />
            <span className="text-sm font-medium md:text-base text-foreground whitespace-nowrap">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Skills() {
  const { locale, t } = useTranslation()
  const categories = getSkillCategories(locale)
  const [view, setView] = useState<'grid' | 'carousel'>('carousel')

  // Flatten all skills into a single list
  const allSkills = categories.flatMap((cat) => cat.skills)

  // Split into 2 rows
  const mid = Math.ceil(allSkills.length / 2)
  const topRow = allSkills.slice(0, mid)
  const bottomRow = allSkills.slice(mid)

  return (
    <SectionWrapper id="skills" className="bg-transparent">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-2xl sm:text-3xl font-bold text-foreground mb-12 flex items-center gap-3"
      >
        <span className="text-accent font-mono text-2xl select-none">//</span>
        {t('skills.heading')}
        <span className="flex-1 h-px bg-gradient-to-r from-border to-transparent self-center" />
      </motion.h2>

      {/* View Toggle */}
      <CategoryFilterButtons currentView={view} onViewChange={setView} />

      {/* Conditional Rendering based on view */}
      {view === 'carousel' ? (
        <div className="space-y-8">
          {/* Top row → scrolls right */}
          <MarqueeRow skills={topRow} direction="right" />
          {/* Bottom row → scrolls left */}
          <MarqueeRow skills={bottomRow} direction="left" />
        </div>
      ) : (
        <SkillGrid categories={categories} />
      )}
    </SectionWrapper>
  )
}
