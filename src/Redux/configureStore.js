import { configureStore } from '@reduxjs/toolkit';
import removeReducer from './Books/Books';
import categoriesReducer from './Categories/Categories';

const store = configureStore({
  reducer: { books: removeReducer, category: categoriesReducer },
});
store.subscribe(() => {

});
export default store;
