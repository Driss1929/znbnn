export type Language = 'en' | 'fr';

export interface Project {
  id: string;
  title: { en: string; fr: string };
  subtitle: { en: string; fr: string };
  category: 'logistics' | 'market_research' | 'finance' | 'innovation' | 'management';
  categoryLabel: { en: string; fr: string };
  image: string;
  summary: { en: string; fr: string };
  context: { en: string; fr: string };
  problem: { en: string; fr: string };
  solution: { en: string; fr: string };
  methodology: { en: string; fr: string };
  outcomes: { en: string[]; fr: string[] };
  skills: string[];
  status: 'completed' | 'in_progress';
  date: string;
}

export interface InsightArticle {
  id: string;
  title: { en: string; fr: string };
  readTime: string;
  category: string;
  date: string;
  summary: { en: string; fr: string };
  content: { en: string[]; fr: string[] };
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Zainab Zouhair',
    initials: 'ZZ',
    tagline: {
      en: 'Understanding Business. Connecting Ideas. Creating Value.',
      fr: 'Comprendre les organisations. Relier les idées. Créer de la valeur.',
    },
    title: {
      en: "Master's Student in International Management & Trade",
      fr: "Étudiante en Master Management et Commerce International",
    },
    subRole: {
      en: 'Business Operations · Supply Chain & Logistics · Digital Innovation',
      fr: 'Opérations d’entreprise · Logistique & Supply Chain · Innovation Numérique',
    },
    location: 'Taroudant & Agadir, Morocco',
    email: 'zouhairzineb78@gmail.com',
    phone: '+212 638 247 768',
    linkedin: 'https://www.linkedin.com/in/zainab-zouhair-687592387',
    avatar: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_16.36.11_947aa253.jpeg',
    authenticPhoto: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_16.36.11_947aa253.jpeg',
    cvPdfPath: '/assets/aistudio/ZAINAB_ZOUHAIR_CV_Erasmus_2026_b2f88838.pdf',
    efsetPdfPath: '/assets/aistudio/EF_SET_Certificate__1__2efaada4.pdf',
    erasmusCandidateStatus: {
      en: 'Erasmus+ Mobility Candidate · Target: WSB Merito University in Poznań, Poland',
      fr: 'Candidate Mobilité Erasmus+ · Cible : Université WSB Merito à Poznań, Pologne',
    },
  },

  erasmusExchange: {
    targetUniversity: {
      en: 'WSB Merito University in Poznań',
      fr: 'Université WSB Merito à Poznań',
      pl: 'Uniwersytet WSB Merito w Poznaniu',
    },
    city: 'Poznań, Poland',
    region: 'Wielkopolska',
    faculty: {
      en: 'Faculty of Finance & Banking / Institute of Management',
      fr: 'Faculté de Gestion & Commerce International',
    },
    mobilityProgram: 'Erasmus+ International Credit Mobility (KA171)',
    studyLevel: "Master's Degree Exchange (2nd Cycle)",
    targetSemester: 'Academic Year 2026/2027',
    learningObjectives: {
      en: 'Acquire direct academic exposure to Central European logistics corridors, cross-border supply chains, and Polish innovation in automated retail & parcel networks.',
      fr: 'Acquérir une immersion directe au cœur des corridors logistiques d’Europe centrale, des chaînes d’approvisionnement paneuropéennes et du modèle polonais de distribution automatisée.',
    },
    curriculumTracks: [
      {
        course: { en: 'International Supply Chain Management & 3PL', fr: 'Management de la Supply Chain Internationale & 3PL' },
        ects: 6,
        description: {
          en: 'Strategic distribution networks, warehousing automation, and cold chain logistics connecting Eastern and Western Europe.',
          fr: 'Réseaux de distribution stratégiques, automatisation des entrepôts et corridors de fret.',
        },
      },
      {
        course: { en: 'Global Logistics Corridors & Multimodal Freight', fr: 'Corridors Logistiques Mondiaux & Fret Multimodal' },
        ects: 6,
        description: {
          en: 'Examining maritime-rail connections between Poland, Germany, and North Africa (TEN-T network transit hubs).',
          fr: 'Analyse des liaisons rail-mer et de l’intégration aux grands corridors de transit transeuropéens.',
        },
      },
      {
        course: { en: 'Cross-Cultural Leadership & European Business Ethics', fr: 'Leadership Interculturel & Négociation Européenne' },
        ects: 5,
        description: {
          en: 'Multicultural team alignment, negotiation practices in the EU single market, and corporate governance.',
          fr: 'Coordination d’équipes multiculturelles et techniques de négociation au sein de l’Union Européenne.',
        },
      },
      {
        course: { en: 'Digital Business Models & E-Commerce Automation', fr: 'Modèles Numériques & Automatisation E-Commerce' },
        ects: 5,
        description: {
          en: 'Algorithmic parcel networks, smart lockers (InPost benchmark), and last-mile fulfillment analytics.',
          fr: 'Réseaux de consignes connectées (benchmark polonais InPost) et technologies de livraison urbaine.',
        },
      },
      {
        course: { en: 'International Financial Management & Hedging', fr: 'Gestion Financière Internationale & Couverture' },
        ects: 5,
        description: {
          en: 'Managing currency exposure (EUR/PLN/MAD), international trade instruments, and EU export financing.',
          fr: 'Gestion du risque de change (EUR/PLN/MAD), instruments bancaires et financement d’export.',
        },
      },
      {
        course: { en: 'Polish Language & Cultural Context (A1)', fr: 'Langue & Culture Polonaise (A1)' },
        ects: 3,
        description: {
          en: 'Foundational communicative Polish for academic immersion and community integration in Poznań.',
          fr: 'Bases de communication en polonais pour une intégration active dans la communauté universitaire de Poznań.',
        },
      },
    ],
    strategicPillars: [
      {
        title: { en: 'Poznań as Europe’s Logistics Heartland', fr: 'Poznań, Carrefour Logistique Européen' },
        desc: {
          en: 'Situated midway between Berlin and Warsaw, the Poznań agglomeration is one of Europe’s foremost logistics and warehousing centers, providing the ideal living laboratory for Zainab’s research on supply chain optimization.',
          fr: 'Située à mi-chemin entre Berlin et Varsovie, la métropole de Poznań constitue un centre névralgique de transport et d’entreposage européen, offrant un terrain d’observation d’exception pour ses travaux en Supply Chain.',
        },
      },
      {
        title: { en: 'Last-Mile Locker Benchmark (Express Package Connection)', fr: 'Berceau des Consignes Connectées (Lien Express Package)' },
        desc: {
          en: 'Poland operates the world’s most developed smart locker infrastructure. Zainab’s Express Package academic research on locker allocation algorithms gains direct benchmarking value by studying Polish deployment practices.',
          fr: 'La Pologne est la référence mondiale absolue des casiers de livraison intelligents. Le projet universitaire Express Package de Zainab trouvera un terrain d’analyse direct à travers l’expérience polonaise.',
        },
      },
      {
        title: { en: 'B2 Certified English Fluency & Academic Readiness', fr: 'Maîtrise Linguistique B2 Certifiée' },
        desc: {
          en: 'With an officially certified EF SET English score of 52/100 (CEFR B2 Upper Intermediate, code rW8578), Zainab fully meets and exceeds WSB Merito Poznań Erasmus+ English language instruction standards.',
          fr: 'Avec un score officiel EF SET de 52/100 (CECRL B2, code rW8578), Zainab valide pleinement les prérequis linguistiques d’enseignement en anglais de l’Université WSB Merito.',
        },
      },
    ],
  },

  valueProposition: {
    en: 'I combine international management training with an analytical and organizational mindset, with a strong interest in improving operational workflows, logistics coordination, and the thoughtful adoption of digital technologies in enterprises.',
    fr: "J'associe une formation en management international à une approche analytique et organisationnelle, avec un intérêt pour l'amélioration des pratiques de gestion, la logistique et l'intégration des outils numériques dans les organisations.",
  },

  bios: {
    short: {
      en: "Master's student in International Management and Trade at Ibn Zohr University, Morocco. Passionate about organizational management, international business, logistics, and digital innovation. My background bridges academic rigor, practical internship experiences, student club leadership, and analytical project work.",
      fr: "Étudiante en Master Management et Commerce International à l'Université Ibn Zohr, je m'intéresse au management des organisations, au commerce international, à la logistique et à l'innovation numérique. Mon parcours associe formation académique, expériences professionnelles, engagement associatif et projets universitaires.",
    },
    medium: {
      en: "I am Zainab Zouhair, a Master's student in International Management and Trade at the Faculty of Taroudant, Ibn Zohr University. My academic foundation in Economics and Management provided a thorough understanding of organizational structures, global markets, and business environments. Throughout my studies, I have delved into Supply Chain Management, logistics coordination, international risk management, and market intelligence.\n\nMy internships at WAFA ASSURANCE and LARMOUS introduced me to administrative operations, client relations, document archiving, and logistical workflows. Concurrently, as Vice President of the MCI Master's Conference & Training Club, I actively organize university seminars, student integration days, and corporate visits. I am particularly motivated by how emerging digital tools and AI can enhance operational efficiency.",
      fr: "Je suis Zainab Zouhair, étudiante en deuxième année de Master Management et Commerce International à la Faculté Polydisciplinaire de Taroudant, Université Ibn Zohr.\n\nMon parcours en économie et gestion m'a permis de développer une compréhension des organisations, de leur fonctionnement et de leur environnement économique. J'ai exploré plusieurs domaines clés : le management international, la Supply Chain, la logistique, la gestion des risques et la veille commerciale.\n\nMes stages chez WAFA ASSURANCE et LARMOUS m'ont permis de découvrir les pratiques administratives, la relation client, le suivi documentaire et le soutien logistique. En tant que vice-présidente du Club MCI, je contribue à l'organisation d'activités universitaires et de visites d'entreprises.",
    },
    full: {
      en: "I am Zainab Zouhair, an emerging professional pursuing a Master's degree in International Management and Trade at Ibn Zohr University, Morocco.\n\nMy academic journey began with a Bachelor's degree in Economics and Management (Management track) in Agadir, laying a structured foundation in business administration, quantitative methods, and strategic analysis. In my Master's program in Taroudant, I have expanded my perspective toward international trade dynamics, supply chain systems, financial risk hedging, and business intelligence.\n\nComplementing my academic curriculum, my professional internships at WAFA ASSURANCE and LARMOUS Construction provided hands-on experience in public and client reception, contract administration, CNSS file processing, inventory monitoring, and logistics support. In addition, serving as Vice President of the MCI Master's Conference & Training Club has honed my abilities in team coordination, event management, and institutional relations—culminating in the co-organization of faculty integration days and an educational study visit to agricultural leader COPAG.\n\nDriven by continuous learning, I have earned certifications in Business AI, Organizational Communication, and an official EF SET English Certificate at B2 Upper-Intermediate level. My aspiration is to bring rigor, cross-cultural adaptability, and digital proactivity to forward-looking global organizations.",
      fr: "Je suis Zainab Zouhair, étudiante en Master Management et Commerce International à la Faculté Polydisciplinaire de Taroudant, Université Ibn Zohr au Maroc.\n\nMon parcours académique a débuté par une Licence en Économie et Gestion (parcours Gestion) à Agadir, établissant une base solide en administration des affaires, méthodes d'analyse et gestion opérationnelle. Au sein de mon Master à Taroudant, j'ai orienté mes recherches vers les dynamiques des échanges internationaux, les systèmes de Supply Chain, la gestion des risques commerciaux et la veille concurrentielle.\n\nEn parallèle, mes stages chez WAFA ASSURANCE et LARMOUS m'ont confrontée aux réalités du terrain : accueil client, suivi des dossiers administratifs et CNSS, archivage rigoureux, gestion des flux d'inventaire et assistance logistique. Mon rôle de Vice-Présidente du Club MCI m'a permis de développer un réel sens du leadership collectif à travers l'organisation de journées d'intégration et d'une visite d'étude chez COPAG.\n\nCertifiée en IA pour le business et détentrice d'un certificat d'anglais EF SET de niveau B2 (Upper Intermediate), je poursuis un perfectionnement continu afin d'apporter valeur et rigueur aux projets d'envergure internationale.",
    },
  },

  pillars: [
    {
      id: 'international_business',
      title: { en: 'International Business', fr: 'Management International' },
      tagline: { en: 'Global Markets & Trade Mechanics', fr: 'Marchés mondiaux & commerce extérieur' },
      description: {
        en: 'Analyzing international trade flows, country risk factors, regulatory frameworks, and market entry strategies across multicultural environments.',
        fr: "Analyse des flux commerciaux internationaux, des risques pays, des cadres réglementaires et des stratégies de pénétration des marchés.",
      },
      icon: 'Globe',
    },
    {
      id: 'operations_logistics',
      title: { en: 'Operations & Logistics', fr: 'Opérations & Logistique' },
      tagline: { en: 'Supply Chain Coordination', fr: 'Coordination Supply Chain & flux' },
      description: {
        en: 'Examining inventory management, warehousing, 3PL logistics subcontracting, last-mile delivery concepts, and operational resilience.',
        fr: "Étude de la gestion des stocks, de l'entreposage, de la sous-traitance logistique (3PL), des consignes intelligentes et de l'efficience opérationnelle.",
      },
      icon: 'Truck',
    },
    {
      id: 'digital_innovation',
      title: { en: 'Digital Innovation & AI', fr: 'Innovation Numérique & IA' },
      tagline: { en: 'Modern Management Tools', fr: 'Outils de gestion modernes & IA' },
      description: {
        en: 'Investigating how generative AI, smart allocation algorithms, and collaborative cloud tools transform decision-making and business workflows.',
        fr: "Exploration des applications pratiques de l'IA générative, de l'automatisation des flux et des solutions numériques dans le pilotage des organisations.",
      },
      icon: 'Cpu',
    },
  ],

  academicJourney: [
    {
      degree: {
        en: "Master's Degree in International Management and Trade",
        fr: "Master en Management et Commerce International (MCI)",
      },
      institution: 'Faculty of Economics & Management – Ibn Zohr University, Taroudant',
      period: '01/2026 – Present',
      location: 'Taroudant, Morocco',
      status: { en: 'Current Student (Year 2)', fr: 'Étudiante en cours (2e année)' },
      highlights: {
        en: [
          'Core Modules: International Business Strategy, Supply Chain Management, International Risk Management, Business Intelligence, Intercultural Management.',
          'Active leadership: Elected Vice President of the MCI Conference & Training Club.',
          'Master’s Final Project (PFE) formulation: Enhancing tracking and coordination of import-export operations.',
        ],
        fr: [
          'Modules clés : Stratégie internationale, Supply Chain Management, Gestion des risques internationaux, Veille commerciale, Management interculturel.',
          'Responsabilité : Élue Vice-Présidente du Club MCI Conference & Training.',
          'Projet de Fin d’Études (PFE) : Optimisation du suivi et de la coordination des opérations d’import-export.',
        ],
      },
    },
    {
      degree: {
        en: "Bachelor's Degree in Economics and Management (Management Track)",
        fr: "Licence en Économie et Gestion (Parcours Gestion)",
      },
      institution: 'Faculty of Legal, Economic & Social Sciences (FSJES) – Ibn Zohr University',
      period: '09/2022 – 06/2025',
      location: 'Agadir, Morocco',
      status: { en: 'Completed with Honors', fr: 'Diplômée' },
      highlights: {
        en: [
          'Coursework: Financial accounting, corporate taxation, marketing analysis, micro/macro economics, organizational behavior, business statistics.',
          'Conducted market feasibility studies and financial structure evaluations.',
        ],
        fr: [
          'Enseignements : Comptabilité financière, fiscalité, analyse marketing, micro/macro-économie, sociologie des organisations, statistiques appliquées.',
          'Réalisation d’études de faisabilité commerciale et d’analyses structurelles.',
        ],
      },
    },
    {
      degree: {
        en: 'DEUG in Economics & Management',
        fr: 'DEUG en Sciences Économiques et de Gestion',
      },
      institution: 'Ibn Zohr University',
      period: '2024',
      location: 'Agadir, Morocco',
      status: { en: 'Conferred', fr: 'Obtenu' },
      highlights: {
        en: ['Fundamental 2-year university diploma covering quantitative methods, economic theory, and commercial law.'],
        fr: ['Diplôme d’études universitaires générales validant les bases quantitatives et juridiques.'],
      },
    },
    {
      degree: {
        en: 'Baccalaureate in Economic Sciences',
        fr: 'Baccalauréat en Sciences Économiques',
      },
      institution: 'Dakhla High School',
      period: '09/2021 – 06/2022',
      location: 'Ouled Berhil, Morocco',
      status: { en: 'Conferred', fr: 'Obtenu' },
      highlights: {
        en: ['Focus on general economics, business statistics, accounting principles, and legal fundamentals.'],
        fr: ['Spécialité économie générale, statistiques de gestion, principes comptables et droit.'],
      },
    },
  ],

  experiences: [
    {
      company: 'WAFA ASSURANCE Agency',
      role: { en: 'Administrative Intern', fr: 'Stagiaire Administrative' },
      period: '07/2024 – 08/2024',
      location: 'Ouled Berhil, Morocco',
      sector: { en: 'Insurance & Financial Services', fr: 'Assurance & Services Financiers' },
      description: {
        en: 'Completed an intensive 2-month professional immersion supporting agency administration, policyholder inquiries, and contract archives.',
        fr: "Immersion de deux mois axée sur la gestion administrative, l'accueil des assurés et le suivi contractuel.",
      },
      tasks: {
        en: [
          'Welcomed and assisted agency clients with policy explanations, renewals, and claims procedures.',
          'Prepared, audited, followed up, and archived automobile, home, and civil liability insurance contracts.',
          'Managed sensitive administrative files, including official CNSS (National Social Security) reimbursement dossiers.',
          'Maintained client database records and ensured compliant physical and digital document storage.',
        ],
        fr: [
          'Accueil et orientation des clients pour les souscriptions, avenants et déclarations de sinistres.',
          'Préparation, suivi administratif et archivage des contrats d’assurance.',
          'Traitement et suivi des dossiers administratifs et des bordereaux CNSS.',
          'Tenue à jour des registres clients et respect de la conformité documentaire.',
        ],
      },
    },
    {
      company: 'LARMOUS Construction & General Works',
      role: { en: 'Administrative & Logistics Intern', fr: 'Stagiaire Administrative & Logistique' },
      period: '06/2024 – 06/2024',
      location: 'Ouled Berhil, Morocco',
      sector: { en: 'Construction & Civil Engineering', fr: 'Bâtiment et Travaux Publics (BTP)' },
      description: {
        en: 'Provided operational, inventory, and administrative support during high-demand site and materials procurement cycles.',
        fr: "Appui opérationnel, administratif et logistique au sein d'une entreprise générale de travaux.",
      },
      tasks: {
        en: [
          'Delivered logistical and administrative support to project managers and field teams.',
          'Conducted routine inventory counts and tracked construction material deliveries and supply sheets.',
          'Structured physical and electronic project archives, invoices, and supplier delivery notes.',
          'Welcomed suppliers, subcontractors, and visitors, routing technical requests to appropriate teams.',
        ],
        fr: [
          'Soutien administratif et logistique quotidien aux équipes de conduite de travaux.',
          'Suivi des bons de commande, bordereaux de livraison et état des stocks de matériaux.',
          'Classement rigoureux et archivage des pièces comptables et dossiers fournisseurs.',
          'Accueil physique des partenaires, fournisseurs et sous-traitants.',
        ],
      },
    },
  ],

  leadership: {
    title: { en: 'University Leadership & Associative Engagement', fr: 'Engagement Associatif & Responsabilités' },
    role: { en: 'Vice President', fr: 'Vice-Présidente' },
    organization: {
      en: "MCI Master's Conference & Training Club",
      fr: "Club MCI Master's Conference & Training",
    },
    period: '02/2026 – Present',
    location: 'Faculty of Taroudant – Ibn Zohr University',
    description: {
      en: 'Elected Vice President by peers and faculty advisors to coordinate student academic enrichment, professional conferences, study excursions, and cross-cohort networking.',
      fr: "Élue Vice-Présidente pour piloter les activités d'enrichissement académique, les conférences professionnelles, les sorties d'études et la cohésion étudiante.",
    },
    initiatives: [
      {
        title: { en: 'Integration Day for Economics & Management Faculty', fr: "Journée d'Intégration de la Faculté d'Économie" },
        date: '2026',
        desc: {
          en: 'Co-organized welcoming and orientation seminars for incoming undergraduate and graduate students, coordinating schedules, guest panels, and logistics.',
          fr: "Co-organisation des journées d'accueil et d'orientation pour les nouveaux étudiants, gestion de la logistique et des panels.",
        },
      },
      {
        title: { en: 'Educational Study Visit to COPAG Cooperative', fr: "Visite Pédagogique au Complexe Industriel COPAG" },
        date: '2026',
        desc: {
          en: 'Coordinated logistics and student participation for a comprehensive field visit to COPAG in Taroudant, observing dairy and citrus supply chain operations, cold storage, and 3PL contracting.',
          fr: "Coordination de la visite de terrain chez COPAG, observation des chaînes logistiques agroalimentaires, entrepôts frigorifiques et sous-traitance.",
        },
      },
      {
        title: { en: 'MCI Master’s Integration & Networking Forum', fr: "Forum d'Intégration du Master MCI" },
        date: '2026',
        desc: {
          en: 'Orchestrated specialized workshops and exchange roundtables for Master’s students, connecting alumni, faculty, and industry practitioners.',
          fr: "Organisation d'ateliers et de tables rondes thématiques réunissant étudiants du Master, lauréats et professionnels.",
        },
      },
    ],
  },

  projects: ([
    {
      id: 'express-package',
      title: {
        en: 'Express Package: Smart Parcel Locker for Last-Mile Delivery',
        fr: 'Express Package : Consigne Intelligente pour le Dernier Kilomètre',
      },
      subtitle: {
        en: 'Conceptualizing an Automated Modular Locker Network to Solve Urban Delivery Inefficiencies',
        fr: "Conception d'un réseau de casiers connectés pour optimiser la distribution urbaine",
      },
      category: 'innovation',
      categoryLabel: { en: 'Digital Logistics & Innovation', fr: 'Logistique Numérique & Innovation' },
      image: '/src/assets/images/express_package_locker_1794322890109.jpg',
      date: '2026',
      status: 'completed',
      summary: {
        en: 'An academic entrepreneurial and logistics project proposing an automated parcel locker solution with algorithmic compartment assignment, QR/PIN authentication, and automated notifications.',
        fr: "Projet académique entrepreneurial proposant un système de consignes intelligentes avec allocation automatique des casiers, accès sécurisé par QR/PIN et notifications en temps réel.",
      },
      context: {
        en: 'The surge in Moroccan e-commerce has stressed last-mile delivery: missed deliveries, congested residential corridors, and high return logistics costs. Express Package was designed as a decentralized pick-up/drop-off (PUDO) ecosystem.',
        fr: "L'essor du e-commerce au Maroc accentue les défis du dernier kilomètre : échecs de livraison, surcoûts et engorgement urbain. Express Package propose une solution décentralisée de retrait et dépôt sécurisé.",
      },
      problem: {
        en: 'High failure rates on home delivery attempts, scheduling friction between couriers and customers, and security vulnerabilities with cash-on-delivery and uncollected packages.',
        fr: "Taux élevé d'échecs lors des livraisons à domicile, contraintes horaires pour les clients et coûts élevés de retour des colis.",
      },
      solution: {
        en: 'A modular, solar-compatible locker station situated at university campuses, transit stations, and retail centers. Integrates dynamic compartment allocation based on dimensions, one-time encrypted QR/SMS PIN codes, and a fleet monitoring interface.',
        fr: "Des stations de casiers modulaires implantées dans les campus, gares et centres commerciaux. Système d'allocation dynamique selon le volume du colis, code QR/PIN chiffré à usage unique et console de supervision.",
      },
      methodology: {
        en: 'Business Model Canvas formulation, customer journey mapping, technical workflow modeling (courier deposit → consumer pickup → returns handling), and economic feasibility estimation.',
        fr: "Élaboration d'un Business Model Canvas, cartographie du parcours utilisateur, modélisation des flux opérationnels et étude de rentabilité prévisionnelle.",
      },
      outcomes: {
        en: [
          'Detailed architectural layout for a 24-compartment automated locker unit.',
          'Workflow protocols minimizing courier dwell time from 12 mins to under 90 seconds per drop.',
          'Privacy and security model ensuring end-to-end authentication via single-use encrypted tokens.',
        ],
        fr: [
          'Modélisation technique d’un module de 24 compartiments intelligents.',
          'Protocole opérationnel réduisant le temps d’arrêt du livreur à moins de 90 secondes.',
          'Architecture de sécurité basée sur des jetons d’accès éphémères et chiffrés.',
        ],
      },
      skills: ['Last-Mile Logistics', 'Design Thinking', 'Business Modeling', 'Digital Automation', 'Supply Chain Innovation'],
    },
    {
      id: 'netflix-market-intelligence',
      title: {
        en: 'Commercial Intelligence: Netflix Case Study & Digital Consumer Behaviour',
        fr: 'Veille Commerciale : Étude de Cas Netflix & Comportement du Consommateur',
      },
      subtitle: {
        en: 'Primary Survey of Master’s Cohort & Strategic Analysis of Streaming Usage Patterns',
        fr: "Enquête primaire auprès d'étudiants de Master et analyse stratégique des usages de streaming",
      },
      category: 'market_research',
      categoryLabel: { en: 'Market Research & Business Intelligence', fr: 'Veille Commerciale & Études de Marché' },
      image: '/src/assets/images/market_intelligence_workspace_1794322891167.jpg',
      date: '2026',
      status: 'completed',
      summary: {
        en: 'A multi-method market intelligence project investigating streaming consumption, willingness-to-pay, and competitive positioning among Moroccan university students.',
        fr: "Projet universitaire combinant veille documentaire et enquête quantitative auprès de 22 étudiants du Master MCI sur les usages et préférences de streaming.",
      },
      context: {
        en: 'Conducted within the Commercial Intelligence & Market Watch module, this project explored how global digital entertainment platforms maintain consumer engagement against free alternative ecosystems.',
        fr: "Réalisé dans le cadre du module de veille commerciale, ce projet a examiné comment les plateformes payantes fidélisent leur audience face aux alternatives gratuites.",
      },
      problem: {
        en: 'Understanding digital consumption friction, price sensitivity, and substitution effects between premium subscription video-on-demand (SVOD) and free ad-supported platforms (YouTube).',
        fr: "Identifier la sensibilité au prix, les freins à l'abonnement payant et les effets de substitution entre SVOD et plateformes gratuites.",
      },
      solution: {
        en: 'Designed an anonymized digital questionnaire distributed to 22 Master’s students, cross-referenced with secondary market data, demographic breakdowns, and strategic SWOT/Porter five-forces models.',
        fr: "Conception et administration d'un questionnaire d'enquête ciblé, dépouillement statistique descriptif et confrontation avec la littérature de veille concurrentielle.",
      },
      methodology: {
        en: 'Questionnaire design, quantitative descriptive statistics, cross-tabulation of viewing hours vs. platform preference, and Porter Five Forces industry mapping.',
        fr: "Élaboration du questionnaire, traitement statistique descriptif des réponses, analyse des temps d’écran et diagnostic concurrentiel.",
      },
      outcomes: {
        en: [
          'Revealed YouTube as the dominant daily consumption platform (100% penetration) while Netflix captures dedicated weekend binge-watching.',
          'Identified peer credential-sharing as the principal access vehicle among university demographics.',
          'Formulated actionable pricing tier recommendations tailored for student and shared-household demographics in North Africa.',
        ],
        fr: [
          'YouTube identifié comme plateforme d’usage quotidien universel (100%) tandis que Netflix domine le visionnage du week-end.',
          'Mise en évidence du partage de comptes comme modalité d’accès prépondérante chez les étudiants.',
          'Recommandations stratégiques sur des offres d’abonnement étudiantes adaptées au marché marocain.',
        ],
      },
      skills: ['Survey Design', 'Quantitative Analysis', 'Competitive Intelligence', 'Consumer Behavior', 'Strategic Marketing'],
    },
    {
      id: 'coworking-cafe',
      title: {
        en: 'Coworking Café: Commercial Demand & Supply Feasibility Analysis',
        fr: 'Coworking Café : Analyse de la Demande et de l’Offre pour la Création d’Entreprise',
      },
      subtitle: {
        en: 'Assessing Market Viability for a Hybrid Work-Café Hub in Taroudant-Agadir Corridor',
        fr: "Étude d'opportunité commerciale pour un tiers-lieu café & travail dans la région Souss-Massa",
      },
      category: 'innovation',
      categoryLabel: { en: 'Entrepreneurship & Feasibility', fr: 'Entrepreneuriat & Faisabilité' },
      image: '/src/assets/images/coworking_cafe_interior_1794322891329.jpg',
      date: '2026',
      status: 'completed',
      summary: {
        en: 'A commercial feasibility study examining the unserved demand for flexible, connected third spaces catering to freelance workers, remote contractors, and students.',
        fr: "Étude de faisabilité examinant la demande non satisfaite pour un espace de travail flexible associant convivialité et connectivité haut débit.",
      },
      context: {
        en: 'With rising remote work and expanding university enrollments in Taroudant, traditional cafés lack productivity amenities, while dedicated business incubators remain inaccessible to casual freelancers.',
        fr: "Face à l'essor du travail à distance et des formations universitaires, les cafés traditionnels manquent d'équipements adaptés et les pépinières sont peu accessibles aux indépendants.",
      },
      problem: {
        en: 'Evaluating whether a hybrid monetization model (pay-by-time vs. premium beverage consumption) can sustain commercial rent and overhead in a regional Moroccan hub.',
        fr: "Évaluer la viabilité financière d'un modèle économique hybride (forfait temps vs consommation de restauration de qualité).",
      },
      solution: {
        en: 'A phased concept providing acoustic work booths, communal oak study tables, high-speed fiber internet, specialty coffee, and evening cultural workshop programming.',
        fr: "Un concept architectural intégrant des cabines acoustiques, de grandes tables de travail en chêne, fibre optique dédiée, barista et ateliers en soirée.",
      },
      methodology: {
        en: 'Competitor benchmarking across Agadir-Taroudant, consumer persona modeling, revenue stream simulation, and variable cost-breakdown analysis.',
        fr: "Benchmarking concurrentiel régional, modélisation des personas cibles, simulation des flux de trésorerie et seuil de rentabilité.",
      },
      outcomes: {
        en: [
          'Calculated break-even utilization rate required for operational viability.',
          'Proposed tiered membership structures (Day Pass, Monthly Flexible Desk, Student Off-Peak Discount).',
          'Identified strategic location criteria adjacent to transit arteries and academic centers.',
        ],
        fr: [
          'Calcul du taux d’occupation critique nécessaire pour couvrir les charges fixes.',
          'Structure tarifaire segmentée (pass journalier, abonnement flexible, tarif réduit étudiant).',
          'Grille d’évaluation multicritère pour l’implantation géographique du lieu.',
        ],
      },
      skills: ['Entrepreneurial Feasibility', 'Competitive Benchmarking', 'Cost-Volume-Profit Analysis', 'Customer Segmentation'],
    },
    {
      id: 'interest-rate-risk',
      title: {
        en: 'Interest Rate Risk Management in Financial Institutions',
        fr: 'Gestion du Risque de Taux d’Intérêt dans les Institutions Financières',
      },
      subtitle: {
        en: 'Analytical Examination of Balance Sheet Sensitivity, ALM Strategies, and Derivative Hedging',
        fr: "Analyse de la sensibilité bilancielle, des méthodes ALM et des stratégies de couverture",
      },
      category: 'finance',
      categoryLabel: { en: 'Financial Risk Management', fr: 'Gestion des Risques Financiers' },
      image: '/src/assets/images/market_intelligence_workspace_1794322891167.jpg',
      date: '2026',
      status: 'completed',
      summary: {
        en: 'An advanced academic investigation into the mechanics of interest rate exposure, asset-liability mismatches, gap analysis, and hedging instruments.',
        fr: "Recherche académique approfondie sur l'exposition au risque de taux, les écarts de duration bilancielle et les instruments de couverture (swaps, ALM).",
      },
      context: {
        en: 'Developed within the International Risk Management course, focusing on how central bank monetary policy shifts impact commercial bank net interest margins and solvency.',
        fr: "Développé dans le cadre du module Gestion des Risques Internationaux, analysant l'impact des variations des taux directeurs sur la marge nette bancaire.",
      },
      problem: {
        en: 'Quantifying and mitigating maturity mismatches between long-term fixed assets (mortgages, term loans) and short-term variable liabilities (deposits).',
        fr: "Mesurer et couvrir le décalage de maturité entre actifs à taux fixe long terme et passifs à taux variable à court terme.",
      },
      solution: {
        en: 'Comparative assessment of Gap Analysis, Duration and Modified Duration matching, Value at Risk (VaR), and derivative hedging through interest rate swaps.',
        fr: "Évaluation comparative des méthodes de Gap bilanciel, de l'immunisation par la duration de Macaulay, de la VaR et des contrats d'échange de taux d'intérêt (swaps).",
      },
      methodology: {
        en: 'Balance sheet modeling, scenario stress-testing against +/- 200 bps yield curve shifts, and presentation of institutional ALM guidelines (Basel Committee norms).',
        fr: "Modélisation de bilans types, simulations de chocs de courbe des taux (+/- 200 pb) et synthèse des exigences prudentielles du Comité de Bâle.",
      },
      outcomes: {
        en: [
          'Detailed synthesis of Repricing Risk, Yield Curve Risk, Basis Risk, and Optionality Risk.',
          'Comparative rubric highlighting the operational tradeoffs of synthetic derivative hedges vs balance sheet restructuring.',
          'Delivered academic presentation to faculty and peers with commendation on analytical clarity.',
        ],
        fr: [
          'Synthèse détaillée des typologies de risque : risque de révision, de courbe, de base et d’optionnalité.',
          'Grille d’arbitrage entre couverture par dérivés synthétiques et rééquilibrage naturel du bilan.',
          'Présentation académique saluée pour sa clarté méthodologique.',
        ],
      },
      skills: ['Financial Risk Analysis', 'Asset-Liability Management (ALM)', 'Gap Analysis', 'Duration Matching', 'Financial Modeling'],
    },
    {
      id: 'copag-logistics',
      title: {
        en: 'Logistics Subcontracting & Supply Chain Organization: The COPAG Case',
        fr: 'Sous-Traitance Logistique et Organisation de la Supply Chain : Le Cas COPAG',
      },
      subtitle: {
        en: 'Case Study on Cold Chain Governance, 3PL Integration, and Agri-Food Export Networks',
        fr: "Étude de cas sur la chaîne du froid, l'intégration des 3PL et les réseaux d'exportation agroalimentaires",
      },
      category: 'logistics',
      categoryLabel: { en: 'Supply Chain & Logistics', fr: 'Supply Chain & Logistique' },
      image: '/src/assets/images/agri_logistics_hub_1794322892065.jpg',
      date: '2026',
      status: 'completed',
      summary: {
        en: 'An in-depth case study analyzing logistics coordination and third-party logistics (3PL) subcontracting in COPAG, Morocco’s premier agricultural cooperative.',
        fr: "Étude de cas sur la coordination des flux logistiques et le recours aux prestataires de transport sous contrat chez COPAG, première coopérative agricole du Maroc.",
      },
      context: {
        en: 'COPAG operates extensive dairy, citrus, and primeur production across the Souss-Massa valley, requiring cold chain continuity from local farms to international export hubs.',
        fr: "COPAG gère d'importantes filières laitières et d'agrumes dans le Souss-Massa, nécessitant le maintien rigoureux de la chaîne du froid jusqu'aux ports d'exportation.",
      },
      problem: {
        en: 'Evaluating how an agricultural giant balances captive fleet management against third-party logistics contractors during peak harvest export surges without compromising freshness.',
        fr: "Analyser l'arbitrage entre flotte propre et externalisation auprès de transporteurs 3PL lors des pics saisonniers d'exportation.",
      },
      solution: {
        en: 'Structured evaluation of logistics subcontracting contracts, quality KPIs (temperature tracking, on-time delivery), and warehouse management coordination.',
        fr: "Examen des cahiers des charges de sous-traitance, des indicateurs clés de performance (traçabilité thermique, respect des délais) et de la coordination des quais.",
      },
      methodology: {
        en: 'Desk research, review of academic literature on 3PL/4PL models, analysis of cooperative logistics practices, and field observation during university site visit.',
        fr: "Revue de littérature sur les modèles 3PL, analyse des données publiques de la coopérative et observations directes lors de la visite d'étude de terrain.",
      },
      outcomes: {
        en: [
          'Documented how selective subcontracting reduces fixed capital expenditure during cyclical crop off-seasons.',
          'Identified information-sharing protocols essential to prevent bullwhip distortions in perishable supply chains.',
          'Presented strategic recommendations for digital telemetry integration in transport partner fleets.',
        ],
        fr: [
          'Démonstration du rôle de la sous-traitance pour convertir des coûts fixes d’immobilisation en coûts variables.',
          'Identification des flux d’information indispensables pour éviter l’effet coup de fouet dans les denrées périssables.',
          'Recommandations sur l’adoption de la télématique embarquée pour le suivi des transporteurs partenaires.',
        ],
      },
      skills: ['Supply Chain Management', 'Third-Party Logistics (3PL)', 'Cold Chain Governance', 'Case Study Analysis', 'Agri-Business Operations'],
    },
    {
      id: 'international-risk-governance',
      title: {
        en: 'International Risk Management: Identifying and Mitigating Global Business Exposure',
        fr: 'Gestion des Risques Internationaux : Identification et Atténuation des Vulnérabilités',
      },
      subtitle: {
        en: 'Comprehensive Matrix of Country, Foreign Exchange, Transport, and Commercial Risks',
        fr: "Matrice globale des risques pays, de change, de transport et de contrepartie commerciale",
      },
      category: 'management',
      categoryLabel: { en: 'Global Strategy & Risk', fr: 'Stratégie Internationale & Risques' },
      image: '/src/assets/images/market_intelligence_workspace_1794322891167.jpg',
      date: '2026',
      status: 'completed',
      summary: {
        en: 'A strategic framework classifying multidimensional risks faced by import-export enterprises and evaluating traditional and modern mitigation instruments.',
        fr: "Cadre méthodologique classifiant les risques multidimensionnels encourus par les entreprises à l'international et évaluant les outils de couverture.",
      },
      context: {
        en: 'International trade across emerging and developed markets faces heightened geopolitical shocks, currency volatility, maritime bottlenecks, and payment defaults.',
        fr: "Les opérations de commerce international sont confrontées à des chocs géopolitiques, des variations de change, des tensions portuaires et des risques d'impayés.",
      },
      problem: {
        en: 'How can small-to-medium enterprises (SMEs) protect operating margins against unforeseen currency swings and maritime transit disruptions without prohibitive insurance premiums?',
        fr: "Comment les PME exportatrices peuvent-elles prémunir leurs marges contre les aléas de change et de transport sans supporter des primes d'assurance excessives ?",
      },
      solution: {
        en: 'A structured 4-pillar risk governance framework: Risk Identification, Probability-Impact Matrix, Instrument Selection (Incoterms 2020, Documentary Credit, Forward FX), and Monitoring.',
        fr: "Une méthodologie en 4 étapes : identification des risques, matrice probabilité-impact, sélection des instruments adaptés (Incoterms 2020, crédoc, change à terme) et suivi.",
      },
      methodology: {
        en: 'Comparative analysis of international trade contracts, Incoterms risk transfer points, and export credit insurance mechanisms (SMAEX benchmark).',
        fr: "Analyse comparative des contrats commerciaux internationaux, des points de transfert de risque selon les Incoterms 2020 et des polices d'assurance-crédit.",
      },
      outcomes: {
        en: [
          'Constructed a practical decision-tree for choosing between documentary collection and confirmed letters of credit.',
          'Mapped the transfer of cargo risk under CIF vs FOB terms.',
          'Synthesized best-practice foreign exchange hedging strategies for Moroccan dirham (MAD) trading pairs.',
        ],
        fr: [
          'Arbre de décision pratique pour arbitrer entre remise documentaire et crédit documentaire irrévocable confirmé.',
          'Cartographie précise des transferts de risques sous Incoterms CIF vs FOB.',
          'Synthèse des mécanismes de couverture de change adaptés aux opérateurs marocains.',
        ],
      },
      skills: ['International Trade Law', 'Incoterms 2020', 'FX Risk Hedging', 'Documentary Credit', 'Country Risk Analysis'],
    },
    {
      id: 'intercultural-management',
      title: {
        en: 'Intercultural Management: Academic Conference Synthesis Report',
        fr: 'Management Interculturel : Rapport de Synthèse des Conférences Universitaires',
      },
      subtitle: {
        en: 'Critical Synthesis of 5 Keynote Seminars on Cross-Cultural Leadership & Global Negotiation',
        fr: "Synthèse critique de 5 conférences universitaires sur le leadership multiculturel et la négociation",
      },
      category: 'management',
      categoryLabel: { en: 'Cross-Cultural Leadership', fr: 'Management Interculturel' },
      image: '/src/assets/images/zainab_portrait_1794322890022.jpg',
      date: '2026',
      status: 'completed',
      summary: {
        en: 'A structured analytical report documenting five academic conference sessions organized between May 25 and June 29, 2026, examining cultural diversity in multinational management.',
        fr: "Rapport académique structuré synthétisant le contenu de cinq conférences tenues entre le 25 mai et le 29 juin 2026 sur les enjeux du management interculturel.",
      },
      context: {
        en: 'Global business operations routinely fail not from financial flaws, but from cultural misinterpretations, conflicting negotiation styles, and unaligned organizational hierarchies.',
        fr: "Les partenariats internationaux échouent fréquemment en raison de malentendus culturels, de styles de négociation divergents et d'une mauvaise lecture des hiérarchies.",
      },
      problem: {
        en: 'Synthesizing diverse theoretical models (Hofstede, Trompenaars, Hall) into practical managerial guidelines for cross-border teams and negotiations.',
        fr: "Articuler les grands modèles théoriques de la culture (Hofstede, Trompenaars, Hall) en lignes directrices opérationnelles pour managers de projets internationaux.",
      },
      solution: {
        en: 'Created an thematic synthesis dissecting communication high/low-context nuances, time perception (monochronic vs polychronic), and conflict resolution across cultures.',
        fr: "Élaboration d'une synthèse thématique analysant les styles de communication (contexte fort/faible), la perception du temps et les approches de résolution de conflits.",
      },
      methodology: {
        en: 'Thematic content analysis of 5 keynote sessions, transcription review, and integration with academic literature on international human resource management.',
        fr: "Analyse thématique des interventions d'experts invités, synthèse documentaire et mise en perspective avec la recherche en GRH internationale.",
      },
      outcomes: {
        en: [
          'Formulated actionable intercultural communication protocols for international trade negotiation meetings.',
          'Highlighted the strategic role of emotional and cultural intelligence in cross-border partnerships.',
          'Delivered a comprehensive 24-page analytical conference report.',
        ],
        fr: [
          'Formulation de règles de conduite pour les négociations d’affaires en environnement multiculturel.',
          'Valorisation de l’intelligence culturelle comme facteur clé de réussite des alliances internationales.',
          'Production d’un rapport de synthèse universitaire exhaustif.',
        ],
      },
      skills: ['Intercultural Communication', 'Academic Synthesis', 'Negotiation Protocols', 'Qualitative Analysis', 'Knowledge Transfer'],
    },
    {
      id: 'pfe-research-in-progress',
      title: {
        en: 'Research in Progress: Improving Import-Export Tracking & Coordination in Moroccan Enterprises',
        fr: 'Recherche en Cours : Optimisation du Suivi et de la Coordination des Opérations d’Import-Export',
      },
      subtitle: {
        en: 'Master’s Capstone Project (PFE) Exploring Customs Digitalization, Port Logistics, and ERP Tracking',
        fr: "Projet de Fin d'Études (PFE) explorant la digitalisation douanière (PortNet), la logistique portuaire et le suivi ERP",
      },
      category: 'logistics',
      categoryLabel: { en: 'Master’s Thesis / PFE in Progress', fr: 'Projet de Fin d’Études (En cours)' },
      image: '/src/assets/images/agri_logistics_hub_1794322892065.jpg',
      date: '2026 – 2027',
      status: 'in_progress',
      summary: {
        en: 'My ongoing Master’s Capstone Project investigating how Moroccan industrial and trading enterprises can streamline customs clearance, transit visibility, and inter-departmental coordination.',
        fr: "Mon Projet de Fin d’Études de Master portant sur l’amélioration de la visibilité des flux de transit, la coordination douanière et l’optimisation des coûts logistiques d'import-export.",
      },
      context: {
        en: 'Morocco’s national trade single window (PortNet) and Tanger Med logistics ecosystem offer world-class infrastructure; however, internal enterprise coordination between finance, purchasing, and customs brokers often remains fragmented.',
        fr: "Le guichet unique PortNet et les plateformes portuaires marocaines offrent des infrastructures modernes ; cependant, la coordination interne entre achats, transitaires et douane présente encore des goulots d’étranglement.",
      },
      problem: {
        en: 'How to diagnose process bottlenecks in maritime freight tracking, customs demurrage penalties, and document verification to build an integrated tracking framework?',
        fr: "Comment diagnostiquer les retards de dédouanement et les frais de surestaries pour concevoir un protocole de suivi proactif ?",
      },
      solution: {
        en: 'Developing a field-tested tracking methodology combining digital milestones, automated exception alerts, and standardized collaborative workflows between freight forwarders and corporate logistics teams.',
        fr: "Développement d’une grille de suivi intégrant des jalons numériques, des alertes de déviation et des processus standardisés entre chargeurs et transitaires.",
      },
      methodology: {
        en: 'Empirical enterprise interviews, process flow mapping, analysis of transit time variability, and benchmarking against international best practices.',
        fr: "Entretiens qualitatifs en entreprise, cartographie des flux de processus (BPMN), analyse des temps d’attente et comparaison avec les meilleures pratiques internationales.",
      },
      outcomes: {
        en: [
          'Literature review covering trade facilitation, single window systems, and lean logistics.',
          'Field observation framework currently being deployed for upcoming enterprise internship.',
          'Expected final presentation in 2027 before university academic jury.',
        ],
        fr: [
          'Revue de littérature sur la facilitation des échanges et les guichets uniques portuaires.',
          'Grille d’observation de terrain prête pour le stage de fin d’études.',
          'Soutenance universitaire prévue devant jury académique.',
        ],
      },
      skills: ['Import-Export Operations', 'Customs Clearance', 'Process Optimization', 'Port Logistics', 'Field Research'],
    },
  ]) as Project[],

  certifications: [
    {
      id: 'ef-set-english',
      name: { en: 'EF SET English Certificate – B2 Upper Intermediate', fr: 'Certificat d’Anglais EF SET – B2 Upper Intermediate' },
      issuer: 'EF Standard English Test (EF SET)',
      date: '08 Nov 2026',
      score: '52/100 (CEFR B2)',
      verificationCode: 'rW8578',
      verifyUrl: 'https://cert.efset.org/rW8578',
      pdfPath: '/assets/aistudio/EF_SET_Certificate__1__2efaada4.pdf',
      status: 'verified',
      breakdown: [
        { skill: { en: 'Reading', fr: 'Compréhension écrite' }, score: 53, level: 'B2 Upper Intermediate' },
        { skill: { en: 'Listening', fr: 'Compréhension orale' }, score: 48, level: 'B1 Intermediate' },
        { skill: { en: 'Writing', fr: 'Production écrite' }, score: 51, level: 'B2 Upper Intermediate' },
        { skill: { en: 'Speaking', fr: 'Production orale' }, score: 55, level: 'B2 Upper Intermediate' },
      ],
      description: {
        en: 'Officially certified international English proficiency adhering to the Common European Framework of Reference for Languages (CEFR). Demonstrated strong fluency in commercial communication, technical academic reading, and professional interaction.',
        fr: "Évaluation officielle de compétence linguistique selon le cadre européen commun de référence (CECRL). Atteste d'une aisance confirmée en communication professionnelle et compréhension de documents économiques.",
      },
    },
    {
      id: 'saylor-ai-business',
      name: { en: 'AI for Business Applications', fr: 'IA pour les Applications d’Entreprise' },
      issuer: 'Saylor Academy (Saylor.org)',
      date: '11/2026',
      score: 'Online Course Completed',
      verifyUrl: 'https://saylor.org',
      pdfPath: '',
      status: 'verified',
      description: {
        en: 'Exploration of machine learning concepts, automated decision workflows, data-driven business modeling, and ethical enterprise adoption of AI.',
        fr: "Compréhension des fondements de l'intelligence artificielle appliquée aux processus d'affaires, aide à la décision et modélisation prédictive.",
      },
    },
    {
      id: 'saylor-globalization',
      name: { en: 'Historical & Globalization Influences on Management', fr: 'Influences Historiques et Mondiales sur le Management' },
      issuer: 'Saylor Academy (Saylor.org)',
      date: '11/2026',
      score: 'Online Course Completed',
      verifyUrl: 'https://saylor.org',
      pdfPath: '',
      status: 'verified',
      description: {
        en: 'Evolution of managerial philosophies, trade globalization, institutional economics, and multinational corporate structures.',
        fr: "Évolution des doctrines managériales, mondialisation économique, régulations internationales et stratégies des firmes multinationales.",
      },
    },
    {
      id: 'saylor-org-communication',
      name: { en: 'Organizational Communication (PRDV214)', fr: 'Communication Organisationnelle (PRDV214)' },
      issuer: 'Saylor Academy (Saylor.org)',
      date: '11/2026',
      score: 'Completed / In Assessment',
      verifyUrl: 'https://saylor.org',
      pdfPath: '',
      status: 'verified',
      description: {
        en: 'Internal communication channels, stakeholder messaging, crisis communication, and cross-departmental coordination in business organizations.',
        fr: "Canaux de communication interne, gestion des parties prenantes, communication de crise et coordination interdépartementale.",
      },
    },
    {
      id: 'saylor-intercultural',
      name: { en: 'Intercultural Communication (COMM311)', fr: 'Communication Interculturelle (COMM311)' },
      issuer: 'Saylor Academy (Saylor.org)',
      date: 'Completed Online Course',
      score: 'Certificate Earned',
      verifyUrl: 'https://saylor.org',
      pdfPath: '',
      status: 'verified',
      description: {
        en: 'Analyzing cultural dimension frameworks, non-verbal cues, intercultural negotiation techniques, and multinational team alignment.',
        fr: "Étude des dimensions culturelles, négociation internationale, détection des biais cognitifs et dynamiques d'équipes multiculturelles.",
      },
    },
  ],

  skillsData: {
    management: {
      categoryName: { en: 'Management & Business', fr: 'Management & Gestion' },
      items: [
        { name: { en: 'Business Management', fr: 'Management des Organisations' }, note: { en: 'Academic core & organizational analysis', fr: 'Formation académique & diagnostic' } },
        { name: { en: 'Administrative Operations', fr: 'Gestion Administrative' }, note: { en: 'Hands-on practice at WAFA & LARMOUS', fr: 'Pratique confirmée en stages' } },
        { name: { en: 'Event Planning & Coordination', fr: 'Coordination Événementielle' }, note: { en: 'Faculty Integration Days & Club seminars', fr: 'Journées d’intégration & séminaires' } },
        { name: { en: 'Customer Relations & Support', fr: 'Relation & Accueil Client' }, note: { en: 'Insurance policyholder assistance', fr: 'Accueil agence & conseil assurés' } },
        { name: { en: 'Document Archiving & Compliance', fr: 'Archivage & Suivi Dossiers' }, note: { en: 'CNSS, contracts, site delivery notes', fr: 'Dossiers CNSS, contrats & bons' } },
      ],
    },
    logistics: {
      categoryName: { en: 'Logistics & International Trade', fr: 'Logistique & Commerce International' },
      items: [
        { name: { en: 'Supply Chain Concepts', fr: 'Concepts Supply Chain' }, note: { en: 'Distribution, 3PL contracting, case studies', fr: 'Flux de distribution & modèles 3PL' } },
        { name: { en: 'Logistics Operations Fundamentals', fr: 'Fondamentaux Logistiques' }, note: { en: 'Warehousing, inventory control support', fr: 'Entreposage & assistance inventaire' } },
        { name: { en: 'International Trade Mechanics', fr: 'Techniques du Commerce International' }, note: { en: 'Import-export, Incoterms 2020, PortNet', fr: 'Incoterms 2020, crédits doc & PortNet' } },
        { name: { en: 'International Risk Management', fr: 'Gestion des Risques Internationaux' }, note: { en: 'Country risk, FX exposure, ALM methods', fr: 'Risques de change, pays et de taux' } },
        { name: { en: 'Market Research & Business Watch', fr: 'Veille Commerciale & Concurrentielle' }, note: { en: 'Survey design & competitive intelligence', fr: 'Enquêtes terrain & analyse marchés' } },
      ],
    },
    digital: {
      categoryName: { en: 'Digital Tools & Technical Proficiency', fr: 'Outils Numériques & Bureautique' },
      items: [
        { name: { en: 'Microsoft Office (Excel, Word, PowerPoint)', fr: 'Microsoft Office (Excel, Word, PowerPoint)' }, note: { en: 'Financial modeling, presentations, reporting', fr: 'Tableaux de bord, rapports & synthèses' } },
        { name: { en: 'Google Workspace', fr: 'Google Workspace' }, note: { en: 'Collaborative docs, sheets, drive sharing', fr: 'Outils collaboratifs & gestion cloud' } },
        { name: { en: 'AI Tools & Prompt Research', fr: 'Outils IA & Recherche Assistée' }, note: { en: 'Synthesis, market exploration, workflow ideas', fr: 'Assistance à l’analyse & veille' } },
        { name: { en: 'Canva & Visual Design', fr: 'Canva & Supports Visuels' }, note: { en: 'Academic presentations, posters, branding', fr: 'Création de supports & présentations' } },
        { name: { en: 'CapCut Video Editing', fr: 'Montage Vidéo CapCut' }, note: { en: 'Student event recaps & social media clips', fr: 'Couverture vidéo d’événements' } },
      ],
    },
    soft: {
      categoryName: { en: 'Soft Skills & Leadership', fr: 'Compétences Relationnelles & Savoir-Être' },
      items: [
        { name: { en: 'Teamwork & Collaboration', fr: 'Travail en Équipe' }, note: { en: 'Cross-functional academic project teams', fr: 'Projets universitaires & vie étudiante' } },
        { name: { en: 'Clear Communication', fr: 'Communication Efficace' }, note: { en: 'Faculty presentations, client reception', fr: 'Aisance orale & synthèse écrite' } },
        { name: { en: 'Leadership & Initiative', fr: 'Sens de l’Initiative' }, note: { en: 'Vice-Presidency of MCI Master’s Club', fr: 'Vice-présidence & force de proposition' } },
        { name: { en: 'Adaptability & Flexibility', fr: 'Adaptabilité & Rigueur' }, note: { en: 'Multisector internship transitions', fr: 'Évolution rapide en milieu pro' } },
        { name: { en: 'Intellectual Curiosity', fr: 'Curiosité Intellectuelle' }, note: { en: 'Ongoing certifications in AI & strategy', fr: 'Veille continue & soif d’apprendre' } },
      ],
    },
    languages: [
      { name: { en: 'Arabic', fr: 'Arabe' }, level: { en: 'Native / Mother Tongue', fr: 'Langue Maternelle' }, tag: 'C2' },
      { name: { en: 'French', fr: 'Français' }, level: { en: 'Fluent / Bilingual Proficiency', fr: 'Courant / Bilingue' }, tag: 'C1' },
      { name: { en: 'English', fr: 'Anglais' }, level: { en: 'Upper-Intermediate (EF SET 52/100 Certified)', fr: 'Intermédiaire Supérieur (Certifié EF SET B2)' }, tag: 'B2' },
    ],
  },

  articles: [
    {
      id: 'ai-in-business-management',
      title: {
        en: 'How AI Is Transforming Business Management: From Theoretical Curiosity to Everyday Operational Tool',
        fr: "Comment l’IA Transforme la Gestion des Entreprises : De la Curiosité Théorique à l’Outil Opérationnel",
      },
      readTime: '4 min read',
      category: 'Digital Innovation',
      date: 'November 2026',
      summary: {
        en: 'Reflecting on the pragmatic transition from buzzwords to decision-support workflows in small and medium enterprises.',
        fr: "Analyse du passage des effets de mode à l'intégration pragmatique d'outils d'aide à la décision dans les PME.",
      },
      content: {
        en: [
          'Artificial Intelligence often appears in popular discourse as either an existential threat or a utopian cure-all. However, for emerging management students and corporate practitioners, the real revolution is far more practical: it is about reducing friction in everyday business workflows.',
          'In my recent study of Saylor Academy’s AI for Business course and during the conceptualization of our Express Package locker system, I observed how small, targeted AI utilities provide immense leverage. Whether drafting structured supplier inquiries, synthesizing complex multi-page import regulations, or simulating dynamic compartment allocations, AI functions as an intellectual collaborator.',
          'Crucially, successful implementation requires managerial discernment rather than blind faith. A model can calculate a statistical route, but human managers evaluate vendor reliability, regulatory nuances, and ethical customer touchpoints. The most resilient future leaders will not be programmers alone, but managers who know how to ask the right questions and critically audit automated outputs.',
        ],
        fr: [
          "L'intelligence artificielle est souvent présentée sous un jour sensationnaliste. Pourtant, pour les étudiants en gestion et les praticiens d'entreprise, la véritable transformation est éminemment pragmatique : elle consiste à éliminer les frictions dans les opérations quotidiennes.",
          "À travers ma formation en IA appliquée et lors de la conception du projet de casiers connectés Express Package, j'ai constaté l'apport décisif des outils numériques ciblés. Qu'il s'agisse de synthétiser des réglementations douanières denses, de structurer des requêtes ou d'optimiser une allocation d'espace, l'IA agit comme un catalyseur d'efficience.",
          "Toutefois, une intégration réussie exige du discernement managérial. Un algorithme calcule des probabilités, mais seul le manager apprécie la fiabilité d'un fournisseur ou la sensibilité d'un client. Les gestionnaires de demain seront ceux qui sauront formuler les bons diagnostics et auditer avec rigueur les recommandations technologiques.",
        ],
      },
    },
    {
      id: 'supply-chain-coordination-copag',
      title: {
        en: 'Supply Chain Coordination in Moroccan Agri-Food: Lessons from the COPAG Logistics Model',
        fr: "Coordination Logistique dans l’Agroalimentaire Marocain : Enseignements du Modèle COPAG",
      },
      readTime: '5 min read',
      category: 'Supply Chain & Logistics',
      date: 'October 2026',
      summary: {
        en: 'Analyzing how agricultural cooperatives balance seasonal harvest peaks with strict cold chain requirements and logistics subcontracting.',
        fr: "Étude des équilibres délicats entre pics saisonniers, maintien strict de la chaîne du froid et sous-traitance logistique.",
      },
      content: {
        en: [
          'In the Souss-Massa region of Morocco, agriculture is not merely an economic sector; it is a high-precision logistical orchestrator. Visiting and studying COPAG provided a masterclass in how supply chains must reconcile biological perishability with rigid international shipping windows.',
          'One of the most persistent operational tensions in agri-business is fleet utilization. Maintaining a captive refrigerated fleet sized for peak citrus harvesting creates massive overhead during quiet off-season months. COPAG resolves this through calibrated third-party logistics (3PL) subcontracting, retaining a core fleet for sensitive domestic dairy operations while contracting verified carriers for export surges.',
          'The linchpin of this architecture is information synchrony. Real-time temperature datalogging, pre-cleared port documentation, and strict service level agreements (SLAs) prevent delays at Tanger Med or Agadir port. Logistics excellence in Morocco is fundamentally about collaborative governance between cooperative members and specialized transport providers.',
        ],
        fr: [
          "Dans la vallée du Souss-Massa, l'agroalimentaire est un secteur où l'excellence logistique conditionne la survie des filières. L'étude du modèle COPAG démontre comment concilier la périssabilité des produits frais avec les exigences rigoureuses du fret international.",
          "L'un des défis majeurs réside dans la gestion des capacités de transport. Maintenir une flotte frigorifique propre dimensionnée pour le pic des agrumes engendre des coûts d'immobilisation prohibitifs hors saison. COPAG résout cette équation par un recours maîtrisé à la sous-traitance 3PL pour les pointes d'export, tout en conservant une flotte dédiée pour le lait.",
          "La clé de voûte de cette organisation est la synchronisation de l'information : traçabilité thermique continue, anticipation des formalités d'embarquement et relations de confiance avec les transporteurs partenaires.",
        ],
      },
    },
    {
      id: 'navigating-international-risk',
      title: {
        en: 'Navigating Volatility: A Strategic Approach to Financial and Commercial Risks in Emerging Markets',
        fr: "Naviguer dans la Volatilité : Une Approche Stratégique des Risques Financiers et Commerciaux",
      },
      readTime: '4 min read',
      category: 'International Business',
      date: 'October 2026',
      summary: {
        en: 'Why emerging market exporters must adopt structured hedging and contractual clarity against currency and transport shocks.',
        fr: "Pourquoi les exportateurs des marchés émergents doivent structurer leur couverture face aux chocs de change et de transport.",
      },
      content: {
        en: [
          'Global commerce in the post-pandemic era has entered a persistent state of volatility. Between maritime rerouting around the Cape of Good Hope, central bank interest rate divergences, and exchange rate fluctuations, operating margins can vanish before an export invoice is settled.',
          'In my research on Interest Rate Risk and International Risk Management, I noticed that small and mid-sized exporters frequently treat risk management as a reactive chore rather than an active strategic pillar. Relying on open account terms without export credit insurance or neglecting forward foreign exchange contracts exposes healthy operating businesses to insolvency.',
          'By proactively deploying Incoterms 2020 rules that clearly delimit risk transfer (such as switching from Ex-Works to FCA or CIP), and utilizing instruments like confirmed documentary letters of credit, Moroccan firms can defend their balance sheets while expanding into new African and European markets.',
        ],
        fr: [
          "Le commerce mondial traverse une période d'incertitudes durables : tensions sur les routes maritimes, divergences des politiques monétaires et fluctuations des devises. Sans anticipation, la rentabilité d'un contrat d'export peut s'évaporer avant son encaissement.",
          "Dans mes travaux sur les risques financiers et internationaux, j'ai constaté que les PME négligent souvent la couverture de change ou acceptent des paiements à découvert non garantis. Or, l'utilisation rigoureuse des Incoterms 2020 (en privilégiant FCA ou CIP plutôt qu'Ex-Works) et le recours au crédit documentaire confirmé constituent des boucliers indispensables.",
          "La maîtrise des risques n'est pas un frein aux affaires ; elle est la condition première d'un développement commercial pérenne à l'international.",
        ],
      },
    },
    {
      id: 'last-mile-lockers-future',
      title: {
        en: 'The Last-Mile Conundrum: Can Automated Lockers Reshape Moroccan Urban Delivery?',
        fr: "Le Casse-Tête du Dernier Kilomètre : Les Consignes Connectées Peuvent-elles Révolutionner la Livraison au Maroc ?",
      },
      readTime: '4 min read',
      category: 'Logistics Innovation',
      date: 'September 2026',
      summary: {
        en: 'Exploring how automated parcel pickup kiosks can eliminate failed deliveries and decongest urban commerce.',
        fr: "Analyse du potentiel des consignes automatisées pour réduire les échecs de livraison et fluidifier la logistique urbaine.",
      },
      content: {
        en: [
          'The last mile of package delivery is universally acknowledged as the most expensive, carbon-intensive, and failure-prone segment of the supply chain, accounting for up to 53% of total shipping costs. In Moroccan cities, where cash-on-delivery remains prevalent and daytime residential occupancy is low, couriers often make two or three attempts to deliver a single item.',
          'Our Express Package academic project investigated the viability of introducing automated, connected parcel lockers into regional transport hubs, campuses, and residential districts. By consolidating 20 deliveries into a single physical stop, courier route efficiency surges exponentially while emissions drop.',
          'For consumers, the shift from waiting hours for an uncertain courier call to picking up a parcel in 15 seconds with a secure QR token is transformative. While capital infrastructure and payment habit changes remain hurdles, the smart locker model represents the logical future of sustainable urban logistics.',
        ],
        fr: [
          "Le dernier kilomètre représente jusqu'à 53% du coût total d'expédition d'un colis. Au Maroc, où le paiement à la livraison demeure courant et la présence à domicile incertaine en journée, les livreurs effectuent souvent plusieurs passages infructueux.",
          "Notre projet universitaire Express Package a exploré l'introduction de consignes intelligentes dans les nœuds de transit et campus. Regrouper des dizaines de livraisons en un point unique permet de diviser par dix le temps d'arrêt des transporteurs et d'abaisser drastiquement l'empreinte carbone.",
          "Pour l'usager, le retrait autonome en quelques secondes via un code QR offre une flexibilité incomparable. Ce modèle constitue une réponse d'avenir aux défis de l'urbanisation et du e-commerce.",
        ],
      },
    },
  ],

  // 29-item portfolio audit / dossier from brief
  dossierChecklist: [
    { category: 'Identity & Presentation', items: [
      { text: 'Recent professional studio portrait', status: 'ready', note: 'Editorial LinkedIn blazer portrait integrated' },
      { text: 'Confirmed location & base (Taroudant & Agadir, Morocco)', status: 'ready', note: 'Ibn Zohr University Faculty of Taroudant' },
      { text: 'Bilingual support (English & French togglable)', status: 'ready', note: 'Complete bilingual interface' },
      { text: 'Professional positioning & value proposition', status: 'ready', note: 'Strategic synthesis formulated' },
    ]},
    { category: 'Academic Journey', items: [
      { text: 'Master’s in International Management & Trade degree details', status: 'ready', note: '01/2026 – Present, Taroudant' },
      { text: 'Bachelor’s Degree in Economics & Management details', status: 'ready', note: '09/2022 – 06/2025, FSJES Agadir' },
      { text: 'DEUG diploma verification', status: 'ready', note: 'Conferred 2024, Ibn Zohr' },
      { text: 'Baccalaureate in Economic Sciences details', status: 'ready', note: '09/2021 – 06/2022, Dakhla High School' },
    ]},
    { category: 'Professional Experience', items: [
      { text: 'WAFA ASSURANCE internship documentation', status: 'ready', note: '07/2024 – 08/2024, Insurance contracts & CNSS' },
      { text: 'LARMOUS Construction internship documentation', status: 'ready', note: '06/2024 – 06/2024, Site logistics & archives' },
      { text: 'Separation of administrative duties vs theoretical scope', status: 'ready', note: 'Grounded representation' },
    ]},
    { category: 'Projects & Academic Research', items: [
      { text: 'Express Package Smart Parcel Locker study', status: 'ready', note: 'Conceptual smart logistics model' },
      { text: 'Netflix Commercial Intelligence & Survey (22 students)', status: 'ready', note: 'Quantitative findings & methodology' },
      { text: 'Coworking Café Demand/Supply Feasibility', status: 'ready', note: 'Entrepreneurship & cost-volume-profit' },
      { text: 'Interest Rate Risk Management presentation', status: 'ready', note: 'ALM, Duration & Gap Analysis' },
      { text: 'COPAG Logistics Subcontracting case study', status: 'ready', note: '3PL coordination & cold chain' },
      { text: 'International Risk Management framework', status: 'ready', note: 'Incoterms 2020 & FX hedging' },
      { text: 'Intercultural Management conference synthesis', status: 'ready', note: '5 sessions analyzed' },
      { text: 'Master’s Thesis / PFE in Progress delineation', status: 'ready', note: 'Import-Export tracking & PortNet' },
    ]},
    { category: 'Certifications & Credentials', items: [
      { text: 'EF SET English Certificate verification (52/100, B2)', status: 'ready', note: 'Code rW8578, cert.efset.org/rW8578' },
      { text: 'EF SET original PDF certificate preview', status: 'ready', note: 'Embedded PDF viewer included' },
      { text: 'Saylor Academy AI for Business Applications', status: 'ready', note: '11/2026 completion' },
      { text: 'Saylor Academy Globalization & Management', status: 'ready', note: '11/2026 completion' },
      { text: 'Saylor Academy Organizational Communication (PRDV214)', status: 'ready', note: '11/2026 completion' },
      { text: 'Saylor Academy Intercultural Communication (COMM311)', status: 'ready', note: 'Completed' },
    ]},
    { category: 'Leadership & Engagement', items: [
      { text: 'Vice Presidency of MCI Master’s Club documented', status: 'ready', note: '02/2026 – Present' },
      { text: 'Integration Day co-organization records', status: 'ready', note: 'Faculty & Master’s days' },
      { text: 'COPAG educational study visit participation', status: 'ready', note: 'Field learning documented' },
      { text: 'Original Erasmus CV PDF preview & download', status: 'ready', note: 'Embedded PDF viewer included' },
    ]},
  ],
};
