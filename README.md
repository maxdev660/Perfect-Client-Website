# Perfect Client — One Skin Website

A completely new static website concept for GitHub + Cloudflare Pages.

## Main rule implemented
The website uses **one skin only once**.

- File: `assets/vexo-skin.png`
- Usage: shown only in the **Skin Studio** preview
- Nowhere else on the site are skins/characters rendered

## Files
- `index.html`
- `styles.css`
- `app.js`
- `404.html`
- `_headers`
- `robots.txt`
- `wrangler.toml`
- `assets/brand.svg`
- `assets/social-card.svg`
- `assets/vexo-skin.png`

## Optional logo
If you want your real logo, place `logo.png` in the site root.
If it does not exist, the site automatically falls back to `assets/brand.svg`.

## GitHub / Release links
At the top of `app.js`:

```js
const CONFIG = {
  githubUrl: "",
  releaseUrl: ""
};
```

When `releaseUrl` is filled in, the download button becomes active automatically.

## Cloudflare Pages
- Framework preset: None
- Build command: leave empty
- Build output directory: `.`
