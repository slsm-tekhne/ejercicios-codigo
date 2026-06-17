// array de emojis
let emojis = ['😺','🍕','🛸','🌈','🔥','💖'];

// variable para guardar el indice del arreglo de emoji
let indice;

function setup() {
  createCanvas(400, 400);

  textAlign(CENTER, CENTER);
  textSize(100);
}

function draw() {
  background(220);

  // mostramos el emoji segun el indice
  text(emojis[indice], width / 2, height / 2);
}

function mousePressed() { // función para randomizar el índice del array

  //al hacer click vamos a determinar un
  //numero random entre 0 y el largo del array
  indice = floor(random(emojis.length));

  //vamos a escribir el índice que salío del random
  console.log(indice);
}

