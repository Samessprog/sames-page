import { useState } from 'react'
import { motion } from 'motion/react'
import { SectionWrapper } from '@/components/common/SectionWrapper'
import { ProjectCard } from '@/components/common/ProjectCard'
import { ProjectDetailModal } from '@/components/common/ProjectDetailModal'
import { useTranslation } from '@/contexts/LanguageContext'
import { getProjects } from '@/data/projects'
import type { Project } from '@/data/projects'

export function Projects() {
  const { locale, t } = useTranslation()
  const items = getProjects(locale)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <SectionWrapper id="projects">
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-12 flex items-center gap-3">
        <span className="text-accent font-mono text-2xl select-none">//</span>
        {t('projects.heading')}
        <span className="flex-1 h-px bg-gradient-to-r from-border to-transparent self-center" />
      </h2>

      <motion.div
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {items.map((project) => (
          <motion.div
            key={project.slug}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="h-full"
          >
            <ProjectCard
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          </motion.div>
        ))}
      </motion.div>

      <ProjectDetailModal
        project={selectedProject}
        open={selectedProject !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedProject(null)
        }}
      />
    </SectionWrapper>
  )
}
