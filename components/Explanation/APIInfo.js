import { useState, useEffect } from "react";
import { apiInfoStyle } from "./APIInfo.module.css";

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

const APIInfo = function ({ url }) {
    const apiInfoData = {
        url: "https://mytoori.com",
        iframe: false,
    };

    const [_apiInfoData, setApiInfoData] = useState({});

    const checkIfIframeIsAllowed = async () => {
        if (/iframe\.html/i.test(url)) return;
        const iframeStatus = await iframeService().getIframeStatus(url);
        setApiInfoData(iframeStatus);
    };

    useEffect(() => {
        checkIfIframeIsAllowed();
    }, [url]);

    return (
        <div>
            <h2>API Info</h2>
            <code className={apiInfoStyle}>{JSON.stringify(_apiInfoData)}</code>
        </div>
    );
};

export default APIInfo;
