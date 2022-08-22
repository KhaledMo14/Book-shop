import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>

            <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900 mt-10">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link to={'/'} className="flex items-center mb-4 sm:mb-0">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Booksy</span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                        <Link to={'/'}>
                            <span className="hover:text-violet-800 mr-4 hover:underline mr-4 cursor-pointer">Home</span>
                        </Link>
                        <li>
                            <span className="hover:text-violet-800 mr-4 hover:underline md:mr-6 cursor-pointer">Bestseller</span>
                        </li>
                        <li>
                            <span className="hover:text-violet-800 mr-4 hover:underline md:mr-6 cursor-pointer">Category</span>
                        </li>
                        <li>
                            <span className="hover:text-violet-800 mr-4 hover:underline md:mr-6 cursor-pointer">Find a store</span>
                        </li>
                        <li>
                            <span className="hover:text-violet-800 hover:underline">Blog</span>
                        </li>

                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" className="hover:underline">Khaled Mohamed Ali</a>. All Rights Reserved.
                </span>
            </footer>

        </div>
    )
}

export default Footer