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

  // Fondo GRIS
  background(200,0,0);

  // Calculamos pequeños desplazamientos con el mouse
  let offsetX = mouseX/10;
  let offsetY = mouseY/10;


  // Gato magenta semitransparente.
  tint(200, 0, 200, 120);
  image(foto, 0, 0);

  // Cambiamos el modo de mezcla.
  // Los colores se suman y brillan más.
  blendMode(SCREEN);

  // Gato cian desplazado.
  tint(0, 255, 255, 100);
  image(foto, offsetX, offsetY);

  // Otro gato amarillo desplazado
  // en dirección contraria.
  tint(255, 255, 0, 100);
  image(foto, -offsetX, -offsetY, 200,200);

  // Volvemos al modo normal 
  blendMode(BLEND);

}
