const prompt = require('prompt-sync')({sigint: true});
let alas = Number(prompt('Masukan alas : '))
let tinggi = Number(prompt('Masukan tinggi : '))
let sclubung = Number(prompt('Masukan sclubung : '))

let Volume = 1/3 * alas * tinggi
let Luas = alas * sclubung

console.log('===============')
console.log('   H A S I L   ')
console.log('---------------')


console.log(`Volume limas\t: ${Volume.toFixed(2)} cm `)
console.log(`Luas limas\t: ${Luas.toFixed(2)} cm `)