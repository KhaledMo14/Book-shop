import React, { createContext, useState } from 'react';
import axios from 'axios';

export let dataApiContext = createContext([]);

export default function ApiContextProvider(props) {

    const [books , setBooks] = useState([]); 
    const [bookDetails , setBookDetails] = useState({})

   async function getData(url) {
    let {data}=await axios.get(`${url}`);
    setBooks(data)
   }


   async function getBookDetails(id) {
    let {data} = await axios.get(`http://gutendex.com/books/${id}`)
    setBookDetails(data) 
   }
    return <dataApiContext.Provider value={{books , bookDetails, getData , getBookDetails}}>
        {props.children}
    </dataApiContext.Provider>
}