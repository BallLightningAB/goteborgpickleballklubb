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
| Mötesdatum | `site.extraMeeting` |
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

- [ ] **Logotyp**: `public/media/gpk-logo.jpg` är en JPG-kopia av
      originalartworket. Ersätt med masterfilen (helst PNG/SVG med transparent
      bakgrund) och uppdatera `site.logo.src` + generera om favicons
      (se `specs/current-changes/` eller fråga agenten).
- [ ] **Styrelsebeslut** om rättslig grund, gallringstid och fastställandedatum
      för integritetsinformationen – se
      `specs/current-changes/integritetsinformation-forslag.md` och uppdatera
      `src/pages/integritet.astro`.
- [ ] **Google Form-kosmetik**: "Alternativ 1"-prefixet i svarsalternativ,
      mellanslag i frågetitlar, valfri temafärg – se `google-form-setup.md`.
- [ ] **Sheets-koppling**: bekräfta att svaren länkas till ett privat
      kalkylark i klubbens Google-konto.
- [ ] **Manuell test i inkognito**: formuläret ska gå att besvara utan
      Google-inloggning; WhatsApp-knappen ska öppna "GPK medlemschat".
- [ ] **Visuell kontroll** mobil/desktop i `pnpm dev`; justera
      `embedHeight` vid behov.
- [ ] **Organisationsnummer**: lägg till i sidfoten när det finns.
- [x] ~~**Vercel + domän + DNS**~~ – klart 2026-09-20 (apex permanent, www redirectar).

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
