function setup (){
  createCanvas(200, 200);
}

function draw() {
  background(255);

  if (mouseY < height / 3) {
    fill(255, 0, 0); // rojo
    ellipse(mouseX, mouseY, 50, 50);
  } else if (mouseY < ((height / 3)*2)) {
    fill(0, 255, 0); // verde
    rectMode(CENTER);
    rect(mouseX,mouseY,50,50);
  } else {
    fill(0, 0, 255); // azul
    ellipse(mouseX, mouseY, 50, 50);
  }

}
