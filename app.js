
const CONFIG = {
  releaseUrl: ""
};

const I18N = {
  de: {
    pageTitle: "Perfect Client — Ein Launcher. Alles an seinem Platz.",
    pageDescription: "Perfect Client — ein moderner Minecraft Launcher für Java und Bedrock mit Profilen, Discover und Creator-Tools.",
    navProfiles:"Profile",navDiscover:"Discover",navStudio:"Studio",navEditions:"Java + Bedrock",navDownload:"Download",
    heroBrand:"HIER IST PERFECT CLIENT",
    heroTitleA:"Ein Launcher.",heroTitleB:"Alles an seinem Platz.",
    heroLead:"Perfect Client bringt Java und Bedrock, Profile, Mods, Packs, Shader und Creator-Tools in eine Oberfläche, die schnell verständlich bleibt.",
    heroPrimary:"Perfect Client entdecken",heroSecondary:"Windows-Download",
    proofEdition:"in einem Launcher",proofDiscover:"echte Projekte",proofStudio:"direkt integriert",
    floatProfileTitle:"Perfekte Profile",floatProfileText:"Jedes Setup bleibt sauber getrennt.",floatStudioText:"Erstellen statt nur installieren.",
    statementEyebrow:"DAS IST PERFECT CLIENT",
    statementTitle:"Minecraft starten sollte nicht kompliziert sein.",
    statementLead:"Profile verwalten, Content finden, Updates prüfen und eigene Designs erstellen: Perfect Client bündelt die wichtigsten Aufgaben, ohne dass die Oberfläche überladen wirkt.",
    profilesEyebrow:"PROFILE",profilesTitle:"Ein Profil ist dein komplettes Setup.",
    profilesLead:"Edition, Version, Loader, Mods, Packs, Shader und Welten bleiben dort, wo sie hingehören. Wechsel zwischen PvP, Survival oder Modpacks, ohne dein Minecraft jedes Mal neu aufzubauen.",
    profileFeature1:"Java- und Bedrock-Profile mit passenden Funktionen",profileFeature2:"Updates direkt dem richtigen Profil zuordnen",profileFeature3:"Mods, Packs, Shader und Welten übersichtlich verwalten",
    profileAll:"ALLE",play:"Spielen",settings:"Einstellungen",bedrockProfileMeta:"Bedrock · 5 Add-Ons · 2 Packs",
    discoverTitle:"Content finden, der zu deinem Profil passt.",
    discoverLead:"Durchsuche öffentliche Modrinth-Projekte direkt auf der Website. Mods, Modpacks, Resource Packs und Shader – mit echten Projektdaten statt Demo-Inhalten.",
    tabMods:"Mods",tabShaders:"Shader",searchPlaceholder:"Modrinth durchsuchen...",search:"Suchen",liveData:"ÖFFENTLICHE LIVE-DATEN",
    featured:"Empfohlene",downloads:"Downloads",viewProject:"Projekt ansehen →",
    unavailableTitle:"Discover-Vorschau nicht verfügbar",unavailableMeta:"Modrinth konnte nicht erreicht werden",unavailableText:"Die Website funktioniert weiter. Sobald die öffentliche API wieder erreichbar ist, erscheinen hier wieder echte Projekte.",
    studioTitle:"Nicht nur installieren. Selbst gestalten.",
    studioLead:"Perfect Studio gibt dir Werkzeuge für Skins, Texturen, HUD-Layouts und Themes. Dein Skin erscheint auf dieser Website genau einmal – in der Skin-Studio-Vorschau.",
    skinSmall:"Malen · Vorschau · Speichern",textureSmall:"Pixel · Packs · Export",hudSmall:"Ziehen · Einrasten · Presets",themeSmall:"Akzent · Radius · Bewegung",
    editionsTitle:"Ein Launcher. Zwei Editionen. Keine Verwechslung.",
    editionsLead:"Java und Bedrock leben im selben Perfect Client, bekommen aber jeweils die Werkzeuge, Inhalte und Einstellungen, die wirklich zu ihrer Edition passen.",
    javaTitle:"Versionen, Loader, Mods und Shader.",javaLead:"Fabric, Forge, NeoForge, Modpacks, Datapacks und Shader – klar dem Java-Profil zugeordnet.",
    bedrockTitle:"Add-Ons, Packs, Welten und Backups.",bedrockLead:"Bedrock zeigt dir nur die Inhalte, die dort wirklich funktionieren – ohne Java-Menüs dazwischen.",worlds:"Welten",
    downloadEyebrow:"PERFECT CLIENT FÜR WINDOWS",downloadTitle:"Hier beginnt Perfect Client.",
    downloadLead:"Die Website ist bereit für den Release. Sobald der erste echte Windows-Installer veröffentlicht ist, führt dieser Button direkt zum neuesten Perfect-Client-Release.",
    downloadButton:"Windows-Installer folgt",downloadActive:"Perfect Client für Windows herunterladen",releaseSite:"Release-Website online",
    disclaimer:"Nicht mit Mojang Studios oder Microsoft verbunden.",
    studio:{
      skin:{eyebrow:"SKIN STUDIO",title:"Dein Skin. Genau eine Vorschau.",text:"Hier siehst du deinen Skin genau dort, wo er hingehört: im Skin Studio. Auf der restlichen Website wird kein weiterer Skin dargestellt.",help:"Brauchst du Hilfe? Jedes Studio-Tool erklärt seine wichtigsten Funktionen direkt im Client.",active:"AKTIVE VORSCHAU",name:"Vexo Skin",meta:"Classic · 64×64"},
      texture:{eyebrow:"TEXTURE STUDIO",title:"Vom Pixel zum eigenen Resource Pack.",text:"Bearbeite Minecraft-Texturen in einem fokussierten Pixel-Editor und exportiere daraus ein sauberes Resource Pack.",help:"Brauchst du Hilfe? Jedes Studio-Tool erklärt seine wichtigsten Funktionen direkt im Client."},
      hud:{eyebrow:"HUD STUDIO",title:"Dein HUD genau dort, wo du es willst.",text:"Ordne FPS, Koordinaten, Keystrokes und weitere Widgets mit Raster, Snap-Hilfen und Presets an.",help:"Brauchst du Hilfe? Jedes Studio-Tool erklärt seine wichtigsten Funktionen direkt im Client."},
      theme:{eyebrow:"THEME STUDIO",title:"Perfect Client soll auch optisch zu dir passen.",text:"Passe Akzentfarben, Oberflächen, Rundungen und Bewegung an und sieh Änderungen direkt in der Vorschau.",help:"Brauchst du Hilfe? Jedes Studio-Tool erklärt seine wichtigsten Funktionen direkt im Client."}
    }
  },
  en: {
    pageTitle:"Perfect Client — One launcher. Everything in its place.",
    pageDescription:"Perfect Client — a modern Minecraft launcher for Java and Bedrock with profiles, discovery and creator tools.",
    navProfiles:"Profiles",navDiscover:"Discover",navStudio:"Studio",navEditions:"Java + Bedrock",navDownload:"Download",
    heroBrand:"THIS IS PERFECT CLIENT",
    heroTitleA:"One launcher.",heroTitleB:"Everything in its place.",
    heroLead:"Perfect Client brings Java and Bedrock, profiles, mods, packs, shaders and creator tools into one interface that stays easy to understand.",
    heroPrimary:"Explore Perfect Client",heroSecondary:"Windows download",
    proofEdition:"in one launcher",proofDiscover:"real projects",proofStudio:"built right in",
    floatProfileTitle:"Clean profiles",floatProfileText:"Every setup stays separate.",floatStudioText:"Create instead of only installing.",
    statementEyebrow:"THIS IS PERFECT CLIENT",
    statementTitle:"Launching Minecraft should not feel complicated.",
    statementLead:"Manage profiles, discover content, check updates and create your own designs: Perfect Client brings the important tasks together without turning the interface into clutter.",
    profilesEyebrow:"PROFILES",profilesTitle:"A profile is your complete setup.",
    profilesLead:"Edition, version, loader, mods, packs, shaders and worlds stay where they belong. Switch between PvP, survival or modpacks without rebuilding Minecraft every time.",
    profileFeature1:"Java and Bedrock profiles with the right tools",profileFeature2:"Updates matched to the correct profile",profileFeature3:"Mods, packs, shaders and worlds kept organized",
    profileAll:"ALL",play:"Play",settings:"Settings",bedrockProfileMeta:"Bedrock · 5 Add-Ons · 2 Packs",
    discoverTitle:"Find content that actually fits your profile.",
    discoverLead:"Search public Modrinth projects directly from the website. Mods, modpacks, resource packs and shaders — using real project data instead of demo content.",
    tabMods:"Mods",tabShaders:"Shaders",searchPlaceholder:"Search Modrinth...",search:"Search",liveData:"PUBLIC LIVE DATA",
    featured:"Featured",downloads:"downloads",viewProject:"View project →",
    unavailableTitle:"Discover preview unavailable",unavailableMeta:"Modrinth could not be reached",unavailableText:"The website still works. Real projects will appear here again when the public API is reachable.",
    studioTitle:"Don't just install. Create.",
    studioLead:"Perfect Studio gives you tools for skins, textures, HUD layouts and themes. Your skin appears exactly once on this website — inside the Skin Studio preview.",
    skinSmall:"Paint · Preview · Save",textureSmall:"Pixels · Packs · Export",hudSmall:"Drag · Snap · Presets",themeSmall:"Accent · Radius · Motion",
    editionsTitle:"One launcher. Two editions. No confusion.",
    editionsLead:"Java and Bedrock live inside the same Perfect Client, but each gets the tools, content and settings that actually make sense for that edition.",
    javaTitle:"Versions, loaders, mods and shaders.",javaLead:"Fabric, Forge, NeoForge, modpacks, datapacks and shaders — clearly assigned to the Java profile.",
    bedrockTitle:"Add-Ons, packs, worlds and backups.",bedrockLead:"Bedrock only shows content that actually works there, without Java-only menus getting in the way.",worlds:"Worlds",
    downloadEyebrow:"PERFECT CLIENT FOR WINDOWS",downloadTitle:"Perfect Client starts here.",
    downloadLead:"The website is ready to launch. As soon as the first real Windows installer is published, this button will lead directly to the latest Perfect Client release.",
    downloadButton:"Windows installer coming with the first client release",downloadActive:"Download Perfect Client for Windows",releaseSite:"Release website online",
    disclaimer:"Not affiliated with Mojang Studios or Microsoft.",
    studio:{
      skin:{eyebrow:"SKIN STUDIO",title:"Your skin. One preview.",text:"Your skin appears exactly where it belongs: inside Skin Studio. No other skin is shown anywhere else on the website.",help:"Need help? Every Studio tool explains its key functions directly inside the client.",active:"ACTIVE PREVIEW",name:"Vexo Skin",meta:"Classic · 64×64"},
      texture:{eyebrow:"TEXTURE STUDIO",title:"Turn pixels into your own resource pack.",text:"Edit Minecraft textures in a focused pixel editor and export them as a clean resource pack.",help:"Need help? Every Studio tool explains its key functions directly inside the client."},
      hud:{eyebrow:"HUD STUDIO",title:"Put your HUD exactly where you want it.",text:"Arrange FPS, coordinates, keystrokes and other widgets with grids, snapping and presets.",help:"Need help? Every Studio tool explains its key functions directly inside the client."},
      theme:{eyebrow:"THEME STUDIO",title:"Make Perfect Client look like yours.",text:"Tune accent colors, surfaces, corner radius and motion while every change updates in the preview.",help:"Need help? Every Studio tool explains its key functions directly inside the client."}
    }
  }
};

const params = new URLSearchParams(location.search);
let currentLang = params.get("lang");
if (!I18N[currentLang]) {
  currentLang = navigator.language?.toLowerCase().startsWith("de") ? "de" : "en";
}

const siteHeader = document.getElementById("siteHeader");
const scrollProgress = document.getElementById("scrollProgress");
const languageControl = document.querySelector(".language-control");
const languageButton = document.getElementById("languageButton");
const languageMenu = document.getElementById("languageMenu");
const languageLabel = document.getElementById("languageLabel");
const releaseButton = document.getElementById("releaseButton");

function updateScroll(){
  const y = window.scrollY;
  siteHeader?.classList.toggle("scrolled", y > 14);
  const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
  if (scrollProgress) scrollProgress.style.width = `${Math.min(100,(y/max)*100)}%`;
}
addEventListener("scroll",updateScroll,{passive:true});
updateScroll();

languageButton?.addEventListener("click",()=>{
  const open = languageControl.classList.toggle("open");
  languageButton.setAttribute("aria-expanded", String(open));
});
document.addEventListener("click",(event)=>{
  if (!languageControl?.contains(event.target)) {
    languageControl?.classList.remove("open");
    languageButton?.setAttribute("aria-expanded","false");
  }
});

function setLanguage(lang, updateUrl=true){
  if (!I18N[lang]) return;
  currentLang = lang;
  const t = I18N[lang];
  document.documentElement.lang = lang;
  document.title = t.pageTitle;
  document.querySelector('meta[name="description"]')?.setAttribute("content",t.pageDescription);

  document.querySelectorAll("[data-i18n]").forEach((el)=>{
    const key = el.dataset.i18n;
    if (t[key] != null) el.textContent = t[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el)=>{
    const key = el.dataset.i18nPlaceholder;
    if (t[key] != null) el.placeholder = t[key];
  });
  languageLabel.textContent = lang.toUpperCase();
  document.querySelectorAll("[data-lang]").forEach((btn)=>btn.classList.toggle("active",btn.dataset.lang===lang));

  if (releaseButton) {
    releaseButton.textContent = CONFIG.releaseUrl ? t.downloadActive : t.downloadButton;
  }

  renderStudio(activeStudio);
  renderDiscoverLabel();

  if (updateUrl) {
    const url = new URL(location.href);
    url.searchParams.set("lang",lang);
    history.replaceState({}, "", url);
  }
}

document.querySelectorAll("[data-lang]").forEach((button)=>{
  button.addEventListener("click",()=>{
    setLanguage(button.dataset.lang);
    languageControl.classList.remove("open");
    languageButton.setAttribute("aria-expanded","false");
  });
});

if (CONFIG.releaseUrl && releaseButton) {
  releaseButton.href = CONFIG.releaseUrl;
  releaseButton.classList.remove("disabled");
  releaseButton.removeAttribute("aria-disabled");
}

/* smooth pointer glow */
const cursorGlow = document.getElementById("cursorGlow");
let tx=innerWidth/2,ty=innerHeight/2,cx=tx,cy=ty;
addEventListener("pointermove",(e)=>{tx=e.clientX;ty=e.clientY},{passive:true});
function glowLoop(){
  cx+=(tx-cx)*.08;cy+=(ty-cy)*.08;
  if(cursorGlow) cursorGlow.style.transform=`translate(${cx-215}px,${cy-215}px)`;
  requestAnimationFrame(glowLoop);
}
requestAnimationFrame(glowLoop);

/* reveal */
const observer=new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}
  });
},{threshold:.1});
document.querySelectorAll(".reveal").forEach((el)=>observer.observe(el));

/* hero parallax */
const heroProduct=document.getElementById("heroProduct");
const parallaxItems=heroProduct?[...heroProduct.querySelectorAll(".parallax")]:[];
if(heroProduct && matchMedia("(pointer:fine)").matches && !matchMedia("(prefers-reduced-motion: reduce)").matches){
  let px=0,py=0,sx=0,sy=0;
  heroProduct.addEventListener("pointermove",(e)=>{
    const r=heroProduct.getBoundingClientRect();
    px=((e.clientX-r.left)/r.width-.5)*2;
    py=((e.clientY-r.top)/r.height-.5)*2;
  });
  heroProduct.addEventListener("pointerleave",()=>{px=0;py=0});
  const loop=()=>{
    sx+=(px-sx)*.08;sy+=(py-sy)*.08;
    parallaxItems.forEach((item)=>{
      const d=Number(item.dataset.depth||.1);
      item.style.translate=`${sx*d*18}px ${sy*d*12}px`;
    });
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
}

/* Discover */
const projectGrid=document.getElementById("projectGrid");
const discoverForm=document.getElementById("discoverForm");
const discoverInput=document.getElementById("discoverInput");
const discoverLabel=document.getElementById("discoverLabel");
const discoverTabs=[...document.querySelectorAll(".discover-tab")];
let activeType="mod";
let activeQuery="";
const defaultQueries={mod:"performance",modpack:"adventure",resourcepack:"vanilla",shader:"shader"};

function esc(v=""){return String(v).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}
function compact(v){return new Intl.NumberFormat(currentLang,{notation:"compact",maximumFractionDigits:1}).format(Number(v)||0)}
function renderDiscoverLabel(){
  if(!discoverLabel)return;
  const t=I18N[currentLang];
  const typeName=activeType==="mod"?t.tabMods:activeType==="shader"?t.tabShaders:activeType==="modpack"?"Modpacks":"Resource Packs";
  discoverLabel.textContent=activeQuery?`${t.search}: ${activeQuery}`:`${t.featured} ${typeName}`;
}
function skeletons(){if(projectGrid)projectGrid.innerHTML='<article class="project-card skeleton"></article>'.repeat(4)}
function projectUrl(p){return `https://modrinth.com/${p.project_type}/${p.slug}`}
function projectCard(p){
  const t=I18N[currentLang];
  const title=esc(p.title||"Minecraft Project");
  const icon=p.icon_url?`<img src="${esc(p.icon_url)}" alt="" loading="lazy">`:`<div class="project-fallback">${esc(title.slice(0,1))}</div>`;
  const tags=Array.isArray(p.categories)?p.categories.slice(0,3):[];
  return `<article class="project-card">
    <div class="project-image">${icon}</div>
    <div class="project-body">
      <strong>${title}</strong>
      <div class="project-meta">${compact(p.downloads)} ${t.downloads} · Modrinth</div>
      <p class="project-desc">${esc(p.description||"Minecraft project")}</p>
      <div class="project-tags">${tags.map((x)=>`<span>${esc(x)}</span>`).join("")}</div>
      <a class="project-link" href="${projectUrl(p)}" target="_blank" rel="noreferrer">${t.viewProject}</a>
    </div>
  </article>`;
}
async function loadProjects(type,query=""){
  activeType=type;activeQuery=query;renderDiscoverLabel();skeletons();
  const facets=encodeURIComponent(JSON.stringify([[`project_type:${type}`]]));
  const q=encodeURIComponent(query||defaultQueries[type]||"");
  const url=`https://api.modrinth.com/v2/search?query=${q}&limit=4&index=downloads&facets=${facets}`;
  try{
    const res=await fetch(url);
    if(!res.ok)throw new Error();
    const data=await res.json();
    if(!data.hits?.length)throw new Error();
    projectGrid.innerHTML=data.hits.map(projectCard).join("");
  }catch{
    const t=I18N[currentLang];
    projectGrid.innerHTML=`<article class="project-card">
      <div class="project-image"><div class="project-fallback">!</div></div>
      <div class="project-body"><strong>${t.unavailableTitle}</strong><div class="project-meta">${t.unavailableMeta}</div><p class="project-desc">${t.unavailableText}</p></div>
    </article>`;
  }
}
discoverTabs.forEach((tab)=>tab.addEventListener("click",()=>{
  discoverTabs.forEach((x)=>x.classList.remove("active"));tab.classList.add("active");
  discoverInput.value="";loadProjects(tab.dataset.type,"");
}));
discoverForm?.addEventListener("submit",(e)=>{e.preventDefault();loadProjects(activeType,discoverInput.value.trim())});

/* Studio — the only skin reference in the whole site */
const studioContent=document.getElementById("studioContent");
const studioTabs=[...document.querySelectorAll(".studio-tab")];
let activeStudio="skin";
function renderStudio(key){
  activeStudio=key;
  const t=I18N[currentLang].studio[key];
  if(!studioContent||!t)return;
  const demos={
    skin:`<div class="studio-demo skin-demo">
      <div class="tool-column"><span class="tool active">✎</span><span class="tool">◇</span><span class="tool">▣</span><span class="tool">↶</span><span class="tool">?</span></div>
      <div class="skin-canvas"><img src="/assets/studio-skin-v6.png" alt="Vexo Minecraft skin preview"></div>
      <div class="skin-side"><span>${t.active}</span><strong>${t.name}</strong><small>${t.meta}</small><div class="palette"><i style="--c:#e8c8bb"></i><i style="--c:#31374d"></i><i style="--c:#151820"></i><i style="--c:#7384a5"></i><i style="--c:#a19086"></i><i style="--c:#fff"></i></div></div>
    </div>`,
    texture:`<div class="studio-demo texture-demo"><div class="tool-column"><span class="tool active">✎</span><span class="tool">◇</span><span class="tool">▣</span><span class="tool">⌁</span><span class="tool">?</span></div><div class="skin-canvas"><div class="texture-grid">${"<i></i>".repeat(256)}</div></div></div>`,
    hud:`<div class="studio-demo hud-demo"><div class="hud-widget fps">FPS 248</div><div class="hud-widget coords">XYZ 128 / 72 / -43</div><div class="hud-keys"><i></i><i></i><i></i><i></i></div></div>`,
    theme:`<div class="studio-demo theme-demo"><div class="theme-card"><div class="theme-title"></div><div class="theme-line"></div><div class="theme-line short"></div><div class="theme-button"></div></div><div class="theme-controls"><i></i><i></i><i></i><i></i><i></i></div></div>`
  };
  studioContent.innerHTML=`<div class="studio-copy"><span class="eyebrow">${t.eyebrow}</span><h3>${t.title}</h3><p>${t.text}</p><div class="help-chip"><b>?</b>${t.help}</div></div>${demos[key]}`;
}
studioTabs.forEach((tab)=>tab.addEventListener("click",()=>{
  studioTabs.forEach((x)=>x.classList.remove("active"));tab.classList.add("active");renderStudio(tab.dataset.studio);
}));

setLanguage(currentLang,false);
loadProjects("mod","");
