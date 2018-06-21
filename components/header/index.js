import Link from 'next/link'
import styled from 'styled-components'

const Header = styled.header`
  padding: 1.2vmax 0;
  background: rgba(var(--color), 0.02);

  > div {
    grid-column: 3 / -3;
    display: inherit;
    grid-template-columns: inherit;
    align-items: center;
  }

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
    <div>
      <h1>
        <Link href="/">
          <a>nazirutha.</a>
        </Link>
      </h1>

      <nav>
        <Link href="/about">
          <a>about</a>
        </Link>

        <a href="mailto:aisa@nazirutha.com" target="_blank">
          contact
        </a>

        <a href={donateLink()} target="_blank" rel="noopener noreferrer">
          donate
        </a>
      </nav>
    </div>
  </Header>
)

const donateLink = () => {
  const sources = ['https://secure2.wish.org/site/SPageServer?pagename=donate_now&chid=100-000&chapterid=015-000']
  return sources[Math.floor(Math.random() * sources.length)]
}
