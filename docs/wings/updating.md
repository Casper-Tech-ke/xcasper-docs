---
title: Updating Wings
sidebar_position: 5
---

# 🔄 Updating Wings

Wings updates are released frequently. Keep it updated for security patches and new features.

---

## Check Current Version

```bash title="bash"
wings version
```

---

## Update Steps

```bash title="bash"
# Stop Wings
systemctl stop wings

# Download latest binary
curl -L -o /usr/local/bin/wings \
  "https://github.com/pterodactyl/wings/releases/latest/download/wings_linux_amd64"

chmod +x /usr/local/bin/wings

# Verify new version
wings version

# Start Wings
systemctl start wings
systemctl status wings
```

---

## Check for Breaking Changes

Always check the [Wings Releases](https://github.com/pterodactyl/wings/releases) page for:
- Config format changes
- New required permissions
- Deprecated settings

---

## After Updating

- Check `journalctl -u wings -f` for any errors
- Verify node shows as **online** in Panel → Admin → Nodes
- Create a test server if in doubt
