import React from 'react';
import './css/App.css';
import TextButton from "./components/TextButton.jsx";

function App() {
    return (
        <div className="app-container">
            <div className="app-button-container">
                <TextButton link={"contact"} text={"CONTACT"} />
                <TextButton link={"privacy-policy"} text={"PRIVACY POLICY"} />
                <TextButton link={"terms-of-service"} text={"TERMS OF USE"} />
            </div>
        </div>
    );
}

export default App;
