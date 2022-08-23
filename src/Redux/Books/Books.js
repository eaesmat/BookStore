const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

export default (state = [], action) => {
  if (action.type === ADD_BOOK) {
    return [...state, state.book];
  }
  if (action.type === REMOVE_BOOK) {
    return state.filter((book) => book.id !== action.id);
  }

  return state;
};

export const AddBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const RemoveBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});
