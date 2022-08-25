import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from './Form';
import Book from './Book';
import { fetchBooks } from '../Redux/Books/Books';
import './Books.css';

const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  const booksData = useSelector((state) => state.books);
  return (
    <div>
      <div className="overflow-auto" id="scrollBar">
        {Object.keys(booksData).map((bookId) => (
          <Book
            key={bookId}
            title={booksData[bookId][0].title}
            author={booksData[bookId][0].author}
            id={bookId}
          />
        ))}
      </div>
      <Form />
    </div>
  );
};

export default Books;
