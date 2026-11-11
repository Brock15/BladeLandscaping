# Blade Landscaping — local review

Preview: http://localhost:3000/

Gallery videos: http://localhost:3000/gallery#project-videos

The initial review was completed locally, without a commit, push, deployment, DNS change, production database change or Blade HQ edit.

Release update: after selecting option 5 for service 02, the owner explicitly authorized pushing the website changes. The release preserves the existing production Formspree connection. The separate, pre-existing Blade HQ intake-handler changes and dependency-manifest updates remain untouched in the working directory and are excluded from the website commit. The local working copy of the form retains that ongoing integration work; the staged release contains the reviewed form layout and validation changes with the original production delivery behavior. No live test lead is submitted.

## What changed

- Homepage opening is unchanged, verified by its original SHA-256 hash. Gradient, headline, badge, buttons and layout are preserved.
- Three matching uniform-based service illustrations link directly to the relevant existing service pages. There is no AI-inspiration section or generated-project portfolio.
- Three supplied, owner-confirmed project photographs form the homepage work showcase. The owners remain in a small centered introduction, with three concise commitments and customer feedback.
- Services overview now matches all six existing categories. Detail pages include appropriate hardscape and preparation media. All estimate CTAs, including navigation, process, footer and closing links, retain service context. The duplicate commercial closing section is removed.
- About is shorter, uses the original owner portraits and one supplied planting photograph, and does not repeat the old crew collage.
- Gallery photographs open in a real native dialog with arrow navigation, Escape, focus return and original image proportions. The original stone pathway and white-rock photographs are restored.
- Nine visible project videos have their own posters and genuine controls. This includes the blue-wheelbarrow mulch-loading favorite, new mulch-bed and poolside footage, stone and rock-bed clips, commercial work, sod, a 20-second POV edit, and removal footage. Starting one video pauses the others. No autoplay, automatic cycling or five-second reset remains.
- Contact uses columns with zero minimum widths, wrapping contact links and controls, and optional budget/timeline. A phone number or email is sufficient. No photo uploader is exposed.
- The original uncommitted production intake handler, dependency manifests and deployment-ignore file remain unchanged. Form field names, submission IDs, honeypot, production endpoint and accepted-response behavior are retained. Development submissions use a separate preview-only handler that validates but never saves or forwards a request.

## Verification

| Check | Result |
| --- | --- |
| 12 public pages × 320, 390, 430, 768 and 1280 widths | Passed; no remaining horizontal overflow. Review-photo wrapping at 320 was corrected. |
| Gallery keyboard viewer | Open, next/previous, Escape, modal focus and focus return passed. |
| Video playback | All nine final clips decoded and played in the browser with native controls. |
| Video delivery | All nine MP4s and nine posters return HTTP 200; byte-range requests work. |
| Media | All 23 Ready photo originals and all 23 uploaded video originals retain their original hashes. Optimized copies and actual website crops were reviewed. |
| Estimate links | All six service detail routes retain service context in hero, in-page, process, closing, navigation and footer estimate links. Mobile commercial navigation prefills both property and service. |
| Form | Browser-required fields, missing contact-method error, email-only and phone-only success passed with blank optional budget/timeline. Preview result receives focus. |
| Production intake compatibility | Original handler tested in an isolated process against a temporary localhost mock: signatures, payloads, phone/email alternatives, duplicate responses, rate limits, rejected confirmations, honeypot, origin and disabled-intake errors passed. |
| No real lead | No request was sent to production or local Blade HQ. Isolated production-mode preview route returns 404; disabled intake returns safe 503. |
| Code | ESLint, production build, TypeScript and diff whitespace checks passed. |

Screenshots and browser results are under `.local-preview/polish/`. The combined review board is `review-preview.jpg`. Full review images: `homepage-work.jpg`, `gallery-preview.jpg`, `gallery-videos-desktop.jpg`, `contact-phone.jpg`, `contact-phone-details.jpg` and `contact-phone-full.jpg`. Gallery layout was checked again at all five widths after the final video selection; all nine final videos were played, and the POV reached its full 20-second ending without looping.

## Media and review records

- `docs/ready-photo-placement.md`: all photo selections, edits, duplicates, intentional repeats, unused files and owner provenance confirmation.
- `docs/gallery-video-selections.md`: every selected video, exact cuts, omitted files and compression.
- `docs/review-sources.md`: owner-name ambiguity, unrelated moving review, unsourced testimonials and aggregate counts.

## Remaining limits

Google and Nextdoor were not freshly synchronized. Historical quotes without individual source permalinks are flagged in the review record; the unsupported 47+ aggregate and historical Google count are omitted. Live production CRM delivery was intentionally not tested. Source pathway photos are only 250×250, so the viewer preserves their available detail.

Checks ran against the existing installed Next.js 16.1.3 environment. The user's pre-existing dependency-manifest changes were preserved, and dependencies were not reinstalled or upgraded.

The local preview uses Webpack because the existing Turbopack development cache served an older stylesheet. The production build succeeds with the existing build configuration. The owner has now authorized pushing the website update; CRM configuration and the pre-existing dependency work remain separate.
