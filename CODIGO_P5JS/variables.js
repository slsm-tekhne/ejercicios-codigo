function setup (){
  createCanvas(200, 200);
}

function draw() {
  background(255);

  if (mouseX < 100) {
    fill(255, 0, 0); // rojo
    ellipse(mouseX, mouseY, 50, 50);
  } 
  
  if (mouseY > 100){
    fill(0,255,0);
    ellipse(mouseX,mouseY,50,50);
  }
  
}

