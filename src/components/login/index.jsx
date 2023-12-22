import React, { useState } from "react";
import { loginSchema, passwordMatch } from "../../shared";

export default function Login() {
  const [form, setForm] = useState({
    userName: "",
    password: "",
  });
  const [error, setError] = useState({ userName: "", password: "" });
  // const [userName, setUserName] = useState("xx@gmail.com");
  // const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const yupERROR = await loginSchema.validate(form, { abortEarly: false });
      console.log(yupERROR);
    } catch (err0r) {
      console.log(err0r.errors);
      //create temporary error object
      const newErrors = {};
      // console.log(err0r.errors);
      // console.log(err0r.inner);
      err0r.inner.forEach((error) => {
        const key = error.path;
        //comparing already key present, if found i never ovride the value again
        if (!(key in newErrors)) {
          newErrors[error.path] = error.message;
        }
      });
      setError(newErrors);
      console.log(newErrors);
    }

    // if (!form.userName) {
    //   setError({ ...error, userName: "Username is requierd" });
    // }
    // if (!passwordMatch(form.password)) {
    //   setError({ ...error, password: "Password doesn't meet requirement" });
    // }
    console.log(form.password, form.userName);
  }
  function handleChange(e) {
    // console.log(e.target.name);
    const key = e.target.name;
    const value = e.target.value;
    switch (key) {
      case "userName":
        if (value) {
          setError({ ...error, userName: "" });
        }
        // setForm({ ...form, [key]: e.target.value });
        break;
      default:
        if (passwordMatch(form.password)) {
          setError({ ...error, password: "" });
        }
        break;
    }
    setForm({ ...form, [key]: e.target.value });
  }

  function handleReset() {
    setForm({
      userName: "",
      password: "",
    });
  }
  // console.log(form);
  return (
    <div className="row  justify-content-center">
      <form className="col-md-5 card p-3">
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
            value={form.userName}
            name="userName"
            placeholder="name@example.com"
            onChange={handleChange}
          />
          {error.userName && (
            <small className="text-danger">{error.userName}</small>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            defaultValue={form.password}
            name="password"
            className="form-control"
            id="password"
            onChange={handleChange}
          />
          {error.password && (
            <small className="text-danger">{error.password}</small>
          )}
        </div>
        <button className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>{" "}
        <button
          className="btn btn-warning d-block mt-2"
          type="reset"
          onClick={handleReset}
        >
          Reset
        </button>
      </form>
    </div>
  );
}
