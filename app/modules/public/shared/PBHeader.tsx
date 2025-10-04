"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { RxTextAlignRight } from "react-icons/rx";
import { RiInstagramLine, RiTwitterXLine, RiVideoOnAiLine } from "react-icons/ri";
import { appRoutePaths } from '@/app/routes/path';
import { IoCloseOutline } from 'react-icons/io5';
import { SlSocialFacebook } from 'react-icons/sl';

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
        <nav className={`bg-white flex-1 flex flex-col md:flex-row md:justify-between transition-all duration-300 fixed top-0 w-full ${navOpen ? 'left-0 z-40 h-screen overflow-auto' : 'left-full'} md:static`}>
          <div onClick={() => setNavOpen(!navOpen)} className={`ml-auto m-2 cursor-pointer flex-shrink-0 w-8 h-8 md:hidden rounded-sm text-dark text-3xl grid place-items-center`}>
            <IoCloseOutline />
          </div>
          <div className="md:flex-1 my-10 md:my-0 flex flex-col md:flex-row md:justify-center md:items-center md:gap-2 lg:gap-4">
            {
              headerLinks.map(el => (
                <Link key={el.path} href={el.path} className={`font-primary hover:bg-text hover:text-white md:hover:bg-transparent md:hover:text-text py-2 px-4 md:px-6 relative after:hidden md:after:flex after:absolute after:w-full after:h-1 ${pathname === el.path ? 'after:bg-orange-500 font-semibold' : 'after:bg-transparent font-medium'} after:left-0 after:top-[132%]`}>{el.title}</Link>
              ))
            }
          </div>
          <Link key={"720z7275"} href={appRoutePaths.login} className={`py-2 px-4 md:px-6 font-primary text-white relative md:rounded-sm bg-dark md:ml-auto`}>Get Started</Link>
          <div className="flex md:hidden justify-center gap-4 pt-10">
            <Link href={`https://twitter.com/docndoc`} className="border border-text/20 bg-light-grey hover:bg-dark w-7 h-7 text-base lg:text-lg hover:text-white cursor-pointer rounded-full flex justify-center items-center"><RiTwitterXLine /></Link>
            <Link href={`https://facebook.com/docndoc`} className="border border-text/20 bg-light-grey hover:bg-dark w-7 h-7 text-base lg:text-lg hover:text-white cursor-pointer rounded-full flex justify-center items-center"><SlSocialFacebook /></Link>
            <Link href={`https://instagram.com/docndoc`} className="border border-text/20 bg-light-grey hover:bg-dark w-7 h-7 text-base lg:text-lg hover:text-white cursor-pointer rounded-full flex justify-center items-center"><RiInstagramLine /></Link>
          </div>
        </nav>
        <button onClick={() => setNavOpen(!navOpen)} type='button' className="flex items-center gap-3 md:hidden bg-transparent border-none cursor-pointer text-lg font-normal font-primary tracking-wider text-text uppercase">
          <div className="flex flex-col gap-1">
            <span className="w-3 h-[2px] bg-gray-800 rounded-2xl"></span>
            <span className="w-6 h-[2px] bg-gray-800 rounded-2xl"></span>
          </div>
          <span>MENU</span>
        </button>
      </div>
    </header>
  )
}
