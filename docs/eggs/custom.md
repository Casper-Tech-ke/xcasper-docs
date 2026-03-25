---
title: XCASPER Custom Eggs
sidebar_position: 3
---

# 🟢 XCASPER Custom Eggs

These eggs are built specifically for XCASPER Hosting and are used for billing-provisioned servers.

---

## XCASPER Modified (Default Billing Egg)

**File**: `custom/egg-XCASPER---Modified.json`  
**Docker Image**: `ghcr.io/pterodactyl/yolks:nodejs_18`  
**Default Egg ID**: `3`

This is the egg that gets automatically assigned when a user purchases a plan and clicks "Add Server". It runs a Node.js environment with sensible defaults for small web applications and bots.

**Environment Variables:**

| Variable | Default | Description |
|----------|---------|-------------|
| `STARTUP` | `node index.js` | Startup command |
| `NODE_VERSION` | `18` | Node.js version |
| `AUTO_UPDATE` | `0` | Auto-update on start |

---

## Node.js Generic

**File**: `custom/egg-node.js-generic.json`  
**Docker Image**: `ghcr.io/pterodactyl/yolks:nodejs_18`

A generic Node.js egg — use for any Node.js application or bot framework. Supports custom startup commands.

---

## Nodemon

**File**: `custom/egg-nodemon.json`  
**Docker Image**: `ghcr.io/pterodactyl/yolks:nodejs_18`

Node.js with **Nodemon** pre-configured. Automatically restarts the process when source files change. Great for development environments hosted on your panel.

---

## Changing the Billing Default Egg

The default egg for billing servers is configured in **Super Admin → Billing → Default Egg ID**.

You can change it to any egg ID that exists in your panel. After changing, new billing servers will use the new egg — existing servers are unaffected.
