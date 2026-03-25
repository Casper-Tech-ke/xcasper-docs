---
title: Subscription Plans
sidebar_position: 2
---

# 📦 Subscription Plans

XCASPER offers three subscription tiers. Pricing is in **Kenyan Shillings (KES)** and can be changed in Super Admin → Billing.

---

## Default Plan Pricing

| Plan | Price | Default Limits |
|------|-------|---------------|
| 🟢 **Basic** | KES 50/mo | 1 server, 512 MB RAM, 5 GB disk |
| 🔵 **Pro** | KES 100/mo | 2 servers, 1 GB RAM, 10 GB disk |
| 🟣 **Admin** | KES 200/mo | 5 servers, 2 GB RAM, 20 GB disk |

:::info Custom Pricing
Prices are fully configurable in **Super Admin → Billing**. You can change them without any code changes.
:::

---

## What Happens When a User Subscribes

1. User clicks a plan on the pricing page
2. Paystack payment modal opens
3. User pays via M-Pesa, card, or bank transfer
4. Paystack sends a webhook to the panel
5. Panel verifies the payment signature
6. `XcasperServerCreationService` provisions a Wings server automatically
7. Billing record created in `xcasper_billing` table
8. Push notification sent to the user's browser
9. Server appears in the user's dashboard

---

## Subscription Renewal

Subscriptions renew monthly. The renewal process:

1. Laravel scheduler runs `xcasper:check-renewals` daily
2. For each subscription due for renewal:
   - If the user's wallet has sufficient balance → deduct and renew
   - If wallet is empty → send a push notification with a top-up link
   - After 7 days unpaid → server suspended (not deleted)
   - After 14 days unpaid → server deleted

---

## Changing a User's Plan

Via Super Admin → Users → select user → Edit Plan:
- Upgrade: charged the difference immediately
- Downgrade: takes effect at the next renewal date

---

## Cancellation

Users can cancel from their dashboard. The server and data persist until the current period ends, then are suspended.
