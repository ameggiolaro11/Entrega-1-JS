
/* 1era PRE-ENTREGA */
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
  { id: 1, nombre: "Botines Mercurial Nike", categoria: "futbol", stock: 16, precio: 25000, material: "Poliester" },
  { id: 2, nombre: "Botines Raptor Adidas", categoria: "futbol", stock: 12, precio: 27500, material: "Gore-tex" },
  { id: 3, nombre: "Botines Total 90 Nike tapones titanio", categoria: "rugby", stock: 10, precio: 15000, material: "Cuero" },
  { id: 4, nombre: "Zapatillas Paddle", categoria: "Paddle", stock: 6, precio: 45000, material: "Caucho" },
  { id: 5, nombre: "Velocity Tenis", categoria: "Tenis", stock: 36, precio: 26700, material: "Poliester" },
  { id: 6, nombre: "Botines Futsal", categoria: "futsal", stock: 6, precio: 15000, material: "Piel sintetica" },
  { id: 7, nombre: "Botines Puma Goity", categoria: "Hockey", stock: 7, precio: 25000, material: "Nailon" }
];

function ordenar(listaAOrdenar, ascendente, propiedad) {
  listaAOrdenar.sort((a, b) => {
    if (a[propiedad] > b[propiedad]) {
      return 1
    }
    if (a[propiedad] < b[propiedad]) {
      return -1
    }
    return 0
  })
  if (!ascendente) {
    listaAOrdenar.reverse()
  } 
  return listaAOrdenar
}
console.log(ordenar(productos, true, "precio"))

/* Array carrito */

let carrito = [];
function mostrarListadoProductos() {
console.log("Listado de Productos:");
for (let producto of productos) {
  console.log(`ID: ${producto.id} - Producto: ${producto.nombre} - Precio: $${producto.precio}`);
}
}

let continuarAgregando = true;
while (continuarAgregando) {
  mostrarListadoProductos();

  let opcion = prompt("Ingrese ID del producto que desea agregar al carrito (o 'salir' para finalizar)");

  if (opcion.toLowerCase() === "salir") {
    continuarAgregando = false;
  } else {
    let productoSeleccionado = productos.find(producto => producto.id == opcion);

    if (productoSeleccionado) {
      carrito.push(productoSeleccionado);
      console.log(`Producto agregado al carrito: ${productoSeleccionado.nombre}`);
    } else {
      alert("El producto ingresado no existe");
    }
  }
}

// Calcular el total de los productos en el carrito
let total = 0;
for (let productoCarrito of carrito) {
  total += productoCarrito.precio;
}

// Mostrar contenido final del carrito y el total
if (carrito.length > 0) {
  console.log("Contenido del Carrito:", carrito);
  console.log(`Total del carrito: $${total}`);
} else {
  console.log("El carrito está vacío.");
}

/* FIND */

let productoBuscado = productos.find(producto => producto.id === 4)
console.log(productoBuscado)
alert(productoBuscado.nombre)

/* FILTER & FOR EACH */
let productosMasCaros = productos.filter(producto => producto.precio >20000)
console.log(productosMasCaros)
console.log(productos.length)

let salida = "" 
productosMasCaros.forEach(producto => salida = salida + producto.precio + " " + producto.nombre + " " + producto.material + "\n")
alert(salida)
