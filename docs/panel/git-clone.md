---
title: Git Clone (File Manager)
sidebar_position: 11
---

# 🔀 Git Clone — File Manager

:::info No build step required
The Git Clone button is injected at the Blade layer — it works on the live panel with zero frontend rebuild needed.
:::

## Overview

The **🔀 Clone Repo** button is built into every server's file manager toolbar. It lets you clone any Git repository — public or private — directly into your server's file system from the browser.

- No SSH access to the server needed
- Supports GitHub, GitLab, Bitbucket, and any Git HTTPS host
- Works with private repos via Personal Access Token (PAT)
- Clones into whichever directory you are currently browsing

## How to Use

1. Go to any server → **Files** tab
2. The **🔀 Clone Repo** button appears in the toolbar alongside Upload and Create Folder
3. Click the button to open the Clone modal
4. Fill in the form and click **🚀 Clone Repository**

### Form Fields

| Field | Required | Description |
|-------|----------|-------------|
| **Repository URL** | ✅ Yes | Full URL — e.g. `https://github.com/user/repo.git` |
| **Target Directory** | ❌ No | Where to clone. Pre-filled with your current directory. Use `/` for server root. |
| **Branch** | ❌ No | Specific branch to clone. Leave blank for the default branch. |
| **Username** | ❌ No | Git host username — for private repos only |
| **Access Token / PAT** | ❌ No | Personal Access Token — required for private repos |

## Server Online vs Offline

| Server State | What Happens |
|---|---|
| 🟢 **Online** | Clone starts immediately. Watch `[XCASPER-GIT]` progress in the server **Console** tab. |
| 🔴 **Offline** | Script `.xcasper-git-clone.sh` is written to your target directory. Start the server, then run: `bash .xcasper-git-clone.sh`. It self-deletes after running. |

## Private Repositories

For private repos you need a Personal Access Token (PAT) from your Git provider.

### GitHub PAT

1. Open [github.com/settings/tokens](https://github.com/settings/tokens)
2. Click **Generate new token (classic)**
3. Select scope: `repo`
4. Copy the token — starts with `ghp_`

:::tip Fine-grained tokens
Use a [fine-grained token](https://github.com/settings/tokens?type=beta) scoped to only the specific repository for better security.
:::

### GitLab PAT

1. Open [gitlab.com/-/user_settings/personal_access_tokens](https://gitlab.com/-/user_settings/personal_access_tokens)
2. Click **Add new token**
3. Select scope: `read_repository` or `api`
4. Copy the token — starts with `glpat-`

### Bitbucket App Password

1. Open [bitbucket.org/account/settings/app-passwords](https://bitbucket.org/account/settings/app-passwords)
2. Create App Password with `Repositories: Read` permission
3. Use your Bitbucket username + the App Password as the token

## Example: Cloning a Private GitHub Repo

| Field | Value |
|-------|-------|
| URL | `https://github.com/MyOrg/my-bot.git` |
| Branch | `main` |
| Username | `myghusername` |
| Access Token | `ghp_xxxxxxxxxxxxxxxxxxxx` |

## API Endpoint

The button calls this REST endpoint on the panel backend:

```http
POST /api/client/servers/{server}/files/git-clone
```

**Request body (JSON):**

```json
{
  "url":       "https://github.com/user/repo.git",
  "directory": "/",
  "branch":    "main",
  "username":  "optional",
  "token":     "optional-pat"
}
```

**Response (success):**

```json
{
  "success": true,
  "online":  true,
  "message": "Git clone started! Check the server console for progress output."
}
```

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Button does not appear | Refresh the page. The button injects after React renders the toolbar (usually under 1 second). |
| Authentication failed | Make sure your PAT has `repo` scope and has not expired. |
| Clone does nothing | Server is offline — check for `.xcasper-git-clone.sh` in your files and run it after starting the server. |
| Destination not empty | `git clone` requires an empty target directory. Delete files first or clone into a new sub-folder. |
| Repository not found (404) | Check the URL spelling and ensure the repo is public, or add valid credentials for private repos. |

