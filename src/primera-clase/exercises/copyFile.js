const fs = require('node:fs/promises')
const path = require('node:path')

const securityCopy = async (routeOrigin, routeDestinity) => {
  const originFilePath = path.join(__dirname, routeOrigin)
  const destinityFilePath = path.join(__dirname, routeDestinity)
  let originIsDirectory = false
  let destinityIsDirectory = false
  try {
    const statOrigin = await fs.stat(originFilePath)
    const statDestinity = await fs.stat(destinityFilePath)
    originIsDirectory = statOrigin.isDirectory()
    destinityIsDirectory = statDestinity.isDirectory()
  } catch (error) {
    console.error('Error al sacar los stats del archivo', error)
    process.exit(1)
  }

  if (!originIsDirectory && destinityIsDirectory) {
    try {
      const extension = path.extname(routeOrigin)
      const filename = path.basename(routeOrigin, extension)
      const fileCopy = `${filename}-copy${extension}`
      const pathFinal = path.join(destinityFilePath, fileCopy)
      const fileData = await fs.readFile(originFilePath, 'utf-8')
      await fs.writeFile(pathFinal, fileData, 'utf-8')
    } catch (error) {
      console.log('Error al leer el contenido del archivo')
    }
  } else {
    console.log('Algo anda mal!!')
  }
}

const routeOrigin = process.argv[2]
const routeDestinity = process.argv[3]

securityCopy(routeOrigin, routeDestinity)
