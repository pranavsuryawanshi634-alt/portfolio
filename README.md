# Pranav Suryawanshi — Multi-Page Modern Web Developer Portfolio

A modern, fast, responsive multi-page personal portfolio and web development services platform built for **Pranav Rajesh Suryawanshi** using **React 19**, **React Router v7**, **Vite 8**, **Tailwind CSS 4**, and **Lucide Icons**.

Live Website: [portfolio-beta-jade-7gcfig8wpg.vercel.app](https://portfolio-beta-jade-7gcfig8wpg.vercel.app)

---

## 🧭 Multi-Page Routes

The portfolio is structured into dedicated, focused pages with client-side routing:

- **`/` — Home**: Focused landing page with high-impact hero, interactive developer terminal preview, value highlights, brief services overview, top 3 featured projects, and primary call-to-action banner.
- **`/about` — About Me**: Comprehensive biography, development philosophy, verified academic background at Sandip Foundation, Nashik (*CGPA 8.60 / 8.87*), verified hackathon & E-Cell leadership roles, and categorized technical skill matrix.
- **`/services` — Services**: All 5 service cards (*Website Development*, *Custom Web Applications*, *E-Commerce Development*, *Website Redesign*, *Website Maintenance*) with full feature checklists and direct *"Discuss This Service"* routing prefilling the contact inquiry.
- **`/portfolio` — Portfolio**: Filterable project gallery (*All*, *Web Development*, *Custom Web Application*, *Web Utility*, *Demonstrations*) with custom visual mockups, technology tags, live links, GitHub links, and interactive case study modals.
- **`/why-work-with-me` — Why Work With Me**: In-depth breakdown of 6 genuine developer strengths (*Responsive design, clean code, transparent communication, modern tech, usability, testing before handover*) with zero fake claims.
- **`/process` — Process & Workflow**: Transparent 4-step client workflow (*Understand Your Idea*, *Plan & Design*, *Develop & Test*, *Launch & Handover*).
- **`/contact` — Contact & Hire Me**: Direct WhatsApp (`+91 95450 10200`), verified email (`pranavsuryawanshi634@gmail.com`), GitHub & LinkedIn profiles, and interactive project inquiry form supporting auto-selected service parameters.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
```
Generates an optimized, minified production bundle in `dist/` (~109 kB gzipped).

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🛠️ Technology Stack

- **Framework**: React.js 19
- **Routing**: React Router DOM (v7)
- **Bundler & Dev Server**: Vite 8
- **Styling**: Tailwind CSS 4 with custom dark navy palette
- **Typography**: Plus Jakarta Sans & JetBrains Mono
- **Icons**: Lucide React + custom SVG brand icons
- **Deployment**: Vercel ready with `vercel.json` SPA rewrites

---

## 📂 Project Structure

```
portfolio/
├── vercel.json                  # SPA rewrite configuration for Vercel direct links & page refresh
├── index.html                   # HTML template with SEO and OpenGraph meta tags
├── vite.config.js               # Vite configuration with Tailwind CSS plugin
├── package.json                 # Project dependencies & scripts
├── public/
│   └── favicon.svg              # Custom <PS /> brand vector favicon
├── src/
│   ├── main.jsx                 # React root mount with <BrowserRouter>
│   ├── App.jsx                  # Main routing configuration & persistent layout
│   ├── index.css                # Tailwind v4 import, fonts & custom scrollbars
│   ├── data/
│   │   └── portfolioData.js     # 🌟 Centralized data file (edit all content here!)
│   ├── pages/
│   │   ├── HomePage.jsx         # Focused landing page
│   │   ├── AboutPage.jsx        # Dedicated About page
│   │   ├── ServicesPage.jsx     # Dedicated Services page
│   │   ├── PortfolioPage.jsx    # Dedicated Projects gallery page
│   │   ├── WhyWorkWithMePage.jsx# Dedicated Strengths page
│   │   ├── ProcessPage.jsx      # Dedicated 4-step Process page
│   │   ├── ContactPage.jsx      # Dedicated Contact page
│   │   └── NotFoundPage.jsx     # 404 fallback page
│   └── components/
│       ├── Navbar.jsx           # Persistent responsive navigation & mobile drawer
│       ├── Footer.jsx           # Persistent footer with internal & social links
│       ├── ScrollToTop.jsx      # Auto scroll-to-top on route change
│       ├── FloatingScrollTop.jsx# Floating scroll button on long pages
│       ├── Hero.jsx             # Hero section with interactive terminal & CTAs
│       ├── About.jsx            # About component
│       ├── Services.jsx         # Services component with service prefill routing
│       ├── Portfolio.jsx        # Project showcase component
│       ├── ProjectMockup.jsx    # Custom visual UI previews for each project
│       ├── ProjectModal.jsx     # Detailed case study modal
│       ├── WhyWorkWithMe.jsx    # 6 genuine collaboration strengths
│       ├── Process.jsx          # 4-step workflow
│       ├── Contact.jsx          # Direct email, WhatsApp, and inquiry form
│       ├── DynamicIcon.jsx      # Tree-shaken icon mapper
│       └── SocialIcons.jsx      # Clean SVG icons for GitHub and LinkedIn
```

---

## ✏️ How to Customize Your Portfolio

All your personal details, services, projects, skills, and links are located in one single file:
👉 **`src/data/portfolioData.js`**

---

## 🚢 Deploying to Vercel

The repository already includes `vercel.json` configured with SPA routing:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

To deploy your updates:
```bash
git add .
git commit -m "feat: convert portfolio into multi-page website with React Router"
git push origin main
```
Vercel will automatically trigger a new deployment and make all multi-page routes live!
