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
  whatIOwned?: string[]      // Bullet points of ownership areas
  technicalHighlights?: string[]  // Bullet points of tech achievements
  whyItMatters?: string      // Paragraph explaining impact
}

export interface Project extends ProjectBase {
  title: string
  description: string
  whatIOwned?: string[]
  technicalHighlights?: string[]
  whyItMatters?: string
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
        'AI-powered Kaizen suggestion management platform that transforms employee feedback into actionable improvements. Employees submit improvement suggestions through an intuitive React 19 interface, where AWS Bedrock\'s generative AI validates submissions and provides intelligent feedback. The system includes an AI chatbot that guides users through the suggestion process, ensuring high-quality submissions that drive organizational change. The platform features a comprehensive workflow engine managing suggestions from submission through approval and implementation. Managers review suggestions through detailed dashboards showing analytics, trends, and ROI projections. AWS Glue and Athena power the serverless analytics pipeline, processing suggestion data into actionable insights stored in S3. Built on AWS infrastructure orchestrated through Terraform and Ansible, the platform leverages ECS for containerized deployments, RDS PostgreSQL for data persistence, and an event-driven architecture using SQS, SNS, and Lambda for async workflows. The FastAPI backend handles business logic while Cognito manages authentication, creating a scalable, production-ready SaaS solution.',
      whatIOwned: [
        'Full-stack architecture design and implementation across React 19 and Python FastAPI',
        'AWS infrastructure provisioning using Terraform (ECS, EC2, RDS PostgreSQL, API Gateway)',
        'Generative AI integration via AWS Bedrock for suggestion validation and chatbot',
        'Event-driven async workflows with SQS, SNS, SES, and Lambda',
        'Multi-stage CI/CD pipeline across GitHub Actions and GitLab CI',
        'Serverless analytics pipeline with AWS Glue, Athena, and S3',
      ],
      technicalHighlights: [
        'React 19 with modern patterns and AWS Cognito authentication',
        'Python FastAPI backend with event-driven architecture',
        'Terraform and Ansible for infrastructure as code',
        'AWS Bedrock integration for AI-powered features',
        'Docker containerization with Amazon ECR',
        'Comprehensive CI/CD automation with testing and deployment',
      ],
      whyItMatters:
        'This project demonstrates full ownership of a production SaaS platform from infrastructure to application layer. It showcases modern cloud-native architecture, AI integration, and DevOps best practices at scale.',
    },
    'k8s-recruitment-task': {
      title: 'k8s-recruitment-task',
      description:
        'Production-grade Kubernetes deployment demonstrating enterprise DevOps practices and cloud-native architecture. The project sets up a complete local Kubernetes cluster using Minikube, featuring multi-container microservices with sophisticated orchestration patterns. Nginx ingress controller handles traffic routing with path-based rules, directing requests to appropriate services while managing TLS termination and load balancing. The Horizontal Pod Autoscaler (HPA) implementation showcases dynamic scaling based on CPU and memory metrics, automatically adjusting replica counts to handle varying loads. Deployment manifests define rolling update strategies with health checks and readiness probes, ensuring zero-downtime deployments. Shell automation scripts streamline cluster provisioning, application deployment, and management tasks. The architecture demonstrates namespace isolation for multi-tenant scenarios, resource quotas for capacity management, and network policies for security. This project exemplifies the ability to design and implement scalable, resilient infrastructure ready for production workloads.',
      whatIOwned: [
        'Complete Kubernetes cluster setup using Minikube for local development',
        'Nginx ingress controller configuration for traffic routing',
        'Horizontal Pod Autoscaler (HPA) implementation for dynamic scaling',
        'Multi-container microservices architecture with Docker',
        'Shell automation scripts for deployment and management',
        'Namespace isolation and resource management',
      ],
      technicalHighlights: [
        'Kubernetes manifests for deployments, services, and ingress',
        'HPA configuration with CPU and memory-based scaling policies',
        'Nginx ingress with path-based routing',
        'Docker multi-stage builds for optimized images',
        'Shell scripting for automated cluster provisioning',
        'Network policies and service mesh configuration',
      ],
      whyItMatters:
        'This project demonstrates practical Kubernetes expertise and DevOps automation skills. It shows the ability to design scalable, production-ready infrastructure with proper monitoring and auto-scaling.',
    },
    'zuzu-groomer': {
      title: 'ZuzuGroomer',
      description:
        'Modern pet grooming service platform built with TypeScript and React, featuring a comprehensive appointment booking system for pet care businesses. Clients browse a dynamic service catalog with detailed descriptions, pricing tiers, and duration estimates for grooming packages. The booking flow guides users through service selection, preferred time slot choice, and pet profile creation, ensuring all necessary information is captured upfront. The appointment management system includes a visual calendar interface showing availability, booked slots, and groomer assignments. Redux Toolkit manages complex state across the booking flow, handling service combinations, pricing calculations, and schedule conflicts. Client and pet profiles store grooming history, preferences, and special requirements, enabling personalized service recommendations. Built with Vite for fast development cycles and Tailwind CSS for a polished, responsive interface that works seamlessly across devices. The type-safe TypeScript architecture prevents runtime errors and improves maintainability, while React Router enables smooth navigation between booking, calendar, and profile management views.',
      whatIOwned: [
        'Complete frontend architecture with TypeScript and React',
        'Appointment booking system with calendar integration',
        'Service catalog with dynamic pricing and availability',
        'Redux state management for complex booking flows',
        'Responsive UI with Tailwind CSS',
        'Client and pet profile management',
      ],
      technicalHighlights: [
        'TypeScript for type-safe development',
        'Redux Toolkit for centralized state management',
        'Vite for fast development and optimized builds',
        'Tailwind CSS with custom component library',
        'React Router for multi-page navigation',
        'Form validation and error handling',
      ],
      whyItMatters:
        'This project showcases modern React development with TypeScript, demonstrating the ability to build complex user interfaces with robust state management and type safety.',
    },
    'drinkapp': {
      title: 'drinkapp',
      description:
        'Real-time cocktail recipe application combining recipe discovery with social interaction. Users browse an extensive database of cocktails searchable by name, ingredient, or category, with detailed mixing instructions and ingredient lists. The favorite system lets users build personal collections, while ratings and reviews help identify top recipes. The live chat system enables real-time discussions about mixing techniques, ingredient substitutions, and flavor profiles. Socket.io powers bidirectional WebSocket communication supporting multiple chat rooms organized by topic, with instant message delivery and typing indicators. Real-time presence updates show who\'s online and active in discussions. Built on a React frontend and Express.js backend, the application uses a normalized MySQL database schema storing recipes, ingredients, users, and their relationships. The RESTful API handles recipe CRUD operations while WebSocket events manage chat messages, room management, and presence. User authentication enables personalized experiences with saved favorites and chat participation, creating an engaging platform where cocktail enthusiasts connect and share their passion.',
      whatIOwned: [
        'Full-stack development with React frontend and Node.js backend',
        'Real-time WebSocket communication using Socket.io',
        'MySQL database schema design and optimization',
        'RESTful API with Express.js for recipe CRUD operations',
        'User authentication and session management',
        'Live chat system for recipe discussions',
      ],
      technicalHighlights: [
        'Socket.io for bidirectional real-time communication',
        'Express.js backend with RESTful API design',
        'MySQL with normalized relational schema',
        'React with hooks for state management',
        'WebSocket event handling and room management',
        'Custom CSS for responsive design',
      ],
      whyItMatters:
        'This project demonstrates real-time application development with WebSockets, showing expertise in building interactive, multi-user experiences with live data synchronization.',
    },
    'solar-system': {
      title: 'Solar System',
      description:
        'Interactive 3D solar system visualization bringing celestial mechanics to life through WebGL rendering. The scene features accurately scaled planets, moons, and the sun, each with high-resolution textures showing surface details and realistic lighting. Planets orbit along elliptical paths with correct relative velocities, while moons orbit their parent planets, creating a dynamic solar system representation. The camera control system provides intuitive exploration with mouse-based orbit controls, smooth zoom, and the ability to focus on individual celestial bodies. Users can pause time and adjust orbital speeds to observe planetary movements. Performance optimizations including efficient geometry and level-of-detail rendering ensure smooth 60fps animation with multiple textured spheres. Built with Three.js and modern JavaScript, the project demonstrates advanced graphics programming including shader-based lighting, texture mapping, and physics simulations. Vite enables fast development with hot module replacement, creating an immersive educational experience that runs entirely in the browser.',
      whatIOwned: [
        'Complete 3D scene setup with Three.js',
        'Planetary orbit calculations and animations',
        'Realistic texture mapping for planets and celestial bodies',
        'Interactive camera controls with smooth navigation',
        'Performance optimization for smooth 60fps rendering',
        'Responsive canvas scaling for all screen sizes',
      ],
      technicalHighlights: [
        'Three.js for 3D graphics rendering',
        'WebGL shaders for realistic lighting and materials',
        'Orbital mechanics simulation with accurate physics',
        'Vite for fast development and hot module replacement',
        'Custom camera controls with orbit and zoom',
        'Texture loading and optimization',
      ],
      whyItMatters:
        'This project demonstrates advanced graphics programming and 3D visualization skills, showing the ability to create immersive, performant web experiences with complex animations.',
    },
    'fulkerson-algorithm': {
      title: 'Ford-Fulkerson Algorithm',
      description:
        'Implementation of the Ford-Fulkerson maximum flow algorithm solving the classic network flow problem: finding the maximum amount of flow that can pass from a source to a sink in a directed weighted graph. This Java implementation uses the Edmonds-Karp variant, which employs breadth-first search to find augmenting paths, guaranteeing polynomial time complexity. The program features graph visualization showing nodes, edges, capacities, and current flow values. Step-by-step execution tracing displays each iteration\'s augmenting path discovery, flow updates, and residual graph state, making the algorithm\'s operation transparent and educational. Users can input custom graphs or use predefined examples to explore different network scenarios. The clean object-oriented design uses graph data structures with adjacency lists, separate classes for nodes and edges, and encapsulated algorithm logic. Input validation ensures graphs are properly formed, while detailed output shows the maximum flow value and final flow distribution across edges.',
    },
    'explorenow': {
      title: 'ExploreNow',
      description:
        'Mobile exploration app built with Flutter enabling users to discover and navigate to points of interest in their surroundings. Real-time GPS tracking displays the user\'s current location on an interactive Google Maps interface, updating continuously as they move. The POI discovery feature highlights nearby restaurants, parks, museums, and attractions with information including ratings, hours, and distance. Route planning calculates optimal paths to selected destinations with turn-by-turn navigation. Users save favorite locations, create custom collections, and share discoveries with friends. The search system filters by category, distance, and rating to quickly find specific places. Built with Flutter and Dart, the app delivers native performance on iOS and Android from a single codebase. Google Maps SDK integration provides rich mapping capabilities while Firebase handles authentication and data sync. The responsive UI adapts seamlessly across screen sizes, creating an intuitive experience for discovering new places.',
    },
    'proxy-vinted': {
      title: 'ProxyVinted',
      description:
        'Proxy service for the Vinted marketplace API that aggregates and monitors secondhand fashion listings. The Node.js backend interfaces with Vinted\'s API, fetching item listings, prices, and seller information, then processes and caches data for efficient access. The system handles rate limiting and authentication, providing a reliable intermediary layer. The React dashboard presents listings in a filterable interface built with Bootstrap. Users search by keywords, filter by price range, category, and condition, and sort results by various criteria. Real-time updates notify users of new listings matching their preferences, while data visualizations show pricing trends and marketplace activity. The caching layer improves performance by reducing redundant API calls, storing frequently accessed data locally. This architecture demonstrates API integration patterns, data aggregation techniques, and building practical monitoring tools. The dashboard provides valuable insights for buyers tracking specific items or sellers analyzing market trends.',
    },
    'library-java': {
      title: 'Library Manager',
      description:
        'Library management system in Java handling book catalog management, member registration, and borrowing workflows. Librarians can add books with details including title, author, ISBN, publication year, and available copies. The member management module maintains borrower profiles with contact information and borrowing history. The checkout system tracks which members have borrowed which books, with due dates and return processing. Search functionality allows quick lookup by title, author, or ISBN, while filtering shows available books or overdue items. The system enforces business rules like loan limits per member and reservation systems for popular titles. Built with clean object-oriented design using encapsulation, inheritance, and polymorphism. Data persistence uses file I/O to save and load library state. The modular architecture separates concerns with dedicated classes for books, members, transactions, and the catalog, demonstrating fundamental OOP principles and software design patterns.',
    },
  },
  pl: {
    'nexty': {
      title: 'Kaizen Box Nexty',
      description:
        'Platforma zarządzania sugestiami Kaizen zasilana AI, która przekształca feedback pracowników w konkretne ulepszenia. Pracownicy przesyłają sugestie ulepszeń przez intuicyjny interfejs React 19, gdzie generatywna AI AWS Bedrock waliduje zgłoszenia i dostarcza inteligentną informację zwrotną. System zawiera chatbota AI, który prowadzi użytkowników przez proces zgłaszania sugestii, zapewniając wysoką jakość zgłoszeń napędzających zmiany organizacyjne. Platforma oferuje kompleksowy silnik workflow zarządzający sugestiami od zgłoszenia przez zatwierdzenie po wdrożenie. Menedżerowie przeglądają sugestie przez szczegółowe dashboardy pokazujące analitykę, trendy i prognozy ROI. AWS Glue i Athena zasilają bezserwerowy pipeline analityczny, przetwarzając dane sugestii na przydatne insights przechowywane w S3. Zbudowana na infrastrukturze AWS orkiestrowanej przez Terraform i Ansible, platforma wykorzystuje ECS do kontenerowych deploymentów, RDS PostgreSQL do persystencji danych oraz architekturę event-driven używającą SQS, SNS i Lambda do asynchronicznych workflow. Backend FastAPI obsługuje logikę biznesową, podczas gdy Cognito zarządza autentykacją, tworząc skalowalną, gotową produkcyjnie platformę SaaS.',
      whatIOwned: [
        'Projektowanie i implementacja architektury full-stack z React 19 i Python FastAPI',
        'Provisioning infrastruktury AWS przez Terraform (ECS, EC2, RDS PostgreSQL, API Gateway)',
        'Integracja Generative AI przez AWS Bedrock do walidacji sugestii i chatbota',
        'Asynchroniczne workflow z SQS, SNS, SES i Lambda',
        'Wielostopniowy pipeline CI/CD przez GitHub Actions i GitLab CI',
        'Bezserwerowy pipeline analityczny z AWS Glue, Athena i S3',
      ],
      technicalHighlights: [
        'React 19 z nowoczesnymi wzorcami i autentykacją AWS Cognito',
        'Backend Python FastAPI z architekturą event-driven',
        'Terraform i Ansible do Infrastructure as Code',
        'Integracja AWS Bedrock dla funkcji AI',
        'Konteneryzacja Docker z Amazon ECR',
        'Kompleksowa automatyzacja CI/CD z testami i deploymentem',
      ],
      whyItMatters:
        'Ten projekt демонструє pełną własność produkcyjnej platformy SaaS od warstwy infrastruktury po aplikację. Pokazuje nowoczesną architekturę cloud-native, integrację AI i najlepsze praktyki DevOps na skalę.',
    },
    'k8s-recruitment-task': {
      title: 'k8s-recruitment-task',
      description:
        'Deployment Kubernetes klasy produkcyjnej demonstrujący praktyki DevOps i architekturę cloud-native. Projekt konfiguruje kompletny lokalny klaster Kubernetes używając Minikube, oferując mikroserwisy wielokontenerowe z zaawansowanymi wzorcami orkiestracji. Nginx ingress controller obsługuje routing ruchu z regułami opartymi na ścieżkach, kierując żądania do odpowiednich serwisów przy jednoczesnym zarządzaniu terminacją TLS i load balancingiem. Implementacja Horizontal Pod Autoscaler (HPA) pokazuje dynamiczne skalowanie oparte na metrykach CPU i pamięci, automatycznie dostosowując liczbę replik do zmiennych obciążeń. Manifesty deploymentu definiują strategie rolling update z health checks i readiness probes, zapewniając wdrożenia bez przestojów. Skrypty automatyzacji shell usprawniają provisioning klastra, deployment aplikacji i zadania zarządzania. Architektura demonstruje izolację namespace dla scenariuszy wielodostępnych, przydziały zasobów do zarządzania pojemnością oraz polityki sieciowe dla bezpieczeństwa. Ten projekt pokazuje zdolność do projektowania i implementacji skalowalnej, odpornej infrastruktury gotowej na produkcyjne obciążenia.',
      whatIOwned: [
        'Kompletna konfiguracja klastra Kubernetes z Minikube dla lokalnego developmentu',
        'Konfiguracja kontrolera Nginx ingress do routingu ruchu',
        'Implementacja Horizontal Pod Autoscaler (HPA) do dynamicznego skalowania',
        'Architektura mikroserwisów z wieloma kontenerami Docker',
        'Skrypty shell do automatyzacji deploymentu i zarządzania',
        'Izolacja namespace i zarządzanie zasobami',
      ],
      technicalHighlights: [
        'Manifesty Kubernetes dla deploymentów, serwisów i ingress',
        'Konfiguracja HPA z politykami skalowania opartymi na CPU i pamięci',
        'Nginx ingress z routingiem opartym na ścieżkach',
        'Multi-stage builds Docker dla zoptymalizowanych obrazów',
        'Shell scripting do automatycznego provisioningu klastra',
        'Polityki sieciowe i konfiguracja service mesh',
      ],
      whyItMatters:
        'Ten projekt демонструє praktyczną wiedzę Kubernetes i umiejętności automatyzacji DevOps. Pokazuje zdolność do projektowania skalowalnej infrastruktury gotowej na produkcję z właściwym monitoringiem i auto-skalowaniem.',
    },
    'zuzu-groomer': {
      title: 'ZuzuGroomer',
      description:
        'Nowoczesna platforma usług groomerskich zbudowana z TypeScript i React, oferująca kompleksowy system rezerwacji wizyt dla firm zajmujących się pielęgnacją zwierząt. Klienci przeglądają dynamiczny katalog usług ze szczegółowymi opisami, poziomami cenowymi i szacowanym czasem trwania pakietów pielęgnacyjnych. Przepływ rezerwacji prowadzi użytkowników przez wybór usługi, preferowany termin oraz utworzenie profilu zwierzęcia, zapewniając zebranie wszystkich niezbędnych informacji z góry. System zarządzania wizytami zawiera wizualny interfejs kalendarza pokazujący dostępność, zarezerwowane terminy i przypisania groomerów. Redux Toolkit zarządza złożonym stanem w całym przepływie rezerwacji, obsługując kombinacje usług, kalkulacje cenowe i konflikty harmonogramu. Profile klientów i zwierząt przechowują historię pielęgnacji, preferencje i specjalne wymagania, umożliwiając spersonalizowane rekomendacje usług. Zbudowana z Vite dla szybkich cykli deweloperskich i Tailwind CSS dla dopracowanego, responsywnego interfejsu działającego płynnie na wszystkich urządzeniach. Bezpieczna typowo architektura TypeScript zapobiega błędom runtime i poprawia łatwość utrzymania, podczas gdy React Router umożliwia płynną nawigację między widokami rezerwacji, kalendarza i zarządzania profilami.',
      whatIOwned: [
        'Kompleksowa architektura frontendu z TypeScript i React',
        'System rezerwacji wizyt z integracją kalendarza',
        'Katalog usług z dynamicznym cennikiem i dostępnością',
        'Zarządzanie stanem Redux dla złożonych przepływów rezerwacji',
        'Responsywny UI z Tailwind CSS',
        'Zarządzanie profilami klientów i zwierząt',
      ],
      technicalHighlights: [
        'TypeScript dla type-safe developmentu',
        'Redux Toolkit do scentralizowanego zarządzania stanem',
        'Vite dla szybkiego developmentu i zoptymalizowanych buildów',
        'Tailwind CSS z niestandardową biblioteką komponentów',
        'React Router dla nawigacji wielostronicowej',
        'Walidacja formularzy i obsługa błędów',
      ],
      whyItMatters:
        'Ten projekt pokazuje nowoczesny development React z TypeScript, демонструючи zdolność do budowania złożonych interfejsów użytkownika z solidnym zarządzaniem stanem i bezpieczeństwem typów.',
    },
    'drinkapp': {
      title: 'drinkapp',
      description:
        'Aplikacja z przepisami na koktajle w czasie rzeczywistym łącząca odkrywanie przepisów z interakcją społecznościową. Użytkownicy przeglądają obszerną bazę koktajli z możliwością wyszukiwania po nazwie, składniku lub kategorii, ze szczegółowymi instrukcjami miksowania i listami składników. System ulubionych pozwala użytkownikom budować osobiste kolekcje, podczas gdy oceny i recenzje pomagają zidentyfikować najlepsze przepisy. System live chatu umożliwia dyskusje w czasie rzeczywistym o technikach miksowania, substytucjach składników i profilach smakowych. Socket.io napędza dwukierunkową komunikację WebSocket wspierającą wiele pokoi czatu organizowanych tematycznie, z natychmiastowym dostarczaniem wiadomości i wskaźnikami pisania. Aktualizacje obecności w czasie rzeczywistym pokazują, kto jest online i aktywny w dyskusjach. Zbudowana na frontendzie React i backendzie Express.js, aplikacja używa znormalizowanego schematu bazy MySQL przechowującego przepisy, składniki, użytkowników i ich relacje. RESTful API obsługuje operacje CRUD na przepisach, podczas gdy zdarzenia WebSocket zarządzają wiadomościami czatu, zarządzaniem pokojami i obecnością. Autentykacja użytkowników umożliwia spersonalizowane doświadczenia z zapisanymi ulubionymi i uczestnictwem w czacie, tworząc angażującą platformę, gdzie entuzjaści koktajli łączą się i dzielą swoją pasją.',
      whatIOwned: [
        'Full-stack development z frontendem React i backendem Node.js',
        'Komunikacja WebSocket w czasie rzeczywistym przez Socket.io',
        'Projektowanie i optymalizacja schematu bazy MySQL',
        'RESTful API z Express.js dla operacji CRUD na przepisach',
        'Autentykacja użytkowników i zarządzanie sesjami',
        'System live chatu do dyskusji o przepisach',
      ],
      technicalHighlights: [
        'Socket.io dla dwukierunkowej komunikacji w czasie rzeczywistym',
        'Backend Express.js z RESTful API',
        'MySQL z znormalizowanym schematem relacyjnym',
        'React z hookami do zarządzania stanem',
        'Obsługa zdarzeń WebSocket i zarządzanie pokojami',
        'Niestandardowy CSS dla responsywnego designu',
      ],
      whyItMatters:
        'Ten projekt демонструє development aplikacji real-time z WebSockets, pokazując ekspertyzę w budowaniu interaktywnych doświadczeń wieloużytkownikowych z synchronizacją danych na żywo.',
    },
    'solar-system': {
      title: 'Układ Słoneczny',
      description:
        'Interaktywna wizualizacja 3D Układu Słonecznego ożywiająca mechanikę niebieską poprzez rendering WebGL. Scena przedstawia precyzyjnie wyskalowane planety, księżyce i słońce, każde z teksturami wysokiej rozdzielczości pokazującymi szczegóły powierzchni i realistyczne oświetlenie. Planety krążą po eliptycznych orbitach z poprawnymi względnymi prędkościami, podczas gdy księżyce krążą wokół swoich planet macierzystych, tworząc dynamiczną reprezentację Układu Słonecznego. System sterowania kamerą zapewnia intuicyjną eksplorację z kontrolami orbity opartymi na myszce, płynnym zoomem i możliwością skupienia się na poszczególnych ciałach niebieskich. Użytkownicy mogą zatrzymać czas i dostosować prędkości orbitalne, aby obserwować ruchy planetarne. Optymalizacje wydajności, w tym wydajna geometria i renderowanie level-of-detail, zapewniają płynną animację 60fps z wieloma teksturowanymi sferami. Zbudowany z Three.js i nowoczesnym JavaScript, projekt demonstruje zaawansowane programowanie graficzne, w tym oświetlenie oparte na shaderach, mapowanie tekstur i symulacje fizyczne. Vite umożliwia szybki rozwój z hot module replacement, tworząc immersyjne doświadczenie edukacyjne działające całkowicie w przeglądarce.',
      whatIOwned: [
        'Kompleksowa konfiguracja sceny 3D z Three.js',
        'Obliczenia i animacje orbit planetarnych',
        'Realistyczne mapowanie tekstur dla planet i ciał niebieskich',
        'Interaktywne sterowanie kamerą z płynną nawigacją',
        'Optymalizacja wydajności dla płynnego renderowania 60fps',
        'Responsywne skalowanie canvas dla wszystkich rozmiarów ekranów',
      ],
      technicalHighlights: [
        'Three.js do renderowania grafiki 3D',
        'Shadery WebGL dla realistycznego oświetlenia i materiałów',
        'Symulacja mechaniki orbitalnej z precyzyjną fizyką',
        'Vite dla szybkiego developmentu i hot module replacement',
        'Niestandardowe sterowanie kamerą z orbitą i zoomem',
        'Ładowanie i optymalizacja tekstur',
      ],
      whyItMatters:
        'Ten projekt демонструє zaawansowane programowanie graficzne i umiejętności wizualizacji 3D, pokazując zdolność do tworzenia immersyjnych, wydajnych webowych doświadczeń ze złożonymi animacjami.',
    },
    'fulkerson-algorithm': {
      title: 'Algorytm Forda-Fulkersona',
      description:
        'Implementacja algorytmu maksymalnego przepływu Forda-Fulkersona rozwiązującego klasyczny problem przepływu sieciowego: znalezienie maksymalnej ilości przepływu mogącej przejść od źródła do ujścia w skierowanym grafie ważonym. Ta implementacja w Javie używa wariantu Edmondsa-Karpa, który wykorzystuje przeszukiwanie wszerz do znajdowania ścieżek powiększających, gwarantując wielomianową złożoność czasową. Program oferuje wizualizację grafu pokazującą węzły, krawędzie, pojemności i bieżące wartości przepływu. Śledzenie wykonania krok po kroku wyświetla odkrywanie ścieżki powiększającej każdej iteracji, aktualizacje przepływu i stan grafu rezydualnego, czyniąc działanie algorytmu przejrzystym i edukacyjnym. Użytkownicy mogą wprowadzać niestandardowe grafy lub używać predefiniowanych przykładów do eksploracji różnych scenariuszy sieciowych. Czysty projekt obiektowy używa struktur danych grafowych z listami sąsiedztwa, oddzielnymi klasami dla węzłów i krawędzi oraz enkapsulowaną logiką algorytmu. Walidacja wejścia zapewnia prawidłową formę grafów, podczas gdy szczegółowe wyjście pokazuje wartość maksymalnego przepływu i finalny rozkład przepływu na krawędziach.',
    },
    'explorenow': {
      title: 'ExploreNow',
      description:
        'Mobilna aplikacja eksploracji zbudowana z Flutter umożliwiająca użytkownikom odkrywanie i nawigowanie do punktów zainteresowania w ich otoczeniu. Śledzenie GPS w czasie rzeczywistym wyświetla bieżącą lokalizację użytkownika na interaktywnym interfejsie Google Maps, aktualizując się ciągle w trakcie ruchu. Funkcja odkrywania POI podświetla pobliskie restauracje, parki, muzea i atrakcje z informacjami zawierającymi oceny, godziny otwarcia i odległość. Planowanie tras oblicza optymalne ścieżki do wybranych destynacji z nawigacją krok po kroku. Użytkownicy zapisują ulubione lokalizacje, tworzą niestandardowe kolekcje i dzielą się odkryciami ze znajomymi. System wyszukiwania filtruje według kategorii, odległości i ocen, aby szybko znaleźć konkretne miejsca. Zbudowana z Flutter i Dart, aplikacja zapewnia natywną wydajność na iOS i Androidzie z jednej bazy kodu. Integracja Google Maps SDK zapewnia bogate możliwości mapowania, podczas gdy Firebase obsługuje autentykację i synchronizację danych. Responsywny interfejs płynnie dostosowuje się do różnych rozmiarów ekranów, tworząc intuicyjne doświadczenie odkrywania nowych miejsc.',
    },
    'proxy-vinted': {
      title: 'ProxyVinted',
      description:
        'Serwis proxy dla API Vinted agregujący i monitorujący ogłoszenia mody second-hand. Backend Node.js interfejsuje się z API Vinted, pobierając listingi przedmiotów, ceny i informacje o sprzedawcach, następnie przetwarza i buforuje dane dla wydajnego dostępu. System obsługuje rate limiting i autentykację, zapewniając niezawodną warstwę pośrednią. Dashboard React prezentuje listingi w filtrowalnym interfejsie zbudowanym z Bootstrap. Użytkownicy wyszukują po słowach kluczowych, filtrują według zakresu cenowego, kategorii i stanu oraz sortują wyniki według różnych kryteriów. Aktualizacje w czasie rzeczywistym powiadamiają użytkowników o nowych listingach pasujących do ich preferencji, podczas gdy wizualizacje danych pokazują trendy cenowe i aktywność marketplace. Warstwa buforowania poprawia wydajność, redukując nadmiarowe wywołania API i przechowując często używane dane lokalnie. Ta architektura demonstruje wzorce integracji API, techniki agregacji danych i budowanie praktycznych narzędzi monitorujących. Dashboard dostarcza cennych insights dla kupujących śledzących konkretne przedmioty lub sprzedawców analizujących trendy rynkowe.',
    },
    'library-java': {
      title: 'Menedżer Biblioteki',
      description:
        'System zarządzania biblioteką w Javie obsługujący zarządzanie katalogiem książek, rejestrację członków i workflow wypożyczeń. Bibliotekarze mogą dodawać książki ze szczegółami obejmującymi tytuł, autora, ISBN, rok publikacji i dostępne egzemplarze. Moduł zarządzania członkami utrzymuje profile wypożyczających z informacjami kontaktowymi i historią wypożyczeń. System wypożyczeń śledzi, którzy członkowie wypożyczyli które książki, z datami zwrotu i przetwarzaniem zwrotów. Funkcjonalność wyszukiwania umożliwia szybkie wyszukiwanie po tytule, autorze lub ISBN, podczas gdy filtrowanie pokazuje dostępne książki lub przetrzymane pozycje. System egzekwuje reguły biznesowe, takie jak limity wypożyczeń na członka i systemy rezerwacji dla popularnych tytułów. Zbudowany z czystym projektem obiektowym wykorzystującym enkapsulację, dziedziczenie i polimorfizm. Persystencja danych używa file I/O do zapisywania i wczytywania stanu biblioteki. Modularna architektura rozdziela odpowiedzialności z dedykowanymi klasami dla książek, członków, transakcji i katalogu, demonstrując fundamentalne zasady OOP i wzorce projektowe oprogramowania.',
    },
  },
  de: {
    'nexty': {
      title: 'Kaizen Box Nexty',
      description:
        'KI-gestützte Kaizen-Vorschlagsmanagement-Plattform, die Mitarbeiter-Feedback in umsetzbare Verbesserungen verwandelt. Mitarbeiter reichen Verbesserungsvorschläge über ein intuitives React 19-Interface ein, wo AWS Bedrocks generative KI Einreichungen validiert und intelligentes Feedback liefert. Das System enthält einen KI-Chatbot, der Benutzer durch den Vorschlagsprozess führt und hochwertige Einreichungen sicherstellt, die organisatorische Veränderungen vorantreiben. Die Plattform bietet eine umfassende Workflow-Engine, die Vorschläge von der Einreichung über die Genehmigung bis zur Umsetzung verwaltet. Manager überprüfen Vorschläge über detaillierte Dashboards mit Analysen, Trends und ROI-Prognosen. AWS Glue und Athena betreiben die serverlose Analyse-Pipeline, die Vorschlagsdaten in umsetzbare Erkenntnisse verarbeitet, die in S3 gespeichert werden. Aufgebaut auf AWS-Infrastruktur, orchestriert durch Terraform und Ansible, nutzt die Plattform ECS für containerisierte Deployments, RDS PostgreSQL für Datenpersistenz und eine event-getriebene Architektur mit SQS, SNS und Lambda für asynchrone Workflows. Das FastAPI-Backend verarbeitet die Geschäftslogik, während Cognito die Authentifizierung verwaltet und eine skalierbare, produktionsreife SaaS-Lösung schafft.',
      whatIOwned: [
        'Full-Stack-Architekturdesign und -Implementierung mit React 19 und Python FastAPI',
        'AWS-Infrastruktur-Provisionierung mit Terraform (ECS, EC2, RDS PostgreSQL, API Gateway)',
        'Generative KI-Integration über AWS Bedrock für Vorschlagsvalidierung und Chatbot',
        'Event-getriebene asynchrone Workflows mit SQS, SNS, SES und Lambda',
        'Mehrstufige CI/CD-Pipeline über GitHub Actions und GitLab CI',
        'Serverlose Analyse-Pipeline mit AWS Glue, Athena und S3',
      ],
      technicalHighlights: [
        'React 19 mit modernen Patterns und AWS Cognito-Authentifizierung',
        'Python FastAPI Backend mit event-getriebener Architektur',
        'Terraform und Ansible für Infrastructure as Code',
        'AWS Bedrock-Integration für KI-gestützte Features',
        'Docker-Containerisierung mit Amazon ECR',
        'Umfassende CI/CD-Automatisierung mit Testing und Deployment',
      ],
      whyItMatters:
        'Dieses Projekt demonstriert vollständige Verantwortung für eine Produktions-SaaS-Plattform von der Infrastruktur- bis zur Anwendungsebene. Es zeigt moderne Cloud-native-Architektur, KI-Integration und DevOps-Best-Practices im großen Maßstab.',
    },
    'k8s-recruitment-task': {
      title: 'k8s-recruitment-task',
      description:
        'Produktionsreifes Kubernetes-Deployment, das Enterprise-DevOps-Praktiken und Cloud-native-Architektur demonstriert. Das Projekt richtet ein vollständiges lokales Kubernetes-Cluster mit Minikube ein und bietet Multi-Container-Microservices mit anspruchsvollen Orchestrierungsmustern. Der Nginx Ingress Controller verarbeitet Traffic-Routing mit pfadbasierten Regeln, leitet Anfragen an entsprechende Services weiter und verwaltet gleichzeitig TLS-Terminierung und Load Balancing. Die Horizontal Pod Autoscaler (HPA)-Implementierung zeigt dynamisches Skalieren basierend auf CPU- und Speichermetriken und passt automatisch die Replica-Anzahl an variierende Lasten an. Deployment-Manifeste definieren Rolling-Update-Strategien mit Health Checks und Readiness Probes, die Deployments ohne Ausfallzeiten gewährleisten. Shell-Automatisierungsskripte optimieren Cluster-Provisioning, Anwendungs-Deployment und Management-Aufgaben. Die Architektur demonstriert Namespace-Isolation für Multi-Tenant-Szenarien, Ressourcen-Quotas für Kapazitätsmanagement und Netzwerkrichtlinien für Sicherheit. Dieses Projekt zeigt die Fähigkeit, skalierbare, resiliente Infrastruktur zu entwerfen und zu implementieren, die für produktive Workloads bereit ist.',
      whatIOwned: [
        'Vollständiges Kubernetes-Cluster-Setup mit Minikube für lokale Entwicklung',
        'Nginx Ingress Controller-Konfiguration für Traffic-Routing',
        'Horizontal Pod Autoscaler (HPA)-Implementierung für dynamisches Skalieren',
        'Multi-Container-Microservices-Architektur mit Docker',
        'Shell-Automatisierungsskripte für Deployment und Management',
        'Namespace-Isolation und Ressourcenmanagement',
      ],
      technicalHighlights: [
        'Kubernetes-Manifeste für Deployments, Services und Ingress',
        'HPA-Konfiguration mit CPU- und speicherbasierten Skalierungsrichtlinien',
        'Nginx Ingress mit pfadbasiertem Routing',
        'Docker Multi-Stage-Builds für optimierte Images',
        'Shell-Scripting für automatisiertes Cluster-Provisioning',
        'Netzwerkrichtlinien und Service-Mesh-Konfiguration',
      ],
      whyItMatters:
        'Dieses Projekt demonstriert praktische Kubernetes-Expertise und DevOps-Automatisierungsfähigkeiten. Es zeigt die Fähigkeit, skalierbare, produktionsreife Infrastruktur mit ordnungsgemäßem Monitoring und Auto-Scaling zu entwerfen.',
    },
    'zuzu-groomer': {
      title: 'ZuzuGroomer',
      description:
        'Moderne Tierpflege-Service-Plattform mit TypeScript und React, die ein umfassendes Terminbuchungssystem für Tierpflegeunternehmen bietet. Kunden durchsuchen einen dynamischen Servicekatalog mit detaillierten Beschreibungen, Preisstufen und Zeitschätzungen für Pflegepakete. Der Buchungsablauf führt Benutzer durch Serviceauswahl, bevorzugte Zeitfensterwahl und Haustierprofilierung und stellt sicher, dass alle notwendigen Informationen im Voraus erfasst werden. Das Terminverwaltungssystem umfasst ein visuelles Kalender-Interface, das Verfügbarkeit, gebuchte Slots und Groomer-Zuweisungen zeigt. Redux Toolkit verwaltet den komplexen State über den gesamten Buchungsablauf hinweg und behandelt Servicekombinationen, Preisberechnungen und Terminkonlikte. Kunden- und Haustierprofile speichern Pflegehistorie, Präferenzen und besondere Anforderungen und ermöglichen personalisierte Service-Empfehlungen. Erstellt mit Vite für schnelle Entwicklungszyklen und Tailwind CSS für ein elegantes, responsives Interface, das nahtlos auf allen Geräten funktioniert. Die typsichere TypeScript-Architektur verhindert Laufzeitfehler und verbessert die Wartbarkeit, während React Router eine reibungslose Navigation zwischen Buchungs-, Kalender- und Profilverwaltungsansichten ermöglicht.',
      whatIOwned: [
        'Vollständige Frontend-Architektur mit TypeScript und React',
        'Terminbuchungssystem mit Kalenderintegration',
        'Servicekatalog mit dynamischer Preisgestaltung und Verfügbarkeit',
        'Redux State Management für komplexe Buchungsabläufe',
        'Responsives UI mit Tailwind CSS',
        'Kunden- und Haustierprofilverwaltung',
      ],
      technicalHighlights: [
        'TypeScript für type-safe Entwicklung',
        'Redux Toolkit für zentralisiertes State Management',
        'Vite für schnelle Entwicklung und optimierte Builds',
        'Tailwind CSS mit benutzerdefinierter Komponentenbibliothek',
        'React Router für mehrseitige Navigation',
        'Formularvalidierung und Fehlerbehandlung',
      ],
      whyItMatters:
        'Dieses Projekt zeigt moderne React-Entwicklung mit TypeScript und demonstriert die Fähigkeit, komplexe Benutzeroberflächen mit robustem State Management und Typsicherheit zu erstellen.',
    },
    'drinkapp': {
      title: 'drinkapp',
      description:
        'Echtzeit-Cocktailrezept-Anwendung, die Rezeptentdeckung mit sozialer Interaktion verbindet. Benutzer durchsuchen eine umfangreiche Cocktail-Datenbank mit Suche nach Name, Zutat oder Kategorie, mit detaillierten Mixanleitungen und Zutatenlisten. Das Favoriten-System ermöglicht Benutzern, persönliche Sammlungen aufzubauen, während Bewertungen und Rezensionen helfen, Top-Rezepte zu identifizieren. Das Live-Chat-System ermöglicht Echtzeit-Diskussionen über Mixtechniken, Zutatensubstitutionen und Geschmacksprofile. Socket.io betreibt bidirektionale WebSocket-Kommunikation mit mehreren nach Themen organisierten Chaträumen, mit sofortiger Nachrichtenzustellung und Tippindikatoren. Echtzeit-Präsenz-Updates zeigen, wer online und in Diskussionen aktiv ist. Aufgebaut auf einem React-Frontend und Express.js-Backend verwendet die Anwendung ein normalisiertes MySQL-Datenbankschema, das Rezepte, Zutaten, Benutzer und ihre Beziehungen speichert. Die RESTful API verarbeitet Rezept-CRUD-Operationen, während WebSocket-Events Chatnachrichten, Raumverwaltung und Präsenz verwalten. Benutzerauthentifizierung ermöglicht personalisierte Erlebnisse mit gespeicherten Favoriten und Chat-Teilnahme und schafft eine ansprechende Plattform, auf der Cocktail-Enthusiasten sich verbinden und ihre Leidenschaft teilen.',
      whatIOwned: [
        'Full-Stack-Entwicklung mit React-Frontend und Node.js-Backend',
        'Echtzeit-WebSocket-Kommunikation mit Socket.io',
        'MySQL-Datenbankschema-Design und -Optimierung',
        'RESTful API mit Express.js für Rezept-CRUD-Operationen',
        'Benutzerauthentifizierung und Session-Management',
        'Live-Chat-System für Rezeptdiskussionen',
      ],
      technicalHighlights: [
        'Socket.io für bidirektionale Echtzeit-Kommunikation',
        'Express.js-Backend mit RESTful API-Design',
        'MySQL mit normalisiertem relationalen Schema',
        'React mit Hooks für State Management',
        'WebSocket-Event-Handling und Raumverwaltung',
        'Benutzerdefiniertes CSS für responsives Design',
      ],
      whyItMatters:
        'Dieses Projekt demonstriert Echtzeit-Anwendungsentwicklung mit WebSockets und zeigt Expertise beim Erstellen interaktiver Multi-User-Erlebnisse mit Live-Datensynchronisierung.',
    },
    'solar-system': {
      title: 'Sonnensystem',
      description:
        'Interaktive 3D-Sonnensystem-Visualisierung, die Himmelsmechanik durch WebGL-Rendering zum Leben erweckt. Die Szene zeigt präzise skalierte Planeten, Monde und die Sonne, jeweils mit hochauflösenden Texturen, die Oberflächendetails und realistische Beleuchtung zeigen. Planeten kreisen auf elliptischen Bahnen mit korrekten relativen Geschwindigkeiten, während Monde um ihre Mutterplaneten kreisen und eine dynamische Sonnensystemdarstellung schaffen. Das Kamerasteuerungssystem bietet intuitive Erkundung mit mausbasierten Orbit-Steuerelementen, sanftem Zoom und der Möglichkeit, sich auf einzelne Himmelskörper zu konzentrieren. Benutzer können die Zeit anhalten und Orbit-Geschwindigkeiten anpassen, um Planetenbewegungen zu beobachten. Performance-Optimierungen einschließlich effizienter Geometrie und Level-of-Detail-Rendering gewährleisten eine flüssige 60fps-Animation mit mehreren texturierten Kugeln. Erstellt mit Three.js und modernem JavaScript demonstriert das Projekt fortgeschrittene Grafikprogrammierung einschließlich Shader-basierter Beleuchtung, Texture-Mapping und Physiksimulationen. Vite ermöglicht schnelle Entwicklung mit Hot Module Replacement und schafft ein immersives Bildungserlebnis, das vollständig im Browser läuft.',
      whatIOwned: [
        'Vollständiges 3D-Szenen-Setup mit Three.js',
        'Planetenumlaufbahnberechnungen und -animationen',
        'Realistisches Texture-Mapping für Planeten und Himmelskörper',
        'Interaktive Kamerasteuerung mit sanfter Navigation',
        'Performance-Optimierung für flüssiges 60fps-Rendering',
        'Responsives Canvas-Scaling für alle Bildschirmgrößen',
      ],
      technicalHighlights: [
        'Three.js für 3D-Grafik-Rendering',
        'WebGL-Shader für realistische Beleuchtung und Materialien',
        'Orbitalmechanik-Simulation mit präziser Physik',
        'Vite für schnelle Entwicklung und Hot Module Replacement',
        'Benutzerdefinierte Kamerasteuerung mit Orbit und Zoom',
        'Textur-Laden und -Optimierung',
      ],
      whyItMatters:
        'Dieses Projekt demonstriert fortgeschrittene Grafikprogrammierung und 3D-Visualisierungsfähigkeiten und zeigt die Fähigkeit, immersive, performante Web-Erlebnisse mit komplexen Animationen zu erstellen.',
    },
    'fulkerson-algorithm': {
      title: 'Ford-Fulkerson-Algorithmus',
      description:
        'Implementierung des Ford-Fulkerson Maximum-Flow-Algorithmus, der das klassische Netzwerkflussproblem löst: das Finden des maximalen Flusses, der von einer Quelle zu einer Senke in einem gerichteten gewichteten Graphen fließen kann. Diese Java-Implementierung verwendet die Edmonds-Karp-Variante, die Breitensuche zum Finden erweiternder Pfade einsetzt und polynomielle Zeitkomplexität garantiert. Das Programm bietet Graph-Visualisierung mit Knoten, Kanten, Kapazitäten und aktuellen Flusswerten. Die schrittweise Ausführungsverfolgung zeigt die Entdeckung des erweiternden Pfades jeder Iteration, Flussaktualisierungen und den Zustand des Residualgraphen an, wodurch die Funktionsweise des Algorithmus transparent und lehrreich wird. Benutzer können benutzerdefinierte Graphen eingeben oder vordefinierte Beispiele verwenden, um verschiedene Netzwerkszenarien zu erkunden. Das saubere objektorientierte Design verwendet Graph-Datenstrukturen mit Adjazenzlisten, separate Klassen für Knoten und Kanten sowie gekapselte Algorithmuslogik. Input-Validierung stellt sicher, dass Graphen korrekt geformt sind, während detaillierte Ausgabe den maximalen Flusswert und die endgültige Flussverteilung über Kanten zeigt.',
    },
    'explorenow': {
      title: 'ExploreNow',
      description:
        'Mobile Erkundungs-App mit Flutter, die Benutzern ermöglicht, Sehenswürdigkeiten in ihrer Umgebung zu entdecken und dorthin zu navigieren. Echtzeit-GPS-Tracking zeigt den aktuellen Standort des Benutzers auf einer interaktiven Google Maps-Oberfläche an, die sich kontinuierlich während der Bewegung aktualisiert. Die POI-Entdeckungsfunktion hebt nahegelegene Restaurants, Parks, Museen und Attraktionen mit Informationen einschließlich Bewertungen, Öffnungszeiten und Entfernung hervor. Routenplanung berechnet optimale Pfade zu ausgewählten Zielen mit Turn-by-Turn-Navigation. Benutzer speichern Lieblingsstandorte, erstellen benutzerdefinierte Sammlungen und teilen Entdeckungen mit Freunden. Das Suchsystem filtert nach Kategorie, Entfernung und Bewertung, um schnell bestimmte Orte zu finden. Erstellt mit Flutter und Dart liefert die App native Performance auf iOS und Android aus einer einzigen Codebasis. Google Maps SDK-Integration bietet umfangreiche Kartierungsfunktionen, während Firebase Authentifizierung und Datensynchronisation verwaltet. Die responsive UI passt sich nahtlos an verschiedene Bildschirmgrößen an und schafft ein intuitives Erlebnis zum Entdecken neuer Orte.',
    },
    'proxy-vinted': {
      title: 'ProxyVinted',
      description:
        'Proxy-Dienst für die Vinted-Marktplatz-API, der Secondhand-Mode-Angebote aggregiert und überwacht. Das Node.js-Backend verbindet sich mit der Vinted-API, ruft Artikel-Listings, Preise und Verkäuferinformationen ab und verarbeitet und cached dann Daten für effizienten Zugriff. Das System verarbeitet Rate Limiting und Authentifizierung und bietet eine zuverlässige Vermittlungsschicht. Das React-Dashboard präsentiert Listings in einer filterbaren Oberfläche, die mit Bootstrap erstellt wurde. Benutzer suchen nach Schlüsselwörtern, filtern nach Preisspanne, Kategorie und Zustand und sortieren Ergebnisse nach verschiedenen Kriterien. Echtzeit-Updates benachrichtigen Benutzer über neue Listings, die ihren Präferenzen entsprechen, während Datenvisualisierungen Preistrends und Marktplatz-Aktivität zeigen. Die Caching-Schicht verbessert die Performance durch Reduzierung redundanter API-Aufrufe und lokale Speicherung häufig abgerufener Daten. Diese Architektur demonstriert API-Integrationsmuster, Datenaggregationstechniken und den Aufbau praktischer Monitoring-Tools. Das Dashboard bietet wertvolle Einblicke für Käufer, die bestimmte Artikel verfolgen, oder Verkäufer, die Markttrends analysieren.',
    },
    'library-java': {
      title: 'Bibliotheksmanager',
      description:
        'Bibliotheksverwaltungssystem in Java, das Buchkatalogverwaltung, Mitgliederregistrierung und Ausleih-Workflows verarbeitet. Bibliothekare können Bücher mit Details einschließlich Titel, Autor, ISBN, Erscheinungsjahr und verfügbaren Exemplaren hinzufügen. Das Mitgliederverwaltungsmodul pflegt Ausleihprofile mit Kontaktinformationen und Ausleihhistorie. Das Ausleihe-System verfolgt, welche Mitglieder welche Bücher ausgeliehen haben, mit Rückgabedaten und Rückgabeverarbeitung. Suchfunktionen ermöglichen schnelle Suche nach Titel, Autor oder ISBN, während Filterung verfügbare Bücher oder überfällige Artikel anzeigt. Das System setzt Geschäftsregeln wie Ausleihlimits pro Mitglied und Reservierungssysteme für beliebte Titel durch. Erstellt mit sauberem objektorientierten Design unter Verwendung von Kapselung, Vererbung und Polymorphismus. Datenpersistenz verwendet File I/O zum Speichern und Laden des Bibliothekszustands. Die modulare Architektur trennt Anliegen mit dedizierten Klassen für Bücher, Mitglieder, Transaktionen und den Katalog und demonstriert grundlegende OOP-Prinzipien und Software-Entwurfsmuster.',
    },
  },
}

export function getProjects(locale: Locale): Project[] {
  const t = translations[locale] ?? translations.en
  return projects.map(p => ({ ...p, ...t[p.slug] }))
}
