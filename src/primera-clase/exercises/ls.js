const fs = require('node:fs/promises')
const path = require('node:path')
const picocolors = require('picocolors')

const ls = async (folder) => {
  try {
    const files = await fs.readdir(folder)
    const filesPromises = files.map(async file => {
      // Paralelo
      const filePath = path.join(folder, file)
      try {
        const stat = await fs.stat(filePath)

        const isDirectory = stat.isDirectory()
        const typeFile = isDirectory ? 'd' : 'f'
        const sizeFile = stat.size.toString()
        const modifiedFile = stat.mtime.toLocaleString()

        return `${picocolors.white(typeFile.padEnd(5))} ${picocolors.blue(file.padEnd(20))} ${picocolors.yellow(sizeFile.padEnd(10))} ${picocolors.green(modifiedFile)}`
      } catch {
        console.error(picocolors.red('Hubo un error al leer los stats del archivo o directorio'))
        process.exit(1)
      }
    })
    const finalFiles = await Promise.all(filesPromises)

    finalFiles.forEach(file => {
      console.log(file)
    })
  } catch (error) {
    console.error(picocolors.red('Error al leer el directorio'))
    process.exit(1)
  }
}

const folder = process.argv[2] ?? '.'

ls(folder)
