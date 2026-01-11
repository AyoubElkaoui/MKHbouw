# mkhbouw - professioneel klussenbedrijf Nederland

Modern, SEO-geoptimaliseerde website voor mkhbouw, gebouwd met Next.js 16, React 19 en Tailwind CSS 4.

## 🚀 Features

- ✅ volledig responsive design
- ✅ SEO-geoptimaliseerd met metadata, structured data en sitemap
- ✅ PWA-ready met manifest.json
- ✅ image optimalisatie met Next.js Image
- ✅ framer Motion animaties
- ✅ TypeScript voor type safety
- ✅ Tailwind CSS 4 voor styling
- ✅ robots.txt en sitemap.xml voor zoekmachines
- ✅ security headers geconfigureerd

## 📋 Vereisten

- Node.js 18.x of hoger
- npm, yarn, pnpm of bun

## 🛠️ Installatie

1. Clone de repository:
```bash
git clone <repository-url>
cd mkh-bouw
```

2. Installeer dependencies:
```bash
npm install
```

3. Kopieer `.env.example` naar `.env.local` en vul de variabelen in:
```bash
cp .env.example .env.local
```

4. Start de development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

## 📁 Project Structuur

```
mkh-bouw/
├── app/                    # Next.js app directory
│   ├── contact/           # contact pagina
│   ├── diensten/          # diensten overzicht en detail pagina's
│   ├── over-ons/          # over ons pagina
│   ├── layout.tsx         # root layout met metadata
│   ├── page.tsx           # homepage
│   └── sitemap.ts         # dynamische sitemap generatie
├── components/            # herbruikbare React componenten
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── ContactForm.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── Services.tsx
│   ├── StructuredData.tsx
│   ├── Testimonials.tsx
│   └── WhyChooseUs.tsx
├── public/                # statische bestanden
│   ├── logo.png
│   ├── manifest.json      # PWA manifest
│   └── robots.txt         # robots.txt voor SEO
├── .env.example           # voorbeeld environment variabelen
├── next.config.ts         # Next.js configuratie
├── tailwind.config.ts     # Tailwind CSS configuratie
└── package.json
```

## 🔧 Environment Variabelen

Zie `.env.example` voor alle beschikbare environment variabelen:

- `NEXT_PUBLIC_SITE_URL` - website URL (productie)
- `NEXT_PUBLIC_PHONE` - telefoonnummer
- `NEXT_PUBLIC_EMAIL` - email adres
- Analytics keys (Google Analytics, GTM)
- Email service configuratie
- reCAPTCHA keys

## 🚀 Deployment

### Vercel (aanbevolen)

1. Push code naar GitHub/GitLab/Bitbucket
2. Ga naar [vercel.com](https://vercel.com)
3. Importeer je repository
4. Configureer environment variabelen
5. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/mkh-bouw)

### Andere Platforms

Voor deployment op andere platforms (Netlify, AWS, DigitalOcean, etc.):

1. Build de applicatie:
```bash
npm run build
```

2. Test de productie build lokaal:
```bash
npm start
```

3. Deploy de `.next` folder en `public` folder naar je hosting provider

## 📊 SEO Optimalisatie

De website is volledig geoptimaliseerd voor zoekmachines:

- ✅ **Metadata**: Alle pagina's hebben unieke titles, descriptions en keywords
- ✅ **Structured Data**: JSON-LD schema voor LocalBusiness
- ✅ **Sitemap**: Dynamisch gegenereerde XML sitemap op `/sitemap.xml`
- ✅ **Robots.txt**: Geconfigureerd op `/robots.txt`
- ✅ **Open Graph**: Social media preview images en metadata
- ✅ **Canonical URLs**: Duplicate content preventie
- ✅ **Mobile Responsive**: 100% mobile-friendly
- ✅ **Page Speed**: Geoptimaliseerd voor snelle laadtijden
- ✅ **Semantic HTML**: Correcte HTML5 structuur

### SEO Checklist voor Go-Live

- [ ] Voeg Google Search Console verification code toe in `app/layout.tsx`
- [ ] Configureer Google Analytics (optioneel)
- [ ] Update sitemap URL in `robots.txt` met productie domein
- [ ] Test structured data met [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Test mobile-friendliness met [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [ ] Submit sitemap in Google Search Console
- [ ] Check alle links met broken link checker
- [ ] Optimaliseer images (compressie, alt tags)
- [ ] Test page speed met [PageSpeed Insights](https://pagespeed.web.dev/)

## 🔒 Security

De website bevat security best practices:

- Security headers (X-Frame-Options, X-Content-Type-Options, etc.)
- No `X-Powered-By` header
- HTTPS-only in productie (configureer via hosting provider)
- reCAPTCHA support voor contact formulier (optioneel)

## 📈 Performance

- Image optimalisatie met Next.js Image component
- Automatische code splitting
- React Server Components voor snellere laadtijden
- Tailwind CSS purging voor kleinere CSS bundles
- Framer Motion lazy loading

## 🎨 Styling

De website gebruikt Tailwind CSS 4 met custom kleuren:

- Primary: `#2563eb` (blauw)
- Accent: `#f59e0b` (oranje/geel)

Pas aan in `tailwind.config.ts`.

## 📞 Contact Informatie

Update contact informatie in:
- `.env.local` (environment variabelen)
- `components/StructuredData.tsx` (structured data)
- `app/layout.tsx` (metadata)

## 🛠️ Scripts

```bash
npm run dev      # Start development server
npm run build    # Build voor productie
npm start        # Start productie server
npm run lint     # Run ESLint
```

## 🤝 Ondersteuning

Voor vragen of problemen, neem contact op via:
- Email: info@mkhbouw.nl
- Telefoon: +31 6 84794108

## 📄 Licentie

© 2024 mkhbouw. alle rechten voorbehouden.

---

**Gebouwd met ❤️ door mkhbouw team**