import React, { useState } from "react";
import {
    quickStartContainer,
    urlParameter,
    apiUrl,
    toggleExampleButton,
    buttonContainer,
    checkItLink
} from "../styles/QuickStart.module.css";
import SiteTitle from "../components/SiteTitle/SiteTitle";
import Link from "next/link";
import { domain } from "../lib/constants";

const responses = [
    {
        url: "https://mytoori.com/",
        iframe: true,
    },
    {
        url: "https://bbc.co.uk/",
        iframe: false,
    },
];

const QuickStart = function () {
    const [position, setPosition] = useState(0);

    const handleClick = () => {
        let newPosition = position + 1;
        if (newPosition >= responses.length) newPosition = 0;
        setPosition(newPosition);
    };

    return (
        <article className={quickStartContainer}>
            <SiteTitle />
            <h1>Quick start</h1>
            <p>
                Consuming the API is fairly easy. Call the end-point below
                directly from your own app and provide the url you would like to
                check.
            </p>
            <p>
                Pass the URL parameter with{" "}
                <code className={urlParameter}>
                    url={responses[position].url}
                </code>
            </p>

            <section className={apiUrl}>
                <code>
                    {domain}/api/isiframe/?
                    <span>url={responses[position].url}</span>
                </code>
            </section>
            <a
                className={checkItLink}
                href={`${domain}/api/isiframe/?url=${responses[position].url}`}
                target="_blank"
                rel="noreferrer noopener"
                alt="open API link example directly in the browser">Check it directly in the browser</a>

            <p>
                Upon receiving the request, an json response is sent back
                indicating if the provided URL can be loaded in an iFrame.
            </p>

            <section className={apiUrl}>
                <code>{JSON.stringify(responses[position])}</code>
            </section>
            <div className={buttonContainer}>
                <button className={toggleExampleButton} onClick={handleClick}>
                    Toggle Example
                </button>
                <Link href="/">
                    <a>back</a>
                </Link>
            </div>
        </article>
    );
};

export default QuickStart;
