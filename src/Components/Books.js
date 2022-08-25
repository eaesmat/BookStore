import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from './Form';
import Book from './Book';
import { fetchBooks } from '../Redux/Books/Books';

const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  const booksData = useSelector((state) => state.books);
  return (
    <div>
      {Object.keys(booksData).map((bookId) => (
        <Book
          key={bookId}
          title={booksData[bookId][0].title}
          author={booksData[bookId][0].author}
          id={bookId}
        />
      ))}
      <Form />
    </div>
  );
};

export default Books;
