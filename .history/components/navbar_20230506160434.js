import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="BG-GRAY-700">
        <div className="font-bold text-neutral-100 p-4 max-w-7xl mx-auto container tracking-widest ">
            <Link href="/" legacyBehavior>
                <a className="text-base md:text-2xl ">Nextflix</a>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar