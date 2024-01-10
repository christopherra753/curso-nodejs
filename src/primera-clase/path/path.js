const path = require('node:path')

// Barra separadora de carpetas segun SO
console.log(path.sep)

// Unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'text.txt')
console.log(filePath)

const base = path.basename('/tmp/midu-secret-files/password.txt')
console.log(base)

const filename = path.basename('/tmp/midu-secret-files/password.txt', '.txt')
console.log(filename)

// Extension definitiva que hay al final
const extension = path.extname('image.jpg')
console.log(extension)
