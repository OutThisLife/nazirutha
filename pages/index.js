import { PureComponent, Fragment } from 'react'
import dynamic from 'next/dynamic'
import fetch from 'isomorphic-fetch'
import matter from 'gray-matter'
import marked from 'marked'

import Header from '../components/header'
import Main from '../components/main'
import Footer from '../components/footer'

const Excerpt = dynamic(import('../components/excerpt'))
const Article = dynamic(import('../components/article'))

let json

export default class Index extends PureComponent {
  static async getInitialProps({ req, query }) {
    if (req) {
      json = await (await fetch(`http://${req.headers.host}/api/posts`, { method: 'GET' })).json()
    }

    return { query, posts: json.data || [] }
  }

  render() {
    const { query, posts = [] } = this.props

    return (
      <Fragment>
        <Header />

        {'slug' in query ? (
          <Main>
            <Article {...this.props} />
          </Main>
        ) : (
          <Main>{posts.map(p => <Excerpt key={Math.random()} {...p} />)}</Main>
        )}

        <Footer />
      </Fragment>
    )
  }
}
