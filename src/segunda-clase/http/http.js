const http = require('node:http')
const fs = require('node:fs')
const path = require('node:path')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('Bievenido a mi página de inicio')
  } else if (req.url === '/contacto') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('Bievenido a la página de contacto')
  } else if (req.url === '/mi-foto.jpg') {
    const imagePath = path.join(__dirname, 'foto.jpg')
    fs.readFile(imagePath, (err, data) => {
      res.setHeader('Content-Type', 'text/plain; charset=utf-8')
      if (err) {
        res.statusCode = 500
        res.end('Error 500')
      } else {
        res.setHeader('Content-Type', 'image/jpg')
        res.statusCode = 200
        res.end(data)
      }
    })
  } else {
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('404')
  }
})

server.listen(3000, () => {
  console.log('Server corriendo en el puerto 3000')
})
