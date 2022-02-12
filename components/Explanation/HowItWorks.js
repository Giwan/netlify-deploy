import { howItWorksContainer } from "./HowItWorks.module.css";

const HowItWorks = function () {
    return (
        <article className={howItWorksContainer}>
            <header>
                <h2>Checking request headers</h2>
            </header>
            <p>
                A site owner can use the request headers to indicate if their
                site should not open in an iFrame. Typically the header{" "}
                <strong>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        X-Frame-Options
                    </a>
                </strong>{" "}
                will be set to <strong>DENY</strong> or{" "}
                <strong>SAMEORIGIN</strong>. The recommendation is to use the{" "}
                <a
                    href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Content Security Policy
                </a>{" "}
                however.
            </p>
        </article>
    );
};

export default HowItWorks;
