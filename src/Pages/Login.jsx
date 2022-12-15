import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Compunents/Navbar";
import "../Style/Login.css";

const user = {
  name: "user",
  password: "user",
};

const Login = () => {
  const navigate = useNavigate();

  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    if (
      Name.toLocaleUpperCase() === "USER" &&
      Password.toLocaleUpperCase() === "USER"
    ) {
      navigate("/home", { state: user });
    } else {
      alert("Enter valid name and password");
    }
    // if((Name=='')&&(Password='')){
    //   alert('fill the user name and password')
    // }
  };
  return (
    <>
      <div className="Main__body">
        <section class="login" id="login">
          <div class="head">
            <h1 class="company">Door to Door</h1>
          </div>
          <p class="msg">Welcome</p>
          <div class="form">
            <form>
              <input
                value={Name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Username"
                className="text"
              />
              <br />
              <input
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                // placeholder="password"
                className="password"
              />
              <br />
              <button onClick={handleLogin}>Login</button>
              {/* <a href="#" class="btn-login" id="do-login">
              Login
            </a>
            <a href="#" class="forgot">
              Sign Up
            </a> */}
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
