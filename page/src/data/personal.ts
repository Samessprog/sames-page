import type { Locale } from '@/i18n/types'

export interface PersonalData {
  firstName: string
  lastName: string
  title: string
  bio: string
  location: string
  experience: string
  interests: string
  education: string
  email: string
  github: string
  linkedin: string
  cal: string
}

const data: Record<Locale, PersonalData> = {
  en: {
    firstName: 'Szymon',
    lastName: 'Wator',
    title: 'Cloud & DevOps Engineer',
    bio: "I'm a Cloud & DevOps Engineer with hands-on experience building and operating cloud-native infrastructure on AWS and GCP. I specialize in Infrastructure as Code, CI/CD pipelines, containerization, and observability.\n\nI'm passionate about automation, cost optimization, and building reliable, scalable systems that help development teams ship faster and more efficiently.\n\nOutside of cloud architecture and DevOps, I enjoy board games and video games. I'm especially a fan of classic strategy titles – one of my all-time favorites is Heroes of Might and Magic III.",
    location: 'Katowice, Poland',
    experience: '1+ Years',
    interests: 'Cloud, IaC, Observability, Home Lab',
    education: "Master's — Deep Learning & Emotion Recognition",
    email: 'szymon.wator26@gmail.com',
    github: 'https://github.com/Samessprog',
    linkedin: 'https://linkedin.com/in/szym-wt',
    cal: 'https://cal.com/szymon-wator',
  },
  pl: {
    firstName: 'Szymon',
    lastName: 'Wątor',
    title: 'Cloud & DevOps Engineer',
    bio: "Jestem Cloud & DevOps Engineerem z praktycznym doświadczeniem w budowaniu i utrzymaniu infrastruktury chmurowej na AWS i GCP. Specjalizuję się w Infrastructure as Code, pipeline'ach CI/CD, konteneryzacji i obserwowalności.\n\nPasjonuję się automatyzacją, optymalizacją kosztów oraz budowaniem niezawodnych, skalowalnych systemów, które pomagają zespołom programistycznym szybciej i efektywniej wdrażać oprogramowanie.\n\nPoza architekturą chmurową i DevOps interesuję się grami planszowymi oraz grami komputerowymi. Szczególnie lubię klasyczne tytuły strategiczne – jedną z moich ulubionych gier wszech czasów jest Heroes of Might and Magic III.",
    location: 'Katowice, Polska',
    experience: '1+ rok',
    interests: 'Chmura, IaC, Obserwowalność, Home Lab',
    education: 'Magister — Deep Learning i rozpoznawanie emocji',
    email: 'szymon.wator26@gmail.com',
    github: 'https://github.com/Samessprog',
    linkedin: 'https://linkedin.com/in/szym-wt',
    cal: 'https://cal.com/szymon-wator',
  },
  de: {
    firstName: 'Szymon',
    lastName: 'Wator',
    title: 'Cloud & DevOps Engineer',
    bio: "Ich bin ein Cloud & DevOps Engineer mit praktischer Erfahrung im Aufbau und Betrieb von Cloud-nativer Infrastruktur auf AWS und GCP. Ich spezialisiere mich auf Infrastructure as Code, CI/CD-Pipelines, Containerisierung und Observability.\n\nIch begeistere mich für Automatisierung, Kostenoptimierung und den Aufbau zuverlässiger, skalierbarer Systeme, die Entwicklungsteams helfen, schneller und effizienter zu deployen.\n\nAbseits von Cloud-Architektur und DevOps interessiere ich mich für Brett- und Computerspiele. Besonders mag ich klassische Strategietitel – eines meiner Lieblingsspiele aller Zeiten ist Heroes of Might and Magic III.",
    location: 'Katowice, Polen',
    experience: '1+ Jahr',
    interests: 'Cloud, IaC, Observability, Home Lab',
    education: 'Master — Deep Learning & Emotionserkennung',
    email: 'szymon.wator26@gmail.com',
    github: 'https://github.com/Samessprog',
    linkedin: 'https://linkedin.com/in/szym-wt',
    cal: 'https://cal.com/szymon-wator',
  },
}

export function getPersonal(locale: Locale): PersonalData {
  return data[locale] ?? data.en
}
