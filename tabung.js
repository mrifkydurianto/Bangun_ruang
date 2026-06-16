const prompt = require("prompt-sync")({ sigint: true })
let jariJari = Number(prompt('Masukan jari-jari: '))
let tinggi = Number(prompt('Masukan tinggi: '))

let phi = 3.14
let volume = phi * jariJari * jariJari * tinggi
let luasPermukaan = 2 * phi * jariJari * (jariJari + tinggi)

console.log("========================")
console.log("         HASIL          ")
console.log("========================")

console.log(`Volume tabung\t\t: ${volume.toFixed(2)} cm3`)
console.log(`Luas permukaan tabung\t: ${luasPermukaan.toFixed(2)} cm2`)