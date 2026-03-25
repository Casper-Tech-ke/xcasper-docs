---
title: Minecraft Eggs
sidebar_position: 4
---

# 🎮 Minecraft Eggs

Five Minecraft eggs are included in the `minecraft/` folder.

---

## PaperMC

**File**: `minecraft/egg-paper.json`  
**Image**: `ghcr.io/pterodactyl/yolks:java_17`

High-performance Minecraft server with full Bukkit/Spigot plugin support. Recommended for most Minecraft hosting.

| Variable | Default |
|----------|---------|
| `SERVER_JARFILE` | `paper.jar` |
| `MC_VERSION` | `latest` |
| `BUILD_NUMBER` | `latest` |

---

## Vanilla Minecraft

**File**: `minecraft/egg-vanilla-minecraft.json`  
**Image**: `ghcr.io/pterodactyl/yolks:java_17`

Official Mojang vanilla server — no mods or plugins. Good for simple survival servers.

---

## BungeeCord

**File**: `minecraft/egg-bungeecord.json`  
**Image**: `ghcr.io/pterodactyl/yolks:java_17`

Proxy server for linking multiple Minecraft servers into one network. Players connect to BungeeCord and are routed to backend servers.

---

## Minecraft Forge

**File**: `minecraft/egg-forge-minecraft.json`  
**Image**: `ghcr.io/pterodactyl/yolks:java_17`

Forge mod loader for Minecraft. Supports the entire Forge mod ecosystem. Specify the Minecraft version and Forge version as environment variables.

---

## SpongeVanilla

**File**: `minecraft/egg-sponge--sponge-vanilla.json`  
**Image**: `ghcr.io/pterodactyl/yolks:java_8`

SpongeVanilla provides the Sponge plugin API on a vanilla Minecraft server (no Forge required).

---

:::tip Choosing the Right Egg
- **Vanilla** → no plugins, no mods
- **Paper** → plugins (Bukkit/Spigot ecosystem) — most popular
- **Forge** → mods (Forge ecosystem)
- **Sponge** → Sponge plugins
- **BungeeCord** → proxy only, runs on top of other servers
:::
