const path = require('path')
const { promisify } = require('util')
const matter = require('gray-matter')
const fs = require('fs')

const readdir = promisify(fs.readdir)
const readFile = promisify(fs.readFile)
const dir = path.join(__dirname, 'posts')

async function fetch() {
  return Promise.resolve(
    (await readdir(dir)).map(async file => {
      const str = await readFile(path.join(dir, file), 'utf-8')
      return matter(str)
    })
  )
}

exports.fetch = fetch
