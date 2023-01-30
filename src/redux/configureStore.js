import { configureStore } from '@reduxjs/toolkit'; // ya trae la config del combine reducer y del createStore

import bookReducer from './books/book';
import categoriesReducer from './categories/categories';

const rootReducer = {
  book: bookReducer,
  categories: categoriesReducer,
};

const store = configureStore({ reducer: rootReducer });// la nueva sintaxis de configureStore

export default store;
