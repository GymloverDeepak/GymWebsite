import React from 'react'

function About() {
  return (<>
    <body classNameName="bg-white">
  
    {/* <div className="container-fluid p-0 nav-bar">
        <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
            <a href="" className="navbar-brand">
                <h1 className="m-0 display-4 font-weight-bold text-uppercase text-white">Gymlover</h1>
            </a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div className="navbar-nav ml-auto p-4 bg-secondary">
                    <a href="index.html" className="nav-item nav-link">Home</a>
                    <a href="about.html" className="nav-item nav-link active">About Us</a>
                    <a href="feature.html" className="nav-item nav-link">Our Features</a>
                    <a href="className.html" className="nav-item nav-link">Workouts</a>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Diet- Plan </a>
                        <div className="dropdown-menu text-capitalize">
                            <a href="blog.html" className="dropdown-item">Weight-Loss</a>
                            <a href="single.html" className="dropdown-item">Weight-Gain</a>
                        </div>
                    </div>
                    <a href="contact.html" className="nav-item nav-link">Contact</a>
                </div>
            </div>
        </nav>
    </div> */}
   
            <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">About Us</h4>
            <div className="d-inline-flex">
                <p className="m-0 text-white"><a className="text-white" href="">Home</a></p>
                <p className="m-0 text-white px-2">/</p>
                <p className="m-0 text-white">About Us</p>
            </div>
        
    
   
    <div className="container py-5">
        <div className="row align-items-center">
            <div className="col-lg-6">
                <img className="img-fluid mb-4 mb-lg-0" src="img/about.jpg" alt="Image"/>
            </div>
            <div className="col-lg-6">
                <h2 className="display-4 font-weight-bold mb-4">10 Years Experience</h2>
                <p>I have Best Experience and best Knowledge to share With You </p>
                <div className="row py-2">
                    <div className="col-sm-6">
                        <i className="flaticon-barbell display-2 text-primary"></i>
                        <h4 className="font-weight-bold">Certified GYM Center</h4>
                        <p>Ultimate Fitness Gym Dhatir </p>
                    </div>
                    <div className="col-sm-6">
                        <i className="flaticon-medal display-2 text-primary"></i>
                        <h4 className="font-weight-bold">Award Winning</h4>
                        <p>Mr Delhi 2023 in Man Physic  Gold Medal in India classNameic in Man Physic</p>
                    </div>
                </div>
                <a href="" className="btn btn-lg px-4 btn-outline-primary">Learn More</a>
            </div>
        </div>
    </div>
   
    <div className="container-fluid my-5">
        <div className="row">
            <div className="col-lg-4 p-0">
                <div className="d-flex align-items-center bg-secondary text-white px-5"  style={{minHeight:'300px'}}>
                    <i className="flaticon-training display-3 text-primary mr-3"></i>
                    <div className="">
                        <h2 className="text-white mb-3">Progression</h2>
                        <p> I achieved my first Goal in 2023 when i am announced Mr. Delhi in Man Physic 
                        </p>
                        <p> 2nd  achieved my  Goal in 2023 when i am announced Gold Medal For India classNameic  in Man Physic 
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 p-0">
                <div className="d-flex align-items-center bg-primary text-white px-5"  style={{minHeight:'300px'}}>
                    <i className="flaticon-weightlifting display-3 text-secondary mr-3"></i>
                    <div className="">
                        <h2 className="text-white mb-3">Workout</h2>
                        <p>The Pain You Feel Today 
                            Will be The Strength you Feel TOMORROW ! 
                            GymloverDeepak....
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 p-0">
                <div className="d-flex align-items-center bg-secondary text-white px-5" style={{minHeight:'300px'}}>
                    <i className="flaticon-treadmill display-3 text-primary mr-3"></i>
                    <div className="">
                        <h2 className="text-white mb-3"> Diet & Nutrition</h2>
                        <p> i will Provide both natural and supplement Diet Plan 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div className="container pt-5 team">
        <div className="d-flex flex-column text-center mb-5">
            <h4 className="text-primary font-weight-bold">My Transform Journey</h4>
            <h4 className="display-4 font-weight-bold">See  My  Changed Body-Shape</h4>
        </div>
        <div className="row">
            <div className="col-lg-3 col-md-6 mb-5">
                <div className="card border-0 bg-secondary text-center text-white">
                    <img className="card-img-top" src="img/team-1.jpg" alt=""/>
                    <div className="card-social d-flex align-items-center justify-content-center">
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{Height:'40px',width:'40px'}} href="9812087010"><i className="fab fa-whatsapp"></i></a>
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{Height:'40px',width:'40px'}} href="https://www.facebook.com/deepak.kataria.94009?mibextid=ZbWKwL"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{Height:'40px',width:'40px'}} href="https://www.youtube.com/channel/UC7fJQmyoqieFBP7nM_SttFg"><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{Height:'40px',width:'40px'}} href="https://instagram.com/i_gymlover_deepak?igshid=ZGUzMzM3NWJiOQ=="><i className="fab fa-instagram"></i></a>
                    </div>
                    <div className="card-body bg-secondary">
                        <h4 className="card-title text-primary">Gymlover</h4>
                        <p className="card-text">Trainer</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <div className="card border-0 bg-secondary text-center text-white">
                    <img className="card-img-top" src="img/team-2.jpg" alt=""/>
                    <div className="card-social d-flex align-items-center justify-content-center">
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{Height:'40px',width:'40px'}}href="9812087010"><i className="fab fa-whatsapp"></i></a>
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{Height:'40px',width:'40px'}} href="https://www.facebook.com/deepak.kataria.94009?mibextid=ZbWKwL"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{Height:'40px',width:'40px'}} href="https://www.youtube.com/channel/UC7fJQmyoqieFBP7nM_SttFg"><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{Height:'40px',width:'40px'}} href="https://instagram.com/i_gymlover_deepak?igshid=ZGUzMzM3NWJiOQ=="><i className="fab fa-instagram"></i></a>
                    </div>
                    <div className="card-body bg-secondary">
                        <h4 className="card-title text-primary">Gymlover</h4>
                        <p className="card-text">Trainer</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <div className="card border-0 bg-secondary text-center text-white">
                    <img className="card-img-top" src="img/team-3.jpg" alt=""/>
                    <div className="card-social d-flex align-items-center justify-content-center">
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{Height:'40px',width:'40px'}} href="9812087010"><i className="fab fa-whatsapp"></i></a>
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{Height:'40px',width:'40px'}} href="https://www.facebook.com/deepak.kataria.94009?mibextid=ZbWKwL"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{Height:'40px',width:'40px'}} href="https://www.youtube.com/channel/UC7fJQmyoqieFBP7nM_SttFg"><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{Height:'40px',width:'40px'}} href="https://instagram.com/i_gymlover_deepak?igshid=ZGUzMzM3NWJiOQ=="><i className="fab fa-instagram"></i></a>
                    </div>
                    <div className="card-body bg-secondary">
                        <h4 className="card-title text-primary">Gymlover</h4>
                        <p className="card-text">Trainer</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <div className="card border-0 bg-secondary text-center text-white">
                    <img className="card-img-top" src="img/team-4.jpg" alt=""/>
                    <div className="card-social d-flex align-items-center justify-content-center">
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{Height:'40px',width:'40px'}} href="9812087010"><i className="fab fa-whatsapp"></i></a>
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{Height:'40px',width:'40px'}} href="https://www.facebook.com/deepak.kataria.94009?mibextid=ZbWKwL"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{Height:'40px',width:'40px'}} href="https://www.youtube.com/channel/UC7fJQmyoqieFBP7nM_SttFg"><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{Height:'40px',width:'40px'}} href="https://instagram.com/i_gymlover_deepak?igshid=ZGUzMzM3NWJiOQ=="><i className="fab fa-instagram"></i></a>
                    </div>
                    <div className="card-body bg-secondary">
                        <h4 className="card-title text-primary">Gymlover</h4>
                        <p className="card-text">Trainer</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
    <div className="footer container-fluid mt-5 py-5 px-sm-3 px-md-5 text-white">
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
    </div>
  
    <a href="#" className="btn btn-outline-primary back-to-top"><i className="fa fa-angle-double-up"></i></a>


    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>

    <script src="mail/jqBootstrapValidation.min.js"></script>
    <script src="mail/contact.js"></script>

    <script src="js/main.js"></script>
</body>
  </>
    
  )
}

export default About