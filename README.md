# Sibam Sasmal — Production Developer Portfolio

A responsive, high-performance developer portfolio engineered for **Sibam Sasmal**, Computer Science undergraduate (B.Tech CSE, graduating 2027) at NIST University, Full-Stack Developer (Django, React, Python, Java), and AI/ML Computer Vision enthusiast.

Built with **React 18**, **Vite**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, matching a signature crimson-and-black aesthetic in dark mode and an elegant soft-pink theme in light mode.

---

## 🚀 Live Demo & Deployment
- **Production Live URL**: [https://sibamsasmalsportfolio.vercel.app](https://sibamsasmalsportfolio.vercel.app)
- **GitHub Repository**: [https://github.com/sasmalshivam/sibam-sasmal-portfolio](https://github.com/sasmalshivam/sibam-sasmal-portfolio)

---

## 🎨 Visual Design & Architectural Highlights

### 1. Dual-Theme Experience (Dark & Light)
- **Dark Mode**: Deep black-to-crimson radial background gradient (`#080205` → `#100408` → `#18050c`), vibrant `#E50914` crimson accents, and coral-pink (`#FF6B81`) typographic emphasis.
- **Light Mode**: Soft pink-white radial gradient (`#FFF5F7` → `#FEECEF` → `#FDE4E8`) maintaining WCAG AA contrast compliance.
- **Zero-Flicker Hydration**: Pre-paint script eliminates theme flash, synchronizing seamlessly with `localStorage` and OS `prefers-color-scheme`.
- **Floating Theme Toggle**: Smooth floating round sun/moon toggle positioned right above the bottom navigation bar.

### 2. Floating Rounded Red Bottom Navigation Bar
- Centered crimson floating dock (`max-w-[920px]`) with smooth-scroll triggers for **Home**, **About**, **Skills**, **Achievements**, **Projects**, and **Contact**.
- Real-time `IntersectionObserver` scroll-spy with an illuminated active top-bar indicator.
- Fully responsive with iOS safe-area inset adaptation (`env(safe-area-inset-bottom)`).

### 3. Dynamic Section-Specific 3D Avatar System
Features Sibam's signature 3D animated character identity across every section:
- **Hero**: Pulsing concentric red glow rings with `<img src="/animated_3d_portfolio_portrait.svg" alt="Sibam Sasmal 3D portfolio portrait" className="hero-portrait" />`.
- **About**: Tailored red blazer and laptop inside an organic crimson gradient blob frame.
- **Skills**: Crimson hoodie with floating glowing tech logos (Python, React, Django, Tailwind, Java).
- **Achievements / Certificates**: Academic graduation gown and cap with red stole holding a verified diploma.
- **Projects**: Smart-casual button-up shirt pointing toward floating holographic UI dashboards.
- **Contact**: Knitted sweater holding a smartphone and waving warmly.

### 4. Interactive Data Visualizations & Counters
- Animated circular SVG progress rings for core technical proficiencies.
- Smooth count-up animations for verified resume statistics.
- Responsive project cards with category filtering (**All**, **AI & Deep Learning**, **Web & APIs**, **Hackathon Winners**).
- Accessible contact form with input validation and dual transmission handlers (API endpoint + mailto fallback).

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 18** | High-performance UI rendering and component hierarchy |
| **TypeScript** | Type safety, maintainability, and clean interfaces |
| **Vite** | Fast bundling, hot module replacement (HMR), and build optimization |
| **Tailwind CSS** | Utility-first styling with custom design tokens |
| **Framer Motion** | Micro-interactions, scroll-triggered reveals, and smooth transitions |
| **Lucide React** | Lightweight accessible iconography |
| **Vercel** | Global Edge CDN hosting and continuous deployment |

---

## 📂 Repository Structure

```
sibam-sasmal-portfolio/
├── public/
│   ├── avatars/                          # Section-specific 3D avatar renders
│   │   ├── about_avatar.jpg
│   │   ├── achievements_avatar.jpg
│   │   ├── contact_avatar.jpg
│   │   ├── home_avatar.png
│   │   ├── projects_avatar.jpg
│   │   └── skills_avatar.jpg
│   ├── animated_3d_portfolio_portrait.svg # Hero animated SVG portrait
│   └── Sibam_Sasmal_Resume.pdf           # Downloadable single-source-of-truth CV
├── src/
│   ├── components/                       # Reusable UI components
│   │   ├── AnimatedCounter.tsx
│   │   ├── BlobFrame.tsx
│   │   ├── BottomNavBar.tsx
│   │   ├── ConcentricRings.tsx
│   │   ├── ContactForm.tsx
│   │   ├── SectionBadge.tsx
│   │   ├── SkillProgressRing.tsx
│   │   └── ThemeToggle.tsx
│   ├── data/
│   │   └── portfolioData.ts              # Single source of truth for all content
│   ├── hooks/
│   │   ├── useScrollSpy.ts
│   │   └── useTheme.ts
│   ├── sections/                         # Modular single-page sections
│   │   ├── AboutSection.tsx
│   │   ├── AchievementsSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── SkillsSection.tsx
│   ├── App.tsx                           # Master layout
│   ├── index.css                         # Tailwind directives & custom CSS
│   ├── main.tsx                          # DOM mount point
│   └── vite-env.d.ts                     # Environment type definitions
├── .env.example                          # Environment variable template
├── index.html                            # Semantic HTML5 entry with pre-paint theme script
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vercel.json                           # Edge routing & security headers
└── vite.config.ts
```

---

## 💻 Local Development

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### 2. Setup
```bash
# Clone the repository
git clone https://github.com/sasmalshivam/sibam-sasmal-portfolio.git
cd sibam-sasmal-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```
Visit `http://localhost:5173` in your browser.

### 3. Production Build
```bash
npm run build
npm run preview
```

---

## ✏️ How to Edit Content

All portfolio facts, copy, project links, and proficiency metrics are consolidated into a single file:
👉 **`src/data/portfolioData.ts`**

- **Update LinkedIn URL**: Replace the `linkedin` field in `portfolioData.personal`.
- **Adjust Skill Percentages**: Modify values in `portfolioData.topSkills`.
- **Add New Projects**: Append to `portfolioData.projects`.
- **Add Certificates**: Append to `portfolioData.achievements`.

---

## 🌐 Deployment to Vercel

### Option 1: Automatic Git Deployments (Recommended)
1. Push to the `main` branch of `sasmalshivam/sibam-sasmal-portfolio`.
2. Connect the repository in the Vercel dashboard.
3. Configuration settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Set optional environment variable:
   - `VITE_FORMSPREE_ENDPOINT`: Your Formspree or EmailJS endpoint.

---

## 📜 License
© 2026 Sibam Sasmal. All rights reserved.
