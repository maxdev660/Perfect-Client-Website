# Perfect Client — Ultra Website

This is a static, GitHub + Cloudflare Pages-ready website.

## Files
- `index.html`
- `styles.css`
- `app.js`
- `assets/hero-terrain.svg`
- `assets/brand-fallback.svg`
- `assets/social-card.svg`
- `_headers`
- `wrangler.toml`
- `404.html`
- `robots.txt`

## Add your real logo
Put your real Perfect Client logo in the repository root as:

`logo.png`

If it is missing, the site automatically uses `assets/brand-fallback.svg` instead of showing a broken-image icon.

## Add GitHub / release links
Open `app.js` and edit:

```js
const CONFIG = {
  githubUrl: "",
  releaseUrl: ""
};
```

Example:

```js
const CONFIG = {
  githubUrl: "https://github.com/YOURNAME/YOURREPO",
  releaseUrl: "https://github.com/YOURNAME/YOURREPO/releases/latest"
};
```

Until `releaseUrl` exists, the page honestly says that the Windows build is in development.

## Cloudflare Pages
- Framework preset: None
- Build command: leave empty
- Build output directory: `.`
- Root directory: `/`

## External data
- Minecraft character renders: MCHeads
- Discover preview: public Modrinth API

The public website does not collect Microsoft/Minecraft credentials.
