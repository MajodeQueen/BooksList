import { createContext, useReducer } from 'react';

export const BookDetails = createContext();

const initialState = {
  bookData:{},
  emptyBoolean: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_BOOK_DETAILS':
      return { ...state, bookData: action.payload, emptyBoolean: false };
    default:
      return state;
  }
};

export function BookDetailsProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <BookDetails.Provider value={value}>{props.children}</BookDetails.Provider>
  );
}
