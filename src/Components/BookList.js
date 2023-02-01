import React from 'react';
import { useSelector } from 'react-redux'; // se usa para acceder al estado en el store
import BookItem from './Book';

const BookList = () => {
  // tomo el reducer book del state en el root reducer
  const books = useSelector((state) => state.book);

  return (
    <ul>
      {books.map((book) => {
        const {
          id, category, title, author,
        } = book;

        return (

          <BookItem
            key={id}
            id={id}
            category={category}
            title={title}
            author={author}
          />
        );
      })}
    </ul>
  );
};

export default BookList;
