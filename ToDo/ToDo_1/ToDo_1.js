function agregarTarea() {
    let input = document.getElementById("nuevaTarea");
    let texto = input.value.trim();

    if (texto === "") return; // evitar agregar vacío

    // Crear div contenedor
    let div = document.createElement("div");
    div.className = "tarea";

    // Crear texto de la tarea
    let span = document.createElement("span");
    span.textContent = texto;

    // Botón Eliminar
    let btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.onclick = function() {
        div.remove();
    };

    // Botón Completar
    let btnCompletar = document.createElement("button");
    btnCompletar.textContent = "Completar";
    btnCompletar.onclick = function() {
        span.classList.toggle("completada");
    };

    // Agregar al div
    div.appendChild(span);
    div.appendChild(btnEliminar);
    div.appendChild(btnCompletar);

    // Agregar al contenedor principal
    document.getElementById("lista").appendChild(div);

    // Limpiar input
    input.value = "";
}
