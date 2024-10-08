import React from 'react'
import "./Client.css";
function Client() {
  return (
    <div className="container ">
    <div className="container-fluid position-relative testimonial my-5">
    
      <div className="row px-2 align-items-center">
        <div className="col-md-6 bg-secondary">
          <div
            className="d-flex align-items-center px-3"
            style={{ height: "500px" }}
          >
            <div
              id="carouselId"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators new5">
                <li
                  data-target="#carouselId"
                  data-slide-to="0"
                ></li>
                <li data-target="#carouselId" id="carouselId1" data-slide-to="1" ></li>
                <li data-target="#carouselId"  id="carouselId2" data-slide-to="2" ></li>
              </ol>
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item ">
                  <div className="d-flex align-items-center mb-4 text-white">
                    <img
                      width="80"
                      height="80"
                      className="rounded-circle bg-dark p-2"
                      src="img/Neeraj.jpeg"
                      alt="Image"
                    />
                    <div className="pl-4">
                      <h4 className="text-primary">Neeraj</h4>
                      <p className="m-0">Manager</p>
                    </div>
                  </div>
                  <div className="testimonial-text position-relative border bg-dark text-white mb-5 p-4">
                    i am so happy that you provide me best training now
                    i am good Health and Fitness
                    <li>Great GymloverDeepak</li>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex align-items-center mb-4 text-white">
                    <img
                      width="80"
                      height="80"
                      className="rounded-circle bg-dark p-2"
                      src="img/Ranjeet.jpeg"
                      alt="Image"
                    />
                    <div className="pl-4">
                      <h4 className="text-primary">Ranjeet</h4>
                      <p className="m-0">Cab-Driver</p>
                    </div>
                  </div>
                  <div className="testimonial-text position-relative border bg-dark text-white mb-5 p-4">
                    follow you Diet plan and workout i will changed my
                    BodyWeight Now i am fit and fine !
                    <li>i am so happy with you GymloverDeepak</li>
                  </div>
                </div>
                <div className="carousel-item active">
                  <div className="d-flex align-items-center mb-4 text-white">
                    <img
                      width="80"
                      height="80"
                      className="rounded-circle bg-dark p-2"
                      src="img/testimonial-1.jpeg"
                      alt="Image"
                    />
                    <div className="pl-4">
                      <h4 className="text-primary">Sona Khan</h4>
                      <p className="m-0">Digital Markiting </p>
                    </div>
                  </div>
                  <div className="testimonial-text position-relative border bg-dark new2 mb-5 p-4">
                    because of you i changed my body Shape and now i
                    Have a Fit Body
                    <li>Thanks GymloverDeepak</li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="pl-md-3">
            <h4 className="new1" style={{    paddingRight: "162px"}}>Deepak</h4>
            <h4 className="display-4 mb-3" style={{    paddingRight: "162px"}}>
              What Our Clients Say?
            </h4>
            <p className="m-0" style={{fontColor:"black",paddingRight: "162px",fontWeight:"bold"}}>
            "We are happy 😊 to train with you because
            <br/> you help us achieve our fitness goals with your tips."
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Client