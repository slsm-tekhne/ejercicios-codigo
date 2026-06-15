function setup() { //se ejecuta una única vez al inicio del programa. Se utiliza para inicializar configuraciones
  // Crea un lienzo de 200x200 píxeles
  createCanvas(200, 200);
}

function draw() { //se ejecuta repetidamente en bucle, usualmente 60 veces por segundo
  // Fondo de color blanco
  background(255);
  
  // Dibuja un círculo 
  fill(255, 0, 0); // color del círculo es rojo
  ellipse(100, 100, 150, 150); // x:100, y:100, tamaño 100px

  // Dibuja "Hello World" en el centro
  fill(0); //escribe con negro
  text("Hello World!", 70, 100);
  
}


