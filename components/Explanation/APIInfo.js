import { textAreaStyle, infoContainer, urlMessage, apiInfoTitle, apiResult, apiStatusContainer } from "./APIInfo.module.css";

const hasUrl = function(url) {
    return (
        !url || /iframe\.html/i.test(url)
    )
}


const APIInfo = function ({ url, apiInfoData }) {
    return (
        <div className={infoContainer}>
            <ApiStatus {...{apiInfoData}} />
            <ApiResult {...{ apiInfoData, url }} />
        </div>
    );
};

export default APIInfo;

const icons = ["❌", "👍"];

const ApiStatus = function({ apiInfoData }) {
    return (
        <div className={apiStatusContainer}>
            <h3 className={apiInfoTitle}>API Response</h3>
            <div>{icons[Number(apiInfoData?.iframe)]}</div>
        </div>
    )
}

const iframeOptions = ["URL blocked from iFrame", "URL can be loaded in an iFrame"];

const ApiResult = function ({ apiInfoData, url }) {
    if (hasUrl(url)) return null;
    return (
        <div className={apiResult}>
            <textarea className={textAreaStyle} value={JSON.stringify(apiInfoData)} disabled={true}></textarea>
            <div className={urlMessage}>{iframeOptions[Number(apiInfoData.iframe)]}</div>
        </div>
    )
}