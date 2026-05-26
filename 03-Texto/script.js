// Seleccioanar la section por su id.

const pokemones = document.querySelector("#pokemones");

// Mostramos el elemento selecionados

console.log(pokemones)

/* 

  innerText

  Devuelve un "string" del contenido visible dentro de un elemento o nodo.

  nodo.innerText

  - Excluye los elementos ocultos.
  - Excluye los espacios del documento original.
  - Excluye las etiquetas de html.

*/

console.log(pokemones.innerText)

/* 

  textContent

  Devuelve un "string" del contenido visible dentro de un elemento o nodo.

  nodo.textContent

  - Incluye los elementos ocultos
  - Incluye los espacios del documento original
  - Excluye las etiquetas de html

*/

console.log(pokemones.textContent);


/* 

  innerHTML

  Devuelve un "string" con la estructura interna de un nodo selecionado.

  nodo.innerHTML

  - Incluye los espacios
  - Incluye los elementos ocultos
  - Incluye las etiquetas html

*/


console.log(pokemones.innerHTML);


// commit "Aprendimos manejar estilos y textos con js"


