
const CONFIG = {
  githubUrl: "",
  releaseUrl: ""
};

/* Header / progress */
const header = document.getElementById("siteHeader");
const progress = document.getElementById("scrollProgress");

function updateScrollUI() {
  const y = window.scrollY;
  header?.classList.toggle("scrolled", y > 16);

  const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  if (progress) progress.style.width = `${Math.min(100, (y / max) * 100)}%`;
}
window.addEventListener("scroll", updateScrollUI, { passive: true });
updateScrollUI();

/* Logo fallback */
document.querySelectorAll("img[data-fallback]").forEach((img) => {
  img.addEventListener("error", () => {
    const fallback = img.dataset.fallback;
    if (fallback && !img.src.endsWith(fallback)) img.src = fallback;
  }, { once: true });
});

/* Links */
if (CONFIG.githubUrl) {
  ["headerGithub", "bottomGithub"].forEach((id) => {
    const link = document.getElementById(id);
    if (!link) return;
    link.href = CONFIG.githubUrl;
    link.classList.remove("hidden");
  });
}

const releaseButton = document.getElementById("releaseButton");
if (CONFIG.releaseUrl && releaseButton) {
  releaseButton.href = CONFIG.releaseUrl;
  releaseButton.textContent = "Download for Windows";
  releaseButton.classList.remove("disabled");
  releaseButton.removeAttribute("aria-disabled");
}

/* Reveal */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

/* Smooth cursor glow */
const cursorGlow = document.getElementById("cursorGlow");
let targetX = innerWidth / 2;
let targetY = innerHeight / 2;
let glowX = targetX;
let glowY = targetY;

window.addEventListener("pointermove", (e) => {
  targetX = e.clientX;
  targetY = e.clientY;
}, { passive: true });

function animateGlow() {
  glowX += (targetX - glowX) * 0.08;
  glowY += (targetY - glowY) * 0.08;
  if (cursorGlow) cursorGlow.style.transform = `translate(${glowX - 215}px, ${glowY - 215}px)`;
  requestAnimationFrame(animateGlow);
}
requestAnimationFrame(animateGlow);

/* Hero parallax */
const heroShowcase = document.getElementById("heroShowcase");
const parallaxItems = heroShowcase ? [...heroShowcase.querySelectorAll(".parallax")] : [];

if (
  heroShowcase &&
  matchMedia("(pointer:fine)").matches &&
  !matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  let tx = 0, ty = 0, cx = 0, cy = 0;

  heroShowcase.addEventListener("pointermove", (event) => {
    const r = heroShowcase.getBoundingClientRect();
    tx = ((event.clientX - r.left) / r.width - 0.5) * 2;
    ty = ((event.clientY - r.top) / r.height - 0.5) * 2;
  });

  heroShowcase.addEventListener("pointerleave", () => {
    tx = 0;
    ty = 0;
  });

  const tick = () => {
    cx += (tx - cx) * 0.08;
    cy += (ty - cy) * 0.08;

    parallaxItems.forEach((item) => {
      const depth = Number(item.dataset.depth || 0.1);
      item.style.translate = `${cx * depth * 18}px ${cy * depth * 12}px`;
    });

    requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}

/* Studio — THE ONLY PLACE THE USER SKIN APPEARS */
const studioPreview = document.getElementById("studioPreview");
const studioTabs = [...document.querySelectorAll(".studio-tab")];

const studioData = {
  skin: {
    label: "SKIN STUDIO",
    title: "Paint the pixels. See the character.",
    description: "Your uploaded skin appears here as the preview character — and nowhere else on the website.",
    demo: `
      <div class="studio-demo skin-demo">
        <div class="demo-toolbar">
          <span class="tool active">✎</span>
          <span class="tool">◇</span>
          <span class="tool">▣</span>
          <span class="tool">↶</span>
          <span class="tool">?</span>
        </div>

        <div class="demo-skin-stage">
          <img src="./assets/vexo-preview.png" alt="Your custom Minecraft skin preview">
        </div>

        <div class="skin-properties">
          <span>ACTIVE SKIN</span>
          <strong>Vexo</strong>
          <small>Classic · 64×64</small>

          <div class="palette">
            <i style="--c:#e6ccc6"></i>
            <i style="--c:#2e385a"></i>
            <i style="--c:#15151e"></i>
            <i style="--c:#5f7193"></i>
            <i style="--c:#b1a399"></i>
            <i style="--c:#ffffff"></i>
          </div>
        </div>
      </div>`
  },

  texture: {
    label: "TEXTURE STUDIO",
    title: "Build packs without leaving the client.",
    description: "Paint block textures, preview them and export a clean resource pack.",
    demo: `
      <div class="studio-demo texture-demo">
        <div class="demo-toolbar">
          <span class="tool active">✎</span>
          <span class="tool">◇</span>
          <span class="tool">▣</span>
          <span class="tool">⌁</span>
          <span class="tool">?</span>
        </div>
        <div class="demo-skin-stage">
          <div class="texture-grid">${"<i></i>".repeat(256)}</div>
        </div>
      </div>`
  },

  hud: {
    label: "HUD STUDIO",
    title: "Put every HUD element exactly where you want it.",
    description: "Arrange FPS, coordinates, keystrokes and more with snapping, guides and presets.",
    demo: `
      <div class="studio-demo hud-demo">
        <div class="hud-widget fps">FPS 248</div>
        <div class="hud-widget coords">XYZ 128 / 72 / -43</div>
        <div class="hud-keys"><i></i><i></i><i></i><i></i></div>
      </div>`
  },

  theme: {
    label: "THEME STUDIO",
    title: "Make Perfect Client feel like yours.",
    description: "Tune accent colors, surfaces, radius and motion while the preview updates live.",
    demo: `
      <div class="studio-demo theme-demo">
        <div class="theme-card">
          <div class="theme-title"></div>
          <div class="theme-line"></div>
          <div class="theme-line short"></div>
          <div class="theme-button"></div>
        </div>
        <div class="theme-controls"><i></i><i></i><i></i><i></i><i></i></div>
      </div>`
  }
};

function renderStudio(key) {
  const item = studioData[key];
  if (!studioPreview || !item) return;

  studioPreview.innerHTML = `
    <div class="studio-panel-copy">
      <span>${item.label}</span>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <div class="help-chip"><b>?</b>Need help? Every real Studio tool will explain itself.</div>
    </div>
    ${item.demo}
  `;
}

renderStudio("skin");

studioTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    studioTabs.forEach((x) => x.classList.remove("active"));
    tab.classList.add("active");
    renderStudio(tab.dataset.studio);
  });
});

/* Discover / Modrinth */
const projectGrid = document.getElementById("projectGrid");
const discoverForm = document.getElementById("discoverForm");
const discoverInput = document.getElementById("discoverInput");
const discoverLabel = document.getElementById("discoverLabel");
const discoverTabs = [...document.querySelectorAll(".discover-tab")];

let activeType = "mod";

const defaults = {
  mod: "performance",
  modpack: "adventure",
  resourcepack: "vanilla",
  shader: "shader"
};

function esc(value = "") {
  return String(value)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

function compact(value) {
  return new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1
  }).format(Number(value) || 0);
}

function setSkeletons() {
  if (!projectGrid) return;
  projectGrid.innerHTML = '<article class="project-card skeleton"></article>'.repeat(4);
}

function modrinthUrl(project) {
  const type = project.project_type === "resourcepack" ? "resourcepack" : project.project_type;
  return `https://modrinth.com/${type}/${project.slug}`;
}

function projectCard(project) {
  const title = esc(project.title || "Minecraft project");
  const icon = project.icon_url
    ? `<img src="${esc(project.icon_url)}" alt="" loading="lazy">`
    : `<div class="project-fallback">${esc(title.slice(0,1))}</div>`;

  const tags = Array.isArray(project.categories) ? project.categories.slice(0,3) : [];

  return `
    <article class="project-card">
      <div class="project-image">${icon}</div>
      <div class="project-body">
        <strong>${title}</strong>
        <div class="project-meta">${compact(project.downloads)} downloads · Modrinth</div>
        <p class="project-desc">${esc(project.description || "Minecraft content from Modrinth.")}</p>
        <div class="project-tags">${tags.map((tag) => `<span>${esc(tag)}</span>`).join("")}</div>
        <a class="project-link" href="${modrinthUrl(project)}" target="_blank" rel="noreferrer">View project →</a>
      </div>
    </article>`;
}

async function searchProjects(type, query = "") {
  setSkeletons();

  if (discoverLabel) {
    discoverLabel.textContent = query ? `Search: ${query}` : `Featured ${type}s`;
  }

  const facets = encodeURIComponent(JSON.stringify([[`project_type:${type}`]]));
  const url =
    `https://api.modrinth.com/v2/search?query=${encodeURIComponent(query || defaults[type] || "")}` +
    `&limit=4&index=downloads&facets=${facets}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Modrinth request failed");

    const data = await response.json();
    if (!data.hits?.length) throw new Error("No results");

    projectGrid.innerHTML = data.hits.map(projectCard).join("");
  } catch {
    projectGrid.innerHTML = `
      <article class="project-card">
        <div class="project-image"><div class="project-fallback">!</div></div>
        <div class="project-body">
          <strong>Discover preview unavailable</strong>
          <div class="project-meta">Modrinth could not be reached</div>
          <p class="project-desc">The rest of the website still works. Public project artwork appears here whenever the API is available.</p>
        </div>
      </article>`;
  }
}

discoverTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    discoverTabs.forEach((x) => x.classList.remove("active"));
    tab.classList.add("active");
    activeType = tab.dataset.type;
    if (discoverInput) discoverInput.value = "";
    searchProjects(activeType);
  });
});

discoverForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  searchProjects(activeType, discoverInput?.value.trim() || "");
});

searchProjects("mod");
