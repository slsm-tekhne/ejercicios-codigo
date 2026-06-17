function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(200);
  fill(255);

  // mouseX y mouseY cambia TODO el tiempo
  ellipse(mouseX, mouseY, 100, 100);
}

function mouseDragged() {
  // esto ocurre UNA sola vez por click
  // console.log nos permite enviar mensajes a la consola
  console.log("hiciste click");
}



