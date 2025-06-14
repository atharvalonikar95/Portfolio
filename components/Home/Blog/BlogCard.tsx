import Image from 'next/image';
import React from 'react'

type props={
    blog: {
    id: number;
    title: string;
    summary: string;
    date: string;
    image: string;
}
}

const BlogCard = ({blog}:props) => {
  return (
    <div className='bg-indigo-950 rounded-md overflow-hidden '>
        <Image src={blog.image} alt='img' width={250} height={250}  className=' rotate-270 w-full object-cover' />
        <div className='p-6' >
            <p className='rounded-sm px-6 py-1.5 bg-rose-500 text-white w-fit '>News</p>
            <h1 className='sm:text-lg text-base cursor-pointer hover:text-gray-100 hover:underline
            transition-all duration-200 mt-6 mb-2  text-gray-200 leading-[1.6rem] font-bold ' >{blog.title}</h1>
            <p className='text-opacity-70 text-gray-400 text-sm font-semibold  ' >{blog.summary}</p>
            <div className='mt-4 mb-4 w-full h-[1.5px] bg-gray-400 opacity-45 ' >
            </div>
            <div className='flex items-center justify-between'>
                <h1 className='text-sm font-bold text-gray-300 hover:text-gray-100 hover:underline'>{blog.date}</h1>
                <button className='text-base text-gray-200 hover:text-rose-500 underline '>Read more</button>
            </div>

        </div>

    </div>
  )
}

export default BlogCard