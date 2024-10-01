import React from "react";

function Sidebar() {
  return (
    <>
      <div className="App">
        <div className="container-fluid p-0 nav-bar">
          <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
            <a href="" className="navbar-brand">
              <h1 className="m-0 display-4 font-weight-bold text-uppercase text-white">
                Gymlover
              </h1>
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav ml-auto p-4 bg-secondary">
                <a href="/home" className="nav-item nav-link active">
                  Home
                </a>
                <a href="about" className="nav-item nav-link">
                  About Us
                </a>
                <a href="workouts" className="nav-item nav-link">
                  Our Features
                </a>
                <a href="workouts" className="nav-item nav-link">
                  Workouts
                </a>
                <div className="nav-item dropdown">
                  <a
                    href="/"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Diet- Plan{" "}
                  </a>
                  <div className="dropdown-menu text-capitalize">
                    <a href="blog.html" className="dropdown-item">
                      Weight-Loss
                    </a>
                    <a href="single.html" className="dropdown-item">
                      Weight-Gain
                    </a>
                  </div>
                </div>
                <a href="contact" className="nav-item nav-link">
                  Contact
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
