AI-Powered NayePankh Foundation PlatformAn
Innovative, dark-first, fully responsive web application designed for the NayePankh Foundation. This project introduces a self-contained, client-side AI Career Assistant Chatbot alongside modern UI features like glassmorphism, scroll-reveal mechanics, and animated statistical counters. Built specifically as a showcase for an AI Engineering / Web Development Internship submission.
🚀 Submission Highlights & Core FeaturesIntelligent AI Career Assistant: A lightweight, highly efficient natural language processing (NLP) chatbot built using a client-side keyword-matching matrix. It operates entirely without external API keys or server overhead, ensuring zero latency, privacy compliance, and 100% offline capability.Modern Glassmorphism UI: A sleek, frosted-glass design paradigm featuring interactive components, animated hover transformations, and dynamic gradient borders.High Performance & Zero-Setup Architecture: Organized completely within vanilla web standards—requiring no npm packages, build compilations, or local server environments.Dynamic UX Enhancement: Built-in automatic vision carousels, asynchronous data counter animations, and staggered scroll-reveal components powered by the native browser IntersectionObserver API.Dual-Theming Engine: Integrated light and dark mode state persistence utilizing browser localStorage.
🛠️ Technical Architecture & StackComponentTechnologyImplementation DetailStructureHTML5Semantic architecture optimizing indexing and screen accessibility.StylingCSS3Custom viewport animations, dynamic flex/grid layouts, variables.Logic/AI EngineVanilla JavaScriptCustom NLP matching algorithm, state managers, and transition hooks.AnimationsIntersectionObserver APIMemory-efficient execution of viewport entrance transformations.AssetsBase64 EncodingEmbedded graphical resources minimizing HTTP request roundtrips.
🤖 AI Chatbot Knowledge EngineeringThe built-in AI career assistant analyzes multi-token string inputs against a structured matrix pattern. It currently supports intelligent parsing and conversational dialog handling across several key organizational operational tracks:JavaScript// Extendable Knowledge Base Array Schema
{
  keywords: ['volunteer', 'join team', 'how to join'],
  response: `🙋 How to Volunteer at NayePankh Foundation...`
}
Supported Query Paths🏛️ Organizational Transparency: Foundation history, UP Govt registrations, and 80G/12A tax exemption statuses.🙋 Social Activation: Streamlined steps on entering the workforce as a student volunteer across multiple cities (Kanpur, Ghaziabad, etc.).💼 Career Development: Multi-disciplinary internship programs (Tech, content, graphics, management).💻 Technical Education Roadmaps: Full-stack and web development skill acquisition timelines for incoming students.📁 Repository StructurePlaintextnayepankh-foundation/
│
├── index.html                   # Production-ready entry point
├── nayepankh_foundation.html    # Standalone deployment template
├── script.js                    # Core AI engine, counter logic, & UI controllers
├── style.css                    # Design stylesheet (dark-first rules)
└── README.md                    # System documentation
⚙️ Quick Start & Local DeploymentThis project requires absolutely zero environment installations or server configurations.Clone the project workspace:Bashgit clone https://github.com/Isharajput1234/ainayepankh.git
cd ainayepankh

2. **Launch the application interface:**
   * **Linux/macOS:** `open index.html` or `open nayepankh_foundation.html`
   * **Windows:** Simply double-click `index.html` inside your file directory to run it instantly in any modern web browser.

---

## 🌐 Production Deployment Guide

### Option 1: GitHub Pages (Recommended)
1. Commit and push all file adjustments to your GitHub remote repository.
2. Navigate to your repository **Settings** $\rightarrow$ **Pages**.
3. Set the build source parameter to the `main` branch (root directory `/`).
4. Save the configuration. Your system URL will format as: `https://<username>.github.io/ainayepankh/`

### Option 2: Automated Netlify Deployment
* Run a global deployment directly from your terminal workspace terminal:
  ```bash
  npx netlify-cli deploy --prod
