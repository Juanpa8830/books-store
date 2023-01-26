import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Categories from './Pages/Categories';
import BooksPage from './Pages/BooksPage';
import './App.css';

export default function App() {
  return (

    <>
      <nav className="nav">
        <div className="navleft">
          <h1 className="navtitle">Bookstore CMS</h1>
          <ul className="navlist">
            <li className="listItem"><Link className="listLink" to="/">BOOKS</Link></li>
            <li className="listItem"><Link className="listLink" to="/Pages/Categories">CATEGORIES</Link></li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="/Pages/Categories" element={<Categories />} />
      </Routes>
    </>
  );
}
