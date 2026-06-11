# QevixAi landing page plan for a professional Next.js launch

## Research findings from Wavin and the category

Wavin.ai uses a long-form single-page structure with a sticky navigation, an outcome-led hero, a flagship AI voice-agent section, a live call simulation, trust/client logos, a broader “what we build” services stack, “why Wavin”, client results, process, pricing, FAQ, a closing CTA, and a footer with contact and legal links. Its strongest pattern is the narrative order: problem first, then flagship capability, then proof, then process, then conversion. That structure is worth borrowing for QevixAi because it matches how business buyers evaluate a higher-consideration B2B service. citeturn0view0turn1view0turn18view0

The parts of Wavin that should **not** be copied directly are just as important as the parts that should. Wavin broadens the offer into social media, AI video, paid advertising, website development, CRM work, and database reactivation, which makes the site read more like an automation agency than a tightly positioned product. Its page also exposes at least one JavaScript-dependent section with a visible fallback message, and its FAQ appears to repeat the same answer text across multiple questions, both of which undermine polish and usability. QevixAi should keep Wavin’s section breadth but remove the agency sprawl, reduce JS dependence, and ship fully written, unique answers everywhere. citeturn0view0turn1view0

Across the category, the recurring value proposition is very consistent. Goodcall emphasises that businesses can launch a custom phone AI quickly with no engineering team; RingCentral emphasises 24/7 call handling, natural-language conversations, lead capture, appointments, SMS follow-up, tool integrations, and the ability to work with an existing phone system; Smith.ai emphasises answering calls, lead qualification, appointment booking, and intake; Slang shows the power of vertical specificity by positioning itself as the AI “superhost” for restaurants. This tells us QevixAi’s homepage should focus on five plain-English jobs: answer calls, qualify leads, book appointments, answer routine questions, and hand off complex conversations. citeturn11view0turn11view1turn11view2turn11view3

A final market takeaway is that the category leaders sound practical, not futuristic. Their best messaging is about coverage, speed, bookings, lead conversion, and fewer missed calls, not abstract claims about AI. Nielsen Norman Group’s guidance aligns with this: a homepage must communicate a clear value proposition in the hero and “speak the users’ language”, while “powered by AI” on its own is not a value proposition. citeturn10view0turn10view1

## Positioning and visual direction

The homepage should position QevixAi in one sentence:

> **QevixAi is the AI receptionist for any business that needs to answer every call, qualify new enquiries, and book appointments without hiring more front-desk coverage.**

That statement is strong because it describes the user’s desired outcome, not the underlying technology. NN/G’s guidance is explicit that a homepage should communicate a distinctive value proposition clearly and avoid jargon, and that strong value propositions are about the *what* for the user, not the *how* behind the product. citeturn10view0turn10view1

Visually, QevixAi should move away from “AI-looking” tropes and towards established enterprise SaaS cues: a predominantly light interface, restrained use of colour, generous whitespace, strong typography, informative product mockups, and minimal motion. NN/G advises that homepage imagery should accurately reflect the brand and avoid purely decorative graphics, while web.dev notes that the cursor is an essential affordance for understanding what is interactive. That combination supports your instinct to remove a decorative custom cursor and replace it with familiar, trustworthy interaction patterns. citeturn10view0turn15view0

Motion should be subtle rather than theatrical. Use small fades, gentle card lifts, and short transitions; do not use parallax, screen-wide particle effects, or attention-hijacking cursor behaviour. Respect reduced-motion preferences from the start, because the `prefers-reduced-motion` media query exists specifically so users can ask websites to minimise non-essential motion. Visible keyboard focus states and fully labelled forms are also non-negotiable for credibility and accessibility. citeturn17search1turn10view3turn10view2

Because this is a B2B purchase with a considered buying process, the main conversion should be **Book a demo**, not **Buy now**. NN/G’s B2B research notes that B2B sites must support long, complex buying processes, strong calls to action, comparison content, contact information, and lead-generation forms that encourage conversions. For QevixAi, that means a demo-first homepage, a dedicated `/book-demo` route, a contact page, a comparison section, and fully functional forms. citeturn18view0

## Complete website structure and copy plan

The structure below keeps Wavin’s persuasive arc — hero, flagship capability, trust, process, pricing, FAQ, closing CTA — but turns it into a product-led QevixAi story rather than an agency story. It also keeps the homepage broad enough to feel substantial without drifting into unrelated services. citeturn0view0turn1view0turn11view1

| Section | What Codex should build | Final copy direction | Primary action |
|---|---|---|---|
| Header | Sticky top nav on desktop, drawer nav on mobile. Logo left, links centre/right, two CTA buttons. No announcement bar. | Logo: **QevixAi**. Nav: **Product**, **How it works**, **Industries**, **Pricing**, **FAQ**. Secondary button: **See live demo**. Primary button: **Book a demo**. | `See live demo` → `/#demo`  •  `Book a demo` → `/book-demo` |
| Hero | Two-column hero. Left side: copy and CTAs. Right side: polished mockup showing transcript + booking confirmation + summary card. No glowing robot, no 3D AI head, no animated cursor. | Eyebrow: **AI receptionist for businesses that cannot afford missed calls**. H1: **Answer every call. Book more appointments. Stay available 24/7.** Body: **QevixAi answers calls, handles common questions, qualifies leads and books directly into your workflow, so your team can focus on work that actually needs a human.** Microproof row: **No voicemail gaps • No complex phone trees • No extra reception shift** | `Book a demo` → `/book-demo`  •  `Watch a sample call` → `/#demo` |
| Credibility strip | Static row beneath hero. Use text chips, not fake logos. | **Built for clinics, medspas, salons, home services, real-estate teams, legal offices, restaurants and multi-location businesses.** Add capability chips: **24/7 call answering**, **Lead capture**, **Appointment booking**, **Warm transfer**, **Call summaries** | None; this is reassurance, not a CTA |
| Core capability section | Four-card grid with one sentence each. This is the product equivalent of Wavin’s flagship service section. | Heading: **One AI receptionist. Four jobs done well.** Cards: **Answer every call**; **Qualify new enquiries**; **Book appointments automatically**; **Transfer with context when a human is needed** | `Talk to sales` → `/contact` |
| Live demo section | Transcript-led call simulation with tabs for 3 industries. Make it look like a real product panel. If real audio clips exist, add a native audio player; if not, ship transcript-only on day one. | Heading: **See how QevixAi handles a real call.** Tab examples: **Dental clinic**, **Home services**, **Property team**. Each tab shows caller text, AI response, captured details, and final action. | `Book a demo` → `/book-demo` |
| Comparison section | Clean comparison chart between QevixAi, voicemail, rigid IVR, and extra admin cover. This is a strong B2B trust section and aligns with support for comparison content. | Heading: **Better than voicemail. Simpler than an IVR. More scalable than adding cover for every missed shift.** Rows: after-hours coverage, simultaneous calls, bookings, lead qualification, handoff notes, routine FAQs. | `See pricing` → `/#pricing` |
| How it works | Four-step process with simple numbered visuals. Product-focused, not “strategy call agency workflow”. | Heading: **Go live in a few simple steps.** Steps: **Connect your call flow**, **Add your business information**, **Set booking and escalation rules**, **Go live and refine with real call insights** | `Book a demo` → `/book-demo` |
| Industries section | Eight-card grid. Each card gets one use-case sentence. This converts the “any domain” claim into believable specificity. | Heading: **Built for any business that runs on calls.** Cards: **Dentists**, **Medspas**, **Salons**, **Home services**, **Property teams**, **Legal offices**, **Restaurants**, **Multi-location businesses**. Each card explains one concrete thing QevixAi handles. | `Talk about your industry` → `/book-demo?source=industries` |
| Control and transparency section | Product-ui section showing admin controls, not hype visuals. Include business hours, escalation rules, caller summaries, transcript history, and team notifications. | Heading: **You stay in control. QevixAi does the repetitive work.** Body: **Set business hours, define when calls are transferred, review conversation summaries, and refine what the AI should answer on its own.** | `Contact sales` → `/contact` |
| Pricing section | Three-column pricing framework without invented prices. Use “custom quote” if pricing is not final. This is real, not dummy, because each plan routes to a quote form. | Heading: **Pricing that matches how your business handles calls.** Plans: **Starter** (single workflow), **Growth** (more call volume and richer routing), **Multi-location** (multiple teams or locations). For each: ideal customer, included capabilities, support level. Use footer note: **Custom quote based on call volume, workflows, and locations.** | Each card button → `/book-demo?plan=starter|growth|multi-location` |
| FAQ | Accordion with genuinely different answers. No repeated answer text. | Heading: **Questions business owners ask before they switch.** Suggested questions are in the table below. | None inside the accordion; add a footer text link to `/contact` |
| Closing CTA | Full-width final section, likely with a light background and a compact form or two CTA buttons. | Heading: **Ready to stop losing calls and start capturing more opportunities?** Body: **Book a demo and we’ll show you how QevixAi would answer calls for your business, route real scenarios, and fit into your current process.** | `Book a demo` → `/book-demo`  •  `Contact sales` → `/contact` |
| Footer | Proper footer with company summary, nav, contact route, legal links, and socials only if appropriate. | Short line: **QevixAi helps businesses answer every call, book more appointments and stay responsive around the clock.** Links: Product, How it works, Industries, Pricing, FAQ, Book demo, Contact, Privacy, Terms. | Footer links go to real routes or anchors |

The FAQ copy should be fully written before launch. Wavin’s own FAQ appears to repeat nearly identical answers under multiple questions, which is exactly the sort of unfinished detail that makes a site feel less established. citeturn1view0

| FAQ question | Recommended answer summary |
|---|---|
| **How quickly can QevixAi be set up?** | Explain that setup depends on call flow complexity, but most businesses can review configuration and start testing quickly once business details, hours, call rules, and booking workflows are provided. Do not promise a timeframe you cannot deliver operationally. |
| **Do I need technical staff to use it?** | No. Position QevixAi as a business tool, not a developer product. Explain that admins only need to provide business information, routing rules, and booking preferences. |
| **What happens when the AI cannot handle a call?** | It transfers the call, creates a callback task, or follows your escalation rules. Make clear that humans stay in the loop for exceptions. |
| **Can it answer questions as well as book appointments?** | Yes, if those questions are based on your business information, such as opening hours, service categories, locations, and basic policies. |
| **Will it sound natural to callers?** | Say it is designed to sound conversational and professional, while still prioritising clarity and speed over gimmicky “human imitation” claims. |
| **Can it work outside office hours?** | Yes. Make after-hours coverage a core benefit. |
| **Can it work for my industry?** | Yes, if your business handles repeat call patterns such as enquiries, bookings, lead intake, routing, or status questions. |
| **How do I get a quote?** | Tell visitors to use the demo form with industry, call volume, and workflow details so QevixAi can recommend the right setup. |

## Routes, buttons, forms, and states

To meet your “no dummy things” requirement, the site needs more than a single `/` page. Wavin’s own footer includes contact information as well as Privacy Policy and Terms links; QevixAi should also ship with real destinations for legal and conversion paths from day one. citeturn1view0

| Route | Purpose | Required content |
|---|---|---|
| `/` | Main landing page | All sections listed above |
| `/book-demo` | Primary lead-conversion page | Full demo request form, plan preselection via query string, reassurance copy, optional embedded calendar later |
| `/book-demo/success` | Submission confirmation | Thank-you state, expected next step, links back to homepage and contact |
| `/contact` | General enquiries page | Contact form, business enquiry copy, optional direct email/phone once you have your own details |
| `/contact/success` | Contact confirmation | Thank-you state, next-step message |
| `/privacy` | Website privacy notice | Data collected, form handling, analytics/cookies, retention, third-party processors, contact for data requests |
| `/terms` | Website terms of use | Acceptable use, IP, disclaimers, limitation of liability, governing law, changes |
| `/404` or `not-found.tsx` | Real error page | Friendly message and button back to homepage |

The button and link map should be explicit so Codex does not leave anything hanging:

| Click target | Destination | Notes |
|---|---|---|
| Header logo | `/` | Always returns home |
| Product | `/#product` | Anchor to core capability section |
| How it works | `/#how-it-works` | Anchor |
| Industries | `/#industries` | Anchor |
| Pricing | `/#pricing` | Anchor |
| FAQ | `/#faq` | Anchor |
| See live demo | `/#demo` | Anchor |
| Book a demo | `/book-demo` | Main conversion route |
| Hero secondary CTA | `/#demo` | Never a dead button |
| Capability CTA | `/contact` | Use when visitor wants a conversation rather than a scheduled demo |
| Pricing card CTA | `/book-demo?plan=starter|growth|multi-location` | Query string pre-fills route context |
| Footer contact link | `/contact` | Not an external placeholder |
| Privacy | `/privacy` | Real page |
| Terms | `/terms` | Real page |
| Social icons | Hide until real profiles exist, or point to platform home pages only as an intentional temporary measure | If you insist on temporary social links, use code values such as `https://www.linkedin.com/`, `https://www.instagram.com/`, `https://www.facebook.com/`, and mark them `target="_blank"` with `rel="noopener noreferrer"` |

For forms, the safest “no dummy” pattern is not to expose fake email or phone details. Instead, make `/book-demo` and `/contact` the real working contact channels. That means every CTA can remain meaningful even before your own phone number, mailbox, or calendar booking link is ready. Wavin’s public footer currently shows an email address and two phone numbers, but that is useful as a **layout reference**, not as data to reuse on QevixAi. Publishing another company’s contact details on a live site would be misleading. citeturn1view0

The forms themselves should follow a real submission flow: HTML validation on the fields, server-side validation on the action, a loading state on the submit button, inline error messages in plain text, and a redirect to a success page after a valid submission. Next.js Server Actions support that cleanly, and web.dev’s accessibility guidance is clear that forms need explicit labels and text-based error messages near the fields that failed validation. citeturn19view0turn10view2

For early-stage trust, avoid fake testimonials, fake review stars, and invented client logos. NN/G notes that social proof can increase credibility, but it can also make interfaces too busy and even slow the page; the FTC’s endorsement guidance says endorsements must be honest and not misleading. Until QevixAi has real customer proof, use a “Built for…” industry strip, a comparison chart, and concrete product screenshots instead. citeturn12view0turn16search15

## Next.js build specification for Codex

The technical architecture should use Next.js App Router, a dedicated marketing route group, Server Components by default, Server Actions for lead forms, the Metadata API for SEO and sharing, and `next/image` for responsive optimisation. Route Groups are designed exactly for organising marketing routes without affecting the URL path, the Metadata API exists for titles/descriptions/OG images, and the Image component exists for automatic image optimisation and responsive `srcset` generation. citeturn13view1turn10view6turn13view0

```text
src/
  app/
    (marketing)/
      layout.tsx
      page.tsx
      book-demo/
        page.tsx
        success/
          page.tsx
      contact/
        page.tsx
        success/
          page.tsx
      privacy/
        page.tsx
      terms/
        page.tsx
    opengraph-image.tsx
    icon.png
    sitemap.ts
    robots.ts
    not-found.tsx

  components/
    marketing/
      site-header.tsx
      mobile-nav.tsx
      hero.tsx
      credibility-strip.tsx
      capability-grid.tsx
      live-demo.tsx
      comparison-table.tsx
      how-it-works.tsx
      industries-grid.tsx
      control-panel.tsx
      pricing-grid.tsx
      faq.tsx
      cta-band.tsx
      site-footer.tsx
    forms/
      demo-request-form.tsx
      contact-form.tsx
      submit-button.tsx
    ui/
      button.tsx
      badge.tsx
      card.tsx
      input.tsx
      textarea.tsx
      select.tsx
      accordion.tsx
      section.tsx
      container.tsx

  content/
    site.ts
    navigation.ts
    faq.ts
    pricing.ts
    industries.ts
    demo-transcripts.ts

  lib/
    actions/
      submit-demo-request.ts
      submit-contact-request.ts
    validation/
      demo-request-schema.ts
      contact-schema.ts
    analytics/
      events.ts
    utils/
      cn.ts
      formatters.ts
```

Codex should keep most of the homepage server-rendered and progressively enhance only the interactive pieces. That matters both for performance and for resilience: Wavin currently exposes a section that fails back to “This section requires JavaScript to load properly”, while Next.js forms defined in Server Components can still function without JavaScript. The result should be that the entire landing page remains readable and the forms remain usable even if client-side scripts are delayed. citeturn0view0turn19view0

The concrete engineering rules for the build should be these:

| Area | Requirement |
|---|---|
| Rendering | Server Components by default. Client Components only for mobile nav, accordions, form-state UX, and small interactive demo tabs. |
| Forms | Use Server Actions for `/book-demo` and `/contact`. Validate on the server. Redirect to success pages after submission. |
| Images | Use `next/image` for every mockup or illustration. Provide `sizes` on responsive images so the browser does not fetch needlessly large assets. |
| Metadata | Use the Metadata API for page titles, descriptions, OG images, favicon, and share previews. |
| Content management | Store all copy in typed content files under `/content` so changing the site later does not require hunting through JSX. |
| Analytics | Fire events for hero CTA, demo CTA, pricing CTA, and successful form submissions. |
| Styling | Tailwind or CSS Modules are both fine; the important constraint is restraint and consistency, not the styling library. |
| Motion | Support `prefers-reduced-motion`; no motion should be required to understand the page. |
| Accessibility | All buttons and links must have visible focus states, all fields must have labels, and all form errors must be announced in text. |

The performance bar should be explicit in the brief: aim for Core Web Vitals thresholds of LCP at or below 2.5 seconds, INP at or below 200 milliseconds, and CLS at or below 0.1. web.dev also documents that better Core Web Vitals correlate with business outcomes, including improved sales, session duration, and conversion metrics across multiple case studies. citeturn10view4turn14view0

This is the brief I would hand to Codex:

```text
Build a polished, production-ready Next.js App Router marketing site for QevixAi.

Objective:
Create a professional B2B SaaS landing site for an AI receptionist product. The tone should feel credible, calm, and established — not futuristic or gimmicky.

Brand promise:
QevixAi helps businesses answer every call, qualify enquiries, book appointments, and stay available 24/7.

Visual direction:
- Light, premium SaaS aesthetic
- Strong typography and whitespace
- Informative UI mockups, not decorative AI art
- No custom cursor
- No parallax or heavy animation
- Motion must respect prefers-reduced-motion
- Clear focus states and accessible forms

Pages required:
- /
- /book-demo
- /book-demo/success
- /contact
- /contact/success
- /privacy
- /terms
- real not-found page

Homepage sections required:
- Sticky header
- Hero
- Credibility strip
- Core capability grid
- Live demo section
- Comparison section
- How it works
- Industries grid
- Control/transparency section
- Pricing
- FAQ
- Final CTA
- Footer

Functional requirements:
- Every button links to a real route or anchor
- Demo and contact forms must submit through Server Actions
- Show loading, success, and validation states
- No lorem ipsum
- No empty hrefs
- No fake testimonials
- No copied competitor data
- Metadata, OG image, favicon, sitemap, robots included

Technical requirements:
- Next.js App Router
- Server Components by default
- Route group for marketing pages
- next/image for all images
- Content stored in typed data files
- Mobile-first responsive layout
- Clean semantic HTML
- Lighthouse-friendly implementation
```

## Launch criteria and content governance

Before launch, the site should pass a simple but strict acceptance bar. This is what separates a “nice concept page” from a genuinely credible software company site. NN/G’s B2B guidance highlights strong calls to action, comparison charts, contact information, multimedia used well, and lead-generation forms that encourage conversion; web.dev and W3C guidance add performance, visible focus, reduced motion, and accessible form behaviour. citeturn18view0turn10view3turn10view2turn17search10

| Category | Must be true before launch |
|---|---|
| Content | No copied Wavin copy, no fake client wins, no duplicated FAQ answers, no placeholder logos |
| Conversion | Every CTA works, forms submit, success pages exist, pricing buttons prefill the right plan |
| Accessibility | Fully keyboard navigable, visible focus on every interactive element, form labels and error text, reduced-motion support |
| Performance | Main content visible without JS, optimised hero image, no layout jumps, no unnecessary animation libraries |
| Trust | Real legal pages, real routes, clear product language, no deceptive endorsements |
| Mobile | Hero, nav, forms, pricing cards, FAQ, and footer all work cleanly on small screens |
| Shareability | Metadata, OG image, favicon, and sensible social previews are present |

There are also some things QevixAi should explicitly **not** ship. Do not ship a decorative custom cursor. Do not ship auto-playing audio. Do not ship fake review stars or “trusted by” logos you do not actually have. Do not publish Wavin’s public phones or email on your own live site. Do not hide meaningful content behind fragile animations or JS-only components. Do not leave Privacy or Terms as empty shells. Wavin’s visible JS fallback and repeated FAQ copy show exactly how small unfinished details can make an otherwise ambitious page feel less mature. citeturn0view0turn1view0

After the main site is live, the best next expansion is not “more homepage sections”; it is vertical landing pages. Slang’s positioning shows how effective domain-specific framing can be, and RingCentral and Smith both reinforce that the market understands receptionist products through concrete workflows and use cases. So the first expansion after launch should be pages such as `/ai-receptionist-for-dentists`, `/ai-receptionist-for-medspas`, `/ai-receptionist-for-home-services`, and `/ai-receptionist-for-real-estate`, each built from the same design system as the core site. citeturn11view3turn11view1turn11view2