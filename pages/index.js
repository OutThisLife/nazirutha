import { Fragment } from 'react'

import Header from '../components/header'
import Main from '../components/main'
import Footer from '../components/footer'

import Article from '../components/article'

export default () => (
  <Fragment>
    <Header />

    <Main>{[...Array(20).keys()].map(i => <Article key={i} />)}</Main>

    <Footer />
  </Fragment>
)
