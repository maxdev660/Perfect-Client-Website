# Perfect Client Premium Website

A complete static landing page for GitHub + Cloudflare Pages.

## Important
This rebuild deliberately uses **no Minecraft skins anywhere except the Skin Studio preview**.
The provided `Vexo.png` skin is bundled as:

- `assets/vexo-skin.png`
- `assets/vexo-preview.png`

It is referenced only by the Studio skin tab.

## Add your real Perfect Client logo
Place your logo in the repository root as:

`logo.png`

If it is missing, the site automatically falls back to `assets/brand.svg`.

## GitHub + release links
Edit the top of `app.js`:

```js
const CONFIG = {
  githubUrl: "",
  releaseUrl: ""
};
```

When `releaseUrl` is present, the CTA automatically becomes **Download for Windows**.

## Cloudflare Pages
- Framework preset: None
- Build command: leave empty
- Build output directory: `.`
- Root directory: `/`

## Included
- responsive high-resolution vector artwork
- smooth reveal / parallax / pointer glow
- profile marketing section without skins
- real Modrinth search + project artwork
- interactive Perfect Studio
- Java + Bedrock section without skins
- 404 page
- Cloudflare security headers
