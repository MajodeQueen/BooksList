import { useLazyQuery } from '@apollo/client';
import React, { useContext } from 'react';
import {getBook } from '../../queries';
import { BookDetails } from '../../State';


export default function Book({ book, bookId}) {
  const [loadBookDetails] = useLazyQuery(getBook,{variables:{id:bookId}});
  const {dispatch:cxtDispatch} = useContext(BookDetails);

  const submitHandler = async() => {
    const getdata = await loadBookDetails();
    console.log(getdata.data)
    cxtDispatch({type:'SHOW_BOOK_DETAILS',payload:getdata.data});
};
  return (
    <div onClick={()=>submitHandler()} className="border-2 border-[#c71585] rounded-[6px] h-[56px] flex items-center justify-center cursor-pointer">
      <p className="text-[#c71585] font-[600] text-[16px] flex items-center justify-center">{book.name}</p>
    </div>
  );
}
