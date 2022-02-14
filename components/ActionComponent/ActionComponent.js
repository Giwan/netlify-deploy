import {
    actionContainer,
    apiButton,
    section,
    sandboxButton,
} from "./ActionComponent.module.css";
import Link from "next/link";

const ActionComponent = function () {
    return (
        <div className={actionContainer}>
            <section className={section}>
                <header>Automation</header>
                <p>
                    Use the API from your existing app. You’ll receive a JSON
                    object indicating if the site will load in an
                    iFrame.
                </p>
                <Link href="/quick-start">

                    <a className={apiButton}>
                        API Quick Start
                    </a>
                </Link>
            </section>
            <section className={section}>
                <header>Manual</header>
                <p>
                    The sandbox let’s you load a given site directly into an
                    iFrame. See detailed header information if the given site is
                    blocked.
                </p>
                <Link href="/sandbox">
                    <a className={sandboxButton}>
                        Demo
                    </a>
                </Link>
            </section>
        </div>
    );
};

export default ActionComponent;
