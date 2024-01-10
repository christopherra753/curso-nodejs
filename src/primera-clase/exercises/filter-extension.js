const fs = require('node:fs/promises')
const path = require('node:path')
const picocolors = require('picocolors')

const listFiles = async (files) => {
  const promisesFiles = files.map(async file => {
    const pathFile = path.join(__dirname, file)
    try {
      const statFile = await fs.stat(pathFile)

      const isDirectory = statFile.isDirectory()
      const typeFile = isDirectory ? 'd' : 'f'
      const sizeFile = statFile.size.toString()
      const modifiedFile = statFile.mtime.toLocaleString()

      return `${picocolors.white(typeFile.padEnd(5))} ${picocolors.blue(file.padEnd(20))} ${picocolors.yellow(sizeFile.padEnd(10))} ${picocolors.green(modifiedFile)}`
    } catch {
      console.error(`Error al leer los stats del archivo ${file}`)
      process.exit(1)
    }
  })

  const finalFiles = await Promise.all(promisesFiles)
  finalFiles.forEach(file => {
    console.log(file)
  })
}

const filterExtension = async (route, extension) => {
  // Primero obtenemos la ruta total del directorio
  const directoryPath = path.join(__dirname, route)

  // Segundo hay que leer todos los archivos del directorio
  try {
    const files = await fs.readdir(directoryPath)

    const filteredFiles = files.filter(file => {
      const extensionFile = path.extname(file)
      return extensionFile === extension
    })

    return filteredFiles
  } catch (error) {
    console.error(picocolors.red('Hubo problemas al leer el directorio'))
    process.exit(1)
  }
}

filterExtension('./', '.txt')
  .then(files => {
    listFiles(files)
  })
