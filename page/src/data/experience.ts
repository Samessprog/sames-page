import type { Locale } from '@/i18n/types'

export interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  bullets: string[]
  tech: string[]
}

const data: Record<Locale, ExperienceItem[]> = {
  en: [
    {
      company: 'MindPal',
      role: 'DevOps Engineer',
      period: 'Apr 2025 – Present',
      location: 'Gliwice, Poland',
      bullets: [
        'Led OVH to GCP migration for 8 clients, achieving 80% infrastructure cost reduction.',
        'Designed and maintained AWS & GCP infrastructure using Terraform and CloudFormation.',
        'Optimized CI/CD pipelines — migrated Cypress to Playwright, cutting test execution time by 53%.',
        'Implemented Prometheus & Grafana observability stack for production monitoring.',
        'Containerized applications with Docker for consistent deployment across environments.',
      ],
      tech: ['AWS', 'GCP', 'Terraform', 'CloudFormation', 'Docker', 'GitHub Actions', 'Prometheus', 'Grafana', 'Playwright'],
    },
    {
      company: 'MindPal',
      role: 'FullStack Developer',
      period: 'Jan 2025 – Apr 2025',
      location: 'Gliwice, Poland',
      bullets: [
        'Built Next.js SSR applications with optimized performance and SEO.',
        'Developed React frontends and Python APIs deployed on AWS.',
        'Set up CI/CD pipelines with Docker and GitHub Actions for Azure deployments.',
        'Designed microservice architectures with Terraform and Prometheus monitoring.',
      ],
      tech: ['Next.js', 'React', 'Python', 'AWS', 'Docker', 'GitHub Actions', 'Terraform'],
    },
    {
      company: 'Southwestern University',
      role: 'Frontend Developer (Freelance)',
      period: 'Oct 2024 – Dec 2024',
      location: 'Mysłowice, Poland',
      bullets: [
        'Developed a React web application with Docker containerization and CI/CD to GCP.',
        'Optimized frontend performance and build processes for production deployment.',
      ],
      tech: ['React', 'Docker', 'GCP', 'GitHub Actions'],
    },
    {
      company: 'Design Studio',           // ⚠️ replace with real company name
      role: 'Graphic Designer',
      period: '2023 – 2024',
      location: 'Katowice, Poland',
      bullets: [
        'Created marketing visuals, social media banners, and print-ready materials using Adobe Photoshop.',
        'Delivered design projects for clients, ensuring brand consistency and meeting deadlines.',
        'Prepared final assets in appropriate formats for digital and print production.',
      ],
      tech: ['Adobe Photoshop'],
    },
    {
      company: 'Eqsystem',
      role: 'Manual Tester (Internship)',
      period: '2022 – 2023',
      location: 'Katowice, Poland',
      bullets: [
        'Designed and executed manual test cases for web applications, covering functional and regression testing.',
        'Reported and tracked defects, collaborating with developers to resolve issues efficiently.',
        'Wrote SQL queries to verify database integrity and validate application data behaviour.',
        'Created and maintained test documentation including test plans and bug reports.',
      ],
      tech: ['SQL', 'Manual Testing', 'JIRA'],
    },
  ],
  pl: [
    {
      company: 'MindPal',
      role: 'DevOps Engineer',
      period: 'Kwi 2025 – Obecnie',
      location: 'Gliwice, Polska',
      bullets: [
        'Przeprowadzenie migracji OVH do GCP dla 8 klientów — redukcja kosztów infrastruktury o 80%.',
        'Projektowanie i utrzymanie infrastruktury AWS & GCP z wykorzystaniem Terraform i CloudFormation.',
        'Optymalizacja pipeline\'ów CI/CD — migracja z Cypress na Playwright, skrócenie czasu testów o 53%.',
        'Wdrożenie stosu obserwowalności Prometheus & Grafana do monitorowania produkcji.',
        'Konteneryzacja aplikacji z Docker dla spójnego wdrożenia w różnych środowiskach.',
      ],
      tech: ['AWS', 'GCP', 'Terraform', 'CloudFormation', 'Docker', 'GitHub Actions', 'Prometheus', 'Grafana', 'Playwright'],
    },
    {
      company: 'MindPal',
      role: 'FullStack Developer',
      period: 'Sty 2025 – Kwi 2025',
      location: 'Gliwice, Polska',
      bullets: [
        'Budowanie aplikacji Next.js SSR z optymalizacją wydajności i SEO.',
        'Tworzenie frontendów React i API w Pythonie wdrażanych na AWS.',
        'Konfiguracja pipeline\'ów CI/CD z Docker i GitHub Actions dla Azure.',
        'Projektowanie architektur mikroserwisowych z Terraform i monitoringiem Prometheus.',
      ],
      tech: ['Next.js', 'React', 'Python', 'AWS', 'Docker', 'GitHub Actions', 'Terraform'],
    },
    {
      company: 'Southwestern University',
      role: 'Frontend Developer (Freelance)',
      period: 'Paź 2024 – Gru 2024',
      location: 'Mysłowice, Polska',
      bullets: [
        'Opracowanie aplikacji webowej React z konteneryzacją Docker i CI/CD do GCP.',
        'Optymalizacja wydajności frontendu i procesów budowania na produkcję.',
      ],
      tech: ['React', 'Docker', 'GCP', 'GitHub Actions'],
    },
    {
      company: 'Design Studio',           // ⚠️ replace with real company name
      role: 'Grafik',
      period: '2023 – 2024',
      location: 'Katowice, Polska',
      bullets: [
        'Tworzenie materiałów marketingowych, banerów social media i materiałów do druku w Adobe Photoshop.',
        'Realizacja projektów graficznych dla klientów z zachowaniem spójności marki i terminów.',
        'Przygotowywanie finalnych plików w odpowiednich formatach do produkcji cyfrowej i druku.',
      ],
      tech: ['Adobe Photoshop'],
    },
    {
      company: 'Eqsystem',
      role: 'Tester Manualny (Staż)',
      period: '2022 – 2023',
      location: 'Katowice, Polska',
      bullets: [
        'Projektowanie i wykonywanie manualnych przypadków testowych dla aplikacji webowych.',
        'Raportowanie i śledzenie defektów we współpracy z zespołem deweloperskim.',
        'Pisanie zapytań SQL do weryfikacji integralności bazy danych i walidacji danych aplikacji.',
        'Tworzenie i utrzymanie dokumentacji testowej, w tym planów testów i raportów błędów.',
      ],
      tech: ['SQL', 'Manual Testing', 'JIRA'],
    },
  ],
  de: [
    {
      company: 'MindPal',
      role: 'DevOps Engineer',
      period: 'Apr 2025 – Aktuell',
      location: 'Gliwice, Polen',
      bullets: [
        'Migration von OVH zu GCP für 8 Kunden — 80% Reduktion der Infrastrukturkosten.',
        'Entwurf und Wartung von AWS- & GCP-Infrastruktur mit Terraform und CloudFormation.',
        'CI/CD-Pipeline-Optimierung — Migration von Cypress zu Playwright, 53% schnellere Tests.',
        'Implementierung von Prometheus & Grafana Observability-Stack für Produktionsmonitoring.',
        'Containerisierung von Anwendungen mit Docker für konsistente Bereitstellung.',
      ],
      tech: ['AWS', 'GCP', 'Terraform', 'CloudFormation', 'Docker', 'GitHub Actions', 'Prometheus', 'Grafana', 'Playwright'],
    },
    {
      company: 'MindPal',
      role: 'FullStack Developer',
      period: 'Jan 2025 – Apr 2025',
      location: 'Gliwice, Polen',
      bullets: [
        'Entwicklung von Next.js SSR-Anwendungen mit optimierter Performance und SEO.',
        'Erstellung von React-Frontends und Python-APIs auf AWS.',
        'Einrichtung von CI/CD-Pipelines mit Docker und GitHub Actions für Azure.',
        'Entwurf von Microservice-Architekturen mit Terraform und Prometheus-Monitoring.',
      ],
      tech: ['Next.js', 'React', 'Python', 'AWS', 'Docker', 'GitHub Actions', 'Terraform'],
    },
    {
      company: 'Southwestern University',
      role: 'Frontend Developer (Freelance)',
      period: 'Okt 2024 – Dez 2024',
      location: 'Mysłowice, Polen',
      bullets: [
        'Entwicklung einer React-Webanwendung mit Docker-Containerisierung und CI/CD zu GCP.',
        'Optimierung der Frontend-Performance und Build-Prozesse für die Produktion.',
      ],
      tech: ['React', 'Docker', 'GCP', 'GitHub Actions'],
    },
    {
      company: 'Design Studio',           // ⚠️ replace with real company name
      role: 'Grafikdesigner',
      period: '2023 – 2024',
      location: 'Katowice, Polen',
      bullets: [
        'Erstellung von Marketingmaterialien, Social-Media-Bannern und druckfertigen Materialien mit Adobe Photoshop.',
        'Durchführung von Designprojekten für Kunden mit Markenkonsistenz und Termintreue.',
        'Vorbereitung finaler Assets in geeigneten Formaten für digitale Produktion und Druck.',
      ],
      tech: ['Adobe Photoshop'],
    },
    {
      company: 'Eqsystem',
      role: 'Manueller Tester (Praktikum)',
      period: '2022 – 2023',
      location: 'Katowice, Polen',
      bullets: [
        'Entwurf und Ausführung manueller Testfälle für Webanwendungen (Funktions- und Regressionstests).',
        'Erfassung und Tracking von Defekten in Zusammenarbeit mit dem Entwicklungsteam.',
        'Schreiben von SQL-Abfragen zur Überprüfung der Datenbankintegrität und Datenvalidierung.',
        'Erstellung und Pflege von Testdokumentation inklusive Testplänen und Fehlerberichten.',
      ],
      tech: ['SQL', 'Manual Testing', 'JIRA'],
    },
  ],
}

export function getExperience(locale: Locale): ExperienceItem[] {
  return data[locale] ?? data.en
}
