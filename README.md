# Perfect Client Website — DE / EN

This package is ready for GitHub + Cloudflare Pages.

## What changed
- Real `logo.png` is included in the package.
- Logo is used in the header, download area and footer.
- German / English switch in the header.
- Language choice is saved with `localStorage`.
- German is selected automatically when the browser language starts with `de`; otherwise English.
- Copy was rewritten to sound more natural and product-focused.
- The uploaded skin is still used exactly once, only in Skin Studio.

## Release link
Edit at the top of `app.js`:

```js
const CONFIG = {
  githubUrl: "",
  releaseUrl: ""
};
```

When `releaseUrl` is filled in, the Windows button automatically becomes active.

## Cloudflare Pages
- Framework preset: None
- Build command: leave empty
- Build output directory: `.`
- Root directory: `/`
