# Google Form – Intresseanmälan GPK

**Status 2026-09-20:** Formuläret finns och ägs av klubbens Google-konto
(`goteborgpickleballklubb@gmail.com`). Verifierat att det går att öppna utan
Google-inloggning.

- Vanlig länk: `https://docs.google.com/forms/d/e/1FAIpQLSdhZcdCI0LNT7ucsAD1_X8inpPByGRfUulJfSe7gUWXgnW9tA/viewform`
- Embed-länk: samma URL + `?embedded=true`
- Båda ligger i `src/config/site.ts` under `site.googleForm` – ändra där om formuläret ersätts.

## Befintliga frågor (verifierade)

| # | Fråga | Typ | Obligatorisk |
|---|-------|-----|--------------|
| – | E-post | Inställningen "Samla in e-postadresser: svarsinmatning" | Ja |
| 1 | För- och efternamn | Kort svar | Ja |
| 2 | Vill du hjälpa till i föreningen? | Flerval: "Ja, kontakta mig gärna." / "Kanske, jag vill veta mer först." / "Inte just nu." | Nej |
| 3 | Information om personuppgifter | Informationsblock (samtyckestext) | – |
| 4 | Samtycke | Kryssruta | Ja |

Bekräftelsetext: "Ditt svar är registrerat". Formulärets beskrivning nämner
det extra årsmötet 24 oktober 2026.

## Inställningar som ska förbli så här

- **Svar → "Samla in e-postadresser" = Svarsinmatning** (inte "Verifierad" –
  det skulle kräva Google-inloggning).
- **"Begränsa till 1 svar" = av** (annars krävs inloggning).
- **"Begränsa till användare i organisationen" = av**.
- **Svar → "Länka till Sheets"**: skapa ett nytt privat kalkylark i klubbens
  Google-konto om det inte redan är gjort. Dela aldrig kalkylarket publikt.

## Kända kosmetiska rättelser att göra i Google Forms

Görs i klubbens Google-konto (agenter kan inte redigera formuläret):

1. **Första svarsalternativet** i fråga 2 lyder "Alternativ 1Ja, kontakta mig
   gärna." → ta bort texten "Alternativ 1".
2. **Frågetitlar** har extra mellanslag: "För- och efternamn " och
   "  Vill du hjälpa till i föreningen?  " → trimma.
3. **Temafärg** är orange (#FF9800) och krockar med sidans marinblå/guld.
   Valfritt: sätt temafärg till marinblå (#062953) eller guld (#cc982f) så
   iframen smälter in bättre.

## Byta formulär eller hämta länkar på nytt

1. Öppna formuläret i Google Forms → **Skicka** → fliken **`<>`** ger
   embed-URL (kopiera `src`-attributet), länkfliken ger den vanliga länken.
2. Uppdatera `site.googleForm.embedUrl` respektive `site.googleForm.formUrl`
   i `src/config/site.ts`.
3. Justera `site.googleForm.embedHeight` (px) om formuläret får dubbel
   scroll eller tom yta – kontrollera i webbläsaren med `pnpm dev`.
