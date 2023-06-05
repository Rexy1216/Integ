import React from "react";
import "./edit.css"


const EditProfile = () => {
    return (
        <div>
            <div className="top">
                <div className="circle">
                    <p style={{ display: "flex", justifyContent: "center", paddingTop: 80, fontWeight: "bold", fontSize: 20 }}>
                        Edit Profile
                    </p>
                </div>
            </div>
            <div style={{display: "flex", justifyContent: "center", marginTop: 50}}>
                <div className="signp">
                    <div style={{ marginLeft: 30, marginTop: 40 }}>
                        <p style={{ color: '#1E2553', fontSize: 18, fontWeight: "bold" }}>Your Username</p>
                        <input className='user-input' type='text' placeholder='Enter your Username' />
                    </div>
                    <div style={{ marginLeft: 30, marginTop: 20 }}>
                        <p style={{ color: '#1E2553', fontSize: 18, fontWeight: "bold" }}>Password</p>
                        <input className='user-input' type='text' placeholder='Enter your Password' />
                    </div>
                    <div style={{ marginLeft: 30, marginTop: 20 }}>
                        <p style={{ color: '#1E2553', fontSize: 18, fontWeight: "bold" }}>Confirm Password</p>
                        <input className='user-input' type='text' placeholder='Enter your Password' />
                    </div>
                    <div className='login-button'>
                        <p style={{ fontSize: 15, fontWeight: "bold", color: 'white' }} >Save Edit</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile;