// =====================================================================
//  CONFIGURACIÓN DE LA WEB — todo el contenido se edita aquí.
//  Deja un campo vacío ("" o []) y esa parte de la web se oculta sola.
// =====================================================================

window.SITE = {
  // --- Identidad -------------------------------------------------------
  name: "Xavier Bachot Iglesias",
  tagline: "Marine Ecologist · Underwater Videographer",
  location: "Canary Islands, Spain",
  heroPhoto: "",            // ej. "images/hero.jpg" (foto submarina horizontal)
  heroYouTubeId: "",        // ej. "dQw4w9WgXcQ" → vídeo de fondo en la portada (sin sonido, en bucle)
  portrait: "",             // ej. "images/me.jpg" (foto tuya, cuadrada)

  about: [
    "I'm a marine ecologist in the BIOCON group at the ECOAQUA Institute (University of Las Palmas de Gran Canaria), where I work as project technician on Dive Reporter, a monitoring network built with dive centres across Macaronesia. I study coastal ecosystems: how they are structured, how they change, and what happens to them under pressures such as invasive species.",
    "I trained in Marine Sciences at the ULPGC, spent a year in Brazil working on reef ecology, and completed an MSc in Marine Ecology at the University of the Balearic Islands (UIB) while holding a research fellowship at IMEDEA (CSIC), and then stayed on as a project technician at IMEDEA.",
    "Underwater I'm a certified SSI Divemaster, and I rarely go in without a camera. Through Mar Educado I share what I find below the surface."
  ],

  // Datos rápidos bajo la presentación
  facts: [
    { label: "Based in", value: "Canary Islands, Spain" },
    { label: "Diving", value: "SSI Divemaster" },
    { label: "Languages", value: "Spanish · Catalan · English · Portuguese" }
  ],

  // Bitácora: tu trayectoria como un registro de inmersiones (la primera = #01 = la actual).
  // photo: foto de esa etapa. details: texto ampliado que se abre en "Read more". links: enlaces externos.
  logbook: [
    {
      years: "Mar 2026 — now", place: "Gran Canaria, Canary Islands", coords: "28.07° N · 15.45° W",
      title: "Project technician, ECOAQUA",
      org: "Dive Reporter-MAC · BIOCON group, ECOAQUA Institute, University of Las Palmas de Gran Canaria",
      photo: "images/log-dive-reporter.jpg",
      // Fotos de cabecera en "Read more" (pasan solas cada 5 s; con flechas)
      panelPhotos: [
        { src: "images/log-dr-workshop-madeira.jpg", caption: "First Dive Reporter-MAC workshop, Madeira" },
        { src: "images/log-dive-reporter-centre.jpg", caption: "Setting up Dive Reporter with a partner dive centre" },
        { src: "images/log-dr-centre-2.jpg", caption: "Training dive-centre staff to log species with the app" },
        { src: "images/log-dr-centre-3.jpg", caption: "Meeting with a partner dive centre" },
        { src: "images/log-dr-centre-4.jpg", caption: "Visiting a partner dive centre" }
      ],
      // Ficha rápida (mismas 4 casillas en todas): Institute · Supervisor · Fieldwork · Funding
      stats: [
        { label: "Institute", value: "ECOAQUA (ULPGC)" },
        { label: "Supervisor", value: "Dr. Rodrigo Riera" },
        { label: "Fieldwork", value: "Dive centres" },
        { label: "Funding", value: "Interreg MAC 2021–2027" }
      ],
      details: [
        "Dive Reporter turns recreational dives into data. Dive centres log a short list of bioindicator species on every dive, and over time those records become a low-cost, long-term picture of how coastal ecosystems are changing. My job is to help that network grow across Macaronesia.",
        { heading: "With the dive centres", items: [
          "Rolling out the platform in new centres and fitting it into their daily routine.",
          "Training instructors and guides to identify bioindicator species and log them underwater.",
          "Following up with around 20 centres, keeping them active and solving technical questions."
        ]},
        { heading: "With the data", items: [
          "Quality control (QA/QC) of the records and regular reviews with the science teams.",
          "Adapting the regional species lists with local scientific partners.",
          "Reviewing the platform's automatic reports and tracking trends that may signal ecological change."
        ]},
        { heading: "Beyond the platform", items: [
          "Statistical analyses for ongoing studies in the BIOCON group.",
          "Joining field sampling campaigns at sea."
        ]}
      ],
      links: [
        { label: "Dive Reporter", url: "https://www.dive-reporter.org/" },
        { label: "BIOCON group", url: "https://www.ecoaqua.eu/es/biocon.html" },
        { label: "ECOAQUA", url: "https://www.ecoaqua.eu/es/" }
      ]
    },
    {
      years: "Aug 2025 — 2026", place: "Mallorca, Balearic Islands", coords: "39.64° N · 2.65° E",
      title: "Project technician, IMEDEA",
      org: "Marine ecology projects technician · Global Change Research group, IMEDEA (CSIC-UIB)",
      photo: "images/logo-imedea.png", photoType: "logo",
      panelPhotos: [
        { src: "images/log-imedea-snorkel.jpg", caption: "Snorkel fieldwork in Formentera" },
        { src: "images/log-imedea-boat.jpg", caption: "Heading back after a day of fieldwork" }
      ],
      stats: [
        { label: "Institute", value: "IMEDEA (CSIC-UIB)" },
        { label: "Supervisor", value: "Dr. Andrea Antón" },
        { label: "Fieldwork", value: "Snorkelling and diving" },
        { label: "Funding", value: "Spanish Research Agency (AEI)" }
      ],
      details: [
        "A research technician post in Dr. Andrea Antón's lab at the Mediterranean Institute for Advanced Studies, working on marine ecology projects alongside master's and PhD students. Most of the fieldwork took place in shallow waters around the Balearic Islands.",
        { heading: "In the field", items: [
          "Snorkel surveys and occasional dives to collect ecological data.",
          "Planning and running sampling days with the rest of the team."
        ]},
        { heading: "At the desk", items: [
          "Organising and curating field datasets.",
          "Statistical analyses and scientific figures.",
          "Contributing to the writing of scientific texts."
        ]}
      ],
      links: [
        { label: "IMEDEA", url: "https://imedea.uib-csic.es/" },
        { label: "Global Change Research", url: "https://imedea.uib-csic.es/ca/investigacio/investigacion-del-canvi-global/" }
      ]
    },
    {
      years: "Nov 2024 — Jul 2025", place: "Mallorca, Balearic Islands", coords: "39.67° N · 2.58° E",
      title: "JAE Intro research fellow, IMEDEA",
      org: "CSIC JAE Intro ICU fellowship · Physical Oceanography and Climate group, IMEDEA (CSIC-UIB)",
      photo: "images/logo-jae-intro.png", photoType: "logo",
      panelPhotos: [
        { src: "images/log-jae-seminar.jpg", caption: "Presenting my results at an IMEDEA research seminar" }
      ],
      stats: [
        { label: "Institute", value: "IMEDEA (CSIC-UIB)" },
        { label: "Supervisor", value: "Dr. Ismael Hernández and Dr. Alejandro Orfila" },
        { label: "Fieldwork", value: "Ocean data and numerical modelling" },
        { label: "Funding", value: "CSIC · JAE Intro ICU 2024" }
      ],
      details: [
        "A CSIC research-introduction fellowship in the Physical Oceanography and Climate group, within the training plan “Preferential concentration of microplastics in the water column and its impact on marine ecosystems”.",
        "Most models treat microplastics as passive, weightless particles. We simulated them with real sizes and densities to see where in the Mediterranean they actually accumulate, which led to a classification of the basin into accumulation regions and the identification of pollution hotspots.",
        { heading: "What I did", items: [
          "Processed in-situ and satellite data on plastic concentrations and ocean variables (currents, temperature, salinity, chlorophyll).",
          "Simulated three-dimensional trajectories of microplastics of different sizes and densities.",
          "Analysed the results with statistical and machine-learning methods.",
          "Presented the work at an IMEDEA research seminar; it became my master's thesis, “The Mediterranean Sea as a trap: flow structures and accumulation of floating debris”."
        ]}
      ],
      links: [
        { label: "JAE Intro (CSIC)", url: "https://www.csic.es/es/formacion-y-empleo/formacion-de-personal-investigador/grado/becas-de-introduccion" },
        { label: "Physical Oceanography and Climate group", url: "https://imedea.uib-csic.es/investigacion/tecnologias-marinas-oceanografia-operacional-y-costera/" },
        { label: "IMEDEA", url: "https://imedea.uib-csic.es/" }
      ]
    },
    {
      years: "2024 — 2025", place: "Mallorca, Balearic Islands", coords: "39.64° N · 2.65° E",
      title: "MSc in Marine Ecology, UIB",
      org: "University of the Balearic Islands · Master's thesis at IMEDEA (CSIC-UIB)",
      photo: "",
      details: [
        "Master's degree in Marine Ecology at the University of the Balearic Islands.",
        "My master's thesis, “The Mediterranean Sea as a trap: flow structures and accumulation of floating debris”, grew out of my JAE Intro fellowship at IMEDEA (see #03)."
      ],
      links: [
        { label: "MSc in Marine Ecology (UIB)", url: "https://www.uib.eu/" },
        { label: "IMEDEA (CSIC-UIB)", url: "https://imedea.uib-csic.es/" }
      ]
    },
    {
      years: "2022 — 2023", place: "Florianópolis, Brazil", coords: "27.60° S · 48.52° W",
      title: "Exchange year, UFSC",
      org: "Federal University of Santa Catarina · Research volunteer at the Reef Environments Ecology Lab (LABAR)",
      photo: "",
      details: [
        "An academic year at the Federal University of Santa Catarina, in southern Brazil.",
        "Alongside my courses I volunteered as a researcher at the Reef Environments Ecology Lab (LABAR)."
      ],
      links: [
        { label: "UFSC", url: "https://ufsc.br/" }
      ]
    },
    {
      years: "2020 — 2024", place: "Gran Canaria, Canary Islands", coords: "28.07° N · 15.45° W",
      title: "BSc in Marine Sciences, ULPGC",
      org: "University of Las Palmas de Gran Canaria · Research internship at ECOAQUA",
      photo: "",
      details: [
        "Degree in Marine Sciences at the University of Las Palmas de Gran Canaria.",
        "In my final year I did a research internship at the ECOAQUA Institute, the start of the work that led to my first paper on the invasive alga *Rugulopteryx okamurae*."
      ],
      links: [
        { label: "Faculty of Marine Sciences (ULPGC)", url: "https://fcm.ulpgc.es/" },
        { label: "Paper (Journal of Sea Research)", url: "https://doi.org/10.1016/j.seares.2025.102568" }
      ]
    },
    {
      years: "2021", place: "Gran Canaria, Canary Islands", coords: "28.10° N · 15.42° W",
      title: "SSI Divemaster, Karapat Dive",
      org: "Divemaster internship · Gran Canaria",
      photo: "",
      details: [
        "Professional diving certification with SSI, earned through a divemaster internship at Karapat Dive in Gran Canaria: guiding dives, assisting instructors and dive planning."
      ],
      links: []
    }
  ],
  cvFile: "",               // ej. "files/CV.pdf"

  // --- Investigación ---------------------------------------------------
  researchInterests: ["Marine ecology", "Macroalgae", "Coastal ecosystems", "Underwater imaging"],

  // Si pones tu ORCID, las publicaciones se cargan solas desde ORCID.
  orcid: "0009-0006-6342-0274",
  // Publicaciones a mano (se usan si no hay ORCID o como complemento):
  publications: [
    // { year: 2025, title: "Title of the paper", authors: "Surname A, Surname B", journal: "Journal", doi: "10.xxxx/xxxxx" },
  ],

  // --- Science communication · Mar Educado -----------------------------
  marEducado: {
    name: "Mar Educado",
    handle: "@mar_educado",
    logo: "",               // ej. "images/mar-educado-logo.png"
    website: "",            // web de Mar Educado
    text: [
      "Mar Educado is my science communication project: short underwater films and posts that bring marine ecology closer to everyone. (Write 2–3 sentences: what it is, what you talk about and who it is for.)"
    ]
  },

  // --- Vídeo -----------------------------------------------------------
  // ID del canal de YouTube (empieza por "UC..."). Los vídeos nuevos aparecen solos.
  youtubeChannelId: "UCiKMjbEpGl3E2lJT2F6StUg",
  youtubeHandle: "@mar_educado",
  // Vídeos destacados (opcional): IDs de YouTube que quieras mostrar grandes.
  featuredVideos: [
    // { id: "xxxxxxxxxxx", title: "Title", note: "Finalist — Festival X 2024" },
  ],

  // --- Concursos y reconocimientos --------------------------------------
  // Tarjetas tipo blog. Campos: date (AAAA-MM-DD), tag, title, org, text,
  // (*texto* = cursiva), image (foto de portada), video (ID de YouTube), links [{label, url}],
  // gallery [{src, caption}] (fotos en el desplegable "View photo")
  awards: [
    {
      date: "2025-09-15",
      tag: "Photography",
      title: "Participant — MARE Balear 2025, 6th edition",
      org: "MARE · Audiovisual Competition for the Conservation of the Balearic Sea · Marilles Foundation",
      text: "I entered a portfolio of 20 underwater photographs in the 6th edition of MARE Balear, a competition that uses images to promote the conservation of the Balearic Sea. Five of them made it through the first round of judging.",
      image: "images/mare-balear-2025.jpg",
      gallery: [
        { src: "images/mare-2025-pelagia-noctiluca.jpg", caption: "*Pelagia noctiluca*" },
        { src: "images/mare-2025-octopus-vulgaris.jpg", caption: "*Octopus vulgaris*" },
        { src: "images/mare-2025-octopus-vulgaris-2.jpg", caption: "*Octopus vulgaris*" },
        { src: "images/mare-2025-cotylorhiza-tuberculata.jpg", caption: "*Cotylorhiza tuberculata*" },
        { src: "images/mare-2025-rhizostoma-pulmo.jpg", caption: "*Rhizostoma pulmo*" }
      ],
      links: [
        { label: "MARE Balear", url: "https://marebalear.org/es/" },
        { label: "Marilles Foundation", url: "https://marilles.org/en/project/mare" }
      ]
    },
    {
      date: "2024-06-01",
      tag: "Photography",
      title: "Winner — Marine Life category, 6th Photography Contest",
      org: "Student Delegation, Faculty of Marine Sciences · ULPGC",
      text: "My photograph “Camuflaje a plena luz”, a common cuttlefish (*Sepia officinalis*) gliding over a sunlit rocky reef, won the Marine Life category in the 6th edition of the Faculty of Marine Sciences photography contest.",
      image: "images/concurso-fotografia-2024.jpg",
      links: [
        { label: "Contest call (ULPGC)", url: "https://biblioteca.ulpgc.es/blogs/bass/2024/05/la-delegacion-de-estudiantes-de-la-facultad-de-ciencias-del-mar-de-la-ulpgc" }
      ],
      gallery: [
        { src: "images/sepia-officinalis.jpg", caption: "Camuflaje a plena luz" },
        { src: "images/vi-concurso-ganadores-full.jpg", caption: "Winners of the 6th Photography Contest" }
      ]
    },
    {
      date: "2023-12-04",
      tag: "Entrepreneurship",
      title: "Finalist — Impulsa Talento Awards, Blue Economy, with the project “Kalima”",
      org: "ULPGC Vice-Rectorate for Students, Alumni and Employability · DISA Foundation · Banco Santander · Canary Islands Maritime Cluster",
      text: "Kalima was recognised as a finalist in the Blue Economy category of the 2023 Impulsa Talento Awards, which support entrepreneurial ideas from the university community aligned with the Sustainable Development Goals.",
      image: "images/impulsa-talento-2023.jpg",
      gallery: [
        { src: "images/impulsa-talento-finalistas.jpg", caption: "Finalists of the 2023 Impulsa Talento Awards" }
      ],
      video: "umeWxe1g6Hg",
      links: [
        { label: "ULPGC news", url: "https://www10.ulpgc.es/noticia/2023/12/04/ulpgc-premia-seis-iniciativas-emprendedoras-universitarios-relacionadas-ods" },
        { label: "Project video", url: "https://www.youtube.com/watch?v=umeWxe1g6Hg" }
      ]
    },
    {
      date: "2023-06-14",
      tag: "Photography",
      title: "Winner — Marine Life category, 5th Photography Contest",
      org: "Student Delegation, Faculty of Marine Sciences · ULPGC",
      text: "My photograph “El misterio de Las Canteras”, a white-spotted octopus (*Octopus macropus*) peeking out from a dense meadow of green algae at Las Canteras beach (Gran Canaria), won the Marine Life category in the 5th edition of the Faculty of Marine Sciences photography contest.",
      image: "images/concurso-fotografia-2023.jpg",
      gallery: [
        { src: "images/misterio-de-las-canteras.jpg", caption: "El misterio de Las Canteras" }
      ],
      links: [
        { label: "Contest call (ULPGC)", url: "https://www.ulpgc.es/agenda/2023/05/10/v-concurso-fotografia" }
      ]
    }
  ],

  // --- Instagram -------------------------------------------------------
  instagramHandle: "mar_educado",
  // Widget de Behold (behold.so): pega aquí el "Feed ID" para mostrar los posts automáticamente
  beholdFeedId: "",

  // --- Contacto --------------------------------------------------------
  email: "",                // el email que quieras que se vea en la web
  // Aparecen como iconos arriba a la derecha, en Contacto y en su sección
  // (Research o Film). Vacío = oculto.
  links: {
    // → sección Research
    orcid: "https://orcid.org/0009-0006-6342-0274",
    scholar: "",
    researchgate: "https://www.researchgate.net/profile/Xavier-Bachot-2",
    linkedin: "https://www.linkedin.com/in/xavier-bachot-iglesias-33b230161",
    github: "https://github.com/bachotxbi",
    // → sección Film
    youtube: "https://www.youtube.com/@mar_educado",
    instagram: "https://www.instagram.com/mar_educado/",
    facebook: "https://www.facebook.com/profile.php?id=100093498453940",
    tiktok: "https://www.tiktok.com/@mar_educado",
    vimeo: ""
  }
};
