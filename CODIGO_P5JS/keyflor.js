// Se crea una variable llamada "emoji" 
//y se le asigna inicialmente la flor 🌸
let emoji = '🌸';

function draw() {

  // Pinta el fondo del canvas con un gris claro
  background(220);

  // Define el tamaño del texto en 40 píxeles
  textSize(40);

  // Dibuja el emoji en pantalla
  text(emoji, width / 2, height / 2);
}


// Esta función se ejecuta automáticamente
// cada vez que el usuario presiona una tecla
function keyPressed() {

  // Si la tecla presionada es la letra "a"
  if (key == 'a') {

    // Cambia el emoji por una flor 🌼
    emoji = '🌼';
  }

  // Si la tecla presionada es la letra "s"
  if (key == 's') {

    // Cambia el emoji por una flor 🌺
    emoji = '🌺';
  }
}

