'use strict';

document.addEventListener('DOMContentLoaded', () => {

    // =================================================================
    // 1. CATÁLOGO CENTRAL DE ORACIONES
    // =================================================================
    const todasLasOraciones = {
        senalDeLaCruz: { titulo: "Señal de la Santa Cruz", texto: "Por la señal de la Santa Cruz,\nde nuestros enemigos,\nlíbranos, Señor, Dios nuestro.\nEn el nombre del Padre y del Hijo y del Espíritu Santo.\nAmén." },
        padreNuestro: { titulo: "Padre Nuestro", texto: "Padre nuestro, que estás en el cielo,\nsantificado sea tu Nombre;\nvenga a nosotros tu reino;\nhágase tu voluntad\nen la tierra como en el cielo.\nDanos hoy nuestro pan de cada día;\nperdona nuestras ofensas,\ncomo también nosotros perdonamos\na los que nos ofenden;\nno nos dejes caer en la tentación,\ny líbranos del mal.\nAmén." },
        angelDeLaGuarda: { titulo: "Ángel de la Guarda", texto: "Ángel de la Guarda, dulce compañía,\nno me desampares, ni de noche ni de día.\nNo me dejes solo, que me perdería.\nHasta que me pongas, en paz y alegría,\ncon todos los santos, Jesús, José y María.\nAmén." },
        aveMaria: { titulo: "Ave María", texto: "Dios te salve, María, llena eres de gracia;\nel Señor es contigo.\nBendita Tú eres entre todas las mujeres,\ny bendito es el fruto de tu vientre, Jesús.\nSanta María, Madre de Dios,\nruega por nosotros, pecadores,\nahora y en la hora de nuestra muerte.\nAmén." },
        gloriaAlPadre: { titulo: "Gloria al Padre", texto: "Gloria al Padre y al Hijo y al Espíritu Santo.\nComo era en el principio, ahora y siempre, por los siglos de los siglos.\nAmén." }
    };

    // =================================================================
    // 2. LISTA DE ORACIONES POR LIBRO
    // =================================================================
    const oracionesPorLibro = {
        "libro1": { icono: '🌱', tema: 'tema-verde', oraciones: ['senalDeLaCruz', 'padreNuestro', 'angelDeLaGuarda'] },
        "libro2": { icono: '🐑', tema: 'tema-amarillo', oraciones: ['senalDeLaCruz', 'padreNuestro', 'angelDeLaGuarda', 'aveMaria'] },
        "libro3":  { icono: '🙏', tema: 'tema-rojo', oraciones: ['senalDeLaCruz', 'padreNuestro', 'angelDeLaGuarda', 'aveMaria', 'gloriaAlPadre'] },
        "libro4":  { icono: '✨', tema: 'tema-naranja', oraciones: [] },
        "libro5":  { icono: '📖', tema: 'tema-morado', oraciones: [] },
        "libro6":  { icono: '🌾', tema: 'tema-granate', oraciones: [] },
        "libro8":  { icono: '⚓', tema: 'tema-indigo', oraciones: [] },
        "libro9":  { icono: '🔥', tema: 'tema-azul-marino', oraciones: [] },
        "libro10": { icono: '🕊️', tema: 'tema-dorado', oraciones: [] }
    };

    // =================================================================
    // 3. LÓGICA DE LA PÁGINA
    // =================================================================
    const menuLibros = document.getElementById('menu-libros');
    const contenedorOraciones = document.getElementById('contenedor-oraciones');
    const barraProgreso = document.getElementById('barra-progreso');
    let botonActivo = null;
    
    // --- NUEVA FUNCIÓN PARA LEER TEXTO ---
    function leerTexto(textoParaLeer) {
        // Detiene cualquier locución anterior para que no se empalmen
        window.speechSynthesis.cancel();

        const locucion = new SpeechSynthesisUtterance(textoParaLeer);
        locucion.lang = 'es-MX'; // Importante para el acento correcto
        locucion.rate = 0.9; // Un poco más lento para que se entienda bien
        
        window.speechSynthesis.speak(locucion);
    }

    function hacerOracionDeslizable(elementoOracion, onCompletado) { /* ...código sin cambios... */ }

    function mostrarOraciones(idLibro) {
        const infoLibro = oracionesPorLibro[idLibro];
        const listaIdsOraciones = infoLibro?.oraciones || [];
        contenedorOraciones.innerHTML = '';
        let completadas = 0;
        const totalOraciones = listaIdsOraciones.length;

        function actualizarProgreso() { /* ...código sin cambios... */ }

        if (listaIdsOraciones.length > 0) {
            listaIdsOraciones.forEach(idOracion => {
                const oracion = todasLasOraciones[idOracion];
                if (oracion) {
                    const divOracion = document.createElement('div');
                    divOracion.className = 'oracion';
                    
                    const titulo = document.createElement('h3');
                    titulo.textContent = oracion.titulo;
                    
                    const texto = document.createElement('p');
                    texto.textContent = oracion.texto;

                    // --- ¡AQUÍ AÑADIMOS EL BOTÓN DE ESCUCHAR! ---
                    const btnEscuchar = document.createElement('button');
                    btnEscuchar.className = 'btn-escuchar';
                    btnEscuchar.textContent = '🔊';
                    btnEscuchar.setAttribute('aria-label', `Escuchar oración: ${oracion.titulo}`);

                    btnEscuchar.addEventListener('click', (e) => {
                        // Evita que al hacer clic en el botón se active el arrastre de la tarjeta
                        e.stopPropagation(); 
                        // Llama a la función para leer el título y el texto
                        leerTexto(`${oracion.titulo}. ${oracion.texto}`);
                    });
                    
                    divOracion.appendChild(titulo);
                    divOracion.appendChild(texto);
                    divOracion.appendChild(btnEscuchar); // Se añade el botón a la tarjeta
                    
                    contenedorOraciones.appendChild(divOracion);
                    
                    hacerOracionDeslizable(divOracion, () => {
                        completadas++;
                        actualizarProgreso();
                    });
                }
            });
        } else {
            contenedorOraciones.innerHTML = '<p class="placeholder">No hay oraciones para este libro todavía.</p>';
        }
        actualizarProgreso();
    }

    // --- CÓDIGO RESTANTE (SIN CAMBIOS) ---
    function hacerOracionDeslizable(elementoOracion, onCompletado) {
        let isDragging = false, startX, currentX = 0;
        function onDragStart(e) { isDragging = true; startX = e.pageX || e.touches[0].pageX; elementoOracion.classList.add('arrastrando'); elementoOracion.style.transition = 'none'; }
        function onDragMove(e) { if (!isDragging) return; e.preventDefault(); currentX = (e.pageX || e.touches[0].pageX) - startX; elementoOracion.style.transform = `translateX(${currentX}px)`;}
        function onDragEnd() {
            if (!isDragging) return; isDragging = false; elementoOracion.classList.remove('arrastrando'); elementoOracion.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
            const umbral = elementoOracion.offsetWidth * 0.4;
            if (Math.abs(currentX) > umbral) {
                elementoOracion.classList.add('desapareciendo');
                setTimeout(() => { elementoOracion.remove(); if (onCompletado) onCompletado(); }, 300);
            } else { elementoOracion.style.transform = 'translateX(0)'; }
        }
        elementoOracion.addEventListener('mousedown', onDragStart); document.addEventListener('mousemove', onDragMove); document.addEventListener('mouseup', onDragEnd);
        elementoOracion.addEventListener('touchstart', onDragStart, { passive: true }); document.addEventListener('touchmove', onDragMove); document.addEventListener('touchend', onDragEnd);
    }
    
    function actualizarProgreso() {
        const totalOraciones = this.totalOraciones;
        let completadas = this.completadas;
        if (totalOraciones === 0) {
            barraProgreso.innerHTML = ""; return;
        }
        if (completadas === totalOraciones) {
            barraProgreso.innerHTML = `<h3>¡Felicidades! ✨ ¡Has completado todas!</h3>`;
        } else {
            barraProgreso.innerHTML = `<p>Progreso: <strong>${completadas} / ${totalOraciones}</strong> oraciones</p>`;
        }
    }
    
    const libros = [1, 2, 3, 4, 5, 6, 8, 9, 10];
    libros.forEach(num => {
        const idLibro = `libro${num}`;
        const infoLibro = oracionesPorLibro[idLibro];
        if (!infoLibro) return;
        const boton = document.createElement('button');
        boton.className = 'btn-libro';
        boton.textContent = `${infoLibro.icono} Libro ${num}`;
        boton.dataset.libro = idLibro;
        boton.addEventListener('click', () => {
            if (botonActivo) { botonActivo.classList.remove('activo'); }
            boton.classList.add('activo'); botonActivo = boton;
            document.body.className = infoLibro.tema || '';
            mostrarOraciones(idLibro);
        });
        menuLibros.appendChild(boton);
    });
});