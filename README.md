# PopX — React Qualifier Assignment

A pixel-matched React implementation of the PopX mobile app design (Welcome,
Sign In, Create Account, and Account Settings screens), built with React +
React Router and plain CSS.

## Live demo

- **Hosted app:** _add your Netlify/Vercel URL here after deploying_
- **Repository:** _add your GitHub repo URL here_

## Screens

| Route      | Screen                                         |
| ---------- | ----------------------------------------------- |
| `/`        | Welcome screen — Create Account / Login entry   |
| `/login`   | Sign in to your PopX account                    |
| `/signup`  | Create your PopX account                        |
| `/account` | Account Settings (profile summary)              |

Navigation flows: Welcome → Create Account → Account Settings, and
Welcome → Login → Account Settings. The Login and Create Account submit
buttons stay disabled (and visibly greyed out) until all required fields
are filled in, matching the source design.

## Tech stack

- React 19 (Vite)
- React Router v7 for client-side routing
- Plain CSS (CSS variables for the design tokens — colors, spacing) — no
  CSS framework, so the markup stays simple and easy to audit

## Project structure

```
src/
  components/
    MobileFrame.jsx   # centers the mobile app interface on the page
    FormField.jsx      # reusable labeled input
    forms.css
  pages/
    Welcome.jsx / .css
    Login.jsx
    SignUp.jsx
    AccountSettings.jsx / .css
    Auth.css            # shared styles for Login + SignUp
  App.jsx               # route definitions
  main.jsx              # app entry, wraps App in BrowserRouter
  index.css              # global resets + design tokens
```

## Running locally

```bash
npm install
npm run dev
```

The app runs on the printed local URL (defaults to `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview   # serve the production build locally to verify
```

## Design notes

- The mobile app interface (375px wide) is centered on the page on larger
  screens, and expands to full width/height on small screens (≤480px) so
  it behaves like a real mobile app rather than a shrunk desktop site.
- Colors, type sizes, and spacing were matched directly from the supplied
  design screenshots (primary purple `#6C25FF`, light purple button
  `#C6AEFB`, disabled grey `#C8C8C8`, label purple `#7C46F0`).
- The account avatar is a generated initials badge (no external image
  dependency), with an inline SVG camera badge for "edit photo."

## Deployment

This is a static Vite build, so it deploys cleanly to Netlify, Vercel, or
any static host:

**Netlify**
```bash
npm run build
# drag-and-drop the dist/ folder onto Netlify, or connect the repo and set:
# Build command: npm run build
# Publish directory: dist
```

**Vercel**
```bash
npm run build
# Framework preset: Vite
# Build command: npm run build
# Output directory: dist
```
