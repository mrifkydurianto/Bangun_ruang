const prompt = require("prompt-sync")({ sigint: true });

let sisi = Number(prompt('Masukan sisi :'));

let volume = sisi ** 3;
let luas = 6 * (sisi ** 2);
let keliling = 12 * sisi;

console.log("=========");
console.log("   HASIL   ");
console.log("=========");

console.log(
`Volume Kubus\t\t: ${volume.toFixed(2)} cm3
Luas Permukaan Kubus\t: ${luas.toFixed(2)} cm2
Keliling Kubus\t\t: ${keliling.toFixed(2)} cm`
);