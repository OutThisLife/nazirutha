import styled from 'styled-components'
import faker from 'faker'
import Link from 'next/link'

const Article = styled.article`
  align-items: center;

  &:not(:only-child) {
    padding: 3vmax 0;
    border-bottom: 1px solid rgba(var(--color), 0.02);
  }

  hgroup {
    grid-column: 1 / -1;
    margin-bottom: 1.25vmax;

    @media (max-width: 767px) {
      margin: 1.25vmax auto;
    }

    h2 {
      text-transform: capitalize;
      margin: 0 0 0.2vmax;
    }
  }

  figure {
    grid-column: 1 / 10;

    @media (max-width: 767px) {
      grid-row: 1;
      grid-column: 1 / -1;
    }

    img {
      vertical-align: middle;
    }
  }

  figcaption {
    grid-column: 10 / -1;

    @media (min-width: 767px) {
      padding-left: 1.25vmax;
    }

    @media (max-width: 767px) {
      grid-column: 1 / -1;
    }

    p {
      margin: 0;

      + p {
        margin-top: 1.7em;
      }
    }
  }
`

export default ({ title, copy, img, ...props }) => (
  <Article {...props}>
    <hgroup>
      <h2>
        <Link href="/?slug=test-post" as="/test-post" prefetch>
          <a>{faker.lorem.sentence()}</a>
        </Link>
      </h2>
    </hgroup>

    <figure>
      <Link href="/?slug=test-post" as="/test-post">
        <a>
          <img src="//picsum.photos/500/300/?random" alt="" />
        </a>
      </Link>
    </figure>

    <figcaption>
      <p>{faker.lorem.paragraphs(1)}</p>
    </figcaption>
  </Article>
)
