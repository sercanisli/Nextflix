import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gray-700 text-center">
        <div className="font-bold text-neutral-100 p-4 max-w-7xl mx-auto container tracking-widest font-navbar">
            <Link href="/" legacyBehavior>
                <a className="text-base md:text-2xl ">Nextflix</a>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar