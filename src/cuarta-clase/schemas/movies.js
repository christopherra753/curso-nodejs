import z from 'zod'

const movieSchema = z.object({
  title: z.string(),
  year: z.number().int().min(1900).max(2024),
  director: z.string(),
  duration: z.number().int().positive(),
  rate: z.number().min(0).max(10).default(5),
  poster: z.string().url(),
  genre: z.array(
    z.enum(['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy,"Crime'])
  )
})

export const validateMovie = (object) => {
  return movieSchema.safeParse(object)
}

export const validatePartialMovie = (objest) => {
  return movieSchema.partial().safeParse(objest)
}
