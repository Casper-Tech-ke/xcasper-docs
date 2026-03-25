---
title: Wings Installation
sidebar_position: 2
---

# 🏗 Wings Installation

Install Wings on your **Ubuntu 22.04** game node server (not the panel server).

---

## Step 1 — Install Docker

```bash title="bash"
curl -sSL https://get.docker.com/ | CHANNEL=stable bash
systemctl enable --now docker

# Verify
docker run --rm hello-world
```

## Step 2 — System Preparation

```bash title="bash"
# Ensure these kernel modules are loaded
modprobe overlay
modprobe br_netfilter

# Add to load on boot
echo "overlay" >> /etc/modules-load.d/pterodactyl.conf
echo "br_netfilter" >> /etc/modules-load.d/pterodactyl.conf

# Apply sysctl settings for Docker
cat >> /etc/sysctl.conf << 'EOF'
net.bridge.bridge-nf-call-iptables = 1
net.ipv4.ip_forward = 1
net.ipv4.conf.default.rp_filter = 0
EOF
sysctl -p
```

## Step 3 — Download Wings Binary

```bash title="bash"
mkdir -p /etc/pterodactyl
curl -L -o /usr/local/bin/wings \
  "https://github.com/pterodactyl/wings/releases/latest/download/wings_linux_amd64"
chmod +x /usr/local/bin/wings
wings version
```

## Step 4 — Create Required Directories

```bash title="bash"
mkdir -p /var/lib/pterodactyl/archives
mkdir -p /var/lib/pterodactyl/backups
mkdir -p /home/daemon-files
mkdir -p /var/log/pterodactyl
mkdir -p /tmp/pterodactyl

useradd -r -s /sbin/nologin pterodactyl 2>/dev/null || true
chown -R pterodactyl:pterodactyl /home/daemon-files /var/log/pterodactyl
```

## Step 5 — Add Node in Panel

1. Log into your XCASPER Panel as an admin
2. Go to **Admin → Nodes → Create New**
3. Fill in:
   - **Name**: Your node name
   - **FQDN**: `node.yourdomain.com` (must resolve to node IP)
   - **Behind Proxy**: No
   - **Daemon Port**: `8080`
   - **SFTP Port**: `2022`
   - **Total Memory** and **Disk**

## Step 6 — Configure Wings

On the **Configuration** tab of your new node, you'll see a `wings configure` command:

```bash title="bash"
wings configure \
  --panel-url https://panel.yourdomain.com \
  --token YOUR_TOKEN_HERE
```

Run this on your Wings server. It writes `/etc/pterodactyl/config.yml`.

## Step 7 — Install systemd Service

```bash title="bash"
# Download the service file from xcasper-wings repo, or create it:
cat > /etc/systemd/system/wings.service << 'EOF'
[Unit]
Description=Pterodactyl Wings Daemon
After=docker.service
Requires=docker.service
PartOf=docker.service

[Service]
User=root
WorkingDirectory=/etc/pterodactyl
LimitNOFILE=4096
PIDFile=/var/run/wings/daemon.pid
ExecStart=/usr/local/bin/wings
Restart=on-failure
StartLimitInterval=180
StartLimitBurst=30
RestartSec=5s

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable --now wings
systemctl status wings
```

## Step 8 — Verify in Panel

Go back to **Admin → Nodes → your node** in the panel. The status indicator should turn **green**.

---

## SSL for Wings

See [Wings SSL Setup →](/docs/wings/ssl)
