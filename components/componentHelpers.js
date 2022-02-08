export const hasUrl = function(url) {
    return (
        !url || /iframe\.html/i.test(url)
    )
}