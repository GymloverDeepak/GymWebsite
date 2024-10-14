import React from 'react'
import { Link } from "react-router-dom";
function Workout() {
  return (
    <><div className='bg-white'>
      <div className="video-container">
    <iframe className="background-video" src="https://www.youtube.com/embed/CywaQRHKsTI?autoplay=1&mute=1&loop=1&playlist=CywaQRHKsTI" frameborder="0" allow="autoplay; loop;" allowfullscreen></iframe>
  </div>
        {/* <div className="container-fluid workout-header mb-5 ">
        <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{minHeight: "400px"}}>
            <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Gym Workouts</h4>
            <div className="d-inline-flex">
                <p className="m-0 text-white"><Link className="text-white" to="/">Home</Link></p>
               
            </div>
        </div>
        </div> */}
    {/* <!-- Gym className Start --> */}
  
    <div className="container gym-className mb-5 bg-white" style={{marginTop: "700px"}} >
        <div className="row px-3">
            <div className="col-md-6 p-0">
                <div className="gym-className-box d-flex flex-column align-items-end justify-content-center bg-primary text-right text-white py-5 px-5">
                    <i className="flaticon-six-pack"></i>
                    <h3 className="display-4 mb-3 text-white font-weight-bold">Body Building</h3>
                    <p>
                        Bodybuilding is the use of progressive resistance exercise to control and develop one's muscles by muscle hypertrophy for aesthetic purposes. It is distinct from similar activities such as powerlifting because it focuses on physical appearance instead of strength
                    </p>
                    <a href="" className="btn btn-lg btn-outline-light mt-4 px-4">Start Now</a>
                </div>
            </div>
            <div className="col-md-6 p-0">
                <div className="gym-className-box d-flex flex-column align-items-start justify-content-center bg-secondary text-left text-white py-5 px-5">
                    <i className="flaticon-bodybuilding"></i>
                    <h3 className="display-4 mb-3 text-white font-weight-bold">Muscle Building</h3>
                    <p>
                        What does it mean to build muscle?
Muscle size increases when a person continually challenges the muscles to deal with higher levels of resistance or weight. This process is known as muscle hypertrophy. Muscle hypertrophy occurs when the fibers of the muscles sustain damage or injury.
                    </p>
                    <a href="" className="btn btn-lg btn-outline-light mt-4 px-4">Start Now</a>
                </div>
            </div>
        </div>
    </div>
    <div className="container gym-className mb-5" style={{marginTop: "90px"}}>
        <div className="row px-3">
            <div className="col-md-6 p-0">
                <div className="gym-className-box d-flex flex-column align-items-end justify-content-center bg-primary text-right text-white py-5 px-5">
                    <i className="flaticon-six-pack"></i> 
                    <img className="img-fluid mb-4 mb-lg-0" src="img/Chest.jpg" alt="Image"/>
                    <h3 className="display-4 mb-3 text-white font-weight-bold">Chest- Workout </h3>
                    
                        <li>Barbell Bench Press</li>
                        <li>Dumbbell Bench Press</li>
                        <li>Incline Bench Press</li>
                        <li>Decline Press</li>
                        <li>Machine Chest Press</li>
                        <li>Push-Up</li>
                        <li>Dip</li>
                        <li>Chest Fly</li>
                        <li>Dumbbell Pull-Over</li>
                        <li>Machine Fly</li>
                
                    <a href="" className="btn btn-lg btn-outline-light mt-4 px-4">Start Now</a>
                </div>
            </div>
            <div className="col-md-6 p-0">
                <div className="gym-className-box d-flex flex-column align-items-start justify-content-center bg-secondary text-left text-white py-5 px-5">
                    <img className="img-fluid mb-4 mb-lg-0" src="img/Triceps.jpg" alt="Image"/>
                    <h3 className="display-4 mb-3 text-white font-weight-bold">Triceps-Workout </h3>
                    <li>Close-Grip Bench Press </li>
                    <li>Triceps Dip</li>
                    <li>Bench Dip</li>
                    <li>Triceps Machine Dip</li>
                    <li>Cable Overhead</li>
                    <li>Dumbbell Kick Back </li>
                    <li>Cable Push-Down </li>
                    <li>Board press</li>
                    <li>Sibgle Arm Cable Kick Back </li>
                    <li>Dumbbell OverHead</li>
            
                    <a href="" className="btn btn-lg btn-outline-light mt-4 px-4">Start Now</a>
                </div>
            </div>
        </div>
    </div>
    <div className="container gym-className mb-5" style={{marginTop: "90px"}}>
        <div className="row px-3">
            <div className="col-md-6 p-0">
                <div className="gym-className-box d-flex flex-column align-items-end justify-content-center bg-primary text-right text-white py-5 px-5">
                    <img className="img-fluid mb-4 mb-lg-0" src="img/Back.jpg" alt="Image"/>
                    <h3 className="display-4 mb-3 text-white font-weight-bold">Back - Workout </h3>
                    <li>DaedLift </li>
                        <li>Bent-Over Row</li>
                        <li>Incline Bench Press</li>
                        <li>Pull-Up</li>
                        <li>T-Bar Row</li>
                        <li>Seated Row</li>
                        <li>Single Arm Smith Machine Row</li>
                        <li>Let Pull-Down </li>
                        <li>Dumbbell Pull-Over</li>
                        <li>Chest-Supported Row</li>
                
                    <a href="" className="btn btn-lg btn-outline-light mt-4 px-4">Start Now</a>
                </div>
            </div>
            <div className="col-md-6 p-0">
                <div className="gym-className-box d-flex flex-column align-items-start justify-content-center bg-secondary text-left text-white py-5 px-5">
                    <img className="img-fluid mb-4 mb-lg-0" src="img/Biceps.jpg" alt="Image"/>
                    <h3 className="display-4 mb-3 text-white font-weight-bold">Biceps -Workout </h3>
                    <li>Barbell or EZ-Bar Curl</li>
                    <li>Cable Curl</li>
                    <li>Dumbbell Curl</li>
                    <li>Chin-Up</li>
                    <li>Reverse-Grip Barbell Row</li>
                    <li>Hammer Curl</li>
                    <li>Incline Curl</li>
                    <li>Concentration Curl</li>
                    <li>Preacher Curl</li>
                    <li>Drag Curl</li>
            
                    <a href="" className="btn btn-lg btn-outline-light mt-4 px-4">Start Now</a>
                </div>
            </div>
        </div>
    </div>
    <div className="container gym-className mb-5" style={{marginTop: "90px"}}>
        <div className="row px-3">
            <div className="col-md-6 p-0">
                <div className="gym-className-box d-flex flex-column align-items-end justify-content-center bg-primary text-right text-white py-5 px-5">
                    <img className="img-fluid mb-4 mb-lg-0" src="img/Legs.jpg" alt="Image"/>
                    <h3 className="display-4 mb-3 text-white font-weight-bold">legs workouts</h3>
                    <li>Barbell Back Squat</li>
                    <li>Barbell Front Squat</li>
                    <li>Olympic Lifts: Snatch and Power Clean</li>
                    <li>Deadlift</li>
                    <li>Hack Squat</li>
                    <li>Lunge</li>
                    <li>Leg Press</li>
                    <li>Romanian Deadlift</li>
                    <li>Leg Curl</li>
                    <li>Snatch Pull </li>
            
                    <a href="" className="btn btn-lg btn-outline-light mt-4 px-4">Start Now</a>
                </div>
            </div>
            <div className="col-md-6 p-0">
                <div className="gym-className-box d-flex flex-column align-items-start justify-content-center bg-secondary text-left text-white py-5 px-5">
                    <img className="img-fluid mb-4 mb-lg-0" src="img/naveen.jpg" alt="Image"/>
                    <h3 className="display-4 mb-3 text-white font-weight-bold">Shoulder Workouts</h3>
                    <li>Push-Press</li>
                        <li>Military Press</li>
                        <li>Rear Delt Row</li>
                        <li>Seated Dumbbell Presss</li>
                        <li>Seated Barbell Press</li>
                        <li>Upright Row</li>
                        <li>Arnold Press</li>
                        <li>Rear Delt Fly</li>
                        <li>Lateral Raise</li>
                        <li>Front Raise </li>
                
                    <a href="" className="btn btn-lg btn-outline-light mt-4 px-4">Start Now</a>
                </div>
            </div>
        </div>
    </div>
    <div className="container gym-className mb-5" style={{marginTop: "90px"}}>
        <div className="row px-3">
            <div className="col-md-6 p-0">
                <div className="gym-className-box d-flex flex-column align-items-end justify-content-center bg-primary text-right text-white py-5 px-5">
                    <img className="img-fluid mb-4 mb-lg-0" src="img/Abs.jpg" alt="Image"/>
                    <h3 className="display-4 mb-3 text-white font-weight-bold"> 6 pack Abs workouts</h3>
                    <li>Plank</li>
                    <li>Russian Twists</li>
                    <li>Bicycle Crunch </li>
                    <li>Leg Raise</li>
                    <li>Sit-Up</li>
                    <li>Hanging Leg Raise</li>
                    <li>Hanging Knee Raise</li>
                    <li>Jackknife</li>
                    <li>V-Sit</li>
                    <li>Side Cris-Cross</li>
            
                    <a href="" className="btn btn-lg btn-outline-light mt-4 px-4">Start Now</a>
                </div>
            </div>
            <div className="col-md-6 p-0">
                <div className="gym-className-box d-flex flex-column align-items-start justify-content-center bg-secondary text-left text-white py-5 px-5">
                    <img className="img-fluid mb-4 mb-lg-0" src="img/Weight-Loss.jpg" alt="Image"/>
                    <h3 className="display-4 mb-3 text-white font-weight-bold">Weight-loss Workouts</h3>
                    <li>Plank</li>
                    <li>Fliping</li>
                    <li>Runing </li>
                    <li>Jumping</li>
                    <li>Cycling </li>
                    <li>Hanging Leg Raise</li>
                    <li>Hanging Knee Raise</li>
                    <li>Jackknife</li>
                    <li>V-Sit</li>
                    <li>Side Cris-Cross</li>
                
                    <a href="" className="btn btn-lg btn-outline-light mt-4 px-4">Start Now</a>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Workout