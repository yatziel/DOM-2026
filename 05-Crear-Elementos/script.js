/* 

  Primero debemos obtener un elemento de referencia. Un nodo de HTML donde vamos a crear el nuevo elemento.

*/

const peliculas = document.querySelector("#peliculas");

/* 

  Para crear un elemento nuevo usamos createElement()

  Sintaxis:

  document.createElement("tipoElemento")

*/

const nuevaPeli = document.createElement("li");

/* 

  Para agregar elemento en el DOM, tomamos el elmento de referencia y usamos el método append()

  Sintaxis

  nodoRef.append(nuevoNodo);

*/

peliculas.append(nuevaPeli);


/* 

  Agregamos contenido al nuevo elemento.

  Sintaxis

  nodoNuevo.innerText = "valor";

*/

nuevaPeli.innerText = "🤖 Terminator";

/* 

  Reto 👉 Agregamos las clases: pelicula y fondo-dos al nuevo elemento.

*/

nuevaPeli.classList.add("pelicula" , "fondo-dos");