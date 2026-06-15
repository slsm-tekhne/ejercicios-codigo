function setup (){
  createCanvas(200, 200);
}

function draw() {
  background(255);

  if (mouseY > height / 2) {
    ellipse(mouseX, mouseY, 100, 100);
  }



}


