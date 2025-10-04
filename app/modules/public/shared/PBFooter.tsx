import { appRoutePaths } from '@/app/routes/path';
import Link from 'next/link'
import React from 'react'
import { RiTwitterXLine, RiInstagramLine, RiVideoOnAiLine } from 'react-icons/ri'
import { SlSocialFacebook } from "react-icons/sl";

export default function PBFooter() {

  const footerLinks = [
    {
      title: "Quick Links",
      children: [
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
    },
    {
      title: "Useful Links",
      children: [
        {
          title: "Cookies",
          path: appRoutePaths.cookies,
        },
        {
          title: "Privacy Policy",
          path: appRoutePaths.privacyPolicy,
        },
        {
          title: "Terms and Conditions",
          path: appRoutePaths.termsAndConditions,
        },
        {
          title: "Sitemap",
          path: appRoutePaths.sitemap,
        },
      ]
    },
  ]


  return (
    <footer className='bg-light-grey rounded-t-4xl pt-10 pb-4 px-4 mt-4'>
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 py-4">
        <div className="space-y-2 col-span-2">
          <Link href={"/"} className='relative flex gap-2'>
            <div className="w-9 md:w-10 border rounded-sm bg-primary text-white text-2xl grid place-items-center">
              <RiVideoOnAiLine />
            </div>
            <h1 className="text-primary text-2xl md:text-3xl font-primary font-bold">DocNDoc</h1>
          </Link>
          <p className="text-left text-lg md:text-xl font-medium leading-relaxed py-1 max-w-lg">Maximize your marketing with human and algorithm-compliant contents that outperforms the competition in your niche, every time!</p>
        </div>
        {
          footerLinks.map(item => (
            <div key={item.title} className="space-y-2 py-4">
              <h2 className="text-dark text-xl md:text-2xl font-primary font-bold">{item.title}</h2>
              <div className="flex flex-col">
                {
                  item.children.map(el => (
                    <Link key={el.path} href={el.path} className="text-left text-base md:text-lg font-medium leading-relaxed py-1">{el.title}</Link>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
      <div className='bg-dark text-powder rounded-xl py-2 px-4 -mx-2 sm:mx-0 mt-2'>
        <div className="container mx-auto flex flex-col md:flex-row justify-between md:items-center gap-2">
          <p className="text-center md:text-left text-base md:text-lg font-normal line-clamp-3 text-ellipsis leading-relaxed py-1">&copy; {new Date().getFullYear()}. <Link href={"/"} className='font-medium'>DocnDoc.</Link> All rights reserved.</p>
          <div className="flex justify-center md:justify-end gap-2 md:gap-4">
            <Link href={`https://twitter.com/docndoc`} className="border border-powder/20 bg-powder/10 hover:bg-transparent w-7 h-7 text-base lg:text-lg hover:text-white cursor-pointer rounded-full flex justify-center items-center"><RiTwitterXLine /></Link>
            <Link href={`https://facebook.com/docndoc`} className="border border-powder/20 bg-powder/10 hover:bg-transparent w-7 h-7 text-base lg:text-lg hover:text-white cursor-pointer rounded-full flex justify-center items-center"><SlSocialFacebook /></Link>
            <Link href={`https://instagram.com/docndoc`} className="border border-powder/20 bg-powder/10 hover:bg-transparent w-7 h-7 text-base lg:text-lg hover:text-white cursor-pointer rounded-full flex justify-center items-center"><RiInstagramLine /></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
