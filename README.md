# Perfect Client Website

Upload these files to your GitHub repository and connect it to Cloudflare Pages.

## Add your real logo
Place your actual logo in the repository root as:

`logo.png`

If it is missing temporarily, the site uses a clean geometric fallback instead of a broken-image icon.

## Configure GitHub / release links
Open `app.js` and edit:

```js
const SITE_CONFIG = {
  githubUrl: "",
  releaseUrl: ""
};
```

Example:

```js
const SITE_CONFIG = {
  githubUrl: "https://github.com/YOURNAME/YOURREPO",
  releaseUrl: "https://github.com/YOURNAME/YOURREPO/releases/latest"
};
```

Until `releaseUrl` is set, the site honestly shows "Windows build in development".

## Cloudflare Pages
- Framework preset: None
- Build command: leave empty
- Build output directory: `.`
- Root directory: `/`

The page uses MCHeads character renders and public Modrinth API data for the Discover preview.
