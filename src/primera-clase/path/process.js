// Argumentos de entrada

// console.log(process.argv)

// controlar el proceso y su salida
// process.exit(0)

// Podemos conntrolar eventos del proceso
process.on('exit', () => {
  // Limpiar los recursos, etc
})

// Desde que carpeta se esta ejecutando el proceso
console.log(process.cwd())

// plataforma
console.log(process.env.SALUDO)
