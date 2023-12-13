import React from 'react';
import Booklist from '../molecules/booklist';
import Title from '../atoms/title';
import Addbook from '../molecules/addbook';
import ShowBookDetails from '../molecules/showBookDetails';

export default function Screen() {
  
  return (
    <div className="w-screen h-screen bg-white">
      <div className="w-full h-full grid grid-cols-3 ">
        <div className="col-span-2 bg-slate-200 h-full">
          <div className="flex flex-col justify-between h-full gap-4">
            <div>
              <Title />
              <div className="grid grid-cols-4 gap-4 mx-10">
                <Booklist />
              </div>
            </div>
            <Addbook />
          </div>
        </div>
        <ShowBookDetails/>
      </div>
    </div>
  );
}
