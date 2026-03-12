import type { Locale } from '@/i18n/types'

interface ProjectBase {
  slug: string
  tech: string[]
  coreTech: string[]
  year: string
  github?: string
  live?: string
  featured?: boolean
  language?: string
  images?: string[]
}

interface ProjectText {
  title: string
  description: string
}

export interface Project extends ProjectBase {
  title: string
  description: string
}

export const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: '#3178C6',
  JavaScript: '#F7DF1E',
  Python: '#3572A5',
  Java: '#B07219',
  Shell: '#89E051',
  PHP: '#4F5D95',
  'C++': '#F34B7D',
  HTML: '#E34C26',
  Dart: '#00B4AB',
}

const projects: ProjectBase[] = [
  {
    slug: 'nexty',
    featured: true,
    language: 'TypeScript',
    year: '2026',
    github: 'https://github.com/Samessprog/Nexty',
    tech: [
      'React 19', 'FastAPI', 'AWS', 'Terraform', 'Ansible', 'Docker',
      'ECS', 'EC2', 'RDS', 'PostgreSQL', 'API Gateway', 'Lambda',
      'Bedrock', 'SQS', 'SNS', 'SES', 'Cognito', 'ECR',
      'Glue', 'Athena', 'S3', 'GitHub Actions', 'GitLab CI',
    ],
    coreTech: ['React 19', 'FastAPI', 'AWS', 'Terraform', 'Docker'],
    images: [
      '/kaizen/kaizen-01.png',
      '/kaizen/kaizen-02.png',
      '/kaizen/kaizen-03.png',
      '/kaizen/kaizen-04.png',
    ],
  },
  {
    slug: 'k8s-recruitment-task',
    language: 'Shell',
    year: '2026',
    github: 'https://github.com/Samessprog/k8s-recruitment-task',
    tech: ['Kubernetes', 'Docker', 'Nginx', 'HPA', 'Minikube', 'Shell', 'Helm'],
    coreTech: ['Kubernetes', 'Docker', 'Nginx', 'HPA', 'Minikube'],
    images: [
      '/k8srectask/deployments.png',
      '/k8srectask/deploy.png',
      '/k8srectask/HA_deployments.png',
      '/k8srectask/HA.png',
      '/k8srectask/HA_pods.png',
      '/k8srectask/ingress.png',
      '/k8srectask/minikubeStart.png',
      '/k8srectask/namespace.png',
      '/k8srectask/Network.png',
      '/k8srectask/pods.png',
      '/k8srectask/svc.png',
      '/k8srectask/WB_diff_pod.png',
      '/k8srectask/WB.png',
    ],
  },
  {
    slug: 'zuzu-groomer',
    language: 'TypeScript',
    year: '2024',
    github: 'https://github.com/Samessprog/ZuzuGroomer',
    tech: ['React', 'TypeScript', 'Redux', 'Vite', 'Tailwind CSS', 'Node.js'],
    coreTech: ['React', 'TypeScript', 'Redux', 'Vite', 'Tailwind CSS'],
    images: [
      '/zuzugroomer/zuzu-01.png',
      '/zuzugroomer/zuzu-02.png',
      '/zuzugroomer/zuzu-03.png',
      '/zuzugroomer/zuzu-04.png',
      '/zuzugroomer/zuzu-05.png',
      '/zuzugroomer/zuzu-06.png',
      '/zuzugroomer/zuzu-07.png',
      '/zuzugroomer/zuzu-08.png',
    ],
  },
  {
    slug: 'drinkapp',
    language: 'JavaScript',
    year: '2022',
    github: 'https://github.com/Samessprog/drinkapp',
    tech: ['React', 'Node.js', 'Socket.io', 'MySQL', 'Express', 'CSS'],
    coreTech: ['React', 'Node.js', 'Socket.io', 'MySQL', 'Express'],
    images: [
      '/drinkapp/drinkapp-01.png',
      '/drinkapp/drinkapp-02.png',
      '/drinkapp/drinkapp-03.png',
      '/drinkapp/drinkapp-04.png',
      '/drinkapp/drinkapp-05.png',
      '/drinkapp/drinkapp-06.png',
      '/drinkapp/drinkapp-07.png',
      '/drinkapp/drinkapp-08.png',
      '/drinkapp/drinkapp-09.png',
      '/drinkapp/drinkapp-10.png',
    ],
  },
  {
    slug: 'solar-system',
    language: 'JavaScript',
    year: '2023',
    github: 'https://github.com/Samessprog/Solar_system',
    tech: ['Three.js', 'JavaScript', 'Vite', 'WebGL'],
    coreTech: ['Three.js', 'JavaScript', 'Vite'],
    images: [
      '/solar/solar1.png',
      '/solar/solar2.png',
      '/solar/solar3.png',
    ],
  },
  {
    slug: 'fulkerson-algorithm',
    language: 'Java',
    year: '2023',
    github: 'https://github.com/Samessprog/Fulknson_algorithm',
    tech: ['Java', 'BFS', 'Graph Theory', 'Algorithms'],
    coreTech: ['Java', 'BFS', 'Graph Theory'],
  },
  {
    slug: 'explorenow',
    language: 'Dart',
    year: '2023',
    github: 'https://github.com/Samessprog/ExploreNow',
    tech: ['Flutter', 'Dart', 'Google Maps', 'GPS', 'Firebase'],
    coreTech: ['Flutter', 'Dart', 'Google Maps', 'GPS'],
  },
  {
    slug: 'proxy-vinted',
    language: 'JavaScript',
    year: '2024',
    github: 'https://github.com/Samessprog/ProxyVinted',
    tech: ['React', 'Node.js', 'Vinted API', 'Bootstrap', 'Express'],
    coreTech: ['React', 'Node.js', 'Vinted API', 'Bootstrap'],
  },
  {
    slug: 'library-java',
    language: 'Java',
    year: '2024',
    github: 'https://github.com/Samessprog/Library-Java',
    tech: ['Java', 'OOP'],
    coreTech: ['Java', 'OOP'],
  },
]

const translations: Record<Locale, Record<string, ProjectText>> = {
  en: {
    'nexty': {
      title: 'Kaizen Box Nexty',
      description:
        'AI-powered employee suggestions SaaS platform (Kaizen Box Nexty). Architected an event-driven application using React 19 and Python FastAPI, provisioning the entire AWS infrastructure (ECS, EC2, RDS PostgreSQL, API Gateway) via Terraform and Ansible. Integrated Generative AI via AWS Bedrock to automatically validate user suggestions and power an in-app chatbot, orchestrating async workflows with SQS, SNS, SES, and Lambda. Automated multi-stage CI/CD across GitHub Actions and GitLab CI to build Docker images, push to Amazon ECR, and deploy with Cognito authentication. Designed a serverless analytics pipeline with AWS Glue, Athena, and S3 to process submissions and generate automated business reports.',
    },
    'k8s-recruitment-task': {
      title: 'k8s-recruitment-task',
      description:
        'Kubernetes DevOps recruitment task showcasing cluster provisioning with Minikube, Nginx ingress configuration, Horizontal Pod Autoscaler setup, and Dockerized microservices with shell scripting.',
    },
    'zuzu-groomer': {
      title: 'ZuzuGroomer',
      description:
        'Pet grooming service platform built with TypeScript and React. Features appointment booking, service catalog, responsive design, and state management with Redux.',
    },
    'drinkapp': {
      title: 'drinkapp',
      description:
        'Real-time drink recipe application with React frontend and Node.js backend. Users can browse cocktails, chat via Socket.io, and manage recipes with a MySQL database.',
    },
    'solar-system': {
      title: 'Solar System',
      description:
        'Interactive 3D solar system visualization built with Three.js. Features animated planetary orbits, realistic textures, and camera controls for exploring the solar system.',
    },
    'fulkerson-algorithm': {
      title: 'Ford-Fulkerson Algorithm',
      description:
        'Implementation of the Ford-Fulkerson maximum flow algorithm in Java using BFS (Edmonds-Karp variant). Includes graph visualization and step-by-step execution tracing.',
    },
    'explorenow': {
      title: 'ExploreNow',
      description:
        'Mobile exploration app built with Flutter and Dart. Integrates Google Maps API and GPS for real-time location tracking, route planning, and point-of-interest discovery.',
    },
    'proxy-vinted': {
      title: 'ProxyVinted',
      description:
        'Proxy service for the Vinted marketplace API built with React and Node.js. Aggregates listings data with a Bootstrap-styled dashboard for monitoring and filtering.',
    },
    'library-java': {
      title: 'Library Manager',
      description:
        'Library management system in Java for tracking books, members, and borrowing records. Clean object-oriented architecture with CRUD operations and search functionality.',
    },
  },
  pl: {
    'nexty': {
      title: 'Kaizen Box Nexty',
      description:
        'Platforma SaaS do sugestii pracowniczych zasilana AI (Kaizen Box Nexty). Zaprojektowana na bazie React 19 i Python FastAPI, z całą infrastrukturą AWS (ECS, EC2, RDS PostgreSQL, API Gateway) zarządzaną przez Terraform i Ansible. Integracja AWS Bedrock do walidacji sugestii i chatbota, z asynchronicznymi workflow przez SQS, SNS, SES i Lambda. Wielostopniowe CI/CD przez GitHub Actions i GitLab CI — budowanie obrazów Docker, push do Amazon ECR, wdrożenia z Cognito. Bezserwerowy pipeline analityczny (Glue, Athena, S3) do przetwarzania zgłoszeń i generowania raportów.',
    },
    'k8s-recruitment-task': {
      title: 'k8s-recruitment-task',
      description:
        'Zadanie rekrutacyjne DevOps z Kubernetes — provisioning klastra z Minikube, konfiguracja Nginx ingress, Horizontal Pod Autoscaler i Dockeryzowane mikroserwisy ze skryptami shell.',
    },
    'zuzu-groomer': {
      title: 'ZuzuGroomer',
      description:
        'Platforma usług groomerskich dla zwierząt zbudowana w TypeScript i React. Rezerwacja wizyt, katalog usług, responsywny design i zarządzanie stanem z Redux.',
    },
    'drinkapp': {
      title: 'drinkapp',
      description:
        'Aplikacja z przepisami na drinki w czasie rzeczywistym z frontendem React i backendem Node.js. Przeglądanie koktajli, czat przez Socket.io i zarządzanie recepturami z bazą MySQL.',
    },
    'solar-system': {
      title: 'Układ Słoneczny',
      description:
        'Interaktywna wizualizacja 3D Układu Słonecznego zbudowana z Three.js. Animowane orbity planet, realistyczne tekstury i sterowanie kamerą do eksploracji.',
    },
    'fulkerson-algorithm': {
      title: 'Algorytm Forda-Fulkersona',
      description:
        'Implementacja algorytmu maksymalnego przepływu Forda-Fulkersona w Javie z użyciem BFS (wariant Edmondsa-Karpa). Wizualizacja grafu i śledzenie kroków wykonania.',
    },
    'explorenow': {
      title: 'ExploreNow',
      description:
        'Mobilna aplikacja eksploracji zbudowana z Flutter i Dart. Integracja z Google Maps API i GPS do śledzenia lokalizacji w czasie rzeczywistym, planowania tras i odkrywania punktów zainteresowania.',
    },
    'proxy-vinted': {
      title: 'ProxyVinted',
      description:
        'Serwis proxy dla API Vinted zbudowany z React i Node.js. Agregacja danych ogłoszeń z dashboardem w Bootstrap do monitoringu i filtrowania.',
    },
    'library-java': {
      title: 'Menedżer Biblioteki',
      description:
        'System zarządzania biblioteką w Javie — śledzenie książek, członków i wypożyczeń. Czysta architektura obiektowa z operacjami CRUD i wyszukiwaniem.',
    },
  },
  de: {
    'nexty': {
      title: 'Kaizen Box Nexty',
      description:
        'AI-gestützte Mitarbeiter-Vorschlagsplattform (Kaizen Box Nexty). Event-getriebene Anwendung mit React 19 und Python FastAPI, gesamte AWS-Infrastruktur (ECS, EC2, RDS PostgreSQL, API Gateway) per Terraform und Ansible bereitgestellt. Generative KI via AWS Bedrock für automatische Validierung und In-App-Chatbot, asynchrone Workflows mit SQS, SNS, SES und Lambda. Mehrstufige CI/CD-Pipeline mit GitHub Actions und GitLab CI — Docker-Images bauen, zu Amazon ECR pushen, Deployments mit Cognito. Serverloser Analyse-Pipeline (Glue, Athena, S3) für Berichte aus Nutzervorschlägen.',
    },
    'k8s-recruitment-task': {
      title: 'k8s-recruitment-task',
      description:
        'Kubernetes-DevOps-Aufgabe mit Cluster-Provisionierung über Minikube, Nginx-Ingress-Konfiguration, Horizontal Pod Autoscaler und Dockerisierte Microservices mit Shell-Scripting.',
    },
    'zuzu-groomer': {
      title: 'ZuzuGroomer',
      description:
        'Plattform für Tierpflegedienste mit TypeScript und React. Terminbuchung, Servicekatalog, responsives Design und State-Management mit Redux.',
    },
    'drinkapp': {
      title: 'drinkapp',
      description:
        'Echtzeit-Getränke-Rezept-App mit React-Frontend und Node.js-Backend. Cocktails durchsuchen, Chat über Socket.io und Rezeptverwaltung mit MySQL-Datenbank.',
    },
    'solar-system': {
      title: 'Sonnensystem',
      description:
        'Interaktive 3D-Sonnensystem-Visualisierung mit Three.js. Animierte Planetenorbits, realistische Texturen und Kamerasteuerung zur Erkundung.',
    },
    'fulkerson-algorithm': {
      title: 'Ford-Fulkerson-Algorithmus',
      description:
        'Implementierung des Ford-Fulkerson Maximum-Flow-Algorithmus in Java mit BFS (Edmonds-Karp-Variante). Graph-Visualisierung und schrittweise Ausführungsverfolgung.',
    },
    'explorenow': {
      title: 'ExploreNow',
      description:
        'Mobile Erkundungs-App mit Flutter und Dart. Integration von Google Maps API und GPS für Echtzeit-Standortverfolgung, Routenplanung und Entdeckung von Sehenswürdigkeiten.',
    },
    'proxy-vinted': {
      title: 'ProxyVinted',
      description:
        'Proxy-Dienst für die Vinted-Marktplatz-API mit React und Node.js. Aggregation von Angebotsdaten mit Bootstrap-Dashboard für Monitoring und Filterung.',
    },
    'library-java': {
      title: 'Bibliotheksmanager',
      description:
        'Bibliotheksverwaltungssystem in Java zur Verfolgung von Büchern, Mitgliedern und Ausleihen. Saubere objektorientierte Architektur mit CRUD-Operationen und Suchfunktion.',
    },
  },
}

export function getProjects(locale: Locale): Project[] {
  const t = translations[locale] ?? translations.en
  return projects.map(p => ({ ...p, ...t[p.slug] }))
}
