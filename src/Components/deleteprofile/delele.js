import React from 'react';
import { useState } from 'react';
import "./delete.css";
import Deleted from './deleted';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { notify } from '../globalfunction';

const Delete = ({ setModal, id }) => {
    const [isVisible, setIsVisible] = useState(true)
    const navigate = useNavigate()
    const handleCancel = () => {
        setTimeout(() => {
            setIsVisible(false)
        }, 200)
        setModal(false)
    }
    const handleOpenModal = async () => {
        await axios.delete('http://127.0.0.1:8000/' + 'api/2/delete', {
            data: {
                id: id
            }
        })
            .then((response) => {
                notify(response.data.message, 'success')
                setTimeout(() => {
                    setIsVisible(false)
                }, 200)
                setModal(false)
                navigate('/')
                
            })
    };


    return (
        <>
            <div className='addbg' style={{ animationName: isVisible ? 'modal-active' : 'modal-inactive' }}>
                <div className='additemcontainer'>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <p style={{ marginTop: 40, fontSize: 18, fontWeight: 'bold' }}>Do you want to delete your profile?</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="lineee" />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30, }}>
                            <button style={{ cursor: 'pointer', marginRight: 30, width: 85, fontSize: 18, borderRadius: 7, height: 30, fontWeight: 'bold' }} onClick={handleOpenModal}>Yes</button>
                            <button style={{ cursor: 'pointer', width: 85, fontSize: 18, borderRadius: 7, height: 30, fontWeight: 'bold' }} onClick={handleCancel}>No</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Delete;