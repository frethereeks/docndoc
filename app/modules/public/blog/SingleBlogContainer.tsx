"use client"
import { TBlogProps } from '@/app/(public)/blog/page'
import { ASSETS_URL } from '@/app/assets'
import { appRoutePaths } from '@/app/routes/path'
import Image from 'next/image'
import Link from 'next/link'
import { FaCaretRight } from 'react-icons/fa'
import { IoShareOutline } from 'react-icons/io5'
import { RWebShare } from 'react-web-share'

type TPageProps = {
    data: TBlogProps | undefined
    relatedData: TBlogProps[] | undefined
}

export default function SingleBlogContainer({ data, relatedData }: TPageProps) {
    return (
        <main className='relative'>
            <section className="relative bg-primary px-4">
                <Image src={data?.image ?? ASSETS_URL['group_male_content']} alt={'group_male_content'} className='object-cover opacity-10' fill />
                <div className="relative w-full min-h-[40vh] md:min-h-[50vh] md:max-w-4xl mx-auto flex flex-col justify-center items-center gap-2 text-center text-powder select-none">
                    <p className="flex items-center justify-center gap-1 text-sm md:text-base uppercase">
                        <Link href={appRoutePaths.home}>Home</Link> <FaCaretRight /> <Link href={appRoutePaths.blog}>Articles</Link> <FaCaretRight />
                    </p>
                    <h2 className="text-white text-2xl md:text-4xl text-shadow-2xs font-primary font-bold">{data?.title}</h2>
                    <p className="flex items-center justify-center gap-2 text-base py-2"></p>
                </div>
            </section>
            <section className="py-10 md:py-20 px-3 sm:px-4 bg-white">
                <div className="container mx-auto space-y-6 md:space-y-6 grid lg:grid-cols-3 gap-4">
                    <article className="lg:col-span-2 text-text space-y-2">
                        <h2 className="text-dark text-2xl md:text-3xl font-primary font-bold -mt-1">{data?.title}</h2>
                        <figure className="relative h-64 sm:h-68 md:h-80 rounded-xs overflow-hidden">
                            <Image src={data?.image ?? ""} alt={data?.title ?? ""} className='object-cover' fill />
                        </figure>
                        <div className="flex items-center gap-4 -translate-y-1">
                            <p className="text-sm md:text-base text-dark/70 font-medium capitalize tracking-wider">{new Date(data?.createdAt ?? "").toDateString()}</p>
                            <span className="text-4xl text-primary mt-1 leading-2">•</span>
                            <p className="text-sm md:text-base text-dark/70 font-medium capitalize tracking-wider">{data?.category}</p>
                        </div>
                        <div className="flex justify-between items-center gap-4 px-2">
                            <div className="flex items-center gap-2">
                                <div className="w-9 h-9 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full relative overflow-hidden bg-secondary">
                                    <Image src={data?.creator?.image ?? ""} alt={data?.creator?.firstname ?? ""} className="h-full w-full object-cover object-center rounded-sm absolute left-0 top-0" fill />
                                </div>
                                <p className="text-sm md:text-base text-dark/80 font-semibold capitalize tracking-wider">{data?.creator?.firstname} {data?.creator?.lastname}</p>
                            </div>
                            <div className="flex gap-2">
                                <RWebShare
                                    data={{
                                        text: data?.content.slice(0,100),
                                        url: `${appRoutePaths.blog}/blog/${data?.slug}`,
                                        title: data?.title,
                                    }}
                                >
                                    <button className="border-2 border-primary/50 bg-powder w-9 h-9 md:w-8 md:h-8 text-lg lg:text-xl text-primary hover:text-dark/70 hover:bg-dark/5 cursor-pointer rounded-full flex justify-center items-center"><IoShareOutline /></button>
                                </RWebShare>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <p className="text-justify text-lg md:text-lg font-normal font-primary leading-relaxed py-1 first-letter:text-5xl first-letter:text-primary first-letter:font-medium first-letter:font-serif">{data?.content.slice(0, 388)}</p>
                            <p className="text-justify text-lg md:text-lg font-normal font-primary leading-relaxed py-1">{data?.content.slice(388, 900)}</p>
                            <p className="text-justify text-lg md:text-lg font-normal font-primary leading-relaxed py-1">{data?.content.slice(900)}</p>
                        </div>
                    </article>
                    <aside className="space-y-4 bg-white md:bg-transparent">
                        <h2 className="text-dark text-2xl md:text-2xl font-primary font-semibold">Related Articles</h2>
                        <div className="divide-y divide-slate-200 flex flex-col">
                            {
                                relatedData?.map(el => (
                                    <Link key={el.id} href={`/blog/${el.slug}`} className='flex gap-2 bg-white py-4 md:p-4 shadow-none hover:shadow-xl rounded-xs'>
                                        <div className="relative rounded-md overflow-hidden h-40 md:h-auto w-40 md:w-44">
                                            <Image src={el?.image ?? ""} alt={el?.title ?? ""} className='object-cover' fill />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-center">
                                            <h2 className="text-dark text-lg md:text-xl font-primary line-clamp-2 text-ellipsis font-semibold">{el.title}</h2>
                                            <p className="text-left text-base md:text-lg font-normal line-clamp-3 text-ellipsis leading-relaxed py-1">{el?.content.slice(0,200)}</p>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </aside>
                </div>
            </section>

        </main>
    )
}
