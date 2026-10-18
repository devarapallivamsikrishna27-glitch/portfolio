# Devarapalli Vamsi Krishna — Developer Portfolio

A personal developer portfolio website inspired by modern cream-and-gold visual aesthetics, featuring glassmorphism, floating stats, smooth interactive category filters, and an academic journey timeline.

---

## 🌟 Visual & Design Highlights

- **Palette**: Warm Ivory & Cream (`#FFF9F0`), Golden Yellow (`#FFB92E`), Near-Black Charcoal (`#171717`), and warm neutrals.
- **Floating Glassmorphic Navbar**: Translucent pill with backdrop blur, dynamic scrollspy active indicator, and mobile drawer.
- **Hero Section**: Oversized typography (`VAMSI KRISHNA`), role badge pill, floating statistic badges (`10+ TECH STACK`, `5+ PROJECTS`, `7.34 CGPA`), and layered portrait frame.
- **About Section**: Professional narrative, Andhra Pradesh scenic location card, and education facts.
- **Interactive Skills Arsenal**: Real technology SVG icons with category filtering (All, Programming, Frontend, Backend, AI & Machine Learning, Databases, Tools).
- **Academic Journey**: Two-column layout showcasing B.Tech CSE degree, EduSkills Java Full Stack, EduSkills Machine Learning & Data Science, JNTU Kakinada GenAI workshop, and certificate modal previews.
- **Featured Projects**: 5 complete project cards with mockups, status badges, disclaimers, and deep-dive technical modals.
- **Contact Hub**: Open for opportunities card, quick-reply message presets, and input validation.

---

## 📁 Project Structure

```
vamsi-portfolio/
│
├── index.html                 # Semantic HTML5 entry page with SEO metadata
├── README.md                  # Comprehensive documentation and setup guide
│
├── css/
│   └── style.css              # Vanilla CSS design system, glassmorphism & responsive rules
│
├── js/
│   ├── main.js                # Core controller (scrollspy, filters, modals, form validation)
│   └── data/
│       ├── personal.js        # Centralized personal info, bio, links, and contact configs
│       ├── skills.js          # Categorized skills list with authentic SVG vector icons
│       ├── journey.js         # Education, EduSkills training, workshops, and credentials
│       └── projects.js        # Featured project details, features, disclaimers, and tech stack
│
└── assets/
    ├── resume.pdf             # Downloadable resume document
    └── images/
        ├── avatar.jpg         # Profile portrait frame image
        ├── location_andhra.jpg# Andhra Pradesh scenic location card image
        ├── project_brain_mri.jpg
        ├── project_first_aid.jpg
        ├── project_oil_delivery.jpg
        ├── project_smart_city.jpg
        ├── project_fraud_detection.svg
        └── favicon.svg        # Monogram favicon
```

---

## 🚀 Running Locally

Because this application uses standard modern web technologies (HTML5, Vanilla CSS3, and ES Modules), no build steps or bulky `npm` installs are required!

### Option 1: Python Built-In Server (Recommended)
Open PowerShell or Terminal in the project root:
```powershell
python -m http.server 3000
```
Then visit:
```
http://localhost:3000
```

### Option 2: VS Code Live Server
1. Open the `vamsi-portfolio` folder in VS Code.
2. Right-click `index.html` and click **"Open with Live Server"**.

---

## ✏️ How to Customize Your Details

All details are stored in modular JavaScript files under `js/data/`:

1. **Personal Information & Links**: Open [`js/data/personal.js`](js/data/personal.js)
   - Update your email address, phone, GitHub, LinkedIn, or profile picture path (`profilePhoto: "assets/images/my_photo.jpg"`).
2. **Skills Arsenal**: Open [`js/data/skills.js`](js/data/skills.js)
   - Add new skills or modify categories.
3. **Journey & Certifications**: Open [`js/data/journey.js`](js/data/journey.js)
   - Add new internships, update GPA/dates, or add certificate IDs.
4. **Projects**: Open [`js/data/projects.js`](js/data/projects.js)
   - Add your live repository links, update descriptions, or add new projects.

---

## 🚢 Deployment Instructions

### Deploy to Vercel (1-Click)
1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Vamsi Krishna developer portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/vamsi-portfolio.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository. Since it is a static web application, Vercel will auto-detect and deploy it instantly with free SSL!

### Deploy to GitHub Pages
1. In your GitHub repository, go to **Settings** > **Pages**.
2. Under **Build and deployment** > **Branch**, select `main` branch and `/ (root)`.
3. Click **Save**. Your site will be live at `https://<your-username>.github.io/vamsi-portfolio/` in 1 minute.

---

## 📄 License
Designed and developed for Devarapalli Vamsi Krishna. Free to customize and adapt.
