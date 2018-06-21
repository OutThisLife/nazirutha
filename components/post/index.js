import marked from 'marked'

import { Page } from '../../pages/_layout'
import Share from '../share'

import Avatar from '../avatar'
import Snippet from './snippet'

const Article = Page.withComponent('article').extend`
hgroup h2 {

    vertical-align: baseline;
}
  hgroup > div {
    display: flex;
    align-items: center;
    font-size: var(--sm);
    line-height: 1.8;
    margin: -0.2vmax auto 2vmax;
    padding: 0.8vmax;
    border: solid rgb(var(--border));
    border-width: 1px 0;

    aside {
      text-align: right;
      line-height: 1.5;
      margin-left: auto;
    }
  }
`

const Post = ({ content = '', data: { title } = {}, ...props }) => (
  <Article {...props}>
    <hgroup>
      <h2>{title}</h2>

      <div>
        <Avatar />

        <aside>
          <div>views : 12000</div>
          <Share href="https://twitter.com/intent/tweet?text=%desc%%href%" data-width="550" data-height="235">
            shares : 12000
          </Share>
        </aside>
      </div>
    </hgroup>

    <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
  </Article>
)

Post.Snippet = Snippet

export default Post
