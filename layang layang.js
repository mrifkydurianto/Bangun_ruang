const prompt = require("prompt-sync")({ sigint: true });

let diagonal1 = Number(prompt('Masukan diagonal 1 :'));
let diagonal2 = Number(prompt('Masukan diagonal 2 :'));
let sisi1 = Number(prompt('Masukan sisi 1 :'));
let sisi2 = Number(prompt('Masukan sisi 2 :'));

let luas = 0.5 * diagonal1 * diagonal2;
let keliling = 2 * (sisi1 + sisi2);

console.log("=========");
console.log("   HASIL   ");
console.log("=========");

console.log(
`Luas Layang-layang\t: ${luas.toFixed(2)} cm2
Keliling Layang-layang\t: ${keliling.toFixed(2)} cm`
);