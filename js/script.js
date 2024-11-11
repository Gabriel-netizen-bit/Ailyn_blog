// Efecto de revelado al hacer scroll
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        // Agrega la clase 'active' si el elemento es visible
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
}

// Escuchar el evento de scroll
window.addEventListener('scroll', reveal);

// Llamar a reveal al cargar para ver los elementos visibles en pantalla
reveal();
