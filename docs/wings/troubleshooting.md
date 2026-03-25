---
title: Troubleshooting Wings
sidebar_position: 6
---

# 🐞 Wings Troubleshooting

Use this guide to diagnose and fix common Wings issues.

---

## Node Shows Offline in Panel

**Check Wings logs:**
```bash title="bash"
journalctl -u wings -f
```

**Common causes:**

| Cause | Fix |
|-------|-----|
| Wrong token in `config.yml` | Re-run `wings configure` with a fresh token |
| Panel URL incorrect | Check `remote:` in `/etc/pterodactyl/config.yml` |
| SSL cert not valid | Run `certbot renew` and restart Wings |
| Port 8080 blocked by firewall | `ufw allow 8080/tcp` |
| DNS not resolving | `ping node.yourdomain.com` from the panel server |

---

## Server Won't Install

```bash title="bash"
# Watch Wings logs during install:
journalctl -u wings -f

# Check Docker is running:
systemctl status docker

# Manually pull the Docker image (replace with your egg's image):
docker pull ghcr.io/pterodactyl/yolks:nodejs_18
```

---

## Server Won't Start

```bash title="bash"
# Check container status:
docker ps -a

# View container logs directly:
docker logs <container_id>

# Check disk space:
df -h /home/daemon-files
```

---

## SFTP Connection Refused

```bash title="bash"
# Port 2022 must be open:
ufw allow 2022/tcp
ufw reload

# Verify Wings is listening:
ss -tlnp | grep 2022
```

---

## Permission Errors

```bash title="bash"
chown -R pterodactyl:pterodactyl /home/daemon-files
chown -R pterodactyl:pterodactyl /var/log/pterodactyl
systemctl restart wings
```

---

## Debug Mode

For detailed logging, start Wings in debug mode (manually, not via systemd):

```bash title="bash"
systemctl stop wings
wings --debug 2>&1 | tee /tmp/wings-debug.log
```

Press `Ctrl+C` to stop. Review `/tmp/wings-debug.log`.

---

## Useful Commands

```bash title="bash"
systemctl status wings          # Service status
systemctl restart wings         # Restart daemon
journalctl -u wings --since "1h ago"  # Last hour of logs
docker ps                       # Running containers
docker stats                    # Resource usage per container
```
