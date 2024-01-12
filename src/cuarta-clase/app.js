import express from 'express'
import cors from 'cors'
import { moviesRouter } from './routes/movies.js'

const app = express()

// Middleware
app.disable('x-powered-by')
app.use(express.json())
app.use(cors())

// Rutas
app.use('/movies', moviesRouter)

// Escuchar la aplicacion
const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`Corriendo en http://localhost:${PORT}`)
})
