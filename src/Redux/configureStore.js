import { combineReducers, configureStore } from '@reduxjs/toolkit';
import Books from './Books/Books';
import Categories from './Categories/Categories';

const rootReducer = combineReducers({
  books: Books,
  categories: Categories,
});
const store = configureStore({ reducer: rootReducer });

export default store;
