import { sandboxContainer } from "../styles/Sandbox.module.css";
import Browser from "../components/Browser/Browser";

const Sandbox = function() {
    return (
        <div className={sandboxContainer}>
            <h1>iFrame Service</h1>
            <Browser />
        </div>
    )
}

export default Sandbox;