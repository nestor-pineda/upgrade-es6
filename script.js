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

// #2: Destructuring
// 2.1 En base al siguiente javascript, crea variables en base a las propiedades del objeto usando object destructuring e imprimelas por consola. Cuidado,  no hace falta hacer destructuring del array, solo del objeto.

const game = { title: "The last us 2", gender: ["action", "zombie", "survival"], year: 2020 };

const { title, gender, year } = game;
console.log(title, gender, year);

// 2.2 En base al siguiente javascript, usa destructuring para crear 3 variables llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente imprimelo por consola.

const fruits = ["Banana", "Strawberry", "Orange"];

const [fruit1, fruit2, fruit3] = fruits;

console.log(fruit1, fruit2, fruit3); // Devuelve Banana Strawberry Orange

// 2.3 En base al siguiente javascript, usa destructuring para crear 2  variables igualandolo a la función e imprimiendolo por consola.

const animalFunction = () => {
  return { name: "Bengal Tiger", race: "Tiger" };
};

let animalName = function ({ name }) {
  return name;
};
let animalRace = function ({ race }) {
  return race;
};

console.log(animalName(animalFunction())); // Devuleve Bengal Tiger
console.log(animalRace(animalFunction())); // Tiger

// 2.4 En base al siguiente javascript, usa destructuring para crear las  variables name y itv con sus respectivos valores. Posteriormente crea  3 variables usando igualmente el destructuring para cada uno de los años  y comprueba que todo esta bien imprimiendolo.

const car = { name: "Mazda 6", itv: [2015, 2011, 2020] };

const { name: mzd, itv: yr } = car;

console.log(mzd); //"Mazda 6"
console.log(yr); //[2015, 2011, 2020]

// #3: Spread Operator
// 3.1 Dado el siguiente array, crea una copia usando spread operators.

const pointsList = [32, 54, 21, 64, 75, 43];
const NewPositionListo = [...pointsList];

// 3.2 Dado el siguiente objeto, crea una copia usando spread operators.

const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const newToys = { ...toy };

// 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.

const pointsList3 = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54, 87, 99, 65, 32];
const pointsList4 = [...pointsList3, ...pointsLis2];

// 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.

const toy2 = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };
const fusionToyUpdate = { ...toy2, ...toyUpdate };

// 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread operatos.

let colors = ["rojo", "azul", "amarillo", "verde", "naranja"];

let colorsShort = [...colors];

for (let i = 0; i < colorsShort.length; i++) {
  if (colorsShort[i] === colorsShort[2]) {
    colorsShort.splice(i, 1);
  }
}
console.log(colorsShort); // ["rojo", "azul", "verde", "naranja"];
