---
title: SSL Certificate
sidebar_position: 5
---

# 🔐 SSL Certificate

XCASPER Panel requires HTTPS. We recommend **Let's Encrypt** via Certbot — it's free and auto-renewing.

---

## Install Certbot (if not already installed)

```bash title="bash"
apt install -y certbot python3-certbot-nginx
```

---

## Obtain a Certificate

Make sure your domain's DNS A record points to your server IP **before** running this command.

```bash title="bash"
certbot --nginx -d panel.yourdomain.com
```

Certbot will:
1. Verify domain ownership via HTTP challenge
2. Issue the certificate
3. Automatically update your Nginx config to add HTTPS
4. Set up a redirect from HTTP → HTTPS

---

## Verify Auto-Renewal

Certbot sets up a renewal cron job automatically. Test it:

```bash title="bash"
certbot renew --dry-run
```

You should see `Congratulations, all simulated renewals succeeded`.

---

## Manual Renewal

If auto-renewal ever fails:

```bash title="bash"
certbot renew
systemctl reload nginx
```

---

## Certificate Files Location

| File | Path |
|------|------|
| Certificate | `/etc/letsencrypt/live/panel.yourdomain.com/fullchain.pem` |
| Private key | `/etc/letsencrypt/live/panel.yourdomain.com/privkey.pem` |

:::warning
Never share or expose your private key file. It gives full control of your SSL certificate.
:::
