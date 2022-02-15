import { resetButton } from "./Reset.module.css";
import { hasUrl } from "../componentHelpers";

const Reset = function({ handleUrlChange, url}) {

    const handleReset = () => handleUrlChange("");
    if (hasUrl(url)) return null;
    return (
        <button className={resetButton} onClick={handleReset}>reset</button>
    )
}

export default Reset;