import React from 'react'
import Navbar from '@/components/navbar'
import Footer from './footer'

const Layout = ({children}) => {
  return (
   <>
        <Navbar/>
        <title>Nextflix</title>
        <main className="bg-gray-500">
            {children}
        </main>
        <Footer/>
   </>
  )
}

export default Layout