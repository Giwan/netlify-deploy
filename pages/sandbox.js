import { useState } from "react";
import { sandboxContainer, sandboxHeader, sandboxCloseButton } from "../styles/Sandbox.module.css";
import Browser from "../components/Browser/Browser";
import APIInfo from "../components/Explanation/APIInfo";
import SiteTitle from "../components/SiteTitle/SiteTitle";
// import Report from "../components/Report/Report";

const iframeService = (function () {
    return function () {
        return {
            async getIframeStatus(url) {
                try {
                    const response = await fetch(
                        "/.netlify/functions/isiframe?url=" + url
                    );
                    if (!response.ok) {
                        throw new Error("Failed to reach isIframe end-point");
                    }
                    return await response.json();
                } catch (e) {
                    console.error(e.message);
                }
            },
        };
    };
})();

const Sandbox = function () {
    const [iframeUrl, setIframeUrl] = useState();
    const [_apiInfoData, setApiInfoData] = useState({});

    const handleUrlChange = (url) => {
        setIframeUrl(url); 
        checkIfIframeIsAllowed(url);
    }

    const checkIfIframeIsAllowed = async (url) => {
        if (/iframe\.html/i.test(url)) return;
        const iframeStatus = await iframeService().getIframeStatus(url);
        setApiInfoData(iframeStatus);
    };

    return (
        <div className={sandboxContainer}>
            <header className={sandboxHeader}>
                <SiteTitle />
                <button className={sandboxCloseButton}>+</button>
            </header>
            <APIInfo {...{ url: iframeUrl, apiInfoData: _apiInfoData }} />
            <Browser {...{ setIframeUrl: handleUrlChange, iframeUrl }} />
            {/* <Report /> */}
        </div>
    );
};

export default Sandbox;
