// Variable que guardará la imagen.
// Se declara fuera de las funciones para que pueda usarse en todo el programa.
let foto;

// La función preload() se ejecuta antes de setup().
// Se utiliza para cargar archivos (imágenes, sonidos, etc.)
// para que estén listos antes de comenzar el programa.
function preload() {

  // Carga la imagen llamada "gato.jpg"
  // y la guarda dentro de la variable foto.
  foto = loadImage("gato.jpg");
}


function setup() {

//tamaño del lienzo calza con mi imagen
  createCanvas(512, 512);

}

function draw() {


  background(220);

  // Dibuja la imagen almacenada en la variable foto.
  // Primer parámetro: la imagen que queremos mostrar.
  // Segundo parámetro (0): posición horizontal (eje X).
  // Tercer parámetro (0): posición vertical (eje Y).
  // La esquina superior izquierda de la imagen
  // aparecerá en la coordenada (0, 0).
  image(foto, 0, 0);

  //también puedes definir alto y ancho
  image(foto, 0, 0, 800, 400);

}
