import type { Skill } from '@/data/skills'

interface SkillIconProps {
  skill: Skill
  className?: string
}

export function SkillIcon({ skill, className = '' }: SkillIconProps) {
  // Use SVG if available and iconType is 'svg'
  if (skill.iconType === 'svg' && skill.svgIcon) {
    // Only apply brightness filter to AWS and DynamoDB icons in dark mode
    const needsBrightness = skill.svgIcon === 'amazonaws.svg' || skill.svgIcon === 'amazondynamodb.svg'
    const filterClass = needsBrightness ? 'dark:brightness-[3] dark:contrast-[0.8]' : ''

    return (
      <img
        src={`/skills/${skill.svgIcon}`}
        alt={`${skill.name} icon`}
        className={`w-6 h-6 ${filterClass} ${className}`}
        onError={(e) => {
          // Fallback to emoji if SVG fails to load
          const target = e.target as HTMLImageElement
          target.style.display = 'none'
          const span = document.createElement('span')
          span.className = 'text-2xl leading-none'
          span.textContent = skill.icon
          target.parentNode?.insertBefore(span, target)
        }}
      />
    )
  }

  // Fallback to emoji
  return <span className={`text-2xl leading-none ${className}`}>{skill.icon}</span>
}
