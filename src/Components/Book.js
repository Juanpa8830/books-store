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
      <div className="book">
        <div className="bcontent">
          <div className="bleftinfo">
            <h4 className="bcat">{category}</h4>
            <h2 className="btitle">{title}</h2>
            <h3 className="bauthor">{author}</h3>
            <div className="cre-options">
              <button className="bcomments" type="button">Comments</button>
              <div className="Vdivision" />
              <button className="bremove" onClick={onClick} type="button">Remove</button>
              <div className="Vdivision" />
              <button className="bedit" type="button">Edit</button>
            </div>
          </div>
          <div className="progress-package">
            <div className="circular-package">
              <div className="circle" />
            </div>
            <div className="status-info">
              <p className="percent">56%</p>
              <p className="completed">Completed</p>
            </div>
            <div className="vert-div" />
            <div className="chapter-package">
              <div>
                <p className="cc">CURRENT CHAPTER</p>
                <p className="chapternumber">Chapter 14</p>
              </div>
              <div>
                <button className="Updateb" type="button">UPDATE PROGRESS</button>
              </div>
            </div>
          </div>
        </div>
      </div>
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
