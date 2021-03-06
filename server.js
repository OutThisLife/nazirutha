const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const pathMatch = require('path-match')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })
const handle = app.getRequestHandler()
;(async _ => {
  await app.prepare()

  createServer(async (req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl
    const params = pathMatch()('/:slug')(pathname)

    if (pathname.includes('/api/')) {
      const posts = await require('./posts/index')()

      res.writeHead(200, { 'Content-Type': 'application/json' })

      return res.end(JSON.stringify(posts))
    } else if (params && !['about', 'contact'].includes(params.slug) && !/\./.test(params.slug)) {
      return app.render(req, res, '/', Object.assign(params, query))
    }

    return handle(req, res, parsedUrl)
  }).listen(port, err => {
    if (err) {
      throw err
    }

    console.log(`> Ready on http://localhost:${port}`)
  })
})()
