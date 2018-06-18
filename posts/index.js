const path = require('path')
const { promisify } = require('util')
const matter = require('gray-matter')
const fs = require('fs')

const readdir = promisify(fs.readdir)
const readFile = promisify(fs.readFile)
const dir = path.join(__dirname)

const data = []

module.exports = async () => {
  if (data.length > 0) {
    return data
  }

  const files = await readdir(dir)

  await Promise.all(
    files.filter(file => file.includes('.md')).map(async file => {
      const str = await readFile(path.join(dir, file), 'utf-8')
      const { orig, ...post } = matter(str)

      data.push({
        file,
        ...post
      })
    })
  )

  return Array.from(new Set(data))
}
