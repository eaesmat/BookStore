import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from './Form';
import Book from './Book';
import { fetchData } from '../Redux/Books/Books';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const api = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/gezf2lUpWHKLD7feOMJf/books/';
  useEffect(
    () => async () => {
      const data = await axios.get(api).then((response) => response.data);
      const newData = [];
      Object.keys(data).forEach((item) => {
        newData.push({
          id: parseInt(item, 10),
          title: data[item][0].title,
          author: data[item][0].author,
          category: data[item][0].category,
        });
      });
      dispatch(fetchData(newData));
    },
    [],
  );
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
