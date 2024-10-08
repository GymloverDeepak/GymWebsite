import React from 'react'
function Feedback() {
  return (
    <div className='bg-white'>
         <div className="col-12 pt-4 container">
                <div className="media bg-secondary text-white mb-4 p-5">
                    <img src="img/user.jpg" alt="Image" className="mr-3 mt-1 rounded-circle p-3 bg-dark" style={{width:"150px"}}/>
                    <div className="media-body">
                        <h4 className="text-primary mb-3">GymloverDeepak</h4>
                        <p className="m-0">my self Deepak , When i started my fitness journey i had a lots of problems and challenges but i never gave up because excuses don't burn calories . so never stop if you want to achieve your goal....(gymlover) </p>
                       <p>Now i am Mr Delhi  In(2023) man Physic</p>
                       <p>Gold Medal in INDIA classNameIC man Physic</p>
                       <p></p> <p>fitness is the only game in the world that we can't buy.  ...we have to do Hard.</p>
                    </div>
                </div>
            </div>
            <div className="col-12 py-4 container">
                <h3 className="mb-4 font-weight-bold">3 Comments</h3>
                <div className="media mb-4">
                    <img src="img/user.jpg" alt="Image1" className="mr-3 mt-1 rounded-circle" style={{width:"60px"}}/>
                    <div className="media-body">
                        <h4>GymloverDeepak <small><i>01 Jan 2023 at 12:00pm</i></small></h4>
                      <p> Thanks </p>
                        <button className="btn btn-sm btn-dark">Reply</button>
                    </div>
                </div>
                <div className="media mb-4">
                    <img src="img/user.jpg" alt="Image2" className="mr-3 mt-1 rounded-circle"
                        style={{width:"60px"}}/>
                    <div className="media-body">
                        <h4>GymloverDeepak <small><i>01 Jan 2023 at 12:00pm</i></small></h4>
                       <p>With'in some days upload new Videos </p>
                        <button className="btn btn-sm btn-dark">Reply</button>
                        <div className="media mt-4">
                            <img src="img/user.jpg" alt="Image3" className="mr-3 mt-1 rounded-circle"
                                style={{width:"60px"}}/>
                            <div className="media-body">
                                <h4>GymloverDeepak <small><i>01 Jan 2023 at 12:00pm</i></small></h4>
                                <p>only you are the best </p>
                                <button className="btn btn-sm btn-dark">Reply</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-4 container">
                <h3 className="mb-4 font-weight-bold">Leave a comment</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name *</label>
                        <input type="text" className="form-control" id="name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input type="email" className="form-control" id="email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="website">Website</label>
                        <input type="url" className="form-control" id="website"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message *</label>
                        <textarea id="message" cols="30" rows="5" className="form-control"></textarea>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Leave Comment" className="btn btn-outline-primary  btn-warning px-3"/>
                    </div>
                </form>
            </div>
    </div>
  )
}

export default Feedback