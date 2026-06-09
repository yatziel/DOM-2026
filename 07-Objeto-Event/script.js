/* 

  Objeto Event

  El objeto event (e) es la representación de un suceso que ocurren en el navegador: un click, pulsar una tecla, el movimiento del mouse.

  Este objeto nos proporciona info sobre las propiedades y métodos para manipularlo.

  Para acceder al objeto event se pasa como argumento de la función manejadora (handler)

  Sintaxis:

  function handler(e) {
    // Código que se ejectura
    console.log(e)
  }

  Algunas de las propiedades del objeto evento:

  type 👉 tipo de evento
  target 👉 elemento donde ocurre el evento
  timeStamp 👉 la marca tiempo en milisegundos desde la carga de la página.

  code 👉 código de la tecla presionada
  key 👉 valor de la tecla presionada

  clientX 👉 la posición horizontal del puntero del mouse en relación a la ventana del navegador. 
  clientY 👉 la posicion vertical del puntero del mouse en relación a la ventana del navegador.


*/

// Traemos el elemento de referencia (Traigamos algo a JS) 

const button = document.getElementById('apachurra');

// Manejar el evento

button.addEventListener('click', mostrarEvento);

// Definir la función manejadora

function mostrarEvento(event) {
  // Código que ejecuta la función
  console.log(event);

  // Accedemos a las propiedades del objeto evento

  console.log(event.type);
  console.log(event.target);
  console.log(event.timeStamp);
  console.log(event.target.innerText);

}

// Eventos de Teclas

document.addEventListener('keydown', function(e) {
  // Codigo que se ejecuta
  // console.log(e);
  // console.log(e.type);
  // console.log(e.code);
  console.log(e.key)

} );

// Evento del mouse

document.addEventListener('mousemove', (e) => {
  // Código que se ejecuta 
  // console.log(e);
  // console.log(e.type);
  // console.log(e.clientX);
  // console.log(e.clientY);

  let coordenadas = `Las coordenadas de mi mouse de X: ${e.clientX} y de Y: ${e.clientY}! 🔫`;

  console.log(coordenadas);

} );