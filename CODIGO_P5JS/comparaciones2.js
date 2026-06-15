function setup (){
  createCanvas(200, 200);
}

function draw() {
  background(255);

  if (mouseY > 50 && mouseX < 150) {
  fill(255, 0, 0);
  }
  
  if (mouseY < 50 || mouseX > 150) {
  fill(0);
  background(0,255,255);
  }
  
  ellipse(mouseX,mouseY,50,50);
  fill(0);
  text(`mouse X = ${mouseX}`, 50,50);
  text(`mouse Y = ${mouseY}`, 50,70);
}

