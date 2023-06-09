import React, { useEffect } from "react";
import "./profile.css";
import { BsChevronLeft } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Delete from "../deleteprofile/delele";
import axios from "axios";
import { notify } from "../globalfunction";


const Profile = () => {
  const navigate = useNavigate();
  const { state } = useLocation()
  const [uname, setUname] = useState('')

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/' + `api/2/user/${state.id}`)
      .then((response) => {
        setUname(response.data.username)
      })
    console.log(state.id)
  }, [])



  function handleClickBack() {
    navigate(-1);
  }

  function handleClickEdit() {
    navigate("/edit-profile", { state: { id: state.id } });
  }

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    // setIsModalVisible(true);
    axios.delete('http://127.0.0.1:8000/' + 'api/2/delete', {
      data: {
        id: state.id
      }
    })
      .then((response) => {
        notify(response.data.message, 'success')
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
              {`Hello`}
            </p>
          </div>
        </div>
        <div className="md">
          <p style={{ fontSize: 25, fontWeight: "bold" }}>{uname}</p>
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
