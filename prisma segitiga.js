const prompt = require("prompt-sync")({ sigint: true })
let alas = Number(prompt('Masukan alas segitiga: '))
let tinggiSegitiga = Number(prompt('Masukan tinggi segitiga: '))
let tinggiPrisma = Number(prompt('Masukan tinggi prisma: '))

let sisi1 = Number(prompt('Masukan sisi 1: '))
let sisi2 = Number(prompt('Masukan sisi 2: '))
let sisi3 = Number(prompt('Masukan sisi 3: '))


let luasAlas = alas * tinggiSegitiga / 2
let kelilingAlas = sisi1 + sisi2 + sisi3

let volume = luasAlas * tinggiPrisma
let luasPermukaan = (2 * luasAlas) + (kelilingAlas * tinggiPrisma)

console.log("========================")
console.log("         HASIL          ")
console.log("========================")

console.log(`Volume prisma segitiga\t: ${volume.toFixed(2)} cm3`)
console.log(`Luas permukaan prisma segitiga\t: ${luasPermukaan.toFixed(2)} cm2`)