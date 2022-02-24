import React, { useState } from "react";
import {
    quickStartContainer,
    urlParameter,
    apiUrl,
    checkItLink,
    tryExamples,
    urlList,
    responseContainer
} from "../../styles/QuickStart.module.css";

import { domain } from "../../lib/constants";
import { filterUrl } from "../../lib/utils";

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
        <article className={quickStartContainer} style={{padding: 0}}>
            <p>
                Call the end-point and pass the URL parameter with{" "}
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
                    The <strong>JSON</strong> response indicates if the URL can be loaded in an iFrame.
                </p>

                <section className={apiUrl}>
                    <code>{JSON.stringify(_urlObject)}</code>
                </section>
            </section>

            <p>
                Use it in your app or website to show a warning before loading the iFrame.
            </p>

            <section className={tryExamples}>
                <p>Try these</p>
                <ul className={urlList}>
                    {responses.map(({ url }) => <li
                        key={url}
                        onClick={() => changeUrl(url)}>{filterUrl(url)}</li>)}
                </ul>
            </section>

        </article>
    );
};

export default QuickStart;
