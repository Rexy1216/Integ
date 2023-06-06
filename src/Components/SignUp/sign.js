import React from "react";
import { useState } from "react";
import "./sign.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [confirm, setConfirm] = useState('')
  const [hidden, setHidden] = useState(true);
  const [eyeHidden, setEyeHidden] = useState(true);

  function handleClickLogin() {
    if (user && pass && confirm && pass === confirm) {
      axios.post('https://812f-45-202-31-98.ap.ngrok.io/' + 'api/2/register', {
        username: user,
        password: confirm
      })
        .then((response) => {
          console.log(response.data.message)
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

            <div className="user-input">
              <input
                className="user-inputs"
                type={eyeHidden ? "password" : "text"}
                placeholder="Enter your Password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
              <div className="icon-container">
                {eyeHidden ? (
                  <BsEye
                    size={28}
                    color="#2B2B2B"
                    style={{ cursor: "pointer" }}
                    onClick={() => setEyeHidden(!eyeHidden)}
                  />
                ) : (
                  <BsEyeSlash
                    size={28}
                    color="#2B2B2B"
                    style={{ cursor: "pointer" }}
                    onClick={() => setEyeHidden(!eyeHidden)}
                  />
                )}
              </div>
            </div>
          </div>
          <div style={{ marginLeft: 30, marginTop: 20 }}>
            <p style={{ color: "#1E2553", fontSize: 18, fontWeight: "bold" }}>
              Confirm Password
            </p>
            <div className="user-input">
              <input
                className="user-inputs"
                type={hidden ? "password" : "text"}
                placeholder="Confirm your Password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
              />
              <div className="icon-container">
                {hidden ? (
                  <BsEye
                    size={28}
                    color="#2B2B2B"
                    style={{ cursor: "pointer" }}
                    onClick={() => setHidden(!hidden)}
                  />
                ) : (
                  <BsEyeSlash
                    size={28}
                    color="#2B2B2B"
                    style={{ cursor: "pointer" }}
                    onClick={() => setHidden(!hidden)}
                  />
                )}
              </div>
            </div>
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
