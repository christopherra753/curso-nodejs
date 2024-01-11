const http = require('node:http')

const dittoJson = require('../pokemon/ditto.json')

const server = http.createServer((req, res) => {
  const { method, url } = req

  switch (method) {
    case 'GET':
      switch (url) {
        case '/':
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.end('<h1>Mi Página principal</h1>')
          break
        case '/about':
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.end('<h1>Todo sobre mí</h1>')
          break
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(dittoJson))
          break
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.end('<h1>Esta página no existe</h1>')
          break
      }
      break

    case 'POST':
      switch (url) {
        case '/pokemon': {
          let body = ''

          // Escuchar el evento data
          req.on('data', chunk => {
            body += chunk.toString()
          })

          req.on('end', () => {
            const data = JSON.parse(body)
            res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' })
            res.end(JSON.stringify(data))
          })
          break
        }
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/plain; charset=utf-8')
          res.end('404')
          break
      }
      break
  }
})

server.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000')
})
