import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/book';

const BookItem = (props) => {
  const dispatch = useDispatch();
  const {
    id, category, title, author,
  } = props;

  const onClick = () => {
    dispatch(removeBook(id));
  };

  return (

    <li>
      <h4>{category}</h4>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <button onClick={onClick} type="button">Remove</button>

    </li>

  );
};

export default BookItem;

BookItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
