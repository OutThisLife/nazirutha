import { Fragment } from 'react'

import Header from '../components/header'
import Main from '../components/main'
import Footer from '../components/footer'

export default () => (
  <Fragment>
    <Header />

    <Main>
      <div style={{ gridColumn: '1 / -1', textAlign: 'center' }}>404</div>
    </Main>

    <Footer />
  </Fragment>
)
