import './css/common.css';
import SizedBox from "./components/SizedBox.jsx";
import React from "react";
import BackButton from "./components/BackButton.jsx";

function TermsOfServicePage() {
    return (
        <>
            <BackButton/>
            <div className="main-container">
                <div className="title">TERMS OF SERVICE</div>
                <SizedBox height={"32px"}/>
                <div className="title">INFORMATION ACCURACY AND RELIABILITY</div>
                <SizedBox height={"32px"}/>
                <div className="description">
                    THIS APPLICATION ("THE SERVICE") COLLECTS NEAR REAL-TIME DATA FROM TRUSTED THIRD-PARTY PROVIDERS,
                    INCLUDING TAAPI AND OTHER SOURCES. THE SERVICE UTILIZES AI-BASED ANALYSIS, INCLUDING KEY POINT
                    INSIGHTS, TECHNICAL INDICATOR REVIEWS, AND DEDICATED TECHNICAL ANALYSIS, GENERATED VIA THE
                    PERPLEXITY API. WHILE WE STRIVE FOR ACCURACY, COMPLETENESS, AND TIMELINESS, USERS SHOULD BE AWARE
                    THAT DATA AND AI-BASED INSIGHTS MAY VARY SLIGHTLY FROM OTHER SOURCES DUE TO DIFFERENCES IN DATA
                    PROVIDERS, ALGORITHMIC CALCULATIONS, AND MARKET CONDITIONS. TECHNICAL ISSUES, NETWORK INTERRUPTIONS,
                    OR LIMITATIONS OF THIRD-PARTY PROVIDERS MAY RESULT IN TEMPORARY DELAYS OR INCONSISTENCIES, AND THE
                    SERVICE DOES NOT GUARANTEE ERROR-FREE DATA ACCESS OR UNINTERRUPTED SERVICE.
                </div>
                <SizedBox height={"48px"}/>
                <div className="title">DATA ANALYSIS METHODS</div>
                <SizedBox height={"32px"}/>
                <div className="description">
                    THE SERVICE PERFORMS MULTIPLE TYPES OF ANALYSES:
                    COMPREHENSIVE ANALYSIS PROVIDES A DETAILED REVIEW OF A SPECIFIC ASSET (E.G., CRYPTOCURRENCY OR
                    STOCK) BASED ON INFORMATION AND DATA COLLECTED OVER THE LAST WEEK. THIS ANALYSIS INCLUDES AI-BASED
                    KEY POINT INSIGHTS, INDIVIDUAL ASSET MARKET SENTIMENT EVALUATIONS, AND EXAMINATIONS OF RECENT MARKET
                    DEVELOPMENTS.
                    MARKET SENTIMENT ANALYSIS OFFERS AN AI-BASED EVALUATION OF OVERALL MARKET SENTIMENT, INDICATING
                    WHETHER CURRENT CONDITIONS ARE CHARACTERIZED BY EXTREME FEAR, FEAR, GREED, OR EXTREME GREED. THIS
                    INSIGHT IS GENERATED USING DATA FROM MULTIPLE TRUSTED SOURCES AND IS INTENDED TO PROVIDE A GENERAL
                    OVERVIEW OF MARKET CONDITIONS.
                    TECHNICAL ANALYSIS PROVIDES A DEDICATED, DETAILED TECHNICAL REVIEW OF THE ASSET, INCLUDING KEY
                    TECHNICAL INDICATORS SUCH AS RSI, WILLIAMS, MFI, CCI, AND ULTIMATE OSCILLATOR ALONG WITH THEIR
                    TRENDS OVER SPECIFIED TIMEFRAMES. THIS ANALYSIS IS BASED ON NEAR REAL-TIME DATA AND IS DESIGNED TO
                    HELP USERS UNDERSTAND THE ASSET'S TECHNICAL PERFORMANCE.
                    ALL ANALYSES ARE GENERATED VIA THE PERPLEXITY API USING DATA COLLECTED FROM VARIOUS TRUSTED SOURCES.
                    WHILE EVERY EFFORT IS MADE TO ENSURE THE ACCURACY OF THESE ANALYSES, LIMITATIONS IN AI ALGORITHMS OR
                    SOURCE DATA MAY RESULT IN ERRORS OR MISINTERPRETATIONS. USERS SHOULD NOT RELY SOLELY ON THESE
                    INSIGHTS WHEN MAKING INVESTMENT DECISIONS.
                </div>
                <SizedBox height={"48px"}/>
                <div className="title">CHANGES AND DISCONTINUATION</div>
                <SizedBox height={"32px"}/>
                <div className="description">
                    THE FEATURES OF THE SERVICE AND THE INFORMATION PROVIDED MAY BE CHANGED OR UPDATED WITHOUT PRIOR
                    NOTICE. WE RESERVE THE RIGHT TO DISCONTINUE OR LIMIT THE SERVICE AT ANY TIME, WITH NO LIABILITY FOR
                    ANY DAMAGES OR LOSSES RESULTING THEREFROM.
                </div>
                <SizedBox height={"48px"}/>
                <div className="title">REFUND POLICY</div>
                <SizedBox height={"32px"}/>
                <div className="description">
                    USERS MAY CANCEL A PAID SUBSCRIPTION AT ANY TIME. ALL FEES PAID ARE NON-REFUNDABLE. CANCELLATIONS
                    WILL TAKE EFFECT AT THE BEGINNING OF THE NEXT BILLING CYCLE, WHILE USERS CONTINUE TO HAVE ACCESS
                    THROUGH THE CURRENT PAID PERIOD. IF THE SERVICE BECOMES INOPERABLE DUE TO ISSUES ATTRIBUTABLE TO THE
                    SERVICE, USERS MAY REQUEST A REFUND AT OUR SOLE DISCRETION.
                </div>
                <SizedBox height={"48px"}/>
                <div className="title">ABSENCE OF INVESTMENT ADVICE AND LIMITATION OF LIABILITY</div>
                <SizedBox height={"32px"}/>
                <div className="description">
                    ALL DATA, ANALYSIS, AND AI-BASED INSIGHTS PROVIDED BY THIS SERVICE ARE FOR REFERENCE PURPOSES ONLY
                    AND DO NOT CONSTITUTE INVESTMENT ADVICE, FINANCIAL GUIDANCE, OR A SOLICITATION TO BUY OR SELL
                    ASSETS. USERS ACKNOWLEDGE THAT ALL INVESTMENT DECISIONS ARE MADE AT THEIR OWN RISK, AND THAT PAST
                    PERFORMANCE OR ANALYTICAL INSIGHTS DO NOT GUARANTEE FUTURE RESULTS. THIS SERVICE DOES NOT ACT AS A
                    BROKER, EXCHANGE, OR FINANCIAL INTERMEDIARY, NOR DOES IT EXECUTE TRADES OR HOLD FUNDS ON BEHALF OF
                    USERS. ALL INFORMATION IS PROVIDED “AS IS,” WITHOUT ANY EXPRESS OR IMPLIED WARRANTIES, AND USERS
                    ASSUME FULL RESPONSIBILITY FOR ANY RISKS INVOLVED IN INVESTMENT DECISIONS.
                </div>

                {/*<div className="button-container">*/}
                {/*    <Link to={"/"}>*/}
                {/*        <div className="button">*/}
                {/*            <div className="button-text">CONTACT</div>*/}
                {/*            <img src={nextPageIcon} alt={"GO TO CONTACT PAGE"} width={"7.4px"} height={"12px"}/>*/}
                {/*        </div>*/}
                {/*    </Link>*/}
                {/*    <Link to={"/privacy-policy"}>*/}
                {/*        <div className="button">*/}
                {/*            <div className="button-text">PRIVACY POLICY</div>*/}
                {/*            <img src={nextPageIcon} alt={"GO TO PRIVACY POLICY PAGE"} width={"7.4px"} height={"12px"}/>*/}
                {/*        </div>*/}
                {/*    </Link>*/}
                {/*</div>*/}
            </div>
        </>
    );
}

export default TermsOfServicePage;
