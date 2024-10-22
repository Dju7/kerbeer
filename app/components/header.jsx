'use client'
import React, {useState} from 'react'
import Link from 'next/link';
import { RiBeerFill } from "react-icons/ri";

export default function Header() {
 const [open, setOpen] = useState(false)

 const handleBar = (e) => {
  e.preventDefault()
  setOpen(!open)
 }

  return (
    <header className='fixed top w-full '>
       <div className='relative'>
          <RiBeerFill  className={`absolute z-10 text-4xl m-2 text-yellow-400 transition-transform duration-500 hover:scale-125 ${open ? 'rotate-45' : ''}`} onClick={handleBar}/>
          <div
          className={`
            ${open ? 'translate-x-0' : '-translate-x-full'} 
            transition-transform duration-500
            absolute z-1 h-14 w-full pr-1 flex justify-end items-center gap-10 bg-gray-900 shadow-xl text-ambre-300
          `}
        > 
        
          <div className=' flex gap-6'>
          <Link href="#apropos" className='text-amber-400'>A propos</Link>
          <Link href="#galerie" className='text-amber-400'>Galerie</Link>
          <Link href="#infos" className='text-amber-400 mr-6'>informations</Link>
          </div>
          
        </div>
      </div>
      
    </header>
  )
}
