import React from "react";
import { Link } from "react-router-dom";
function Contact() {
  const mapSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.5989744500826!2d77.2497443!3d28.1891091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cd75b8f41aa03%3A0xaecb157b891bf5c3!2sUltimate%20fitness%20gym%20dhatir!5e0!3m2!1sen!2sin!4v1729410887675!5m2!1sen!2sin";
  return (
    <div className="bg-white">
      <div className="container pt-5 ">
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
              title="ULTIMATE FITNESS GYM  Dhatir "
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
                // name="needs-validation"
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
                  &nbsp;  &nbsp;
                  <Link to="/newmember"  className="btn btn-outline-primary"
                  >
                    Join Now
                  </Link>
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
    
    </div>
  );
}

export default Contact;
