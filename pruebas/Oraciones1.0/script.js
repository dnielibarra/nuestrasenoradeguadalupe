'use strict';

// Espera a que todo el HTML esté cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {

    // --- ¡AQUÍ ES DONDE AGREGAS LAS ORACIONES! ---
    // Estructura:
    // "id_del_libro": [
    //   { titulo: "Nombre de la Oración 1", texto: "Contenido de la oración..." },
    //   { titulo: "Nombre de la Oración 2", texto: "Contenido de la oración..." }
    // ]
    // NOTA: Para los saltos de línea dentro de una oración, usa \n
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
        "libro3": [
            // Agrega aquí las oraciones del Libro 3
            { titulo: "Ejemplo Oración Libro 3", texto: "Este es el texto de la oración..."}
        ],
        "libro4": [
            // Agrega aquí las oraciones del Libro 4
        ],
        "libro5": [
            // Agrega aquí las oraciones del Libro 5
        ],
        "libro6": [
            // Agrega aquí las oraciones del Libro 6
        ],
        // Libro 7 está omitido como solicitaste
        "libro8": [
            // Agrega aquí las oraciones del Libro 8
        ],
        "libro9": [
            // Agrega aquí las oraciones del Libro 9
        ],
        "libro10": [
            // Agrega aquí las oraciones del Libro 10
        ]
    };

    // --- NO NECESITAS MODIFICAR NADA DEBAJO DE ESTA LÍNEA ---

    const menuLibros = document.getElementById('menu-libros');
    const contenedorOraciones = document.getElementById('contenedor-oraciones');
    let botonActivo = null;

    // Función para mostrar las oraciones de un libro específico
    function mostrarOraciones(idLibro) {
        const oraciones = oracionesPorLibro[idLibro];
        
        // Limpiar el contenido anterior
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
            });
        } else {
            contenedorOraciones.innerHTML = '<p class="placeholder">No hay oraciones para este libro todavía.</p>';
        }
    }

    // Crear los botones dinámicamente
    const libros = [1, 2, 3, 4, 5, 6, 8, 9, 10]; // Libros a mostrar
    libros.forEach(num => {
        const idLibro = `libro${num}`;
        const boton = document.createElement('button');
        boton.className = 'btn-libro';
        boton.textContent = `Libro ${num}`;
        boton.dataset.libro = idLibro; // Usamos data-attribute para identificar el libro

        boton.addEventListener('click', () => {
            // Quitar clase 'activo' del botón anterior si existe
            if(botonActivo) {
                botonActivo.classList.remove('activo');
            }
            // Añadir clase 'activo' al botón actual
            boton.classList.add('activo');
            botonActivo = boton;

            mostrarOraciones(idLibro);
        });

        menuLibros.appendChild(boton);
    });

});