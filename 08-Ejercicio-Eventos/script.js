// Referencia del emoji del cursor

const cursor = document.querySelector('.cursor');

// Detectamos el evento del movimiento del mouse

document.addEventListener('mousemove', (e) => {
  // Código que se ejecuta
  // console.log(e.clientY);

  // Guardar los datos de coordenadas del mouse en variables

  let mouseX = e.clientX;
  let mouseY = e.clientY;

  cursor.style.left = `${mouseX}px`;
  cursor.style.top = `${mouseY}px`;

} );

// Detectar el evento de presionar una tecla.

document.addEventListener('keydown', (e) => {
  // Código que se ejectuta
  // console.log(e.key);

  switch (e.key) {
    // Casos
    case '1':
      cursor.innerText = '💩';
      document.body.style.backgroundColor = '#13dd6e';
      break;
    case '2':
      cursor.innerText = '🤖';
      document.body.style.backgroundColor = '#ddbf13';
      break;
    case '3':
      cursor.innerText = '🥸';
      document.body.style.backgroundColor = '#9313dd';
      break;
    case '4':
      cursor.innerText = '👽';
      document.body.style.backgroundColor = '#dd1331';
      break;
    default:
      cursor.innerText = '🚀';
      document.body.style.backgroundColor = '#483d8b';
      break; // Opcional
  }
});