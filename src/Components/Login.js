import React, { useState } from "react";
import { useFirebase } from "../Components/Context/Firebase";

function Login() {
//   const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const myFirebase = useFirebase();
  return (
    <form onSubmit={(event)=> myFirebase.userSignup(event,email,pass)}>
      <img
        className="mb-4"
        src="/docs/5.3/assets/brand/bootstrap-logo.svg"
        alt=""
        width="72"
        height="57"
      />
      <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name" // added autocomplete attribute
        />
        <label>Your Name</label>
      </div>

      <div className="form-floating">
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email" // added autocomplete attribute
        />
        <label>Email address</label>
      </div>

      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          autoComplete="new-password" // Use new-password for signup
        />
        <label>Password</label>
      </div>

      <button className="btn btn-primary w-100 py-2" type="submit">
        Sign up
      </button>
      <p className="mt-5 mb-3 text-body-secondary">
        © Ultimate Fitness Gym 2025–2025
      </p>
    </form>
  );
}

export default Login;
