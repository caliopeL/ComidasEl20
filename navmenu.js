console.log("Carrusel cargado");

const listado = [
    "../imagenes/amgespeciales.jpg",
    "../imagenes/desgranados.jpg",
    "../imagenes/hamburguesas.jpg",
    "../imagenes/infantil.jpg",
    "../imagenes/papaslocas.jpg",
    "../imagenes/perros.jpg",
    "../imagenes/picadas.jpg",
    "../imagenes/pollo.jpg"
];

let actual = 0;

function navegar(direccion) {
    actual += direccion;

    if (actual < 0) {
        actual = listado.length - 1;
    } else if (actual >= listado.length) {
        actual = 0;
    }

    const imagen = document.getElementById("imagen-menu");
    if (imagen) {
        imagen.src = listado[actual];
    } else {
        console.error("No se encontró la imagen con ID 'imagen-menu'");
    }
}