import Link from 'next/link'

import { Page } from '../../pages/_layout'

const Article = Page.withComponent('article').extend`
  grid-column: var(--inner-col) / calc(var(--inner-col) * -1);
  display: inherit;
  grid-template-columns: inherit;
  align-items: center;

  &:not(:only-child) {
    border-bottom: 1px solid rgb(var(--border));
  }

  hgroup {
    grid-column: 1 / -1;
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
      padding-left: 2vmax;
    }

    @media (max-width: 767px) {
      grid-column: 1 / -1;
    }
  }
`

export default ({ data: { title, slug, excerpt = '' }, ...props }) => (
  <Article {...props}>
    <hgroup>
      <h2>
        <Link href={`/?slug=${slug}`} as={`/${slug}`} prefetch>
          <a>{title}</a>
        </Link>
      </h2>
    </hgroup>

    <figure>
      <Link href={`/?slug=${slug}`} as={`/${slug}`} prefetch>
        <a>
          <img src="//picsum.photos/500/300/?random" alt="" />
        </a>
      </Link>
    </figure>

    <figcaption>
      <p>{excerpt}</p>
    </figcaption>
  </Article>
)
