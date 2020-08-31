// const { number } = require("mathjs");

numberArr = [10, 23, 456, 21, 77, 85, 19, 92, 43, 35];

// Cara 1
let arrayPrima = numberArr.filter((n) => {
  for (let i = 2; n > i; i++) {
    if (n % i === 0) return false;
  }
  return n > 2;
});
console.log(arrayPrima);

// Cara 2
// let arrayPrima = numberArr.filter((n) => {
//   if (n < 2) return false;
//   for (var i = 2; i < n; i++) {
//     if (n % i == 0) return false;
//   }
//   return true;
// });
// console.log(arrayPrima);

// lebih besar dari 636 dikali 17
let arrayKali = numberArr.filter((n) => n * 17 > 636);
console.log(arrayKali);

/// habis bagi 3
let arrayBagiTiga = numberArr.filter(function (n) {
  return n % 3 === 0;
});
console.log(arrayBagiTiga);

/// volume kubus
let arrayKubus = numberArr.map((n) => n * n * n);
console.log(arrayKubus);

/// volume sisi
let arrayPersegi = numberArr.map((n) => Math.pow(n, 2));
console.log(arrayPersegi);

/// luas lingkaran
let arrayLingkaran = numberArr.map((n) => n * n * Math.PI);
console.log(arrayLingkaran);
