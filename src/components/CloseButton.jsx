import React from 'react';
import {useNavigate} from 'react-router-dom';
import closeIcon from '../assets/close.png';
import styles from '../css/module/backbutton.module.css';

function CloseButton() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className={styles.navBar}>
            <button className={styles.backButton} onClick={handleBack}>
                <img src={closeIcon} alt="Close" className={styles.backIcon} width={8} height={8}/>
            </button>
        </div>
    );
}

export default CloseButton;
