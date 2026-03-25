---
title: Push Notifications
sidebar_position: 5
---

# 🔔 Web Push Notifications

XCASPER sends browser push notifications for billing events, server status changes, and announcements — using the **Web Push (VAPID)** standard.

---

## How It Works

```
User grants notification permission in browser
    → Browser registers with Push Service (Google/Mozilla/Apple)
    → Push endpoint saved in xcasper_push_subscriptions table
    → Panel sends push via VAPID keys → Push service delivers to browser
```

Notifications work **even when the browser is closed** (as long as the OS is running).

---

## VAPID Keys Setup

**Generate VAPID keys** (one-time setup):

```bash title="bash"
cd /var/www/xcasper-panel
php artisan xcasper:generate-vapid-keys
```

Copy the output keys into **Super Admin → Push** or `.env`:

```ini title=".env"
VAPID_PUBLIC_KEY=your_public_key
VAPID_PRIVATE_KEY=your_private_key
VAPID_SUBJECT=mailto:admin@yourdomain.com
```

---

## Events That Trigger Push Notifications

| Event | Notification |
|-------|-------------|
| Payment successful | "Your server is being created!" |
| Subscription renewed | "Your plan has been renewed — KES X deducted" |
| Low wallet balance | "Top up your wallet to avoid service interruption" |
| Server suspended | "Your server has been suspended — renew to restore" |
| Announcement | Custom message from Super Admin |

---

## Sending a Custom Push Notification

Via **Super Admin → Push**:

1. Enter a title and message body
2. Choose recipients: All users, a specific plan tier, or a single user
3. Click Send
4. View delivery status in the push log

---

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome (desktop & Android) | ✅ Full |
| Firefox | ✅ Full |
| Edge | ✅ Full |
| Safari (macOS 13+) | ✅ (requires macOS Ventura) |
| iOS Safari | ⚠ iOS 16.4+ required |
