import React from 'react';
import { useState } from 'react';
import "./delete.css";
import Deleted from './deleted';


const Delete = () => {

    const [isVisible, setIsVisible] = useState(true)
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleCancel = () => {
        window.location = '/profile';
    }
    const handleOpenModal = () => {
        setIsModalVisible(true);
    };


    return (
        <>
            {isModalVisible && <Deleted setAddItem={setIsModalVisible} />}
            <div className='addbg' style={{ animationName: isVisible ? 'modal-active' : 'modal-inactive' }}>
                <div className='additemcontainer'>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <p style={{ marginTop: 40, fontSize: 18, fontWeight: 'bold' }}>Do you want to delete your profile?</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="lineee" />
                    </div>
                    <div style={{display:'flex', justifyContent: 'center'}}>
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