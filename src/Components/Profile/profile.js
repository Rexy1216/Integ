import React from "react";
import "./profile.css";
import { BsChevronLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  function handleClickBack() {
    navigate(-1);
  }

  function handleClickEdit() {
    navigate("/edit-profile");
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
            HELLO
          </p>
        </div>
      </div>
      <div className="md">
        <p style={{ fontSize: 25, fontWeight: "bold" }}>UserName12345</p>
        <div className="linee" />
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
        <p style={{ fontSize: 20, fontWeight: "bold" }}>Actions</p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="buttons" onClick={handleClickEdit}>
          <p style={{ color: "white", fontWeight: "bold" }}>Edit</p>
        </div>
        <div className="buttons" style={{ backgroundColor: "#BE6F6F" }}>
          <p style={{ color: "white", fontWeight: "bold" }}>Delete</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
