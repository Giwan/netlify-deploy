import {
    examplesContainer,
    button,
    buttonList,
    exampleTitle,
} from "./ExampleUrls.module.css";
import { hasUrl } from "../componentHelpers";

const urls = ["phys.org", "bbc.co.uk"];

const ExampleUrls = function ({ url, handleUrlChange }) {
    if (!hasUrl(url)) return null;

    const handleClick = (e) => {
        const url = e.currentTarget.innerText;
        handleUrlChange(url);
    };

    return (
        <div className={examplesContainer}>
            <h3 className={exampleTitle}>Try</h3>
            <div className={buttonList}>
                {urls.map((url) => (
                    <button key={url} className={button} onClick={handleClick}>
                        {url}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ExampleUrls;
