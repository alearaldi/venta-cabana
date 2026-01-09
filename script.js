// Animación simple para mostrar las imágenes al hacer scroll
window.addEventListener('scroll', () => {
    const images = document.querySelectorAll('.gallery img');
    images.forEach(img => {
        const speed = 2;
        const rect = img.getBoundingClientRect();
        if(rect.top < window.innerHeight) {
            img.style.opacity = "1";
        }
    });
});

console.log("Sitio de venta de cabaña cargado correctamente.");
