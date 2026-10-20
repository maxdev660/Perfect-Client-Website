# Perfect Client — Release Website v6

This build is designed for the live Cloudflare Pages site:
https://perfect-client-website.pages.dev/

## What makes this release-ready
- Real Perfect Client logo included as a versioned asset
- Strong Perfect Client branding in header, hero, brand statement, download area and footer
- German / English language menu in the top-right
- Language uses `?lang=de` or `?lang=en` instead of localStorage
- No visible "local-first" marketing copy
- Exactly one Minecraft skin reference, only inside Skin Studio
- Real public Modrinth Discover data
- Responsive desktop/mobile design
- SEO metadata, canonical URL, sitemap, robots.txt and social card
- Cloudflare security headers
- HTML/CSS/JS are explicitly no-cache so desktop users do not stay stuck on an old deploy
- Versioned static images can be cached safely for one year

## Windows release button
At the top of `app.js`:

```js
const CONFIG = {
  releaseUrl: ""
};
```

When the installer exists, set `releaseUrl` to the real release URL.
The button becomes active automatically.

## Cloudflare Pages
- Framework preset: None
- Build command: empty
- Build output directory: `.`
