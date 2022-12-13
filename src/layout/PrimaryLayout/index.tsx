//libraries
import React from 'react'

//components
import Header from './Header'

function PrimaryLayout({ children }) {
  return (
    <section className="w-screen min-h-screen flex flex-col items-center">
      <Header />
      <main className="w-full h-full">{children}</main>
    </section>
  )
}

export default PrimaryLayout
