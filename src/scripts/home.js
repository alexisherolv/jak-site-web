function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Función para activar la animación cuando el elemento sea visible
function activateAnimation() {
    const image = document.querySelector('.image');
    if (isElementInViewport(image)) {
        image.style.animation = 'appear 2s forwards'; // Aplica la animación
        window.removeEventListener('scroll', activateAnimation); // Deja de escuchar el evento de desplazamiento
    }
}

// Agrega un evento de desplazamiento para activar la animación cuando el elemento sea visible
window.addEventListener('scroll', activateAnimation);