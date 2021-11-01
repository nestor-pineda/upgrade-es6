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

//#4: Map
// 4.1 Dado el siguiente array, devuelve un array con sus nombres utilizando .map().

const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

let usersNames = users.map((names) => names.name);

console.log(usersNames);

// 4.2 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.

const superNames = ["Abel", "Julia", "Pedro", "Amanda"];

/* let usersNamesChange = usersNames.map((names) => {
  for (let i = 0; i < usersNames.length; i++) {
    if (usersNames[i].startsWith("A")) {
      usersNames.replace(names, "Anacleto");
    }
  }
});

console.log(usersNamesChange); */

/* let text = "HELLO WORLD";
let letter = text.charAt(0); */

// 4.3

// #5: Filter
// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const biggerAges = ages.filter((age) => age > 18);

// 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.
const parAges = ages.filter((par) => par % 2 === 0);

// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of Legends'.

const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const newStreamers = streamers.filter((gmp) => {
  return gmp.gameMorePlayed === "League of Legends";
});

// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array  con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos usar la funcion .includes() para la comprobación.

const newStreamersName = streamers.filter((nam) => {
  if (nam.name.includes("u")) {
    return nam.name;
  }
});

// 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan  el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion .includes() para la comprobación. Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35.

const streamersLegend = streamers.filter((legend) => {
  if (legend.gameMorePlayed.includes("Legends")) {
    return legend.gameMorePlayed;
  }
});

// 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola los streamers que incluyan la palabra introducida en el input. De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
let inputText = document.querySelector("input").value;

const myButton = document.querySelector("button");

function myFunction() {
  let x = streamers.filter((input) => {
    if (input.name.includes(inputText)) {
      return input.name;
    }
  });
  console.log(x);
}

myButton.addEventListener("click", myFunction);

// #6: Find
// 6.1 Dado el siguiente array, usa .find() para econtrar el número 100.

const numbers = [32, 21, 63, 95, 100, 67, 43];

const findNumber = numbers.find((n) => n === 100);
console.log(findNumber);

// 6.2 Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.

const movies = [
  { title: "Madagascar", stars: 4.5, date: 2015 },
  { title: "Origen", stars: 5, date: 2010 },
  { title: "Your Name", stars: 5, date: 2016 },
];

const movies2010 = movies.find((movie) => {
  return movie.date === 2010;
});

console.log(movies2010);

// 6.3 Dado el siguiente javascript, usa .find() para econtrar el alien de nombre 'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres, usa spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación lo queremos meter en la propiedad .mutation del objeto fusionado.

const aliens = [
  { name: "Zalamero", planet: "Eden", age: 4029 },
  { name: "Paktu", planet: "Andromeda", age: 32 },
  { name: "Cucushumushu", planet: "Marte", age: 503021 },
];
const mutations = [
  { name: "Porompompero", description: "Hace que el alien pueda adquirir la habilidad de tocar el tambor" },
  { name: "Fly me to the moon", description: "Permite volar, solo y exclusivamente a la luna" },
  { name: "Andando que es gerundio", description: "Invoca a un señor mayor como Personal Trainer" },
];

const findAlien = aliens.find((nombre) => {
  return nombre.name === "Cucushumushu";
});

const findMutation = mutations.find((mut) => {
  return mut.name === "Porompompero";
});

const fusionAlienMutation = {
  ...findAlien,
  mutation: { ...findMutation },
};

console.log(fusionAlienMutation);

// #7: Reduce
// 7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de los alumnos usando la función .reduce().

const exams = [
  { name: "Yuyu Cabeza Crack", score: 5 },
  { name: "Maria Aranda Jimenez", score: 1 },
  { name: "Cristóbal Martínez Lorenzo", score: 6 },
  { name: "Mercedez Regrera Brito", score: 7 },
  { name: "Pamela Anderson", score: 3 },
  { name: "Enrique Perez Lijó", score: 6 },
  { name: "Pedro Benitez Pacheco", score: 8 },
  { name: "Ayumi Hamasaki", score: 4 },
  { name: "Robert Kiyosaki", score: 2 },
  { name: "Keanu Reeves", score: 10 },
];

let sumaNotas = exams.reduce((total, alumno) => {
  return total + alumno.score;
}, 0);

// 7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los alumnos que esten aprobados usando la función .reduce().

const examenesAprobados = exams.filter((notas) => {
  return notas.score >= 5;
});

const sumaNotasExamenesAprobados = examenesAprobados.reduce((total, alumno) => {
  return total + alumno.score;
}, 0);

console.log(sumaNotasExamenesAprobados);

// 7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().

let mediaNotas = sumaNotas / exams.length;

console.log(mediaNotas);
