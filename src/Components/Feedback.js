import React, { useState } from "react";

function Feedback() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [reply, setReply] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [items, setItems] = useState([
    {
      name: "GymloverDeepak",
      id: "003",
      reply: "Thanks",
      date: "01 Jan 2023 at 12:00pm",
      email: "deepakGymlover@gmail.com",
    },
    {
      name: "Naveen Dagar",
      id: "005",
      reply: "Superb",
      date: "01 Jan 2023 at 12:00pm",
      email: "naveendagar@gmail.com",
    },
    {
      name: "Pawan Dagar",
      id: "004",
      reply: "Nice",
      date: "01 Jan 2023 at 12:00pm",
      email: "pawandagar@gmail.com",
    },
  ]);

  const replySubmit = (e) => {
    e.preventDefault();

    const newData = {
      name: name,
      id: items.length + 1, // Use the next available id
      reply: reply,
      date: new Date().toLocaleString(), // Automatically set date and time
      email: email,
    };

    // Add new comment to items
    setItems((prevItems) => [...prevItems, newData]);

    // Clear the form
    setName("");
    setReply("");
    setDate("");
    setEmail("");
  };

  return (
    <div className="bg-white">
      <div className="col-12 pt-4 container">
        <div className="media bg-secondary text-white mb-4 p-5">
          <img
            src="img/user.jpg"
            alt="Image"
            className="mr-3 mt-1 rounded-circle p-3 bg-dark"
            style={{ width: "150px" }}
          />
          <div className="media-body">
            <h4 className="text-primary mb-3">GymloverDeepak</h4>
            <p className="m-0">
              My name is Deepak. When I started my fitness journey, I had many
              challenges, but I never gave up because excuses don’t burn
              calories. So never stop if you want to achieve your goal...
              (gymlover).
            </p>
            <p>Now I am Mr. Delhi (2023) in Men's Physique</p>
            <p>Gold Medal in INDIA Classic Men's Physique</p>
            <p>
              Fitness is the only game in the world that we can't buy. We have
              to work hard.
            </p>
          </div>
        </div>
      </div>

      <div className="col-12 py-4 container">
        <h3 className="mb-4 font-weight-bold">{items.length} Comments</h3>
        {items.map((item, index) => (
          <div className="media mb-4" key={index}>
          <img src="img/profile.avif" alt="Image2" className="mr-3 mt-1 rounded-circle"
                        style={{width:"60px"}}/>
            <div className="media-body">
              <h4>
                {item.name} <small><i>{item.date}</i></small>
              </h4>
              <p>Email: {item.email}</p>
              <p>{item.reply}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="col-4 container">
        <h3 className="mb-4 font-weight-bold">Leave a comment</h3>
        <form onSubmit={replySubmit}>
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="reply">Reply *</label>
            <input
              type="text"
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              name="reply"
              id="reply"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-outline-primary btn-warning px-3"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Feedback;
