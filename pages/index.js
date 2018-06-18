import { PureComponent, Fragment } from 'react'
import fetch from 'isomorphic-fetch'
import cache from 'memory-cache'

import Header from '../components/header'
import Main from '../components/main'
import Post from '../components/post'
import Footer from '../components/footer'

export default class Index extends PureComponent {
  static async getInitialProps({ query }) {
    if (!cache.get('posts')) {
      const json = await (await fetch(`http://localhost:3000/api/posts`, { method: 'GET' })).json()
      cache.put('posts', JSON.stringify(json))
    }

    return { query, posts: JSON.parse(cache.get('posts')) }
  }

  render() {
    const { query, posts = [] } = this.props

    return (
      <Fragment>
        <Header />

        {'slug' in query ? (
          <Main>
            <Post {...posts.find(({ data }) => query.slug === data.slug)} />
          </Main>
        ) : (
          <Main style={{ gridAutoRows: 'max-content' }}>
            {posts.map(post => <Post.Snippet key={post.data.slug} {...post} />)}
          </Main>
        )}

        <Footer />
      </Fragment>
    )
  }
}
