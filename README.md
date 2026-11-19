# Portfolio - Personal Developer Website

This is the personal developer portfolio website of Adrià Márquez Nebot. Built with React 19, TypeScript, Vite 8, and Sass, the application showcases software engineering projects, 42 Barcelona curriculum milestones, technical skill sets, professional experience, and contact information. The application features a responsive design, smooth navigation, multi-language internationalization (i18next), interactive visual elements, and dynamic data presentation sourced from structured JSON configurations.

# Prerequisites

To install and run the portfolio locally, you will need:

- Node.js (version 18.0.0 or higher recommended)
- npm (version 9.0.0 or higher)
- A modern web browser

# Configuration

1. Clone the repository:
```bash
git clone https://github.com/adrmarqu/portfolio.git
cd portfolio
```

2. Install project dependencies:
```bash
npm install
```

# Execution

### Development Server

Start the local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Navigate to http://localhost:5173 in your web browser.

### Production Build

Type-check and compile the production-ready bundle into the dist/ directory:
```bash
npm run build
```

### Preview Production Build

Locally test and preview the production build output:
```bash
npm run preview
```

### Code Linting

Run ESLint to check code consistency and detect issues:
```bash
npm run lint
```

# Project Structure

```
portfolio/
├── index.html               # Single page application HTML entrypoint
├── package.json             # NPM package scripts and dependencies
├── vite.config.ts           # Vite bundler configuration
├── tsconfig.json            # Base TypeScript configuration
├── tsconfig.app.json        # Application-level TypeScript settings
├── eslint.config.js         # ESLint rule definitions
├── public/                  # Public static assets, icons, and media
└── src/                     # React application source code
    ├── main.tsx             # React DOM root initialization
    ├── App.tsx              # Main container component and section ordering
    ├── App.scss             # Top-level application styling and keyframes
    ├── components/          # Reusable UI components (Navbar, Cards, Buttons, Footer)
    ├── views/               # Portfolio view sections (Hero, About, Projects, Skills, Contact)
    ├── styles/              # Modular Sass stylesheets, variables, and media queries
    ├── i18n/                # Internationalization configuration and translations
    └── json/                # Structured data models for projects, skills, and background
```

# Package Commands and Scripts

The following scripts are defined in package.json:

- npm run dev: Starts Vite development server at http://localhost:5173
- npm run build: Runs TypeScript compiler (tsc -b) followed by Vite production bundling
- npm run lint: Scans all TypeScript and TSX files using ESLint
- npm run preview: Spawns a local static server to preview the built dist/ distribution

# Key Features

- Responsive Interface: Fully adaptable layout tailored for smartphones, tablets, laptops, and ultra-wide desktop monitors.
- Multi-Language Localization: Dynamic translation switching with language persistence powered by i18next and i18next-browser-languagedetector.
- Modular Content Management: Projects, skills, timeline events, and personal achievements are organized in clean JSON files, allowing straightforward maintenance.
- Modern Tooling: Built using React 19, TypeScript for static typing, Vite 8 for fast build times, Lucide React, and React Icons.

# Author Details

Author: Adrià Márquez Nebot
Github: https://github.com/adrmarqu
LinkedIn: https://www.linkedin.com/in/adria-marquez
Portfolio: https://adrmarqu.github.io
