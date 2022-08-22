import React, { useContext, useEffect, useState } from 'react';
import { dataApiContext } from '../context/ApiContext';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import CardItem from './CardItem';
import Loader from './Loader';

function Popular() {
    const { books, getData } = useContext(dataApiContext)
    const booksData = books.results
    const [url, setUrl] = useState(`http://gutendex.com/books/`)


    useEffect(() => {
        getData(url)
    }, [url,getData])

    function nextPage() {
        setUrl(books.next)
    }

    function previousPage() {
        setUrl(books.previous)
    }

    return (
        <div>
            <header className='flex justify-between mb-5'>
                <h2 className='text-3xl font-bold '>Popular Now</h2>
                <button className='text-xl text-gray-400'>View All</button>
            </header>

            <div className='flex justify-center'>
                <button onClick={previousPage} className="inline-flex items-center py-2 px-4 mr-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <AiOutlineArrowLeft />
                    Previous
                </button>
                <button onClick={nextPage} className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    Next
                    <AiOutlineArrowRight />
                </button>
            </div>

            <section className="bg-white w-full flex justify-center">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Books</h2>

                    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
                        {booksData ?
                            booksData.map((item) => (
                                <div key={item.id} className="group border mb-3 pb-4 transition duration-500 hover:-translate-y-4 rounded">
                                   <CardItem item={item}/>
                                </div>
                            )) : <Loader/> }
                    </div>
                </div>
            </section>


            <div className='flex justify-center'>
                <button onClick={previousPage} className="inline-flex items-center py-2 px-4 mr-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <AiOutlineArrowLeft />
                    Previous
                </button>
                <button onClick={nextPage} className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    Next
                    <AiOutlineArrowRight />
                </button>
            </div>
        </div>

    )
}

export default Popular