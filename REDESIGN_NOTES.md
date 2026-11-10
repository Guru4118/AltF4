# AltF4 Studios UI refresh

## What changed
- Replaced the previous orange theme with the selected Forest & Sage palette: Forest `#245849`, Sage `#75A48C`, Dark Ink `#18392F`, Background `#F4F7F2`, and Pale Surface `#DFE9DF`.
- Updated the global design tokens, typography, selection styles, background texture, and reduced-motion handling.
- Refreshed the logo into a four-block exit-inspired mark and updated the browser title, description, theme colour, and favicon.
- Redesigned the hero, services, portfolio concept cards, principles strip, contact form, and footer.
- Added reusable Technology and Why AltF4 sections.
- Updated navigation to include Technology and removed placeholder social/privacy links.
- Replaced unverifiable homepage statistics with studio principles.

## Before publishing
- Confirm `hello@altf4studios.in` is an active mailbox. It was previously discussed as the intended contact address, but should be verified before launch.
- The contact form currently opens the visitor's email application with a prefilled message (`mailto:`); it does not submit to a server.
- Portfolio previews are illustrative concept work and are labelled as such.

## Validation
A production build could not be run in this environment because npm dependencies were not available in the local cache and registry installation timed out. On your machine, run:

```bash
npm ci
npm run build
npm run dev
```
