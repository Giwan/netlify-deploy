import React, { useState } from "react";
import {
    quickStartContainer,
    urlParameter,
    apiUrl,
    toggleExampleButton,
    buttonContainer,
} from "../styles/QuickStart.module.css";
import SiteTitle from "../components/SiteTitle/SiteTitle";
import Link from "next/link";

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
            <p>
                Consuming the API is relatively simple. Call the end-point below
                directly from your own app and provide the url you would like to
                check. The API responds with a JSON object.
            </p>
            <p>
                Provide the URL parameter with{" "}
                <code className={urlParameter}>
                    url={responses[position].url}
                </code>
            </p>

            <section className={apiUrl}>
                <code>
                    https://iframe-allowed.netlify.app/api/isiframe/?
                    <span>url={responses[position].url}</span>
                </code>
            </section>

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
