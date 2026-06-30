# Kevin Joe S — Portfolio

A world-class, premium AI engineer portfolio built with:

- **React 18** (Vite)
- **Tailwind CSS 3**
- **Framer Motion 11**
- **React Icons 5**
- **Unicorn Studio** (animated background)
- **React Type Animation** (hero typewriter)
- **React CountUp** (statistics)
- **React Intersection Observer** (scroll reveal)

## Quick Start

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```

## Folder Structure

```
src/
├── components/
│   ├── UnicornBackground.jsx   # Fixed animated background
│   ├── AnimatedCursor.jsx      # Custom glow cursor
│   ├── LoadingScreen.jsx       # Intro loading animation
│   ├── ScrollProgressBar.jsx   # Top progress bar
│   ├── Navbar.jsx              # Sticky nav + mobile drawer
│   ├── Hero.jsx                # Hero with typing + floating icons
│   ├── About.jsx               # Summary, education, interests
│   ├── Skills.jsx              # Filterable skill cards + bars
│   ├── Experience.jsx          # Work experience timeline
│   ├── Projects.jsx            # Project cards with search/filter
│   ├── Certifications.jsx      # Certs + achievement badges
│   ├── Timeline.jsx            # Journey timeline + stats counters
│   ├── Contact.jsx             # Form with validation + socials
│   └── Footer.jsx              # Footer + back-to-top
├── pages/
│   └── NotFound.jsx            # 404 page
├── hooks/
│   └── index.js                # useScrollProgress, useTheme, useActiveSection, useMousePosition
├── utils/
│   ├── animations.js           # Framer Motion variants
│   └── data.js                 # All portfolio content
├── App.jsx
├── main.jsx
└── index.css
```

## Personalising

All content lives in `src/utils/data.js` — update projects, skills, certifications, and timeline entries there.

Update social links in `Hero.jsx`, `Contact.jsx`, and `Footer.jsx`.

Replace the `KJ` initials avatar with a real photo by swapping the avatar div in `About.jsx` and `Hero.jsx`.

## Unicorn Studio Background

The background uses project ID `JyAZfLA0SbUl5xl5ZX8q`. If it fails to load (ad blockers, CDN issues), the site gracefully falls back to a CSS animated gradient with blob animations.

## Features

- ✅ Dark/Light mode with persistence
- ✅ Animated custom cursor with glow
- ✅ Loading screen
- ✅ Scroll progress bar
- ✅ Sticky navbar with scroll spy
- ✅ Mobile drawer navigation
- ✅ Hero with TypeAnimation
- ✅ Floating tech icons
- ✅ Skills filter + search
- ✅ Project search + tech filter
- ✅ Animated CountUp statistics
- ✅ Contact form with validation
- ✅ SEO meta tags + Open Graph
- ✅ Lazy loading sections
- ✅ Fully responsive
- ✅ WCAG accessible
- ✅ Custom scrollbar
- ✅ robots.txt + sitemap.xml
- ✅ 404 page
- ✅ Back to top button
