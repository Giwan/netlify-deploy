import { useState } from "react";
import PropTypes from "prop-types";
import {
    browserContainer,
    iframe,
    browserHeader,
    addressBar,
    browserButton,
} from "./Browser.module.css";
import { hasUrl, prefixHTTPS } from "../componentHelpers";

const Browser = function ({ setIframeUrl, iframeUrl: url = "" }) {
    const [_url, setUrl] = useState(url);

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
                    autoCorrect="false"
                    inputMode="url"
                    required
                    pattern=".+\..+"
                    placeholder="Enter a URL to test"
                    title="enter a valid URL here to load it into the iframe below"
                    list="defaultURLs"
                />
                <DataList />
                <button className={browserButton} title="Load url">Go</button>
            </form>
            <IframeComponent {...{ iframeUrl: url }} />
        </div>
    );
};

Browser.propTypes = {
    setIframeUrl: PropTypes.func.isRequired,
    iframeUrl: PropTypes.string.isRequired,
}

export default Browser;

export const IframeComponent = ({ iframeUrl }) => (
    <iframe src={iframeUrl} className={iframe}></iframe>
);

export const DataList = () => (
    <datalist id="defaultURLs">
        <option value="https://mytoori.com/" />
        <option value="https://developer.mozilla.org/" />
        <option value="https://phys.org/" />
        <option value="http://www.bbc.co.uk" />
        <option value="http://web.dev" />
        <option value="http://w3.org/" />
    </datalist>
);
