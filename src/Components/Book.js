import { useDispatch } from 'react-redux';
import { removeBook } from '../Redux/Books/Books';

// eslint-disable-next-line react/prop-types
const Books = ({ title, author, id }) => {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="container mt-4 border bg-white rounded shadow px-3 py-2 ">
        <div className="row">
          <div className="col-6">
            <small className="text-secondary fw-bold">Action</small>
            <h5 className="fw-bold">
              {title}
              <h6 className="text-primary p-0 m-0">{author}</h6>
            </h5>
            <ul className="list-inline d-flex pt-2">
              <li className="text-primary pe-2">
                <button className="btn text-primary" type="submit">
                  Comment
                </button>
              </li>
              <div className="vr" />
              <li className="text-primary px-2 ">
                <button className="btn text-primary" type="submit" onClick={() => dispatch(removeBook(id))}>
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
          <div className="col-3" />
          <div className="col-3 border-start">
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
