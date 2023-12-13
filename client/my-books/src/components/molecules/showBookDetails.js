import React, { useContext } from 'react';
import { BookDetails } from '../../State';

export default function ShowBookDetails() {
  const { state } = useContext(BookDetails);
  const { bookData, emptyBoolean } = state;
  return (
    <div className="h-full bg-[#CC1D76]">
      {emptyBoolean && (
        <p className="text-white text-[20px]">No book selected...</p>
      )}
      {bookData.book && (
        <div className="mx-8 mt-8 flex flex-col gap-4">
          <p className="text-white text-[18px] font-[600]">
            {bookData.book.name}
          </p>
          <p className="text-white text-[16px]">{bookData.book.genre}</p>
          <div className="flex flex-col gap-6">
            <p className="text-white text-[16px]">
              All books written by this author...
            </p>
            <div className='pl-8'>
              {bookData.book.author.books.map((bok) => (
                <li key={bok.id} className="text-white text-[14px]">
                  {bok.name}
                </li>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
