const fs = require('node:fs')
const path = require('node:path')

// Vamos a leer el primer archivo
const filePath = path.join(__dirname, 'archivo.txt')

console.log('Leyendo el primer archivo')
fs.readFile(filePath, 'utf-8', (err, text) => {
  console.log(text)
})

// Vamos a leer el segundo archivo

const filePath2 = path.join(__dirname, 'archivo2.txt')

console.log('Leyendo el segundo archivo')
fs.readFile(filePath2, 'utf-8', (err, text2) => {
  console.log(text2)
})
