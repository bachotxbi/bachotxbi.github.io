(function () {
  const S = window.SITE || {};
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const placeholder = (text) => `<div class="placeholder">${text}</div>`;

  // ---- Simple bindings ----
  document.querySelectorAll("[data-bind]").forEach((el) => { el.textContent = S[el.dataset.bind] || ""; });
  document.title = `${S.name || ""} — ${S.tagline || ""}`;
  $("year").textContent = new Date().getFullYear();

  // ---- Hero media ----
  const hero = $("heroMedia");
  if (S.heroYouTubeId) {
    const id = encodeURIComponent(S.heroYouTubeId);
    hero.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&playsinline=1&modestbranding=1&rel=0" allow="autoplay; encrypted-media" title="Background video" tabindex="-1"></iframe>`;
    document.body.classList.add("has-media");
  } else if (S.heroPhoto) {
    hero.innerHTML = `<img src="${esc(S.heroPhoto)}" alt="">`;
    document.body.classList.add("has-media");
  }

  // ---- About ----
  $("portrait").innerHTML = S.portrait
    ? `<img src="${esc(S.portrait)}" alt="${esc(S.name)}">`
    : esc((S.name || "?").split(" ").map((w) => w[0]).join("").slice(0, 2));
  $("aboutText").innerHTML = (S.about || []).map((p) => `<p>${esc(p)}</p>`).join("");
  if (S.cvFile) $("cvBtn").innerHTML = `<a class="btn btn-accent" href="${esc(S.cvFile)}" target="_blank" rel="noopener">Download CV</a>`;

  // ---- Research ----
  $("interests").innerHTML = (S.researchInterests || []).map((i) => `<li>${esc(i)}</li>`).join("");

  const renderPubs = (list) => {
    list.sort((a, b) => (b.year || 0) - (a.year || 0));
    $("pubs").innerHTML = list.map((p) => `
      <li class="pub reveal">
        <div class="pub-year">${esc(p.year || "")}</div>
        <div>
          <div class="pub-title">${esc(p.title)}</div>
          <div class="pub-meta">${[p.authors, p.journal].filter(Boolean).map(esc).join(" · ")}</div>
          ${p.doi ? `<a href="https://doi.org/${esc(p.doi)}" target="_blank" rel="noopener">doi:${esc(p.doi)} →</a>` : p.url ? `<a href="${esc(p.url)}" target="_blank" rel="noopener">Read →</a>` : ""}
        </div>
      </li>`).join("");
    observe();
  };

  const manual = (S.publications || []).slice();
  if (S.orcid) {
    fetch(`https://pub.orcid.org/v3.0/${encodeURIComponent(S.orcid)}/works`, { headers: { Accept: "application/json" } })
      .then((r) => r.json())
      .then((data) => {
        const fromOrcid = (data.group || []).map((g) => {
          const w = g["work-summary"][0];
          const ids = (w["external-ids"] && w["external-ids"]["external-id"]) || [];
          const doi = ids.find((x) => x["external-id-type"] === "doi");
          return {
            year: w["publication-date"]?.year?.value,
            title: w.title?.title?.value,
            journal: w["journal-title"]?.value,
            doi: doi ? doi["external-id-value"] : "",
            url: w.url?.value
          };
        });
        const seen = new Set(fromOrcid.map((p) => (p.doi || p.title || "").toLowerCase()));
        const merged = fromOrcid.concat(manual.filter((p) => !seen.has((p.doi || p.title || "").toLowerCase())));
        renderPubs(merged);
        $("pubsNote").innerHTML = `Updated automatically from <a href="https://orcid.org/${esc(S.orcid)}" target="_blank" rel="noopener">ORCID</a>.`;
      })
      .catch(() => {
        if (manual.length) renderPubs(manual);
        else $("pubs").innerHTML = placeholder(`See my publications on <a href="https://orcid.org/${esc(S.orcid)}" target="_blank" rel="noopener">ORCID</a>.`);
      });
  } else if (manual.length) {
    renderPubs(manual);
  } else {
    $("pubs").innerHTML = placeholder("Publications will appear here — add your ORCID iD or a list of papers in <code>config.js</code>.");
  }

  // ---- Film ----
  const feat = S.featuredVideos || [];
  $("featured").innerHTML = feat.map((v) => `
    <article class="video-card reveal">
      <div class="frame"><iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(v.id)}?rel=0" title="${esc(v.title)}" loading="lazy" allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe></div>
      <h3>${esc(v.title)}</h3>
      ${v.note ? `<p class="note">${esc(v.note)}</p>` : ""}
    </article>`).join("");

  if (S.youtubeChannelId && S.youtubeChannelId.startsWith("UC")) {
    const uploads = "UU" + S.youtubeChannelId.slice(2);
    const channelUrl = S.youtubeHandle ? `https://www.youtube.com/${S.youtubeHandle}` : `https://www.youtube.com/channel/${S.youtubeChannelId}`;
    $("channel").innerHTML = `
      <h3 class="muted" style="font-family:Inter;font-weight:500;font-size:1rem;margin-bottom:14px">Latest uploads</h3>
      <div class="channel-frame reveal"><iframe src="https://www.youtube-nocookie.com/embed/videoseries?list=${uploads}" title="Latest videos" loading="lazy" allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe></div>
      <div class="channel-actions"><a class="btn btn-light" href="${esc(channelUrl)}" target="_blank" rel="noopener">See the full channel</a></div>`;
  } else if (!feat.length) {
    $("channel").innerHTML = placeholder("Your YouTube videos will appear here automatically — add your channel ID in <code>config.js</code>.");
  }

  // ---- Awards ----
  const awards = S.awards || [];
  if (awards.length) {
    awards.sort((a, b) => (b.year || 0) - (a.year || 0));
    $("awardsList").innerHTML = awards.map((a) => `
      <li class="reveal">
        <div class="yr">${esc(a.year)}</div>
        <div class="ttl">${a.link ? `<a href="${esc(a.link)}" target="_blank" rel="noopener">${esc(a.title)}</a>` : esc(a.title)}</div>
        <div class="muted">${esc(a.event)}</div>
      </li>`).join("");
  } else {
    $("awardsList").outerHTML = placeholder("Festivals and contests you've taken part in will be listed here.");
  }

  // ---- Instagram ----
  if (S.beholdFeedId) {
    $("igFeed").innerHTML = `<behold-widget feed-id="${esc(S.beholdFeedId)}"></behold-widget>`;
    const s = document.createElement("script");
    s.type = "module"; s.src = "https://w.behold.so/widget.js";
    document.head.appendChild(s);
  } else {
    $("igFeed").innerHTML = placeholder("Your latest Instagram posts will appear here once the feed widget is connected.");
  }
  if (S.instagramHandle) {
    $("igTitle").innerHTML = `Latest from <a href="https://instagram.com/${esc(S.instagramHandle)}" target="_blank" rel="noopener">@${esc(S.instagramHandle)}</a>`;
  }

  // ---- Contact ----
  if (S.email) $("emailLine").innerHTML = `<a href="mailto:${esc(S.email)}">${esc(S.email)}</a>`;
  const L = Object.assign({}, S.links || {});
  if (S.orcid && !L.orcid) L.orcid = `https://orcid.org/${S.orcid}`;
  if (S.instagramHandle && !L.instagram) L.instagram = `https://instagram.com/${S.instagramHandle}`;
  const labels = { orcid: "ORCID", scholar: "Google Scholar", researchgate: "ResearchGate", linkedin: "LinkedIn", github: "GitHub", youtube: "YouTube", instagram: "Instagram", email: "Email" };
  const ICONS = {
    orcid: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#a6ce39"/><text x="12" y="16.2" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="11" fill="#fff">iD</text></svg>`,
    researchgate: `<svg viewBox="0 0 24 24"><rect x="1" y="1" width="22" height="22" rx="4" fill="#00ccbb"/><text x="11" y="16.5" text-anchor="middle" font-family="Georgia,serif" font-size="12" fill="#fff">R</text><text x="17.2" y="11" text-anchor="middle" font-family="Georgia,serif" font-size="7" fill="#fff">G</text></svg>`,
    scholar: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 1 9l11 7 9-5.7V17h2V9z"/><path d="M5 13.2V17c0 1.7 3.1 4 7 4s7-2.3 7-4v-3.8l-7 4.4z"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13M7.12 20.45H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0"/></svg>`,
    github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1.1.9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"/></svg>`,
    youtube: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8M9.6 15.6V8.4l6.2 3.6z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2.5" y="2.5" width="19" height="19" rx="5.5"/><circle cx="12" cy="12" r="4.3"/><circle cx="17.6" cy="6.4" r="1" fill="currentColor" stroke="none"/></svg>`,
    email: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4.5" width="20" height="15" rx="2"/><path d="m3 6 9 7 9-7"/></svg>`
  };
  const linkList = Object.entries(L).filter(([, u]) => u);
  if (S.email) linkList.push(["email", `mailto:${S.email}`]);
  const iconLink = ([k, u]) => `<li><a href="${esc(u)}" ${k === "email" ? "" : 'target="_blank" rel="noopener"'} title="${labels[k] || esc(k)}" aria-label="${labels[k] || esc(k)}">${ICONS[k] || esc(labels[k] || k)}</a></li>`;
  $("navIcons").innerHTML = linkList.map(iconLink).join("");
  $("social").innerHTML = linkList.filter(([k]) => k !== "email")
    .map(([k, u]) => `<li><a href="${esc(u)}" target="_blank" rel="noopener"><span class="ico">${ICONS[k] || ""}</span>${labels[k] || esc(k)}</a></li>`).join("");

  // ---- Nav + reveal ----
  const nav = $("nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
  document.querySelectorAll(".nav-links a").forEach((a) => a.addEventListener("click", () => document.body.classList.remove("menu-open")));

  let io;
  function observe() {
    if (!("IntersectionObserver" in window)) { document.querySelectorAll(".reveal").forEach((e) => e.classList.add("visible")); return; }
    io = io || new IntersectionObserver((ents) => ents.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } }), { threshold: .12 });
    document.querySelectorAll(".reveal:not(.visible)").forEach((e) => io.observe(e));
  }
  document.querySelectorAll(".section .container > h2, .about-grid").forEach((e) => e.classList.add("reveal"));
  observe();
})();
