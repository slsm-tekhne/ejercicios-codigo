function setup() {
  createCanvas(400, 400);
  noLoop(); // No necesitamos animación constante
}

function draw() {
  background(255); // Fondo blanco
  strokeWeight(8); // Líneas negras gruesas
  
  // Definir colores
  let rojo = color(255, 0, 0);
  let azul = color(0, 0, 255);
  let amarillo = color(255, 255, 0);
  
  // Dibujar rectángulos de colores
  noStroke();
  fill(rojo);
  rect(0, 0, 250, 250); // Rectángulo rojo
  
  fill(amarillo);
  rect(0, 250, 100, 150); // Rectángulo amarillo
  
  fill(azul);
  rect(300, 300, 100, 100); // Rectángulo azul
  
  // Dibujar las líneas negras (grid)
  stroke(0);
  line(250, 0, 250, 400);
  line(0, 250, 400, 250);
  line(300, 250, 300, 400);
  line(250, 300, 400, 300);
}
