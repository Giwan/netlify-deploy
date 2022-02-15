export const hasUrl = function (url) {
    return !url || /iframe\.html/i.test(url);
};

export const prefixHTTPS = (url, isSSL) => {
    if (!url) return;
    url = url.replace(/^http:/i, "https:");
    if (/^https:\/\//i.test(url)) return url;
    if (isSSL) return "https://" + url;
    return "https://" + url;
};
