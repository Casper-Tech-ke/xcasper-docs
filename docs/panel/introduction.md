---
title: Panel Introduction
sidebar_position: 1
---

# 🖥 XCASPER Panel — Introduction

The XCASPER Panel is the web-based control centre for your hosting business. It is built on **Laravel 9** (backend) and **React 18 + TypeScript** (frontend), with a custom dark theme and several XCASPER-exclusive features layered on top of Pterodactyl v1.11.

---

## Architecture Overview

```
Browser (React SPA)
    ↓  REST API / WebSocket
Laravel (PHP 8.1)
    ↓  Queue / artisan commands
MySQL / SQLite  +  Wings Nodes (Docker)
```

---

## Key Custom Components

| File | Role |
|------|------|
| `resources/scripts/components/auth/LoginFormContainer.tsx` | Animated login page with CSS variable theming |
| `resources/scripts/components/auth/RegisterContainer.tsx` | Registration with 6-layer email validation |
| `resources/views/super-admin.blade.php` | 9-tab Super Admin control panel |
| `resources/views/templates/wrapper.blade.php` | Injects CSS colour variables globally |
| `resources/views/layouts/xcasper-bg.blade.php` | Casper ghost canvas animation |
| `app/Http/Controllers/SuperAdminController.php` | All Super Admin API endpoints |
| `app/Providers/RouteServiceProvider.php` | Custom XCASPER routes (billing, push, admin) |
| `app/Services/Billing/PushNotificationService.php` | VAPID web push |
| `app/Services/Billing/XcasperServerCreationService.php` | Auto-provisioning on billing |

---

## Technology Stack

| Layer | Technology |
|-------|-----------|
| Backend | Laravel 9, PHP 8.1 |
| Frontend | React 18, TypeScript, styled-components |
| Build tool | Webpack 5 + Yarn |
| Database | MySQL 8 (or SQLite for dev) |
| Mail | Brevo (Sendinblue) SMTP |
| Payments | Paystack (KES) |
| Push | Web Push (VAPID) |
| Web server | Nginx + PHP-FPM |
| SSL | Let's Encrypt / Certbot |

---

## Next Steps

- [Requirements →](/docs/panel/requirements)
- [Installation →](/docs/panel/installation)
- [Super Admin →](/docs/panel/super-admin)
