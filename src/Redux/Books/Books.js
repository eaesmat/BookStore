/* eslint-disable camelcase */
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_BOOKS = 'bookstore/books/fetchBooks';
const ADD_BOOK = 'bookstore/books/addBook';
const REMOVE_BOOK = 'bookstore/books/removeBook';
const BASEURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/wQsT2oY9GMZWmVS3wy5Y/books';

export const fetchBooks = createAsyncThunk(FETCH_BOOKS, async () => {
  const response = await axios.get(BASEURL);
  return response.data;
});

export default function booksReducer(state = [], action) {
  switch (action.type) {
    case ADD_BOOK:
      return action.payload;
    case fetchBooks.fulfilled.type:
      return action.payload;
    case REMOVE_BOOK: {
      return action.payload;
    }
    default:
      return state;
  }
}

export const addBook = ({
  title, author, item_id, category,
}) => async (dispatch) => {
  try {
    await axios.post(BASEURL, {
      title,
      author,
      item_id,
      category,
    });
    return dispatch(fetchBooks());
  } catch (err) {
    return Promise.reject(err);
  }
};

export const removeBook = (id) => async (dispatch) => {
  await axios.delete(`${BASEURL}/${id}`);
  dispatch(fetchBooks());
};
