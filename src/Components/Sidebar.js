import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-fluid p-0 nav-ba bg-white">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a href="/" className="navbar-brand">
          <h1
            className="m-0 display-6 text-uppercase new6"
          >
            ULTIMATE-FITNESS-GYM
          </h1>
        </a>

        {/* Toggler button for small screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible content */}
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarCollapse" style={{paddingLeft: "90px"}}
        >
          <ul className="navbar-nav ml-auto  bg-secondary" 
            style={{
              width: "100%",
              borderRadius: "37px",
              wordSpacing: "3px",
              fontWeight: "bold",
              padding:"5px 139px 4px 102px "
            }}>
            
            {/* Navigation links */}
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/news" className="nav-link">
                latest-news
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/workouts" className="nav-link">
                Workouts
              </Link>
            </li>

            {/* Dropdown for Diet-Plan */}
            <li className="nav-item dropdown">
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
              <ul className="dropdown-menu text-capitalize">
                <li>
                  <Link to="/weight-loss" className="dropdown-item">
                    Weight Loss
                  </Link>
                </li>
                <li>
                  <Link to="/weight-gain" className="dropdown-item">
                    Weight Gain
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/feedback" className="nav-link">
                Feedback
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                User-maintain
              </Link>
              <ul className="dropdown-menu text-capitalize">
                <li>
                  <Link to="/members" className="dropdown-item">
                    Members-Data
                  </Link>
                </li>
                <li>
                  <Link to="/newmember" className="dropdown-item">
                    Create-New-Member
                  </Link>
                </li>
              </ul>
            </li>
            &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <li className="nav-item">
            <img src="img/profile.avif" alt="Image2" className="mr-3 mt-1 rounded-circle"
                        style={{width:"40px",height:"40px"}}/>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
