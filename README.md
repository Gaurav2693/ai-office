<p align="center">
  <img src="public/ronin-logo.png" width="180" alt="RONIN Logo" />
</p>

<h1 align="center">AI Office</h1>
<p align="center"><strong>A miniature isometric 3D world where AI agents work, walk, talk, and hold meetings.</strong></p>
<p align="center">Built with React 19 + Three.js · Single-page app · No backend · MIT License</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react" />
  <img src="https://img.shields.io/badge/Three.js-r170-black?style=flat-square&logo=threedotjs" />
  <img src="https://img.shields.io/badge/Vite-8-646cff?style=flat-square&logo=vite" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" />
  <img src="https://img.shields.io/badge/Agents-9-0DEEF3?style=flat-square" />
</p>

<p align="center">
  <em>What if you could watch AI agents work in a tiny office on your screen?</em>
</p>

<p align="center">
  <a href="http://skill-deploy-qmm7droauc.vercel.app/"><strong>🔗 Live Preview →</strong></a>
</p>

---

## 🌐 Preview

**Try it live:** [**skill-deploy-qmm7droauc.vercel.app**](http://skill-deploy-qmm7droauc.vercel.app/)

Drag to orbit · Scroll to zoom · Slide the time bar · Hit "LIGHTS OFF" for cyberpunk mode · Click `i` for info

---

## ✨ What is this?

**AI Office** is an interactive 3D diorama of a miniature office where 9 AI agents live and work. Each agent has a unique name, role, color identity, animated monitor screen, and behavioral patterns. They walk around the office, bump into each other at the water cooler and have spontaneous conversations, attend scheduled meetings in a glass-walled conference room, and work at their desks with individually animated displays.

This project is a visualization of what happens inside **[RONIN](https://roninos.app)** — an AI operating system being built to remember your taste. The office represents the internal agent architecture: specialized agents collaborating, each owning a domain, each contributing to a shared intelligence.

> **No AI APIs are called.** This is a pure frontend visualization — procedural 3D, canvas-animated screens, behavioral state machines, and Web Audio. Everything runs locally in your browser at 60fps.

---

## 🤖 The Agents

| Agent | Role | Accent | Screen |
|-------|------|--------|--------|
| **RONIN** | The Builder | `#0DEEF3` Teal | Helmet logo + scrolling code |
| **SAGE** | The Analyst | `#F5A623` Amber | Live bar charts + trend lines |
| **CIPHER** | The Coder | `#00E676` Green | Terminal with blinking cursor |
| **MUSE** | The Creative | `#E040FB` Magenta | Color swatches + floating dots |
| **ATLAS** | The Strategist | `#448AFF` Blue | Connected node map |
| **FORGE** | The Deployer | `#FF9100` Orange | Deploy progress bar + build # |
| **ECHO** | The Researcher | `#7C4DFF` Purple | Research docs with markdown |
| **SPARK** | The Tester | `#FF5252` Red | Test suite pass/fail runner |
| **NEXUS** | The Coordinator | `#CCDDEE` Silver | Reception desk operator |

---

## 🏢 Features

### Office Life
- **Walking agents** — agents randomly get up from their desks, walk to destinations (water cooler, center, window, lounge), pause, and return. Proper alternating leg gait animation.
- **Water cooler conversations** — when two walking agents cross within 1.5 units, a speech bubble appears with dev chat: *"pushing to prod..."*, *"merge conflict 😤"*, *"who broke CI?"*, *"lgtm 👍"*
- **Scheduled meetings** — slide the time to **10:00** or **14:00** to trigger a standup/sprint review. Agents leave desks and appear seated in the glass-walled meeting room. A "Meeting in Progress" badge lights up.
- **Meeting chime** — Web Audio C-E-G ascending tones play when meetings begin.
- **Shift changes** — before 8:00 AM and after 6:00 PM, only RONIN remains in the office. The AI that never sleeps.

### The World
- **9 detailed voxel characters** — unique hair, shirts, pants, shoes, white collar, color-coded wrist badge with point light glow, eyes with pupils
- **Animated monitor screens** — each agent has a canvas-textured display with unique animated content (charts, code, colors, maps, deploy bars, test runners)
- **RONIN's protagonist desk** — dual monitors, tiny helmet trophy with teal visor glow, pulsing teal floor ring, expanding pulse wave
- **Reception area** — desk with RONIN logo image, teal underglow strip, NEXUS seated behind it
- **Meeting room** — glass partition walls, long conference table, chairs, whiteboard with sprint goals
- **Office details** — sofa lounge with coffee table & magazines, printer with status LED, coffee machine with snack bowls & microwave, water cooler, bookshelf with colored books, wall clock (animated, ticking), motivational posters ("SHIP IT", "TASTE > SPEED", "BUILD DAILY"), pendant lights over each desk, AC ducts with vent grilles, potted plants, keyboard with individual keys, mouse, coffee mugs
- **22 flying colored papers** — drifting through the air with tumble, flutter, and bobbing physics
- **Deploy ticker** — scrolling marquee showing real-time agent deployment statuses in their accent colors

### Controls
- **Orbit** — drag to rotate camera around the office
- **Zoom** — scroll to zoom in/out
- **Time slider** — full 24-hour day/night cycle with golden hour lighting transitions
- **Cyberpunk mode** — "LIGHTS OFF" button kills overhead lights, amplifies desk underglow and screen face-lights. Each desk becomes a neon island in the dark. Ceiling tube lights emit dim blue volumetric glow.
- **Info panel** — click the `i` button for project description, RONIN context, and builder credentials

---

## 🌐 Live Preview

**→ [skill-deploy-qmm7droauc.vercel.app](http://skill-deploy-qmm7droauc.vercel.app/)**

Drag to orbit · Scroll to zoom · Slide the time bar · Hit "LIGHTS OFF" for cyberpunk mode · Click `i` for info

---

## 🚀 Quick Start

```bash
git clone https://github.com/Gaurav2693/ai-office.git
cd ai-office
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) and explore the office.

### Production Build

```bash
npm run build
npm run preview
```

### Deploy

Drop the `dist/` folder on any static host:
- **Vercel**: `vercel --prod`
- **Netlify**: drag & drop the `dist/` folder
- **GitHub Pages**: push `dist/` contents to `gh-pages` branch

---

## 🛠 Tech Stack

| Layer | Tech |
|-------|------|
| UI Framework | React 19 |
| 3D Engine | Three.js |
| Build Tool | Vite 8 |
| Sound | Web Audio API |
| Styling | Inline styles + CSS variables |
| Fonts | Syne · DM Sans · DM Mono · Orbitron |

**Zero dependencies beyond React + Three.js.** No state management library. No CSS framework. No backend. No API calls.

---

## 📁 Project Structure

```
ai-office/
├── public/
│   └── ronin-logo.png           # RONIN brand logo
├── src/
│   ├── components/
│   │   ├── Header.jsx           # "THE OFFICE" title bar
│   │   ├── HUD.jsx              # Time slider, status, cyberpunk toggle
│   │   ├── InfoPanel.jsx        # About panel — identity, RONIN, links
│   │   ├── Legend.jsx            # Agent color legend
│   │   └── Ticker.jsx           # Scrolling deploy status marquee
│   ├── scene/
│   │   └── OfficeScene.js       # Complete Three.js scene (~1400 lines)
│   ├── App.jsx                  # Main app — connects 3D scene to React UI
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles + CSS variables
├── index.html                   # HTML shell with SEO meta tags
├── package.json
├── vite.config.js
├── LICENSE
└── README.md
```

---

## 🔗 Part of RONIN

**[RONIN](https://roninos.app)** is an AI operating system that remembers your taste. A native macOS command center with:

- **Two-seat intelligence**: RONIN (Sonnet, daily driver) + Dead Shifu (Opus, director)
- **8-gate build pipeline**: Brief → Direction → Figma → Plan → Implement → Review → Ship → Deploy
- **Taste memory**: Contextual, branching preference model — not static settings
- **Multi-surface**: macOS flagship, with iOS, Android, web, CLI, watchOS planned

This office is what the inside of RONIN looks like — specialized agents, each with a role, collaborating to build what you need.

---

## 👤 Built by

**Gaurav Mishra** — Senior Product Designer & Design-Engineer

5+ years building enterprise products. Currently building RONIN — the OS that every design-engineer deserves.

| | |
|---|---|
| 🌐 Portfolio | [gauravmishra.design](https://gauravmishra.design/rooms) |
| 💻 GitHub | [github.com/Gaurav2693](https://github.com/Gaurav2693) |
| 💼 LinkedIn | [linkedin.com/in/imgaurav2693](https://linkedin.com/in/imgaurav2693) |
| 🐦 Twitter | [@GauravM2693](https://twitter.com/GauravM2693) |

---

## 📄 License

[MIT](LICENSE) — use it, fork it, learn from it. Attribution appreciated.

---

<p align="center">
  <sub>If this made you stop scrolling, consider leaving a ⭐</sub>
</p>
