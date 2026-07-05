# AUDITRA — FULL WEBSITE BUILD BLUEPRINT
### (Static Sales Website — HTML + Tailwind CSS + JavaScript)

This document is the single source of truth for building the Auditra marketing website. It consolidates:
- `Auditra_Master_Brand_Website_Blueprint_Phase1.docx`
- `Auditra_Marketing_Overview.pdf`
- The client's written requirements
- The four operational/clinical documents (which double as real Resource Library content and real Feature substance)
- The logo (`auditra_logo-removebg-preview.png`)

Give this whole document to your AI code generator (or use it yourself) as the build spec.

---

## 1. PROJECT SUMMARY

- **Type:** Static marketing/sales website (no backend, no login). The actual SaaS product is a separate hosted app.
- **Goal:** Sell the software to executives at multi-facility long-term care organizations and drive them to book a demo.
- **Stack:** HTML5 + Tailwind CSS (utility classes, no build step needed — CDN is fine) + vanilla JavaScript for interactivity (mobile nav toggle, FAQ accordions, pricing toggle, testimonial/logo carousel if used, form validation, smooth scroll). Or you can use any other library if you want for animations e.g: gsap 
Find awesome fire for icon library is already used same as lenis for smooth scroll is also used
- **Total pages: 11**
  - 7 core pages (navigation-visible)
  - 4 footer/legal pages (linked only in footer)
- **Primary CTA everywhere:** "Schedule Demo" / "Schedule a Demo" / "Request an Enterprise Demo" (same action, phrased differently by context)
- **Audience:** C-suite / regional operators / VPs of Clinical or Dining Services at multi-facility long-term care (LTC) organizations — NOT a single nursing home, NOT frontline staff. Copy tone must stay executive, risk/compliance-driven, and ROI-oriented.

Don't need to write any comments inside the code

---

## 2. BRAND SYSTEM

### Logo
Clipboard-and-compass mark in navy and teal, paired with the wordmark "AUDITRA" (bold navy, all caps) and "Compliance" (teal, in a softer weight) underneath, flanked by thin horizontal rules. Use the transparent PNG provided (`auditra_logo-removebg-preview.png`) in the navbar (standard size) and footer (can appear reversed/white on dark navy footer background — provide a white/monochrome version if possible, or apply a CSS `brightness/invert` filter as a fallback).

### Color Palette (derived from the logo)
| Role | Color | Hex (approx) | Usage |
|---|---|---|---|
| Primary / Navy | Deep navy blue | `#0B2A5B` (use `#0C2E5E`–`#0F2F63` range) | Headlines, nav background option, primary buttons, icons |
| Accent / Teal | Bright teal | `#17A6A0` (use `#159E96`–`#1BB0A8` range) | CTA buttons, links, highlight text, checkmarks, hover states |
| Secondary Navy (light) | Muted slate blue | `#4E6C99` | Secondary text, chart bars, decorative elements |
| Background Light | Off-white / soft gray | `#F7F9FB` | Section backgrounds (alternating with white) |
| Background White | Pure white | `#FFFFFF` | Base background, cards |
| Border / Divider | Light gray-blue | `#E3E8EF` | Card borders, dividers |
| Text Dark | Near-black navy | `#1A2233` | Body copy |
| Text Muted | Slate gray | `#5B6472` | Secondary/supporting copy |
| Success/Positive | Teal (same as accent) | `#17A6A0` | Checkmarks, "included" icons |
| Alert/Risk | Muted red (used sparingly) | `#C6423C` | "❌" risk callouts only — do not overuse; this is a healthcare-feeling site, not alarmist |

**Overall feel:** professional, healthcare-adjacent, modern, minimal, generous white space, high contrast for accessibility, similar restraint to Stripe/Notion — not busy or gradient-heavy like consumer SaaS. Rounded corners (`rounded-xl`/`rounded-2xl`), soft shadows (`shadow-sm`/`shadow-md`), no harsh drop shadows.

### Typography
- **Headings:** A clean geometric/grotesk sans-serif — e.g. `Inter`, `Sora`, or `Manrope` (bold/semibold weights, tight letter-spacing on large headlines).
- **Body:** `Inter` or `Source Sans 3` at 16–18px base, 1.6 line-height for readability (this audience reads dense compliance copy).
- **Scale suggestion (Tailwind):** H1 `text-4xl md:text-6xl font-bold`, H2 `text-3xl md:text-4xl font-bold`, H3 `text-xl md:text-2xl font-semibold`, body `text-base md:text-lg`.

### UI Components to Build Once, Reuse Everywhere
- Sticky top navbar (transparent → solid white with shadow on scroll)
- Primary button (solid teal, white text, rounded-full or rounded-lg, hover darkens)
- Secondary button (outline navy or ghost/text link with arrow)
- Feature/benefit card (icon top, headline, 2–3 line description, subtle border, hover lift)
- Stat/metric badge
- Section label (small teal uppercase eyebrow text above every section headline, e.g. "WHY EXECUTIVES CHOOSE AUDITRA")
- Testimonial/quote card (optional placeholder — no real testimonials were supplied, so mark as `[PLACEHOLDER — add client logos/quotes when available]`)
- FAQ accordion (JS-driven expand/collapse)
- Downloadable resource card (icon, title, one-line description, "Download" button)
- Footer (4-column: Brand/logo+tagline, Product links, Company links, Legal links + contact info)

---

## 3. SITE MAP / NAVIGATION

**Top navigation (in this exact order):**
`Home` · `Features` · `Pricing` · `Demo` · `Resources` · `About` · `Contact`
**Primary nav button (right-aligned, styled differently from links):** `Schedule Demo`

**Footer-only links (small text, bottom of every page):**
`Privacy Policy` · `Terms of Service` · `Cookie Policy` · `Accessibility Statement` · `Contact Information`

**Full file list to generate:**
1. `index.html` — Home
2. `features.html`
3. `pricing.html`
4. `demo.html`
5. `about.html`
6. `resources.html`
7. `contact.html`
8. `privacy-policy.html`
9. `terms-of-service.html`
10. `cookie-policy.html`
11. `accessibility-statement.html`

Every page shares the identical navbar and footer component (build as a reusable HTML partial/include pattern, or literally duplicate the same markup block across files since this is static HTML with no templating engine — unless you're using a static site generator, in which case use includes).

---

## 4. PAGE-BY-PAGE DETAILED SPEC

---

### PAGE 1 — HOME (`index.html`) ⭐ MOST IMPORTANT PAGE

**Goal:** Visitor understands what Auditra does within 5 seconds and is pushed toward booking a demo. This page carries most of the selling weight: Problem → Solution → Benefits → Why Auditra → Pricing preview → CTA.

**Section 1 — Navbar**
- Logo (left), nav links (center/right), "Schedule Demo" button (far right, teal, filled)
- Sticky on scroll, background transitions from transparent to white+shadow after ~50px scroll (JS scroll listener)
- Mobile: hamburger icon → slide-down/slide-in menu with links stacked + CTA button

**Section 2 — Hero**
- Layout: centered text hero (or text-left / visual-right split showing a dashboard mockup/screenshot placeholder)
- Small eyebrow label above headline: `SURVEY READINESS · COMPLIANCE · MULTI-FACILITY`
- **Headline (exact copy from blueprint):**
  > "Reduce Dietary Compliance Risk Across Every Facility Before It Becomes a Survey Deficiency."
- **Subheadline (exact copy):**
  > "Auditra gives multi-facility long-term care organizations a standardized compliance platform to identify risks earlier, improve accountability, monitor corrective actions, and strengthen survey readiness across every building—all from one centralized system."
- **Primary CTA button:** "Schedule a Demo"
- **Secondary CTA button (ghost/outline or text+arrow):** "See Auditra in Action" → links to Demo page
- Below the buttons: a thin trust strip — e.g. `[PLACEHOLDER: "Trusted by regional and multi-facility LTC operators"]` or facility-count/logo strip if client provides logos later.
- Visual: a large rounded dashboard/product screenshot mock (since this is a real screenshot-less brief, use a stylized placeholder graphic — abstract dashboard cards, charts, checkmarks in navy/teal — until real product screenshots are supplied).

**Section 3 — Problem**
- Eyebrow: `THE RISK`
- Headline (exact copy): "When one building falls behind, the entire organization is exposed."
- Body copy (exact copy): "Inconsistent audits, missed corrective actions, and limited visibility can lead to survey deficiencies, financial penalties, increased regulatory scrutiny, and reputational risk."
- Visual treatment: 4 small risk-icon callouts in a row: **Survey Deficiencies**, **Financial Penalties**, **Regulatory Scrutiny**, **Reputational Risk** (each with a small icon + 3–4 word label; keep restrained, not alarmist — icons in muted navy, not red, per brand tone).

**Section 4 — Solution / Executive Value Proposition**
- Eyebrow: `THE SOLUTION`
- Headline: "One standardized system for every facility."
- Body copy (adapted from PDF): "Auditra provides executive leaders with a standardized process to monitor dietary compliance across every facility — helping teams identify issues early, drive accountability, and create consistency before surveyors arrive."
- Layout: text left, supporting graphic right (e.g., a simple diagram: multiple "facility" icons feeding into one central "Auditra dashboard" icon — visually reinforces "centralized system" and "every building").

**Section 5 — Benefits Grid ("Why Executives Choose Auditra")**
- Eyebrow: `WHY EXECUTIVES CHOOSE AUDITRA`
- Headline: "Built for organizations, not just single buildings."
- 6-card grid (3 columns desktop / 1 column mobile), each card = icon + title + 1-sentence description, using **exact copy** from the source docs:
  1. **Enterprise Standardization** — "Implement one consistent auditing process across every facility."
  2. **Executive Visibility** — "Monitor compliance trends and audit performance across your organization from a centralized dashboard."
  3. **Risk Reduction** — "Identify operational vulnerabilities before they become survey deficiencies."
  4. **Accountability** — "Track corrective actions, assign ownership, and verify completion."
  5. **Operational Efficiency** — "Reduce administrative burden while improving consistency across regional teams."
  6. **Scalable Growth** — "Support new acquisitions and expanding portfolios with a standardized compliance system."

**Section 6 — Features Teaser (links out to full Features page)**
- Eyebrow: `WHAT'S INSIDE`
- Headline: "Everything your team needs to stay survey-ready."
- 7-card compact grid (smaller cards than the Features page, icon + title only, or icon + title + 1-line): Digital Kitchen Audits, Corrective Action Tracking, Dashboard & Reporting, Photo Documentation, Survey Readiness, Multi-Facility Oversight, Trend Analysis.
- Button under grid: "Explore All Features →" → links to `features.html`

**Section 7 — How It Works**
- Eyebrow: `HOW IT WORKS`
- Headline: "From daily audit to survey-ready, in four steps."
- 4-step horizontal process (numbered 01–04, connected by a line on desktop, stacked on mobile):
  1. **Conduct the Audit** — Staff complete standardized digital kitchen/dietary audits on any device, with photo documentation attached on the spot.
  2. **Flag & Assign** — Issues are automatically flagged, categorized by risk, and assigned to the responsible team member with a due date.
  3. **Track Corrective Action** — Managers and regional leaders track completion status in real time until the issue is verified closed.
  4. **Stay Survey-Ready** — Executive dashboards roll up every facility's compliance trends, so leadership always knows where risk exists — before the surveyor does.

**Section 8 — Business Outcome**
- Eyebrow: `THE OUTCOME`
- Headline (exact copy): "From reactive survey preparation to proactive risk management."
- Body copy (exact copy): "Auditra helps long-term care organizations move from reactive survey preparation to proactive risk management—creating stronger compliance programs, more consistent operations, and greater confidence across every facility."
- Optional: 3 supporting stat badges, marked `[PLACEHOLDER — insert real metrics once available, e.g. "X% reduction in repeat deficiencies"]`

**Section 9 — Pricing Preview (teaser strip, not full pricing table)**
- Eyebrow: `PRICING`
- Headline: "Simple, transparent pricing built to scale with your portfolio."
- Short 1–2 line summary + "View Pricing →" button linking to `pricing.html`. Optionally show 3 tier name-only cards (no price shown yet) with a "See full pricing" CTA.

**Section 10 — Final CTA Banner**
- Full-width navy background section
- Headline: "See how Auditra can protect every facility in your portfolio."
- Subtext: "Request an enterprise demo and see the platform built for multi-facility compliance."
- Button: "Request an Enterprise Demo" (teal, high contrast against navy)

**Section 11 — Footer** (see Section 8 of this doc for full footer spec)

---

### PAGE 2 — FEATURES (`features.html`)

**Goal:** Break features into outcomes, not tool lists. Every feature block must answer "how does this make my job easier?"

**Section 1 — Page Hero**
- Eyebrow: `FEATURES`
- Headline: "Compliance tools built around outcomes, not checklists."
- Subheadline: "Every feature in Auditra exists to answer one question: how does this make your job easier — and your facility safer?"
- CTA button: "Schedule a Demo"

**Section 2 — Feature Blocks** (alternating left/right image-text layout, or stacked cards — recommend alternating rows for a premium feel similar to Stripe/HubSpot feature pages). Each block: outcome-driven headline, "how this helps" paragraph, 3–4 supporting bullet points, and a supporting screenshot/graphic placeholder.

1. **Digital Kitchen Audits**
   - Headline: "Replace paper checklists with structured digital audits."
   - Copy: Standardized digital audits replace inconsistent paper checklists, so every facility is evaluated the same way, every time — no more relying on memory or individual habits.
   - Supporting bullets (informed by the uploaded audit-tool structure): Physician/order accuracy checks, clinical assessment review prompts, MAR/TAR and documentation cross-checks, equipment & supply verification, built-in KPI capture at the point of audit.

2. **Corrective Action Tracking**
   - Headline: "No issue falls through the cracks."
   - Copy: Every flagged issue is automatically assigned an owner and a due date, then tracked until verified complete — so leadership always knows what's open, what's overdue, and what's resolved.
   - Bullets: Auto-assignment by role/department, due-date reminders, manager sign-off/verification step, full audit trail of who did what and when.

3. **Dashboard & Reporting**
   - Headline: "See every facility's compliance status at a glance."
   - Copy: A centralized executive dashboard rolls up audit results, open corrective actions, and compliance trends across every building — no more requesting reports building by building.
   - Bullets: Cross-facility comparison view, exportable reports for leadership/board meetings, drill-down from portfolio-level to single-facility detail.

4. **Photo Documentation**
   - Headline: "Visual proof, attached the moment an issue is found."
   - Copy: Staff attach photos directly to audit findings in real time, creating a clear, timestamped record that supports corrective action and survey documentation.
   - Bullets: In-app photo capture, automatic timestamp/audit linkage, before/after photo pairing for verification.

5. **Survey Readiness**
   - Headline: "Walk into survey season with confidence, not scrambling."
   - Copy: Because audits, corrective actions, and documentation are already standardized and tracked, facilities are always survey-ready — not just prepared the week before.
   - Bullets: Deficiency-pattern visibility before surveyors arrive, standardized documentation aligned to regulatory expectations, historical audit trail readily available on demand.

6. **Multi-Facility Oversight**
   - Headline: "Manage one facility or one hundred, the same way."
   - Copy: Regional and executive leaders get one standardized view across every building in the portfolio — critical for organizations managing growth, acquisitions, or turnover in facility-level leadership.
   - Bullets: Portfolio-wide visibility, standardized process regardless of facility size, easy onboarding of newly acquired facilities onto one system.

7. **Trend Analysis**
   - Headline: "Spot the pattern before it becomes a deficiency."
   - Copy: Recurring issues — a specific audit category, a specific shift, a specific facility — surface automatically, so leadership can address root causes instead of repeating the same corrective actions.
   - Bullets: Trend tracking by facility/category/time period, recurring-issue alerts, data to support staff training and process improvement decisions.

**Section 3 — Closing CTA**
- Headline: "See these features in action."
- Button: "Book a Live Demo" → `demo.html`

---

### PAGE 3 — PRICING (`pricing.html`)

**Goal:** Keep it simple and low-friction; the actual sale happens on a demo call, not on this page.

**Section 1 — Page Hero**
- Eyebrow: `PRICING`
- Headline: "Simple pricing that scales with your portfolio."
- Subheadline: "Auditra is priced per facility, so your investment grows in step with your organization — not ahead of it. `[PLACEHOLDER — confirm exact pricing model/figures with client before launch.]`"

**Section 2 — Monthly/Annual Toggle**
- JS-powered toggle switch: "Monthly" / "Annual (save X%)" — prices update dynamically via JS (use `[PLACEHOLDER: $XXX]` values until client finalizes numbers)

**Section 3 — Pricing Tiers (3-column card layout)**
1. **Starter** — for single or small multi-facility organizations. `[Placeholder price]`. Includes: Digital audits, corrective action tracking, basic dashboard, photo documentation, standard support.
2. **Professional** (marked "Most Popular," highlighted card) — for growing multi-facility organizations. `[Placeholder price]`. Includes everything in Starter, plus: Multi-facility oversight, trend analysis, advanced reporting/export, priority support.
3. **Enterprise** — for large or fast-growing portfolios. "Custom Pricing — Contact Sales." Includes everything in Professional, plus: Dedicated onboarding, custom reporting, API/integration support `[if applicable]`, dedicated account manager.
- Each card: feature checklist (teal checkmarks), "Schedule Demo" button under Starter/Professional, "Contact Sales" button under Enterprise.

**Section 4 — Comparison Table (optional but recommended for this audience)**
- Full feature-by-tier comparison table (rows = the 7 features from the Features page + support level + facility limits; columns = Starter/Professional/Enterprise).

**Section 5 — FAQ (accordion, JS-driven)**
- e.g. "Is there a setup fee?" / "Can we add facilities later?" / "Is training included?" / "What does the Enterprise plan include?" — mark answers `[PLACEHOLDER — confirm with client]` where unknown.

**Section 6 — Closing CTA**
- Headline: "Not sure which plan fits your organization?"
- Button: "Schedule Demo"

---

### PAGE 4 — DEMO (`demo.html`)

**Goal:** One job only — show Auditra in action and get the visitor to book a live demo.

**Section 1 — Page Hero**
- Eyebrow: `SEE AUDITRA IN ACTION`
- Headline: "Watch how Auditra keeps every facility survey-ready."
- Subheadline: "A quick look at how audits, corrective actions, and reporting come together in one platform."

**Section 2 — Video Embed**
- Large centered video player (2–3 minutes), 16:9, rounded corners, shadow. `[PLACEHOLDER: embed real demo video — YouTube/Vimeo iframe or self-hosted <video> tag]`
- Poster/thumbnail image before play

**Section 3 — Screenshot Gallery**
- 3–4 image cards/carousel showing: audit checklist screen, corrective action tracker, executive dashboard, photo documentation view. `[PLACEHOLDER: real product screenshots]`

**Section 4 — Benefits Recap (short, 3–4 items, not a repeat of the full benefits grid)**
- "See exactly how audits get standardized"
- "See how corrective actions get tracked to completion"
- "See the executive dashboard your leadership team will use"

**Section 5 — Book a Live Demo (form + calendar embed)**
- Headline: "Book a Live Demo"
- Short form (Name, Work Email, Organization, Number of Facilities, Phone `[optional]`) + `[PLACEHOLDER: Square appointment scheduler embed]`
- Note: this can either duplicate the Contact page's booking flow or simply deep-link to `contact.html#schedule`

---

### PAGE 5 — ABOUT (`about.html`)

**Goal:** Build trust and credibility — why Auditra exists, told through the founder's real clinical background.

**Section 1 — Page Hero**
- Eyebrow: `ABOUT AUDITRA`
- Headline: "Built by someone who has sat across from the surveyor."
- Subheadline: "Auditra was created out of firsthand experience managing dietary compliance across multiple long-term care facilities."

**Section 2 — Why We Built Auditra**
- Narrative section (text-focused, founder-story tone): Draws on real operational pain points evident in the source documents — the daily grind of manual paper checklists (shift huddles, equipment logs, deep-cleaning assignments), the constant risk of missed documentation (enteral nutrition orders, MAR/TAR gaps), and the reality that survey readiness "is not something you prepare for, it's how you operate every day" `[echoing the daily team message found in the operations checklist]`. Frame this as the direct inspiration: Auditra exists to take everything that used to live on paper, in binders, and in one person's head, and standardize it across an entire portfolio of facilities.
- `[PLACEHOLDER — replace with the founder's actual first-person story once provided by the client; the above is a scaffold built from the tone of the operational documents supplied.]`

**Section 3 — Experience as a Regional RD**
- Headline: "Grounded in real regional dietitian experience."
- Copy: Describe (in first person, once client provides specifics) years spent auditing kitchens, reviewing physician orders, training nursing staff on documentation, and responding to survey findings across multiple buildings — the exact experience that shaped what Auditra checks for and why. `[PLACEHOLDER — insert real bio/credentials/years of experience]`

**Section 4 — Mission Statement**
- Headline: "Our Mission"
- Copy: "To help long-term care organizations move from reactive survey preparation to proactive, standardized risk management — so every facility, regardless of size or location, can deliver consistent, safe, high-quality care." (adapted directly from the "Business Outcome" language used on the Home page, restated as a mission)

**Section 5 — Values strip (optional, 3–4 short value pillars)**
- e.g. "Standardization," "Accountability," "Clinical Credibility," "Operational Simplicity" — each 1 sentence.

**Section 6 — Closing CTA**
- "See what our experience built — schedule a demo."

---

### PAGE 6 — RESOURCES (`resources.html`)

**Goal:** Downloadable content library that builds authority and generates leads. This is where the four operational documents the client already has become real, ready-to-use assets.

**Section 1 — Page Hero**
- Eyebrow: `RESOURCES`
- Headline: "Practical tools for dietary and nutrition compliance."
- Subheadline: "Free checklists, guides, and best practices — built from real long-term care operations."

**Section 2 — Filter/Category Bar (optional, JS tab filter)**
- Categories: All · Checklists · Audit Tools · Documentation Guides · Best Practices

**Section 3 — Resource Grid (cards: icon/thumbnail, title, 1–2 line description, category tag, "Download PDF" button)**
Populate with the actual documents supplied — these map directly to the client's requested categories:

1. **Daily Shift Huddle & Operations Checklist** *(Category: Checklists)*
   - Description: "A ready-to-use daily huddle template covering staffing, menu review, equipment status, deep-cleaning assignments, and shift expectations — so survey readiness becomes a daily habit, not a scramble."
   - Source: `DAILY_SHIFT_HUDDLE___OPERATIONS_CHECKLIST.docx`

2. **Enteral Nutrition (Tube Feeding) Order Management Guide for Nursing Staff** *(Category: Documentation Guides)*
   - Description: "A complete reference for verifying, implementing, and monitoring enteral nutrition orders — covering order changes, water flush management, held feedings, and when to notify the RD or provider."
   - Source: `Enteral_Nutrition__Tube_Feeding__Order_Management_for_Nursin.docx`

3. **Enteral Nutrition Audit Tool** *(Category: Audit Tools)*
   - Description: "A comprehensive audit framework covering physician orders, RD clinical assessments, MAR/TAR documentation, pump history review, nursing practice observation, and key performance indicators."
   - Source: `ENTERAL_NUTRITION_AUDIT_TOOL.docx`

4. **Enteral Nutrition Documentation Guide for Nursing Staff** *(Category: Documentation Guides)*
   - Description: "Clear guidance on what must be documented on the MAR/TAR versus in a progress note, plus example documentation language and a quick-reference table for RD and provider notification."
   - Source: `ENTERAL_NUTRITION_DOCUMENTATION_GUIDE_FOR_NURSING_STAFF.docx`

5. **Survey Readiness Checklist** *(Category: Checklists)* — `[PLACEHOLDER — build a standalone one-pager summarizing survey-readiness essentials from across the above documents, or request an existing one from the client]`

6. **Kitchen Audit Best Practices** *(Category: Best Practices)* — `[PLACEHOLDER — short article/guide; can be derived from the Digital Kitchen Audits feature copy]`

7. **Deficiency Prevention Tips** *(Category: Best Practices)* — `[PLACEHOLDER — short article covering the "Common Survey Risks" section from the Audit Tool document, e.g. incorrect formula, missing water flushes, incomplete documentation]`

**Section 4 — Gated Download Form (optional, if lead-gen is desired)**
- Simple modal or inline form (Name, Email, Facility/Organization) before download unlocks — JS-driven modal, no backend required for a static build (can integrate with a form service later).

**Section 5 — Closing CTA**
- "Want a walkthrough of how these best practices are built into the platform? Schedule a demo."

---

### PAGE 7 — CONTACT / SCHEDULE DEMO (`contact.html`)

**Goal:** One focused job — get the visitor to submit a demo request or book directly on the calendar.

**Section 1 — Page Hero**
- Eyebrow: `CONTACT`
- Headline: "Let's talk about your organization's compliance program."
- Subheadline: "Tell us a bit about your organization, and we'll follow up to schedule a walkthrough tailored to your portfolio."

**Section 2 — Two-Column Layout**
- **Left column — Demo Request Form:**
  - Fields: Full Name, Work Email, Organization Name, Job Title, Number of Facilities, Phone `[optional]`, Message/What would you like to see? (textarea)
  - Submit button: "Request a Demo"
  - JS form validation (required fields, valid email format) — since this is static, form submission should POST to whatever form-handling service the client's hosting supports (e.g., Formspree, Netlify Forms, or a simple `mailto:` fallback) — mark as `[PLACEHOLDER — connect to client's chosen form backend]`
- **Right column — Embedded Calendar:**
  - `[PLACEHOLDER: Square Appointments embed/iframe]` for direct self-service booking

**Section 3 — Direct Contact Info**
- Email: `[PLACEHOLDER — client's business email]`
- Phone `[optional]`
- Business hours `[optional]`

**Section 4 — "What Happens Next" (brief explainer, 3 short steps)**
1. "We'll confirm your demo request within one business day."
2. "You'll meet with a member of our team for a 30-minute walkthrough tailored to your facilities."
3. "We'll follow up with pricing and next steps based on your organization's size and needs."

**Section 5 — Footer**

---

## 5. FOOTER PAGES (LEGAL — minimal navigation prominence, standard structure)

Each of these 4 pages follows the same simple template: page hero (small headline + "Last updated: `[PLACEHOLDER DATE]`") + body content in clean prose/numbered sections + footer.

1. **Privacy Policy** (`privacy-policy.html`) — sections: Information We Collect, How We Use Information, Cookies & Tracking, Data Sharing & Third Parties, Data Security, Your Rights, Contact Us. `[PLACEHOLDER — full legal text should be drafted/reviewed by client's legal counsel; do not publish generic boilerplate as final legal copy without review]`

2. **Terms of Service** (`terms-of-service.html`) — sections: Acceptance of Terms, Use of the Website, Intellectual Property, Disclaimers, Limitation of Liability, Governing Law, Changes to Terms, Contact Us. `[PLACEHOLDER — same legal-review note as above]`

3. **Cookie Policy** (`cookie-policy.html`) — sections: What Are Cookies, How We Use Cookies, Types of Cookies Used (essential/analytics/marketing), Managing Cookie Preferences, Contact Us. `[PLACEHOLDER]`

4. **Accessibility Statement** (`accessibility-statement.html`) — sections: Our Commitment to Accessibility, Standards Followed (e.g., WCAG 2.1 AA target), Ongoing Efforts, Feedback & Contact for Accessibility Issues. This one is worth actually building well (not just placeholder) since the whole product is about compliance — recommend genuinely following WCAG basics (alt text, contrast ratios, keyboard navigation, focus states) across the real build, not just claiming it in this statement.

---

## 6. GLOBAL NAVBAR SPEC (build once, reuse on all 11 pages)

```
[Logo]     Home   Features   Pricing   Demo   Resources   About   Contact     [Schedule Demo button]
```
- Desktop: horizontal, logo left, links centered/left-of-CTA, CTA button far right, sticky, background shifts from transparent to white+shadow on scroll (JS `scroll` event listener toggling a class).
- Mobile (<768px): logo left, hamburger icon right. Tapping opens a full-screen or slide-down panel with links stacked vertically + CTA button at the bottom. Body scroll should lock while menu is open (JS).
- Active page link should have a subtle underline or teal color to indicate current page.

## 7. GLOBAL FOOTER SPEC (build once, reuse on all 11 pages)

4-column layout (stacks to 1 column on mobile):
1. **Brand column:** Logo (white/light version on navy background) + 1-line tagline (e.g., "Standardized dietary compliance for multi-facility long-term care.") + `[PLACEHOLDER: social icons if applicable]`
2. **Product column:** Features, Pricing, Demo, Resources
3. **Company column:** About, Contact, `[PLACEHOLDER: Careers if applicable]`
4. **Legal column:** Privacy Policy, Terms of Service, Cookie Policy, Accessibility Statement, Contact Information
- Bottom bar: `© [YEAR] Auditra Compliance. All rights reserved.` centered or left-aligned, thin top border, small text.
- Footer background: navy (`#0B2A5B`) with white/light-gray text for strong brand contrast, matching the logo's dark clipboard shade.

## 8. JAVASCRIPT INTERACTIVITY CHECKLIST

- [ ] Sticky navbar background toggle on scroll
- [ ] Mobile menu open/close toggle + body scroll lock
- [ ] FAQ accordion expand/collapse (Pricing page, and optionally Home)
- [ ] Pricing Monthly/Annual toggle switch (updates displayed prices)
- [ ] Resources page category filter tabs
- [ ] Contact/Demo form client-side validation (required fields + email format) before submit
- [ ] Optional: fade-in-on-scroll animation for section reveals (`IntersectionObserver`) — keep subtle, this audience wants credibility, not flashy motion
- [ ] Smooth scroll for any in-page anchor links (e.g., Home's "View Pricing" if using anchors instead of separate page in some builds)

## 9. ACCESSIBILITY & TECHNICAL NOTES

- Semantic HTML throughout (`<nav>`, `<main>`, `<section>`, `<footer>`, proper heading hierarchy — one `<h1>` per page).
- All images (including the logo and any screenshots) need descriptive `alt` text.
- Color contrast: verify navy-on-white and white-on-navy combinations meet WCAG AA (they should, given the palette above, but double-check teal-on-white for small text — teal `#17A6A0` on white may need to be darkened slightly for body text; fine for large headlines/buttons).
- Buttons and links need visible focus states (`focus:ring` utilities in Tailwind) — this matters both for real accessibility and because the Accessibility Statement page is claiming compliance.
- Mobile-first responsive build: test all 11 pages at 375px, 768px, 1024px, 1440px widths.
- Since this is a **static** site with hosting/domain already purchased, ensure all internal links use relative paths (`features.html`, not absolute URLs) so it works correctly once uploaded to hosting.

---

## 10. CONTENT GAPS TO CONFIRM WITH CLIENT BEFORE LAUNCH

- [ ] Final pricing figures (Starter/Professional/Enterprise, monthly vs. annual)
- [ ] Real demo video file/link
- [ ] Real product screenshots (audit screen, dashboard, corrective action tracker, photo documentation)
- [ ] Square Appointments embed code
- [ ] Form backend/service for Contact and Demo request forms
- [ ] Founder's real first-person "About" story and credentials
- [ ] Business email/phone for Contact page and footer
- [ ] Legal copy review (Privacy Policy, Terms, Cookie Policy) by an actual attorney — the scaffolds above are structural placeholders only
- [ ] Any client logos/testimonials for social proof on the Home page
- [ ] Two additional resource assets (Survey Readiness Checklist, Kitchen Audit Best Practices, Deficiency Prevention Tips) — either sourced from the client or drafted using the existing audit tool content as a base

---

This spec is intentionally exhaustive — every section, on every page, with either exact source copy or clearly marked placeholder copy — so it can be handed directly to an AI coding tool or a developer and built page-by-page without further clarification.