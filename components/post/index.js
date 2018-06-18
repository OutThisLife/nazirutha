import styled from 'styled-components'
import marked from 'marked'

import Snippet from './snippet'

const Article = styled.article`
  align-items: flex-start;

  > h2 {
    grid-column: 1 / -1;
    text-transform: capitalize;
    margin-bottom: 1.25vmax;

    @media (max-width: 767px) {
      margin: 1.25vmax auto;
    }
  }

  > div {
    grid-column: 1 / -1;
  }
`

const Post = ({ content, data: { title }, ...props }) => (
  <Article {...props}>
    <h2>{title}</h2>
    <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
  </Article>
)

Post.Snippet = Snippet

export default Post
