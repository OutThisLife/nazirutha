import { compose, setStatic, pure } from 'recompose'
import fetch from 'isomorphic-fetch'
import cache from 'memory-cache'

import withLayout from './_layout'

import Post from '../components/post'

const isDev = process.env.NODE_ENV !== 'production'
const port = parseInt(process.env.PORT, 10) || 3000

export default compose(
  setStatic('getInitialProps', async ({ query }) => {
    if (isDev) {
      cache.clear()
    }

    if (!cache.get('posts')) {
      const json = await (await fetch(`http://localhost:${port}/api/posts`, { method: 'GET' })).json()
      cache.put('posts', JSON.stringify(json))
    }

    const posts = JSON.parse(cache.get('posts'))
    const single = 'slug' in query && posts.find(({ data }) => query.slug === data.slug)

    return { query, single, posts }
  }),
  withLayout,
  pure
)(
  ({ single = {}, posts = [] }) =>
    single ? <Post {...single} /> : <>{posts.map(post => <Post.Snippet key={post.data.slug} {...post} />)}</>
)
