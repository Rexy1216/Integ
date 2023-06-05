import React from "react";
import "./sign.css";

const Signup = () => {
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
            />
          </div>
          <div className="login-button">
            <p style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>
              Log in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
