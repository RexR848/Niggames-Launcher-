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

        // Forzar orientación horizontal
    if (screen.orientation && screen.orientation.lock) {
        screen.orientation.lock('landscape').catch(function(error) {
            console.log('Error al bloquear la orientación: ', error);
        });
    } else {
        window.addEventListener('resize', function() {
            if (window.innerHeight > window.innerWidth) {
                alert('Por favor, rota tu dispositivo a modo horizontal');
            }
        });
    }


    if (overlayDark) {
        overlayDark.addEventListener('click', function() {
            overlayDark.style.display = 'none';
            creditsPopup.style.display = 'none';
        });
    }

    // Activar modo de pantalla completa
    function activarPantallaCompleta() {
        let elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { // Firefox
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { // Chrome, Safari y Opera
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { // IE/Edge
            elem.msRequestFullscreen();
        }
    }

    // Llamar a la función al cargar la página
    window.onload = activarPantallaCompleta;

});
