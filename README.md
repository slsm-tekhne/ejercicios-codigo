# Ejercicios Interactivos — Solemne II
## Pensamiento Computacional / p5.js

> 📣 Repositorio de ejercicios prácticos para entrenar los contenidos técnicos de código en preparación a la solemne II y el examen final. 
>
> Cada ejercicio incluye:
> - Un ejemplo funcional
> - Explicación breve de cada código
> - Desafíos interactivos logrados modificando el código base
>

## Contenidos de ejercicios 

- Input continuo
- Variables
- Loops (`for`)
- Condicionales (`if`)
- Funciones propias
- Uso de `map()`
- Uso de `random()`
- Sistemas visuales dinámicos
- Interactividad general

---

# 🟢 Ejercicio 1 — Input en combinación con `map()`

## Tema
Transformar un input continuo en un cambio visual.

## Código base

```javascript
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(240);

  // map transforma mouseX en un tamaño
  let tamano = map(mouseX, 0, width, 20, 200);

  ellipse(width / 2, height / 2, tamano);
}
```

---

## Qué hace este ejemplo

- Usa `mouseX` como input continuo
- Usa la función  `map()` para transformar valores. La [función map](https://p5js.org/examples/calculating-values-map/), como dice su nombre, mapea los valores de un rango a otro. En este caso mapea el valor de mouseX que va de 0 al ancho de la pantalla, entre 20 a 200. 
- El círculo cambia de tamaño según el valor mapeado del mouse. 

---

## Ahora en base a esté código, intenta:

### ✅ Parte 1:
Hacer que el color también cambie usando `mouseY`.

---

### ✅ Parte 2
Agrega un segundo círculo:

- Más pequeño
- En otra posición
- Que también reaccione al mouse

---

### ✅ Parte 3
Haz que:

- Mientras más abajo esté el mouse más transparente sea el círculo

---

# 🟡 Ejercicio 2 — Loops (`for`)

## Tema
Repetición y sistemas.

---

## Código base

```javascript
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(240);

  // loop que repite círculos
  for (let x = 50; x < width; x += 50) {
    ellipse(x, height / 2, 30);
  }
}
```

---

## Qué hace este ejemplo

- Usa un loop `for`
- Repite una misma instrucción muchas veces
- Construye una estructura visual repetitiva

---

## Ahora haz esto

### ✅ Parte 1
Usa `mouseX` para cambiar:

- el tamaño de los círculos
- o la separación entre círculos

---

### ✅ Parte 2
Convierte la fila en una grilla:

- Agregar un segundo loop (nested loop)
- Usar variables `x` e `y`

---

### ✅ Parte 3
Haz que:

- algunas formas sean círculos
- otras cuadrados
- Usa un condicional `if`.

---

# 🟠 Ejercicio 3 — Condicionales (`if`)

## Tema
Construir reglas.

---

## Código base

```javascript
function setup() {
  createCanvas(600, 400);
  rectMode(CENTER);
}

function draw() {
  background(240);

  // regla visual
  if (mouseX < width / 2) {
    ellipse(width / 2, height / 2, 120);
  } else {
    rect(width / 2, height / 2, 120, 120);
  }
}
```

---

## Qué hace este ejemplo

- Usa una condición
- El sistema toma decisiones
- Cambia comportamiento según input

---

## Ahora haz esto

### ✅ Parte 1
Haz que:

- izquierda → círculo rojo
- derecha → cuadrado azul

---

### ✅ Parte 2
Agrega otra condición:

- arriba → formas pequeñas
- abajo → formas grandes

---

### ✅ Parte 3
Haz que aparezca una tercera forma.

Ejemplo:

- triángulo
- línea
- texto

---

# 🔵 Ejercicio 4 — `random()`

## Tema
Variación y comportamiento generativo.

---

## Código base

```javascript
function setup() {
  createCanvas(600, 400);
  noStroke();
}

function draw() {
  background(240);

  for (let i = 0; i < 100; i++) {

    // posición aleatoria
    let x = random(width);
    let y = random(height);

    // tamaño aleatorio
    let tamano = random(10, 50);

    fill(0, 100, 200, 120);
    ellipse(x, y, tamano);
  }
}
```

---

## Qué hace este ejemplo

- Usa la función `random()`. La [función random()](https://p5js.org/reference/p5/random/)en p5.js es una herramienta fundamental utilizada para generar números aleatorios entre un mínimo y un máximo, o en este ejemplo entre 0 y un valor determinado por variables como width y height. 
- Cada frame produce una composición distinta
- El resultado nunca es idéntico

---

## Ahora haz esto

### ✅ Parte 1
Haz que el color también sea aleatorio.

---

### ✅ Parte 2
Usa un condicional:

- círculos grandes → color rojo
- círculos pequeños → color negro

---

### ✅ Parte 3
Haz que:

- el mouse controle la cantidad de círculos

Usa `map()`.

---

# 🟣 Ejercicio 5 — Funciones

## Tema
Organizar sistemas usando funciones.

---

## Código base

```javascript
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(240);

  dibujarForma(150, 200);
  dibujarForma(300, 200);
  dibujarForma(450, 200);
}

// función propia
function dibujarForma(x, y) {
  ellipse(x, y, 80);
}
```

---

## Qué hace este ejemplo

- Usa una función propia
- Evita repetir código
- Encapsula comportamiento

---

## Ahora haz esto

### ✅ Parte 1
Haz que la función dibuje:

- más de una forma
- o una composición pequeña

---

### ✅ Parte 2
Haz que la función use:

- color
- tamaño
- rotación

---

### ✅ Parte 3
Agrega parámetros nuevos.

Ejemplo:

```javascript
function dibujarForma(x, y, tamano, color)
```

---

# 🔴 Ejercicio 6 — Sistema completo

## Tema
Combinar todos los contenidos.

---

## Código base

```javascript
let columnas = 10;
let filas = 10;
let espaciado;

function setup() {
  createCanvas(600, 600);
  espaciado = width / columnas;
  rectMode(CENTER);
}

function draw() {
  background(240);

  for (let i = 0; i < columnas; i++) {
    for (let j = 0; j < filas; j++) {

      let x = i * espaciado + espaciado / 2;
      let y = j * espaciado + espaciado / 2;

      dibujarCelda(x, y);
    }
  }
}

function dibujarCelda(x, y) {

  let tamano = map(mouseX, 0, width, 10, espaciado);

  let colorValor = map(mouseY, 0, height, 50, 255);

  let variacion = random(1);

  push();
  translate(x, y);

  if (variacion > 0.5) {
    fill(colorValor, 100, 150);
    rect(0, 0, tamano, tamano);
  } else {
    fill(50, colorValor, 200);
    ellipse(0, 0, tamano);
  }

  pop();
}
```

---

## Qué hace este ejemplo

Este sistema combina:

- loops
- condicionales
- función propia
- `map()`
- `random()`
- input continuo
- output dinámico

---

## Ahora haz esto

### ✅ Parte 1
Modificar:

- colores
- formas
- cantidad de elementos

---

### ✅ Parte 2
Agregar:

- rotación
- texto
- transparencia
- movimiento

---

### ✅ Parte 3
Relacionar el sistema con un referente visual.

Ejemplos:

- Bauhaus
- Op Art
- videojuegos
- diseño de interfaces
- visualización de datos

---

# 💡 Recomendación

No intenten hacer una “obra final” inmediatamente.

Primero:

- practicar sistemas pequeños
- entender cómo funciona cada herramienta
- experimentar con reglas
- combinar procesos

👉 Programar sistemas visuales significa construir comportamientos, no solamente dibujar formas.
