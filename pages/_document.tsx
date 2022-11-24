import React from 'react'
import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      const res : any = {
        ...initialProps,
        styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
        )
      }
      return res
    } finally {
      sheet.seal()
    }
  }

  // eslint-disable-next-line no-undef
  render(): JSX.Element {
    return (
            <Html lang="pt">
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="icon" href="images/logos/favicon.ico" />
                    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600&display=swap" rel="stylesheet"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
    )
  }
}
