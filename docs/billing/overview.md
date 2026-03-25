---
title: Billing Overview
sidebar_position: 1
---

# 💳 Billing Overview

XCASPER has a built-in billing system powered by **Paystack** that handles subscriptions, wallets, and automatic server provisioning. All payments are processed in **Kenyan Shillings (KES)**.

---

## How It Works

```
User selects plan → Paystack payment → Webhook received by panel
    → Server created automatically (Wings) → Push notification sent
    → Monthly renewal via KES wallet
```

---

## Key Components

| Component | Description |
|-----------|-------------|
| **Subscription Plans** | Basic, Pro, Admin — monthly, paid in KES |
| **KES Wallet** | Top-up balance used for auto-renewal |
| **Paystack Integration** | Payment gateway for Kenya |
| **Auto-Provisioning** | Wings server created instantly on payment |
| **Push Notifications** | Browser notifications for payment events |
| **Super Admin Revenue** | Revenue tracking and user management |

---

## Database Tables

| Table | Purpose |
|-------|---------|
| `xcasper_billing` | Subscription records |
| `xcasper_created_servers` | Tracks billing-provisioned servers |
| `xcasper_wallets` | User wallet balances |
| `xcasper_transactions` | All financial transactions |

---

## Next Steps

- [Subscription Plans →](/docs/billing/plans)
- [KES Wallet →](/docs/billing/wallet)
- [Paystack Setup →](/docs/billing/paystack)
- [Push Notifications →](/docs/billing/push-notifications)
