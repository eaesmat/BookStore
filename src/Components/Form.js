import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../Redux/Books/Books';

const Form = () => {
  const [state, setState] = useState({
    title: '',
    author: '',
    category: 'Movies',
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, author, category } = state;
    if (title.length > 0 && author.length > 0) {
      dispatch(
        addBook({
          title,
          author,
          item_id: uuidv4(),
          category,
        }),
      );
    }
    state.title = '';
    state.author = '';
  };
  return (
    <div className=" mt-5 container">
      <hr className="" />
      <h5 className="text-secondary">Add New Book</h5>
      <form>
        <div className="row">
          <div className="col-7">
            <input
              onChange={handleChange}
              className="form-control w-100"
              type="text"
              placeholder="Book title"
              required
              id="title"
              name="title"
              value={state.title}
            />
          </div>
          <div className="col-3">
            <input
              className="form-control w-100"
              type="text"
              placeholder="Author"
              onChange={handleChange}
              id="author"
              name="author"
              value={state.author}
              required
            />
          </div>
          <div className="col-2">
            <button
              className="btn btn-primary w-100"
              type="submit"
              onClick={handleSubmit}
            >
              ADD BOOK
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
