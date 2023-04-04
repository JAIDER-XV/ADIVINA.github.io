var minimo = 1;
var maximo = 100;
var intentos = 0;
var medio;

function empezar() {
  medio = Math.floor((minimo + maximo) / 2);
  document.getElementById("medio").innerHTML = medio;
  document.getElementById("resultado").style.display = "block";
}

function mayor() {
  minimo = medio + 1;
  medio = Math.floor((minimo + maximo) / 2);
  document.getElementById("medio").innerHTML = medio;
  intentos++;
}

function menor() {
  maximo = medio - 1;
  medio = Math.floor((minimo + maximo) / 2);
  document.getElementById("medio").innerHTML = medio;
  intentos++;
}

function igual() {
  intentos++;
  document.getElementById("resultado").innerHTML = "¡Adiviné tu número en " + intentos + " intentos!";
}
