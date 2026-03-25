---
title: Updating the Panel
sidebar_position: 9
---

# 🔄 Updating the Panel

Follow these steps to pull in new XCASPER Panel updates.

---

## Before Updating

- ✅ Back up your database: `mysqldump xcasper_panel > backup_$(date +%F).sql`
- ✅ Back up your `.env` file
- ✅ Note any local customizations you've made

---

## Update Steps

```bash title="bash"
cd /var/www/xcasper-panel

git pull https://github.com/Casper-Tech-ke/xcasper-panel.git main

# Update PHP dependencies
composer install --no-dev --optimize-autoloader

# Update and rebuild frontend
yarn install
yarn build

# Run new migrations (safe — only applies new ones)
php artisan migrate --force

# Clear all caches
php artisan view:clear
php artisan config:clear
php artisan route:clear
php artisan cache:clear

# Fix permissions
chown -R www-data:www-data .

# Restart queue worker
systemctl restart xcasper-queue
```

---

## Post-Update Checks

- [ ] Panel loads at your URL
- [ ] No 500 errors in `/var/log/nginx/xcasper-panel.error.log`
- [ ] Queue worker is running: `systemctl status xcasper-queue`
- [ ] Super Admin accessible at `/super-admin`

---

## Rolling Back

If an update breaks something:

```bash title="bash"
# Restore database
mysql xcasper_panel < backup_YYYY-MM-DD.sql

# Restore previous code version
# (restore from your backup or previous deployment)

# Clear caches
php artisan view:clear && php artisan config:clear

systemctl restart xcasper-queue
```

---

:::tip Zero-Downtime
For zero-downtime deploys, use a separate staging directory and swap the Nginx `root` path after a successful build.
:::
