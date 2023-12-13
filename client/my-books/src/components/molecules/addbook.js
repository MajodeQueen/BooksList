import React, { useState } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import { getAuthorsQuery } from '../../queries';

const ADD_BOOK = gql`
  mutation PostMutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      genre
      id
    }
  }
`;

export default function Addbook() {
  const { loading, error, data } = useQuery(getAuthorsQuery);
  const displayAuthors = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    return data.authors.map((author) => (
      <option key={author.id} value={author.id}>
        {author.name}
      </option>
    ));
  };

  const [formState, setFormState] = useState({
    bookName: '',
    bookgenre: '',
    authorId: '',
  });

  const [addBookHandler] = useMutation(ADD_BOOK, {
    variables: {
      name: formState.bookName,
      genre: formState.bookgenre,
      authorId: formState.authorId,
    },
  });


  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addBookHandler();
      }}
      className="bg-white shadow-md w-[800px]"
    >
      <div className="flex flex-col gap-4 pb-16 pl-[100px] pt-8">
        <div className="flex items-center  space-x-4">
          <label
            htmlFor="book-name"
            className="w-[100px] text-black flex items-end justify-end"
          >
            Book name:
          </label>
          <input
            name="book-name"
            value={formState.bookName}
            onChange={(e) =>
              setFormState({
                ...formState,
                bookName: e.target.value,
              })
            }
            className="border-2 w-[300px] h-[40px] rounded-[6px]"
          />
        </div>
        <div className="flex items-center space-x-4">
          <label
            htmlFor="genre"
            className="w-[100px] text-black flex items-end justify-end"
          >
            Genre:
          </label>
          <input
            name="genre"
            value={formState.bookgenre}
            onChange={(e) =>
              setFormState({
                ...formState,
                bookgenre: e.target.value,
              })
            }
            className="border-2 w-[300px] h-[40px] rounded-[6px]"
          />
        </div>
        <div className="flex items-center space-x-4">
          <label
            htmlFor="authors"
            className="w-[100px] text-black flex items-end justify-end"
          >
            Author:
          </label>
          <select
            id="authors"
            value={formState.authorId}
            onChange={(e) =>
              setFormState({
                ...formState,
                authorId: e.target.value,
              })
            }
            className="border-2 w-[300px] h-[40px] rounded-[6px] px-2"
          >
            {displayAuthors()}
          </select>
        </div>
        <div className="flex items-end justify-end w-[430px]">
          <button
            type="submit"
            className="w-[50px] h-[50px] bg-[#CC1D76] rounded-full flex items-center justify-center shadow-lg"
          >
            <p className="text-white text-[30px] flex items-center justify-center ">
              +
            </p>
          </button>
        </div>
      </div>
    </form>
  );
}
