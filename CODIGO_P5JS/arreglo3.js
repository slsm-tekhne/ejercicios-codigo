// array de emojis
let emojis = ['😺','🍕','🛸','🌈','🔥','💖','🍬','🥑','🎱','🎸','💋'];

function setup() {
  createCanvas(400, 400);

  textAlign(CENTER, CENTER);
  textSize(40);
  
  //todo más lento para ver los cambios
  frameRate(2);
}

function draw() {
  background(220);

  // for loop para recorrer filas
  for (let y = 50; y < height; y += 50) {

    // for loop para recorrer columnas
    for (let x = 50; x < width; x += 50) {

      // indice random
      let indice = floor(random(emojis.length));

      // dibujar emoji random del array
      text(emojis[indice], x, y);
    }
  }
}
