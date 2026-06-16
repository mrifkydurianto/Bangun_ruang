const prompt = require('prompt-sync')({sigint: true});
let sisi = Number(prompt('Masukan sisi'));
let luas = sisi * sisi;
let keliling = 4*sisi;

console.log("=========")
console.log("   HASIL   ")
console.log("=========")

console.log(
`Luas Persegi\t\t: ${ luas.toFixed(2) } cm2
Keliling Persegi\t: ${keliling.toFixed(2)} cm`);