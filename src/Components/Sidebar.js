import { Link } from "react-router-dom";

const Header = () => {
  const uuid = localStorage.getItem("uuid");
  const handleLogout = () => {
    // Clear local storage
    localStorage.clear();
    console.log("Local storage cleared!");

    // Optionally, redirect or perform other actions after logout
    window.location.href = '/login'; // Redirect to login page
  };

  return (
    <div className="container-fluid p-0 nav-ba bg-white mynavheader">
      <nav className="navbar navbar-expand-lg navbar-dark" style={{    width: "fit-content"}}>
        <a href="/" className="navbar-brand">
          <h1 className="m-0 display-6 text-uppercase new6" style={{paddingLeft: "90px",color:"Red",textShadow: "1px 1px yellow"}}>
            ULTIMATE-FITNESS-GYM
          </h1>
        </a>
&nbsp;&nbsp;
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
          <span className="navbar-toggler-icon" style={{color:"red"}}></span>
        </button>

        {/* Collapsible content */}
        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
          <ul
            className="navbar-nav ml-auto bg-secondary"
            style={{
              width: "100%",
              borderRadius: "37px",
              wordSpacing: "3px",
              fontWeight: "bold",
              padding: "5px 139px 4px 102px",
            }}
          >
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
                Latest News
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
                Diet Plan
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
            &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <li className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="img/profile.avif"
                  alt="Image2"
                  className="mr-3 mt-1 rounded-circle"
                  style={{ width: "40px", height: "40px" }}
                />
              </Link>
              <ul className="dropdown-menu text-capitalize">
                <li>
                  <Link to="/members" className="dropdown-item">
                    Members Data
                  </Link>
                </li>
                <li>
                  <Link to="/newmember" className="dropdown-item">
                    Create New Member
                  </Link>
                </li>
                {uuid?.length > 0 ? (
                  <li>
                    <button className="btn btn-primary" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                ) : (
                  <li>
                    <Link to="/login" className="dropdown-item btn btn-primary">
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
