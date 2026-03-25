---
title: Source Engine Eggs
sidebar_position: 5
---

# 🎯 Source Engine Eggs

Six Source Engine game eggs for popular Valve games and custom games.

---

## CS:GO

**File**: `source-engine/egg-counter--strike--global-offensive.json`

Counter-Strike: Global Offensive dedicated server. Requires a Steam Game Server Login Token (GSLT).

| Variable | Description |
|----------|-------------|
| `SRCDS_APPID` | `740` (CS:GO) |
| `SRCDS_TOKEN` | Steam GSLT |
| `SRCDS_MAP` | Starting map |

---

## Garry's Mod

**File**: `source-engine/egg-garrys-mod.json`

Garry's Mod dedicated server with workshop collection support.

| Variable | Description |
|----------|-------------|
| `SRCDS_APPID` | `4020` (GMod) |
| `SRCDS_TOKEN` | Steam GSLT |
| `WORKSHOP_ID` | Optional workshop collection |

---

## Team Fortress 2

**File**: `source-engine/egg-team-fortress2.json`

TF2 dedicated server. Public access — no GSLT required for most use cases.

---

## Insurgency

**File**: `source-engine/egg-insurgency.json`

Insurgency dedicated server. Supports both Insurgency (2014) and Day of Infamy.

---

## ARK: Survival Evolved

**File**: `source-engine/egg-ark--survival-evolved.json`

ARK dedicated server. Note: ARK servers are resource-intensive — minimum 8 GB RAM recommended.

| Variable | Default | Description |
|----------|---------|-------------|
| `SESSIONNAME` | `ARK Server` | Server name |
| `SERVERPASSWORD` | — | Join password |
| `ADMINPASSWORD` | `admin` | Admin password |
| `SERVERMAP` | `TheIsland` | Map to load |

---

## Custom Source Engine

**File**: `source-engine/egg-custom-source-engine-game.json`

A generic template for any Source Engine game. Set the `SRCDS_APPID` to your game's Steam App ID.
