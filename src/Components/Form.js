import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../Redux/Books/Books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const api = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/gezf2lUpWHKLD7feOMJf/books/';

  function changeTitle(e) {
    setTitle(e.target.value);
  }
  function changeAuthor(e) {
    setAuthor(e.target.value);
  }
  async function sendData(e) {
    // input validation
    e.preventDefault();
    if (title.trim() !== '' && author.trim() !== '') {
      const id = new Date().getTime(); // create a new ID each milliseconds.
      dispatch(addBook({ id, title, author }));
      await axios.post(api, {
        item_id: id,
        title,
        author,
        category: 'under construction',
      });
    }
    setTitle('');
    setAuthor('');
  }
  return (
    <div className=" mt-5 container">
      <hr className="" />
      <h5 className="text-secondary">Add New Book</h5>
      <form onSubmit={sendData}>
        <div className="row">
          <div className="col-7">
            <input
              value={title}
              onChange={changeTitle}
              className="form-control w-100"
              type="text"
              placeholder="Book title"
              required
            />
          </div>
          <div className="col-3">
            <input
              className="form-control w-100"
              type="text"
              placeholder="Author"
              value={author}
              onChange={changeAuthor}
              required
            />
          </div>
          <div className="col-2">
            <button className="btn btn-primary w-100" type="submit">
              {' '}
              ADD BOOK
              {' '}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
