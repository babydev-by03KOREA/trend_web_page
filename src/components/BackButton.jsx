import React from 'react';
import {useNavigate} from 'react-router-dom';
import backIcon from '../assets/back.png';
import styles from '../css/module/backbutton.module.css';

function BackButton() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className={styles.navBar}>
            <button className={styles.backButton} onClick={handleBack}>
                <img src={backIcon} alt="Back" className={styles.backIcon} width={7.5} height={12}/>
            </button>
        </div>
    );
}

export default BackButton;
