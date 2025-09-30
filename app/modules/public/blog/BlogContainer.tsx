"use client"
import { TBlogProps } from '@/app/(public)/blog/page'
import { Select } from 'antd'
import { useRef, useState } from 'react'
import BlogCard from './BlogCard'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'
import { ASSETS_URL } from '@/app/assets'
import Image from 'next/image'
import { FaCaretRight } from 'react-icons/fa'
import Link from 'next/link'
import { appRoutePaths } from '@/app/routes/path'

const DEFAULT_PAGE_SIZE = 12

export default function BlogContainer({ data }: { data: TBlogProps[] }) {
  const [sortValue, setSortValue] = useState<number>(0)
  const [blogs, setBlogs] = useState<TBlogProps[]>(data ?? [])
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState(0);
  const blogContainerRef = useRef<HTMLDivElement | null>(null)

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setBlogs((prev) => prev);
    console.log(sortValue, setTotalPages)
    blogContainerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
    blogContainerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
    blogContainerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className='bg-light-grey'>
      <section className="relative bg-primary px-4">
        <Image src={ASSETS_URL['male_content']} alt={'female_chart_content'} className='object-cover object-center opacity-10' fill />
        <div className="relative w-full min-h-[50vh] md:min-h-[60vh] md:max-w-xl mx-auto flex flex-col justify-center items-center gap-2 text-center text-powder select-none">
          <p className="flex items-center justify-center gap-1 text-sm md:text-base uppercase">
            <Link href={appRoutePaths.home}>Home</Link> <FaCaretRight /> <Link href={appRoutePaths.blog}>Articles</Link> <FaCaretRight />
          </p>
          <h2 className="text-white text-4xl md:text-5xl text-shadow-2xs font-primary font-bold">We always bring the Latest Information!</h2>
          <p className="flex items-center justify-center gap-2 text-base py-2">If you seek information both in the industry and around the world like the current trends, announcements and other information as soon as they happen, you are at the right place.</p>
        </div>
      </section>
      <section className="py-10 md:py-20 px-3 sm:px-4 bg-white">
        <div className="container mx-auto space-y-6 md:space-y-6">
          <div ref={blogContainerRef} className="flex justify-between items-center gap-4">
            <h2 className="sm:max-w-md md:max-w-lg text-dark text-2xl md:text-3xl font-primary font-bold">Latest Articles</h2>
              <Select
                key={"80z72xh"}
                options={
                  [{ id: "80z72xh0", title: "Filter Blog", value: 0 }, { id: "80z72xh1", title: "Oldest to Latest", value: 1 }, { id: "80z72xh2", title: "Latest to Oldest", value: 2 },].map((el) => (
                    {
                      key: el.id,
                      label: el.title,
                      value: el.value,
                    }
                  ))
                }
                defaultValue={0}
                onChange={(value) => setSortValue(value)}
                title={'Filter'}
                className='w-32 border border-dark rounded-md'
              />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 gap-y-4 md:gap-6">
            {
              data?.map(el => <BlogCard key={el.id} {...el} />)
            }
            <div className="p-4 col-span-2 md:col-span-3 xl:col-span-4">
              {blogs.length > DEFAULT_PAGE_SIZE ? (
                <div className="flex justify-end gap-2 ">
                  {currentPage !== 0 && (
                    <button
                      onClick={handlePreviousPage}
                      className="bg-primary text-white border-primary p-3 rounded-full w-max cursor-pointer text-xs md:text-sm font-medium"
                    >
                      <IoChevronBack />
                    </button>
                  )}
                  {Array.from({
                    length: Math.ceil(blogs.length / DEFAULT_PAGE_SIZE),
                  }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handlePageChange(index)}
                      className={`${currentPage === index
                        ? "bg-primary text-white"
                        : "bg-white text-primary"
                        } border-primary p-3 rounded-md w-max cursor-pointer text-xs md:text-sm font-medium`}
                    >{index + 1}
                    </button>
                  ))}
                  {currentPage !==
                    Math.ceil(blogs.length / DEFAULT_PAGE_SIZE) && (
                      <button
                        onClick={handleNextPage}
                        className="bg-white text-primary border border-primary p-3 rounded-full w-max cursor-pointer text-xs md:text-sm font-medium"
                      >
                        <IoChevronForward />
                      </button>
                    )}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
