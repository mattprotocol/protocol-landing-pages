# Protocol Landing Pages

Reusable Astro-based landing page system for Protocol Healthcare marketing campaigns.

**Repo:** `mattprotocol/protocol-landing-pages`
**Deploy:** Vercel (`npx vercel`)
**Domain:** `landing.protocol.us`
**Stack:** Astro + Vercel (hybrid output — static pages + serverless API)

---

## Creating a New Campaign

```bash
npm run new-campaign <campaign-name>
```

This copies `campaigns/_template/` to `campaigns/<name>/`, replaces placeholders, and rebuilds `registry.json`.

Then edit:
- `campaigns/<name>/content.md` — page content (frontmatter-driven sections)
- `campaigns/<name>/config.yaml` — campaign settings, UTM, experiments, GHL config
- `campaigns/<name>/brief.md` — strategy doc
- `campaigns/<name>/ads.md` — ad copy

Visit at: `http://localhost:4321/<campaign-name>`

---

## Local Development

```bash
npm run dev        # Start dev server at localhost:4321
npm run build      # Build for production
npm run preview    # Preview production build
```

---

## Campaign Folder Structure

```
campaigns/
├── _template/          # Copy of this for new campaigns
│   ├── content.md      # Page content (frontmatter schema)
│   ├── config.yaml     # Campaign config
│   ├── brief.md        # Strategy doc
│   └── ads.md          # Ad copy
└── my-campaign/
    ├── content.md
    ├── config.yaml
    ├── brief.md
    ├── ads.md
    └── og.png          # Optional OG image
```

---

## content.md Frontmatter Schema

See `campaigns/_template/content.md` for full example. Key sections:

```yaml
hero:
  headline: "..."
  subhead: "..."
  cta_label: "..."
  cta_url: "#lead-form"
  background: dark  # dark | light | image

benefits:
  title: "What You Get"
  layout: grid  # grid | list | alternating
  items:
    - icon: "🎯"
      title: "..."
      body: "..."

social_proof:
  - type: stat
    value: "12"
    label: "..."
  - type: testimonial
    value: "−14 mmHg"
    label: "systolic BP in 12 weeks"
    quote: "..."
    author: "Name, Age"
    detail: "Protocol · Location"

faq:
  - q: "Question?"
    a: "Answer."

cta_bottom:
  headline: "..."
  body: "..."
  cta_label: "..."
  cta_url: "https://protocol.us/book"
```

Sections with `null` or missing values are skipped — no empty DOM.

---

## Design System

- **Light theme default:** cream `#FBF1E3` backgrounds, dark `#20211E` text
- **Dark sections:** navy `#13242B` — use `.dark-section` class
- **Accent:** Electric Lime `#C2F14B` — CTAs, highlights, accent text
- **Fonts:** Saans (headlines + body), DM Mono (labels, data, buttons)
- **No Tailwind** — use CSS custom properties from `src/styles/global.css`
- **No React/Vue** — everything is `.astro` components

---

## Form Architecture

Every campaign page has a lead form that POSTs to `/api/submit`. The handler fires three parallel writes:

1. **GoHighLevel** — webhook POST (via `GHL_WEBHOOK_URL` env var)
2. **Supabase** — insert into `leads` table (via `SUPABASE_URL` + `SUPABASE_ANON_KEY`)
3. **Meta CAPI** — server-side Lead event (via `META_PIXEL_ID` + `META_CAPI_TOKEN`)

If GHL or Supabase is unconfigured, those writes fail gracefully — the form still returns success. Configure env vars in Vercel dashboard.

**Deduplication:** Client generates a UUID request_id per submission. Server checks for duplicate request_ids in memory. Client stores submission in sessionStorage.

---

## Available Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run new-campaign <name>` | Scaffold new campaign from template |
| `npm run build-registry` | Regenerate registry.json from config files |
| `npm run health-check` | Validate all campaign folders have required files |

---

## Branch Workflow

- `main` → production (`landing.protocol.us`)
- `campaign/<name>` → preview URL for review before going live
- PR merge → auto-deploy via Vercel

---

## Environment Variables

Set in Vercel dashboard. See `.env.example` for full list.

| Variable | Description | Required |
|----------|-------------|----------|
| `GTM_ID` | Google Tag Manager ID | Yes |
| `GHL_WEBHOOK_URL` | GoHighLevel webhook URL | Yes |
| `SUPABASE_URL` | Supabase project URL | Yes |
| `SUPABASE_ANON_KEY` | Supabase anon key | Yes |
| `META_PIXEL_ID` | Meta Pixel ID | Optional |
| `META_CAPI_TOKEN` | Meta CAPI access token | Optional |
| `GOOGLE_ADS_ID` | Google Ads account ID | Optional |
| `GOOGLE_ADS_CONVERSION_LABEL` | Conversion label | Optional |

---

## Conversion Tracking Configuration

All tracking is built into the Astro templates (`Tracking.astro`, `UTMCapture.astro`, `LeadForm.astro`). It activates via environment variables — no code changes needed to enable tracking for new campaigns.

### Required Tracking IDs (set in Vercel)

| Variable | Value | Source |
|---|---|---|
| `GOOGLE_ADS_ID` | `AW-11484308994` | Google Ads account |
| `GOOGLE_ADS_CONVERSION_LABEL` | `pQxWCKK2-PgZEILMkuQq` | Google Ads conversion action |
| `GTM_ID` | `GTM-NNR8NM3F` | GTM web container |
| `GA4_MEASUREMENT_ID` | `G-WTVZNW15PP` | Google Analytics 4 |
| `META_PIXEL_ID` | `3871435226469247` | Meta/Facebook Pixel |

### Tracking Flow

1. **Page load** → `Tracking.astro` injects GTM, GA4, Meta Pixel, Google Ads base tag
2. **UTM capture** → `UTMCapture.astro` reads `gclid`, `fbclid`, and UTM params from URL → stores in sessionStorage
3. **Form submit** → `LeadForm.astro` fires `form_submit` event to GTM, then POSTs to `/api/submit`
4. **Server-side** → `/api/submit` fires GHL webhook + Supabase insert + Meta CAPI in parallel
5. **On success** → Client fires `generate_lead` (GA4) + `conversion` (Google Ads) + `Lead` (Meta Pixel)

### GHL Form Modal Tracking

When using `cta.type: ghl_modal` in campaign config, the `GHLFormModal.astro` component:
- Extracts `gclid` from URL and appends to GHL iframe src
- Stores gclid in sessionStorage
- Detects form submission via postMessage from DecypherNow iframe
- Triggers booking flow after form submit

### Consistency with protocol.us (WordPress)

The WordPress site (protocol.us) uses the SAME GTM container (`GTM-NNR8NM3F`) with tags configured for:
- Google Ads conversions (Lead Form, Meeting Scheduled, Newsletter Signup)
- GA4 events
- Facebook Pixel
- Conversion Linker

When building new landing pages, ensure the GTM dataLayer events match what's configured in GTM (e.g., `form_submit`, `generate_lead`). The GTM container handles the mapping to Google Ads conversion actions.

---

## Key Rules

- **`noindex` is true by default** — paid traffic pages should not be indexed
- **No hardcoded tracking IDs** — always from env vars
- **Don't skip form dedup** — prevents double charges in GHL
- **`registry.json` is generated** — never edit manually, always via `npm run build-registry`
- **Always verify tracking** — after deploying a new campaign, use GTM Preview mode to confirm tags fire on form submit
