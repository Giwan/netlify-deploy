import { useState } from "react";
import { sandboxContainer } from "../styles/Sandbox.module.css";
import Browser from "../components/Browser/Browser";
import APIInfo from "../components/Explanation/APIInfo";

const Sandbox = function () {
    const [iframeUrl, setIframeUrl] = useState();
    return (
        <div className={sandboxContainer}>
            <h1>iFrame Service</h1>
            <Browser {...{ setIframeUrl, iframeUrl }} />
            <APIInfo {...{ url: iframeUrl }} />
        </div>
    );
};

export default Sandbox;
