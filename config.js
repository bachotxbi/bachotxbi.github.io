// =====================================================================
//  CONFIGURACIÓN DE LA WEB — todo el contenido se edita aquí.
//  Deja un campo vacío ("" o []) y esa parte de la web se oculta sola.
// =====================================================================

window.SITE = {
  // --- Identidad -------------------------------------------------------
  name: "Your Name",
  tagline: "Marine Ecologist · Underwater Videographer",
  location: "Canary Islands, Spain",
  heroPhoto: "",            // ej. "images/hero.jpg" (foto submarina horizontal)
  heroYouTubeId: "",        // ej. "dQw4w9WgXcQ" → vídeo de fondo en la portada (sin sonido, en bucle)
  portrait: "",             // ej. "images/me.jpg" (foto tuya, cuadrada)

  about: [
    "I am a marine scientist with an MSc in Marine Ecology. My research focuses on coastal ecosystems — write 1–2 sentences about your research here.",
    "Behind the camera, I film underwater life to bring the ocean closer to people. Write 1–2 sentences about your videography here."
  ],
  cvFile: "",               // ej. "files/CV.pdf"

  // --- Investigación ---------------------------------------------------
  researchInterests: ["Marine ecology", "Macroalgae", "Coastal ecosystems", "Underwater imaging"],

  // Si pones tu ORCID, las publicaciones se cargan solas desde ORCID.
  orcid: "",                // ej. "0000-0002-1825-0097"
  // Publicaciones a mano (se usan si no hay ORCID o como complemento):
  publications: [
    // { year: 2025, title: "Title of the paper", authors: "Surname A, Surname B", journal: "Journal", doi: "10.xxxx/xxxxx" },
  ],

  // --- Vídeo -----------------------------------------------------------
  // ID del canal de YouTube (empieza por "UC..."). Los vídeos nuevos aparecen solos.
  youtubeChannelId: "",
  youtubeHandle: "",        // ej. "@tucanal" (para el botón "Ver canal")
  // Vídeos destacados (opcional): IDs de YouTube que quieras mostrar grandes.
  featuredVideos: [
    // { id: "xxxxxxxxxxx", title: "Title", note: "Finalist — Festival X 2024" },
  ],

  // --- Concursos y reconocimientos --------------------------------------
  awards: [
    // { year: 2024, title: "Finalist", event: "Underwater film festival", link: "" },
  ],

  // --- Instagram -------------------------------------------------------
  instagramHandle: "",      // sin @
  // Widget de Behold (behold.so): pega aquí el "Feed ID" para mostrar los posts automáticamente
  beholdFeedId: "",

  // --- Contacto --------------------------------------------------------
  email: "",                // el email que quieras que se vea en la web
  links: {
    orcid: "",
    scholar: "",
    researchgate: "",
    linkedin: "",
    github: "https://github.com/bachotxbi",
    youtube: "",
    instagram: ""
  }
};
