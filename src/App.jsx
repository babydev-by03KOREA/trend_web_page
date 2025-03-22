import React from 'react';
import './css/App.css';
import TextButton from "./components/TextButton.jsx";
import {Link} from "react-router-dom";

function App() {
    return (
        <div className="app-container">
            <div className="contact-email">
                MAKEEASY2024@GMAIL.COM
            </div>

            <div className="contract">
                <Link to="/terms-of-use">
                    <div className="contract-item">
                        TERMS OF USE
                    </div>
                </Link>
                <div className="divider">
                    |
                </div>
                <Link to="/privacy-policy">
                    <div className="contract-item">
                        PRIVACY POLICY
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default App;
