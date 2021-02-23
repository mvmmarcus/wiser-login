import Head from 'next/head'
import { AppProps } from 'next/app'

import GlobalStyles from 'styles/global'
import ToastProvider from 'components/Atoms/ToastProvider'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import store from 'store'
import theme from 'styles/theme'

import 'react-toastify/dist/ReactToastify.min.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Wiser - Login</title>
          <link rel="shortcut icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="This is a Nextjs application to selective process for Wiser Education"
          />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
        <ToastProvider />
      </ThemeProvider>
    </Provider>
  )
}

export default App
