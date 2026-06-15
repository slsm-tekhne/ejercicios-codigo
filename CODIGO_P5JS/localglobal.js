let ancho = 100; // variable global fuera de funciones

function setup() {
  createCanvas(400, 400);
  //let ancho = 100; variable local porque esta dentro de una función
}

function draw() {
  background(125);
  fill(255,0,0,105);
  ellipse(50,50,100,100);
  
  fill(0,255,0,105);
  ellipse(70,70,100,100);
}