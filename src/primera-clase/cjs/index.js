// El comando console.log() es una variable global de NodeJS
console.log('Hola mundo, iniciando en NodeJS')

// Tenemos una variable global tanto de Node como el navegador
console.log(globalThis)

// Console es una variable global de GLOBALTHIS
globalThis.console.log('Es una variable global de globalThis')

// Recuperando el módulo
const { sumar } = require('./sumar.js')

const resultado = sumar(1, 2)

console.log(resultado)
