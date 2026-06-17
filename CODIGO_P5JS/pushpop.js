function setup() {
  createCanvas(550, 150);
}

function draw() {
  background(220);

  // Texto normal
  textSize(30);
  fill(0);
  text('NORMAL', 20, 40);


  // PARÉNTESIS DE ESTILOS 
  push();

  fill(255,0,125);
  textSize(50);
  rotate(0.2);

  text('TEXTO ESTILIZADO', 50, 50);

  pop();
  // FIN DEL PARÉNTESIS 


  // Vuelve a los estilos normales
  text('TEXTO NORMAL OTRA VEZ', 20, 120);
}

