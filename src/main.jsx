import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './css/index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TermsOfUsePage from "./TermsOfUsePage.jsx";
import PrivacyPolicyPage from "./PrivacyPolicyPage.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <div className="webContainer">
            <div className="mobileContainer">
                <BrowserRouter basename={"/legal"}>
                    <Routes>
                        <Route path="/" element={<App/>}></Route>
                        <Route path="/terms-of-use" element={<TermsOfUsePage/>}></Route>
                        <Route path="/privacy-policy" element={<PrivacyPolicyPage/>}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    </StrictMode>
)
