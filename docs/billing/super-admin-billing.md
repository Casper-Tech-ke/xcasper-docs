---
title: Admin Billing Config
sidebar_position: 6
---

# ⚙ Super Admin — Billing Configuration

All billing settings are managed from **Super Admin → Billing** tab. No code changes needed.

---

## Available Settings

| Setting | Description |
|---------|-------------|
| **Paystack Public Key** | Frontend key for payment modal |
| **Paystack Secret Key** | Server-side key for API calls and webhook verification |
| **Currency** | `KES` (locked for XCASPER) |
| **Basic Plan Price** | Monthly price in KES (default: 50) |
| **Pro Plan Price** | Monthly price in KES (default: 100) |
| **Admin Plan Price** | Monthly price in KES (default: 200) |
| **Default Egg ID** | Egg used for billing-created servers |
| **Default Node ID** | Wings node to create servers on |
| **Default Nest ID** | Nest that contains the default egg |
| **Billing Enabled** | Toggle to enable/disable new subscriptions |

---

## Server Config (separate form)

This section configures what Wings server gets created when a user pays:

| Setting | Description |
|---------|-------------|
| **Node ID** | Which Wings node to allocate on |
| **Nest ID** | Which egg nest to use |
| **Egg ID** | Which egg template to use (see [Eggs](/docs/eggs/custom)) |
| **Docker Image** | Docker image override (leave blank for egg default) |
| **Memory (MB)** | RAM per billing server |
| **Disk (MB)** | Disk per billing server |
| **CPU** | CPU percentage per server (100 = 1 core) |

Saved at: `POST /super-admin/save-server-config`

---

## Revenue Dashboard

**Super Admin → Revenue** shows:

- **Total revenue** collected (all time)
- **Monthly breakdown** chart (last 12 months)
- **Subscribers per plan** (Basic / Pro / Admin)
- **Failed payments log** with Paystack transaction IDs

---

## User Management

**Super Admin → Users** lets you:

- View all users with their plan and wallet balance
- Manually upgrade or downgrade plans
- Credit a user's wallet (with a note)
- Toggle admin status
- View a user's server list
- Suspend or delete a user's account
