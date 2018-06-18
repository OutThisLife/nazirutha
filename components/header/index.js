import Link from 'next/link'
import styled from 'styled-components'

const Header = styled.header`
  align-items: center;

  h1 {
    margin: 0;
  }

  nav {
    grid-column: -1 / auto;

    a {
      font-size: var(--sm);
      text-transform: uppercase;
    }

    a + a {
      margin-left: 2vw;
    }
  }
`

export default () => (
  <Header>
    <h1>
      <Link href="/">nazirutha.</Link>
    </h1>

    <nav>
      <Link href="/">
        <a>home</a>
      </Link>

      <Link href="/">
        <a>about</a>
      </Link>

      <Link href="/">
        <a>contact</a>
      </Link>
    </nav>
  </Header>
)
