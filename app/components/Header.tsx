"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Header = () => {
    const pathname=usePathname();
    console.log(pathname);
  return (
    <nav className=' '>
        <Link 
            href='/firstui'
            className={`text-zinc-400 pr-2
            transition ${
                pathname.includes('firstui')?
                "text-zinc-900 underline":""
            }
            `}
        >
            FirstUI
        </Link>
        <Link 
            href='/secondui'
            className={`text-zinc-400
            transition ${
                pathname.includes('secondui')?
                "text-zinc-900 underline":""
            }
            `}
        >
            SecondUI
        </Link>
    </nav>
  )
}

export default Header