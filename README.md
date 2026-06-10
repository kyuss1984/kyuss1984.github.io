# Dynamisches Bildraster

Dieses Projekt zeigt verschiedene Methoden, um Bilder unterschiedlicher Größen in einem dynamischen Raster anzuzeigen.

## Verwendete Methoden

### 1. CSS Grid (Empfohlene Lösung)
- **Vorteile**: Sehr flexibel, gute Browserunterstützung, responsiv
- **Nachteile**: Erfordert manuelle Höhenanpassung für perfekte Ergebnisse
- **Besonderheiten**: Verwendet `grid-auto-rows` mit kleiner Einheit für feine Höhenanpassung

### 2. Flexbox
- **Vorteile**: Einfach zu verstehen, gute Browserunterstützung
- **Nachteile**: Keine echte "Masonry"-Anordnung, gleiche Höhe pro Zeile
- **Besonderheiten**: Bilder behalten ihr Seitenverhältnis bei

### 3. Masonry Layout (CSS Columns)
- **Vorteile**: Echtes Masonry-Layout, platzsparend
- **Nachteile**: Weniger Kontrolle über die Anordnung, eventuell nicht semantisch korrekt
- **Besonderheiten**: Verwendet `column-count` für Spaltenlayout

### 4. Moderne CSS Grid mit aspect-ratio
- **Vorteile**: Sehr präzise Kontrolle über Bildverhältnisse
- **Nachteile**: Erfordert moderne Browser (CSS aspect-ratio Unterstützung)
- **Besonderheiten**: Verwendet CSS-Variablen für dynamische Aspect-Ratios

## Verwendung

1. Platzieren Sie Ihre Bilder im `images` Ordner
2. Aktualisieren Sie die `index.html` mit den entsprechenden Bildpfaden
3. Wählen Sie die gewünschte Methode aus (entfernen Sie die anderen aus dem HTML)
4. Passen Sie die CSS-Variablen nach Bedarf an

## Responsiveness

Alle Methoden sind responsiv und passen sich automatisch an verschiedene Bildschirmgrößen an:
- Desktop: 4 Spalten
- Tablet: 2-3 Spalten
- Mobile: 1 Spalte

## Browserunterstützung

- CSS Grid: Alle modernen Browser
- Flexbox: Alle modernen Browser
- Masonry Layout: Alle modernen Browser
- aspect-ratio: Moderne Browser (Chrome 88+, Firefox 89+, Safari 15+)