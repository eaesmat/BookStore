import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <div>
      {books.map((item) => (
        <Book key={item.id} id={item.id} title={item.title} author={item.author} />
      ))}
      <Form />
    </div>
  );
};

export default Books;
