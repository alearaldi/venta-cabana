// 1. Lógica para aparecer fotos al hacer scroll (ya la tenías)
const revealImages = () => {
    const images = document.querySelectorAll('.gallery img');
    images.forEach(img => {
        const rect = img.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            img.style.opacity = "1";
            img.style.transform = "translateY(0)";
        }
    });
};

// 2. Lógica para el Lightbox (Click para ampliar)
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("imgFull");
const closeModal = document.querySelector(".close-modal");

// Delegación de eventos para las fotos de la galería
document.querySelector('.gallery').addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        modal.style.display = "block";
        modalImg.src = e.target.src; // Copia la ruta de la imagen clickeada
    }
});

// Cerrar al hacer clic en la (X) o fuera de la imagen
closeModal.onclick = () => modal.style.display = "none";
modal.onclick = (e) => {
    if (e.target !== modalImg) modal.style.display = "none";
};

// Listeners
window.addEventListener('scroll', revealImages);
window.addEventListener('load', revealImages);
