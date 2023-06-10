import React from "react";
import "./registration.css";
import { BiCheckbox, BiCheckSquare } from "react-icons/bi";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { notify } from "../globalfunction";

const Login = ({ navigation, route }) => {
  const [hidden, setHidden] = useState(true);
  const [check, setCheck] = useState(true);


  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  const navigate = useNavigate();

  function handleClickSignUp() {
    navigate("/signup");
  }

  const handleClickLogin = async () => {
    if (user && pass) {
      await axios.post('http://127.0.0.1:8000/' + 'api/2/login', {
        username: user,
        password: pass
      })
        .then((response) => {
          if (response.data.flag === 1) {
            notify(response.data.message, 'success')
            navigate("/profile", { state: { id: response.data.id } });
          }
          else {
            notify(response.data.message, 'warning')
          }
        })
        .catch((e) => {
          notify('Server is not available!', 'warning')
        })
    }
    else {
      notify('Missing Inputs!', 'warning')
    }

  }

  return (
    <div className="main-container">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="cover">
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
            WELCOME!
          </p>
          <p style={{ color: "#B4B8C3", fontSize: 17, marginLeft: 30 }}>
            Log in your account
          </p>
          <div style={{ marginLeft: 30 }}>
            <p
              style={{
                color: "#1E2553",
                marginTop: 20,
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
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
          <div style={{ marginLeft: 30 }}>
            <p
              style={{
                color: "#1E2553",
                marginTop: 20,
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Password
            </p>
            <div className="user-input">
              <input
                className="user-inputs"
                type={hidden ? "password" : "text"}
                placeholder="Enter your Password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
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
          <div style={{ display: "flex", marginTop: 10, marginLeft: 30 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                cursor: "pointer",
              }}
              onClick={() => setCheck(!check)}
            >
              {check ? (
                <BiCheckbox
                  size={28}
                  color="#2B2B2B"
                  style={{ cursor: "pointer" }}
                  onClick={() => setCheck(!check)}
                />
              ) : (
                <BiCheckSquare
                  size={28}
                  color="#2B2B2B"
                  style={{ cursor: "pointer" }}
                  onClick={() => setCheck(!check)}
                />
              )}
              <p
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  marginTop: 3,
                  color: "#1E2553",
                }}
              >
                Remember Me
              </p>
            </div>

            <p
              style={{
                marginLeft: 220,
                fontSize: 17,
                color: "#B4B8C3",
                marginTop: 3,
                cursor: "pointer",
              }}
            >
              Forgot Password?
            </p>
          </div>
          <div className="login-button" onClick={handleClickLogin}>
            <p style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
              Log in
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="line">
              <hr />
            </div>
            <p style={{ fontSize: 17, marginTop: 10, color: "#B4B8C3" }}>or</p>
            <div className="line">
              <hr />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              cursor: "pointer",
            }}
          >
            <div className="social">
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="Logo"
                  className="g-logo"
                />
              </div>
              <div>
                <p>Continue with Google</p>
              </div>
            </div>
            <div className="social">
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"
                  alt="Logo"
                  className="f-logo"
                />
              </div>
              <div>
                <p>Continue with Facebook</p>
              </div>
            </div>
          </div>
          <div
            style={{ display: "flex", marginTop: 35, justifyContent: "center" }}
          >
            <p style={{ fontSize: 17, marginRight: 5 }}>
              Dont have any account?
            </p>
            <p
              style={{ color: "#2967FF", fontSize: 17, cursor: "pointer" }}
              onClick={handleClickSignUp}
            >
              Sign Up
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
