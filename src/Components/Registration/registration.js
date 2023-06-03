import React from "react";
import "./registration.css"
import { BiCheckbox } from "react-icons/bi";
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import logo from "./logo.png";


const Registration = () => {

    const [hidden, setHidden] = useState(true)
    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: 70 }}>
            <div className="cover">
                <p style={{ fontSize: 25, fontWeight: "bold", marginTop: 40, color: '#1E2553', display: "flex", justifyContent: "center", alignItems: "center" }}>WELCOME!</p>
                <p style={{ color: '#B4B8C3', fontSize: 18, marginLeft: 30 }}>Log in your account</p>
                <div style={{ marginLeft: 30 }}>
                    <p style={{ color: '#1E2553', marginTop: 20, fontSize: 18, fontWeight: "bold" }}>Your Username</p>
                    <input className='user-input' type='text' placeholder='Enter your Username' />
                </div>
                <div style={{ marginLeft: 30 }}>
                    <p style={{ color: '#1E2553', marginTop: 20, fontSize: 18, fontWeight: "bold" }}>Password</p>
                    <div style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>
                        <input className='user-input' type='text' placeholder='Enter your Password' />
                        <div className='icon-container'>
                            {hidden ?
                                <BsEyeFill size={28} color='#2B2B2B' style={{ cursor: 'pointer' }} onClick={() => setHidden(false)} /> :
                                <BsEyeSlashFill size={28} color='#2B2B2B' style={{ cursor: 'pointer' }} onClick={() => setHidden(true)} />
                            }
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: 10, marginLeft: 30 }}>
                    <BiCheckbox size={28} style={{ cursor: "pointer" }} />
                    <p style={{ fontSize: 18, fontWeight: "bold", marginTop: 3, color: '#1E2553' }}>Remember Me</p>
                    <p style={{ marginLeft: 220, fontSize: 18, color: '#B4B8C3', marginTop: 3, cursor: "pointer" }}>Forgot Password?</p>
                </div>
                <div className='login-button'>
                    <p style={{ fontSize: 15, fontWeight: "bold", color: 'white' }} >Log in</p>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div className="line">
                        <hr />
                    </div>
                    <p style={{ marginTop: 10, color: '#B4B8C3' }}>or</p>
                    <div className="line">
                        <hr />
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", cursor: "pointer" }}>
                    <div className="social">
                        <p>Continue with Google</p>
                    </div>
                    <div className="social">
                        <p>Continue with Facebook</p>
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: 35, justifyContent: "center" }}>
                    <p style={{ fontSize: 18, marginRight: 5 }}>Dont have any account?</p>
                    <p style={{ color: '#2967FF', fontSize: 18, cursor: "pointer" }}>Sign Up</p>
                </div>
            </div>

        </div>
    )
}
export default Registration;