---
name: Botanical Elegance
colors:
  surface: '#faf9f6'
  surface-dim: '#dbdad7'
  surface-bright: '#faf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f0'
  surface-container: '#efeeeb'
  surface-container-high: '#e9e8e5'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1a'
  on-surface-variant: '#424843'
  inverse-surface: '#2f312f'
  inverse-on-surface: '#f2f1ee'
  outline: '#727973'
  outline-variant: '#c1c8c2'
  surface-tint: '#456553'
  primary: '#032517'
  on-primary: '#ffffff'
  primary-container: '#1b3b2b'
  on-primary-container: '#83a590'
  inverse-primary: '#abcfb8'
  secondary: '#725b24'
  on-secondary: '#ffffff'
  secondary-container: '#fcdc98'
  on-secondary-container: '#775f28'
  tertiary: '#122315'
  on-tertiary: '#ffffff'
  tertiary-container: '#273929'
  on-tertiary-container: '#8ea38e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c7ebd4'
  primary-fixed-dim: '#abcfb8'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#2d4d3c'
  secondary-fixed: '#ffdf9b'
  secondary-fixed-dim: '#e2c381'
  on-secondary-fixed: '#251a00'
  on-secondary-fixed-variant: '#59440e'
  tertiary-fixed: '#d3e8d1'
  tertiary-fixed-dim: '#b7ccb6'
  on-tertiary-fixed: '#0e1f11'
  on-tertiary-fixed-variant: '#394b3a'
  background: '#faf9f6'
  on-background: '#1a1c1a'
  surface-variant: '#e3e2e0'
typography:
  display-hero:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 68px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '500'
    lineHeight: 50px
    letterSpacing: -0.01em
  headline-xl-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
    letterSpacing: 0em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  subheading:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.06em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.75rem
  space-xl: 3rem
---

## Brand & Style

This design system expresses high-end hospitality, organic exclusivity, and timeless celebration. Tailored for an elite event venue in Culiacán, Sinaloa, the aesthetic bridges lush natural landscapes with refined architectural poise. The visual narrative balances the raw serenity of botanical surroundings—bamboo groves, warm sunset soil, and open country canopies—with the regal, immaculate details demanded by luxury weddings, galas, and milestone social celebrations.

The UI avoids generic rustic stereotypes. Instead, it pairs editorial minimalism with tactile organic warmth: generous negative space, curated editorial gallery grids, deliberate typographic contrast, and understated golden illumination. The emotional objective is twofold: ignite romantic aspiration while inspiring structural confidence, culminating in frictionless user conversion towards scheduling private guided tours and direct WhatsApp consultations.

## Colors

The palette is rooted in botanical depth, mineral warmth, and sunlit botanicals:

- **Primary (`#1B3B2B` - Deep Forest Bamboo):** A commanding, rich evergreen shade that provides dramatic contrast, anchoring headers, primary call-to-actions, and structural elements.
- **Secondary (`#C5A869` - Warm Brushed Champagne Gold):** A subdued, elegant metallic accent used selectively to draw attention to high-value interactions, event badges, decorative dividing rules, and conversion triggers without being gaudy.
- **Tertiary (`#768A76` - Sunlit Sage):** A soothing botanical mid-tone used for secondary badges, subtle iconography, active state tags, and soft decorative fills.
- **Neutral (`#F9F8F5` - Ivory Sand Canvas):** The foundational ambient background, replacing clinical stark whites with an organic, linen-like cream that flatters wedding and nature photography.

A companion dark neutral (`#161E19` - Charcoal Canopy) handles high-legibility body prose, while crisp, pure white (`#FFFFFF`) is reserved exclusively for elevated card surfaces to maintain luminance against the Ivory Sand canvas.

## Typography

The typographic pairing is built on contrast: editorial romanticism meets modern architectural clarity.

- **Display & Headlines (Playfair Display):** Conveys the gravity, heritage, and romantic poetry appropriate for once-in-a-lifetime events. Italics are employed intentionally for emphasized emotive phrases (e.g., *Momentos inolvidables*).
- **Body & Functional UI (Plus Jakarta Sans):** Delivers clean geometry, open counters, and high legibility across booking interfaces, pricing tables, navigation bars, and mobile viewports.
- **Kickers & Overlines:** Category badges and editorial kickers use `label-sm` rendered in uppercase with subtle positive letter spacing (`0.06em`) to frame headings with institutional refinement.

## Layout & Spacing

The layout utilizes a 12-column responsive fluid grid with maximum container bounds capped at 1280px to preserve editorial balance on ultra-wide screens.

- **Desktop (>= 1024px):** 12 columns, 1.5rem (24px) gutters, and generous 3rem (48px) page margins. Content breathes, allowing hero photography and storytelling sections to anchor the grid with wide-angle breathing room.
- **Tablet (768px - 1023px):** 8 columns, 1.5rem gutters, and 2rem margins. Cards consolidate into dual-column arrangements.
- **Mobile (< 768px):** 4 columns, 1rem (16px) gutters, and 1.25rem (20px) margins. Grids collapse sequentially into single columns, retaining horizontal edge-to-edge swipe containers for visual portfolios and amenities.
- **Rhythm:** Vertical section breaks maintain spacious separation using multiples of `space-xl` (ranging from 4rem to 7rem between primary thematic sections), conveying luxury through uncluttered visual stillness.

## Elevation & Depth

Depth is established through soft, diffused organic luminescence rather than hard digital drop shadows. Surfaces feel like physical stationery and layered vellum resting under warm sunbeams.

- **Ambient Tinted Shadows:** Shadows utilize deep forest undertones (`#1B3B2B` at 4% to 8% alpha) with wide blur radiuses (16px to 32px) and minimal vertical displacement, completely replacing harsh neutral gray blurs.
- **Tonal Layering:** The primary canvas (`#F9F8F5`) nests elevated cards (`#FFFFFF`), while subtle interactive panels and sticky reservation modules employ translucent glass-like surfaces (`rgba(255, 255, 255, 0.88)` with `backdrop-filter: blur(12px)`).
- **Hairline Outlines:** Floating panels, inputs, and venue feature cards feature an ultra-fine border (`1px solid rgba(27, 59, 43, 0.08)`) that delivers delicate structural definition in bright daylight conditions.

## Shapes

The design system incorporates soft architectural radii (`0.25rem` / 4px base, expanding to `0.5rem` / 8px on cards and hero imagery). This creates an organic yet tailored silhouette that avoids both the clinical austerity of sharp corners and the overly casual appearance of exaggerated pill buttons.

Images of the venue grounds and garden gazebos feature deliberate asymmetrical arching masks (e.g., top-left and top-right rounded to `4rem`, bottom corners resting at `0.5rem`) on curated feature layouts to evoke grand garden pavilions and natural entryways.

## Components

- **Buttons:**
  - *Primary (Guided Tour / Book):* Deep Forest Bamboo background (`#1B3B2B`), warm white text, subtle hover lift, transitioning gently to a deeper shade with a delicate gold glow (`box-shadow: 0 4px 20px rgba(197, 168, 105, 0.25)`).
  - *Secondary (WhatsApp Concierge):* A luminous pairing of deep botanical green typography over a subtle sage/sand surface, or gold accent border (`1.5px solid #C5A869`) with an embedded WhatsApp brand badge for high-conversion immediacy.
- **Interactive Cards (Venue Packages & Event Types):**
  - Crisp pure white surfaces over ivory backgrounds. High-ratio imagery (3:2 or 4:5 portrait) with subtle zoom micro-interactions on hover. Includes capacity tags (e.g., "Hasta 500 personas") and seasonal availability badges framed in sage.
- **Form Inputs & Date Pickers:**
  - Open, airy input fields with 1px muted borders (`rgba(27, 59, 43, 0.15)`), active focus rings illuminated with champagne gold (`#C5A869`), and floating labels in Plus Jakarta Sans to facilitate quick date-availability checks.
- **Chips & Filter Pills:**
  - Used for filtering gallery archives (e.g., "Bodas", "XV Años", "Graduaciones", "Explanada Campestre"). Selected state features solid forest green with ivory text; inactive state uses transparent sand backgrounds with soft sage borders.
- **Lead Capture / WhatsApp Sticky Anchor:**
  - A fixed mobile-friendly footer dock offering two decisive actions: direct WhatsApp real-time availability inquiries and a "Schedule Guided Tour" form button.
- **Visual Amenities List:**
  - Monoline botanical icons (air conditioning, dressing suites, lake view, banquet kitchen) paired with brief, elegant labels and hairline divider rules (`rgba(27, 59, 43, 0.08)`).