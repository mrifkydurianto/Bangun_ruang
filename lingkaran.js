const prompt = require('prompt-sync')({sigint: true});
let jari = Number(prompt('Masukan jari jari : '))

let luas = 3.14 * Math.pow(jari, 2)
let keliling = 2 * 3.14 * jari

console.log('===============')
console.log('    H A S I L  ')
console.log('---------------')

console.log(
    `luas keliling\t: ${luas.toFixed(2)} cm
    keliling lingkaran\t: ${keliling.toFixed(2)} cm `)