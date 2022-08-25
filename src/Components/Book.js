/* eslint-disable no-unused-vars */
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { removeBook } from '../Redux/Books/Books';
import './Book.css';

// eslint-disable-next-line react/prop-types
const Books = ({ title, author, id }) => {
  const dispatch = useDispatch();
  const api = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/gezf2lUpWHKLD7feOMJf/books/';
  async function remove(id) {
    dispatch(removeBook(id));
    await axios.delete(`${api}${id}`);
  }
  const percentage = Math.floor(Math.random() * 100);
  return (
    <div className="container">
      <div className="container mt-4 border bg-white rounded shadow px-3 py-2 ">
        <div className="row">
          <div className="col">
            <small className="text-secondary fw-bold">Action</small>
            <h5 className="fw-bold">
              {title}
              <div className="text-primary p-0 m-0">{author}</div>
            </h5>
            <ul className="list-inline d-flex pt-2">
              <li className="text-primary pe-2">
                <button className="btn text-primary" type="submit">
                  Comment
                </button>
              </li>
              <div className="vr" />
              <li className="text-primary px-2 ">
                <button
                  className="btn text-primary"
                  type="submit"
                  onClick={() => dispatch(removeBook(id))}
                >
                  Remove
                </button>
              </li>
              <div className="vr" />
              <li className="text-primary ps-2 ">
                <button className="btn text-primary" type="submit">
                  Edit
                </button>
              </li>
            </ul>
          </div>
          <div className="col ps-3">
            {' '}
            <div
              className="d-flex align-center completion-holder pt-4"
              style={{ width: '50%' }}
            >
              <svg>
                <circle className="bg" cx="35" cy="35" r="30" />
                <circle
                  className="degree"
                  cx="35"
                  cy="35"
                  r="30"
                  style={{ strokeDashoffset: 360 - percentage * 1.85 }}
                />
              </svg>
              <div>
                <span className="percentage ms-4">
                  {percentage}
                  %
                  {' '}
                  <span className="completed ps-2">Completed</span>
                </span>
              </div>
            </div>
            {' '}
          </div>
          <div className="col border-start">
            <div className="ps-5">
              <small className="text-secondary ">CURRENT CHAPTERS</small>
              <p className="pt-1">Chapter 17</p>
              <button className="btn btn-primary btn-sm px-4" type="submit">
                UPDATE PROGRESS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
