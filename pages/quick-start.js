import React, { useState } from "react";
import {
    quickStartContainer,
    urlParameter,
    apiUrl,
    buttonContainer,
    checkItLink,
    tryExamples,
    urlList,
    buttonList
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
                Consuming the API as follows. Call the end-point below
                from your own app and provide the url you would like to
                check.
            </p>
            <p>
                Pass the URL parameter with{" "}
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

            <p>
                Upon receiving the request, an json response is sent back
                indicating if the provided URL can be loaded in an iFrame.
            </p>

            <section className={apiUrl}>
                <code>{JSON.stringify(_urlObject)}</code>
            </section>

            <section className={tryExamples}>
                <h2>(Other) Examples</h2>
                <ul className={urlList}>
                    {responses.map(({ url }) => <li
                        key={url}
                        onClick={() => changeUrl(url)}>{filterUrl(url)}</li>)}
                </ul>
            </section>

            <section className={buttonContainer}>
                <h2>The sandbox shows API result and iFrame side by side</h2>
                <ul className={buttonList}>
                    <li>
                    <Link href="/sandbox">
                        <a>sandbox</a>
                    </Link>
                    </li>
                    <li>
                    <Link href="/">
                        <a>back</a>
                    </Link>
                    </li>
                </ul>
            </section>
        </article>
    );
};

export default QuickStart;
