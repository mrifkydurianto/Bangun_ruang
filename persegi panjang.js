const prompt = require("prompt-sync")({sigint : true});
let panjang = Number(prompt('masukan panjang : '))
let lebar = Number(prompt('masukan lebar: '))

let luas = panjang * lebar
let keliling = 2 * luas

console.log('============')
console.log('  H A S I L ')
console.log('------------')

console.log(
    `luas persegi-panjang\t\t: ${luas.toFixed(2)} cm
    keliling\t: ${keliling.toFixed(2)} cm `)