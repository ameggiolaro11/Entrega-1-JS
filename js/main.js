
/* ALGORITMO CON CICLO */ 

let intentosMaximos = 3;
let intentos = 0;
let usuarioValido = "ameggiolaro";
let contraseñaValida = "123456";
let cuentaBloqueada = false;

while (intentos < intentosMaximos) {
  let usuario = prompt("Ingrese su usuario:");
  let contraseña = prompt("Ingrese su contraseña:");

  if (usuario === usuarioValido && contraseña === contraseñaValida) {
    alert("Inicio de sesión exitoso. ¡Bienvenido a RASH SPORTS!");
    break;
  } else {
    intentos++;
    alert("Credenciales incorrectas. Intentos restantes: " + (intentosMaximos - intentos));
  }
}

if (intentos === intentosMaximos) {
  alert("Has excedido el número máximo de intentos. Tu cuenta ha sido bloqueada.");
  cuentaBloqueada = true;
}


/* ALGORITMO CON UNA CONDICIONAL */
if (!cuentaBloqueada) {
  const respuesta = prompt("¿Te subscribiste a nuestro RASH SPORTS PREMIUM? (Responde 'si' o 'no')")
if (respuesta === 'si') {
  alert("¡Felicidades! ERES PARTE DEL RASH SPORTS PREMIUM.");
} else if (respuesta === 'no') {
  alert("¡Subscribite al PREMIUM para obtener ofertas imperdibles, por tan solo $200 mensuales!");
} else {
  alert("Respuesta invalida. Por favor responde 'si' o 'no'.");
}
}



/* 2DA PRE-ENTREGA */

let productos = [
  {id: 1, nombre: "Botines Mercurial Nike", categoria: "futbol", stock: 16, precio: 25000, material: "Poliester"}
  {id: 2, nombre: "Botines Raptor Adidas", categoria: "futbol", stock: 12, precio: 27500, material: "Gore-tex"}
  {id: 3, nombre: "Botines Total 90 Nike tapones titanio", categoria: "rugby", stock: 10, precio: 15000, material: "Cuero"}
  {id: 4, nombre: "Zapatillas Paddle", categoria: "Paddle", stock: 6, precio: 45000, material: "Caucho"}
  {id: 5, nombre: "Velocity Tenis", categoria: "Tenis", stock: 36, precio: 26700, material: "Poliester"}
  {id: 6, nombre: "Botines Futsal", categoria: "futsal", stock: 6, precio: 15000, material: "Piel sintetica"}
  {id: 7, nombre: "Botines Puma Goity", categoria: "Hockey", stock: 7, precio: 25000, material: "Nailon"}
]

