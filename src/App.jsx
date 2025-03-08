import React from 'react';
import './App.css';
import nextPageIcon from './assets/next.png';
import {Link} from "react-router-dom";

function App() {
    return (
        <div className="main-container">
            <div className="contact-email">
                MAKEEASY2024@GMAIL.COM
            </div>
            <div className="button-container">
                <Link to={"/privacy-policy"}>
                <div className="button">
                    <div className="button-text">PRIVACY POLICY</div>
                    <img src={nextPageIcon} alt={"GO TO PRIVACY POLICY PAGE"} width={"7.4px"} height={"12px"}/>
                </div>
                </Link>
                <Link to={"/terms-of-service"}>
                    <div className="button">
                        <div className="button-text">TERMS OF USE</div>
                        <img src={nextPageIcon} alt={"GO TO TERMS OF USE PAGE"} width={"7.4px"} height={"12px"}/>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default App;
