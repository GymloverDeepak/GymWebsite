import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function NormalLogin() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const localData = [
    {
      user_name: "Deepak",
      user_id: "88da1135-9d3b-4f02-b5ab-84a2735ce713",
    },
    {
      user_name: "Singh Deepak",
      user_id: "2d5a8e8b-7234-4410-9f91-d1e8ad94a98a",
    },
    {
      user_name: "sona KHAN",
      user_id: "2d5a8e8b-7234-4410-9f91-d1e8ad94a98a",
    },
    {
      user_name: "Mahi",
      user_id: "2d5a8e8b-7234-4410-9f91-d1e8ad94a98a",
    },
    {
      user_name: "sandeep",
      user_id: "2d5a8e8b-7234-4410-9f91-d1e8ad94a98a",
    },
  ];
  const removeSpaces = (str) => str.replace(/\s+/g, "");
  const handleSubmit = (e) => {
    e.preventDefault();
    let newUser = username.toLocaleLowerCase();
    const newUserName = removeSpaces(newUser);
    console.log("newUser", newUserName);
    // Basic validation
    if (!newUserName || !password) {
      setError("Please fill in both fields.");
      return;
    }
    let userData = localData.find(
      (user) => removeSpaces(user.user_name.toLocaleLowerCase()) === newUserName
    );
    if (userData) {
      if (password === "123456") {
        setError("");
        localStorage.setItem("uuid", userData.user_id);
        localStorage.setItem("userName", userData.user_name);
        navigate(`/login`);
      } else {
        setError("Invalid Password!");
      }
    } else {
      setError("Invalid User!");
    }
  };
  return (<>
    {/* <div>
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <h3>Login Here</h3>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Email or Phone"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Password"
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Log In</button>
        <div class="social">
          <div class="go">
            <i class="fab fa-google"></i> Google
          </div>
          <div class="fb">
            <i class="fab fa-facebook"></i> Facebook
          </div>
        </div>
      </form>
    </div> */}
    <div className=" d-flex justify-content-center align-items-center vh-100 loginheader bg-white">
      <div className="col-md-4">
        <form onSubmit={handleSubmit} className="border p-4 rounded shadow-lg">
          <h2 className="text-center mb-4 " style={{color:"red"}}>Gym Admin Login</h2>

          {error && <div className="alert alert-danger">{error}</div>}

          <div className="form-group mb-3" style={{color:"white"}}>
            <label htmlFor="email" className="form-label">
             User ID 
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={username}
          onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-group mb-3" style={{color:"white"}}>
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={password}
          onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>

          <div className="text-center mt-3" style={{color:"white"}}>
            <small>
              Don't have an account? <a href="/signup">Sign Up</a>
            </small>
          </div>
        </form>
      </div>
    </div>
    </>

  );
}

export default NormalLogin;
