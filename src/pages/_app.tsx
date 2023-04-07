import '@/styles/globals.css'
import theme from '@/styles/themes'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '@/components/Layout'
import { Provider } from 'react-redux';
import store from '../store/index'
import { wrapper } from '@/store';
import ScrollTopButton from '@/components/ScrollToTop'


function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
    </Provider>
  )
}

export default wrapper.withRedux(App);