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
    "I am a marine scientist with an MSc in Marine Ecology. My research focuses on coastal ecosystems — write 1–2 sentences about your research here.",
    "Behind the camera, I film underwater life to bring the ocean closer to people. Write 1–2 sentences about your videography here."
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
  // Aparecen como iconos arriba a la derecha y en Contacto (vacío = oculto)
  links: {
    orcid: "https://orcid.org/0009-0006-6342-0274",
    scholar: "",
    researchgate: "https://www.researchgate.net/profile/Xavier-Bachot-2",
    linkedin: "https://www.linkedin.com/in/xavier-bachot-iglesias-33b230161",
    github: "https://github.com/bachotxbi",
    youtube: "",
    instagram: ""
  }
};
