const prompt = require("prompt-sync")({ sigint: true });

let sisiAtas = Number(prompt('Masukan sisi atas :'));
let sisiBawah = Number(prompt('Masukan sisi bawah :'));
let tinggi = Number(prompt('Masukan tinggi :'));
let sisiMiring1 = Number(prompt('Masukan sisi miring 1 :'));
let sisiMiring2 = Number(prompt('Masukan sisi miring 2 :'));

let luas = 0.5 * (sisiAtas + sisiBawah) * tinggi;
let keliling = sisiAtas + sisiBawah + sisiMiring1 + sisiMiring2;

console.log("=========");
console.log("   HASIL   ");
console.log("=========");

console.log(
`Luas Trapesium\t\t: ${luas.toFixed(2)} cm2
Keliling Trapesium\t: ${keliling.toFixed(2)} cm`
);