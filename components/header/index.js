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
    <h1>nazirutha.</h1>

    <nav>
      <a href="/">home</a>
      <a href="/">about</a>
      <a href="/">contact</a>
    </nav>
  </Header>
)
