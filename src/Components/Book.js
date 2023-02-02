import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeApiBook } from '../redux/books/book';

const BookItem = (props) => {
  const dispatch = useDispatch();
  const {
    id, category, title, author,
  } = props;

  const onClick = () => {
    dispatch(removeApiBook(id));
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
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
