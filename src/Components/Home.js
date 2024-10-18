import React from "react";
import Bmi from "./Bmi";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Client from "./Client";
function Home() {
  return (
    <>
      <div className="bg-white">
        <div className="container-fluid p-0">
          <div
            id="blog-carousel"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="w-100" src="img/cover2.png" alt="Image" />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  {/* <h3 className="text-primary text-capitalize m-0">
                      Ultimate-Fitness-Gym
                    </h3>
                    <h2 className="display-2 m-0 mt-2 mt-md-4 text-white font-weight-bold text-capitalize">
                      Best Gym In Town
                    </h2> */}
                  <Link
                    to="/newmember"
                    className="btn btn-lg btn-outline-light mt-3 mt-md-5 py-md-3 px-md-5 btn btn-primary"
                  >
                    Join Us Now
                  </Link>
                </div>
              </div>
              <div className="carousel-item">
                <img className="w-100" src="img/cover1.png" alt="Image" />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  {/* <h3 className="text-primary text-capitalize m-0">
                      Gym & Fitness Center
                    </h3> */}
                  {/* <h2 className="display-2 m-0 mt-2 mt-md-4 text-white font-weight-bold text-capitalize">
                      Get Body In Shape
                    </h2> */}
                  <Link
                    to="/newmember"
                    className="btn btn-lg btn-outline-light mt-3 mt-md-5 py-md-3 px-md-5 btn btn-primary"
                  >
                    Join Us Now
                  </Link>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#blog-carousel"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </a>
            <a
              className="carousel-control-next"
              href="#blog-carousel"
              data-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </a>
          </div>
        </div>

        <div className="container gym-className mb-5">
          <div className="row px-3">
            <div className="col-md-6 p-0">
              <div className="gym-className-box d-flex flex-column align-items-end justify-content-center bg-primary text-right text-white py-5 px-5">
                <i className="flaticon-six-pack"></i>
                <h3 className="display-4 mb-3 text-white font-weight-bold">
                  Body Building
                </h3>
                <p>
                  Bodybuilding is the use of progressive resistance exercise to
                  control and develop one's muscles by muscle hypertrophy for
                  aesthetic purposes. It is distinct from similar activities
                  such as powerlifting because it focuses on physical appearance
                  instead of strength
                </p>
                <a href="" className="btn btn-lg btn-outline-light mt-4 px-4">
                  Start Now
                </a>
              </div>
            </div>
            <div className="col-md-6 p-0">
              <div className="gym-className-box d-flex flex-column align-items-start justify-content-center bg-secondary text-left text-white py-5 px-5">
                <i className="flaticon-bodybuilding"></i>
                <h3 className="display-4 mb-3 text-white font-weight-bold">
                  Muscle Building
                </h3>
                <p>
                  What does it mean to build muscle? Muscle size increases when
                  a person continually challenges the muscles to deal with
                  higher levels of resistance or weight. This process is known
                  as muscle hypertrophy. Muscle hypertrophy occurs when the
                  fibers of the muscles sustain damage or injury.
                </p>
                <a href="" className="btn btn-lg btn-outline-light mt-4 px-4">
                  Start Now
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                className="img-fluid mb-4 mb-lg-0"
                src="img/about.jpg"
                alt="Image"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="display-4 font-weight-bold mb-4">
                10 Years Experience
              </h2>
              <p>
                I have Best Experience and best Knowledge to share With You{" "}
              </p>
              <div className="row py-2">
                <div className="col-sm-6">
                  <i className="flaticon-barbell display-2 text-primary"></i>
                  <h4 className="font-weight-bold">Certified GYM Center</h4>
                  <p>
                    Mr Delhi 2023 in Man Physique Gold Medal in India Classic in
                    Man Physique
                  </p>
                </div>
                <div className="col-sm-6">
                  <i className="flaticon-medal display-2 text-primary"></i>
                  <h4 className="font-weight-bold">Award Winning</h4>
                  <p>Gold Medal in India Classic in Man Physique 2023</p>
                </div>
              </div>
              <a href="" className="btn btn-lg px-4 btn-outline-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="container-fluid my-5">
          <div className="row">
            <div className="col-lg-4 p-0">
              <div
                className="d-flex align-items-center bg-secondary text-white px-5"
                style={{ height: "300px" }}
              >
                <i className="flaticon-training display-3 text-primary mr-3"></i>
                <div className="">
                  <h2 className="text-white mb-3">Progression</h2>
                  <p>
                    I achieved my first Goal in 2023 when i am announced Mr.
                    Delhi in Man Physique
                  </p>
                  <p>
                    2nd achieved my Goal in 2023 when i am announced Gold Medal
                    For India Classic in Man Physique
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-0">
              <div
                className="d-flex align-items-center bg-primary text-white px-5"
                style={{ height: "300px" }}
              >
                <i className="flaticon-weightlifting display-3 text-secondary mr-3"></i>
                <div className="">
                  <h2 className="text-white mb-3">Workout</h2>
                  <p>
                    The Pain You Feel Today Will be The Strength you Feel
                    TOMORROW ! GymloverDeepak....
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-0">
              <div
                className="d-flex align-items-center bg-secondary text-white px-5"
                style={{ height: "300px" }}
              >
                <i className="flaticon-treadmill display-3 text-primary mr-3"></i>
                <div className="">
                  <h2 className="text-white mb-3"> Diet & Nutrition</h2>
                  <p> i will Provide both natural and supplement Diet Plan</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container feature pt-5">
          <div className="d-flex flex-column text-center mb-5">
            <h4 className="text-primary font-weight-bold">Why Choose Us?</h4>
            <h4 className="display-4 font-weight-bold">
              Benifits of Joining Our GYM
            </h4>
          </div>
          <div className="row">
            <div className="col-md-6 mb-5">
              <div className="row align-items-center">
                <div className="col-sm-5">
                  <img
                    className="img-fluid mb-3 mb-sm-0"
                    src="img/Feature11.jpg"
                    alt="Image"
                  />
                  <i className="flaticon-barbell"></i>
                </div>
                <div className="col-sm-7">
                  <h4 className="font-weight-bold">Videos Instruction</h4>
                  <p>i will Provide you to watch workouts Videos </p>
                  <h4 className="font-weight-bold">Videos Links</h4>
                  <a
                    href="https://www.youtube.com/@gymloverdeepak/videos"
                    className="btn btn-lg px-4 btn-outline-primary"
                  >
                    Click Here
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-5">
              <div className="row align-items-center">
                <div className="col-sm-5">
                  <img
                    className="img-fluid mb-3 mb-sm-0"
                    src="img/feature-2.jpg"
                    alt="Image"
                  />
                  <i className="flaticon-training"></i>
                </div>
                <div className="col-sm-7">
                  <h4 className="font-weight-bold">Training Calendar</h4>
                  <p>
                    The benefits of time management include greater clarity,
                    greater capability, and greater confidence. When you are
                    clear on the best use of your time, you become more focused
                    and productive. Good time management helps you achieve
                    bigger goals, reduces procrastination, and increases
                    productivity
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-5">
              <div className="row align-items-center">
                <div className="col-sm-5">
                  <img
                    className="img-fluid mb-3 mb-sm-0"
                    src="img/feature-3.jpg"
                    alt="Image"
                  />
                  <i className="flaticon-trends"></i>
                </div>
                <div className="col-sm-7">
                  <h4 className="font-weight-bold">Free- diet Plan</h4>
                  <p>
                    Eat healthy live fit because Diet is tha first rule of
                    fitness
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-5">
              <div className="row align-items-center">
                <div className="col-sm-5">
                  <img
                    className="img-fluid mb-3 mb-sm-0"
                    src="img/feature-4.jpg"
                    alt="Image"
                  />
                  <i className="flaticon-support"></i>
                </div>
                <div className="col-sm-7">
                  <h4 className="font-weight-bold">Community Support</h4>
                  <p>
                    {" "}
                    The support may be information, advice, practical help,
                    Workout help or a combination of Fitness. The community
                    service may be run by federal, state or local Gym or by a
                    National organisation such as a GoalGym
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="subscribe container-fluid my-5 py-5 text-center"
          style={{ height: "766px" }}
        >
          <h4
            className="display-4 text-white font-weight-bold mt-5 mb-3"
            style={{ textAlign: "center", paddingTop: "259px" }}
          >
            Subscribe Our Newsletter
          </h4>
          <p className="text-white mb-4">
            and get Our latest Updates in your inbox
          </p>
          {/* <form className="form-inline justify-content-center mb-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control-lg"
                  placeholder="Your Email"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="submit">
                    Subscribe
                  </button>
                </div>
              </div>
            </form> */}
        </div>

        <div className="container gym-feature py-5">
          <div className="d-flex flex-column text-center mb-5">
            <h4 className="text-primary font-weight-bold">Class Timetable</h4>
            <h4 className="display-4 font-weight-bold">
              Working Hours and Class Time
            </h4>
          </div>
          <div className="tab-className">
            <ul className="nav nav-pills justify-content-center mb-4">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-toggle="pill"
                  href="#className-all"
                >
                  All Workouts
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="pill"
                  href="#className-cardio"
                >
                  Cardio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="pill"
                  href="#className-crossfit"
                >
                  Crossfit
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="pill"
                  href="#className-powerlifting"
                >
                  Powerlifting
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div id="className-all" className="container tab-pane p-0 active">
                <div className="table-responsive">
                  <table className="table table-bordered table-lg m-0">
                    <thead className="bg-secondary text-white text-center">
                      <tr>
                        <th>Time</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                        <th>Sunday</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      <tr>
                        <th className="bg-secondary text-white align-middle">
                          6.00am - 8.00am
                        </th>
                        <td>
                          <h5>Cardio</h5>Deepak
                        </td>
                        <td></td>
                        <td>
                          <h5>Crossfit</h5>Gymlover
                        </td>
                        <td></td>
                        <td>
                          <h5>Power Lifting</h5>GymloverDeepak
                        </td>
                        <td></td>
                        <td>
                          <h5>Cardio</h5>Deepak
                        </td>
                      </tr>
                      <tr>
                        <th className="bg-secondary text-white align-middle">
                          10.00am - 12.00am
                        </th>
                        <td></td>
                        <td>
                          <h5>Power Lifting</h5>GymloverDeepak
                        </td>
                        <td></td>
                        <td>
                          <h5>Cardio</h5>Deepak
                        </td>
                        <td></td>
                        <td>
                          <h5>Crossfit</h5>Gymlover
                        </td>
                        <td></td>
                      </tr>
                      <tr>
                        <th className="bg-secondary text-white align-middle">
                          5.00pm - 7.00pm
                        </th>
                        <td>
                          <h5>Crossfit</h5>Gymlover
                        </td>
                        <td></td>
                        <td>
                          <h5>Power Lifting</h5>GymloverDeepak
                        </td>
                        <td></td>
                        <td>
                          <h5>Cardio</h5>Deepak
                        </td>
                        <td></td>
                        <td>
                          <h5>Crossfit</h5>Gymlover
                        </td>
                      </tr>
                      <tr>
                        <th className="bg-secondary text-white align-middle">
                          7.00pm - 9.00pm
                        </th>
                        <td></td>
                        <td>
                          <h5>Cardio</h5>Deepak
                        </td>
                        <td></td>
                        <td>
                          <h5>Crossfit</h5>Gymlover
                        </td>
                        <td></td>
                        <td>
                          <h5>Power Lifting</h5>GymloverDeepak
                        </td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                id="className-cardio"
                className="container tab-pane fade p-0"
              >
                <div className="table-responsive">
                  <table className="table table-bordered table-lg m-0">
                    <thead className="bg-secondary text-white text-center">
                      <tr>
                        <th>Time</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                        <th>Sunday</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      <tr>
                        <th className="bg-secondary text-white align-middle">
                          6.00am - 8.00am
                        </th>
                        <td className="bg-primary text-white">
                          <h5 className="text-white">Cardio</h5>Deepak
                        </td>
                        <td></td>
                        <td>
                          <h5>Crossfit</h5>Gymlover
                        </td>
                        <td></td>
                        <td>
                          <h5>Power Lifting</h5>GymloverDeepak
                        </td>
                        <td></td>
                        <td className="bg-primary text-white">
                          <h5 className="text-white">Cardio</h5>Deepak
                        </td>
                      </tr>
                      <tr>
                        <th className="bg-secondary text-white align-middle">
                          10.00am - 12.00am
                        </th>
                        <td></td>
                        <td>
                          <h5>Power Lifting</h5>GymloverDeepak
                        </td>
                        <td></td>
                        <td className="bg-primary text-white">
                          <h5 className="text-white">Cardio</h5>Deepak
                        </td>
                        <td></td>
                        <td>
                          <h5>Crossfit</h5>Gymlover
                        </td>
                        <td></td>
                      </tr>
                      <tr>
                        <th className="bg-secondary text-white align-middle">
                          5.00pm - 7.00pm
                        </th>
                        <td>
                          <h5>Crossfit</h5>Gymlover
                        </td>
                        <td></td>
                        <td>
                          <h5>Power Lifting</h5>GymloverDeepak
                        </td>
                        <td></td>
                        <td className="bg-primary text-white">
                          <h5 className="text-white">Cardio</h5>Deepak
                        </td>
                        <td></td>
                        <td>
                          <h5>Crossfit</h5>Gymlover
                        </td>
                      </tr>
                      <tr>
                        <th className="bg-secondary text-white align-middle">
                          7.00pm - 9.00pm
                        </th>
                        <td></td>
                        <td className="bg-primary text-white">
                          <h5 className="text-white">Cardio</h5>Deepak
                        </td>
                        <td></td>
                        <td>
                          <h5>Crossfit</h5>Gymlover
                        </td>
                        <td></td>
                        <td>
                          <h5>Power Lifting</h5>GymloverDeepak
                        </td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                id="className-crossfit"
                className="container tab-pane fade p-0"
              >
                <div className="table-responsive">
                  <table className="table table-bordered table-lg m-0">
                    <thead className="bg-secondary text-white text-center">
                      <tr>
                        <th>Time</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                        <th>Sunday</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      <tr>
                        <th className="bg-secondary text-white align-middle">
                          6.00am - 8.00am
                        </th>
                        <td>
                          <h5>Cardio</h5>Deepak
                        </td>
                        <td></td>
                        <td className="bg-primary text-white">
                          <h5 className="text-white">Crossfit</h5>Gymlover
                        </td>
                        <td></td>
                        <td>
                          <h5>Power Lifting</h5>GymloverDeepak
                        </td>
                        <td></td>
                        <td>
                          <h5>Cardio</h5>Deepak
                        </td>
                      </tr>
                      <tr>
                        <th className="bg-secondary text-white align-middle">
                          10.00am - 12.00am
                        </th>
                        <td></td>
                        <td>
                          <h5>Power Lifting</h5>GymloverDeepak
                        </td>
                        <td></td>
                        <td>
                          <h5>Cardio</h5>Deepak
                        </td>
                        <td></td>
                        <td className="bg-primary text-white">
                          <h5 className="text-white">Crossfit</h5>Gymlover
                        </td>
                        <td></td>
                      </tr>
                      <tr>
                        <th className="bg-secondary text-white align-middle">
                          5.00pm - 7.00pm
                        </th>
                        <td className="bg-primary text-white">
                          <h5 className="text-white">Crossfit</h5>Gymlover
                        </td>
                        <td></td>
                        <td>
                          <h5>Power Lifting</h5>GymloverDeepak
                        </td>
                        <td></td>
                        <td>
                          <h5>Cardio</h5>Deepak
                        </td>
                        <td></td>
                        <td className="bg-primary text-white">
                          <h5 className="text-white">Crossfit</h5>Gymlover
                        </td>
                      </tr>
                      <tr>
                        <th className="bg-secondary text-white align-middle">
                          7.00pm - 9.00pm
                        </th>
                        <td></td>
                        <td>
                          <h5>Cardio</h5>Deepak
                        </td>
                        <td></td>
                        <td className="bg-primary text-white">
                          <h5 className="text-white">Crossfit</h5>Gymlover
                        </td>
                        <td></td>
                        <td>
                          <h5>Power Lifting</h5>GymloverDeepak
                        </td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                id="className-powerlifting"
                className="container tab-pane fade p-0"
              >
                <div className="table-responsive">
                  <table className="table table-bordered table-lg m-0">
                    <thead className="bg-secondary text-white text-center">
                      <tr>
                        <th>Time</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                        <th>Sunday</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      <tr>
                        <th className="bg-secondary text-white align-middle">
                          6.00am - 8.00am
                        </th>
                        <td>
                          <h5>Cardio</h5>Deepak
                        </td>
                        <td></td>
                        <td>
                          <h5>Crossfit</h5>Gymlover
                        </td>
                        <td></td>
                        <td className="bg-primary text-white">
                          <h5 className="text-white">Power Lifting</h5>
                          GymloverDeepak
                        </td>
                        <td></td>
                        <td>
                          <h5>Cardio</h5>Deepak
                        </td>
                      </tr>
                      <tr>
                        <th className="bg-secondary text-white align-middle">
                          10.00am - 12.00am
                        </th>
                        <td></td>
                        <td className="bg-primary text-white">
                          <h5 className="text-white">Power Lifting</h5>
                          GymloverDeepak
                        </td>
                        <td></td>
                        <td>
                          <h5>Cardio</h5>Deepak
                        </td>
                        <td></td>
                        <td>
                          <h5>Crossfit</h5>Gymlover
                        </td>
                        <td></td>
                      </tr>
                      <tr>
                        <th className="bg-secondary text-white align-middle">
                          5.00pm - 7.00pm
                        </th>
                        <td>
                          <h5>Crossfit</h5>Gymlover
                        </td>
                        <td></td>
                        <td className="bg-primary text-white">
                          <h5 className="text-white">Power Lifting</h5>
                          GymloverDeepak
                        </td>
                        <td></td>
                        <td>
                          <h5>Cardio</h5>Deepak
                        </td>
                        <td></td>
                        <td>
                          <h5>Crossfit</h5>Gymlover
                        </td>
                      </tr>
                      <tr>
                        <th className="bg-secondary text-white align-middle">
                          7.00pm - 9.00pm
                        </th>
                        <td></td>
                        <td>
                          <h5>Cardio</h5>Deepak
                        </td>
                        <td></td>
                        <td>
                          <h5>Crossfit</h5>Gymlover
                        </td>
                        <td></td>
                        <td className="bg-primary text-white">
                          <h5 className="text-white">Power Lifting</h5>
                          GymloverDeepak
                        </td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Bmi />

        <div className="container pt-5 team">
          <div className="d-flex flex-column text-center mb-5">
            <h4 className="text-primary font-weight-bold">Our Trainers</h4>
            <h4 className="display-4 font-weight-bold">
              Meet Our Expert Trainers
            </h4>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-5">
              <div className="card border-0 bg-secondary text-center text-white">
                <img className="card-img-top" src="img/team-1.jpg" alt="" />
                <div className="card-social d-flex align-items-center justify-content-center">
                  <a
                    className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                    style={{ width: "40px", height: "40px" }}
                    href="9812087010"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a
                    className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                    style={{ width: "40px", height: "40px" }}
                    href="https://www.facebook.com/deepak.kataria.94009?mibextid=ZbWKwL"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                    style={{ width: "40px", height: "40px" }}
                    href="https://www.youtube.com/channel/UC7fJQmyoqieFBP7nM_SttFg"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a
                    className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                    style={{ width: "40px", height: "40px" }}
                    href="https://instagram.com/i_gymlover_deepak?igshid=ZGUzMzM3NWJiOQ=="
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
                <div className="card-body bg-secondary">
                  <h4 className="card-title text-primary">Gymlover</h4>
                  <p className="card-text">Trainer</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <div className="card border-0 bg-secondary text-center text-white">
                <img className="card-img-top" src="img/team-2.jpg" alt="" />
                <div className="card-social d-flex align-items-center justify-content-center">
                  <a
                    className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                    style={{ width: "40px", height: "40px" }}
                    href="9812087010"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a
                    className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                    style={{ width: "40px", height: "40px" }}
                    href="https://www.facebook.com/deepak.kataria.94009?mibextid=ZbWKwL"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                    style={{ width: "40px", height: "40px" }}
                    href="https://www.youtube.com/channel/UC7fJQmyoqieFBP7nM_SttFg"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a
                    className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                    style={{ width: "40px", height: "40px" }}
                    href="https://instagram.com/i_gymlover_deepak?igshid=ZGUzMzM3NWJiOQ=="
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
                <div className="card-body bg-secondary">
                  <h4 className="card-title text-primary">Gymlover</h4>
                  <p className="card-text">Trainer</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <div className="card border-0 bg-secondary text-center text-white">
                <img className="card-img-top" src="img/naveen1.jpg" alt="" />
                <div className="card-social d-flex align-items-center justify-content-center">
                  <a
                    className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                    style={{ width: "40px", height: "40px" }}
                    href="9812087010"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a
                    className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                    style={{ width: "40px", height: "40px" }}
                    href="https://www.youtube.com/watch?v=XL5ZFEy6KDc"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                    style={{ width: "40px", height: "40px" }}
                    href="https://www.youtube.com/watch?v=XL5ZFEy6KDc"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a
                    className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                    style={{ width: "40px", height: "40px" }}
                    href="https://www.instagram.com/naveendagar__?igsh=MTEycTZ1eHg0OWduZg=="
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
                <div className="card-body bg-secondary">
                  <h4 className="card-title text-primary">Naveen</h4>
                  <p className="card-text">Trainer</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <div className="card border-0 bg-secondary text-center text-white">
                <img className="card-img-top" src="img/team-4.jpg" alt="" />
                <div className="card-social d-flex align-items-center justify-content-center">
                  <a
                    className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                    style={{ width: "40px", height: "40px" }}
                    href="9812087010"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a
                    className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                    style={{ width: "40px", height: "40px" }}
                    href="https://www.facebook.com/deepak.kataria.94009?mibextid=ZbWKwL"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                    style={{ width: "40px", height: "40px" }}
                    href="https://www.youtube.com/channel/UC7fJQmyoqieFBP7nM_SttFg"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a
                    className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                    style={{ width: "40px", height: "40px" }}
                    href="https://instagram.com/i_gymlover_deepak?igshid=ZGUzMzM3NWJiOQ=="
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
                <div className="card-body bg-secondary">
                  <h4 className="card-title text-primary">Gymlover</h4>
                  <p className="card-text">Trainer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Client />
        <div className="container pt-5">
          <div className="d-flex flex-column text-center mb-5">
            <h4 className="text-primary font-weight-bold">Our Results</h4>
            <h4 className="display-4 font-weight-bold">
              Latest Results With us
            </h4>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-5 blog-item">
              <img
                className="img-fluid mb-4"
                src="img/Supplement.jpg"
                alt="Image"
              />
              <div className="d-flex align-items-center mb-4">
                <div
                  className="d-flex flex-column align-items-center justify-content-center rounded-circle bg-primary text-white"
                  style={{ width: "80px", height: "80px" }}
                >
                  <small>01</small>
                  <strong className="text-uppercase m-0 text-white">Jan</strong>
                  <small>2023</small>
                </div>
                <div className="pl-3">
                  <h3 className="font-weight-bold">Fitness With Supplements</h3>
                  <div className="d-flex">
                    <small className="mr-2 text-muted">
                      <i className="fa fa-user"></i> Gymlover
                    </small>
                    <small className="mr-2 text-muted">
                      <i className="fa fa-folder"></i> Fitness
                    </small>
                    <small className="mr-2 text-muted">
                      <i className="fa fa-comments"></i> 1556 Comments
                    </small>
                  </div>
                </div>
              </div>
              Some dietary supplements can improve overall health and help
              manage some health conditions. For example: Calcium and vitamin D
              help keep bones strong and reduce bone loss. Folic acid decreases
              the risk of certain birth defects.
            </div>
            <div className="col-lg-6 mb-5 blog-item">
              <img
                className="img-fluid mb-4"
                src="img/Natural1.jpg"
                alt="Image"
              />
              <div className="d-flex align-items-center mb-4">
                <div
                  className="d-flex flex-column align-items-center justify-content-center rounded-circle bg-primary text-white"
                  style={{ width: "80px", height: "80px" }}
                >
                  <small>01</small>
                  <strong className="text-uppercase m-0 text-white">Jan</strong>
                  <small>2023</small>
                </div>
                <div className="pl-3">
                  <h3 className="font-weight-bold">
                    Fitness with Natural Diets
                  </h3>
                  <div className="d-flex">
                    <small className="mr-2 text-muted">
                      <i className="fa fa-user"></i> Gymlover
                    </small>
                    <small className="mr-2 text-muted">
                      <i className="fa fa-folder"></i> Fitness
                    </small>
                    <small className="mr-2 text-muted">
                      <i className="fa fa-comments"></i> 151 Comments
                    </small>
                  </div>
                </div>
              </div>
              Natural Fitness With No Junk FOODS.
            </div>
          </div>
        </div>
        <Footer />
        {/* <div className="footer container-fluid mt-5 py-5 px-sm-3 px-md-5 text-black">
            <div className="row pt-5">
              <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="text-primary mb-4">Get In Touch</h4>
                <p>
                  <i className="fa fa-map-marker-alt mr-2"></i>Ultimate Fitness
                  Gym Dhatir Palwal 121102
                </p>
                <p>
                  <i className="fa fa-phone-alt mr-2"></i>++91 9812087010
                </p>
                <p>
                  <i className="fa fa-envelope mr-2"></i>gymlover7010@gmail.com
                </p>
                <div className="d-flex justify-content-start mt-4">
                  <a
                    className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                    style={{ width: "40px", height: "40px" }}
                    href="9812087010"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a
                    className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                    style={{ width: "40px", height: "40px" }}
                    href="https://www.facebook.com/deepak.kataria.94009?mibextid=ZbWKwL"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                    style={{ width: "40px", height: "40px" }}
                    href="https://www.youtube.com/channel/UC7fJQmyoqieFBP7nM_SttFg"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a
                    className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                    style={{ width: "40px", height: "40px" }}
                    href="https://instagram.com/i_gymlover_deepak?igshid=ZGUzMzM3NWJiOQ=="
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-5 text-black">
                <h4 className="text-primary mb-4">Quick Links</h4>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-black mb-2" href="#">
                    <i className="fa fa-angle-right mr-2"></i>Home
                  </a>
                  <a className="text-black mb-2" href="#">
                    <i className="fa fa-angle-right mr-2"></i>About Us
                  </a>
                  <a className="text-black mb-2" href="#">
                    <i className="fa fa-angle-right mr-2"></i>Our Features
                  </a>
                  <a className="text-black mb-2" href="#">
                    <i className="fa fa-angle-right mr-2"></i>Workouts
                  </a>
                  <a className="text-black" href="#">
                    <i className="fa fa-angle-right mr-2"></i>Contact Us
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="text-primary mb-4">Popular Links</h4>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-black mb-2" href="#">
                    <i className="fa fa-angle-right mr-2"></i>Home
                  </a>
                  <a className="text-black mb-2" href="#">
                    <i className="fa fa-angle-right mr-2"></i>About Us
                  </a>
                  <a className="text-black mb-2" href="#">
                    <i className="fa fa-angle-right mr-2"></i>Our Features
                  </a>
                  <a className="text-black mb-2" href="#">
                    <i className="fa fa-angle-right mr-2"></i>Workouts
                  </a>
                  <a className="text-black" href="#">
                    <i className="fa fa-angle-right mr-2"></i>Contact Us
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="text-primary mb-4">Opening Hours</h4>
                <h5 className="text-black">Monday - Saturday</h5>
                <p>5.00 AM - 9.00 PM</p>
                <h5 className="text-black"> Sunday</h5>
                <p>Off - Day</p>
              </div>
            </div>
            <div className="container border-top border-dark pt-5">
              <p className="m-0 text-center text-black">
                <a className="text-black font-weight-bold" href="#">
                  ULTIMATE FITNESS GYM
                </a>
                ... All Rights Reserved. Designed by
                <a
                  className="text-black font-weight-bold"
                  href="https://htmlcodex.com"
                >
                  - GymloverDeepak
                </a>
              </p>
            </div>
          </div> */}
      </div>
    </>
  );
}

export default Home;
