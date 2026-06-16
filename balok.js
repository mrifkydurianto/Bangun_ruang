const prompt = require('prompt-sync')({sigint: true});
let panjang = Number(prompt('Masukan Panjang : '))
let lebar = Number(prompt('Masukan lebar : '))
let tinggi = Number(prompt('Masukan tinggi : '))

let volume = panjang * lebar * tinggi
let luas = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi)

console.log('===============')
console.log('   H A S I L   ')
console.log('---------------')

console.log(
    `volume balok\t: ${volume.toFixed(2)}
    luas balok\t: ${luas.toFixed(2)}`
)