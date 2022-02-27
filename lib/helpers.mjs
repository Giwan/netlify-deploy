/**
 * Helper function to easily get the CSP headers
 * @param {Object} headers
 * @returns Array
 */
export const getCSP = function (headers) {
    const csp = headers["content-security-policy"] || "";
    const cspx = headers["x-content-security-policy"] || "";
    return [csp, cspx];
};

/**
 * Check if the iframe is explicitly being allowed
 * by the CSP header.
 * @param {Object} headers
 * @returns Boolean
 */
export const isCSPAllowed = function (headers) {
    const [csp, cspx] = getCSP(headers);
    const reg = new RegExp("iframe", "i");

    const cspIframeAllowed = reg.test(csp) || reg.test(cspx);

    if (cspIframeAllowed) return cspIframeAllowed;
};

/**
 * Check explicitly if the iframe is being
 * blocked by the content security policy (CSP)
 * @param {Object} headers
 * @returns Boolean
 */
export const isCSPBlocked = function (headers) {
    const [csp, cspx] = getCSP(headers);

    // no csp is specified
    if (!(csp || cspx)) return false;

    // CSP is completely blocked
    const reg = new RegExp("none", "i");
    if (reg.test(csp) || reg.test(cspx)) {
        return true;
    }

    // limited to the given site only
    const reg2 = new RegExp("frame-ancestors 'self'", "i");
    if (reg2.test(csp) || reg2.test(cspx)) {
        return true;
    }

    /**
     * The site might indicate their actual url
     * frame-ancestors tweakers.net *.tweakers.net;
     */
    const reg3 = new RegExp("frame-ancestors .+", "i");
    if (reg3.test(csp) || reg3.test(cspx)) return true;
};

/**
 * Combines the functions from above to
 * indicate if the site can be iframed or not.
 * @param {Object} headers
 * @returns Boolean
 */
export const doesUrlAllowIframe = (headers) => {
    if (!headers) return true; // empty headers means Iframe is allowed
    if (Object.keys(headers).length < 1) return true; // no keys means it's also empty

    if (isCSPAllowed(headers)) return true;
    if (isCSPBlocked(headers)) return false; // false if the CSP is explicitly blocked

    let xframeoptions =
        headers["X-Frame-Options"] || headers["x-frame-options"];
    if (/\s/i.test(xframeoptions) || /,/i.test(xframeoptions)) {
        xframeoptions = xframeoptions.split(",")[0];
    }
    const xframeAllow = !Boolean(
        xframeoptions &&
            ["DENY", "SAMEORIGIN", "ALLOW-FROM"].includes(
                xframeoptions.toUpperCase()
            )
    );

    return xframeAllow;
};

export const prefixHTTPS = (url, isSSL) => {
    url = url.replace(/^http:/, "https:");
    if (/^https:\/\//i.test(url)) return url;
    if (isSSL) return "https://" + url;
    return "https://" + url;
};
