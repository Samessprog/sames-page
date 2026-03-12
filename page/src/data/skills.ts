import type { Locale } from '@/i18n/types'

export interface Skill {
  name: string
  icon: string
}

export interface SkillCategory {
  key: string
  category: string
  skills: Skill[]
}

const categoryNames: Record<string, Record<Locale, string>> = {
  cloud: { en: 'Cloud Platforms', pl: 'Platformy chmurowe', de: 'Cloud-Plattformen' },
  containers: { en: 'Containers & Orchestration', pl: 'Kontenery i orkiestracja', de: 'Container & Orchestrierung' },
  iac: { en: 'Infrastructure as Code', pl: 'Infrastructure as Code', de: 'Infrastructure as Code' },
  cicd: { en: 'CI/CD & Automation', pl: 'CI/CD i automatyzacja', de: 'CI/CD & Automatisierung' },
  observability: { en: 'Monitoring & Observability', pl: 'Monitoring i obserwowalność', de: 'Monitoring & Observability' },
  databases: { en: 'Databases', pl: 'Bazy danych', de: 'Datenbanken' },
  languages: { en: 'Languages', pl: 'Języki programowania', de: 'Programmiersprachen' },
  os: { en: 'OS & Networking', pl: 'Systemy i sieci', de: 'OS & Netzwerk' },
}

const categories: { key: string; skills: Skill[] }[] = [
  {
    key: 'cloud',
    skills: [
      { name: 'AWS', icon: '☁' },
      { name: 'GCP', icon: '🌐' },
      { name: 'OVH', icon: '🖥' },
    ],
  },
  {
    key: 'containers',
    skills: [
      { name: 'Docker', icon: '🐳' },
      { name: 'Kubernetes', icon: '☸' },
      { name: 'Helm', icon: '⎈' },
      { name: 'ArgoCD', icon: '🐙' },
    ],
  },
  {
    key: 'iac',
    skills: [
      { name: 'Terraform', icon: '🏗' },
      { name: 'CloudFormation', icon: '☁' },
      { name: 'Pulumi', icon: '🔶' },
      { name: 'Ansible', icon: '🤖' },
    ],
  },
  {
    key: 'cicd',
    skills: [
      { name: 'GitHub Actions', icon: '⚡' },
      { name: 'GitLab CI', icon: '🦊' },
      { name: 'Playwright', icon: '🎭' },
    ],
  },
  {
    key: 'observability',
    skills: [
      { name: 'Prometheus', icon: '🔥' },
      { name: 'Grafana', icon: '📊' },
      { name: 'Loki', icon: '📝' },
    ],
  },
  {
    key: 'databases',
    skills: [
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MySQL', icon: '🗄' },
      { name: 'DynamoDB', icon: '⚡' },
    ],
  },
  {
    key: 'languages',
    skills: [
      { name: 'Python', icon: '🐍' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'Bash/Shell', icon: '💻' },
    ],
  },
  {
    key: 'os',
    skills: [
      { name: 'Linux', icon: '🐧' },
      { name: 'Nginx', icon: '🌐' },
      { name: 'Tailscale', icon: '🔒' },
      { name: 'DNS/TCP/IP', icon: '🌍' },
    ],
  },
]

export function getSkillCategories(locale: Locale): SkillCategory[] {
  return categories.map((cat) => ({
    key: cat.key,
    category: categoryNames[cat.key]?.[locale] ?? categoryNames[cat.key]?.en ?? cat.key,
    skills: cat.skills,
  }))
}
