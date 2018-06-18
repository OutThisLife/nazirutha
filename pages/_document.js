import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const page = ctx.renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    const initialProps = await Document.getInitialProps(ctx)

    return { styleTags, ...page, ...initialProps }
  }

  render() {
    const { styleTags } = this.props

    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />

          <title>Nazirutha</title>
          <meta name="robots" content="nodinex" />

          <script src="//cdn.polyfill.io/v2/polyfill.min.js" />
          <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/modern-normalize@0.4.0/modern-normalize.min.css" />
          <link rel="stylesheet" href="/static/style.css" />

          {styleTags}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
