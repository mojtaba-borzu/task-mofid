//libraries
import React from 'react'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

//types
import type { NextPage } from 'next'

//layout
import PrimaryLayout from '../../layout/PrimaryLayout'

const AboutUsPage: NextPage = () => {
  //instance
  const { t } = useTranslation('common')
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <PrimaryLayout>
        <div className="mt-[50px] font-extrabold text-transparent text-[50px] bg-clip-text bg-gradient-to-r from-green-500 to-orange-700 text-center ">
          {t('About')}
        </div>
      </PrimaryLayout>
    </>
  )
}

export default AboutUsPage

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
