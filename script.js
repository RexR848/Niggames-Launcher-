document.addEventListener("DOMContentLoaded", function() {
    // Evento para el botón "JUGAR"
    const playButton = document.querySelector(".play-button");
    if (playButton) {
        playButton.addEventListener("click", function() {
            window.location.href = 'minecraft://connect?serverUrl=AlexxMzn2-fyn3.aternos.me&serverPort=17490'
        });
    }

    // Evento para el enlace de "Créditos"
    const creditsLink = document.querySelector('.credits-link');
    const overlayDark = document.querySelector('.overlay-dark');
    const creditsPopup = document.querySelector('.credits-popup');
    const closeBtn = document.querySelector('.close-btn');

    if (creditsLink) {
        creditsLink.addEventListener('click', function(event) {
            event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
            overlayDark.style.display = 'block';
            creditsPopup.style.display = 'block';
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function(event) {
            event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
            overlayDark.style.display = 'none';
            creditsPopup.style.display = 'none';
        });
    }

    if (overlayDark) {
        overlayDark.addEventListener('click', function() {
            overlayDark.style.display = 'none';
            creditsPopup.style.display = 'none';
        });
    }
});
