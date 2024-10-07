import React from "react";
function Contact() {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8355.691429029113!2d77.24538201479733!3d28.19026231835199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cd72efb2ef99d%3A0x418202b6060f0c79!2sUltimate%20Fitness%20Gym!5e0!3m2!1sen!2sin!4v1728286450968!5m2!1sen!2sin";
  return (
    <>
      <div className="container pt-5">
        <div className="d-flex flex-column text-center mb-5">
          <h4 className="text-primary font-weight-bold">Get In Touch</h4>
          <h4 className="display-4 font-weight-bold">Email Us For Any Query</h4>
        </div>
        <div className="row px-3 pb-2">
          <div className="col-sm-4 text-center mb-3">
            <i className="fa fa-2x fa-map-marker-alt mb-3 text-primary"></i>
            <h4 className="font-weight-bold">Address</h4>
            <p>Ultimate Fitness Gym Dhatir Palwal 121102</p>
          </div>
          <div className="col-sm-4 text-center mb-3">
            <i className="fa fa-2x fa-phone-alt mb-3 text-primary"></i>
            <h4 className="font-weight-bold">Phone</h4>
            <p>+91 9812087010</p>
          </div>
          <div className="col-sm-4 text-center mb-3">
            <i className="far fa-2x fa-envelope mb-3 text-primary"></i>
            <h4 className="font-weight-bold">Email</h4>
            <p>gymlover7010@gmail.com</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 pb-5">
            <iframe
              style={{ width: "100%", height: "392px" }}
              src={mapSrc}
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="ULTIMATE FITNESS GYM "
            ></iframe>
          </div>
          <div className="col-md-6 pb-4">
            <div className="contact-form">
              <div id="success"></div>
              <form
                name="sentMessage"
                id="form"
                noValidate="noValidate"
                action="https://api.web3forms.com/submit"
                method="POST"
                Name="needs-validation"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="556e8340-9021-43d9-aa79-339cb53a5634"
                />
                <input
                  type="hidden"
                  name="subject"
                  value="New Submission from Web3Forms"
                />
                <input
                  type="checkbox"
                  name="botcheck"
                  id=""
                  style={{ display: "none" }}
                />
                <div className="control-group">
                  <input
                    type="text"
                    name="name"
                    id="first_name"
                    className="form-control"
                    placeholder="your Name"
                    required
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Your email id "
                    required
                    data-validation-required-message="Please enter your email"
                  />
                  <div className="empty-feedback text-red-400 text-sm mt-1">
                    Please provide your email address.
                  </div>
                  <div className="invalid-feedback text-red-400 text-sm mt-1">
                    Please provide a valid email address.
                  </div>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <input
                    type="number"
                    className="form-control"
                    name="phone"
                    id="phone"
                    placeholder="your phone number"
                    required="required"
                    data-validation-required-message="Please enter a subject"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="6"
                    id="message"
                    placeholder="Message"
                    required="required"
                    data-validation-required-message="Please enter your message"
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div>
                  <button
                    className="btn btn-outline-primary"
                    type="submit"
                    id="sendMessageButton"
                  >
                    Send Message
                  </button>
                  <p
                    className="text-base text-center text-gray-400"
                    id="result"
                  ></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Contact End --> */}
      {/* <!-- Footer Start --> */}
      {/* <div className="footer container-fluid mt-5 py-5 px-sm-3 px-md-5 text-white">
        <div className="row pt-5">
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-primary mb-4">Get In Touch</h4>
            <p>
              <i className="fa fa-map-marker-alt mr-2"></i>Ultimate Fitness Gym
              Dhatir Palwal 121102
            </p>
            <p>
              <i className="fa fa-phone-alt mr-2"></i>+91 9812087010
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
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-primary mb-4">Quick Links</h4>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-white mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Home
              </a>
              <a className="text-white mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>About Us
              </a>
              <a className="text-white mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Our Features
              </a>
              <a className="text-white mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Workouts
              </a>
              <a className="text-white" href="#">
                <i className="fa fa-angle-right mr-2"></i>Contact Us
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-primary mb-4">Popular Links</h4>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-white mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Home
              </a>
              <a className="text-white mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>About Us
              </a>
              <a className="text-white mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Our Features
              </a>
              <a className="text-white mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Workouts
              </a>
              <a className="text-white" href="#">
                <i className="fa fa-angle-right mr-2"></i>Contact Us
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-primary mb-4">Opening Hours</h4>
            <h5 className="text-white">Monday - Saturday</h5>
            <p>5.00 AM - 9.00 PM</p>
            <h5 className="text-white"> Sunday</h5>
            <p>Off - Day</p>
          </div>
        </div>
        <div className="container border-top border-dark pt-5">
          <p className="m-0 text-center text-white">
            2023 &copy;{" "}
            <a className="text-white font-weight-bold" href="#">
              Gymlover.in
            </a>
            . All Rights Reserved. Designed by
            <a className="text-white font-weight-bold">GymloverDeepak</a>
          </p>
        </div>
      </div> */}
    </>
  );
}

export default Contact;
