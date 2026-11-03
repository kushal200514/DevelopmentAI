# ⚡ FSD CodeVault (Lab 01–13)

> A modern, responsive, developer-focused web application and offline-ready code library for **Full Stack Development Laboratory Experiments (Lab 1 to Lab 13)** based on the **CMR University** (Prof. Rohit Kumar, 4CSPL2021) curriculum.

---

## 🌟 Features

- **Complete Lab Coverage (Lab 01–13)**: Contains all 13 laboratory experiments with original, untouched source code files extracted directly from laboratory workspace files and the official lab record.
- **VS Code-Style Multi-File Code Viewer**:
  - Dark developer syntax highlighting powered by Prism.js (`prism-tomorrow`).
  - Gutter line numbering with horizontal scroll for long lines.
  - Multi-file tab switching (e.g., `experiment2.html` / `styles.css` for Lab 2; `db.js` / `Student.js` / `app.js` for Lab 13).
  - One-click copy with toast confirmation and file download.
  - Fullscreen code view toggle.
- **Instant Search (`Ctrl + K`)**:
  - Search by experiment number (e.g. `8`, `Exp 8`, `Lab 11`).
  - Search by function or API name (`createServer`, `useEffect`, `useState`, `addItem`, `appendFile`).
  - Search by concept or keyword (`CRUD`, `Mongoose`, `Flexbox`, `Regex`, `DOM`).
  - Search across Viva Voce questions and answers.
- **Step-by-Step Run Instructions**: Copyable terminal commands for setting up, installing, running, and testing each program.
- **Real Laboratory Output Screenshots**: Includes verified output screenshots extracted from the official lab record.
- **Viva Voce Accordion**: 91 curated viva questions and model answers with expandable cards and internal search.
- **Quick Revision & Memory Aids**:
  - Key concept summaries.
  - Important function signatures and syntax cheatsheets.
  - Examination mnemonics and memory tips.
  - Common student errors and step-by-step fixes.
  - Practical examination checklist.
- **Client-Side Progress & Bookmarks**:
  - Mark experiments as *Not Started*, *In Progress*, or *Completed*.
  - Mark experiments as *Revised*.
  - Bookmark important experiments for quick pre-exam review.
  - Automatically persisted in browser `localStorage`.
- **Light & Dark Theme Toggle**: Developer dark mode by default with light mode option.
- **Zero Backend / 100% Static**: Pure client-side React + Vite architecture. No database, auth, or API keys required. Deployable directly to Netlify.

---

## 📂 Laboratory Experiments Index

| Lab | Title | Category | Original Files |
|:---:|:---|:---|:---|
| **01** | Introduction to Full Stack Development Environment & Basic Web Page Design | HTML & CSS | `exp1.html` |
| **02** | Responsive Web Design Using CSS (Flexbox, Grid, & Media Queries) | HTML & CSS | `experiment2.html`, `styles.css` |
| **03** | JavaScript DOM Manipulation | JavaScript | `experiment3.html` |
| **04** | Form Validation Using JavaScript & Regular Expressions | JavaScript | `experiment4.html` |
| **05** | React - Basic Application Using Components & Props | React | `App.jsx`, `StudentCard.jsx`, `main.jsx` |
| **06** | React - State Management & Event Handling | React | `Counter.jsx`, `TodoList.jsx`, `App.jsx` |
| **07** | React - API Integration Using Fetch and Axios | React | `UserList.jsx`, `App.jsx` |
| **08** | Node.js - Creating a Basic HTTP Server | Node.js | `server.js`, `execute` |
| **09** | Node.js - File System Operations | Node.js | `fileops.js`, `students.txt` |
| **10** | Express.js - Routing & Middleware | Express.js | `app.js`, `package.json` |
| **11** | Express.js - RESTful API with CRUD Operations | Express.js | `crud_api.js`, `package.json` |
| **12** | MongoDB - CRUD Operations Using MongoDB Shell and Compass | MongoDB | `commands for mongodb` |
| **13** | MongoDB with Node.js Using Mongoose | Mongoose | `db.js`, `Student.js`, `app.js` |

---

## 🚀 Quick Start Guide

### 1. Prerequisites
Ensure you have **Node.js** (v18 or above) and **npm** installed on your computer:
```bash
node -v
npm -v
```

### 2. Installation
Navigate into the `fsd-codevault` directory and install the required dependencies:
```bash
cd fsd-codevault
npm install
```

### 3. Run Locally (Development Server)
Start the local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Build for Production
Create an optimized, minified production build:
```bash
npm run build
```
The production bundle will be generated inside the `dist/` directory.

### 5. Preview Production Build Locally
To test the generated production build before deploying:
```bash
npm run preview
```

---

## 🌐 Netlify Deployment Guide

The application is pre-configured for one-click deployment on Netlify using the included `netlify.toml` file.

### Option A: Deploy via GitHub (Recommended)
1. Initialize Git and push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - FSD CodeVault"
   git branch -M main
   git remote add origin https://github.com/<your-username>/fsd-codevault.git
   git push -u origin main
   ```
2. Log in to your [Netlify Dashboard](https://app.netlify.com/).
3. Click **Add new site** > **Import an existing project**.
4. Connect your GitHub repository.
5. Netlify will automatically detect the settings from `netlify.toml`:
   - **Base directory**: `fsd-codevault` (if repo root is parent, otherwise leave empty)
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **Deploy Site**. Your live URL will be active within seconds!

### Option B: Deploy via Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=dist
```

### Option C: Manual Drag & Drop Deployment
1. Run `npm run build` inside `fsd-codevault`.
2. Open [Netlify Drop](https://app.netlify.com/drop).
3. Drag and drop the `dist/` folder into the Netlify drop zone.

---

## 🛠️ How to Update or Add Experiments Later

All experiment programs, titles, instructions, viva questions, and outputs are centralized in:
```
src/data/experiments.js
```

To update an experiment or add a new one:
1. Open `src/data/experiments.js`.
2. Locate the experiment entry by its `id` (e.g. `exp-8`) or `number`.
3. Modify the desired field:
   - `files`: Edit code strings in `completeCode` or add extra files to the array.
   - `vivaQuestions`: Add new `{ question: '...', answer: '...' }` objects.
   - `runInstructions`: Update terminal commands or steps.
   - `quickRevision`: Add new memory tricks or common exam errors.
4. Save the file. Vite's HMR will update the UI immediately without refreshing!

---

## 📁 Project Architecture

```
fsd-codevault/
├── public/
│   ├── favicon.svg             # SVG CodeVault Favicon
│   └── screenshots/           # Verified lab manual output screenshots
│       ├── exp1_output.jpg
│       ├── exp2_output.jpg
│       ├── ...
│       └── exp10_output.jpg
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Top navigation with search and theme toggle
│   │   ├── Sidebar.jsx         # Category filter navigation & progress summary
│   │   ├── SearchBar.jsx       # Global Ctrl+K instant search
│   │   ├── ExperimentCard.jsx   # Experiment grid cards with status pills
│   │   ├── CodeViewer.jsx      # VS Code style multi-file syntax editor
│   │   ├── CopyButton.jsx      # Reusable copy button with toast feedback
│   │   ├── VivaAccordion.jsx   # Searchable viva voce questions accordion
│   │   └── ProgressTracker.jsx # Metrics for experiments, files & revision
│   │
│   ├── pages/
│   │   ├── Dashboard.jsx       # Homepage with stats, categories, & cards
│   │   ├── ExperimentDetails.jsx # 6-Tab comprehensive lab view
│   │   └── Bookmarks.jsx       # Saved pre-exam revision library
│   │
│   ├── data/
│   │   └── experiments.js      # Centralized laboratory database (108 KB)
│   │
│   ├── hooks/
│   │   └── useLocalStorage.js  # Persistent browser storage hook
│   │
│   ├── styles/
│   │   └── global.css          # Developer design system (Dark & Light)
│   │
│   ├── App.jsx                 # Application layout & URL hash router
│   └── main.jsx                # React root mount with Prism tomorrow theme
│
├── index.html                  # HTML5 entry with Inter & JetBrains Mono fonts
├── netlify.toml                # Netlify build & SPA routing configuration
├── package.json                # Project dependencies and scripts
└── vite.config.js              # Vite React configuration
```

---

## 🎓 Academic Credit & Course Info

- **Course**: 4CSPL2021: Full Stack Development Laboratory
- **Institution**: School of Engineering and Technology (SOET), CMR University, Lakeside Campus, Bengaluru
- **Faculty In-Charge**: Prof. Rohit Kumar, Assistant Professor, Dept. of CSE

---

## 📄 License
ISC • For personal academic study and laboratory examination preparation.
