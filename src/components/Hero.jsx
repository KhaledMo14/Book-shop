import React from 'react'
import HeroImg from '../assets/—Pngtree—flat exaggerated character illustration reading_5781821.png'

function Hero() {
  return (
    <header className='bg-[#f4e7de] rounded-lg my-8'>
        <div className='flex items-center '>

            <div className='basis-1/2 container px-10'>
                <h1 className='text-5xl text-violet-700 font-bold py-5'>Build your Library</h1>
                <p className='text-lg text-gray-400 pb-5'>Buy two selected books and get <br/>one for free</p>
                <button type="button" className="text-white bg-[#c2ae9e] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">View All</button>
            </div>
            <div className='basis-1/2'>
                <img className='w-3/4' src={HeroImg} alt="reading"/>
            </div>
        </div>
    </header>
  )
}

export default Hero