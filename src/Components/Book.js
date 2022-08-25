import React from 'react';
import './Book.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../Redux/Books/Books';

// eslint-disable-next-line react/prop-types
const Books = ({ title, author, id }) => {
  const dispatch = useDispatch();
  const deleteBook = () => dispatch(removeBook(id));
  const percentage = Math.floor(Math.random() * 100);
  return (
    <div className="container">
      <div className="container mt-4 border bg-white rounded shadow px-3 py-2 ">
        <div className="row">
          <div className="col">
            <small className="text-secondary fw-bold">Action</small>
            <h5 className="fw-bold Title">
              {title}
              <div className="lead p-0 m-0 author text-primary h6">{author}</div>
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
                  onClick={deleteBook}
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
          <div className="col ps-3 d-none d-sm-block">
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
              <div className="d-none d-sm-block">
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
              <p className="pt-1">
                Chapter
                {' '}
                {Math.floor((percentage / 2) * 1.5)}
              </p>
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
