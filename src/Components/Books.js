import Form from './Form';

const Books = () => (
  <div className="container">
    <div className="container mt-4 border bg-white rounded shadow p-4 ">
      <div className="row">
        <div className="col-6">
          <small className="text-secondary fw-bold">Action</small>
          <h5 className="fw-bold">
            The Hunger Game
            <h6 className="text-primary p-0 m-0">Suzanne Collins</h6>
          </h5>
          <ul className="list-inline d-flex pt-2">
            <li className="text-primary pe-2">Comment</li>
            <div className="vr" />
            <li className="text-primary px-2 ">Remove</li>
            <div className="vr" />
            <li className="text-primary ps-2 ">Edit</li>
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

    <Form />
  </div>
);

export default Books;