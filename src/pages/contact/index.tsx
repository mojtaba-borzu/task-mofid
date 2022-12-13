//libraries
import React from 'react'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

//types
import type { NextPage } from 'next'

//layout
import PrimaryLayout from '../../layout/PrimaryLayout'

const ContactUsPage: NextPage = () => {
  const { t } = useTranslation('common')
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <PrimaryLayout>
        <div className="mt-[50px] font-extrabold text-transparent text-[50px] bg-clip-text bg-gradient-to-r from-red-500 to-green-700 text-center ">
          {t('Contact')}
        </div>
      </PrimaryLayout>
    </>
  )
}

export default ContactUsPage

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
