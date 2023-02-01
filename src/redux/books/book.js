import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ApiBaseUrlGet = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/KaY5H84dyT1ZWK4UIq4O/books';
const ApiBaseUrlPost = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/KaY5H84dyT1ZWK4UIq4O/books';
const ApiBaseUrlDelete = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/KaY5H84dyT1ZWK4UIq4O/books/';
const ADD_API_BOOK = 'BOOK-STORE/books/ADD_API_BOOK';
const REMOVE_API_BOOK = 'BOOK-STORE/books/REMOVE_API_BOOK';
const GET_INFO = 'BOOK-STORE/books/GET_INFO';

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case `${ADD_API_BOOK}/fulfilled`:
      return [...state, action.payload];
    case `${REMOVE_API_BOOK}/fulfilled`:
      return state.filter((book) => book.id !== action.payload);
    case `${GET_INFO}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};
export const getApiBooks = createAsyncThunk(GET_INFO,
  async () => axios.get(ApiBaseUrlGet).then((response) => {
    const listObj = Object.keys(response.data).map((key) => (
      {
        id: key, ...response.data[key][0],
      }
    ));
    return listObj;
  }));

export const AddApiBook = createAsyncThunk(ADD_API_BOOK,
  async (book) => axios.post(ApiBaseUrlPost, book)
    .then(() => book));

export const removeApiBook = createAsyncThunk(REMOVE_API_BOOK,
  async (id) => axios.delete(ApiBaseUrlDelete + id, id)
    .then(() => id));

export default bookReducer;
