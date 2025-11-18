# White Horse Coffee - Design System & Style Guide

## Table of Contents
1. [Overview](#overview)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Spacing System](#spacing-system)
5. [Layout & Grid System](#layout--grid-system)
6. [Component Styles](#component-styles)
7. [Shadows & Elevation](#shadows--elevation)
8. [Animations & Transitions](#animations--transitions)
9. [Border Radius](#border-radius)
10. [Opacity & Transparency](#opacity--transparency)
11. [Interactive States](#interactive-states)
12. [CSS Variables Reference](#css-variables-reference)
13. [Component Examples](#component-examples)

---

## Overview

The White Horse Coffee design system is built on a **clean, modern, and sophisticated aesthetic** that emphasizes:

- **Premium Quality**: Using elegant typography (Archivo font family) and generous whitespace
- **Visual Hierarchy**: Clear distinction between headings, body text, and UI elements through consistent type scales
- **Brand-Centric**: Warm gold primary color (#e1b384) paired with dark neutrals for a premium coffee brand feel
- **Full-Bleed Imagery**: Edge-to-edge images in key sections to create immersive experiences
- **Minimal Ornamentation**: Subtle borders, simple radius, and clean transitions

### Design Principles

1. **Consistency**: All spacing, colors, and typography follow a strict token-based system
2. **Accessibility**: Proper color contrast ratios, readable font sizes (1.2x base scale)
3. **Performance**: CSS-only animations, optimized transitions
4. **Scalability**: CSS custom properties make theme adjustments simple

---

## Color Palette

### Primary Colors

The color system is designed around a warm, premium aesthetic:

| Color Name | Hex Code | CSS Variable | Usage |
|------------|----------|--------------|-------|
| **Primary Gold** | `#e1b384` | `--COLOR-PRIMARY` | Buttons hover, stars, brand accents |
| **Primary Hover** | `#de8d3b` | `--COLOR-PRIMARY-HOVER` | Interactive hover states |
| **Primary Fade** | `rgba(225, 179, 132, 0.05)` | `--COLOR-PRIMARY-FADE` | Subtle backgrounds |
| **Primary Fade Hover** | `rgba(225, 179, 132, 0.1)` | `--COLOR-PRIMARY-FADE-HOVER` | Hover backgrounds |

### Text Colors

| Color Name | Hex Code | CSS Variable | Usage |
|------------|----------|--------------|-------|
| **Text Dark** | `#030302` | `--COLOR-TEXT-DARK` | Headers, dark UI elements, footer |
| **Text Primary** | `#2C2926` | `--COLOR-TEXT` | Body text, product names |
| **Text Light** | `#6b6967` | `--COLOR-TEXT-LIGHT` | Secondary text, descriptions |

### Text Opacity Variations

For nuanced text treatments:

| Opacity Level | CSS Variable | Usage |
|---------------|--------------|-------|
| 35% | `--COLOR-A35` `rgba(44, 41, 38, 0.35)` | Very subtle text |
| 70% | `--COLOR-A70` `rgba(44, 41, 38, 0.7)` | Link hover states |
| 75% | `--COLOR-A75` `rgba(44, 41, 38, 0.75)` | Medium emphasis text |

### Background Colors

| Color Name | Hex Code | CSS Variable | Usage |
|------------|----------|--------------|-------|
| **Background** | `#ffffff` | `--COLOR-BG` | Main background |
| **Background Secondary** | `#F7F9FA` | `--COLOR-BG-SECONDARY` | Section alternates (Best Sellers, Reviews) |
| **Background Brighter** | `#f2f2f2` | `--COLOR-BG-BRIGHTER` | Video backgrounds |

### Border Colors

| Color Name | Hex Code | CSS Variable | Usage |
|------------|----------|--------------|-------|
| **Border** | `#f0f0f0` | `--COLOR-BORDER` | Main borders, dividers |
| **Border Light** | `#f6f6f6` | `--COLOR-BORDER-LIGHT` | Subtle borders |
| **Border Hairline** | `#f7f7f7` | `--COLOR-BORDER-HAIRLINE` | Very subtle dividers |
| **Border Dark** | `#bdbdbd` | `--COLOR-BORDER-DARK` | Stronger emphasis borders |

### Special Purpose Colors

| Color Name | Hex Code | CSS Variable | Usage |
|------------|----------|--------------|-------|
| **Sale Background** | `#f9dee5` | `--COLOR-SALE-BG` | Sale badges background |
| **Sale Text** | `#af7b88` | `--COLOR-SALE-TEXT` | Sale text color |
| **Link** | `#2c2926` | `--COLOR-LINK` | Default link color |
| **Link Hover** | `rgba(44, 41, 38, 0.7)` | `--COLOR-LINK-HOVER` | Link hover state |

### Review Card Alternating Color

```css
.review-card:nth-child(odd) {
    background: #fef8f0; /* Warm beige for alternating cards */
}
```

---

## Typography

### Font Family

**Primary Font**: `Archivo` (Google Fonts)

```css
font-family: 'Archivo', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif;
```

**Font Weights Used**:
- `400` - Regular (body text, descriptions)
- `600` - Semi-bold (product names, feature headings, footer headings)
- `700` - Bold (page headings, hero text, section titles)

### Font Size Scale

All font sizes are **1.2x the original base** for improved readability:

| Variable | Size | Original | Usage |
|----------|------|----------|-------|
| `--font-15` | 98.4px | 82px | Extra large displays (unused) |
| `--font-14` | 90px | 75px | Extra large displays (unused) |
| `--font-13` | 82.8px | 69px | Extra large displays (unused) |
| `--font-12` | 74.4px | 62px | Extra large displays (unused) |
| `--font-11` | 67.2px | 56px | Extra large displays (unused) |
| `--font-10` | **63.6px** | 53px | **Hero H1 headings** |
| `--font-9` | 54px | 45px | Large headings |
| `--font-8` | **45.6px** | 38px | **Section H2 headings** (Subscription, About) |
| `--font-7` | **38.4px** | 32px | **Section titles** (Best Sellers) |
| `--font-6` | 32.4px | 27px | Medium headings |
| `--font-5` | 27.6px | 23px | Small headings |
| `--font-4` | **22.8px** | 19px | **Category card titles, Footer H3** |
| `--font-3` | **19.2px** | 16px | **Product names, body text, review text** |
| `--font-2` | **16.8px** | 14px | **Navigation, buttons, prices, footer links** |
| `--font-1` | **14.4px** | 12px | **Announcement bar, review source** |

**Base Font Size**: `19.2px` (1.2 × 16px)

### Typography Usage Patterns

#### Hero Section
```css
h1 {
    font-size: var(--font-10);      /* 63.6px */
    font-weight: 700;
    line-height: 1.1;
    text-transform: lowercase;       /* Unique styling for hero */
}

.hero-subtitle {
    font-size: var(--font-3);        /* 19.2px */
    letter-spacing: 2px;
    text-transform: none;
}
```

#### Section Headings
```css
h2 {
    font-size: var(--font-8);        /* 45.6px */
    font-weight: 700;
    line-height: 1.2;
}

.section-title {
    font-size: var(--font-7);        /* 38.4px */
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
}
```

#### Product Typography
```css
.product-name {
    font-size: var(--font-3);        /* 19.2px */
    font-weight: 600;
    text-transform: uppercase;
}

.product-price {
    font-size: var(--font-2);        /* 16.8px */
    color: var(--text-light);
}
```

#### Navigation
```css
.nav {
    font-size: var(--font-2);        /* 16.8px */
    font-weight: 400;                /* Regular weight for navigation */
}
```

#### Buttons
```css
.btn {
    font-size: var(--font-2);        /* 16.8px */
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
}
```

### Letter Spacing Rules

| Context | Letter Spacing | Usage |
|---------|----------------|-------|
| **Uppercase Headings** | `1px` | Section titles, product names |
| **Subtitles** | `2px` | Hero subtitle, logo subtext |
| **Buttons** | `1px` | All CTA buttons |
| **Logo** | `0.5px` | Logo text |
| **Body Text** | `0` (default) | Paragraphs, descriptions |

### Line Height

```css
--line-height-normal: 1.5;
```

**Specific Overrides**:
- Hero H1: `line-height: 1.1` (tighter for large text)
- Section H2: `line-height: 1.2` (slightly tighter)
- Body paragraphs: `line-height: 1.6` (more readable)

### Text Transform Usage

| Transform | Where Used |
|-----------|------------|
| `uppercase` | Section titles, product names, buttons, navigation |
| `lowercase` | Hero H1 (unique brand styling) |
| `none` | Body text, descriptions, subtitles |

---

## Spacing System

The spacing system follows a **consistent token-based approach**:

### Core Spacing Variables

| Variable | Value | Usage |
|----------|-------|-------|
| `--outer` | 40px | Horizontal padding for centered content containers |
| `--gutter` | 20px | Column gaps in grids |
| `--base` | 19.2px | Base unit for proportional spacing |

### Section Spacing

#### Vertical Margins

```css
/* Large section spacing */
margin: 100px 0;        /* About, Wholesale, Subscription sections */

/* Medium section spacing */
margin: 80px 0;         /* Product categories */

/* Component internal spacing */
margin-bottom: 80px;    /* Best Sellers title */
margin-bottom: 50px;    /* Section titles to content */
margin-bottom: 40px;    /* Features list */
margin-bottom: 30px;    /* Individual features, review text */
margin-bottom: 25px;    /* About section H2 */
margin-bottom: 20px;    /* About paragraphs, stars */
margin-bottom: 15px;    /* Category image to title */
margin-bottom: 10px;    /* Hero H1 to subtitle */
margin-bottom: 8px;     /* Product name to price */
margin-bottom: 5px;     /* Feature H3 to description, reviewer name */
```

#### Horizontal Padding/Spacing

```css
/* Tight edge spacing (full-width effect) */
padding: 0 50px;        /* Product categories, Best Sellers, Subscription */

/* No spacing (full bleed) */
padding: 0;             /* Reviews section, About section, Wholesale */
margin: 0;              /* Reviews grid, About section */

/* Centered content */
padding: 0 40px;        /* Header, Footer */

/* Component internal padding */
padding: 80px 100px;    /* About content, Wholesale content */
padding: 60px;          /* Review card content */
padding: 30px;          /* Product cards */
padding: 12px;          /* Form inputs */
padding: 15px;          /* Newsletter submit button, ticker */
padding: 10px 20px;     /* Announcement bar */
```

### Grid Gaps

```css
/* Large gaps */
gap: 80px;              /* Subscription section columns (reduced to 60px) */
gap: 60px;              /* Footer columns, Subscription actual */

/* Medium gaps */
gap: 50px;              /* Ticker items */
gap: 35px;              /* Navigation items */

/* Standard gaps */
gap: 30px;              /* Product grid */
gap: 25px;              /* Category grid */

/* Small gaps */
gap: 20px;              /* Header icons, feature icon to text */
gap: 15px;              /* Footer links, newsletter form */
gap: 10px;              /* Logo icon to text, payment icons */
```

### Padding Patterns by Component

#### Product Card
```css
padding: 30px;          /* All sides */
margin: 0 auto 25px;    /* Image bottom margin */
```

#### Review Card
```css
padding: 60px;          /* Content area */
min-height: 400px;      /* Consistent card height */
```

#### Footer
```css
padding: 80px 40px 40px;    /* Top | Sides | Bottom */
margin-bottom: 60px;         /* Footer content sections gap */
padding-top: 40px;           /* Footer bottom separator */
```

#### Button
```css
padding: 10px 18px;     /* --btn-top | --btn-left */
```

---

## Layout & Grid System

### Container Widths

```css
/* Maximum content width (centered sections) */
max-width: 1400px;      /* Header content, Footer content */

/* Full-width sections */
max-width: none;        /* Product categories, Best Sellers, Subscription */

/* Full-bleed (no container) */
/* About, Wholesale, Reviews use no max-width and no wrapper */
```

### Grid Patterns

#### 4-Column Grid (Product Categories, Best Sellers)
```css
.categories-grid,
.products-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;      /* Categories */
    gap: 30px;      /* Products */
}
```

#### 2-Column Grid (Reviews)
```css
.reviews-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0;         /* No gap for full-bleed effect */
}
```

#### Split Layout (50/50 - Subscription, About, Wholesale)
```css
.subscription-section,
.about-section,
.wholesale-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;         /* About, Wholesale - full bleed */
    gap: 60px;      /* Subscription - with spacing */
}
```

#### Review Card Internal Grid
```css
.review-card {
    display: grid;
    grid-template-columns: 1fr 1fr;    /* Image | Content */
    min-height: 400px;
}
```

#### Footer Grid
```css
.footer-content {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr;    /* Newsletter wider */
    gap: 60px;
}
```

### Flexbox Patterns

#### Header Layout
```css
.header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 84px;
}
```

#### Navigation
```css
.nav {
    display: flex;
    gap: 35px;
}
```

#### Logo
```css
.logo {
    display: flex;
    align-items: center;
    gap: 10px;
}
```

#### Feature List
```css
.feature {
    display: flex;
    gap: 20px;
    align-items: flex-start;
}
```

#### Review Content
```css
.review-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
```

### Aspect Ratios

```css
/* Square images */
.category-card img {
    aspect-ratio: 1;        /* 1:1 ratio for categories */
}
```

### Image Heights

```css
/* Fixed heights for consistent layouts */
.hero {
    height: 70vh;           /* Hero full viewport height */
}

.subscription-image {
    height: 700px;
}

.about-image,
.wholesale-image {
    height: 100%;
    min-height: 600px;      /* Flexible with minimum */
}

.review-image {
    height: 100%;
    min-height: 400px;
}

.logo svg {
    height: 48px;
}
```

### Object Fit

All images use `object-fit: cover` to maintain aspect ratios while filling containers:

```css
img {
    object-fit: cover;
}
```

---

## Component Styles

### Buttons

**Primary Button** (`.btn`)

```css
.btn {
    display: inline-block;
    background: var(--text-dark);       /* #030302 */
    color: white;
    padding: 10px 18px;                 /* --btn-top | --btn-left */
    border-radius: 3px;                 /* --btn-radius */
    font-size: var(--font-2);           /* 16.8px */
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    border: none;
    transition: background 0.3s;
}

.btn:hover {
    background: var(--primary);         /* #e1b384 gold */
    color: var(--text-dark);
}
```

**Newsletter Submit Button**

```css
.newsletter-form button {
    padding: 15px;
    background: white;
    color: var(--text-dark);
    border: none;
    font-size: var(--font-2);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
}
```

### Cards

#### Product Card

```css
.product-card {
    background: white;
    padding: 30px;
    text-align: center;
    transition: transform 0.3s;
}

.product-card:hover {
    transform: translateY(-5px);        /* Lift effect */
}

.product-card img {
    width: 80%;                         /* Contained within card */
    margin: 0 auto 25px;
}
```

#### Category Card

```css
.category-card {
    text-align: center;
    transition: transform 0.3s;
}

.category-card:hover {
    transform: translateY(-5px);
}

.category-card img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    margin-bottom: 15px;
}
```

#### Review Card

```css
.review-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: white;
    min-height: 400px;
}

.review-card:nth-child(odd) {
    background: #fef8f0;                /* Alternating warm beige */
}
```

### Forms

#### Newsletter Form

```css
.newsletter-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.newsletter-form input {
    padding: 12px;
    border: none;
    background: rgba(255,255,255,0.1);  /* Translucent on dark footer */
    color: white;
    font-size: var(--font-2);
    border-bottom: 1px solid rgba(255,255,255,0.3);
}

.newsletter-form input::placeholder {
    color: rgba(255,255,255,0.6);
}
```

### Navigation

#### Main Navigation

```css
.nav {
    display: flex;
    gap: 35px;
    font-size: var(--font-2);
}

.nav a:hover {
    opacity: 0.7;
}
```

#### Footer Links

```css
.footer-links {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.footer-links a {
    font-size: var(--font-2);
    opacity: 0.9;
    transition: opacity 0.3s;
}

.footer-links a:hover {
    opacity: 1;
}
```

### Special Components

#### Announcement Bar

```css
.announcement-bar {
    background: var(--text-dark);
    color: white;
    text-align: center;
    padding: 10px 20px;
    font-size: var(--font-1);
    overflow: hidden;
    white-space: nowrap;
}
```

#### Ticker/Marquee

```css
.ticker {
    background: white;
    padding: 15px 0;
    overflow: hidden;
    border-bottom: 1px solid var(--border);
}

.ticker-content {
    display: flex;
    gap: 50px;
    animation: scroll-ticker 30s linear infinite;
    white-space: nowrap;
}
```

#### Payment Icons

```css
.payment-icon {
    width: 40px;
    height: 25px;
    background: white;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: 600;
    color: var(--text-dark);
}
```

#### Stars (Reviews)

```css
.stars {
    color: var(--primary);              /* Gold color */
    font-size: var(--font-3);
    margin-bottom: 20px;
}
```

---

## Shadows & Elevation

The design uses **minimal shadows** for a clean, flat aesthetic:

### Text Shadows

**Hero Text Shadow** (only shadow used in the design):

```css
.hero-content {
    text-shadow: 2px 2px 8px rgba(0,0,0,0.3);
}
```

- **Offset**: 2px horizontal, 2px vertical
- **Blur**: 8px
- **Color**: 30% black opacity
- **Purpose**: Ensure text readability over image backgrounds

### Box Shadows

**None used** - The design relies on:
- Hover transforms (`translateY(-5px)`)
- Opacity changes
- Background color transitions

This creates a modern, minimalist look without heavy elevation effects.

---

## Animations & Transitions

### Keyframe Animations

#### Announcement Bar Scroll

```css
@keyframes scroll-left {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}

.announcement-text {
    animation: scroll-left 20s linear infinite;
}
```

- **Duration**: 20 seconds
- **Timing**: Linear (constant speed)
- **Iteration**: Infinite loop
- **Effect**: Seamless horizontal scrolling

#### Ticker Scroll

```css
@keyframes scroll-ticker {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}

.ticker-content {
    animation: scroll-ticker 30s linear infinite;
}
```

- **Duration**: 30 seconds (slower than announcement)
- **Timing**: Linear
- **Iteration**: Infinite loop

### CSS Transitions

#### Button Hover

```css
.btn {
    transition: background 0.3s;
}
```

- **Property**: background-color
- **Duration**: 0.3s
- **Easing**: Default (ease)

#### Card Hover

```css
.product-card,
.category-card {
    transition: transform 0.3s;
}

.product-card:hover,
.category-card:hover {
    transform: translateY(-5px);
}
```

- **Property**: transform
- **Duration**: 0.3s
- **Effect**: Lift up by 5px
- **Easing**: Default (ease)

#### Link/Navigation Hover

```css
.nav a,
.header-icons a {
    /* No explicit transition, instant opacity change */
}

.nav a:hover {
    opacity: 0.7;
}
```

#### Footer Links

```css
.footer-links a {
    transition: opacity 0.3s;
}

.footer-links a:hover {
    opacity: 1;
}
```

### Smooth Scrolling

```css
html {
    scroll-behavior: smooth;
}
```

Enables smooth page navigation for anchor links.

---

## Border Radius

The design uses **minimal, consistent rounding**:

### Border Radius Values

| Variable | Value | Usage |
|----------|-------|-------|
| `--radius` | 3px | General purpose |
| `--btn-radius` | 3px | Button corners |

### Applied Border Radius

```css
/* Buttons */
.btn {
    border-radius: 3px;
}

/* Payment icons */
.payment-icon {
    border-radius: 3px;
}
```

**Images**: No border radius applied - sharp corners for modern look

**Cards**: No border radius - clean rectangular shapes

---

## Opacity & Transparency

### Text Opacity Levels

Defined as CSS variables for text colors:

```css
--COLOR-A35: rgba(44, 41, 38, 0.35);    /* 35% opacity */
--COLOR-A70: rgba(44, 41, 38, 0.7);     /* 70% opacity */
--COLOR-A75: rgba(44, 41, 38, 0.75);    /* 75% opacity */
```

### Interactive Opacity

```css
/* Navigation hover */
.nav a:hover,
.header-icons a:hover {
    opacity: 0.7;
}

/* Footer links */
.footer-links a {
    opacity: 0.9;                       /* Default */
}

.footer-links a:hover {
    opacity: 1;                         /* Full opacity on hover */
}

/* Footer text */
.footer p {
    opacity: 0.9;
}

/* Footer bottom */
.footer-bottom {
    opacity: 0.7;
}
```

### Background Transparency

```css
/* Newsletter inputs on dark background */
.newsletter-form input {
    background: rgba(255,255,255,0.1);          /* 10% white */
    border-bottom: 1px solid rgba(255,255,255,0.3);  /* 30% white */
}

/* Placeholder text */
.newsletter-form input::placeholder {
    color: rgba(255,255,255,0.6);               /* 60% white */
}

/* Footer separator */
.footer-bottom {
    border-top: 1px solid rgba(255,255,255,0.2); /* 20% white */
}
```

### Hero Subtitle

```css
.hero-subtitle {
    opacity: 0.95;                              /* Slight transparency */
}
```

---

## Interactive States

### Hover States

#### Buttons

```css
/* Default state */
.btn {
    background: var(--text-dark);
    color: white;
}

/* Hover state */
.btn:hover {
    background: var(--primary);     /* Gold #e1b384 */
    color: var(--text-dark);        /* Dark text on gold */
}
```

#### Cards

```css
/* Product & Category Cards */
.product-card:hover,
.category-card:hover {
    transform: translateY(-5px);    /* Lift effect */
}
```

#### Navigation Links

```css
.nav a:hover,
.header-icons a:hover {
    opacity: 0.7;                   /* Fade effect */
}
```

#### Footer Links

```css
.footer-links a:hover {
    opacity: 1;                     /* Full brightness */
}
```

### Focus States

Currently no explicit focus styles defined. For accessibility, consider adding:

```css
.btn:focus,
input:focus {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
}
```

### Active States

No explicit active states defined - relies on default browser behavior.

### Sticky Elements

```css
.header {
    position: sticky;
    top: 0;
    z-index: 1000;
}
```

The header remains visible during scroll.

---

## CSS Variables Reference

### Complete Variable List

```css
:root {
    /* Scrollbar */
    --scrollbar-width: 0px;

    /* Background Colors */
    --COLOR-VIDEO-BG: #f2f2f2;
    --COLOR-BG-BRIGHTER: #f2f2f2;
    --COLOR-BG: #ffffff;
    --COLOR-BG-ALPHA-25: rgba(255, 255, 255, 0.25);
    --COLOR-BG-TRANSPARENT: rgba(255, 255, 255, 0);
    --COLOR-BG-SECONDARY: #F7F9FA;
    --COLOR-BG-SECONDARY-LIGHTEN: #ffffff;
    --COLOR-BG-RGB: 255, 255, 255;

    /* Text Colors */
    --COLOR-TEXT-DARK: #030302;
    --COLOR-TEXT: #2C2926;
    --COLOR-TEXT-LIGHT: #6b6967;

    /* Text Opacity Variations */
    --COLOR-A35: rgba(44, 41, 38, 0.35);
    --COLOR-A70: rgba(44, 41, 38, 0.7);
    --COLOR-A75: rgba(44, 41, 38, 0.75);

    /* Border Colors */
    --COLOR-BORDER: rgb(240, 240, 240);
    --COLOR-BORDER-LIGHT: #f6f6f6;
    --COLOR-BORDER-HAIRLINE: #f7f7f7;
    --COLOR-BORDER-DARK: #bdbdbd;

    /* Primary Brand Colors */
    --COLOR-PRIMARY: #e1b384;
    --COLOR-PRIMARY-HOVER: #de8d3b;
    --COLOR-PRIMARY-FADE: rgba(225, 179, 132, 0.05);
    --COLOR-PRIMARY-FADE-HOVER: rgba(225, 179, 132, 0.1);
    --COLOR-PRIMARY-LIGHT: #ffffff;
    --COLOR-PRIMARY-OPPOSITE: #000000;

    /* Link Colors */
    --COLOR-LINK: #2c2926;
    --COLOR-LINK-HOVER: rgba(44, 41, 38, 0.7);

    /* Sale Colors */
    --COLOR-SALE-BG: #f9dee5;
    --COLOR-SALE-TEXT: #af7b88;

    /* Shorthand Aliases */
    --bg: var(--COLOR-BG);
    --bg-accent: var(--COLOR-BG-SECONDARY);
    --text-dark: var(--COLOR-TEXT-DARK);
    --text: var(--COLOR-TEXT);
    --text-light: var(--COLOR-TEXT-LIGHT);
    --text-a35: var(--COLOR-A35);
    --text-a70: var(--COLOR-A70);
    --text-a75: var(--COLOR-A75);
    --border: var(--COLOR-BORDER);
    --primary: var(--COLOR-PRIMARY);
    --primary-hover: var(--COLOR-PRIMARY-HOVER);

    /* Layout */
    --HEADER-HEIGHT: 84px;
    --outer: 40px;
    --gutter: 20px;

    /* Border Radius */
    --radius: 3px;
    --btn-radius: 3px;

    /* Button Spacing */
    --btn-top: 10px;
    --btn-left: 18px;

    /* Font Sizes (1.2x base scale) */
    --font-15: 98.4px;
    --font-14: 90px;
    --font-13: 82.8px;
    --font-12: 74.4px;
    --font-11: 67.2px;
    --font-10: 63.6px;
    --font-9: 54px;
    --font-8: 45.6px;
    --font-7: 38.4px;
    --font-6: 32.4px;
    --font-5: 27.6px;
    --font-4: 22.8px;
    --font-3: 19.2px;
    --font-2: 16.8px;
    --font-1: 14.4px;

    /* Typography Base */
    --base: 19.2px;
    --line-height-normal: 1.5;
}
```

---

## Component Examples

### Example 1: Product Card Component

**HTML Structure**:
```html
<div class="product-card">
    <img src="image.jpg" alt="Product Name">
    <h3 class="product-name">White Knight Espresso Blend</h3>
    <p class="product-price">From $19.00</p>
</div>
```

**CSS**:
```css
.product-card {
    background: white;
    padding: 30px;
    text-align: center;
    transition: transform 0.3s;
}

.product-card:hover {
    transform: translateY(-5px);
}

.product-card img {
    width: 80%;
    margin: 0 auto 25px;
}

.product-name {
    font-size: var(--font-3);       /* 19.2px */
    font-weight: 600;
    margin-bottom: 8px;
    text-transform: uppercase;
}

.product-price {
    font-size: var(--font-2);       /* 16.8px */
    color: var(--text-light);       /* #6b6967 */
}
```

**Design Notes**:
- White background contrasts with grey section background
- 30px padding on all sides for breathing room
- Image at 80% width creates containment within card
- Uppercase product name for emphasis
- Light grey price for hierarchy
- Hover lift effect adds interactivity

---

### Example 2: Feature List Component

**HTML Structure**:
```html
<div class="features">
    <div class="feature">
        <div class="feature-icon">📦</div>
        <div>
            <h3>Ships Free Australia Wide</h3>
            <p>Free shipping on all coffee subscriptions.</p>
        </div>
    </div>
</div>
```

**CSS**:
```css
.features {
    margin-bottom: 40px;
}

.feature {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
    align-items: flex-start;
}

.feature-icon {
    font-size: 40px;
    flex-shrink: 0;            /* Prevent icon shrinking */
}

.feature h3 {
    font-size: var(--font-3);   /* 19.2px */
    font-weight: 600;
    margin-bottom: 5px;
    text-transform: uppercase;
}

.feature p {
    font-size: var(--font-2);   /* 16.8px */
    color: var(--text-light);
    margin: 0;
}
```

**Design Notes**:
- Horizontal flex layout with icon on left
- Large 40px emoji icon for visual interest
- 20px gap between icon and text
- Uppercase heading for emphasis
- Light grey description text for hierarchy

---

### Example 3: Button Component

**HTML Structure**:
```html
<button class="btn">Shop Candy Mountain</button>
```

**CSS**:
```css
.btn {
    display: inline-block;
    background: var(--text-dark);           /* #030302 */
    color: white;
    padding: var(--btn-top) var(--btn-left); /* 10px 18px */
    border-radius: var(--btn-radius);       /* 3px */
    font-size: var(--font-2);               /* 16.8px */
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    border: none;
    transition: background 0.3s;
}

.btn:hover {
    background: var(--primary);             /* #e1b384 */
    color: var(--text-dark);
}
```

**Design Notes**:
- Dark background for strong contrast
- Uppercase text with letter spacing for importance
- Semi-bold weight (600) for readability
- 3px border radius for subtle softness
- Smooth transition to gold on hover
- Text color inverts on hover for contrast

---

### Example 4: Review Card Component

**HTML Structure**:
```html
<div class="review-card">
    <img class="review-image" src="image.jpg" alt="Review">
    <div class="review-content">
        <div class="stars">★★★★★</div>
        <p class="review-text">Great coffee!</p>
        <div class="reviewer-name">John D</div>
        <div class="review-source">Google Review</div>
    </div>
</div>
```

**CSS**:
```css
.review-card {
    display: grid;
    grid-template-columns: 1fr 1fr;    /* 50/50 split */
    background: white;
    min-height: 400px;
}

.review-card:nth-child(odd) {
    background: #fef8f0;               /* Warm alternating color */
}

.review-image {
    width: 100%;
    height: 100%;
    min-height: 400px;
    object-fit: cover;
}

.review-content {
    padding: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;           /* Vertical centering */
}

.stars {
    color: var(--primary);             /* #e1b384 gold */
    font-size: var(--font-3);          /* 19.2px */
    margin-bottom: 20px;
}

.review-text {
    font-size: var(--font-3);
    line-height: 1.6;
    margin-bottom: 30px;
    color: var(--text);
}

.reviewer-name {
    font-size: var(--font-2);
    font-weight: 600;
    margin-bottom: 5px;
}

.review-source {
    font-size: var(--font-1);          /* 14.4px smallest */
    color: var(--text-light);
}
```

**Design Notes**:
- 50/50 grid split between image and content
- Alternating background colors for visual interest
- Image fills entire left half with cover fit
- Content vertically centered in right half
- Gold stars match brand color
- Typography hierarchy: text > name > source
- Generous 60px padding for readability

---

### Example 5: Header Component

**HTML Structure**:
```html
<header class="header">
    <div class="header-content">
        <div class="logo">
            <svg>...</svg>
            <div>
                <div>WHITE HORSE</div>
                <div>COFFEE</div>
            </div>
        </div>
        <nav class="nav">
            <a href="#shop">Shop</a>
            <a href="#subscriptions">Subscriptions</a>
        </nav>
        <div class="header-icons">
            <a href="#account">👤</a>
            <a href="#search">🔍</a>
        </div>
    </div>
</header>
```

**CSS**:
```css
.header {
    background: var(--text-dark);      /* #030302 */
    color: white;
    position: sticky;                  /* Stays on scroll */
    top: 0;
    z-index: 1000;
}

.header-content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 var(--outer);           /* 0 40px */
    display: flex;
    align-items: center;
    justify-content: space-between;    /* Logo left, nav center, icons right */
    height: var(--HEADER-HEIGHT);      /* 84px */
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
}

.logo svg {
    width: 48px;
    height: 48px;
    fill: white;
}

.nav {
    display: flex;
    gap: 35px;
    font-size: var(--font-2);          /* 16.8px */
}

.nav a:hover {
    opacity: 0.7;
}

.header-icons {
    display: flex;
    gap: 20px;
}
```

**Design Notes**:
- Dark background for strong contrast with page
- Sticky positioning keeps header visible on scroll
- Three-part flex layout: logo | nav | icons
- Fixed 84px height for consistency
- 35px gap between nav items for breathing room
- Hover opacity fade for subtle interactivity

---

## Best Practices

### When to Use Variables

1. **Always use CSS variables** for colors, spacing, and typography
2. **Reference semantic variables** (`--text-light`) over raw values (`#6b6967`)
3. **Use shorthand aliases** (`--primary`) when they exist

### Typography Hierarchy

1. **Headings**: Use bold weight (700) for major headings
2. **Subheadings**: Use semi-bold (600) for feature headings, product names
3. **Body text**: Use regular (400) for descriptions, paragraphs
4. **Uppercase**: Reserve for section titles, product names, buttons
5. **Letter spacing**: Add 1-2px for uppercase text

### Spacing Guidelines

1. **Large sections**: 80-100px vertical margin
2. **Section elements**: 25-50px margin bottom
3. **Component spacing**: 15-30px between related elements
4. **Micro spacing**: 5-10px for tight groupings

### Layout Patterns

1. **Full-width sections**: Remove max-width, use edge-to-edge padding
2. **Centered content**: max-width 1400px with auto margins
3. **Full-bleed images**: No container, grid with gap: 0
4. **Grid columns**: 4 columns for products, 2 for reviews/splits

### Color Usage

1. **Primary gold**: Use sparingly for accents, hovers, important elements
2. **Dark text**: Use for headers, dark UI elements
3. **Light grey text**: Use for secondary information, prices, descriptions
4. **White backgrounds**: Use for cards on grey sections
5. **Alternating backgrounds**: Use `#fef8f0` for warm variation

---

## Accessibility Considerations

### Current Accessibility Features

1. **Color contrast**: Text colors meet WCAG AA standards
2. **Font size**: Base 19.2px (1.2x) improves readability
3. **Line height**: 1.5 for body text, 1.6 for long paragraphs
4. **Link styling**: Clear hover states with opacity changes

### Recommended Improvements

1. **Focus states**: Add visible focus outlines for keyboard navigation
2. **Alt text**: Ensure all images have descriptive alt attributes
3. **ARIA labels**: Add labels for icon-only buttons
4. **Skip links**: Add skip-to-content link for keyboard users
5. **Motion preferences**: Respect `prefers-reduced-motion` for animations

```css
/* Example: Reduced motion */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
```

---

## Design System Maintenance

### Adding New Colors

1. Add to `:root` with `--COLOR-` prefix
2. Create semantic alias if needed (e.g., `--accent: var(--COLOR-ACCENT)`)
3. Document in color palette section
4. Ensure WCAG AA contrast ratios

### Adding New Font Sizes

1. Follow 1.2x scaling pattern
2. Add to font size scale table
3. Create CSS variable with `--font-` prefix
4. Document usage examples

### Adding New Components

1. Follow existing patterns (flexbox/grid, spacing variables)
2. Include hover states
3. Use semantic class names (BEM recommended)
4. Document in component examples
5. Ensure accessibility

---

## File Structure Recommendations

```
/coffee-frontend
├── index.html
├── STYLE_GUIDE.md (this file)
├── /assets
│   ├── /images
│   ├── /fonts
│   └── /icons
├── /css
│   ├── variables.css (extract :root variables)
│   ├── reset.css (normalize/reset)
│   ├── typography.css
│   ├── components.css
│   └── main.css
└── /js
    └── main.js
```

---

## Version History

- **v1.0** - Initial design system based on White Horse Coffee website rebuild
- Font scale: 1.2x base (19.2px)
- Font family: Archivo
- Primary color: #e1b384
- Layout: Full-width sections with 50px edge spacing
