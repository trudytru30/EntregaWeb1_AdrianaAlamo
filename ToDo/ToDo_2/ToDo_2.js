function descargar() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(data => {
      let lista = document.querySelector("#lista"); 
      lista.innerHTML = ""; // limpiar antes de mostrar

      // Tomar solo los 10 primeros
      let primeros = data.slice(0, 10);

      primeros.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item.title;
        lista.appendChild(li);
      });
    })
}

