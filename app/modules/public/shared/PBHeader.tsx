"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { RxTextAlignRight } from "react-icons/rx";
import { RiVideoOnAiLine } from "react-icons/ri";
import { appRoutePaths } from '@/app/routes/path';

export default function PBHeader() {
  const [navOpen, setNavOpen] = useState<boolean>(false)
  const pathname = usePathname()

  const headerLinks = [
    {
      title: "Home",
      path: appRoutePaths.home,
    },
    {
      title: "About",
      path: appRoutePaths.about,
    },
    {
      title: "Blog",
      path: appRoutePaths.blog,
    },
    {
      title: "Contact",
      path: appRoutePaths.contact,
    },
  ]

  useEffect(() => {

    return () => {
      window.scrollTo(0, 0)
      setNavOpen(false)
    }
  }, [pathname])


  return (
    <header className='sticky top-0 left-0 z-50 bg-white p-4'>
      <div className="container mx-auto flex justify-between gap-4">
        <Link href={appRoutePaths.home} className='relative flex gap-2'>
          <div className="w-9 md:w-10 border-2 border-primary rounded-sm bg-powder text-primary text-2xl grid place-items-center">
            <RiVideoOnAiLine />
          </div>
          <h1 className="text-primary text-2xl md:text-3xl font-primary font-bold">DocNDoc</h1>
        </Link>
        <nav className={`bg-white flex-1 flex flex-col md:flex-row md:justify-between transition-all duration-300 fixed top-0 w-full ${navOpen ? 'left-10 z-40 h-screen' : 'left-full'} md:static`}>
          <div onClick={() => setNavOpen(!navOpen)} className={`flex-shrink-0 w-8 h-8 md:hidden border-2 border-text/10 rounded-sm bg-light-grey text-primary text-2xl grid place-items-center`}>
            <RxTextAlignRight />
          </div>
          <div className="flex-1 flex flex-col md:flex-row md:justify-center md:items-center md:gap-2 lg:gap-4">
            {
              headerLinks.map(el => (
                <Link key={el.path} href={el.path} className={`font-primary py-2 px-4 md:px-6 relative after:hidden md:after:flex after:absolute after:w-full after:h-1 ${pathname === el.path ? 'after:bg-orange-500' : 'after:bg-transparent'} after:left-0 after:top-[132%]`}>{el.title}</Link>
              ))
            }
          </div>
          <Link key={"720z7275"} href={appRoutePaths.login} className={`py-2 px-4 md:px-6 font-primary text-white relative md:rounded-sm bg-dark md:ml-auto`}>Get Started</Link>
        </nav>
        <div onClick={() => setNavOpen(!navOpen)} className="flex-shrink-0 w-8 h-8 md:hidden border-2 border-text/10 rounded-sm bg-light-grey text-primary text-2xl grid place-items-center">
          <RxTextAlignRight />
        </div>
      </div>
    </header>
  )
}
