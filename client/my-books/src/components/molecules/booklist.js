import React from 'react';
import { useQuery } from '@apollo/client';
import Book from '../atoms/book';
import { getBooksQuery } from '../../queries';


export default function Booklist({setBookDetails}) {
  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.books.map((book) => (
    <div key={book.id}>
      <Book book={book}  bookId={book.id} setBookDetails={setBookDetails}/>
    </div>
  ));
}
