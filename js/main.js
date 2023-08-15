
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





