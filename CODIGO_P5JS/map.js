function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // variable para definir el color del circulo
  // mapeado a la posición de mouseY
  let colorCirculo = map(mouseY, 0, height, 0, 255);
  
  // Variable tamaño es el resultado de mapear el valor de mouse X
  // desde 0 al ancho del lienzo, de 10px a 200px. 
  let tamaño = map(mouseX, 0, width, 10, 200);
  
  //utilizo el color mapeado a mouseY para rellenar el círculo
  fill(colorCirculo);
  
  //la elipse crece en concordancia al movimiento del mouseX
  //mouseX ya está mapeado a pixeles en la función map
  ellipse(width / 2, height / 2, tamaño, tamaño);
}


