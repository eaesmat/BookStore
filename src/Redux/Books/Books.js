const ADD_BOOK = 'bookstore/books/addBook';
const REMOVE_BOOK = 'bookstore/books/removeBook';
const defaultData = [
  { id: 1, title: 'A book to you', author: 'Esmatullah' },
  { id: 2, title: 'A book of better life', author: 'Ahmadzai' },
];
export default function removeReducer(state = defaultData, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.books];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}

export const addBook = (book) => ({
  type: ADD_BOOK,
  books: book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});
