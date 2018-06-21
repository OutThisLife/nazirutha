import { compose, withHandlers, pure } from 'recompose'

export default compose(
  withHandlers(() => ({
    open: () => ({ href, w, h }) => {
      if (href && !window.open(href, null, `width=${w}, height=${h}`)) {
        const $a = document.createElement('a')
        const dispatch = document.createEvent('HTMLEvents')

        $a.target = '_blank'
        $a.href = `${href}?width=${w}&height=${h}`

        dispatch.initEvent('click', true, true)
        $a.dispatchEvent(dispatch)
      }
    }
  })),
  withHandlers(
    () => ({
      handleClick: ({ open }) => e => {
        e.preventDefault()

        const {
          dataset: { width = 500, height = 296 },
          href = ''
        } = e.currentTarget

        const getMeta = key => document.querySelector(`meta[property='${key}']`).getAttribute('content')
        const cleanHref = href
          .replace('%title%', getMeta('og:title'))
          .replace('%desc%', encodeURIComponent(getMeta('og:description')))
          .replace('%href%', location.href)

        open({
          href: cleanHref,
          w: width,
          h: height
        })
      }
    }),
    pure
  )
)(({ open, handleClick, ...props }) => <a onClick={e => handleClick(e)} {...props} />)
