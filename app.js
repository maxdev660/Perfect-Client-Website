
const CONFIG = {
  githubUrl: "",
  releaseUrl: ""
};

const header = document.getElementById("siteHeader");
window.addEventListener("scroll", () => {
  header?.classList.toggle("scrolled", window.scrollY > 16);
});

document.querySelectorAll("img[data-fallback]").forEach((img) => {
  img.addEventListener("error", () => {
    const fallback = img.dataset.fallback;
    if (fallback && img.src !== fallback) img.src = fallback;
  }, { once: true });
});

if (CONFIG.githubUrl) {
  ["headerGithub", "bottomGithub"].forEach((id) => {
    const link = document.getElementById(id);
    if (link) {
      link.href = CONFIG.githubUrl;
      link.classList.remove("hidden");
    }
  });
}

const releaseButton = document.getElementById("releaseButton");
if (CONFIG.releaseUrl && releaseButton) {
  releaseButton.href = CONFIG.releaseUrl;
  releaseButton.textContent = "Download for Windows";
  releaseButton.classList.remove("disabled");
  releaseButton.removeAttribute("aria-disabled");
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.10 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

/* Smooth pointer glow */
const mouseGlow = document.getElementById("mouseGlow");
let mx = innerWidth / 2, my = innerHeight / 2, gx = mx, gy = my;

window.addEventListener("pointermove", (event) => {
  mx = event.clientX;
  my = event.clientY;
});

function animateGlow() {
  gx += (mx - gx) * 0.08;
  gy += (my - gy) * 0.08;
  if (mouseGlow) mouseGlow.style.transform = `translate(${gx - 210}px, ${gy - 210}px)`;
  requestAnimationFrame(animateGlow);
}
requestAnimationFrame(animateGlow);

/* Hero parallax */
const heroArt = document.getElementById("heroArt");
const parallaxEls = heroArt ? [...heroArt.querySelectorAll(".parallax")] : [];
let targetX = 0, targetY = 0, currentX = 0, currentY = 0;

if (heroArt && matchMedia("(pointer:fine)").matches && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  heroArt.addEventListener("pointermove", (event) => {
    const rect = heroArt.getBoundingClientRect();
    targetX = ((event.clientX - rect.left) / rect.width - .5) * 2;
    targetY = ((event.clientY - rect.top) / rect.height - .5) * 2;
  });
  heroArt.addEventListener("pointerleave", () => {
    targetX = 0;
    targetY = 0;
  });

  const tick = () => {
    currentX += (targetX - currentX) * .08;
    currentY += (targetY - currentY) * .08;
    parallaxEls.forEach((el) => {
      const depth = Number(el.dataset.depth || .1);
      el.style.translate = `${currentX * depth * 20}px ${currentY * depth * 14}px`;
    });
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/* Studio */
const studioPreview = document.getElementById("studioPreview");
const studioTabs = [...document.querySelectorAll(".studio-tab")];

const studioData = {
  skin: {
    label: "SKIN STUDIO",
    title: "Paint the pixels. See the character.",
    description: "Edit the texture and preview the result on a real Minecraft character.",
    demo: `
      <div class="studio-demo skin-demo">
        <div class="demo-toolbar">
          <span class="tool active">✎</span><span class="tool">◇</span><span class="tool">▣</span><span class="tool">↶</span><span class="tool">?</span>
        </div>
        <div class="demo-stage">
          <img src="https://mc-heads.net/body/MHF_Steve/380/right" alt="Steve preview" class="pixel-render">
        </div>
        <div class="palette">
          <i style="--c:#54dcff"></i><i style="--c:#7b69ff"></i><i style="--c:#c28e69"></i>
          <i style="--c:#397aca"></i><i style="--c:#26336c"></i><i style="--c:#ffffff"></i>
        </div>
      </div>`
  },
  texture: {
    label: "TEXTURE STUDIO",
    title: "Build packs without leaving the client.",
    description: "Edit pixel textures, preview them and export a proper resource pack.",
    demo: `
      <div class="studio-demo texture-demo">
        <div class="demo-toolbar">
          <span class="tool active">✎</span><span class="tool">◇</span><span class="tool">▣</span><span class="tool">⌁</span><span class="tool">?</span>
        </div>
        <div class="demo-stage">
          <div class="texture-grid">${"<i></i>".repeat(256)}</div>
        </div>
      </div>`
  },
  hud: {
    label: "HUD STUDIO",
    title: "Drag the HUD where you want it.",
    description: "Arrange FPS, coordinates, keystrokes and other widgets with snapping and presets.",
    demo: `
      <div class="studio-demo hud-demo">
        <div class="hud-widget fps">FPS 248</div>
        <div class="hud-widget coords">XYZ 128 / 72 / -43</div>
        <div class="hud-keys"><i></i><i></i><i></i><i></i></div>
      </div>`
  },
  theme: {
    label: "THEME STUDIO",
    title: "Make Perfect Client look like yours.",
    description: "Tune accent colors, surfaces, radius and motion while the preview updates live.",
    demo: `
      <div class="studio-demo theme-demo">
        <div class="theme-card">
          <div class="theme-title"></div><div class="theme-line"></div><div class="theme-line short"></div><div class="theme-button"></div>
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
    ${item.demo}`;
}
renderStudio("skin");

studioTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    studioTabs.forEach((x) => x.classList.remove("active"));
    tab.classList.add("active");
    renderStudio(tab.dataset.studio);
  });
});

/* Modrinth discover */
const projectGrid = document.getElementById("projectGrid");
const discoverForm = document.getElementById("discoverForm");
const discoverInput = document.getElementById("discoverInput");
const discoverLabel = document.getElementById("discoverLabel");
const discoverTabs = [...document.querySelectorAll(".discover-tab")];

let activeType = "mod";
let activeQuery = "";

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
  return new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 }).format(Number(value) || 0);
}

function setSkeletons() {
  if (!projectGrid) return;
  projectGrid.innerHTML = '<article class="project-card skeleton"></article>'.repeat(4);
}

function projectUrl(project) {
  const type = project.project_type === "resourcepack" ? "resourcepack" : project.project_type;
  return `https://modrinth.com/${type}/${project.slug}`;
}

function card(project) {
  const title = esc(project.title || "Minecraft project");
  const icon = project.icon_url
    ? `<img src="${esc(project.icon_url)}" alt="" loading="lazy">`
    : `<div class="project-fallback">${esc(title.slice(0,1))}</div>`;
  const tags = Array.isArray(project.categories) ? project.categories.slice(0,3) : [];

  return `
    <article class="project-card">
      <div class="project-image">${icon}</div>
      <div class="project-body">
        <div class="project-title-row"><strong>${title}</strong></div>
        <div class="project-meta">${compact(project.downloads)} downloads · Modrinth</div>
        <p class="project-desc">${esc(project.description || "Minecraft content from Modrinth.")}</p>
        <div class="project-tags">${tags.map((tag) => `<span>${esc(tag)}</span>`).join("")}</div>
        <a class="project-link" href="${projectUrl(project)}" target="_blank" rel="noreferrer">View on Modrinth →</a>
      </div>
    </article>`;
}

async function searchProjects(type, query) {
  setSkeletons();
  if (discoverLabel) discoverLabel.textContent = query ? `Search: ${query}` : `Featured ${type}s`;

  const facets = encodeURIComponent(JSON.stringify([[`project_type:${type}`]]));
  const url = `https://api.modrinth.com/v2/search?query=${encodeURIComponent(query || defaults[type] || "")}&limit=4&index=downloads&facets=${facets}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Modrinth request failed");
    const data = await response.json();
    if (!data.hits?.length) throw new Error("No results");
    projectGrid.innerHTML = data.hits.map(card).join("");
  } catch {
    projectGrid.innerHTML = `
      <article class="project-card">
        <div class="project-image"><div class="project-fallback">!</div></div>
        <div class="project-body">
          <strong>Discover preview unavailable</strong>
          <div class="project-meta">Modrinth could not be reached</div>
          <p class="project-desc">The rest of the website still works. Real project artwork appears here whenever the public API is available.</p>
        </div>
      </article>`;
  }
}

discoverTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    discoverTabs.forEach((x) => x.classList.remove("active"));
    tab.classList.add("active");
    activeType = tab.dataset.type;
    activeQuery = "";
    if (discoverInput) discoverInput.value = "";
    searchProjects(activeType, "");
  });
});

discoverForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  activeQuery = discoverInput?.value.trim() || "";
  searchProjects(activeType, activeQuery);
});

searchProjects("mod", "");
