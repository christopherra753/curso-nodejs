const http = require('node:http')

const server = http.createServer((req, res) => {
  console.log('Peticion recibida')
  res.end('Hola mundo')
})

server.listen(3000, () => {
  console.log('Server corriendo en el puerto 3000')
})
