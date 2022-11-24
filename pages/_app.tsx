import type { AppProps } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
// Config
import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'
import { client } from 'api'
// Components
import NProgress from 'nprogress'
import { ToastContainer } from 'react-toastify'
// Styles
import theme from 'atoms/theme'
import 'nprogress/nprogress.css'
import 'react-toastify/dist/ReactToastify.css'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>My new cool app</title>
      </Head>
      <GlobalStyle />
      <ApolloProvider client={client}>
        <ToastContainer/>
        <Component {...pageProps} />
      </ApolloProvider>
    </ThemeProvider>
  )
}
