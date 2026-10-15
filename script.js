/* =====================================================
   ESPERAR A QUE TODO EL HTML ESTÉ CARGADO
===================================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       MENÚ MÓVIL
    ===================================================== */

    const botonMenu =
        document.getElementById("botonMenu");

    const menuNavegacion =
        document.getElementById("menuNavegacion");


    if (botonMenu && menuNavegacion) {

        botonMenu.addEventListener("click", function (evento) {

            evento.preventDefault();

            evento.stopPropagation();

            menuNavegacion.classList.toggle("mostrar");

            botonMenu.classList.toggle("activo");

        });

    }



    /* =====================================================
       CERRAR MENÚ MÓVIL AL SELECCIONAR UNA OPCIÓN
    ===================================================== */

    const enlacesMenu =
        document.querySelectorAll("#menuNavegacion a");


    enlacesMenu.forEach(function (enlace) {

        enlace.addEventListener("click", function () {

            if (menuNavegacion) {

                menuNavegacion.classList.remove("mostrar");

            }

            if (botonMenu) {

                botonMenu.classList.remove("activo");

            }

        });

    });



    /* =====================================================
       CERRAR MENÚ AL HACER CLIC FUERA
    ===================================================== */

    document.addEventListener("click", function (evento) {

        if (
            menuNavegacion &&
            botonMenu &&
            !menuNavegacion.contains(evento.target) &&
            !botonMenu.contains(evento.target)
        ) {

            menuNavegacion.classList.remove("mostrar");

            botonMenu.classList.remove("activo");

        }

    });



    /* =====================================================
       BOTÓN VOLVER ARRIBA
    ===================================================== */

    const botonArriba =
        document.getElementById("botonArriba");


    if (botonArriba) {

        botonArriba.style.display = "none";


        window.addEventListener("scroll", function () {

            if (window.scrollY > 300) {

                botonArriba.style.display = "flex";

            } else {

                botonArriba.style.display = "none";

            }

        });


        botonArriba.addEventListener("click", function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }



    /* =====================================================
       FILTRO DE LUGARES
    ===================================================== */

    const botonesFiltro =
        document.querySelectorAll(".filtro");

    const lugares =
        document.querySelectorAll(".lugar-card");


    botonesFiltro.forEach(function (boton) {

        boton.addEventListener("click", function () {

            const filtro =
                boton.getAttribute("data-filtro");


            botonesFiltro.forEach(function (item) {

                item.classList.remove("activo-filtro");

            });


            boton.classList.add("activo-filtro");


            lugares.forEach(function (lugar) {

                const categoria =
                    lugar.getAttribute("data-categoria");


                if (
                    filtro === "todos" ||
                    filtro === categoria
                ) {

                    lugar.style.display = "block";

                    lugar.style.opacity = "0";

                    lugar.style.transform =
                        "translateY(15px)";


                    setTimeout(function () {

                        lugar.style.transition =
                            "opacity 0.4s ease, transform 0.4s ease";

                        lugar.style.opacity = "1";

                        lugar.style.transform =
                            "translateY(0)";

                    }, 50);

                } else {

                    lugar.style.display = "none";

                }

            });

        });

    });



    /* =====================================================
       FORMULARIO DE CONTACTO
    ===================================================== */

    const formulario =
        document.getElementById("formularioContacto");

    const mensajeFormulario =
        document.getElementById("mensajeFormulario");


    if (formulario) {

        formulario.addEventListener("submit", function (evento) {

            evento.preventDefault();


            const campoNombre =
                document.getElementById("nombre");


            if (campoNombre && mensajeFormulario) {

                const nombre =
                    campoNombre.value.trim();


                if (nombre === "") {

                    mensajeFormulario.textContent =
                        "Por favor, escribe tu nombre.";

                    mensajeFormulario.style.display =
                        "block";

                    return;

                }


                mensajeFormulario.textContent =
                    "¡Gracias, " +
                    nombre +
                    "! El formulario fue completado correctamente.";


                mensajeFormulario.style.display =
                    "block";


                formulario.reset();

            }

        });

    }



    /* =====================================================
       GALERÍA INTERACTIVA
    ===================================================== */

    const imagenes =
        document.querySelectorAll(".galeria img");


    imagenes.forEach(function (imagen) {

        imagen.addEventListener("click", function () {


            if (
                imagen.classList.contains(
                    "imagen-ampliada"
                )
            ) {

                imagen.classList.remove(
                    "imagen-ampliada"
                );

            } else {


                imagenes.forEach(function (otraImagen) {

                    otraImagen.classList.remove(
                        "imagen-ampliada"
                    );

                });


                imagen.classList.add(
                    "imagen-ampliada"
                );

            }

        });

    });



    /* =====================================================
       CARTAS DE RESTAURANTES
       
       ESTA PARTE ES LA IMPORTANTE PARA TU MENÚ
    ===================================================== */

    const cartas =
        document.querySelectorAll(".carta-restaurante");


    cartas.forEach(function (carta) {


        /* ================================================
           BOTÓN "VER MENÚ"
        ================================================ */

        const portada =
            carta.querySelector(".carta-portada");


        if (portada) {

            portada.addEventListener("click", function () {

                carta.classList.add("abierto");

            });

        }



        /* ================================================
           BOTÓN "X" PARA CERRAR
        ================================================ */

        const botonCerrar =
            carta.querySelector(".cerrar-menu");


        if (botonCerrar) {

            botonCerrar.addEventListener(
                "click",
                function (evento) {

                    /* Evita que vuelva a abrir la carta */

                    evento.stopPropagation();

                    carta.classList.remove("abierto");

                }
            );

        }

    });



    /* =====================================================
       CERRAR CARTAS CON ESC
    ===================================================== */

    document.addEventListener("keydown", function (evento) {

        if (evento.key === "Escape") {


            cartas.forEach(function (carta) {

                carta.classList.remove("abierto");

            });


            imagenes.forEach(function (imagen) {

                imagen.classList.remove(
                    "imagen-ampliada"
                );

            });


            if (menuNavegacion) {

                menuNavegacion.classList.remove(
                    "mostrar"
                );

            }


            if (botonMenu) {

                botonMenu.classList.remove(
                    "activo"
                );

            }

        }

    });



    /* =====================================================
       ANIMACIÓN AL CARGAR
    ===================================================== */

    const elementos =
        document.querySelectorAll(
            ".carta-restaurante, .lugar-card"
        );


    elementos.forEach(function (elemento, indice) {

        elemento.style.opacity = "0";

        elemento.style.transform =
            "translateY(20px)";


        setTimeout(function () {

            elemento.style.transition =
                "opacity 0.6s ease, transform 0.6s ease";

            elemento.style.opacity = "1";

            elemento.style.transform =
                "translateY(0)";

        }, indice * 100);

    });



    /* =====================================================
       BOTONES DE "VER MÁS"
       
       Si tienes botones que llevan a contacto
    ===================================================== */

    const botonesContacto =
        document.querySelectorAll(".boton-contacto");


    botonesContacto.forEach(function (boton) {

        boton.addEventListener("click", function () {

            window.location.href =
                "contacto.html";

        });

    });



    /* =====================================================
       CERRAR CARTA AL HACER CLICK FUERA
    ===================================================== */

    document.addEventListener("click", function (evento) {

        cartas.forEach(function (carta) {

            if (
                carta.classList.contains("abierto") &&
                !carta.contains(evento.target)
            ) {

                carta.classList.remove("abierto");

            }

        });

    });


});

javascript
document.addEventListener("DOMContentLoaded", function () {


    // =====================================================
    // MENÚ DE NAVEGACIÓN PARA CELULAR
    // =====================================================

    const botonMenu = document.getElementById("botonMenu");
    const menuNavegacion = document.getElementById("menuNavegacion");

    if (botonMenu && menuNavegacion) {

        botonMenu.addEventListener("click", function () {

            menuNavegacion.classList.toggle("mostrar");

            botonMenu.classList.toggle("activo");

        });

    }


    // =====================================================
    // BOTONES "VER MENÚ"
    // =====================================================

    const cartasRestaurantes =
        document.querySelectorAll(".carta-restaurante");


    cartasRestaurantes.forEach(function (carta) {


        const portada =
            carta.querySelector(".carta-portada");


        const contenido =
            carta.querySelector(".contenido-menu");


        const botonCerrar =
            carta.querySelector(".cerrar-menu");


        // -------------------------------------------------
        // ABRIR MENÚ
        // -------------------------------------------------

        if (portada && contenido) {

            portada.addEventListener("click", function (evento) {

                evento.preventDefault();

                contenido.classList.add("mostrar-menu");

            });

        }


        // -------------------------------------------------
        // CERRAR MENÚ
        // -------------------------------------------------

        if (botonCerrar && contenido) {

            botonCerrar.addEventListener("click", function () {

                contenido.classList.remove("mostrar-menu");

            });

        }

    });


    // =====================================================
    // CERRAR MENÚ DE NAVEGACIÓN EN CELULAR
    // =====================================================

    const enlacesNavegacion =
        document.querySelectorAll("#menuNavegacion a");


    enlacesNavegacion.forEach(function (enlace) {

        enlace.addEventListener("click", function () {

            if (menuNavegacion) {

                menuNavegacion.classList.remove("mostrar");

            }

            if (botonMenu) {

                botonMenu.classList.remove("activo");

            }

        });

    });


});
