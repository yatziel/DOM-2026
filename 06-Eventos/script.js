/* 

  Eventos

  Un evento es una acción o suceso ue ocurre en el navegador o en un elemento del DOM. Pueden ser iniciados por los usuarios o también por el sistema. Los eventos pueden ser "manejados" por JS.
  
  + Manejar Eventos con JS

  1. Target (objetivo o blanco) 🎯

  Es el elemento del DOM en el que ha ocurrido el evento. El target se va encontrar dentro de un objeto llamado evento (event). Podemos acceder a este objeto mediante la propiedad "event.target"

  2. Event Listener (Escuchador del evento)👂

  Es el "oido" que esta atento a que ocurra el evento en el elemento (target) en específico.

  3. Trigger (Disparado o desencadenante) 🔫

  Es el que desencadena que el evento ocurra. Es la acción que realiza el usuario o el sistema para activar el evento.

    + Hacer clic
    + Mover el ratón
    + Tipear teclas
    + ...

  4. Event Handler (Manejador de Evento) 

  Es una función que se ejecuta cada que ocurre el trigger. Con JS le decimos que se va a ejecutar.

    + Mostrar un mensaje
    + Cambiar un color
    + Agregar un elemento
    + Lanzar una alerta

  Sintaxis:

  target.addEventListener(trigger , eventHandler);

  target   👉 elemento donde ocurre el evento
  listener 👉 escucha y detecta el evento
  trigger  👉 acción que ocurre en el evento
  handler  👉 la función que se ejecuta cuando ocurre el evento

*/

// Traemos el boton a JS

const botoncito = document.getElementById("botoncito");

// Manejar su evento

botoncito.addEventListener('click', mostrarMensaje );

// Definir la función externa

function mostrarMensaje() {
  // Código que se ejectura al llamar a la función
  alert("Ya vamanas por favor! 🤗");
}