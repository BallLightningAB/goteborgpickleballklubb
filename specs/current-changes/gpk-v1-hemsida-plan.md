---
agent: devin-local
session: verbose-almond
created: 2026-09-20T18:45:29Z
---
# GPK v1 – statisk ensideswebbplats med Astro + memory-bank-harness

Bygg en snabb, svensk, mobilanpassad one-pager för Göteborg Pickleball Klubb med Astro 7 + Tailwind v4 (helt statisk, noll klient-JS), återanvänd Ball Lightning-harnessen (memory-bank, Biome/Ultracite, gitleaks, dependabot, .devin/rules) anpassad till Astro, och skapa repot BallLightningAB/goteborgpickleballklubb – utan publicering eller DNS-ändringar.

## Nuläge (granskat 2026-09-20)

- `C:\Users\nicol\CascadeProjects\BallLightning\goteborgpickleballklubb` är **tom** – inget repo, inga filer. Repot ska ligga direkt i denna mapp, ingen undermapp.
- Harness-referenser:
  - `..\shipping-api-dojo` (nyast): `specs/memory-bank/{active-context.yaml, CHANGELOG.yaml, memory-bank-usage.yaml, changelog-archive/README.md}`, `specs/current-changes/`, `specs/archived/`, `scripts/rotate-changelog.sh`, `.devin/rules/{tanstack-start.md, ultracite.md}`, `AGENTS.md`, `.github/workflows/secret-scan.yml`, `.github/dependabot.yml`, `.gitleaks.toml`, `.pre-commit-config.yaml`, `.nvmrc` (24.12.0), `.vscode/settings.json`, `biome.json`, `.biomeignore`.
  - `..\thebuildercoil`: `<repo>-pdd.yaml`-struktur (`pdd.meta/product/scope/architecture/env`), README-upplägg med "Project Documentation"-sektion, Tailwind v4 via `@tailwindcss/vite`.
- Verktyg på maskinen: Node 24.12.0, pnpm 10.23, gh 2.74 (inloggad som **BallLightningAB**), gitleaks 8.28, pre-commit 4.5.1.
- Aktuella versioner (npm, 2026-09-20): astro 7.3.3 (publ. 16 sep – <7 dagar, **pinna 7.3.2** från 8 sep), @astrojs/check 0.9.10, tailwindcss/@tailwindcss/vite 4.3.3, @biomejs/biome 2.5.14, ultracite 7.12.0, typescript 7.0.2, @fontsource-variable/archivo 5.3.0. Kontrollera publiceringsdatum (`npm view <pkg> time`) och välj version ≥7 dagar gammal.
- Astro-docs (Context7 `/withastro/docs`) bekräftar: statisk Astro-sajt behöver **ingen adapter** på Vercel; Tailwind v4 läggs till med `pnpm astro add tailwind` (Vite-plugin + `src/styles/global.css`).

## Beslut (bekräftade)

| Fråga | Beslut |
|---|---|
| Stack | **Astro 7 + Tailwind v4**, helt statisk (`output: 'static'`), ingen React/klient-JS i v1 |
| GitHub | Skapa **publikt** repo `BallLightningAB/goteborgpickleballklubb` med `gh`, pusha `main` |
| Integritetsinfo | Egen sida **`/integritet`** med samma layout; sidfoten länkar dit |
| Framtid | v1 hålls minimal; en ny sajt med annan stack kan byggas när verkligt scope finns |

Motivering stack: sidan är innehåll + länkar + en iframe. Astro ger färdig HTML på CDN, `<html lang="sv">`/meta inbyggt, minimalt beroendeträd (≈6 paket) och inget serverlager att underhålla. Tailwind v4 kopplas via samma `@tailwindcss/vite` som övriga BallLightning-projekt.

## Verifierat underlag (länkar)

| Underlag | Värde | Verifiering |
|---|---|---|
| Google Form – **embed-URL** | `https://docs.google.com/forms/d/e/1FAIpQLSdhZcdCI0LNT7ucsAD1_X8inpPByGRfUulJfSe7gUWXgnW9tA/viewform?embedded=true` | HTTP 200, ingen login-omdirigering, titel "Intresseanmälan – Göteborg Pickleball Klubb" |
| Google Form – **vanlig länk** | `https://docs.google.com/forms/d/e/1FAIpQLSdhZcdCI0LNT7ucsAD1_X8inpPByGRfUulJfSe7gUWXgnW9tA/viewform` (utan `?usp=header`) | samma |
| WhatsApp – publik inbjudan | `https://chat.whatsapp.com/Hsp1qM21pQ3LLRI3OKwgIK` (spårningsparametrar `?s=cl&p=a&mlu=4&ilr=4` borttagna) | HTTP 200, og:title "GPK medlemschat" |

Formulärets innehåll (läst från viewform): *För- och efternamn* (obligatorisk), *E-post* (obligatorisk via inställningen "Samla in e-postadresser: svarsinmatning" – kräver ej inloggning), *Vill du hjälpa till i föreningen?* (flerval, frivillig: "Ja, kontakta mig gärna." / "Kanske, jag vill veta mer först." / "Inte just nu."), informationsblock om personuppgifter, *Samtycke* (kryssruta, obligatorisk). Beskrivningen nämner extra årsmötet 24 oktober 2026. Bekräftelsetext: "Ditt svar är registrerat".

Noterat att rätta i Google Forms (endast klubbens konto kan göra det – tas upp i README "Återstår"):
- Första svarsalternativet lyder "**Alternativ 1**Ja, kontakta mig gärna." → ta bort "Alternativ 1".
- Frågetitlar har extra mellanslag ("För- och efternamn ", "  Vill du hjälpa till i föreningen?  ").
- Formulärets temafärg är orange (#FF9800); valfritt byta till marinblå/guld så iframen matchar sidan.

## Målstruktur

```
goteborgpickleballklubb/
├─ .devin/rules/astro.md            # ersätter tanstack-start.md (Astro-regler, samma format/rubriker)
├─ .devin/rules/ultracite.md        # kopieras oförändrad
├─ .github/workflows/secret-scan.yml, .github/dependabot.yml   # kopieras (assignee BallLightningAB, label "type: dependency")
├─ .vscode/settings.json            # kopieras; lägg till astro-build.astro-vscode i extensions.json
├─ .biomeignore, biome.json         # includes: src/**/*.ts, *.json, *.css; .astro lämnas till astro check
├─ .gitignore                       # Astro-standard (.astro/, dist/, node_modules/, .env*, !.env.example, .vercel)
├─ .gitleaks.toml, .pre-commit-config.yaml, .nvmrc
├─ AGENTS.md                        # pekar på .devin/rules/astro.md + ultracite.md; planer i C:\Users\nicol\.windsurf\plans
├─ README.md                        # se "Leverans"
├─ astro.config.mjs                 # site: 'https://goteborgpickleballklubb.com', vite.plugins: [tailwindcss()]
├─ package.json, pnpm-lock.yaml, tsconfig.json (extends astro/tsconfigs/strict)
├─ public/
│  ├─ media/                        # DU lägger logon här (t.ex. gpk-logo.png) när repot är uppe
│  ├─ favicon.svg / favicon.ico / apple-touch-icon.png   # genereras från logon när den finns
│  ├─ robots.txt, sitemap.xml       # statiska, två URL:er (/ och /integritet)
├─ scripts/rotate-changelog.sh      # kopieras oförändrad
├─ specs/
│  ├─ memory-bank/
│  │  ├─ active-context.yaml        # release 0.1.0, roadmap.current: issue #1 med I1D1..I1Dn
│  │  ├─ CHANGELOG.yaml             # första entry v0.1.0
│  │  ├─ memory-bank-usage.yaml     # från shipping-api-dojo, GPK-anpassad (repo, projektnamn, PDD-filnamn)
│  │  ├─ goteborgpickleballklubb-pdd.yaml   # v0.1.0
│  │  └─ changelog-archive/README.md
│  ├─ current-changes/
│  │  ├─ gpk-v1-hemsida-plan.md     # kopia av denna plan
│  │  ├─ google-form-setup.md       # dokumentation av befintligt formulär + rättelser + Sheets-koppling
│  │  └─ integritetsinformation-forslag.md  # utkast + [STYRELSEBESLUT]-markeringar
│  └─ archived/.gitkeep
└─ src/
   ├─ config/site.ts                # ALLA lättändrade texter/länkar/datum (typad, inga hemligheter)
   ├─ layouts/BaseLayout.astro      # <html lang="sv">, title/description/canonical/OG, font-import, skip-link
   ├─ components/{Header,Hero,InterestForm,WhatsAppSection,MeetingSection,Footer,ButtonLink}.astro
   ├─ pages/index.astro             # one-pager: sektion 1–4 + sidfot
   ├─ pages/integritet.astro        # integritetsinformation
   └─ styles/global.css             # @import "tailwindcss"; @theme med GPK-färger + typsnitt
```

## Konfigurationsfil (`src/config/site.ts`)

```ts
export const site = {
  name: "Göteborg Pickleball Klubb",
  shortName: "GPK",
  url: "https://goteborgpickleballklubb.com",
  email: "goteborgpickleballklubb@gmail.com",
  whatsappInviteUrl: "https://chat.whatsapp.com/Hsp1qM21pQ3LLRI3OKwgIK" as string | null,
  googleForm: {
    embedUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdhZcdCI0LNT7ucsAD1_X8inpPByGRfUulJfSe7gUWXgnW9tA/viewform?embedded=true" as string | null,
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdhZcdCI0LNT7ucsAD1_X8inpPByGRfUulJfSe7gUWXgnW9tA/viewform" as string | null,
    embedHeight: 1200, // px – justeras efter visuell kontroll
  },
  extraMeeting: { dateIso: "2026-10-24", label: "24 oktober 2026" },
  logo: { src: "/media/gpk-logo.png", alt: "Göteborg Pickleball Klubb – logotyp" },
  seo: { title: "Göteborg Pickleball Klubb", description: "Vi bygger en öppen och välkomnande pickleballklubb i Göteborg. Anmäl intresse för medlemskap och följ klubbens utveckling." },
  copy: { intro: "...", interestIntro: "...", whatsappIntro: "...", meetingNote: "Mer information om tid, plats och kallelse kommer." },
} as const;
```

Platshållarlogik behålls för robusthet (om ett värde sätts till `null` i framtiden): formulär-iframe renderas inte utan ersätts av "Intresseanmälan öppnar snart – kontakta oss gärna på [e-post] så länge."; WhatsApp-knapp renderas som text "WhatsApp-länk publiceras snart" (aldrig `href="#"`). Med nuvarande värden renderas allt på riktigt.

## Design (från logon, inga påhittade färger)

- Palett tas **från logofilen** när den ligger i `public/media` (pixelsampling via PowerShell `System.Drawing`, ingen extra dependency): marinblå (uppskattat `#12305A`-området), guld (uppskattat `#C9962B`-området), vit. Slutliga hex sätts som `@theme`-tokens (`--color-gpk-navy`, `--color-gpk-navy-deep`, `--color-gpk-gold`, `--color-gpk-cream`) och dokumenteras i PDD. Tills logon finns används de uppskattade värdena med tydlig `TODO`-kommentar.
- Vit bakgrund, marinblå text/ytor, guld som accent (primärknapp, datummarkering, tunna linjer). Kontrast ≥ 4.5:1 för all text; guld används **inte** som text på vitt.
- Typsnitt: **Archivo Variable** självhostad via `@fontsource-variable/archivo` (geometrisk, kraftig kursiv för rubriker som matchar logotypens "GPK"; en dependency, inga Google Fonts-anrop = ingen tredjepartsspårning). Fallback: systemsans.
- Layout: en kolumn, `max-w-3xl` för text / `max-w-5xl` för hero, generös vertikal rytm (`py-16 md:py-24`), `h1` en gång, sedan `h2`. Inga karuseller, stockbilder eller animationer utöver `:hover`/`:focus-visible`.
- Tillgänglighet: skip-link, synlig fokusring, `title` på iframe, semantiska `<header>/<main>/<section aria-labelledby>/<footer>`, knappar är `<a>` med tydlig text, externa länkar `target="_blank" rel="noopener noreferrer"`, `prefers-reduced-motion` stänger av smooth scroll.

## Sidans innehåll (exakt enligt brief)

1. **Presentation** – logotyp, `h1` "Göteborg Pickleball Klubb", intro: "Vi bygger en öppen och välkomnande pickleballklubb i Göteborg. Här ska nya och erfarna spelare kunna mötas, utvecklas och spela tillsammans." Primärknapp "Anmäl intresse för medlemskap" (→ `#intresse`), sekundärknapp "Gå med i vår WhatsApp" (inbjudningslänken). Inga löften om träningstider/lokaler.
2. **Intresseanmälan** (`#intresse`) – `h2` "Intresserad av att bli medlem?", text: "Lämna dina kontaktuppgifter så håller vi dig uppdaterad om medlemskap och klubbens fortsatta utveckling. Intresseanmälan är inte bindande och innebär inte att du blir medlem. Medlemsavgiften är ännu inte fastställd." Iframe (`src=embedUrl`, `loading="lazy"`, `title="Intresseanmälan – Göteborg Pickleball Klubb"`, `height=embedHeight`, `width=100%`) + länk "Öppna formuläret i ett nytt fönster" (`formUrl`).
3. **WhatsApp** (`#whatsapp`) – `h2` "Följ klubbens utveckling", kort text om att information och uppdateringar delas i klubbens WhatsApp, knapp "Gå med i vår WhatsApp".
4. **Extra årsmöte** (`#arsmote`) – `h2` "Extra årsmöte den 24 oktober 2026", datum framhävt i `<time datetime="2026-10-24">`, "Mer information om tid, plats och kallelse kommer." Inget mer.
5. **Sidfot** – "Göteborg Pickleball Klubb", `mailto:goteborgpickleballklubb@gmail.com`, länk "Integritetsinformation" → `/integritet`. Inget org.nr.

SEO-grund: `lang="sv"`, `<title>`, `<meta name="description">`, canonical, OG/Twitter-taggar med logon, `robots.txt`, `sitemap.xml`. Ingen analys/spårning.

## Underlag som fortfarande saknas

| Underlag | Status | Var det kopplas in |
|---|---|---|
| Logotyp (fil) | Du lägger den i `public/media/` när repot är uppe | `site.logo.src`, favicon, slutliga färgtokens |
| Styrelsebeslut: rättslig grund (formuläret använder redan **samtycke**), gallringstid, fastställandedatum | Saknas – ska bekräftas formellt | `specs/current-changes/integritetsinformation-forslag.md` → `src/pages/integritet.astro` |
| Organisationsnummer | Saknas (ska inte visas ännu) | – |
| Rättelser i Google Forms (se ovan) | Görs av dig i klubbens Google-konto | – |

## Google Form – dokumentation (`specs/current-changes/google-form-setup.md` + README-sektion)

Formuläret finns och ägs av `goteborgpickleballklubb@gmail.com`. Dokumentera: befintliga frågor; inställningar som ska vara/förbli så här: Svar → "Samla in e-postadresser" = **Svarsinmatning** (ej "Verifierad", som kräver inloggning), "Begränsa till 1 svar" = **av**, "Begränsa till användare i organisationen" = **av**; Svar → **Länka till Sheets** (nytt privat kalkylark i klubbens konto, dela inte publikt); Skicka → `<>` ger embed-URL (redan uttagen), länk-fliken ger formulärlänk; hur man byter ID i `src/config/site.ts` om formuläret ersätts; rättelselistan ovan.

## Integritetsinformation – utkast (sida `/integritet`)

Publik text med endast verifierbara fakta: personuppgiftsansvarig Göteborg Pickleball Klubb; syfte: kontakt om medlemskap och klubbens uppstart; uppgifter: namn, e-post, frivilligt svar om att hjälpa till; rättslig grund: samtycke (i linje med formulärets samtyckestext – återkallas via e-post); lagring: Google Forms/Sheets i klubbens Google-konto, åtkomst begränsad till styrelsen; ingen delning med tredje part; dina rättigheter (tillgång, rättelse, radering, invändning, återkalla samtycke; klagomål till IMY); kontakt `goteborgpickleballklubb@gmail.com`; webbplatsen använder inga cookies eller spårning (Google Forms-iframen kan sätta Googles egna cookies – nämns).
`[STYRELSEBESLUT]`-markeringar i **utkastfilen** (inte på publika sidan): formell bekräftelse av rättslig grund, gallringstid (förslag: raderas när personen blir medlem/tackar nej, eller senast X månader efter uppstart), datum då informationen fastställdes. På sidan skrivs gallring neutralt ("Vi sparar uppgifterna så länge de behövs för syftet och raderar dem när de inte längre behövs eller när du begär det") tills beslut finns; README listar besluten under "Återstår före publicering".

## Genomförandesteg (för implementerande modell)

0. **Spara planen**: kopiera `C:\Users\nicol\.devin\plans\plan-002e499c17f31f07.md` → `C:\Users\nicol\.windsurf\plans\gpk-v1-hemsida-plan-<6 hex>.md` samt senare in i repot som `specs/current-changes/gpk-v1-hemsida-plan.md`.
1. **Scaffold** i nuvarande mapp: `pnpm create astro@latest . -- --template minimal --typescript strict --no-git --no-install`; sätt `"astro": "7.3.2"` (eller senaste ≥7 dagar); `pnpm install`; `pnpm astro add tailwind` (bekräfta ändringar); `pnpm add @fontsource-variable/archivo`; `pnpm add -D @astrojs/check typescript @biomejs/biome ultracite`. Scripts i package.json: `dev`, `build`, `preview`, `check` (`astro check`), `lint`/`format` (biome), `typecheck`. `git init -b main`.
2. **Harness**: kopiera/anpassa filerna i målstrukturen från `..\shipping-api-dojo` (memory-bank, scripts, .github, gitleaks, pre-commit, nvmrc, vscode) och `..\thebuildercoil` (PDD-struktur, README-sektion). Skriv `.devin/rules/astro.md` med samma sju rubriker som `tanstack-start.md` (stack & scope: Astro 7, Tailwind v4, TypeScript strict, inga UI-ramverk utan skäl; filstruktur `src/pages|layouts|components|config|styles`; innehåll/länkar endast via `src/config/site.ts`; Context7 för Astro-docs; kodstil). Anpassa `biome.json` (tabs, double quotes, includes `src/**/*.ts`, `*.json`, `*.css`, `astro.config.mjs`; exkludera `.astro`). `AGENTS.md` pekar på reglerna och planmappen.
3. **Config & layout**: `src/config/site.ts` (värden ovan), `BaseLayout.astro`, `global.css` med `@theme`-tokens (preliminära värden + TODO tills logon finns), font-import.
4. **Sektioner**: komponenter + `index.astro` enligt innehållslistan; platshållarlogik för `null`.
5. **`/integritet`**: sida med utkasttexten.
6. **SEO/statik**: `robots.txt` (Allow all, Sitemap-rad), `sitemap.xml` (två URL:er), OG-taggar, canonical.
7. **Docs**: README (lokal start/build, var innehåll och länkar ändras, hur Google Forms är kopplat/byts, Vercel + Namecheap-DNS-steg för senare, återstår före publicering), `google-form-setup.md`, `integritetsinformation-forslag.md`, plankopia; memory-bank ifylld (`active-context.yaml` med I1D1–I1Dn och progress_log, `CHANGELOG.yaml` v0.1.0, PDD v0.1.0 med stack, färgtokens, config-kontrakt).
8. **GitHub**: första commit (`feat(site): scaffold GPK v1 one-pager with Astro and memory-bank harness (I1D1..)`), `gh repo create BallLightningAB/goteborgpickleballklubb --public --source . --push --description "Göteborg Pickleball Klubb – officiell webbplats"`; skapa label-uppsättningen från memory-bank-usage (`gh label create`); skapa issue #1 "Bygg GPK v1 hemsida" med deliverable-listan; `pre-commit install`.
9. **När logon ligger i `public/media`**: sampla färger → slutliga `@theme`-tokens, generera favicon-set från logon, uppdatera PDD + CHANGELOG (v0.1.1), commit + push.

## Verifiering

- [ ] `pnpm build` går igenom (produktionsbygge) och `pnpm astro check` är rent
- [ ] `pnpm lint` / `pnpm format` (Biome/Ultracite) rent för `.ts/.json/.css`
- [ ] `pnpm preview` + `curl` av `/` och `/integritet`: `lang="sv"`, title, description, canonical, OG-taggar, inga `href="#"`/tomma länkar, iframe-`src` = embed-URL, WhatsApp-`href` = ren inbjudningslänk
- [ ] Kontrastberäkning för alla text/knapp-kombinationer (≥ 4.5:1; slutkontroll mot logo-hex)
- [ ] Tangentbordsgenomgång: skip-link → knappar → iframe → länkar → sidfot, synlig fokus överallt
- [ ] Mobil (360 px) och desktop (1280 px) – strukturkontroll i kod; **du** gör visuell kontroll i webbläsaren via `pnpm dev` (agenten kan inte se renderad grafik); justera `embedHeight` så formuläret inte får dubbel scroll
- [ ] Formuläret går att öppna och besvara i inkognitofönster utan Google-inloggning (verifierat via curl idag; upprepa manuellt); WhatsApp-knappen öppnar "GPK medlemschat"
- [ ] Valfritt: `npx lighthouse http://localhost:4321 --preset=desktop` för a11y/SEO-poäng
- [ ] `git status` rent, secret-scan-workflow grönt på GitHub

## Risker / att tänka på

- **Astro-versionens ålder**: 7.3.3 är 4 dagar gammal → pinna 7.3.2. Dependabot (kopierat) håller sedan minor/patch uppdaterade veckovis.
- **Biome och `.astro`**: Biome lintar inte `.astro`-mallar fullt ut; `astro check` täcker TS + mall. Ultracite-regeln kopieras men `.astro` undantas i `biome.json`.
- **Google Form-iframe**: höjden sätts manuellt (`embedHeight`) – Google exponerar ingen auto-resize. Iframen laddar Googles resurser/cookies; nämns i integritetsinformationen.
- **Formulärets temafärg** (orange) krockar visuellt med marinblå/guld – rekommenderas att bytas i Google Forms (görs av dig).
- **Fontsource + Tailwind v4**: fonten importeras i `global.css`; `font-display: swap` kan ge kort FOUT – acceptabelt för v1.
- **Inget publiceras**: ingen Vercel-projektskapning, ingen DNS-ändring. README beskriver stegen för senare (Vercel: importera repo → Astro autodetekteras → Settings → Domains → lägg till `goteborgpickleballklubb.com` + `www`; Namecheap Advanced DNS: A-post `@` → Vercels angivna IP, CNAME `www` → `cname.vercel-dns.com` – exakta värden tas från Vercels UI när det är dags).
- **Publikt repo**: inga hemligheter i projektet (Form-ID och WhatsApp-inbjudan är avsedda att vara publika – de ligger redan öppet i formuläret/inbjudan); gitleaks körs lokalt och i CI.
