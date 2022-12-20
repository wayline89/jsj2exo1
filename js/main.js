
// # Exercice Math
// 1. let nombre = 8.56

let nombre = 8.56 
console.log(nombre);
// 2.  Arrondir au nombre à l'entier le plus proche

console.log(Math.round(8.56));

// 3.  Arrondir à l'entier vers le haut

console.log(Math.ceil(8.56));

// 4.  Arrondir à l'entier vers le bas

console.log(Math.floor(8.56));

// 5.  Enlever toute la partie décimale

const decimal = 45.67567;
const removedDecimal = Math.trunc(decimal);
console.log(removedDecimal);

// 6.  Afficher un nombre aléatoire entre 0-1

// function randomIntFromInterval(min, max) { // min and max included 
//     return Math.floor(Math.random() * (max - min + 1) + min)
//   }
  
//   const rndInt = randomIntFromInterval(0, 1)
//   console.log(rndInt)

// 7.  Afficher un nombre aléatoire entre 0-100

Math.floor(Math.random() * 101);

// 8.  Afficher un nombre entier aléatoire entre 0-100

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const rndInt = randomIntFromInterval(0, 100)
  console.log(rndInt)

// 9.  Afficher 8 puissance 2

Math.pow(8, 2);
console.log(Math.pow(8, 2));

// 10.  Afficher racine carré de 9

Math.sqrt(9);
console.log(Math.sqrt(9));

// 11. Afficher la valeur absolue de -1

Math.abs(-1);
console.log(Math.abs(-1));

// 12. Afficher la valeur la plus grande parmi -2, 1000, 8, 57

const values = [-2,1000, 8, 57];
values.sort();
let value2 = values.sort();
console.log(value2);

console.log(Math.max(-2, 1000, 8,57));

// 13.  Afficher la valeur la plus petite parmi -2, 1000, 8, 57

console.log(Math.min(-2, 1000, 8,57));


