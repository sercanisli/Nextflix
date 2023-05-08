import Link from 'next/link'
import React from 'react'
import PopularMovie from './PopularMovie'

const Navbar = () => {
  return (
    <nav className="bg-gray-700 text-center">
        <div className="font-bold text-neutral-100 p-4 max-w-7xl mx-auto container tracking-widest font-navbarFont">
            <Link href="/" legacyBehavior>
                <a className="text-base md:text-2xl ">NEXTFLIX</a>
            </Link>
            <Link href="/movie">
            </Link>
        </div>
    </nav>
  )
}

export default Navbar

