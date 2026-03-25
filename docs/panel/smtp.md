---
title: SMTP & Email (Brevo)
sidebar_position: 6
---

# 📧 SMTP & Email Setup with Brevo

XCASPER uses **[Brevo](https://www.brevo.com)** (formerly Sendinblue) as its recommended transactional email provider. Brevo's free tier allows **300 emails/day** with no credit card required — more than enough for most hosting businesses.

---

## Why Brevo?

| Feature | Brevo Free | Mailgun | Amazon SES |
|---------|-----------|---------|-----------|
| Free emails/day | **300** | 100 | 200 |
| Credit card required | ❌ No | ✅ Yes | ✅ Yes |
| SMTP relay | ✅ | ✅ | ✅ |
| Email logs & analytics | ✅ | ✅ | ❌ |
| Dedicated IP (paid) | ✅ | ✅ | ✅ |

---

## Step 1 — Create a Brevo Account

1. Go to **[brevo.com](https://www.brevo.com)** and click **Sign up free**
2. Verify your email address
3. Complete the onboarding (you can skip optional steps)

---

## Step 2 — Verify Your Sending Domain

This tells email providers your domain is legitimate and reduces spam scores significantly.

1. In Brevo, go to **Settings → Senders & IP → Domains**
2. Click **Add a domain** → enter `xcasper.space` (or your domain)
3. Brevo will show you **DNS records to add** — copy them
4. In Cloudflare (dash.cloudflare.com → xcasper.space → DNS):
   - Add the **TXT record** (DKIM key) Brevo gives you
   - Add the **CNAME record** for tracking (optional)
5. Back in Brevo, click **Verify** — it checks your DNS

:::tip Fast verification
Cloudflare DNS changes propagate in **under 1 minute** when proxied records are set correctly.
:::

---

## Step 3 — Get Your SMTP Credentials

1. In Brevo, go to **Settings → SMTP & API → SMTP**
2. You will see:

| Setting | Value |
|---------|-------|
| **SMTP Server** | `smtp-relay.brevo.com` |
| **Port** | `587` (TLS) or `465` (SSL) |
| **Login** | Your Brevo account email |
| **Password** | Your **SMTP key** (not your Brevo login password — click **Generate a new SMTP key**) |

3. Click **Generate a new SMTP key** → copy it (you'll only see it once)

---

## Step 4 — Configure in XCASPER Panel

### Option A — Super Admin (No SSH Needed)

1. Go to your panel → `/super-admin`
2. Click the **Email** tab
3. Fill in:

| Field | Value |
|-------|-------|
| Mail Driver | `smtp` |
| SMTP Host | `smtp-relay.brevo.com` |
| SMTP Port | `587` |
| Encryption | `tls` |
| Username | Your Brevo login email |
| Password | Your Brevo SMTP key |
| From Address | `no-reply@yourdomain.com` |
| From Name | `XCASPER Hosting` |

4. Click **Send Test Email** — check your inbox
5. Click **Save** if the test succeeded

### Option B — Edit `.env` Directly

```ini title="/var/www/xcasper-panel/.env"
MAIL_MAILER=smtp
MAIL_HOST=smtp-relay.brevo.com
MAIL_PORT=587
MAIL_ENCRYPTION=tls
MAIL_USERNAME=your-brevo-login@email.com
MAIL_PASSWORD=your-brevo-smtp-key
MAIL_FROM_ADDRESS=no-reply@yourdomain.com
MAIL_FROM_NAME="XCASPER Hosting"
```

After editing `.env`:
```bash title="bash"
cd /var/www/xcasper-panel
php artisan config:clear
php artisan cache:clear
```

---

## Step 5 — Test from the Command Line

```bash title="bash"
cd /var/www/xcasper-panel
php artisan tinker
```

Inside tinker:
```php title="PHP"
Mail::raw('XCASPER SMTP test', function($msg) {
    $msg->to('your-email@gmail.com')->subject('XCASPER Test');
});
```

Type `exit` to quit tinker. Check your inbox — the email should arrive within seconds.

---

## Emails XCASPER Sends

| Event | Email Sent |
|-------|-----------|
| User registration | Welcome + email verification link |
| Password reset | Reset link |
| New subscription | Payment confirmation + server details |
| Subscription renewal | Monthly renewal receipt |
| Low wallet balance | Top-up reminder |
| Server suspended | Suspension notice with payment link |

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `Connection refused` | Check port — use `587` not `25` (often blocked by VPS providers) |
| `Authentication failed` | Make sure you're using the **SMTP key**, not your Brevo password |
| Emails go to spam | Verify your sending domain in Brevo (Step 2) |
| `Mail driver [smtp] not supported` | Run `php artisan config:clear` after editing `.env` |
| Test email not received | Check Brevo **Logs → Email logs** to see if it was delivered |

---

## Brevo Useful Links

| Resource | Link |
|----------|------|
| 🏠 Brevo Homepage | [brevo.com](https://www.brevo.com) |
| 📝 Sign Up Free | [app.brevo.com/account/register](https://app.brevo.com/account/register) |
| 🔑 SMTP Settings | [app.brevo.com/settings/keys/smtp](https://app.brevo.com/settings/keys/smtp) |
| 🌐 Domain Verification | [app.brevo.com/senders/domain/list](https://app.brevo.com/senders/domain/list) |
| 📊 Email Logs | [app.brevo.com/email/log](https://app.brevo.com/email/log) |
| 📖 SMTP Documentation | [help.brevo.com/hc/en-us/articles/209462765](https://help.brevo.com/hc/en-us/articles/209462765) |
| 💰 Pricing | [brevo.com/pricing](https://www.brevo.com/pricing) |

---

## Increasing Your Sending Limit

Brevo free = 300 emails/day. To increase:

1. **Starter plan** ($25/mo) — 20,000 emails/month, no daily limit, no Brevo logo
2. **Upgrade**: [brevo.com/pricing](https://www.brevo.com/pricing)

For most XCASPER deployments with under ~200 users, the **free tier is sufficient**.
