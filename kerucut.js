const prompt = require("prompt-sync")({ sigint: true });

let jari = Number(prompt('Masukan jari-jari :'));
let tinggi = Number(prompt('Masukan tinggi :'));
let garisPelukis = Number(prompt('Masukan garis pelukis :'));

let volume = (1/3) * Math.PI * (jari ** 2) * tinggi;
let luas = Math.PI * jari * (jari + garisPelukis);
let keliling = 2 * Math.PI * jari;

console.log("=========");
console.log("   HASIL   ");
console.log("=========");

console.log(
`Volume Kerucut\t\t: ${volume.toFixed(2)} cm3
Luas Permukaan Kerucut\t: ${luas.toFixed(2)} cm2
Keliling Alas Kerucut\t: ${keliling.toFixed(2)} cm`
);