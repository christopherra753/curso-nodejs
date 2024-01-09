const fs = require('node:fs')
const path = require('path')

const filePath = path.join(__dirname, 'archivo.txt')

const stats = fs.statSync(filePath)

// Es un fichero
console.log('¿Es un fichero?')
console.log(stats.isFile())

// Es un directorio
console.log('¿Es un directorio?')
console.log(stats.isDirectory())

// Si es un enlace simbólico
console.log('¿Es un enlace simbólico?')
console.log(stats.isSymbolicLink())

// Tamaño en bytes
console.log('Tamaño en bytes')
console.log(stats.size)
