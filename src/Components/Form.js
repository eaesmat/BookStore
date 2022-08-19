const Form = () => {
  return (
      <div className=" mt-5 ">
          <hr className=""/>
         <h5 className="text-secondary">Add New Book</h5>
          <form>
        <div className="row">
          <div className="col-7">
            <input
              className="form-control w-100"
              type="text"
              placeholder="Book title"
            />
          </div>
          <div className="col-3">
            <input className="form-control w-100" type="text" placeholder="Author" />
          </div>
          <div className="col-2">
            
            <button className="btn btn-primary w-100" type="submit" placeholder="Author"> ADD BOOK </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
