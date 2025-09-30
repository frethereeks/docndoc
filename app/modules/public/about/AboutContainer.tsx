import Link from 'next/link'
import React from 'react'
import { FaCaretRight } from 'react-icons/fa'
import { LuFileChartPie } from "react-icons/lu";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { HiOutlineDocumentText } from "react-icons/hi2";
import Image from 'next/image';
import { ASSETS_URL } from '@/app/assets';
import ChooseSection from '../shared/ChooseSection';

export default function AboutContainer() {
    return (
        <main className='relative'>
            <section className="relative bg-primary px-4">
                <Image src={ASSETS_URL['female_chart_content']} alt={'female_chart_content'} className='object-cover opacity-20' fill />
                <div className="relative w-full min-h-[50vh] md:min-h-[60vh] md:max-w-lg mx-auto flex flex-col justify-center items-center gap-2 text-center text-powder">
                    <p className="flex items-center justify-center gap-1 text-sm md:text-base uppercase">
                        <FaCaretRight /> The Best Ai writer tools
                    </p>
                    <h2 className="text-white text-3xl md:text-6xl text-shadow-2xs font-primary font-bold">Say Goodbye to Weak Contents!</h2>
                    <p className="flex items-center justify-center gap-2 text-base py-2">Let us help you create real-time data-driven contents that ranks high on search engines.</p>
                    <Link href={"/"} className="flex items-center gap-2 py-2 px-4 md:px-6 bg-white shadow-xl text-primary font-primary font-semibold rounded-sm">Get Started <FaCaretRight /></Link>
                    {/* <Link href={"/"} className="py-2 px-6 md:px-8 bg-secondary text-primary font-primary font-semibold rounded-sm">Get Started →</Link> */}
                </div>
            </section>
            <section className="bg-white py-14 md:py-20 px-4">
                <div className="container mx-auto flex flex-col md:flex-row-reverse gap-6 md:gap-10">
                    <aside className="flex-1 min-h-60 relative bg-white rounded-md overflow-hidden">
                        <Image src={ASSETS_URL['female_content']} alt={'group_male_content'} className='object-cover' fill />
                    </aside>
                    <aside className="flex-1 flex flex-col justify-center gap- md:py-10">
                        <p className="flex items-center gap-1 text-dark text-sm md:text-base uppercase">
                            <FaCaretRight /> Why use Doc&Doc
                        </p>
                        <h2 className="text-primary text-4xl md:text-5xl font-primary font-bold">Benefits of using our Service</h2>
                        <div className="divide-y divide-powder py-4">
                            {
                                [
                                    { id: "8x0zxu2l710", icon: <LiaPeopleCarrySolid />, content: "We generate contents that resonate with your target audience and drive traffic." },
                                    { id: "8x0zxu2l711", icon: <LuFileChartPie />, content: "Everytime you use our service, our AI model trains itself on the basis of real-time search results in your geography." },
                                    { id: "8x0zxu2l712", icon: <HiOutlineDocumentText />, content: "We maximize the value of each blog post by ensuring that ranking factors are taken into account from start to finish." },
                                ].map(el => (
                                    <figure key={el.id} className="flex flex-col md:flex-row md:items-center gap-2 py-6">
                                        <div className="shadow-xl border border-primary/15 h-14 md:h-16 w-14 md:w-16 rounded-md flex-shrink-0 grid place-items-center bg-powder text-primary text-3xl md:text-4xl">{el.icon}</div>
                                        <p className="text-dark font-primary font-medium">{el.content}</p>
                                    </figure>
                                ))
                            }
                        </div>
                    </aside>
                </div>
            </section>
            <section className="bg-white">
                {/* <ChooseSection /> */}
            </section>
            <section className="bg-primary relative">
                <div className="container mx-auto flex flex-col md:flex-row gap-6 md:gap-10">
                    <aside className="flex-1 md:relative bg-white overflow-hidden">
                        <Image src={ASSETS_URL['male_content']} alt={'group_male_content'} className='object-cover opacity-20 md:opacity-100' fill />
                    </aside>
                    <aside className="relative z-10 flex-1 flex flex-col justify-center gap-2 py-20 md:py-24 text-white p-4">
                        <h2 className="sm:max-w-md text-3xl md:text-4xl font-primary font-bold">Start working smarter, handle content with Doc&Doc</h2>
                        <p className="sm:max-w-md md:text-lg font-primary font-medium">Everytime you use our service, our AI model trains itself on the basis of real-time search results in your geography.</p>
                    </aside>
                </div>
            </section>
        </main>
    )
}
