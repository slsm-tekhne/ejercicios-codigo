function setup (){
  createCanvas(200, 200);
}

function draw() {
  background(255);

  if (mouseY == 50) {
    fill(255, 0, 0); // rojo 
  } else if (mouseY == 100) {
    fill(0, 255, 0); // verde
  } else {
    fill(0, 0, 255); // azul
  }

  ellipse(mouseX, mouseY, 50, 50);
}
