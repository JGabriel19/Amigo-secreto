// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// function asignarElemento(elemento, texto) {
//   let elementoHTML = document.querySelector(elemento);
//   elementoHTML.innerHTML = texto;
// }

let ul_resul = document.querySelector("#resultado");
let input_nombre = document.querySelector("#amigo");
let amigos = [];

//Función para agregar amigo
function agregarAmigo() {
  //Declarando variables constantes
  const nombre = input_nombre.value.trim();
  const regex = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/;

  //Condición para nombres
  if (!nombre || !regex.test(nombre)) {
    alert("Ingresa un nombre valido");
    return;
  }

  //Validación de nombre repetido
  for (let i = 0; i < amigos.length; i++) {
    const element = amigos[i];
    if (element == nombre) {
      alert("Este nombre ya existe");
      return;
    }
  }

  //Ingresando al DOM
  const lista = document.createElement("li");
  lista.textContent = nombre;
  ul_resul.appendChild(lista);

  //Limpiamos el campo de texto
  input_nombre.value = "";

  //Ingresar a la lista
  amigos.push(nombre);
}

function sortearAmigo() {
  let nombre_elegido = Math.floor(Math.random() * amigos.length);
  ul_resul.innerHTML = "";

  const lista = document.createElement("li");
  lista.textContent = amigos[nombre_elegido];
  ul_resul.appendChild(lista);

  console.log(ul_resul.textContent);
}
