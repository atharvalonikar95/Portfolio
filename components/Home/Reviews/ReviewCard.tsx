import Image from 'next/image';
import React from 'react'
import { FaStar } from 'react-icons/fa';

type props ={
    review: {
        name: string;
        review: string;
        rating: number;
        profession: string;
        image: string;
}
}

const ReviewCard = ({review}:props) => {
  return (
    <div className='rounded-md overflow-hidden bg-[#140c1c] m-4' >
        <div className='p-6 '>
            <Image src={'/images/q.png'} alt='img' width={50} height={50}  />
            <p className='text-white text-opacity-70 '>{review.review}</p>
            <Image src={'/images/q.png'} alt='img' width={50} height={50} className='ml-auto' />
        </div>
        <div className='px-6 py-3 mb-3 w-fit mx-auto rounded-full flex items-center space-x-3
        bg-indigo-900 text-white font-bold ' >
            <span>{review.rating}/5</span>
            <FaStar className='text-yellow-300' /> 
        </div>
        <div className='bg-gray-100' >
            <div className='p-6 flex items-center space-x-6 ' >
                <div>
                    <Image src={review.image} alt='img' width={50} height={50} className='rounded-[50%]' />
                </div>
                <div>
                    <h1 className='text-lg font-bold' >{review.name}</h1>
                    <p className='text-base text-gray-700 '>{review.profession}</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ReviewCard