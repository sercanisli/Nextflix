import React from 'react'
import Navbar from '@/components/navbar'
import Footer from './footer'
const Layout = ({children}) => {
  return (
   <>
   <Navbar/>
        <title>Nextflix</title>
        <main className="bg-gray-300 h-screen">
            {children}
        </main>
        <Footer className/>
   </>
  )
}

export default Layout