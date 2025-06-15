import React from 'react'

const ContactForm = () => {
  return (
    <div className='bg-[#140c1c] rounded-lg p-4 sm:p-10 '>
        <h1 className='text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold '>
            Lets Work together!
        </h1>
        <p className='text-gray-200 mt-3 lg:text-base text-xs md:text-sm '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Neque odit quo libero perspiciatis, sequi sunt.
        </p>

        <form className='mt-8 block w-full overflow-hidden border-0 border-white  '>
            <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                <input type="text" placeholder='First Name' 
                className=' bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md 
                border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full '/>

                <input type="text" placeholder='Last Name' 
                className=' bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md 
                border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full '/>

            </div>

            <div className='mt-5 flex flex-col md:flex-row items-center justify-between gap-4  '>
                <input type="email" placeholder='Email Address' 
                className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md 
                border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full '/>

                <input type="text" placeholder='Phone number' 
                className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md 
                border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full  '/>

            </div>

            <div className='mt-5 flex flex-col md:flex-row items-center justify-between gap-4'>
                <select  
                className=' bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md 
                border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full '>
                    <option value="" disabled  >
                        Select a option
                    </option>
                    <option value="frontend">
                        Frontend development
                    </option>
                    <option value="Backend">
                        Backend development
                    </option>                    
                    <option value="Full Stack ">
                        Full Stack development
                    </option>
                </select>
            </div>
            <textarea rows={7} placeholder='message'
            className=' mt-5 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md 
                border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full '></textarea>
            <div className='mt-4 w-full flex justify-center border-0  items-center '>
                <button className='px-8 py-3.5 bg-[#7947df] text-white  hover:bg-[#5c2fb7]
                rounded-full'>Send message</button>
            </div>
        </form>

    </div>
  )
}

export default ContactForm