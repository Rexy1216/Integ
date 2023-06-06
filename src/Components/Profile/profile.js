import React, { useEffect } from "react";
import "./profile.css";
import { BsChevronLeft } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Delete from "../deleteprofile/delele";
import axios from "axios";


const Profile = () => {
  const navigate = useNavigate();
  const { id } = useLocation()
  const [uname, setUname] = useState('')

  useEffect(() => {
    axios.get('' + `api/2/user/${id}`)
      .then((response) => {
        setUname(response.data.username)
      })
  }, [])



  function handleClickBack() {
    navigate(-1);
  }

  function handleClickEdit() {
    navigate("/edit-profile");
  }

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    // setIsModalVisible(true);
    axios.delete('' + 'api/2/delete', {
      data: {
        id: id
      }
    })
      .then((response) => {
        navigate('/')
      })
  };

  return (
    <>
      {/* {isModalVisible && <Delete setAddItem={setIsModalVisible}/>} */}

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
              {`Hello, ${uname}`}
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
          <div className="buttons" style={{ backgroundColor: "#BE6F6F" }} onClick={handleOpenModal}>
            <p style={{ color: "white", fontWeight: "bold" }}>Delete</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
