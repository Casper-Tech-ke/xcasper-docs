---
title: Paystack Setup
sidebar_position: 4
---

# 🏦 Paystack Integration Setup

XCASPER uses **Paystack** as its payment gateway. Paystack supports M-Pesa, credit/debit cards, bank transfers, and mobile money — making it ideal for the African market.

---

## Create a Paystack Account

1. Visit [paystack.com](https://paystack.com) and create an account
2. Complete business verification for your country
3. Go to **Settings → API Keys & Webhooks**

---

## Get Your API Keys

| Key | Where to find |
|-----|--------------|
| Public Key | `pk_live_...` — used in the frontend |
| Secret Key | `sk_live_...` — used server-side only, **never expose** |

For testing, use the **Test** keys (`pk_test_...` / `sk_test_...`) first.

---

## Configure in XCASPER

**Option A — Super Admin (Recommended)**

1. Go to `/super-admin` → **Billing** tab
2. Paste your Public Key and Secret Key
3. Save

**Option B — `.env` file**

```ini title=".env"
PAYSTACK_PUBLIC_KEY=pk_live_your_key_here
PAYSTACK_SECRET_KEY=sk_live_your_key_here
PAYSTACK_CURRENCY=KES
```

---

## Configure the Webhook

Paystack must notify XCASPER when payments are completed.

1. In Paystack dashboard → **Settings → API Keys & Webhooks**
2. Add webhook URL: `https://panel.yourdomain.com/api/billing/paystack/webhook`
3. Select events: **charge.success**, **transfer.success**, **subscription.create**

:::warning Webhook Security
XCASPER verifies every webhook using the Paystack HMAC signature. This is done automatically — never disable this check.
:::

---

## Testing Payments

Use Paystack test cards:

| Card | Number | Behaviour |
|------|--------|-----------|
| Visa (success) | `4084 0840 8408 4081` | Always succeeds |
| Mastercard | `5531 8866 5214 2950` | Always succeeds |
| Declined | `4084 0840 8408 4081` with CVV `000` | Always declines |

Test M-Pesa: Use phone `0708993099` in Paystack sandbox.

---

## Going Live

1. Complete Paystack's KYC / business verification
2. Switch from test keys to live keys in Super Admin
3. Update the webhook URL to your live panel URL
4. Do a real test transaction (KES 1) to confirm
