// Variable para guardar el video.
let video;

function setup() {

  // Creamos el canvas.
  createCanvas(640, 360);

  // Cargamos el video.
  video = createVideo("video.mp4");

  // Posición del video.
  video.position(0, 0);

  // Reproduce continuamente.
  video.loop();

}

function draw() {

}


