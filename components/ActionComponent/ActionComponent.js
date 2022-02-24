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
                <p>
                    Verify a site directly into an iFrame alongside it's JSON response.
                </p>
                <Link href="/sandbox">
                    <a className={sandboxButton} title="sandbox / demo page">
                        Demo / Sandbox
                    </a>
                </Link>
            </section>
        </div>
    );
};

export default ActionComponent;
