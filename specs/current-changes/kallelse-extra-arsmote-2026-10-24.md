# Kallelse – Extra årsmöte 2026-10-24 (källtext)

Kallelsen publicerades av interimstyrelsen i WhatsApp Announcement-kanalen
2026-10-02. Texten nedan är den officiella kallelsen ordagrant – den ska återges
oförändrad på webbplatsen. Ändringar i innehållet görs endast på beslut av
styrelsen/interimstyrelsen.

---

## Extra årsmöte för Göteborg Pickleball Klubb

**24 oktober 2026 kl. 16.00**
**Hisingens Cykelklubbs föreningslokal, Arvid Lindmansgatan 25 F.**

Den 6 september 2026 hölls ett bildandemöte för Göteborg Pickleball Klubb.
Interimstyrelsen kallar nu till ett första årsmöte för att:

- fastställa de beslut som togs preliminärt på bildandemötet,
- ta ställning till några justeringar i dessa,
- välja en ordinarie styrelse fram till det ordinarie årsmötet i mars 2027,
- fatta beslut i övriga frågor på dagordningen enligt nedan.

### Dagordning

1. Mötets öppnande
2. Fastställande av röstlängd (se fotnot)
3. Fråga om mötet har utlysts på rätt sätt
4. Val av mötesordförande
5. Val av mötessekreterare
6. Val av två protokolljusterare och tillika rösträknare. Justerar protokollet
   tillsammans med mötesordföranden
7. Fastställande av stadgar
8. Verksamhetsberättelse och ekonomisk redovisning för perioden fram till
   årsmötet i mars 2027
9. Fråga om ansvarsfrihet för interimsstyrelsen
10. Val av ordinarie funktionärer fram till det ordinarie årsmötet i mars 2027:
    - a. Föreningens ordförande
    - b. Föreningens kassör
    - c. Tre övriga styrelseledamöter
    - d. En–två suppleanter
    - e. Revisor
    - f. Valberedning inför nästa årsmöte, två–fyra personer
11. Fastställande av medlemsavgift för tiden fram till det ordinarie årsmötet i
    mars 2027
12. Övriga ärenden från styrelsen och närvarande på mötet (se fotnot)
13. Mötets avslutande

### Fotnot

Man blir officiell medlem när man har betalat medlemsavgift, men medlemsavgiften
bestäms först på detta extra årsmöte. Därför gäller följande:

- Röstberättigade är de som närvarar vid fastställandet av röstlängden samt under
  2026 fyller lägst 12 år.
- Berättigade att lägga fram fråga under Övriga ärenden är de som närvarar på
  mötet samt under 2026 fyller lägst 12 år.
- Inga motioner kan inlämnas inför det extra årsmötet, men det finns utrymme för
  de närvarande att framföra frågor under Övriga ärenden. Beslut i dessa kan
  fattas på detta möte eller hänskjutas till beslut vid senare tillfälle.

### Dokument inför mötet

Förslag till stadgar, verksamhetsberättelse och budget publiceras här minst en
vecka före mötet.

Interimstyrelsen för Göteborg Pickleball Klubb hälsar alla pickleballvänner
välkomna att dra sitt strå till stacken genom att närvara, lägga sina förslag
och ge sin röst! Vad gäller strån och förslag eftersöks särskilt **kassör** och
**revisor**.

---

## Implementationsanteckningar (ej del av kallelsen)

- Sekcionen `#arsmote` på startsidan visar datum/tid/plats + sammanfattning;
  fullständig kallelse i expanderbart `<details>`-element (noll JS) eller på
  startsidan direkt – välj det som håller sidan luftig.
- Mötesfakta (datum, tid, plats) bryts ut till `src/config/site.ts`.
- "publiceras här" i kallelsen syftar på den här sidan/sektionen – behåll
  formuleringen ordagrant.
