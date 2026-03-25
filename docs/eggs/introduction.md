---
title: Eggs Introduction
sidebar_position: 1
---

# 🥚 Eggs — Introduction

**Eggs** are server templates in Pterodactyl/XCASPER. Each egg defines:
- The **Docker image** to run the server in
- The **install script** that downloads and configures the game server
- The **startup command**
- **Environment variables** (ports, game version, startup flags, etc.)

---

## XCASPER Eggs Repository

All eggs are maintained in: **[xcasper-eggs](https://github.com/Casper-Tech-ke/xcasper-eggs)**

---

## Egg Categories

| Category | Eggs | Folder |
|----------|------|--------|
| 🟢 XCASPER Custom | 3 | `custom/` |
| 🎮 Minecraft | 5 | `minecraft/` |
| 🎯 Source Engine | 6 | `source-engine/` |
| 🦀 Rust | 1 | `rust/` |
| 🎙 Voice Servers | 2 | `voice-servers/` |

**Total: 17 eggs**

---

## How Eggs Are Used

1. **Admin imports the egg** into a Nest (Admin → Nests → Import Egg)
2. **Admin creates a server** and selects the egg
3. Wings **runs the install script** inside a temporary Docker container
4. Once installed, the game server **starts via the startup command**

For billing-created servers, the egg is selected automatically from the **Default Egg ID** in Super Admin → Billing.

---

## Next Steps

- [Import Eggs →](/docs/eggs/importing)
- [XCASPER Custom Eggs →](/docs/eggs/custom)
- [Minecraft Eggs →](/docs/eggs/minecraft)
