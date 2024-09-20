   document.getElementById('whatsapp-link').addEventListener('click', function(event) {
            // Evitar que el enlace funcione de manera predeterminada
            event.preventDefault();

            // Obtener los valores del formulario
            const nombre = document.getElementById('nombre').value;
            const mensaje = document.getElementById('mensaje').value;

            // Crear el mensaje de WhatsApp
            const whatsappMessage = `Hola, soy ${nombre}. ${mensaje}`;

            // Crear el enlace de WhatsApp con el mensaje
            const whatsappUrl = `https://wa.me/59898948048?text=${encodeURIComponent(whatsappMessage)}`;

            // Redirigir a WhatsApp
            window.open(whatsappUrl, '_blank');
        });
    </script>
