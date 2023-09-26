import React from 'react'
import NavBar from '../N/NavBar'
import Footer from '../F/Footer'

const Layout = ({ children }: any) => {
  return (
    <section className='main-box'>
      <NavBar />
      {children}
      <Footer />
    </section>
  )
}

export default Layout
