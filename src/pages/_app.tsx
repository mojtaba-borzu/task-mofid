//libraries
import Head from 'next/head'
import { useRouter } from 'next/router'
import { appWithTranslation } from 'next-i18next'

//styles
import '../styles/globals.css'

//types
import type { AppProps } from 'next/app'

//function
import { getDirection } from '../utils/function/getDirection'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title> Mofid </title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <BaseWrapper>
        <Component {...pageProps} />
      </BaseWrapper>
    </>
  )
}

export default appWithTranslation(MyApp)

const BaseWrapper = ({ children }: { children: React.ReactNode }) => {
  //instance
  const router = useRouter()

  return (
    <div dir={getDirection(router)} className="w-full h-full font-mainFa">
      {children}
    </div>
  )
}
