import { iconTitle } from "./SiteTitle.module.css";
import Link from "next/link";

const SiteTitle = function () {
    return (
    <Link href="/">
        <a title="back to home page" className={iconTitle}>
            iFrame Service
        </a>
    </Link>)
};

export default SiteTitle;
