import React from 'react';
import { Link } from "react-router-dom";

function CardItem({item}) {
    return (
        <div>
            <img className='h-80 w-full' src={item.formats["image/jpeg"]} alt="book" />
            <h3 className="mt-1 text-lg font-medium text-gray-900 h-20 flex justify-center items-center text-center">{item.title.substring(0, 55)}</h3>
            <Link to={`/details/${item.id}`}><button className="outline outline-offset-2 outline-violet-800 block m-auto py-1 px-3 mt-2 rounded">View Deatils</button></Link>
        </div>
    )
}

export default CardItem