// coordenadas para mover el ovni
let x = 200;
let y = 300;

// boolean del juego, parte en falso antes de hacer click
let juegoIniciado = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  //fondo color cielo
  background(135, 206, 235);

  // Mensaje de inicio mientras aun no se ha iniciado el juego
  // Si el boolean de juegoIniciado es falso, escribimos un mensaje para partir
  if (juegoIniciado == false) { 

    textAlign(CENTER, CENTER);
    fill(0);
    textSize(20);
    text("Haz click para partir", width/2, height/2);
  }

  // Si ya se inicio el juego
  // entonces el boolean de juegoIniciado es verdadero
  if (juegoIniciado == true) {

    // Dibujamos el emoji de ovni en las coordenadas x e y
    textSize(50);
    textAlign(CENTER, CENTER);

    text("🛸", x, y);

    // escribimos instrucciones para mover el emoji de ovni
    textSize(16);
    fill(0);
    text("Usa las flechas para mover el ovni", width / 2, 30);
  }
}


function mousePressed() { // función para iniciar el juego al hacer click

  //  al hacer click, el boolean de juegoIniciado cambia a verdadero
  juegoIniciado = true;

  //mensaje de consola para saber que se hizo click
  console.log("el juego comenzó");
}

function keyPressed() { // función para darle funcionalidad a las flechas del teclado

  // solo si el juego se inició
  if (juegoIniciado == true) {

  //determinamos el comportamiento de cada flecha
    if (keyCode === LEFT_ARROW) {
      x -= 20;
    }

    if (keyCode === RIGHT_ARROW) {
      x += 20;
    }

    if (keyCode === UP_ARROW) {
      y -= 20;
    }

    if (keyCode === DOWN_ARROW) {
      y += 20;
    }
    
  }
  
}
