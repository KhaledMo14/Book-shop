import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import {Link} from 'react-router-dom'
import {MdOutlineFavoriteBorder} from 'react-icons/md';


function Navbar() {
    return (
        <div>
            <nav className='flex flex-row items-center px-8'>
                <Link to={"/"} className="basis-1/4 text-3xl font-bold pr-5">
                    <h2>Booksy</h2>
                    </Link>

                <div className="basis-1/2">
                    <label className="sr-only">Search</label>
                    <div className="relative w-full">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <AiOutlineSearch/>
                        </div>
                        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by author,title,Name" required />
                    </div>

                </div>

                <div className="basis-1/4 flex flex-row pl-5 justify-center text-center m-auto items-center">
                    <div className="basis-1/3 text-center m-auto mr-5"><MdOutlineFavoriteBorder className='m-auto text-lg'/></div>
                    <div className="bg-violet-800 rounded-full w-10 h-10 m-auto text-white text-center pt-2 mr-5">O</div>
                    <div className="basis-1/3">EN</div>

                </div>


            </nav>

            <nav className='text-center'>
                <ul className='md:flex m-auto justify-between w-1/2 mt-10 text-gray-400 cursor-pointer hidden'>
                   <Link to={'/'} className='hover:text-violet-800'>Home</Link> 
                    <li className='hover:text-violet-800'>Bestseller</li>
                    <li className='hover:text-violet-800'>Category</li>
                    <li className='hover:text-violet-800'>Find a store</li>
                    <li className='hover:text-violet-800'>Blog</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar