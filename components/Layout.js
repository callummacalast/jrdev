import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="favicon.ico"></link>
      </Head>
      <Navbar />
      <main className="container mx-auto  ">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
