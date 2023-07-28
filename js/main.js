









/* ALGORITMO CON UNA CONDICIONAL */

const respuesta = prompt("¿Te subscribiste a nuestro RASH SPORTS PREMIUM? (Responde 'si' o 'no')")

/* Condicional para verificar la respuesta del usuario */ 
if (respuesta === 'si') {
    alert("¡Felicidades! ERES PARTE DEL RASH SPORTS PREMIUM.");
} else if (respuesta === 'no') {
    alert("¡Subscribite al PREMIUM para obtener ofertas por tan solo $200 mensuales!");
} else {
    alert("Respuesta invalida. Por favor responde 'si' o 'no'.");
    
}