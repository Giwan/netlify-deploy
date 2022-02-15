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
                    value={_url ?? url}
                    onChange={handleChange}
                    className={addressBar}
                    spellCheck={false}
                    autoCorrect={false}
                    required
                    pattern=".+\..+"
                    placeholder="https://mytoori.com"
                    title="enter a valid URL here to load it into the iframe below"
                    list="defaultURLs"
                />
                <DataList />
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

const DataList = () => (
    <datalist id="defaultURLs">
        <option value="https://mytoori.com/" />
        <option value="https://developer.mozilla.org/" />
        <option value="https://phys.org/" />
        <option value="http://www.bbc.co.uk" />
        <option value="http://web.dev" />
        <option value="http://w3.org/" />
    </datalist>
)
