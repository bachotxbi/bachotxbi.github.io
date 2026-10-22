// =====================================================================
//  CONFIGURACIÓN DE LA WEB — todo el contenido se edita aquí.
//  Deja un campo vacío ("" o []) y esa parte de la web se oculta sola.
// =====================================================================

window.SITE = {
  // --- Identidad -------------------------------------------------------
  name: "Xavier Bachot Iglesias",
  tagline: "Marine Ecologist · Underwater Videographer",
  location: "Mallorca, Balearic Islands",
  heroPhoto: "",            // ej. "images/hero.jpg" (foto submarina horizontal)
  heroYouTubeId: "",        // ej. "dQw4w9WgXcQ" → vídeo de fondo en la portada (sin sonido, en bucle)
  portrait: "",             // ej. "images/me.jpg" (foto tuya, cuadrada)

  about: [
    "I'm a marine ecologist working as a projects technician at the University of the Balearic Islands (UIB), in Mallorca. I study coastal ecosystems: how they are structured, how they change, and what happens to them under pressures such as invasive species.",
    "I trained in Marine Sciences at the University of Las Palmas de Gran Canaria (ULPGC), spent a year in Brazil working on reef ecology, and completed an MSc in Marine Ecology at the UIB while holding a research fellowship at IMEDEA (CSIC).",
    "Underwater I'm a certified SSI Divemaster, and I rarely go in without a camera. Through Mar Educado I share what I find below the surface."
  ],

  // Datos rápidos bajo la presentación
  facts: [
    { label: "Based in", value: "Mallorca, Spain" },
    { label: "Diving", value: "SSI Divemaster" },
    { label: "Languages", value: "Spanish · Catalan · English · Portuguese" }
  ],

  // Bitácora: tu trayectoria como un registro de inmersiones.
  // photo: "images/xxx.jpg" (foto de esa etapa). Vacío = fondo marino con las coordenadas.
  logbook: [
    {
      years: "2025 — now", place: "Mallorca, Balearic Islands", coords: "39.57° N · 2.65° E",
      title: "Marine ecology projects technician",
      org: "University of the Balearic Islands (UIB)",
      photo: ""
    },
    {
      years: "2024 — 2025", place: "Mallorca, Balearic Islands", coords: "39.57° N · 2.65° E",
      title: "MSc in Marine Ecology",
      org: "University of the Balearic Islands (UIB) · JAE Intro research fellowship at IMEDEA (CSIC)",
      photo: ""
    },
    {
      years: "2022 — 2023", place: "Florianópolis, Brazil", coords: "27.60° S · 48.52° W",
      title: "Exchange year & reef ecology research",
      org: "Federal University of Santa Catarina (UFSC) · Reef Environments Ecology Lab (LABAR)",
      photo: ""
    },
    {
      years: "2020 — 2024", place: "Gran Canaria, Canary Islands", coords: "28.10° N · 15.42° W",
      title: "BSc in Marine Sciences",
      org: "University of Las Palmas de Gran Canaria (ULPGC) · Research internship at ECOAQUA",
      photo: ""
    },
    {
      years: "2021", place: "Gran Canaria, Canary Islands", coords: "28.10° N · 15.42° W",
      title: "SSI Divemaster",
      org: "Divemaster internship at Karapat Dive",
      photo: ""
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
