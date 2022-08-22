import React , {useEffect , useContext} from 'react';
import { dataApiContext } from '../context/ApiContext';
import {useParams} from 'react-router-dom';

function Details() {
    let params = useParams()
    const {bookDetails , getBookDetails} = useContext(dataApiContext)

    useEffect(() => {
        getBookDetails(params.id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <div className='w-1/2 m-auto mt-10'> 
        <div className='text-center shadow-lg p-10'>
            <img className=' m-auto block h-80' src={bookDetails.formats?.["image/jpeg"]} alt="book"/>
            <h2 className='my-7'>Name : {bookDetails.title}</h2>
            <p>About Book : {bookDetails.subjects}</p>
        </div>
    </div>
  )
}

export default Details