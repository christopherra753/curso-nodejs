const os = require('node:os')

console.log('Información del sistema operativo')
console.log('---------------------------------')

// Nombre del sistema operativo
console.log(`Nombre del sistema operativo: ${os.platform()}`)

// Version del sistema operativo
console.log(`Version del sistema operativo ${os.release()}`)

// Arquitectura del sistema operativo
console.log(`Arquitectura : ${os.arch()}`)

// Numero de CPUS
console.log('CPUs: ', os.cpus())

// Memoria libre
console.log(`Memoria libre ${os.freemem() / 1024 / 1024}`)

// Memoria total
console.log(`Memoria total ${os.totalmem() / 1024 / 1024}`)

// Saber cuanto lleva tu ordenador encendido
console.log(`Uptime: ${os.uptime() / 60 / 60}`)
