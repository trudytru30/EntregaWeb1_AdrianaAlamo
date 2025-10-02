function agregarTarea() {
    const input = document.querySelector("#nuevaTarea"); 
    const texto = input.value.trim();

    if (texto === "") return; // evitar agregar vacío

    // Crear contenedor de tarea
    const div = document.createElement("div");
    div.className = "tarea";

    // Texto de la tarea
    const span = document.createElement("span");
    span.textContent = texto;

    // Botón Eliminar
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.onclick = () => div.remove();

    // Botón Completar
    const btnCompletar = document.createElement("button");
    btnCompletar.textContent = "Completar";
    btnCompletar.onclick = () => span.classList.toggle("completada");

    // Añadir elementos al div
    div.appendChild(span);
    div.appendChild(btnEliminar);
    div.appendChild(btnCompletar);

    // Insertar en el contenedor principal
    document.querySelector("#lista").appendChild(div);

    // Limpiar input
    input.value = "";
}
