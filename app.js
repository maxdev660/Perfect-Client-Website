
const CONFIG = {
  githubUrl: "",
  releaseUrl: ""
};

const header = document.getElementById("siteHeader");
const progress = document.getElementById("scrollProgress");

function updateHeader() {
  const y = window.scrollY || 0;
  if (header) header.classList.toggle("scrolled", y > 12);
  const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  if (progress) progress.style.width = `${(y / max) * 100}%`;
}
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

document.querySelectorAll("img[data-fallback]").forEach((img) => {
  img.addEventListener("error", () => {
    const fallback = img.dataset.fallback;
    if (fallback) img.src = fallback;
  }, { once: true });
});

const releaseButton = document.getElementById("releaseButton");
if (CONFIG.releaseUrl && releaseButton) {
  releaseButton.href = CONFIG.releaseUrl;
  releaseButton.textContent = "Download for Windows";
  releaseButton.classList.remove("disabled");
  releaseButton.removeAttribute("aria-disabled");
}

/* cursor glow */
const cursorGlow = document.getElementById("cursorGlow");
let targetX = innerWidth / 2, targetY = innerHeight / 2;
let currentX = targetX, currentY = targetY;
window.addEventListener("pointermove", (e) => {
  targetX = e.clientX;
  targetY = e.clientY;
}, { passive: true });
function animateGlow() {
  currentX += (targetX - currentX) * 0.08;
  currentY += (targetY - currentY) * 0.08;
  if (cursorGlow) cursorGlow.style.transform = `translate(${currentX - 210}px, ${currentY - 210}px)`;
  requestAnimationFrame(animateGlow);
}
requestAnimationFrame(animateGlow);

/* reveal */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

/* hero parallax */
const heroVisual = document.getElementById("heroVisual");
const parallaxItems = heroVisual ? [...heroVisual.querySelectorAll(".parallax")] : [];
if (heroVisual && matchMedia("(pointer:fine)").matches && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  let tx = 0, ty = 0, cx = 0, cy = 0;
  heroVisual.addEventListener("pointermove", (event) => {
    const r = heroVisual.getBoundingClientRect();
    tx = ((event.clientX - r.left) / r.width - 0.5) * 2;
    ty = ((event.clientY - r.top) / r.height - 0.5) * 2;
  });
  heroVisual.addEventListener("pointerleave", () => { tx = 0; ty = 0; });
  const loop = () => {
    cx += (tx - cx) * 0.08;
    cy += (ty - cy) * 0.08;
    parallaxItems.forEach((item) => {
      const depth = Number(item.dataset.depth || 0.15);
      item.style.transform = `translate(${cx * depth * 18}px, ${cy * depth * 12}px)`;
    });
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
}

/* Discover: live Modrinth */
const projectGrid = document.getElementById("projectGrid");
const discoverInput = document.getElementById("discoverInput");
const discoverForm = document.getElementById("discoverForm");
const discoverLabel = document.getElementById("discoverLabel");
const tabs = [...document.querySelectorAll(".tab")];
let activeType = "mod";
const defaultQueries = {
  mod: "performance",
  modpack: "adventure",
  resourcepack: "vanilla",
  shader: "shader"
};

function esc(str = "") {
  return String(str)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}
function compact(num) {
  return new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 }).format(Number(num) || 0);
}
function setSkeletons() {
  if (!projectGrid) return;
  projectGrid.innerHTML = '<article class="project-card skeleton"></article>'.repeat(4);
}
function projectUrl(hit) {
  return `https://modrinth.com/${hit.project_type}/${hit.slug}`;
}
function card(hit) {
  const icon = hit.icon_url
    ? `<img src="${esc(hit.icon_url)}" alt="" loading="lazy">`
    : `<div class="project-fallback">${esc((hit.title || "P").slice(0,1))}</div>`;
  const tags = Array.isArray(hit.categories) ? hit.categories.slice(0, 3) : [];
  return `
    <article class="project-card">
      <div class="project-image">${icon}</div>
      <div class="project-body">
        <strong>${esc(hit.title || "Minecraft Project")}</strong>
        <div class="project-meta">${compact(hit.downloads)} downloads · Modrinth</div>
        <p class="project-desc">${esc(hit.description || "Public project preview.")}</p>
        <div class="project-tags">${tags.map(tag => `<span>${esc(tag)}</span>`).join("")}</div>
        <a class="project-link" href="${projectUrl(hit)}" target="_blank" rel="noreferrer">View project →</a>
      </div>
    </article>
  `;
}
async function loadProjects(type, query = "") {
  setSkeletons();
  if (discoverLabel) discoverLabel.textContent = query ? `Search: ${query}` : `Featured ${type}s`;
  const facets = encodeURIComponent(JSON.stringify([[`project_type:${type}`]]));
  const q = encodeURIComponent(query || defaultQueries[type] || "");
  const url = `https://api.modrinth.com/v2/search?query=${q}&limit=4&index=downloads&facets=${facets}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("request failed");
    const data = await res.json();
    if (!data.hits?.length) throw new Error("no results");
    projectGrid.innerHTML = data.hits.map(card).join("");
  } catch {
    projectGrid.innerHTML = `
      <article class="project-card">
        <div class="project-image"><div class="project-fallback">!</div></div>
        <div class="project-body">
          <strong>Discover preview unavailable</strong>
          <div class="project-meta">Modrinth could not be reached</div>
          <p class="project-desc">The rest of the website still works. When the API is reachable, real project artwork will appear here.</p>
        </div>
      </article>
    `;
  }
}
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    activeType = tab.dataset.type;
    if (discoverInput) discoverInput.value = "";
    loadProjects(activeType);
  });
});
discoverForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  loadProjects(activeType, discoverInput?.value.trim() || "");
});
loadProjects("mod");

/* Studio: only one skin, used once */
const studioStage = document.getElementById("studioStage");
const studioTabs = [...document.querySelectorAll(".studio-tab")];
const studioViews = {
  skin: {
    eyebrow: "SKIN STUDIO",
    title: "One uploaded skin. One appearance.",
    text: "This is the only place on the whole website where a skin is shown. No other hero skins, no profile skins, no extra characters.",
    demo: `
      <div class="stage-demo skin-layout">
        <div class="vertical-tools">
          <span class="tool active">✎</span>
          <span class="tool">◇</span>
          <span class="tool">▣</span>
          <span class="tool">↶</span>
          <span class="tool">?</span>
        </div>
        <div class="skin-canvas">
          <img src="./assets/vexo-skin.png" alt="Uploaded Minecraft skin">
        </div>
        <div class="skin-side">
          <span>ACTIVE PREVIEW</span>
          <strong>Uploaded skin</strong>
          <small>Single use on this website</small>
          <div class="swatches">
            <i style="--c:#f0b399"></i>
            <i style="--c:#57dfe6"></i>
            <i style="--c:#2d2e42"></i>
            <i style="--c:#8d75ff"></i>
            <i style="--c:#7d5f46"></i>
            <i style="--c:#ffffff"></i>
          </div>
        </div>
      </div>`
  },
  texture: {
    eyebrow: "TEXTURE STUDIO",
    title: "Edit Minecraft-style textures.",
    text: "Make resource pack artwork with a focused pixel editor and export-ready workflows.",
    demo: `
      <div class="stage-demo texture-layout">
        <div class="vertical-tools">
          <span class="tool active">✎</span>
          <span class="tool">◇</span>
          <span class="tool">▣</span>
          <span class="tool">⌁</span>
          <span class="tool">?</span>
        </div>
        <div class="skin-canvas"><div class="texture-grid">${"<i></i>".repeat(256)}</div></div>
      </div>`
  },
  hud: {
    eyebrow: "HUD STUDIO",
    title: "Arrange every HUD element cleanly.",
    text: "Build PvP-focused or survival-focused overlays with snapping, presets and layout memory.",
    demo: `
      <div class="stage-demo hud-demo">
        <div class="hud-box a">FPS 241</div>
        <div class="hud-box b">XYZ 128 / 69 / -41</div>
        <div class="hud-keys"><i></i><i></i><i></i><i></i></div>
      </div>`
  },
  theme: {
    eyebrow: "THEME STUDIO",
    title: "Theme the launcher without overcomplicating it.",
    text: "Adjust accent color, surface depth, radius and motion while seeing the result immediately.",
    demo: `
      <div class="stage-demo theme-layout">
        <div class="theme-card">
          <div class="theme-title"></div>
          <div class="theme-line"></div>
          <div class="theme-line short"></div>
          <div class="theme-btn"></div>
        </div>
        <div class="theme-controls"><i></i><i></i><i></i><i></i><i></i></div>
      </div>`
  }
};

function renderStudio(key) {
  const view = studioViews[key];
  if (!studioStage || !view) return;
  studioStage.innerHTML = `
    <div class="stage-copy">
      <span class="eyebrow">${view.eyebrow}</span>
      <h3>${view.title}</h3>
      <p>${view.text}</p>
      <div class="help-chip"><b>?</b>Need help? Every real Studio tool will explain itself.</div>
    </div>
    ${view.demo}
  `;
}
renderStudio("skin");
studioTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    studioTabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    renderStudio(tab.dataset.studio);
  });
});
