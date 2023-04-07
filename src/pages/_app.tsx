import '@/styles/globals.css'
import theme from '@/styles/themes'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '@/components/Layout'
import { Provider } from 'react-redux';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import store from '../store/index'

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
   <QueryClientProvider client={queryClient}>
     <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </Provider>
   </QueryClientProvider>
  )
}
