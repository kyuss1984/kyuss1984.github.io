// Touch Gallery für mobile Geräte
// Ermöglicht Wischen zum Navigieren in der Galerie

document.addEventListener('DOMContentLoaded', function() {
    // Galerie-Elemente
    const galleryItems = document.querySelectorAll('.gallery-item');
    let currentImageIndex = 0;
    let startX = 0;
    let endX = 0;
    
    // Funktion zum Öffnen eines Bildes im Vollbildmodus
    function openImage(index) {
        currentImageIndex = index;
        const image = galleryItems[index];
        // Hier würde normalerweise die Vollbild-Anzeige implementiert werden
        // Für dieses Beispiel fügen wir nur eine Klasse hinzu
        image.classList.add('fullscreen');
        document.body.classList.add('gallery-open');
    }
    
    // Funktion zum Schließen des Vollbildmodus
    function closeImage() {
        if (galleryItems[currentImageIndex]) {
            galleryItems[currentImageIndex].classList.remove('fullscreen');
        }
        document.body.classList.remove('gallery-open');
    }
    
    // Funktion zum Wechseln zum nächsten Bild
    function nextImage() {
        if (currentImageIndex < galleryItems.length - 1) {
            if (galleryItems[currentImageIndex]) {
                galleryItems[currentImageIndex].classList.remove('fullscreen');
            }
            currentImageIndex++;
            if (galleryItems[currentImageIndex]) {
                galleryItems[currentImageIndex].classList.add('fullscreen');
            }
        }
    }
    
    // Funktion zum Wechseln zum vorherigen Bild
    function prevImage() {
        if (currentImageIndex > 0) {
            if (galleryItems[currentImageIndex]) {
                galleryItems[currentImageIndex].classList.remove('fullscreen');
            }
            currentImageIndex--;
            if (galleryItems[currentImageIndex]) {
                galleryItems[currentImageIndex].classList.add('fullscreen');
            }
        }
    }
    
    // Touch-Event-Handler
    function handleTouchStart(e) {
        startX = e.touches[0].clientX;
    }
    
    function handleTouchMove(e) {
        endX = e.touches[0].clientX;
    }
    
    function handleTouchEnd() {
        const diff = startX - endX;
        const minSwipeDistance = 50; // Minimale Wischdistanz in Pixel
        
        // Nur wenn die Galerie geöffnet ist
        if (document.body.classList.contains('gallery-open')) {
            if (diff > minSwipeDistance) {
                // Swipe nach links - nächstes Bild
                nextImage();
            } else if (diff < -minSwipeDistance) {
                // Swipe nach rechts - vorheriges Bild
                prevImage();
            }
        }
    }
    
    // Klick-Event für Galerie-Elemente
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            openImage(index);
        });
    });
    
    // Touch-Events hinzufügen
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
    
    // Tastatur-Unterstützung für Desktop
    document.addEventListener('keydown', function(e) {
        if (document.body.classList.contains('gallery-open')) {
            if (e.key === 'ArrowRight') {
                nextImage();
            } else if (e.key === 'ArrowLeft') {
                prevImage();
            } else if (e.key === 'Escape') {
                closeImage();
            }
        }
    });
    
    // Schließen bei Klick außerhalb des Bildes
    document.addEventListener('click', function(e) {
        if (document.body.classList.contains('gallery-open') && 
            e.target.classList.contains('fullscreen')) {
            closeImage();
        }
    });
});