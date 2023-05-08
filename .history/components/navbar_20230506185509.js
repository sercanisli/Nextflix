import { server } from '@/config'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gray-700 text-center">
        <div className="font-bold text-neutral-100 p-4 max-w-7xl mx-auto container tracking-widest font-navbarFont">
            <Link href="/" legacyBehavior>
                <a className="text-base md:text-2xl ">NEXTFLIX</a>
            </Link>
        </div>
        <Link href="`${server}`/popular" legacyBehavior>
                <a className="text-base md:text-2xl"> Popular Movie </a>
                </Link>
    </nav>
  )
}

export default Navbar