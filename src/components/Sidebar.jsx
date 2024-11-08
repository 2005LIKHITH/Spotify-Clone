import React from 'react'
import { assets } from '../assets/assets'
import { HiOutlinePlus } from "react-icons/hi2";


const Sidebar = () => {
  return (
    <div className='w-[25%] h-full  p-2  flex-col gap-2 text-white hidden lg:flex'>
      {/*  not visible in the small and medium screens*/}
        <div className= 'bg-[#121212] h-[15%] rounded flex flex-col  justify-around'>
            <div className = 'flex items-center gap-3 pl-8 cursor-pointer justify-start'>
                <img className= 'w-6' src = {assets.home_icon} alt = "home icon"/>
                <p className='font-bold'>Home</p>
            </div>
            <div className = 'flex items-center gap-3 pl-8 cursor-pointer'>
                <img className= 'w-6' src = {assets.search_icon} alt = "home icon"/>
                <p className='font-bold'>Search</p>
            </div>

        </div>
        <div className='bg-[#121212] h-[85%] rounded'>
          <div className = 'p-4 flex flex-row items-center justify-between'>{/* in flex row is the default behaviour*/}
            <div className = 'flex items-center gap-3'>
                <img className= 'w-8' src = {assets.stack_icon} alt = "stack icon"/>
                <p className='semibold'>Your Library</p>
            </div>
            <div className='flex items-center gap-3'>
                <img className = 'w-5'src= {assets.arrow_icon} alt="" />
                <HiOutlinePlus className='w-5 h-5' />
            </div>

          </div>
          <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1'>
            <h1>Create Your first playlist</h1>
            <p className='font-light'>it is easy we will help you</p>
            <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4' >Create Playlist</button>


          </div>
          <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 mt-4'>
            <h1>Let's find some podcasts to follow</h1>
            <p className='font-light'>we'll keep you updated on new episodes</p>
            <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4' >Browse podcasts</button>


          </div>
        </div>
      
    </div>
  )
}

export default Sidebar
