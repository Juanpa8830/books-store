import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { AddBook } from '../redux/books/book';

const BookInput = () => {
  const dispatch = useDispatch();
  const [bookData, setbookData] = useState({ title: '', author: '' });

  const onChange = (e) => {
    setbookData({
      ...bookData,
      [e.target.name]: e.target.value,
      // concatenar los valores de los inputs al estado de react inicial
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddBook({
      ...bookData,
      id: uuidv4(),
      category: 'science-fiction',
    }));
    setbookData({ title: '', author: '' });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={onChange}
          type="text"
          placeholder="Book title"
          required
          value={bookData.title}
          name="title"
        />

        <input
          onChange={onChange}
          type="text"
          placeholder="Author"
          required
          name="author"
          value={bookData.author}
        />
        <button
          type="submit"
          className="AdBtn"
        >
          Add Book
        </button>
      </form>
    </div>

  );
};

export default BookInput;
