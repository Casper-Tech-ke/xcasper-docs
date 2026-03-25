---
title: Importing Eggs
sidebar_position: 2
---

# 📥 Importing Eggs

---

## Method 1 — Admin Panel UI (Recommended)

```text
1. Log in as admin
2. Admin → Nests
3. Select a Nest (or click "Create New Nest")
4. Click "Import Egg" (top-right button)
5. Upload the .json file
6. Note the Egg ID shown after import
```

---

## Method 2 — Artisan CLI (Bulk Import)

If you have SSH access to the panel server:

```bash title="bash"
cd /var/www/xcasper-panel

# Import a specific egg (replace paths as needed)
php artisan p:egg:import --nest-id=1 < /path/to/egg-paper.json
```

---

## Recommended Nest Structure

| Nest Name | Eggs to Import |
|-----------|---------------|
| XCASPER Custom | All files in `custom/` |
| Minecraft | All files in `minecraft/` |
| Source Engine Games | All files in `source-engine/` |
| Voice Servers | All files in `voice-servers/` |
| Other Games | `rust/egg-rust.json` |

---

## Setting the Billing Default Egg

After importing **XCASPER Modified**:

1. Check its Egg ID in Admin → Nests → XCASPER Custom → click the egg
2. Note the ID in the URL: `/admin/nests/1/eggs/3` → ID is **3**
3. Go to your panel's `/super-admin` → **Billing** tab
4. Set **Default Egg ID** to that number
5. Save

---

## Updating an Existing Egg

```text
1. Admin → Nests → select nest → click the egg name
2. Click Export (backup the current version)
3. Click Import → upload new .json
```

:::warning
Updating an egg does **not** change any existing servers — only new servers created with that egg will use the updated config.
:::
