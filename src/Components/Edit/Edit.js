import React, { useEffect } from "react";
import "./edit.css";
import { BsChevronLeft } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from "react";
import Delete from "../deleteprofile/delele";
import axios from "axios";
import { notify } from "../globalfunction";

const EditProfile = () => {
  const [hidden, setHidden] = useState(true);
  const { state } = useLocation()
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [confirm, setConfirm] = useState('')


  const navigate = useNavigate();

  function handleClickBack() {
    navigate(-1);
  }

  useEffect(() => {
    console.log(state.id)
  }, [])

  function handleClickSave() {
    if (user && pass && confirm && pass === confirm) {
      axios.put('http://localhost:8000/' + 'api/2/update', {
        id: state.id,
        username: user,
        password: confirm
      })
        .then((response) => {
          if (response.data.flag === 1) {
            notify(response.data.message, 'success')
            navigate('/profile', { state: { id: state.id } })
          }
          else {
            notify(response.data.message, 'warning')
          }
        })
        .catch(() => {
          notify("Server is not available!", 'warning')
        })
    }
  }

  return (

    <div>
      <div className="top">
        <BsChevronLeft
          size={28}
          color="#2B2B2B"
          style={{
            cursor: "pointer",
            position: "absolute",
            left: 0,
            margin: "20px",
          }}
          onClick={handleClickBack}
        />
        <div className="circle">
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: 80,
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Edit Profile
          </p>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
        <div className="signp">
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
          <div className="login-button" onClick={handleClickSave}>
            <p style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
              Save Edit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
