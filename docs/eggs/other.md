---
title: Other Eggs (Rust, Voice)
sidebar_position: 6
---

# 🦀 Other Eggs

---

## Rust

**File**: `rust/egg-rust.json`  
**Image**: `ghcr.io/pterodactyl/yolks:steamcmd`

Rust dedicated game server. One of the most popular survival games for hosting.

| Variable | Default | Description |
|----------|---------|-------------|
| `WORLD_SIZE` | `3500` | Map size |
| `WORLD_SEED` | `12345` | Map seed |
| `MAX_PLAYERS` | `50` | Max concurrent players |
| `SERVER_NAME` | `Rust Server` | Name shown in server browser |

:::warning Resource Requirements
Rust servers are very demanding. Recommended: **4 vCPU, 8+ GB RAM, 20+ GB SSD** per server.
:::

---

## Mumble Server

**File**: `voice-servers/egg-mumble-server.json`  
**Image**: `ghcr.io/pterodactyl/yolks:debian`

Open-source, low-latency voice communication server. Very lightweight — can run alongside game servers.

| Variable | Default |
|----------|---------|
| `SERVER_PORT` | `64738` |
| `MAX_USERS` | `100` |

---

## TeamSpeak 3

**File**: `voice-servers/egg-teamspeak3-server.json`  
**Image**: `ghcr.io/pterodactyl/yolks:debian`

TeamSpeak 3 server — widely used for gaming communities. A free license covers up to 32 slots.

| Variable | Default |
|----------|---------|
| `TS_VERSION` | `latest` |
| `SERVER_PORT` | `9987` |
| `QUERY_PORT` | `10011` |

:::tip License
TeamSpeak offers a free Non-Profit License (NPL) for up to 512 users. Register at [teamspeak.com](https://teamspeak.com/en/features/licensing/).
:::
