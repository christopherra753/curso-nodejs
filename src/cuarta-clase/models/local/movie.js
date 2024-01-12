import { fileURLToPath } from 'url'
import fs from 'node:fs'
import path from 'path'
import { randomUUID } from 'node:crypto'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const jsonPath = path.join(__dirname, '../../movies.json')
const movies = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'))

export class MovieModel {
  static getAll = async ({ genre }) => {
    if (genre) {
      return movies.filter(
        movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
      )
    }
    return movies
  }

  static getById = async ({ id }) => {
    const movie = movies.find(movie => movie.id === id)
    return movie
  }

  static create = async ({ input }) => {
    const newMovie = {
      id: randomUUID(),
      ...input
    }
    movies.push(newMovie)
    return newMovie
  }

  static delete = async ({ id }) => {
    const movieIndex = movies.findIndex(movie => movie.id === id)
    if (movieIndex === -1) return false

    movies.splice(movieIndex, 1)
    return true
  }

  static update = async ({ id, input }) => {
    const movieIndex = movies.findIndex(movie => movie.id === id)
    if (movieIndex === -1) return false

    movies[movieIndex] = {
      ...movies[movieIndex],
      ...input
    }

    return movies[movieIndex]
  }
}
