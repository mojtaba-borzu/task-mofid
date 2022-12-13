//libraries
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

//types
import type { NextPage } from 'next'

//layout
import PrimaryLayout from '../layout/PrimaryLayout'

const LandingPage: NextPage = () => {
  //instance
  const { t } = useTranslation('common')

  return (
    <div>
      <Head>
        <title> home </title>
      </Head>
      <PrimaryLayout>
        <div className="mt-[50px] font-extrabold text-transparent text-[50px] bg-clip-text bg-gradient-to-r from-blue-500 to-pink-700 text-center ">
          {t('Home')}
        </div>
      </PrimaryLayout>
    </div>
  )
}

export default LandingPage

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
