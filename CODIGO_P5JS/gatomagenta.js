// Variable para guardar la imagen.
let foto;

function preload() {

  // Cargamos la imagen antes de iniciar el programa.
  foto = loadImage("gato.jpg");

}

function setup() {

  // Creamos un canvas de 512x512 píxeles.
  createCanvas(512, 512);

}

function draw() {

  // Fondo blanco.
  background(255);

  // Aplicamos un tint con alpha.
  // El valor 255 significa completamente visible.
  // El valor 100 la hace bastante transparente.
  tint(255,0,255, 100);

  // Dibujamos la imagen.
  image(foto, 0, 0);

}
