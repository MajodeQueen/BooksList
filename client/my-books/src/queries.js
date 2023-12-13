import { gql } from '@apollo/client';

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

const getAuthorQuery = gql`
  query authorQuery($Id: ID!) {
    author(id: $Id) {
      name
      books {
        name
      }
    }
  }
`;
const getBook = gql`
  query Dog($id: ID!) {
    book(id: $id) {
      name
      genre
      author{
        name
        books{
          name
        }
      }
    }
  }
`;

export { getBooksQuery, getAuthorsQuery, getAuthorQuery, getBook };
