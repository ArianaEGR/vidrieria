document.getElementById('whatsapp-link').addEventListener('click', function(event) {
    event.preventDefault();  // Evita el comportamiento por defecto del enlace

    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const mensaje = document.getElementById('mensaje').value;

    // Validar que los campos no estén vacíos
    if (nombre === '' || telefono === '' || mensaje === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Formatear el mensaje para WhatsApp
    const whatsappMessage = `Hola, soy ${nombre}. Mi teléfono es ${telefono}. ${mensaje}`;

    // Número de teléfono de la vidriería (sin espacios ni símbolos, solo números con código de país)
    const numeroWhatsApp = '+59898948048'; // Reemplaza con tu número

    // Crear el enlace de WhatsApp con el mensaje
    const whatsappUrl = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(whatsappMessage)}`;

    // Redirigir a WhatsApp
    window.open(whatsappUrl, '_blank');
});
