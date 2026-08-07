import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Fotter = () => {
  return (
    <div className='flex flex-col items-center md:justify-between gap-8 md:gap-0  md:flex-row bg-gray-800 text-white w-full p-8 mt-10 rounded-lg'>
      <div className='flex flex-col items-center md:items-start gap-4'>
        <Link href={"/"} className='flex items-center' >
        <Image src="/logo.png" width={36} height={36} alt='logo'/>
        <p className='hidden md:block text-md font-medium text-white'>Store.</p>
        </Link>
        <p className='text-gray-400 text-sm '>@ 2026 Store.</p>
        <p className='text-gray-400 text-sm '>All Right Reserved</p>

      </div>

      <div className='flex flex-col gap-4 text-sm text-gray-400 items-center '>
        <p className='text-sm text-amber-50'>Links</p>
        <Link href={"/"}>HomePage</Link>
        <Link href={"/"}>Contact</Link>
        <Link href={"/"}>Term of service</Link>
        <Link href={"/"}>Privacy Polices</Link>
      </div>

       <div className='flex flex-col  gap-4 text-sm text-gray-400 items-center '>
        <p className='text-sm text-amber-50'>Links</p>
        <Link href={"/"}>HomePage</Link>
        <Link href={"/"}>Contact</Link>
        <Link href={"/"}>Term of service</Link>
        <Link href={"/"}>Privacy Polices</Link>
      </div>

       <div className='flex flex-col  gap-4 text-sm text-gray-400 items-center '>
        <p className='text-sm text-amber-50'>Links</p>
        <Link href={"/"}>HomePage</Link>
        <Link href={"/"}>Contact</Link>
        <Link href={"/"}>Term of service</Link>
        <Link href={"/"}>Privacy Polices</Link>
      </div>
       
    </div>
  )
}

export default Fotter
