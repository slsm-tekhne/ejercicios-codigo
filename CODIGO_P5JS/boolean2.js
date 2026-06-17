
// Boolean que nos permite determinar cuando mostrar la flor
// comienza en falso, no vemos la flor
let mostrarFlor = false;

function setup(){
  createCanvas(200,200);
}

function draw() {
  background(220);
  
  textSize(50);
  textAlign(CENTER, CENTER);

 //condicional que evalua el estado del boolean
  if (mostrarFlor == true) { // si el boolean es verdadero, dibujamos la flor
    text('🌸', width / 2, height / 2);
  }
}

function mousePressed() { // el boolean "mostrarFlor" pasa a ser verdadero cuando hacemos click
  mostrarFlor = true;
}

function mouseReleased() { // el boolean "mostrarFlor" pasa a ser falso cuando dejamos de hacer click
  mostrarFlor = false;
}





