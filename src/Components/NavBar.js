import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar navbar-expand-lg bg-white">
    <div className="container">
      <h3 className="pe-5 text-primary pt-2">
        <strong>Bookstore CMS </strong>
      </h3>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="text-decoration-none">
              <span className="nav-link" id="nav">
                BOOKS
              </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/categories" className="text-decoration-none ">
              <span className="nav-link">CATEGORIES</span>
            </Link>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <h2 className="pt-1">
            <i className="bi bi-person-circle text-primary" />
          </h2>
        </form>
      </div>
    </div>
  </nav>
);

export default NavBar;
