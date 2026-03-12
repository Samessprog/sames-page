import { useState } from 'react'
import { motion } from 'motion/react'
import { Github, Linkedin, Mail, Calendar, Send } from 'lucide-react'
import { SectionWrapper } from '@/components/common/SectionWrapper'
import { useTranslation } from '@/contexts/LanguageContext'
import { getPersonal } from '@/data/personal'

export function Contact() {
  const { locale, t } = useTranslation()
  const personal = getPersonal(locale)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const socials = [
    { icon: Github, label: 'GitHub', href: personal.github },
    { icon: Linkedin, label: 'LinkedIn', href: personal.linkedin },
    { icon: Mail, label: 'Email', href: `mailto:${personal.email}` },
    { icon: Calendar, label: 'Cal.com', href: 'https://cal.com/szymon-wator' },
  ]

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl sm:text-3xl font-bold text-foreground mb-4 flex items-center gap-3"
        >
          <span className="text-accent font-mono text-2xl select-none">//</span>
          {t('contact.heading')}
          <span className="flex-1 h-px bg-gradient-to-r from-border to-transparent self-center" />
        </motion.h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          {t('contact.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Left — Form card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-xl border border-border bg-surface/60 backdrop-blur-sm shadow-[0_4px_20px_oklch(0_0_0/0.3)] overflow-hidden"
        >
          <div className="flex items-center justify-between px-4 py-2 bg-surface-2 border-b border-border">
            <span className="text-xs font-mono text-muted-foreground">send_message.sh</span>
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="px-6 pt-6 pb-6 space-y-5">
            <div>
              <label className="text-xs font-mono text-accent block mb-1.5">
                {t('contact.form.name')}
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder={t('contact.form.name_placeholder')}
                className="w-full bg-background border border-border rounded-lg px-3 py-2 font-mono text-sm text-foreground
                           placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
              />
            </div>

            <div>
              <label className="text-xs font-mono text-accent block mb-1.5">
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder={t('contact.form.email_placeholder')}
                className="w-full bg-background border border-border rounded-lg px-3 py-2 font-mono text-sm text-foreground
                           placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
              />
            </div>

            <div>
              <label className="text-xs font-mono text-accent block mb-1.5">
                {t('contact.form.message')}
              </label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder={t('contact.form.message_placeholder')}
                className="w-full bg-background border border-border rounded-lg px-3 py-2 font-mono text-sm text-foreground
                           placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-accent text-background font-mono text-sm py-2.5 rounded-lg
                         hover:opacity-90 transition-opacity"
            >
              <Send className="w-4 h-4" />
              {t('contact.form.submit')}
            </button>
          </form>
        </motion.div>

        {/* Right — Info + socials */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          {/* Social link cards */}
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-border bg-surface/60 backdrop-blur-sm
                         shadow-[0_2px_8px_oklch(0_0_0/0.2)]
                         hover:border-accent/40 hover:bg-surface hover:shadow-[0_0_16px_var(--color-accent-glow)]
                         transition-all group"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent
                              group-hover:bg-accent/20 transition-colors">
                <Icon className="w-5 h-5" />
              </span>
              <span className="text-sm font-medium text-foreground">{label}</span>
            </a>
          ))}

          {/* YAML status block */}
          <div className="rounded-xl border border-border bg-surface/60 backdrop-blur-sm shadow-[0_4px_20px_oklch(0_0_0/0.3)] overflow-hidden mt-auto">
            <div className="flex items-center justify-between px-4 py-2 bg-surface-2 border-b border-border">
              <span className="text-xs font-mono text-muted-foreground">status.yaml</span>
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              </div>
            </div>
            <pre className="p-4 text-sm font-mono text-muted-foreground leading-relaxed overflow-x-auto">
              <code>
                <span className="block">
                  <span className="text-accent">{t('contact.yaml.availability')}</span>
                  <span className="text-foreground">: </span>
                  <span className="text-secondary">{t('contact.yaml.availability_value')}</span>
                </span>
                <span className="block">
                  <span className="text-accent">{t('contact.yaml.preferred_contact')}</span>
                  <span className="text-foreground">: </span>
                  <span className="text-muted-foreground">{t('contact.yaml.preferred_contact_value')}</span>
                </span>
                <span className="block">
                  <span className="text-accent">{t('contact.yaml.response_time')}</span>
                  <span className="text-foreground">: </span>
                  <span className="text-muted-foreground">{t('contact.yaml.response_time_value')}</span>
                </span>
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
