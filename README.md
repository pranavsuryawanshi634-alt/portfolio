# Pranav Suryawanshi — Modern Web Developer Portfolio

A modern, fast, responsive personal portfolio and service advertisement platform built for **Pranav Rajesh Suryawanshi** using **React 19**, **Vite**, **Tailwind CSS 4**, and **Lucide Icons**.

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
Open `http://localhost:5173` in your browser.

### 3. Production Build
```bash
npm run build
```
Generates an optimized, minified production bundle in the `dist/` directory (~95 kB gzipped).

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🛠️ Technology Stack

- **Framework**: React.js 19
- **Bundler & Dev Server**: Vite 8
- **Styling**: Tailwind CSS 4 with custom dark navy palette
- **Typography**: Plus Jakarta Sans & JetBrains Mono
- **Icons**: Lucide React + custom SVG social icons
- **Architecture**: Single Page Application (SPA) with smooth anchor scrolling and dynamic inquiry parameter passing

---

## 📂 Project Structure

```
portfolio/
├── index.html                   # HTML template with SEO and OpenGraph meta tags
├── vite.config.js               # Vite configuration with Tailwind CSS plugin
├── package.json                 # Project dependencies & scripts
├── public/
│   └── favicon.svg              # Custom <PS /> brand vector favicon
├── src/
│   ├── main.jsx                 # React root mount
│   ├── App.jsx                  # Main application layout and active section tracker
│   ├── index.css                # Tailwind import, fonts & scrollbar styling
│   ├── data/
│   │   └── portfolioData.js     # 🌟 Centralized data file (edit all content here!)
│   └── components/
│       ├── Navbar.jsx           # Fixed responsive navigation & mobile drawer
│       ├── Hero.jsx             # Hero section with interactive terminal & CTAs
│       ├── About.jsx            # Background, education, and categorized skills
│       ├── Services.jsx         # 5 core services with "Discuss This Service" routing
│       ├── Portfolio.jsx        # Filterable project showcase
│       ├── ProjectMockup.jsx    # Custom visual UI previews for each project
│       ├── ProjectModal.jsx     # Detailed case study modal
│       ├── WhyWorkWithMe.jsx    # 6 genuine client collaboration strengths
│       ├── Process.jsx          # 4-step workflow (Concept to Handover)
│       ├── Contact.jsx          # Direct email, WhatsApp, and inquiry form
│       ├── Footer.jsx           # Brand summary, links & copyright notice
│       ├── DynamicIcon.jsx      # Tree-shaken icon mapper
│       └── SocialIcons.jsx      # Clean SVG icons for GitHub and LinkedIn
```

---

## ✏️ How to Customize Your Portfolio

All your personal details, services, projects, skills, and links are located in one single file:
👉 **`src/data/portfolioData.js`**

### 1. Update Contact Details
```javascript
export const personalInfo = {
  name: "Pranav Suryawanshi",
  fullName: "Pranav Rajesh Suryawanshi",
  email: "pranavsuryawanshi634@gmail.com",
  phone: "+91 95450 10200",
  whatsappNumber: "919545010200", // Country code without '+' or spaces
  githubUrl: "https://github.com/pranavsuryawanshi634-alt",
  linkedinUrl: "https://www.linkedin.com/in/pranav-suryawanshi", // Your actual LinkedIn handle
  location: "Mahiravani, Nashik, Maharashtra, India",
  // ...
};
```

### 2. Update or Add Projects
Open `projectsData` in `src/data/portfolioData.js`. You can edit titles, descriptions, live URLs, GitHub repository links, and tech tags.

### 3. Update Services
Edit `servicesData` in `src/data/portfolioData.js` to adjust your offerings, bullet points, or tags.

---

## 📬 Connecting an Automated Form Service (Optional)

The contact form is currently wired to a **real, zero-dependency client submission flow**:
1. Clicking **Send Inquiry via Email** opens the user's default email client (`mailto:`) with a pre-filled subject and structured inquiry body.
2. Clicking **Send via WhatsApp** generates a direct WhatsApp chat pre-populated with their project brief.

If you prefer an automated serverless form provider without opening an email client:
1. Register for a free form endpoint at [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com).
2. In `src/components/Contact.jsx`, replace the `handleSubmit` function with a `fetch()` POST request to your endpoint:
```javascript
const response = await fetch("https://api.web3forms.com/submit", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    access_key: "YOUR_ACCESS_KEY_HERE",
    ...formData,
  }),
});
```

---

## 🚢 Free Deployment Guide

### Deploying to Vercel (Recommended)
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/pranavsuryawanshi634-alt/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
3. Click **Add New Project** and select your `portfolio` repository.
4. Framework preset will automatically detect **Vite**.
5. Click **Deploy**. Your site will be live on a `*.vercel.app` domain in ~30 seconds with automatic SSL!

### Deploying to Netlify
1. Log in to [netlify.com](https://netlify.com).
2. Click **Add new site** > **Import an existing project**.
3. Select your repository.
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click **Deploy**.
