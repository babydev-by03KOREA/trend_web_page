import './css/common.css';
import React from "react";
import BackButton from "./components/BackButton.jsx";

function ContactPage() {
    return (
        <>
            <BackButton/>
            <div className="main-container">
                <div className="contact-email">
                    MAKEEASY2024@GMAIL.COM
                </div>
            </div>
        </>
    );
}

export default ContactPage;
