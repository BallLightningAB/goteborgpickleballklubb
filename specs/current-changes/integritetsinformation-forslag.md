# Integritetsinformation – utkast och öppna beslut

Detta dokument är det **redaktionella utkastet** för den publika sidan
`/integritet` (`src/pages/integritet.astro`). Den publika sidan ska bara
innehålla verifierbara fakta. Punkter som kräver formellt styrelsebeslut är
markerade `[STYRELSEBESLUT]` här – de ska **inte** markeras på den publika
sidan, där skrivs i stället neutralt tills beslut finns.

## Publik text (speglar src/pages/integritet.astro)

**Personuppgiftsansvarig:** Göteborg Pickleball Klubb (GPK).
Kontakt: goteborgpickleballklubb@gmail.com

**Vilka uppgifter:** namn, e-postadress, frivilligt svar om att hjälpa till i
föreningen. Inga personnummer, adresser eller andra onödiga uppgifter.

**Syfte:** kontakta den som anmält intresse om medlemskap och klubbens
uppstart.

**Rättslig grund:** samtycke (lämnas via kryssrutan i formuläret;
återkallas via e-post).

**Lagring:** Google Forms + Google-kalkylark i klubbens Google-konto;
åtkomst begränsad till styrelsen; ingen delning med tredje part.

**Gallring:** neutralt formulerat tills beslut finns – "Vi sparar uppgifterna
så länge de behövs för syftet och raderar dem när de inte längre behövs eller
när du begär det."

**Rättigheter:** tillgång, rättelse, radering, invändning, återkallelse av
samtycke; klagomål till IMY (Integritetsskyddsmyndigheten).

**Cookies:** webbplatsen använder inga cookies/spårning; den inbäddade
Google Forms-iframen kan sätta Googles egna cookies.

## [STYRELSEBESLUT] – att bekräfta formellt

| # | Beslut | Förslag | Status |
|---|--------|---------|--------|
| 1 | Rättslig grund | Samtycke (används redan i formulärets samtyckestext; alternativ: berättigat intresse) | ⬜ Öppet |
| 2 | Gallringstid | T.ex. "raderas när personen blivit medlem, tackat nej, eller senast 24 månader efter anmälan" | ⬜ Öppet |
| 3 | Fastställandedatum | Datum då styrelsen fastställer informationen (läggs sist på sidan: "Fastställd YYYY-MM-DD") | ⬜ Öppet |
| 4 | Registrering i Google-kalkylark | Bekräfta att "Länka till Sheets" är gjord och att arket är privat | ⬜ Öppet |

## Arbetsflöde vid beslut

1. Styrelsen beslutar → uppdatera tabellen ovan.
2. Uppdatera `src/pages/integritet.astro` med de fastställda formuleringarna.
3. Boka av punkt 3 genom att lägga till "Fastställd YYYY-MM-DD" sist på sidan.
4. Ny CHANGELOG-entry + bumpa `meta.release` i `active-context.yaml`.
