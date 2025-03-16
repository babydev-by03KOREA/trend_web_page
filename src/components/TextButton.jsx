import nextPageIcon from "../assets/next.png";
import React from "react";
import {Link} from "react-router-dom";
import styles from '../css/module/button.module.css';

function TextButton({link, text}) {
    return (
        <Link to={`/${link}`}>
            <div className={styles.button}>
                <div className={styles.buttonText}>{text}</div>
                <img src={nextPageIcon} alt={`GO TO ${text} PAGE`} width={"7.4px"} height={"12px"}/>
            </div>
        </Link>
    );
}

export default TextButton;
