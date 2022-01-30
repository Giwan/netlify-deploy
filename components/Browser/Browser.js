import { useState, useEffect } from "react";
import {
    browserContainer,
    iframe,
    browserHeader,
    addressBar,
    browserButton,
} from "./Browser.module.css";

const getSearchParamUrl = function (url) {
    const searchParams = new URLSearchParams(window.location.search);
    const qUrl = searchParams.get("url");
    return qUrl || url;
};

const Browser = function ({ url = "iframe.html", setIframeUrl, iframeUrl }) {
    const [_url, setUrl] = useState(url);

    const updateUrl = () => {
        setUrl(getSearchParamUrl(url));
        setIframeUrl(getSearchParamUrl(url));
    };

    useEffect(updateUrl, []);

    const handleChange = (e) => {
        e.preventDefault();
        setUrl(e.currentTarget.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIframeUrl(_url);
    };
    
    return (
        <div className={browserContainer}>
            <form className={browserHeader} onSubmit={handleSubmit}>
                <button className={browserButton}>Reload</button>
                <input
                    type="text"
                    value={_url}
                    onChange={handleChange}
                    className={addressBar}
                    placeholder="https://mytoori.com"
                />
                <button className={browserButton}>Go</button>
            </form>
            <IframeComponent {...{ iframeUrl }} />
        </div>
    );
};

export default Browser;

const IframeComponent = ({ iframeUrl }) => (
    <iframe src={iframeUrl} className={iframe}></iframe>
);
