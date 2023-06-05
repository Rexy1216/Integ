import React from "react";
import "./edit.css";
import { BsChevronLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from "react";

const EditProfile = () => {
  const [hidden, setHidden] = useState(true);

  const navigate = useNavigate();

  function handleClickBack() {
    navigate(-1);
  }

  function handleClickSave() {
    navigate("/profile");
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
            <div className="user-input">
              <input
                className="user-inputs"
                type={hidden ? "password" : "text"}
                placeholder="Confirm your Password"
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
