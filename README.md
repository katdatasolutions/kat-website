# KAT SOFTWARE SOLUTIONS Website

Vite + React + Tailwind. Multi‑page with React Router, Netlify-ready contact form, WhatsApp CTA, and your logo.

## Local Dev
```bash
npm i
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy to Netlify
1. Create a new GitHub repo (e.g. `kat-website`) and push this project.
2. In Netlify, **New site from Git** → choose the repo.
3. Build command: `npm run build` ; Publish directory: `dist`.
4. In Site Settings → Domains, add your custom domain `kat.co.za` and `www.kat.co.za`.
5. Use Netlify DNS for easy SSL and apex redirect.

## Contact form
The Contact page uses a Netlify-compatible static form. Submissions appear under Netlify → Forms.

## WhatsApp CTA
The primary CTA opens: `https://wa.me/27627500582?text=Hello%20KAT%20SOFTWARE%20SOLUTIONS`.
