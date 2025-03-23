import './css/common.css';
import SizedBox from "./components/SizedBox.jsx";
import React from "react";
import CloseButton from "./components/CloseButton.jsx";

function PrivacyPolicyPage() {
    return (
        <>
            <CloseButton/>
            <div className="main-container">
                <div className="title">PRIVACY POLICY</div>
                <div className="container-wrapper">
                    <div className="title">COLLECTION OF PERSONAL INFORMATION</div>
                    <SizedBox height={"32px"}/>
                    <div className="description">
                        THIS APPLICATION ("THE SERVICE") COLLECTS PERSONAL INFORMATION SUCH AS NAME, EMAIL ADDRESS, AND
                        LOGIN INFORMATION (E.G., APP STORE ID, GOOGLE PLAY ID) REQUIRED TO PROVIDE THE SERVICE. USERS
                        MAY
                        ALSO CHOOSE TO PROVIDE OPTIONAL INFORMATION, INCLUDING PHONE NUMBER, LOCATION DATA, AND PAYMENT
                        INFORMATION, TO ENHANCE THEIR EXPERIENCE.
                    </div>
                    <SizedBox height={"48px"}/>
                    <div className="title">METHODS OF COLLECTING PERSONAL INFORMATION</div>
                    <SizedBox height={"32px"}/>
                    <div className="description">
                        PERSONAL INFORMATION IS COLLECTED DIRECTLY FROM USERS DURING REGISTRATION OR SERVICE USE, AND
                        AUTOMATICALLY THROUGH SERVICE USAGE, INCLUDING LOG DATA, COOKIES, AND DEVICE INFORMATION.
                    </div>
                    <SizedBox height={"48px"}/>
                    <div className="title">PURPOSE OF USING PERSONAL INFORMATION</div>
                    <SizedBox height={"32px"}/>
                    <div className="description">
                        THE COLLECTED PERSONAL INFORMATION IS USED FOR USER AUTHENTICATION, PROVIDING CORE SERVICES,
                        RESPONDING TO INQUIRIES OR COMPLAINTS, SENDING IMPORTANT UPDATES OR MARKETING MATERIALS, AND
                        IMPROVING SERVICE QUALITY THROUGH USAGE PATTERN ANALYSIS.
                    </div>
                    <SizedBox height={"48px"}/>
                    <div className="title">RETENTION OF PERSONAL INFORMATIONY</div>
                    <SizedBox height={"32px"}/>
                    <div className="description">
                        PERSONAL INFORMATION IS RETAINED ONLY FOR THE PERIOD NECESSARY TO FULFILL THE PURPOSES FOR WHICH
                        IT
                        WAS COLLECTED, AND IS PROMPTLY DELETED AFTER THE PURPOSE IS ACHIEVED, EXCEPT WHERE RETENTION IS
                        REQUIRED BY LAW FOR A SPECIFIED PERIOD.
                    </div>
                    <SizedBox height={"48px"}/>
                    <div className="title">DISCLOSURE TO THIRD PARTIES</div>
                    <SizedBox height={"32px"}/>
                    <div className="description">
                        THE APPLICATION DOES NOT SHARE USERS' PERSONAL INFORMATION WITH THIRD PARTIES, EXCEPT WHEN USERS
                        PROVIDE EXPLICIT CONSENT OR WHEN DISCLOSURE IS REQUIRED BY LAW OR GOVERNMENT REGULATIONS.
                    </div>
                    <SizedBox height={"48px"}/>
                    <div className="title">SECURITY MEASURES</div>
                    <SizedBox height={"32px"}/>
                    <div className="description">
                        THE APPLICATION IMPLEMENTS SECURITY MEASURES SUCH AS DATA ENCRYPTION DURING TRANSMISSION AND
                        STORAGE, ACCESS CONTROLS TO RESTRICT AND MINIMIZE ACCESS TO SENSITIVE INFORMATION, AND REGULAR
                        USE
                        OF SECURITY PROGRAMS TO PREVENT MALWARE AND UNAUTHORIZED ACCESS.
                    </div>
                    <SizedBox height={"48px"}/>
                    <div className="title">USER RIGHTS</div>
                    <SizedBox height={"32px"}/>
                    <div className="description">
                        USERS MAY REQUEST ACCESS TO, MODIFICATION OF, OR DELETION OF THEIR PERSONAL INFORMATION AT ANY
                        TIME.
                        THEY MAY ALSO WITHDRAW CONSENT FOR THE PROCESSING OF THEIR PERSONAL INFORMATION. ALL REQUESTS
                        WILL
                        BE HANDLED PROMPTLY THROUGH CUSTOMER SUPPORT.
                    </div>
                    <SizedBox height={"48px"}/>
                    <div className="title">POLICY CHANGES AND NOTIFICATIONS</div>
                    <SizedBox height={"32px"}/>
                    <div className="description">
                        USERS WILL BE NOTIFIED OF ANY CHANGES TO THIS POLICY. MINOR CHANGES WILL BE COMMUNICATED AT
                        LEAST
                        SEVEN DAYS IN ADVANCE, WHILE SIGNIFICANT CHANGES WILL BE COMMUNICATED AT LEAST 30 DAYS IN
                        ADVANCE.
                    </div>

                    {/*<div className="button-container">*/}
                    {/*    <Link to={"/"}>*/}
                    {/*        <div className="button">*/}
                    {/*            <div className="button-text">CONTACT</div>*/}
                    {/*            <img src={nextPageIcon} alt={"GO TO CONTACT PAGE"} width={"7.4px"} height={"12px"}/>*/}
                    {/*        </div>*/}
                    {/*    </Link>*/}
                    {/*    <Link to={"/terms-of-service"}>*/}
                    {/*        <div className="button">*/}
                    {/*            <div className="button-text">TERMS OF USE</div>*/}
                    {/*            <img src={nextPageIcon} alt={"GO TO TERMS OF USE PAGE"} width={"7.4px"} height={"12px"}/>*/}
                    {/*        </div>*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
                </div>
            </div>
        </>
    );
}

export default PrivacyPolicyPage;
