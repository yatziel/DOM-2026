// Vamos a seleccionar el h1 a través de su clase.

const titulo = document.querySelector('.titulo');

// Mostremos el elemento selccionado por consola

console.log(titulo);

/* 

  Objeto Style

  Podemos acceder a el a través de la notación de punto (.)

  👉 nodo.style

  Resultado es CSS Style Declaration. Es decir una lista que representa todas las propiedades de estilo de un elemento.

  Las propiedades cambian del formato "kebab-case" a "camelCase"

*/

console.log(titulo.style);

/* 

  Para acceder a las propiedades de estilo usamos la notación de punto (.)

  nodo.style.nombrePropiedad

  Unicamente se mostraran en el CSSStyleDeclaration los valores de los estilos en línea. Declarados directamente en el HTML.

*/

console.log(titulo.style.color);

/* 

  Podemos asignar un valor a la propieda de estilo del noso seleccionado.

  nodo.style.nombrePropiedad = valor;

*/

titulo.style.color = "orange";
titulo.style.backgroundColor = "purple";
titulo.style.fontSize = "60px";

console.log(titulo.style.color);

/* 

  Método setProperty()

  Asigna una propiedad de estilo a un elemento seleccionado.

  Sinxtaxis:

  nodo.style.setProperty("nombrePropiedad", "valor");

  - Más flexible y por lo tanto la más usada.
  - Las propiedades de estilo se escriben en kebab-case.
  - Hay un tercer parámetro "important" es opcional.

*/

titulo.style.setProperty("color", "darkblue");
titulo.style.setProperty("background-color", "white", "important");


/* 

  Elminar valores de propiedades del nodo seleccionado.

    nodo.style.nombrePropiedad = "" 
  
  - Asignamos una cadena vacía al valor de la propiedad.
  - En esta sintaxis el nombre de la propiedad va en camelCase

*/

titulo.style.color = "";
titulo.style.backgroundColor = "";

/* 

  Método removeProperty()

  Esto elimina la propiedad de estilo de un nodo.

  Sintaxis:

  nodo.style.removeProperty("nombre-propiedad");

  - En esta forma el nombre de la propiedad va en kebab-case

*/

titulo.style.removeProperty("font-size");