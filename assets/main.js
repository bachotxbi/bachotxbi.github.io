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
      .catch(() => renderPubs(manual));
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
  const labels = { orcid: "ORCID", scholar: "Google Scholar", researchgate: "ResearchGate", linkedin: "LinkedIn", github: "GitHub", youtube: "YouTube", instagram: "Instagram" };
  $("social").innerHTML = Object.entries(L).filter(([, u]) => u)
    .map(([k, u]) => `<li><a href="${esc(u)}" target="_blank" rel="noopener">${labels[k] || esc(k)}</a></li>`).join("");

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
