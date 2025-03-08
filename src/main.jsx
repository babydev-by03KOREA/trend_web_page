import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TermsOfServicePage from "./TermsOfServicePage.jsx";
import PrivacyPolicyPage from "./PrivacyPolicyPage.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <div className="webContainer">
            <div className="mobileContainer">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<App/>}></Route>
                        <Route path="/terms-of-service" element={<TermsOfServicePage/>}></Route>
                        <Route path="/privacy-policy" element={<PrivacyPolicyPage/>}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    </StrictMode>
)
