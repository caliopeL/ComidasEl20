window.onload = function () {
    const usuarioGuardado = localStorage.getItem("usuario");

    if (usuarioGuardado) {
        mostrarBienvenida();
        iniciarCarrusel();
    } else {
        document.getElementById("ventana-inicio").style.display = "flex";
    }
};
// Mostrar login si no hay sesión guardada
window.onload = function () {
    if (!localStorage.getItem("usuario")) {
        document.getElementById("ventana-inicio").style.display = "flex";
    } else {
        mostrarBienvenida();
    }

    iniciarCarrusel();
};

// Validación del formulario de inicio de sesión
document.getElementById("formulario-inicio").addEventListener("submit", function (e) {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const clave = document.getElementById("clave").value;
    const soloLetras = /^[a-zA-Z\s]+$/;

    if (!soloLetras.test(usuario)) {
        alert("El usuario solo debe tener letras");
        return;
    }

    if (clave.length > 8) {
        alert("Contraseña máximo de 8 caracteres");
        return;
    }

    localStorage.setItem("usuario", usuario);
    document.getElementById("ventana-inicio").style.display = "none";
    mostrarBienvenida();
    mostrarPopup();
});

// Mostrar saludo y botón de cerrar sesión
function mostrarBienvenida() {
    const usuario = localStorage.getItem("usuario");
    if (usuario) {
        document.getElementById("texto-bienvenida").innerText = `Hola, ${usuario}`;
        document.getElementById("boton-cerrar-sesion").style.display = "inline-block";
    }
}

// Carrusel automático
let indice = 0;
function iniciarCarrusel() {
    const imagenes = document.getElementsByClassName("imagen-carrusel");
    setInterval(() => {
        for (let img of imagenes) img.style.display = "none";
        indice = (indice + 1) % imagenes.length;
        imagenes[indice].style.display = "block";
    }, 1500);
}

// Mostrar popup después de iniciar sesión
function mostrarPopup() {
    const popup = document.getElementById("popup-novedad");
    popup.style.display = "flex";
    document.getElementById("cerrar-popup").onclick = () => {
        popup.style.display = "none";
    };
}

// Guardar reseña con estrellas y nombre
document.getElementById("formulario-resena").addEventListener("submit", function (e) {
    e.preventDefault();
    const texto = document.getElementById("texto-resena").value;
    const estrellas = document.getElementById("estrellas").value;
    const usuario = localStorage.getItem("usuario") || "Anónimo";

    const div = document.createElement("div");
    div.innerHTML = `<strong>${usuario}:</strong> ${texto} <br> Puntuación: ${"★".repeat(estrellas)}<hr>`;
    document.getElementById("contenedor-resenas").appendChild(div);

    this.reset();
});

// Función para cerrar sesión
document.getElementById("boton-cerrar-sesion").addEventListener("click", function () {
    localStorage.removeItem("usuario");
    location.reload(); // Recarga la página para volver al formulario de login
});
