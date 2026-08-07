import Link from 'next/link'
import React from 'react'
import SearchBar from './SearchBar'
import { Bell, Home, ShoppingCart } from 'lucide-react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='w-full flex justify-between items-center border-b border-gray-200 pb-4'>
        {/*left */}
        <Link href={"/"} className='flex items-center'>
        <Image src="/logo.png" alt="logo" width={36} height={36} className='w-6 h-6 md:w-9 md:h-9' />
        <p className='text-md font-medium tracking-wider md:block hidden'>STORE.</p>
        </Link>

        {/* right*/}
        <div className='flex gap-2 items-center'>
            <SearchBar/>
            <Link href={"/"}>
            <Home className='w-4 h-4 text-gray-400' />
            </Link>
            <Bell className='w-4 h-4 text-gray-400'/>
            <ShoppingCart className='w-4 h-4 text-gray-400'/>
            <Link href={"/login"}>
            Sign in
            </Link>
        </div>
    </nav>
  )
}

export default Navbar
