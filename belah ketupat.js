const prompt = require("prompt-sync")({ sigint: true });

let diagonal1 = Number(prompt('Masukan diagonal 1 :'));
let diagonal2 = Number(prompt('Masukan diagonal 2 :'));
let sisi = Number(prompt('Masukan sisi :'));

let luas = 0.5 * diagonal1 * diagonal2;
let keliling = 4 * sisi;

console.log("=========");
console.log("   HASIL   ");
console.log("=========");

console.log(
`Luas Belah Ketupat\t: ${luas.toFixed(2)} cm2
Keliling Belah Ketupat\t: ${keliling.toFixed(2)} cm`
);