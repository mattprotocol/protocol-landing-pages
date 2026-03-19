# Google Ads Restructure Plan — Protocol (Boston)

**Prepared:** 2026-03-18
**Account:** Protocol — Concierge Medicine / Longevity Practice
**Budget:** $100/day (~$3,000/month)
**Location:** Boston, MA only

---

## Executive Summary

The current account suffers from three structural problems that are dragging Quality Score down to 3.4/10 and inflating CPCs:

1. **Keyword cannibalization** — the same keywords appear across multiple ad groups, forcing them to compete against each other in the auction.
2. **Match type over-reliance on Broad** — 352 keywords almost entirely on Broad match means Google is matching to low-intent and irrelevant queries, wasting spend.
3. **Landing page mismatch** — ads point to the homepage or password-protected/404 pages instead of dedicated, keyword-aligned landing pages.

The restructure consolidates everything into **1 campaign with 3 tightly themed ad groups**, reduces keywords to ~60 high-intent terms with proper match types, and aligns each ad group to a dedicated landing page. Expected outcome: Quality Score improvement to 6-8/10, CPC reduction of 30-50%, and higher conversion rates.

---

## 1. New Campaign Structure

### Single Campaign: "Protocol — Boston"

One campaign keeps budget allocation simple at $100/day and avoids splitting limited budget across campaigns. Use ad group-level bid adjustments for prioritization.

| Ad Group | Theme | Landing Page | Budget Share |
|---|---|---|---|
| **Concierge Medicine** | Concierge / primary care searches | `landing.protocol.us/concierge-medicine-boston` | 40% (~$40/day) |
| **Longevity & Optimization** | Longevity doctor / health optimization | `landing.protocol.us/longevity-doctor-boston` | 35% (~$35/day) |
| **Testing & Diagnostics** | VO2 max, lab panels, health assessments | `landing.protocol.us/vo2-max-testing-boston` | 25% (~$25/day) |

**Why 3 ad groups, not more?**
With $100/day, you need sufficient data per ad group for Google's algorithms to optimize. Three groups at $25-40/day each will generate enough clicks for meaningful learning. More granularity can come later when budget increases.

---

## 2. Keyword Plan

### Ad Group 1: Concierge Medicine

| Keyword | Match Type | Rationale |
|---|---|---|
| `[concierge medicine boston]` | Exact | High-intent, location-specific — protect with exact |
| `[concierge doctor boston]` | Exact | Variation of core term |
| `[concierge primary care boston]` | Exact | High-intent variant |
| `[concierge physician boston]` | Exact | Captures "physician" searchers |
| `[boutique medical practice boston]` | Exact | Affluent audience term |
| `"concierge medicine"` | Phrase | Captures long-tail around core term |
| `"concierge primary care"` | Phrase | Captures variations with modifiers |
| `"concierge doctor near me"` | Phrase | Near-me intent |
| `"private doctor boston"` | Phrase | Alternative framing |
| `"direct primary care boston"` | Phrase | DPC is adjacent; captures crossover |
| `concierge health care` | Broad | Discovery — find new terms, review SQR weekly |

**Total: 11 keywords**

### Ad Group 2: Longevity & Optimization

| Keyword | Match Type | Rationale |
|---|---|---|
| `[longevity doctor boston]` | Exact | Core high-intent term |
| `[longevity medicine boston]` | Exact | Variation |
| `[longevity clinic boston]` | Exact | Variation |
| `[health optimization doctor boston]` | Exact | Optimization-minded audience |
| `[anti aging doctor boston]` | Exact | High commercial intent |
| `"longevity doctor near me"` | Phrase | Near-me intent |
| `"longevity medicine"` | Phrase | Broader capture |
| `"health optimization"` | Phrase | Broader capture |
| `"functional medicine boston"` | Phrase | Adjacent audience |
| `"preventive medicine doctor boston"` | Phrase | Preventive-focused searchers |
| `"biohacking doctor"` | Phrase | Optimization enthusiast audience |
| `longevity doctor` | Broad | Discovery — monitor SQR |

**Total: 12 keywords**

### Ad Group 3: Testing & Diagnostics

| Keyword | Match Type | Rationale |
|---|---|---|
| `[vo2 max testing boston]` | Exact | Specific service, high intent |
| `[vo2 max test near me]` | Exact | Near-me variant |
| `[dexa scan boston]` | Exact | Specific diagnostic test |
| `[full body health assessment boston]` | Exact | Comprehensive service |
| `[advanced blood work boston]` | Exact | Lab-focused searchers |
| `"vo2 max testing"` | Phrase | Broader capture |
| `"comprehensive health assessment"` | Phrase | Assessment-focused |
| `"advanced lab panels"` | Phrase | Lab-focused |
| `"executive physical boston"` | Phrase | High-value keyword — executive audience |
| `"whole body assessment"` | Phrase | Matches current ad copy language |
| `"metabolic testing boston"` | Phrase | Adjacent diagnostic term |
| `executive health screening` | Broad | Discovery — affluent audience |

**Total: 12 keywords**

### Grand Total: ~35 keywords (down from 352)

### Keywords to KEEP from Current Account (Pause the Rest)

These are the only current keywords worth preserving. Re-create them in the new structure with correct match types:

- "concierge primary care" -> split into exact `[concierge primary care boston]` and phrase `"concierge primary care"`
- "Boston concierge medicine" -> `[concierge medicine boston]` (exact)
- "longevity doctor near me" -> `"longevity doctor near me"` (phrase)
- "vo2 max testing near me" -> `[vo2 max test near me]` (exact) and `"vo2 max testing"` (phrase)
- "longevity doctor" -> `longevity doctor` (broad, for discovery)

### Keywords to PAUSE or DELETE

**Pause all 352 existing keywords.** Do not delete them yet — pausing preserves historical data. After 30 days, if the new structure is performing, delete the old ad groups entirely.

Specifically remove:
- All duplicate keywords (same keyword in multiple ad groups)
- All broad match keywords that don't have a clear commercial intent
- Any keywords pointing to 404 or password-protected URLs
- All NYC-targeted keywords (campaigns already paused — leave paused)

### New Keywords to ADD (Not in Current Account)

These are net-new additions not currently in the 352:

- `[boutique medical practice boston]` — affluent audience
- `"executive physical boston"` — high-value, executive audience
- `"biohacking doctor"` — optimization enthusiast audience
- `[dexa scan boston]` — specific test with commercial intent
- `[advanced blood work boston]` — lab-focused
- `"functional medicine boston"` — adjacent audience
- `"direct primary care boston"` — DPC crossover audience
- `"metabolic testing boston"` — diagnostic term
- `[anti aging doctor boston]` — high commercial intent
- `"preventive medicine doctor boston"` — preventive focus
- `executive health screening` — broad discovery for affluent terms

---

## 3. Ad Copy Plan

### Ad Group 1: Concierge Medicine

**Final URL:** `https://landing.protocol.us/concierge-medicine-boston`

**Headlines (15):**

| # | Headline (max 30 chars) | Type |
|---|---|---|
| 1 | Concierge Medicine Boston | Keyword match |
| 2 | Concierge Primary Care | Keyword match |
| 3 | Private Doctor in Boston | Keyword match |
| 4 | Your Doctor, Your Schedule | Benefit |
| 5 | Same-Day Appointments | Benefit |
| 6 | 60-Min Doctor Visits | Benefit |
| 7 | No Rushed Appointments | Pain point |
| 8 | Direct Access to Your MD | Benefit |
| 9 | Boutique Medical Practice | Keyword match |
| 10 | Accepting New Patients | CTA / urgency |
| 11 | Board-Certified Physicians | Trust |
| 12 | Deep Health Assessments | Service |
| 13 | Protocol Health | Brand |
| 14 | More Time With Your Doctor | Benefit |
| 15 | Limited Membership Available | Urgency |

**Descriptions (4):**

| # | Description (max 90 chars) |
|---|---|
| 1 | Concierge medicine in Boston. 60-minute visits, same-day access, and a doctor who knows you. |
| 2 | Tired of 7-minute appointments? Protocol gives you a physician partner, not a revolving door. |
| 3 | Board-certified physicians. Advanced diagnostics. A clear plan for your health. Book a call. |
| 4 | Limited to 300 patients per physician. Get the time and attention your health deserves. |

**Sitelinks:**

| Sitelink | URL | Description |
|---|---|---|
| What's Included | `landing.protocol.us/concierge-medicine-boston#included` | See everything in your membership |
| Meet Our Physicians | `protocol.us/team` | Board-certified, longevity-focused MDs |
| Book a Discovery Call | `protocol.us/book` | 15-min call to see if we're a fit |

---

### Ad Group 2: Longevity & Optimization

**Final URL:** `https://landing.protocol.us/longevity-doctor-boston`

**Headlines (15):**

| # | Headline (max 30 chars) | Type |
|---|---|---|
| 1 | Longevity Doctor Boston | Keyword match |
| 2 | Longevity Medicine Clinic | Keyword match |
| 3 | Health Optimization Doctor | Keyword match |
| 4 | Live Longer, Live Better | Benefit |
| 5 | Science-Backed Longevity | Trust |
| 6 | Optimize Your Healthspan | Benefit |
| 7 | Anti-Aging Medicine Boston | Keyword match |
| 8 | Advanced Biomarker Tracking | Service |
| 9 | Biological Age Assessment | Service |
| 10 | Personalized Longevity Plan | Benefit |
| 11 | Data-Driven Health | Differentiator |
| 12 | Protocol Health | Brand |
| 13 | 250+ Biomarkers Analyzed | Proof point |
| 14 | Not Your Typical Doctor | Differentiator |
| 15 | Book Your Assessment Today | CTA |

**Descriptions (4):**

| # | Description (max 90 chars) |
|---|---|
| 1 | Boston's longevity medicine practice. 250+ biomarkers, biological age, and a clear protocol. |
| 2 | Go beyond annual checkups. Advanced diagnostics and a physician focused on your longevity. |
| 3 | Biological age testing, ApoB optimization, VO2 max tracking. Medicine designed for the long game. |
| 4 | Your health data tells a story. We read it, build a plan, and track your progress over time. |

**Sitelinks:**

| Sitelink | URL | Description |
|---|---|---|
| Our Longevity Approach | `landing.protocol.us/longevity-doctor-boston#approach` | How we use data to extend healthspan |
| Advanced Lab Panels | `landing.protocol.us/vo2-max-testing-boston` | 250+ biomarkers in every panel |
| Schedule a Consultation | `protocol.us/book` | Talk to a longevity physician |

---

### Ad Group 3: Testing & Diagnostics

**Final URL:** `https://landing.protocol.us/vo2-max-testing-boston`

**Headlines (15):**

| # | Headline (max 30 chars) | Type |
|---|---|---|
| 1 | VO2 Max Testing Boston | Keyword match |
| 2 | DEXA Body Scan Boston | Keyword match |
| 3 | Advanced Lab Panels | Keyword match |
| 4 | Executive Health Screening | Keyword match |
| 5 | Full Body Health Assessment | Keyword match |
| 6 | Know Your Real Fitness Level | Benefit |
| 7 | 250+ Biomarkers Tested | Proof point |
| 8 | Metabolic Testing Available | Service |
| 9 | Beyond a Basic Physical | Differentiator |
| 10 | Comprehensive Health Data | Benefit |
| 11 | Results in 48 Hours | Benefit |
| 12 | Protocol Health | Brand |
| 13 | DEXA + VO2 Max + Labs | Service bundle |
| 14 | Whole Body Assessment | Keyword match |
| 15 | Book Your Testing Today | CTA |

**Descriptions (4):**

| # | Description (max 90 chars) |
|---|---|
| 1 | VO2 max, DEXA, and 250+ biomarkers in one visit. Get a complete picture of your health. |
| 2 | Executive-level health assessments in Boston. Advanced testing your PCP doesn't offer. |
| 3 | DEXA body composition, VO2 max cardiorespiratory fitness, and advanced blood panels. Book now. |
| 4 | Your annual physical checks boxes. Our assessment finds what's actually going on. Book a visit. |

**Sitelinks:**

| Sitelink | URL | Description |
|---|---|---|
| What We Test | `landing.protocol.us/vo2-max-testing-boston#tests` | VO2 max, DEXA, advanced labs, and more |
| Sample Report | `protocol.us/sample-report` | See what your results look like |
| Book an Assessment | `protocol.us/book` | Schedule your comprehensive testing |

---

## 4. Bidding Strategy Recommendation

### Current State
Likely using Manual CPC or Maximize Clicks, which with broad match and poor Quality Scores is overpaying for low-quality traffic.

### Recommended Approach

**Phase 1 (Weeks 1-4): Maximize Clicks with a CPC cap**
- Set a max CPC bid of $6.00
- This lets Google's algorithm learn which keywords and times convert best
- With only 35 keywords and clean structure, the algorithm has clear signals

**Phase 2 (Weeks 5-8): Target CPA or Maximize Conversions**
- Once you have 15-30 conversions (discovery call bookings), switch to Target CPA
- Set Target CPA based on actual cost-per-booking data from Phase 1
- Expected target: $50-80 per discovery call booking

**Phase 3 (Ongoing): Target ROAS or Target CPA refinement**
- Once patient LTV data is clear (concierge memberships are high-LTV), optimize for value

### Budget Allocation by Ad Group

| Ad Group | Daily Budget | Monthly Budget | Rationale |
|---|---|---|---|
| Concierge Medicine | $40 | ~$1,200 | Highest intent, most direct path to membership |
| Longevity & Optimization | $35 | ~$1,050 | Strong differentiator, growing search volume |
| Testing & Diagnostics | $25 | ~$750 | Entry point — lower intent but builds pipeline |
| **Total** | **$100** | **~$3,000** | |

Adjust allocation monthly based on cost-per-conversion data. If Testing converts cheaply but Concierge converts expensively, shift budget.

---

## 5. Negative Keywords List

Add these as **campaign-level negatives** so they apply to all ad groups.

### Job/Career-Related
```
free
cheap
discount
coupon
salary
salaries
pay
jobs
job
career
careers
hiring
hire
employment
internship
intern
residency
fellowship
```

### Education/Information-Seeking
```
definition
define
what is
wiki
wikipedia
reddit
quora
certification
certificate
certified
training
course
courses
class
classes
school
schools
degree
how to become
requirements
```

### Insurance/Billing
```
insurance
medicaid
medicare
covered
coverage
copay
deductible
in network
out of network
accept insurance
```

### Unrelated Medical
```
veterinary
vet
animal
pet
nursing home
assisted living
home health
hospice
pediatric
pediatrician
dentist
dental
chiropractor
chiropractic
physical therapy
```

### Geographic (non-Boston)
```
new york
nyc
manhattan
brooklyn
los angeles
chicago
miami
san francisco
dallas
houston
atlanta
seattle
denver
```

### Negative Intent
```
complaint
complaints
lawsuit
scam
review
reviews
malpractice
side effects
dangers
risk
```

### DIY / Non-Commercial
```
at home
diy
self test
home test
kit
amazon
buy online
supplements
```

**Total: ~90 negative keywords**

Review the Search Terms Report weekly for the first month and add new negatives as irrelevant queries appear.

---

## 6. Timeline & Priority

### Immediate (Day 1) — No Landing Page Dependency

| Step | Action | Time |
|---|---|---|
| 1 | **Add all negative keywords** to the existing campaign | 30 min |
| 2 | **Pause all duplicate keywords** (same keyword in multiple ad groups) | 30 min |
| 3 | **Pause all keywords with QS 1-2** that are spending money | 15 min |
| 4 | **Fix or pause ads** pointing to 404s or password-protected pages | 15 min |
| 5 | **Pause ads** in any ad group that has fewer than 2 working ads | 10 min |

**Impact:** Immediately stops the worst waste. Negative keywords alone could save 20-30% of spend.

### Week 1 — Landing Pages Required

| Step | Action | Dependency |
|---|---|---|
| 6 | Verify all 3 landing pages are live, load fast (<3s), and have clear CTAs | Landing pages deployed |
| 7 | Set up conversion tracking for discovery call bookings on each landing page | Landing pages deployed |
| 8 | Create the new campaign "Protocol — Boston" with 3 ad groups | — |
| 9 | Add all keywords from Section 2 to appropriate ad groups | — |
| 10 | Create all RSAs (Responsive Search Ads) from Section 3 | — |
| 11 | Add sitelink extensions | — |
| 12 | Set bidding to Maximize Clicks with $6.00 max CPC | — |
| 13 | **Enable the new campaign** | Steps 6-12 complete |
| 14 | **Pause the old campaign** (do NOT delete — preserve historical data) | Step 13 |

### Week 2-4 — Optimization

| Step | Action | Frequency |
|---|---|---|
| 15 | Review Search Terms Report | Every 3 days |
| 16 | Add new negative keywords from SQR | Every 3 days |
| 17 | Check Quality Scores — they should start climbing within 7-14 days | Weekly |
| 18 | Review ad performance — pause any headline/description combos with <1% CTR | Weekly |
| 19 | Check landing page speed and bounce rate in Analytics | Weekly |

### Week 5-8 — Bid Strategy Transition

| Step | Action | Trigger |
|---|---|---|
| 20 | Once 15+ conversions recorded, switch to Maximize Conversions | 15 conversions |
| 21 | Once 30+ conversions recorded, switch to Target CPA | 30 conversions |
| 22 | Evaluate budget reallocation across ad groups based on CPA data | Monthly |

### Month 3+ — Expansion

| Step | Action |
|---|---|
| 23 | Consider adding Performance Max campaign for broader reach |
| 24 | Test new keyword themes (e.g., "health coach boston", "biohacking clinic") |
| 25 | If budget increases, consider reactivating NYC with dedicated landing pages |
| 26 | Add call extensions and call-only ads for mobile users |

---

## Appendix A: Expected Quality Score Improvement

| Factor | Current | After Restructure | Why |
|---|---|---|---|
| Ad Relevance | Below Average | Above Average | Keywords tightly match ad copy per ad group |
| Landing Page Experience | Below Average | Above Average | Dedicated pages per theme, fast load, clear CTA |
| Expected CTR | Below Average | Average to Above Average | Better ad copy, fewer irrelevant impressions |
| **Overall QS** | **3.4/10** | **6-8/10** | All three pillars improved |

A QS improvement from 3 to 7 typically reduces CPC by 40-50% for the same ad position.

## Appendix B: What NOT to Do

- **Do not delete old campaigns** — pause them. Historical data is valuable for comparison.
- **Do not launch new campaigns before landing pages are live** — sending traffic to the homepage will keep Quality Score low.
- **Do not add more than 1 Broad match keyword per ad group** — use Broad only for discovery, with tight negative keywords.
- **Do not duplicate keywords across ad groups** — this was the #1 structural problem. Each keyword lives in exactly one ad group.
- **Do not run NYC campaigns** until Boston is optimized and generating positive ROI. Fix one market first.
- **Do not use Dynamic Keyword Insertion (DKI)** in headlines until Quality Scores are stable at 6+.

## Appendix C: Conversion Tracking Checklist

Before launching, confirm these are set up:

- [ ] Google Ads conversion action for "Discovery Call Booked" (or equivalent CTA)
- [ ] Conversion tracking code on the thank-you / confirmation page of each landing page
- [ ] Google Analytics 4 linked to Google Ads
- [ ] Enhanced conversions enabled (if collecting email at booking)
- [ ] Phone call tracking set up if using call extensions
- [ ] Verify conversions are firing in Google Ads Tag Assistant before going live
