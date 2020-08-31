numberArr = [10, 23, 46, 21, 77, 85, 19, 92, 43, 35];
// bilangan prima

// bilangan habis dibagi 3
let modTiga = [];
for (let i = 0; i < numberArr.length; i++) {
  if (numberArr[i] % 3 == 0) {
    modTiga.push(numberArr[i]);
  }
}
console.log(modTiga);

// bilang yang lebih besar dari 636 jika dikalikan 17
let kaliTujuhBelas = [];
for (let i = 0; i < numberArr.length; i++) {
  let num = numberArr[i] * 17;
  if (num > 636) {
    kaliTujuhBelas.push(num);
  }
}
console.log(kaliTujuhBelas);

// Persegi
let persegiAr = [];
for (let i = 0; i < numberArr.length; i++) {
  nom = numberArr[i] * numberArr[i];
  persegiAr.push(nom);
}
console.log(persegiAr);

// Kubus
let kubusAr = [];
for (let i = 0; i < numberArr.length; i++) {
  nom = numberArr[i] * numberArr[i] * numberArr[i];
  kubusAr.push(nom);
}
console.log(kubusAr);

// Lingkaran
let lingkaranAr = [];
for (let i = 0; i < numberArr.length; i++) {
  nom = numberArr[i] * numberArr[i] * Math.PI;
  lingkaranAr.push(nom);
}
console.log(lingkaranAr);
