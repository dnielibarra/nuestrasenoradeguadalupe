'use strict';

document.addEventListener('DOMContentLoaded', () => {

    // --- ¡AQUÍ ES DONDE AGREGAS LAS ORACIONES! ---
    // (Esta parte no cambia. Puedes seguir agregando oraciones como antes)
    const oracionesPorLibro = {
        "libro1": [
            {
                titulo: "Señal de la Santa Cruz",
                texto: "Por la señal de la Santa Cruz,\nde nuestros enemigos,\nlíbranos, Señor, Dios nuestro.\nEn el nombre del Padre y del Hijo y del Espíritu Santo.\nAmén."
            },
            {
                titulo: "Padre Nuestro",
                texto: "Padre nuestro, que estás en el cielo,\nsantificado sea tu Nombre;\nvenga a nosotros tu reino;\nhágase tu voluntad\nen la tierra como en el cielo.\nDanos hoy nuestro pan de cada día;\nperdona nuestras ofensas,\ncomo también nosotros perdonamos\na los que nos ofenden;\nno nos dejes caer en la tentación,\ny líbranos del mal.\nAmén."
            },
            {
                titulo: "Ave María",
                texto: "Dios te salve, María, llena eres de gracia;\nel Señor es contigo.\nBendita Tú eres entre todas las mujeres,\ny bendito es el fruto de tu vientre, Jesús.\nSanta María, Madre de Dios,\nruega por nosotros, pecadores,\nahora y en la hora de nuestra muerte.\nAmén."
            }
        ],
        "libro2": [
            {
                titulo: "Gloria",
                texto: "Gloria al Padre y al Hijo y al Espíritu Santo.\nComo era en el principio, ahora y siempre, por los siglos de los siglos.\nAmén."
            },
            {
                titulo: "Credo de los Apóstoles",
                texto: "Creo en Dios, Padre todopoderoso, Creador del cielo y de la tierra.\nCreo en Jesucristo, su único Hijo, nuestro Señor, que fue concebido por obra y gracia del Espíritu Santo, nació de Santa María Virgen, padeció bajo el poder de Poncio Pilato, fue crucificado, muerto y sepultado, descendió a los infiernos, al tercer día resucitó de entre los muertos, subió a los cielos y está sentado a la derecha de Dios, Padre todopoderoso. Desde allí ha de venir a juzgar a vivos y muertos.\nCreo en el Espíritu Santo, la santa Iglesia católica, la comunión de los santos, el perdón de los pecados, la resurrección de la carne y la vida eterna.\nAmén."
            }
        ],
        "libro3": [], "libro4": [], "libro5": [], "libro6": [], "libro8": [], "libro9": [], "libro10": []
    };

    // --- LÓGICA DE LA PÁGINA ---
    // (No necesitas modificar nada debajo de esta línea)

    const menuLibros = document.getElementById('menu-libros');
    const contenedorOraciones = document.getElementById('contenedor-oraciones');
    let botonActivo = null;

    // Función para hacer que una oración se pueda deslizar y eliminar
    function hacerOracionDeslizable(elementoOracion) {
        let isDragging = false;
        let startX;
        let currentX;
        let initialX = 0;

        function onDragStart(e) {
            isDragging = true;
            startX = e.pageX || e.touches[0].pageX;
            elementoOracion.classList.add('arrastrando');
            // Desactiva la transición para un movimiento instantáneo
            elementoOracion.style.transition = 'none'; 
        }

        function onDragMove(e) {
            if (!isDragging) return;
            e.preventDefault();
            currentX = (e.pageX || e.touches[0].pageX) - startX;
            elementoOracion.style.transform = `translateX(${currentX}px)`;
        }

        function onDragEnd() {
            if (!isDragging) return;
            isDragging = false;
            elementoOracion.classList.remove('arrastrando');
            // Reactiva la transición para animaciones suaves
            elementoOracion.style.transition = 'transform 0.3s ease, opacity 0.3s ease';

            const umbral = elementoOracion.offsetWidth * 0.4; // Si se arrastra más del 40%

            if (Math.abs(currentX) > umbral) {
                elementoOracion.classList.add('desapareciendo');
                // Espera a que la animación termine para eliminar el elemento
                setTimeout(() => {
                    elementoOracion.remove();
                }, 300); // 300ms, igual que la duración de la transición
            } else {
                // Si no se supera el umbral, vuelve a su sitio
                elementoOracion.style.transform = 'translateX(0)';
            }
        }
        
        // Eventos para Mouse
        elementoOracion.addEventListener('mousedown', onDragStart);
        document.addEventListener('mousemove', onDragMove);
        document.addEventListener('mouseup', onDragEnd);

        // Eventos para Pantallas Táctiles
        elementoOracion.addEventListener('touchstart', onDragStart, { passive: true });
        document.addEventListener('touchmove', onDragMove);
        document.addEventListener('touchend', onDragEnd);
    }

    // Función para mostrar las oraciones (modificada para añadir el deslizamiento)
    function mostrarOraciones(idLibro) {
        const oraciones = oracionesPorLibro[idLibro];
        contenedorOraciones.innerHTML = '';

        if (oraciones && oraciones.length > 0) {
            oraciones.forEach(oracion => {
                const divOracion = document.createElement('div');
                divOracion.className = 'oracion';

                const titulo = document.createElement('h3');
                titulo.textContent = oracion.titulo;

                const texto = document.createElement('p');
                texto.textContent = oracion.texto;

                divOracion.appendChild(titulo);
                divOracion.appendChild(texto);
                contenedorOraciones.appendChild(divOracion);

                // ¡Aquí aplicamos la nueva funcionalidad a cada oración creada!
                hacerOracionDeslizable(divOracion);
            });
        } else {
            contenedorOraciones.innerHTML = '<p class="placeholder">No hay oraciones para este libro todavía.</p>';
        }
    }

    // Crear los botones dinámicamente (sin cambios aquí)
    const libros = [1, 2, 3, 4, 5, 6, 8, 9, 10];
    libros.forEach(num => {
        const idLibro = `libro${num}`;
        const boton = document.createElement('button');
        boton.className = 'btn-libro';
        boton.textContent = `Libro ${num}`;
        boton.dataset.libro = idLibro;

        boton.addEventListener('click', () => {
            if (botonActivo) {
                botonActivo.classList.remove('activo');
            }
            boton.classList.add('activo');
            botonActivo = boton;

            mostrarOraciones(idLibro);
        });

        menuLibros.appendChild(boton);
    });

});