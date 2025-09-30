import { ImageResponse } from 'next/og'
import { blogData } from '../page'
 
export const alt = 'About Blog'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'


const fetchSingleBlog = async ({ slug }: { slug: string }) => {
    const data = blogData.find(el => el.slug === slug) ?? undefined
    return data;
}
 
export default async function Image({ params }: { params: { slug: string } }) {
  const {slug} = await params;
    const data = await fetchSingleBlog({ slug })
  
 
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {data?.title}
      </div>
    ),
    {
      ...size,
    }
  )
}