import { compose, withProps, pure } from 'recompose'
import withLayout, { Page } from './_layout'

export default compose(
  withProps({ title: 'About' }),
  withLayout,
  pure
)(() => (
  <Page>
    <hgroup>
      <h2>about</h2>
    </hgroup>

    <div>
      <p>lorem ipsum dolar sit amet</p>
    </div>
  </Page>
))
