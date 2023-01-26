import React from 'react';
import BookItem from './Book';

const BooksInfo = [
  {
    id: 0,
    category: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    chapters: 25,
    currentChapter: 16,
  },
  {
    id: 1,
    category: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
    chapters: 25,
    currentChapter: 2,
  },
  {
    id: 2,
    category: 'Economy',
    title: 'Capital in the Twenty-First century',
    author: 'Suzanne Collins',
    chapters: 30,
    currentChapter: 13,
  }];

const BookList = () => (

  <ul>
    {BooksInfo.map((book) => {
      const {
        id, category, title, author, chapters, currentChapter,
      } = book;
      return (

        <BookItem
          key={id}
          category={category}
          title={title}
          author={author}
          chapters={chapters}
          currentChapter={currentChapter}
        />
      );
    })}
  </ul>
);

export default BookList;
