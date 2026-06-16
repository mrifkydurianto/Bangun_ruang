const prompt = require("prompt-sync")({ sigint: true });

let jari = Number(prompt('Masukan jari-jari :'));

let volume = (4/3) * Math.PI * (jari ** 3);
let luas = 4 * Math.PI * (jari ** 2);

console.log("=========");
console.log("   HASIL   ");
console.log("=========");

console.log(
`Volume Bola\t\t: ${volume.toFixed(2)} cm3
Luas Permukaan Bola\t: ${luas.toFixed(2)} cm2`
);