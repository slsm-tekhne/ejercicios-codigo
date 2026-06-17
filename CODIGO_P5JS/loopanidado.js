function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(200);

  // Usamos mouseX para la separación (con un mínimo para que no se rompa)
  let spacing = mouseX;
  if (spacing < 10) {
    spacing = 10;
  }

  // Usamos mouseY para el tamaño (también con mínimo)
  let size = mouseY;
  if (size < 10) {
    size = 10;
  }

  textAlign(CENTER, CENTER);
  textSize(size);

  // Loop filas (Y)
  for (let y = spacing / 2; y < height; y += spacing) {
    
    // Loop columnas (X)
    for (let x = spacing / 2; x < width; x += spacing) {
      
      text('🌸', x, y);
    }
  }
}
