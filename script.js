// Función para mostrar imágenes al hacer scroll
const revealImages = () => {
    const images = document.querySelectorAll('.gallery img');
    
    images.forEach(img => {
        const rect = img.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Si la imagen entra en el campo de visión
        if (rect.top < windowHeight - 100) {
            img.style.opacity = "1";
            img.style.transform = "translateY(0)";
        }
    });
};

// Escuchar el evento de scroll
window.addEventListener('scroll', revealImages);

// Ejecutar una vez al cargar para mostrar las primeras fotos
window.addEventListener('load', revealImages);

console.log("Sitio listo: Nombres sincronizados y galería activada.");
