---
title: Wings SSL
sidebar_position: 4
---

# 🔐 Wings SSL Certificate

Wings must use HTTPS for secure communication with the panel. Use Let's Encrypt.

---

## Get a Certificate

Make sure `node.yourdomain.com` points to your Wings server IP first.

```bash title="bash"
apt install -y certbot

# Stop Wings temporarily so port 80 is free
systemctl stop wings

certbot certonly --standalone -d node.yourdomain.com

# Start Wings again
systemctl start wings
```

---

## Configure Wings to Use SSL

The certificate paths should already be in your `config.yml` if you used `wings configure`. Verify:

```yaml title="/etc/pterodactyl/config.yml"
api:
  ssl:
    enabled: true
    cert: /etc/letsencrypt/live/node.yourdomain.com/fullchain.pem
    key:  /etc/letsencrypt/live/node.yourdomain.com/privkey.pem
```

Restart Wings:

```bash title="bash"
systemctl restart wings
```

---

## Auto-Renewal

Certbot installs a renewal cron automatically. To ensure Wings restarts after renewal, add a deploy hook:

```bash title="bash"
cat > /etc/letsencrypt/renewal-hooks/deploy/wings.sh << 'EOF'
#!/bin/bash
systemctl restart wings
EOF
chmod +x /etc/letsencrypt/renewal-hooks/deploy/wings.sh
```

Test renewal:

```bash title="bash"
certbot renew --dry-run
```
