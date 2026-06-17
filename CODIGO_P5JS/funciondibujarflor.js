function setup() {
  // Crea un lienzo de 100 x 100 píxeles
  createCanvas(100, 100);

}

function draw() {
  // Dibuja un fondo gris claro
  background(200);

  // Llama a la función drawFlower()
  // y le pasa valores para la posición y el tamaño
  drawFlower(50, 50, 20);
}

// Declara una función que dibuja una flor
// usando posición (x, y) y tamaño (size)
function drawFlower(x, y, size) {
  // Configura la alineación del texto
  textAlign(CENTER, CENTER);

  // Usa el parámetro "size" para definir el tamaño del texto
  textSize(size);

  // Dibuja un emoji de flor
  // usando x e y como coordenadas
  text('🌸', x, y);
}




