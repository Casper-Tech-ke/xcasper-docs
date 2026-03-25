# 📚 xcasper-docs

> Official Documentation Site for **XCASPER Hosting** — powered by [Docusaurus v3](https://docusaurus.io/)

[![Docs](https://img.shields.io/badge/docs-docs.xcasper.space-cyan?style=flat-square)](https://docs.xcasper.space)
[![Built with Docusaurus](https://img.shields.io/badge/Built%20with-Docusaurus-brightgreen?style=flat-square)](https://docusaurus.io/)
[![License](https://img.shields.io/badge/license-MIT-purple?style=flat-square)](LICENSE)

---

## 🚀 Quick Start

```bash
git clone https://github.com/Casper-Tech-ke/xcasper-docs.git
cd xcasper-docs
npm install
npm start        # dev server at http://localhost:3000
npm run build    # production build → ./build
```

## 📁 Structure

```
xcasper-docs/
├── docs/
│   ├── panel/      # Panel installation, SMTP, SSL, theming …
│   ├── wings/      # Wings daemon setup
│   ├── eggs/       # Game egg configs
│   └── billing/    # Paystack, wallet, plans
├── src/
│   ├── pages/      # Custom homepage
│   └── css/        # XCASPER dark theme
├── static/         # Favicon & logo
├── docusaurus.config.ts
└── sidebars.ts
```

## 🌐 Deploying

Build and copy the `build/` folder to your web server:

```bash
npm run build
rsync -avz build/ user@your-vps:/var/www/xcasper-docs/
```

Configure Nginx to serve the `build/` folder. See the [deployment guide](https://docs.xcasper.space/docs/panel/installation).

---

> Built with 💜 by [Casper Tech Kenya](https://github.com/Casper-Tech-ke)
