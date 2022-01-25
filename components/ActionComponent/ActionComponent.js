import { actionContainer, apiButton, section, sandboxButton } from "./ActionComponent.module.css";

const ActionComponent = function () {
    return (
        <div className={actionContainer}>
            <section className={section}>
                <header>Automation</header>
                <p>Use the API from your existing app. You’ll receive a JSON object back indicating if the site can be opened in an iFrame or not. </p>
                <button className={apiButton}>API</button>
            </section>
            <section className={section}>
                <header>Manual</header>
                <p>The sandbox let’s you load a given site directly into an iFrame. See detailed header information why the give site is not blocked or not.</p>
                <a href="/sandbox" className={sandboxButton}>Sandbox</a>
            </section>
        </div>
    )
}

export default ActionComponent;