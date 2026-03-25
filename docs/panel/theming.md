---
title: Theming & Branding
sidebar_position: 8
---

# 🎨 Theming & Branding

XCASPER uses **CSS custom properties (variables)** injected at runtime for theming — meaning you can change colours **without rebuilding the frontend**.

---

## How It Works

The file `resources/views/templates/wrapper.blade.php` injects a `<style>` block into every page:

```html title="wrapper.blade.php (simplified)"
<style>
  :root {
    --xcasper-primary: {{ $primaryColor }};
    --xcasper-primary-rgb: {{ $primaryRgb }};
    --xcasper-accent: {{ $accentColor }};
  }
</style>
```

All XCASPER custom components use these variables — never hardcoded hex values.

---

## Changing Colours

### Via Super Admin (Recommended)
1. Go to `/super-admin`
2. Click the **Appearance** tab
3. Use the colour picker or choose a preset
4. See the live preview update in real time
5. Click Save

### Built-in Colour Presets

| Preset | Primary | Accent |
|--------|---------|--------|
| 🔵 XCASPER Blue | `#00D4FF` | `#7C3AED` |
| 🟣 Midnight Purple | `#7C3AED` | `#00D4FF` |
| 🟢 Emerald | `#10B981` | `#3B82F6` |
| 🔴 Crimson | `#EF4444` | `#F59E0B` |
| 🟠 Sunset | `#F59E0B` | `#EF4444` |
| 🩷 Rose | `#EC4899` | `#8B5CF6` |
| ⚪ Monochrome | `#64748B` | `#94A3B8` |
| 🌊 Ocean | `#0EA5E9` | `#06B6D4` |

---

## Adding a New Component

When building new React components, always use CSS variables:

```tsx title="✅ Correct"
const StyledButton = styled.button`
  background: var(--xcasper-primary);
  color: white;
  border: 1px solid rgba(var(--xcasper-primary-rgb), 0.3);
`;
```

```tsx title="❌ Wrong — never hardcode"
const StyledButton = styled.button`
  background: #00D4FF;  /* Don't do this */
`;
```

---

## Logo

The XCASPER logo is stored in `public/img/logo.svg` (and `logo.png`). To update it:

1. Replace the file at that path
2. Run `php artisan view:clear`

:::warning
Never remove or heavily alter the ghost character from the logo — it's the XCASPER brand identity.
:::

---

## Animated Background

The Casper ghost canvas animation is in `resources/views/layouts/xcasper-bg.blade.php`.
It renders a particle field with a friendly ghost on the auth (login/register) pages.

To disable it, remove the `@include('layouts.xcasper-bg')` line from your auth layout.
