// Enviar formulario de contacto por WhatsApp
document.getElementById('whatsapp-link').addEventListener('click', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const mensaje = document.getElementById('mensaje').value;
    const whatsappMessage = `Hola, soy ${nombre}. ${mensaje}`;
    const whatsappUrl = `https://wa.me/59898948048?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
});

// Enviar mensaje de WhatsApp al hacer clic en una imagen de la galería
document.querySelectorAll('.gallery-container img').forEach(function(img) {
    img.addEventListener('click', function() {
        const modelo = img.getAttribute('data-model');
        const imagenUrl = img.getAttribute('data-image');
        const medidas = prompt(`Por favor, ingresa las medidas para el ${modelo}:`);

        if (medidas) {
            const fullImageUrl = `${window.location.origin}/${imagenUrl}`;
            const whatsappMessage = `🔹 *Consulta de modelo*: ${modelo}\n🔹 *Medidas*: ${medidas}\n🔹 *Enviado desde*: Vidriería InnovaCrystal\n🔹 *Imagen del modelo*: ${fullImageUrl}`;
            const whatsappUrl = `https://wa.me/59898948048?text=${encodeURIComponent(whatsappMessage)}`;
            window.open(whatsappUrl, '_blank');
        }
    });
});

// Galerías de imágenes para los carruseles
const galerias = {
    vidrios: [
        'imagenes/vidrio1.jpg',
        'imagenes/vidrio2.jpg',
        'imagenes/vidrio3.jpg',
    ],
    personalizados: [
        'imagenes/personalizado1.jpg',
        'imagenes/personalizado2.jpg',
        'imagenes/personalizado3.jpg',
    ]
};

let currentGallery = [];
let currentIndex = 0;

function openCarousel(type) {
    currentGallery = galerias[type];
    currentIndex = 0;
    document.getElementById('carousel-image').src = currentGallery[currentIndex];
    document.getElementById('carouselModal').style.display = 'flex';
}

function closeCarousel() {
    document.getElementById('carouselModal').style.display = 'none';
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = currentGallery.length - 1;
    } else if (currentIndex >= currentGallery.length) {
        currentIndex = 0;
    }
    document.getElementById('carousel-image').src = currentGallery[currentIndex];
}
