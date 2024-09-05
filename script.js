document.addEventListener('DOMContentLoaded', () => {
    const flowerSelect = document.getElementById('flowerSelect');
    const generateButton = document.getElementById('generateButton');
    const flowerField = document.getElementById('flowerField');
    const message = document.getElementById('message');

    generateButton.addEventListener('click', () => {
        const selection = flowerSelect.value;
        flowerField.innerHTML = '';  // Limpiar el campo de flores
        let flowerCount = 1000;  // Mínimo de 1000 flores

        // Ocultar select y botón después de seleccionar
        flowerSelect.classList.add('hidden');
        generateButton.classList.add('hidden');

        // Determinar cuántas flores generar según la opción seleccionada
        switch (selection) {
            case 'none':
            case 'few':
            case 'some':
            case 'many':
                flowerCount = 1000;
                break;
        }

        // Generar las flores
        for (let i = 0; i < flowerCount; i++) {
            const flower = document.createElement('div');
            flower.classList.add('flower');
            flowerField.appendChild(flower);
        }

        // Mostrar el mensaje
        message.classList.remove('hidden');
        message.textContent = "Te mereces todas las flores del mundo.";
    });
});