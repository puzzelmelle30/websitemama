# Susanne Silvertant Website

Moderne website voor keramisch kunstenaar Susanne Silvertant, gebouwd als Single Page Application.

## ✨ Belangrijke Features

- **Single Page Application (SPA)**: De header laadt niet opnieuw bij navigatie, alleen de content verandert
- **Geen zoom-issues**: Omdat de pagina niet herlaadt, blijft de zoom stabiel
- **Modern & snel**: Snelle navigatie zonder page reloads
- **Responsive design**: Werkt op alle schermformaten
- **Hover effecten**: Interactieve menu items en werk categorieën

## 📁 Bestandsstructuur

```
susannesilvertant/
├── index.html          # Hoofd SPA file (Single Page Application)
├── css/
│   └── style.css       # Alle styling
├── js/
│   └── app.js          # SPA logica en routing
├── pages/              # Individuele pagina content (gemakkelijk te bewerken!)
│   ├── home.html
│   ├── introductie.html
│   ├── werk.html
│   ├── monumentaal.html
│   ├── inopdracht.html
│   ├── kleinwerk.html
│   ├── werkwijze.html
│   ├── cv.html
│   ├── actueel.html
│   ├── media.html
│   ├── docentschap.html
│   ├── workshop.html
│   └── contact.html
├── images/             # Alle afbeeldingen
└── README.md           # Deze file
```

## 🚀 Hoe werkt het?

De website is gebouwd als een **Single Page Application**:
- Alle content wordt geladen in één `index.html` bestand
- JavaScript (`js/app.js`) handelt de navigatie af
- Wanneer je op een menu item klikt, wordt alleen de content area vervangen
- De header en footer blijven op hun plek (geen reload!)
- URLs gebruiken hash-routing: `#introductie`, `#werk`, etc.

**Voordelen:**
- ✅ Geen zoom-veranderingen bij navigatie
- ✅ Header blijft stabiel, laadt niet opnieuw
- ✅ Snellere navigatie
- ✅ Browser back/forward buttons werken gewoon

## 🎨 Content Aanpassen

Alle pagina-content staat in **aparte HTML bestanden** in de `pages/` map. Dit maakt bewerken super eenvoudig!

**Om content aan te passen:**

1. Open het bestand in de `pages/` map (bijv. `pages/introductie.html`)
2. Bewerk de HTML zoals je wilt
3. Sla op - klaar!
4. Refresh de website en de wijzigingen zijn direct zichtbaar

**Voordeel:** Je hoeft alleen maar HTML te bewerken, geen JavaScript!

**Voorbeeld:** Om de introductie tekst aan te passen, open gewoon `pages/introductie.html` en bewerk de tekst tussen de `<p>` tags.

## 📸 Afbeeldingen Toevoegen

### Benodigde afbeeldingen

Plaats deze in de `images/` map:

**Header:**
- `logo.png` - Logo voor in de header

**Introductie:**
- `introductie.png` - Afbeelding boven de introductie tekst

**Werk pagina (hover buttons):**
- `monumentaal_inact.png` + `monumentaal_act.png`
- `inopdracht_inact.png` + `inopdracht_act.png`
- `kleinwerk_inact.png` + `kleinwerk_act.png`

**Homepage:**
- `home-1.jpg` t/m `home-7.jpg`

**Galerijen:**
- `monumentaal-1.jpg` t/m `monumentaal-12.jpg`
- `inopdracht-1.jpg` t/m `inopdracht-4.jpg`
- `kleinwerk-1.jpg` t/m `kleinwerk-5.jpg`

### Afbeeldingen downloaden van originele site

1. Ga naar https://www.susannesilvertant.nl/
2. Rechtermuisknop op een afbeelding → "Afbeelding opslaan als..."
3. Sla op in de `images/` map met de juiste naam

## 🌐 Deployment

Upload alle bestanden naar je webserver:
- `index.html`
- `css/` map
- `js/` map  
- `images/` map

De website werkt direct zonder extra configuratie!

## 🔧 Technische Details

- **Geen frameworks**: Pure vanilla JavaScript
- **Hash routing**: URLs zoals `#werk`, `#contact`
- **Browser history support**: Back/forward buttons werken
- **CSS Grid & Flexbox**: Voor moderne layouts
- **Responsive**: Mobiel-first design

## 📝 Oude HTML Bestanden

De oude multi-page HTML bestanden zijn bewaard als backup:
- `index-old.html`
- `introductie.html`
- `werk.html`
- etc.

Deze zijn niet meer nodig voor de website maar kunnen als referentie dienen.

---

Gebouwd met ❤️ voor Susanne Silvertant
