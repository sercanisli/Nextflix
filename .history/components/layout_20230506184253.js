import React from 'react'
import Navbar from '@/components/navbar'
import Footer from './footer'

const Layout = ({children}) => {
  return (
   <>
        <Navbar/>
        <main>
            {children}
        </main>
        <Footer/>
   </>
  )
}

export default Layout