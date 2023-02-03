import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getApiBooks } from './redux/books/book';
import Categories from './Pages/Categories';
import BooksPage from './Pages/BooksPage';
import './App.css';

export default function App() {
  const dispatch = useDispatch();
  dispatch(getApiBooks());

  return (

    <div className="root">
      <nav className="nav" id="flex">
        <h1 className="navtitle">Bookstore CMS</h1>
        <ul className="navlist" id="flex">
          <li className="listItem"><Link className="listLink1" to="/">BOOKS</Link></li>
          <li className="listItem"><Link className="listLink2" to="/Pages/Categories">CATEGORIES</Link></li>
        </ul>
        <button className="navbutton" type="button">
          <span className="material-icons primary color">person</span>
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="/Pages/Categories" element={<Categories />} />
      </Routes>
    </div>
  );
}
