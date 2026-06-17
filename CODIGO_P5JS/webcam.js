// Variable para guardar la webcam.
let camara;

function setup() {

  // Creamos el canvas.
  createCanvas(640, 480);

  // Activamos la cámara.
  camara = createCapture(VIDEO);

  // Ajustamos el tamaño.
  camara.size(640, 480);
  
  camara.position(0,0);

}

function draw() {

}
