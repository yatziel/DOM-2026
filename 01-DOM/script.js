/* 

  Nodo de documento

  Este nodo representa el documento completo de HTMl. Incluye el contenido raíz (root) hasta los elementos hijos.

  Para acceder a este nodo usamos 👉 document

*/

console.log(document);
console.log(document.body);
console.log(document.head);
console.log(document.title);
console.log(document.URL);

/* 

  Nodo Elemento

  Podemos seleccionar nodos de los elementos del HTML a través de su nombre de su etiqueta.

  Sintaxis:

  document.getElementsByTagName('nombreEtiqueta');

*/

let titulo = document.getElementsByTagName("h1");

console.log(titulo);
console.log(titulo[0]);
console.log(titulo[0].innerText);

let parrafos = document.getElementsByTagName("p");

console.log(parrafos);
console.log(parrafos[1].innerText);

/* 

  Nodos de Atributos

  Son los nodos que accedemos a través de su clase o de su id.

  Sintaxis:

    document.getElementById("id");
    document.getElementsByClassName("clase");

    document.querySelector("nombreSelector"); 👉 Seleccionar la primera coincidencia de un id, clase o etiqueta.

    document.querySelectorAll("nombreSelector"); 👉 Seleccionar todas las coincidencias de un id, clase o etiqueta.

    "main" 👉 el nombre de la etiqueta como esta escrito en el html.
    "#id" 👉 el id lleva un numeral antes del nombre.
    ".clase" 👉 la clase lleva un punto antes del nombre.

*/

const contenedor = document.getElementById("principal");
const titulin = document.getElementById("titulo");

console.log(contenedor);
console.log(titulin.innerText);

let cuchurrumina = document.getElementsByClassName("enlace");

console.log(cuchurrumina);
console.log(cuchurrumina[1].innerText);


let lista = document.getElementsByClassName("bala");

console.log(lista);
console.log(lista[2].innerText);

let main = document.querySelector("main");
console.log(main);

let sections = document.querySelectorAll("section");
console.log(sections)

let principal = document.querySelector("#principal");
console.log(principal);

let balas = document.querySelectorAll(".bala");
console.log(balas)

/* 

  Nodo de Texto

  Las propiedades que permiten acceder al contenido de los elementos del html

  .innerText
  .textContent

*/

const headline = document.querySelector("#titulo");
console.log(headline);
console.log(headline.innerText);
console.log(headline.textContent);
console.log(headline.innerHTML); // También devuelve las etiquetas de html