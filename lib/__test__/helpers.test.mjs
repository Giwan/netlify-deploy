import { doesUrlAllowIframe } from "../helpers.mjs";
import WHOHeader from "../__mock__/who.int.mock.mjs"; 

/**
 * We can't use jest here for some reason I don't understand yet. 
 * Run this file from Node 
 * or in VSCode run it to set breakpoits CMD+r
 */

if (doesUrlAllowIframe(WHOHeader)) {
    console.error("The who header test failed");
} else {
    console.log("test passed");
}