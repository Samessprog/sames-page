import { MapPin, Briefcase, Heart, GraduationCap, Github, Linkedin, Mail, Calendar, CheckCircle2, Clock } from 'lucide-react'
import { motion } from 'motion/react'
import { SectionWrapper } from '@/components/common/SectionWrapper'
import { useTranslation } from '@/contexts/LanguageContext'
import { getPersonal } from '@/data/personal'
import { certs } from '@/data/certs'

const child = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }

export function About() {
  const { locale, t } = useTranslation()
  const personal = getPersonal(locale)

  const facts = [
    { icon: MapPin, label: `${t('about.label.location')}: ${personal.location}` },
    { icon: Briefcase, label: `${t('about.label.experience')}: ${personal.experience}` },
    { icon: Heart, label: `${t('about.label.interests')}: ${personal.interests}` },
    { icon: GraduationCap, label: `${t('about.label.education')}: ${personal.education}` },
  ]

  return (
    <SectionWrapper id="about">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      >
      <motion.h2
        variants={child}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-2xl sm:text-3xl font-bold text-foreground mb-12 flex items-center gap-3"
      >
        <span className="text-accent font-mono text-2xl select-none">//</span>
        {t('about.heading')}
        <span className="flex-1 h-px bg-gradient-to-r from-border to-transparent self-center" />
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left — text + facts */}
        <motion.div
          variants={child}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="space-y-6"
        >
          <div>
            <h3 className="text-xl font-semibold text-foreground">
              {personal.firstName} {personal.lastName}
            </h3>
            <p className="text-sm font-mono text-accent">{personal.title}</p>
          </div>

          <div className="space-y-4">
            {personal.bio.split('\n\n').map((para, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">{para}</p>
            ))}
          </div>

          <ul className="space-y-2">
            {facts.map(({ icon: Icon, label }) => (
              <li key={label}
                  className="flex items-center gap-3 text-sm
                             bg-surface-2/40 rounded-lg px-3 py-2.5
                             border border-border/40">
                <Icon className="w-4 h-4 text-accent shrink-0" />
                <span className="text-muted-foreground">{label}</span>
              </li>
            ))}
          </ul>

          <div className="flex gap-4 pt-1">
            <a href={personal.github} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors">
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors">
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a href={`mailto:${personal.email}`}
               className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
            <a href={personal.cal} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors">
              <Calendar className="w-4 h-4" />
              <span>Cal.com</span>
            </a>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {certs.map((cert) => (
              <span key={cert.name}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono
                  ${cert.status === 'earned'
                    ? 'border-green-500/40 bg-green-500/10 text-green-400'
                    : 'border-yellow-500/40 bg-yellow-500/10 text-yellow-400'
                  }`}
              >
                {cert.status === 'earned'
                  ? <CheckCircle2 className="w-3 h-3" />
                  : <Clock className="w-3 h-3" />
                }
                {cert.name}
                {cert.date && <span className="text-muted-foreground/60">· {cert.date}</span>}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right — photo */}
        <motion.div
          variants={child}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-44 h-52 sm:w-56 sm:h-[272px]">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/35 to-secondary/25 blur-xl" />
            <div className="relative w-full h-full rounded-2xl border-2 border-accent/40 overflow-hidden
                           shadow-[0_8px_32px_oklch(0_0_0/0.4)]">
              <img
                src="/me.jpeg"
                alt="Szymon Wator"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 h-16
                             bg-gradient-to-t from-surface/60 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>

</motion.div>
    </SectionWrapper>
  )
}
