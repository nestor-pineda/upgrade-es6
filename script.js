// #1: Arrows
// Crea una arrow function que tenga dos parametros a y b y que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre  por consola la suma de los dos parametros.
// 1.1 Ejecuta esta función sin pasar ningún parametro
let myFunction1 = (a = 10, b = 5) => {
  return a + b;
};

console.log(myFunction1()); // Devuelve 15

// 1.2 Ejecuta esta función pasando un solo parametro

console.log(myFunction1(2)); // Devuelve 7

// 1.3 Ejecuta esta función pasando dos parametros

console.log(myFunction1(2, 2)); // Devuelve 4
