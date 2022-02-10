import { useState } from "react";
import {
    browserContainer,
    iframe,
    browserHeader,
    addressBar,
    browserButton,
} from "./Browser.module.css";
import { hasUrl, prefixHTTPS } from "../componentHelpers";

const Browser = function ({ setIframeUrl, iframeUrl: url = "" }) {

    const [ _url, setUrl ] = useState(url);

    const handleChange = (e) => {
        e.preventDefault();
        setUrl(e.currentTarget.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (hasUrl(_url)) return;
        const url = prefixHTTPS(_url);
        setIframeUrl(url);
        setUrl(url);
    };
    
    return (
        <div className={browserContainer}>
            <form className={browserHeader} onSubmit={handleSubmit}>
                <button className={browserButton}>Reload</button>
                <input
                    type="text"
                    value={_url || url}
                    onChange={handleChange}
                    className={addressBar}
                    placeholder="https://mytoori.com"
                />
                <button className={browserButton}>Go</button>
            </form>
            <IframeComponent {...{ iframeUrl: url }} />
        </div>
    );
};

export default Browser;

const IframeComponent = ({ iframeUrl }) => (
    <iframe src={iframeUrl} className={iframe}></iframe>
);
