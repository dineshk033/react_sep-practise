import React, { useState } from "react";

export default function Login() {
  const [userName, setUserName] = useState("xx@gmail.com");
  const [password, setPassword] = useState("");
  function handleLogin() {
    console.log(password, userName);
  }
  return (
    <div className="row  justify-content-center">
      <div className="col-md-5 card p-3">
        <h4>Login</h4>
        <hr />
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Username/Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            value={userName}
            placeholder="name@example.com"
            onChange={(e) => {
              console.log(e);
              setUserName(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            defaultValue={password}
            className="form-control"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}
