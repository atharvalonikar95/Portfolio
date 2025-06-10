import Image from 'next/image';
import React from 'react'

type props={
    skill: {
    id: number;
    title: string;
    image: string;
    percent: string;
}
}

const SkillCard = ({skill}:props) => {
  return (
    <div className=' p-6 hover:bg-blue-900 duration-300 transition-all cursor-pointer text-center
     rounded-lg bg-gray-900   '>
        <Image src={skill.image} alt={skill.title} width={80} height={80} className=' object-cover mx-auto ' />
        <h1 className='text-[18px] mt-4 font-[600] text-white ' >{skill.title}</h1>
        <div className=' text-[18px] mt-4 p-2 font-[400] opacity-90 bg-black text-white '>{skill.percent}</div>
    </div>
  )
}

export default SkillCard