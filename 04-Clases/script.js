// Acceder al primer elemento de la lista.

const botana = document.querySelector(".botana")

// Mostrar por consola

console.log(botana);

/* 

  Propiedad classList

  Devuelve un DOM Token List o Listado de Clases en el DOM. La lista de clases de un elemento de html.

  nodo.classList

*/

console.log(botana.classList);
console.log(botana.classList[1]); // semilla

/* 

  Podemos agregar clases usando el método add()

  Sintaxis

  nodo.classList.add("nombre-clase")

*/

const complemento = document.querySelectorAll(".botana");

console.log(complemento[3]);

complemento[3].classList.add("picante");

console.log(complemento[3].classList);


/* 

  Podemos verificar si existe una clase en un elemento con el metodo cotains()

  sintaxis:

  nodo.classList.contains("nombre-clase");

  - Devuelve "true" si existe la clase.
  - Devuelve "false" si no existe la clase.

*/

console.log( complemento[3].classList.contains("picante") ); // true
console.log( botana.classList.contains("picante") ) // false

/* 

  Podemos eliminar una clase usando el método remove();

  Sintaxsis

  nodo.calssList.remove("nombre-clase");

*/

botana.classList.remove("botana");
complemento[3].classList.remove("picante");


console.log(botana.classList);
console.log(complemento[3].classList);