---
title: Installation
sidebar_position: 3
---

# 🏗 Panel Installation

This guide walks through installing the XCASPER Panel on **Ubuntu 22.04 LTS**.

---

## Step 1 — Install System Dependencies

```bash title="bash"
apt update && apt upgrade -y

# PHP 8.1
apt install -y software-properties-common
add-apt-repository ppa:ondrej/php -y
apt update
apt install -y php8.1 php8.1-cli php8.1-fpm php8.1-mysql \
  php8.1-xml php8.1-bcmath php8.1-curl php8.1-zip \
  php8.1-gd php8.1-mbstring php8.1-tokenizer php8.1-openssl

# Utilities
apt install -y nginx certbot python3-certbot-nginx \
  mysql-server curl unzip wget
```

## Step 2 — Install Composer

```bash title="bash"
curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer
composer --version
```

## Step 3 — Install Node.js 18 and Yarn

```bash title="bash"
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt install -y nodejs
npm install -g yarn
node --version  # should be 18.x
yarn --version
```

## Step 4 — Create the Database

```bash title="bash"
mysql -u root -p
```

```sql title="MySQL"
CREATE DATABASE xcasper_panel;
CREATE USER 'xcasper'@'localhost' IDENTIFIED BY 'STRONG_PASSWORD';
GRANT ALL PRIVILEGES ON xcasper_panel.* TO 'xcasper'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

## Step 5 — Clone from GitHub & Install

```bash title="bash"
mkdir -p /var/www/xcasper-panel
cd /var/www/xcasper-panel

git clone https://github.com/Casper-Tech-ke/xcasper-panel.git .

# Install PHP dependencies
composer install --no-dev --optimize-autoloader

# Install and build the frontend
yarn install
yarn build
```

## Step 6 — Environment Configuration

```bash title="bash"
cp .env.example .env
php artisan key:generate
```

Edit `.env` with your values:

```ini title=".env"
APP_NAME="XCASPER Hosting"
APP_URL=https://panel.yourdomain.com
APP_ENV=production
APP_DEBUG=false

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=xcasper_panel
DB_USERNAME=xcasper
DB_PASSWORD=STRONG_PASSWORD

XCASPER_SUPER_KEY=your-secret-super-admin-key

MAIL_MAILER=smtp
MAIL_HOST=smtp-relay.brevo.com
MAIL_PORT=587
MAIL_ENCRYPTION=tls
MAIL_USERNAME=your-brevo-login
MAIL_PASSWORD=your-brevo-smtp-key
MAIL_FROM_ADDRESS=no-reply@yourdomain.com
MAIL_FROM_NAME="XCASPER Hosting"

QUEUE_CONNECTION=database
```

## Step 7 — Run Migrations

```bash title="bash"
php artisan migrate --force
php artisan db:seed --force
```

## Step 8 — Set Permissions

```bash title="bash"
chown -R www-data:www-data /var/www/xcasper-panel
chmod -R 755 /var/www/xcasper-panel
chmod -R 700 /var/www/xcasper-panel/storage /var/www/xcasper-panel/bootstrap/cache
```

## Step 9 — Create Your First Admin User

```bash title="bash"
php artisan p:user:make
```

Follow the prompts — set `Is Admin? [yes/no]` to **yes**.

---

## Next Steps

- [Configure Nginx →](/docs/panel/webserver)
- [Set up SSL →](/docs/panel/ssl)
- [Configure Queue & Cron →](/docs/panel/queue)
