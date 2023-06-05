import React from "react";
import "./profile.css"


const Profile = () => {
    return (
        <div>
            <div className="top">
                <div className="circle">
                    <p style={{ display: "flex", justifyContent: "center", paddingTop: 80, fontWeight: "bold", fontSize: 20 }}>
                        HELLO UserName
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
            <div style={{ display: "flex", justifyContent: "center", }}>
                <div className="buttons">
                    <p style={{ color: "white", fontWeight: "bold" }}>Edit</p>
                </div>
                <div className="buttons" style={{ backgroundColor: '#BE6F6F' }}>
                    <p style={{ color: "white", fontWeight: "bold" }}>Delete</p>
                </div>
            </div>
        </div>
    )
}

export default Profile;