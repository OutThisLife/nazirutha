import Head from 'next/head'
import styled from 'styled-components'

import Header from '../components/header'
import Main from '../components/main'
import Footer from '../components/footer'

export const Page = styled.div`
  grid-column: var(--inner-col) / calc(var(--inner-col) * -1);
  display: block;
  padding: 4vmax 0;

  hgroup {
    margin: 0 0 1.6vmax;

    @media (max-width: 767px) {
      margin: 1.6vmax auto;
    }

    h2 {
      display: inline;
      color: rgb(var(--bg));
      background: rgb(var(--color));
      text-shadow: none;
      margin: 0;

      > a:not(:active) {
        color: initial;
        background: rgb(var(--bg));
      }
    }
  }
`

export default C => props => (
  <>
    {props.single ? (
      <Head>
        <title>{props.single.data.title.toLowerCase()} | nazirutha</title>
        <meta property="og:title" content={props.single.data.title || ''} />
        <meta property="og:description" content={props.single.data.excerpt || ''} />
      </Head>
    ) : (
      <Head>
        <title>{props.title ? `${props.title.toLowerCase()} | nazirutha` : `nazirutha`}</title>
      </Head>
    )}

    <Header />

    <Main>
      <C {...props} />
    </Main>

    <Footer />
  </>
)
