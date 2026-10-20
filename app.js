
const SITE_CONFIG = {
  githubUrl: "",
  releaseUrl: ""
};

const header = document.getElementById("siteHeader");
window.addEventListener("scroll", () => {
  header?.classList.toggle("scrolled", window.scrollY > 14);
});

document.querySelectorAll(".brand-logo").forEach((img) => {
  img.addEventListener("error", () => img.style.display = "none");
});

if (SITE_CONFIG.githubUrl) {
  ["githubTop", "githubBottom"].forEach((id) => {
    const link = document.getElementById(id);
    if (link) {
      link.href = SITE_CONFIG.githubUrl;
      link.classList.remove("hidden");
    }
  });
}

const releaseButton = document.getElementById("releaseButton");
if (SITE_CONFIG.releaseUrl && releaseButton) {
  releaseButton.href = SITE_CONFIG.releaseUrl;
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
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

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
          <img src="https://mc-heads.net/body/MHF_Steve/360/right" alt="Steve preview" class="steve">
        </div>
        <div class="palette">
          <i style="--c:#51d9ff"></i><i style="--c:#7869ff"></i><i style="--c:#c18e69"></i><i style="--c:#397aca"></i><i style="--c:#26336c"></i><i style="--c:#ffffff"></i>
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

const studioPreview = document.getElementById("studioPreview");
const studioTabs = [...document.querySelectorAll(".studio-tab")];

function renderStudio(key) {
  const data = studioData[key];
  if (!studioPreview || !data) return;
  studioPreview.innerHTML = `
    <div class="studio-panel-copy">
      <span>${data.label}</span>
      <h3>${data.title}</h3>
      <p>${data.description}</p>
      <div class="help-chip"><b>?</b>Need help? Every real Studio tool will explain itself.</div>
    </div>
    ${data.demo}
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

const grid = document.getElementById("projectGrid");
const slugs = ["sodium", "iris", "lithium", "fabric-api"];

function escapeHtml(v="") {
  return String(v).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");
}

function compact(v) {
  return new Intl.NumberFormat("en",{notation:"compact",maximumFractionDigits:1}).format(Number(v)||0);
}

async function getProject(slug) {
  const facets = encodeURIComponent(JSON.stringify([["project_type:mod"]]));
  const r = await fetch(`https://api.modrinth.com/v2/search?query=${encodeURIComponent(slug)}&limit=8&facets=${facets}`);
  if (!r.ok) throw new Error("Modrinth request failed");
  const data = await r.json();
  return data.hits.find((x) => x.slug === slug) || data.hits[0] || null;
}

function card(p) {
  const title = escapeHtml(p.title || "Minecraft project");
  const icon = p.icon_url
    ? `<img src="${escapeHtml(p.icon_url)}" alt="" loading="lazy">`
    : `<div class="project-fallback">${escapeHtml(title[0] || "?")}</div>`;
  const tags = Array.isArray(p.categories) ? p.categories.slice(0,3) : [];
  return `
    <article class="project-card">
      <div class="project-image">${icon}</div>
      <div class="project-body">
        <strong>${title}</strong>
        <div class="project-meta">${compact(p.downloads)} downloads · Modrinth</div>
        <p class="project-desc">${escapeHtml(p.description || "Minecraft content from Modrinth.")}</p>
        <div class="project-tags">${tags.map((t) => `<span>${escapeHtml(t)}</span>`).join("")}</div>
      </div>
    </article>`;
}

(async () => {
  if (!grid) return;
  try {
    const projects = (await Promise.all(slugs.map(getProject))).filter(Boolean);
    if (!projects.length) throw new Error("No projects");
    grid.innerHTML = projects.map(card).join("");
  } catch {
    grid.innerHTML = `
      <article class="project-card">
        <div class="project-image"><div class="project-fallback">!</div></div>
        <div class="project-body">
          <strong>Discover preview unavailable</strong>
          <div class="project-meta">Modrinth could not be reached</div>
          <p class="project-desc">The rest of the website still works. Real project artwork appears here whenever the public API is available.</p>
        </div>
      </article>`;
  }
})();
