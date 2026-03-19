# Moodee — Women's Hormonal Health

Built with Next.js 14, deployed on Vercel at [moodee.co](https://www.moodee.co).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment (Free on Vercel)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Import your GitHub repo
3. Vercel auto-detects Next.js → click Deploy
4. Add your custom domain `moodee.co` in Project Settings → Domains

### Custom Domain DNS Records
Add these to your domain registrar:
- **A record**: `@` → `76.76.21.21`
- **CNAME**: `www` → `cname.vercel-dns.com`

## Pages

- `/` — Homepage (hero, stats, how it works, conditions, CTA)
- `/services` — What We Treat (PCOS, Endo, Menopause, etc.)
- `/about` — Our Story (mission, values, team)
- `/book` — Book Free Consultation (form)

## Brand Colours

```css
--coral:  #f16368
--cream:  #fdf1e2
--blush:  #fcdce2
--pink:   #f88bb4
```
