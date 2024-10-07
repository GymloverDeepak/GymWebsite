import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-fluid p-0 nav-bar">
      <nav className="navbar navbar-expand-lg bg-none navbar-dark">
        <a href="/" className="navbar-brand">
          <h1
            className="m-0 display-4 font-weight-bold text-uppercase"
            style={{ color: "#15b51b", fontWeight: "bold" }}
          >
            ULTIMATE-FITNESS-GYM
          </h1>
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarCollapse"
          style={{
            paddingLeft: "100px",
            letterSpacing: "3px",
            wordSpacing: "29px",
            paddingRight: "92px",
          }}
        >
          <div
            className="navbar-nav ml-auto p-3 bg-secondary"
            style={{
              width: "100%",
              borderRadius: "37px",
              fontWeight: "bold",
              content: "left",
            }}
          >
            <Link to="/" className="nav-item nav-link active">
              Home
            </Link>
            <Link to="/about" className="nav-item nav-link">
              AboutUs
            </Link>
            <Link to="/features" className="nav-item nav-link">
              Our-Features
            </Link>
            <Link to="/workouts" className="nav-item nav-link">
              Workouts
            </Link>
            <div className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Diet-Plan
              </Link>
              <ul
                className="dropdown-menu text-capitalize"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <Link to="/weight-loss" className="dropdown-item">
                    Weight-Loss
                  </Link>
                </li>
                <li>
                  <Link to="/weight-gain" className="dropdown-item">
                    Weight-Gain
                  </Link>
                </li>
              </ul>
            </div>
            <Link to="/contact" className="nav-item nav-link">
              Contact
            </Link>
            <Link to="/feedback" className="nav-item nav-link">
              FeedBack
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
