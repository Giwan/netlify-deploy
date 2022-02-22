import React, { useState } from "react";
import {
    quickStartContainer,
    urlParameter,
    apiUrl,
    buttonContainer,
    checkItLink,
    tryExamples,
    urlList,
    buttonList,
    responseContainer
} from "../styles/QuickStart.module.css";
import SiteTitle from "../components/SiteTitle/SiteTitle";
import Link from "next/link";
import { domain } from "../lib/constants";
import { filterUrl } from "../lib/utils";

const responses = [
    {
        url: "https://mytoori.com/",
        iframe: true,
    },
    {
        url: "https://bbc.co.uk/",
        iframe: false,
    },
    {
        url: "https://phys.org/",
        iframe: true,
    },
];

const QuickStart = function () {
    const [_urlObject, setUrlObject] = useState(responses[0]);

    const changeUrl = (newUrl) => {
        const foundUrl = responses.find(({ url }) => {
            const exp = new RegExp(newUrl, "i");
            return exp.test(url);
        });

        foundUrl && setUrlObject(foundUrl);
    }

    return (
        <article className={quickStartContainer}>
            <SiteTitle />
            <h1>Quick start</h1>
            <p>
                Call the end-point below
                from your own app and pass the URL to be
                checked. Pass the URL parameter with{" "}
                <code className={urlParameter}>
                    url={_urlObject.url}
                </code>
            </p>

            <section className={apiUrl}>
                <code>
                    {domain}/api/isiframe/?
                    <span>url={_urlObject.url}</span>
                </code>
            </section>
            <a
                className={checkItLink}
                href={`${domain}/api/isiframe/?url=${_urlObject.url}`}
                target="_blank"
                rel="noreferrer noopener"
                alt="open API link example directly in the browser">Open in new browser tab</a>

            <section className={responseContainer}>
                <p>
                    A <strong>JSON</strong> response will be returned,
                    indicating if the provided URL can be loaded in an iFrame.
                </p>

                <section className={apiUrl}>
                    <code>{JSON.stringify(_urlObject)}</code>
                </section>
            </section>

            <p>
                Use that in your app or website to show a warning or a link to open the site in a new tab.
            </p>

            <section className={tryExamples}>
                <h2>(Other) Examples</h2>
                <p>Click one of these to see it in the code examples above</p>
                <ul className={urlList}>
                    {responses.map(({ url }) => <li
                        key={url}
                        onClick={() => changeUrl(url)}>{filterUrl(url)}</li>)}
                </ul>
            </section>

            <section className={buttonContainer}>
                <ul className={buttonList}>
                    <li>
                    <Link href="/sandbox">
                        <a className="navLink" title="sandbox page">Sandbox</a>
                    </Link>
                    </li>
                    <li>
                    <Link href="/">
                        <a className="navLink" title="return to home page">Back</a>
                    </Link>
                    </li>
                </ul>
            </section>
        </article>
    );
};

export default QuickStart;
