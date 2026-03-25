---
title: Wings Introduction
sidebar_position: 1
---

# 🔧 Wings — Introduction

**Pterodactyl Wings** is the daemon that runs on your **game node server** and actually executes game server containers using Docker. It communicates with the XCASPER Panel over a secure WebSocket connection.

---

## How It Works

```
XCASPER Panel
    ↓  Encrypted WebSocket (HTTPS)
Wings Daemon (port 8080)
    ↓  Docker API
Game Server Containers (Minecraft, CS:GO, etc.)
```

The panel sends instructions; Wings executes them on the node.

---

## Panel ↔ Wings Communication

| Action | What Happens |
|--------|-------------|
| Create server | Panel calls Wings API → Wings creates Docker container |
| Start/stop server | Panel WebSocket → Wings → Docker start/stop |
| File manager | Panel → Wings API → reads/writes files in container volume |
| Console output | Wings → WebSocket → Panel → Browser in real time |
| Server install | Wings runs the egg's install script inside an Alpine container |

---

## Separate Server Requirement

Wings should run on a **different server** from the panel. Each Wings node can host many game servers — limited by your node's RAM, CPU, and disk.

| Component | Recommended Server |
|-----------|-------------------|
| XCASPER Panel | 2 vCPU, 2 GB RAM — web-only workload |
| Wings Node | 4+ vCPU, 8+ GB RAM — runs all game containers |

---

## Next Steps

- [Install Wings →](/docs/wings/installation)
- [Configure Wings →](/docs/wings/configuration)
- [Wings SSL →](/docs/wings/ssl)
