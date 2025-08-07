'use strict';

document.addEventListener('DOMContentLoaded', () => {

    // --- NUEVA ESTRUCTURA DE DATOS CON ICONOS Y TEMAS ---
    const oracionesPorLibro = {
        "libro1": {
            icono: '🌱',
            tema: 'tema-verde',
            oraciones: [
                { titulo: "1.- Señal de la Santa Cruz", texto: "Por la señal de la Santa Cruz,\nde nuestros enemigos,\nlíbranos, Señor, Dios nuestro.\nEn el nombre del Padre y del Hijo y del Espíritu Santo.\nAmén." },
                { titulo: "2.- Padre Nuestro", texto: "Padre nuestro, que estás en el cielo,\nsantificado sea tu Nombre;\nvenga a nosotros tu reino;\nhágase tu voluntad\nen la tierra como en el cielo.\nDanos hoy nuestro pan de cada día;\nperdona nuestras ofensas,\ncomo también nosotros perdonamos\na los que nos ofenden;\nno nos dejes caer en la tentación,\ny líbranos del mal.\nAmén." },
                { titulo: "3.- Angel de la guarda", texto: "Angel de mi guarda, mi dulce compañia \nno me desampares ni de noche ni de dia, \nno me dejes solo, pues sin ti me perderia. \nAmén." }
            ]
        },
        "libro2": {
            icono: '🐑',
            tema: 'tema-amarillo',
            oraciones: [
                { titulo: "1.- Señal de la Santa Cruz", texto: "Por la señal de la Santa Cruz,\nde nuestros enemigos,\nlíbranos, Señor, Dios nuestro.\nEn el nombre del Padre y del Hijo y del Espíritu Santo.\nAmén." },
                { titulo: "2.- Padre Nuestro", texto: "Padre nuestro, que estás en el cielo,\nsantificado sea tu Nombre;\nvenga a nosotros tu reino;\nhágase tu voluntad\nen la tierra como en el cielo.\nDanos hoy nuestro pan de cada día;\nperdona nuestras ofensas,\ncomo también nosotros perdonamos\na los que nos ofenden;\nno nos dejes caer en la tentación,\ny líbranos del mal.\nAmén." },
                { titulo: "3.- Angel de la guarda", texto: "Angel de mi guarda, mi dulce compañia \nno me desampares ni de noche ni de dia, \nno me dejes solo, pues sin ti me perderia. \nAmén." },
		{ titulo: "4.- Ave María", texto: "Dios te salve, María, llena eres de gracia;\nel Señor es contigo.\nBendita Tú eres entre todas las mujeres,\ny bendito es el fruto de tu vientre, Jesús.\nSanta María, Madre de Dios,\nruega por nosotros, pecadores,\nahora y en la hora de nuestra muerte.\nAmén." }
  
            ]
        },
        "libro3":  { icono: '🙏', tema: 'tema-rojo', oraciones: [
                { titulo: "1.- Señal de la Santa Cruz", texto: "Por la señal de la Santa Cruz,\nde nuestros enemigos,\nlíbranos, Señor, Dios nuestro.\nEn el nombre del Padre y del Hijo y del Espíritu Santo.\nAmén." },
                { titulo: "2.- Padre Nuestro", texto: "Padre nuestro, que estás en el cielo,\nsantificado sea tu Nombre;\nvenga a nosotros tu reino;\nhágase tu voluntad\nen la tierra como en el cielo.\nDanos hoy nuestro pan de cada día;\nperdona nuestras ofensas,\ncomo también nosotros perdonamos\na los que nos ofenden;\nno nos dejes caer en la tentación,\ny líbranos del mal.\nAmén." },
                { titulo: "3.- Angel de la guarda", texto: "Angel de mi guarda, mi dulce compañia \nno me desampares ni de noche ni de dia, \nno me dejes solo, pues sin ti me perderia. \nAmén." },
		{ titulo: "4.- Ave María", texto: "Dios te salve, María, llena eres de gracia;\nel Señor es contigo.\nBendita Tú eres entre todas las mujeres,\ny bendito es el fruto de tu vientre, Jesús.\nSanta María, Madre de Dios,\nruega por nosotros, pecadores,\nahora y en la hora de nuestra muerte.\nAmén." },
                { titulo: "5.- Gloria", texto: "Gloria al Padre y al Hijo y al Espíritu Santo.\nComo era en el principio, ahora y siempre, por los siglos de los siglos.\nAmén." }

] },
        "libro4":  { icono: '✨', tema: 'tema-naranja', oraciones: [

 		{ titulo: "1.- Señal de la Santa Cruz", texto: "Por la señal de la Santa Cruz,\nde nuestros enemigos,\nlíbranos, Señor, Dios nuestro.\nEn el nombre del Padre y del Hijo y del Espíritu Santo.\nAmén." },
                { titulo: "2.- Padre Nuestro", texto: "Padre nuestro, que estás en el cielo,\nsantificado sea tu Nombre;\nvenga a nosotros tu reino;\nhágase tu voluntad\nen la tierra como en el cielo.\nDanos hoy nuestro pan de cada día;\nperdona nuestras ofensas,\ncomo también nosotros perdonamos\na los que nos ofenden;\nno nos dejes caer en la tentación,\ny líbranos del mal.\nAmén." },
                { titulo: "3.- Angel de la guarda", texto: "Angel de mi guarda, mi dulce compañia \nno me desampares ni de noche ni de dia, \nno me dejes solo, pues sin ti me perderia. \nAmén." },
		{ titulo: "4.- Ave María", texto: "Dios te salve, María, llena eres de gracia;\nel Señor es contigo.\nBendita Tú eres entre todas las mujeres,\ny bendito es el fruto de tu vientre, Jesús.\nSanta María, Madre de Dios,\nruega por nosotros, pecadores,\nahora y en la hora de nuestra muerte.\nAmén." },
                { titulo: "5.- Gloria", texto: "Gloria al Padre y al Hijo y al Espíritu Santo.\nComo era en el principio, ahora y siempre, por los siglos de los siglos.\nAmén." },
		{ titulo: "6.- Credo Niceno-Constantinopolitano", texto: "Creo en un solo Dios, Padre Todopoderoso, \nCreador del cielo y de la tierra, de todo lo visible y \nlo invisible. Creo en un solo Señor, \nJesucristo, Hijo único de Dios, nacido del Padre \nantes de todos los siglos: \nDios de Dios, Luz de Luz, Dios verdadero de Dios \nverdadero, engendrado, no creado, de la misma \nnaturaleza del Padre, por quien todo \nfue hecho; que, por nosotros, los hombres, y por \nnuestra salvación bajó del cielo, y por obra del \nEspíritu Santo se encarnó de María, la Virgen, y \nse hizo hombre; y por nuestra causa fue \ncrucificado en tiempos de Poncio Pilato; padeció \ny fue sepultado, y resucitó al tercer día, según las \nEscrituras, y subió al \ncielo, y está sentado a la derecha del del Padre; y \nde nuevo vendrá con gloria para juzgar a vivos y \nmuertos, y su reino no tendrá fin. \nCreo en el Espíritu Santo, Señor y dador de vida, \nque procede del Padre y del Hijo, que con el \nPadre y el Hijo recibe una misma adoración y \ngloria, y que habló por los profetas. \nCreo en la Iglesia, que es una, santa, \ncatólica y apostólica. \nConfieso que hay un solo Bautismo para el \nperdón de los pecados. Espero la resurrección de \nlos muertos y la vida del mundo futuro. Amén." }
] },
        "libro5":  { icono: '📖', tema: 'tema-morado', oraciones: [] },
        "libro6":  { icono: '🌾', tema: 'tema-granate', oraciones: [] },
        "libro8":  { icono: '⚓', tema: 'tema-indigo', oraciones: [] },
        "libro9":  { icono: '🔥', tema: 'tema-azul-marino', oraciones: [] },
        "libro10": { icono: '🕊️', tema: 'tema-dorado', oraciones: [] }
    };

    // --- LÓGICA DE LA PÁGINA (MODIFICADA PARA USAR TEMAS) ---

    const menuLibros = document.getElementById('menu-libros');
    const contenedorOraciones = document.getElementById('contenedor-oraciones');
    let botonActivo = null;

    function hacerOracionDeslizable(elementoOracion) {
        let isDragging = false, startX, currentX;
        
        function onDragStart(e) {
            isDragging = true;
            startX = e.pageX || e.touches[0].pageX;
            elementoOracion.classList.add('arrastrando');
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
            elementoOracion.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
            const umbral = elementoOracion.offsetWidth * 0.4;
            if (Math.abs(currentX) > umbral) {
                elementoOracion.classList.add('desapareciendo');
                setTimeout(() => elementoOracion.remove(), 300);
            } else {
                elementoOracion.style.transform = 'translateX(0)';
            }
        }

        elementoOracion.addEventListener('mousedown', onDragStart);
        document.addEventListener('mousemove', onDragMove);
        document.addEventListener('mouseup', onDragEnd);
        elementoOracion.addEventListener('touchstart', onDragStart, { passive: true });
        document.addEventListener('touchmove', onDragMove);
        document.addEventListener('touchend', onDragEnd);
    }

    function mostrarOraciones(idLibro) {
        // Obtenemos la lista de oraciones desde la nueva estructura
        const oraciones = oracionesPorLibro[idLibro]?.oraciones || [];
        contenedorOraciones.innerHTML = '';

        if (oraciones.length > 0) {
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
                hacerOracionDeslizable(divOracion);
            });
        } else {
            contenedorOraciones.innerHTML = '<p class="placeholder">No hay oraciones para este libro todavía.</p>';
        }
    }

    // Crear los botones dinámicamente
    const libros = [1, 2, 3, 4, 5, 6, 8, 9, 10];
    libros.forEach(num => {
        const idLibro = `libro${num}`;
        const infoLibro = oracionesPorLibro[idLibro];
        if (!infoLibro) return;

        const boton = document.createElement('button');
        boton.className = 'btn-libro';
        // ¡Añadimos el icono al texto del botón!
        boton.textContent = `${infoLibro.icono} Libro ${num}`;
        boton.dataset.libro = idLibro;

        boton.addEventListener('click', () => {
            if (botonActivo) {
                botonActivo.classList.remove('activo');
            }
            boton.classList.add('activo');
            botonActivo = boton;

            // ¡Aplicamos la clase del tema al cuerpo de la página!
            document.body.className = infoLibro.tema || '';

            mostrarOraciones(idLibro);
        });

        menuLibros.appendChild(boton);
    });
});