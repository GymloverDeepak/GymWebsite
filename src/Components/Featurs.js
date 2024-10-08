import React from 'react'

function Featurs() {
  return (
    <> <div className="footer container-fluid mt-5 py-5 px-sm-3 px-md-5 text-white">
    <div className="row pt-5">
        <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-primary mb-4">Get In Touch</h4>
            <p><i className="fa fa-map-marker-alt mr-2"></i>Ultimate Fitness Gym Dhatir Palwal  121102</p>
            <p><i className="fa fa-phone-alt mr-2"></i>++91 9812087010</p>
            <p><i className="fa fa-envelope mr-2"></i>gymlover7010@gmail.com</p>
            <div className="d-flex justify-content-start mt-4">
                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{Height:'40px',width:'40px'}} href="9812087010"><i className="fab fa-whatsapp"></i></a>
                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{Height:'40px',width:'40px'}}href="https://www.facebook.com/deepak.kataria.94009?mibextid=ZbWKwL"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{Height:'40px',width:'40px'}} href="https://www.youtube.com/channel/UC7fJQmyoqieFBP7nM_SttFg"><i className="fab fa-youtube"></i></a>
                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{Height:'40px',width:'40px'}} href="https://instagram.com/i_gymlover_deepak?igshid=ZGUzMzM3NWJiOQ=="><i className="fab fa-instagram"></i></a>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-primary mb-4">Quick Links</h4>
            <div className="d-flex flex-column justify-content-start">
                <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Home</a>
                <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>About Us</a>
                <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Our Features</a>
                <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Workouts</a>
                <a className="text-white" href="#"><i className="fa fa-angle-right mr-2"></i>Contact Us</a>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-primary mb-4">Popular Links</h4>
            <div className="d-flex flex-column justify-content-start">
                <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Home</a>
                <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>About Us</a>
                <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Our Features</a>
                <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Workouts</a>
                <a className="text-white" href="#"><i className="fa fa-angle-right mr-2"></i>Contact Us</a>
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
            2023 &copy; <a className="text-white font-weight-bold" href="#">Gymlover.in</a>. All Rights Reserved. Designed by
            <a className="text-white font-weight-bold">GymloverDeepak</a>
        </p>
    </div>
</div></>
  )
}

export default Featurs