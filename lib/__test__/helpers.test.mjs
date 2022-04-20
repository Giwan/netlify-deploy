import { doesUrlAllowIframe } from "../helpers.mjs";
import WHOHeader from "../__mock__/who.int.mock.mjs"; 
import healthHeader from "../__mock__/health.org.mock.mjs"

/**
 * We can't use jest here for some reason I don't understand yet. 
 * Run this file from Node 
 * or in VSCode run it to set breakpoits CMD+r
 */

if (doesUrlAllowIframe(WHOHeader)) {
    console.error("The WHO header test failed");
} else {
    console.log("WHO Header test passed");
}

if (!doesUrlAllowIframe(healthHeader)) {
    console.error("health.org should pass");
} else console.log("health.org header test passed");