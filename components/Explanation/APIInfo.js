import {
    textAreaStyle,
    infoContainer,
    urlMessage,
    apiInfoTitle,
    apiResult,
    apiStatusContainer,
} from "./APIInfo.module.css";
import { hasUrl } from "../componentHelpers";
import ExampleUrls from "./ExampleUrls";
import Reset from "./Reset";

const APIInfo = function ({ url, apiInfoData, handleUrlChange }) {
    return (
        <div className={infoContainer}>
            <ApiStatus {...{ apiInfoData }} />
            <ApiResult {...{ apiInfoData, url }} />
            <ExampleUrls {...{ url, handleUrlChange }} />
            <Reset {...{ url, handleUrlChange }} />
        </div>
    );
};

export default APIInfo;

const icons = ["❌", "👍"];

const ApiStatus = function ({ apiInfoData }) {
    return (
        <div className={apiStatusContainer}>
            <h3 className={apiInfoTitle}>API Response</h3>
            <div>{icons[Number(apiInfoData?.iframe)]}</div>
        </div>
    );
};

const iframeOptions = [
    "URL blocked from iFrame",
    "URL can be loaded in an iFrame",
];

const ApiResult = function ({ apiInfoData, url }) {
    if (hasUrl(url)) return null;
    return (
        <div className={apiResult}>
            <textarea
                className={textAreaStyle}
                value={JSON.stringify(apiInfoData)}
                disabled={true}
            ></textarea>
            <div className={urlMessage}>
                {iframeOptions[Number(apiInfoData?.iframe)]}
            </div>
        </div>
    );
};
