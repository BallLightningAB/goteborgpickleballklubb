# Kallelse – Extrastämma 2026-10-24 (källtext)

**Status: implementerad – v2 live i v0.1.5** (uppdatering av issue #3-arbetet i
`MeetingSection.astro`).

**Historik:** v1 publicerades i WhatsApp Announcements 2026-10-02 och på sajten
i v0.1.3. v2 (denna fil) delades i WhatsApp Community Announcements 2026-10-19
och ersätter v1 – **ny möteslokal**, utökad dagordning (14 punkter) och tre
dokumentlänkar tillagda. Benämningen är *extrastämma* (ej "extra årsmöte") i
sidans rubriker/konfiguration; kallelsens brödtext återges ordagrant.

---

## PÅMINNELSE om extra årsmöte! OBS ny lokal.

**Extra årsmöte för Göteborg Pickleball Klubb**
**261024, kl. 16.00, i RF-SISU Västra Götalands lokaler Mejerigatan 1, vån 3,
Göteborg.**

260906 hölls ett bildandemöte för Göteborg Pickleball Klubb. Interimstyrelsen
kallar nu till ett första årsmöte för att:

- fastställa de beslut som togs preliminärt på bildandemötet,
- ta ställning till några justeringar i dessa,
- välja en ordinarie styrelse fram till det ordinarie årsmötet i mars 2027
- fatta beslut i övriga frågor på dagordningen enligt nedan

### Dagordning

1. Mötets öppnande
2. Fastställande av röstlängd (se fotnot)
3. Fråga om mötet har utlysts på rätt sätt
4. Fastställande av föredragningslista
5. Val av mötesordförande
6. Val av mötessekreterare
7. Val av två protokolljusterare och tillika rösträknare. Justerar protokollet
   tillsammans med mötesordföranden
8. Fastställande av stadgar
9. Verksamhetsplan och budget för perioden fram till årsmötet i mars 2027
10. Fråga om ansvarsfrihet för interimsstyrelsen
11. Val av ordinarie funktionärer fram till det ordinarie årsmötet i mars 2027:
    - a. Föreningens ordförande.
    - b. Föreningens kassör
    - c. Tre övriga styrelseledamöter
    - d. En–två suppleanter
    - e. Revisor
    - f. Valberedning inför nästa årsmöte, två–fyra personer
12. Fastställande av medlemsavgift för tiden fram till det ordinarie årsmötet i
    mars 2027
13. Övriga ärenden från styrelsen och närvarande på mötet (se fotnot)
14. Mötets avslutande

### Fotnot

Man blir officiell medlem när man har betalat medlemsavgift, men medlemsavgiften
bestäms först på detta extra årsmöte. Därför gäller följande:

- Röstberättigade är de som närvarar vid fastställandet av röstlängden samt
  under 2026 fyller lägst 12 år.
- Berättigad att lägga fram fråga under Övriga ärenden är de som närvarar på
  mötet samt under 2026 fyller lägst 12 år.
- Inga motioner kan inlämnas inför det extra årsmötet, men det finns utrymme för
  de närvarande att framföra frågor under Övriga ärenden. Beslut i dessa kan
  fattas på detta möte eller hänskjutas till beslut vid senare tillfälle.

### Dokument inför mötet

Förslag till stadgar, verksamhetsberättelse och budget – publiceras nedan:

- Stadgar: https://1drv.ms/w/c/e6a2175621996f3b/IQBAGBvaBO8PTJGSQRITaeZFAeasZjMqtvXbiMaQbHhGb3U?e=sazPzW
- Verksamhetsplan: https://1drv.ms/w/c/e6a2175621996f3b/IQAZsuHqwclqS5tY8QVqSkWyAUTqYPFPbasifxvKeHEwT94?e=FTUdbV
- Budget: https://1drv.ms/w/c/e6a2175621996f3b/IQAdG-QBVZAvRYbk3KNHWuBKAVYiUzFOlm_Ohh6XQaagrR0?e=wAxncq

Interimstyrelsen för Göteborg Pickleball Klubb hälsar alla pickleballvänner
välkomna att dra sitt strå till stacken genom att närvara, lägga sina förslag
och ge sin röst!
Vad gäller strån och förslag eftersöks särskilt **kassör** och **revisor**.

---

## Implementationsanteckningar (ej del av kallelsen)

- Sekcionen `#arsmote` visar faktakort (inkl. "Ny möteslokal"-markering) +
  inledning/syften synligt; dagordning, fotnot, dokumentlänkar och hälsning
  ligger i expanderbart `<details>`-element (noll JS). Efterlysningen
  kassör/revisor är en synlig callout under blocket.
- Mötesfakta, dokumentlänkar och annonseringslist ligger i
  `src/config/site.ts` under `site.extraMeeting` (`place`, `address`,
  `placeNote`, `documents[]`, `banner`).
- Benämningen "Extrastämma" används i rubrik, banner och nav; kallelsens
  brödtext behåller dokumentets egen ordalydelse ("extra årsmöte").
- OneDrive-länkarna verifierade 2026-10-19 (HTTP 200 → onedrive.live.com, anonym
  åtkomst via webbläsar-UA). Punktkontroll i inkognito rekommenderas vid
  publicering.
- Annonseringslisten under headern (MeetingBanner.astro) släcks genom att
  `site.extraMeeting.banner` sätts till `null`.
