import React from 'react'
import Navbar from '@/components/navbar'
import Footer from './footer'
import PopularMovie from './PopularMovie'

const Layout = ({children}) => {
  return (
   <>
        <Navbar/>
        <title>Nextflix</title>
        <main className="bg-gray-400">
            {children}
        </main>
        <Footer/>
   </>
  )
}

export default Layout