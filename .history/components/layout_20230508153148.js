import React from 'react'
import Navbar from '@/components/navbar'
import Footer from './footer'
import PopularMovie from './PopularMovie'
import CategoryMovieList from '@/lib/get-item'

const Layout = ({children}) => {
  return (
   <>
   <html>
    
   <Navbar/>
        <title>Nextflix</title>
        <main className="bg-gray-400">
            {children}
        </main>
        <Footer/>
   </html>
        
   </>
  )
}

export default Layout