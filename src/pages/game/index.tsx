//libraries
import React from 'react'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

//types
import type { NextPage } from 'next'

//layout
import PrimaryLayout from '../../layout/PrimaryLayout'

//components
import Game from '../../components/game'

const GamePage: NextPage = () => {
  //instance

  return (
    <>
      <Head>
        <title>Game</title>
      </Head>
      <PrimaryLayout>
        <Game />
      </PrimaryLayout>
    </>
  )
}

export default GamePage

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
