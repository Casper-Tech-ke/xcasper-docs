---
title: Requirements
sidebar_position: 2
---

# 📋 Panel Requirements

Before installing the XCASPER Panel, make sure your server meets these requirements.

---

## Minimum Server Specs

| Resource | Minimum | Recommended |
|----------|---------|-------------|
| CPU | 1 vCore | 2+ vCores |
| RAM | 1 GB | 2+ GB |
| Disk | 10 GB | 20+ GB SSD |
| OS | Ubuntu 20.04 | Ubuntu 22.04 LTS |
| Network | 100 Mbps | 1 Gbps |

---

## Required Software

| Software | Version | Notes |
|----------|---------|-------|
| PHP | 8.1+ | With extensions listed below |
| Composer | Latest | PHP dependency manager |
| Node.js | 18+ | For building the React frontend |
| Yarn | 1.x | Package manager (not npm) |
| MySQL | 8.0+ | Or MariaDB 10.4+ |
| Nginx | Latest | Apache is not officially supported |
| Certbot | Latest | For Let's Encrypt SSL |
| Redis | 6+ | Optional but recommended for queues |

## Required PHP Extensions

```bash
php8.1-cli php8.1-fpm php8.1-mysql php8.1-pdo
php8.1-mbstring php8.1-xml php8.1-bcmath php8.1-curl
php8.1-zip php8.1-gd php8.1-openssl php8.1-tokenizer
```

---

## Domain & DNS

You need:
- A domain or subdomain pointing to your panel server IP (A record)
- The domain must resolve before SSL setup

Example:
```
panel.yourdomain.com  →  YOUR_SERVER_IP
```

---

## Ports Required

| Port | Purpose |
|------|---------|
| 80 | HTTP (redirects to HTTPS) |
| 443 | HTTPS (Panel web traffic) |

:::info Wings Ports
Wings (the game node daemon) runs on a **separate server** and needs ports `8080` and `2022`. See [Wings Installation](/docs/wings/installation).
:::

---

## Network Access

The panel server must be able to reach:
- Your Wings nodes (over HTTPS port 8080)
- Your MySQL server (usually localhost)
- Paystack API: `api.paystack.co`
- Brevo SMTP: `smtp-relay.brevo.com:587`
- Let's Encrypt ACME: `acme-v02.api.letsencrypt.org`
