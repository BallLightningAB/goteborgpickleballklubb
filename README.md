# Göteborg Pickleball Klubb – webbplats

Officiell webbplats för Göteborg Pickleball Klubb (GPK), en nybildad ideell
förening som utvecklar pickleball i Göteborg och regionen.

**Domän:** https://goteborgpickleballklubb.com (registrerad hos Namecheap)
**Kontakt:** goteborgpickleballklubb@gmail.com
**Hosting:** Vercel (statisk sajt – ingen adapter, ingen server)

## Tech stack

Astro 7 (helt statisk, noll klient-JS) · Tailwind CSS v4 · Archivo Variable
(självhostad via Fontsource) · TypeScript strict · Biome + Ultracite · pnpm ·
Node 24

## Lokal start och build

```bash
pnpm install        # installera beroenden
pnpm dev            # devserver på http://localhost:4321
pnpm build          # produktionsbygge → dist/
pnpm preview        # förhandsgranska dist/ lokalt
pnpm check          # astro check (typkontroll inkl. .astro-filer)
pnpm lint           # Biome lint (src/**/*.ts, *.json, astro.config.mjs)
pnpm format         # Biome format --write
```

## Var innehåll och länkar ändras

Allt lättändrat innehåll ligger i **`src/config/site.ts`**:

| Värde | Nyckel |
|-------|--------|
| WhatsApp-inbjudan | `site.whatsappInviteUrl` |
| Google Form embed + länk | `site.googleForm.embedUrl` / `site.googleForm.formUrl` |
| Iframens höjd | `site.googleForm.embedHeight` |
| Mötesfakta + annonseringslist (null = döljs) | `site.extraMeeting` |
| Fastställandedatum integritet (null = döljs) | `site.privacy.establishedDate` |
| Sidtexter | `site.copy.*` |
| Logotyp | `site.logo.src` (auto-upptäcker bilder i `public/media/`) |

Sätts ett länkvärde till `null` renderas en neutral platshållartext i stället
för en trasig länk eller iframe.

Sidorna: `src/pages/index.astro` (one-pager) och
`src/pages/integritet.astro` (integritetsinformation).

## Google Forms

Intresseanmälan är ett Google Form som ägs av `goteborgpickleballklubb@gmail.com`
och bäddas in via iframe. Svaren ska länkas till ett **privat** Google
Sheet i klubbens konto.

Full dokumentation – befintliga frågor, obligatoriska inställningar, kända
kosmetiska rättelser och hur länkarna byts – finns i
[`specs/current-changes/google-form-setup.md`](specs/current-changes/google-form-setup.md).

## Driftsättning på Vercel + domän (klart – sajten är live)

Sajten är deployad på Vercel och svarar på
`https://goteborgpickleballklubb.com`. `www` redirectas permanent till apex
(konfigurerat i Vercel). Vid ev. återställning av domänen: `Settings →
Domains` → lägg till båda värdnamnen → hos Namecheap (`Advanced DNS`) A-post
`@` → Vercels angivna IP och CNAME `www` → `cname.vercel-dns.com`. Använd
alltid värdena i Vercels UI – de styr.

## Återstår (efterarbete)

- [ ] **Organisationsnummer**: lägg till i sidfoten när det finns (issue #2, I2D6).
- [ ] **Möteshandlingar**: kallelsen lovar stadgar, verksamhetsberättelse och
      budget på sidan senast en vecka före mötet (2026-10-17).
- [ ] **Efter årsmötet (2026-10-24)**: sätt `site.extraMeeting.banner` till
      `null` så släcks annonseringslisten; årsmötesektionen kan då byggas om
      till ordinarie årsmötesinfo.
- [ ] **Logotyp (valfri förbättring)**: `public/media/gpk-logo.png` är en
      genomskinlig PNG-mästare genererad från grundartworket. Ersätt med en
      vektormaster (SVG) om en sådan produceras – uppdatera `site.logo.src`.
- [ ] **Visuell finjustering**: kontrollera `embedHeight` i webbläsaren om
      formuläret får dubbel scroll eller tom yta.
- [x] ~~**Vercel + domän + DNS**~~ – klart 2026-09-20 (apex permanent, www redirectar).
- [x] ~~**Logotyp-mästare**~~ – klart 2026-10-03 (gpk-logo.png, transparent utanför rundeln).
- [x] ~~**Styrelsebeslut integritet**~~ – klart 2026-10-03 (samtycke, gallring, fastställd 2026-09-21).
- [x] ~~**Google Form-kosmetik**~~ – klart 2026-10-03 (prefix + mellanslag åtgärdade).
- [x] ~~**Sheets-koppling**~~ – klart 2026-10-03 (privat kalkylark bekräftat).
- [x] ~~**Inkognitotest**~~ – klart 2026-10-03 (formulär + WhatsApp fungerar).

## Säkerhet

- **Lokala pre-commit hooks**: `detect-private-key` och `gitleaks protect`
  körs vid varje `git commit` via `.pre-commit-config.yaml`. Installera
  `pre-commit` och `gitleaks` globalt och kör `pre-commit install` i repot.
- **CI-hemlighetsskanning**: `.github/workflows/secret-scan.yml` kör Gitleaks
  på push/PR mot `main`.
- **Delad konfiguration**: `.gitleaks.toml` centraliserar allowlistor; försvaga
  inte utan dokumenterad anledning.

## Project Documentation

- **[GPK PDD](specs/memory-bank/goteborgpickleballklubb-pdd.yaml)** – Product Definition Document
- **[Memory Bank Usage Guide](specs/memory-bank/memory-bank-usage.yaml)** – hur memory banken används
- **[CHANGELOG](specs/memory-bank/CHANGELOG.yaml)** – versionshistorik
- **[Active Context](specs/memory-bank/active-context.yaml)** – roadmap och pågående arbete
- **[Implementationsplan v1](specs/current-changes/gpk-v1-hemsida-plan.md)** – planen som sidan byggdes efter
