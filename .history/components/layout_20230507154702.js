import React from 'react'
import Navbar from '@/components/navbar'
import Footer from './footer'

const Layout = ({children}) => {
  return (
   <>
        <Navbar/>
        <title>Nextflix</title>
        <main className="bg-black">
            {children.belongs_to_collection.poster_path}
        </main>
        <Footer/>
   </>
  )
}

export default Layout