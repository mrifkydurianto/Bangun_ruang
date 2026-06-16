const prompt = require('prompt-sync')({sigint: true});

let alas = Number(prompt('Masukan alas : '));
let tinggi = Number(prompt('Masukan tinggi : '));
let keliling = alas + tinggi + Math.sqrt(alas*alas + tinggi*tinggi);
let luas = 0.5 * alas * tinggi;

console.log("=========")
console.log("   HASIL   ")
console.log("=========")
console.log(`Luas Segitiga\t\t: ${luas.toFixed(2)} cm2
Keliling Segitiga\t: ${keliling.toFixed(2)} cm`);
