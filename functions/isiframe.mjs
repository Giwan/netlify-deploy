"use strict";
import processUrl from "../lib/urlProcessor.mjs";

const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Content-Type": "application/json"
}

const isOptionsRequest = function (httpMethod) {
    return /options/i.test(httpMethod);
}

const handler = async (event) => {
    const { queryStringParameters: { url }, httpMethod } = event;

    if (isOptionsRequest(httpMethod)) {
        return {
            statusCode: 200,
            headers,
        }
    }

    try {

        const responseData = await processUrl(url);

        return {
            statusCode: 200,
            body: JSON.stringify(responseData),
            headers

        }

    } catch (err) {
        return { statusCode: 500, body: err.toString() };
    }

};

exports.handler = handler;