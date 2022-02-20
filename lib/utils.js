/**
 * Remove https and the trailing slash from a given 
 * url
 * @param {String} url 
 * @returns 
 */
export const filterUrl = (url) =>  url?.replace(/http.:\/\//, "")?.replace(/\/$/, "");