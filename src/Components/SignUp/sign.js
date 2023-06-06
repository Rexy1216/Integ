import React from "react";
import { useState } from "react";
import "./sign.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [confirm, setConfirm] = useState('')

  function handleClickLogin() { 
    if (user && pass && confirm && pass === confirm) {
      axios.post('' + 'api/2/regsiter', {
        username: user,
        password: confirm
      })
    }
    navigate(-1);
  }
  return (
    <div className="main-container">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="signcnt">
          <p
            style={{
              fontSize: 25,
              fontWeight: "bold",
              marginTop: 40,
              color: "#1E2553",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Sign Up
          </p>
          <div style={{ marginLeft: 30, marginTop: 40 }}>
            <p style={{ color: "#1E2553", fontSize: 18, fontWeight: "bold" }}>
              Your Username
            </p>
            <input
              className="user-input"
              type="text"
              placeholder="Enter your Username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
          <div style={{ marginLeft: 30, marginTop: 20 }}>
            <p style={{ color: "#1E2553", fontSize: 18, fontWeight: "bold" }}>
              Password
            </p>
            <input
              className="user-input"
              type="text"
              placeholder="Enter your Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div style={{ marginLeft: 30, marginTop: 20 }}>
            <p style={{ color: "#1E2553", fontSize: 18, fontWeight: "bold" }}>
              Confirm Password
            </p>
            <input
              className="user-input"
              type="text"
              placeholder="Enter your Password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>
          <div className="login-button" onClick={handleClickLogin}>
            <p style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
              Sign up
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
