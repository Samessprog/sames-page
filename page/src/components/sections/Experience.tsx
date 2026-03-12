import { SectionWrapper } from '@/components/common/SectionWrapper'
import { TimelineItem } from '@/components/common/TimelineItem'
import { useTranslation } from '@/contexts/LanguageContext'
import { getExperience } from '@/data/experience'

export function Experience() {
  const { locale, t } = useTranslation()
  const items = getExperience(locale)

  return (
    <SectionWrapper id="experience">
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-12 flex items-center gap-3">
        <span className="text-accent font-mono text-2xl select-none">//</span>
        {t('experience.heading')}
        <span className="flex-1 h-px bg-gradient-to-r from-border to-transparent self-center" />
      </h2>

      <div className="ml-2">
        {items.map((item, i) => (
          <TimelineItem key={`${item.company}-${item.role}`} item={item} index={i} isCurrent={i === 0} />
        ))}
      </div>
    </SectionWrapper>
  )
}
