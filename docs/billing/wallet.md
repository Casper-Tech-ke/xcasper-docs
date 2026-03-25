---
title: KES Wallet
sidebar_position: 3
---

# 👛 KES Wallet

Every XCASPER user has a **KES Wallet** — a prepaid balance used for subscription auto-renewal. This removes the need for users to manually pay every month.

---

## How the Wallet Works

```
User tops up wallet (Paystack) → Balance stored in xcasper_wallets table
    → Monthly renewal deducted automatically
    → Low balance notification sent via push if wallet runs low
```

---

## Topping Up

Users can top up from their dashboard → **Wallet** section:

1. Enter amount (minimum KES 50)
2. Paystack payment modal opens
3. Pay via M-Pesa, card, or bank
4. Balance added instantly after webhook verification

---

## Auto-Renewal Behaviour

| Wallet Balance | Action |
|---------------|--------|
| Enough for renewal | Deducted automatically — push notification sent confirming renewal |
| Insufficient balance | Push notification sent — user has 7 days to top up |
| Still unpaid after 7 days | Server suspended |
| Still unpaid after 14 days | Server deleted |

---

## Admin: Manually Credit a Wallet

Via **Super Admin → Users → select user → Credit Wallet**:

1. Enter amount in KES
2. Enter a note (e.g. "Goodwill credit — support ticket #123")
3. Save — balance updated instantly, transaction logged

---

## Wallet Transaction History

Each user can view their full transaction history:
- Top-ups
- Subscription deductions
- Admin credits
- Refunds (if issued manually)

All transactions are stored in the `xcasper_transactions` table.
