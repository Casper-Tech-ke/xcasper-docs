---
title: Queue & Cron
sidebar_position: 6
---

# ⚙ Queue Worker & Cron Job

XCASPER Panel uses Laravel's queue system for background jobs (email, billing webhooks, push notifications) and a scheduled task runner for periodic jobs.

---

## Queue Worker (systemd)

Create `/etc/systemd/system/xcasper-queue.service`:

```ini title="/etc/systemd/system/xcasper-queue.service"
[Unit]
Description=XCASPER Panel Queue Worker
After=network.target mysql.service

[Service]
User=www-data
Group=www-data
Restart=always
RestartSec=5
StartLimitInterval=60
StartLimitBurst=3
ExecStart=/usr/bin/php /var/www/xcasper-panel/artisan queue:work \
  --queue=high,standard,low \
  --sleep=3 \
  --tries=3 \
  --timeout=90

StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target
```

Enable and start:

```bash title="bash"
systemctl daemon-reload
systemctl enable xcasper-queue
systemctl start xcasper-queue
systemctl status xcasper-queue
```

---

## Cron Job

The Laravel scheduler handles recurring tasks (subscription renewal checks, expiry notifications, cleanup jobs).

Add to the `www-data` crontab:

```bash title="bash"
(crontab -u www-data -l 2>/dev/null; echo "* * * * * php /var/www/xcasper-panel/artisan schedule:run >> /dev/null 2>&1") \
  | crontab -u www-data -
```

Verify:

```bash title="bash"
crontab -u www-data -l
```

---

## Monitoring

View queue worker logs in real time:

```bash title="bash"
journalctl -u xcasper-queue -f
```

Check failed jobs:

```bash title="bash"
php artisan queue:failed
```

Retry all failed jobs:

```bash title="bash"
php artisan queue:retry all
```

---

## After Panel Updates

Always restart the queue worker after pulling code changes:

```bash title="bash"
systemctl restart xcasper-queue
```
