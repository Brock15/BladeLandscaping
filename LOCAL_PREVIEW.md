# Blade Landscaping — local review

## Open the website

The development preview runs at **http://127.0.0.1:3000**. Open that address in your browser. The homepage is also open in the Codex browser pane.

If the server has been stopped, run these commands from the existing project:

```sh
cd /Users/brock/bladelandscaping
npm run dev -- --hostname 127.0.0.1
```

Use the Local address actually printed by Next.js if port 3000 is occupied.

The redesign was developed and tested locally. On November 10, 2026, the owner explicitly authorized committing and pushing the completed website changes. No production database, CRM, business listing, DNS record, or external account has been changed directly.

## Latest homepage adjustments

- Removed the three-image crew collage and its floating Owner-Operated badge.
- Reduced the owner introduction to a compact panel with small portraits; Brock and Jackson's introduction paragraph is preserved.
- Restored the dark review carousel and all 11 previously published review/testimonial entries. Entries without a provider source are labeled customer testimonials, rather than Google reviews.
- Added three newer Google entries (William Rupley, Viki Coumbe, and Jackson Phillips), with direct source links. Jackson Peltier is excluded. Viki's longer review uses a clearly marked excerpt with a full-review link.
- Restored the owner's 47+ overall reviews/recommendations badge. Google independently showed 9 reviews and a 5.0 rating when checked on November 10, 2026; the 47+ badge is not presented as a Google-only total.
- Added three AI-generated service concept images in `public/media/inspiration/`. At the owner's request, the image badges and the illustrative-service caption are removed. These images remain service illustrations, outside the completed-work gallery.
- Removed the homepage “Our Work Speaks for Itself” section and centered the compact owner introduction.
- The original colors, typography, hero, and rounded design remain in place.

Generation prompts, provenance, and exact saved image paths are in `docs/ai-design-concepts.md`.

## Design and positioning

The original green and charcoal palette, Geist typography, centered hero, pill-shaped buttons, rounded cards, gradients, navigation, and owner photographs are retained. The earlier replacement visual system was removed.

- Replaced student ownership, student pricing, and school funding messaging with local ownership, owner involvement, clear scopes, and property improvements.
- Kept the recognizable “Transform Your Outdoor Space” headline.
- Reworked the hero spacing, mobile button sizing, service emphasis, and scroll indicator clearance.
- Replaced unsupported numerical hero claims with factual descriptions of the customer experience.
- Put landscape installation first in the existing video service cards.
- Added matching project cards and a commercial inquiry section. The four-step process remains on the dedicated service pages.
- Restored the original review/testimonial records and added the requested newer Google feedback. Named commercial-client endorsements remain excluded.
- Updated About, Contact, Services, and footer copy to match the positioning.

## Pages

Existing routes remain available: `/`, `/services`, `/gallery`, `/about`, `/contact`, and `/reviews`.

Added service pages:

- `/services/landscape-installation`
- `/services/landscape-renovations`
- `/services/hardscaping-outdoor-living`
- `/services/drainage-grading`
- `/services/rock-stone-landscaping`
- `/services/commercial-landscaping`

Each service page uses the original design language and includes a distinct scope explanation, project types, questions, process, and inquiry link. Hardscaping and drainage content is framed around evaluating the actual project, without invented structural experience, engineering services, or credentials. Commercial links preserve the commercial inquiry context.

## Media audit and reuse

Inventoried 57 original media assets, including the app icons. Visually inspected usable images and three representative frames from each usable video. Nine files are empty and one JPEG is unreadable. Original assets were preserved, including unusable and duplicate files.

The internal inventory and contact sheets are in `.local-preview/media-audit/`. Run `node scripts/audit-media.mjs` on this Mac to regenerate them; the video inspection helper uses macOS AVFoundation. These audit tools are not needed to run the website.

Eleven optimized WebP copies are in `public/media/optimized/`:

| Copy | Existing source | Use |
| --- | --- | --- |
| `landscape-hero.webp` | Completed rock-bed installation video | Featured work and renovation page; not a replacement homepage hero |
| `commercial.webp` | Commercial installation video | Featured work, service previews, commercial page |
| `sod.webp` | Sod installation video | Sod preview poster |
| `preparation.webp` | Material-removal video | Property preparation preview poster |
| `crew-work.webp` | Existing mulching video | Crew collage and service preview |
| `planting.webp` | Existing planting photograph | Installation page |
| `stone-detail.webp` | Existing customer stone photograph | Rock and stone page |
| `owner-brock.webp` | Existing Brock portrait | Owner introduction |
| `owner-jackson.webp` | Existing Jackson portrait | Owner introduction |
| `crew-property.webp` | Existing crew/property photograph | Crew collage |
| `crew-materials.webp` | Existing wheelbarrow photograph | Crew collage |

Three new AI design concepts were generated at the owner's request and are used only as labeled service inspiration, not as evidence of completed projects. No project budgets, addresses, customer identities, or specialist experience were invented. Existing portrait footage is still modest in resolution; wide photographs of completed work would improve the portfolio.

## Estimate form and integrations

The form captures name, phone, email, property location/type, project type, description, budget, timeline, lead source, source page, submission time, and photo references. Budget choices include the requested ranges plus “Not sure yet.”

During `npm run dev`, the form posts only to the local `/api/estimate` endpoint. A successful local response explicitly identifies itself as simulated. The endpoint validates the request and discards it; neither personal details nor photo files are persisted. Local errors do not produce a success confirmation.

Optional local photo testing supports up to five JPEG, PNG, WebP, or HEIC files, with a 5 MB per-file and 20 MB combined limit. Unsupported or oversized files are rejected.

The original Formspree destination remains in the production code path. It has not been called during this work. Production photo uploads remain disabled pending an approved delivery/storage choice; production inquiries can mention photos for follow-up. MowProHQ and Google Voice are not connected, and no API support is assumed. The typed lead structure is available for a future approved adapter.

The simulation endpoint returns 404 outside development. Analytics are excluded from the development preview, while the existing production analytics configuration is retained.

## SEO, accessibility, and performance

- Unique page descriptions and canonical URLs, service-specific metadata, sitemap, and robots route.
- LocalBusiness-related structured data uses the existing company name, phone, email, public social links, and the supplied Bryan–College Station service area. It includes no fabricated street address, review rating, license, or project count.
- Enabled Next.js responsive image optimization and added lightweight WebP copies without replacing originals.
- Deferred homepage video loading until the service section becomes visible; automatic preview playback respects reduced-motion preferences.
- Added a skip link, visible focus styles, mobile menu expanded state/Escape handling, native form validation, accessible error messages, and confirmation focus.
- Corrected mobile decorative overflow and kept the scroll prompt below the content.

## Validation

- `npm run lint`: passed without errors or warnings.
- `npx tsc --noEmit`: passed.
- `npm run build`: passed, including the six generated service routes.
- `git diff --check`: passed.
- HTTP checks: all 15 tested page/query/SEO routes returned 200; all 11 optimized image files served successfully.
- Local form checks: valid inquiries and a valid photo request accepted as simulations; missing fields, invalid budget values, and unsupported files rejected.
- Browser checks: homepage at 1280×900 and 390×844; mobile menu navigation; successful simulated submission; commercial service page and preselected commercial form. Homepage, commercial page, and contact layout fit the tested mobile width.
- Development HTML was checked to confirm analytics are absent. Live form delivery and CRM integrations were intentionally not exercised.

Screenshots are saved in `.local-preview/homepage-desktop.jpg`, `.local-preview/homepage-mobile.jpg`, and `.local-preview/homepage-full.jpg`.

## Files changed

Existing files: `.gitignore`, `next.config.ts`; `app/globals.css`, `app/layout.tsx`, `app/page.tsx`, `app/about/page.tsx`, `app/contact/page.tsx`, `app/gallery/page.tsx`, `app/reviews/page.tsx`, `app/services/page.tsx`; `components/Hero.tsx`, `components/Navigation.tsx`, `components/Services.tsx`, `components/WhyChooseUs.tsx`, `components/ContactCTA.tsx`, `components/ContactForm.tsx`, and `components/Footer.tsx`.

Added files: `app/about/layout.tsx`, `app/contact/layout.tsx`, `app/gallery/layout.tsx`, `app/services/layout.tsx`, `app/services/[slug]/page.tsx`, `app/api/estimate/route.ts`, `app/not-found.tsx`, `app/robots.ts`, `app/sitemap.ts`; `components/FeaturedWork.tsx`, `components/ProjectProcess.tsx`, `components/CommercialCTA.tsx`; `lib/site.ts`, `lib/services.ts`, `lib/leads.ts`; `scripts/audit-media.mjs`, `scripts/video-audit.m`, `scripts/prepare-media.mjs`; the optimized media copies and this note.

## Before publication

Review the copy and offered scopes with Brock and Jackson. Confirm actual specialist/subcontractor availability for proposed hardscaping and drainage work. Add direct, verifiable review links and stronger finished-project photography when available. Approve any future photo delivery or CRM automation separately. Nextdoor and Google Business Profile have not been changed.

Commit and push were explicitly approved by the owner on November 10, 2026. No manual hosting deployment or external business-system modification is part of this work.
