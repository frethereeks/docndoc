import React from 'react'
import { blogData } from '../page'
import SingleBlogContainer from '@/app/modules/public/blog/SingleBlogContainer'
import { notFound } from 'next/navigation'

type TPageProps = {
    params: {
        slug: string
    }
}

const fetchSingleBlog = async ({ slug }: { slug: string }) => {
    const data = blogData.find(el => el.slug === slug) ?? undefined
    const relatedData = blogData.filter(el => el.slug !== slug) ?? undefined
    return { data, relatedData };
}


export default async function SingleBlogPage({ params }: TPageProps) {
    const { slug } = await params;
    const { data, relatedData } = await fetchSingleBlog({ slug })
    if (!data) {
        notFound()
    }
    return (
        <SingleBlogContainer data={data} relatedData={relatedData} />
    )
}
