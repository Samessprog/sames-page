import type { Locale } from '@/i18n/types'

export interface Skill {
  name: string
  icon: string
  iconType?: 'emoji' | 'svg'
  svgIcon?: string
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
      { name: 'AWS', icon: '☁️', iconType: 'svg', svgIcon: 'amazonaws.svg' },
      { name: 'GCP', icon: '🌐', iconType: 'svg', svgIcon: 'googlecloud.svg' },
      { name: 'OVH', icon: '🖥', iconType: 'svg', svgIcon: 'ovh.svg' },
    ],
  },
  {
    key: 'containers',
    skills: [
      { name: 'Docker', icon: '🐳', iconType: 'svg', svgIcon: 'docker.svg' },
      { name: 'Kubernetes', icon: '☸️', iconType: 'svg', svgIcon: 'kubernetes.svg' },
      { name: 'Helm', icon: '⎈', iconType: 'svg', svgIcon: 'helm.svg' },
      { name: 'ArgoCD', icon: '🐙', iconType: 'svg', svgIcon: 'argo.svg' },
    ],
  },
  {
    key: 'iac',
    skills: [
      { name: 'Terraform', icon: '🏗️', iconType: 'svg', svgIcon: 'terraform.svg' },
      { name: 'Ansible', icon: '🤖', iconType: 'svg', svgIcon: 'ansible.svg' },
      { name: 'CloudFormation', icon: '📋', iconType: 'svg', svgIcon: 'amazonaws.svg' },
    ],
  },
  {
    key: 'cicd',
    skills: [
      { name: 'GitHub', icon: '🐙', iconType: 'svg', svgIcon: 'github.svg' },
      { name: 'GitLab', icon: '🦊', iconType: 'svg', svgIcon: 'gitlab.svg' },
      { name: 'GitHub Actions', icon: '⚡', iconType: 'svg', svgIcon: 'githubactions.svg' },
      { name: 'GitLab CI', icon: '🦊', iconType: 'svg', svgIcon: 'gitlab.svg' },
      { name: 'Git', icon: '🌿', iconType: 'svg', svgIcon: 'git.svg' },
      { name: 'Playwright', icon: '🎭', iconType: 'svg', svgIcon: 'playwright.svg' },
    ],
  },
  {
    key: 'observability',
    skills: [
      { name: 'Prometheus', icon: '🔥', iconType: 'svg', svgIcon: 'prometheus.svg' },
      { name: 'Grafana', icon: '📊', iconType: 'svg', svgIcon: 'grafana.svg' },
      { name: 'Loki', icon: '📝', iconType: 'svg', svgIcon: 'grafana.svg' },
    ],
  },
  {
    key: 'databases',
    skills: [
      { name: 'PostgreSQL', icon: '🐘', iconType: 'svg', svgIcon: 'postgresql.svg' },
      { name: 'MySQL', icon: '🗄️', iconType: 'svg', svgIcon: 'mysql.svg' },
      { name: 'MongoDB', icon: '🍃', iconType: 'svg', svgIcon: 'mongodb.svg' },
      { name: 'Redis', icon: '⚡', iconType: 'svg', svgIcon: 'redis.svg' },
      { name: 'DynamoDB', icon: '🗂️', iconType: 'svg', svgIcon: 'amazondynamodb.svg' },
    ],
  },
  {
    key: 'languages',
    skills: [
      { name: 'Python', icon: '🐍', iconType: 'svg', svgIcon: 'python.svg' },
      { name: 'TypeScript', icon: '📘', iconType: 'svg', svgIcon: 'typescript.svg' },
      { name: 'Bash/Shell', icon: '💻', iconType: 'svg', svgIcon: 'gnubash.svg' },
      { name: 'Node.js', icon: '🟢', iconType: 'svg', svgIcon: 'nodedotjs.svg' },
      { name: 'React', icon: '⚛️', iconType: 'svg', svgIcon: 'react.svg' },
      { name: 'FastAPI', icon: '⚡', iconType: 'svg', svgIcon: 'fastapi.svg' },
    ],
  },
  {
    key: 'os',
    skills: [
      { name: 'Linux', icon: '🐧', iconType: 'svg', svgIcon: 'linux.svg' },
      { name: 'Nginx', icon: '🌐', iconType: 'svg', svgIcon: 'nginx.svg' },
      { name: 'Tailscale', icon: '🔒', iconType: 'svg', svgIcon: 'tailscale.svg' },
      { name: 'DNS/TCP/IP', icon: '🌍', iconType: 'svg', svgIcon: 'cloudflare.svg' },
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
