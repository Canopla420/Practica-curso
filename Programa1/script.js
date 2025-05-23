// Obtiene el contenedor de la lista de tareas (ul) y el campo de entrada de texto (input)
const listContainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");

/**
 * Función que añade una nueva tarea a la lista.
 * Si el campo de texto está vacío, muestra una alerta.
 * Si hay texto, crea un nuevo <li> con la tarea y un botón de eliminación (×).
 */
function añadirTarea() {
    // Verifica si el input está vacío
    if (inputBox.value === '') {
        alert("Ingrese algún dato"); // Muestra mensaje de error
    } else {
        // Crea un nuevo elemento <li> para la tarea
        let li = document.createElement("li");
        li.innerHTML = inputBox.value; // Inserta el texto de la tarea
        listContainer.appendChild(li); // Agrega el <li> al contenedor

        // Crea un elemento <span> que funciona como botón de eliminar
        let span = document.createElement("span");
        span.innerHTML = '\u00d7'; // Código Unicode para "×"
        li.appendChild(span); // Agrega el botón dentro del <li>
    }

    inputBox.value = ""; // Limpia el campo de entrada
    guardarTarea(); // Guarda el estado actual en localStorage
}

/**
 * Evento que maneja los clics en la lista:
 * - Si se hace clic en un <li>, se marca o desmarca como completada.
 * - Si se hace clic en el botón <span>, se elimina la tarea.
 */
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        // Alterna la clase "checked" para marcar o desmarcar la tarea
        e.target.classList.toggle("checked");
        guardarTarea(); // Guarda los cambios
    } else if (e.target.tagName === "SPAN") {
        // Elimina el <li> completo al hacer clic en el botón "×"
        e.target.parentElement.remove();
        guardarTarea(); // Guarda los cambios
    }
});

/**
 * Función que guarda el contenido actual de la lista de tareas en el almacenamiento local del navegador.
 */
function guardarTarea() {
    localStorage.setItem("data", listContainer.innerHTML);
}

/**
 * Función que recupera las tareas guardadas del almacenamiento local y las muestra al cargar la página.
 */
function mostrarTarea() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Llama a mostrarTarea() para cargar las tareas almacenadas al iniciar la página
mostrarTarea();
