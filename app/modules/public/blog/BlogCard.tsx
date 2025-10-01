"use client"
import { TBlogProps } from '@/app/(public)/blog/page'
import Image from 'next/image'
import React from 'react'
import moment from 'moment'
import Link from 'next/link'

export default function BlogCard({ id, slug, title, image, category, content, createdAt, }: TBlogProps) {
    return (
        <Link href={`/blog/${slug}`} key={id} className='block bg-white shadow-xl'>
            <figure className="relative h-36 sm:h-40 md:h-56">
                <span className="absolute z-10 top-2 right-2 py-1.5 px-3 rounded-sm bg-orange-500 text-white text-xs md:text-sm">{category}</span>
                <Image src={image} alt={title} className='object-cover' fill />
            </figure>
            <div className="flex flex-col gap-2 p-3 pt-2 sm:p-4">
                <p className="text-xs text-primary font-medium font-secondary">{moment(createdAt).fromNow()}</p>
                <div className="flex-1 space-y-2">
                    <h4 className="leading-tight text-dark text-lg sm:text-xl font-primary font-bold line-clamp-2 text-ellipsis">{title}</h4>
                    <p className="text-base text-text font-medium font-secondary line-clamp-2 md:line-clamp-3 text-ellipsis">{content.slice(0, 400)}</p>
                </div>
                {/* <button className="w-max py-2 px-4 md:px-6 rounded-sm text-white text-sm md:text-base cursor-pointer bg-primary border border-primary hover:bg-white hover:text-primary">Read More </button> */}
            </div>
        </Link>
    )
}
