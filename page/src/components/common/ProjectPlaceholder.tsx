import type { Project } from '@/data/projects'
import { LANGUAGE_COLORS } from '@/data/projects'

interface ProjectPlaceholderProps {
  project: Project
  className?: string
}

export function ProjectPlaceholder({ project, className = '' }: ProjectPlaceholderProps) {
  const langColor = project.language ? LANGUAGE_COLORS[project.language] ?? '#6B7280' : '#6B7280'

  const src = project.images?.[0]
  if (src) {
    return (
      <div className={`aspect-[16/10] overflow-hidden rounded-t-xl ${className}`}>
        <img src={src} alt={project.title} className="w-full h-full object-cover" />
      </div>
    )
  }

  return (
    <div className={`aspect-[16/10] overflow-hidden rounded-t-xl relative bg-gradient-to-br from-surface-2 to-surface ${className}`}>
      {/* Accent stripe */}
      <div
        className="absolute inset-0 opacity-[0.13]"
        style={{
          background: `linear-gradient(135deg, ${langColor} 0%, transparent 60%)`,
        }}
      />

      {/* Featured radial glow */}
      {project.featured && (
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            background: `radial-gradient(circle at 30% 40%, ${langColor}, transparent 70%)`,
          }}
        />
      )}

      {/* Title initial */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="font-mono text-4xl font-bold opacity-[0.14] select-none"
          style={{ color: langColor }}
        >
          {project.title.charAt(0).toUpperCase()}
        </span>
      </div>
    </div>
  )
}
