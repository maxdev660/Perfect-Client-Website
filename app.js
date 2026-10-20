
const CONFIG = {
  githubUrl: "",
  releaseUrl: ""
};

const I18N = {
  de: {
    pageTitle: "Perfect Client — Minecraft, endlich übersichtlich.",
    pageDescription: "Perfect Client — ein moderner Minecraft Launcher für Profile, Content-Suche und Creator-Tools.",
    navProfiles: "Profile",
    navDiscover: "Discover",
    navStudio: "Studio",
    navEditions: "Java + Bedrock",
    navDownload: "Download",
    heroEyebrow: "PERFECT CLIENT",
    heroTitleA: "Minecraft,",
    heroTitleB: "endlich übersichtlich.",
    heroLead: "Ein moderner Launcher für Java und Bedrock – mit sauberen Profilen, einfacher Content-Suche, Updates und kreativen Tools an einem Ort.",
    heroPrimary: "Perfect Client entdecken",
    heroSecondary: "Windows-Status",
    metaLocal: "Lokal zuerst",
    metaEditions: "Java + Bedrock",
    metaFree: "Core-Funktionen kostenlos",
    floatProfilesTitle: "Profile bleiben getrennt",
    floatProfilesText: "Mods, Packs, Welten und Einstellungen bleiben zusammen.",
    floatStudioTitle: "Perfect Studio",
    floatStudioText: "Skins, Texturen, HUDs und Themes an einem Ort.",
    valueProfilesTitle: "Profile",
    valueProfilesText: "Jedes Setup behält seine eigene Version, seinen Loader, Content und Einstellungen.",
    valueDiscoverTitle: "Discover",
    valueDiscoverText: "Finde Mods, Modpacks, Resource Packs und Shader ohne unnötiges Durcheinander.",
    valueStudioTitle: "Studio",
    valueStudioText: "Nicht nur installieren: Skins, Texturen, HUDs und Themes direkt selbst gestalten.",
    profilesEyebrow: "PROFILE",
    profilesTitle: "Alles, was zusammengehört, bleibt zusammen.",
    profilesLead: "PvP, Survival, Modpacks und Bedrock-Welten sollen sich nicht gegenseitig stören. Deshalb bekommt jedes Profil seine eigene Umgebung – sauber getrennt und sofort spielbereit.",
    profilesFeature1: "Spielen, verwalten und aktualisieren, ohne andere Setups anzufassen",
    profilesFeature2: "Java-Profile kennen Mods, Shader, Loader und Packs",
    profilesFeature3: "Bedrock-Profile konzentrieren sich auf Add-Ons, Welten und Resource Packs",
    profileAll: "ALLE",
    profilePlay: "Spielen",
    profileSettings: "Einstellungen",
    profileSurvivalMeta: "Java · Fabric · 34 Mods · Shader aktiv",
    profileBedrockMeta: "Bedrock · 5 Add-Ons · 2 Packs",
    discoverEyebrow: "DISCOVER",
    discoverTitle: "Guter Content sollte leicht zu finden sein.",
    discoverLead: "Durchsuche öffentliche Modrinth-Projekte direkt auf der Seite. Klar, schnell und ohne Fake-Inhalte.",
    tabMods: "Mods",
    tabModpacks: "Modpacks",
    tabResourcePacks: "Resource Packs",
    tabShaders: "Shader",
    discoverSearch: "Modrinth durchsuchen...",
    discoverSearchButton: "Suchen",
    discoverLive: "ÖFFENTLICHE LIVE-DATEN",
    discoverFeatured: "Empfohlene",
    discoverDownloads: "Downloads",
    discoverView: "Projekt ansehen →",
    discoverUnavailable: "Discover-Vorschau nicht verfügbar",
    discoverUnavailableMeta: "Modrinth konnte nicht erreicht werden",
    discoverUnavailableText: "Der Rest der Website funktioniert weiterhin. Sobald die API erreichbar ist, erscheinen hier wieder echte Projekte.",
    studioEyebrow: "PERFECT STUDIO",
    studioTitle: "Deine Ideen. Direkt im Client.",
    studioLead: "Ein eigener Bereich für Skins, Texturen, HUDs und Themes. Dein Skin wird auf dieser Website genau einmal gezeigt – hier in der Skin-Studio-Vorschau.",
    skinStudio: "Skin Studio",
    skinStudioSmall: "Malen · Vorschau · Speichern",
    textureStudio: "Texture Studio",
    textureStudioSmall: "Pixel · Packs · Export",
    hudStudioSmall: "Ziehen · Einrasten · Presets",
    themeStudioSmall: "Akzent · Radius · Bewegung",
    editionsTitle: "Ein Launcher. Zwei Editionen. Klare Regeln.",
    editionsLead: "Java und Bedrock gehören in einen Launcher – aber nicht in dieselbe Schublade. Jedes Profil zeigt nur die Funktionen und Inhalte, die zur jeweiligen Edition passen.",
    javaTitle: "Versionen, Loader und Mods.",
    javaLead: "Fabric, Forge, NeoForge, Datapacks, Shader und Modpacks – alles an der richtigen Stelle.",
    bedrockTitle: "Add-Ons, Packs und Welten.",
    bedrockLead: "Behavior Packs, Resource Packs, Welten und Backups – ohne Java-Funktionen dazwischen.",
    pillWorlds: "Welten",
    downloadEyebrow: "PERFECT CLIENT FÜR WINDOWS",
    downloadTitle: "Der erste Windows-Build kommt.",
    downloadLead: "Die Website kann bereits veröffentlicht werden. Sobald der echte Installer bereit ist, führt dieser Button direkt zum neuesten Release.",
    downloadButton: "Windows-Build in Entwicklung",
    downloadActive: "Für Windows herunterladen",
    downloadFree: "Core-Funktionen kostenlos",
    footerDisclaimer: "Nicht mit Mojang Studios oder Microsoft verbunden.",
    studio: {
      skin: {
        eyebrow: "SKIN STUDIO",
        title: "Dein Skin. Eine Vorschau. Genau hier.",
        text: "Dein hochgeladener Skin wird auf der gesamten Website nur an dieser Stelle angezeigt – als klare Vorschau für das Skin Studio.",
        help: "Brauchst du Hilfe? Jedes echte Studio-Tool erklärt sich direkt im Client.",
        active: "AKTIVE VORSCHAU",
        uploaded: "Hochgeladener Skin",
        once: "Einmalige Verwendung auf der Website"
      },
      texture: {
        eyebrow: "TEXTURE STUDIO",
        title: "Pixel für Pixel zum eigenen Pack.",
        text: "Bearbeite Minecraft-Texturen fokussiert und baue daraus Resource Packs mit einem klaren Export-Workflow.",
        help: "Brauchst du Hilfe? Jedes echte Studio-Tool erklärt sich direkt im Client."
      },
      hud: {
        eyebrow: "HUD STUDIO",
        title: "Dein HUD genau dort, wo du es willst.",
        text: "Ordne FPS, Koordinaten, Keystrokes und weitere Widgets mit Raster, Snap-Hilfen und Presets an.",
        help: "Brauchst du Hilfe? Jedes echte Studio-Tool erklärt sich direkt im Client."
      },
      theme: {
        eyebrow: "THEME STUDIO",
        title: "Ein Client, der auch visuell zu dir passt.",
        text: "Passe Akzentfarben, Oberflächen, Rundungen und Bewegung an und sieh jede Änderung direkt in der Vorschau.",
        help: "Brauchst du Hilfe? Jedes echte Studio-Tool erklärt sich direkt im Client."
      }
    }
  },
  en: {
    pageTitle: "Perfect Client — Minecraft, without the mess.",
    pageDescription: "Perfect Client — a modern Minecraft launcher for profiles, content discovery and creator tools.",
    navProfiles: "Profiles",
    navDiscover: "Discover",
    navStudio: "Studio",
    navEditions: "Java + Bedrock",
    navDownload: "Download",
    heroEyebrow: "PERFECT CLIENT",
    heroTitleA: "Minecraft,",
    heroTitleB: "without the mess.",
    heroLead: "A modern launcher for Java and Bedrock with clean profiles, simple content discovery, updates and creator tools in one place.",
    heroPrimary: "Explore Perfect Client",
    heroSecondary: "Windows status",
    metaLocal: "Local first",
    metaEditions: "Java + Bedrock",
    metaFree: "Free core features",
    floatProfilesTitle: "Profiles stay separate",
    floatProfilesText: "Mods, packs, worlds and settings stay together.",
    floatStudioTitle: "Perfect Studio",
    floatStudioText: "Skins, textures, HUDs and themes in one workspace.",
    valueProfilesTitle: "Profiles",
    valueProfilesText: "Every setup keeps its own version, loader, content and settings.",
    valueDiscoverTitle: "Discover",
    valueDiscoverText: "Find mods, modpacks, resource packs and shaders without unnecessary clutter.",
    valueStudioTitle: "Studio",
    valueStudioText: "Don't just install: create skins, textures, HUDs and themes yourself.",
    profilesEyebrow: "PROFILES",
    profilesTitle: "Everything that belongs together, stays together.",
    profilesLead: "PvP, survival, modpacks and Bedrock worlds should never interfere with each other. Each profile gets its own clean environment, ready whenever you are.",
    profilesFeature1: "Play, manage and update without touching other setups",
    profilesFeature2: "Java profiles understand mods, shaders, loaders and packs",
    profilesFeature3: "Bedrock profiles focus on add-ons, worlds and resource packs",
    profileAll: "ALL",
    profilePlay: "Play",
    profileSettings: "Settings",
    profileSurvivalMeta: "Java · Fabric · 34 Mods · Shaders enabled",
    profileBedrockMeta: "Bedrock · 5 Add-Ons · 2 Packs",
    discoverEyebrow: "DISCOVER",
    discoverTitle: "Great content should be easy to find.",
    discoverLead: "Search public Modrinth projects directly from the site. Clean, fast and without fake content.",
    tabMods: "Mods",
    tabModpacks: "Modpacks",
    tabResourcePacks: "Resource Packs",
    tabShaders: "Shaders",
    discoverSearch: "Search Modrinth...",
    discoverSearchButton: "Search",
    discoverLive: "PUBLIC LIVE DATA",
    discoverFeatured: "Featured",
    discoverDownloads: "downloads",
    discoverView: "View project →",
    discoverUnavailable: "Discover preview unavailable",
    discoverUnavailableMeta: "Modrinth could not be reached",
    discoverUnavailableText: "The rest of the website still works. Real projects will appear here again when the API is reachable.",
    studioEyebrow: "PERFECT STUDIO",
    studioTitle: "Your ideas. Right inside the client.",
    studioLead: "A dedicated workspace for skins, textures, HUDs and themes. Your skin appears exactly once on this website — here in the Skin Studio preview.",
    skinStudio: "Skin Studio",
    skinStudioSmall: "Paint · Preview · Save",
    textureStudio: "Texture Studio",
    textureStudioSmall: "Pixels · Packs · Export",
    hudStudioSmall: "Drag · Snap · Presets",
    themeStudioSmall: "Accent · Radius · Motion",
    editionsTitle: "One launcher. Two editions. Clear rules.",
    editionsLead: "Java and Bedrock belong in one launcher — but not in the same box. Each profile only shows the tools and content that make sense for that edition.",
    javaTitle: "Versions, loaders and mods.",
    javaLead: "Fabric, Forge, NeoForge, datapacks, shaders and modpacks — all where they belong.",
    bedrockTitle: "Add-Ons, packs and worlds.",
    bedrockLead: "Behavior packs, resource packs, worlds and backups — without Java-only features getting in the way.",
    pillWorlds: "Worlds",
    downloadEyebrow: "PERFECT CLIENT FOR WINDOWS",
    downloadTitle: "The first Windows build is on the way.",
    downloadLead: "The website is ready to publish. Once the real installer is available, this button will lead directly to the latest release.",
    downloadButton: "Windows build in development",
    downloadActive: "Download for Windows",
    downloadFree: "Free core features",
    footerDisclaimer: "Not affiliated with Mojang Studios or Microsoft.",
    studio: {
      skin: {
        eyebrow: "SKIN STUDIO",
        title: "Your skin. One preview. Right here.",
        text: "Your uploaded skin appears in exactly one place across the entire website — as the focused preview for Skin Studio.",
        help: "Need help? Every real Studio tool explains itself directly inside the client.",
        active: "ACTIVE PREVIEW",
        uploaded: "Uploaded skin",
        once: "Used once on this website"
      },
      texture: {
        eyebrow: "TEXTURE STUDIO",
        title: "Turn pixels into your own pack.",
        text: "Edit Minecraft textures in a focused workspace and turn them into resource packs with a clean export flow.",
        help: "Need help? Every real Studio tool explains itself directly inside the client."
      },
      hud: {
        eyebrow: "HUD STUDIO",
        title: "Put every HUD element exactly where you want it.",
        text: "Arrange FPS, coordinates, keystrokes and other widgets with guides, snapping and presets.",
        help: "Need help? Every real Studio tool explains itself directly inside the client."
      },
      theme: {
        eyebrow: "THEME STUDIO",
        title: "Make the client look like yours.",
        text: "Tune accent colors, surfaces, corner radius and motion while every change updates instantly.",
        help: "Need help? Every real Studio tool explains itself directly inside the client."
      }
    }
  }
};

let currentLang =
  localStorage.getItem("perfectClientLanguage") ||
  (navigator.language?.toLowerCase().startsWith("de") ? "de" : "en");

const header = document.getElementById("siteHeader");
const progress = document.getElementById("scrollProgress");
const releaseButton = document.getElementById("releaseButton");
const langButtons = [...document.querySelectorAll(".lang-btn")];

function updateHeader() {
  const y = window.scrollY || 0;
  header?.classList.toggle("scrolled", y > 12);
  const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  if (progress) progress.style.width = `${Math.min(100, (y / max) * 100)}%`;
}
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

function setLanguage(lang) {
  if (!I18N[lang]) return;
  currentLang = lang;
  localStorage.setItem("perfectClientLanguage", lang);
  document.documentElement.lang = lang;

  const t = I18N[lang];
  document.title = t.pageTitle;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", t.pageDescription);

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (t[key] != null) node.textContent = t[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    if (t[key] != null) node.setAttribute("placeholder", t[key]);
  });

  langButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
    button.setAttribute("aria-pressed", button.dataset.lang === lang ? "true" : "false");
  });

  if (releaseButton) {
    releaseButton.textContent = CONFIG.releaseUrl ? t.downloadActive : t.downloadButton;
  }

  renderStudio(activeStudio);
  updateDiscoverLabel();
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

if (CONFIG.releaseUrl && releaseButton) {
  releaseButton.href = CONFIG.releaseUrl;
  releaseButton.classList.remove("disabled");
  releaseButton.removeAttribute("aria-disabled");
}

/* smooth pointer glow */
const cursorGlow = document.getElementById("cursorGlow");
let targetX = innerWidth / 2, targetY = innerHeight / 2;
let currentX = targetX, currentY = targetY;
window.addEventListener("pointermove", (event) => {
  targetX = event.clientX;
  targetY = event.clientY;
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

/* parallax */
const heroVisual = document.getElementById("heroVisual");
const parallaxItems = heroVisual ? [...heroVisual.querySelectorAll(".parallax")] : [];
if (heroVisual && matchMedia("(pointer:fine)").matches && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  let tx = 0, ty = 0, cx = 0, cy = 0;

  heroVisual.addEventListener("pointermove", (event) => {
    const rect = heroVisual.getBoundingClientRect();
    tx = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    ty = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
  });

  heroVisual.addEventListener("pointerleave", () => {
    tx = 0;
    ty = 0;
  });

  const loop = () => {
    cx += (tx - cx) * 0.08;
    cy += (ty - cy) * 0.08;

    parallaxItems.forEach((item) => {
      const depth = Number(item.dataset.depth || 0.15);
      item.style.translate = `${cx * depth * 18}px ${cy * depth * 12}px`;
    });

    requestAnimationFrame(loop);
  };

  requestAnimationFrame(loop);
}

/* Discover */
const projectGrid = document.getElementById("projectGrid");
const discoverInput = document.getElementById("discoverInput");
const discoverForm = document.getElementById("discoverForm");
const discoverLabel = document.getElementById("discoverLabel");
const tabs = [...document.querySelectorAll(".tab")];
let activeType = "mod";
let currentQuery = "";

const defaultQueries = {
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
  return new Intl.NumberFormat(currentLang, {
    notation: "compact",
    maximumFractionDigits: 1
  }).format(Number(value) || 0);
}

function updateDiscoverLabel() {
  if (!discoverLabel) return;
  const t = I18N[currentLang];
  if (currentQuery) {
    discoverLabel.textContent = `${t.discoverSearchButton}: ${currentQuery}`;
  } else {
    const typeName =
      activeType === "mod" ? t.tabMods :
      activeType === "modpack" ? t.tabModpacks :
      activeType === "resourcepack" ? t.tabResourcePacks :
      t.tabShaders;
    discoverLabel.textContent = `${t.discoverFeatured} ${typeName}`;
  }
}

function setSkeletons() {
  if (projectGrid) {
    projectGrid.innerHTML = '<article class="project-card skeleton"></article>'.repeat(4);
  }
}

function projectUrl(hit) {
  return `https://modrinth.com/${hit.project_type}/${hit.slug}`;
}

function projectCard(hit) {
  const t = I18N[currentLang];
  const title = esc(hit.title || "Minecraft Project");
  const icon = hit.icon_url
    ? `<img src="${esc(hit.icon_url)}" alt="" loading="lazy">`
    : `<div class="project-fallback">${esc(title.slice(0,1))}</div>`;
  const tags = Array.isArray(hit.categories) ? hit.categories.slice(0, 3) : [];

  return `
    <article class="project-card">
      <div class="project-image">${icon}</div>
      <div class="project-body">
        <strong>${title}</strong>
        <div class="project-meta">${compact(hit.downloads)} ${t.discoverDownloads} · Modrinth</div>
        <p class="project-desc">${esc(hit.description || "Public project preview.")}</p>
        <div class="project-tags">${tags.map((tag) => `<span>${esc(tag)}</span>`).join("")}</div>
        <a class="project-link" href="${projectUrl(hit)}" target="_blank" rel="noreferrer">${t.discoverView}</a>
      </div>
    </article>
  `;
}

async function loadProjects(type, query = "") {
  activeType = type;
  currentQuery = query;
  updateDiscoverLabel();
  setSkeletons();

  const facets = encodeURIComponent(JSON.stringify([[`project_type:${type}`]]));
  const q = encodeURIComponent(query || defaultQueries[type] || "");
  const url = `https://api.modrinth.com/v2/search?query=${q}&limit=4&index=downloads&facets=${facets}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("request failed");
    const data = await response.json();
    if (!data.hits?.length) throw new Error("no results");
    projectGrid.innerHTML = data.hits.map(projectCard).join("");
  } catch {
    const t = I18N[currentLang];
    projectGrid.innerHTML = `
      <article class="project-card">
        <div class="project-image"><div class="project-fallback">!</div></div>
        <div class="project-body">
          <strong>${t.discoverUnavailable}</strong>
          <div class="project-meta">${t.discoverUnavailableMeta}</div>
          <p class="project-desc">${t.discoverUnavailableText}</p>
        </div>
      </article>
    `;
  }
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    if (discoverInput) discoverInput.value = "";
    loadProjects(tab.dataset.type, "");
  });
});

discoverForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  loadProjects(activeType, discoverInput?.value.trim() || "");
});

/* Studio — skin appears once, only here */
const studioStage = document.getElementById("studioStage");
const studioTabs = [...document.querySelectorAll(".studio-tab")];
let activeStudio = "skin";

function renderStudio(key) {
  activeStudio = key;
  const copy = I18N[currentLang].studio[key];
  if (!studioStage || !copy) return;

  const demos = {
    skin: `
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
          <span>${copy.active}</span>
          <strong>${copy.uploaded}</strong>
          <small>${copy.once}</small>
          <div class="swatches">
            <i style="--c:#f0b399"></i>
            <i style="--c:#57dfe6"></i>
            <i style="--c:#2d2e42"></i>
            <i style="--c:#8d75ff"></i>
            <i style="--c:#7d5f46"></i>
            <i style="--c:#ffffff"></i>
          </div>
        </div>
      </div>`,
    texture: `
      <div class="stage-demo texture-layout">
        <div class="vertical-tools">
          <span class="tool active">✎</span>
          <span class="tool">◇</span>
          <span class="tool">▣</span>
          <span class="tool">⌁</span>
          <span class="tool">?</span>
        </div>
        <div class="skin-canvas">
          <div class="texture-grid">${"<i></i>".repeat(256)}</div>
        </div>
      </div>`,
    hud: `
      <div class="stage-demo hud-demo">
        <div class="hud-box a">FPS 241</div>
        <div class="hud-box b">XYZ 128 / 69 / -41</div>
        <div class="hud-keys"><i></i><i></i><i></i><i></i></div>
      </div>`,
    theme: `
      <div class="stage-demo theme-layout">
        <div class="theme-card">
          <div class="theme-title"></div>
          <div class="theme-line"></div>
          <div class="theme-line short"></div>
          <div class="theme-btn"></div>
        </div>
        <div class="theme-controls"><i></i><i></i><i></i><i></i><i></i></div>
      </div>`
  };

  studioStage.innerHTML = `
    <div class="stage-copy">
      <span class="eyebrow">${copy.eyebrow}</span>
      <h3>${copy.title}</h3>
      <p>${copy.text}</p>
      <div class="help-chip"><b>?</b>${copy.help}</div>
    </div>
    ${demos[key]}
  `;
}

studioTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    studioTabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    renderStudio(tab.dataset.studio);
  });
});

setLanguage(currentLang);
loadProjects("mod", "");
