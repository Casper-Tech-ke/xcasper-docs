---
title: Web Server (Nginx)
sidebar_position: 4
---

# 🌐 Nginx Configuration

XCASPER Panel requires **Nginx** as the web server. Apache is not officially supported.

---

## Create the Site Config

Create the file `/etc/nginx/sites-available/xcasper-panel`:

```nginx title="/etc/nginx/sites-available/xcasper-panel"
server {
    listen 80;
    server_name panel.yourdomain.com;

    root /var/www/xcasper-panel/public;
    index index.php;

    access_log /var/log/nginx/xcasper-panel.access.log;
    error_log  /var/log/nginx/xcasper-panel.error.log warn;

    client_max_body_size 100m;
    client_body_timeout  120s;

    # Security headers
    add_header X-Content-Type-Options nosniff;
    add_header X-Frame-Options SAMEORIGIN;
    add_header X-XSS-Protection "1; mode=block";
    add_header Referrer-Policy strict-origin-when-cross-origin;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass unix:/run/php/php8.1-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \n post_max_size = 100M";
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_read_timeout 300;
        fastcgi_intercept_errors off;
    }

    # Block access to hidden files
    location ~ /\.(?!well-known) {
        deny all;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## Enable the Site

```bash title="bash"
ln -s /etc/nginx/sites-available/xcasper-panel /etc/nginx/sites-enabled/

# Remove default site (optional)
rm -f /etc/nginx/sites-enabled/default

# Test and reload
nginx -t && systemctl reload nginx
```

---

## After SSL Setup

After running Certbot (see [SSL setup](/docs/panel/ssl)), Nginx will automatically add the HTTPS blocks. The final config will listen on both port 80 (redirect) and port 443 (HTTPS).

---

## PHP-FPM Tuning (Optional)

For production servers with more traffic, edit `/etc/php/8.1/fpm/pool.d/www.conf`:

```ini title="/etc/php/8.1/fpm/pool.d/www.conf"
pm = dynamic
pm.max_children = 20
pm.start_servers = 4
pm.min_spare_servers = 2
pm.max_spare_servers = 8
pm.max_requests = 500
```

Then restart: `systemctl restart php8.1-fpm`
