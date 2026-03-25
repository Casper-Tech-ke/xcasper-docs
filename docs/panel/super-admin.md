---
title: Super Admin Panel
sidebar_position: 7
---

# 🛡 Super Admin Panel

The XCASPER Super Admin panel is a separate, key-protected admin interface at `/super-admin`. It gives you full control over the platform without touching the database directly.

---

## Accessing Super Admin

1. Navigate to `https://your-panel-url/super-admin`
2. Enter the Super Admin key

The key is set in your `.env` file:

```ini title=".env"
XCASPER_SUPER_KEY=your-secret-key-here
```

:::warning
The default key is `CasperXK-2025`. **Change it immediately** on production.
:::

---

## The 9 Tabs

### 1. 🎨 Branding
- Upload or change your **logo** (SVG/PNG)
- Set your **company name**
- Update the **support email** and **Telegram link**
- Preview changes live

### 2. 🖌 Appearance
- Change **primary colour** (CSS variable — no rebuild)
- Change **accent colour**
- Pick from 8 built-in **colour presets** (XCASPER Blue, Midnight Purple, Emerald, Crimson, etc.)
- Live login card preview on the right side of the screen

### 3. 📧 Email
- Configure **SMTP credentials** (host, port, username, password)
- Set the **from address** and sender name
- Preview and **send a test email**

### 4. 💳 Billing
- Enter **Paystack public and secret keys**
- Set **plan prices** (Basic, Pro, Admin) in KES
- Set **Default Egg ID** used when a billing server is created
- Toggle billing on/off

### 5. 👥 Users
- View all registered users
- Toggle **admin status**
- View subscription tier and wallet balance
- Manually **credit wallet** or change tier

### 6. 📊 Revenue
- Total revenue collected
- Monthly breakdown chart
- Per-tier subscriber counts
- Failed payment log

### 7. 🔔 Push Notifications
- Generate or paste **VAPID public/private keys**
- Send a **test push notification**
- View push subscription count

### 8. 📖 Docs
- Update the URL your panel links to for documentation
- (Typically your XCASPER docs site URL)

### 9. 💬 Support
- Update **Telegram support link**
- Update **support email**
- Set a **maintenance mode message**

---

## Server Config

There is also a **Server Config** form in Super Admin that saves at:

```
POST /super-admin/save-server-config
```

This sets the default Wings node, egg, and Docker image for billing-created servers.

---

## Security

Super Admin uses a **session-based key** completely separate from the main Pterodactyl auth system. Even panel admins cannot access Super Admin without the key.
